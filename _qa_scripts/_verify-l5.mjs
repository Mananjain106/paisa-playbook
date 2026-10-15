import { chromium } from 'playwright'

const BASE = 'http://localhost:5199'
const CHAPTERS = [
  { id: 'l5-005', lab: 'Benefits valuation lab', scene: 'benefit-stack', expect: ['Slab rate at this salary: 10%', '₹2.62L', 'the rebate already brings the tax to nil'] },
  { id: 'l5-006', lab: 'Provident fund lifecycle lab', scene: 'pf-ledger', expect: ['₹3,917'] },
  { id: 'l5-007', lab: 'Tax regime picker', scene: 'regime-seesaw', expect: ['The new regime is cheaper here by ₹25,480', '₹11,25,000'] },
  { id: 'l5-008', lab: 'Monthly routine lab', scene: 'monthly-cycle', expect: ['6/6'] },
  { id: 'l5-009', lab: 'Emergency fund sizing lab', scene: 'cover-months', expect: ['7.0 months', '₹1.54L'] },
  { id: 'l5-010', lab: 'Sinking fund planner', scene: 'sinking-jars', expect: ['₹11,000'] },
  { id: 'l5-011', lab: 'Budgeting system picker', scene: 'budget-shapes', expect: ['Envelope system'] },
  { id: 'l5-012', lab: 'Zero-based budget builder', scene: 'zero-bucket', expect: ['Unassigned'] },
  { id: 'l5-013', lab: '50/30/20 stress test', scene: 'frame-vs-reality', expect: ['broken down'] },
  { id: 'l5-014', lab: 'Cash-flow timing lab', scene: 'cashflow-timeline', expect: ['₹4,640'] },
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
  // Labs are lazy chunks, so wait for the lab heading before asserting.
  await page.getByText(c.lab, { exact: false }).first().waitFor({ timeout: 15000 }).catch(() => {})
  await page.waitForTimeout(900)

  const svgCount = await page.locator('svg[viewBox="0 0 400 220"]').count()
  const body = await page.locator('body').innerText()
  const labPresent = body.includes(c.lab)
  const missing = c.expect.filter((s) => !body.includes(s))
  const onPage = await page.locator('text=Last verified').count()

  const ok = svgCount >= 1 && labPresent && missing.length === 0 && errors.length === 0
  if (!ok) failures++
  report.push({
    id: c.id,
    svg: svgCount,
    lab: labPresent,
    missing,
    lastVerified: onPage,
    consoleErrors: errors,
    ok,
  })
  await page.close()
}

// Interaction: push the tax slider to ₹20 lakh and confirm the regime flips.
{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } })
  await page.goto(`${BASE}/chapter/l5-007`, { waitUntil: 'networkidle' })
  await page.getByText('Tax regime picker').first().waitFor({ timeout: 15000 })
  const sliders = page.locator('input[type="range"]')
  await sliders.first().fill('2000000')
  await page.waitForTimeout(500)
  const after = await page.locator('body').innerText()
  const flipped = after.includes('The old regime is cheaper here by')
  if (!flipped) { failures++; console.log('l5-007 flip check FAILED') }
  else console.log('l5-007 flip check: regime flips to old at ₹20L with those deductions')
  await page.close()
}

// Interaction: delay the salary in the cash-flow lab and confirm a shortfall appears.
{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } })
  await page.goto(`${BASE}/chapter/l5-014`, { waitUntil: 'networkidle' })
  await page.getByText('Cash-flow timing lab').first().waitFor({ timeout: 15000 })
  await page.locator('input[type="range"]').first().fill('9')
  await page.waitForTimeout(500)
  const after = await page.locator('body').innerText()
  const short = /shortfall days/i.test(after) && after.includes('The account goes short on')
  if (!short) { failures++; console.log('l5-014 shortfall check FAILED') }
  else console.log('l5-014 shortfall check: delaying the salary to day 9 produces a shortfall')
  await page.close()
}

// The level index should now report 14 of 161 live.
const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } })
await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)
const levelText = await page.locator('body').innerText()
const live = /(\d+) of 161 chapters are live/.exec(levelText)?.[1]
const stub = live !== '14'
if (stub) failures++
await page.close()

await browser.close()
console.log(JSON.stringify({ report, levelLive: live, failures }, null, 2))
process.exit(failures === 0 ? 0 : 1)
