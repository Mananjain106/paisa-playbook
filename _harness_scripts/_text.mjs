import { chromium } from 'playwright'

const BASE = 'http://localhost:5199'
const IDS = ['l5-020', 'l5-021', 'l5-022', 'l5-023', 'l5-024', 'l5-025', 'l5-026', 'l5-027', 'l5-028', 'l5-029']
const BAD = [
  ['backslash', /\\/],
  ['escaped quote', /\['"]/],
  ['NaN', /\bNaN\b/],
  ['undefined', /\bundefined\b/],
  ['null literal', /\bnull\b/],
  ['double full stop', /\.\.(?!\.)/],
  ['unrendered entity', /&[a-z#][a-z0-9]{1,6};/i],
  ['placeholder', /TODO|Lorem|XXX/],
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
let failures = 0

for (const id of IDS) {
  await page.goto(`${BASE}/chapter/${id}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  // Scroll to the end so every lazily-animated block has mounted.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 60))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)
  const text = await page.locator('body').innerText()
  const hits = BAD.filter(([, re]) => re.test(text)).map(([name]) => name)
  const words = text.split(/\s+/).length
  if (hits.length) failures++
  console.log(`${id}: words=${words} clean=${hits.length === 0}${hits.length ? ' hits=' + hits.join(', ') : ''}`)
  if (hits.length) {
    for (const [name, re] of BAD) {
      const m = text.match(re)
      if (m) console.log(`   ${name}: ...${text.slice(Math.max(0, m.index - 60), m.index + 60).replace(/\n/g, ' ')}...`)
    }
  }
}

await browser.close()
console.log(failures === 0 ? 'RENDERED TEXT CLEAN' : `${failures} chapter(s) with artifacts`)
process.exit(failures ? 1 : 0)
