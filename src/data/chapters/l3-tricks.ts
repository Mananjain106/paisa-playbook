import type { Chapter } from '../../types'

/** Level 3, chapters 85–94: the practical habits, then the portfolio itself. */
export const tricks: Record<string, Chapter> = {
  'l3-085': {
    id: 'l3-085',
    title: 'Trick: Never Invest Money You Need Soon',
    subtitle: 'Matching the asset to the deadline',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'time-horizon', caption: 'The same investor, the same fund — a different answer purely because of the date.' },
      { kind: 'p', text: 'The single most reliable way to lose money in investing is not to pick a bad asset. It is to sell a good asset at the worst possible time because you needed the cash. This is called sequence-of-returns risk, and it is entirely about timing, not selection.' },
      {
        kind: 'example',
        title: 'The same fund, two outcomes',
        text: 'An investor starts a ₹10 lakh SIP in an equity fund in 2008. They need it in 2012 for a home deposit, and exit during the crash, locking in a loss after three years of investing. An identical investor who did not need the money until 2018 rode the recovery and ended far ahead. Same fund, same market — different lives.',
      },
      {
        kind: 'table',
        caption: 'The horizon rule',
        headers: ['Money needed in', 'Where it should live'],
        rows: [
          ['Under 1 year', 'Savings account'],
          ['1–3 years', 'Liquid or short-duration debt fund'],
          ['3–7 years', 'Balanced or conservative hybrid'],
          ['7+ years', 'Equity'],
          ['15+ years', 'Equity-heavy, 70–80%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The grey zone is the dangerous one',
        text: 'Five to eight years is the worst horizon to hold equities — long enough to suffer a full crash, short enough that you cannot wait it out. Either shorten the goal or extend the timeline; do not sit in the middle.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'The horizon switch flags allocations that do not match the money\'s deadline.' },
    ],
    quiz: [
      {
        q: 'You need ₹15 lakh for a home deposit in 4 years. This money should be:',
        options: [
          { text: 'In an equity fund, for maximum growth', why: 'Four years is squarely in the dangerous grey zone. A crash in year two would force a sale at a loss.' },
          { text: 'Mostly in debt, with only a small equity portion', correct: true, why: 'Four years is too short for equity to reliably deliver. Protect the deadline first.' },
          { text: 'In property for faster appreciation', why: 'Property is even more illiquid, and the deposit is needed on a fixed date.' },
          { text: 'In whatever has performed best this year', why: 'Chasing a recent winner is not a plan, especially with a hard deadline.' },
        ],
      },
    ],
    takeaway: 'Never put money with a deadline into a volatile asset. The asset that forces you to sell at the worst moment is not your return — it is your capital.',
  },

  'l3-086': {
    id: 'l3-086',
    title: 'Trick: Diversify Instead of Betting Everything',
    subtitle: 'The most reliable edge available to a beginner',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Concentration feels rational — if you are right, you win big. The problem is that being right less often than you think, with everything on one outcome, produces a portfolio that can go permanently negative rather than merely disappointing.' },
      {
        kind: 'formula',
        label: 'Diversification reduces the bad outcome',
        expr: 'Portfolio volatility < the volatility of any single holding',
        note: 'When holdings are not perfectly correlated, the combined portfolio is steadier than its parts — at no cost to expected return.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Diversify across what can go wrong, not just across names',
        text: 'Ten funds from the same house, tracking different indices, run by the same team — that is one bet. Spread across asset classes, across market exposure (domestic and international), and across manager risk.',
      },
      {
        kind: 'list',
        items: ['One fund can own hundreds of stocks — that is diversification.', 'Ten funds buying the same stocks is not.', 'Keep any single stock to under 5% of your portfolio, ideally less.', 'Diversify across asset classes, not only across securities.', 'Include something that is negatively correlated with equity, such as a little gold.'] },
      { kind: 'sim', name: 'portfolio', caption: 'Add a genuinely different asset class and watch total volatility fall.' },
    ],
    quiz: [
      {
        q: 'You hold five mutual funds. Which is the most meaningful diversification?',
        options: [
          { text: 'Five funds from five different AMC houses', why: 'Different houses help a little, but they often hold very similar stocks.' },
          { text: 'Equity, debt, a small gold ETF and some international equity', correct: true, why: 'Different asset classes with genuinely different drivers. This is real diversification.' },
          { text: 'Five large-cap funds', why: 'All five own substantially the same hundred-odd companies.' },
          { text: 'Five funds with different fund managers', why: 'Manager diversity is useful but much weaker than asset-class diversity.' },
        ],
      },
    ],
    takeaway: 'Diversify across what can fail differently, not just across names. Asset-class spread beats counting holdings, and a little negatively-correlated holding genuinely reduces portfolio risk.',
  },

  'l3-087': {
    id: 'l3-087',
    title: 'Trick: Understand Fees Before You Invest',
    subtitle: 'The one cost you fully control',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'fee-drag-visual', caption: 'The same market return, a smaller pot, every year.' },
      { kind: 'p', text: 'You cannot reliably pick the best fund or the best stock. You can reliably pay less. Fees are the only variable in investing that is fully in your control and fully knowable in advance.' },
      {
        kind: 'formula',
        label: 'All-in cost to check before buying',
        expr: 'Expense ratio + exit load + switching cost + GST on brokerage',
        note: 'An exit load of 1% per year resets after one year and can cost more than several years of expense ratio.',
      },
      {
        kind: 'table',
        caption: 'Where the money actually goes',
        headers: ['Cost', 'Who receives it', 'Can you avoid it?'],
        rows: [
          ['Expense ratio', 'The AMC', 'Yes — by choosing a cheaper fund'],
          ['Exit load', 'The AMC', 'Yes — hold past the load period'],
          ['Direct vs regular plan', 'The distributor', 'Yes — buy a direct plan'],
          ['Brokerage and STT', 'Broker and government', 'Partly — discount brokers'],
          ['Stamp duty on purchase', 'Government', 'No, but it is a known, small cost'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The distributor commission is invisible and expensive',
        text: 'A regular plan charges 1–2.5% more than the identical direct plan, and that gap is paid for decades. Many people are sold the regular plan by an agent who receives a commission from your investment. Ask what they earn.',
      },
      { kind: 'sim', name: 'feedrag', caption: 'Run an identical market return through very different fee structures.' },
    ],
    quiz: [
      {
        q: 'The identical fund is available as a direct plan at 0.9% expense and a regular plan at 2.1%. Over 20 years you should:',
        options: [
          { text: 'Prefer the regular plan for the distributor support', why: 'Distribution support is a service you are paying heavily for, and it is optional.' },
          { text: 'Prefer the direct plan, because 1.2% a year compounds against you for decades', correct: true, why: 'On a ₹10,000 monthly SIP over 20 years, that 1.2% difference is a substantial final-wealth gap.' },
          { text: 'It makes no difference', why: 'It makes a very large difference over decades.' },
          { text: 'Buy the regular plan, then switch later', why: 'Switching triggers exit load and crystallises tax, so it is not a free solution.' },
        ],
      },
    ],
    takeaway: 'Fees are the one thing you fully control and can know in advance. Check the expense ratio, the exit load and whether you are buying a direct or regular plan — the last one is the most commonly overlooked.',
  },

  'l3-088': {
    id: 'l3-088',
    title: 'Trick: Separate Investing From Speculation',
    subtitle: 'Know which bucket a decision goes in',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'time-horizon', caption: 'Investing rests on an examinable track record; speculation rests on a guess about price.' },


      { kind: 'p', text: 'Investing is taking an asset with a long history of matching the money you will need. Speculation is taking a risk with no reliable basis, hoping the price moves your way. Both feel exciting; only one builds wealth.' },
      {
        kind: 'table',
        caption: 'Investing versus speculation',
        headers: ['Investing', 'Speculation'],
        rows: [
          ['Has a track record you can examine', 'Depends on price moving your way'],
          ['You can explain why it should work', 'Your reason is that it will go up'],
          ['Sized so a bad outcome is survivable', 'Sized on conviction, not arithmetic'],
          ['No leverage', 'Often leveraged'],
          ['Reviewed annually', 'Watched daily'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The same instrument can be either',
        text: 'An index fund SIP is investing. The same fund bought with a loan because you expect the market to rise next month is speculation. The instrument is identical; the reasoning is not.',
      },
      {
        kind: 'list', items: ['Ask: what is my reason, and can I write it down?', 'If the reason is "prices usually go up", that is not a reason.', 'Never speculate with borrowed money.', 'Keep speculative money to money you can afford to lose entirely.', 'If you cannot explain the thesis in one sentence, do not buy it.'] },
    ],
    quiz: [
      {
        q: 'Someone buys a small-cap fund taking a home loan EMI, because "markets always go up over 10 years". This is:',
        options: [
          { text: 'Investing — 10 years is a long horizon', why: 'The horizon is long, but the reasoning and the leverage are the problem.' },
          { text: 'Speculation — the reasoning is a generalisation, and leverage can force a sale before the horizon arrives', correct: true, why: 'Borrowed money plus a vague thesis plus a volatile asset is speculation with a forced exit.' },
          { text: 'Investing, because a small-cap fund is diversified', why: 'Diversification does not excuse leverage.' },
          { text: 'Both, depending on the fund', why: 'The reasoning and the leverage make it speculation regardless of which fund.' },
        ],
      },
    ],
    takeaway: 'Investing rests on an examinable track record and a stated reason; speculation rests on a guess about price. The same asset can be either — the reasoning and the leverage decide which.',
  },

  'l3-089': {
    id: 'l3-089',
    title: 'Trick: Do Not Confuse Past Returns With Future Ones',
    subtitle: 'The most expensive assumption in finance',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'A fund with a spectacular five-year record does not have a guaranteed next five years. Performance partly reverses, valuations that justified past returns rarely justify future ones, and the manager may already have left.' },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The base-rate problem',
        text: 'India has had multi-year periods where equity returned very little, and real estate sat flat in whole cities. If a plan only works when markets rise, it is not a plan — it is a hope. Build one that works across scenarios.',
      },
      {
        kind: 'table',
        caption: 'Anchoring traps',
        headers: ['The trap', 'The better question'],
        rows: [
          ['"This fund gave 30% last year"', 'What is its ten-year record, net of fees?'],
          ['"Gold went up 25% this year"', 'What is its long-run real return after inflation?'],
          ['"That flat gave 8% a year"', 'What is its long-run real return, and is it tax-efficient?'],
          ['"This one is up 40% already"', 'Is it up because it is good, or because people are buying it?'],
        ],
      },
      { kind: 'list', items: ['Judge anything you buy over 5–10 years, not 1 year.', 'Use a conservative assumption: roughly 10–12% nominal equity, not last year\'s number.', 'Ask whether the reason for past performance still exists.', 'Stress-test your plan with zero real growth for five years.'] },
      { kind: 'sim', name: 'cycle', caption: 'The same asset, three different cycles, three very different outcomes.' },
    ],
    quiz: [
      {
        q: 'A fund has returned 35% a year for the last three years. For planning your retirement, the sensible assumption is closest to:',
        options: [
          { text: '35% a year', why: 'Extrapolating three exceptional years is the single most common forecasting error.' },
          { text: 'About 10–12% a year', correct: true, why: 'A conservative long-run nominal return, with a plan that also survives a much worse decade.' },
          { text: '35% for the next three years, then 0%', why: 'That is not a useful planning figure and would produce a wildly unrealistic target.' },
          { text: '0% a year, to be safe', why: 'Too pessimistic, and would make the goal look impossible.' },
        ],
      },
    ],
    takeaway: 'Past returns are the best evidence available and still not a forecast. Plan with a conservative long-run number and check that your plan survives a decade of poor returns.',
  },

  'l3-090': {
    id: 'l3-090',
    title: 'Trick: Calculate the Real Return After Inflation',
    subtitle: 'The number that tells you whether you actually gained',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'real-vs-nominal', caption: 'The gap between the two bars is inflation. Nothing was debited to cause it.' },
      { kind: 'formula',
        label: 'Real return',
        expr: 'Real return = ((1 + nominal) ÷ (1 + inflation)) − 1',
        note: 'Dividing, not subtracting. At 12% and 6%, the real return is about 5.7%, not 6%.',
      },
      { kind: 'p', text: 'A 7% return is not 7% if inflation is 6%. This is the single most useful correction in personal finance, because every advertised rate, bonus and fund return is quoted before inflation.' },
      {
        kind: 'table',
        caption: 'Real returns at different inflation rates',
        headers: ['Nominal return', 'At 4% inflation', 'At 6% inflation', 'At 8% inflation'],
        rows: [
          ['6% (FD)', '~1.9%', '~0%', '~−1.9%'],
          ['8% (bonds)', '~3.8%', '~1.9%', '~0%'],
          ['12% (equity)', '~7.7%', '~5.7%', '~3.7%'],
          ['14% (equity, good year)', '~9.6%', '~7.5%', '~5.6%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The 4% rule for withdrawal',
        text: 'If inflation is 6% and your investments realistically return 7% after tax, your real return is around 1%. That is the number to check your retirement plan against — and it is why ₹1 crore is not a fixed amount of future spending power.',
      },
      { kind: 'list', items: ['Compare any two investments on real return, never nominal.', 'Subtract taxes too — a 7% FD taxed at 30% returns 4.9%.', 'Remember your salary needs to grow with inflation too.', 'Check purchasing power on a goal\'s target date, not today.'] },
      { kind: 'sim', name: 'realreturn', caption: 'Strip inflation out of any return and see what your money really buys.' },
      { kind: 'sim', name: 'currency', caption: 'Inflation has a second engine: the rupee sliding, which raises the price of everything you import.' },
    ],
    quiz: [
      {
        q: 'An investment returns 10% in a year when inflation is 8%. The real return is approximately:',
        options: [
          { text: '2%', correct: true, why: '1.10 ÷ 1.08 = 1.0185, so about 1.9% — call it 2%. The naive subtraction is close here, but the division matters much more when the numbers are large.' },
          { text: '10%', why: 'That is nominal, which is what is advertised.' },
          { text: '18%', why: 'That would be adding the two, which is not how this works.' },
          { text: '−8%', why: 'Negative real returns occur when nominal return is below inflation.' },
        ],
      },
      {
        q: 'A 7% FD, taxed at your slab, compared against a 12% equity fund taxed at 12.5% LTCG. Which is better after tax and inflation of 6%?',
        options: [
          { text: 'The FD', why: 'It is not — 7% before tax is roughly 5% after, and less after inflation.' },
          { text: 'The equity fund, which retains far more after tax', correct: true, why: 'Equity gains over 12 months face a much lower rate, so the post-tax real return is several points higher.' },
          { text: 'They are identical', why: 'Tax treatment differs substantially and the comparison must be after tax.' },
          { text: 'It depends only on the amount invested', why: 'Percentage returns, not amounts, determine which is better.' },
        ],
      },
    ],
    takeaway: 'Real return is nominal return divided by inflation, and tax comes off first. Judging investments on nominal return is the most common way to overestimate what you have actually gained.',
  },

  'l3-091': {
    id: 'l3-091',
    title: 'Portfolio Construction',
    subtitle: 'Turning everything you have learned into one allocation',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'allocation-pie', caption: 'One allocation, most of your outcome.' },
      { kind: 'p', text: 'Portfolio construction is the practice of building an allocation from your goals, horizon, capacity and tolerance — and then holding to it. It is where every earlier chapter converges.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'List every goal with an amount and a target date.',
          'Split goals into short (under 3 years) and long (7 years plus).',
          'Allocate short-horizon money to debt and cash.',
          'Allocate long-horizon money to a broad equity index fund.',
          'Add 5–10% gold for diversification.',
          'Check the crash you would actually survive, and reduce equity if not.',
          'Write the allocation down, rebalance annually, and stop tinkering.',
        ],
      },
      {
        kind: 'table',
        caption: 'A complete, simple Indian retail portfolio',
        headers: ['Holding', 'Share', 'Role'],
        rows: [
          ['Nifty 50 or broad index fund', '40–60%', 'Growth engine'],
          ['International equity fund', '10–20%', 'Diversifier, uncorrelated with India'],
          ['Corporate bond or debt fund', '15–30%', 'Stability, some growth'],
          ['Liquid fund', '5–10%', 'Emergency, short goals'],
          ['Gold ETF', '5–10%', 'Diversifier'],
          ['Cash in savings', '0–5%', 'Immediate needs'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The plan is only complete when it states a goal in real terms',
        text: 'A portfolio is not finished when the weights add to 100. It is finished when you know what the balance buys on the day you need it. Check that figure after inflation, not the headline number — ₹1 crore in 2045 is worth roughly ₹25 crore of today\'s money at 6% inflation, and only the real figure can be compared against what your goal will actually cost.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Simple beats clever, for a specific reason',
        text: 'A simple portfolio you can hold for fifteen years will almost always beat a clever one you abandon after three. The edge is behavioural as much as mathematical: fewer decisions means fewer chances to be wrong at an expensive moment.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not add complexity to feel productive',
        text: 'Adding a fund does not improve a portfolio unless it reduces risk or adds exposure you genuinely lacked. Every extra holding needs a stated reason, and "it went up last year" is not a reason.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Build this allocation yourself and read off its return, its volatility, its crash behaviour, and what the ending balance is really worth.' },
      { kind: 'sim', name: 'currency', caption: 'Then move the currency slider to see how much of a foreign holding was the rupee, not you.' },
    ],
    quiz: [
      {
        q: 'A portfolio is 100% Nifty 50 index fund. Its main weakness is:',
        options: [
          { text: 'The expense ratio is too high', why: 'A broad index fund is usually the cheapest option available.' },
          { text: 'Concentration — it holds only large Indian equities, with no debt, gold or international exposure', correct: true, why: 'It is a single bet on one country\'s large companies. Adding debt and a little gold genuinely reduces risk.' },
          { text: 'It is not actively managed', why: 'That is an advantage, not a weakness.' },
          { text: 'The liquidity is poor', why: 'Index funds redeem in two to three days — quite liquid.' },
        ],
      },
      {
        q: 'When is it worth adding a new fund to a portfolio?',
        options: [
          { text: 'When it has outperformed recently', why: 'Recent performance is not a reason.' },
          { text: 'When it adds exposure or risk reduction the portfolio genuinely lacks', correct: true, why: 'Every addition should have a stated purpose: diversification, a goal, or a specific risk you want to reduce.' },
          { text: 'Whenever a new fund looks good', why: 'That produces an expensive, unmanaged collection rather than a portfolio.' },
          { text: 'To reduce risk, always', why: 'Adding any holding does not automatically reduce risk — only genuinely uncorrelated exposure does.' },
        ],
      },
    ],
    takeaway: 'A simple allocation matched to your goals and horizon, held without tinkering, beats a clever one you abandon. Add a holding only when it has a stated reason.',
  },

  'l3-092': {
    id: 'l3-092',
    title: 'Investment Simulation',
    subtitle: 'Running a full market history through your own plan',
    minutes: 7,
    blocks: [
      { kind: 'p', text: 'The most useful exercise in investing is to run your actual plan through a real, brutal market history — including the parts where you would have wanted to quit. Backtests are not predictions, but they are the best available test of whether a plan is survivable.' },
      {
        kind: 'table',
        caption: 'What a realistic backtest must include',
        headers: ['Must include', 'Why'],
        rows: [
          ['Recurring contributions', 'Plans are usually SIPs, not lumps'],
          ['Expenses and taxes', 'A 1.5% fee changes the outcome materially'],
          ['Inflation', 'Compare in real terms'],
          ['A full cycle', 'At least one −30% or worse period'],
          ['Rebalancing', 'Once a year'],
          ['No peeking ahead', 'You must use only information available at each date'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Survivorship and look-ahead bias',
        text: 'A backtest that only includes companies or funds that still exist, or that uses today\'s index composition for past periods, will look far better than reality. Know which biases a tool has before trusting it.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The question a simulation should answer',
        text: 'Not "will this make money" but "would I have kept going". If a plan requires never experiencing a bad decade, it is not a plan.',
      },
      { kind: 'sim', name: 'cycle', caption: 'Run a full holding period through bull, sideways and bear conditions.' },
      { kind: 'sim', name: 'portfolio', caption: 'Then test whether your allocation survives the same conditions.' },
    ],
    quiz: [
      {
        q: 'A backtest shows a fund delivering 22% a year over 20 years, but only testing periods where the market rose. The main flaw is:',
        options: [
          { text: 'The fees were not included', why: 'That is a real issue, but the more fundamental one is the selection of periods.' },
          { text: 'It only tested favourable periods, so it has severe survivorship and sample-selection bias', correct: true, why: 'A plan has to survive bad decades too. Ignoring them produces a number that cannot be achieved.' },
          { text: 'It used monthly data', why: 'Frequency is a minor issue by comparison.' },
          { text: 'It ignored inflation', why: 'Also real, but the period selection is the larger flaw.' },
        ],
      },
      {
        q: 'The most valuable result of simulating a plan through history is:',
        options: [
          { text: 'A reliable forecast of future returns', why: 'No simulation can forecast returns. That is not what it is for.' },
          { text: 'Learning whether you would actually have stuck with the plan through a crash', correct: true, why: 'The behavioural test is the real value: it tells you whether the plan is one you will hold.' },
          { text: 'Proving the plan is optimal', why: 'A simulation tests a plan; it does not prove optimality.' },
          { text: 'Deciding how much to invest next month', why: 'Far too narrow a use.' },
        ],
      },
    ],
    takeaway: 'Simulate your plan through real history, including the bad decades, with fees, taxes and a rebalancing rule. The goal is to learn whether you would have kept going — not to forecast.',
  },

  'l3-093': {
    id: 'l3-093',
    title: 'The Investment Journal',
    subtitle: 'The cheapest edge you will ever own',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'time-horizon', caption: 'Keep a written record of every decision and your emotional state when you made it.' },

      { kind: 'p', text: 'An investment journal is a written record of what you own, why you own it, and what you felt at the time. It is the only way to detect your own repeated mistakes — and it turns investing from a mood into a process.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Date, amount and instrument bought or sold.',
          'The reason in one sentence, written before the outcome is known.',
          'Your target allocation at that date.',
          'Your emotional state — this is the most useful column.',
          'Fees and taxes paid.',
          'What would have to change for you to sell.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Write the reason before you know the outcome',
        text: 'A journal written after the fact becomes a rationalisation of whatever you happened to do. Recording your reason at the moment of the decision is what makes it evidence.',
      },
      {
        kind: 'table',
        caption: 'The patterns a journal reveals',
        headers: ['What you notice', 'What it usually means'],
        rows: [
          ['You sold after a fall each time', 'Loss aversion is driving decisions'],
          ['You bought after a rally', 'FOMO, and a bad entry price'],
          ['You ignored your allocation', 'No plan, or a plan you do not believe'],
          ['You changed your target twice a year', 'Chasing, not investing'],
          ['Your largest losses followed your worst decisions', 'Process, not luck, drives outcomes'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Ten minutes a month is enough',
        text: 'A monthly review of the holdings, the allocation and the journal is sufficient. Any more time tends to produce more trading, not better decisions.',
      },
    ],
    quiz: [
      {
        q: 'What is the most valuable column in an investment journal?',
        options: [
          { text: 'The purchase price', why: 'Useful for tax, but easy to look up elsewhere.' },
          { text: 'Your emotional state at the time of the decision', correct: true, why: 'Feelings are the recurring driver of bad decisions, and only written down do they become visible.' },
          { text: 'The fund\'s current NAV', why: 'That changes daily and is not part of your decision.' },
          { text: 'The final profit', why: 'Writing the outcome afterwards biases every entry into a rationalisation.' },
        ],
      },
      {
        q: 'You notice you sold every holding after a 20% fall. What does this suggest?',
        options: [
          { text: 'Your allocation is too conservative', why: 'The behaviour points to selling too easily, not holding too little.' },
          { text: 'Loss aversion is driving your decisions, and your equity allocation is too large for your tolerance', correct: true, why: 'A repeated pattern under stress is exactly what a journal exists to expose. Reduce equity until you would hold.' },
          { text: 'You should buy back immediately', why: 'Reactive buying after a fall is another emotional decision.' },
          { text: 'Nothing — selling after a fall is rational', why: 'Sometimes it is — but doing it consistently turns volatility into permanent loss.' },
        ],
      },
    ],
    takeaway: 'Keep a written record of every decision and your emotional state when you made it. The patterns you find — selling every fall, buying every rally — are worth more than any stock tip.',
  },

  'l3-094': {
    id: 'l3-094',
    title: 'A Spreadsheet Investment Tracker',
    subtitle: 'Build the one sheet you will actually keep using',
    minutes: 7,
    blocks: [
      { kind: 'p', text: 'A tracker is a spreadsheet that answers three questions: what do I own, what has it actually returned after fees and tax, and am I still at my target allocation? It takes an hour to build and removes almost all the guesswork.' },
      {
        kind: 'formula',
        label: 'The cell that matters most',
        expr: 'True return = (Current value − Invested + Dividends) ÷ Invested − 1',
        note: 'Add back the tax you paid on the gain, or you will understate your own returns and learn nothing from it.',
      },
      {
        kind: 'table',
        caption: 'Columns worth having',
        headers: ['Column', 'Why'],
        rows: [
          ['Instrument and type', 'To check for overlap between funds'],
          ['Quantity / units', 'Needed for any per-unit calculation'],
          ['Buy date and price', 'For holding period and capital gains'],
          ['Invested amount', 'The base for every return figure'],
          ['Current price', 'Pulled daily or weekly'],
          ['Target weight', 'So drift is visible'],
          ['Reason for holding', 'From your journal'],
        ],
      },
      {
        kind: 'list',
        items: [
          'Use SUMIF or SUMIFS to total by asset class automatically.',
          'Add a column for fees and taxes paid, so you see their true cost.',
          'Add a conditional format that highlights any holding far above its target weight.',
          'Review monthly for the spreadsheet, but rebalance only annually.',
          'Keep the reasons column. It is the most valuable part.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Build it for your real decisions, not for impressing yourself',
        text: 'A simple sheet that you update every month beats a sophisticated one you abandon. The goal is a clear view of allocation and real return — everything else is optional.',
      },
      { kind: 'sim', name: 'sheet', caption: 'A working spreadsheet engine. Build your own allocation tracker in it.' },
    ],
    quiz: [
      {
        q: 'Your fund returned 14% and you paid 15% as exit load and tax on the gain. The return you actually kept is roughly:',
        options: [
          { text: '14%', why: 'That is the headline figure before your own costs.' },
          { text: 'About 11–12%', correct: true, why: 'Fees, exit load and capital gains tax can consume two to three points of a headline return, and that compounds.' },
          { text: '29%', why: 'That would be adding the costs rather than subtracting them.' },
          { text: 'About 5%', why: 'Too pessimistic — costs rarely consume the entire return.' },
        ],
      },
      {
        q: 'What is the main benefit of tracking your actual weight of each asset class?',
        options: [
          { text: 'It predicts future returns', why: 'Weighting tells you nothing about future returns.' },
          { text: 'It shows drift from your target, so you know when to rebalance', correct: true, why: 'Drift is invisible without measuring it, and unmanaged drift is how portfolios quietly become too risky.' },
          { text: 'It replaces your journal', why: 'The tracker shows what you hold; the journal explains why.' },
          { text: 'It reduces your fees', why: 'Tracking itself does not lower fees.' },
        ],
      },
    ],
    takeaway: 'A simple tracker showing holdings, real return after fees and tax, and current weight versus target is the operating system for your portfolio. Build it once and review it monthly.',
  },
}
