import type { Chapter } from '../../types'

/** Level 3, chapters 51–66: mutual funds, how they work, and which kind to buy. */
export const funds: Record<string, Chapter> = {
  'l3-051': {
    id: 'l3-051',
    title: 'Mutual Funds',
    subtitle: 'Pooling money so a professional invests it for you',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'A mutual fund collects money from many investors and buys securities with it. You buy units of the fund, and a SEBI-registered asset management company handles the investment for a fee. It is the standard first investment for most Indian households.' },
      {
        kind: 'table',
        caption: 'Why funds dominate Indian retail investing',
        headers: ['Advantage', 'What it means for you'],
        rows: [
          ['Low minimum', 'You can start with ₹500'],
          ['Diversification', 'One purchase spreads you across hundreds of stocks'],
          ['Professional selection', 'A full-time team chooses the securities'],
          ['Liquidity', 'Redeem and get cash within 2–3 working days'],
          ['Transparency', 'Portfolio published monthly; NAV daily'],
          ['Regulation', 'SEBI sets disclosure and conduct standards'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Open-ended versus close-ended',
        text: 'Open-ended funds let you enter and exit whenever you like at the current NAV. Close-ended funds have a fixed period and are listed, so you can only sell on the exchange at whatever price someone will pay. Open-ended is what almost everyone should use.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'A fund is a convenient way to own a slice of an asset class.' },
    ],
    quiz: [
      {
        q: 'A mutual fund invests your money alongside thousands of other investors. The main benefit is:',
        options: [
          { text: 'It guarantees you a return', why: 'No fund guarantees a return; that is exactly what risk means.' },
          { text: 'You get diversification and professional management without doing the work', correct: true, why: 'That is the entire proposition: a small amount buys a slice of a large, professionally chosen portfolio.' },
          { text: 'It is insured like an FD', why: 'Mutual funds carry market risk and have no deposit guarantee.' },
          { text: 'It is taxed more cheaply than shares', why: 'Tax treatment depends on the fund\'s category, not on it being a fund.' },
        ],
      },
    ],
    takeaway: 'A mutual fund pools your money with others so you get diversification, professional management and liquidity from a small starting amount. It is the sensible default first investment in India.',
  },

  'l3-052': {
    id: 'l3-052',
    title: 'Asset Management Company',
    subtitle: 'The company that actually runs your fund',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'fee-drag-visual', caption: 'The AMC is the company you pay — judge it on net long-term performance after fees.' },


      { kind: 'p', text: 'The AMC is the company that designs funds, employs the fund managers, picks the securities, handles compliance and administration, and takes a fee. It is a separate legal entity from the fund itself, and it is the party you are actually paying.' },
      {
        kind: 'formula',
        label: 'Where your money goes each year',
        expr: 'Expense ratio = (Management fee + Scheme expenses + Fund expenses) ÷ Average assets',
        note: 'All of this is deducted from the fund\'s assets daily, which is why a high-expense fund trails a low-cost one by a widening margin.',
      },
      {
        kind: 'list',
        items: ['Check the AMC\'s track record across multiple market conditions, not one good year.', 'Look at fund manager tenure — the person matters more than the brand.', 'Understand the exit load, which can be 1% for one year and 0 for two.', 'A large fund house offers operational comfort; a boutique can be excellent but riskier operationally.'] },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'You are paying for their skill, so check whether they have it',
        text: 'There are around 30 AMC groups in India with genuinely different records over fifteen years. Fund houses that consistently added value before the SEBI minimum-performance rules are worth preferring.',
      },
    ],
    quiz: [
      {
        q: 'When comparing two AMCs, the most important thing to check is:',
        options: [
          { text: 'Which one has the largest office', why: 'Scale does not predict returns.' },
          { text: 'The long-term returns of their funds after fees, across different market cycles', correct: true, why: 'Evaluate net performance over ten-plus years, through both bull and bear markets, not a single good year.' },
          { text: 'Their advertising spend', why: 'Marketing is not performance.' },
          { text: 'The number of schemes they run', why: 'Running many schemes is a business strategy, not a measure of skill.' },
        ],
      },
    ],
    takeaway: 'The AMC is the company you pay. Judge it on net long-term performance after fees, and on the fund manager\'s tenure rather than the brand on the folder.',
  },

  'l3-053': {
    id: 'l3-053',
    title: 'NAV',
    subtitle: 'The price of one unit of a fund',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'fee-drag-visual', caption: 'NAV is the fund\'s price per unit, struck once daily — what you see is not what you get.' },


      { kind: 'formula',
        label: 'NAV',
        expr: 'NAV = (Value of fund\'s assets − Liabilities) ÷ Units outstanding',
        note: 'Published once daily after market close, because the underlying stocks move all day.',
      },
      { kind: 'p', text: 'Because a fund\'s underlying holdings are priced only after the market closes, the NAV is struck once a day. Orders placed during the day are executed at that evening\'s NAV — you do not get the price you saw when you clicked.' },
      {
        kind: 'table',
        caption: 'NAV and how it moves',
        headers: ['If the fund\'s holdings…', 'The NAV…'],
        rows: [
          ['Rise 2% in a day', 'Rises about 2%'],
          ['Fall 3% in a day', 'Falls about 3%'],
          ['Are unlisted and revalued quarterly', 'May not track the market daily'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Swing pricing — when NAV itself becomes risky',
        text: 'In a big fall, funds levy a charge on exiting investors to protect those who stay. Your redemption NAV can be lower than the published one. It is fair, but it means the decline can be steeper than the index suggests.',
      },
      { kind: 'list', items: ['Order by 3pm for that day\'s NAV; after that you get the next day\'s.', 'Stagger large purchases across a few days to reduce timing risk.', 'Check the exit load before redeeming.', 'Compare funds on NAV per unit growth, including the reinvested dividend.'] },
    ],
    quiz: [
      {
        q: 'You place a mutual fund purchase at 2pm. At which NAV does it execute?',
        options: [
          { text: 'The 2pm price', why: 'Mutual funds do not have an intraday price — the NAV is struck once per day.' },
          { text: 'The NAV struck after market close that day', correct: true, why: 'Any order before the cut-off generally gets that evening\'s NAV, which reflects the whole day\'s moves.' },
          { text: 'The average NAV of the day', why: 'There is no average; there is one struck NAV.' },
          { text: 'The next day\'s NAV', why: 'That applies only to orders placed after the cut-off time.' },
        ],
      },
    ],
    takeaway: 'NAV is the fund\'s price per unit, struck once daily. What you see when you click is not what you get — the price is set at the evening NAV.',
  },

  'l3-054': {
    id: 'l3-054',
    title: 'The Fund Manager',
    subtitle: 'The person actually deciding what you own',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'A fund manager chooses and trades the securities inside a fund, within a mandate set by the AMC. For an active fund, their decisions are meant to beat the benchmark. For an index fund, the mandate is mechanical: hold what the index holds.' },
      {
        kind: 'table',
        caption: 'Active versus index manager',
        headers: ['Active manager', 'Index manager'],
        rows: [
          ['Must research and select', 'Tracks an index by definition'],
          ['Charges higher fees', 'Charges almost nothing'],
          ['Can deviate from the benchmark', 'Cannot deviate'],
          ['Can outperform — or not', 'Delivers the market, minus a small fee'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Check who actually manages the fund now',
        text: 'Star managers move to different houses, and the people marketing a fund are rarely the ones running it. Look up the current fund manager and their tenure. A promising fund can be a mediocre one after a change of hands.',
      },
      {
        kind: 'list',
        items: ['Tenure in this specific fund, not overall experience.', 'Performance in a falling market, not only a rising one.', 'How many funds they manage — nine is already a lot.', 'Their philosophy, and whether it still matches the fund\'s mandate.'] },
      { kind: 'sim', name: 'feedrag', caption: 'The highest-leverage question about a manager is what they charge you.' },
    ],
    quiz: [
      {
        q: 'A fund has changed its manager and the new one has a weaker long-term record. You should:',
        options: [
          { text: 'Stay, because the fund house is the same', why: 'The fund is the manager\'s portfolio. A change of hands can change the outcome entirely.' },
          { text: 'Review whether the new manager fits this fund\'s mandate before deciding', correct: true, why: 'Manager change is a genuine event requiring review — of tenure, style and record in this specific category.' },
          { text: 'Sell everything immediately', why: 'A change of manager alone is not a sufficient reason to panic, though review is warranted.' },
          { text: 'Ignore it, since past performance is irrelevant', why: 'The past record of the new manager is exactly the relevant evidence here.' },
        ],
      },
    ],
    takeaway: 'For an active fund, the manager is the fund. Check the current person and their tenure in that specific scheme, and pay close attention to how they behaved when the market fell.',
  },

  'l3-055': {
    id: 'l3-055',
    title: 'Equity Funds',
    subtitle: 'The growth engine of a long-term portfolio',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'time-horizon', caption: 'Equity only makes sense once the horizon is long enough to ride out a crash.' },
      { kind: 'p', text: 'Equity funds invest at least 65% in shares, so they carry full equity market risk. Over ten years or more they have the best chance of beating inflation. Over three years, they might not even beat a fixed deposit.' },
      {
        kind: 'table',
        caption: 'Equity fund categories in India',
        headers: ['Category', 'Typical use'],
        rows: [
          ['Large-cap', 'Blue-chip companies, relatively steadier'],
          ['Mid-cap', 'The growth tier, higher volatility'],
          ['Small-cap', 'Highest risk and highest potential'],
          ['Flexi-cap', 'The manager invests across all sizes'],
          ['Sector or thematic', 'Concentrated in one industry — high risk'],
          ['ELSS', 'Equity with a Section 80C tax benefit'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Sector funds are a bet, not a portfolio',
        text: 'A fund investing only in banking or only in IT is not diversified, whatever its fund category says. Indian sector cycles are brutal, and you will often find them after the fact. Keep any sector allocation small and treat it as a satellite, not a core.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Set your equity share and see what it does to the whole portfolio\'s volatility.' },
    ],
    quiz: [
      {
        q: 'A fund invests only in banking stocks. It is:',
        options: [
          { text: 'Well diversified across the economy', why: 'It depends entirely on one sector, which is the definition of concentration.' },
          { text: 'A concentrated bet on one industry', correct: true, why: 'One RBI decision, one bad lending cycle, or one bad bank can hurt the fund severely.' },
          { text: 'Lower risk than a diversified fund', why: 'Concentration raises risk, regardless of how good the sector looks.' },
          { text: 'A suitable core holding for a beginner', why: 'Sector funds are usually a small satellite, if held at all.' },
        ],
      },
    ],
    takeaway: 'Equity funds are your growth engine and need a decade-plus to prove themselves. Beware sector funds: concentration is not diversification, however attractive the sector story sounds.',
  },

  'l3-056': {
    id: 'l3-056',
    title: 'Debt Funds',
    subtitle: 'The ballast in a portfolio',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Debt funds invest in government and corporate bonds and money-market instruments. They are not risk-free — their NAV moves when interest rates move — but they are far steadier than equity and have historically fallen far less in a crash.' },
      {
        kind: 'table',
        caption: 'Debt fund categories',
        headers: ['Category', 'Typical holding period', 'Volatility'],
        rows: [
          ['Liquid fund', '1 day – 3 months', 'Very low'],
          ['Ultra-short duration', 'Up to 1 year', 'Low'],
          ['Short duration', '1–3 years', 'Low to moderate'],
          ['Corporate bond fund', '3+ years', 'Moderate, with credit risk'],
          ['G-sec fund', '3+ years', 'Moderate, no credit risk'],
          ['Long duration', '5+ years', 'High rate sensitivity'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Use a debt fund for the emergency fund, not an FD',
        text: 'A liquid debt fund typically yields slightly more than an FD, redeems in a day, and has no penalty if you need it early. The trade-off is that its value is not guaranteed — though in practice short-duration Indian debt funds have been remarkably stable.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Long-duration debt funds are not "safe"',
        text: 'A 10-year duration fund fell around 5–8% in the rate rises of 2022–24 while owning entirely safe government bonds. Long duration is a deliberate bet that rates will fall, not a parking space.',
      },
      { kind: 'sim', name: 'bond', caption: 'The rate sensitivity that makes long debt funds risky.' },
    ],
    quiz: [
      {
        q: 'Which fund is best suited to an emergency fund?',
        options: [
          { text: 'A long-duration bond fund', why: 'It can fall sharply when rates rise — precisely when you need the money.' },
          { text: 'A liquid debt fund', correct: true, why: 'Short duration, liquid, and typically a slightly better yield than an FD, with daily redemption.' },
          { text: 'An equity fund', why: 'An emergency fund can fall 30% at exactly the moment you need it.' },
          { text: 'A small-cap fund', why: 'The most volatile category, and the least liquid.' },
        ],
      },
    ],
    takeaway: 'Debt funds steady a portfolio but are not risk-free — their NAV moves with rates. Match duration to purpose: a liquid fund for emergencies, long duration only if you are deliberately betting on rates falling.',
  },

  'l3-057': {
    id: 'l3-057',
    title: 'Hybrid Funds',
    subtitle: 'Somewhere between the two extremes',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'allocation-pie', caption: 'Hybrid funds put you between equity and debt — check who controls the most important decision.' },


      { kind: 'p', text: 'Hybrid funds mix equity and debt, typically somewhere between 20% and 80% equity, with the balance in bonds. They exist because the equity-debt split is the most important decision in investing, and some people would rather not make it themselves.' },
      {
        kind: 'table',
        caption: 'Types of hybrid fund',
        headers: ['Type', 'Equity share', 'Character'],
        rows: [
          ['Conservative hybrid', '10–25%', 'Barely moves, modest growth'],
          ['Balanced or aggressive hybrid', '50–80%', 'A growth engine with some ballast'],
          ['Equity-oriented hybrid (ELSS)', '65–80%', 'Gets the Section 80C benefit'],
          ['Arbitrage hybrid', 'Mostly equity, hedged', 'Targets a market-like return with lower downside'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The real question is who adjusts the mix',
        text: 'A "dynamic" hybrid fund moves between equity and debt based on market conditions. That sounds helpful, but it means you have given away control of your single most important decision. A fixed 60/40 you choose yourself is usually the more honest approach.',
      },
    ],
    quiz: [
      {
        q: 'A fund calls itself "dynamic" and shifts between equity and debt based on conditions. The main concern is:',
        options: [
          { text: 'It will always be wrong', why: 'Market timing is hard, but the fund may still reduce losses.' },
          { text: 'You have given away control of your most important decision', correct: true, why: 'Asset allocation drives most outcomes. Handing it to a manager means trusting their timing as much as their stock picking.' },
          { text: 'It must be more expensive', why: 'Dynamic funds are not systematically more expensive, though often they are slightly.' },
          { text: 'It cannot invest in bonds', why: 'Bonds are a core part of a hybrid mandate.' },
        ],
      },
    ],
    takeaway: 'Hybrid funds put you somewhere between equity and debt. Convenient, but check whether the equity-debt split is yours to set or the manager\'s — that decision matters more than which stocks are picked.',
  },

  'l3-058': {
    id: 'l3-058',
    title: 'Expense Ratios',
    subtitle: 'A small number that costs you a fortune',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'fee-drag-visual', caption: 'Same market, smaller pot, every single year.' },
      { kind: 'p', text: 'The expense ratio is the fund\'s annual costs as a percentage of your investment, deducted from the fund\'s assets daily. It covers management fees, registrar and custodian charges, audit, legal, and marketing. It is the one number you can fully control.' },
      {
        kind: 'formula',
        label: 'What 1% costs you over 30 years',
        expr: 'On ₹10,000/month at 12% return, ~1% extra fees ≈ 20% less final wealth',
        note: 'At ₹10,000 a month for 30 years, ₹6.4 crore becomes roughly ₹5.1 crore. Fees do not nibble — they compound against you.',
      },
      {
        kind: 'table',
        caption: 'Reasonable expense ratios',
        headers: ['Category', 'Reasonable', 'Expensive'],
        rows: [
          ['Index fund', '0.05–0.5%', 'Above 1%'],
          ['Large-cap active', '0.5–1.2%', 'Above 1.5%'],
          ['Small-cap fund', '1.0–1.8%', 'Above 2%'],
          ['Debt / liquid fund', '0.2–0.8%', 'Above 1%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'This is the closest thing to free money in investing',
        text: 'You cannot reliably pick the outperforming fund. You can reliably pay less. Low-cost index funds have taken a large share of new money precisely because the arithmetic is undeniable.',
      },
      {
        kind: 'list',
        items: ['Check the expense ratio before anything else.', 'Also check exit loads — a 1% load that resets yearly is a hidden second fee.', 'Direct plans avoid a distributor commission; the difference shows up over decades.', 'Prefer funds that do not need to be constantly replaced.'] },
      { kind: 'sim', name: 'feedrag', caption: 'Run the same market return through very different fees.' },
    ],
    quiz: [
      {
        q: 'Two identical equity funds have expense ratios of 0.5% and 1.8%. Over 20 years, what is the likely outcome?',
        options: [
          { text: 'They will perform similarly — the market decides', why: 'The market sets gross returns, but fees are a certain, compounding drag on one of them.' },
          { text: 'The expensive one will underperform by a widening margin', correct: true, why: 'A 1.3% annual difference compounds into roughly a quarter of the final amount over twenty years.' },
          { text: 'The cheap one will outperform because it is better managed', why: 'Often the opposite is true in the short run. Low cost is not the same as skill — it is a separate advantage.' },
          { text: 'There will be no difference', why: 'Fees compound against you and the gap widens every year.' },
        ],
      },
    ],
    takeaway: 'The expense ratio is the one thing you fully control, and it compounds against you forever. Check it first, and check for exit loads hiding a second charge.',
  },

  'l3-059': {
    id: 'l3-059',
    title: 'SIPs',
    subtitle: 'The most useful investing habit in India',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'A systematic investment plan commits a fixed amount on a fixed date every month. It removes three decisions at once: whether to invest, when to invest, and how much. That is why it works where willpower usually does not.' },
      {
        kind: 'table',
        caption: 'What SIP does for you',
        headers: ['Problem', 'How SIP fixes it'],
        rows: [
          ['Procrastination', 'The amount leaves before you can spend it'],
          ['Timing anxiety', 'You buy in bad months too, averaging your cost'],
          ['Lump-sum temptation', 'You can never "wait for the right time"'],
          ['Forgetting', 'It runs on autopay'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The rising-market benefit is real but not guaranteed',
        text: 'SIPs worked brilliantly through the 2014–2020 rise. Be careful: if the market declines for a decade, monthly investing buys more units but each is worth less, and the result can still disappoint. Averaging works over a long enough horizon, not over any particular one.',
      },
      {
        kind: 'list',
        items: ['Start small — ₹500 is a legitimate start.', 'Increase the amount every time your salary rises, ideally before lifestyle expands.', 'Review once a year, not monthly.', 'Do not pause it in a crash; that is the entire point of the mechanism.', 'Use the "STEP-UP" facility if available, to raise the amount automatically.'] },
      { kind: 'sim', name: 'compound', caption: 'Compare a SIP against the same money invested as a lump sum.' },
    ],
    quiz: [
      {
        q: 'What is the main advantage of a SIP over investing a lump sum when the market happens to be at a peak?',
        options: [
          { text: 'It guarantees better returns', why: 'A SIP cannot guarantee anything; it spreads your risk of timing, nothing more.' },
          { text: 'It buys in rising months as well as falling, averaging your purchase price', correct: true, why: 'Buying across many months reduces the damage of a single unlucky entry point.' },
          { text: 'It earns a guaranteed return', why: 'No mechanism guarantees returns in a market-linked investment.' },
          { text: 'It avoids all losses', why: 'A SIP still falls when the market falls. It only smooths the entry price.' },
        ],
      },
    ],
    takeaway: 'A SIP removes the three decisions that stop people investing: whether, when and how much. Start small, step it up with your income, and never pause it in a crash.',
  },

  'l3-060': {
    id: 'l3-060',
    title: 'Index Funds',
    subtitle: 'Buying the whole market, cheaply',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'passive-vs-active', caption: 'The same market, reached two ways. One of them has a lower fee.' },
      { kind: 'p', text: 'An index fund holds every company in a stated index, in the index\'s own weights, and does nothing clever. Its job is to match the index, and its return is the market\'s return minus a small fee. That is a genuinely useful product, not a compromise.' },
      {
        kind: 'table',
        caption: 'Index fund versus active fund',
        headers: ['Index fund', 'Active fund'],
        rows: [
          ['Holds everything in the index', 'Holds a selected few'],
          ['Expense ratio under 0.5%', 'Often 1–2%'],
          ['Transparent holdings daily', 'Monthly disclosure'],
          ['No manager risk', 'Manager risk'],
          ['Returns roughly the index', 'May differ in either direction'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'How much of a difference is skill?',
        text: 'Across studies, the majority of active funds underperform their benchmark over a single year, and most fail over a decade. A small minority beat the index consistently — but you cannot identify them in advance. The index fund accepts that you cannot, and charges you almost nothing for admitting it.',
      },
      {
        kind: 'list',
        items: ['A broad-market index fund is the default first investment.', 'Match the index to your risk: Nifty 50 is steadier than a mid-cap index.', 'Check the tracking difference against the index, not just the return.', 'One fund is enough. Resist the urge to add five.' ] },
      { kind: 'sim', name: 'feedrag', caption: 'See the same returns with and without the fee drag.' },
    ],
    quiz: [
      {
        q: 'An index fund returns 12% while its benchmark returned 12.2%. The 0.2% gap is mostly:',
        options: [
          { text: 'Bad management decisions', why: 'Index funds do not make management decisions; they follow the index.' },
          { text: 'The expense ratio and tracking difference', correct: true, why: 'That gap is the cost of running the fund, and it is why the cheapest index fund is the best one.' },
          { text: 'Cash drag from uninvested holdings', why: 'That is part of tracking difference, so it is included in the answer above.' },
          { text: 'A dematerialisation charge', why: 'That is a one-time account cost, not part of the fund\'s annual return.' },
        ],
      },
    ],
    takeaway: 'An index fund is not a lazy compromise — it is the honest response to not being able to identify skilled managers in advance. Low cost is the one advantage you can actually rely on.',
  },

  'l3-061': {
    id: 'l3-061',
    title: 'ETFs',
    subtitle: 'Funds that trade like shares',
    minutes: 6,
    blocks: [

      { kind: 'scene', name: 'passive-vs-active', caption: 'An ETF gives intraday access to an index — but check the premium to NAV before buying.' },


      { kind: 'p', text: 'An exchange-traded fund is a fund that trades on the exchange throughout the day, just like a share. Some ETFs hold a broad index; others hold gold, debt or a single sector. You need a demat account to buy them.' },
      {
        kind: 'table',
        caption: 'ETF versus index fund',
        headers: ['ETF', 'Index fund'],
        rows: [
          ['Trades intraday on the exchange', 'Priced once daily at NAV'],
          ['Needs a demat account', 'Can be bought directly from the AMC'],
          ['Can trade at a premium or discount to NAV', 'Always at NAV'],
          ['Lower expense ratio often', 'Sometimes slightly higher'],
          ['Intraday volatility risk', 'No timing risk within the day'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Buy at NAV, not above it',
        text: 'Indian ETFs sometimes trade at a premium to their net asset value. You then pay more than the assets are worth, and that premium usually collapses later. Always check the live NAV versus the market price before buying, and prefer a limit order.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Gold ETFs solved a real problem',
        text: 'Physical gold carries making charges of 20–40%, and jewellery is heavily taxed. A gold ETF gives near-pure gold exposure at a fraction of a percent a year, with no storage or making charges.',
      },
    ],
    quiz: [
      {
        q: 'You want instant access to the Nifty during market hours. Which suits you?',
        options: [
          { text: 'A regular index fund', why: 'An index fund prices once a day at NAV, so you cannot trade intraday.' },
          { text: 'An ETF tracking the Nifty', correct: true, why: 'ETFs trade throughout the day on the exchange, giving you intraday access — though watch the price versus NAV.' },
          { text: 'A closed-ended fund', why: 'Those trade on the exchange but have a fixed life and often trade at a large premium or discount.' },
          { text: 'An FD', why: 'An FD is a deposit, not a market-linked investment.' },
        ],
      },
      {
        q: 'An ETF\'s market price is 2% above its NAV. Buying now means:',
        options: [
          { text: 'Nothing — you pay the same either way', why: 'There is a real difference: you pay more than the underlying assets are worth.' },
          { text: 'You are paying more than the assets are worth, and that premium can shrink', correct: true, why: 'The premium tends to converge back toward NAV, so the excess you paid becomes a loss on its own.' },
          { text: 'You are getting a bargain', why: 'The reverse — a premium is a cost, not a benefit.' },
          { text: 'The seller pays you back', why: 'Nobody compensates you for a premium; the market sets the price.' },
        ],
      },
    ],
    takeaway: 'An ETF gives you intraday access to an index or asset at a low fee, but it needs a demat account and can trade above its NAV. Check the premium before buying.',
  },

  'l3-062': {
    id: 'l3-062',
    title: 'Nifty',
    subtitle: 'The 50-company benchmark India quotes most',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'market-cap-ladder', caption: 'A cap-weighted index rises when its biggest member rises.' },
      { kind: 'p', text: 'The Nifty 50 is a free-float market-capitalisation-weighted index of 50 companies listed on the NSE, with a base value of 1000 dated to November 1995. It is the benchmark against which most Indian equity funds are judged.' },
      {
        kind: 'list',
        items: ['Free-float weighted — only shares actually available to the public count.', 'Rebalelled periodically as the largest companies change.', 'The reference point for almost every Indian equity fund\'s stated objective.', 'Nifty Next 50 extends the coverage to the next tier.'],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'What the Nifty actually holds',
        text: 'The Nifty 50 has been dominated for years by a handful of large banks and IT companies. So a "Nifty 50 fund" is much narrower than it sounds — it is a concentrated bet on India\'s largest listed businesses.',
      },
    ],
    quiz: [
      {
        q: 'A Nifty 50 fund\'s top holding is one very large bank. This means:',
        options: [
          { text: 'The fund is diversified across 50 companies', why: 'It holds 50 names, but weightings are very uneven — cap weighting concentrates the top few.' },
          { text: 'Its performance is closely tied to that one sector\'s fortunes', correct: true, why: 'A large position in one sector means banking stress hits the fund disproportionately.' },
          { text: 'It is a small-cap fund', why: 'A cap-weighted index of large companies is the opposite of small-cap.' },
          { text: 'It is not a valid Nifty tracker', why: 'Every Nifty 50 fund holds the same index constituents; the weights come from the index.' },
        ],
      },
    ],
    takeaway: 'The Nifty 50 is India\'s most-quoted equity benchmark, weighted by free-float market cap. That weighting means it concentrates in the largest listed companies, so treat it as a bet on big blue chips rather than a slice of the whole economy.',
  },
  'l3-063': {
    id: 'l3-063',
    title: 'Sensex',
    subtitle: 'India\'s oldest benchmark, 30 companies in',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'The Sensex is the BSE benchmark of 30 companies — like the Nifty, it tracks the large end of the market.' },


      { kind: 'p', text: 'The Sensex is a free-float market-capitalisation-weighted index of 30 established companies listed on the BSE, published since 1986. It is the number most Indian newspapers quote, and its base value of 100 dates from 1979.' },
      {
        kind: 'table',
        caption: 'Sensex versus Nifty',
        headers: ['Sensex 30', 'Nifty 50'],
        rows: [
          ['30 companies', '50 companies'],
          ['BSE', 'NSE'],
          ['Free-float weighted', 'Free-float weighted'],
          ['Longer history', 'More widely tracked today'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Both are heavily skewed by the largest few',
        text: 'A market-capitalisation-weighted index rises when its biggest constituent rises. That is a feature — it reflects how the market actually values companies — but it means Indian indices have historically leaned heavily on a small group of very large banks and IT firms.',
      },
    ],
    quiz: [
      {
        q: 'A Sensex of 40,000 with a base of 100 means the index has grown by:',
        options: [
          { text: '400 times', correct: true, why: '40,000 ÷ 100 = 400. Note this is the index level, not your wealth after inflation and tax.' },
          { text: '40 times', why: 'That would be 40,000 ÷ 1,000.' },
          { text: '40,000%', why: 'The growth is 39,900% over the period since the base year, but the simple ratio from the base is 400×.' },
          { text: 'It cannot be calculated', why: 'It can: index divided by its base value.' },
        ],
      },
    ],
    takeaway: 'The Sensex is the BSE benchmark of 30 companies, weighted by size. Like the Nifty, it tracks the large end of the market, so it is a proxy for India\'s biggest businesses rather than the whole economy.',
  },
}
