import { chromium } from 'playwright'

const chapter = process.argv[2] ?? 'l2-062'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 })
await page.goto(`http://localhost:5199/chapter/${chapter}`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1800)

const info = await page.evaluate(async () => {
  const svg = document.querySelector('svg[viewBox="0 0 400 220"]')
  if (!svg) return { found: false }
  const box = (el) => { const b = el.getBoundingClientRect(); return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height) } }
  const texts = [...svg.querySelectorAll('text')].map((t) => ({ x: t.getAttribute('x'), y: t.getAttribute('y'), fill: t.getAttribute('fill'), text: t.textContent.trim().slice(0, 30), ...box(t) }))
  const shapes = [...svg.querySelectorAll('rect,circle,path,line,ellipse')].map((r) => ({ tag: r.tagName, fill: r.getAttribute('fill'), stroke: r.getAttribute('stroke'), r: r.getAttribute('r'), op: r.getAttribute('opacity'), xa: r.getAttribute('x'), ya: r.getAttribute('y'), cx: r.getAttribute('cx'), cy: r.getAttribute('cy'), ...box(r) }))
  const clone = svg.cloneNode(true)
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  clone.setAttribute('width', '400'); clone.setAttribute('height', '220')
  const blob = new Blob([clone.outerHTML], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const img = new Image()
  await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url })
  const cv = document.createElement('canvas'); cv.width = 400; cv.height = 220
  const ctx = cv.getContext('2d')
  ctx.fillStyle = '#0b1524'; ctx.fillRect(0, 0, 400, 220)
  ctx.drawImage(img, 0, 0, 400, 220)
  URL.revokeObjectURL(url)
  const cols = 80, rows = 44, sx = 400 / cols, sy = 220 / rows
  let ascii = ''
  for (let r = 0; r < rows; r++) {
    let line = String(r).padStart(2) + ' '
    for (let c = 0; c < cols; c++) {
      const d = ctx.getImageData(Math.floor(c * sx), Math.floor(r * sy), 1, 1).data
      const R = d[0], G = d[1], B = d[2], lum = (R + G + B) / 3
      let ch = ' '
      if (lum > 42) {
        if (Math.abs(R - G) < 30 && Math.abs(G - B) < 30) ch = '#'
        else if (G > R && G > B) ch = 'G'
        else if (R > G && R > B) ch = 'R'
        else if (B > R && B > G) ch = 'B'
        else ch = '+'
      }
      line += ch
    }
    ascii += line + '\n'
  }
  return { found: true, texts, shapes, ascii }
})

if (!info.found) { console.log('scene svg not found') } else {
  console.log(JSON.stringify({ texts: info.texts, shapes: info.shapes }))
  console.log(info.ascii)
}
await browser.close()
