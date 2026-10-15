import { scene, sim } from '../../lib/chapter-blocks'
import type { Extra } from '../../lib/extras'

/**
 * Gap-filling illustrations and simulations for Level 3 — The Investing World.
 *
 * Each entry supplies the one block the chapter was missing, with a caption
 * written for that specific topic.
 *
 * The market, mutual-fund, fixed-income and financial-statement chapters
 * (l3-010 to l3-013, l3-021 to l3-063) were rewritten with their own
 * illustration and simulation, so they are deliberately absent here: adding
 * them would only duplicate what the chapter already carries. What remains are
 * the chapters that still need one of the two blocks supplied.
 */
export const l3Extras: Record<string, Extra> = {
  // ---------------------------------------------------------------- sims
  'l3-009': { sim: sim('compound', 'A monthly deposit that compounds — change the amount and the tenure.') },
  'l3-014': { sim: sim('bond', 'Par, coupon, maturity, yield — move one and watch the rest respond.') },
  'l3-015': { sim: sim('bond', 'Change the coupon and see how a bond\u2019s income stream is priced.') },
  'l3-016': { sim: sim('bond', 'Face value is what is repaid at maturity — it is not the price you pay today.') },
  'l3-017': { sim: sim('bond', 'A longer maturity means a bigger price swing when rates move.') },
  'l3-020': { sim: sim('bond', 'A weaker borrower must offer a higher yield — watch the spread widen.') },
  'l3-068': { sim: sim('portfolio', 'Gold as a diversifier: add it and watch portfolio volatility fall.') },
  'l3-069': { sim: sim('portfolio', 'Paper gold with a live price — see its role in a mixed portfolio.') },
  'l3-071': { sim: sim('portfolio', 'Silver swings harder than gold — see the effect on a balanced portfolio.') },
  'l3-072': { sim: sim('market', 'Commodities trade in cycles too — run one and watch the swings.') },
  'l3-074': { sim: sim('portfolio', 'Illiquid, indivisible and slow — see what land does to a portfolio.') },
  'l3-075': { sim: sim('emi', 'The loan is only part of the cost — see the true total of owning.') },
  'l3-077': { sim: sim('portfolio', 'Price growth without cash flow looks fine until you need to sell.') },
  'l3-078': { sim: sim('emi', 'Taxes and charges add to the cost of every property transaction.') },
  'l3-079': { sim: sim('emi', 'Stamp duty is paid up front and never comes back — price it in.') },
  'l3-080': { sim: sim('emi', 'Registration and legal fees stack on top of the sticker price.') },
  'l3-081': { sim: sim('emi', 'Upkeep is a recurring cost that never appears in the asking price.') },
  'l3-083': { sim: sim('emi', 'Selling takes months — see how a forced sale changes the math.') },
  'l3-088': { sim: sim('market', 'Same asset, two mindsets — see how leverage changes the outcome.') },
  'l3-093': { sim: sim('portfolio', 'Record the allocation, then check whether your decisions matched it.') },

  // ---------------------------------------------------------------- scenes
  'l3-005': { scene: scene('emergency-ladder', 'Liquidity is the rung you can reach today — the rest takes time.') },
  'l3-006': { scene: scene('allocation-pie', 'One slice can fail without sinking the whole plate.') },
  'l3-018': { scene: scene('yield-curve', 'Yield is the return you actually get at the price you pay.') },
  'l3-065': { scene: scene('passive-vs-active', 'Active chases the market; passive accepts it. Compare the outcomes.') },
  'l3-070': { scene: scene('gold-role', 'Commodities behave differently from shares — that is the point.') },
  'l3-076': { scene: scene('property-cashflow', 'Rent in, costs out — what is actually left each year.') },
  'l3-082': { scene: scene('emi-split', 'Most of an early EMI is interest; the principal catches up later.') },
  'l3-084': { scene: scene('property-cashflow', 'Thin yields and slow exits are the real risks of property.') },
  'l3-086': { scene: scene('diversify-fail', 'Spread across assets that fail differently, not just across names.') },
  'l3-089': { scene: scene('real-vs-nominal', 'A great past return is not a promise about the future.') },
  'l3-092': { scene: scene('time-horizon', 'Same plan, full cycle — would you have held on through it?') },
  'l3-094': { scene: scene('target-vs-actual', 'Target weights versus actual weights — that gap is what you track.') },
}
