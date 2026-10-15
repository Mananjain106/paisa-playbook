import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const BASE = 'http://localhost:5199'
const src = readFileSync('src/data/chapters/l5-invest.ts', 'utf8')

const LABS = {
  'l5-020': 'Portfolio architecture lab',
  'l5-021': 'Asset allocation designer',
  'l5-022': 'Overlap and concentration lab',
  'l5-023': 'Rebalancing rule lab',
  'l5-024': 'Goal mapping lab',
  'l5-025': 'REIT analysis lab',
  'l5-026': 'InvIT analysis lab',
  'l5-027': 'International investing lab',
  'l5-028': 'ETF versus index fund lab',
  'l5-029': 'Alternatives screener',
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
  // The lab is lazy-loaded; scroll it into view so it mounts and renders.
  await page.getByText(c.lab, { exact: false }).first().scrollIntoViewIfNeeded().catch(() => {})
  await page.waitForTimeout(1200)

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
  const entities = ['&#39;', '&amp;', '&quot;', '&#x27;', '&nbsp;'].filter((e) => body.includes(e))

  const ok =
    svgCount >= 1 && ranges >= 2 && missing.length === 0 && entities.length === 0 && errors.length === 0
  if (!ok) failures++
  report.push({ id: c.id, svgCount, ranges, missing, entities, consoleErrors: errors, ok })
  await page.close()
}

// Every chapter must own a visually distinct illustration.
const seen = new Map()
for (const [id, text] of sceneTexts) {
  if (!text) { failures++; report.push({ id, distinctScene: 'EMPTY' }); continue }
  if (seen.has(text)) { failures++; report.push({ id, distinctScene: `same as ${seen.get(text)}` }) }
  else { seen.set(text, id); report.push({ id, distinctScene: 'ok' }) }
  sceneTexts.set(id, text.slice(0, 60))
}
const scenes = Object.fromEntries(sceneTexts)

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
  const changed = before !== after
  const flat = after.toLowerCase()
  const hit = expect.every((s) => flat.includes(s.toLowerCase()))
  if (!changed || !hit) { failures++; console.log(`${name}: FAILED (changed=${changed}, missing=${expect.filter((s) => !flat.includes(s.toLowerCase()))})`) }
  else console.log(`${name}: ok`)
  await page.close()
}

// Generic reactivity: drive each lab's first slider to its minimum.
for (const { id, lab } of CHAPTERS) {
  await interact(id, async (p) => {
    const el = p.locator('input[type="range"]').first()
    const min = await el.getAttribute('min')
    await el.fill(String(min ?? 0))
  }, [], `${id} ${lab} slider`)
}

await interact('l5-025', async (p) => {
  await p.getByLabel('Occupancy').fill('60')
}, ['Occupancy of 60%', 'warning rather than a return'], 'l5-025 occupancy drill')

await interact('l5-026', async (p) => {
  await p.getByLabel('Years of concession left').fill('6')
}, ['About 6 years of concession remain'], 'l5-026 concession life drill')

await interact('l5-028', async (p) => {
  await p.getByLabel('Years held').fill('20')
}, ['Break-even'], 'l5-028 break-even drill')

// Level page must count the newly authored chapters.
{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  const body = await page.locator('body').innerText()
  const ok = /29 of 161/.test(body)
  if (!ok) failures++
  console.log(`level page 29 of 161: ${ok ? 'ok' : 'FAILED'}`)
  report.push({ levelPage: ok })
  await page.close()
}

await browser.close()
console.log(JSON.stringify({ scenes, report, failures }, null, 2))
process.exit(failures === 0 ? 0 : 1)
