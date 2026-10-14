import type { Chapter } from '../../types'

/** Level 3, chapters 64–66: passive, active, and the allocation decision. */
export const passive: Record<string, Chapter> = {
  'l3-064': {
    id: 'l3-064',
    title: 'Passive Investing',
    subtitle: 'Stop trying to be clever, and keep almost everything',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'passive-vs-active', caption: 'The index line has no opinion. That is the whole point.' },
      { kind: 'p', text: 'Passive investing means buying a broad-market index fund and holding it. No stock picking, no market timing, no switching based on news. For almost everyone, this should be the core of a long-term portfolio.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Pick one broad-market index fund tracking the Nifty 50 or a comparable index.',
          'Set a monthly SIP and let it run for a decade.',
          'Do nothing in a crash — that is when the strategy pays.',
          'Rebalance once a year, if at all.',
          'Use any active fund as a small satellite, never the core.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The behavioural case is stronger than the arithmetic',
        text: 'Even if a lucky few managers beat their index, you cannot reliably identify which few. Passive investing removes the biggest source of retail error: the belief that you can tell the difference.',
      },
      {
        kind: 'table',
        caption: 'Passive and active, honestly compared',
        headers: ['Passive', 'Active'],
        rows: [
          ['Costs under 0.5%', 'Costs often 1–2%'],
          ['No manager risk', 'Manager changes, style drift'],
          ['No capacity problem', 'Can close to new investors'],
          ['Returns roughly the market', 'May be better or worse'],
          ['Requires patience', 'Requires skill to have any chance'],
        ],
      },
      { kind: 'sim', name: 'portfolio', caption: 'A broad index holding is the anchor most portfolios are missing.' },
    ],
    quiz: [
      {
        q: 'The strongest argument for passive investing is that:',
        options: [
          { text: 'Active managers always lose money', why: 'Some do beat their benchmark over long periods. The argument is about selection, not impossibility.' },
          { text: 'You cannot reliably identify the managers who will outperform in advance, and low costs are a certainty', correct: true, why: 'You cannot consistently pick the winners, but you can reliably avoid paying 1.5% a year.' },
          { text: 'It guarantees the best returns', why: 'It guarantees the market return minus a fee, which is sometimes beaten and sometimes not.' },
          { text: 'It requires no effort at all', why: 'It requires discipline precisely when it is least wanted — during a crash.' },
        ],
      },
    ],
    takeaway: 'Passive investing is the default for a reason: you cannot reliably pick winning managers, but you can reliably pay less. Make it the core, and treat active funds as a small satellite.',
  },

  'l3-065': {
    id: 'l3-065',
    title: 'Active Investing',
    subtitle: 'Trying to beat the market — honestly assessed',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Active investing means selecting securities or managers in the hope of beating a benchmark. It can work — for some professionals, and occasionally for individuals. What matters is being honest about the odds before you commit money.' },
      {
        kind: 'table',
        caption: 'The evidence over long periods',
        headers: ['Finding', 'Implication'],
        rows: [
          ['Most active funds underperform over 1 year', 'Almost always, by fees alone'],
          ['Most still underperform over 10 years', 'The gap widens with time'],
          ['A small minority beat their benchmark', 'Real, but unpredictable in advance'],
          ['Performance partly reverses over time', 'Yesterday\'s winner often fades'],
          ['Past persistence is weak evidence of skill', 'Fund rankings are not a forecast'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The specific traps in Indian markets',
        text: 'Small- and mid-cap funds can be left holding very few liquid stocks after heavy inflows, making published returns hard to actually achieve. Manager changes reset performance history. Closures and mergers quietly remove the funds that failed from published rankings.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'There is a legitimate case for a small active allocation',
        text: 'A 10–20% active sleeve, tilted toward funds with genuine long-term records and patience, is a reasonable way to keep the upside open without wrecking your core. The mistake is letting it become the core.',
      },
      { kind: 'sim', name: 'feedrag', caption: 'An active fund must beat the index by more than its fee, every year, for decades.' },
    ],
    quiz: [
      {
        q: 'A fund has outperformed its benchmark for eight straight years, with an expense ratio of 1.6%. You should:',
        options: [
          { text: 'Buy it, since eight years of outperformance is a strong signal', why: 'It is encouraging but not conclusive, and persistence is weaker evidence than people assume.' },
          { text: 'Check whether the outperformance covers the fee, whether the manager is still in place, and how the fund handled a major downturn', correct: true, why: 'Compare against the index, not just the absolute return; check continuity; and look at behaviour in a crash.' },
          { text: 'Avoid all funds with fees above 1%', why: 'Expensive funds are harder to justify, but some have consistently earned their fee.' },
          { text: 'Buy because its assets under management grew', why: 'Rising AUM often signals crowding rather than skill.' },
        ],
      },
    ],
    takeaway: 'Active investing can work but rarely does for retail investors over long periods. If you hold it, keep it a satellite, check performance net of fees, and verify the manager has not changed.',
  },

  'l3-066': {
    id: 'l3-066',
    title: 'Asset Allocation',
    subtitle: 'The decision that matters most',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'allocation-pie', caption: 'One decision drives most of what your portfolio does.' },
      { kind: 'p', text: 'Asset allocation is how you divide money across equity, debt, gold, property and cash. It is the single most important decision in investing: research consistently finds it explains the majority of the variation between portfolios over time.' },
      {
        kind: 'table',
        caption: 'A starting allocation by goal',
        headers: ['Goal', 'Equity', 'Debt', 'Gold'],
        rows: [
          ['Retirement, 20+ years away', '70–80%', '15–25%', '0–5%'],
          ['Child education, 12 years away', '50–60%', '35–45%', '5%'],
          ['Home deposit, 5 years away', '15–20%', '70–80%', '5–10%'],
          ['Emergency fund', '0%', '85% liquid fund', '15% cash'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Split the equity, do not forget the country',
        text: 'Most allocations are written as one equity line, which quietly means 100% Indian equity — one economy, one currency, one regulator. Carving 10–20% of that equity out for international markets is the cheapest diversification available, because those holdings do not fall when the Indian market or the rupee does. It costs nothing extra and it is the one adjustment that reliably reduces portfolio risk.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The right allocation changes over time',
        text: 'Glidepath works: hold more equity while the horizon is long, then shift toward debt as the goal approaches. Shifting purely because the market fell — rather than because the date moved closer — is market timing wearing a sensible costume.',
      },
      {
        kind: 'list',
        items: ['Write down your target allocation and why.', 'Rebalance once a year, not weekly.', 'Rebalance by redirecting new money, to avoid tax and friction.', 'Expect to adjust the equity share every few years as your life changes.', 'Do not rebalance because of news.'],
      },
      { kind: 'sim', name: 'portfolio', caption: 'Build a mix and read off its return, its volatility, its crash behaviour — and what it is really worth after inflation.' },
      { kind: 'sim', name: 'currency', caption: 'Add international equity and watch how much of the currency move was never your doing.' },
    ],
    quiz: [
      {
        q: 'A goal is 12 years away. Which allocation is most defensible?',
        options: [
          { text: '100% equity', why: 'Maximum growth, but it ignores that you may need the money sooner than planned.' },
          { text: 'Roughly 50–60% equity, the rest in debt', correct: true, why: 'Twelve years allows meaningful growth but is short enough that a heavy equity position could be painful at the wrong moment.' },
          { text: '100% debt', why: 'Far too cautious for a 12-year horizon — you would likely underperform inflation substantially.' },
          { text: 'Whatever performed best last year', why: 'Chasing last year\'s winner is performance chasing, not planning.' },
        ],
      },
      {
        q: 'When should you rebalance a portfolio?',
        options: [
          { text: 'Whenever a sector falls more than 20%', why: 'That is market timing by another name. Falling sectors are often the ones worth rebalancing into.' },
          { text: 'About once a year, or when a component drifts far from its target weight', correct: true, why: 'Annual or threshold-based rebalancing is a rule, and rules stop you reacting to news.' },
          { text: 'Every month', why: 'Frequent rebalancing adds costs and taxes without improving outcomes.' },
          { text: 'Only when you have spare cash', why: 'Cash-only rebalancing is sensible, but you should still check for drift periodically.' },
        ],
      },
    ],
    takeaway: 'Asset allocation explains most of your outcome. Set it deliberately from your goal and horizon, rebalance on a schedule rather than on news, and glide toward debt as the date approaches.',
  },
}
