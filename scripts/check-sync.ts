/**
 * Sync logic tests — the parts that a browser test cannot reach, because they
 * involve merging two devices' state.
 *
 * Run with: npm run test:sync
 */
import {
  mergeProgress,
  progressToRows,
  rowsToProgress,
} from '../src/lib/sync'
import type { Progress } from '../src/lib/store'

let failures = 0
const eq = (label: string, actual: unknown, expected: unknown) => {
  const a = JSON.stringify(actual)
  const e = JSON.stringify(expected)
  if (a === e) console.log(`  ✓ ${label}`)
  else {
    console.error(`  ✗ ${label}\n      expected ${e}\n      actual   ${a}`)
    failures++
  }
}

const base = (over: Partial<Progress> = {}): Progress => ({
  scores: {},
  read: [],
  xp: 0,
  streak: 0,
  lastVisit: '',
  ...over,
})

console.log('\nmergeProgress')

eq(
  'unions read chapters from both devices',
  mergeProgress(base({ read: ['a'] }), { read: ['b'] }).read.sort(),
  ['a', 'b'],
)

eq(
  'keeps the higher quiz score',
  mergeProgress(base({ scores: { a: { correct: 3, total: 5 } } }), {
    scores: { a: { correct: 1, total: 5 } },
  }).scores.a,
  { correct: 3, total: 5 },
)

eq(
  'adopts a better score from the remote device',
  mergeProgress(base({ scores: { a: { correct: 1, total: 5 } } }), {
    scores: { a: { correct: 4, total: 5 } },
  }).scores.a,
  { correct: 4, total: 5 },
)

eq(
  'merges scores for different chapters',
  Object.keys(
    mergeProgress(base({ scores: { a: { correct: 1, total: 2 } } }), {
      scores: { b: { correct: 2, total: 2 } },
    }).scores,
  ).sort(),
  ['a', 'b'],
)

eq(
  'derives XP from merged state (5/read + 10/correct)',
  mergeProgress(base({ read: ['a'], scores: { a: { correct: 2, total: 3 } } }), {
    read: ['b'],
    scores: { b: { correct: 1, total: 2 } },
  }).xp,
  2 * 5 + (2 + 1) * 10,
)

eq(
  'merging is idempotent — no XP inflation',
  (() => {
    const local = base({ read: ['a'], scores: { a: { correct: 3, total: 3 } } })
    const once = mergeProgress(local, { read: ['a'], scores: { a: { correct: 3, total: 3 } } })
    const twice = mergeProgress(once, { read: ['a'], scores: { a: { correct: 3, total: 3 } } })
    return [once.xp, twice.xp]
  })(),
  [35, 35],
)

eq('takes the higher streak', mergeProgress(base({ streak: 3 }), { streak: 7 }).streak, 7)

eq('keeps the local lastVisit when set', mergeProgress(base({ lastVisit: '2026-01-02' }), { lastVisit: '' }).lastVisit, '2026-01-02')

console.log('\nprogressToRows / rowsToProgress round trip')

const progress: Progress = base({
  read: ['l1-001', 'l2-005'],
  scores: { 'l1-001': { correct: 4, total: 5 }, 'l2-005': { correct: 2, total: 3 } },
})

const rows = progressToRows(progress)
eq('emits one row per read chapter', rows.length, 2)
eq('maps quiz scores onto rows', rows.find((r) => r.chapter_id === 'l1-001')?.score_correct, 4)

eq(
  'round-trips back to the same progress',
  (() => {
    const back = rowsToProgress(rows)
    return [back.read?.sort(), back.scores?.['l1-001']]
  })(),
  [['l1-001', 'l2-005'], { correct: 4, total: 5 }],
)

eq(
  'a read chapter with no quiz yields 0/0, not a score',
  rowsToProgress([{ chapter_id: 'x', score_correct: 0, score_total: 0, read_at: '' }]).scores,
  {},
)

console.log('')
if (failures) {
  console.error(`${failures} sync test(s) failed`)
  process.exit(1)
}
console.log('✓ All sync tests passed')