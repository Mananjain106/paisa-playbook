import { chromium } from 'playwright'

const BASE = 'http://localhost:5199'
const IDS = ['l5-050', 'l5-051', 'l5-052', 'l5-053', 'l5-054', 'l5-055', 'l5-056', 'l5-057', 'l5-058', 'l5-059']

const browser = await chromium.launch()
let bad = 0
for (const id of IDS) {
  const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } })
  await page.goto(`${BASE}/chapter/${id}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  const rows = await page
    .locator('svg[viewBox="0 0 400 220"]')
    .first()
    .evaluate((svg) => {
      const out = []
      for (const t of svg.querySelectorAll('text')) {
        const bb = t.getBBox()
        out.push({
          text: (t.textContent ?? '').slice(0, 46),
          x: Math.round(bb.x),
          y: Math.round(bb.y),
          w: Math.round(bb.width),
          h: Math.round(bb.height),
          right: Math.round(bb.x + bb.width),
          bottom: Math.round(bb.y + bb.height),
        })
      }
      return out
    })
  // Overflow test only: text drawn outside the 400 x 220 drawing box is a defect.
  const outside = rows.filter((r) => r.x < -2 || r.y < -2 || r.right > 402 || r.bottom > 222)
  const chars = rows.reduce((s, r) => s + r.text.length, 0)
  if (outside.length) bad++
  console.log(
    `${id}: texts=${rows.length} chars=${chars} overflow=${outside.length}` +
      (outside.length ? ' -> ' + JSON.stringify(outside.slice(0, 4)) : ''),
  )
  await page.close()
}
await browser.close()
console.log(bad ? `OVERFLOW IN ${bad} ILLUSTRATION(S)` : 'ALL ILLUSTRATIONS INSIDE THE VIEWBOX')
process.exit(bad ? 1 : 0)
