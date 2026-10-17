import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: liquidity analysis, testing how quickly holdings convert to cash in stress.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Liquidity stress test: time-to-cash, discount, and lock-in analysis. */
export const l5_111: Chapter = {
  id: 'l5-111',
  title: 'Liquidity Analysis',
  subtitle: 'Test how quickly each holding converts to cash in a stressed market, and at what discount.',
  minutes: 11,
  blocks: [
    scene('time-to-cash', 'A stopwatch alongside each asset type: how many days to liquidate, and at what discount to the stated value.'),
    { kind: 'p', text: 'Liquidity analysis tests how quickly each holding in your portfolio can be converted into cash, and at what discount, when the market is under stress. In calm markets, liquidity seems plentiful. In stressed markets — a crash, a crisis, or a sudden need for cash — the true liquidity of each asset is revealed. The analysis has three parts: time-to-cash (how many days, weeks, or months it takes to convert the holding to cash), the discount (how much less you receive than the stated or fair value), and the lock-in (any contractual or structural barrier that prevents or delays exit.' },
    { kind: 'p', text: 'The three dimensions of liquidity are: (1) Time-to-cash: the typical period it takes to liquidate the holding. Listed equities settle on T+1, with an optional same-day cycle available on a limited set of stocks, but in a crash selling may take longer or the exchange may halt trading. Real estate may take months. Some crypto assets can be withdrawn in minutes, but only if you control the private key. (2) Discount: the haircut you face when liquidating under stress. A fire sale may require a 20-50% discount. The discount compensates the buyer for the risk and delay. (3) Lock-in: contractual or structural barriers — lock-up periods, redemption gates, notice requirements, or exit fees — that prevent or delay liquidation even if a buyer is found.' },
    { kind: 'h', text: 'The three liquidity dimensions in practice' },
    { kind: 'list', ordered: true, items: [
      'Time-to-cash examples: listed equities (T+1 normally, longer in stress), government bonds (usually liquid but may face price volatility), real estate (months to sell), physical gold (can be sold same-day but at a significant discount if not hallmarked or assayed), crypto (minutes to hours if you control the private key, days if on an exchange with withdrawal limits).',
      'Discount examples: a listed equity in a normal market may have a bid-ask spread of 0.5-1%, but in a crash the effective discount can be 10-20% as forced sellers accept any bid. Real estate fire sales can require 30-50% discounts. Crypto on an exchange with withdrawal limits may force a 5-15% haircut.',
      'Lock-in examples: equity-linked notes with a 3-year lock-up, mutual funds with a 1-year exit load, real estate with a minimum holding period, crypto on an exchange with daily withdrawal caps, fixed deposits with a premature-withdrawal penalty.',
    ] },
    l5Rule(
      'How to analyse the liquidity of any holding',
      'For each holding in your portfolio, note the typical time-to-cash, the expected discount under stress, and any lock-in periods or exit fees. If the holding cannot be liquidated within your time horizon without an unacceptable discount or a lock-in, it is not suitable for the goal it is meant to fund.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-liquidity-stress', 'You are presented with a portfolio of different holdings (listed equity, government bond, real estate, physical gold, crypto on-exchange). You must estimate the time-to-cash, the discount you would face in a stressed market, and any lock-in periods. The lab records your estimates and the correct answers, training you to assess liquidity before you need the cash.'),
    l5Illustrative('The holdings and stress scenarios in the lab are invented for practice. The three liquidity dimensions and the habit of assessing them before committing capital are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that liquidity is not a yes/no property. Every asset has a liquidity profile — time, discount, and lock-in — and the profile changes when the market changes. The lesson is to assess liquidity while the market is calm, so you know what you own when it is not.' },
    { kind: 'terms', items: [
      { term: 'Time-to-cash', meaning: 'The typical period it takes to convert the holding into cash, under normal and stressed market conditions.' },
      { term: 'Discount', meaning: 'The haircut you face when liquidating under stress, expressed as a percentage below the stated or fair value.' },
      { term: 'Lock-in', meaning: 'Contractual or structural barriers — lock-up periods, redemption gates, notice requirements, or exit fees — that prevent or delay liquidation.' },
    ] },
    l5Sources(['sebi', 'rbi'], [
      'SEBI\'s disclosure requirements for liquidity risk in mutual fund schemes',
      'RBI\'s framework for liquidity risk management in banks and NBFCs',
    ]),
  ],
  quiz: [
    {
      q: 'Which of the following assets typically has the SHORTEST time-to-cash under normal conditions?',
      options: [
        { text: 'Listed equity', correct: true, why: 'Listed equity is sold on the exchange and settles on T+1, making it one of the most liquid asset classes; a subset of stocks also offers an optional same-day cycle.' },
        { text: 'Government bond', why: 'Government bonds are liquid but may require a dealer and have price volatility that affects the sale price.' },
        { text: 'Physical gold', why: 'Gold can be sold same-day, but the assay, purity check, and dealer process add time.' },
        { text: 'Real estate', why: 'Real estate typically takes weeks or months to sell, even under normal conditions.' },
      ],
    },
    {
      q: 'In a stressed market, which asset is LEAST likely to require a significant discount to convert to cash?',
      options: [
        { text: 'Listed equity', why: 'In a crash, listed equity can face forced selling, and the effective discount may be 10-20% as sellers accept any bid.' },
        { text: 'Government bond', why: 'Government bonds may face price volatility, but they are generally more liquid than corporate bonds or real estate.' },
        { text: 'Physical gold', why: 'Gold may require a 20-50% discount in a fire sale, especially if the purity is disputed.' },
        { text: 'Real estate', correct: true, why: 'Real estate typically requires the largest discount (30-50% in a fire sale) and the longest time-to-cash, because there are few buyers and the transaction process is long.' },
      ],
    },
    {
      q: 'A fixed deposit charges a penalty of 1% of the principal if it is closed before maturity. Which dimension of liquidity does that belong to?',
      options: [
        { text: 'Time-to-cash, because the bank takes longer to pay out', why: 'The payout is not delayed; the bank will close the deposit on request. What it does is charge you for leaving early.' },
        { text: 'Lock-in and exit cost, because the penalty is a contractual charge for ending the term early', correct: true, why: 'This is the lock-in dimension as the chapter uses it: a term of the contract that makes early exit costly. It is close in effect to a discount, but the source is the deposit\'s own terms rather than the market price you would have to accept.' },
        { text: 'Market risk, because interest rates may have moved since the deposit was opened', why: 'The penalty is a fixed term of the deposit. It does not change with where rates have moved, which is what makes it predictable.' },
        { text: 'Credit risk, because the bank may not repay the deposit', why: 'The question is not whether the bank pays. The charge is contractual and certain; a bank\'s ability to repay is a separate question.' },
      ],
    },
    {
      q: 'You own a bond with a five-year lock-up that cannot be redeemed before maturity. Which liquidity dimension does this represent?',
      options: [
        { text: 'Time-to-cash, because five years is a long wait', why: 'The wait is a consequence of the lock-up rather than the dimension itself. What governs here is that the contract forbids the sale at any price.' },
        { text: 'Lock-in, because a term of the contract prevents liquidation regardless of market conditions', correct: true, why: 'A lock-up removes the exit altogether for its term. No buyer and no price can cure it, which is why a lock-in is the hardest form of illiquidity to work around.' },
        { text: 'Discount, because you would have to sell at a loss', why: 'There is no sale to accept a discount on. The restriction is on selling at all during the term.' },
        { text: 'Operational risk, because the registrar could fail to process a transfer', why: 'Operational failure is a different risk. Even with perfect systems, the terms of this bond would still prevent an early exit.' },
      ],
    },
    {
      q: 'Why can a liquidity mismatch hurt you even when every individual holding is sound?',
      options: [
        { text: 'Because an asset that is locked in cannot fund a goal that falls due before the lock-in ends, so the goal has to be met from whatever else happens to be liquid', correct: true, why: 'Each holding can be a reasonable investment and the plan can still fail, because the failure is in the timing rather than in the assets. This is why the horizon of a goal and the lock-up of a product are matched deliberately.' },
        { text: 'Because illiquid assets never rise in value', why: 'Illiquidity says nothing about return. An illiquid asset can produce an excellent return; what it cannot do is produce cash on a date you chose.' },
        { text: 'Because the regulator sets a minimum holding period for every asset', why: 'Lock-ins come from the terms of the specific product and from tax rules, not from a general minimum holding period applied to all assets.' },
        { text: 'Because liquidity risk and market risk are the same thing', why: 'They are distinct: an asset can fall in price while remaining easy to sell, and it can hold its value while being impossible to convert when you need it.' },
      ],
    },
    {
      q: 'You are building a portfolio for a goal that is 2 years away. Which of the following should have the SHORTEST time-to-cash?',
      options: [
        { text: 'Equity mutual funds', why: 'Equity funds can be redeemed on any business day, but the value can fluctuate significantly.' },
        { text: 'Liquid mutual funds', correct: true, why: 'Liquid mutual funds are designed for very short-term goals and can typically be redeemed on any business day with minimal or no discount.' },
        { text: 'Fixed deposits with a 1-year lock-in', why: 'The lock-in period of 1 year is longer than the 2-year goal, but the time-to-cash after the lock-in is short. However, liquid mutual funds are still more liquid.' },
        { text: 'Government bonds with 3-year maturity', why: 'These have a longer time-to-cash than liquid mutual funds, as they may need to be sold in the secondary market, which can take time and may involve a price discount.' },
      ],
    },
    {
      q: 'Which of these statements about liquidity is false?',
      options: [
        { text: 'Liquidity analysis is best done while markets are calm, so you know the profile of each holding before you need to sell', why: 'This is what the exercise is for: in a stress, everyone is selling at once and the price you are offered is decided by other people, so the assessment has to be made in advance.' },
        { text: 'The three dimensions of liquidity are time-to-cash, the discount you would accept, and any lock-in', why: 'Those are the three dimensions the chapter works with, and every holding has a position on all three.' },
        { text: 'In a stressed market every asset faces the same discount', correct: true, why: 'This is false, and it is the assumption that traps investors. In a stress the discounts diverge sharply: cash and short government paper hold their price, listed equity falls further as forced sellers appear, and property may simply find no buyer at any price for months.' },
        { text: 'A lock-in can prevent a sale even when a willing buyer exists', why: 'That is what makes a lock-in different from a thin market: with a thin market there is a price at which the holding moves, but a lock-in removes the sale itself.' },
      ],
    },
  ],
  takeaway: 'Liquidity has three dimensions: time-to-cash, the discount you face under stress, and any lock-in periods or exit fees. Assess all three for every holding, especially before committing capital to a goal with a known time horizon.',
}