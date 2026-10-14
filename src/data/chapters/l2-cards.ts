import type { Chapter } from '../../types'

/** Level 2, chapters 21–27: cards, credit limits and repayment mechanics. */
export const cards: Record<string, Chapter> = {
  'l2-021': {
    id: 'l2-021',
    title: 'Banking Products',
    subtitle: 'Matching the product to the job it needs to do',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'A bank sells a range of products that differ mainly in three ways: safety, liquidity and return. Choosing well is not about finding the best product, but about matching each job — everyday spending, emergency reserve, medium-term goal — to the product built for it.' },
      {
        kind: 'table',
        caption: 'Products by the job they do',
        headers: ['Job to be done', 'Right product', 'Return', 'Access'],
        rows: [
          ['Receive salary and spend daily', 'Savings or current account', '3–3.5%', 'Instant'],
          ['Emergency reserve', 'High-interest savings or liquid fund', 'up to 8%', 'Instant to next day'],
          ['Known amount at a known date', 'Fixed deposit', '6–7.5%', 'At maturity'],
          ['Monthly discipline', 'Recurring deposit', '6–7%', 'At maturity'],
          ['Long-term growth', 'Equity funds or NPS', '10–13% long run', 'Days'],
          ['Tax-free long-term', 'PPF or EPF', '7–8.25%', 'Locked'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Match the product to the date, not to the rate',
        text: 'The most common mistake is buying a high-return product for money needed soon. A deposit giving 1% more, locked for three years, is a bad choice for money you may need in six months — the opportunity cost of being locked outweighs the extra yield.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Insurance sold alongside is not free',
        text: 'Loans and FDs are frequently bundled with "free" insurance — a policy add-on, an account balance insurance rider. These are usually poor value for the premium charged and rarely removable. Always ask for the price of the loan or deposit alone, and for the insurance separately.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Hold a basic no-fee savings account as your primary.',
          'Hold a second account for emergency funds, ideally at a different bank.',
          'Use FDs only for amounts with a definite date.',
          'Keep at least three to six months of expenses out of the market entirely.',
          'Review the product mix twice a year, not whenever rates move.',
        ],
      },
      { kind: 'sim', name: 'networth', caption: 'Add each product to your net worth and see how the mix changes the picture.' },
    ],
    quiz: [
      {
        q: 'The right way to choose a banking product is to:',
        options: [
          { text: 'Pick whichever gives the highest headline rate', correct: false, why: 'That ignores when you need the money.' },
          { text: 'Match the product to the purpose and the date you will need it', correct: true, why: 'Exactly right.' },
          { text: 'Choose the product from your nearest branch', correct: false, why: 'Convenience of access is not the only criterion.' },
        ],
      },
      {
        q: 'Insurance bundled free with a loan or FD is usually:',
        options: [
          { text: 'Free and always worthwhile', correct: false, why: 'It is priced into the product.' },
          { text: 'Poor value and rarely removable, so ask for the price without it', correct: true, why: 'Exactly right.' },
          { text: 'Required by law', correct: false, why: 'No such requirement.' },
        ],
      },
      {
        q: 'Money needed within six months should sit in:',
        options: [
          { text: 'An equity fund for maximum growth', correct: false, why: 'Too risky for a short date.' },
          { text: 'Something safe and quickly accessible', correct: true, why: 'Correct.' },
          { text: 'A three-year deposit', correct: false, why: 'Penalty risk if the date moves.' },
        ],
      },
    ],
    takeaway: 'Choose banking products by purpose and date, not headline rate. And treat bundled insurance as a cost to ask about rather than a free benefit.',
  },

  'l2-022': {
    id: 'l2-022',
    title: 'Debit Cards',
    subtitle: 'Spend only what you have',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'A debit card plus a PIN is powerful precisely because it spends only what is already yours.' },
      { kind: 'p', text: 'A debit card spends your own money directly from your account. Its real advantage is not convenience — it is that it cannot let you spend what you do not have. For most people, everyday spending belongs on a debit card or UPI rather than a credit card.' },
      {
        kind: 'table',
        caption: 'Debit card protections in India',
        headers: ['Feature', 'Typical position'],
        rows: [
          ['Zero liability', 'Applies up to ₹3 lakh for recent transactions, with conditions'],
          ['PIN', 'Required; never share it with anyone'],
          ['Daily limits', 'Set by the bank and card type'],
          ['Online transactions', 'Often require OTP or PIN even for small amounts'],
          ['Dispute window', 'Typically 30 days for transaction disputes'],
          ['Insurance', 'Some cards include limited purchase protection; usually excluded'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why debit beats credit for everyday spending',
        text: 'Because the pain of over-spending is immediate. A credit card converts a spending mistake into a debt balance with interest at roughly 3% a month. Switching routine spending to debit removes an entire category of financial damage, at the cost of losing a few days of credit-period float.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Debit fraud is real',
        text: 'Card skimming, card trapping at ATMs, and online OTP theft all target debit cards, because the money is yours from the moment it leaves. Zero-liability rules help but are conditional. Keep your card visible at checkout, shield the ATM keypad, and turn on transaction alerts.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Use two debit cards',
        text: 'Keep one everyday card and one with a low limit, used for online and unfamiliar transactions. If the second is compromised, the damage is capped by its own limit rather than by your full balance.',
      },
    ],
    quiz: [
      {
        q: 'The main financial advantage of a debit card is that:',
        options: [
          { text: 'You can borrow up to the card limit', correct: false, why: 'That is a credit card.' },
          { text: 'You can only spend money you already have, so spending mistakes do not become debt', correct: true, why: 'Exactly right.' },
          { text: 'It earns interest on your balance', correct: false, why: 'Cards do not pay interest.' },
        ],
      },
      {
        q: 'Keeping a second debit card with a low limit is useful because:',
        options: [
          { text: 'It earns a higher rate', correct: false, why: 'Rates are identical.' },
          { text: 'It caps the damage if that card is compromised', correct: true, why: 'Exactly right.' },
          { text: 'It doubles your card rewards', correct: false, why: 'Rewards come from the card, not the limit.' },
        ],
      },
      {
        q: 'Zero-liability protection on unauthorised card transactions:',
        options: [
          { text: 'Always applies with no conditions', correct: false, why: 'It is conditional.' },
          { text: 'Applies up to a limit, subject to conditions such as reporting promptly', correct: true, why: 'Correct.' },
          { text: 'Does not exist in India', correct: false, why: 'It does exist.' },
        ],
      },
    ],
    takeaway: 'Debit cards cap your spending at what you own, which prevents a spending mistake becoming 3%-a-month debt. Use a separate low-limit card online.',
  },

  'l2-023': {
    id: 'l2-023',
    title: 'Credit Cards',
    subtitle: 'A powerful tool and the most expensive debt in personal finance',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'minpayment-trap', caption: 'The same card that feels generous in month one can cost far more than it ever gave you.' },
      { kind: 'p', text: 'A credit card lets you spend money now and repay later, with interest on any balance you carry. Used strictly for convenience — paying in full every month — it is genuinely useful. Used as a source of extra money, it is the most expensive borrowing available to individuals, and the numbers are stark.' },
      {
        kind: 'table',
        caption: 'The true cost of revolving card debt',
        headers: ['Item', 'Figure'],
        rows: [
          ['Typical interest rate', '30–42% a year'],
          ['Monthly equivalent', 'Roughly 2.5–3.5% a month'],
          ['Interest on interest', 'Yes — the balance compounds against you'],
          ['Late payment fee', '₹500–₹1,200'],
          ['Cash withdrawal fee', '2–4% with immediate interest from day one'],
          ['Fx markup on foreign use', 'Often zero on premium cards'],
        ],
      },
      {
        kind: 'formula',
        label: 'Why revolving is uniquely dangerous',
        expr: 'At 36% a year, ₹1,00,000 unpaid becomes ₹1,36,000 in a year, and ₹1.60 lakh in three years if you keep adding spending',
        note: 'This is the same compounding that works for you when you save — pointed the other way.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The three legitimate uses',
        text: 'One, to avoid cash and get dispute protection. Two, to float spending between salary cycles for a known, repaid-in-full amount. Three, to build a credit score responsibly in India\'s thinner credit environment. Outside those three, a debit card is usually better.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Cash advances are a trap',
        text: 'Withdrawing cash on a credit card usually charges a fee immediately, and interest starts accruing from day one with no grace period. There is no scenario where this is a sensible borrowing decision — it is simply the most expensive way to get cash.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Pay the full statement balance every month, automatically.',
          'If you cannot pay in full, treat the balance as an emergency loan.',
          'Never use the card for a cash advance.',
          'Keep a zero or near-zero balance if you cannot clear it monthly.',
          'Watch annual fees against the rewards you actually redeem.',
        ],
      },
      { kind: 'sim', name: 'minpayment', caption: 'Run the numbers and see what the minimum payment really costs.' },
    ],
    quiz: [
      {
        q: 'Credit cards are most dangerous when:',
        options: [
          { text: 'You pay the full balance each month', correct: false, why: 'That is the correct usage.' },
          { text: 'A balance is carried, because interest compounds against you at roughly 3% a month', correct: true, why: 'Exactly right.' },
          { text: 'You use them for online shopping', correct: false, why: 'Online use is normal.' },
        ],
      },
      {
        q: 'A cash advance on a credit card is dangerous mainly because:',
        options: [
          { text: 'It is illegal in India', correct: false, why: 'It is legal.' },
          { text: 'Interest starts immediately with no grace period, plus a withdrawal fee', correct: true, why: 'Exactly right.' },
          { text: 'It improves your credit score quickly', correct: false, why: 'Cash advances do not build score.' },
        ],
      },
      {
        q: 'Which is a legitimate use of a credit card?',
        options: [
          { text: 'Funding a month of expenses when your invoice payment is delayed, repaid in full at cycle end', correct: true, why: 'Correct — that is genuine short-term float.' },
          { text: 'Paying for a wedding out of your income', correct: false, why: 'That is exactly the borrowing trap.' },
          { text: 'Withdrawing cash for daily needs', correct: false, why: 'Never sensible.' },
        ],
      },
    ],
    takeaway: 'A credit card is useful as a payment tool and dangerous as a loan. Pay the full balance every month, never take cash advances, and treat any carried balance as an emergency.',
  },

  'l2-024': {
    id: 'l2-024',
    title: 'Credit Limits',
    subtitle: 'Borrowing capacity is not income',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'minpayment-trap', caption: 'A higher limit does not raise what you can repay — it only raises what you can lose.' },
      { kind: 'p', text: 'A credit limit is the maximum a card issuer will let you borrow. It is not money you own, not income, and not a sign of financial success. The confusion is culturally powerful in India, where limits often rise with income and are treated as an achievement.' },
      {
        kind: 'formula',
        label: 'The line to draw',
        expr: 'Committed EMIs + card minimums should stay well below your monthly take-home',
        note: 'A practical ceiling is that total committed debt payments should not exceed roughly 35–40% of take-home pay.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Multiple limits do not add up',
        text: 'Four cards with ₹2 lakh limits each give you ₹8 lakh of borrowing capacity in theory and one monthly payment in practice when all are maxed. Credit scoring uses your total utilisation across all cards, so the limits do not stack in your favour — only the highest limit matters for that.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Requesting limit increases is a common pattern',
        text: 'Many issuers raise limits shortly after you start using a card regularly. This feels like good news and is a trap: higher utilisation of a higher limit damages your credit score and increases the damage a bad month can do. Ask for an increase only when your utilisation is genuinely low.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'One or two cards, used for convenience, is enough.',
          'Set your own self-imposed limit well below the issuer limit.',
          'Call your issuer to reduce a limit if it is too tempting.',
          'Never keep cards you barely use just for the limit.',
          'Review total limits across all cards twice a year.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The reduction trick',
        text: 'If a limit is too high and you are disciplined, ask the issuer to lower it. It improves your credit score, removes the temptation, and has no downside if you were never going to use it.',
      },
    ],
    quiz: [
      {
        q: 'A credit limit should be understood as:',
        options: [
          { text: 'Money you have available to spend', correct: false, why: 'It is money you could borrow, not money you own.' },
          { text: 'Borrowing capacity that costs you nothing unless you use it, and that damages your score if you get close to it', correct: true, why: 'Exactly right.' },
          { text: 'An achievement reflecting your financial status', correct: false, why: 'It is a risk decision by the issuer.' },
        ],
      },
      {
        q: 'Having four cards with ₹2 lakh limits each:',
        options: [
          { text: 'Gives you ₹8 lakh of usable purchasing power', correct: false, why: 'You cannot repay ₹8 lakh a month sensibly.' },
          { text: 'Adds risk and utilisation pressure without adding usable income', correct: true, why: 'Exactly right.' },
          { text: 'Improves your credit score', correct: false, why: 'Unused limits barely move the score.' },
        ],
      },
      {
        q: 'Why avoid requesting a limit increase?',
        options: [
          { text: 'Because issuers charge a fee', correct: false, why: 'Usually free.' },
          { text: 'Because a higher ceiling invites higher spending and increases utilisation risk', correct: true, why: 'Exactly right.' },
          { text: 'Because it lowers your interest rate', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'A credit limit is borrowing capacity, not income. Keep one or two cards, set your own lower limit, and even ask your issuer to reduce a limit that is too tempting.',
  },

  'l2-025': {
    id: 'l2-025',
    title: 'Billing Cycles',
    subtitle: 'When you spend is not when you pay',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'upi-flow', caption: 'The gap between spending and paying is where the interest-free period lives.' },
      { kind: 'p', text: 'A billing cycle is the period your card issuer uses to collect your transactions. Understanding it lets you pay in full at the right time and avoid interest entirely — and it is one of the few genuinely free benefits cards offer.' },
      {
        kind: 'table',
        caption: 'How a cycle works',
        headers: ['Event', 'What happens', 'Interest?'],
        rows: [
          ['Transaction date', 'You spend', 'No'],
          ['Statement generated', 'Issuer sends the summary', 'No'],
          ['Grace period (up to ~50 days)', 'Time to pay in full', 'None if paid in full'],
          ['Payment recorded', 'You pay', 'No'],
          ['Balance carried', 'You paid less than the full amount', 'Yes — from day one of the cycle'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The grace period is the free loan',
        text: 'If you pay in full every month, you effectively get up to about fifty days of interest-free credit. That is a genuine benefit, and it is lost the moment a single rupee is carried — because interest accrues on the whole balance, not just the carried part.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Partial payment loses the whole benefit',
        text: 'Paying ₹10,000 on a ₹40,000 statement means you are charged interest on the entire ₹40,000 from the start of the cycle, not on ₹30,000. There is no partial grace period. This single rule catches many people who believe "I am paying it off gradually".',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Note your statement date and due date.',
          'Set an auto-pay for the full statement amount, not the minimum.',
          'Confirm the auto-pay posts before the due date, not on it.',
          'Sweep any bonus or refund back to the card immediately.',
          'Never carry a balance "just to build a credit history" — it costs far more than it helps.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Auto-pay for the full amount',
        text: 'Most issuers let you choose "full statement balance" rather than "minimum due". Set it once. It converts the single most valuable card habit into something structural rather than a monthly decision.',
      },
    ],
    quiz: [
      {
        q: 'The grace period applies only when:',
        options: [
          { text: 'You pay at least the minimum amount', correct: false, why: 'The minimum still incurs interest.' },
          { text: 'You pay the full statement balance by the due date', correct: true, why: 'Exactly right.' },
          { text: 'You hold the card for over a year', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'If you pay part of your statement balance, interest is charged on:',
        options: [
          { text: 'Only the unpaid portion', correct: false, why: 'Not how it works.' },
          { text: 'The entire statement balance from the start of the cycle', correct: true, why: 'Exactly right — this surprises many people.' },
          { text: 'Nothing until the next cycle', correct: false, why: 'Interest applies immediately.' },
        ],
      },
      {
        q: 'The most valuable card habit is:',
        options: [
          { text: 'Paying the minimum due each month', correct: false, why: 'That keeps you paying interest forever.' },
          { text: 'Setting auto-pay for the full statement balance', correct: true, why: 'Exactly right.' },
          { text: 'Using multiple cards to spread spending', correct: false, why: 'That increases total debt.' },
        ],
      },
    ],
    takeaway: 'The interest-free grace period is a real benefit, but it applies only to the full balance. Set auto-pay for the full statement amount — partial payment loses it entirely.',
  },

  'l2-026': {
    id: 'l2-026',
    title: 'Due Dates',
    subtitle: 'The most important number on your statement',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'One missed date costs a fee, a penalty rate and a note on your record for years.' },
      { kind: 'p', text: 'The due date is the day by which payment must be credited. Miss it and three things happen at once: a late fee, a penalty interest rate, and a negative mark on your credit record that stays for years.' },
      {
        kind: 'table',
        caption: 'Consequences of missing a due date',
        headers: ['Consequence', 'Typical magnitude'],
        rows: [
          ['Late payment fee', '₹500–₹1,200 per instance'],
          ['Penalty interest rate', 'An extra few percent added to the standard rate'],
          ['Credit score impact', 'Noted for 24–36 months, and often for longer'],
          ['Revoke rewards', 'Points or cashback can be cancelled for that period'],
          ['Loss of grace period', 'Interest starts from the original transaction date'],
          ['Repeated misses', 'Can lead to credit card closure and harder borrowing'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Pay a day or two early',
        text: 'Banks process credits on their own schedules, and a payment initiated on the due date is sometimes recorded late. Paying two to three days early removes a whole category of accidental misses at zero cost.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'One miss can cost a lot',
        text: 'A ₹900 late fee on a ₹15,000 bill is a 6% penalty in a single instance, and it damages your borrowing record for years. If you are ever at risk of missing, pay at least the minimum early and clear it properly rather than risking the record.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Set the due date as a recurring calendar reminder.',
          'Pay two to three days before the due date.',
          'Keep a small buffer in the account that receives the auto-debit.',
          'Track due dates across all cards in one place.',
          'After a miss, check whether the bank offers a one-time waiver — many do, if you ask.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Missing a credit card due date affects:',
        options: [
          { text: 'Only your wallet', correct: false, why: 'It affects fees, interest and your credit record.' },
          { text: 'A late fee, penalty interest and your credit record for years', correct: true, why: 'Exactly right.' },
          { text: 'Only the current statement', correct: false, why: 'The record impact lasts much longer.' },
        ],
      },
      {
        q: 'Why pay two or three days before the due date?',
        options: [
          { text: 'Banks charge less earlier', correct: false, why: 'No such pricing.' },
          { text: 'Because a payment initiated on the due date is sometimes processed late', correct: true, why: 'Exactly right.' },
          { text: 'To reduce interest', correct: false, why: 'Interest is unaffected if you pay in full.' },
        ],
      },
      {
        q: 'After missing a due date, it is worth:',
        options: [
          { text: 'Asking the bank whether a one-time waiver is available', correct: true, why: 'Many issuers allow this, especially for a first instance.' },
          { text: 'Applying for another card', correct: false, why: 'That worsens the situation.' },
          { text: 'Closing all your cards', correct: false, why: 'An unnecessary reaction.' },
        ],
      },
    ],
    takeaway: 'The due date is the most important number on your statement. Pay two to three days early, keep a buffer in the source account, and ask about a waiver if you miss.',
  },

  'l2-027': {
    id: 'l2-027',
    title: 'The Minimum Payment',
    subtitle: 'The number designed to keep you in debt',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'minpayment-trap', caption: 'Paying only the minimum keeps the balance alive and costs far more than it appears.' },
      { kind: 'p', text: 'The minimum payment is the smallest amount that keeps the account current. It is calculated to keep the account open, not to clear it. In most Indian cards it is around 2% of the statement or 5–10% of the limit, whichever is higher.' },
      {
        kind: 'formula',
        label: 'Why minimum payments feel slow and cost a lot',
        expr: 'On ₹1,00,000 at 36%, interest alone is about ₹3,000 a month — which can exceed the minimum payment',
        note: 'When interest exceeds your payment, the balance barely shrinks. That is the trap.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Minimum payments are not neutral',
        text: 'Many people believe paying the minimum is the responsible choice and paying in full would be irresponsible. It is the reverse. The minimum payment exists to keep the issuer earning interest; the full payment is what actually costs you nothing.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Escalating minimum payments',
        text: 'Many issuers increase the minimum percentage over time on revolving accounts. A card that started at 2% can drift toward 5–10%, and your "minimum" becomes larger every year even as you pay consistently. Check the current minimum rather than assuming it is fixed.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Set auto-pay for the full statement balance, never the minimum.',
          'If you must pay less, treat it as a short-term loan and plan to clear it fast.',
          'If a balance exists, do not keep using the card for new spending.',
          'Consider a balance transfer to a much lower-rate personal loan.',
          'Call the issuer to restructure if the balance is unmanageable — they prefer a borrower who pays.',
        ],
      },
      { kind: 'sim', name: 'minpayment', caption: 'Move the minimum-payment slider and watch the time and interest change.' },
    ],
    quiz: [
      {
        q: 'The minimum payment on a card is designed to:',
        options: [
          { text: 'Clear the balance in about a year', correct: false, why: 'That would contradict the lender\'s interest income.' },
          { text: 'Keep the account current and open while you continue paying interest', correct: true, why: 'Exactly right.' },
          { text: 'Cover the full interest for the month', correct: false, why: 'Sometimes interest alone exceeds it.' },
        ],
      },
      {
        q: 'When interest on a balance exceeds the minimum payment, the balance:',
        options: [
          { text: 'Shrinks steadily', correct: false, why: 'Not if interest exceeds the payment.' },
          { text: 'Barely shrinks, or grows if new spending continues', correct: true, why: 'Exactly right.' },
          { text: 'Automatically converts to a term loan', correct: false, why: 'It does not.' },
        ],
      },
      {
        q: 'If you cannot clear a card balance in full, the best next step is:',
        options: [
          { text: 'Keep paying the minimum indefinitely', correct: false, why: 'That maximises total interest.' },
          { text: 'Stop using the card and move the balance to a much lower-rate loan', correct: true, why: 'Exactly right.' },
          { text: 'Apply for a second card', correct: false, why: 'That doubles the problem.' },
        ],
      },
    ],
    takeaway: 'Minimum payments keep the account open, not your finances healthy. Auto-pay the full balance, and if a balance exists, stop using the card and move it to a lower-rate loan.',
  },
}