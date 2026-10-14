import type { Chapter } from '../../types'

import { foundations } from './l3-foundations'
import { equity } from './l3-equity'
import { valuation } from './l3-valuation'
import { funds } from './l3-funds'
import { passive } from './l3-passive'
import { assets } from './l3-assets'
import { tricks } from './l3-tricks'

/** All authored Level 3 chapters, keyed by chapter id. */
export const level3: Record<string, Chapter> = {
  ...foundations,
  ...equity,
  ...valuation,
  ...funds,
  ...passive,
  ...assets,
  ...tricks,
}