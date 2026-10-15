import type { Block } from '../types'
import { L5_SOURCES } from '../data/level5-plan'

/**
 * Level 5 chapter assembly helpers.
 *
 * Every Level 5 chapter states where a time-sensitive rule can be checked and
 * when it was last verified, because rules change: the EPF wage ceiling moved
 * from ₹15,000 to ₹25,000 on 17 September 2026, which is exactly the kind of
 * change a learner must be able to re-check rather than trust a printed number.
 *
 * `npm run check` verifies two things about every Level 5 chapter: it links to
 * at least one official domain registered in `L5_SOURCES`, and it carries the
 * verification date below. The helpers make both conventional instead of
 * accidental.
 */

/** Date on which this level's statutory facts were last checked. */
export const L5_VERIFIED = '15 October 2026'

/** A table of official sources to check, with what to look for in each. */
export function l5Sources(keys: string[], what: string[]): Block {
  return {
    kind: 'table',
    caption: `Last verified ${L5_VERIFIED} — check these official sources yourself`,
    headers: ['Official source', 'What to check there'],
    rows: keys.map((k, i) => [L5_SOURCES[k] ?? k, what[i] ?? 'The current rule']),
  }
}

/** A rule that was verified on a date and can change. */
export function l5Rule(title: string, text: string): Block {
  return { kind: 'callout', tone: 'india', title: `${title} — verified ${L5_VERIFIED}`, text }
}

/** Numbers in this chapter that are made up to teach a method, not quoted as fact. */
export function l5Illustrative(text: string): Block {
  return { kind: 'callout', tone: 'warning', title: 'Illustrative numbers', text }
}
