import type { Chapter } from '../../types'

/**
 * Level 3, chapters 36–50: how a business is measured and priced.
 *
 * These chapters use real Indian companies — ITC, TCS, Reliance, D-Mart,
 * HDFC Bank, Vodafone Idea, Tata Motors — so that every ratio attaches to
 * something the reader can open on a screener and check.
 */
export const valuation: Record<string, Chapter> = {
  'l3-036': {
    id: 'l3-036',
    title: 'Market Capitalisation',
    subtitle: 'What the whole company is worth today',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'market-cap-ladder', caption: 'Price times shares outstanding — one number for the whole business, and the rung it sits on decides how it is treated.' },
      { kind: 'p', text: 'Market capitalisation is the market price of one share multiplied by the number of shares in issue. It is the simplest way to say how big a company is: ₹1,500 a share with 100 crore shares is a company valued at ₹1.5 lakh crore. Indian market regulators, index providers and mutual fund categories all use market cap to sort companies, which is why the number matters beyond the price on your screen.' },
      {
        kind: 'formula',
        label: 'Two ways to work out the same thing',
        expr: 'Market cap = share price × number of shares outstanding',
        note: 'Reliance at ₹2,900 a share with about 676 crore shares is a company valued at roughly ₹19.6 lakh crore. Change either input and the whole valuation changes.',
      },
      {
        kind: 'table',
        caption: 'Why the market cap ladder is not just a label',
        headers: ['Rung', 'Roughly', 'What it decides'],
        rows: [
          ['Large cap', 'The top 100 by market cap', 'Mutual fund category rules, index membership, institutional liquidity, tighter price bands'],
          ['Mid cap', 'Ranks 101–250', 'Higher volatility, thinner coverage, more discretionary mutual fund limits'],
          ['Small cap', 'Rank 251 and below', 'Wide spreads, low analyst coverage, the greatest dispersion of outcomes'],
          ['Micro cap / penny', 'Very small and often barely traded', 'Delisting risk, manipulation risk, and the least reliable disclosures'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Market cap moves without the company changing at all',
        text: 'On a day when the Nifty falls 1.5%, a company can lose thousands of crores of market cap while its factories, employees, order book and cash balance are exactly as they were yesterday. On 23 March 2020, and again in the first days of the pandemic, entire industries lost a third of their value without a single permanent change to their businesses. Market cap is a price, not a measurement of worth.',
      },
      {
        kind: 'example',
        title: 'Free-float versus total market cap in India',
        text: 'Tata Sons owns roughly 72% of TCS, so most of TCS’s market capitalisation is not available to buy. Index providers therefore use the free-float market value, which is why TCS’s weight in the Nifty 50 is far smaller than its full size suggests. When the Tata group sells even a small part of its stake, the free float rises and the index weight changes — without TCS doing anything at all.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A low price is not a small company',
        text: 'A ₹12 share with 500 crore shares outstanding is a ₹6,000 crore company. A ₹3,200 share with 1 crore shares outstanding is a ₹3,200 crore company — smaller than the first. Beginners habitually treat a ₹12 share as “cheap” and a ₹3,200 share as “expensive”, which is why so much retail money ends up in small penny stocks.',
      },
      { kind: 'sim', name: 'valuation', caption: 'Change the price or the share count and watch the market capitalisation move — it is just multiplication.' },
      {
        kind: 'terms',
        items: [
          { term: 'Market capitalisation', meaning: 'Share price multiplied by the number of shares outstanding — the market\'s valuation of the whole company. It changes every day without the business changing.' },
          { term: 'Large cap', meaning: 'The top 100 Indian companies by market capitalisation. Mutual fund categories and index rules are built on these ranks.' },
          { term: 'Mid cap', meaning: 'Companies ranked roughly 101–250 by market capitalisation: faster growing and considerably more volatile than large caps.' },
          { term: 'Small cap', meaning: 'Companies ranked 251 and below. Thinly researched, wide spreads, and the widest spread of outcomes in the Indian market.' },
          { term: 'Penny stock', meaning: 'A very low-priced, usually very small and thinly traded share. A low price is not a low valuation — it is a signal to check the share count.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A company with 50 crore shares trades at ₹80. What is its market capitalisation?',
        options: [
          { text: '₹4,000 crore', correct: true, why: '50 crore × ₹80 = ₹4,000 crore. Market cap is price multiplied by shares outstanding.' },
          { text: '₹80 crore', why: 'That ignores the share count entirely.' },
          { text: '₹6,250 crore', why: 'That would require dividing something rather than multiplying.' },
          { text: 'It cannot be calculated from these figures', why: 'Both inputs are given, so it can.' },
        ],
      },
      {
        q: 'TCS is one of India’s largest companies, yet its weight in the Nifty 50 is smaller than its full size implies. Why?',
        options: [
          { text: 'Because index weights are capped arbitrarily', why: 'Weights follow free-float valuation rules, not a subjective cap.' },
          { text: 'Because the promoter, Tata Sons, holds a large majority, so only the free float counts', correct: true, why: 'Free-float weighting counts only shares available to outside investors, which is why a promoter-heavy company carries a smaller index weight.' },
          { text: 'Because TCS pays dividends', why: 'Dividends are not part of index weighting.' },
          { text: 'Because TCS is not listed on the NSE', why: 'It is listed and traded on the NSE every day.' },
        ],
      },
      {
        q: 'The Nifty falls 2% on a Tuesday. What happened to the underlying businesses of the companies in it?',
        options: [
          { text: 'Their earnings fell 2%', why: 'Earnings are reported quarterly; a daily index move does not change them.' },
          { text: 'Nothing — only the price the market is willing to pay changed', correct: true, why: 'Market capitalisation is a live price, not a measurement of the business. That is exactly why falls can be bought by the patient.' },
          { text: 'Their factories became less valuable', why: 'Physical assets are untouched by a share price move.' },
          { text: 'They became 2% more indebted', why: 'Debt is a separate number entirely.' },
        ],
      },
    ],
    takeaway: 'Market capitalisation is price times shares: a live market valuation, not a measure of quality. It sorts companies into regulatory and index buckets, and it changes every day without the business changing at all.',
  },

  'l3-037': {
    id: 'l3-037',
    title: 'Large-Cap, Mid-Cap and Small-Cap',
    subtitle: 'Size is a real risk category, not a label',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'market-cap-ladder', caption: 'Same market, different rungs — and the higher you look, the steadier everything gets.' },
      { kind: 'p', text: 'Splitting the market by size is not cosmetic. In India, the top 100 companies are researched by dozens of analysts, owned by every large institution, and quoted with spreads measured in paise. The companies ranked 251 and below are often covered by nobody, owned by nobody institutional, and can move 40% in a quarter on one large order. SEBI’s mutual fund categories enforce those divisions: a large-cap fund cannot drift into small caps just because they are running.' },
      {
        kind: 'table',
        caption: 'The same day, three different experiences',
        headers: ['Rung', 'What you typically get', 'What you must accept'],
        rows: [
          ['Large cap', 'Strong disclosure, deep liquidity, institutional scrutiny, steadier earnings', 'Less explosive growth when the economy booms'],
          ['Mid cap', 'Faster growth, real competition for market share, decent coverage', '30–50% drawdowns, governance surprises, crowded exits'],
          ['Small cap', 'Founder-led businesses with high growth potential and no analyst crowd', 'Wide spreads, unreliable liquidity, accounting risk, long stretches of nothing'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Small-cap outperformance is often survivorship bias',
        text: 'Look at the small-cap index over fifteen years and the return looks spectacular — because the index only contains companies that survived and grew. Hundreds of small companies listed in the 2000s have been delisted, merged, or are still quoting 80% below their peak. The average investor experience across all small caps is much worse than the index’s arithmetic suggests.',
      },
      {
        kind: 'example',
        title: 'Two 2020 stories: a mid cap and a small cap',
        text: 'A well-run mid-cap financial company fell roughly 45% between February and March 2020, then multiplied several times over as its business recovered. Meanwhile, many small caps fell 50% and simply never recovered — their businesses did not have the balance sheet to wait. Both sets of investors were told the crash was a buying opportunity. Only one group owned businesses that could survive the wait. Size is a decent proxy for that survivability, which is why the risk label matters more than the growth story.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not confuse the cap label with safety',
        text: 'Large cap means large, not invincible. Large Indian companies have gone through debt defaults, governance scandals and 60% drawdowns. The label tells you about liquidity and coverage, not about the quality of the business or the price you are paying for it.',
      },
      {
        kind: 'list',
        items: [
          'Match the rung to your horizon: small caps need a decade, large caps need five years, and neither belongs in money you need next year.',
          'A fund can matter more than the cap tier: a small-cap index fund and an active small-cap fund can hold very different companies with very different liquidity.',
          'Higher return potential and higher failure probability are the same fact told from two directions.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Small caps swing harder — compare how each rung rides the same cycle.' },
      {
        kind: 'terms',
        items: [
          { term: 'Survivorship bias', meaning: 'The illusion created when an index only contains the companies that survived. Small-cap index returns look far better than the average investor\'s experience.' },
          { term: 'Delisting', meaning: 'Removal of a company\'s shares from an exchange, after which they may be impossible to sell at a fair price.' },
          { term: 'Analyst coverage', meaning: 'How many research analysts follow a company. Hundreds follow the large caps; nobody follows most small companies, which is a risk and an opportunity.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What is the practical difference between a large cap and a small cap for an investor?',
        options: [
          { text: 'Small caps always earn more', why: 'They have higher potential and higher risk; the average outcome across all small caps is far worse than the index suggests.' },
          { text: 'Liquidity, coverage and survivability — not just size', correct: true, why: 'Large caps trade cheaply and are watched by many; small caps are thinly traded, rarely analysed and less able to survive a bad year.' },
          { text: 'Small caps pay no dividends', why: 'Dividends are unrelated to size.' },
          { text: 'Large caps cannot fall', why: 'Large Indian companies have fallen 50% and more, and some have failed outright.' },
        ],
      },
      {
        q: 'Why can the historical small-cap index return mislead you?',
        options: [
          { text: 'Because the index is not published', why: 'It is published daily.' },
          { text: 'Because it only contains survivors — the failed companies were removed along the way', correct: true, why: 'Survivorship bias flatters the index. The returns of the companies that vanished never appear in the headline number.' },
          { text: 'Because small-cap returns are not real', why: 'They are real, just not representative of the average investor’s experience.' },
          { text: 'Because the index excludes dividends', why: 'That is the price-versus-TRI distinction, not a survivorship issue.' },
        ],
      },
      {
        q: 'A ₹4,000-crore company and a ₹1.6 lakh crore company both look cheap on valuation. Which needs more caution?',
        options: [
          { text: 'The large one, because it has more to lose', why: 'Large caps are more liquid and better scrutinised; the marginal risk here is much smaller.' },
          { text: 'The small one — it has thinner liquidity, less coverage and less capacity to survive a bad year', correct: true, why: 'A cheap valuation on an illiquid, unanalysed business is a hypothesis, not a bargain, until you verify the accounts yourself.' },
          { text: 'Neither — valuation is all that matters', why: 'Valuation is meaningless without assessing survivability and liquidity.' },
          { text: 'The large one, because index funds own it', why: 'Index ownership improves liquidity rather than adding risk.' },
        ],
      },
    ],
    takeaway: 'Size is a risk category: it decides liquidity, scrutiny and how well a business can absorb a shock. Use it deliberately — small caps for a decade-long horizon in small size, large caps for everything else.',
  },

  'l3-038': {
    id: 'l3-038',
    title: 'Company Revenue',
    subtitle: 'The top line — and why growth is not profit',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'profit-waterfall', caption: 'Revenue is the first bar. Everything below it is subtracted on the way to profit.' },
      { kind: 'p', text: 'Revenue, or the top line, is what a company sells in a period before any costs are deducted. It tells you the size and direction of the business, and almost nothing about whether the business is any good. Two companies can both report ₹10,000 crore of revenue — one keeps ₹1,500 crore of it, the other loses ₹200 crore. Revenue growth with falling margins is one of the most common traps in Indian small caps.' },
      {
        kind: 'table',
        caption: 'Revenue models that read differently, with Indian examples',
        headers: ['Model', 'Example', 'What revenue growth tells you'],
        rows: [
          ['Recurring contracts', 'TCS, Infosys, HCLTech', 'Strong visibility, but growth depends on global client budgets'],
          ['Volume-led retail', 'D-Mart (Avenue Supermarts)', 'Growth per store and same-store growth matter more than total sales'],
          ['Commodity cycles', 'Reliance (oil-to-chemicals), Tata Steel', 'Revenue follows prices — high sales can hide shrinking volumes'],
          ['Regulated tariffs', 'Power Grid, NTPC', 'Revenue is stable and largely determined by the regulator'],
          ['Consumer brand', 'ITC, Hindustan Unilever, Britannia', 'Growth comes from volume plus price, and brand pricing power protects margins'],
          ['Financial services', 'HDFC Bank, Bajaj Finance', 'Interest and fee income, where asset quality matters more than top-line growth'],
        ],
      },
      {
        kind: 'example',
        title: 'The D-Mart lesson',
        text: 'D-Mart’s business model is to sell at the lowest sustainable margin it can, turn its inventory over fast, and grow through more stores. Its gross margin is thin by retail standards — a few percent lower than most supermarkets — yet it earns a high return on capital because it sells its stock quickly and buys on supplier credit while customers pay cash. A high revenue number with low margin and fast turnover can be a far better business than high revenue with a fat margin and slow turnover. The top line alone would never tell you that.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Revenue recognition is where accounting gets creative',
        text: 'A company can recognise revenue before the customer can pay, book sales to group companies, or offer extended credit to a distributor to pull forward a quarter’s demand. That is why the revenue figure should always be read against trade receivables and operating cash flow in the same annual report. Growing sales with receivables growing twice as fast is one of the classic Indian small-cap warnings.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Same-store growth beats headline growth',
        text: 'For retailers, hotels and restaurants, the honest measure is growth from stores that existed last year — not total revenue swollen by new openings, which consumes cash and may take years to pay back. A chain reporting 30% total growth with falling like-for-like sales is opening stores faster than it is selling things in them.',
      },
      { kind: 'sim', name: 'valuation', caption: 'Revenue is the top line: see how it flows down into what the owner actually keeps.' },
      {
        kind: 'terms',
        items: [
          { term: 'Top line (revenue)', meaning: 'What a company sells before any costs — its size, not its quality.' },
          { term: 'Same-store growth', meaning: 'Growth from outlets that existed last year, ignoring new openings. The honest measure for Indian retailers and restaurant chains.' },
          { term: 'Revenue recognition', meaning: 'The accounting rules that decide when a sale is recorded. Aggressive recognition books revenue that arrives later, or never, as cash.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Two companies each report ₹10,000 crore of revenue. What can you conclude?',
        options: [
          { text: 'They are equally good businesses', why: 'Revenue says nothing about costs, margins, capital intensity or cash conversion.' },
          { text: 'Almost nothing until you look at margins and cash flow', correct: true, why: 'One may keep ₹1,500 crore and the other may lose money. The top line is a starting point, not a verdict.' },
          { text: 'The one with faster revenue growth is better', why: 'Growth bought with credit to customers or heavy capex can destroy value.' },
          { text: 'Their market caps must be identical', why: 'Market cap depends on profitability expectations and the number of shares, not revenue alone.' },
        ],
      },
      {
        q: 'Why does D-Mart earn a good return on capital with relatively thin gross margins?',
        options: [
          { text: 'Because it charges customers a premium', why: 'Its model is built on everyday low prices, not premiums.' },
          { text: 'Because it turns inventory quickly and is funded partly by supplier credit', correct: true, why: 'Fast turnover and negative working capital mean less of its own money is tied up, so a thin margin can still generate a high return on capital.' },
          { text: 'Because it pays no tax', why: 'Its tax position is ordinary for an Indian retailer.' },
          { text: 'Because its stores are on leased land', why: 'The property strategy is a part of the picture but not the driver of returns described here.' },
        ],
      },
      {
        q: 'A small cap reports 40% revenue growth while trade receivables grow 80%. What should you check first?',
        options: [
          { text: 'Whether it pays dividends', why: 'Dividends are irrelevant to the receivables question.' },
          { text: 'Whether the sales are actually being collected — receivables growing faster than sales suggests revenue being pulled forward or credit risk building', correct: true, why: 'Cash collection is the test. Sales that never convert into cash can be reversed in a later year.' },
          { text: 'The share price chart', why: 'The chart is the market’s reaction, not a check on whether the sales are real.' },
          { text: 'Nothing — growth is growth', why: 'This is exactly the reasoning that leads investors into accounting surprises.' },
        ],
      },
    ],
    takeaway: 'Revenue measures size, not quality. Read it alongside margins, receivables and operating cash flow, and prefer honest like-for-like growth over headline growth financed by credit or capex.',
  },

  'l3-039': {
    id: 'l3-039',
    title: 'Expenses',
    subtitle: 'What the business spends before you get anything',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'expense-lines', caption: 'Raw material, salaries, power, interest, tax — every line comes off before anything reaches the owner.' },
      { kind: 'p', text: 'Expenses are everything deducted from revenue to arrive at profit. In an Indian annual report they are grouped into cost of materials, employee benefits, finance costs, depreciation and “other expenses”, with a detailed note breaking each one down. Reading those notes is how you learn what a business actually does with its money — and where a company is quietly changing its spending.' },
      {
        kind: 'table',
        caption: 'Expense lines and what they reveal',
        headers: ['Line', 'Look at it for'],
        rows: [
          ['Cost of materials consumed', 'Whether input prices or commodity swings are squeezing the business'],
          ['Purchases of stock-in-trade', 'How much of the sale is traded rather than made — usually lower margin'],
          ['Employee benefit expense', 'Cost structure and whether the workforce is being expanded or cut'],
          ['Finance costs', 'The interest bill, which grows fast when a company borrows heavily'],
          ['Depreciation', 'How capital-intensive the business is — airlines, telecom and steel are heavy'],
          ['Other expenses', 'The catch-all where advertising, power, rent, freight and one-off charges hide'],
          ['Tax', 'Effective tax rate, which can differ a lot from the headline rate'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Operating leverage cuts both ways',
        text: 'When a carmaker like Maruti Suzuki runs its plants at 60% of capacity, its fixed costs spread over fewer vehicles and margins look thin. Run the same plants near full capacity and margins expand sharply without any price increase. The same works in reverse: IndiGo’s cost structure is dominated by fuel and aircraft rentals, so a spurt in crude prices compresses margins within a quarter. Operating leverage rewards scale and punishes slowdowns.',
      },
      {
        kind: 'example',
        title: 'The cost cut that destroys the business',
        text: 'Two Indian companies both face a bad year. The first cuts advertising, delays maintenance and reduces dealer support — and reports a healthy profit. The second keeps spending and reports a poor one. Three years later, the first has lost market share and its brand has faded, while the second has grown. Expense lines must always be read against what the business will need next year: a saving this quarter can be a permanent loss of capability.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Margins are the ratio that matters, not the absolute spend',
        text: 'A company whose expenses grow 8% while revenue grows 12% is getting more efficient; the reverse is deterioration even if absolute profit still rises. Track the ratio for a few years in a row before drawing conclusions — seasonal quarters in India, such as the festive quarter for consumer companies, distort single-period comparisons badly.',
      },
      { kind: 'sim', name: 'valuation', caption: 'Every rupee of cost comes off before profit — move the numbers and watch the margin respond.' },
      {
        kind: 'terms',
        items: [
          { term: 'Operating leverage', meaning: 'The effect of fixed costs on margins: at high capacity utilisation margins expand without a price increase, and at low utilisation they collapse.' },
          { term: 'Finance cost', meaning: 'The interest a company pays on its borrowings. It grows quickly when debt funds expansion.' },
          { term: 'Depreciation', meaning: 'The annual charge that spreads the cost of an asset over its useful life. Heavy in telecom, airlines and steel; small in software.' },
          { term: 'Employee benefit expense', meaning: 'The wage, bonus and retirement bill — often the largest cost line at an Indian IT services company.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A carmaker’s plants go from 60% to 95% capacity utilisation with no change in prices. What happens to margins?',
        options: [
          { text: 'They stay the same', why: 'Fixed costs are spread over more units, so margins expand.' },
          { text: 'They expand, because fixed costs are spread over more vehicles', correct: true, why: 'That is operating leverage. The same works in reverse when demand falls.' },
          { text: 'They fall, because producing more costs more', why: 'Variable costs rise with volume, but fixed costs per unit fall faster — that is the whole point of scale.' },
          { text: 'The company must cut prices', why: 'Prices are a market decision, not an automatic consequence of utilisation.' },
        ],
      },
      {
        q: 'Which information do you get from the notes on expenses that you cannot get from the profit figure alone?',
        options: [
          { text: 'The share price', why: 'That is market data, not an accounting note.' },
          { text: 'What the money was spent on, and whether any of it is being cut to flatter this quarter’s profit', correct: true, why: 'The breakdown reveals whether spending on brands, maintenance or people is falling — which is the difference between efficiency and neglect.' },
          { text: 'The number of shares outstanding', why: 'That is on the balance sheet, and often in the shareholding pattern.' },
          { text: 'The dividend policy', why: 'Dividend policy is disclosed separately in the directors’ report.' },
        ],
      },
      {
        q: 'A company’s expenses grow 15% while revenue grows 6%. What does that indicate?',
        options: [
          { text: 'Nothing — absolute numbers are what matter', why: 'The relationship between the two is exactly what matters for margins.' },          { text: 'Deteriorating efficiency — the business is spending more to earn each rupee of sales', correct: true, why: 'Costs rising faster than revenue compresses margin, whatever the absolute profit does.' },
          { text: 'The company is growing rapidly', why: 'Revenue growth of 6% is slower than cost growth; the spending is not producing proportionate sales.' },
          { text: 'Taxes have increased', why: 'Tax sits below these lines and does not explain cost growth.' },
        ],
      },
    ],
    takeaway: 'Expenses tell you how a business actually spends, and margins tell you whether it is getting more efficient. Watch for cost cuts that flatter this quarter and damage next year, and respect operating leverage in both directions.',
  },

  'l3-040': {
    id: 'l3-040',
    title: 'Profit',
    subtitle: 'What is left after everything — the number that matters',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'profit-waterfall', caption: 'Gross profit, operating profit, profit before tax, profit after tax — four different numbers, often quoted interchangeably.' },
      { kind: 'p', text: 'Profit is what remains after costs. But “profit” in an Indian annual report can mean several different things, and companies choose whichever version flatters the story. Gross profit ignores overheads; EBITDA ignores interest, tax and depreciation; profit after tax is the only figure that belongs to shareholders; and “adjusted profit” ignores whatever the company would rather you did not count.' },
      {
        kind: 'table',
        caption: 'The profit ladder, from top to bottom',
        headers: ['Measure', 'What is deducted', 'What it hides'],
        rows: [
          ['Gross profit', 'Cost of goods sold', 'All overheads, interest, depreciation and tax'],
          ['EBITDA', 'Operating costs only', 'Interest, depreciation, tax — and often the fact that a business consumes cash'],
          ['EBIT (operating profit)', 'Operating costs and depreciation', 'Interest and tax'],
          ['Profit before tax', 'Interest as well', 'Tax'],
          ['Profit after tax (PAT)', 'Everything, including tax', 'Nothing — this is what belongs to you'],
          ['Adjusted profit', 'Whatever the company decides is “one-off”', 'The recurring costs it wants to treat as unusual'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Profit is not cash — the Satyam lesson',
        text: 'In 2009, Satyam Computer Services — then one of India’s largest IT companies, audited and listed abroad — revealed that its cash balances and receivables had been inflated for years. The founder’s letter put the misstatement at several thousand crore rupees, and the company was later taken over and renamed. Profit can be manufactured in a ledger; cash has to exist. That is why the cash flow statement is the first thing a careful Indian investor reads.',
      },
      {
        kind: 'example',
        title: 'Two Indian companies, two kinds of loss',
        text: 'Vodafone Idea reported enormous losses for years — but the more important fact was its cash burn: interest on a huge debt pile and spectrum payments consumed money faster than the business generated it. Contrast that with a company that reports an accounting loss because it wrote down an asset: no cash leaves the business, and the underlying operations may be healthy. A loss from operations is a business problem; a loss from a write-off is often a balance sheet event. Reading only the headline number would make the two look identical.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: '“Other income” and one-offs deserve a second look',
        text: 'A large part of many Indian companies’ reported profit comes from interest on cash, gains on investments, or the sale of an asset. None of it is repeatable. If profit grew because of other income while the core business shrank, the headline is flattering and the business is not. Similarly, a company that reports “adjusted profit excluding exceptional items” every single year is telling you those items are not exceptional at all.',
      },
      {
        kind: 'list',
        items: [
          'Compare like with like: a P/E on an inflated EBITDA is meaningless. Use profit after tax for valuation multiples.',
          'Look for consistency between profit and operating cash flow over five years, not one good quarter.',
          'Read the “exceptional items” note every year in a row — recurring exceptions are the clearest sign of managed presentation.',
          'Banks and NBFCs report differently: provisions for bad loans sit inside their profit, so their profit is a judgement as much as a calculation.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Profit is what is left after everything — move the costs and watch how little of the revenue survives.' },
      {
        kind: 'terms',
        items: [
          { term: 'EBITDA', meaning: 'Earnings before interest, tax, depreciation and amortisation, an operating-profit measure. It hides interest, tax and asset consumption, so it is not cash.' },
          { term: 'Profit after tax (PAT)', meaning: 'What remains after every cost including interest and tax. It is the residual that belongs to shareholders.' },
          { term: 'Exceptional item', meaning: 'A one-off gain or loss reported separately. A company reporting a large \'one-off\' every year is telling you it is not one-off at all.' },
          { term: 'Other income', meaning: 'Income from outside the core business — interest on cash, gains on investments. Profit growth driven by this is not profit growth.' },
          { term: 'Adjusted profit', meaning: 'Profit with whatever the company considers unusual removed. Useful only when the removal is genuinely non-recurring.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Why is profit after tax the number that matters most to a shareholder?',
        options: [
          { text: 'Because it is the largest number', why: 'It is usually the smallest of the ladder — that is the point.' },          { text: 'Because it is what remains after every cost, including interest and tax, and only that belongs to the owners', correct: true, why: 'EBITDA and gross profit ignore real obligations. PAT is the residual claim that belongs to equity holders.' },
          { text: 'Because the government calculates it', why: 'Companies compute their own accounts under prescribed standards; the tax authority only checks them.' },
          { text: 'Because it cannot be manipulated', why: 'Every line in a set of accounts involves judgement, including this one.' },
        ],
      },
      {
        q: 'A company reports a large loss mainly from writing down an acquired brand. What is the right reaction?',
        options: [
          { text: 'The business must be failing', why: 'A write-off is a balance sheet correction, not necessarily an operating failure.' },          { text: 'Check whether the loss came from operations or from a non-cash write-off before judging the business', correct: true, why: 'Write-offs signal that the company overpaid in the past, but they do not drain cash now. Cash flow and operating profit tell you whether the business is healthy today.' },
          { text: 'Ignore it entirely', why: 'Overpaying for an acquisition is a real capital allocation error, and repeating it is a red flag.' },
          { text: 'Sell shares immediately', why: 'A single accounting event is not a decision rule.' },
        ],
      },
      {
        q: 'If a company’s profit rises only because “other income” doubled, what should you conclude?',
        options: [
          { text: 'The business has improved', why: 'Other income is usually interest or gains, neither of which reflects the core business.' },          { text: 'The core business may be weakening while the headline profit looks better', correct: true, why: 'Non-recurring income flatters profit without improving the business. Check operating profit and cash flow separately.' },
          { text: 'Nothing unusual is happening', why: 'A doubling of other income is worth investigating in the notes.' },
          { text: 'The company must have sold a plant', why: 'It may have; the note will tell you, and either way the gain is not repeatable.' },
        ],
      },
    ],
    takeaway: 'There are four different profits and companies quote the most flattering one. Track profit after tax and cash flow together, and be sceptical of “adjusted” figures that recur every year.',
  },

  'l3-041': {
    id: 'l3-041',
    title: 'Assets',
    subtitle: 'What the company owns',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'balance-sheet', caption: 'Everything the company owns on one side, everything it owes and everything the owners put in on the other — the two must balance.' },
      { kind: 'p', text: 'Assets are what a business owns and controls: cash, investments, money owed by customers, inventory, factories, land, brands and, often, the goodwill created by acquisitions. What matters for an investor is not just the total but its composition — how much of it is cash-generating, how much is a claim on someone else, and how much is a number that only exists in a ledger.' },
      {
        kind: 'table',
        caption: 'The asset lines worth understanding, with Indian examples',
        headers: ['Asset', 'What it means', 'Watch for'],
        rows: [
          ['Cash and investments', 'Actual money and liquid holdings', 'For ITC, TCS or Infosys this can be a huge part of the balance sheet'],
          ['Trade receivables', 'Money customers owe', 'Growing much faster than sales is a warning'],
          ['Inventory', 'Goods waiting to be sold', 'Jewellery and real estate hold inventory for years; grocery retailers hold days'],
          ['Property, plant and equipment', 'Factories, stores, towers', 'Heavy for Reliance, Maruti, Tata Steel; light for IT services'],
          ['Capital work in progress', 'Spending not yet producing revenue', 'Can sit unfinished for years, especially in infrastructure'],
          ['Intangible assets and goodwill', 'Brands, licences, and the premium paid for acquisitions', 'The softest asset on the page — Tata Motors’ JLR goodwill was written down when returns disappointed'],
          ['Loans and advances', 'Money lent, or paid in advance', 'Related-party advances deserve close reading'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Goodwill is the softest asset',
        text: 'When Tata Motors bought Jaguar Land Rover in 2008, it paid much more than the net assets it acquired, and the excess sat on the balance sheet as goodwill. When the business did not perform as expected, that goodwill had to be written down — a charge that hit reported profit without any cash leaving. Goodwill is the accounting memory of an acquisition premium; a company whose goodwill is a large share of its total assets is asking you to trust its past judgement.',
      },
      {
        kind: 'example',
        title: 'Same accounting, two very different balance sheets',
        text: 'Compare an IT services company like Infosys with a telecom operator like Bharti Airtel. Infosys holds cash and receivables, owns almost no factories, and generates high returns on a light balance sheet. Airtel holds spectrum and network equipment worth enormous sums, funded significantly by debt, and its profit is heavily affected by depreciation and interest. Both report assets honestly — but a rupee of assets means something entirely different in each business. That is why cross-industry comparisons using asset-based ratios like price to book are usually nonsense.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Capital work in progress that never becomes productive',
        text: 'Infrastructure and capex-heavy companies park spending in capital work in progress until the asset is commissioned. If the balance keeps growing across several years without any corresponding increase in revenue, the company may be building something that does not work, or capitalising costs that should have been expensed. Watch the capital work in progress note and ask what has been commissioned and what is still idle.',
      },
      {
        kind: 'list',
        items: [
          'For banks and NBFCs, loans are the assets — and the quality of those loans (gross NPAs and provisioning) matters far more than the total.',
          'Declining receivables days is usually good news — customers are paying faster and cash comes in sooner.',
          'A company with a large cash pile but consistently poor returns is a capital allocation question: the management decides whether that cash is ever useful to you.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'What the company owns and how it was funded, side by side — read the balance directly.' },
      {
        kind: 'terms',
        items: [
          { term: 'Intangible asset', meaning: 'Something valuable that you cannot touch: brands, licences, software. It sits on the balance sheet with a valuation that involves judgement.' },
          { term: 'Goodwill', meaning: 'The premium a company paid above the identifiable net assets of an acquisition. Tata Motors\' JLR goodwill was written down when returns disappointed.' },
          { term: 'Capital work in progress (CWIP)', meaning: 'Spending on assets not yet earning revenue. A balance that grows for years without revenue following is a warning.' },
          { term: 'Trade receivables', meaning: 'Money customers owe the company. Growing much faster than sales suggests revenue that is not being collected.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What does it mean when a company reports large goodwill?',
        options: [
          { text: 'It has a strong reputation', why: 'Goodwill in accounting refers to an acquisition premium, not the brand’s popularity with customers.' },          { text: 'It paid more for an acquisition than the identifiable net assets were worth', correct: true, why: 'That excess sits as an intangible asset, and can be written down if the acquired business underperforms.' },
          { text: 'It has a lot of cash', why: 'Cash is a separate line; goodwill is the opposite of a hard asset.' },
          { text: 'It is about to receive a tax refund', why: 'No connection exists between goodwill and tax refunds.' },
        ],
      },
      {
        q: 'Why is comparing price to book between Infosys and Bharti Airtel largely meaningless?',
        options: [
          { text: 'Because one is older than the other', why: 'Age is irrelevant to asset-based comparisons.' },          { text: 'Because their asset bases are of completely different kinds and productivities', correct: true, why: 'A rupee of spectrum and towers behaves nothing like a rupee of cash and receivables, so book value is not comparable across these models.' },
          { text: 'Because Airtel does not publish a balance sheet', why: 'It publishes a full annual report with a balance sheet.' },
          { text: 'Because book value is illegal to use', why: 'It is a standard ratio; it is simply misapplied across industries.' },
        ],
      },
      {
        q: 'Capital work in progress keeps growing for four years with no revenue increase. What does that suggest?',
        options: [
          { text: 'The company is growing fast', why: 'Assets that never become productive are not growth — they are idle capital.' },          { text: 'The spending may not be converting into productive assets, or costs may be sitting there instead of being expensed', correct: true, why: 'The commissioning schedule is the test: what has actually started earning revenue?' },
          { text: 'The company is extremely profitable', why: 'Capital work in progress is an asset item, unrelated to profitability.' },
          { text: 'Nothing — it is normal accounting', why: 'A perpetually growing work-in-progress balance is a genuine warning sign in Indian infrastructure and manufacturing.' },
        ],
      },
    ],
    takeaway: 'Assets matter for their composition, not their total: cash, receivables, inventory, plant and goodwill behave very differently. Read the balance sheet with the cash flow statement and the notes attached.',
  },

  'l3-042': {
    id: 'l3-042',
    title: 'Liabilities',
    subtitle: 'What the company owes, and to whom',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'balance-sheet', caption: 'Every rupee of assets was funded either by borrowing or by the owners — the liabilities side tells you which.' },
      { kind: 'p', text: 'Liabilities are obligations: borrowings from banks and bondholders, money owed to suppliers, salaries and taxes payable, provisions for future costs, and the shareholders’ own equity. Debt is not a vice — it lets a company build faster than its own profits allow — but it also converts a bad year into a crisis. The question is never “does it have debt”, it is “can it comfortably service that debt through a bad year?”.' },
      {
        kind: 'table',
        caption: 'Indian industries and their normal debt levels',
        headers: ['Type of business', 'Typical debt-to-equity', 'Examples'],
        rows: [
          ['FMCG and consumer brands', 'Very low, often under 0.3', 'Hindustan Unilever, Nestlé India, Britannia'],
          ['IT services', 'Very low, often negligible', 'TCS, Infosys'],
          ['Capital-intensive manufacturing', 'Moderate to high', 'Tata Steel, UltraTech Cement'],
          ['Telecom and infrastructure', 'High', 'Bharti Airtel, Vodafone Idea'],
          ['Non-bank lenders', 'High by design, 4–8 times', 'Bajaj Finance, Shriram Finance'],
          ['Banks', 'Leverage is the business model', 'HDFC Bank, SBI'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The debt number to watch is interest coverage',
        text: 'A company earning ₹600 crore of operating profit with a ₹400 crore interest bill has thin cover; a bad year turns it into a default. Add to that the repayment schedule: Indian companies frequently face a lump of debt maturing in a single year, and if the bond market is closed when they need to refinance — as it was for non-bank lenders after 2018 — solvent businesses fail because they cannot roll their borrowings. Check both the ratio and the maturity wall.',
        },
      {
        kind: 'example',
        title: 'Two borrowers in the same year',
        text: 'Both companies earn ₹500 crore and owe ₹5,000 crore. The first owes ₹150 crore a year with 400 crore of interest? A more useful comparison: Company A has interest cover of six (operating profit six times its interest bill) and refinances easily; Company B earns exactly enough to pay interest with nothing left for repayments. A downturn hits both, but only B faces a refinancing that turns a bad year into an existential one. Same debt, same industry, very different survivability.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Watch off-balance-sheet obligations',
        text: 'Guarantees given to group companies, contingent liabilities from disputed tax demands, and obligations parked in special-purpose vehicles can all sit in the notes rather than the main balance sheet. In Indian infrastructure and real estate groups, this is where surprises live. The contingent liabilities note and the related-party transactions note are the two pages to read first.',
      },
      {
        kind: 'list',
        items: [
          'Compare debt-to-equity only within an industry: 0.5 is high for an FMCG company and conservative for a lender.',
          'A company that borrows to fund working capital is different from one borrowing to build a plant — the first is normal, the second must earn an adequate return.',
          'Promoter share pledging is a liability of the promoter rather than the company, but it becomes the company’s problem when forced sales crash the share price.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Debt and obligations: watch what leverage does to returns and to risk.' },
      {
        kind: 'terms',
        items: [
          { term: 'Liability', meaning: 'An obligation the company owes — borrowings, payables, provisions. Debt is not a sin; unserviceable debt is.' },
          { term: 'Interest coverage ratio', meaning: 'Operating profit divided by interest cost. Below about 2, one bad year can put the company in difficulty.' },
          { term: 'Contingent liability', meaning: 'A possible obligation disclosed in the notes — disputed tax demands, guarantees to group companies, legal claims. It is where Indian balance-sheet surprises often hide.' },
          { term: 'Refinancing risk', meaning: 'The danger of having debt to repay exactly when lenders have stopped lending, as Indian non-bank lenders discovered after 2018.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A company earns ₹300 crore of operating profit and pays ₹250 crore of interest. What does that mean?',
        options: [
          { text: 'It is a highly profitable business', why: 'Little of the operating profit is left after the lenders are paid.' },          { text: 'Interest cover is thin — one bad year could push it into difficulty', correct: true, why: 'Operating profit covers interest only 1.2 times, leaving almost nothing for capital spending, tax or shareholders.' },
          { text: 'The debt is not a problem because it is paying', why: 'Paying is not the test; surviving a bad year while paying is.' },
          { text: 'It must be a bank', why: 'Its liability structure may resemble a lender’s, but the point is the thin cover, not the sector.' },
        ],
      },
      {
        q: 'Why is a debt-to-equity of 5 normal for an Indian NBFC and alarming for an FMCG company?',
        options: [
          { text: 'Because NBFCs are government-owned', why: 'Most are private, and ownership does not determine prudent leverage.' },          { text: 'Because the lender borrows and lends at a spread, while an FMCG company’s debt must be serviced from product margins', correct: true, why: 'The acceptable debt level depends entirely on how stable and predictable the cash flows are. Ratios are only meaningful within a business model.' },
          { text: 'Because NBFCs pay no interest', why: 'Interest is their principal cost.' },
          { text: 'Because FMCG companies are not allowed to borrow', why: 'There is no such rule; they simply rarely need to.' },
        ],
      },
      {
        q: 'Which of these is the likeliest way a solvent Indian company fails?',
        options: [
          { text: 'Its auditor resigns', why: 'That is a symptom, not the mechanism of failure.' },          { text: 'It cannot refinance debt that is maturing during a market when lenders have stopped lending', correct: true, why: 'The 2018–2020 Indian credit squeeze showed exactly this: viable businesses failing because the refinancing window closed.' },
          { text: 'Its share price falls 40%', why: 'Price falls are painful but do not by themselves cause default.' },
          { text: 'Its dividend falls', why: 'A smaller dividend is a consequence of weaker cash flow, not a cause of failure.' },
        ],
      },
    ],
    takeaway: 'Debt is a tool whose safety depends on cash flow stability and refinancing access. Judge leverage within an industry, watch interest cover and the maturity schedule, and always read the contingent liabilities note.',
  },

  'l3-043': {
    id: 'l3-043',
    title: 'Cash Flow',
    subtitle: 'The number that tells you whether profit is real',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'cash-vs-profit', caption: 'While profit is an accounting result, cash is what appears in the bank — and only one of the two can be spent.' },
      { kind: 'p', text: 'The cash flow statement reconciles reported profit with the actual movement of money, split into three sections: operating, investing and financing. It is the hardest of the three statements to bend, which is why an experienced investor reads it first. A business that reports rising profits while operations consume cash year after year is either growing in a way that requires endless funding or is reporting sales it will never collect.' },
      {
        kind: 'table',
        caption: 'The three sections and what each tells you',
        headers: ['Section', 'What it covers', 'What good looks like'],
        rows: [
          ['Operating activities', 'Cash from the core business after working capital', 'Positive and growing, close to or above reported profit'],
          ['Investing activities', 'Capital spending, acquisitions, sale of assets', 'Negative because the company is building — as long as the spending earns a return'],
          ['Financing activities', 'Borrowing, repayments, dividends, share issues', 'A mix that funds the investment without stretching the balance sheet'],
          ['Free cash flow', 'Operating cash flow minus capital expenditure', 'Positive over a full cycle for a mature business'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Why Infosys and TCS are studied in cash flow terms',
        text: 'Both convert accounting profit into cash reliably: they receive payment quickly, spend little on factories, and distribute much of what they earn through dividends and buybacks. A capital-heavy company like Reliance, by contrast, routinely spends far more than it earns on capex while building new businesses, and funds the difference with debt and asset sales. Both approaches can be right — but they require completely different readings of the cash flow statement, and both must eventually show operating cash flow covering the investment.',
      },
      {
        kind: 'example',
        title: 'The small cap with five years of rising profit and no cash',
        text: 'A familiar pattern in Indian small caps: profit rises every year, but operating cash flow is negative, receivables double, and the shortfall is met by rising borrowings and “loans from directors”. The company is not selling less; it is not collecting. Eventually the receivables are written off, the profit reverses, and the share price, which had been valued on earnings multiples, collapses. Cash flow was the only statement that warned you in advance, and it warned you for years.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Free cash flow is what you truly own',
        text: 'Operating cash flow tells you what the business generated; free cash flow — after the capital spending needed to keep it running and growing — tells you what is genuinely available for dividends, buybacks, debt reduction or acquisition. A company that has never produced free cash flow is not yet a business that can pay you; it is a business that consumes capital. That can be a fine stage to invest in, but it changes the risk entirely.',
      },
      {
        kind: 'list',
        items: [
          'Compare operating cash flow with reported profit over five years: they should track each other, and persistent divergence needs an explanation in the notes.',
          'Working capital is where cash hides: inventory and receivables use cash, while payables release it.',
          'A one-year cash boom from delaying supplier payments is not an improvement — it is borrowing from suppliers.',
          'For financial companies, “operating cash flow” is dominated by lending and borrowing rather than by customers paying; use asset quality and net interest margin instead.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Profit is an opinion; cash is a fact — compare the two over several years of the same business.' },
      {
        kind: 'terms',
        items: [
          { term: 'Cash flow statement', meaning: 'The statement that reconciles reported profit with money actually moving, split into operating, investing and financing activities. It is the hardest of the three statements to bend.' },
          { term: 'Operating cash flow', meaning: 'Cash generated by the core business after working capital. It should track reported profit over several years.' },
          { term: 'Free cash flow', meaning: 'Operating cash flow minus the capital spending needed to keep and grow the business — what is genuinely available for dividends, buybacks or debt repayment.' },
          { term: 'Working capital', meaning: 'The money tied up in inventory and receivables, less what suppliers are owed. Growing working capital consumes cash even when sales are rising.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A company reports rising profit for five years while operating cash flow is negative every year. What is the most likely explanation?',
        options: [
          { text: 'The business is growing normally', why: 'Growth can consume cash, but five years of negative operating cash flow is not a routine pattern outside early-stage businesses.' },          { text: 'Sales are being booked that are not being collected, or working capital is absorbing the cash', correct: true, why: 'Rising receivables and inventory funded by debt is the classic Indian pattern, and it usually ends with write-offs.' },
          { text: 'The company pays too much tax', why: 'Tax is a line in the accounts, not the reason cash flow is negative for years.' },
          { text: 'The cash flow statement is wrong', why: 'Reconciliation rules make this the least manipulable of the three statements.' },
        ],
      },
      {
        q: 'What does free cash flow measure?',
        options: [
          { text: 'Profit before interest and tax', why: 'That is an accrual measure, not cash.' },          { text: 'Operating cash flow minus the capital spending needed to maintain and grow the business', correct: true, why: 'It is what is genuinely available for dividends, buybacks, debt repayment or acquisitions.' },
          { text: 'Cash in the bank at year end', why: 'That is a balance sheet item which can include proceeds from borrowing.' },
          { text: 'Revenue minus expenses', why: 'That is an accounting profit, not cash.' },
        ],
      },
      {
        q: 'A company’s cash flow improves this year because it delayed paying its suppliers by 30 days. What is that?',
        options: [
          { text: 'A genuine operational improvement', why: 'It is a one-time release of cash already sitting in the business, not an operating gain.' },          { text: 'A one-off working capital release that reverses when the suppliers demand payment', correct: true, why: 'Stretching payables borrows cash from suppliers once; it does not repeat every year, and it can damage the business relationship.' },
          { text: 'Evidence of stronger profits', why: 'Payables affect cash flow, not profit.' },
          { text: 'A sign of higher sales', why: 'It has nothing to do with sales volume.' },
        ],
      },
    ],
    takeaway: 'Cash flow is the statement that keeps the other two honest. Track operating cash flow against reported profit across several years, and treat free cash flow as the measure of what the business can actually hand back.',
  },

  'l3-044': {
    id: 'l3-044',
    title: 'Financial Statements',
    subtitle: 'How to open and read an annual report',
    minutes: 10,
    blocks: [
      { kind: 'scene', name: 'balance-sheet', caption: 'Three statements, one story: what the business owns, what it earned, and where the cash actually went.' },
      { kind: 'p', text: 'Every listed Indian company must publish an annual report and quarterly results, and every one of them is free on the company’s website and on the BSE and NSE corporate filings pages. The annual report contains three statements: the balance sheet (what it owns and owes on a date), the profit and loss account (what it earned over the year) and the cash flow statement (what money actually moved). Around them sit the notes — dozens of pages where the real information lives.' },
      {
        kind: 'table',
        caption: 'What is inside a typical Indian annual report, and what to read first',
        headers: ['Section', 'What it contains', 'Priority'],
        rows: [
          ['Directors’ report and MD&A', 'Management’s account of the year, risks and outlook', 'Read second — useful, self-serving'],
          ['Standalone and consolidated statements', 'The parent company alone, and the group as a whole', 'Use consolidated for a group'],
          ['Auditor’s report', 'Whether the numbers are fairly presented, and any qualifications', 'Read first'],
          ['Notes to accounts', 'Breakdown of every line, plus related-party and contingent liability notes', 'Read first'],
          ['Related-party transactions', 'Deals with promoter or group companies', 'Read first — the most revealing page'],
          ['Contingent liabilities', 'Disputed taxes, guarantees, legal claims', 'Read second'],
          ['Cash flow statement', 'Operating, investing and financing cash', 'Read first'],
          ['Shareholding pattern and corporate governance report', 'Who owns it, board independence, committee activity', 'Read second'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Standalone versus consolidated, and which one is “the company”',
        text: 'Indian companies publish both. Standalone shows only the parent entity; consolidated combines the parent with all its subsidiaries, associates and joint ventures. For a group like Reliance, Tata Motors or Adani Enterprises, the consolidated accounts are the picture that matters, because a large part of the business sits inside subsidiaries. Comparing a standalone number with a consolidated one is one of the most common analytical errors in Indian retail research.',
      },
      {
        kind: 'example',
        title: 'Reading one page like an analyst',
        text: 'Take the related-party transactions note of any mid-cap company and ask three questions: is the company buying from or selling to promoter-owned firms, on what terms, and is the value growing faster than the business itself? Then read the auditor’s report for the word “qualification”, and the contingent liabilities note for disputed tax demands. Those three pages take ten minutes and reveal more about governance and hidden obligations than fifty pages of management commentary. Indian investors who did this before well-known corporate blow-ups consistently found the warning before the price collapsed.',
      },
      {
        kind: 'table',
        caption: 'A ten-minute reading routine for any Indian company',
        headers: ['Step', 'Where', 'What you are looking for'],
        rows: [
          ['1', 'Cash flow statement, three years', 'Operating cash flow tracking reported profit'],
          ['2', 'Related-party transactions note', 'Deals with promoter entities, and their direction'],
          ['3', 'Auditor’s report', 'Qualifications, emphasis of matter, auditor changes'],
          ['4', 'Contingent liabilities and borrowings notes', 'Hidden obligations and the repayment schedule'],
          ['5', 'Receivables and inventory', 'Growing faster than sales?'],
          ['6', 'Shareholding pattern, four quarters', 'Promoter stake falling, and pledge levels'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Red flags worth acting on',
        text: 'Repeated “one-off” charges every year. Auditor resignations mid-year. A promoter whose stake is steadily falling. Profit rising while operating cash flow falls. Receivables growing twice as fast as sales. Large loans to related parties. Frequent changes in accounting policy or in the financial year. Any one of these is a question; three together is a company to avoid, whatever the valuation looks like.',
      },
      {
        kind: 'list',
        items: [
          'Quarterly results must be filed within 45 days of the quarter’s end, so Indian investors get updates four times a year, not once.',
          'Since Ind AS was adopted in 2016–17, Indian statements are much closer to global standards — but real-estate, construction and lending businesses still require careful reading of revenue recognition, project accounting and provisioning.',
          'You do not need to read 300 pages. The cash flow statement, the notes on related parties and borrowings, the auditor’s report and the shareholding pattern cover most of what matters.',
          'Screener websites are a fine index into the numbers, but they are summaries — for anything you own in size, read the company’s own filings.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'The statements brought to life: type in the numbers and watch the ratios update.' },
      {
        kind: 'terms',
        items: [
          { term: 'Annual report', meaning: 'The yearly document every listed Indian company must publish, containing the three financial statements, the auditor\'s report and the notes. It is free on the company\'s site and on BSE and NSE filings.' },
          { term: 'Standalone vs consolidated accounts', meaning: 'Standalone shows only the parent entity; consolidated combines subsidiaries, associates and joint ventures. For a group, the consolidated picture is the one that matters.' },
          { term: 'Auditor\'s qualification', meaning: 'A formal note in the auditor\'s report saying something in the accounts is not presented as the auditor would require. It may be technical or serious — read it.' },
          { term: 'Related-party transaction', meaning: 'A deal between the company and its promoter, directors or group entities. The most revealing page in an Indian annual report.' },
          { term: 'Ind AS', meaning: 'The Indian accounting standards adopted from 2016–17, which brought Indian statements much closer to global reporting standards.' },
          { term: 'Quarterly results', meaning: 'Results Indian listed companies must file within 45 days of each quarter\'s end, so you get four updates a year rather than one.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'For a group company like Reliance or Tata Motors, which set of accounts should you read?',
        options: [
          { text: 'Standalone, because it is audited first', why: 'Both are audited; standalone excludes the subsidiaries where much of the business sits.' },          { text: 'Consolidated, because it includes subsidiaries, associates and joint ventures', correct: true, why: 'For a group, the consolidated statements are the only complete picture of what the company owns and earns.' },
          { text: 'Whichever shows the higher profit', why: 'Choosing the flattering version is how investors mislead themselves.' },
          { text: 'Neither — only the share price matters', why: 'The share price is the market’s opinion of these very numbers.' },
        ],
      },
      {
        q: 'Which note is most likely to reveal governance problems early?',
        options: [
          { text: 'The dividend note', why: 'Dividend policy matters, but it rarely reveals conflicts of interest.' },          { text: 'Related-party transactions', correct: true, why: 'Deals between the company and promoter-controlled entities are where value is most often quietly transferred away from minority shareholders.' },
          { text: 'The segment revenue note', why: 'Useful for understanding the business, not for spotting conflicts.' },
          { text: 'The accounting policy note', why: 'It is important context, but the related-party note is the sharper governance signal.' },
        ],
      },
      {
        q: 'A company reports profit rising every year while operating cash flow falls. What should you do?',
        options: [
          { text: 'Buy, because profit is growing', why: 'Profit that does not convert into cash is a warning, not a buying signal.' },          { text: 'Investigate receivables, inventory and related-party lending before trusting the profit', correct: true, why: 'The divergence has to come from somewhere, and in Indian small caps it is usually sales that are not being collected.' },
          { text: 'Ignore it — cash flow is for accountants', why: 'Cash is the one number a company cannot invent for long.' },
          { text: 'Sell immediately without reading further', why: 'You should look before acting; some divergences have innocent explanations such as rapid legitimate growth.' },
        ],
      },
      {
        q: 'Why must you be careful with an auditor who has qualified the accounts?',
        options: [
          { text: 'Because a qualification means the company is fraudulent', why: 'That is too strong — qualifications cover a range of disagreements about presentation and estimation.' },          { text: 'Because the auditor is formally telling you that something in the numbers is not presented as they would require', correct: true, why: 'It may be a technical matter or a serious one, but it means you cannot take the numbers at face value without reading the qualification itself.' },
          { text: 'Because qualified auditors must resign', why: 'There is no such automatic consequence.' },
          { text: 'Because SEBI suspends the company', why: 'Qualification does not automatically invite suspension.' },
        ],
      },
    ],
    takeaway: 'An annual report is a public, free document with three statements and a set of notes. Read the cash flow, the related-party note, the auditor’s report and the shareholding pattern first — those four pages catch most of what can go wrong.',
  },

  'l3-045': {
    id: 'l3-045',
    title: 'EPS',
    subtitle: 'Earnings per share — profit belonging to one share',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'eps-split', caption: 'Profit for the year, divided by the number of shares that existed during the year — that is all EPS is.' },
      { kind: 'p', text: 'Earnings per share is the profit attributable to equity shareholders divided by the weighted average number of shares. It is the number every Indian valuation ratio is built on: price divided by EPS gives you the P/E, and EPS growth is what most “earnings momentum” screens are actually measuring. SEBI requires listed companies to disclose both basic EPS and diluted EPS in their results.' },
      {
        kind: 'formula',
        label: 'The calculation, with its two complications',
        expr: 'Basic EPS = profit for the year ÷ weighted average shares   |   Diluted EPS = profit ÷ (weighted average shares + potential shares)',
        note: 'Potential shares come from employee stock options, convertible bonds, warrants and partly-paid shares. If the gap between basic and diluted EPS is wide, future dilution is being anticipated.',
      },
      {
        kind: 'table',
        caption: 'Why the EPS history in a 10-year chart can be misleading',
        headers: ['Event', 'Effect on EPS', 'Does shareholder wealth change?'],
        rows: [
          ['Bonus issue or stock split', 'Restated retrospectively, so history looks like a smooth line', 'No — pure bookkeeping'],
          ['Buyback (e.g. TCS’s large buybacks)', 'Share count falls, so EPS rises even if profit is flat', 'Only if the price paid was sensible'],
          ['Rights issue at a discount', 'Dilutes EPS; the issuer warns about it in the results', 'The shareholder can protect their share by subscribing'],
          ['ESOP grants', 'Diluted EPS is lower than basic EPS', 'Real dilution unless options are exercised at a fair price'],
          ['One-off asset sale', 'Raises EPS in one year, then it disappears', 'No — the gain is not repeatable'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'EPS can be engineered without breaking any rule',
        text: 'An Indian company can improve EPS simply by buying back shares, selling an asset it did not need, or changing its depreciation policy. None of those make the business more productive. This is why EPS growth should always be read next to return on equity and operating cash flow: if profit per share rises while the return on the capital employed in the business falls, you have been shown the arithmetic of a shrinking share count, not a better company.',
      },
      {
        kind: 'list',
        items: [
          'Always use consolidated EPS for a group company — standalone EPS excludes everything inside subsidiaries.',
          'A bonus issue or split changes the past as well as the future: earlier EPS figures are restated, so a 10-year EPS chart is not the raw record of that period.',
          'Do not compare EPS between companies: it depends on how many shares each one chose to issue. ₹130 EPS and ₹10 EPS tell you nothing without the share counts.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Profit divided by shares — see how the per-share figure is built and what dilution does to it.' },
      {
        kind: 'terms',
        items: [
          { term: 'Earnings per share (EPS)', meaning: 'Profit attributable to equity shareholders divided by the weighted average number of shares. Every Indian valuation ratio is built on it.' },
          { term: 'Diluted EPS', meaning: 'EPS calculated as if employee options, convertibles and warrants had already turned into shares. It is the conservative measure a listed company must also disclose.' },
          { term: 'Weighted average shares', meaning: 'The share count averaged over the period, adjusted for issues and buybacks. Bonus issues and splits restate past EPS, so an old chart is not the raw record.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A company buys back shares while profit stays flat. What happens to EPS?',
        options: [
          { text: 'It falls, because cash was spent', why: 'Cash falls on the balance sheet, but the EPS calculation divides profit by a smaller share count.' },          { text: 'It rises, because the same profit is spread over fewer shares', correct: true, why: 'That does not automatically create value: the shares were bought with company money, so it matters whether the price paid was sensible.' },
          { text: 'It stays exactly the same', why: 'The share count is an input into EPS, so it changes.' },
          { text: 'It cannot be calculated after a buyback', why: 'It is calculated exactly as before, using the reduced count.' },
        ],
      },
      {
        q: 'Why is diluted EPS normally lower than basic EPS?',
        options: [
          { text: 'Because it uses a lower profit figure', why: 'The profit figure is the same; the denominator differs.' },          { text: 'Because it counts employee options, convertibles and other potential shares as if they already existed', correct: true, why: 'It is the conservative measure, showing what earnings per share would be once promised shares arrive.' },
          { text: 'Because it is calculated after tax twice', why: 'Tax is deducted once, above both measures equally.' },
          { text: 'Because SEBI requires a lower number', why: 'SEBI requires disclosure of both, not an artificially lower figure.' },
        ],
      },
      {
        q: 'A company’s EPS grows 15% a year while its return on equity falls steadily. What is the likely explanation?',
        options: [
          { text: 'Genuine operational improvement', why: 'Operational improvement usually shows up as stable or rising returns on capital.' },          { text: 'Earnings are being manufactured from share count reductions, write-back of provisions or one-off gains while the business itself gets less efficient', correct: true, why: 'EPS is a ratio with two inputs. Growing the numerator on paper while the underlying return on capital falls is exactly what the combination looks like.' },
          { text: 'The company must be borrowing less', why: 'Lower borrowing would normally support returns rather than erode them.' },
          { text: 'It is mathematically impossible', why: 'It is entirely possible and quite common — which is why both numbers should be read together.' },
        ],
      },
    ],
    takeaway: 'EPS is profit divided by shares — a useful ratio and an easy one to flatter. Read it with the share count, return on equity and cash flow, never on its own.',
  },

  'l3-046': {
    id: 'l3-046',
    title: 'P/E Ratio',
    subtitle: 'What you pay for each rupee of profit',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'market-cap-ladder', caption: 'Price against earnings: a multiple of last year’s profit, and a bet on every year after it.' },
      { kind: 'p', text: 'The price-to-earnings ratio divides the share price by earnings per share. A P/E of 25 means you are paying ₹25 for every ₹1 of last year’s profit — and it also means that if profits never changed, it would take 25 years of earnings to recover your purchase price. Because no company’s profits ever stay exactly the same, the P/E is really a statement about growth, risk and quality rolled into one number.' },
      {
        kind: 'formula',
        label: 'Two ways to look at the same number',
        expr: 'P/E = price ÷ EPS   |   Earnings yield = 1 ÷ P/E = EPS ÷ price',
        note: 'A P/E of 20 is an earnings yield of 5% — the profit the business generates each year relative to what you paid. Compare it with the 7% a government bond pays and ask what growth you are being promised in exchange.',
      },
      {
        kind: 'table',
        caption: 'Why Indian P/E ratios differ so much by sector',
        headers: ['Kind of business', 'Typical P/E range', 'Why the market pays it'],
        rows: [
          ['Stable consumer brands', 'High, often 40–60', 'Predictable volume growth, pricing power, high return on capital'],
          ['IT services', 'Moderate to high', 'Cash-generative, asset-light, but exposed to global client spending'],
          ['PSU banks', 'Low, often 5–10', 'Concerns about asset quality and government ownership; low but real growth'],
          ['Cyclical commodity producers', 'Low at the top of a cycle', 'Earnings are at a peak that will not last — a low P/E can be a warning'],
          ['Loss-making new-age listings', 'Not measurable', 'No earnings to divide; the market prices revenue or hope instead'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The Nifty’s own P/E is your reference point',
        text: 'The Nifty 50’s trailing P/E has spent most of the last decade in the high teens to low twenties. When the index trades far above that, the market is pricing in strong growth; when it trades below, it is pricing in disappointment. Neither is a buy or sell signal by itself, but knowing the range keeps an individual company’s multiple in context — a small cap at a P/E of 70 is being valued on assumptions nobody has stated out loud.',
      },
      {
        kind: 'example',
        title: 'Two companies, one multiple, opposite risks',
        text: 'Both trade at a P/E of 30. Company A earns steadily from recurring consumer sales and carries almost no debt. Company B is a capital-heavy cyclical whose current profit is the best in five years and whose balance sheet is stretched. Same multiple, completely different propositions: for A you are paying for certainty and modest growth, for B you are paying a premium for earnings that may not recur. A ratio without the business beside it is a number, not an opinion.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The comparison must be like-for-like',
        text: 'Comparing the P/E of an FMCG company with a public-sector bank tells you about their business models, not about which is cheaper. Compare within an industry, with similar growth, similar debt and similar accounting. And remember that the denominator is last year’s audited profit: a P/E calculated on a year distorted by a one-off gain or a write-off is describing a moment that has already passed.',
      },
      {
        kind: 'list',
        items: [
          'A low P/E is not automatically a bargain — it often prices a genuine problem such as falling volumes, poor governance or a cyclical peak.',
          'A high P/E is not automatically a bubble — a compounder with high returns on capital can justify it for years.',
          'Use consolidated earnings for a group company, and check whether the profit includes large non-recurring items.',
          'The catalogue approach works: pick a sector you understand, list the P/Es with growth and debt alongside, and compare the companies against each other rather than against an arbitrary number.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Price against earnings — change the profit or the price and see what multiple the market is paying.' },
      {
        kind: 'terms',
        items: [
          { term: 'Price-to-earnings ratio (P/E)', meaning: 'Share price divided by earnings per share — what you pay for each rupee of last year\'s profit. Its meaning depends entirely on growth, quality and how durable those earnings are.' },
          { term: 'Earnings yield', meaning: 'The inverse of the P/E, expressed as a percentage: 1 ÷ 20 is 5%. It lets you compare a share\'s profit against a bond yield directly.' },
          { term: 'Cyclical stock', meaning: 'A company whose profits rise and fall with the economic cycle, such as metals, cement or shipping. A low P/E at the top of a cycle can be a warning, not a bargain.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A share trades at ₹600 with an EPS of ₹20. What does a P/E of 30 tell you?',
        options: [
          { text: 'The company will return your money in 30 months', why: 'It is 30 years of current earnings, not months, and only if profits stayed exactly the same.' },          { text: 'You are paying ₹30 for each ₹1 of annual profit — an earnings yield of about 3.3%', correct: true, why: 'The earnings yield is the useful translation, because you can compare it with a bond yield and judge what growth the price assumes.' },
          { text: 'The share is expensive, full stop', why: 'Expensive relative to what, and on what growth? The multiple alone cannot answer that.' },
          { text: 'The dividend will be ₹20', why: 'EPS is profit per share, not the dividend, which is decided separately by the board.' },
        ],
      },
      {
        q: 'A PSU bank trades at a P/E of 6 while a branded FMCG company trades at 50. What is the right conclusion?',
        options: [
          { text: 'The bank is clearly the better buy', why: 'The low multiple reflects real concerns about asset quality and growth, not a free discount.' },          { text: 'Their businesses and risk profiles differ so much that the multiples are not directly comparable', correct: true, why: 'P/E comparisons only make sense within a sector with similar growth, leverage and accounting.' },
          { text: 'The FMCG company is in a bubble', why: 'A high multiple can be a bubble, or the price of durable, high-return growth — the number alone cannot decide.' },
          { text: 'Both must be valued on price to book instead', why: 'Price to book is useful for lenders, not a universal replacement for earnings multiples.' },
        ],
      },
      {
        q: 'Why can a low P/E be a warning rather than an opportunity?',
        options: [
          { text: 'Because markets are irrational', why: 'A sweepingly vague answer that avoids the actual mechanism.' },          { text: 'Because it often prices in a cyclical peak in profits, poor governance or a business in structural decline', correct: true, why: 'The denominator is last year’s profit. If that profit will not recur, the low multiple is an illusion.' },
          { text: 'Because companies with low P/Es always go bankrupt', why: 'Many do perfectly well; the point is that the multiple is a question about durability.' },
          { text: 'Because low P/Es are illegal for large caps', why: 'No such rule exists.' },
        ],
      },
      {
        q: 'A P/E calculated using a year with a large one-off asset sale is unreliable because:',
        options: [
          { text: 'the profit figure includes a gain that will not repeat, making the multiple look artificially low', correct: true, why: 'Strip out one-off items before calculating a multiple, or you will be valuing the company on earnings it cannot earn again.' },
          { text: 'the share count changes permanently', why: 'Share count is unaffected by selling an asset.' },
          { text: 'asset sales are illegal', why: 'They are ordinary corporate transactions.' },
          { text: 'it makes the P/E negative', why: 'A gain is positive; the problem is repeatability, not the sign.' },
        ],
      },
    ],
    takeaway: 'The P/E is what you pay per rupee of last year’s profit, and its meaning depends entirely on growth, quality and the durability of those earnings. Compare within industries, strip out one-offs, and read it alongside the business.',
  },

  'l3-047': {
    id: 'l3-047',
    title: 'P/B Ratio',
    subtitle: 'Price against what the assets are actually worth',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'pb-ratio', caption: 'Market capitalisation against net worth: what the market pays for each rupee of the owners’ book equity.' },
      { kind: 'p', text: 'Price to book compares the market capitalisation with shareholders’ equity — the net assets on the balance sheet after all liabilities. It answers a specific question: how much is the market paying for the accounting value of the owners’ stake? It is a useful measure for lenders and asset-heavy businesses, and close to meaningless for asset-light ones built on brands, software and people.' },
      {
        kind: 'formula',
        label: 'How P/B and ROE connect',
        expr: 'P/B ≈ ROE ÷ cost of equity (the market’s required return)',
        note: 'A bank earning 16% on equity with a 12% required return can justify a P/B above 1.3. A lender earning 8% cannot justify more than about 0.7 — which is why PSU banks have traded below book for years.',
      },
      {
        kind: 'table',
        caption: 'When price to book is useful, and when it is not',
        headers: ['Business type', 'P/B useful?', 'Why'],
        rows: [
          ['Banks and NBFCs', 'Very — the standard measure', 'Their assets are loans, marked and provisioned periodically; book value is the starting point of analysis'],
          ['Insurance', 'Useful', 'Similar logic: the balance sheet is the business'],
          ['Manufacturing with real plants', 'Somewhat', 'Book value reflects tangible capacity, though it is historical cost'],
          ['IT services and consulting', 'Rarely', 'The assets are people and code, which sit mostly off the balance sheet'],
          ['Consumer brands', 'Rarely', 'Book value ignores the brand, which is the most valuable asset'],
          ['A company with large goodwill', 'Dangerous', 'Book equity includes an acquisition premium that may be worth nothing'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'A bank below book value is a question, not a bargain',
        text: 'Indian public-sector banks have traded below one times book for long stretches. That discount says the market doubts the stated book value — either the loans will need more provisioning, or the bank earns a low return on equity, or both. Before buying a bank at 0.6 times book, check its gross NPA ratio, its provision coverage and its return on assets. If the book is overstated, the discount may vanish when the write-offs arrive.',
      },
      {
        kind: 'example',
        title: 'Two lenders, same book, different multiples',
        text: 'Lender A earns 17% on equity, grew its loan book 20% with stable asset quality, and trades at 3 times book. Lender B earns 8% on equity with a rising proportion of overdue loans, and trades at 0.7 times book. Both are “value” depending on which column you read — but the arithmetic of A’s return supports its higher multiple, and B’s multiple is the market correctly demanding a lower price for a lower return. P/B is not dirt-cheap hunting; it is a test of whether the return on equity justifies the price.',
      },
      {
      kind: 'list',
        items: [
          'Book value is historical: land bought in 1995 sits at its original cost, so an old Indian manufacturing company may be worth far more than its book suggests.',
          'Write-downs reduce book value without cash leaving — the aftermath can look artificially expensive on P/B.',
          'For any asset-light business, use earnings, cash flow and return on capital instead. P/B will only confuse you.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Price against book value — change the net worth and see whether the market calls it cheap or expensive.' },
      {
        kind: 'terms',
        items: [
          { term: 'Price-to-book ratio (P/B)', meaning: 'Market capitalisation divided by shareholders\' equity — what the market pays for each rupee of book net worth. Most useful for banks and lenders.' },
          { term: 'Book value', meaning: 'Shareholders\' equity on the balance sheet, recorded at historical cost. Old land and plant can be worth far more than book value, and goodwill far less.' },
          { term: 'Gross NPA', meaning: 'A bank\'s loans that have stopped paying interest. A bank trading below book value is usually telling you the market doubts these numbers.' },
          { term: 'Provision coverage ratio', meaning: 'How much of a bank\'s bad loans it has already provided for. A low ratio means future profits will absorb the write-offs.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Which kind of Indian business is price to book most useful for analysing?',
        options: [
          { text: 'A software services company', why: 'Its value lies in people and client relationships, which barely appear on the balance sheet.' },          { text: 'A bank or non-bank lender', correct: true, why: 'For a lender the balance sheet — loans, provisions and equity — essentially is the business, so book value is the natural starting point.' },
          { text: 'A branded FMCG company', why: 'Its most valuable assets are brands built over decades, which book value ignores.' },
          { text: 'A newly listed loss-making platform', why: 'It has little book value and no earnings; other measures are needed entirely.' },
        ],
      },
      {
        q: 'A PSU bank trades at 0.6 times book. What is the most sensible reading?',
        options: [
          { text: 'It is guaranteed to be undervalued', why: '“Below book” is a hypothesis; the loan book behind the book value may not be worth what it says.' },          { text: 'The market doubts the quality of the loan book or the bank’s ability to earn a decent return on equity', correct: true, why: 'Check gross NPAs, provision coverage and return on assets before assuming the discount is a gift.' },
          { text: 'Book value is irrelevant for banks', why: 'Book value is a primary measure for lenders, for exactly this reason.' },
          { text: 'The government will pay the difference', why: 'There is no such guarantee, though recapitalisation has happened historically for some banks.' },
        ],
      },
      {
        q: 'Why can P/B mislead you about an old Indian manufacturer?',
        options: [
          { text: 'Because manufacturing companies have no book value', why: 'They have plenty — plant, land, equipment.' },          { text: 'Because book value records assets at historical cost, so decades-old land and plant may be worth far more', correct: true, why: 'A factory bought at 1995 prices shows at 1995 prices. The market capitalisation may reflect far more than the accounts do.' },
          { text: 'Because manufacturers do not publish balance sheets', why: 'They publish full annual reports.' },
          { text: 'Because factories cannot be sold', why: 'They can be sold; the issue is the valuation basis, not saleability.' },
        ],
      },
    ],
    takeaway: 'Price to book asks what the market pays for the owners’ accounting equity, and its usefulness depends on whether the assets are real and the return on equity is healthy. Use it for lenders and asset-heavy businesses, not for brands and software.',
  },

  'l3-048': {
    id: 'l3-048',
    title: 'ROE',
    subtitle: 'How well the company turns its own money into profit',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'roe-levers', caption: 'Profit against the shareholders’ own money — the return you are effectively buying when you own the business.' },
      { kind: 'p', text: 'Return on equity is profit after tax divided by shareholders’ equity. It answers the question that matters most over decades: for every ₹100 of owners’ money in the business, how many rupees of profit does the business produce each year? A company that earns a high return on equity and can reinvest at that rate is a compounding machine; one that earns a low return needs constant outside money simply to stand still.' },
      {
        kind: 'formula',
        label: 'The decomposition worth remembering',
        expr: 'ROE = net profit margin × asset turnover × equity multiplier',
        note: 'Profitability, efficiency and leverage — three very different ways to arrive at the same headline return, and only the first two are healthy on their own.',
      },
      {
        kind: 'table',
        caption: 'ROE in Indian contexts',
        headers: ['Business', 'Typical ROE', 'What drives it'],
        rows: [
          ['IT services (TCS, Infosys)', 'High, often 25–40%', 'Asset-light, cash-generative, high margins'],
          ['Consumer brands (Hindustan Unilever, Nestlé)', 'High', 'Pricing power and low capital intensity'],
          ['Private banks (HDFC Bank)', 'Around 15–18%', 'Leverage, spread income and low credit costs'],
          ['PSU banks', 'Low single digits to low teens', 'Thin spreads and periodic provisioning cycles'],
          ['Capital-heavy manufacturers', 'Low to moderate', 'Huge asset bases earning modest returns'],
          ['Non-bank lenders', '15–20%, achieved with 5–8x leverage', 'High leverage multiplying a modest return on assets'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'High ROE is not automatically good',
        text: 'A leveraged NBFC can show a 20% ROE built on an 8x equity multiplier: the business earns about 2.5% on assets, borrowed heavily, and the shareholders get 20%. That is elegant in good years and catastrophic when loans sour, because the leverage multiplies losses exactly as it multiplied profits. Always ask which of the three components — margin, turnover or leverage — is doing the work.',
      },
      {
        kind: 'example',
        title: 'A rising ROE that should worry you',
        text: 'A mid-cap company’s ROE climbs from 12% to 22% over three years. On inspection, the margin barely changed and asset turnover fell; the improvement came entirely from borrowing more. Debt rose from ₹1,000 crore to ₹3,500 crore, and interest costs are now a fifth of operating profit. The company is not more efficient — it is more fragile, and the next downturn will show it. That is why the decomposition above is worth doing for any business you own in size.',
      },
      {
        kind: 'list',
        items: [
          'Compare ROE with the risk-free rate: a business earning 9% on equity when government bonds pay 7% is barely worth the risk of owning it.',
          'Look at the trend, not the level. A 15% ROE falling steadily is worse news than a steady 12%.',
          'A company retaining profits at a 20% ROE compounds your money; one retaining profits at 6% should probably pay them out instead.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Profit against shareholders’ equity — the return the business actually earns on your money.' },
      {
        kind: 'terms',
        items: [
          { term: 'Return on equity (ROE)', meaning: 'Profit after tax divided by shareholders\' equity — what the business earns on the owners\' money each year. Compare it with the risk-free rate before calling it good.' },
          { term: 'Asset turnover', meaning: 'Revenue divided by total assets — how hard the asset base is working. One of the three engines that can lift ROE.' },
          { term: 'Equity multiplier', meaning: 'Total assets divided by shareholders\' equity, the leverage engine inside ROE. A high ROE built mostly on this is fragile.' },
          { term: 'Return on capital employed (ROCE)', meaning: 'Operating profit against the total capital used, including debt. It is often a fairer test than ROE for capital-heavy Indian businesses.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Two companies both report a 20% return on equity. What must you check?',
        options: [
          { text: 'Nothing — 20% is 20%', why: 'The same headline return can come from very different financial structures, and some are far riskier than others.' },          { text: 'How much of that return comes from borrowing rather than from margins or asset efficiency', correct: true, why: 'Leverage inflates ROE in good times and magnifies losses in bad ones — the decomposition shows which engine is running.' },
          { text: 'Only their share prices', why: 'Price matters for your return, but it does not explain the sustainability of the ROE.' },
          { text: 'Their dividend policies', why: 'Dividend policy affects cash returned to you, not how the ROE was achieved.' },
        ],
      },
      {
        q: 'An IT services company earns 30% ROE while a capital-heavy manufacturer earns 9%. Why the difference?',
        options: [
          { text: 'Because IT companies pay less tax', why: 'Tax is deducted above the ROE line for both; it does not explain the gap.' },          { text: 'Because IT services need very little capital to generate revenue, while manufacturing needs enormous asset bases', correct: true, why: 'Return depends on both profit and the capital used to earn it. Asset-light businesses can post high ROE without being better managed.' },
          { text: 'Because manufacturers are poorly run', why: 'The capital intensity of the industry is the primary explanation.' },
          { text: 'Because IT companies have no debt', why: 'Low debt helps, but the dominant factor is how much capital is required.' },
        ],
      },
      {
        q: 'A company retains all its profit while earning an 8% return on equity, when government bonds pay 7%. What is the sensible view?',
        options: [
          { text: 'Excellent — it is compounding', why: 'It is barely earning more than the risk-free rate on retained money, while taking equity risk.' },          { text: 'Weak — the retained capital is earning almost nothing above the risk-free rate', correct: true, why: 'Where a business cannot reinvest at a decent return, shareholders would generally be better served by a dividend or a buyback.' },
          { text: 'Irrelevant, because ROE does not affect the share price', why: 'Long-run share returns track the returns the business earns on its capital.' },
          { text: 'It should borrow more to lift the ROE', why: 'Adding leverage to a low-return business increases fragility without fixing the underlying return.' },
        ],
      },
    ],
    takeaway: 'ROE tells you what the business earns on the owners’ money, but only the decomposition tells you whether it is healthy. Look for durable margins, reasonable asset efficiency and leverage you are comfortable with.',
  },

  'l3-049': {
    id: 'l3-049',
    title: 'Debt-to-Equity',
    subtitle: 'How much of the business is financed by borrowing',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'debt-equity-mix', caption: 'How much of the business is funded by borrowing versus by the owners — and how much room is left before it hurts.' },
      { kind: 'p', text: 'Debt-to-equity divides total borrowings by shareholders’ equity. It is the simplest measure of financial risk in a business and, on its own, also one of the least informative — because the right level of debt depends entirely on how stable and predictable the cash flows are. The number only means something when compared with the company’s own history and with similar businesses.' },
      {
        kind: 'table',
        caption: 'Financial-risk signals to read with the ratio',
        headers: ['Signal', 'Healthy', 'Warning'],
        rows: [
          ['Interest coverage', 'Operating profit covers interest several times over', 'Barely covers it once'],
          ['Debt trend over three years', 'Stable or falling while profits rise', 'Rising faster than profits'],
          ['Maturity profile', 'Spread out, comfortably refinanced', 'A large block maturing within a year'],
          ['Currency of debt', 'Matched to where revenue comes from', 'Foreign-currency debt against rupee revenue'],
          ['Working capital funding', 'Short-term debt against current assets', 'Long-term borrowing used to fund losses'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The 2018–2020 Indian lesson: solvency is about refinancing',
        text: 'After the IL&FS defaults in 2018, several Indian non-bank lenders with modest reported leverage fell into trouble — not because they were insolvent, but because the market for their short-term borrowings closed. Indian companies fund a great deal of their business with commercial paper and short-term loans that must be rolled over every few months. When that window shuts, a solvent business can fail within weeks. So read debt-to-equity with the repayment schedule, not instead of it.',
      },
      {
        kind: 'example',
        title: 'Leverage is a tool, not a sin',
        text: 'A telecom operator or a cement producer borrows to build networks and plants that earn returns for decades — refusing all debt would mean never building anything. A consumer brand with steady demand does not need debt at all, and if it carries a large one, you should ask what the borrowing is for. The question is not “does it have debt”, it is “will the returns on the assets bought with that debt exceed the interest being paid on it, in a bad year as well as a good one?”',
      },
      {
      kind: 'list',
        items: [
          'Compute debt-to-equity using interest-bearing borrowings, not all liabilities: supplier payables and employee dues are normal working capital, not leverage.',
          'For lenders and banks, compare capital adequacy and loan quality rather than treating leverage as a red flag — their leverage is regulated by design.',
          'Watch the ratio on a consolidated basis, because group companies borrow too.',
          'A promoter pledging personal shares to fund company growth is leverage in a different guise, and it shows up in the shareholding pattern, not the balance sheet.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Add debt and watch leverage change both the return on equity and the risk underneath it.' },
      {
        kind: 'terms',
        items: [
          { term: 'Debt-to-equity ratio', meaning: 'Borrowings divided by shareholders\' equity. Normal at 5 for an Indian lender and alarming for an FMCG company — context is everything.' },
          { term: 'Leverage', meaning: 'Using borrowed money to fund assets. It amplifies returns and losses alike, and its safety depends on how stable the cash flows are.' },
          { term: 'Commercial paper', meaning: 'Short-term corporate borrowing that must be rolled over every few months. When that market closes, as it did for Indian non-bank lenders in 2018, solvent companies can fail.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A manufacturer and an NBFC both report debt-to-equity of 4. Which one is the concern?',
        options: [
          { text: 'The NBFC, because lending is inherently risky', why: 'High leverage is structural for a lender, whose loans are assets matched against borrowings, and it is regulated with capital requirements.' },          { text: 'The manufacturer — 4x leverage against unpredictable industrial cash flows is genuinely alarming', correct: true, why: 'The acceptable level of debt depends on the stability of cash flows. The same ratio can be normal in one business model and dangerous in another.' },
          { text: 'Both equally', why: 'Context is everything; the ratio alone does not rank them.' },
          { text: 'Neither — debt-to-equity does not matter', why: 'It matters a great deal, but only alongside the business model and cash flows.' },
        ],
      },
      {
        q: 'Why could an Indian company with modest leverage fail in a credit squeeze?',
        options: [
          { text: 'Because the stock exchange suspends its shares', why: 'A trading suspension follows the failure; it is not the cause.' },          { text: 'Because it depends on short-term borrowings it must roll over, and the market for those borrowings can close suddenly', correct: true, why: 'That is exactly what happened after the 2018 IL&FS defaults — solvent companies collapsed because the refinancing window shut.' },
          { text: 'Because SEBI raised interest rates', why: 'SEBI does not set interest rates; the RBI does.' },
          { text: 'Because its customers stopped paying', why: 'Customer defaults are a separate, slower kind of risk.' },
        ],
      },
      {
        q: 'Which items should you exclude when calculating a company’s borrowings?',
        options: [
          { text: 'Bank loans', why: 'Bank loans are core borrowings and must be included.' },          { text: 'Supplier payables and employee dues', correct: true, why: 'Those are ordinary working capital obligations, not interest-bearing leverage — including them overstates the risk.' },
          { text: 'Corporate bonds', why: 'Bonds are borrowings and belong in the calculation.' },
          { text: 'Lease liabilities', why: 'Finance leases are debt-like and are generally included under modern standards.' },
        ],
      },
    ],
    takeaway: 'Debt-to-equity is meaningful only next to cash-flow stability, interest cover and the refinancing schedule. The same ratio can be standard for a bank and dangerous for a manufacturer.',
  },

  'l3-050': {
    id: 'l3-050',
    title: 'Profit Margins',
    subtitle: 'How much of every rupee of sales you keep',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'profit-waterfall', caption: 'How many paise of each rupee of sales survive all the way down to profit — that is the margin.' },
      { kind: 'p', text: 'A margin is a ratio of profit to revenue, and it tells you how much pricing power and cost discipline a business has. Gross margin measures production or purchase economics; operating margin measures the core business after overheads; net margin measures what remains after interest and tax. The level differs enormously by industry, and the direction of change is often a better signal than the level itself.' },
      {
        kind: 'table',
        caption: 'Typical Indian operating margins, and why',
        headers: ['Business', 'Typical operating margin', 'What sets it'],
        rows: [
          ['IT services (TCS, Infosys)', '20–27%', 'High value-add work, low capital needs, wage inflation as the main drag'],
          ['Consumer brands (HUL, Nestlé, Britannia)', '20–25%', 'Pricing power and advertising scale'],
          ['Private banks', 'Net interest margin of 3–4%', 'Spread between lending and deposit rates, minus credit costs'],
          ['Grocery retail (D-Mart)', 'Around 8%', 'Everyday low prices; profit comes from turnover, not margin'],
          ['Airlines', 'Often single digits', 'Fuel, aircraft rentals and intense price competition'],
          ['Commodity producers', 'Wide swings by cycle', 'Global prices, which no Indian company controls'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Margin compression is the earliest warning',
        text: 'Long before profits fall, margins usually slip. An Indian consumer company wins a price war by dropping prices, an IT firm faces wage inflation without matching rate increases, or a fuel retailer absorbs a spike in crude because it cannot raise pump prices immediately. In each case, revenue may still be growing while profit per rupee of sales shrinks. Watching the margin trend every quarter tells you about the business long before the annual profit does.',
      },
      {
        kind: 'example',
        title: 'Same margin, opposite futures',
        text: 'Two companies both report a 12% operating margin. The first raised it from 8% over three years by shifting to higher-value products and holding costs down. The second fell from 18% over the same period, because its raw-material costs doubled and it could not raise prices. The first is building pricing power; the second is losing it. A single year’s margin comparison would show them as identical businesses, which is precisely why margin levels must always be read as a trend rather than a snapshot.',
      },
      {
      kind: 'list',
        items: [
          'Margins must be compared within an industry — an 8% margin is excellent for a grocery retailer and poor for a software exporter.',
          'Break the margin down: gross margin tells you about pricing and input costs, operating margin about overheads, net margin about interest and tax.',
          'A sudden margin jump deserves the same scrutiny as a sudden fall: it can come from a one-off, a change in accounting estimate, or a genuinely better product mix.',
          'Falling margins with rising revenue is the most common way a share price surprises a confident investor.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Move the costs and the price and watch the margin — and everything below it — change.' },
      {
        kind: 'terms',
        items: [
          { term: 'Operating margin', meaning: 'Operating profit as a percentage of revenue — how much of each rupee of sales survives the core costs of the business.' },
          { term: 'Gross margin', meaning: 'Revenue less the direct cost of what was sold, before overheads. It is where pricing power and input costs show up first.' },
          { term: 'Net margin', meaning: 'Profit after tax as a percentage of revenue, after interest and tax as well.' },
          { term: 'Pricing power', meaning: 'The ability to raise prices without losing customers. Falling margins with rising revenue usually means a business has lost it.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A grocery retailer reports an 8% operating margin while a software services company reports 24%. Which is the better business?',
        options: [
          { text: 'The software company, clearly', why: 'Higher margin does not automatically mean a better business — what matters is the return on capital and how fast the capital turns over.' },          { text: 'You cannot tell from margins alone — the retailer may earn an excellent return on capital by turning inventory fast', correct: true, why: 'A thin margin on very fast turnover and little capital can beat a fat margin on a big asset base. Return on capital is the combined test.' },
          { text: 'The retailer, because groceries are essential', why: 'Stable demand helps, but essential goods also invite price competition.' },
          { text: 'Neither — margins are irrelevant', why: 'Margins matter; they are just not a complete verdict on their own.' },
        ],
      },
      {
        q: 'A company’s revenue grows 18% while its operating margin falls from 18% to 13% over three years. What does that suggest?',
        options: [
          { text: 'The business is strong because revenue is growing', why: 'Selling more at a lower profit per rupee can eventually mean less profit overall.' },          { text: 'It is losing pricing power or absorbing cost inflation — profit quality is deteriorating even as sales grow', correct: true, why: 'Margin compression typically shows up before the profit line turns, which is why the trend matters more than any single quarter.' },
          { text: 'Margins always fall with scale', why: 'Scale usually improves margins through operating leverage; a fall needs explaining.' },
          { text: 'The company must have changed its accounting year', why: 'That would change comparability, not the underlying economics — and it is a separate red flag.' },
        ],
      },
      {
        q: 'Why does an Indian fuel retailer’s margin often compress when crude prices spike?',
        options: [
          { text: 'Because it owns oil fields', why: 'Its economics are driven by the spread between crude costs and pump prices, whichever way it buys.' },          { text: 'Because input costs rise immediately while retail prices are adjusted with a lag or by policy', correct: true, why: 'A business that cannot pass on input costs at the moment they rise sees margin squeezed — the clearest illustration of missing pricing power.' },
          { text: 'Because it sells in dollars', why: 'Pump prices are in rupees; the pressure comes from the lag in passing on costs.' },
          { text: 'Because margins never change in fuel retailing', why: 'Fuel retail margins are among the most volatile in the Indian market.' },
        ],
      },
    ],
    takeaway: 'Margins measure how much of each rupee of sales a business keeps, and their trend matters more than their level. Compare within industries, break the ratio into its parts, and treat compression as the earliest warning sign.',
  },
}
