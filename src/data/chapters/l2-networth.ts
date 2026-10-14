import type { Chapter } from '../../types'

/** Level 2, chapters 1–5: taking stock of what you own and owe. */
export const networth: Record<string, Chapter> = {
  'l2-001': {
    id: 'l2-001',
    title: 'Your Personal Balance Sheet',
    subtitle: 'The one statement that tells you where you actually stand',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'balance-sheet', caption: 'A balance sheet is a snapshot: what you own on one side, what you owe on the other.' },
      { kind: 'p', text: 'Companies publish a balance sheet to answer one question honestly: what does this business own, what does it owe, and what is left over? You can run exactly the same statement for yourself, and it is the most useful financial document most people never create.' },
      { kind: 'h', text: 'The structure' },
      {
        kind: 'table',
        caption: 'A personal balance sheet',
        headers: ['Assets (what you own)', 'Liabilities (what you owe)'],
        rows: [
          ['Savings and FDs', 'Home loan'],
          ['EPF, NPS and PPF balance', 'Car or bike loan'],
          ['Bank shares and mutual funds', 'Credit card outstanding'],
          ['Gold, silver', 'Personal or business loan'],
          ['Property, gold, vehicles (market value)', 'BNPL and app-based credit'],
          ['Receivables from others', 'Overdraft and personal credit line'],
        ],
      },
      {
        kind: 'formula',
        label: 'The statement',
        expr: 'Net worth = Total assets − Total liabilities',
        note: 'Positive means you own more than you owe. Negative means the opposite — and it is far more common than people admit.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why it beats looking at your bank balance',
        text: 'A bank balance only shows liquid cash. Two people with identical balances can have completely different positions — one owns a house and ₹2 lakh of EPF, the other owes ₹6 lakh in card debt. The balance sheet captures what the balance hides.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Do it quarterly, not daily',
        text: 'Reviewing this weekly produces anxiety and no insight, because most values move slowly. Once a quarter is frequent enough to catch drift and rare enough to stay meaningful. Record the date each time so you can compare like with like.',
      },
      { kind: 'sim', name: 'networth', caption: 'Build yours now and watch what happens as you add assets or debts.' },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Count assets honestly, not aspirationally',
        text: 'Value a car at what you could actually sell it for today, not what you paid. Value a house at a realistic local market price, not your project cost. The purpose of this document is accuracy, so that inflating it gives you false comfort.',
      },
    ],
    quiz: [
      {
        q: 'A personal balance sheet primarily shows:',
        options: [
          { text: 'What you own and what you owe, and the difference', correct: true, why: 'Exactly right — that is the whole statement.' },
          { text: 'Only your cash in the bank', correct: false, why: 'That is just one line on the left side.' },
          { text: 'Your tax liability for the year', correct: false, why: 'Tax is a separate matter.' },
        ],
      },
      {
        q: 'How often should you realistically update a personal balance sheet?',
        options: [
          { text: 'Every day, for accuracy', correct: false, why: 'Most values move slowly; daily review adds stress and no insight.' },
          { text: 'About once a quarter', correct: true, why: 'Correct — frequent enough to catch drift, rare enough to stay meaningful.' },
          { text: 'Only when something goes wrong', correct: false, why: 'Then it is a post-mortem, not a management tool.' },
        ],
      },
      {
        q: 'A car worth ₹4 lakh in the market that you bought for ₹12 lakh should be recorded as:',
        options: [
          { text: '₹12 lakh, because that is what you paid', correct: false, why: 'That flatters the statement and hides reality.' },
          { text: '₹4 lakh, its realistic resale value today', correct: true, why: 'Correct — accuracy is the entire purpose.' },
          { text: '₹0, because it is not cash', correct: false, why: 'Non-cash assets still belong on the statement.' },
        ],
      },
    ],
    takeaway: 'A personal balance sheet answers one honest question: what do you own, what do you owe, and what is left? Review it quarterly and keep the valuations realistic.',
  },

  'l2-002': {
    id: 'l2-002',
    title: 'Assets',
    subtitle: 'Not all money is equally useful',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'The same pot of money can sit in a safe jar or a growth jar — the label matters as much as the amount.' },
      { kind: 'p', text: 'An asset is anything you own that has value and can produce income or be converted to cash. The word sounds passive, but assets differ enormously in how useful they are to you — which is why ranking them matters more than simply counting them.' },
      {
        kind: 'table',
        caption: 'Assets ranked by usefulness',
        headers: ['Asset', 'Liquidity', 'Growth potential', 'Typical return'],
        rows: [
          ['Savings account', 'Instant', 'Very low', '3–3.5%'],
          ['Liquid fund', 'Same day', 'Low', '5–7%'],
          ['Fixed deposit / RD', 'Days, with penalty', 'Low', '6–7.5%'],
          ['EPF / PPF', 'Locked', 'Moderate, tax-free', '7–7.5%'],
          ['Equity shares / equity funds', 'Days', 'High, volatile', '10–13% long run'],
          ['Gold / silver', 'Days', 'Moderate, no yield', 'varies'],
          ['Property', 'Months', 'Rental yield plus appreciation', '3–6% plus growth'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Three questions to ask of any asset',
        text: 'Can I get my money back quickly? Does it produce income or growth? Can it survive a bad year? An asset that fails the first question is an emergency fund problem; one that fails the second is a wealth problem; one that fails the third is a risk problem.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Concentration is the hidden risk',
        text: 'Many Indian households hold 70–80% of net worth in one asset — the house. It is illiquid, produces no income, and moves with local property cycles. A property-heavy balance sheet looks wealthy on paper while generating nothing you can spend. This is why property plus a decent liquid and equity allocation is healthier than property alone.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Keep 3–6 months of expenses in something instantly accessible.',
          'Match every long-horizon asset to a goal and a date.',
          'Diversify so no single asset can damage the whole portfolio.',
          'Review the mix twice a year, not every time markets move.',
          'Count receivables — money owed to you is an asset, but an unreliable one.',
        ],
      },
      {
        kind: 'example',
        title: 'Two people, identical assets, different freedom',
        text: 'Person A has ₹5 lakh in gold. Person B has ₹2 lakh in a liquid fund, ₹1 lakh in a corporate deposit, ₹1.5 lakh in equity funds and ₹50,000 in cash. Person B has more financial flexibility, earns a return, and can convert any part to cash in days. Neither is richer — but only one has real options.',
      },
    ],
    quiz: [
      {
        q: 'What makes an asset genuinely useful to you?',
        options: [
          { text: 'It was expensive when you bought it', correct: false, why: 'Cost basis is not a measure of usefulness.' },
          { text: 'It is liquid enough, produces income or growth, and survives a bad year', correct: true, why: 'Exactly right — the three questions.' },
          { text: 'It is listed on your balance sheet', correct: false, why: 'Listing it proves nothing.' },
        ],
      },
      {
        q: 'What is the main risk for an Indian household with 80% of net worth in one house?',
        options: [
          { text: 'The house may appreciate slowly', correct: false, why: 'Appreciation is not the risk here.' },
          { text: 'Illiquidity and concentration — it produces no income and cannot be accessed quickly', correct: true, why: 'Exactly right.' },
          { text: 'The house will fall in value next year', correct: false, why: 'That is possible but not the structural issue.' },
        ],
      },
      {
        q: 'Money owed to you by a friend is best classified as:',
        options: [
          { text: 'An asset, though an unreliable one', correct: true, why: 'Correct — but it is poor-quality and often uncollectable.' },
          { text: 'Not an asset because it is not cash', correct: false, why: 'Receivables are recognised assets.' },
          { text: 'Liability', correct: false, why: 'A liability is what you owe.' },
        ],
      },
    ],
    takeaway: 'An asset is only as useful as its liquidity, income and resilience. Watch concentration — for many Indian households the house is almost the entire balance sheet.',
  },

  'l2-003': {
    id: 'l2-003',
    title: 'Liabilities',
    subtitle: 'Not all debt is equally dangerous',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'A liability is anything you owe. But liabilities differ by orders of magnitude in cost and consequence. Treating a ₹40,000 home loan the same as a ₹40,000 credit card balance is one of the most expensive analytical mistakes you can make.' },
      {
        kind: 'table',
        caption: 'Indian liabilities ranked by cost',
        headers: ['Liability', 'Typical rate', 'Severity if unpaid'],
        rows: [
          ['Home loan (secured)', '8.5–9.5%', 'Very high — you can lose the asset'],
          ['Vehicle loan', '9–14%', 'High — repossession plus rehypothecation'],
          ['Gold loan', '12–24%', 'High — very fast, no negotiation'],
          ['Education loan', '7–12%', 'Moderate — usually guaranteed'],
          ['Personal loan', '11–18%', 'High — unsecured'],
          ['Credit card', '30–42%', 'Very high — spiral risk'],
          ['BNPL / app credit', '14–36%', 'High — small amounts, many lenders'],
          ['Overdraft', '10–16%', 'Moderate — accumulates quickly'],
        ],
      },
      {
        kind: 'formula',
        label: 'What matters most',
        expr: 'Priority = highest interest rate first, then the smallest balances',
        note: 'Revolving card debt is the most expensive, so it goes first. Secured low-rate loans go last.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Every liability has two prices',
        text: 'The first is interest. The second is the risk of losing something you cannot replace — your home, your vehicle, or your credit score. A 9% home loan with correct payments is low risk; a 12% loan you will miss is far more dangerous than the interest suggests.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Check for hidden liabilities',
        text: 'Credit card balances, BNPL dues due next week, EMI-linked offers you accepted, a co-signed loan someone else took, and unpaid utility bills. Many people are surprised by the last one, and small forgotten dues get attached to loans.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'List every liability with balance, rate, and remaining tenure.',
          'Sort by rate, highest first.',
          'Set an automatic full repayment for the top one.',
          'Never take a new liability while an older one is outstanding — except to consolidate expensive debt.',
          'Check your credit report quarterly for debts you did not know about.',
        ],
      },
      { kind: 'sim', name: 'minpayment', caption: 'See why revolving card debt behaves so differently from a term loan.' },
    ],
    quiz: [
      {
        q: 'Which liability should you repay first?',
        options: [
          { text: 'The largest balance', correct: false, why: 'Size alone is not the priority.' },
          { text: 'The one with the highest interest rate', correct: true, why: 'Correct — highest rate first, since that is pure cost.' },
          { text: 'The oldest debt', correct: false, why: 'Age does not determine cost.' },
        ],
      },
      {
        q: 'Credit card debt is the most damaging because:',
        options: [
          { text: 'It is usually larger than other loans', correct: false, why: 'Balances are often small.' },
          { text: 'It is revolving and charges roughly 3% a month, so minimum payments barely dent the principal', correct: true, why: 'Exactly right.' },
          { text: 'It cannot be prepaid', correct: false, why: 'It can be cleared at any time.' },
        ],
      },
      {
        q: 'A forgotten utility bill counts as:',
        options: [
          { text: 'Nothing significant', correct: false, why: 'It is a real liability and can affect loan applications.' },
          { text: 'A liability, and it can complicate future loan or card approvals', correct: true, why: 'Correct — lenders check outstanding dues.' },
          { text: 'An asset', correct: false, why: 'It is money you owe.' },
        ],
      },
    ],
    takeaway: 'Liabilities are not equal — sort by interest rate and repay the most expensive first, while watching for hidden dues like card balances, BNPL and forgotten bills.',
  },

  'l2-004': {
    id: 'l2-004',
    title: 'Net Worth',
    subtitle: 'The single number worth tracking over time',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'balance-sheet', caption: 'Net worth is the difference between the two sides — and it should trend upward.' },
      { kind: 'p', text: 'Net worth is what you would have left if you sold everything you own today and paid off everything you owe. Unlike a bank balance, it captures the effects of every decision you have made about debt, saving and ownership over years.' },
      {
        kind: 'formula',
        label: 'Net worth and its trend',
        expr: 'Net worth = Assets − Liabilities',
        note: 'Measure it quarterly. The direction of the line over years matters far more than any single value.',
      },
      {
        kind: 'table',
        caption: 'A worked example',
        headers: ['Item', 'Amount'],
        rows: [
          ['Savings and FD', '₹3,00,000'],
          ['EPF and PPF', '₹4,20,000'],
          ['Mutual funds', '₹2,50,000'],
          ['Gold', '₹1,80,000'],
          ['Car (market value)', '₹2,20,000'],
          ['Total assets', '₹13,70,000'],
          ['Home loan outstanding', '−₹9,80,000'],
          ['Car loan', '−₹1,40,000'],
          ['Credit card', '−₹35,000'],
          ['Net worth', '₹2,15,000'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Negative net worth is normal early — and fixable',
        text: 'Most people in their twenties and early thirties have negative or near-zero net worth, because education and early career years produce large debt or no assets. The measure that matters is whether it is rising. A ₹15 lakh negative net worth improving by ₹4 lakh a year is a good situation; a positive balance shrinking is a warning.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'One big asset distorts the trend',
        text: 'Buying a home can raise net worth on paper and simultaneously reduce it in practice — through loan interest, property taxes, maintenance and a huge share of your monthly income. Track net worth excluding the house as well, to see your true financial progress.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Record net worth on a fixed date each quarter.',
          'Track the change, not just the number.',
          'Celebrate the direction, not the size.',
          'If it is falling for several quarters, identify which liability grew.',
          'Add non-property net worth as a second measure.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A household has ₹15 lakh of assets and ₹18 lakh of liabilities. Its net worth is:',
        options: [
          { text: '₹3 lakh', correct: false, why: 'That is the liability minus assets, and the sign is wrong.' },
          { text: '−₹3 lakh', correct: true, why: 'Correct — 15 − 18.' },
          { text: '₹33 lakh', correct: false, why: 'That is the total, not the difference.' },
        ],
      },
      {
        q: 'Negative net worth in your twenties is:',
        options: [
          { text: 'A sign you have failed financially', correct: false, why: 'It is extremely common during study and early career years.' },
          { text: 'Common and acceptable, provided it is improving over time', correct: true, why: 'Exactly right — direction beats level.' },
          { text: 'Impossible in India', correct: false, why: 'It is very common.' },
        ],
      },
      {
        q: 'Why track net worth excluding your house?',
        options: [
          { text: 'Because property has no value', correct: false, why: 'It usually has significant value.' },
          { text: 'Because house-heavy net worth can look positive while your liquid position deteriorates', correct: true, why: 'Exactly right.' },
          { text: 'Because banks ignore property', correct: false, why: 'Banks value collateral, but your true progress is still worth measuring.' },
        ],
      },
    ],
    takeaway: 'Net worth is assets minus liabilities. Track it quarterly, focus on whether it is rising rather than how large it is, and watch out for a house masking a weakening liquid position.',
  },

  'l2-005': {
    id: 'l2-005',
    title: 'Income Sources',
    subtitle: 'One job is one source — and that is a risk',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'income-streams', caption: 'Note how much of the picture rests on a single dependable stream.' },
      { kind: 'p', text: 'An income source is any distinct stream of money arriving into your life. Counting them properly — and understanding how dependent you are on each one — is the difference between a stable household and a household one bad quarter away from trouble.' },
      {
        kind: 'table',
        caption: 'Income sources and their characteristics',
        headers: ['Source', 'Predictability', 'Scalability', 'Risks'],
        rows: [
          ['Salary', 'High until you are let go', 'Very low', 'Job loss, industry downturn'],
          ['Variable pay / bonus', 'Low', 'Low', 'Company discretion, layoffs'],
          ['Business income', 'Low to medium', 'High', 'Failure, cash flow, compliance'],
          ['Freelance / consulting', 'Low', 'Medium to high', 'Pipeline gaps, client concentration'],
          ['Rent', 'High', 'Very low', 'Vacancy, tenant, maintenance'],
          ['Interest and dividends', 'Very high', 'Low', 'Rate cuts, market falls'],
          ['Capital gains', 'Very low', 'High', 'Market timing, taxes'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Concentration of income risk',
        text: 'If 100% of your income comes from one employer, your financial independence depends on one organisation\'s decisions. Diversifying income is the closest thing to insurance: a second stream, however small, changes how much a layoff can hurt.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Not all "income" is real income',
        text: 'A ₹50,000 loan is not income. A ₹2 lakh appraisal of your house is not income. A credit limit of ₹3 lakh is definitely not income. Count only money that actually reaches your account.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'List every rupee that arrived in the last twelve months, by source.',
          'Classify each by predictability, not by amount.',
          'Identify your single biggest dependency and ask what happens if it stops.',
          'Start one small predictable stream — rent, a side retainer, or systematic investing.',
          'Recheck the mix annually as your career changes.',
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Build a year of income by source on the spreadsheet and see the concentration.' },
    ],
    quiz: [
      {
        q: 'Which of these is genuinely an income source?',
        options: [
          { text: 'An approved credit card limit', correct: false, why: 'It is borrowing capacity, not income.' },
          { text: 'A salary credited to your account', correct: true, why: 'Correct — money that actually arrives.' },
          { text: 'An increase in your house valuation', correct: false, why: 'Paper gain unless you sell.' },
        ],
      },
      {
        q: 'Why is having a second income stream valuable even if it is small?',
        options: [
          { text: 'It increases your total income automatically', correct: false, why: 'It adds some income, but the value is risk reduction.' },
          { text: 'It reduces how completely your finances depend on one employer or client', correct: true, why: 'Exactly right — it is diversification.' },
          { text: 'It reduces your tax rate', correct: false, why: 'Tax depends on total income and regime.' },
        ],
      },
      {
        q: 'Which source is most predictable over a decade?',
        options: [
          { text: 'Capital gains', correct: false, why: 'Very timing dependent.' },
          { text: 'Rent from a let-out property', correct: false, why: 'Reasonably steady but has vacancy and repair risk.' },
          { text: 'Interest from a bank deposit', correct: true, why: 'Correct — known amount at a known rate.' },
        ],
      },
    ],
    takeaway: 'Count only money that actually arrives, classify each source by predictability, and reduce your dependence on any single one — a second stream is the closest thing to income insurance.',
  },
}