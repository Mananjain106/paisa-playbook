import type { Chapter } from '../../types'
import { l5_101 } from './l5-101'
import { l5_102 } from './l5-102'
import { l5_103 } from './l5-103'
import { l5_104 } from './l5-104'
import { l5_105 } from './l5-105'
import { l5_106 } from './l5-106'
import { l5_107 } from './l5-107'
import { l5_108 } from './l5-108'
import { l5_109 } from './l5-109'
import { l5_110 } from './l5-110'
import { l5_111 } from './l5-111'
import { l5_112 } from './l5-112'
import { l5_113 } from './l5-113'

/**
 * Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 *
 * The fraud & due diligence half of the protection band: recognising the
 * cons (pump-and-dumps, deepfakes, fake platforms, fake jobs, crypto
 * schemes and social engineering) and then the diligence habits that make
 * them hard to fall for — evaluating a product, tracing where a return
 * comes from, pricing risk, liquidity and fees, and verifying an entity on
 * the regulator's own register.
 *
 * Each chapter was authored in its own module (l5-101.ts … l5-113.ts) and
 * is collected here so `level5.ts` has one import for the batch, the same
 * way the earlier batches expose a single record.
 */
export const l5Fraud: Record<string, Chapter> = {
  'l5-101': l5_101,
  'l5-102': l5_102,
  'l5-103': l5_103,
  'l5-104': l5_104,
  'l5-105': l5_105,
  'l5-106': l5_106,
  'l5-107': l5_107,
  'l5-108': l5_108,
  'l5-109': l5_109,
  'l5-110': l5_110,
  'l5-111': l5_111,
  'l5-112': l5_112,
  'l5-113': l5_113,
}
