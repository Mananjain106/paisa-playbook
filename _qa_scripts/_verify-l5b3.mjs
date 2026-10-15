import { chromium } from 'playwright'

const BASE = 'http://localhost:5199'
const CHAPTERS = [
  { id: 'l5-015', lab: 'Automation blueprint lab', expect: ['Every automated debit is covered on the date it is set for', '₹18.5K', 'FAILED DEBITS'] },
  { id: 'l5-016', lab: 'Automated investment lab', expect: ['inside the ₹1,00,000 authentication-free ceiling', 'missed instalment(s) a year cost'] },
  { id: 'l5-017', lab: 'Bill automation board', expect: ['3/5', 'a month, or ₹17,988 a year, to cancel'] },
  { id: 'l5-018', lab: 'Alert tuning lab', expect: ['0/4', 'New-device and login alerts are on'] },
  { id: 'l5-019', lab: 'Dashboard designer', expect: ['4/5', 'Portfolio value this week'] },
]

const browser = await chromium.launch()
let failures = 0
const report = []

for (const c of CHAPTERS) {
  const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } })
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))
  await page.goto(`${BASE}/chapter/${c.id}`, { waitUntil: 'networkidle' })
  await page.getByText(c.lab, { exact: false }).first().waitFor({ timeout: 15000 }).catch(() => {})
  await page.waitForTimeout(900)

  const body = await page.locator('body').innerText()
  const svg = await page.locator('svg[viewBox="0 0 400 220"]').count()
  const missing = c.expect.filter((s) => !body.includes(s))
  const entities = ['&#39;', '&amp;', '&quot;', '&#x27;'].filter((e) => body.includes(e))
  const ok = svg >= 1 && body.includes(c.lab) && missing.length === 0 && errors.length === 0 && entities.length === 0
  if (!ok) failures++
  report.push({ id: c.id, svg, lab: body.includes(c.lab), missing, entities, consoleErrors: errors, ok })
  await page.close()
}

// Interactions: each lab must respond to its own control.
async function interact(id, lab, act, expect, name) {
  const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } })
  await page.goto(`${BASE}/chapter/${id}`, { waitUntil: 'networkidle' })
  await page.getByText(lab, { exact: false }).first().waitFor({ timeout: 15000 })
  await act(page)
  await page.waitForTimeout(600)
  const body = await page.locator('body').innerText()
  const hit = expect.every((s) => body.includes(s))
  if (!hit) { failures++; console.log(`${name} FAILED`) }
  else console.log(`${name}: ok`)
  await page.close()
}

await interact('l5-015', 'Automation blueprint lab', async (p) => {
  // salary arrives one day late -> the day-2 transfers stop being covered
  await p.getByLabel('Salary arrives this many days late').fill('1')
}, ['cannot be covered', 'uncovered', 'Debit day'], 'l5-015 failure drill')

await interact('l5-017', 'Bill automation board', async (p) => {
  // tick "reviewed each month" on the electricity bill (the second variable bill)
  await p.getByText('reviewed each month').nth(1).click()
}, ['4/5'], 'l5-017 review toggle')

await interact('l5-018', 'Alert tuning lab', async (p) => {
  await p.getByLabel('Alert on any debit above').fill('2000')
}, ['4/4'], 'l5-018 threshold tuning')

await interact('l5-019', 'Dashboard designer', async (p) => {
  await p.getByText('Portfolio value this week').first().click()
}, ['5/5'], 'l5-019 tile swap')

await browser.close()
console.log(JSON.stringify({ report, failures }, null, 2))
process.exit(failures === 0 ? 0 : 1)
