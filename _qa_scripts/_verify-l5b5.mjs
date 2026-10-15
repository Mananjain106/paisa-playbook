import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const BASE = 'http://localhost:5199'
const src = readFileSync('src/data/chapters/l5-retire.ts', 'utf8')

const LABS = {
  'l5-030': 'Private equity waterfall lab',
  'l5-031': 'Venture portfolio lab',
  'l5-032': 'Liquidity map lab',
  'l5-033': 'Total cost of ownership lab',
  'l5-034': 'Capital gains planning lab',
  'l5-035': 'Retirement projector',
  'l5-036': 'Independence number lab',
  'l5-037': 'FIRE stress test',
  'l5-038': 'Savings rate lab',
  'l5-039': 'Passive income audit',
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
  ['escaped quote', /\['"]/],
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
  await page.waitForTimeout(1200)
  await page.getByText(c.lab, { exact: false }).first().scrollIntoViewIfNeeded().catch(() => {})
  await page.waitForTimeout(1200)
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

  const ok =
    svgCount >= 1 && ranges >= 4 && missing.length === 0 && artifacts.length === 0 && errors.length === 0
  if (!ok) failures++
  report.push({ id: c.id, svgCount, ranges, words, missing, artifacts, consoleErrors: errors, ok })
  await page.close()
}

// Every chapter must own a visually distinct illustration.
const seen = new Map()
for (const [id, text] of sceneTexts) {
  if (!text) { failures++; report.push({ id, distinctScene: 'EMPTY' }); continue }
  if (seen.has(text)) { failures++; report.push({ id, distinctScene: `same as ${seen.get(text)}` }) }
  else { seen.set(text, id); report.push({ id, distinctScene: 'ok' }) }
  sceneTexts.set(id, text.slice(0, 58))
}

// Interactions: each lab's first control must change what the lab reports.
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
  await interact(id, async (p) => {
    const el = p.locator('input[type="range"]').first()
    const min = await el.getAttribute('min')
    await el.fill(String(min ?? 0))
  }, [], `${id} ${lab} slider`)
}

await interact('l5-030', async (p) => {
  await p.getByLabel('Fund life').fill('6')
}, ['about 6 years'], 'l5-030 fund life drill')

await interact('l5-032', async (p) => {
  await p.getByLabel('Months without income').fill('24')
}, ['forces a sale'], 'l5-032 interruption drill')

await interact('l5-035', async (p) => {
  await p.getByLabel('Retirement age').fill('70')
}, ['in 38 years'], 'l5-035 horizon drill')

await interact('l5-037', async (p) => {
  await p.getByLabel('Age you stop working').fill('40')
}, ['from 40 to 60 there are 20 years'], 'l5-037 gap-years drill')

// Level page must count the newly authored chapters.
{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  const body = await page.locator('body').innerText()
  const ok = /39 of 161/.test(body)
  if (!ok) failures++
  console.log(`level page 39 of 161: ${ok ? 'ok' : 'FAILED'}`)
  report.push({ levelPage: ok })
  await page.close()
}

await browser.close()
console.log(JSON.stringify({ scenes: Object.fromEntries(sceneTexts), report, failures }, null, 2))
process.exit(failures === 0 ? 0 : 1)
