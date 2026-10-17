import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: fee analysis, total cost of ownership and whether the fee is buying skill, access or nothing at all.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Fee waterfall: the five layers of cost, from visible charges to hidden ownership costs. */
export const l5_112: Chapter = {
  id: 'l5-112',
  title: 'Fee Analysis',
  subtitle: 'Total the cost of ownership and decide whether the fee is buying skill, access or nothing at all.',
  minutes: 12,
  blocks: [
    scene('fee-waterfall', 'A five-layer waterfall diagram: advisory fee, expense ratio, entry load, exit load, and performance fee. Each layer adds to the total all-in cost.'),
    { kind: 'p', text: 'Most investors look only at the headline rate of return, but the all-in cost of ownership is what actually determines your net outcome. A product with a 7% return and a 2% all-in cost is very different from a product with a 6% return and a 0.5% all-in cost. The fee waterfall makes the five distinct layers of cost visible, so you can decide whether each fee is buying you something real (skill, access, or a necessary service) or whether it is simply draining your returns.' },
    { kind: 'p', text: 'The five layers of the fee waterfall are: (1) Advisory fee: the fee paid to an advisor, distributor, or platform for recommendations and ongoing advice. It may be a percentage of assets under advice, a flat annual fee, or a commission on transactions. (2) Expense ratio: the annual operating cost of a fund, expressed as a percentage of assets. It includes management fees, administrative costs, and other operational expenses. It is deducted from the fund\'s return, so you never see it as a separate charge. (3) Entry load: a charge paid when you first invest, expressed as a percentage of the amount invested. It is less common now, but some products still impose it. (4) Exit load: a charge paid when you redeem or sell, expressed as a percentage of the amount redeemed. It discourages early exit and compensates the distributor for the initial service. (5) Performance fee: a fee based on the product\'s returns, typically a percentage of the gain above a benchmark or hurdle rate. It aligns the manager\'s incentives with your own, but it can also encourage taking excessive risk to generate a fee.' },
    { kind: 'h', text: 'The five layers, and the question each answers' },
    { kind: 'table', caption: 'The five fee layers, and the question each answers', headers: ['Layer', 'What it is', 'The question it answers'], rows: [['Advisory fee', 'Paid to an advisor or platform for recommendations and ongoing advice', 'Is the advice delivering measurable value, or am I paying for a name?'], ['Expense ratio', 'The fund\'s annual operating cost, expressed as a percentage of assets', 'Is the expense ratio competitive for the strategy and asset class?'], ['Entry load', 'A charge at investment, as a percentage of the amount invested', 'Does the entry load discourage me from investing at all, and can I buy the same thing without it?'], ['Exit load', 'A charge at redemption, as a percentage of the amount sold', 'Is the exit load reasonable for the holding period, or am I penalised for needing my money back?'], ['Performance fee', 'A fee based on returns above a benchmark or hurdle rate', 'Is the performance fee aligned with my outcome, or is it encouraging excessive risk?']], },
    l5Rule(
      'How to evaluate whether a fee is buying skill, access or nothing at all',
      'For each fee layer, ask: (1) What am I getting in exchange? (2) Is what I am getting essential, or could I obtain it elsewhere at lower cost? (3) Does the fee align my incentives with the manager\'s, or does it encourage behaviour that benefits the manager at my expense? If the answer to (1) is unclear, or the answer to (2) is "I could get this cheaper elsewhere", the fee is likely buying nothing. If the answer to (3) is that the manager is encouraged to take risks I would not take, the fee may be misaligned.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-fee-audit', 'You are presented with a product summary that includes some or all of the five fee layers. You must calculate the all-in cost over a specified holding period, and indicate whether each fee is buying skill, access, or nothing at all. The lab records your cost calculation and your judgement on each fee, training you to make the fee audit a habit before committing money.'),
    l5Illustrative('The product summaries and fee structures in the lab are invented for practice. The five-layer waterfall and the habit of auditing fees before investing are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that a small difference in all-in cost compounds dramatically over time. A 1% difference in annual cost over 20 years can reduce your final corpus by 15-20%, even if the headline returns are identical. The lesson is to audit every fee layer before you invest, and to question any layer where the value received is not clear.' },
    { kind: 'terms', items: [
      { term: 'Advisory fee', meaning: 'The fee paid to an advisor, distributor, or platform for recommendations and ongoing advice, typically a percentage of assets under advice, a flat annual fee, or a commission.' },
      { term: 'Expense ratio', meaning: 'The fund\'s annual operating cost, expressed as a percentage of assets under management. It includes management fees, administrative costs, and other operational expenses, and is deducted from the fund\'s return.' },
      { term: 'Entry load', meaning: 'A charge paid when you first invest, expressed as a percentage of the amount invested. It is less common now but still used by some products.' },
      { term: 'Exit load', meaning: 'A charge paid when you redeem or sell, expressed as a percentage of the amount redeemed. It discourages early exit and compensates the distributor.' },
      { term: 'Performance fee', meaning: 'A fee based on the product\'s returns above a benchmark or hurdle rate, typically a percentage of the gain.' },
    ] },
    l5Sources(['sebi', 'amfi', 'irdai'], [
      'SEBI\'s rules on fee transparency for investment products and on distributor compensation, including the total expense ratio a scheme must disclose',
      'AMFI material on the total expense ratio and on fee disclosure for mutual fund schemes',
      'IRDAI\'s disclosure requirements for the charges in insurance and investment products',
    ]),
  ],
  quiz: [
    {
      q: 'A fund carries a 1.5% annual expense ratio and a 1% exit load on redemptions inside one year. You redeem after nine months. What is the exit load actually charged, and why?',
      options: [
        { text: 'Nothing, because nine months is inside the first year', why: 'An exit load applies precisely when you leave inside the stated period. Leaving after the period is when it does not apply.' },
        { text: '1% of the redemption value, because the holding period is shorter than the one-year threshold', correct: true, why: 'The exit load is charged once, on the way out, as a share of the amount redeemed. It is separate from the expense ratio, which is deducted from the fund\'s assets every day.' },
        { text: '1.5%, the same as the expense ratio', why: 'The two charges are unrelated. The expense ratio is an ongoing deduction inside the NAV; the exit load is a one-time charge at redemption.' },
        { text: 'The exit load plus nine months of the expense ratio, billed separately', why: 'The expense ratio is already reflected in the NAV you redeem at, so it is never billed again on top. The only separate charge here is the exit load.' },
      ],
    },
    {
      q: 'An adviser charges 1% of assets each year and also receives commission from the funds she recommends. Why does that matter?',
      options: [
        { text: 'It does not matter, because the fee is the same whoever pays it', why: 'Who pays changes the incentive. Two payments that reward different products can pull the recommendation in the direction of the better-paying one.' },
        { text: 'Because a second, hidden payment can bias the recommendation, which is why the nature and amount of such payments have to be disclosed to the client', correct: true, why: 'The conflict is the issue, not the advice as such. Disclosure is what lets a client see both payments and judge the recommendation in the light of them.' },
        { text: 'Because commission-funded distribution is not permitted in India', why: 'Commission-based distribution is permitted and regulated. What the rules attack is the undisclosed conflict, not the existence of the payment.' },
        { text: 'Because an adviser who charges only fees is always better', why: 'The structure of the payment is what matters here, and a fee-only arrangement can still be expensive or unsuitable. Do not read a guarantee out of a business model.' },
      ],
    },
    {
      q: 'Fund A charges 0.5% a year and Fund B charges 2.0%; both earn the same gross return. Over twenty years, what happens to the difference?',
      options: [
        { text: 'Almost nothing, because 1.5% a year is a trivial amount', why: 'A small annual charge is trivial in one year and is not trivial in twenty, because the amount it removes stops compounding at the same rate as the rest of the corpus.' },
        { text: 'Fund A ends up roughly a quarter larger, because a 1.5% annual difference compounds against Fund B for the whole period', correct: true, why: 'The gap is not linear. Each year Fund B pays the charge on a balance that Fund A kept, so the difference accumulates on both the payment and its lost growth. The exact figure depends on the return, but the direction and the rough size are certain.' },
        { text: 'Fund A is larger by exactly 1.5% × 20, which is 30%', why: 'Multiplying the percentage by the years ignores compounding, and it does not compound the money that was never invested. The true gap comes from compounding the net return on each side.' },
        { text: 'The two end up equal, because costs are already deducted from the return', why: 'Costs being deducted is exactly why the two do not end up equal. The cheaper fund compounds on the larger base that the higher cost would have removed.' },
      ],
    },
    {
      q: 'Two funds hold nearly the same portfolio at nearly the same fee. What is the most useful next question for an investor?',
      options: [
        { text: 'Which one has the longer track record?', why: 'A longer record is evidence about past behaviour, but it is not the cost question you were asking, and it is the smaller difference here.' },
        { text: 'What does the fee actually buy: access to a market you could not otherwise reach, a service you use, or nothing you can name?', correct: true, why: 'Once the price is nearly the same, the question shifts from size to value. A fee that buys index access of a hard-to-reach market, or a planning service you actually use, is doing work; a fee that buys neither is simply what the product costs.' },
        { text: 'Which distributor is paid less commission?', why: 'Commission affects the advice you receive, which is worth knowing. But it is not the investor\'s cost and it does not tell you what the fee is buying.' },
        { text: 'Which one has no exit load?', why: 'An exit load is one layer among several, and a fund without one may be the more expensive of the two on the other layers.' },
      ],
    },
    {
      q: 'A fund charges a performance fee of 10% of the return above a 5% hurdle. The fund returns 12% in a year. What does the fee cost you that year?',
      options: [
        { text: '10% of your money, because the fund returned 12%', why: 'The fee is not charged on the whole return. It is charged only on the part above the hurdle, which is 12% − 5%, or 7%.' },
        { text: '10% of the 7% excess, which is 0.7% of your investment for that year', correct: true, why: 'The excess over the hurdle is 7%, and the fee takes 10% of it, so 0.7% of your investment. That is the arithmetic of a performance fee: it scales with the excess, not with the whole return.' },
        { text: '7%, which is the whole excess over the hurdle', why: 'The 7% is the excess return, which is the base the fee is calculated on. The fee is 10% of that base, not the base itself.' },
        { text: 'Nothing, because the hurdle of 5% absorbs the fee', why: 'The hurdle decides which part of the return the fee applies to. It does not cancel the fee on the part above it.' },
      ],
    },
  ],
  takeaway: 'The all-in cost of ownership comprises five distinct layers. Audit each layer before investing, and question whether the fee is buying skill, access, or nothing at all. A small difference in all-in cost compounds dramatically over time.',
}