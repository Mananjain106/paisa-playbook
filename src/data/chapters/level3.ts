import type { Chapter } from '../../types'
import { applyExtras } from '../../lib/extras'

import { foundations } from './l3-foundations'
import { equity } from './l3-equity'
import { valuation } from './l3-valuation'
import { funds } from './l3-funds'
import { passive } from './l3-passive'
import { assets } from './l3-assets'
import { tricks } from './l3-tricks'
import { l3Extras } from './l3-extras'

/**
 * All authored Level 3 chapters, keyed by chapter id.
 *
 * `applyExtras` drops duplicated labs and, for the chapters that were missing
 * one, adds the topic-matched illustration/simulation declared in `l3Extras`.
 */
export const level3: Record<string, Chapter> = applyExtras(
  {
    ...foundations,
    ...equity,
    ...valuation,
    ...funds,
    ...passive,
    ...assets,
    ...tricks,
  },
  l3Extras,
)
