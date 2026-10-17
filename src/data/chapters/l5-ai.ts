import type { Chapter } from '../../types'
import { l5_114 } from './l5-114'
import { l5_115 } from './l5-115'
import { l5_116 } from './l5-116'
import { l5_117 } from './l5-117'
import { l5_118 } from './l5-118'
import { l5_119 } from './l5-119'
import { l5_120 } from './l5-120'
import { l5_121 } from './l5-121'
import { l5_122 } from './l5-122'

/**
 * Level 5, band five — chapters l5-114 to l5-122, the AI tools band.
 *
 * The band is deliberately not a product tour. Each chapter takes one task a
 * learner might hand to an assistant — research, budgeting, spreadsheet
 * formulas, a policy document, learning a concept — and then spends most of
 * its length on the check that has to happen before the output is used. The
 * last three chapters are the boundaries: the failure modes, the invented
 * claim, and the secrets that are never shared with any tool at all.
 *
 * Authored as one module per chapter (l5-114.ts … l5-122.ts) and collected
 * here, so `level5.ts` has a single import for the batch.
 */
export const l5Ai: Record<string, Chapter> = {
  'l5-114': l5_114,
  'l5-115': l5_115,
  'l5-116': l5_116,
  'l5-117': l5_117,
  'l5-118': l5_118,
  'l5-119': l5_119,
  'l5-120': l5_120,
  'l5-121': l5_121,
  'l5-122': l5_122,
}
