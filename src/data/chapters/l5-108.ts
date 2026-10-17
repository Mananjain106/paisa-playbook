import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: evaluating financial products compared on multiple axes.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Product comparison on five axes: return source, risk, liquidity, cost, and tax. */
export const l5_108: Chapter = {
  id: 'l5-108',
  title: 'Evaluating Financial Products',
  subtitle: 'Compare any two products on return source, risk, liquidity, cost and tax rather than on headline yield.',
  minutes: 11,
  blocks: [
    scene('product-compare-axes', 'A radar chart with five axes: return source, risk, liquidity, cost, and tax. Each product fills the shape differently.'),
    { kind: 'p', text: 'Most people compare financial products by headline yield — the stated interest rate, dividend, or return percentage. This is a trap. Two products can have the same headline yield but very different risk, liquidity, cost, and tax profiles. The five-axis comparison forces you to look at the things that actually determine your outcome: where the return comes from (interest, rent, profit, capital gain), how much risk the product carries (market, credit, liquidity, concentration, operational, conduct), how quickly you can get your money back (liquidity), what the all-in cost is (fees, loads, expense ratios, hidden costs), and how the return is taxed in your hands (short-term, long-term, exempt, slab rate). The comparison does not tell you which product is "best" — it tells you which product is suited to your purpose and your tolerance for each axis.' },
    { kind: 'p', text: 'The five axes are: (1) Return source: is the return interest, rent, profit, or capital gain? Where does it actually come from? (2) Risk: what can go wrong? Market risk (prices fall), credit risk (counterparty fails), liquidity risk (you cannot sell), concentration risk (too much in one thing), or conduct risk (mis-selling, fraud). (3) Liquidity: can you exit when you need to? Can you convert to cash without a large penalty or a long wait? (4) Cost: what are all the layers of cost? Expense ratios, entry loads, exit loads, advisory fees, transaction costs, and the tax cost of trading. (5) Tax: how is the return taxed? Short-term vs long-term holding periods, exemptions, slab rates, and the tax treatment of the return source.' },
    { kind: 'h', text: 'The five-axis comparison in practice' },
    { kind: 'list', ordered: true, items: [
      'Example: comparing a fixed deposit with a debt mutual fund. The deposit may quote the higher headline rate, and its interest is taxed at your slab rate. The fund is more liquid, since units redeem on any business day, and its charges may be lower — but its gains are also taxed at your slab rate: for a fund that holds not more than 35% of its proceeds in domestic equity, section 50AA treats every gain as short-term, so holding for three years no longer earns a long-term rate or indexation. The comparison shows that the "better" product depends on your holding period, the rate you actually pay, and how soon you may need the money.',
      'Example: comparing an equity stock with a REIT. The stock may have higher return potential but also higher volatility (risk). The REIT may offer more consistent income (return source: rent + dividend) but less liquidity (you sell on the exchange, but bid-ask spreads can be wide) and different tax treatment (dividend vs capital gain).',
    ] },
    l5Rule(
      'How to compare any two financial products on the five axes',
      'Before you invest, list each product on the five axes. For each axis, write down what you know and what you do not know. Do not decide based on the headline yield alone. The comparison reveals where each product fits your purpose — and where each product has risks or costs you may not have anticipated.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-product-comparator', 'You are given two product summaries, each with different combinations of return source, risk, liquidity, cost, and tax profile. You must complete a comparison table on the five axes and indicate which product is better suited for a short-term goal, a long-term goal, and a goal that requires high liquidity. The lab records your choices and the reasoning you give for each axis.'),
    l5Illustrative('The product summaries and comparison tables in the lab are invented for practice. The five-axis comparison method and the habit of looking beyond headline yield are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that headline yield is a number taken out of context. A 7% return means very different things in a tax-free versus a taxable account, in a liquid versus an illiquid product, in a low-risk versus a high-risk vehicle. The five-axis comparison brings the context back, and the lesson is to never decide on a product based on yield alone.' },
    { kind: 'terms', items: [
      { term: 'Return source', meaning: 'Where the return actually comes from — interest, rent, profit, or capital gain — rather than the quoted percentage.' },
      { term: 'Liquidity', meaning: 'How quickly and at what cost you can convert the investment into cash when you need to.' },
      { term: 'All-in cost', meaning: 'Every layer of cost combined: expense ratios, loads, advisory fees, transaction costs, and the tax cost of trading.' },
      { term: 'Tax treatment', meaning: 'How the return is taxed in your hands, including holding periods, exemptions, and slab rates.' },
    ] },
    l5Sources(['sebi', 'irdai', 'amfi'], [
      'SEBI\'s investor education on product comparison and suitability, and the riskometer every scheme must display',
      'IRDAI\'s comparison requirements for insurance and investment products',
      'AMFI material on comparing mutual fund schemes, including the total expense ratio and the tax treatment',
    ]),
  ],
  quiz: [
    {
      q: 'When comparing two fixed-income products with the same headline yield, which axis is most likely to reveal the difference?',
      options: [
        { text: 'Return source', why: 'Both products may quote a similar yield, but the source — interest versus rent or profit — can be very different.' },
        { text: 'Tax treatment', correct: true, why: 'Two products with the same yield can have very different tax outcomes depending on holding period, exemption eligibility, and slab rate. Tax is the axis most likely to reveal the true after-tax difference.' },
        { text: 'Liquidity', why: 'Liquidity can differ, but if both are fixed-income products, they may both have limited liquidity.' },
        { text: 'Cost', why: 'Costs can differ, but many fixed-income products have similar expense structures.' },
      ],
    },
    {
      q: 'You are comparing a bank fixed deposit and a liquid fund for money you will need in three months. Which axis decides it, and why?',
      options: [
        { text: 'Cost, because the fund carries an expense ratio that the deposit does not', why: 'The cost difference over three months is small. What would actually hurt is being unable to reach the money on the day the goal falls due.' },
        { text: 'Liquidity, because the money is needed on a short date and closing a deposit early usually carries a penalty', correct: true, why: 'For a goal three months away, the ability to exit on the needed date at a known price is worth more than a small difference in quoted yield. That is the liquidity axis deciding the choice.' },
        { text: 'Tax, because a liquid fund is always more tax-efficient than a deposit', why: 'Neither product is always better on tax: it depends on your slab and on how long you hold. Tax cannot be decided before the holding period is fixed.' },
        { text: 'Return source, because a deposit earns interest and a fund does not', why: 'Both are lending-type returns: a liquid fund holds money-market instruments that pay interest. Their return source is nearly the same.' },
      ],
    },
    {
      q: 'Which question is the five-axis comparison NOT designed to answer?',
      options: [
        { text: 'Where does the return actually come from?', why: 'That is the first axis, and forcing the question is the point of the exercise.' },
        { text: 'How quickly can I get out, and what does leaving cost?', why: 'That is the liquidity axis, including lock-ins and exit charges.' },
        { text: 'Which of these two products will produce the higher return next year?', correct: true, why: 'The comparison tests suitability for a purpose and a horizon. It cannot forecast which product will win over the next twelve months, and a method that claims to is selling a prediction.' },
        { text: 'What will this cost me in total, and how will it be taxed?', why: 'These are the cost and tax axes, and they are deliberately kept separate from the headline yield.' },
      ],
    },
    {
      q: 'You are deciding between two investment products for a goal 7 years away. Product A offers 8% return with high volatility. Product B offers 7% return with low volatility. The five-axis comparison would primarily help you decide based on',
      options: [
        { text: 'The headline yield difference of 1%', why: 'The 1% difference is less important than the risk and horizon match.' },
        { text: 'Risk tolerance and horizon matching', correct: true, why: 'The five-axis comparison reveals that Product B\'s lower risk may be more suitable for a 7-year horizon, and that volatility (risk) is the key differentiator, not the 1% return difference.' },
        { text: 'The tax treatment of the 8% return', why: 'Tax treatment is one axis, but the horizon and risk are more important for a 7-year goal.' },
        { text: 'The liquidity of both products', why: 'Liquidity is one axis, but for a 7-year goal, it is less critical than risk and horizon matching.' },
      ],
    },
    {
      q: 'A salesperson says two products are "the same 9%". Which response best reflects the five-axis comparison?',
      options: [
        { text: 'Agree, because the quoted yield is identical', why: 'Identical yields can sit on different return sources, different risks, different exits, different costs and different tax treatment. That is precisely the gap the five axes are designed to expose.' },
        { text: 'Ask what the return comes from, what it costs, how quickly you can exit, and how it is taxed, before treating the two as comparable', correct: true, why: 'The five axes are return source, risk, liquidity, cost and tax. Two products are comparable only after each of them has been named.' },
        { text: 'Choose whichever has the lower minimum investment', why: 'Ticket size is not one of the axes, and a lower entry amount says nothing about the value of what you are buying.' },
        { text: 'Choose whichever has the longer track record', why: 'A long record is useful evidence about behaviour, but it does not answer where the return comes from, what it costs or how you exit.' },
      ],
    },
  ],
  takeaway: 'Never decide on a financial product based on headline yield alone. Use the five-axis comparison — return source, risk, liquidity, cost, and tax — to assess suitability for your purpose and horizon.',
}