import type { Chapter } from '../../types'
import { foundations } from './l1-foundations'
import { economy } from './l1-economy'
import { income } from './l1-income'
import { behaviour } from './l1-behaviour'
import { budget } from './l1-budget'
import { banking } from './l1-banking'
import { investingBasics } from './l1-investing-basics'
import { payments } from './l1-payments'
import { records } from './l1-records'
import { scams } from './l1-scams'
import { project } from './l1-project'

/** All authored Level 1 chapters, keyed by chapter id. */
export const level1: Record<string, Chapter> = {
  ...foundations,
  ...economy,
  ...income,
  ...behaviour,
  ...budget,
  ...banking,
  ...investingBasics,
  ...payments,
  ...records,
  ...scams,
  ...project,
}