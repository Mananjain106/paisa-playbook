/**
 * Data integrity check for authored chapters.
 * Run with: npm run check
 *
 * Chapter content is code-split per level, so we must pull every level in
 * before validating.
 */
import { allChapters, chapterContent, loadAllContent } from '../src/data/curriculum'
import { levels } from '../src/data/curriculum.generated'
import { glossarySeeds } from '../src/data/glossary'

await loadAllContent()

let problems = 0
const fail = (msg: string) => {
  problems++
  console.error(`  ✗ ${msg}`)
}

const SIMS = new Set([
  'compound', 'budget', 'networth', 'market', 'sheet', 'rupee10', 'scam-spotter',
  'emi', 'salary-slip', 'minpayment', 'cover',
  'portfolio', 'bond', 'realreturn', 'currency', 'valuation', 'feedrag', 'cycle',
  'tax', 'options-payoff',
])
const SCENES = new Set([
  'coins', 'barter', 'timeline', 'rupee', 'rupee-erode', 'money-flow', 'rbi-funnel', 'bank-pyramid',
  'income-streams', 'pie-needs-wants', 'spend-leak', 'ad-trap', 'peer-circle', 'budget-pie', 'expense-bars',
  'goal-ladder', 'safe-vs-risk', 'interest-growth', 'inflation-crocodile', 'opportunity-fork', 'upi-flow',
  'atm-machine', 'payment-rail', 'scam-hook', 'phishing-hook', 'shield', 'balance-sheet', 'emi-split',
  'emergency-ladder', 'minpayment-trap', 'secured-vs-unsecured', 'insurance-umbrella', 'ponzi-chain',
  'pyramid', 'fomo-chase', 'lifestyle-inflation', 'dashboard', 'score-meter', 'salary-deductions',
  'risk-return-curve', 'capacity-tolerance', 'yield-curve', 'price-yield-inverse', 'profit-waterfall',
  'share-slice', 'market-cap-ladder', 'fee-drag-visual', 'allocation-pie', 'currency-erosion',
  'dividend-stream', 'property-cashflow', 'time-horizon', 'passive-vs-active', 'real-vs-nominal',
  'gold-role', 'money-allocation',
  // Level 4 scenes
  'tax-bracket', 'tds-flow', 'cover-ladder', 'emi-split-early', 'nps-annuity',
  'call-put', 'rent-vs-buy', 'loan-amort', 'deriv-payoff', 'currency-risk', 'growth-vs-value', 'corpus-ladder',
])

for (const level of levels) {
  const authored = level.chapters.filter((c) => chapterContent[c.id]).length
  console.log(
    `Level ${level.level} — ${level.title}: ${authored}/${level.chapters.length} authored` +
      (authored === level.chapters.length ? ' ✓' : authored ? '' : ' (stubbed)'),
  )
  if (authored === 0 && level.level > 1) continue
}

const authoredCount = Object.keys(chapterContent).length
console.log(`\nTotal authored: ${authoredCount} / ${allChapters.length} chapters`)

for (const ref of allChapters) {
  const ch = chapterContent[ref.id]
  if (!ch) continue

  // Titles are deliberately editorialised for readability (e.g. "FD" ->
  // "Fixed Deposits"), so only the id linkage is enforced.
  if (ch.id !== ref.id) fail(`${ref.id} id mismatch: content declares "${ch.id}"`)
  if (!ch.subtitle) fail(`${ref.id} missing subtitle`)
  if (!ch.takeaway) fail(`${ref.id} missing takeaway`)
  if (!ch.blocks.length) fail(`${ref.id} has no blocks`)
  if (!ch.quiz.length) fail(`${ref.id} has no quiz questions`)
  if (!ch.minutes || ch.minutes < 1) fail(`${ref.id} has no sensible reading time`)

  for (const [i, q] of ch.quiz.entries()) {
    const correct = q.options.filter((o) => o.correct).length
    if (correct !== 1) fail(`${ref.id} Q${i + 1} has ${correct} correct options (expected exactly 1)`)
    if (q.options.length < 3) fail(`${ref.id} Q${i + 1} has fewer than 3 options`)
    for (const [j, o] of q.options.entries()) {
      if (!o.text) fail(`${ref.id} Q${i + 1} option ${j + 1} has no text`)
      if (!o.why) fail(`${ref.id} Q${i + 1} option ${j + 1} has no explanation`)
    }
  }

  let hasVisual = false
  let simCount = 0
  let sceneCount = 0
  for (const b of ch.blocks) {
    if (b.kind === 'scene') {
      hasVisual = true
      sceneCount++
      if (!SCENES.has(b.name)) fail(`${ref.id} references unknown scene "${b.name}"`)
      if (!(b.caption ?? '').trim()) fail(`${ref.id} has a scene without a caption`)
    }
    if (b.kind === 'sim') {
      hasVisual = true
      simCount++
      if (!SIMS.has(b.name)) fail(`${ref.id} references unknown sim "${b.name}"`)
      if (!(b.caption ?? '').trim()) fail(`${ref.id} has a simulation without a caption`)
    }
    if (b.kind === 'p' && !b.text.trim()) fail(`${ref.id} has an empty paragraph`)
    if (b.kind === 'callout' && !b.text.trim()) fail(`${ref.id} has an empty callout`)
  }
  if (!hasVisual) fail(`${ref.id} has neither an illustration nor a simulation`)

  // Levels 3 and 4 are held to a higher bar: every chapter must carry BOTH a
  // chapter-related illustration and a hands-on simulation, not just one.
  if (ref.level >= 3) {
    if (sceneCount === 0) fail(`${ref.id} has no illustration`)
    if (simCount === 0) fail(`${ref.id} has no simulation`)
  }
}

// Orphan check: authored chapters that are not in the syllabus
const known = new Set(allChapters.map((c) => c.id))
for (const id of Object.keys(chapterContent)) {
  if (!known.has(id)) fail(`${id} is authored but not in the syllabus`)
}

// ---------------------------------------------------------------- glossary
// Seeds must be unique and non-empty; the glossary page renders them directly.
const seenTerms = new Set<string>()
for (const g of glossarySeeds) {
  const key = g.term.trim().toLowerCase()
  if (!g.term.trim()) fail('glossary has an empty term')
  if (!g.meaning.trim()) fail(`glossary term "${g.term}" has an empty meaning`)
  if (seenTerms.has(key)) fail(`glossary has a duplicate term "${g.term}"`)
  seenTerms.add(key)
}
console.log(`Glossary: ${glossarySeeds.length} seed terms`)

console.log(problems === 0 ? '\n✓ All checks passed' : `\n${problems} problem(s) found`)
process.exit(problems === 0 ? 0 : 1)