import type { Chapter } from '../../types'

/** Level 1, chapters 27–32: bank accounts, deposits, and interest. */
export const banking: Record<string, Chapter> = {
  'l1-027': {
    id: 'l1-027',
    title: 'Bank Accounts',
    subtitle: 'Four account types, and why the number matters',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'bank-pyramid', caption: 'Each account type sits at a different level of the same system.' },
      { kind: 'p', text: 'A bank account is a record the bank keeps of what you owe you, plus a set of services attached to it. The type you choose determines the interest you earn, the withdrawals you can make, and the fees you pay.' },
      {
        kind: 'table',
        caption: 'The main account types in India',
        headers: ['Account', 'Interest', 'Overdraft', 'Best for'],
        rows: [
          ['Savings account', '3–7% (varies by bank and balance)', 'Usually limited', 'Daily money and emergency savings'],
          ['Current account', '0–1.5%', 'Yes, common', 'Business transactions'],
          ['Salary account', 'Savings rates or lower', 'Sometimes free', 'Receiving income'],
          ['Fixed deposit', '6–7.5%', 'No', 'Money you will not touch'],
          ['Recurring deposit', '6–7%', 'No', 'Fixed monthly savings'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Banks price by behaviour',
        text: 'Savings accounts often pay more for higher balances, with slabs. A bank might pay 2.7% below ₹10,000, 3.5% between ₹10,000 and ₹1 lakh, and 4% above that. This means the rate you see in the advertisement is rarely the rate you will actually earn.',
      },
      {
        kind: 'formula',
        label: 'Effective return with slabs',
        expr: 'Total interest ÷ average balance',
        note: 'Keeping ₹50,000 in two accounts of ₹25,000 each can earn noticeably less than keeping ₹50,000 in one account, if the higher slab applies per account.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Keep one account for salary and daily transactions.',
          'Keep a second, separate account purely for savings.',
          'Keep a third at a different bank for emergency funds, ideally a co-owned or nominee account.',
          'Ensure every account is reachable by UPI and free of monthly maintenance fees.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Nominee is not the same as co-owner',
        text: 'A nominee can only operate the account after your death — they do not get to use it while you are alive, and in some states the legal position differs from what people assume. If the balance is significant, understand exactly what your nomination gives you.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Check for hidden costs',
        text: 'Look at: minimum balance and penalties for falling below it, charges per withdrawal or per SMS, annual debit card fees, and the interest rate slab table. Small charges quietly cost more than many people notice.',
      },
    ],
    quiz: [
      {
        q: 'A current account differs from a savings account mainly because it:',
        options: [
          { text: 'Pays no interest at all', correct: false, why: 'Some current accounts pay a small interest.' },
          { text: 'Is designed for business transactions and usually offers an overdraft', correct: true, why: 'Correct — the overdraft and transaction focus are the difference.' },
          { text: 'Cannot be used for UPI', correct: false, why: 'Current accounts work on UPI normally.' },
        ],
      },
      {
        q: 'Why might a savings account earn less than advertised?',
        options: [
          { text: 'Because banks advertise illegal rates', correct: false, why: 'The advertised rate is usually real but conditional.' },
          { text: 'Because rates are charged in slabs based on your balance', correct: true, why: 'Exactly — slab structures mean your balance determines your rate.' },
          { text: 'Because interest is paid monthly only', correct: false, why: 'Payment frequency does not change the rate much.' },
        ],
      },
      {
        q: 'A nominee on a bank account:',
        options: [
          { text: 'Can withdraw money while the account holder is alive', correct: false, why: 'A nominee cannot operate the account during the holder\'s lifetime.' },
          { text: 'Can usually operate the account only after the holder\'s death', correct: true, why: 'Correct — that is the limited role of a nominee.' },
          { text: 'Is the legal owner of the account', correct: false, why: 'The account holder remains the owner.' },
        ],
      },
    ],
    takeaway: 'Choose accounts by service and rate, expect slab-based interest, and keep separate accounts for daily money, savings and emergencies.',
  },

  'l1-028': {
    id: 'l1-028',
    title: 'Savings Accounts',
    subtitle: 'Your first money home — and its hidden slab system',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'Savings and deposits are the safe jar; growth assets are a different jar with different rules.' },
      { kind: 'p', text: 'A savings account is designed for money you may need soon. It is liquid, safe up to ₹5 lakh of DICGC insurance per bank, and it is where your salary should land. It is a good home for an emergency fund and a poor home for long-term money.' },
      { kind: 'h', text: 'What decides your rate' },
      {
        kind: 'table',
        caption: 'A typical slab structure (illustrative)',
        headers: ['Balance', 'Rate example'],
        rows: [
          ['Up to ₹10,000', '2.70%'],
          ['₹10,000 to ₹1,00,000', '3.50%'],
          ['₹1,00,000 to ₹5,00,000', '4.00%'],
          ['Above ₹5,00,000', '4.00% +'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Two small accounts beat one large one',
        text: 'If slabs apply per account, splitting a ₹2 lakh balance across two banks gives you two lower slabs. Keeping ₹2 lakh in one account often earns more. This one detail is worth checking on your own statement.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Zero-balance or no-minimum-balance accounts avoid the monthly maintenance penalty entirely.',
          'Digital banks often pay higher rates for the same product.',
          'A savings account should never be your only long-term store — inflation will eat it.',
          'Keep the passbook or statement access; it is how you catch fraud early.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The first half of every fraud is a small test',
        text: 'Fraudsters often begin with a ₹1 or ₹10 debit to confirm your account is active before attempting a larger one. If you see an unfamiliar small debit and dismiss it, you have just given them a signal that the account is unguarded. Check every transaction.',
      },
      {
        kind: 'example',
        title: 'Emergency fund placement',
        text: 'Keep one to two months of expenses in the primary savings account for immediacy, and move the rest of the emergency fund into a liquid fund or a second bank\'s savings account. Both remain reachable within a day; only one is reachable within minutes.',
      },
    ],
    quiz: [
      {
        q: 'Savings accounts are best suited to:',
        options: [
          { text: 'Money needed within a short time and kept safe', correct: true, why: 'Correct — liquidity and safety is the point.' },
          { text: 'Money targeted to grow fastest over twenty years', correct: false, why: 'Savings rates lose to inflation over long periods.' },
          { text: 'Running a company\'s daily transactions', correct: false, why: 'That is what current accounts are for.' },
        ],
      },
      {
        q: 'If interest rates rise in slabs per account, keeping ₹2 lakh in one account versus two accounts of ₹1 lakh each will:',
        options: [
          { text: 'Always be identical', correct: false, why: 'Slabs can differ by account.' },
          { text: 'Often earn more in a single account, since two accounts may each sit in a lower slab', correct: true, why: 'Correct — this is a small but real difference.' },
          { text: 'Earn less in a single account', correct: false, why: 'Not how slab pricing works.' },
        ],
      },
      {
        q: 'A very small unfamiliar debit on your account, ₹1 or ₹10, should be treated as:',
        options: [
          { text: 'Harmless noise to ignore', correct: false, why: 'Ignoring it can invite larger attempts.' },
          { text: 'Worth investigating, because small test debits often precede larger fraud', correct: true, why: 'Exactly — investigate and report.' },
          { text: 'A sign your account type is wrong', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Savings accounts suit short-term, safe money. Check the slab structure, prefer zero-balance accounts, and never treat an unfamiliar debit as noise.',
  },

  'l1-029': {
    id: 'l1-029',
    title: 'Current Accounts',
    subtitle: 'Made for business, sometimes the wrong choice',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'bank-pyramid', caption: 'Business accounts sit lower in the pyramid, where turnover matters more than interest.' },
      { kind: 'p', text: 'A current account is built for business use: frequent transactions, higher transaction limits, and usually an overdraft facility. For a salaried individual, a savings or salary account is almost always the better fit.' },
      {
        kind: 'table',
        caption: 'Current vs savings account',
        headers: ['Feature', 'Current account', 'Savings account'],
        rows: [
          ['Primary purpose', 'Business turnover', 'Personal savings'],
          ['Interest', '0–1.5%', '3–7% with slabs'],
          ['Overdraft', 'Common and expected', 'Rarely offered'],
          ['Transaction limits', 'High', 'Moderate'],
          ['Who should use it', 'Businesses, traders, partnerships', 'Individuals, salary accounts'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The overdraft trap',
        text: 'An overdraft lets you spend more than your balance, and the interest is often charged from the moment you overdraw, with no notice. Many small businesses have failed because of overdrafts they treated as flexible credit rather than expensive short-term borrowing.',
      },
      {
        kind: 'formula',
        label: 'Cost of a ₹2 lakh overdraft for 10 months at 12%',
        expr: '₹2,00,000 × 12% × (10/12) = ₹20,000 in interest alone',
        note: 'And the principal is still owed. This is not free working capital.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'If you run a business',
        text: 'Keep current accounts separate from personal accounts, use a business current account with UPI for collections, reconcile monthly, and treat the overdraft as an emergency rather than a planning tool.',
      },
    ],
    quiz: [
      {
        q: 'A current account is primarily intended for:',
        options: [
          { text: 'Personal long-term savings', correct: false, why: 'That is what savings accounts and FDs are for.' },
          { text: 'Business transactions and turnover', correct: true, why: 'Correct.' },
          { text: 'Holding gold', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Overdraft facility is risky mainly because:',
        options: [
          { text: 'It cannot be repaid', correct: false, why: 'It is a loan and must be repaid.' },
          { text: 'Interest accrues from the moment of overdrawing, adding cost quickly without any warning', correct: true, why: 'Exactly — there is no grace period and no notice.' },
          { text: 'It reduces your credit score immediately', correct: false, why: 'Not immediate, and not guaranteed.' },
        ],
      },
      {
        q: 'For a salaried individual with no business, the better choice is usually:',
        options: [
          { text: 'A current account with overdraft', correct: false, why: 'You would pay for a facility you do not need.' },
          { text: 'A savings or salary account', correct: true, why: 'Correct — it suits personal use and earns more.' },
          { text: 'A recurring deposit', correct: false, why: 'An RD is for saving a fixed amount monthly, not for transactions.' },
        ],
      },
    ],
    takeaway: 'Current accounts serve business turnover, not personal use. Treat any overdraft as expensive short-term borrowing, not free money.',
  },

  'l1-030': {
    id: 'l1-030',
    title: 'Fixed Deposits',
    subtitle: 'Lock it, earn more, lose flexibility',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'An FD earns simple, predictable interest — the straight line, not the curve.' },
      { kind: 'p', text: 'A fixed deposit is a lump sum you place with a bank for a fixed term at a fixed rate. In exchange for locking your money away, the bank pays more than a savings account. It is the safest and most predictable place for money you know you will not need.' },
      { kind: 'table',
        caption: 'FD terms you will meet',
        headers: ['Term', 'Typical rate range', 'Good for'],
        rows: [
          ['7 days to 3 months', '5.5–6.5%', 'Very short idle balances'],
          ['6–12 months', '6.5–7%', 'Annual goals, festival expenses'],
          ['1–3 years', '6.5–7%', 'Medium-term goals, tax deposits'],
          ['5 years', '6.5–7% with 80C benefit', 'Tax-saver FDs, long-term goals'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Liquidity has a price',
        text: 'Banks offer a penalty for breaking an FD early, typically 0.25–1% of the interest for small periods. That penalty is small, which is why many people use FDs as their emergency fund and simply accept the small cost when they need cash. It is a reasonable trade.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The tax treatment matters',
        text: 'Interest on an FD is taxed at your slab rate. A tax-saver FD under section 80C gives a deduction up to ₹1.5 lakh, but locks the money for five years with an 80C(14) restriction on premature exit. Compare the after-tax return, not the headline rate.',
      },
      {
        kind: 'example',
        title: 'Corporate deposits vs bank FDs',
        text: 'Small finance banks and non-bank finance companies often offer 7.5–8.5% on FDs versus 6.5–7% at large banks. The extra 1% is real, but diversification limits are prescribed: banks are covered by DICGC up to ₹5 lakh, while many corporate deposits are not covered at all. Balance the extra return against the loss risk.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Compare the after-tax rate, not the advertised one.',
          'Use an FD for money with a known future date.',
          'Split large sums across banks to stay within insurance limits if needed.',
          'Check whether the interest compounds quarterly or at maturity.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The main advantage of a fixed deposit over a savings account is:',
        options: [
          { text: 'Instant access to your money', correct: false, why: 'The opposite is true — FDs lock your money.' },
          { text: 'A higher interest rate in exchange for locking the money for a fixed term', correct: true, why: 'Exactly the trade.' },
          { text: 'No tax on the interest', correct: false, why: 'FD interest is taxable.' },
        ],
      },
      {
        q: 'A ₹2 lakh, 1-year FD at 7% earns approximately:',
        options: [
          { text: '₹14,000 before tax', correct: true, why: 'Correct — 2,00,000 × 7% = ₹14,000.' },
          { text: '₹2,14,000', correct: false, why: 'That is the total value, not the interest.' },
          { text: '₹1,400', correct: false, why: 'That is 0.7%.' },
        ],
      },
      {
        q: 'Why should you compare after-tax FD returns rather than headline rates?',
        options: [
          { text: 'Because tax slabs change every year', correct: false, why: 'Slabs can change, but that is not the reason.' },
          { text: 'Because FD interest is taxable and different structures offer different deductions, so net returns can rank differently', correct: true, why: 'Exactly — the after-tax number is what you keep.' },
          { text: 'Because banks deduct tax automatically at source', correct: false, why: 'Banks report TDS but you pay the balance yourself.' },
        ],
      },
    ],
    takeaway: 'FDs pay more for locking money away, suit any sum with a known future date, and must be compared on after-tax return rather than headline rate.',
  },

  'l1-031': {
    id: 'l1-031',
    title: 'Recurring Deposits',
    subtitle: 'Discipline with a fixed monthly commitment',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'Because money arrives gradually, an RD stays on the lower, straighter line.' },
      { kind: 'p', text: 'A recurring deposit is a fixed amount deposited every month for a fixed period at a fixed rate. It suits people who cannot save a lump sum, because it converts saving into a standing instruction rather than a monthly decision.' },
      { kind: 'table',
        caption: 'FD vs RD over 12 months at ₹5,000',
        headers: ['Feature', 'RD', 'FD'],
        rows: [
          ['Deposit structure', '₹5,000 monthly', '₹60,000 at start'],
          ['Total invested', '₹60,000', '₹60,000'],
          ['Interest earned (approx. 7%)', '~₹1,575', '~₹4,200'],
          ['Best for', 'Salaried savers, small amounts', 'Lump sums already available'],
          ['Liquidity', 'Premature withdrawal allowed at penalty', 'Premature closure penalty'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'RD earns less because the money arrives gradually',
        text: 'In an FD the entire amount compounds for the full year. In an RD, each monthly instalment compounds only for the remaining months. That is why an RD earns less for the same total — the trade is convenience and habit, not yield.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The best use of an RD',
        text: 'Use it for a goal with a fixed date and a fixed amount — a course fee, a deposit for a room, a festive expense. Set a standing instruction for payday, and consider a 5-year tax-saver RD for the 80C benefit if you can leave the money untouched.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not miss months if you can avoid it',
        text: 'Many banks allow you to skip a month but charge a penalty on the interest for that month. Missing three months can happen due to circumstances outside your control, so read the penalty terms before choosing a bank.',
      },
    ],
    quiz: [
      {
        q: 'Why does an RD earn less interest than an FD for the same total amount?',
        options: [
          { text: 'RD rates are always lower', correct: false, why: 'Rates can be similar; the difference is mostly timing.' },
          { text: 'Because money deposited later compounds for fewer months', correct: true, why: 'Exactly — later money earns for less time.' },
          { text: 'Because RDs are only offered by small banks', correct: false, why: 'Large banks offer them widely.' },
        ],
      },
      {
        q: 'An RD is most useful for:',
        options: [
          { text: 'Someone with a large idle lump sum today', correct: false, why: 'That is an FD.' },
          { text: 'Someone saving a fixed amount every month toward a dated goal', correct: true, why: 'Correct — the standing instruction does the discipline.' },
          { text: 'Maximising short-term returns', correct: false, why: 'RDs are not designed for maximum return.' },
        ],
      },
      {
        q: 'A common RD penalty is:',
        options: [
          { text: 'Loss of the entire deposit for a missed month', correct: false, why: 'Far harsher than reality.' },
          { text: 'A deduction from the interest earned for a missed instalment', correct: true, why: 'Correct — read the penalty terms.' },
          { text: 'Forfeiture of tax-saver status', correct: false, why: 'Not a standard penalty.' },
        ],
      },
    ],
    takeaway: 'An RD turns saving into a standing instruction. It earns less than an FD for the same total, because later money compounds for fewer months.',
  },

  'l1-032': {
    id: 'l1-032',
    title: 'Interest',
    subtitle: 'The price of money — what you pay and what you earn',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'Risk and return move together. Anyone promising otherwise is selling something.' },
      { kind: 'p', text: 'Interest is the price of borrowing money, and the payment for lending it. It works in both directions: you earn it on deposits, you pay it on loans and card balances. Comparing your borrowing rate to your earning rate is one of the most useful calculations in personal finance.' },
      {
        kind: 'table',
        caption: 'Rates you will meet',
        headers: ['Product', 'Rate direction', 'Approximate level'],
        rows: [
          ['Savings account', 'You earn', '3–7%'],
          ['Fixed deposit', 'You earn', '6–7.5%'],
          ['Home loan', 'You pay', '8.5–9.5%'],
          ['Personal loan', 'You pay', '11–18%'],
          ['Credit card revolving balance', 'You pay', '30–42%'],
          ['Overdraft', 'You pay', '10–16%'],
          ['Gold loan', 'You pay', '12–24%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The negative spread is an emergency',
        text: 'If you are borrowing at 18% and your savings earn 3.5%, every month of that borrowing costs you fourteen points of spread. Paying off a personal loan at 18% with money earning 3.5% is a guaranteed, tax-free return of 14.5% — better than most investments you can buy.',
      },
      {
        kind: 'formula',
        label: 'Why the EMI rises when rates rise',
        expr: 'EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1)',
        note: 'With P = principal, r = monthly interest rate, n = number of months. Floating-rate loans change because r changes.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'APR versus the advertised rate',
        text: 'A card may advertise 1.5% monthly, which is about 18% a year. A teaser home loan of 8.5% may become 9.5% after the reset period. Always look at the annualised rate and the total repayment, never the headline monthly number.',
      },
      {
        kind: 'sim', name: 'sheet', caption: 'Compare actual interest earned across your deposits versus interest paid on debts using SUMIF.' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The rule that follows',
        text: 'Borrow only for things that earn more than the loan costs, and never borrow to pay for consumption that will not still exist when the loan ends.',
      },
    ],
    quiz: [
      {
        q: 'If you borrow at 18% and your savings earn 3.5%, what is the net cost of that borrowing?',
        options: [
          { text: '18%', correct: false, why: 'You also earn interest on your savings.' },
          { text: 'About 14.5% a year', correct: true, why: 'Correct — 18 minus 3.5.' },
          { text: 'About 3.5%', correct: false, why: 'That is your earnings rate, not the cost.' },
        ],
      },
      {
        q: 'Paying off a high-interest loan with money you were going to save is best described as:',
        options: [
          { text: 'A bad idea, since you lose your emergency fund', correct: false, why: 'Only if it empties your emergency fund — the buffer still matters.' },
          { text: 'A guaranteed return equal to the interest rate saved', correct: true, why: 'Exactly — a guaranteed, tax-free gain.' },
          { text: 'Illegal under income tax rules', correct: false, why: 'Entirely legal.' },
        ],
      },
      {
        q: 'Why does a credit card balance cost so much more than a home loan?',
        options: [
          { text: 'Cards are unsecured and revolving', correct: true, why: 'Correct — no collateral and revolving balance means the bank carries far more risk.' },
          { text: 'Because cards charge on the principal only', correct: false, why: 'They charge on the outstanding balance, which includes earlier interest.' },
          { text: 'Because home loans are subsidised by the government', correct: false, why: 'Not the main reason.' },
        ],
      },
    ],
    takeaway: 'Interest is the price of money in both directions. Always compare your borrowing rate with your earning rate — the gap is your real cost, and clearing expensive debt is a guaranteed return.',
  },
}