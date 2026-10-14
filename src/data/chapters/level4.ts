import type { Chapter } from '../../types'
import { applyExtras } from '../../lib/extras'

import { analysis } from './l4-analysis'
import { tax } from './l4-tax'
import { retirement } from './l4-retirement'
import { insurance } from './l4-insurance'
import { property } from './l4-property'
import { education } from './l4-education'
import { derivatives } from './l4-derivatives'
import { business } from './l4-business'
import { career } from './l4-career'
import { tricks } from './l4-tricks'
import { l4Extras } from './l4-extras'

/**
 * All authored Level 4 chapters, keyed by chapter id.
 *
 * `applyExtras` drops duplicated labs and, for the chapters that were missing
 * one, adds the topic-matched illustration/simulation declared in `l4Extras`.
 */
export const level4: Record<string, Chapter> = applyExtras(
  {
    ...analysis,
    ...tax,
    ...retirement,
    ...insurance,
    ...property,
    ...education,
    ...derivatives,
    ...business,
    ...career,
    ...tricks,
  },
  l4Extras,
)
