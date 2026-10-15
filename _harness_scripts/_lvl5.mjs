import { chromium } from 'playwright'

const TITLES = [
  ['l5-030', 'Private Equity'],
  ['l5-031', 'Venture Capital'],
  ['l5-032', 'Liquidity'],
  ['l5-033', 'Fees And Access Restrictions'],
  ['l5-034', 'Advanced Tax Planning'],
  ['l5-035', 'Retirement Planning'],
  ['l5-036', 'Financial Independence'],
  ['l5-037', 'FIRE'],
  ['l5-038', 'Savings Rate'],
  ['l5-039', 'Passive Income'],
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
await page.goto('http://localhost:5199/level/5', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

let failures = 0
const report = []
for (const [id, title] of TITLES) {
  const btn = page.locator('button').filter({ hasText: title })
  const count = await btn.count()
  const text = count ? (await btn.first().innerText()).replace(/\s+/g, ' ').trim() : null
  const found = count > 0
  const pending = found && /coming soon/i.test(text)
  const started = found && /not started|quiz \d+\/\d+/i.test(text)
  const ok = found && !pending && started
  if (!ok) failures++
  report.push({ id, title, matches: count, listed: text, found, pending, started, ok })
}

// One navigation from the level page into a new chapter must land on the chapter.
await page.locator('button').filter({ hasText: 'FIRE' }).first().click()
await page.waitForTimeout(1500)
const url = page.url()
const queued = await page.getByText('queued for writing').count()
const heading = await page.locator('h1').first().innerText().catch(() => '')
const navigated = url.endsWith('/chapter/l5-037') && queued === 0
if (!navigated) failures++
console.log(`navigate from level page to FIRE: url=/${url.split('/').slice(-2).join('/')} heading="${heading.trim()}" queuedStub=${queued}`)

await browser.close()
for (const r of report) console.log(JSON.stringify(r))
console.log(failures === 0 ? 'LEVEL PAGE: ALL TEN LISTED AS WRITTEN AND REACHABLE' : `${failures} failure(s)`)
process.exit(failures === 0 ? 0 : 1)
