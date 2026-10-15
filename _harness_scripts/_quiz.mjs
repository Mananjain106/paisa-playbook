import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const src = readFileSync(process.argv[2] ?? 'src/data/chapters/l5-invest.ts', 'utf8')
const CHAPTERS = process.argv[3]
  ? process.argv[3].split(',')
  : ['l5-020', 'l5-021', 'l5-022', 'l5-023', 'l5-024', 'l5-025', 'l5-026', 'l5-027', 'l5-028', 'l5-029']

/** Read a single-quoted TS string starting at the quote at `i`. */
function readString(text, i) {
  let out = ''
  i++
  while (i < text.length) {
    const c = text[i]
    if (c === '\\') { out += text[i + 1]; i += 2; continue }
    if (c === "'") return { value: out, end: i + 1 }
    out += c
    i++
  }
  return { value: out, end: i }
}

/** Correct-option index in source order for every question of a chapter. */
function correctIndices(id) {
  const start = src.indexOf("id: '" + id + "'")
  const quizAt = src.indexOf('quiz: [', start)
  const end = src.indexOf('\n    ],', quizAt)
  const block = src.slice(quizAt, end)
  const questions = block.split("q: '").slice(1)
  return questions.map((q) => {
    const at = q.indexOf('options: [')
    const opts = []
    let i = at
    while (true) {
      const t = q.indexOf("text: '", i)
      if (t === -1) break
      const s = readString(q, t + 6)
      opts.push({ text: s.value, tail: q.slice(s.end, s.end + 40) })
      i = s.end
    }
    return opts.findIndex((o) => o.tail.includes('correct: true'))
  })
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
let failures = 0

for (const id of CHAPTERS) {
  const plan = correctIndices(id)
  await page.goto(`http://localhost:5199/chapter/${id}`, { waitUntil: 'networkidle' })
  await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  const sec = page.locator('section:has(h3:text-is("Quick check"))')
  const groups = sec.locator('div.space-y-2')
  const n = await groups.count()
  const picked = []
  for (let i = 0; i < n; i++) {
    const buttons = groups.nth(i).locator('button')
    const count = await buttons.count()
    const wanted = plan[i] ?? -1
    let clicked = null
    for (let b = 0; b < count; b++) {
      if (b === wanted) {
        await buttons.nth(b).click()
        clicked = b
        break
      }
    }
    picked.push(`${i + 1}:${clicked ?? 'none'} of ${count}`)
  }
  const check = page.getByRole('button', { name: 'Check answers' })
  const enabled = await check.isEnabled()
  if (enabled) await check.click()
  await page.waitForTimeout(400)
  const body = await page.locator('body').innerText()
  const score = (body.match(/(\d+)\/(\d+) correct/) ?? ['no score'])[0]
  const ok = score === `${plan.length}/${plan.length} correct` && enabled
  if (!ok) failures++
  console.log(`${id}: questions=${n} srcCorrect=${JSON.stringify(plan)} picked=${picked.join(', ')} enabled=${enabled} score=${score} ${ok ? 'ok' : 'FAILED'}`)
}

await browser.close()
console.log(failures === 0 ? 'ALL QUIZZES SCORE FULL MARKS' : `${failures} failure(s)`)
process.exit(failures ? 1 : 0)
