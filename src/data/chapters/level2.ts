import type { Chapter } from '../../types'
import { cards } from './l2-cards'
import { coverDetail } from './l2-cover-detail'
import { credit } from './l2-credit'
import { emergency } from './l2-emergency'
import { fraud } from './l2-fraud'
import { insurance } from './l2-insurance'
import { lending } from './l2-lending'
import { loanTypes } from './l2-loan-types'
import { loans } from './l2-loans'
import { networth } from './l2-networth'
import { psychology } from './l2-psychology'
import { salary } from './l2-salary'
import { tricks } from './l2-tricks'

/** All authored Level 2 chapters, keyed by chapter id. */
export const level2: Record<string, Chapter> = {
  ...networth,
  ...salary,
  ...emergency,
  ...cards,
  ...credit,
  ...loans,
  ...loanTypes,
  ...lending,
  ...insurance,
  ...coverDetail,
  ...fraud,
  ...psychology,
  ...tricks,
}