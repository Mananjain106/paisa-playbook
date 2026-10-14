import type { Chapter } from '../../types'

/** Level 3, chapters 36–50: sizing a company up, and reading its accounts. */
export const valuation: Record<string, Chapter> = {
  'l3-036': {
    id: 'l3-036',
    title: 'Market Capitalisation',
    subtitle: 'What the whole company is worth today',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'share-slice', caption: 'Multiply the slice by the number of slices and you have the company.' },
      { kind: 'p', text: 'Market capitalisation is the price of one share multiplied by every share outstanding. It is the market\'s live opinion of what the entire business is worth today, and it updates every second the share price moves.' },
      {
        kind: 'formula',
        label: 'Market capitalisation',
        expr: 'Market cap = Share price × Total shares outstanding',
        note: 'A 1,000-crore-share company at ₹200 per share has a market cap of ₹2,00,000 crore.',
      },
      {
        kind: 'table',
        caption: 'Two numbers people confuse',
        headers: ['Measure', 'What it means'],
        rows: [
          ['Market capitalisation', 'What the market will pay for the whole business now'],
          ['Enterprise value', 'Market cap plus debt minus cash — the true cost of buying the company'],
          ['Revenue', 'Sales in a year'],
          ['Net worth / book value', 'Assets minus liabilities'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Market cap moves without the company changing',
        text: 'Nothing happened at the company, but its market cap dropped 30% because sentiment changed. That is why market cap is a price, not a value judgement — and why "cheap" only means something next to earnings or cash.',
      },
    ],
    quiz: [
      {
        q: 'A company has 50 crore shares at ₹80. Its market capitalisation is:',
        options: [
          { text: '₹4,000 crore', correct: true, why: '50 × ₹80 = ₹4,000 crore.' },
          { text: '₹1,600 crore', why: 'That is ₹80 × 20, which does not correspond to anything here.' },
          { text: '₹50 crore', why: 'That is the share count, not the value.' },
          { text: '₹80 crore', why: 'That is the share price.' },
        ],
      },
    ],
    takeaway: 'Market cap is share price times share count — the market\'s live valuation of the whole business. It moves daily, often with no change in the company at all.',
  },

  'l3-037': {
    id: 'l3-037',
    title: 'Large-Cap, Mid-Cap and Small-Cap',
    subtitle: 'Size is a real risk category, not a label',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'market-cap-ladder', caption: 'Size determines volatility, liquidity and how often the market is pricing in hope rather than results.' },
      { kind: 'p', text: 'Companies are sorted by market capitalisation into ranks, and the top ~100 are large-cap, 101–200 mid-cap, and 201–250 small-cap. Size is one of the strongest predictors of how violently an asset moves.' },
      {
        kind: 'table',
        caption: 'What size actually changes',
        headers: ['Large-cap', 'Mid-cap', 'Small-cap'],
        rows: [
          ['Lower volatility', 'Medium volatility', 'Highest volatility'],
          ['Very liquid', 'Reasonably liquid', 'Can be hard to exit'],
          ['Analyst coverage', 'Some coverage', 'Often none'],
          ['Smaller upside in a rally', 'More upside, more risk', 'Largest upside and largest risk'],
          ['Has usually survived a cycle', 'May not have', 'May have no track record'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Small-cap outperformance is often survivorship bias',
        text: 'Studies showing small caps beat large caps usually use today\'s survivors. Funds that failed were quietly merged away, and those failures are exactly what a small-cap investor experiences. The gap narrows sharply once dead companies are counted.',
      },
      { kind: 'list', items: ['Small caps need a genuinely long horizon — 10 years minimum.', 'Diversify heavily; a few names can wipe out years of gains.', 'Check whether the fund\'s own track record includes mergers.', 'Be suspicious of "small-cap" funds that quietly hold mid-caps.'] },
    ],
    quiz: [
      {
        q: 'Why does a small-cap fund\'s long-term record often look worse than research suggests?',
        options: [
          { text: 'Small-cap funds charge higher fees', why: 'Fees are higher in some cases, but this does not explain the gap.' },
          { text: 'Survivorship bias — funds that failed were quietly removed from the comparison', correct: true, why: 'Failed small-cap funds are usually merged into large-cap funds and disappear from the record. The investor still lived through the failure.' },
          { text: 'Small caps genuinely never outperform', why: 'They can outperform in specific periods; the long-run advantage after failure is much narrower than commonly quoted.' },
          { text: 'The index is calculated wrongly', why: 'Index methodology is standardised and audited.' },
        ],
      },
    ],
    takeaway: 'Size is a genuine risk category. Small caps may offer more upside but carry the highest chance of permanent loss, and the published record flatters them by quietly dropping the funds that failed.',
  },

  'l3-038': {
    id: 'l3-038',
    title: 'Company Revenue',
    subtitle: 'The top line — and why growth is not profit',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'profit-waterfall', caption: 'Revenue is the widest bar. Everything after it is what the company kept.' },
      { kind: 'p', text: 'Revenue is total sales before any costs are deducted. It is the first line of the profit and loss account and the headline number most people quote. It says how big the business is, not how well it is run.' },
      {
        kind: 'table',
        caption: 'Revenue questions worth asking',
        headers: ['Ask', 'Why it matters'],
        rows: [
          ['Is revenue growth organic or acquired?', 'Acquired growth can hide a weak business'],
          ['How much is recurring versus one-off?', 'Subscriptions repeat; a one-time licence sale does not'],
          ['Is the company spending more to get this revenue?', 'Rising sales with collapsing margins is a warning'],
          ['What is revenue per employee?', 'A rough check on how automated the business is'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The D-Mart lesson',
        text: 'A company doubled revenue while its margins collapsed. Revenue growth bought by discounting means the same volume now earns far less profit. Always read revenue and margin together, never revenue alone.',
      },
    ],
    quiz: [
      {
        q: 'A company grows revenue 30% but net profit falls 20%. The most likely explanation:',
        options: [
          { text: 'The company is doing badly', why: 'Not necessarily — profit can fall even in a growing business.' },
          { text: 'Costs grew faster than revenue', correct: true, why: 'That is the arithmetic: if costs rise faster than sales, the leftover profit shrinks.' },
          { text: 'The company paid a dividend', why: 'Dividends do not reduce reported net profit.' },
          { text: 'Revenue was inflated artificially', why: 'Possible in principle, but costs outrunning revenue is the direct explanation.' },
        ],
      },
    ],
    takeaway: 'Revenue measures size, not quality. Read it alongside margins and costs, because a business can grow its top line and lose money doing it.',
  },

  'l3-039': {
    id: 'l3-039',
    title: 'Expenses',
    subtitle: 'What the business spends before you get anything',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'profit-waterfall', caption: 'Revenue comes in at the top — every bar below it is money that leaves before you get anything.' },
      { kind: 'p', text: 'Expenses are the cost of running the business: materials, salaries, rent, marketing, interest and depreciation. They are split into operating expenses, which run the business, and finance costs, which service the debt.' },
      {
        kind: 'table',
        caption: 'Where operating costs hide',
        headers: ['Cost type', 'Why it matters'],
        rows: [
          ['Raw materials', 'Commodity prices can swing your margin violently'],
          ['Employee cost', 'Largest cost for most services businesses'],
          ['Marketing', 'Growth you paid for; check whether it is repeat acquisition'],
          ['Depreciation', 'Non-cash, but real — it reflects assets ageing'],
          ['Finance cost', 'Interest on debt; often the fastest way a profit becomes a loss'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Operating leverage cuts both ways',
        text: 'When revenue rises, fixed costs stay flat, so profit rises faster than revenue. When revenue falls, profit falls faster still. This is why a company with high fixed costs is far riskier than its margins suggest.',
      },
      { kind: 'formula', label: 'Break-even', expr: 'Break-even revenue = Fixed costs ÷ (1 − variable cost ratio)' },
    ],
    quiz: [
      {
        q: 'Revenue falls 10% and profit falls 35%. This shows the company has:',
        options: [
          { text: 'No costs at all', why: 'That is not possible for a trading business.' },
          { text: 'High operating leverage — a large fixed cost base', correct: true, why: 'With big fixed costs, a small drop in sales wipes out most of the profit.' },
          { text: 'A very high dividend payout', why: 'Payouts do not change the sensitivity of profit to revenue.' },
          { text: 'An accounting error', why: 'Possible, but operating leverage is the standard explanation.' },
        ],
      },
    ],
    takeaway: 'Costs are where revenue goes. Watch the fixed-cost share especially, because it amplifies both good news and bad into the profit line.',
  },

  'l3-040': {
    id: 'l3-040',
    title: 'Profit',
    subtitle: 'What is left after everything — the number that matters',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Net profit is what remains after all operating costs, interest and tax. It is the only line that answers "did this business actually make money for its owners". Gross profit, operating profit and net profit all tell progressively more complete stories.' },
      {
        kind: 'table',
        caption: 'The profit ladder',
        headers: ['Line', 'Meaning'],
        rows: [
          ['Gross profit', 'Revenue minus direct cost of goods/services'],
          ['Operating profit (EBIT)', 'After all operating costs, before interest and tax'],
          ['Net profit', 'After interest and tax — what shareholders own'],
          ['Retained profit', 'What stays in the business to fund growth'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Profit is not cash',
        text: 'A company can report rising profit while cash drains away — because customers have not paid yet, or inventory has piled up. Always read the cash flow statement alongside the profit number, especially in businesses with long credit cycles.',
      },
      { kind: 'sim', name: 'valuation', caption: 'Move the revenue and cost sliders and watch profit fall out the bottom.' },
    ],
    quiz: [
      {
        q: 'A company reports record profits but its cash balance keeps falling. What is the most likely explanation?',
        options: [
          { text: 'The company is hiding cash', why: 'Possible in a scam, but there is usually a business explanation first.' },
          { text: 'Profit is not being converted into cash — usually because debtors or inventory are rising', correct: true, why: 'Accounting profit is recognised before cash arrives. A growing receivables or inventory book is the usual culprit.' },
          { text: 'Shareholders took the profit as dividends', why: 'Dividends would reduce retained profit, not the cash balance alone.' },
          { text: 'The share price fell', why: 'Price changes do not change corporate cash.' },
        ],
      },
    ],
    takeaway: 'Net profit is the owner\'s bottom line, but it is an accounting number, not cash. Read the cash flow statement before you believe a profit figure.',
  },

  'l3-041': {
    id: 'l3-041',
    title: 'Assets',
    subtitle: 'What the company owns',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'profit-waterfall', caption: 'Assets range from cash to goodwill — judge each by how easily it converts to real money.' },


      { kind: 'p', text: 'Assets are things the company controls that have economic value: cash, receivables, inventory, property, plant and equipment, and intangible assets like brands and patents. They are listed on the balance sheet in order of how quickly they can be turned into cash.' },
      {
        kind: 'table',
        caption: 'Assets by liquidity',
        headers: ['Asset', 'How liquid', 'Watch for'],
        rows: [
          ['Cash and equivalents', 'Instant', 'Is it restricted or pledged?'],
          ['Marketable securities', 'Days', 'Are they actually liquid?'],
          ['Receivables', 'Days to months', 'Ageing — bad debts hide here'],
          ['Inventory', 'Weeks to months', 'Obsolete or slow-moving stock'],
          ['Property, plant and equipment', 'Years', 'How old is it? Is it pledged?'],
          ['Intangibles (goodwill, brand)', 'Never really', 'Written off if the acquisition fails'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Goodwill is the softest asset',
        text: 'When one company buys another for more than its net assets, the excess is recorded as goodwill. It is the largest asset on many Indian balance sheets and the easiest to write off in a downturn — so treat it as if it is worth less than the accounts say.',
      },
    ],
    quiz: [
      {
        q: 'Which asset would you most want to discount heavily when valuing a company?',
        options: [
          { text: 'Cash', why: 'Cash is cash — the most reliable asset there is.' },
          { text: 'Goodwill created by an acquisition', correct: true, why: 'It depends on future expectations rather than a saleable asset, and it is the first thing written off when things go wrong.' },
          { text: 'Factory machinery', why: 'Old machinery is worth less than book, but it has real resale value.' },
          { text: 'Bank deposits', why: 'Fixed deposits are safe and verifiable.' },
        ],
      },
    ],
    takeaway: 'Assets range from cash to brands and goodwill. Judge each by how easily it converts to cash and how much of its book value you would actually recover in a sale.',
  },

  'l3-042': {
    id: 'l3-042',
    title: 'Liabilities',
    subtitle: 'What the company owes, and to whom',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'profit-waterfall', caption: 'Liabilities are ranked claims — equity sits at the bottom of the queue.' },


      { kind: 'p', text: 'Liabilities are claims against the company. They split into current liabilities (payable within a year — suppliers, short-term loans) and non-current liabilities (long-term debt). In insolvency, they are paid in strict priority order, which is exactly why equity is last.' },
      {
        kind: 'table',
        caption: 'Who gets paid first',
        headers: ['Priority', 'Who'],
        rows: [
          ['1', 'Secured creditors, asset sale proceeds'],
          ['2', 'Employee wages and statutory dues (up to limits)'],
          ['3', 'Unsecured creditors and banks'],
          ['4', 'Preference shareholders'],
          ['5', 'Ordinary shareholders — last'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Watch off-balance-sheet obligations',
        text: 'Lease liabilities, vendor financing, letters of comfort for a subsidiary and guarantees for a related company can all be real debt that does not appear under "borrowings". Read the notes, not just the headline.',
      },
    ],
    quiz: [
      {
        q: 'A company has ₹500 crore assets and ₹700 crore liabilities. Its shareholders:',
        options: [
          { text: 'Own ₹1,200 crore', why: 'Assets minus liabilities is negative, so there is nothing to own.' },
          { text: 'Own nothing, and creditors are owed ₹200 crore', correct: true, why: 'The company is underwater — a technical default risk and a warning sign in the accounts.' },
          { text: 'Own ₹200 crore', why: 'You cannot own negative equity; the shortfall belongs to creditors.' },
          { text: 'Own ₹500 crore', why: 'Assets are entirely owed to liabilities in this case.' },
        ],
      },
    ],
    takeaway: 'Liabilities are ranked claims on the assets. Equity sits at the bottom of that queue, so leverage does not just reduce your share — it decides whether you have anything left.',
  },

  'l3-043': {
    id: 'l3-043',
    title: 'Cash Flow',
    subtitle: 'The number that tells you whether profit is real',
    minutes: 6,
    blocks: [

      { kind: 'scene', name: 'profit-waterfall', caption: 'Cash flow is the statement that cannot be dressed up — track it against profit.' },


      { kind: 'p', text: 'The cash flow statement tracks actual money: what came in, what went out, and what was left. It is the most trustworthy of the three statements, because cash cannot be argued with. A company that reports profit but never generates cash is a warning sign.' },
      {
        kind: 'table',
        caption: 'The three statements and what each answers',
        headers: ['Statement', 'Question it answers'],
        rows: [
          ['Profit and loss', 'Did we make a profit this year?'],
          ['Balance sheet', 'What do we own and owe right now?'],
          ['Cash flow', 'Did real money actually move?'],
        ],
      },
      {
        kind: 'formula',
        label: 'Operating cash flow',
        expr: 'OCF = Profit after tax + Depreciation − Changes in working capital',
        note: 'Positive and growing operating cash flow is the single best sign of a healthy business.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Free cash flow is what you truly own',
        text: 'Operating cash flow minus capital spending is roughly what the business can genuinely distribute or reinvest. Profit overstates this when a company keeps buying growth it cannot fund.',
      },
      {
        kind: 'list',
        items: ['Compare profit with operating cash flow over 3–5 years, not one year.', 'A widening gap means profit is not converting into cash.', 'Rising receivables and inventory are the usual reason.', 'For a dividend-focused investor, consistently positive free cash flow matters more than EPS.'] },
    ],
    quiz: [
      {
        q: 'A company has reported rising profits for three years but falling operating cash flow each year. What is the most useful conclusion?',
        options: [
          { text: 'The accounting must be wrong', why: 'Accrual accounting can produce this legitimately — it does not necessarily mean fraud.' },
          { text: 'Reported profit is increasingly not being converted into cash', correct: true, why: 'The widening gap is the signal. Check receivables and inventory to find where the cash is going.' },
          { text: 'The company is investing heavily and it is fine', why: 'Heavy investment shows in investing cash flow, not by suppressing operating cash flow.' },
          { text: 'It means the share price must fall', why: 'The cash flow gap is a serious concern, but the price response depends on expectations and valuation.' },
        ],
      },
    ],
    takeaway: 'Cash flow is the statement that cannot be dressed up. Track operating cash flow against profit over several years — a persistent gap means the profit is not real.',
  },

  'l3-044': {
    id: 'l3-044',
    title: 'Financial Statements',
    subtitle: 'How to open and read an annual report',
    minutes: 7,
    blocks: [

      { kind: 'scene', name: 'profit-waterfall', caption: 'Twenty focused minutes with the three statements and the notes beats an hour of headlines.' },


      { kind: 'p', text: 'Every listed Indian company publishes audited annual and quarterly results. They are long and often impenetrable, but you only need a few pages: the profit and loss account, the balance sheet, the cash flow statement, and the notes.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Start with the notes to the accounts — often the real story is there.',
          'Read revenue and profit trends over five years, not one year.',
          'Find the auditor\'s report; any qualification is a red flag.',
          'Check related-party transactions and any change in auditor.',
          'Compare the dividend with the cash the business actually generates.',
          'Read the chairman\'s discussion last, not first — it is the marketing.',
        ],
      },
      {
        kind: 'table',
        caption: 'Red flags in an annual report',
        headers: ['Warning', 'Why it matters'],
        rows: [
          ['Auditor qualification', 'Accounting is questionable'],
          ['Frequent auditor changes', 'Could be routine, could be disagreement'],
          ['Rising receivables much faster than sales', 'Profit may not be collectible'],
          ['Large related-party sales', 'Revenue may not be real arm\'s-length trade'],
          ['Promoter shares heavily pledged', 'Forced selling risk if the price falls'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'You do not need to read it all',
        text: 'A focused 20-minute read of the four statements and the notes will tell you far more than an hour of headlines. Most retail investors never read any of it, which is precisely where the edge is.',
      },
    ],
    quiz: [
      {
        q: 'What does an auditor\'s qualification mean?',
        options: [
          { text: 'The company is definitely a fraud', why: 'Qualifications range from mild emphasis of matter to outright disagreement. Severity varies widely.' },
          { text: 'The auditor cannot give an unqualified opinion on some part of the accounts', correct: true, why: 'It means specific issues prevented a clean opinion — worth investigating, and sometimes serious.' },
          { text: 'The company is well run', why: 'It is the opposite: a clean, unqualified opinion is the good sign.' },
          { text: 'The accounts are delayed', why: 'Delay is a separate issue from the opinion.' },
        ],
      },
      {
        q: 'Which section of an annual report most often contains the real information?',
        options: [
          { text: 'The chairman\'s letter', why: 'That is management\'s presentation, written to be reassuring.' },
          { text: 'The notes to the accounts', correct: true, why: 'Notes disclose segment detail, related parties, contingent liabilities and accounting policies — where surprises hide.' },
          { text: 'The cover page', why: 'It carries branding, not information.' },
          { text: 'The stock price chart', why: 'That belongs in a market report, not the annual report.' },
        ],
      },
    ],
    takeaway: 'You can learn a great deal from 20 focused minutes with the three statements and the notes. Start with the auditor\'s opinion, then the notes, and treat the chairman\'s letter as marketing.',
  },

  'l3-045': {
    id: 'l3-045',
    title: 'EPS',
    subtitle: 'Earnings per share — profit belonging to one share',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'EPS is net profit divided by the number of shares. It makes companies of very different sizes comparable: it tells you how much profit each single share is entitled to.' },
      {
        kind: 'formula',
        label: 'Earnings per share',
        expr: 'EPS = Net profit after tax ÷ Weighted average shares outstanding',
        note: 'The weighted average matters because a company that issues shares mid-year has not had the full count all year.',
      },
      {
        kind: 'table',
        caption: 'Why EPS trends matter more than the number',
        headers: ['EPS movement', 'Usual meaning'],
        rows: [
          ['Rising consistently', 'The business is genuinely compounding'],
          ['Rising due to share buybacks', 'Same profit spread over fewer shares — fine, but not growth'],
          ['Rising despite falling profit', 'Because shares were issued — dilution, not progress'],
          ['Falling while revenue rises', 'Margins are being squeezed'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'EPS can be engineered',
        text: 'Discounting expenses, capitalising costs that should be expensed, or issuing shares to a related party can all move EPS without any change in the business. This is why a clean auditor\'s opinion matters.',
      },
      { kind: 'sim', name: 'valuation', caption: 'EPS updates live as you change profit and share count.' },
    ],
    quiz: [
      {
        q: 'Net profit stays flat but EPS rises 20% year on year. What most likely happened?',
        options: [
          { text: 'The business suddenly became more profitable', why: 'Profit is unchanged by assumption, so something else moved.' },
          { text: 'The company bought back shares, so the same profit is split fewer ways', correct: true, why: 'A buyback reduces share count and lifts EPS without any operational improvement.' },
          { text: 'The tax rate fell', why: 'A tax cut would raise net profit, which this scenario rules out.' },
          { text: 'The share price rose', why: 'Share price does not affect EPS at all.' },
        ],
      },
    ],
    takeaway: 'EPS is profit per share and makes companies comparable. Follow its trend, and check whether it is rising because the business grew or because the share count changed.',
  },

  'l3-046': {
    id: 'l3-046',
    title: 'P/E Ratio',
    subtitle: 'What you pay for each rupee of profit',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'The price-to-earnings ratio is the share price divided by EPS. It answers a simple question: how many years of current profit would it take to earn back what you paid? A P/E of 20 means you are paying twenty rupees for every one rupee of annual profit.' },
      {
        kind: 'formula',
        label: 'P/E ratio',
        expr: 'P/E = Share price ÷ EPS',
        note: 'It is the most quoted valuation number in Indian markets, for better or worse.',
      },
      {
        kind: 'table',
        caption: 'How to read the number',
        headers: ['P/E', 'Usually means'],
        rows: [
          ['Below 10', 'Deeply cheap, or a business in trouble'],
          ['10–20', 'Reasonable for a stable business'],
          ['20–35', 'Growth expectations priced in'],
          ['Above 40', 'Very optimistic expectations, or a very unusual business'],
          ['Negative', 'Loss-making — P/E is meaningless'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The comparison must be like-for-like',
        text: 'Comparing a bank\'s P/E to an IT company\'s is meaningless — they have completely different economics, capital intensity and growth. A bank at 12 and an IT firm at 30 may be priced correctly relative to each other.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'P/E is a forecast disguised as a fact',
        text: 'Every P/E embeds an assumption about future growth. If a share trades at 30, the market expects rapid growth; if that growth disappoints, the share price falls even while profits keep rising.',
      },
      { kind: 'sim', name: 'valuation', caption: 'See what different P/E ratings mean for the price you pay.' },
    ],
    quiz: [
      {
        q: 'A company at ₹500 per share earns ₹25 EPS. Its P/E is:',
        options: [
          { text: '20', correct: true, why: '500 ÷ 25 = 20. You are paying twenty times annual profit.' },
          { text: '0.05', why: 'That is EPS ÷ price, the inverse.' },
          { text: '₹475', why: 'That is price minus EPS, which is not a valuation multiple.' },
          { text: '25', why: 'That is EPS itself.' },
        ],
      },
      {
        q: 'A stock with a P/E of 45 is best described as:',
        options: [
          { text: 'Definitely overvalued', why: 'High P/E can be entirely justified by growth, sector or one-off earnings.' },
          { text: 'Carrying very optimistic growth expectations', correct: true, why: 'At 45 times earnings, the price only works if growth is strong and durable. That is an expectation to test, not a verdict.' },
          { text: 'Cheap compared to a P/E of 20', why: 'The reverse is true.' },
          { text: 'Guaranteed to fall', why: 'Expensive markets can stay expensive for years.' },
        ],
      },
    ],
    takeaway: 'P/E is what you pay per rupee of annual profit, and it only means something against similar businesses. A high P/E is optimism priced in — which is a risk, not a certainty.',
  },

  'l3-047': {
    id: 'l3-047',
    title: 'P/B Ratio',
    subtitle: 'Price against what the assets are actually worth',
    minutes: 5,
    blocks: [

      { kind: 'sim', name: 'valuation', caption: 'P/B compares price to accounting net assets — genuinely informative for banks.' },


      { kind: 'p', text: 'The price-to-book ratio is the share price divided by book value per share. It asks whether you are paying more than the accounting value of the net assets behind a share — which makes it most useful for banks, which are essentially financial businesses built on book value.' },
      {
        kind: 'formula',
        label: 'P/B ratio',
        expr: 'P/B = Share price ÷ Book value per share',
        note: 'Book value per share = Shareholders\' equity ÷ Shares outstanding.',
      },
      {
        kind: 'table',
        caption: 'Where P/B works, and where it does not',
        headers: ['Works for', 'Does not work for'],
        rows: [
          ['Banks and financial firms', 'Asset-light software or service companies'],
          ['Companies holding valuable property', 'Companies whose main asset is people and brand'],
          ['Deep-value investors screening for margin of safety', 'Fast-growing firms with few tangible assets'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The famous low-P/B argument',
        text: 'Value investors have historically favoured Indian banks trading near 1× book. The argument is that you are buying ₹1 of genuine assets for ₹1, and earning a reasonable return on them. The rebuttal is that a bank earning well below its cost of equity is worth far less than its book.',
      },
    ],
    quiz: [
      {
        q: 'A bank trades at 0.8× book value. This most directly means:',
        options: [
          { text: 'The bank is guaranteed to rise', why: 'A sub-book price is a signal to investigate, not a guarantee.' },
          { text: 'You are paying ₹0.80 for every ₹1 of accounting net assets', correct: true, why: 'That is what P/B measures — though whether those assets are worth their book value is the real question.' },
          { text: 'The bank is loss-making', why: 'A loss-making company has no meaningful book value to compare against.' },
          { text: 'It is more expensive than a P/E of 20', why: 'P/E and P/B are different measures and cannot be compared directly.' },
        ],
      },
    ],
    takeaway: 'P/B compares price to accounting net assets, which makes it genuinely informative for banks and asset-heavy firms. For asset-light businesses it tells you very little.',
  },

  'l3-048': {
    id: 'l3-048',
    title: 'ROE',
    subtitle: 'How well the company turns its own money into profit',
    minutes: 5,
    blocks: [

      { kind: 'sim', name: 'valuation', caption: 'ROE measures how well the owners\' money is used — read it with debt-to-equity.' },


      { kind: 'p', text: 'Return on equity is net profit divided by shareholders\' equity. It is the most direct measure of whether a business is worth owning: how efficiently it uses the money its owners have put in.' },
      {
        kind: 'formula',
        label: 'Return on equity',
        expr: 'ROE = Net profit after tax ÷ Shareholders\' equity × 100',
        note: 'A business with ₹1,000 crore equity earning ₹150 crore has a 15% ROE.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'High ROE is not automatically good',
        text: 'High leverage can manufacture a high ROE. A company borrowing heavily and earning 15% on assets can show 25% ROE simply because most of the capital is not the company\'s. Always check ROE alongside debt-to-equity.',
      },
      {
        kind: 'table',
        caption: 'What ROE levels suggest',
        headers: ['ROE', 'Interpretation'],
        rows: [
          ['Below 10%', 'Weak, or the business needs a lot of capital per rupee of profit'],
          ['10–15%', 'Reasonable for many Indian businesses'],
          ['15–25%', 'Strong'],
          ['Above 25%', 'Excellent, or heavily levered — check the debt figure'],
        ],
      },
      { kind: 'formula', label: 'DuPont identity', expr: 'ROE = Net margin × Asset turnover × Leverage', note: 'It tells you whether a high ROE comes from pricing, efficiency, or borrowed money.' },
    ],
    quiz: [
      {
        q: 'Company A has ROE 30% and debt-to-equity 2.5. Company B has ROE 16% with no debt. What is the fairer reading?',
        options: [
          { text: 'Company A is better because its ROE is higher', why: 'A large part of A\'s ROE may simply be borrowed money doing the work.' },
          { text: 'B is at least as good, because its return is not built on leverage', correct: true, why: 'The DuPont identity shows A\'s higher ROE comes partly from leverage, which adds risk rather than quality.' },
          { text: 'They are identical', why: 'The headline numbers differ meaningfully in risk terms.' },
          { text: 'ROE cannot be compared across companies', why: 'It can be compared, provided you adjust for leverage and sector.' },
        ],
      },
    ],
    takeaway: 'ROE measures how well the owners\' money is used. Read it with debt-to-equity, because leverage can produce a high ROE without producing a better business.',
  },

  'l3-049': {
    id: 'l3-049',
    title: 'Debt-to-Equity',
    subtitle: 'How much of the business is financed by borrowing',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Debt-to-equity compares total borrowings to shareholders\' funds. A ratio of 1 means every ₹1 of owner money supports ₹1 of borrowed money. In India, anything above roughly 1.5 in a non-financial business deserves investigation.' },
      {
        kind: 'formula',
        label: 'Debt-to-equity',
        expr: 'D/E = Total debt ÷ Shareholders\' equity',
        note: 'For banks a higher number is normal, because deposits are their raw material.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Leverage is a tool, not a sin',
        text: 'Borrowing to buy an asset that returns more than the interest rate increases your returns. Borrowing when the business is struggling simply moves the failure to your lenders. The difference is whether the debt funds something productive.',
      },
      {
        kind: 'list',
        items: ['Can the company service this debt in a bad year, not just a good one?', 'Are the loans short-term? Short-term debt funding long-term assets is a classic warning.', 'Is the debt in the same currency as the revenue?', 'Does it have floating-rate debt when rates are rising?'] },
      { kind: 'sim', name: 'valuation', caption: 'Change the debt slider and watch ROE, interest and profit all move at once.' },
    ],
    quiz: [
      {
        q: 'A company has ₹200 crore debt, ₹100 crore equity and ₹40 crore annual interest. Interest coverage is:',
        options: [
          { text: '2.5 times', correct: true, why: 'Roughly EBIT of ₹100 crore over ₹40 crore interest — thin enough that a 60% profit fall would leave it unable to service the debt.' },
          { text: '5 times', why: 'That would require EBIT around ₹200 crore.' },
          { text: '0.5 times', why: 'That would mean interest exceeds EBIT, which is not this case.' },
          { text: '100 times', why: 'That is the debt-to-equity figure, not interest coverage.' },
        ],
      },
    ],
    takeaway: 'Debt-to-equity shows how much of the business is financed by others. Leverage is fine when it funds something productive — but it multiplies both gains and failures.',
  },

  'l3-050': {
    id: 'l3-050',
    title: 'Profit Margins',
    subtitle: 'How much of every rupee of sales you keep',
    minutes: 5,
    blocks: [

      { kind: 'sim', name: 'valuation', caption: 'Margin is profit as a percentage of revenue — pricing power and efficiency in one number.' },


      { kind: 'p', text: 'Margin is profit expressed as a percentage of revenue. It measures pricing power and efficiency: a company keeping ₹20 of every ₹100 of sales is far more valuable than one keeping ₹5, even at the same revenue.' },
      {
        kind: 'formula',
        label: 'Net profit margin',
        expr: 'Net margin = Net profit ÷ Revenue × 100',
        note: 'Gross margin (before overheads) and operating margin (before interest and tax) are also worth tracking.',
      },
      {
        kind: 'table',
        caption: 'Typical Indian net margins by business',
        headers: ['Business', 'Rough net margin'],
        rows: [
          ['Software / IT services', '15–25%'],
          ['Pharma', '12–20%'],
          ['Banks', '12–18%'],
          ['FMCG', '8–15%'],
          ['Retail', '2–5%'],
          ['Commodity trading', '1–4%'],
          ['Airlines', 'Often negative'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Margin compression is the earliest warning',
        text: 'Rising revenue with falling margins means growth is being bought with discounts. In practice a company whose margins have compressed for several quarters is usually facing a structural problem — often competition or a change in customer bargaining power.',
      },
    ],
    quiz: [
      {
        q: 'A company\'s revenue rises 25% but its net margin falls from 12% to 8%. What happened?',
        options: [
          { text: 'The business improved', why: 'Revenue grew, but far less profit is left from each rupee of sales.' },
          { text: 'It is selling more for less profit per rupee — margins compressed', correct: true, why: 'Typical causes: discounting to win share, higher input costs, or a shift toward a lower-margin product mix.' },
          { text: 'Nothing — margins and revenue are unrelated', why: 'They are directly related through profit per rupee of sales.' },
          { text: 'The share price must fall immediately', why: 'Margin compression is a serious warning, but the price response depends on what was expected.' },
        ],
      },
    ],
    takeaway: 'Margin tells you how much of each sales rupee survives as profit. Watch it for compression — it is usually the earliest sign that a business is being squeezed.',
  },
}
