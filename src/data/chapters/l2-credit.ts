import type { Chapter } from '../../types'

/** Level 2, chapters 28–33: what revolving credit really costs, and how lenders judge you. */
export const credit: Record<string, Chapter> = {
  'l2-028': {
    id: 'l2-028',
    title: 'Interest On Credit Cards',
    subtitle: 'The most expensive money you will ever borrow',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'minpayment-trap', caption: 'Interest on the whole balance, roughly 3% a month, compounding against you.' },
      { kind: 'p', text: 'Card interest is charged monthly on your outstanding balance, not on your spending. That distinction matters: once a balance exists, every new purchase joins the balance and starts accruing interest too.' },
      {
        kind: 'table',
        caption: 'Typical Indian credit card rates',
        headers: ['Card type', 'Rate range', 'Revolving'],
        rows: [
          ['Premium / travel', '18–26%', 'Usually waived if you pay in full'],
          ['Cashback card', '30–38%', 'Usually charged'],
          ['Entry-level card', '35–42%', 'Usually charged'],
          ['Balance transfer card', '22–32% for a period', 'Charged thereafter'],
          ['Secured card', '24–34%', 'Charged'],
        ],
      },
      {
        kind: 'formula',
        label: 'Monthly interest',
        expr: 'Interest = Outstanding balance × monthly rate',
        note: 'A 36% annual rate is about 3% a month. ₹1,00,000 outstanding costs roughly ₹3,000 that month alone.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why some cards look cheap and are not',
        text: 'Premium cards often advertise zero interest provided you pay in full. The moment you do not, you are charged a rate similar to any other card — the discount was conditional on the very behaviour that also protects you. Never choose a card on its headline rate alone.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Card debt should be your most expensive repayment target',
        text: 'Because it is the most expensive debt you have. A personal loan at 11% is far cheaper than a card at 36%. If you are carrying card debt and also holding money in savings, moving cash to clear the card is usually a guaranteed large gain.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Pay the full statement balance every month, automatically.',
          'If a balance exists, freeze the card and stop new spending.',
          'Compare against a personal loan rate before carrying it for long.',
          'Never convert card debt into a longer-term loan without checking the total cost.',
          'Treat any balance as a signal to review your spending, not just your repayment.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Card interest is charged on:',
        options: [
          { text: 'Only the amount you spent this month', correct: false, why: 'It applies to the whole outstanding balance.' },
          { text: 'The outstanding balance, which includes earlier unpaid purchases', correct: true, why: 'Exactly right.' },
          { text: 'The credit limit', correct: false, why: 'Unused limit is not charged.' },
        ],
      },
      {
        q: 'A 36% annual card rate is approximately how much per month?',
        options: [
          { text: '1%', correct: false, why: 'That would be 12% a year.' },
          { text: 'About 3%', correct: true, why: 'Correct — 36 ÷ 12.' },
          { text: 'About 12%', correct: false, why: 'That would be 144% a year.' },
        ],
      },
      {
        q: 'If you hold card debt and savings, the sensible move is usually to:',
        options: [
          { text: 'Keep the savings and pay only the minimum', correct: false, why: 'That maximises interest paid.' },
          { text: 'Use savings to clear the card debt, which is a guaranteed large gain', correct: true, why: 'Exactly right.' },
          { text: 'Invest the savings in a risky fund to try to beat the card rate', correct: false, why: 'Guaranteed card interest beats speculative returns.' },
        ],
      },
    ],
    takeaway: 'Card interest applies to the whole outstanding balance at roughly 3% a month. Clear it completely, and if you must carry a balance, move it to a much cheaper loan.',
  },

  'l2-029': {
    id: 'l2-029',
    title: 'Late Fees',
    subtitle: 'Small amounts with long memories',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'The fee is small. The record it leaves is not.' },
      { kind: 'p', text: 'A late fee is a fixed charge for missing a due date. The amount is trivial; the consequences are not. Late payments are one of the most heavily weighted factors in credit scoring, and they stay on your record for years.' },
      {
        kind: 'table',
        caption: 'Late fee anatomy',
        headers: ['Element', 'Typical value'],
        rows: [
          ['Late payment fee', '₹500–₹1,200'],
          ['Penalty interest', 'A few percentage points above the standard rate'],
          ['Revoked benefits', 'Reward points or waived annual fee can be reversed'],
          ['Grace period loss', 'Interest starts from the original transaction date'],
          ['Record impact', 'Reported to bureaus for 24–36 months'],
          ['Repeated misses', 'Statement may be voided; account can be closed'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The ratio of pain to amount',
        text: 'A ₹900 fee on a ₹15,000 statement is a 6% penalty, for one late night. Paid on time it costs nothing. This asymmetry means a single administrative mistake — a holiday, a bank outage — can be far more expensive than it appears.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Ask for the waiver',
        text: 'Most issuers will reverse a first late fee if you have an otherwise clean record and you call promptly, before paying the penalty. This is a routine customer-service request, not a confrontation, and it works surprisingly often.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Pay at least two days early to cover processing delays.',
          'Keep a small buffer in the account that funds the payment.',
          'Set a recurring reminder as a backup to auto-pay.',
          'If you are genuinely short, pay the minimum early and clear it quickly rather than going late.',
          'Call the issuer immediately after any slip — the waiver window is short.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Late fees are most damaging because of:',
        options: [
          { text: 'The cash amount, which can be over ₹10,000', correct: false, why: 'Fees are usually ₹500–₹1,200.' },
          { text: 'The long-lasting effect on your credit record and access to future borrowing', correct: true, why: 'Exactly right.' },
          { text: 'The fact that they are not tax deductible', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'After a genuine one-off late payment, you should:',
        options: [
          { text: 'Wait and see whether it appears on your record', correct: false, why: 'Waiting removes your chance of a waiver.' },
          { text: 'Call the issuer promptly, as many reverse a first late fee for good customers', correct: true, why: 'Exactly right.' },
          { text: 'Close the card', correct: false, why: 'An unnecessary reaction.' },
        ],
      },
      {
        q: 'Penalty interest after a late payment usually:',
        options: [
          { text: 'Replaces your card interest at a lower rate', correct: false, why: 'It is higher, not lower.' },
          { text: 'Adds a few percentage points above the standard rate', correct: true, why: 'Correct.' },
          { text: 'Applies only to cash withdrawals', correct: false, why: 'It applies to the statement.' },
        ],
      },
    ],
    takeaway: 'Late fees are small in money but large in consequence. Pay a couple of days early, keep a buffer, and ask for a waiver straight after any slip.',
  },

  'l2-030': {
    id: 'l2-030',
    title: 'Rewards And Cashback',
    subtitle: 'Marketing that costs you more than it returns',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'spend-leak', caption: 'Rewards feel like rewards; in the budget they are small leaks wearing a disguise.' },
      { kind: 'p', text: 'Rewards are the main reason people choose between cards with similar fees and rates. They are genuinely low value when you price them honestly, because the reward rate is far below the interest you avoid by paying in full.' },
      {
        kind: 'table',
        caption: 'What rewards are really worth',
        headers: ['Benefit', 'Typical value', 'Realistic redemption'],
        rows: [
          ['Cashback', '0.5–2%', 'Direct reduction — genuinely useful'],
          ['Reward points', 'Often 1 point ≈ ₹0.20–₹0.50 stated', 'Often far less on redemption'],
          ['Airline miles', 'Varies wildly', 'Can be worth very little if booked badly'],
          ['Hotel stays', 'Fixed-point rates', 'Cheap if you would have stayed anyway'],
          [' Lounge access', '₹500–₹2,000 per visit', 'Only worth it if you would pay for it'],
          ['Movie tickets', '50–100% discount', 'Only worth it if you watch many'],
        ],
      },
      {
        kind: 'formula',
        label: 'Price the benefit against its cost',
        expr: 'If the annual fee is ₹5,000 and rewards are worth ₹2,000, the card costs you ₹3,000 a year',
        note: 'Compare that against the ~7% return you would earn on ₹5,000 in a deposit. The rewards are losing.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Nobody is in the rewards business to help you',
        text: 'A card issuer earns roughly 2% from merchant transactions, so a "2% cashback" card is usually a loss-maker for them unless you carry a balance. That means the real compensation is often in the interest — the honest economic cost of a rewards card is usually the interest, not the fee.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Rewards encourage overspending',
        text: 'Spending ₹1,000 to earn ₹20 feels efficient, so people spend more to accumulate. If you would not have made the purchase anyway, the reward is irrelevant — you have simply paid more for a habit.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Value rewards as a discount on things you already buy',
        text: 'The only rewards worth having are ones you would have spent on anyway: cashback on groceries, a discount on a flight you already planned. Anything requiring extra spending to redeem is not a saving.',
      },
    ],
    quiz: [
      {
        q: 'A card with a ₹5,000 annual fee and rewards worth ₹2,000 effectively costs you:',
        options: [
          { text: '₹2,000 a year', correct: false, why: 'You pay more than the rewards are worth.' },
          { text: '₹3,000 a year, which you could have earned interest on', correct: true, why: 'Exactly right.' },
          { text: 'Nothing', correct: false, why: 'Fees are not covered by rewards.' },
        ],
      },
      {
        q: 'Card issuers earn roughly 2% from merchants, so a 2% cashback card is profitable mainly when:',
        options: [
          { text: 'You use it for groceries', correct: false, why: 'That is usage, not profitability.' },
          { text: 'You carry a balance and pay interest', correct: true, why: 'Exactly right — interest is the real business.' },
          { text: 'You redeem points for flights', correct: false, why: 'Redemption is not their main revenue.' },
        ],
      },
      {
        q: 'The only rewards worth having are those on purchases you:',
        options: [
          { text: 'Would have made anyway', correct: true, why: 'Exactly right.' },
          { text: 'Make specifically to earn rewards', correct: false, why: 'That is paying more, not saving.' },
          { text: 'Make using a particular brand', correct: false, why: 'Brand restriction is a limitation.' },
        ],
      },
    ],
    takeaway: 'Rewards are usually worth less than the fee that funds them, and the real business is interest. Value rewards only on purchases you would have made anyway.',
  },

  'l2-031': {
    id: 'l2-031',
    title: 'Credit Utilisation',
    subtitle: 'The fastest score lever you control',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'score-meter', caption: 'Where you sit on this scale changes what lenders will offer you.' },
      { kind: 'p', text: 'Credit utilisation is your used balance divided by your total limit across all cards. It is the portion of your credit score you can change within a single month, which makes it the most actionable part of your credit profile.' },
      {
        kind: 'formula',
        label: 'The ratio',
        expr: 'Utilisation = Total card balance ÷ Total card limit',
        note: '30% or below is the commonly recommended ceiling; below 10% is excellent.',
      },
      {
        kind: 'table',
        caption: 'How utilisation is often scored',
        headers: ['Utilisation', 'Typical interpretation'],
        rows: [
          ['Below 10%', 'Excellent — plenty of headroom'],
          ['10–30%', 'Healthy and safe'],
          ['30–50%', 'Acceptable, but approaching a risk flag'],
          ['50–75%', 'High risk'],
          ['Above 75%', 'Indicates financial stress to lenders'],
          ['100%', 'Maximum alarm'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Both ends of the range look bad',
        text: 'Very low utilisation can read as an unused, inactive account. The useful pattern is around 10–30%: enough activity to look normal, with plenty of headroom. If you pay your card in full every month, you will naturally sit near the bottom — which is fine.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'It is a snapshot, not a history',
        text: 'Most Indian bureaus report utilisation as of your statement date, not today. So a balance you have already paid may still be recorded. That is why lowering utilisation takes one full statement cycle to show up in your score — and why you should act early before a loan application.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Request your limit increase before a loan application, then wait a full cycle.',
          'Pay balances before the statement date, not after.',
          'Check the limit on your oldest card too — it counts in the total.',
          'Close cards only if they carry a zero balance.',
          'Review utilisation monthly alongside your statement.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A generally recommended ceiling for credit utilisation is:',
        options: [
          { text: '90%', correct: false, why: 'That is very high risk.' },
          { text: 'Around 30% or below', correct: true, why: 'Correct.' },
          { text: 'Exactly 100%', correct: false, why: 'That signals maximum stress.' },
        ],
      },
      {
        q: 'Utilisation is calculated using:',
        options: [
          { text: 'Your balance and limit on your largest card only', correct: false, why: 'It is across all cards.' },
          { text: 'Your total balance across all cards divided by your total limit', correct: true, why: 'Exactly right.' },
          { text: 'Your credit score divided by 900', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Why act early before applying for a loan?',
        options: [
          { text: 'Lenders only check once a year', correct: false, why: 'Unrelated.' },
          { text: 'Because utilisation is reported as of the statement date, so a reduction takes a full cycle to appear', correct: true, why: 'Exactly right.' },
          { text: 'Because banks require 90 days of notice', correct: false, why: 'No such rule.' },
        ],
      },
    ],
    takeaway: 'Utilisation is total balance over total limit, and it is the fastest credit-score lever you control. Keep it near or below 30%, and act a full statement cycle before a loan application.',
  },

  'l2-032': {
    id: 'l2-032',
    title: 'Credit Scores',
    subtitle: 'How lenders read your financial history',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'score-meter', caption: 'Indian credit scores run from 300 to 900, and payment history dominates the calculation.' },
      { kind: 'p', text: 'A credit score is a number summarising your credit history, used by lenders to price borrowing. In India the main bureau scores run from 300 to 900. Most people with no credit history at all — which includes many first-time borrowers — are scored around the middle or below.' },
      {
        kind: 'table',
        caption: 'What drives a credit score',
        headers: ['Factor', 'Approx. weight', 'What it means'],
        rows: [
          ['Payment history', '~50–65%', 'Do you pay on time — the dominant factor'],
          ['Credit utilisation', '~15–20%', 'How much of your limit you use'],
          ['Age of accounts', '~7–15%', 'How long your accounts have existed'],
          ['Mix of credit', '~5–10%', 'Having a variety of credit types'],
          ['New applications', '~5–10%', 'Recent hard inquiries for credit'],
        ],
      },
      {
        kind: 'table',
        caption: 'Indian score bands and what they unlock',
        headers: ['Band', 'What lenders generally see'],
        rows: [
          ['750+', 'Best available rates'],
          ['700–749', 'Competitive rates'],
          ['650–699', 'Acceptable, slightly higher rates'],
          ['600–649', 'Higher rates, tighter limits'],
          ['550–599', 'Poor — often declined for unsecured credit'],
          ['Below 550', 'Very difficult borrowing'],
          ['No history', 'Treated cautiously — the "thin file" problem'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The thin-file problem is real in India',
        text: 'Millions of salaried people have no credit card, no loan and therefore no score. Lenders often cannot assess them and approve the loan anyway — but at higher rates or with more collateral. A secured card or a small EMI-based loan is how you start building a record.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'How to start a file from zero',
        text: 'Get a secured card against a small fixed deposit, or take a small loan and repay it on time. A guaranteed credit card is the easiest starting point, because approval is essentially automatic and the deposit generates no interest cost.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Check your score at a bureau before applying for credit.',
          'Fix payment history first — it is the biggest lever.',
          'Keep utilisation low.',
          'Do not apply for several cards at once.',
          'Build a file early if you have no history at all.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The single most important factor in a credit score is:',
        options: [
          { text: 'The age of your oldest card', correct: false, why: 'It matters, but not most.' },
          { text: 'Your payment history', correct: true, why: 'Exactly right.' },
          { text: 'Your income', correct: false, why: 'Income is not part of the score.' },
        ],
      },
      {
        q: 'A person with no loans and no cards typically has:',
        options: [
          { text: 'A perfect score', correct: false, why: 'No history means nothing to score.' },
          { text: 'A thin credit file, which makes borrowing harder rather than easier', correct: true, why: 'Exactly right.' },
          { text: 'An automatic score of 850', correct: false, why: 'Not how scoring works.' },
        ],
      },
      {
        q: 'The easiest way to begin building a credit file from zero is:',
        options: [
          { text: 'Taking a large unsecured loan', correct: false, why: 'High risk and often declined.' },
          { text: 'A small secured loan or a guaranteed credit card, repaid on time', correct: true, why: 'Exactly right.' },
          { text: 'Checking your score more often', correct: false, why: 'Checking is not building.' },
        ],
      },
    ],
    takeaway: 'Indian credit scores run 300–900 and are driven mainly by payment history, then utilisation. With no history at all, a small secured loan or guaranteed card is how you start.',
  },

  'l2-033': {
    id: 'l2-033',
    title: 'Credit History',
    subtitle: 'The record behind the number',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'score-meter', caption: 'The score summarises this record — but lenders also read the details underneath.' },
      { kind: 'p', text: 'Credit history is the underlying record of your accounts and payments — every loan, every card, every missed due date. The score is just a summary of it. Because the record is what lenders actually examine in detail, the specifics matter.' },
      {
        kind: 'table',
        caption: 'What stays on your record',
        headers: ['Item', 'How long it is reported'],
        rows: [
          ['Late payment on a card', 'Typically 24–36 months'],
          ['Loan default', 'Several years'],
          ['Loan account closed and paid', 'Retained for a period, then updated'],
          ['Credit card enquiry', 'Around 12 months'],
          ['Loan closure', 'Reported for a period after closure'],
          ['Settled or written-off account', 'Often reported for a long time'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Errors are common and worth disputing',
        text: 'Credit bureaus in India report data supplied by lenders, and mistakes are common — closed accounts still marked open, wrong dates, balances that do not match your records. Disputing an incorrect entry is free, and can be done directly with the bureau or through the lender. Always check at least once a year.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Old good accounts help too',
        text: 'A long history of accounts that were opened years ago and always paid on time is valuable, because it demonstrates stability. Do not close an old, unused card if it has no fee — it continues to contribute to your account age and mix.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Settling a loan does not erase it',
        text: 'A settled or written-off loan is usually still reported. The record softens over time, but closing the position does not remove it. This is why avoiding default in the first place is much better than repairing it afterwards.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Check your credit report once a year, from more than one bureau.',
          'Dispute any entry that is factually wrong, in writing.',
          'Keep old, fee-free cards open for account age.',
          'Never let a small default sit unaddressed — talk to the lender early.',
          'If you are struggling, ask for restructuring before you default.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Credit history is best described as:',
        options: [
          { text: 'The single number lenders use', correct: false, why: 'That is the score.' },
          { text: 'The underlying record of your accounts, payments and defaults', correct: true, why: 'Exactly right.' },
          { text: 'Your annual income history', correct: false, why: 'Income is separate.' },
        ],
      },
      {
        q: 'A closed credit card account that you always paid on time:',
        options: [
          { text: 'Hurts your score', correct: false, why: 'It does not hurt.' },
          { text: 'Can continue helping your account age if you keep it open', correct: true, why: 'Exactly right — if it has no fee.' },
          { text: 'Is always removed from your record immediately', correct: false, why: 'It is reported for a period.' },
        ],
      },
      {
        q: 'Why check your credit report annually?',
        options: [
          { text: 'To improve your score', correct: false, why: 'Checking does not improve the score.' },
          { text: 'Because errors such as closed accounts still marked open are common and worth disputing', correct: true, why: 'Exactly right.' },
          { text: 'Because lenders require it', correct: false, why: 'No requirement.' },
        ],
      },
    ],
    takeaway: 'Credit history is the record, the score is the summary. Old fee-free accounts help, errors are common and disputable, and settling a default does not erase it.',
  },
}