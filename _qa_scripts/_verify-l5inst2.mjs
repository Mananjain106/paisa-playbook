import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const BASE = 'http://localhost:5199'
const src = readFileSync('src/data/chapters/l5-inst2.ts', 'utf8')

const LABS = {
  'l5-050': 'Broker cost comparison',
  'l5-051': 'Demat account audit',
  'l5-052': 'KYC diagnosis lab',
  'l5-053': 'Monitoring simulator',
  'l5-054': 'Protection limits lab',
  'l5-055': 'Complaint escalation builder',
  'l5-056': 'Consumer case builder',
  'l5-057': 'Contract clause scanner',
  'l5-058': 'Loan agreement audit',
  'l5-059': 'Policy wording reader',
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

  const ok = svgCount >= 1 && ranges >= 1 && missing.length === 0 && artifacts.length === 0 && errors.length === 0
  if (!ok) failures++
  report.push({ id: c.id, svgCount, ranges, words, missing, artifacts, consoleErrors: errors, ok })
  await page.close()
}

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

for (const { id, lab } of CHAPTERS) {
  await interact(
    id,
    async (p) => {
      const el = p.locator('input[type="range"]').first()
      const min = await el.getAttribute('min')
      await el.fill(String(min ?? 0))
    },
    [],
    `${id} ${lab} first control`,
  )
}

await interact('l5-050', async (p) => {
  await p.getByRole('button', { name: 'Percentage of turnover' }).click()
}, ['percentage plan'], 'l5-050 plan-switch drill')

await interact('l5-051', async (p) => {
  await p.getByRole('button', { name: 'Nomination registered' }).click()
}, ['a nomination is registered'], 'l5-051 nomination drill')

await interact('l5-052', async (p) => {
  await p.getByRole('button', { name: 'The call asks for a one-time password' }).click()
  await p.getByRole('button', { name: 'Payment is asked for into a personal account' }).click()
}, ['fraud attempt'], 'l5-052 fraud-signal drill')

await interact('l5-053', async (p) => {
  await p.getByLabel('Size of each deposit').fill('950000')
}, ['splitting a payment this way'], 'l5-053 structuring drill')

await interact('l5-054', async (p) => {
  await p.getByRole('button', { name: 'A scheme nobody registered stopped paying' }).click()
}, ['enforcement, not compensation'], 'l5-054 uncovered-loss drill')

await interact('l5-055', async (p) => {
  await p.getByRole('button', { name: 'An insurer' }).click().catch(async () => {
    await p.getByRole('button', { name: 'An insurer', exact: false }).first().click()
  })
}, ['insurance ombudsman'], 'l5-055 channel drill')

await interact('l5-056', async (p) => {
  await p.getByLabel('Value of the claim').fill('6000000')
}, ['state commission'], 'l5-056 jurisdiction drill')

await interact('l5-057', async (p) => {
  for (const label of [
    'at the lender',
    'How the rate resets',
    'The fee schedule',
    'the whole amount becomes due',
    'Set-off, security and guarantor',
    'Automatic renewal and termination',
    'you authorise the other side',
    'Dispute resolution and jurisdiction',
  ]) {
    await p.getByRole('button', { name: label, exact: false }).first().click()
  }
}, ['8/8', 'every risk clause has been read', 'every cost clause has been identified'], 'l5-057 clause-marking drill')

await interact('l5-058', async (p) => {
  await p.getByRole('button', { name: 'Penalty charged as interest' }).click()
}, ['charges the penalty as interest'], 'l5-058 penal-clause drill')

await interact('l5-059', async (p) => {
  await p.getByLabel('Room rent you actually paid').fill('20000')
}, ['proportionate'], 'l5-059 room-limit drill')

{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  const body = await page.locator('body').innerText()
  const count = /59 of 161/.test(body)
  const started = (body.match(/Not started/g) ?? []).length
  const soon = (body.match(/Coming soon/g) ?? []).length
  const ok = count && started === 59 && soon === 102
  if (!ok) failures++
  console.log(`level page 59/161: ${count}, Not started=${started}, Coming soon=${soon} ${ok ? 'ok' : 'FAILED'}`)
  report.push({ levelPage: ok, started, soon })

  const row = page.getByRole('button', { name: /Insurance Policies/ }).first()
  await row.click()
  await page.waitForTimeout(1100)
  const url = page.url()
  const text = await page.locator('body').innerText()
  const navOk = url.endsWith('/chapter/l5-059') && /The schedule states facts/.test(text)
  if (!navOk) failures++
  console.log(`level row -> l5-059: ${navOk ? 'ok' : 'FAILED'} (${url})`)
  report.push({ levelRowNav: navOk })
  await page.close()
}

await browser.close()
console.log(JSON.stringify({ scenes: Object.fromEntries(sceneTexts), report, failures }, null, 2))
process.exit(failures === 0 ? 0 : 1)
