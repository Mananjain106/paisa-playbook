import type { Chapter } from '../../types'

/** Level 2, chapters 42–46: kinds of debt, and the ones worth avoiding. */
export const loanTypes: Record<string, Chapter> = {
  'l2-042': {
    id: 'l2-042',
    title: 'Secured Vs Unsecured Loans',
    subtitle: 'What the lender can take back decides the price',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'secured-vs-unsecured', caption: 'Collateral is why secured loans carry lower rates.' },
      { kind: 'p', text: 'A secured loan is backed by an asset the lender can sell if you default. An unsecured loan has no collateral, so the lender charges more to cover the higher risk. This single distinction explains most of the interest-rate differences you see in India.' },
      {
        kind: 'table',
        caption: 'Secured vs unsecured',
        headers: ['Feature', 'Secured', 'Unsecured'],
        rows: [
          ['Collateral', 'Yes — property, vehicle, gold', 'None'],
          ['Interest rate', 'Lower', 'Higher, often 2–5% more'],
          ['Tenure', 'Longer, up to 30 years', 'Shorter, usually 1–5 years'],
          ['Approval', 'Depends on the asset\'s value', 'Based on income and credit history'],
          ['On default', 'Lender can sell the asset', 'Recovery through legal process'],
          ['Examples', 'Home, vehicle, LAP, gold loan', 'Personal, credit card, professional loan'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The trade is risk, not generosity',
        text: 'A lower rate is not a favour. You are paying less because the lender can recover from your house if things go wrong. A borrower with unstable income who takes a secured loan is taking on the worst kind of risk: a high obligation backed by your most important asset.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Loan against property is not free money',
        text: 'LAP lets you borrow against your home at a reasonable rate, but a default still means losing the home. It is a legitimate product for a genuine need, and a dangerous one if used to fund ongoing lifestyle spending.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Prefer secured loans for assets with a clear resale market.',
          'Understand exactly which asset is pledged before signing.',
          'Check insurance and maintenance obligations that come with collateral.',
          'Avoid secured debt taken purely to fund consumption.',
          'Never pledge the asset your family depends on to cover a temporary shortfall.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Secured loans generally carry lower interest because:',
        options: [
          { text: 'The lender has less work to do', correct: false, why: 'That is not the mechanism.' },
          { text: 'The lender can recover from the collateral if you default, so the risk is lower', correct: true, why: 'Exactly right.' },
          { text: 'Governments subsidise them', correct: false, why: 'No general subsidy.' },
        ],
      },
      {
        q: 'Taking a secured loan on your home to fund lifestyle spending is risky mainly because:',
        options: [
          { text: 'It has a higher interest rate', correct: false, why: 'Secured loans are cheaper.' },
          { text: 'A default could cost you the home your family depends on', correct: true, why: 'Exactly right.' },
          { text: 'It reduces your credit score immediately', correct: false, why: 'Not immediate.' },
        ],
      },
      {
        q: 'A loan against property (LAP) is best described as:',
        options: [
          { text: 'A way to borrow against the value of an asset you already own', correct: true, why: 'Exactly right.' },
          { text: 'A government subsidy scheme', correct: false, why: 'It is a bank product.' },
          { text: 'Interest-free borrowing', correct: false, why: 'It carries interest.' },
        ],
      },
    ],
    takeaway: 'Collateral is why secured loans are cheaper — and why taking them on unstable income is the most dangerous kind of debt. Use secured lending for assets, never for lifestyle spending.',
  },

  'l2-043': {
    id: 'l2-043',
    title: 'Good Debt Vs Bad Debt',
    subtitle: 'The distinction is about the purpose, not the lender',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'secured-vs-unsecured', caption: 'Good debt is backed by something you keep. Bad debt leaves you with nothing.' },
      { kind: 'p', text: 'Good debt is borrowed to buy something whose value or income exceeds the cost of the loan. Bad debt is borrowed to buy consumption that leaves you with nothing at the end. The lender and the interest rate are irrelevant to this distinction — the same personal loan can be good or bad.' },
      {
        kind: 'table',
        caption: 'Good and bad debt side by side',
        headers: ['Good debt', 'Bad debt'],
        rows: [
          ['Home loan on a property you will live in', 'Personal loan for a holiday'],
          ['Education loan for a course with real returns', 'Loan for a phone upgrade'],
          ['Business loan for equipment that earns', 'Loan to cover recurring overspending'],
          ['Loan to replace an unproductive asset', 'Loan to cover another loan\'s EMI'],
          ['Vehicle loan for a vehicle you need for work', 'Loan for a car purely for status'],
          ['Debt cleared to fund further investment', 'Credit card balance carried for rewards'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The test is the end state',
        text: 'Ask: at the end of the loan, will I have an asset or a skill worth more than the total interest I paid? If yes, the debt was productive. If I will simply have spent the money, it was consumption — and the interest is a pure loss.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The grey zone is pre-payment',
        text: 'Borrowing to invest is sometimes productive and often not. If the expected return is genuinely above the loan rate after tax and fees, it can be sound. If the "investment" is a property bought for speculation, or a business you have not tested, it is bad debt with a complicated story attached.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Pay off bad debt before adding good debt',
        text: 'If you are carrying credit card debt, new borrowing is almost always wrong, because your highest-rate debt is untouched. Clear the expensive debt first, then invest in productive assets with the surplus.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask, before borrowing: what will I own that is worth more than the interest?',
          'Never borrow for a depreciating, quickly-outdated good.',
          'Treat education as the exception — it can raise lifetime earnings.',
          'Never take one loan to service another unless the rates make it clearly cheaper.',
          'Review your loan list annually and label each one good or bad.',
        ],
      },
    ],
    quiz: [
      {
        q: 'What distinguishes good debt from bad debt?',
        options: [
          { text: 'Whether the lender is a bank or a non-bank', correct: false, why: 'Irrelevant.' },
          { text: 'Whether the borrowed money produces an asset or skill worth more than the interest paid', correct: true, why: 'Exactly right.' },
          { text: 'Whether the interest rate is low', correct: false, why: 'A cheap bad loan is still bad.' },
        ],
      },
      {
        q: 'A personal loan taken to pay off a credit card balance is:',
        options: [
          { text: 'Bad debt, because you are borrowing to service borrowing', correct: false, why: 'It can be good — you are replacing 36% debt with 12% debt.' },
          { text: 'Good debt when the rate saving clearly exceeds the fees, because it replaces very expensive debt', correct: true, why: 'Exactly right — consolidation for a real saving is sound.' },
          { text: 'Always bad regardless of rates', correct: false, why: 'That ignores the arithmetic.' },
        ],
      },
      {
        q: 'Why clear credit card debt before taking new loans?',
        options: [
          { text: 'Because lenders refuse new applications', correct: false, why: 'Not necessarily.' },
          { text: 'Because your most expensive debt is still growing interest while the new loan adds nothing', correct: true, why: 'Exactly right.' },
          { text: 'Because new loans are always unsecured', correct: false, why: 'False.' },
        ],
      },
    ],
    takeaway: 'Good debt leaves you with something worth more than the interest; bad debt leaves you with nothing. Judge by the end state, not the lender or the rate.',
  },

  'l2-044': {
    id: 'l2-044',
    title: 'Consumer Loans',
    subtitle: 'The easiest debt to take and the hardest to escape',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'fomo-chase', caption: 'Instant approval removes deliberation entirely — the moment you feel it is the moment to wait.' },
      { kind: 'p', text: 'A consumer loan is unsecured borrowing for personal purchases. Because there is no collateral, approval is fast and access is easy — which is precisely why consumer loans are so strongly associated with financial trouble.' },
      {
        kind: 'table',
        caption: 'Consumer loans in India',
        headers: ['Type', 'Rate', 'Typical use', 'Risk'],
        rows: [
          ['Personal loan', '11–18%', 'Debt consolidation, wedding, medical', 'High'],
          ['Instant/online personal loan', '16–36%', 'Anything, immediately', 'Very high'],
          ['Overdraft on savings', '10–16%', 'Working capital', 'Moderate'],
          ['Credit card balance transfer', '22–32%', 'Consolidating card debt', 'Moderate'],
          ['Loan against jewellery', '12–24%', 'Urgent cash', 'Very high'],
          ['Microfinance / SHG', '18–26%', 'Small-ticket needs', 'High'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The approval speed is the trap',
        text: 'Instant loans are designed to be approved in minutes because a verified digital profile makes risk assessment cheap. The ease is deliberate: the decision happens before deliberation can. Slow down deliberately — a loan you do not need is always the cheapest one you never apply for.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Unsecured means the lender prices your desperation',
        text: 'An instant lender charges 30%+ because it is pricing for risk and speed. A borrower who is turned down by banks is precisely the borrower being charged the highest rate — and charged again for having paid the first one.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The only good consumer loan reason',
        text: 'Debt consolidation, where you replace several high-rate debts with one lower-rate loan and the saving is real and large. For anything else, a personal loan is expensive consumption debt dressed as a financial tool.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Wait 48 hours before accepting any instant loan offer.',
          'Compare the total cost, not the advertised rate.',
          'Never borrow a smaller amount than offered.',
          'Use a consolidation loan only when it genuinely lowers your cost.',
          'Never take a second consumer loan to service the first.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why are instant consumer loans particularly risky?',
        options: [
          { text: 'Because their interest rates are lower', correct: false, why: 'They are higher.' },
          { text: 'Because the approval is so fast that deliberation almost never happens', correct: true, why: 'Exactly right.' },
          { text: 'Because they are illegal', correct: false, why: 'They are legal.' },
        ],
      },
      {
        q: 'The most defensible reason for a consumer loan is:',
        options: [
          { text: 'A wedding', correct: false, why: 'That is consumption.' },
          { text: 'Consolidating several high-interest debts into one lower-rate loan', correct: true, why: 'Exactly right.' },
          { text: 'A holiday with friends', correct: false, why: 'That is consumption.' },
        ],
      },
      {
        q: 'Unsecured lenders charge high rates mainly because:',
        options: [
          { text: 'They are charities', correct: false, why: 'They are commercial lenders.' },
          { text: 'There is no collateral, so the risk must be priced into the rate', correct: true, why: 'Exactly right.' },
          { text: 'They charge lower fees', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Consumer loans are easy to take because they are unsecured and fast. The only defensible reason is consolidating expensive debt into cheaper debt — otherwise the interest is a pure loss.',
  },

  'l2-045': {
    id: 'l2-045',
    title: 'Buy Now Pay Later',
    subtitle: 'Small amounts, enormous cost, spread invisibly',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'bnpl-stack', caption: 'Three tiny instalments a month, repeated across five apps, become a number you never chose.' },
      { kind: 'p', text: 'Buy Now Pay Later services let you split a small purchase into three or four instalments, often with no interest at all. The instalment looks free. The cost has not disappeared — it has moved into a short credit period, and into the fact that you can take on several BNPL obligations simultaneously without noticing.' },
      {
        kind: 'table',
        caption: 'BNPL economics',
        headers: ['Fact', 'Consequence'],
        rows: [
          ['Three-month credit window', 'Interest accrues much sooner than on a card'],
          ['Instant approval', 'No deliberation, no cooling-off'],
          ['Often no visible limit', 'You can stack four instalment plans unnoticed'],
          ['Missed payments reported', 'Impacts your credit file in some cases'],
          ['Multiple apps, multiple limits', 'Real total exposure is far higher than it looks'],
          ['Late fees are steep', 'Penalties can be applied per instalment'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Three months is a very short fuse',
        text: 'A card gives you roughly fifty days of interest-free credit. BNPL gives you about ninety, split into three instalments. On ₹20,000 at 24%, that is roughly three instalments of interest instead of fifty days — a much worse deal than the "no interest" label suggests.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The real product is more spending',
        text: 'BNPL converts a spending decision into many small ones, which is exactly how it works psychologically. Four subscriptions at ₹1,000 a month feel trivially affordable. Across six apps, that is ₹72,000 a year in obligations you never consciously approved as a total.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Treat it as a loan, always',
        text: 'Before confirming a BNPL plan, ask what the total cost would be on a card, and what it would be if you paid the cash price yourself. Then ask which of those the purchase actually justifies. If none do, skip it.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Add up all active BNPL commitments before approving another.',
          'Set a due-date alert for every instalment.',
          'Never use BNPL for utilities or essentials — those belong on a debit card.',
          'Check whether the app reports to a credit bureau before signing up.',
          'If you already have four or more active plans, pause all new ones.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why is a BNPL instalment plan more expensive than it appears?',
        options: [
          { text: 'Because the interest is charged up front', correct: false, why: 'Unusual, and not the main issue.' },
          { text: 'Because the credit period is only about 90 days, so any interest starts very early', correct: true, why: 'Exactly right.' },
          { text: 'Because merchants charge more', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'The main danger of BNPL is:',
        options: [
          { text: 'Very high interest on the first instalment', correct: false, why: 'That is not the pattern.' },
          { text: 'That small, easy instalments across multiple apps add up to a large unnoticed total obligation', correct: true, why: 'Exactly right.' },
          { text: 'That it is illegal in India', correct: false, why: 'It is legal and widely used.' },
        ],
      },
      {
        q: 'Before approving a BNPL plan, the best question is:',
        options: [
          { text: 'How many instalments?', correct: false, why: 'That is a detail, not the decision.' },
          { text: 'What is my total outstanding across all BNPL apps, and does this purchase justify it?', correct: true, why: 'Exactly right.' },
          { text: 'Which brand is offering it?', correct: false, why: 'Irrelevant.' },
        ],
      },
    ],
    takeaway: 'BNPL splits small purchases over a very short credit window, so the cost is higher than it looks. Add up all active plans across every app before approving another.',
  },

  'l2-046': {
    id: 'l2-046',
    title: 'Vehicle Loans',
    subtitle: 'Secured, cheap, and structured to be affordable',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'vehicle-emi-true', caption: 'The EMI is engineered to be affordable — which is not the same as being a good deal.' },
      { kind: 'p', text: 'A vehicle loan is secured by the vehicle itself, which is why rates are lower than personal loans and approval is quick. The structure is built so the EMI is affordable — but affordability is engineered to be the wrong measure for a depreciating purchase.' },
      {
        kind: 'table',
        caption: 'Vehicle loan basics',
        headers: ['Aspect', 'Typical position in India'],
        rows: [
          ['Rate', '9–14%'],
          ['Tenure', '3–7 years'],
          ['Max LTV', 'Around 85%'],
          ['Processing fee', '₹2,500–₹6,000'],
          ['Hypothecation', 'Lender holds title until full repayment'],
          ['Insurance', 'Comprehensive cover usually mandatory'],
          ['Prepayment charge', '2–5%, varies by lender'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The maths of the maximum affordable EMI',
        text: 'A ₹9 lakh car with 85% financing over 7 years at 10% produces an EMI near ₹16,600 — a number many families can just about manage. But the car depreciates perhaps 40% in three years, so you would be paying interest on a steadily shrinking asset while the asset shrinks faster than your balance.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A longer tenure on a depreciating asset is a trap',
        text: 'Extending a car loan to seven years to make the EMI small means you pay far more interest, and you are likely to still owe money when the vehicle needs its first major repair. Shorter tenures keep you in step with the asset\'s life.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Always compute the total, not the EMI',
        text: 'A lower EMI from a longer tenure almost always costs more overall. Compare the total interest across tenures, and include insurance, registration and fuel — running costs usually exceed the loan cost over a car\'s life.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Insurance is bundled, so price it',
        text: 'Comprehensive insurance is usually mandatory with the loan. Ask for the premium separately and check whether the insurer is the lender\'s partner. Where a lender holds an insurance arrangement, it can be one of the higher-value components of the loan cost.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Compare total interest across tenures, not just EMIs.',
          'Aim for a tenure shorter than the vehicle\'s useful life.',
          'Put as much down as you can reasonably afford to reduce interest.',
          'Price insurance separately and check for a lender margin.',
          'Keep the RC and insurance with you, and check hypothecation before sale.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why is a long vehicle loan tenure often a mistake?',
        options: [
          { text: 'Because banks do not permit tenures above five years', correct: false, why: 'Seven years is common.' },
          { text: 'Because the asset depreciates fast, so you pay interest on something losing value while still owing on it', correct: true, why: 'Exactly right.' },
          { text: 'Because insurance becomes invalid', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'A vehicle loan is secured by:',
        options: [
          { text: 'Your salary', correct: false, why: 'Unsecured loans use income.' },
          { text: 'The vehicle itself, through hypothecation', correct: true, why: 'Correct.' },
          { text: 'Your credit score', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'When comparing vehicle loans, compare:',
        options: [
          { text: 'Only the EMI', correct: false, why: 'A low EMI can hide a higher total.' },
          { text: 'Total interest plus fees and insurance across tenures', correct: true, why: 'Exactly right.' },
          { text: 'The number of empanelled dealers', correct: false, why: 'Irrelevant to cost.' },
        ],
      },
    ],
    takeaway: 'Vehicle loans are cheap because the car is collateral, but a long tenure on a fast-depreciating asset means paying interest on something losing value. Compare totals and keep tenure under the asset\'s life.',
  },
}