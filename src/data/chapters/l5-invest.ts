import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band two, batch 1 — chapters l5-020 to l5-029.
 *
 * The investing half of mastery: how a portfolio is built from purpose and
 * horizon, how weights and drift are managed, why owning many things is not
 * diversification, how a rebalancing rule is written and priced, and how goals
 * are funded with dates and amounts.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: the
 * product-labelling and riskometer rules for mutual fund schemes, the
 * investment limits that cap a scheme's single-issuer and sector exposure, the
 * capital-gains rates that decide what a rebalance costs (20% short-term and
 * 12.5% long-term for listed equity above the ₹1.25 lakh annual exemption), and
 * the tax year 2026-27 framework established earlier in this level.
 */
export const l5InvestA: Record<string, Chapter> = {
  'l5-020': {
    id: 'l5-020',
    title: 'Advanced Portfolio Construction',
    subtitle: 'Build from purpose downwards; buy products last.',
    minutes: 11,
    blocks: [
      scene('construction-blocks', 'Purpose, horizon, risk capacity and asset mix, with products chosen last — because products are the layer that changes constantly.'),
      { kind: 'p', text: 'Most portfolios are built the wrong way round. A fund is recommended, or an app suggests one, and the money follows the product. The reasoning arrives afterwards, in the form of a story about why the fund is good. Portfolio construction reverses that: you start with what the money is for, add the date by which it is needed, test whether the plan could survive a bad year, set a mix, and only then think about which wrapper to hold it in.' },
      { kind: 'p', text: 'The reason the order matters is that the layers have different lifetimes. A purpose lasts decades. A horizon lasts until the date arrives. Products change, get merged, re-branded and closed. A portfolio assembled bottom-up has to be re-justified every time a product changes; one assembled top-down survives the change, because the product was never the decision.' },

      { kind: 'h', text: 'The five layers' },
      {
        kind: 'table',
        caption: 'What each layer answers, and how often it changes',
        headers: ['Layer', 'The question it answers', 'How often it changes'],
        rows: [
          ['Purpose', 'What is this money for, and what would change if it were not there?', 'Rarely — on a change in circumstances'],
          ['Horizon', 'When is it needed, and is that date fixed or flexible?', 'Slowly, as goals move closer'],
          ['Risk capacity', 'How large a fall could this plan absorb and still continue?', 'With income, obligations and dependants'],
          ['Asset mix', 'Which assets, in what weights, and what job does each do?', 'Annually, or by a written rule'],
          ['Products', 'Which specific fund, deposit or policy holds each slice?', 'Whenever the wrapper changes, which is often'],
        ],
      },
      { kind: 'p', text: 'Risk capacity is the layer most often confused with its cousin, risk tolerance. Tolerance is how you feel about a fall; capacity is how much of a fall the plan can survive. A person can have a high tolerance and no capacity — a large loan, one income, dependants — in which case the tolerance is irrelevant. The test of capacity is not a questionnaire but a question: if this holding fell 40% next year, could I still fund everything I have promised to fund?' } ,
      l5Rule(
        'The wrapper has to label its risk, and the label can change',
        'SEBI\'s product-labelling rules require every mutual fund scheme to display a riskometer, graded from low to very high, and to disclose the scheme\'s risk value each month in its portfolio disclosure. A change in the scheme\'s risk level must be communicated to unitholders. That last requirement is the useful one for a portfolio: it means a scheme cannot quietly become a different risk from the one you bought, and it gives you a written trigger to review whether the holding still matches the layer of the plan it was bought for.',
      ),

      { kind: 'h', text: 'Overlap, the invisible failure' },
      { kind: 'p', text: 'Two layers down from products sits a problem that only shows up when you look through the wrappers: overlap. Four equity funds from four different houses can hold most of the same fifty companies, so the portfolio is not four decisions, it is one decision made four times, paying four expense ratios. The consolidated view is what matters, and it belongs in the construction step rather than in a review a year later — which is the subject of the diversification chapter immediately after this one.' },
      { kind: 'list', ordered: true, items: [
        'Write one page. Purpose, horizon, mix and the rule for changing the mix. If it cannot be explained on one page, it is not a policy, it is a collection of preferences.',
        'Give each bucket its own mix. A single portfolio holding both money needed in two years and money needed in thirty cannot be optimised for either.',
        'State the tolerance band for each bucket, not just the target. The band is what stops a decision being made in the middle of a fall.',
        'Record the date and the reason for every change. Six months later, a decision journal is the difference between a strategy and a series of improvisations.',
        'Re-read the policy once a year, and on any change in income, dependants or debt. Those are the events that change capacity.',
      ] },
      sim('l5-portfolio-architect', 'Build buckets from purpose and horizon, stress each mix, and see the policy your choices amount to.'),
      l5Illustrative('The stress figures in this chapter and its lab are rough planning numbers, not forecasts. The riskometer requirement, the investment limits and the capital-gains rates quoted elsewhere in this batch are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One caution about the policy: it should be short enough to be read and specific enough to be wrong. A policy that says "invest for the long term and stay diversified" commits to nothing. A policy that says "money needed within three years holds at most 20% equity; the long-term bucket holds 80% equity and is rebalanced when it drifts more than 5 points" can be audited, and it can be broken — which is the point. The value of writing it down is that it tells you when you have departed from the plan, rather than leaving you to reconstruct the plan afterwards from your trades.' },
      { kind: 'terms', items: [
        { term: 'Risk capacity', meaning: 'How large a loss the plan can absorb and still meet every commitment — a fact about your circumstances, not your feelings.' },
        { term: 'Risk tolerance', meaning: 'How you react to a falling balance. Useful only where capacity allows you to act on it.' },
        { term: 'Investment policy', meaning: 'A one-page statement of purpose, horizon, target mix, tolerance bands and the rule for changing them.' },
        { term: 'Look-through', meaning: 'Consolidating every wrapper to its underlying holdings, which is the only honest way to see concentration.' },
        { term: 'Riskometer', meaning: 'The risk label every mutual fund scheme must display, with the value disclosed monthly and any change in level communicated to unitholders.' },
      ] },
      l5Sources(['sebi', 'amfi'], [
        'The product-labelling rules, including the riskometer and the monthly disclosure of a scheme\'s risk value',
        'The educational material on scheme categories, so a wrapper can be matched to the layer it is meant to serve',
      ]),
    ],
    quiz: [
      {
        q: 'Why is a portfolio built from products upwards fragile?',
        options: [
          { text: 'Because products charge higher fees than asset classes', why: 'Fees matter, but the structural problem is that the decision has to be re-made whenever a wrapper changes.' },
          { text: 'Because every product change forces the whole rationale to be re-justified', correct: true, why: 'When the product was the decision, a merger, a re-branding or a closure invalidates the reasoning. When the purpose and mix were the decision, it does not.' },
          { text: 'Because products are not regulated', why: 'Most are regulated. The fragility is about where the decision sits, not about registration.' },
          { text: 'Because products cannot be diversified', why: 'Products can be diversified; the issue is the order in which the decisions are made.' },
        ],
      },
      {
        q: 'You are comfortable with a 40% fall and would keep investing through it, but you have a large home loan, one income and two dependants. What does that mean?',
        options: [
          { text: 'You should take maximum equity risk because your tolerance is high', why: 'Tolerance without capacity is the classic mismatch. The plan has to survive the fall, not just your reaction to it.' },
          { text: 'Your capacity is lower than your tolerance, so the mix is set by capacity', correct: true, why: 'Capacity is a fact about obligations. Tolerance only decides how you feel while the capacity-appropriate mix falls.' },
          { text: 'Tolerance and capacity are the same thing measured two ways', why: 'They are different: one is psychological, the other structural, and they disagree often.' },
          { text: 'The loan should be ignored because it is a secured loan', why: 'Security against the borrowing does not remove the monthly obligation, which is exactly what reduces capacity.' },
        ],
      },
      {
        q: 'What does the riskometer requirement change for a portfolio owner?',
        options: [
          { text: 'It guarantees a scheme will not lose money', why: 'A label describes relative risk; it promises nothing about outcomes.' },
          { text: 'It gives a written trigger: if a scheme\'s risk level changes, you must check whether it still fits the layer it was bought for', correct: true, why: 'Every scheme must display a riskometer and disclose its risk value monthly, and a change in level has to be communicated — which turns "this feels different" into a documented event to act on.' },
          { text: 'It replaces the need for an asset allocation', why: 'Labels do not allocate. They inform one input into a decision that is still yours.' },
          { text: 'It applies only to debt schemes', why: 'The labelling requirement applies to mutual fund schemes generally, not to one category.' },
        ],
      },
    ],
    takeaway: 'Build each bucket from purpose, horizon and risk capacity, set the mix before choosing any product, write the policy and its tolerance band on one page — and expect the products to change while the plan does not.',
  },

  'l5-021': {
    id: 'l5-021',
    title: 'Asset Allocation',
    subtitle: 'Every asset is on the page because it does a job no other asset does.',
    minutes: 10,
    blocks: [
      scene('weight-targets', 'Four assets, four jobs and one sum of 100%: equity compounds, debt keeps dates, gold behaves differently, and cash means you never have to sell.'),
      { kind: 'p', text: 'Asset allocation is the decision that sets most of the risk and most of the return of a plan, and it is the one decision that requires no forecast. You do not need to know which asset will do best next year; you need each asset to have a job, and a weight that reflects how much of that job you need.' },
      { kind: 'p', text: 'The reason to hold more than one asset class is not that diversification sounds prudent. It is that the assets respond to different things. Equity responds to profits and to the price people are willing to pay for them. Debt responds to interest rates and to a promise to pay a fixed amount on a date. Gold responds to real rates, to the dollar and to fear. Cash responds to nothing and is the only one that is always available at its face value. A portfolio that holds all four is buying four different sets of exposures rather than one exposure four times.' },

      { kind: 'h', text: 'What each asset is for' },
      {
        kind: 'table',
        caption: 'The job of each slice, and what it costs you to hold',
        headers: ['Asset', 'The job it does', 'What it costs', 'Where it fails'],
        rows: [
          ['Equity', 'Compounding over decades, and the only asset class that has historically beaten inflation comfortably after tax', 'Deep and prolonged drawdowns, sometimes a decade of flat returns', 'Money needed on a date, because the date does not wait for a recovery'],
          ['Debt', 'Delivering a known amount on a known date, and cushioning equity', 'Lower long-run return, and inflation quietly eroding a fixed payout', 'Credit risk at the risky end, and duration risk when rates rise'],
          ['Gold', 'Behaving differently when real rates fall or confidence falls', 'No cash flow, storage and purity costs, long stretches of nothing', 'It is a hedge, not an engine: it will not fund a goal on its own'],
          ['Cash', 'Liquidity, so no asset has to be sold to meet an ordinary month', 'Inflation, and the opportunity cost of idle money', 'Being too large, which turns a plan into a deposit'],
        ],
      },
      { kind: 'p', text: 'The weights follow from the horizon, not from a model. Money needed in a year is cash and short debt, because the only thing that matters is that it is there. Money needed in thirty years is mostly equity, because a temporary fall is not a problem for a goal whose date is far away. The middle is genuinely in the middle, which means a mix of both rather than a belief that one of them is wrong.' } ,
      l5Rule(
        'The weight you set is not the weight you keep',
        'A portfolio drifts out of its target simply by working: if equity returns 18% and debt returns 7% over a few years, a 60/40 portfolio becomes a 70/30 one without any decision being taken. Nothing is wrong with the assets; the risk of the portfolio has changed. That is the reason a tolerance band exists and the reason rebalancing is a rule rather than an opinion — the arithmetic and the tax cost of the two rules are worked through in the rebalancing chapter of this batch.',
      ),

      { kind: 'h', text: 'Glide paths: the one scheduled change' },
      { kind: 'p', text: 'A glide path is an agreement with your future self that the mix will become more conservative as the date approaches, decided now rather than then. It exists because capacity falls as the date nears: a 30% fall with twenty years to go is an inconvenience, and the same fall with two years to go is a plan that no longer funds the goal. The two common designs are a fixed reduction each year, and a reduction tied to remaining years. Either is workable; what matters is that the schedule is written down while the market is calm, because a glide path improvised during a fall is just market timing with an older name.' },
      { kind: 'p', text: 'The last thing to be honest about is that none of these weights are precise. A 55/30/10/5 allocation and a 60/30/10/0 allocation will produce similar lives. The value is in the structure — a plan that has a growth engine, a date-keeper, a hedge and a liquidity floor — rather than in the third significant digit of a target weight.' },
      sim('l5-allocation-designer', 'Set target weights, watch the mix drift with real return differences, and add a glide path towards the date.'),
      l5Illustrative('The assumed returns in this chapter and its lab are assumptions chosen to make drift visible, not forecasts. Historical averages are not a promise, and the lab draws no conclusion from them beyond the arithmetic of re-weighting.'),
      { kind: 'terms', items: [
        { term: 'Strategic allocation', meaning: 'The long-term target weights across asset classes, set from purpose and horizon rather than from a view on the next year.' },
        { term: 'Drift', meaning: 'The movement of actual weights away from target as assets return different amounts. Unmanaged, drift changes the risk of the portfolio.' },
        { term: 'Glide path', meaning: 'A pre-agreed schedule that reduces risk as a goal\'s date approaches, written while markets are calm.' },
        { term: 'Tolerance band', meaning: 'The range around a target weight within which no action is taken, so that small movements do not generate costs.' },
      ] },
      l5Sources(['sebi', 'amfi'], [
        'The scheme categories and their mandated asset mixes, so an allocation can be implemented without a product that quietly holds something else',
        'The investor education material on asset classes and on how risk and return relate over different horizons',
      ]),
    ],
    quiz: [
      {
        q: 'A 60/40 portfolio returns 18% on its equity and 7% on its debt for four years. What has happened to your risk?',
        options: [
          { text: 'Nothing: the assets were not changed', why: 'The assets were not changed, but their weights were. A portfolio that drifts to roughly 70/30 has more equity risk than the one you set.' },
          { text: 'It has increased, because equity has become a larger share of the portfolio without any decision', correct: true, why: 'Drift is the mechanism by which portfolios silently become riskier. It is why a tolerance band and a rebalancing rule exist.' },
          { text: 'It has fallen, because the portfolio is worth more', why: 'A larger balance does not reduce risk. The share of it exposed to equity has risen.' },
          { text: 'It depends only on future returns', why: 'The change in risk has already happened; future returns decide the outcome, not the current exposure.' },
        ],
      },
      {
        q: 'What is the purpose of a glide path?',
        options: [
          { text: 'To increase returns as the goal approaches', why: 'A glide path reduces risk. Increasing return near the date is the opposite of what the horizon requires.' },
          { text: 'To reduce risk as the date approaches, because capacity falls even if tolerance does not', correct: true, why: 'A fall with years left is recoverable in time; the same fall near the date is a failure to fund the goal, which is why the schedule is agreed in advance.' },
          { text: 'To time the market using a long-term rule', why: 'A written schedule is deliberately not a market view. Improvised changes during a fall are the market-timing failure it prevents.' },
          { text: 'To hold every asset class in equal weights', why: 'Equal weights are one possible allocation, not what a glide path does.' },
        ],
      },
      {
        q: 'Which asset is included for liquidity rather than for return?',
        options: [
          { text: 'Equity', why: 'Equity is the growth engine, and its price is the least reliable when you need cash quickly.' },
          { text: 'Gold', why: 'Gold is a hedge. It can be sold, but its purpose is to behave differently, not to be the cash floor.' },
          { text: 'Cash', correct: true, why: 'Cash is there so that no other asset has to be sold to meet an ordinary month or a small shock — it buys optionality, not return.' },
          { text: 'Long-duration debt', why: 'Long debt is a return-seeking fixed-income holding whose price falls when rates rise, so it is the least cash-like part of debt.' },
        ],
      },
    ],
    takeaway: 'Set long-term weights so each asset has a job, expect the weights to drift as the assets work, reduce risk on a written schedule as the date approaches — and remember that a tolerance band, not a constant, is what you actually manage.',
  },

  'l5-022': {
    id: 'l5-022',
    title: 'Diversification',
    subtitle: 'Owning many things is not the same as owning different things.',
    minutes: 10,
    blocks: [
      scene('diversity-web', 'Three large-cap funds holding the same fifty companies is one bet with three expense ratios.'),
      { kind: 'p', text: 'Diversification is the only free lunch in investing, which is why it is also the most over-claimed. A statement with twelve fund names looks diversified and may hold one exposure twelve times. The test is not how many lines the statement has; it is how many independent things would have to go wrong for the portfolio to be badly hurt.' },
      { kind: 'p', text: 'There are three real forms of diversification and they are often confused with each other. Across asset classes, which is why an allocation exists. Within an asset class, across sectors, issuers and securities. And across time, which is achieved by contributing steadily rather than by any holding. A portfolio that has one of the three and claims all three is the common case.' },

      { kind: 'h', text: 'Correlation, in one paragraph' },
      { kind: 'p', text: 'Correlation measures whether two holdings move together. Holdings that move together give you less than the sum of their parts, because when one falls the other does too. The practical consequence is that diversification comes from combining things that respond to different drivers — equity and debt, domestic and foreign, growth and defensives — rather than from combining things that share a driver but differ in name. Correlations also change: assets that seem independent in calm markets can move together under stress, which is exactly when diversification was supposed to help.' } ,
      l5Rule(
        'A fund has limits on concentration; your portfolio does not',
        'Mutual fund investment norms cap how concentrated a single scheme may be — historically no more than 10% of a scheme\'s net assets in the securities of a single issuer, with additional sectoral limits for equity schemes. Those limits protect you inside a scheme. They do nothing about the concentration you create by holding several schemes that own the same securities: each scheme obeys its limit, and the consolidated portfolio can still hold a fifth of its money in one bank. Look-through is therefore your check, not the regulator\'s.',
      ),

      { kind: 'h', text: 'The three concentrations that matter' },
      { kind: 'list', ordered: true, items: [
        'Category overlap. Several funds in the same category hold much the same universe. Two large-cap funds typically overlap far more than two funds in different categories, so the second fund adds cost rather than diversification.',
        'Sector concentration. Sectors swing together. A portfolio with a fifth of its money in financials is making a single macro bet, however many schemes hold those financials.',
        'Single-issuer exposure through wrappers. Your largest company exposure is the sum across every wrapper, plus whatever your employer\'s stock plan or your provident fund may hold in the same names.',
      ] },
      { kind: 'p', text: 'There is a fourth concentration that has nothing to do with the market: your job. If your income, your employer\'s stock and your rental property all depend on the same sector or the same city, then the portfolio is not the only thing that is concentrated, and it needs to be less concentrated to compensate. Diversification is a property of your whole balance sheet, including the part that does not appear on it.' },
      sim('l5-overlap-checker', 'Open every wrapper, add up the underlying holdings, and see what your largest sector and company exposures really are.'),
      l5Illustrative('The overlap figures in this chapter and its lab are invented illustrations of a real effect. The concentration limits inside a scheme are the regulatory rules verified on 15 October 2026 and linked below; the limits that apply to your consolidated portfolio are yours to set.'),

      { kind: 'p', text: 'What to do about overlap is less dramatic than it sounds. Usually the answer is not to sell anything, but to stop adding: a third large-cap fund is unnecessary when two already overlap, so the next contribution goes to the slice that is thin. That is also the cheapest rebalance available, which connects this chapter to the next one — the correction is done with new money rather than by realising a gain.' },
      { kind: 'terms', items: [
        { term: 'Correlation', meaning: 'How closely two holdings move together. Low correlation is what makes a combination more stable than its parts.' },
        { term: 'Category overlap', meaning: 'The extent to which two funds own the same securities, usually high within a category and low across categories.' },
        { term: 'Sector concentration', meaning: 'The share of the portfolio exposed to one sector, measured after looking through every wrapper.' },
        { term: 'Single-issuer limit', meaning: 'A cap on exposure to one issuer. Regulations apply one inside each scheme; you set the one that applies to the whole portfolio.' },
      ] },
      l5Sources(['sebi', 'amfi'], [
        'The investment norms that cap a single scheme\'s exposure to one issuer and to a sector',
        'The scheme-level disclosures and category definitions that make overlap and concentration measurable',
      ]),
    ],
    quiz: [
      {
        q: 'You hold three large-cap funds from three different houses. What have you most likely achieved?',
        options: [
          { text: 'Three independent bets on the large-cap universe', why: 'Large-cap funds draw from a small universe of large companies. Three names do not create three independent sets of companies.' },
          { text: 'One large-cap exposure held three times, at three expense ratios', correct: true, why: 'Category overlap is the reason the number of schemes tells you little about diversification.' },
          { text: 'Diversification across asset classes', why: 'All three funds are in the same asset class. Asset-class diversification requires different assets, not different wrappers.' },
          { text: 'Protection against a fund manager leaving', why: 'Manager risk is real but second-order compared with the concentration you accept by owning the same exposure three times.' },
        ],
      },
      {
        q: 'Which concentration cannot be seen on a fund statement at all?',
        options: [
          { text: 'The expense ratio of each scheme', why: 'Expense ratios are disclosed for every scheme.' },
          { text: 'Your total exposure to one company or sector after combining every wrapper, your employer plan and your property', correct: true, why: 'Each wrapper obeys its own limit. Only look-through across the whole balance sheet shows the exposure you actually carry, including the part that depends on your job.' },
          { text: 'The category of each scheme', why: 'Categories are disclosed and standardised, which is what makes overlap measurable in the first place.' },
          { text: 'The past return of each scheme', why: 'Past returns are published; it is the consolidated exposure that is invisible.' },
        ],
      },
      {
        q: 'Why is correlation an imperfect guide to diversification?',
        options: [
          { text: 'Because it is only measurable for equity', why: 'It can be measured across asset classes; the limitation is different.' },
          { text: 'Because correlations change, and assets that look independent can move together in a crisis', correct: true, why: 'Diversification is most needed in stress, and that is when many supposedly uncorrelated assets begin to move together.' },
          { text: 'Because it is a tax concept', why: 'It has nothing to do with tax.' },
          { text: 'Because it only applies to funds', why: 'It applies to any pair of holdings, including property and your own income.' },
        ],
      },
    ],
    takeaway: 'Measure diversification after looking through every wrapper: own different things rather than many things, watch category overlap, sector concentration and single-issuer exposure across the whole balance sheet — and fix overlap with new money rather than by selling.',
  },

  'l5-023': {
    id: 'l5-023',
    title: 'Rebalancing',
    subtitle: 'A rule with a band, written before it is needed.',
    minutes: 10,
    blocks: [
      scene('rebalance-band', 'Equity crept from 55% to 69% without a single decision being taken, and crossed the band in year four.'),
      { kind: 'p', text: 'Rebalancing is the maintenance that keeps a portfolio at the risk you chose. Without a rule, the best-performing asset becomes most of the portfolio, and the risk you set is not the risk you hold. With a rule, the decision is made in advance and executed mechanically — which is precisely why it works, since the time you most need to sell the winner is the time it feels most wrong.' },
      { kind: 'p', text: 'The difficulty is that rebalancing is not free. Selling an asset to buy another realises a gain and pays tax on it, and in a taxable account that cost can exceed the benefit of returning to target. So the skill is not in rebalancing hard; it is in rebalancing cheaply, and knowing when to leave the drift alone.' },

      { kind: 'h', text: 'Two rules, and what each costs' },
      {
        kind: 'table',
        caption: 'Calendar versus threshold, in an account where gains are taxed',
        headers: ['Rule', 'How it works', 'What it costs'],
        rows: [
          ['Calendar', 'Rebalance on a fixed date, annually or half-yearly', 'Trades even when nothing meaningful has moved, so it pays tax and costs for no change in risk'],
          ['Threshold', 'Rebalance when a weight leaves a tolerance band, typically 5 points either side', 'Trades only when the risk has actually drifted, which is both less often and better timed'],
          ['New money first', 'Direct contributions to the underweight slice instead of selling the overweight one', 'Costs nothing in tax, because nothing is sold — the reason it is the best option where contributions exist'],
          ['Cash-flow rebalancing', 'Use income and redemptions rather than sales', 'Constraints how precisely you can hit the target, which is usually a good trade'],
        ],
      },
      l5Rule(
        'What a rebalance costs in tax',
        'For listed equity and equity-oriented funds, a gain realised within twelve months is a short-term capital gain taxed at 20%, and a gain on a holding longer than twelve months is a long-term capital gain taxed at 12.5% on the amount above ₹1.25 lakh of such gains in the year. Non-equity assets generally need twenty-four months to qualify as long term, and indexation is not available for these categories. The practical consequence for rebalancing is a preference order: direct new contributions first, sell within the long-term bucket second, and sell a short-term holding only when the drift is serious.',
      ),

      { kind: 'h', text: 'How to write the rule' },
      { kind: 'list', ordered: true, items: [
        'Choose the band, not the date. Five percentage points either side of target is a common starting point: wide enough to avoid trading on noise, narrow enough to keep the risk close to what you chose.',
        'Check the weights once a year and act only when the band is crossed. The check is free; the trade is not.',
        'Direct new money to the underweight slice before selling anything. In most plans, a year of contributions is enough to close a normal drift.',
        'Sell from the long-term bucket where a sale is unavoidable, and record why. A rebalance that ignores the holding period pays more tax for the same result.',
        'Write down what would make you break the rule, and treat that as a policy change rather than a tactic.',
      ] },
      sim('l5-rebalance-trigger', 'Run four years of returns under a calendar rule and a threshold rule, and see the tax each one creates.'),
      l5Illustrative('The returns in this chapter and its lab are fixed illustrations chosen to make drift visible. The capital-gains rates and the holding periods are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'Two edge cases are worth naming. In an account where gains are not taxed each year, the cost of rebalancing is close to zero, so a tighter band is reasonable and the only thing left to manage is the trading cost itself. And when a bucket is being drawn down — the years in which a goal is being spent — rebalancing and withdrawal planning are the same exercise: spend from the overweight slice, and the portfolio moves towards target while funding the goal.' },
      { kind: 'terms', items: [
        { term: 'Tolerance band', meaning: 'The permitted distance of an actual weight from its target before any action is taken.' },
        { term: 'Threshold rebalancing', meaning: 'Acting when a weight crosses the band, rather than on a calendar date.' },
        { term: 'Cash-flow rebalancing', meaning: 'Restoring the mix using contributions, income or withdrawals instead of sales, which avoids realising a gain.' },
        { term: 'Holding period', meaning: 'How long an asset has been held, which decides whether a gain is short-term or long-term for tax: twelve months for listed equity, generally twenty-four for other assets.' },
      ] },
      l5Sources(['sebi', 'incometax'], [
        'The framework within which schemes and rebalancing operate, including disclosure requirements that make the current mix visible',
        'The current capital-gains rates, the holding periods that decide them, and the annual exemption that applies before long-term tax is due',
      ]),
    ],
    quiz: [
      {
        q: 'Why is a threshold rule usually preferred to a calendar rule in a taxable account?',
        options: [
          { text: 'Because thresholds produce higher returns', why: 'They do not predict returns. The gain is in avoiding unnecessary trades and their tax.' },
          { text: 'Because it trades only when the risk has actually drifted, so it pays less tax for the same control', correct: true, why: 'A calendar rule trades whether or not anything has moved. A band trades only when the deviation is material, which reduces realised gains without letting risk run.' },
          { text: 'Because calendar rules are not permitted', why: 'Both are permitted and used; the choice is about cost and control.' },
          { text: 'Because bands eliminate capital-gains tax', why: 'Bands reduce the frequency of taxable sales; they cannot eliminate tax on a sale that is made.' },
        ],
      },
      {
        q: 'Your equity slice is 8 points overweight and you contribute every month. What is the cheapest correction?',
        options: [
          { text: 'Sell equity to buy debt immediately', why: 'This realises a gain and pays tax. It is the second-best option when contributions exist.' },
          { text: 'Direct the contributions to debt until the weights return to target', correct: true, why: 'Cash-flow rebalancing costs nothing in tax, and a year of contributions usually closes a normal drift.' },
          { text: 'Wait several years and hope the market corrects', why: 'Waiting means holding more risk than you chose for an unknown period, and it is not a rule.' },
          { text: 'Increase the equity target so no trade is needed', why: 'Changing the target to avoid a trade is the decision the rule exists to prevent.' },
        ],
      },
      {
        q: 'A rebalance requires selling a holding you bought seven months ago. What does that mean for tax?',
        options: [
          { text: 'The gain is long term because it exceeds the annual exemption', why: 'The exemption applies to long-term gains; it does not convert a short-term holding into a long-term one.' },
          { text: 'The gain is short term and taxed at 20% rather than 12.5%, so it is worth checking whether the drift can wait', correct: true, why: 'Listed equity crosses into long term after twelve months, so a modest delay can materially change the tax on the same gain.' },
          { text: 'There is no tax because it is a rebalance', why: 'Tax follows the sale, not the reason for it.' },
          { text: 'The loss can be set off against salary income', why: 'Capital losses cannot be set off against salary; they are set off against capital gains under specific rules.' },
        ],
      },
    ],
    takeaway: 'Write a band, check it once a year, and correct with new money before selling anything — then, where a sale is unavoidable, sell from the long-term bucket, because a rebalance is a risk decision that happens to have a tax price.',
  },

  'l5-024': {
    id: 'l5-024',
    title: 'Goal-Based Investing',
    subtitle: 'A goal without a date cannot be funded.',
    minutes: 10,
    blocks: [
      scene('goal-bucket-tree', 'Four goals with four horizons, each with a different mix: the horizon sets the asset allocation, not the other way round.'),
      { kind: 'p', text: 'Goal-based investing is the discipline that turns a return target into a plan. Instead of asking what a portfolio should earn, it asks what each sum of money is for and when it is needed, and then works backwards to a contribution. The question it answers is the only one that matters: am I setting aside enough, for the things I have actually promised to fund?' },
      { kind: 'p', text: 'The mechanism is a bucket per goal. Each bucket gets an amount, a date, a mix that its horizon can support, and a monthly contribution. The buckets are not separate accounts and do not need to be; they are separate decisions, which is what keeps a short-term goal from being funded by a long-term asset.' },

      { kind: 'h', text: 'Horizon sets the mix' },
      {
        kind: 'table',
        caption: 'A starting point for each horizon, to be adjusted for how flexible the date is',
        headers: ['Horizon', 'A defensible mix', 'Why', 'What to watch'],
        rows: [
          ['Under 3 years', 'Cash and short-duration debt', 'A drawdown has no time to recover, and the date is not negotiable', 'Inflation erodes it, so do not hold more here than the goal needs'],
          ['3 to 7 years', 'Mostly debt with a modest equity slice', 'Enough time for some growth, not enough for a deep fall to be irrelevant', 'The equity slice is the part that can disappoint, so size it against the consequence'],
          ['7 to 15 years', 'Equity-weighted with a growing debt share as the date approaches', 'Compounding has time to work, and the glide path can de-risk near the end', 'Revisit the glide path, not the whole plan'],
          ['Over 15 years', 'Predominantly equity', 'The main risk over that horizon is not volatility but failing to grow', 'Contribution rate matters far more than selection'],
        ],
      },
      { kind: 'p', text: 'Two adjustments override the table. The first is date flexibility: an education goal can be moved a year later, a tax payment cannot, and a flexible date can carry more risk because a bad year can be waited out. The second is whether the goal is essential or discretionary: a goal you could abandon if the market were cruel does not need the same conservatism as one you cannot.' } ,
      l5Rule(
        'A target amount is a number today, not a number at the date',
        'The cost of a goal grows between now and the date, and the gap is not small over long horizons: at 6% a year, a ₹25 lakh education cost becomes about ₹50 lakh in twelve years. The inflation-adjusted target, not the current price, is what the contribution has to fund. This is the single most common error in goal planning, and it is the reason the funding percentage rather than the target is the number to watch when reviewing a plan.',
      ),

      { kind: 'h', text: 'Tracking and shortfalls' },
      { kind: 'list', items: [
        'Track funding percentage per goal, not the portfolio total. A portfolio can grow while one goal falls behind because its mix was wrong for its date.',
        'Update the target each year for actual inflation, not the assumption you made when you set it. Education and medical costs move differently from the general index.',
        'When a goal falls short, adjust the contribution before the mix. Adding risk to a near-date goal to catch up is how a shortfall becomes a failure.',
        'When a goal is reached, move it to the horizon its money is now needed on. A funded education goal sitting in equity two years before the fee is due is an unfinished plan.',
        'Re-price the goals once a year, on the same date as the annual review. Goals change more than markets do.',
      ] },
      sim('l5-goal-mapper', 'Give each goal a date, a mix and a contribution, and see the funding percentage and the shortfall that remains.'),
      l5Illustrative('The goals, returns and inflation assumptions in this chapter and its lab are invented for teaching. What is real is the method: dated amounts, horizon-matched mixes, and a shortfall measured rather than guessed.'),

      { kind: 'p', text: 'The uncomfortable output of this way of planning is the shortfall number. Most plans, priced honestly, show that the goals as stated need more contribution than the plan currently offers. That is not a failure of the exercise — it is the exercise working. The options are all visible once the number exists: contribute more, extend a date, reduce a target, or accept a lower-probability plan. Choosing between those with the number in front of you is a decision; discovering them one at a time over a decade is not.' } ,
      { kind: 'terms', items: [
        { term: 'Goal bucket', meaning: 'Money set aside for one dated purpose, with its own target, mix and contribution.' },
        { term: 'Inflation-adjusted target', meaning: 'The goal\'s cost at the date it is needed, which is what the contribution has to fund.' },
        { term: 'Funding percentage', meaning: 'What the plan is on track to deliver divided by the inflated target, per goal.' },
        { term: 'Shortfall', meaning: 'The additional monthly contribution required to close the gap between the goal and the plan.' },
        { term: 'Horizon matching', meaning: 'Choosing a mix whose risk can be held for the time available, rather than the mix with the highest expected return.' },
      ] },
      l5Sources(['sebi', 'amfi'], [
        'The category framework that makes horizon matching concrete, and the risk labelling that accompanies it',
        'The investor education material on systematic contributions and on how the mix should change as a goal approaches',
      ]),
    ],
    quiz: [
      {
        q: 'A goal costs ₹10 lakh today and is twelve years away. What should the plan fund?',
        options: [
          { text: '₹10 lakh, because the goal is a fixed amount', why: 'Costs grow. Funding today\'s price leaves a gap that the return has to cover by luck.' },
          { text: 'The inflated cost at the date — for example about ₹20 lakh at 6% a year — because that is what will be needed', correct: true, why: 'The target is a number at the date, not today. This is the most common error in goal planning, and it is why funding percentage is the number to track.' },
          { text: 'Whatever the current portfolio will grow into', why: 'That inverts the calculation: the goal decides the contribution, not the other way round.' },
          { text: 'Double it, as a rule of thumb', why: 'A rule of thumb that ignores the horizon and the inflation rate will be wrong in both directions.' },
        ],
      },
      {
        q: 'A goal will fall short and its date cannot move. What is the right first response?',
        options: [
          { text: 'Increase the equity share to catch up', why: 'Adding risk to a near-date goal to close a gap is how a shortfall becomes a failure.' },
          { text: 'Increase the contribution, then consider extending the date or reducing the target', correct: true, why: 'Contribution is the controllable lever. Risk near a date is the lever that can destroy the plan rather than fix it.' },
          { text: 'Ignore it until the date is closer', why: 'The gap grows with time. Ignoring it makes the remaining options worse, not better.' },
          { text: 'Borrow to fund the goal', why: 'Borrowing changes the arithmetic but transfers the risk to future income, and is a last resort rather than a first response.' },
        ],
      },
      {
        q: 'Why does each goal need its own mix rather than a single portfolio-wide allocation?',
        options: [
          { text: 'Because separate accounts are required by regulation', why: 'No rule requires separate accounts. Buckets are decisions, not accounts.' },
          { text: 'Because a portfolio holding both money needed in two years and money needed in thirty cannot be right for either', correct: true, why: 'The horizon decides the mix. One blended portfolio systematically over-risks the near goal and under-risks the far one.' },
          { text: 'Because taxes differ by goal', why: 'Tax treatment follows the asset and the holding period, not the goal.' },
          { text: 'Because each goal needs a different fund house', why: 'Wrappers are interchangeable. It is the mix and the horizon that differ.' },
        ],
      },
    ],
    takeaway: 'Give every goal an amount, a date and a mix its horizon can support, fund the inflated cost rather than today\'s price, and track the funding percentage per goal — because the shortfall is the only honest answer to whether you are saving enough.',
  },

'l5-025': {
    id: 'l5-025',
    title: 'REITs',
    subtitle: 'A listed landlord: rent, a distribution rule, and the property risk that stays with you.',
    minutes: 11,
    blocks: [
      scene('reit-cashflow', 'Rent collected by the trust, the costs it pays, and the distribution that reaches the unitholder — split into three components that are each taxed differently.'),
      { kind: 'p', text: 'A real estate investment trust is a listed trust that owns income-producing property and passes almost all of what it collects to the people holding its units. It solves a real problem: one office building or shopping centre is far too large for a single buyer and far too slow to sell, so the asset class that used to be the least accessible becomes one of the most liquid.' },
      { kind: 'p', text: 'What you own is not the property. You own a unit in a trust that holds shares or loans in the companies that own the property. The layer is worth understanding, because it explains both the protections and the risks at once: SEBI regulates the trust, its disclosures and its distribution, while the rent, the vacancy and the value of the building stay exactly as uncertain as they always were.' },

      { kind: 'h', text: 'What the wrapper guarantees' },
      {
        kind: 'table',
        caption: 'The requirements that make a REIT a REIT',
        headers: ['Rule', 'What it says', 'Why it matters to a unitholder'],
        rows: [
          ['Assets', 'At least 80% of the value must sit in completed, revenue-generating property', 'Your money cannot be parked in a land bank or a project that has not been built, so the cash flow is contractually close to the units you own'],
          ['Distribution', 'At least 90% of net distributable cash flows, paid at least once every six months', 'This is the point of the vehicle: the cash comes to you instead of being reinvested at the manager\'s discretion'],
          ['Minimum investment', 'Units of about ₹10,000 to ₹15,000, lowered from ₹50,000 by the 2021 amendments', 'Retail access is real, which is not the same thing as retail suitability'],
          ['Leverage', 'Borrowings within 49% of the value of assets, with a rating and unitholder approval needed above 25%', 'Borrowing raises the distribution in a good year and the loss in a bad one, at the same time'],
        ],
      },
      l5Rule(
        'At least 90% of cash flow is distributed, twice a year',
        'SEBI requires a REIT to distribute at least 90% of its net distributable cash flows to unitholders, and to do so at least once every six months. That rule is why the distribution yield on a REIT looks bond-like while the price behaves like a share. It is also why the yield cannot be read as a return: the obligation is to hand over cash, not to earn it, and a trust can distribute every rupee it collects in a year in which the value of its buildings falls.',
      ),

      { kind: 'h', text: 'A distribution is not a profit' },
      { kind: 'p', text: 'A REIT distribution arrives as three components, and only two of them are income. The split matters more than the headline yield, because one component is your own capital being returned and will be taxed later rather than now.' },
      {
        kind: 'table',
        caption: 'What the distribution is made of',
        headers: ['Component', 'What it is', 'How it is taxed for a unitholder'],
        rows: [
          ['Interest', 'Interest on the loans the trust has given the companies that own the property', 'Taxable at your slab rate, with tax deducted at source when it is paid'],
          ['Dividend', 'A share of the profit distributed by those companies', 'Exempt in the unitholder\'s hands following the 2026 amendment, which also removed the old dependence on the tax regime the trust\'s companies had chosen'],
          ['Repayment of capital', 'Return of the trust\'s own loan principal — your money coming back', 'Not income at all. It reduces the cost of your units, so it is taxed later as a capital gain when you sell them'],
        ],
      },
      { kind: 'p', text: 'The third line is the one that surprises people at review time. A trust yielding 9% is not paying out 9% of profit; part of the distribution is capital recovered from the assets, and the unit price should adjust as that happens while your eventual gain is larger for having a lower cost. A distribution yield is therefore not comparable to a bond coupon unless the total return is what you compare.' },

      { kind: 'h', text: 'Reading one' },
      { kind: 'list', items: [
        'Start with occupancy, not yield. A distribution from a fully let building is a different instrument from the same yield from one that is 30% empty.',
        'Look at the lease expiry profile. A trust whose largest tenants all renew in the same two years carries a cliff that a five-year average always hides.',
        'Check tenant concentration. One tenant paying a third of the rent is a counterparty, not a property.',
        'Compare the price with the value the trust itself reports for its assets. Trading at a discount to that value is not automatically a bargain, but it is the only measure that tells you what the market thinks of the valuation.',
        'Read the leverage and its trend, not just the level. A trust at 45% of asset value cannot buy anything without raising money.',
        'Ask what happens to the distribution if the largest tenant leaves. If the answer is that it falls by a third, that is the risk you are being paid for.',
      ] },
      sim('l5-reit-analyser', 'Pull a REIT distribution apart: occupancy, lease expiries, leverage, and the line between income and your own capital coming back.'),
      l5Illustrative('The property, rent, occupancy and price figures in this chapter and its lab are invented for teaching. The 90% distribution requirement, the 80% asset rule, the minimum investment range and the leverage cap are the real SEBI rules verified on 15 October 2026 and linked below. Distribution taxation changed in 2026, so check the current position before you file.'),

      { kind: 'p', text: 'Two limitations are worth stating plainly. A REIT is a bet on commercial property in particular places at a particular point in the cycle, and interest rates move both the value of that property and the competition for its tenants. And because buyers treat the units as a yield instrument, the price can fall like a share when rates rise even while the distribution arrives unchanged — which is the cleanest demonstration in this level that a cash-flow stream and a market price are separate things.' },
      { kind: 'terms', items: [
        { term: 'Net distributable cash flows', meaning: 'The cash a trust has available to hand over after operating costs, interest and taxes, which the distribution rule is measured against.' },
        { term: 'Occupancy', meaning: 'The share of lettable space that is currently rented, which sets the rent the trust can collect.' },
        { term: 'Lease expiry profile', meaning: 'How the rent is spread across the years in which leases end, which shows whether the income has a cliff in it.' },
        { term: 'Repayment of capital', meaning: 'A distribution that is the return of your own invested money rather than income, reducing the cost of your units.' },
        { term: 'Discount to value', meaning: 'The gap between the unit price on the exchange and the per-unit value the trust reports for its assets.' },
      ] },
      l5Sources(['sebi', 'nse', 'bse', 'incometax'], [
        'The REIT regulations and the master circular: the 80% asset rule, the 90% distribution requirement and the leverage limits, in their current form',
        'The listed trusts, their unit prices, distributions and periodic disclosures, which are the only figures worth using for a decision',
        'The exchange announcements and the directory of listed trusts, including the valuation reports filed with each distribution',
        'How each component of a distribution is taxed, and the current position on the dividend component after the 2026 change',
      ]),
    ],
    quiz: [
      {
        q: 'A REIT distributes ₹9 per unit on a price of ₹100 for the year. What can you conclude?',
        options: [
          { text: 'You earned 9%, because the distribution is income', why: 'Part of that ₹9 may be repayment of capital, which is not income — it lowers the cost of your units and is taxed when you sell.' },
          { text: 'You received 9% in cash, but the return depends on how the distribution splits and on what the unit does', correct: true, why: 'The distribution rule is an obligation to hand over cash. Total return is the distribution plus the change in value, and the split between income and returned capital decides when tax falls.' },
          { text: 'The trust made a 9% profit', why: 'A trust can distribute cash in a year it makes no profit at all; the two numbers are unrelated.' },
          { text: 'Nothing, because REIT distributions are tax-free', why: 'Only the dividend component is exempt; interest is taxed at your slab rate and returned capital is taxed on sale.' },
        ],
      },
      {
        q: 'Why does the regulation require at least 90% of cash flow to be distributed?',
        options: [
          { text: 'To guarantee unitholders a return', why: 'It guarantees that cash is passed on, not that there is cash to pass on. A badly let building still has to distribute what it collects.' },
          { text: 'Because the vehicle is designed to deliver income rather than retained growth, and the rule makes that contract rather than intention', correct: true, why: 'Without the rule, a manager could retain cash and the units would be a growth vehicle with a yield story attached. The distribution rule is the whole design.' },
          { text: 'Because REITs cannot borrow', why: 'They can, within 49% of the value of assets. The distribution rule is separate.' },
          { text: 'To keep the unit price stable', why: 'The price trades like any share. The rule constrains the cash, not the market.' },
        ],
      },
      {
        q: 'A trust you hold trades 20% below the value it reports for its buildings. What does that tell you?',
        options: [
          { text: 'The buildings have already fallen 20% in value', why: 'The reported value is the trust\'s own valuation. The gap is the market\'s opinion of that valuation, which is a different claim.' },
          { text: 'The market doubts the valuation, or expects the cash flows to fall, or demands a higher yield for the risk — and any of those may be right', correct: true, why: 'A discount is information, not an instruction. Your job is to work out which of those three the market is pricing, and whether you disagree with evidence rather than hope.' },
          { text: 'It is a guaranteed gain when the trust sells the building', why: 'The trust does not have to sell, and a sale at the reported value is exactly what the market is questioning.' },
          { text: 'The distribution will be cut by 20%', why: 'The distribution follows the cash flow, which the discount does not by itself predict.' },
        ],
      },
    ],
    takeaway: 'Buy a REIT for a contractual share of rent, not for a yield number — so read occupancy, lease expiries and leverage before the distribution, and remember that part of every payment is your own capital coming back.',
  },

  'l5-026': {
    id: 'l5-026',
    title: 'InvITs',
    subtitle: 'Infrastructure that pays: availability, traffic, and the concession clock at the end.',
    minutes: 12,
    blocks: [
      scene('invit-toll-road', 'One asset paid for being available and another paid by the drivers who use it, with the same distribution yield and completely different risks.'),
      { kind: 'p', text: 'An infrastructure investment trust does for operational infrastructure what a REIT does for buildings. It owns completed assets that already generate revenue — toll roads, transmission lines, gas pipelines, telecom towers, warehousing and school buildings — and hands the cash they produce to unitholders.' },
      { kind: 'p', text: 'The distinction that decides everything is where the cash comes from and who can stop it. Two InvITs can carry the same distribution yield while one is paid by a government authority for keeping an asset available and the other is paid by whoever happens to drive on a road. Those are not variations of the same investment.' },

      { kind: 'h', text: 'Where the cash comes from' },
      {
        kind: 'table',
        caption: 'Three ways an infrastructure asset earns, and the risk each one carries',
        headers: ['Cash-flow type', 'How it is earned', 'The risk that actually bites', 'What to check'],
        rows: [
          ['Availability', 'A regular payment for keeping the asset available, usually to an authority or a utility', 'The counterparty: if the payer delays, your distribution delays', 'Who pays, their payment record, and the penalty regime when the asset is down'],
          ['Demand or toll', 'Whatever users pay — traffic, volumes or throughput', 'Volume risk, which is real, cyclical and not diversifiable', 'Historical traffic, competing routes and capacity, and the concession area'],
          ['Contracted or tariff-based', 'A tariff or annuity over a defined term', 'The terms: escalation, operating obligations and what remains of the term', 'The escalation formula, the operations and maintenance obligation, and the years left'],
        ],
      },
      { kind: 'p', text: 'Availability-based cash flows have no traffic risk at all, which is why they are described as bond-like, and one risk in exchange: the cash arrives only as fast as the payer chooses to pay. Toll-based cash flows carry the traffic, and therefore the economy, and are far more volatile than their distribution record suggests.' },

      { kind: 'h', text: 'The clock at the end' },
      { kind: 'p', text: 'Every InvIT asset has a concession, a lease or a licence with an end date. As that date approaches, more of the distribution has to be return of capital, because at the end there is nothing left to hand back. This is the single most important difference between an InvIT and a bond, and the reason a high yield on a short remaining term is not a high return.' },
      l5Rule(
        'Distribution, leverage, and the two routes in',
        'An InvIT must distribute at least 90% of its net distributable cash flows to unitholders at least once every six months, and must keep borrowings within 49% of the value of its assets — a higher level is permitted only where the trust holds a AAA rating and meets the conditions for it, and the 2026 changes allow borrowing beyond that for capital expenditure, major maintenance and refinancing. Access differs by route: units of about ₹10,000 to ₹15,000 on the public route, and ₹25 lakh for a privately placed InvIT, lowered from ₹1 crore. Verified 15 October 2026.',
      ),
      { kind: 'p', text: 'The two routes explain the liquidity you are buying. A publicly listed InvIT trades daily; a privately placed one has no meaningful secondary market, and its ₹25 lakh minimum is doing the work that a suitability rule would otherwise have to do.' },

      { kind: 'h', text: 'Is the distribution sustainable?' },
      { kind: 'list', ordered: true, items: [
        'Is the distribution being paid out of operating cash, or out of money the trust has borrowed? Read the cash-flow statement, not the distribution announcement.',
        'What is net debt as a share of asset value, and which way is it moving? A trust that borrows to maintain its distribution is buying time at interest.',
        'Who is the sponsor, and is the sponsor selling assets into the trust it manages? Related-party acquisitions are where the price is least likely to be tested.',
        'Are the operations and maintenance contracts awarded to the sponsor\'s own group? If so, the cost of keeping the asset running is set by a related party, and the distribution depends on it.',
        'How much of the concession term is left against the payback the yield implies? A 10% yield on eight years of remaining life is a return of capital with a coupon attached.',
        'How does the distribution split between interest, dividend and repayment of capital? The third component is not income, and it shrinks the asset base that will produce the next one.',
      ] },
      { kind: 'p', text: 'Because a large share of an InvIT distribution is capital coming back, the honest comparison is not against a fixed deposit. It is against a bond of the same remaining life, with the added question of whether these particular assets will still be earning when the money is scheduled to have returned. If the answer is that the trust will need to buy new assets to keep paying, then you are underwriting a manager\'s ability to acquire well, which is a different and much harder bet.' },
      sim('l5-invit-analyser', 'Score an InvIT on counterparty, remaining concession life, leverage, and how much of the distribution is your own capital coming back.'),
      l5Illustrative('The assets, tariffs, traffic and distributions in this chapter and its lab are invented. The 90% distribution requirement, the 49% leverage cap with its exceptions, and the two minimum subscription routes are the real SEBI rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One further caution belongs here. Infrastructure cash flows are often described as inflation-linked, and the escalation clauses do exist, but they are usually capped or tied to a formula the authority controls. The protection is partial, and it is a term to read rather than a feature to assume.' },
      { kind: 'terms', items: [
        { term: 'Concession', meaning: 'The right to operate an asset for a defined period under terms set by the authority that granted it.' },
        { term: 'Availability-based payment', meaning: 'A payment for keeping an asset available, which removes demand risk but adds counterparty risk.' },
        { term: 'Net distributable cash flows', meaning: 'Cash available for distribution after operating costs, interest and taxes, which the 90% rule is measured against.' },
        { term: 'Return of capital', meaning: 'The part of a distribution that is your own money being returned, which reduces your cost and lifts the eventual capital gain.' },
        { term: 'Counterparty risk', meaning: 'The possibility that the entity paying you does not pay on time, however good the asset is.' },
      ] },
      l5Sources(['sebi', 'nse', 'incometax'], [
        'The InvIT regulations and master circular: distribution requirements, leverage limits and the conditions attached to borrowing above 49%',
        'The listed trusts and their disclosures, including the distribution split between interest, dividend and repayment of capital',
        'How each component of the distribution is taxed, and the current position on the dividend component after the 2026 change',
      ]),
    ],
    quiz: [
      {
        q: 'Two InvITs both yield 9%. One is paid for availability, the other collects tolls. What is the main difference?',
        options: [
          { text: 'The availability-based trust is riskier because governments can refuse to pay', why: 'Counterparty risk is real, but it is smaller and far more predictable than traffic risk, which moves with the economy.' },
          { text: 'The toll trust carries volume risk that the availability trust does not, so the same yield is not the same reward', correct: true, why: 'The price the market pays for each is the market\'s view of those risks. Comparing yields alone treats two different risks as one.' },
          { text: 'Nothing — the yield is the same, so the risk is the same', why: 'A yield is a price, not a measurement of risk. Identical yields on differently sourced cash flows is exactly the trap this chapter is about.' },
          { text: 'The toll trust has no concession end date', why: 'Both assets operate under a concession with an end date, which is why remaining life matters for both.' },
        ],
      },
      {
        q: 'An InvIT has eight years of concession left and yields 10%. What is the honest read?',
        options: [
          { text: 'A 10% return for eight years, comparable to a bond of the same term', why: 'Part of that distribution is your capital returning, so the comparison is against the bond\'s total return, and against what happens at the end of the term.' },
          { text: 'A stream in which income and returned capital are mixed, so the total return is what to compare, against a bond of the same remaining life', correct: true, why: 'When the asset stops, so does the cash flow. The yield double-counts the return unless the capital coming back is separated from the income.' },
          { text: 'A bargain, because the yield is above any fixed deposit', why: 'A deposit returns your capital at maturity. This does not, which is the whole difference.' },
          { text: 'A risk-free return, because infrastructure is essential', why: 'Essential assets still have counterparties, traffic cycles and refinancing dates, and essentiality is not a guarantee of payment.' },
        ],
      },
      {
        q: 'The sponsor of an InvIT also holds the operations and maintenance contract. Why does that matter?',
        options: [
          { text: 'It does not, because the sponsor is regulated by SEBI', why: 'Regulation requires disclosure, not arm\'s-length pricing in every case. The contract is a related-party transaction and its terms decide the distribution.' },
          { text: 'Because the cost of keeping the asset running is set by the party that also benefits from the distribution, so the margin between them is a judgement call', correct: true, why: 'Where the same group sits on both sides, the distribution depends on terms the unitholder did not negotiate. That is what related-party disclosures are for, and why they should be read.' },
          { text: 'Because it guarantees lower costs through vertical integration', why: 'It may produce lower costs, or it may direct margin to the sponsor. Vertical integration is not evidence either way.' },
          { text: 'Because the trust cannot distribute cash to the sponsor', why: 'A trust can and does pay its manager and its contractors; that is precisely the expense line to examine.' },
        ],
      },
    ],
    takeaway: 'Underwrite the payer and the remaining concession before the yield — because an infrastructure distribution mixes income with your own capital returning, and it stops when the concession does.',
  },

  'l5-027': {
    id: 'l5-027',
    title: 'International Investing',
    subtitle: 'Global exposure inside Indian rules: the scheme ceiling, the currency, and the schedule you file.',
    minutes: 12,
    blocks: [
      scene('currency-bridge', 'Three ways to hold a foreign asset — a personal remittance, a domestic fund that invests abroad, and an Indian-listed ETF — with the limit that binds each one.'),
      { kind: 'p', text: 'The case for holding something foreign is not that foreign markets are better. It is that your salary, your home, your provident fund and most of the rest of your balance sheet are already denominated in one currency and one economy. A rupee investor holding only Indian assets is making a concentrated bet on India, which may well be the right bet, but it should be a decision rather than a default.' },
      { kind: 'p', text: 'What makes the subject harder than a developed-market textbook is that the route into the asset decides what you are allowed to do, what tax you pay at the door, and what you have to report. Choose the route badly and a good investment becomes an administrative problem.' },

      { kind: 'h', text: 'The route decides the constraint' },
      {
        kind: 'table',
        caption: 'Three routes into the same asset class, and the ceiling on each',
        headers: ['Route', 'How it works', 'The limit that binds it', 'What it asks of you'],
        rows: [
          ['Direct', 'Remit money abroad under the RBI scheme and buy through an overseas broker', 'USD 250,000 per person per financial year, shared across every purpose and every bank', 'Tax collected at source above the threshold, and a foreign-asset schedule in your return'],
          ['A domestic fund that invests abroad', 'Buy an Indian scheme holding foreign securities or a foreign fund', 'An industry-wide ceiling of USD 7 billion for overseas securities, with a separate USD 1 billion sub-limit for overseas exchange-traded funds and funds of funds — both have been exhausted repeatedly since 2022, after which schemes stop taking fresh money', 'Accepting that the scheme you chose may be closed to new subscriptions for months at a time'],
          ['An Indian-listed ETF on a foreign index', 'Buy on an Indian exchange, settled in rupees through your demat account', 'The same overseas ceilings, which is why these ETFs can trade at a premium when the tap is shut', 'Checking the indicative value and the premium before buying, as you would for any ETF'],
        ],
      },
      l5Rule(
        'The remittance ceiling, and the tax collected at the door',
        'The RBI scheme permits a resident individual to remit up to USD 250,000 in a financial year for permitted purposes, and the ceiling is per person and shared across every purpose and every bank. Tax is collected at source once the outward remittances in a year cross ₹10 lakh in total: 5% for education and medical expenses not funded by a loan, 0.5% where that education or medical payment is funded by a loan from a financial institution, and 20% for other purposes, which includes investing abroad and gifts. The amount collected is not lost — it is credited against your final tax liability and refunded if it exceeds it. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Currency is not a separate investment' },
      { kind: 'p', text: 'A foreign asset gives you two returns: the asset\'s return in its own currency, and the movement of the rupee against that currency. Over a decade the second can be larger than the first, in either direction. The temptation is to buy foreign assets because the rupee looks weak, and that is a currency bet dressed as diversification. The defensible reason is the concentration you are undoing, which holds whatever the exchange rate does next week.' },
      { kind: 'p', text: 'Two rules come with holding anything foreign, and both are easy to miss. A resident holding foreign assets — shares, fund units, an overseas bank account, property, in some cases even an unvested entitlement — has to disclose them in the foreign-asset schedule of the Indian income-tax return, and the consequences of not doing so are severe. Where the same income is taxed in two countries, relief comes through the tax treaty and the foreign tax credit mechanism, but the credit must be claimed with evidence, which means a foreign tax statement or certificate. Both of these are filing obligations, not investment choices, and they should be learnt before the first remittance rather than after it.' },
      { kind: 'p', text: 'The wrapper also changes the tax on the gain. Units of a domestic fund investing abroad are not treated as equity-oriented, so they follow the non-equity route: a longer holding period before the gain becomes long-term, and long-term gains at 12.5% without indexation rather than the equity treatment. Directly held listed foreign shares become long-term after twenty-four months, and short-term gains on them are taxed at your slab rate — unlike Indian listed equity, where the short-term rate is 20%. None of this is a reason to avoid foreign assets, but it does decide which wrapper to use for a given holding period.' },
      { kind: 'list', items: [
        'Cap the allocation at what the plan needs, and treat it as a slice of the equity bucket rather than as a goal of its own.',
        'Match the route to the amount. A ₹10,000 monthly subscription is not going to be made through an overseas broker account.',
        'If a fund you hold is closed to fresh subscriptions, hold it rather than paying a premium to buy the same exposure in the market.',
        'Make the foreign-asset disclosure every year, including years in which you bought or sold nothing.',
        'Assume the currency can move against you for a decade, and keep enough outside the foreign slice that you never have to sell it in the wrong year.',
      ] },
      sim('l5-global-diversifier', 'Pick a route for a global allocation, apply the remittance ceiling, the tax collected at source and a currency path, and compare the outcome.'),
      l5Illustrative('The returns, currency paths and portfolio values in this chapter and its lab are invented. The remittance ceiling, the ₹10 lakh threshold with its rates, the industry-wide overseas investment limits and the tax treatment described are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'There is a final point that separates this chapter from a product pitch. Currency diversification works over decades because it is a hedge against the economy you live and earn in, not because the rupee is going to fall. Investors who buy foreign assets when the rupee is weak and sell when it is strong have turned a diversification tool into a trade, and they usually do it in the wrong order.' },
      { kind: 'terms', items: [
        { term: 'Liberalised remittance scheme', meaning: 'The RBI facility that lets a resident individual send a limited amount abroad each year for permitted purposes.' },
        { term: 'Tax collected at source', meaning: 'Tax deducted by the bank or dealer at the point of remittance, credited against your final tax liability.' },
        { term: 'Foreign tax credit', meaning: 'Relief claimed for tax already paid abroad on income that is also taxed in India, supported by evidence.' },
        { term: 'Treaty relief', meaning: 'The mechanism in a double-taxation agreement that decides which country taxes which income, and at what ceiling.' },
        { term: 'Foreign-asset disclosure', meaning: 'The schedule in the Indian income-tax return in which a resident reports holdings outside India.' },
      ] },
      l5Sources(['rbi', 'incometax', 'sebi'], [
        'The remittance scheme: the current annual ceiling, the permitted purposes, and the total amount counted against it in a year',
        'The rates at which tax is collected on outward remittances and the threshold above which it applies, the foreign-asset disclosure requirement, and the rules for claiming foreign tax credit',
        'The limits that apply to domestic mutual funds investing overseas, and the consequences for a scheme that has reached them',
      ]),
    ],
    quiz: [
      {
        q: 'You invest abroad through an Indian fund rather than by remitting money yourself. What have you avoided?',
        options: [
          { text: 'The taxes on the gain', why: 'The wrapper changes the rate and the holding period, not whether there is tax. Units of a fund investing abroad follow the non-equity treatment.' },
          { text: 'The remittance ceiling and the tax collected at source, because the fund uses its own overseas allocation — but not the industry ceiling that can close the scheme', correct: true, why: 'The fund uses its own limit, so your personal ceiling is untouched. But the industry-wide cap binds everyone, and when it is exhausted subscriptions stop.' },
          { text: 'The foreign-asset disclosure', why: 'Units of an Indian fund are not a foreign asset, so there is no schedule to file for them — but the disclosure question is about what you hold, which this answer misreads as a general exemption.' },
          { text: 'Currency risk', why: 'The exposure is the same. Only the plumbing differs, and the currency moves regardless of the route.' },
        ],
      },
      {
        q: 'Why is buying foreign equities when the rupee is weak a poor reason?',
        options: [
          { text: 'Because the rupee always recovers', why: 'It may not, and a rule that depends on which way a currency goes is a forecast rather than a plan.' },
          { text: 'Because the decision should come from the concentration in your balance sheet, not from a view on the exchange rate', correct: true, why: 'Diversification is a reason that holds at any exchange rate. A currency view is a bet, and currency views are the hardest forecasts in finance.' },
          { text: 'Because the tax collected at source is higher then', why: 'The tax is a percentage of the remittance, not of the exchange rate, and it is credited against your liability.' },
          { text: 'Because foreign assets cannot be sold while the rupee is weak', why: 'They can be sold at any time, which is the point: you are free to sell, and that is what makes the mistake expensive.' },
        ],
      },
      {
        q: 'A long-held foreign fund unit and a long-held Indian equity fund show the same gain. Why might the tax differ?',
        options: [
          { text: 'Because foreign gains are never taxed in India', why: 'They are taxed, and disclosed. Relief for tax already paid abroad comes through the treaty and the foreign tax credit, not through exemption.' },
          { text: 'Because the wrapper decides the treatment: the foreign fund follows the non-equity route, with a longer holding period to qualify and long-term tax at 12.5% without indexation', correct: true, why: 'Equity orientation is a property of the structure, not of what the money is ultimately invested in. It changes both the holding period and the rate.' },
          { text: 'Because the Indian fund is exempt', why: 'Indian equity funds pay 20% on short-term and 12.5% above the annual exemption on long-term gains.' },
          { text: 'Because the rate depends on your slab in both cases', why: 'Long-term gains on these are taxed at the same rate for everyone; the slab rate applies to short-term gains, and not to the equity long-term rate.' },
        ],
      },
    ],
    takeaway: 'Choose the route before the fund — because the remittance ceiling, the tax collected at the door and the industry-wide overseas cap decide what you can hold, and the currency and the disclosure decide what it costs you.',
  },

  'l5-028': {
    id: 'l5-028',
    title: 'ETFs',
    subtitle: 'One fund, two prices, and the costs that decide whether the wrapper paid for itself.',
    minutes: 10,
    blocks: [
      scene('etf-nav-gap', 'The value of the basket the fund holds, the live estimate published during the day, and the price the order book is willing to pay.'),
      { kind: 'p', text: 'An exchange-traded fund is a pooled basket that trades like a share. That single sentence contains its advantage — intraday dealing, the lowest headline expenses in the industry, and holdings you can inspect every day — and also its cost, because a thing that trades has a price, and a price is not always the value of what sits behind it.' },

      { kind: 'h', text: 'Two prices, and the one that matters' },
      {
        kind: 'table',
        caption: 'The prices an ETF has at the same moment',
        headers: ['Price', 'What it is', 'When it matters'],
        rows: [
          ['Net asset value', 'The value of the basket, divided by the units, computed once at the end of the day', 'It is what the fund is worth and what a mutual fund would give you, and it is the number the annual report uses'],
          ['Indicative value', 'A live estimate of the basket\'s value, published by the exchange during trading hours', 'Before every order: buying at 2% above the indicative value is a 2% loss on the first day'],
          ['Market price', 'Whatever the order book says, decided by buyers and sellers like any share', 'It is what you actually pay, and it can sit above or below the value behind it'],
        ],
      },
      l5Rule(
        'The gap is closed by arbitrage, not by a regulation',
        'A large ETF is kept close to the value of its holdings by designated participants, who create or redeem units in large blocks when the price drifts: they buy the shares and exchange them for units when the ETF is expensive, and do the reverse when it is cheap. That mechanism is what makes the price track the value, and it works only where the underlying market is open at the same time and the participants are able to act. The practical consequence for an investor is simple: check the indicative value and the depth of the book before any substantial order, trade with a limit order rather than a market order, and avoid the first and last minutes of the session, when the book is thin and the price moves fastest. Verified 15 October 2026 against the exchange and industry disclosures linked below.',
      ),

      { kind: 'h', text: 'What the wrapper actually costs' },
      {
        kind: 'table',
        caption: 'Every layer between the index and your account',
        headers: ['Cost', 'Where it shows up', 'Who feels it most'],
        rows: [
          ['Expense ratio', 'A deduction inside the fund\'s value, every day', 'Everyone who holds it, forever'],
          ['Brokerage and demat charges', 'On every purchase and every sale', 'Anyone investing small amounts frequently'],
          ['Bid-ask spread', 'Between the price you buy at and the price you could sell at', 'Everyone, on every transaction, and it never appears on a factsheet'],
          ['Premium to the value behind the fund', 'In the price you paid for the units', 'Buyers in an ETF whose creation tap is closed or whose market makers are thin'],
          ['Tracking difference', 'In the fund\'s return against its index, over years', 'Anyone who holds it long enough to care'],
        ],
      },
      { kind: 'p', text: 'The last line deserves separating from its cousin. Tracking error measures how closely the fund\'s return follows the index month by month, which is about consistency. Tracking difference is the total shortfall over a period, which is about money. Difference is driven by the expense ratio, by the cost of trading when the index composition changes, by dividends and the tax the fund pays on them, and by cash sitting in the fund waiting to be invested. A fund with a low and steady error can still have a difference large enough to matter over twenty years, and the difference is the number an investor experiences.' },
      { kind: 'list', items: [
        'For a small monthly contribution, the spread and brokerage can exceed the whole expense saving over an index fund on the same index. Below a certain size, the index fund wins on arithmetic.',
        'For an ETF whose underlying market is closed when yours is open, expect a persistent premium and treat it as a fee.',
        'For a sector or thematic ETF, check the size and the number of market makers, because both decide how wide the spread will be on the day you want to sell.',
        'For money needed on a known date, remember that the ETF gives you a price that day, not the day\'s value.',
      ] },
      sim('l5-etf-cost-check', 'Price an ETF the way it is used: expense ratio, spread, brokerage and premium against the amount invested and the years held.'),
      l5Illustrative('The prices, spreads and returns in this chapter and its lab are invented for teaching. What is real is the mechanism — the exchange-published indicative value, the creation and redemption process and the fee disclosures — and it is linked below so you can check it against the fund you hold.'),

      { kind: 'p', text: 'The honest comparison is not between an ETF and an actively managed fund, which is a different argument. It is between an ETF and an index fund holding exactly the same shares. Same holdings, same index, same risk: the difference is where the cost sits and who pays it. The index fund gives you the end-of-day value and accepts any amount you can afford. The ETF gives you a live price and charges you a spread for the privilege. Whether that trade is worth making depends on the amount, the holding period and the liquidity of the particular fund — three questions with numbers, which is what the lab is for.' },
      { kind: 'terms', items: [
        { term: 'Indicative value', meaning: 'A live, exchange-published estimate of the value of an ETF\'s holdings, used as the reference point during the trading day.' },
        { term: 'Premium and discount', meaning: 'The amount by which the market price of an ETF sits above or below the value of the assets behind it.' },
        { term: 'Creation and redemption', meaning: 'The exchange of a large block of the underlying shares for ETF units, or back, by designated participants.' },
        { term: 'Bid-ask spread', meaning: 'The gap between the best buying and selling prices in the order book, which is a cost paid on every trade.' },
        { term: 'Tracking difference', meaning: 'The total return of the fund against its index over a period, which is the shortfall an investor actually experiences.' },
      ] },
      l5Sources(['nse', 'bse', 'amfi'], [
        'The exchange material on how ETFs are priced during the day, the published indicative value, and the rules on market making and creation units',
        'The listed ETFs and their disclosures, including unit sizes, prices and the liquidity of each one',
        'The industry guidance on what an ETF costs an investor, including the difference between tracking error and tracking difference',
      ]),
    ],
    quiz: [
      {
        q: 'The indicative value is ₹100 and the order book is asking ₹103. What is the sensible response?',
        options: [
          { text: 'Buy, because the ETF tracks an index that will rise', why: 'The question at hand is what you are paying for the exposure today, not what the index might do later.' },
          { text: 'Wait or use a limit order, because you would be paying 3% above the value of the assets for the privilege of owning them', correct: true, why: 'A premium is a real and immediate cost. It often narrows within minutes as participants create units, and it widens when the underlying market is closed.' },
          { text: 'Buy, because the premium is a fee the fund charges', why: 'It is not a fee and the fund does not receive it. It is the price other buyers were willing to pay, and it can vanish just as quickly.' },
          { text: 'Sell the ETF short instead', why: 'A gap between price and value is not by itself an opportunity, and shorting illiquid instruments to exploit one is a way to lose money quickly.' },
        ],
      },
      {
        q: 'An ETF on a foreign index trades at a small premium that never closes. What is the most likely explanation?',
        options: [
          { text: 'The fund manager is charging too much', why: 'The expense ratio shows up inside the value of the fund, not as a gap between the price and that value.' },
          { text: 'The creation mechanism cannot operate freely — because the overseas investment ceiling is full or the underlying market is closed during Indian hours — so the price is not arbitraged back', correct: true, why: 'The gap is closed by participants creating and redeeming units. When the tap is shut by a regulatory ceiling, the premium can persist for months.' },
          { text: 'The index is being computed wrongly', why: 'Index computation is not the source of a persistent premium in the fund price.' },
          { text: 'Demand for the ETF is fraudulent', why: 'Demand alone does not explain a persistent gap; a blocked arbitrage mechanism does.' },
        ],
      },
      {
        q: 'For a ₹2,000 monthly investment over ten years, why might an index fund beat an ETF on the same index?',
        options: [
          { text: 'Because index funds have lower expense ratios', why: 'They usually have slightly higher expense ratios. ETFs are cheaper on that line.' },
          { text: 'Because the fixed cost of each ETF purchase — the spread and brokerage — is charged on a small amount, which can outweigh the smaller annual expense saving', correct: true, why: 'A cost per transaction scales badly against a small contribution. The expense saving is proportional, while the trading cost is largely fixed.' },
          { text: 'Because ETFs cannot be bought monthly', why: 'They can, and that is exactly the case where the arithmetic turns against them.' },
          { text: 'Because index funds are tax-free', why: 'Both are equity funds taxed the same way when the underlying is Indian equity.' },
        ],
      },
    ],
    takeaway: 'Use an ETF when its liquidity and its price are both working for you — check the indicative value, count the spread, and remember that a lower expense ratio is only a saving if the costs of trading it do not eat it.',
  },

  'l5-029': {
    id: 'l5-029',
    title: 'Alternative Investments',
    subtitle: 'Liquidity, valuation and fees: the three frictions that set the price of everything unusual.',
    minutes: 11,
    blocks: [
      scene('alternatives-map', 'The categories of pooled alternative funds, the assets each one holds, and the access rules that come with them.'),
      { kind: 'p', text: 'Alternatives is not an asset class. It is a shelf. Private equity, venture capital, hedge funds, private credit, farmland, art and infrastructure all sit on it, and what they have in common is not a return but a set of frictions: they are hard to sell, hard to value and expensive to hold.' },
      { kind: 'p', text: 'In India most of the shelf is reached through an alternative investment fund, a pooled vehicle that SEBI regulates in three categories. The categories are worth learning not because they are interesting but because the label tells you the leverage, the strategy and the kind of risk you are accepting.' },

      { kind: 'h', text: 'The three categories' },
      {
        kind: 'table',
        caption: 'What each category pools, and how freely it may act',
        headers: ['Category', 'What it pools', 'How it is structured', 'What that tells you'],
        rows: [
          ['Category I', 'Venture capital, angel, small and medium enterprise, infrastructure and social impact funds', 'Unlisted, investing in start-ups, small businesses or infrastructure, and expected to be economically and socially desirable', 'Early-stage and project risk, and the widest range of outcomes'],
          ['Category II', 'Private equity and private debt funds that are not in category I or III', 'Unlisted, and generally not permitted to borrow except for day-to-day needs', 'The largest and broadest category, and the one most retail-adjacent products are sold through'],
          ['Category III', 'Hedge funds and funds using complex or leveraged strategies', 'May borrow and use derivatives, and is taxed at the level of the fund', 'Leverage and strategy risk on top of the illiquidity, so the range of outcomes is the widest of all'],
        ],
      },
      l5Rule(
        'Who may buy, and in what size',
        'SEBI regulates alternative investment funds as privately placed vehicles. The minimum investment is ₹1 crore per investor per scheme, with a lower threshold of ₹25 lakh for angel funds and for the employees and directors of the investment manager, and a minimum corpus of ₹20 crore per scheme, or ₹10 crore for an angel fund. The effect of those numbers is structural rather than incidental: these products are not offered to the public, there is no secondary market, and the minimum is doing the work that a suitability rule would otherwise have to do. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Why the minimum is really about liquidity' },
      { kind: 'p', text: 'A ₹1 crore minimum is not a snob filter. It is a crude proxy for the ability to lose the money and to wait. Three frictions explain it. Liquidity: an unlisted fund\'s units cannot normally be sold when you want, so the exit is at the manager\'s discretion, a transfer to another buyer at a discount, or the end of the fund\'s life. Valuation: the price is whatever the manager\'s valuation process says, updated periodically, so your reported return in year three is an opinion rather than a transaction. Fees: a management fee is charged on committed capital whether or not it is invested, and a share of the gains above a hurdle is taken from the return that existed, not from the return that would have existed without the manager.' },
      { kind: 'list', ordered: true, items: [
        'Who values the assets, how often, and against what evidence? Ask to see the valuation policy, not just the last valuation.',
        'Who audits, and does the auditor sign off on the valuation as well as on the accounts?',
        'What is the exit mechanism in the documents, and has anyone actually used it? A clause that has never been exercised is a hope.',
        'What do the fees total as a share of the gross return at an ordinary outcome — the one in the middle, not the one in the brochure?',
        'What happens when the investment manager changes? If the returns belong to three people, their contracts are part of the asset.',
        'Is the manager\'s own money committed alongside yours, on the same terms, or only drawn from you?',
      ] },
      { kind: 'p', text: 'The strongest reason to hold something from this shelf is not a higher return. It is a different one: cash flows and price movements that are not driven by the same things as the listed market you already own. The weakest reason, and the one every seller uses, is access. Access is not a return. If the allocation cannot be explained by what it does to the rest of the portfolio, it is a purchase rather than a decision.' },
      sim('l5-alternatives-screener', 'Score an alternative on liquidity, valuation reliability, fee load and its behaviour next to the rest of the portfolio, and watch what the score does to the plan.'),
      l5Illustrative('The funds, fees and outcomes in this chapter and its lab are invented for teaching. The categories, the ₹1 crore minimum investment and the corpus requirements are the real SEBI rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One comparison is worth carrying out of this chapter. The shelf of alternatives exists because these assets are too large, too illiquid or too unusual for a public market. Where that has changed, the alternative has also changed: units of REITs and InvITs give an ordinary investor property and infrastructure cash flows, a value published by the trust, a distribution rule, and the ability to sell on any working day. That is the same underlying asset class with two of the three frictions removed, and it is a reasonable first place to look for exposure that is different, before paying for access to things you cannot sell.' },
      { kind: 'terms', items: [
        { term: 'Alternative investment fund', meaning: 'A privately pooled vehicle regulated by SEBI in three categories, investing in assets outside the ordinary listed market.' },
        { term: 'Private placement', meaning: 'An offer made to a limited number of identified investors rather than to the public, which is why no retail access exists.' },
        { term: 'Valuation policy', meaning: 'The written process by which the manager decides what an unlisted holding is worth, and how often it is revisited.' },
        { term: 'Hurdle rate', meaning: 'The minimum return the manager must deliver before its share of the gains begins to accrue.' },
        { term: 'Liquidity premium', meaning: 'The extra return an asset must offer to compensate for the fact that it cannot be sold when you want.' },
      ] },
      l5Sources(['sebi'], [
        'The alternative investment fund regulations: the three categories, the minimum investment per investor, the minimum corpus, and the disclosure and valuation obligations — read the current text, because these thresholds have been revised more than once',
      ]),
    ],
    quiz: [
      {
        q: 'Why does SEBI set a ₹1 crore minimum investment for an alternative investment fund?',
        options: [
          { text: 'To protect the returns of wealthy investors', why: 'Nothing about a minimum protects a return. It restricts who is exposed to the risk.' },
          { text: 'Because the vehicle is illiquid and hard to value, so the minimum is a proxy for being able to lose the money and wait', correct: true, why: 'The minimum substitutes for a suitability judgment about a product with no secondary market and an infrequent valuation, which is why the accompanying corpus and disclosure rules exist too.' },
          { text: 'Because the fund needs large amounts to buy assets', why: 'The fund\'s corpus requirement handles that. The per-investor minimum is a gate on who may hold the risk.' },
          { text: 'To prevent competition between funds', why: 'The minimum applies to each investor in each scheme and says nothing about how many funds may exist.' },
        ],
      },
      {
        q: 'Your unlisted alternative fund reports a 14% return in year two. What is the first thing to establish?',
        options: [
          { text: 'Whether the fund will keep performing', why: 'The more urgent question is what the number is, before you ask where it leads.' },
          { text: 'Who valued the holdings, on what basis and how often, because an unlisted return is a valuation rather than a realised price', correct: true, why: 'Nothing has been sold, so the gain is the manager\'s estimate. Until a stake is sold or a valuation is independently tested, the number is an opinion, and it forms the base that fees are charged on.' },
          { text: 'Whether the gain will be taxed', why: 'Tax matters, but at this stage you do not know whether the gain exists in a form that could be taxed.' },
          { text: 'Whether to add more money', why: 'Deciding to add before understanding the valuation is how a small position becomes a large one on unreliable information.' },
        ],
      },
      {
        q: 'A fund charges a 2% management fee and 20% of gains above an 8% hurdle. Why does the hurdle matter?',
        options: [
          { text: 'It caps the manager\'s total fee', why: 'It does not cap anything. It sets the level at which the manager begins to share in gains.' },
          { text: 'Because it decides how much of the gross return reaches you before the manager\'s share starts, and a low hurdle lets the manager take a slice of returns that the market alone provided', correct: true, why: 'A share of gains with no meaningful hurdle pays the manager for beta. The hurdle is the line between skill and market movement, and it is the term to negotiate or avoid.' },
          { text: 'It guarantees you at least 8%', why: 'A hurdle on the manager\'s fee is not a guaranteed return to you. The fund can lose money with an 8% hurdle in the document.' },
          { text: 'It is a regulatory requirement', why: 'SEBI requires disclosure of fees, not any particular hurdle, so the term is a commercial one to read and compare.' },
        ],
      },
    ],
    takeaway: 'Judge an alternative by its three frictions rather than its exclusivity — because an asset you cannot sell, cannot price and pay heavily to hold has to earn its way in on what it does for the rest of the portfolio.',
  },
}
