import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: risk analysis, breaking a decision\'s risk into its components.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Risk matrix: the six components — market, credit, liquidity, concentration, operational, and conduct. */
export const l5_110: Chapter = {
  id: 'l5-110',
  title: 'Risk Analysis',
  subtitle: 'Break a decision\\u2019s risk into market, credit, liquidity, concentration, operational and conduct risk.',
  minutes: 12,
  blocks: [
    scene('risk-matrix', 'A 6-cell matrix table: rows are the risk types (market, credit, liquidity, concentration, operational, conduct), and the columns are the probability and consequence for each.'),
    { kind: 'p', text: 'Every decision carries risk, but not all risk is the same. A complete risk analysis breaks the decision\'s risk into six components. If you cannot name each component, you are exposed to risks you have not assessed, and the choices you make will be based on an incomplete picture. The six components are: market risk (prices move against you), credit risk (the counterparty fails to pay), liquidity risk (you cannot exit without a large loss), concentration risk (you have too much in one thing), operational risk (internal failure or error), and conduct risk (mis-selling, fraud, or regulatory breach).' },
    { kind: 'p', text: 'The six components are: (1) Market risk: the risk that prices of your holdings fall due to broader market movements — equity market crash, interest rate rise, currency depreciation. (2) Credit risk: the risk that the counterparty — borrower, issuer, counterparty to a derivative — does not pay when due. (3) Liquidity risk: the risk that you cannot sell the asset or withdraw your money when you need to, or that you must sell at a severely discounted price. (4) Concentration risk: the risk that your portfolio or assets are too heavily exposed to a single issuer, sector, or market, so that a single adverse event has an outsized impact. (5) Operational risk: the risk of loss resulting from internal failures — technology breakdown, process error, people error, or fraud within the organisation. (6) Conduct risk: the risk that the counterparty or product behaves unfairly or illegally — mis-selling, hidden fees, breach of regulation, or fraud.' },
    { kind: 'h', text: 'The six risk components in practice' },
    { kind: 'list', ordered: true, items: [
      'Market risk example: a equity-heavy portfolio falls 30% in a market crash. The risk is in the equity exposure, not in the specific stocks.',
      'Credit risk example: a corporate bond issuer misses an interest payment. The risk is the issuer\'s ability to pay, not the general market.',
      'Liquidity risk example: a real estate fund suspends redemptions because it cannot sell the properties quickly. The risk is the mismatch between the fund\'s promised liquidity and the actual time to sell.',
      'Concentration risk example: 60% of your portfolio is in one company\'s stock. If that company has a scandal, 60% of your wealth is affected.',
      'Operational risk example: your trading platform has a outage for two days during a market move. The risk is the technology or process failure, not the market direction.',
      'Conduct risk example: a product is mis-sold with hidden fees that are not disclosed in the key fact statement. The risk is the seller\'s conduct, not the product\'s intrinsic qualities.',
    ] },
    l5Rule(
      'How to complete a six-component risk analysis',
      'Before you make any significant financial decision, list each of the six risk components and note the probability and consequence for each. If you cannot identify a component or cannot assess its probability and consequence, ask the promoter for clarification, or treat the unknown as a risk that you will not proceed until it is resolved.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-risk-register', 'You are presented with a financial decision (e.g., investing in a specific fund, taking a loan, or entering a trading strategy). You must complete a risk register listing all six risk components, noting the probability and consequence for each. The lab records which components you identified, which you left blank, and the conclusions you would draw. This trains you to make risk analysis a habit rather than an afterthought.'),
    l5Illustrative('The financial decision and scenario in the lab are invented for practice. The six-component risk register and the habit of completing it before any decision are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that most people can name the risk they are worried about (usually "the market"), but they cannot name the other five. A complete risk analysis means naming all six, because the risk you do not name is the risk that will catch you by surprise.' },
    { kind: 'terms', items: [
      { term: 'Market risk', meaning: 'The risk that prices move against you due to broader market movements.' },
      { term: 'Credit risk', meaning: 'The risk that the counterparty fails to pay when due.' },
      { term: 'Liquidity risk', meaning: 'The risk that you cannot exit the position or withdraw your money when you need to.' },
      { term: 'Concentration risk', meaning: 'The risk that you have too much exposure to a single issuer, sector, or market.' },
      { term: 'Operational risk', meaning: 'The risk of loss from internal failures — technology, process, people, or fraud.' },
      { term: 'Conduct risk', meaning: 'The risk of mis-selling, hidden fees, regulatory breach, or fraud by the counterparty.' },
    ] },
    l5Sources(['sebi', 'rbi', 'irdai'], [
      'SEBI\'s risk disclosure requirements for market products',
      'RBI\'s framework for credit, liquidity and operational risk in regulated entities',
      'IRDAI\'s risk classification for insurance products',
    ]),
  ],
  quiz: [
    {
      q: 'Which of the six risk components is most directly related to the possibility that a counterparty will fail to meet its obligations?',
      options: [
        { text: 'Market risk', why: 'Market risk is about price movements, not counterparty default.' },
        { text: 'Credit risk', correct: true, why: 'Credit risk is precisely the risk that the counterparty — borrower, issuer, or derivative counterparty — does not pay when due.' },
        { text: 'Liquidity risk', why: 'Liquidity risk is about your ability to exit, not about the counterparty\'s payment obligation.' },
        { text: 'Conduct risk', why: 'Conduct risk is about mis-selling or regulatory breach, not about payment default.' },
      ],
    },
    {
      q: 'You have all your savings in a single real estate property. Which risk component is most relevant?',
      options: [
        { text: 'Market risk', why: 'Property prices do move with the market, but that is a second-order concern here. The reason one property is dangerous is not that prices move; it is that everything you own moves together.' },
        { text: 'Concentration risk', correct: true, why: 'One property means a single event — a downturn in one locality, a tenant dispute, a structural problem — lands on your entire net worth at once, with nothing held elsewhere to absorb it.' },
        { text: 'Conduct risk', why: 'Conduct risk is about how a product is sold or a contract performed, not about how your savings are spread.' },
        { text: 'Operational risk', why: 'Operational risk covers failures of process and systems, such as a record lost or a payment misrouted. It is a narrower issue than the exposure created by owning one asset.' },
      ],
    },
    {
      q: 'A portfolio holds 150 companies across 20 sectors. Which risk component is most likely to be reduced by that spread?',
      options: [
        { text: 'Market risk', why: 'Market risk is what diversification cannot remove: in a broad fall, almost every equity holding declines together, however many of them there are.' },
        { text: 'Concentration risk', correct: true, why: 'Spreading holdings across many companies and sectors is precisely the remedy for concentration risk, because no single issuer or industry decides the outcome.' },
        { text: 'Credit risk', why: 'Credit risk belongs to the issuers of the debts in a portfolio; owning more equity names does not change whether a bond issuer pays.' },
        { text: 'Operational risk', why: 'Operational risk sits in the systems and processes that hold and settle your investments, and diversification does not address it.' },
      ],
    },
    {
      q: 'You lend a friend a lump sum at a fixed rate of interest. Which risk component are you most exposed to?',
      options: [
        { text: 'Market risk', why: 'Broad price movements are not what stands between you and your money here. The single mover is whether the borrower pays.' },
        { text: 'Credit risk', correct: true, why: 'You are the lender and your friend is the counterparty, so the exposure is that the loan is not repaid as agreed. Note the word "as agreed": a loan repaid late is a credit event even when the money eventually arrives.' },
        { text: 'Liquidity risk', why: 'Liquidity risk describes your own ability to convert an asset into cash. The problem here is on the other side of the transaction, not in your ability to sell.' },
        { text: 'Concentration risk', why: 'Concentration risk describes too much of a portfolio sitting in one place. It may well apply to you if this loan is most of your savings, but the risk created by the loan itself is credit risk.' },
      ],
    },
    {
      q: 'Which of these statements about the six risk components is false?',
      options: [
        { text: 'Market risk comes from broad price movements in equity, interest or currency markets', why: 'That is what market risk is: a movement in prices that affects many holdings at once, whatever you chose.' },
        { text: 'Credit risk is that a counterparty does not pay, and it applies only to loans and not to market investments', correct: true, why: 'This is false, and the error is worth remembering. Credit risk attaches to any obligation owed to you — a bond that may not be repaid, a derivative counterparty that may fail, a deposit with a bank. Narrowing it to loans is how a bond or a structured product gets bought without its credit exposure being seen.' },
        { text: 'Liquidity risk is that you cannot exit a holding without accepting a large loss', why: 'That is the sense in which liquidity is a risk rather than a convenience: the asset exists, but the price you would need to accept to leave quickly is not the price on the screen.' },
        { text: 'Concentration risk arises when too much of your money sits with one issuer or one sector', why: 'That is the definition, and it is why a single large holding can be risky even when the underlying company looks safe.' },
      ],
    },
  ],
  takeaway: 'Every decision carries six types of risk. A complete analysis names all six — market, credit, liquidity, concentration, operational, and conduct — and notes the probability and consequence for each. If you cannot name a component, you are exposed to risk you have not assessed.',
}