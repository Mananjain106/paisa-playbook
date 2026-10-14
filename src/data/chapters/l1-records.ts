import type { Chapter } from '../../types'

/** Level 1, chapters 45–50: records, language and habits. */
export const records: Record<string, Chapter> = {
  'l1-045': {
    id: 'l1-045',
    title: 'IMPS',
    subtitle: 'Instant transfers, 24×7',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'Immediate Payment Service is an instant, 24×7 inter-bank transfer system in India. It was launched in 2010, years before UPI, and it remains useful for transfers where the recipient has a bank account but no UPI ID.' },
      {
        kind: 'table',
        caption: 'The four rails side by side',
        headers: ['Rail', 'Minimum', 'Settlement', 'Best for'],
        rows: [
          ['UPI', '₹0.01', 'Instant', 'Everyday'],
          ['IMPS', '₹1', 'Instant', 'Bank account to bank account'],
          ['NEFT', '₹1', 'Batch windows', 'Salary, rent'],
          ['RTGS', '₹2,00,000', 'Gross, near real time', 'Large value'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'UPI won the everyday battle',
        text: 'IMPS was technically impressive but unfamiliar to ordinary users, so it saw low adoption. UPI won because it was bundled into apps people already had, used a simple PIN, and became the default QR payment. Understanding IMPS still matters for bank-to-bank transfers and as a fallback when UPI is unavailable.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'IMPS limit awareness',
        text: 'IMPS has per-transaction and daily limits that vary by bank — commonly ₹1 lakh per transaction and ₹5 lakh a day. Transfers beyond these must be split or routed through RTGS or a branch. Know your bank\'s limit before a large payment fails.',
      },{ kind: 'scene', name: 'payment-rail', caption: 'Compare the four rails and pick the right one for a given transaction.' },
    ],
    quiz: [
      {
        q: 'IMPS provides:',
        options: [
          { text: 'Instant 24×7 bank-to-bank transfers', correct: true, why: 'Correct.' },
          { text: 'Batch-settled transfers twice a day', correct: false, why: 'That describes NEFT.' },
          { text: 'Only card payments', correct: false, why: 'It is a bank transfer system.' },
        ],
      },
      {
        q: 'UPI became far more widely used than IMPS mainly because:',
        options: [
          { text: 'IMPS charged high fees', correct: false, why: 'IMPS was free or cheap.' },
          { text: 'It was simpler to access and bundled into apps people already used', correct: true, why: 'Exactly — adoption follows convenience.' },
          { text: 'IMPS was restricted to certain banks', correct: false, why: 'It was available across banks.' },
        ],
      },
      {
        q: 'Why know your IMPS daily limit?',
        options: [
          { text: 'To calculate interest correctly', correct: false, why: 'Unrelated.' },
          { text: 'Because a transfer above the limit will fail and must be routed or split differently', correct: true, why: 'Correct — avoid a failed payment.' },
          { text: 'To claim a higher insurance limit', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'IMPS is instant and 24×7, still useful for bank-to-bank transfers and as a fallback. Know your bank\'s daily limit before large transfers.',
  },

  'l1-046': {
    id: 'l1-046',
    title: 'Bank Statements',
    subtitle: 'Your primary financial document',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'A bank statement is the record of every transaction in an account over a period. It is the closest thing most people have to an audit trail, and it is the first document anyone — including you, a lender, or a fraud investigator — will ask for.' },
      {
        kind: 'table',
        caption: 'What to look for in a statement',
        headers: ['Field', 'Why it matters'],
        rows: [
          ['Date and value date', 'When the transaction happened vs when it cleared'],
          ['Description / narration', 'Usually sparse — payee apps, ATM codes'],
          ['Debit and credit columns', 'The actual direction and amount'],
          ['Balance', 'Running balance; big jumps often reveal errors'],
          ['Charges and fees', 'Small entries that add up silently'],
          ['UPI / IMPS reference', 'Use these to trace a specific payment'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The monthly 15-minute review',
        text: 'Download the statement once a month and answer four questions: Does the total match my expectation? Are there any unfamiliar transactions? Is the closing balance what I think? Are charges creeping up? This single habit catches most fraud and most leaks.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Unfamiliar small debits',
        text: 'Fraudsters often test an account with a small debit first. If you see a ₹1 or ₹10 debit you do not recognise, report it to your bank immediately rather than waiting — repeated small charges are an early warning that a card or UPI mandate has been compromised.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Download statements as PDF and keep them for at least 3 years — needed for tax and loan purposes.',
          'Store them in a structured folder or cloud drive, named by month.',
          'Reconcile the closing balance with your own record monthly.',
          'Raise a dispute with your bank in writing, keeping the reference number.',
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Turn a month of transactions into a categorised sheet with SUM and SUMIF.' },
    ],
    quiz: [
      {
        q: 'Why review your bank statement monthly even when the balance looks fine?',
        options: [
          { text: 'Because banks require you to', correct: false, why: 'No such requirement exists.' },
          { text: 'Because small unfamiliar debits and creeping charges appear before a balance is visibly wrong', correct: true, why: 'Exactly right.' },
          { text: 'To improve your credit score', correct: false, why: 'Statement review does not affect score.' },
        ],
      },
      {
        q: 'You see a ₹10 debit you do not recognise. The best response is to:',
        options: [
          { text: 'Ignore it, since it is too small to matter', correct: false, why: 'Small test debits often precede larger ones.' },
          { text: 'Check the transaction detail and report it to your bank promptly', correct: true, why: 'Correct — investigate and report.' },
          { text: 'Cancel your account immediately', correct: false, why: 'Disproportionate for a single small entry.' },
        ],
      },
      {
        q: 'Value date differs from transaction date because:',
        options: [
          { text: 'Banks sometimes change dates randomly', correct: false, why: 'They are not arbitrary.' },
          { text: 'The transaction date is when it was initiated, the value date is when funds actually become available', correct: true, why: 'Correct — particularly relevant for cheques.' },
          { text: 'Value date applies only to FDs', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Your statement is your financial audit trail. Review it monthly for unfamiliar debits, fees and surprises — it catches fraud and leaks early.',
  },

  'l1-047': {
    id: 'l1-047',
    title: 'Receipts And Financial Records',
    subtitle: 'Proof that turns a claim into a fact',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'A receipt is your evidence that a transaction happened. Records are the organised collection of those receipts. Without them, a legitimate expense is an unprovable claim — for a tax deduction, a warranty claim, a rental dispute, or simply your own monthly review.' },
      {
        kind: 'table',
        caption: 'Records worth keeping, and why',
        headers: ['Document', 'Kept for', 'Why it matters'],
        rows: [
          ['Rent receipt / agreement', 'As long as you live there', 'Proof of address, disputes'],
          ['Medical invoices and prescriptions', '3–8 years', 'Insurance claims, tax'],
          ['Insurance policy documents', 'Life of policy + claim period', 'Claim settlement'],
          ['Warranty and service invoices', 'Warranty period + 1 year', 'Free repairs'],
          ['Donation receipts (80G)', 'Tax filing', 'Deduction eligibility'],
          ['Investment purchase statements', 'Indefinitely', 'Cost basis for capital gains'],
          ['Bank statements', '3–8 years', 'Reconciliation, loan and tax proof'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Digital receipts are not automatically safe',
        text: 'Screenshots are easy to edit and easy to lose with a phone reset. Store PDFs in cloud storage, name files with a date, and keep at least one offline copy of anything tax-related. A record you cannot produce when asked is not a record.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Donation receipts are frequently faked',
        text: 'Fake 80G receipts are a common way to claim deductions that do not exist. A genuine receipt comes from the registered institution, contains its PAN and 80G registration number, and can be verified against the income tax portal. Never accept one without checking.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Photograph every bill the day you receive it.',
          'File by month and category, not in one endless pile.',
          'Photograph warranty cards and serial numbers with the invoice.',
          'Keep originals for high-value items, digital copies for the rest.',
          'Do a filing review once a quarter so it does not become a backlog.',
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Build a simple expense record in the spreadsheet so every entry has a category and a reason.' },
    ],
    quiz: [
      {
        q: 'A rent receipt is most important for:',
        options: [
          { text: 'Proving where you lived, and resolving rental disputes', correct: true, why: 'Exactly right.' },
          { text: 'Increasing your bank balance', correct: false, why: 'Unrelated.' },
          { text: 'Qualifying you for a loan automatically', correct: false, why: 'It may support an application but is not automatic.' },
        ],
      },
      {
        q: 'Why store receipts as PDFs in cloud storage rather than phone screenshots?',
        options: [
          { text: 'PDFs are smaller files', correct: false, why: 'Often the opposite.' },
          { text: 'Screenshots are easily lost in a device reset and can be edited without trace', correct: true, why: 'Correct — durability and integrity.' },
          { text: 'Banks reject screenshots', correct: false, why: 'Many accept screenshots.' },
        ],
      },
      {
        q: 'A donation receipt should be verified by checking:',
        options: [
          { text: 'The donor\'s PAN', correct: false, why: 'The institution\'s details matter.' },
          { text: 'The institution\'s name, PAN and 80G registration number against official records', correct: true, why: 'Exactly right — verification against official sources.' },
          { text: 'Whether the amount is above ₹500', correct: false, why: 'Amount alone proves nothing.' },
        ],
      },
    ],
    takeaway: 'A receipt you cannot produce when asked is not a record. Digitise, file by month and category, and verify donation receipts against official 80G records.',
  },

  'l1-048': {
    id: 'l1-048',
    title: 'Basic Financial Vocabulary',
    subtitle: 'The words that make money conversations possible',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'Learn the terms and the flow of money through the system becomes readable.' },
      { kind: 'p', text: 'Financial jargon is often the biggest barrier to making good decisions — not because the concepts are difficult, but because unclear words make it easy to be persuaded of things you should question. Learning the vocabulary is a genuine financial skill.' },
      { kind: 'h', text: 'Terms that come up constantly' },
      {
        kind: 'terms',
        items: [
          { term: 'Principal', meaning: 'The original amount borrowed or invested, before interest.' },
          { term: 'EMI', meaning: 'Equated Monthly Instalment — the fixed monthly loan payment covering principal and interest.' },
          { term: 'Liquidity', meaning: 'How quickly an asset can be turned into cash without losing value.' },
          { term: 'Net worth', meaning: 'Total assets minus total liabilities.' },
          { term: 'Credit score / CIBIL', meaning: 'A summary of your repayment history, used to price your future borrowing.' },
          { term: 'APR', meaning: 'Annual Percentage Rate — the true yearly cost of borrowing including fees.' },
          { term: 'Collateral', meaning: 'An asset pledged to secure a loan; the lender can sell it if you default.' },
          { term: 'Diversification', meaning: 'Spreading money across different assets so no single failure hurts you badly.' },
          { term: 'Compounding', meaning: 'Earning returns on returns, so growth accelerates over time.' },
          { term: 'Inflation', meaning: 'The general rise in prices, which reduces what money buys over time.' },
          { term: 'TDS', meaning: 'Tax Deducted at Source — tax taken by the payer before you receive the amount.' },
          { term: 'NPA', meaning: 'Non-Performing Asset — a loan where the borrower has stopped paying.' },
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The tell of a bad financial offer',
        text: 'If a product cannot be explained in one sentence you understand, the person explaining it probably does not understand it either. Confusing jargon around a simple product — "guaranteed, assured, high-return, multi-benefit" — is the single most reliable warning sign.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'APR versus interest rate',
        text: 'A loan can advertise a low interest rate and still be expensive once processing fees, insurance and penalties are added. Always ask for the APR or the total amount repayable over the full term. Comparing two offers on headline rate alone is the most common financial mistake in borrowing.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Build your own reference',
        text: 'Keep a note of these terms with a one-line plain-English meaning. When a product uses a term you cannot define, that is your cue to slow down, not to ask a friend to explain it later.',
        },
    ],
    quiz: [
      {
        q: 'APR differs from the advertised interest rate because APR:',
        options: [
          { text: 'Is always higher because banks profit', correct: false, why: 'APR is meant to be the honest all-in cost, which can be lower if fees are low.' },
          { text: 'Includes fees and charges, giving the true yearly cost of borrowing', correct: true, why: 'Exactly right.' },
          { text: 'Is only used for credit cards', correct: false, why: 'It applies to loans too.' },
        ],
      },
      {
        q: 'What does "collateral" mean in a loan agreement?',
        options: [
          { text: 'A fee charged for early repayment', correct: false, why: 'That is a prepayment penalty.' },
          { text: 'An asset pledged to the lender, which can be sold if you fail to repay', correct: true, why: 'Correct.' },
          { text: 'The interest rate charged monthly', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'In a financial conversation, heavy jargon is best treated as:',
        options: [
          { text: 'Proof the product is sophisticated', correct: false, why: 'Jargon is often used to obscure.' },
          { text: 'A signal to slow down, because products that matter are explainable in plain terms', correct: true, why: 'Exactly right.' },
          { text: 'Evidence that the offer is regulated', correct: false, why: 'Regulation does not require complexity.' },
        ],
      },
    ],
    takeaway: 'Financial vocabulary is a real skill. Learn the terms, and treat jargon on a simple product as a warning sign rather than a sign of sophistication.',
  },

  'l1-049': {
    id: 'l1-049',
    title: 'Financial Habits',
    subtitle: 'Small, automatic and repeatable beats willpower',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Habits determine financial outcomes far more than knowledge does. People who understand compound interest but never automate their savings stay broke; people who automate a modest amount build wealth without thinking about it. The goal is to make the right action the easy one.' },
      {
        kind: 'table',
        caption: 'How money habits actually form',
        headers: ['Cue', 'Routine', 'Result'],
        rows: [
          ['Salary credited', 'Auto-transfer 20% to savings', 'Money saved before it is spent'],
          ['Weekly, Sunday evening', 'Review the expense tracker', 'Leaks found early'],
          ['Before any purchase above ₹2,000', 'Wait 24 hours', 'Impulse reduced'],
          ['Monthly statement day', 'Reconcile and check charges', 'Fraud and drift caught'],
          ['January each year', 'Review goals, insurance, net worth', 'Plan stays current'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Make the correct choice frictionless',
        text: 'You cannot rely on willpower at 11pm on a shopping app. Move money on payday automatically, remove saved cards from shopping apps, and keep the emergency fund at a different bank. Structure beats determination every time.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Start with the two that matter most',
        text: 'Automate a saving transfer, and set a weekly review of spending. These two habits alone prevent the majority of financial problems. Everything else — goal tracking, investing, tax planning — becomes manageable once those two run.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Automate: savings, insurance premium, investments — on payday.',
          'Weekly: 15 minutes reviewing the expense tracker.',
          'Monthly: reconcile the statement, check for unfamiliar transactions.',
          'Quarterly: check goal progress against the monthly requirement.',
          'Annually: full financial audit — net worth, insurance, goals, tax.',
        ],
      },
      { kind: 'sim', name: 'rupee10', caption: 'Practise the habit of making deliberate choices — a seven-day exercise with only ₹10.' },
    ],
    quiz: [
      {
        q: 'Why is automating savings more effective than saving whatever remains?',
        options: [
          { text: 'Automated transfers earn higher interest', correct: false, why: 'Rates are the same.' },
          { text: 'Because whatever remains is usually nothing, and automation removes both the decision and the temptation', correct: true, why: 'Exactly right.' },
          { text: 'Banks require automatic transfers', correct: false, why: 'They are optional but strongly recommended.' },
        ],
      },
      {
        q: 'The most effective way to resist impulse spending late at night is to:',
        options: [
          { text: 'Rely on willpower', correct: false, why: 'Willpower is unreliable when tired.' },
          { text: 'Change your environment — remove saved cards, keep savings elsewhere — so the good choice requires less effort', correct: true, why: 'Exactly right — structure beats determination.' },
          { text: 'Set a small spending limit for the day', correct: false, why: 'Helpful but weaker than removing the option entirely.' },
        ],
      },
      {
        q: 'A weekly 15-minute review is most valuable because it:',
        options: [
          { text: 'Catches small leaks before they become large problems', correct: true, why: 'Exactly right — small amounts, high frequency.' },
          { text: 'Guarantees a good month financially', correct: false, why: 'It helps, but nothing is guaranteed.' },
          { text: 'Replaces the need for an annual review', correct: false, why: 'Cadence at different scales is complementary.' },
        ],
      },
    ],
    takeaway: 'Habits beat willpower. Automate the correct actions on payday, review spending weekly, and set up your environment so the right choice is the easy one.',
  },

  'l1-050': {
    id: 'l1-050',
    title: 'Personal Responsibility With Money',
    subtitle: 'Nobody else is coming',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'opportunity-fork', caption: 'Responsibility is choosing the path deliberately, having seen the alternative.' },
      { kind: 'p', text: 'Financial responsibility means owning the outcomes of your money decisions — including the ones that went badly. It is not about blame or guilt. It is the accurate belief that your financial future is shaped by your own choices, which is precisely why those choices matter.' },
      {
        kind: 'table',
        caption: 'Responsibility versus excuse',
        headers: ['Excuse', 'The realistic view'],
        rows: [
          ['"I have a low salary"', 'Still a real constraint — but salary is one lever among many, and constraints focus action.'],
          ['"My family spends too much"', 'You control your own household spending and can discuss the rest.'],
          ['"The market went down"', 'Markets fall; asset allocation and horizon are what you control.'],
          ['"I was told to invest"', 'Advice does not transfer responsibility for your own money.'],
          ['"Inflation is out of my control"', 'Inflation is out of your control; how you respond is not.'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The difference that actually matters',
        text: 'External constraints are real and should not be minimised. The productive question is not "why did this happen to me" but "given that this is my situation, what is the best next decision I can make?" That shift turns a victim narrative into an operating plan.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Responsibility is not self-blame',
        text: 'Taking responsibility means understanding what you control and acting on it. It does not mean pretending bad outcomes were your fault, or refusing help. Someone who was laid off in a downturn did not cause the downturn — but they are the one who decides what happens next.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Know your full numbers: income, fixed costs, net worth, total debt.',
          'Check anything you sign, including small print on financial products.',
          'Do not invest money you cannot afford to lose, or borrow to fund a want.',
          'Ask for help early — a friend, a family member, or a qualified adviser — before a problem compounds.',
          'Do not compare your chapter 1 with someone else\'s chapter 20.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Start where you actually are',
        text: 'Responsibility in practice means knowing your real numbers today, then improving one of them this month. Income up, a costly fixed cost down, one small debt cleared, or one habit added. That is how it works — not as a single dramatic decision.',
      },
    ],
    quiz: [
      {
        q: 'Taking financial responsibility primarily means:',
        options: [
          { text: 'Blaming yourself for everything that goes wrong', correct: false, why: 'That is guilt, not responsibility.' },
          { text: 'Understanding what you control and acting on it, whatever the circumstances', correct: true, why: 'Exactly right.' },
          { text: 'Refusing help from anyone else', correct: false, why: 'Seeking help is responsible too.' },
        ],
      },
      {
        q: 'A person loses their job in a downturn. The most useful response is to:',
        options: [
          { text: 'Conclude that the economy is against them and wait', correct: false, why: 'A passive stance loses options.' },
          { text: 'Assess their position honestly and act on the levers they control — expenses, emergency fund, job search', correct: true, why: 'Exactly right.' },
          { text: 'Assume the loss was entirely their own fault', correct: false, why: 'Unfair and unhelpful.' },
        ],
      },
      {
        q: 'Why comparing your finances to someone else is unproductive?',
        options: [
          { text: 'Other people\'s finances are usually hidden and misleading', correct: true, why: 'Correct — appearance rarely matches reality.' },
          { text: 'Comparison always leads to saving more', correct: false, why: 'It often leads to spending to keep up instead.' },
          { text: 'Only your accountant\'s opinion matters', correct: false, why: 'Not true.' },
        ],
      },
    ],
    takeaway: 'Responsibility means knowing what you control and acting on it — within real constraints, without self-blame, and by improving one number at a time.',
  },
}