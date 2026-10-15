import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const BASE = 'http://localhost:5199'
const src = readFileSync('src/data/chapters/l5-inst3.ts', 'utf8')

const LABS = {
  'l5-060': 'Cardholder terms audit',
  'l5-061': 'Broking agreement audit',
  'l5-062': 'Tenancy terms audit',
  'l5-063': 'Hidden cost hunt',
  'l5-064': 'Fee normaliser',
  'l5-065': 'Penalty and dispute clock',
  'l5-066': 'Clause spotter',
  'l5-067': 'Raise negotiation',
  'l5-068': 'Rent negotiation',
  'l5-069': 'Loan negotiation',
  'l5-070': 'Freelance rate builder',
}

function field(id, key, len) {
  const start = src.indexOf(`id: '${id}'`)
  if (start < 0) return ''
  const at = src.indexOf(`${key}: '`, start)
  if (at < 0) return ''
  let v = src.slice(at + key.length + 3, at + key.length + 3 + len)
  const q = v.indexOf("'")
  if (q >= 0) v = v.slice(0, q)
  return v
    .replace(/\\+$/, '')
    .replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
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
  ['unrendered escape', /\\u[0-9a-f]{4}/i],
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
  if (!body.includes('Last verified 15 October 2026')) missing.push('verification stamp')
  if (!/https:\/\/[a-z0-9.]*\.(gov|org|com|in)\//.test(body)) missing.push('source link')
  const artifacts = BAD.filter(([, re]) => re.test(body)).map(([n]) => n)
  const words = body.split(/\s+/).length

  const ok = svgCount >= 1 && ranges >= 1 && missing.length === 0 && artifacts.length === 0 && errors.length === 0
  if (!ok) failures++
  report.push({ id: c.id, svgCount, ranges, words, missing, artifacts, consoleErrors: errors, ok })
  console.log(
    `${c.id} words=${words} svg=${svgCount} sliders=${ranges} missing=${missing.join(',') || '-'} artifacts=${artifacts.join(',') || '-'} errors=${errors.length} ${ok ? 'ok' : 'FAILED'}`,
  )
  await page.close()
}

const seen = new Map()
for (const [id, text] of sceneTexts) {
  if (!text) {
    failures++
    console.log(`${id}: illustration EMPTY`)
    continue
  }
  if (seen.has(text)) {
    failures++
    console.log(`${id}: illustration identical to ${seen.get(text)}`)
  } else seen.set(text, id)
}
console.log(`distinct illustrations: ${seen.size}/11`)

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

// One targeted interaction per lab, driven through the control the learner uses.
await interact('l5-060', async (p) => {
  await p.getByLabel('Days taken to report a fraud').fill('0')
}, ['zero liability'], 'l5-060 fraud-report drill')

await interact('l5-061', async (p) => {
  await p.getByRole('button', { name: 'Keep client funds and securities apart', exact: false }).click()
  await p.getByRole('button', { name: 'Pay securities straight into your account', exact: false }).click()
}, ['held apart from the firm'], 'l5-061 protection drill')

await interact('l5-062', async (p) => {
  await p.getByLabel('Deposit, in months').fill('3')
}, ['modest by current market practice'], 'l5-062 deposit drill')

await interact('l5-063', async (p) => {
  await p.getByRole('button', { name: 'A fee shows up only at the end' }).click()
}, ['drip pricing'], 'l5-063 drip-pricing drill')

await interact('l5-064', async (p) => {
  await p.getByRole('button', { name: 'Adviser: share of assets' }).click()
}, ['asset-based mode is inside its cap'], 'l5-064 adviser-mode drill')

await interact('l5-065', async (p) => {
  await p.getByLabel('Days past the due date').fill('10')
}, ['beyond the three-day window'], 'l5-065 three-day drill')

await interact('l5-066', async (p) => {
  await p.getByRole('button', { name: 'You indemnify the firm against all losses' }).click()
}, ['one-way indemnity has been flagged'], 'l5-066 indemnity drill')

await interact('l5-067', async (p) => {
  await p.getByRole('button', { name: 'Outcome documented in writing' }).click()
}, ['the agreement is in writing'], 'l5-067 written-outcome drill')

await interact('l5-068', async (p) => {
  await p.getByLabel('Deposit, in months').fill('3')
}, ['a deposit of 3 month(s) costs'], 'l5-068 deposit-months drill')

await interact('l5-069', async (p) => {
  await p.getByLabel('Prepayment planned').fill('500000')
}, ['prepayment no longer carries a charge'], 'l5-069 prepayment drill')

await interact('l5-070', async (p) => {
  await p.getByLabel('Revisions requested').fill('5')
}, ['scope creep'], 'l5-070 revision drill')

{
  const page = await browser.newPage({ viewport: { width: 1360, height: 1200 } })
  await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  const body = await page.locator('body').innerText()
  const count = /70 of 161/.test(body)
  const started = (body.match(/Not started/g) ?? []).length
  const soon = (body.match(/Coming soon/g) ?? []).length
  const ok = count && started === 70 && soon === 91
  if (!ok) failures++
  console.log(`level page 70/161: ${count}, Not started=${started}, Coming soon=${soon} ${ok ? 'ok' : 'FAILED'}`)

  const row = page.getByRole('button', { name: /Clauses/ }).first()
  await row.click()
  await page.waitForTimeout(1100)
  const url = page.url()
  const text = await page.locator('body').innerText()
  const navOk = url.endsWith('/chapter/l5-066') && /Four clause families decide most disputes/.test(text)
  if (!navOk) failures++
  console.log(`level row -> l5-066: ${navOk ? 'ok' : 'FAILED'} (${url})`)

  const row2 = page.getByRole('button', { name: /Contracts And Freelance Rates/ }).first()
  await page.goto(`${BASE}/level/5`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await row2.click()
  await page.waitForTimeout(1100)
  const url2 = page.url()
  const text2 = await page.locator('body').innerText()
  const navOk2 = url2.endsWith('/chapter/l5-070') && /A rate is a business calculation/.test(text2)
  if (!navOk2) failures++
  console.log(`level row -> l5-070: ${navOk2 ? 'ok' : 'FAILED'} (${url2})`)
  await page.close()
}

await browser.close()
console.log(failures === 0 ? 'ALL CHECKS PASSED' : `${failures} FAILURE(S)`)
process.exit(failures === 0 ? 0 : 1)
