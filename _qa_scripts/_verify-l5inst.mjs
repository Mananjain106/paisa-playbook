import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const BASE = 'http://localhost:5199'
const src = readFileSync('src/data/chapters/l5-inst.ts', 'utf8')

/** Labs in this batch whose controls are choice buttons rather than sliders. */
const NO_SLIDER = ['l5-040', 'l5-042']

const LABS = {
  'l5-040': 'Regulator finder',
  'l5-041': 'Depositor checklist',
  'l5-042': 'Intermediary verification lab',
  'l5-043': 'Insurer and claim verification lab',
  'l5-044': 'Pension account lab',
  'l5-045': 'Bank comparison lab',
  'l5-046': 'Non-bank lender check',
  'l5-047': 'Insurer scorecard',
  'l5-048': 'Asset manager diligence lab',
  'l5-049': 'Exchange settlement lab',
}

/** Pull the opening of `field: '...'` for one chapter id out of the TS source. */
function field(id, key, len) {
  const start = src.indexOf(`id: '${id}'`)
  if (start < 0) return ''
  const at = src.indexOf(`${key}: '`, start)
  if (at < 0) return ''
  let v = src.slice(at + key.length + 3, at + key.length + 3 + len)
  const q = v.indexOf("'")
  if (q >= 0) v = v.slice(0, q)
  return v.replace(/\\+$/, '')
}

const CHAPTERS = Object.keys(LABS).map((id) => ({
  id,
  lab: LABS[id],
  subtitle: field(id, 'subtitle', 40),
  takeaway: field(id, 'takeaway', 30),
  question: field(id, 'q', 40),
}))

const BAD = [
  ['backslash', /\\/],
  ['escaped quote', /\\['"]/],
  ['NaN', /\bNaN\b/],
  ['undefined', /\bundefined\b/],
  ['null literal', /\bnull\b/],
  ['unrendered entity', /&[a-z#][a-z0-9]{1,6};/i],
  ['placeholder', /TODO|Lorem/],
]

const browser = await chromium.launch()
let failures = 0
const report = []
const sceneTexts = new Map()

for (const c of CHAPTERS) {
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))
  await page.goto(`${BASE}/chapter/${c.id}`, { waitUntil: 'networkidle' })
  await page.getByText(c.lab, { exact: false }).first().waitFor({ timeout: 20000 }).catch(() => {})
  await page.waitForTimeout(1000)
  await page.getByText(c.lab, { exact: false }).first().scrollIntoViewIfNeeded().catch(() => {})
  await page.waitForTimeout(500)
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 700) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 50))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(700)

  const body = await page.locator('body').innerText()
  const svgCount = await page.locator('svg[viewBox="0 0 400 220"]').count()
  const ranges = await page.locator('input[type="range"]').count()
  const svgText = await page
    .locator('svg[viewBox="0 0 400 220"]')
    .first()
    .evaluate((el) => el.textContent ?? '')
    .catch(() => '')
  sceneTexts.set(c.id, svgText.replace(/\s+/g, ' ').trim())

  const missing = []
  if (!body.includes(c.lab)) missing.push('lab')
  if (c.subtitle && !body.includes(c.subtitle)) missing.push('subtitle')
  if (c.takeaway && !body.includes(c.takeaway)) missing.push('takeaway')
  if (c.question && !body.includes(c.question)) missing.push('quiz question')
  if (!/https:\/\/[a-z.]*\.(gov|org|com|in)\//.test(body)) missing.push('source link')
  const artifacts = BAD.filter(([, re]) => re.test(body)).map(([n]) => n)
  const words = body.split(/\s+/).length

  // Two labs in this batch are driven by choices rather than sliders (the
  // regulator finder and the intermediary verification drill); the rest expose
  // at least four sliders. Both forms are exercised by the drills below.
  const controls = ranges >= 3 || NO_SLIDER.includes(c.id)
  const ok =
    svgCount >= 1 && controls && missing.length === 0 && artifacts.length === 0 && errors.length === 0
  if (!ok) failures++
  report.push({ id: c.id, svgCount, ranges, words, missing, artifacts, consoleErrors: errors, ok })
  await page.close()
}

// Every chapter must own a visually distinct illustration.
const seen = new Map()
for (const [id, text] of sceneTexts) {
  if (!text) {
    failures++
    report.push({ id, distinctScene: 'EMPTY' })
    continue
  }
  if (seen.has(text)) {
    failures++
    report.push({ id, distinctScene: `same as ${seen.get(text)}` })
  } else seen.set(text, id)
  sceneTexts.set(id, text.slice(0, 58))
}

async function interact(c, act, expect, name) {
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  await page.goto(`${BASE}/chapter/${c}`, { waitUntil: 'networkidle' })
  await page.getByText(LABS[c], { exact: false }).first().waitFor({ timeout: 20000 })
  await page.getByText(LABS[c], { exact: false }).first().scrollIntoViewIfNeeded()
  await page.waitForTimeout(1200)
  const before = await page.locator('body').innerText()
  await act(page)
  await page.waitForTimeout(600)
  const after = await page.locator('body').innerText()
  const flat = after.toLowerCase()
  const changed = before !== after
  const hit = expect.every((s) => flat.includes(s.toLowerCase()))
  if (!changed || !hit) {
    failures++
    console.log(`${name}: FAILED (changed=${changed}, missing=${expect.filter((s) => !flat.includes(s.toLowerCase()))})`)
  } else console.log(`${name}: ok`)
  await page.close()
}

// Each lab with sliders must react to its own first control.
for (const { id, lab } of CHAPTERS) {
  if (NO_SLIDER.includes(id)) continue
  await interact(id, async (p) => {
    const el = p.locator('input[type="range"]').first()
    const min = await el.getAttribute('min')
    await el.fill(String(min ?? 0))
  }, [], `${id} ${lab} first control`)
}

// Targeted drills: change one control and read the lesson back out of the lab.
await interact('l5-040', async (p) => {
  await p.getByRole('button', { name: 'A gold loan from a lender' }).click()
}, ['register of non-bank financial companies', 'banking ombudsman'], 'l5-040 product-map drill')

await interact('l5-041', async (p) => {
  await p.getByLabel('Days since the complaint to the bank').fill('10')
}, ['give the bank its window'], 'l5-041 ombudsman-window drill')

await interact('l5-042', async (p) => {
  await p.getByRole('button', { name: 'A guaranteed return on a market-linked product' }).click()
  await p.getByRole('button', { name: 'A request for your login, one-time password or card details' }).click()
  await p.getByRole('button', { name: 'No registration number anywhere on the site or app' }).click()
}, ['three or more flags'], 'l5-042 red-flag drill')

await interact('l5-043', async (p) => {
  await p.getByLabel('Months since the insurer refused').fill('18')
}, ['route has closed'], 'l5-043 ombudsman-deadline drill')

await interact('l5-044', async (p) => {
  await p.getByLabel('Taken as a lump sum at exit').fill('80')
}, ['20% is inside the rules'], 'l5-044 annuity-floor drill')

await interact('l5-045', async (p) => {
  await p.getByLabel('Payments bank balance').fill('500000')
}, ['may hold at most'], 'l5-045 payments-bank-ceiling drill')

await interact('l5-046', async (p) => {
  await p.getByRole('button', { name: 'App names the lender' }).click()
}, ['does not name the lender behind it'], 'l5-046 lender-disclosure drill')

await interact('l5-047', async (p) => {
  await p.getByLabel('Solvency ratio').fill('1.2')
}, ['below the 150%'], 'l5-047 solvency-floor drill')

await interact('l5-048', async (p) => {
  await p.getByLabel('Time this manager has run it').fill('0')
}, ['built by somebody else'], 'l5-048 manager-tenure drill')

await interact('l5-049', async (p) => {
  await p.getByRole('button', { name: 'Broker fails before settlement' }).click()
}, ['clearing corporation still completes it'], 'l5-049 settlement-guarantee drill')

// Level page: count of authored chapters, and the new rows must be readable, not stubs.
{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  const body = await page.locator('body').innerText()
  const count = /49 of 161/.test(body)
  const started = (body.match(/Not started/g) ?? []).length
  const soon = (body.match(/Coming soon/g) ?? []).length
  const ok = count && started === 49 && soon === 112
  if (!ok) failures++
  console.log(`level page 49/161: ${count}, Not started=${started}, Coming soon=${soon} ${ok ? 'ok' : 'FAILED'}`)
  report.push({ levelPage: ok, started, soon })

  // The last new row must navigate to its own chapter rather than the stub.
  const row = page.getByRole('button', { name: /Stock Exchanges/ }).first()
  await row.click()
  await page.waitForTimeout(1100)
  const url = page.url()
  const text = await page.locator('body').innerText()
  const navOk = url.endsWith('/chapter/l5-049') && /A market, a supervisor and a guarantee/.test(text)
  if (!navOk) failures++
  console.log(`level row -> l5-049: ${navOk ? 'ok' : 'FAILED'} (${url})`)
  report.push({ levelRowNav: navOk })
  await page.close()
}

await browser.close()
console.log(JSON.stringify({ scenes: Object.fromEntries(sceneTexts), report, failures }, null, 2))
process.exit(failures === 0 ? 0 : 1)
