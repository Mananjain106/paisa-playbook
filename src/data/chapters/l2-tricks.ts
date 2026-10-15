import type { Chapter } from '../../types'

/** Level 2, chapters 75–81: the practical habits that hold it all together. */
export const tricks: Record<string, Chapter> = {
  'l2-075': {
    id: 'l2-075',
    title: 'Trick: Keep A Separate Emergency-Fund Account',
    subtitle: 'Making the right choice the path of least resistance',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'The reason emergency funds disappear is not dishonesty — it is convenience. Money in the account you use for spending is spending money. A separate account at a different bank turns "spend the savings" into a deliberate multi-step action.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Open the account at a different bank from your spending account.',
          'Automate a transfer on payday so it builds without decisions.',
          'Keep the first month in a savings account and the rest in a liquid fund.',
          'Add a partner as joint holder so it is accessible in a crisis.',
          'Refill immediately after any use, before resuming discretionary spending.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Friction is the mechanism, not the account',
        text: 'The benefit is not the interest — it is that a transfer between banks is slow and visible, whereas a card payment is instant and invisible. The delay is what stops the impulse. That is why the account is as important as the balance.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Name it after the job',
        text: 'Call it "job loss fund" or "six months" rather than "savings". A goal-named account is much harder to raid than a general one, because spending it does not feel like a separate decision.',
      },
      { kind: 'sim', name: 'networth', caption: 'Watch how a dedicated emergency pot changes your net worth as it grows.' },
    ],
    quiz: [
      {
        q: 'Why does a separate emergency account work so well?',
        options: [
          { text: 'Because it pays a higher interest rate', correct: false, why: 'Rates are similar.' },
          { text: 'Because spending it requires a slow, visible action rather than an instant tap', correct: true, why: 'Exactly right — friction is the mechanism.' },
          { text: 'Because banks restrict access to it', correct: false, why: 'Unrestricted.' },
        ],
      },
      {
        q: 'The best naming for an emergency account is:',
        options: [
          { text: '"Savings"', correct: false, why: 'Too generic — it reads as spendable.' },
          { text: 'A name tied to its purpose, like "job loss fund"', correct: true, why: 'Exactly right.' },
          { text: 'No name at all', correct: false, why: 'Naming helps.' },
        ],
      },
      {
        q: 'After using the emergency fund, you should:',
        options: [
          { text: 'Resume normal spending immediately', correct: false, why: 'That lets the buffer stay depleted.' },
          { text: 'Refill it before resuming discretionary spending', correct: true, why: 'Exactly right.' },
          { text: 'Close the account', correct: false, why: 'Pointless.' },
        ],
      },
    ],
    takeaway: 'A separate emergency account works because of friction, not interest. Keep it at another bank, name it after its purpose, and refill it before resuming discretionary spending.',
  },

  'l2-076': {
    id: 'l2-076',
    title: 'Trick: Never Treat A Credit Limit As Income',
    subtitle: 'The most expensive illusion in personal finance',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'credit-exposure', caption: 'Available credit looks like capacity. It is actually exposure.' },
      { kind: 'p', text: 'A credit limit is permission to borrow, not money you have. The confusion is culturally reinforced in India, where a high limit is treated as a status marker and household decisions are made against total available credit rather than actual income.' },
      {
        kind: 'table',
        caption: 'Two views of the same finances',
        headers: ['Framing', 'Result'],
        rows: [
          ['"I have ₹8 lakh of credit available"', 'Feels wealthier, spends more'],
          ['"I earn ₹8 lakh a year"', 'Limits spending to what exists'],
          ['"I have ₹3 lakh of card balance"', 'Feels manageable, gets carried'],
          ['"I owe ₹3 lakh at 36%"', 'Motivates clearing it'],
        ],
      },
      {
        kind: 'formula',
        label: 'The replacement rule',
        expr: 'Plan spending against take-home income, never against available credit',
        note: 'Total credit limit across all cards is irrelevant to what you can afford.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Available credit is a measure of bank confidence',
        text: 'A lender raising your limit reflects their assessment of your repayment capacity, not your wealth. Treating a limit increase as good news reverses the meaning: it means they are willing to lend you more, which is a risk you now have access to.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The 32% number to remember',
        text: 'Debt-to-income above roughly 32–35% is where lenders become uncomfortable and where households typically start missing payments. If total EMIs plus card minimums exceed that, you are borrowing more than your income comfortably supports, regardless of how good it feels.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Actively reduce the temptation',
        text: 'If a limit genuinely makes you overspend, ask the issuer to lower it. It improves your credit score, removes the option, and costs you nothing if you were not going to use it.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Budget against take-home income only.',
          'Ignore credit limit increases — do not treat them as news.',
          'Ask to have a limit reduced if it tempts you.',
          'Keep total committed debt payments under about 35% of income.',
          'Pay balances in full so a limit increase changes nothing.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A credit card limit increase should be regarded as:',
        options: [
          { text: 'Evidence you have become wealthier', correct: false, why: 'It says nothing about your wealth.' },
          { text: 'A signal the lender is willing to lend you more, which is added risk rather than good news', correct: true, why: 'Exactly right.' },
          { text: 'A reward for good character', correct: false, why: 'It is a risk decision.' },
        ],
      },
      {
        q: 'Households typically begin missing payments when debt payments exceed roughly:',
        options: [
          { text: '10% of income', correct: false, why: 'Very conservative.' },
          { text: '32–35% of income', correct: true, why: 'Exactly right.' },
          { text: '70% of income', correct: false, why: 'Far too late.' },
        ],
      },
      {
        q: 'If a credit limit genuinely tempts you to overspend, the best response is to:',
        options: [
          { text: 'Apply for another card with a higher limit', correct: false, why: 'That makes it worse.' },
          { text: 'Ask the issuer to reduce the limit', correct: true, why: 'Exactly right.' },
          { text: 'Ignore the problem', correct: false, why: 'That leaves the temptation in place.' },
        ],
      },
    ],
    takeaway: 'A credit limit is permission to borrow, not income or wealth. Plan against take-home income, keep total debt payments under about 35%, and ask to have a tempting limit reduced.',
  },

  'l2-077': {
    id: 'l2-077',
    title: 'Trick: Compare Total Loan Cost, Not Just The EMI',
    subtitle: 'The EMI is what you can afford, not what you pay',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'The EMI is designed to feel affordable. Total cost is designed to be ignored. Every comparison made on EMI alone systematically favours the loan that costs you the most, because a longer tenure always produces a smaller payment and a larger bill.' },
      {
        kind: 'formula',
        label: 'What to ask for instead',
        expr: 'Total amount repayable = (EMI × number of payments) + all fees',
        note: 'If two offers differ in EMI, ask both lenders for the total repayable figure.',
      },
      {
        kind: 'table',
        caption: '₹25 lakh at 9% — the same loan, priced two ways',
        headers: ['Tenure', 'EMI', 'Total repayable', 'Verdict'],
        rows: [
          ['10 years', '₹29,600', '₹35,52,000', 'Cheapest by far'],
          ['20 years', '₹22,700', '₹54,48,000', '₹18.96 lakh more'],
          ['30 years', '₹20,130', '₹72,48,000', '₹36.96 lakh more'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'A "better" EMI usually means a longer tenure',
        text: 'Whenever an offer looks more affordable than the last, ask what changed. It is almost always the tenure rather than the rate. Understanding this one pattern prevents the single most expensive mistake in household borrowing.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Fees hide inside the "lowest EMI"',
        text: 'Processing fees of 1–3% do not affect the EMI at all, so a loan with a much larger one-time cost can still show the lowest monthly payment. That is why a low EMI is genuinely uninformative rather than merely incomplete.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Make total repayable a standard question',
        text: 'Get it from every lender before comparing anything. It takes five minutes and it is the only number that lets you compare offers on equal terms.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask every lender for the total amount repayable.',
          'Compare on total, including all fees, never on EMI.',
          'If an offer looks cheaper, check whether the tenure is longer.',
          'Remember prepaying a cheap, long loan is often better than it appears.',
          'Recalculate whenever you get a new offer.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'Set a longer tenure and watch total interest climb while the EMI barely moves.' },
    ],
    quiz: [
      {
        q: 'Why is comparing loans on EMI alone misleading?',
        options: [
          { text: 'Because EMI does not include interest', correct: false, why: 'It does include interest.' },
          { text: 'Because a lower EMI usually means a longer tenure, and a longer tenure costs far more overall', correct: true, why: 'Exactly right.' },
          { text: 'Because EMI changes monthly', correct: false, why: 'Not for fixed-rate loans.' },
        ],
      },
      {
        q: 'On a ₹25 lakh loan at 9%, moving from a 10-year to a 30-year tenure costs roughly:',
        options: [
          { text: 'An extra ₹37 lakh over the loan', correct: true, why: 'Exactly right — ₹72.5 lakh versus ₹35.5 lakh.' },
          { text: 'Nothing', correct: false, why: 'The total differs by lakhs.' },
          { text: 'An extra ₹2,000 in total', correct: false, why: 'It is lakhs, not thousands.' },
        ],
      },
      {
        q: 'A processing fee affects the EMI because:',
        options: [
          { text: 'It is added to the monthly payment', correct: false, why: 'It is usually charged upfront.' },
          { text: 'It does not appear in the EMI at all, so a low EMI can hide a large one-time cost', correct: true, why: 'Exactly right.' },
          { text: 'It reduces the interest rate', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'A lower EMI almost always means a longer tenure and a much larger total. Ask every lender for the total amount repayable, and never compare offers on EMI alone.',
  },

  'l2-078': {
    id: 'l2-078',
    title: 'Trick: Automate Savings',
    subtitle: 'Removing the decision you were always going to get wrong',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'Automation converts saving from a decision into a mechanical transfer. The saving rate becomes a property of your income rather than a function of your willpower in any particular month — which is the only version that survives contact with a bad month.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Set a standing instruction to move savings on payday.',
          'Start with an amount you would not notice losing — 5% or 10%.',
          'Schedule it the same day the salary arrives, before spending begins.',
          'Direct it to a separate account at a different bank.',
          'Increase the amount by half with every raise.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Automation removes two failure modes at once',
        text: 'It removes forgetting, which is the most common failure, and it removes temptation, which is the second. Once the transfer runs, saving happens whether or not the month feels generous — which is precisely when a discretionary decision would otherwise have absorbed it.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Set it once, then raise it annually',
        text: 'You do not need to revisit automation monthly. Review it once a year, when income or circumstances change, and adjust the percentage then. In between, let it run and check that it did.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Pick an amount you will not raid',
        text: 'Setting the transfer so high that you immediately need it back trains you to override your own system. If that happens, reduce it — a smaller amount that survives beats a larger one that gets cancelled in week three.',
      },
      { kind: 'sim', name: 'compound', caption: 'See what a small automatic monthly amount becomes over twenty years.' },
    ],
    quiz: [
      {
        q: 'Why is automation more reliable than deciding to save each month?',
        options: [
          { text: 'Automated transfers earn higher interest', correct: false, why: 'Rates are identical.' },
          { text: 'Because it removes both forgetting and temptation, and works even in a bad month', correct: true, why: 'Exactly right.' },
          { text: 'Banks require it', correct: false, why: 'It is optional.' },
        ],
      },
      {
        q: 'The best amount to start automating is one that:',
        options: [
          { text: 'Is as large as possible', correct: false, why: 'Too aggressive amounts get cancelled.' },
          { text: 'You would not notice missing, typically 5–10%', correct: true, why: 'Exactly right.' },
          { text: 'Is zero until you have spare cash', correct: false, why: 'That is how it never starts.' },
        ],
      },
      {
        q: 'You should schedule the automatic transfer:',
        options: [
          { text: 'At the end of the month', correct: false, why: 'There is nothing left by then.' },
          { text: 'On payday, immediately after income arrives', correct: true, why: 'Exactly right.' },
          { text: 'Whenever you remember', correct: false, why: 'That defeats the purpose.' },
        ],
      },
    ],
    takeaway: 'Automation makes saving a property of your income rather than a monthly decision. Schedule it on payday, start at 5–10%, and raise it by half with each raise.',
  },

  'l2-079': {
    id: 'l2-079',
    title: 'Trick: Maintain A Subscription Audit',
    subtitle: 'Small amounts, collected automatically',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'Subscriptions are the most reliable quiet leak in an Indian household: small amounts, recurring automatically, and individually too trivial to cancel. The total is routinely larger than people realise, because the spending is fragmented across services they never think about collectively.' },
      {
        kind: 'table',
        caption: 'A typical audit',
        headers: ['Category', 'Monthly', 'Annual'],
        rows: [
          ['Streaming video (2–3 services)', '₹650', '₹7,800'],
          ['Music', '₹120', '₹1,440'],
          ['Cloud storage', '₹130', '₹1,560'],
          ['Reading/news apps', '₹400', '₹4,800'],
          ['Gym or sports club', '₹1,500', '₹18,000'],
          ['Gaming, dating, AI tools', '₹900', '₹10,800'],
          ['Free trials that auto-renewed', '₹300', '₹3,600'],
          ['Typical total', '₹4,000', '₹48,000'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Free trials are the biggest offenders',
        text: 'Most free trials convert silently. Because nothing was consciously paid, nothing is consciously cancelled — and these accumulate at a few hundred rupees a month with no line item in your memory. The first audit step is usually to cancel four trials you had entirely forgotten.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Cancelling saves more than it looks',
        text: 'Cancelling rarely costs anything in money but often attracts a retention offer of a discount. Many people accept the discount rather than re-checking whether they use the service — so the money stays spent. Decide on usage first, then negotiate if you want to keep it.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Audit quarterly with a bank statement',
        text: 'Once a quarter, download your statement, find every recurring debit, and ask a single question: did I use this in the last month? Cancel what fails. Subscriptions are the easiest saving available because the amount is already committed each month.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Audit subscriptions quarterly using your bank statement.',
          'Cancel every free trial you are not actively using.',
          'Use annual plans only for services you use consistently.',
          'Keep one card for subscriptions so the statement makes them visible.',
          'Recheck the monthly total — aim to know the number exactly.',
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Use the spreadsheet to total your recurring monthly outgoings.' },
    ],
    quiz: [
      {
        q: 'Subscriptions are a significant financial leak mainly because they are:',
        options: [
          { text: 'Individually very expensive', correct: false, why: 'Each is small.' },
          { text: 'Small, automatic and forgotten, so they are never reviewed', correct: true, why: 'Exactly right.' },
          { text: 'Only charged once', correct: false, why: 'They recur.' },
        ],
      },
      {
        q: 'Free trials are especially prone to becoming:',
        options: [
          { text: 'Loyalty', correct: false, why: 'Irrelevant.' },
          { text: 'Unnoticed recurring charges, because nothing was consciously paid', correct: true, why: 'Exactly right.' },
          { text: 'A one-off cost', correct: false, why: 'They recur.' },
        ],
      },
      {
        q: 'The best time to run a subscription audit is:',
        options: [
          { text: 'Never', correct: false, why: 'They accumulate unnoticed.' },
          { text: 'Quarterly, using your bank statement to find every recurring debit', correct: true, why: 'Exactly right.' },
          { text: 'Only when you cannot pay a bill', correct: false, why: 'Far too late.' },
        ],
      },
    ],
    takeaway: 'Subscriptions are small, automatic and forgotten. Audit quarterly from your bank statement, cancel unused free trials first, and know your monthly total exactly.',
  },

  'l2-080': {
    id: 'l2-080',
    title: 'Trick: Keep Financial Documents Organised',
    subtitle: 'The unglamorous prerequisite for everything else',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'dashboard', caption: 'Documents are the raw data behind every figure you will ever need to produce.' },
      { kind: 'p', text: 'Organised financial documents are what let you act quickly — claiming insurance within the claim window, disputing a fraudulent transaction, finding an old tax document at filing time, or proving income for a loan. Missing documents cost time and sometimes money.' },
      {
        kind: 'table',
        caption: 'What to keep, and for how long',
        headers: ['Document', 'Keep for'],
        rows: [
          ['Payslips', 'Current year + 2 previous'],
          ['Bank statements', '3–8 years'],
          ['Investment statements', 'Indefinitely — needed for cost basis'],
          ['Insurance policies and premiums', 'Life of policy + claim period'],
          ['Tax returns and Form 16', '8 years or as advised'],
          ['Loan agreements and no-dues letters', 'Until the loan is closed + 3 years'],
          ['KYC and identity documents', 'Always, in a secure place'],
          ['Medical records and prescriptions', 'As long as relevant to claims'],
          ['Property documents', 'Indefinitely'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'A cloud folder beats a physical file',
        text: 'Physical documents fail in floods, fire and moves, and cannot be found quickly in an emergency. A single cloud folder, scanned and named consistently, is searchable in seconds and survives a disaster. Keep physical originals for irreplaceable documents such as property deeds.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The security trade-off',
        text: 'A cloud folder of your financial life should be behind two-factor authentication, with a folder structure nobody else can guess, and never in a chat history or a shared drive. Losing the folder is inconvenient; leaking it is dangerous.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Name files so they can be found under pressure',
        text: 'Use "date-type-detail" naming — for example "2025-04_Payslip_March.pdf". You will not remember what a file called "final2" was, and you may need it urgently.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Create one cloud folder, protected by two-factor authentication.',
          'Name files with date, type and detail.',
          'Scan documents the day you receive them.',
          'Keep physical originals for property and identity documents.',
          'Do a filing review once a quarter so it never becomes a backlog.',
          'Tell your family where the folder is and how to access it.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The main practical benefit of organised documents is that:',
        options: [
          { text: 'They make you look organised', correct: false, why: 'Not the real benefit.' },
          { text: 'You can act quickly — claiming, disputing or proving — before deadlines expire', correct: true, why: 'Exactly right.' },
          { text: 'They save tax automatically', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Investment statements should generally be kept:',
        options: [
          { text: 'A few months', correct: false, why: 'Too short.' },
          { text: 'Indefinitely, because they establish the cost basis for capital gains tax', correct: true, why: 'Exactly right.' },
          { text: 'Until you sell', correct: false, why: 'Wrong — past sales need them too.' },
        ],
      },
      {
        q: 'A good naming convention for financial files is:',
        options: [
          { text: 'Whatever the file name happens to be', correct: false, why: 'You will not find it later.' },
          { text: 'Date, type and detail — for example 2025-04_Payslip_March.pdf', correct: true, why: 'Exactly right.' },
          { text: 'A single long name for everything', correct: false, why: 'Unmanageable.' },
        ],
      },
    ],
    takeaway: 'Organised documents let you act before deadlines. Use one two-factor-protected cloud folder, name files date-type-detail, scan on receipt, and keep property originals physically.',
  },

  'l2-081': {
    id: 'l2-081',
    title: 'Build A Personal Monthly Financial Dashboard',
    subtitle: 'Four numbers you should know without looking',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'dashboard', caption: 'Four numbers, checked monthly, tell you almost everything that matters.' },
      { kind: 'p', text: 'A financial dashboard is a small set of numbers you review every month to know whether your plan is working. It is not a spreadsheet of thirty line items. It is four or five figures that must be knowable from memory, because a dashboard you have to look up is not one you are using.' },
      {
        kind: 'table',
        caption: 'The five numbers',
        headers: ['Metric', 'How to calculate', 'What a healthy figure looks like'],
        rows: [
          ['Savings rate', 'Savings ÷ take-home income', '20% or more'],
          ['Total debt', 'Sum of all outstanding balances', 'Falling month on month'],
          ['Net worth', 'Assets − liabilities', 'Rising over time'],
          ['Emergency cover', 'Liquid emergency fund ÷ monthly essentials', '3–6 months'],
          ['Credit utilisation', 'Total card balance ÷ total card limit', 'Below 30%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Five numbers, fifteen minutes',
        text: 'You can produce this entire dashboard in about fifteen minutes at the end of each month, using your bank statement, your payslip and a credit report. Fifteen minutes a month is one hour a year — an extraordinarily high return for consistency.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A dashboard must be recorded, not just reviewed',
        text: 'Reviewing your finances without writing anything down creates no memory and no trend. Record the five numbers monthly in a single line each, so you can see direction over time — which matters far more than any individual month.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Ask the trend, not the number',
        text: 'A poor savings rate that is improving is a better situation than a good one that is falling. So the monthly question is not "was this good?" but "is this moving in the right direction?"',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Record savings rate, total debt, net worth, emergency cover and utilisation monthly.',
          'Keep it in one place — a note, a sheet, or an app.',
          'Add one line per month so trends are visible.',
          'Ask each month whether the direction is right.',
          'Do a fuller review quarterly and annually.',
        ],
      },
      { kind: 'sim', name: 'networth', caption: 'Build the net worth figure you will record at the end of each month.' },
      { kind: 'sim', name: 'sheet', caption: 'Build your dashboard in the spreadsheet with one row per month and formulas that compute the ratios.' },
    ],
    quiz: [
      {
        q: 'A useful personal financial dashboard contains:',
        options: [
          { text: 'Every expense in detail', correct: false, why: 'That is a tracker, not a dashboard.' },
          { text: 'About five summary metrics you review monthly', correct: true, why: 'Exactly right.' },
          { text: 'Only your bank balance', correct: false, why: 'Insufficient on its own.' },
        ],
      },
      {
        q: 'Why record the numbers monthly rather than just reviewing them?',
        options: [
          { text: 'Recording is required by law', correct: false, why: 'No such requirement.' },
          { text: 'Because trends over time are far more informative than any single month', correct: true, why: 'Exactly right.' },
          { text: 'Because it takes less time', correct: false, why: 'It takes slightly more.' },
        ],
      },
      {
        q: 'A savings rate of 8% that has risen from 3% over a year is:',
        options: [
          { text: 'A poor situation', correct: false, why: 'It is improving significantly.' },
          { text: 'A good situation, because direction matters more than the current level', correct: true, why: 'Exactly right.' },
          { text: 'Worse than 15% that is falling', correct: false, why: 'Not the right comparison.' },
        ],
      },
    ],
    takeaway: 'Track five numbers monthly — savings rate, total debt, net worth, emergency cover and credit utilisation. Record them so trends show, and ask about direction rather than level.',
  },
}