import type { Chapter } from '../../types'

/** Level 1, chapters 7–12: how money moves, who creates it, and how you earn it. */
export const economy: Record<string, Chapter> = {
  'l1-007': {
    id: 'l1-007',
    title: 'How Money Moves Through The Economy',
    subtitle: 'Deposits, loans, and the circular flow of rupees',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'Your deposit is somebody else\'s loan. That is the engine.' },
      { kind: 'p', text: 'Money in a modern economy does not sit still. It moves in a loop: households deposit money in banks, banks lend it to businesses and individuals, that money is spent, and it lands in someone else\'s account as income.' },
      { kind: 'h', text: 'The circular flow' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Households earn income and either spend it or deposit it.',
          'Banks pool deposits and pay interest on them.',
          'Banks lend to businesses and households, charging a higher rate.',
          'Borrowers spend or invest, which becomes someone else\'s income.',
          'The cycle repeats, growing as banks create new deposits when they lend.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Deposits are a liability, loans are an asset',
        text: 'Your bank\'s balance sheet is simple: on one side, your deposits (money it owes you). On the other, the loans it has made (money it is owed). The gap is the bank\'s profit and its capital cushion. This one idea explains bank failures, deposit insurance limits, and why deposits are safer than the bank\'s own shares.',
      },
      {
        kind: 'scene', name: 'rbi-funnel', caption: 'Your ₹500 becomes a working-capital loan for a small business somewhere.' },
      { kind: 'h', text: 'Velocity: money used more than once' },
      {
        kind: 'p', text: 'Money that changes hands many times a year does more work than the same amount sitting in a fixed deposit. If your salary is spent, spent again, and spent again, it has "worked" three times before it returns to a bank. Economists call this velocity of circulation, and it is why small, busy transactions can power real activity.',
      },
      {
        kind: 'table',
        caption: 'Where a ₹1,000 salary ends up over a month',
        headers: ['Stage', 'Where the money sits'],
        rows: [
          ['Day 1', 'Household account'],
          ['Day 2', 'Merchant account, less the shop\'s own costs'],
          ['Day 3', 'Wholesaler or supplier account'],
          ['Day 5', 'Bank as a deposit, or spent on salaries and inputs'],
          ['Day 10', 'A new loan or purchase somewhere in the chain'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Leakages',
        text: 'Some money leaves the productive loop: it becomes savings (parked), tax (spent by government), imports (spent abroad), or loan repayments to banks. Savings are not "wasted" — but parked money generates no new activity until it is invested or lent.',
      },
    ],
    quiz: [
      {
        q: 'From a bank\'s point of view, your savings account balance is:',
        options: [
          { text: 'An asset the bank can invest', correct: false, why: 'The bank invests the loans it makes, funded by deposits.' },
          { text: 'A liability — the bank owes you this money', correct: true, why: 'Correct. Deposits are the bank\'s obligation to you.' },
          { text: 'Neither — it is simply a record', correct: false, why: 'It is a genuine liability, which is why deposit insurance matters.' },
        ],
      },
      {
        q: '"Velocity of money" refers to:',
        options: [
          { text: 'How fast money moves between hands and gets spent again', correct: true, why: 'Right — money that circulates more does more economic work.' },
          { text: 'How fast banks process transactions', correct: false, why: 'That is processing speed, not economic velocity.' },
          { text: 'The speed of inflation', correct: false, why: 'Related but not the same concept.' },
        ],
      },
      {
        q: 'Which of these is a "leakage" from the circular flow?',
        options: [
          { text: 'A person splitting a restaurant bill', correct: false, why: 'That keeps money circulating.' },
          { text: 'Money moving to imports or parked in savings', correct: true, why: 'Correct — money leaving the active loop reduces its immediate economic effect.' },
          { text: 'A shop paying its helper in cash', correct: false, why: 'That is still circulation.' },
        ],
      },
    ],
    takeaway: 'Money is a loop, not a bucket. Your deposit funds someone\'s loan, and every transaction is somebody else\'s income.',
  },

  'l1-008': {
    id: 'l1-008',
    title: 'The RBI',
    subtitle: 'India\'s central bank — the part most people get wrong',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'rbi-funnel', caption: 'The RBI\'s tools shape what banks can lend, and therefore what you can borrow.' },
      { kind: 'p', text: 'The Reserve Bank of India is India\'s central bank, nationalised in 1946 and operating under the RBI Act, 1934. It sits at the top of the Indian financial system and does four main jobs: issuing currency, regulating banks, managing the rupee, and acting as banker to the government and to banks themselves.' },
      { kind: 'h', text: 'The four jobs' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Currency issuer — it designs and releases the notes and coins you carry. It also runs the Currency Verification and Authentication System.',
          'Bank regulator — it licenses banks, sets prudential norms, and can inspect or intervene with a bank that is in trouble.',
          'Currency and rate manager — it buys and sells foreign currency, and uses interest rates and reserves to steer inflation and growth.',
          'Banker to the banks — banks keep a share of their balances with the RBI so that cheques and transfers between banks can clear.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The most misunderstood job',
        text: 'Many people believe "RBI prints money, so every note is a problem". In practice most new currency replaces worn-out notes — the total value in circulation only grows roughly in line with the economy. What the RBI actually controls is the monetary conditions: interest rates, reserves, and how easy it is to borrow.',
      },
      {
        kind: 'table',
        caption: 'RBI levers and what they affect',
        headers: ['Lever', 'What it does', 'Who feels it'],
        rows: [
          ['Repo rate', 'The rate at which banks borrow from the RBI', 'Home loan EMIs, deposits'],
          ['Reverse repo', 'Rate for banks parking money with the RBI', 'Savings and FD rates'],
          ['CRR / SLR', 'How much banks must hold with the RBI or in gold', 'Loan availability'],
          ['Open market operations', 'Buying or selling government securities', 'Bond yields, market liquidity'],
          ['Foreign reserves', 'Dollars and other currencies held centrally', 'The rupee\'s exchange rate'],
        ],
      },
      {
        kind: 'example',
        title: 'What actually happened to your EMI',
        text: 'When the RBI raised the repo rate to fight inflation, home loan EMIs linked to the external benchmark rose. But fixed-rate loans stayed the same, and new FD and savings rates climbed too. The lesson: the RBI\'s rate decisions reach your loan, your deposit, and your savings rate — often in the same month.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Deposit insurance has a ceiling',
        text: 'The DICGC insures bank deposits up to ₹5 lakh per depositor per bank. That protects your emergency fund, but it means large balances should not sit in a single bank. Spread across institutions, keep it simple — but know the ceiling.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'RBI is not the same as the government',
        text: 'The RBI is a statutory body that answers to the Finance Ministry but operates with a degree of independence. Monetary policy decisions are made by a six-member Monetary Policy Committee, not by a single individual.',
      },
    ],
    quiz: [
      {
        q: 'The RBI\'s repo rate is best described as:',
        options: [
          { text: 'The interest rate banks pay when they borrow from the RBI', correct: true, why: 'Correct. It is the anchor of the Indian interest-rate system.' },
          { text: 'The interest rate you earn on a savings account', correct: false, why: 'Savings rates are set by banks, informed by the repo rate.' },
          { text: 'The rate at which the government borrows from the public', correct: false, why: 'That is closer to government bond yields, not the repo rate.' },
        ],
      },
      {
        q: 'DICGC deposit insurance in India covers up to:',
        options: [
          { text: '₹1 lakh per bank', correct: false, why: 'The limit was raised years ago.' },
          { text: '₹5 lakh per depositor per bank', correct: true, why: 'Correct — ₹5 lakh per depositor, per bank.' },
          { text: 'Unlimited, because the RBI backs all banks', correct: false, why: 'There is a ceiling, which is why large sums should be spread.' },
        ],
      },
      {
        q: 'Who decides Indian monetary policy?',
        options: [
          { text: 'The Prime Minister', correct: false, why: 'Not the PM.' },
          { text: 'The Finance Minister alone', correct: false, why: 'The Finance Ministry has a seat, but does not decide alone.' },
          { text: 'The Monetary Policy Committee', correct: true, why: 'Correct — a six-member MPC chaired by the RBI Governor.' },
        ],
      },
    ],
    takeaway: 'The RBI issues currency, regulates banks and steers rates. Its decisions show up in your EMIs and deposit rates — which is why they matter to you.',
  },

  'l1-009': {
    id: 'l1-009',
    title: 'Banks',
    subtitle: 'What a bank really does with your money',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'bank-pyramid', caption: 'The small deposits at the top are the least profitable — and the most important for the bank\'s survival.' },
      { kind: 'p', text: 'A bank takes deposits, promises to return them on demand or at a set date, and lends the money out at a higher rate. The difference between the interest it pays you and the interest it charges borrowers is its profit. Depositor protection and profitability sit on opposite sides of the same balance sheet.' },
      { kind: 'h', text: 'Types you will actually use' },
      {
        kind: 'table',
        caption: 'Indian banking institutions',
        headers: ['Type', 'Examples', 'What they do'],
        rows: [
          ['Commercial bank', 'HDFC, SBI, ICICI, Axis', 'Deposits, loans, cards, UPI'],
          ['Small finance bank', 'AU, Jana, Equitas, Ujjivan', 'Small-ticket loans to underserved customers'],
          ['Co-operative bank', 'State co-op banks, urban co-ops', 'Member-based banking, local lending'],
          ['Payments bank', 'Airtel, Paytm, India Post', 'Deposits and remittances, limited lending'],
          ['NBFC', 'Bajaj Finance, HDFC Capital', 'Loans without deposits, higher risk'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why deposits are safer than shares',
        text: 'A bank\'s shareholders absorb losses first. Deposit holders are paid before shareholders, and are protected by DICGC insurance up to ₹5 lakh. This priority is exactly why a bank can fail while your savings account is still safe.',
      },
      {
        kind: 'example',
        title: 'Read a bank the way a regulator would',
        text: 'Look at three things: capital adequacy ratio (CASA — cheap deposits versus costly loans), asset quality (how much lending is overdue, called NPA), and liquidity (can it pay you tomorrow?). A headline "highest interest rate" advertisement tells you nothing about any of these.',
      },
      {
        kind: 'table',
        caption: 'Rate arbitrage — the bank\'s business model',
        headers: ['Bank', 'You'],
        rows: [
          ['Takes your deposit at ~3.5%', 'You receive interest on your savings'],
          ['Lends at ~9–14%', 'Borrower receives a loan'],
          ['Keeps the difference', 'You earn the deposit rate'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Switching is easy and often worth it',
        text: 'Rates on savings accounts, FDs and even loans differ meaningfully between banks for the same product. A ₹5 lakh FD earning 6.5% instead of 6% is ₹2,500 a year for nothing but a little effort. But switch for yield only after checking DICGC cover, service quality and digital reliability.',
      },
    ],
    quiz: [
      {
        q: 'A bank earns money mainly by:',
        options: [
          { text: 'Charging customers a flat account fee', correct: false, why: 'Fees are secondary; the core business is lending.' },
          { text: 'Paying less interest on deposits than it charges on loans', correct: true, why: 'Exactly — that spread is the bank\'s main revenue.' },
          { text: 'Selling currency notes to the public', correct: false, why: 'The RBI issues currency, not commercial banks.' },
        ],
      },
      {
        q: 'A payments bank differs from a commercial bank mainly because it:',
        options: [
          { text: 'Cannot accept deposits', correct: false, why: 'They do accept deposits, up to ₹2 lakh per customer.' },
          { text: 'Can offer deposits and remittances but has restricted lending', correct: true, why: 'Correct — that restriction is the defining feature.' },
          { text: 'Is owned by the government', correct: false, why: 'Payments banks are private entities.' },
        ],
      },
      {
        q: 'Why are deposits ranked as safer than a bank\'s shares?',
        options: [
          { text: 'Deposits pay higher returns', correct: false, why: 'Deposit rates are usually lower than equity returns.' },
          { text: 'Deposit holders are paid before shareholders and are insured up to ₹5 lakh', correct: true, why: 'Correct — the priority claim and the insurance are what matter.' },
          { text: 'Shares are illegal in India', correct: false, why: 'Shares are legal and common.' },
        ],
      },
    ],
    takeaway: 'Banks take your deposits and lend them out at a higher rate — that spread is their profit. Deposits sit ahead of shareholders in a crisis, which is why savings are the safe place to start.',
  },

  'l1-010': {
    id: 'l1-010',
    title: 'Government And Businesses',
    subtitle: 'Where your tax goes, and how firms turn revenue into profit',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'Government collects and spends; businesses earn, pay and reinvest — money circulates between them.' },
      { kind: 'p', text: 'Two large players in the money system are government and business. Government collects taxes and spends them on infrastructure, services and transfers. Businesses sell goods and services, pay wages and taxes, and reinvest part of what they earn.' },
      { kind: 'h', text: 'What your taxes fund' },
      {
        kind: 'table',
        caption: 'The main taxes an Indian household indirectly encounters',
        headers: ['Tax', 'Level', 'What you notice'],
        rows: [
          ['Goods and Services Tax (GST)', 'On goods and services', 'Prices in every shop and online order'],
          ['Income tax', 'On individuals and firms', 'TDS deducted from salary and interest'],
          ['Toll and service taxes', 'On roads, fuel, telecom', 'Petrol price, highway tolls'],
          ['Property and stamp duty', 'On transactions', 'Cost of buying a home'],
          ['Customs duty', 'On imports', 'Prices of electronics and vehicles'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Tax is a transfer, not a gift',
        text: 'When you pay ₹1 in GST, roughly a fraction goes to the central government, some to the state, and the rest is compensation for input credit already paid by a supplier. Tax is best understood as a transfer between private pockets and public budgets, not as free money handed out.',
      },
      { kind: 'h', text: 'How a business works' },
      {
        kind: 'formula',
        label: 'The basic business identity',
        expr: 'Profit = Revenue − Cost of goods sold − Operating expenses',
        note: 'A business with ₹1 crore of revenue and ₹95 lakh of costs has not made ₹1 crore. Revenue is a headline; profit is what can be saved, invested or distributed.',
      },
      {
        kind: 'example',
        title: 'Why a shop can be busy and still struggle',
        text: 'A café takes ₹3 lakh a month in sales. Rent, salaries, electricity and packaging take ₹2.6 lakh. Only ₹40,000 is left — 13% of revenue. A ₹4 lakh monthly profit sounds impossible until you see that every extra discount and every extra delivery comes out of that thin slice.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'What this means for your career',
        text: 'Understanding profit rather than revenue is the difference between negotiating a higher salary and negotiating a higher *salary plus benefits*. A ₹2 lakh raise can be worth less than ₹50,000 of extra ESIC, PF and tax exemptions if you model it carelessly.',
      },
    ],
    quiz: [
      {
        q: 'For a business, the clearest sign of health is:',
        options: [
          { text: 'Total revenue in the year', correct: false, why: 'Revenue can grow while profit shrinks.' },
          { text: 'Profit after all costs — what remains to save or reinvest', correct: true, why: 'Correct — profit is the number that belongs to the owners.' },
          { text: 'Number of employees', correct: false, why: 'Headcount is a cost, not a measure of health.' },
        ],
      },
      {
        q: 'When you see GST included in a shop\'s price, it means:',
        options: [
          { text: 'The government is giving you free money', correct: false, why: 'That is not how GST works.' },
          { text: 'You are paying a tax on the transaction, some of which may already have been paid upstream', correct: true, why: 'Correct — GST is collected and passed on through the supply chain.' },
          { text: 'The shopkeeper made a profit of that amount', correct: false, why: 'Collected tax is not revenue for the shop.' },
        ],
      },
      {
        q: 'Tax receipts like tolls and fuel duty are best understood as:',
        options: [
          { text: 'A way for government to fund public spending', correct: true, why: 'Correct — they fund infrastructure and services.' },
          { text: 'Extra profit for the government beyond its budget', correct: false, why: 'Receipts usually fund budgeted spending rather than adding to it as extra profit.' },
          { text: 'A punishment for using goods', correct: false, why: 'They fund services and infrastructure you use.' },
        ],
      },
    ],
    takeaway: 'Government taxes fund public services and transfers; businesses turn revenue into profit. Understanding both sides helps you read prices, salaries and taxes with clear eyes.',
  },

  'l1-011': {
    id: 'l1-011',
    title: 'Earning Money',
    subtitle: 'The one input everything else depends on',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'income-streams', caption: 'Effort and return are not the same thing. Notice the low-effort streams on the right.' },
      { kind: 'p', text: 'Earning money is the only way to increase the input. Everything else — budgeting, saving, investing — can only decide what happens to what you earn. That is why income growth almost always outranks expense tinkering.' },
      { kind: 'h', text: 'The four ways people earn' },
      {
        kind: 'table',
        caption: 'Income types',
        headers: ['Type', 'How it works', 'Main risk'],
        rows: [
          ['Wage or salary', 'Fixed pay for your time and skills', 'Your time is capped'],
          ['Business income', 'Profit from a business you own', 'Business can fail'],
          ['Freelance / contract', 'Paid per project or per hour', 'Income is irregular'],
          ['Investment income', 'Interest, rent, dividends, capital gains', 'Market-dependent, not guaranteed'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why earning more beats saving harder',
        text: 'Cutting ₹5,000 of spending a month saves ₹60,000 a year. A 20% raise on ₹8 lakh adds ₹1.6 lakh a year. Most people never attempt the second option because it feels harder — but it is usually worth more, and compounding makes the gap larger every year.',
      },
      {
        kind: 'formula',
        label: 'Hourly rate of your income',
        expr: 'Take-home per month ÷ (working days × hours per day)',
        note: 'A ₹60,000 salary over 22 days and 8 hours is about ₹340 an hour before expenses. That number makes every spending decision concrete.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Three reliable ways to raise income',
        text: 'Get better at a skill that is already in demand. Move to a role or industry that pays more. Add a second income stream that uses skills you already have. All three are more reliable than hoping your expenses stay flat while inflation eats your savings.',
      },
      { kind: 'sim', name: 'networth', caption: 'See how a single large asset, like a house, changes your net worth without changing your monthly income.' },
    ],
    quiz: [
      {
        q: 'Why is increasing income often more powerful than cutting expenses?',
        options: [
          { text: 'Expenses cannot be cut at all', correct: false, why: 'They can be cut, usually with effort.' },
          { text: 'A raise or promotion adds the same amount every month, year after year, without ongoing sacrifice', correct: true, why: 'Correct — recurring income growth compounds like an investment.' },
          { text: 'Because income rises while expenses always rise too', correct: false, why: 'Expenses usually rise with lifestyle, which is the trap.' },
        ],
      },
      {
        q: 'Which of these is the most reliable way to raise your income?',
        options: [
          { text: 'Starting a speculative trading business', correct: false, why: 'High risk, low reliability.' },
          { text: 'Developing a skill that is already in demand in your industry', correct: true, why: 'Correct — skills are the most portable and reliable income lever.' },
          { text: 'Waiting for a lottery win', correct: false, why: 'Not a strategy.' },
        ],
      },
      {
        q: 'Freelance income differs from salary income because it is:',
        options: [
          { text: 'Always taxed at a higher rate', correct: false, why: 'Tax rates depend on income and regime, not on employment type.' },
          { text: 'Irregular and without guaranteed future volume', correct: true, why: 'Correct — inconsistency is the defining risk of freelancing.' },
          { text: 'Not real income', correct: false, why: 'It is real income, just less predictable.' },
        ],
      },
    ],
    takeaway: 'Income is the only input. Spend your energy where it compounds — on skills and earning power — not just on cutting expenses.',
  },

  'l1-012': {
    id: 'l1-012',
    title: 'Salary',
    subtitle: 'CTC, gross, take-home — untangling the pay slip',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Salary is the most common income in India, and also the most misunderstood. The number in your offer letter, the number on your slip, and the number that reaches your bank are three different figures — often by a very large gap.' },
      { kind: 'formula',
        label: 'The three figures',
        expr: 'CTC (cost to company) = Gross salary + employer PF + gratuity + insurance + bonuses',
        note: 'CTC is what the company spends. You never receive it.',
      },
      {
        kind: 'table',
        caption: 'A worked example — CTC ₹12,00,000 per year',
        headers: ['Component', 'Annual', 'Monthly'],
        rows: [
          ['Basic salary', '₹5,00,000', '₹41,667'],
          ['HRA (exempt portion)', '₹2,00,000', '₹16,667'],
          ['Special allowance', '₹1,00,000', '₹8,333'],
          ['Employer PF (on ₹15,000 basic)', '₹19,565', '—'],
          ['Gratuity provision', '₹41,667', '—'],
          ['Insurance', '₹15,000', '—'],
          ['CTC total', '₹8,76,232', '₹73,019'],
          ['Less: PF (employee), TDS, professional tax', '~₹1,20,000', '—'],
          ['Approx. take-home', '~₹7,56,232', '~₹63,000'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Compare offers on take-home',
        text: 'Two offers of ₹15 lakh CTC can differ by ₹1.5 lakh a year in what reaches your account, depending on structure. Always ask for the *break-up*, not just the CTC. Also remember: a higher gross with an expensive house loan is not actually a raise.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The annual-PF trap',
        text: 'Your employee PF contribution is 12% of your basic salary, and it does not vanish — it goes into your own EPF account and is largely yours after vesting. But cash in hand now is worth more than EPF locked for decades. Know the number so the choice is deliberate.',
      },
      {
        kind: 'example',
        title: 'Negotiating with real numbers',
        text: 'Asking for "₹2 lakh more" often means ₹2 lakh CTC, which might be ₹1.6 lakh in hand. Asking instead for ₹50,000 more in basic salary can yield more take-home per rupee, because basic drives PF and gratuity. This is a concrete, checkable move rather than a vague request.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'CTC', meaning: 'Total cost the company incurs for you — never reaches your account.' },
          { term: 'Gross salary', meaning: 'Salary before any deductions.' },
          { term: 'Net / take-home', meaning: 'What is actually credited to your bank.' },
          { term: 'Gratuity', meaning: 'Lump sum from your employer after 5+ years, funded from your CTC.' },
          { term: 'LTA', meaning: 'Leave travel allowance — a taxable perquisite.' },
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Build the same comparison on a spreadsheet so the difference is visible rather than theoretical.' },
    ],
    quiz: [
      {
        q: 'CTC differs from your take-home salary mainly because CTC:',
        options: [
          { text: 'Is calculated before tax but after all benefits', correct: false, why: 'That is closer to gross salary.' },
          { text: 'Includes employer-side costs like PF, gratuity and insurance that never reach your account', correct: true, why: 'Correct — those are company costs, not your income.' },
          { text: 'Is always higher than gross', correct: false, why: 'CTC is higher, but "always" hides the reason.' },
        ],
      },
      {
        q: 'Your employee PF contribution of 12% of basic salary is:',
        options: [
          { text: 'Money taken from you and lost forever', correct: false, why: 'It accumulates in your own EPF account.' },
          { text: 'Deducted now and largely available to you later after vesting', correct: true, why: 'Correct — it is deferred, not destroyed, though you give up liquidity now.' },
          { text: 'A tax on your salary', correct: false, why: 'It is a retirement contribution, not a tax.' },
        ],
      },
      {
        q: 'When comparing two job offers, the most useful question is:',
        options: [
          { text: 'Which has the higher CTC?', correct: false, why: 'CTC can differ meaningfully from take-home.' },
          { text: 'What is the monthly take-home after deductions, and what does the CTC break-up include?', correct: true, why: 'Exactly right — compare real cash and understand the structure.' },
          { text: 'Which company name is more famous?', correct: false, why: 'Brand does not tell you about cash flow.' },
        ],
      },
    ],
    takeaway: 'CTC is what your employer spends, not what you receive. Always compare offers on take-home pay and read the break-up before you sign.',
  },
}