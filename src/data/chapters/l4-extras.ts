import { scene, sim } from '../../lib/chapter-blocks'
import type { Extra } from '../../lib/extras'

/**
 * Gap-filling illustrations, simulations and captions for Level 4 — Taxes &
 * Advanced Money.
 *
 * - `sim` / `scene` supply the block a chapter was missing.
 * - `captions` fills in sim/scene blocks that were authored with an empty
 *   caption, keyed by the block's `name`.
 *
 * Chapters that already carried both a sim and an illustration with captions
 * are intentionally absent from this map.
 */
export const l4Extras: Record<string, Extra> = {
  // ------------------------------------------------- stock analysis (l4-001–017)
  'l4-002': {
    scene: scene('balance-sheet', 'Study the business behind the ticker, not the chart.'),
    captions: { valuation: 'Type a company\u2019s numbers and watch the ratios reveal the business.' },
  },
  'l4-003': {
    scene: scene('market-cap-ladder', 'Price behaviour is one lens — not the whole story.'),
    captions: { valuation: 'Price is one input; the lab shows the fundamentals behind it.' },
  },
  'l4-004': {
    scene: scene('growth-vs-value', 'You pay today for cash that arrives years from now.'),
    captions: { valuation: 'Change the assumptions and watch the fair-value estimate move.' },
  },
  'l4-005': { captions: { valuation: 'The same earnings, priced through two very different lenses.' } },
  'l4-006': {
    scene: scene('moat-defence', 'A moat is what lets a company keep its rewards.'),
    captions: { valuation: 'Durable profits come from structure, not from a good story.' },
  },
  'l4-007': {
    scene: scene('profit-waterfall', 'How the money comes in, and what is left after costs.'),
    captions: { valuation: 'Type the unit economics and see whether the model actually works.' },
  },
  'l4-008': {
    scene: scene('balance-sheet', 'The narrative is marketing; the numbers are the record.'),
    captions: { valuation: 'Revenue, margins, debt and returns — the report in numbers.' },
  },
  'l4-009': {
    scene: scene('balance-sheet', 'What it owns, what it owes, and how it is funded.'),
    captions: { valuation: 'Watch how debt and equity fund the assets on the books.' },
  },
  'l4-010': {
    scene: scene('profit-waterfall', 'Revenue down to profit — and where that profit can hide.'),
    captions: { valuation: 'Revenue down to profit, with the margins along the way.' },
  },
  'l4-011': {
    scene: scene('cashflow-reality', 'Profit is an opinion; cash flow is the reality check.'),
    captions: { valuation: 'Profit and cash are not the same number — compare them here.' },
  },
  'l4-012': {
    scene: scene('accounting-quality', 'A clean headline can still sit on weak accounting.'),
    captions: { valuation: 'When profit does not convert to cash, quality is in question.' },
  },
  'l4-013': {
    scene: scene('profit-waterfall', 'Debt is only a problem when it cannot be serviced.'),
    captions: { valuation: 'Move the debt up and see how leverage reshapes returns.' },
  },
  'l4-014': {
    scene: scene('dividend-stream', 'Dividends, splits, buybacks — what they really do to your shares.'),
    captions: { valuation: 'See how EPS and the multiples react to the same company.' },
  },
  'l4-015': {
    scene: scene('dividend-stream', 'A steady stream of cash, or a signal about the future?'),
    captions: { valuation: 'Dividends are part of total return — the lab shows the split.' },
  },
  'l4-016': {
    scene: scene('share-slice', 'A split changes the number of slices, not the size of the pizza.'),
    captions: { valuation: 'A split changes the per-share maths, not the company\u2019s value.' },
  },
  'l4-017': {
    scene: scene('share-slice', 'Buybacks shrink the slice count — your slice gets bigger.'),
    captions: { valuation: 'Fewer shares outstanding lift EPS even when profit is flat.' },
  },

  // ----------------------------------------------------------- tax (l4-018–029)
  'l4-018': {
    sim: sim('tax', 'Direct tax, indirect tax and how the tax base is built — try the regime lab.'),
    captions: { 'direct-vs-indirect': 'Direct versus indirect tax, and how a taxable base is assembled.' },
  },
  'l4-019': { scene: scene('tax-bracket', 'Tax is broader than salary: know your heads of income.') },
  'l4-020': {
    scene: scene('taxable-base', 'Not every rupee you receive is taxable income.'),
    captions: { tax: 'Apply exemptions and deductions and see taxable income fall.' },
  },
  'l4-022': { captions: { tax: 'TDS is tax paid in advance — watch the final bill settle.' } },
  'l4-023': {
    scene: scene('tds-flow', 'Your employer\u2019s TDS record — the tax already deducted from your pay.'),
    captions: { tax: 'Form 16 summarises the TDS already deducted from your salary.' },
  },
  'l4-024': {
    scene: scene('tds-flow', 'Income, deductions, tax paid — where it all comes together.'),
    captions: { tax: 'Build the return: income, deductions, tax paid, and the balance.' },
  },
  'l4-025': { scene: scene('deduction-effect', 'Deductions lower taxable income; they do not erase the bill.') },
  'l4-026': {
    scene: scene('capital-gains-holding', 'How long you held the asset decides how the gain is taxed.'),
    captions: { tax: 'Short-term and long-term gains are taxed at different rates.' },
  },
  'l4-027': { captions: { tax: 'Compare tax on a holding of 11 months against 13 months.' } },
  'l4-028': {
    scene: scene('tax-bracket', 'The same return can be taxed very differently by asset class.'),
    captions: { tax: 'The same rupee of return is taxed very differently by asset.' },
  },
  'l4-029': {
    scene: scene('shield', 'Planning uses the law; evasion breaks it. The line is clear.'),
    captions: { tax: 'Planning keeps money lawful; evasion crosses a clear line.' },
  },

  // ---------------------------------------------------- retirement (l4-030–036)
  'l4-030': {
    sim: sim('compound', 'Start early and let compounding carry most of the weight.'),
    captions: { 'corpus-ladder': 'Each rung is a decade of saving and compounding toward the corpus.' },
  },
  'l4-031': {
    sim: sim('realreturn', 'Set the goal in today\u2019s rupees and watch inflation raise the target.'),
    captions: { 'inflation-target': 'Inflation raises the target while you are still trying to reach it.' },
  },
  'l4-032': {
    sim: sim('compound', 'How large a corpus you need, and how long it takes to build.'),
    captions: {
      'corpus-ladder': 'The corpus you need is a rung, not a single magic number.',
      'nps-annuity': 'Part of the NPS corpus must buy an annuity at retirement.',
    },
  },
  'l4-033': {
    sim: sim('compound', '12% from you, 12% from your employer, compounding every month.'),
    captions: { 'epf-monthly': 'EPF builds one rung at a time, every single month.' },
  },
  'l4-034': {
    sim: sim('compound', 'Fifteen years of tax-free compounding — see the curve.'),
    captions: { 'corpus-ladder': 'Fifteen years of PPF contributions stack into a tax-free corpus.' },
  },
  'l4-035': {
    sim: sim('compound', 'Contributions plus a market return, minus the annuity you must buy.'),
    captions: { 'nps-annuity': 'NPS contributions in; a pension annuity out.' },
  },
  'l4-036': {
    sim: sim('compound', 'Turn a lump sum into a monthly pension and see what it costs.'),
    captions: { 'annuity-income': 'An annuity converts a corpus into a monthly income for life.' },
  },

  // ------------------------------------------------------ insurance (l4-037–048)
  'l4-037': {
    sim: sim('cover', 'Cover is protection, not investment — check whether yours is enough.'),
    captions: { 'cover-ladder': 'Life cover exists to replace income, not to build wealth.' },
  },
  'l4-038': {
    sim: sim('cover', 'Pure protection: a large cover for a small, regular premium.'),
    captions: { 'term-cover-rungs': 'Pure cover — the rungs you need, at the lowest premium.' },
  },
  'l4-039': {
    sim: sim('cover', 'Lifetime cover bundled with savings — see where the money goes.'),
    captions: { 'whole-life-bundle': 'Lifetime cover bundled with savings — see what you pay for.' },
  },
  'l4-040': {
    sim: sim('compound', 'Insurance and investment mixed — compare the net return.'),
    captions: { 'endowment-mix': 'An endowment is insurance plus investment; the mix sets the return.' },
  },
  'l4-041': {
    sim: sim('feedrag', 'Charges come off before your money is invested — see the drag.'),
    captions: { 'ulip-charges': 'Charges come off each premium before your money is invested.' },
  },
  'l4-042': {
    sim: sim('cover', 'Keep them separate: cover for risk, investments for returns.'),
    captions: { 'cover-ladder': 'One ladder insures; a separate pot invests. Keep them apart.' },
  },
  'l4-043': {
    sim: sim('cover', 'Match cover to your city, family and income — see the gap.'),
    captions: { 'cover-ladder': 'The ladder shows how far a health cover actually stretches.' },
  },
  'l4-044': {
    sim: sim('cover', 'A higher deductible lowers the premium but raises what you pay.'),
    captions: { 'deductible-tradeoff': 'A higher deductible lowers the premium but raises your first cost.' },
  },
  'l4-045': {
    sim: sim('cover', 'A 20% co-pay on a large bill is a real number — size it.'),
    captions: { 'copay-slice': 'A co-pay is the slice of every bill you still pay yourself.' },
  },
  'l4-046': {
    sim: sim('cover', 'Cover does not start on day one for everything — plan the gap.'),
    captions: { 'waiting-period': 'Cover does not reach the top rungs until the waiting period ends.' },
  },
  'l4-047': {
    sim: sim('cover', 'What the policy will not pay for matters as much as what it will.'),
    captions: { 'cover-exclusions': 'Exclusions are the rungs the policy will not pay for.' },
  },
  'l4-048': {
    sim: sim('cover', 'Know the paperwork before you need it — claims are easier that way.'),
    captions: { 'cover-claim-steps': 'Knowing the steps turns a claim into a routine, not a crisis.' },
  },

  // ------------------------------------------------------- property (l4-049–053)
  'l4-049': {
    sim: sim('emi', 'Down payment, EMI, stamp duty, upkeep — add it all up.'),
    captions: { 'rent-vs-buy': 'Rent plus invest, or buy plus repay — the two paths compared.' },
  },
  'l4-050': {
    sim: sim('emi', 'Compare the true cost of buying against renting and investing.'),
    captions: { 'rent-vs-buy': 'The break-even point between renting and buying over time.' },
  },
  'l4-051': {
    sim: sim('compound', 'Build the down payment in safe, short-horizon assets.'),
    captions: { 'downpayment-effect': 'A bigger down payment shrinks the loan and the interest.' },
  },
  'l4-052': {
    sim: sim('emi', 'See how much of the early EMI is interest, and what prepaying saves.'),
    captions: { 'loan-amort': 'Interest-heavy early years, principal-heavy later ones.' },
  },
  'l4-053': {
    sim: sim('emi', 'The sticker price is only the start — add the running costs.'),
    captions: { 'loan-amort': 'Ownership cost is the loan plus everything it does not cover.' },
  },

  // -------------------------------------------------- education (l4-054–058)
  'l4-054': { sim: sim('compound', 'Save early for a cost that grows with inflation every year.') },
  'l4-055': { sim: sim('compound', 'A scholarship cuts the amount you must fund — see the difference.') },
  'l4-056': { sim: sim('emi', 'See the total repayment on an education loan, not just the EMI.') },
  'l4-057': { sim: sim('realreturn', 'Compare the cost today with the income it is expected to unlock.') },
  'l4-058': { sim: sim('realreturn', 'Forgone earnings are part of the cost — put a number on them.') },

  // ------------------------------------------------ derivatives (l4-059–082)
  'l4-059': {
    sim: sim('options-payoff', 'A futures payoff is a straight line through the strike — see it.'),
    captions: { 'deriv-payoff': 'A futures payoff is a straight line — gains and losses symmetric.' },
  },
  'l4-060': {
    sim: sim('options-payoff', 'Size the contract and watch the profit and loss swing.'),
    captions: { 'contract-sizing': 'Size the contract and the payoff scales with it.' },
  },
  'l4-061': {
    sim: sim('options-payoff', 'A small margin controls a large position — see the leverage.'),
    captions: { 'margin-leverage': 'A small margin controls a large position — that is the leverage.' },
  },
  'l4-062': {
    sim: sim('options-payoff', 'Leverage multiplies gains and losses alike — test the extremes.'),
    captions: { 'deriv-payoff': 'Leverage tilts the payoff line in both directions.' },
  },
  'l4-063': {
    sim: sim('options-payoff', 'At expiry only intrinsic value is left — watch the time value vanish.'),
    captions: { 'expiry-intrinsic': 'At expiry, time value is gone and only intrinsic value remains.' },
  },
  'l4-064': {
    sim: sim('options-payoff', 'Daily settlement means gains and losses are settled every day.'),
    captions: { 'mark-to-market': 'Daily settlement resets the position every evening.' },
  },
  'l4-065': {
    sim: sim('options-payoff', 'A hedge costs a little to cap a loss you could not absorb.'),
    captions: { 'deriv-payoff': 'A hedge caps the downside without removing all the upside.' },
  },
  'l4-066': {
    sim: sim('options-payoff', 'A naked position is a bet — see the capped upside and open downside.'),
    captions: { 'naked-speculation': 'A naked position: little upside, an open downside.' },
  },
  'l4-067': { captions: { 'call-put': 'A call pays off above the strike; a put pays off below it.' } },
  'l4-068': { captions: { 'call-put': 'The buyer\u2019s loss is capped at the premium paid.' } },
  'l4-069': { captions: { 'call-put': 'The option seller earns the premium — and takes the risk.' } },
  'l4-070': { captions: { 'moneyness': 'In-the-money, at-the-money and out-of-the-money, side by side.' } },
  'l4-071': { captions: { 'premium-split': 'Intrinsic value plus time value is what you pay for an option.' } },
  'l4-072': { captions: { 'time-decay': 'Time decay eats an option\u2019s value as expiry approaches.' } },
  'l4-073': { captions: { 'volatility-effect': 'Volatility moves the price of the option, not the strike.' } },
  'l4-074': { captions: { 'put-protection': 'A put is protection — its payoff rises as the market falls.' } },
  'l4-075': {
    sim: sim('options-payoff', 'Used well, derivatives transfer risk instead of creating it.'),
    captions: { 'risk-transfer': 'Used well, the payoff transfers risk rather than creating it.' },
  },
  'l4-076': {
    sim: sim('options-payoff', 'A farmer, a miller and a speculator — one contract, three motives.'),
    captions: { 'commodity-futures-roles': 'One contract, three views: producer, buyer and speculator.' },
  },
  'l4-077': {
    sim: sim('options-payoff', 'Trade the whole index in a single contract — see the payoff.'),
    captions: { 'index-futures': 'The whole index in one payoff line, up or down.' },
  },
  'l4-078': { captions: { 'currency-risk': 'A depreciating rupee changes the value of every foreign cash flow.' } },
  'l4-079': { captions: { 'exporter-importer': 'Exporters and importers sit on opposite sides of the same move.' } },
  'l4-080': { captions: { 'forward-lock': 'A forward locks the rate today for a payment months away.' } },
  'l4-081': { captions: { 'currency-risk': 'Unhedged, the exchange rate is an extra risk you did not choose.' } },
  'l4-082': { captions: { 'currency-risk': 'Hedging strips out a risk you are not paid to take.' } },

  // ------------------------------------------------- business (l4-083–093)
  'l4-083': { sim: sim('networth', 'Keep business and personal money separate — track both sides.') },
  'l4-084': { sim: sim('sheet', 'One owner, one set of books — keep the records clean.') },
  'l4-085': { sim: sim('sheet', 'Split the profit between partners and track each contribution.') },
  'l4-086': { sim: sim('sheet', 'Shared management, limited liability — structure the books.') },
  'l4-087': { sim: sim('networth', 'A company has its own balance sheet, separate from yours.') },
  'l4-088': { sim: sim('sheet', 'Registration starts a paper trail — keep it organised.') },
  'l4-089': { sim: sim('tax', 'Business income, GST and filings — see how the tax adds up.') },
  'l4-090': { sim: sim('sheet', 'If it is not recorded, it did not happen — build the ledger.') },
  'l4-091': { sim: sim('compound', 'Growth needs cash before it returns cash — model the gap.') },
  'l4-092': {
    sim: sim('networth', 'Runway and burn: how many months can the business survive?'),
    captions: { 'runway-cash': 'Runway is the rungs of cash left before the business runs dry.' },
  },
  'l4-093': { sim: sim('valuation', 'What a buyer pays for depends on the numbers you kept.') },

  // --------------------------------------------------- career (l4-094–101)
  'l4-094': { sim: sim('salary-slip', 'Your career is your biggest income stream — see it as one.') },
  'l4-095': { sim: sim('salary-slip', 'A better base lifts every future raise — see it compound.') },
  'l4-096': { sim: sim('salary-slip', 'Increments add up, but so does inflation — compare over time.') },
  'l4-097': { sim: sim('salary-slip', 'More money, more responsibility — check the pay is worth it.') },
  'l4-098': { sim: sim('salary-slip', 'A switch can reset your base for years — model the jump.') },
  'l4-099': { sim: sim('tax', 'Extra income is still taxable — plan for the extra bill.') },
  'l4-100': { sim: sim('networth', 'An emergency fund is what turns a job loss into a pause.') },
  'l4-101': { sim: sim('compound', 'Skills compound too — small gains, large results.') },
}
