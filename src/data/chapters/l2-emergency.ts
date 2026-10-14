import type { Chapter } from '../../types'

/** Level 2, chapters 13–20: the buffer that stops emergencies becoming debt. */
export const emergency: Record<string, Chapter> = {
  'l2-013': {
    id: 'l2-013',
    title: 'Emergency Funds',
    subtitle: 'The single highest-return money habit there is',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'emergency-ladder', caption: 'More months of expenses suits more volatile incomes and heavier responsibilities.' },
      { kind: 'p', text: 'An emergency fund is cash reserved for unexpected, unavoidable expenses — a medical bill, a bike repair, three months without income. It exists so that a bad month does not become expensive debt. On a risk-adjusted basis it is the highest-return thing most people can do, because it eliminates the 36% interest you would otherwise pay.' },
      {
        kind: 'formula',
        label: 'The arithmetic of an emergency fund',
        expr: 'Benefit = interest rate you avoid × emergency amount',
        note: 'Avoiding 36% card interest on a ₹2 lakh balance is a guaranteed 36% return, with no market risk at all.',
      },
      {
        kind: 'table',
        caption: 'What counts as an emergency',
        headers: ['Is an emergency', 'Is not an emergency'],
        rows: [
          ['Hospital bill', 'A sale you missed'],
          ['Vehicle or home repair', 'A holiday you had planned'],
          ['Layoff or income loss', 'A new phone upgrade'],
          ['Medical emergency for parents', 'A stock-market fall'],
          ['Essential roof or plumbing fix', 'A friend\'s wedding'],
          ['Job loss notice period', 'Grocery shopping'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Priority order puts it first',
        text: 'Clear high-interest card debt first, because that is paying off the most expensive debt you have. But an emergency fund and debt repayment are complements: without a buffer, every new emergency pushes you back onto the card, and the cycle restarts.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not invest the emergency fund',
        text: 'Money needed next month must not be exposed to market swings or deposit penalties. An emergency fund that loses 15% in a market fall is no longer an emergency fund. Keep it safe and accessible; that is its entire job.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Open a separate account, ideally at a different bank.',
          'Automate a transfer on payday until the target is reached.',
          'Keep it immediately withdrawable, not in a penalty deposit.',
          'Refill it immediately after any use — do not wait for a bonus.',
          'Replenish it before resuming discretionary spending after a job loss.',
        ],
      },
      { kind: 'sim', name: 'networth', caption: 'Add your emergency fund as a distinct asset, not as part of general savings.' },
    ],
    quiz: [
      {
        q: 'An emergency fund exists primarily to:',
        options: [
          { text: 'Earn a high return', correct: false, why: 'It is deliberately low-return and safe.' },
          { text: 'Prevent unexpected expenses from becoming expensive debt', correct: true, why: 'Exactly right.' },
          { text: 'Build wealth quickly', correct: false, why: 'It is insurance, not a growth vehicle.' },
        ],
      },
      {
        q: 'Which of these justifies using the emergency fund?',
        options: [
          { text: 'A 40% discount on a jacket you wanted', correct: false, why: 'That is a want.' },
          { text: 'A sudden ₹85,000 hospital bill', correct: true, why: 'Correct — genuinely unavoidable.' },
          { text: 'A market dip you want to exploit', correct: false, why: 'That is investing, not an emergency.' },
        ],
      },
      {
        q: 'Why should the emergency fund not be invested in equities?',
        options: [
          { text: 'Because equities are illegal to hold in India', correct: false, why: 'Obviously false.' },
          { text: 'Because a fall in value when you need the money makes it useless', correct: true, why: 'Exactly right.' },
          { text: 'Because banks do not allow it', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'An emergency fund is deliberately boring: safe, separate and immediately accessible. Avoiding 36% card interest makes it the highest-return saving you can make.',
  },

  'l2-014': {
    id: 'l2-014',
    title: 'Safety-Net Accounts',
    subtitle: 'Three accounts that catch different kinds of bad news',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emergency-ladder', caption: 'One pot for spending, one for emergencies, one for goals — each ring protected from the others.' },
      { kind: 'p', text: 'A safety-net account is one that exists to absorb a specific class of problem. Building separate accounts for separate risks works because it stops you dipping the wrong pot at the wrong time — which is how most emergency funds quietly disappear.' },
      {
        kind: 'table',
        caption: 'The three-account structure',
        headers: ['Account', 'Purpose', 'Where the money sits'],
        rows: [
          ['Daily spending', 'Current month expenses', 'Salary/current account, UPI'],
          ['Emergency buffer', '3–6 months of expenses', 'Savings or high-interest account'],
          ['Large or long-term', 'House, retirement, goals', 'FD, equity, NPS'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Three accounts, not three banks',
        text: 'The benefit of separation is psychological as much as practical. If emergency money is in the same account you spend from, you will spend it — the friction that stops you is simply not there. Different accounts create the pause that protects the buffer.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The co-owner point',
        text: 'For your emergency account, consider adding your partner as a joint holder rather than just a nominee. A joint holder can operate it immediately in a crisis; a nominee typically cannot act while you are alive, and cannot always act at all without documentation. Read the bank\'s specific terms.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'One account for spending, one for emergencies, one for goals.',
          'Set up standing instructions so the split happens automatically.',
          'Review the allocation quarterly as income or expenses change.',
          'Never let emergency money migrate into goals without a deliberate decision.',
          'Keep the goal account separate per goal so you can see progress.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Automate the split on payday',
        text: 'The most reliable structure is: salary lands in account one, standing instructions move the emergency portion and the goal portion out on the same day, and what remains is what you may spend. Saving becomes structural rather than a decision you repeatedly fail to make.',
      },
    ],
    quiz: [
      {
        q: 'Why keep the emergency fund in a different account from spending money?',
        options: [
          { text: 'Banks offer higher rates on separate accounts', correct: false, why: 'Rates are the same.' },
          { text: 'Because the friction of a transfer prevents you spending it on something avoidable', correct: true, why: 'Exactly right.' },
          { text: 'Because the law requires it', correct: false, why: 'No such requirement.' },
        ],
      },
      {
        q: 'A joint account holder, compared with a nominee:',
        options: [
          { text: 'Has no additional rights', correct: false, why: 'There are real differences.' },
          { text: 'Can usually operate the account immediately, which matters in an emergency', correct: true, why: 'Correct.' },
          { text: 'Owns the money outright', correct: false, why: 'Not outright ownership.' },
        ],
      },
      {
        q: 'The best time to move money into these separate accounts is:',
        options: [
          { text: 'Whenever you happen to remember', correct: false, why: 'Inconsistent, so it does not happen.' },
          { text: 'Automatically on payday, via standing instructions', correct: true, why: 'Exactly right.' },
          { text: 'At year end for tax', correct: false, why: 'Far too late.' },
        ],
      },
    ],
    takeaway: 'Separate your money by purpose: daily spending, emergency buffer, long-term goals. The separation creates friction that stops the wrong pot being spent at the wrong time.',
  },

  'l2-015': {
    id: 'l2-015',
    title: 'Calculating Your Emergency-Fund Requirement',
    subtitle: 'The right number, not a round guess',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'An emergency fund target should be calculated from your actual expenses, then adjusted for how stable your income and how heavy your responsibilities are. The common mistake is using income, when the correct base is what you actually need to survive.' },
      {
        kind: 'formula',
        label: 'The core calculation',
        expr: 'Target = (Essential monthly expenses × months of cover) + known near-term costs',
        note: 'Use essentials only — rent, food, transport, utilities, EMIs, insurance. Not your full lifestyle spend.',
      },
      {
        kind: 'example',
        title: 'A worked calculation',
        text: 'Essential monthly expenses: rent ₹22,000, food ₹9,000, transport ₹4,000, utilities and phone ₹3,000, insurance ₹2,500 = ₹40,500. At six months that is ₹2,43,000. Add ₹1,00,000 for a planned deductible on a health policy you already know about, and the target becomes ₹3,43,000.',
      },
      {
        kind: 'table',
        caption: 'Adjusting the target by circumstance',
        headers: ['Situation', 'Adjustment'],
        rows: [
          ['Salaried, dual-income household', '3 months is often enough'],
          ['Single income, dependents', '6 months or more'],
          ['Freelancer or commission income', '9–12 months'],
          ['Self-employed with variable pay', '9–12 months'],
          ['Near retirement', 'Higher, because recovery time is shorter'],
          ['Health risks or ageing parents', 'Add a health deductible and higher medical reserve'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Use essentials, not your full spend',
        text: 'If you calculate six months of your current lifestyle you will over-target and stall before you finish. Calculate six months of the minimum you need to live — and that number is usually lower and more motivating than people expect.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Adjust for insurance gaps',
        text: 'Many households are uninsured or under-insured, which means a large part of their emergency fund is permanently allocated to medical costs. If your health cover is ₹5 lakh on a hospital bill of ₹15 lakh, your emergency fund is not free — it is partly a hidden insurance premium.',
      },
      { kind: 'sim', name: 'cover', caption: 'Check how much of your emergency fund is really standing in for missing insurance.' },
    ],
    quiz: [
      {
        q: 'Your emergency fund target should be based on:',
        options: [
          { text: 'Your gross monthly income', correct: false, why: 'Income is the wrong base.' },
          { text: 'Your essential monthly expenses multiplied by the number of months you want covered', correct: true, why: 'Exactly right.' },
          { text: 'Your total monthly spending including all wants', correct: false, why: 'That over-targets you significantly.' },
        ],
      },
      {
        q: 'A freelancer with irregular income should usually target:',
        options: [
          { text: 'One month, to stay flexible', correct: false, why: 'Too little for irregular income.' },
          { text: 'Nine to twelve months, because a quiet spell is normal, not exceptional', correct: true, why: 'Correct.' },
          { text: 'No emergency fund, since income is variable', correct: false, why: 'The opposite is true.' },
        ],
      },
      {
        q: 'Why is a health insurance deductible part of emergency fund planning?',
        options: [
          { text: 'It does not belong in the calculation', correct: false, why: 'It does belong.' },
          { text: 'Because part of your emergency fund is effectively standing in for insurance you do not have', correct: true, why: 'Exactly right.' },
          { text: 'Because deductibles are tax-deductible', correct: false, why: 'Not the reason.' },
        ],
      },
    ],
    takeaway: 'Calculate your target from essential expenses times the months you want covered, then adjust for income stability, dependents and insurance gaps.',
  },

  'l2-016': {
    id: 'l2-016',
    title: '3-Month Vs 6-Month Vs Larger Reserves',
    subtitle: 'More is safer, but past a point it is wasted',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emergency-ladder', caption: 'There is a point where extra reserve stops buying security and starts costing growth.' },
      { kind: 'p', text: 'Three months, six months and twelve months are not rules of nature — they are trade-offs between safety and growth. Beyond a certain point, money sitting in a 3.5% savings account actively works against you, because inflation is eating it every month it stays there.' },
      {
        kind: 'table',
        caption: 'Choosing your level',
        headers: ['Level', 'Suits', 'Trade-off'],
        rows: [
          ['1–3 months', 'Dual-income households, strong insurance, stable sector', 'Under-insures a genuine job loss'],
          ['3–6 months', 'Most salaried households', 'Good balance'],
          ['6–12 months', 'Single income, dependents, freelancers', 'More safety, slower growth'],
          ['12+ months', 'Early retirement, very irregular income', 'Needs structured income-producing assets to work'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Beyond a year, it stops being a fund',
        text: 'Twelve months of expenses is about as much as belongs in cash. Beyond that, the money should start earning enough to cover part of your expenses, because ₹60 lakh in a 3.5% account loses roughly 6% of purchasing power a year to inflation while doing nothing.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Split the reserve into tiers',
        text: 'One month instantly accessible for immediate problems, three to six months in a liquid fund or high-interest account for the next few months, and anything beyond that working toward covering future expenses. That way most of the money is not idle.',
      },
      {
        kind: 'formula',
        label: 'The tiered structure',
        expr: 'Emergency = 1 month in cash + 3–5 months in liquid/savings + remainder in short-duration growth assets',
        note: 'Adjust the proportions to how often you expect to actually need it.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Recalculate after life changes',
        text: 'A new child, a new loan, a move to a higher-rent city or an ageing parent all raise your target. Recalculate when any of these happen, not only annually.',
      },
    ],
    quiz: [
      {
        q: 'Beyond about twelve months of expenses, keeping everything in cash:',
        options: [
          { text: 'Maximises your safety', correct: false, why: 'Safety stops improving past a point.' },
          { text: 'Starts costing you, because inflation erodes the real value every year', correct: true, why: 'Exactly right.' },
          { text: 'Is illegal above a limit', correct: false, why: 'No such rule.' },
        ],
      },
      {
        q: 'A tiered emergency structure means:',
        options: [
          { text: 'Keeping all months in cash', correct: false, why: 'That is not tiered.' },
          { text: 'One month instantly available, more in liquid accounts, and any excess working toward future expenses', correct: true, why: 'Exactly right.' },
          { text: 'Splitting your emergency fund across two banks only', correct: false, why: 'That addresses a different concern.' },
        ],
      },
      {
        q: 'Which event most increases your emergency fund target?',
        options: [
          { text: 'A small salary revision', correct: false, why: 'Minor effect.' },
          { text: 'Taking on a dependant or a large new EMI', correct: true, why: 'Correct — both raise essential outflows.' },
          { text: 'Moving to a bigger but cheaper house', correct: false, why: 'Depends on net essential cost.' },
        ],
      },
    ],
    takeaway: 'Three to six months suits most salaried households; more for irregular income or dependents. Past about twelve months, tier the reserve so the excess is not losing to inflation.',
  },

  'l2-017': {
    id: 'l2-017',
    title: 'Where Emergency Money Should Be Kept',
    subtitle: 'Safe, instant and boring — in that order',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'Emergency money belongs in the safe jar. Growth is a separate decision with separate money.' },
      { kind: 'p', text: 'Emergency money needs three qualities: it must be safe, it must be available quickly, and it must not be exposed to a loss when you need it. In practice that rules out almost everything interesting and leaves a short list.' },
      {
        kind: 'table',
        caption: 'Where to keep it, ranked',
        headers: ['Option', 'Return', 'Access', 'Verdict'],
        rows: [
          ['Savings account', '3–3.5%', 'Instant', 'Best for the first month'],
          ['High-interest / small finance bank account', 'Up to 7–8%', 'Instant to next day', 'Good default'],
          ['Liquid fund / overnight fund', '5–7%', 'Same or next day', 'Good for tiers 2 and 3'],
          ['Short-tenure FD', '6.5–7%', 'Penalty on early exit', 'Acceptable with a small penalty'],
          ['Equity fund or shares', '10%+ long term', 'Days, volatile', 'No — wrong purpose'],
          ['Gold', 'No yield', 'Days', 'No — volatile, no purpose fit'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Split by speed of need',
        text: 'The first month goes somewhere instant, because it covers the emergency that is happening right now. Months two to six can tolerate next-day access. Anything beyond belongs in something that at least keeps pace with inflation, because it will not be needed quickly.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Check the early-exit penalty before you need it',
        text: 'If your emergency fund sits in a deposit, know today what breaking it costs. Banks commonly penalise 0.25–0.5% of the interest — small, and a price worth paying. Discovering it during a crisis is the problem.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'One month in the account you already use for spending.',
          'The next few months in a high-interest or liquid fund.',
          'Any excess in short-duration instruments that beat inflation.',
          'Confirm the withdrawal route and timing before you need it.',
          'Never put emergency money in the same product as long-term investments.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Keep one card and one number offline',
        text: 'Emergency preparedness includes practical access: keep one debit card in a separate place, save your bank\'s customer care number in your phone, and keep your account and IFSC details written down somewhere physical. In a crisis, searching for these wastes hours.',
      },
    ],
    quiz: [
      {
        q: 'Where should the first month of an emergency fund ideally sit?',
        options: [
          { text: 'In equities for maximum growth', correct: false, why: 'Too risky for immediate needs.' },
          { text: 'In something instantly accessible, like a savings account', correct: true, why: 'Correct.' },
          { text: 'In a five-year deposit', correct: false, why: 'Penalty and delay make this poor.' },
        ],
      },
      {
        q: 'Why check the early-exit penalty on a deposit in advance?',
        options: [
          { text: 'Because penalties change daily', correct: false, why: 'They are in the terms.' },
          { text: 'So the cost of accessing your own emergency money is a known number rather than a surprise', correct: true, why: 'Exactly right.' },
          { text: 'Because it reduces interest', correct: false, why: 'It is the exit that costs.' },
        ],
      },
      {
        q: 'Why split the fund by speed of need?',
        options: [
          { text: 'Because banks require it', correct: false, why: 'No requirement exists.' },
          { text: 'Because the money needed today and the money needed in a year should not carry the same risk or opportunity cost', correct: true, why: 'Exactly right.' },
          { text: 'To earn more from tiering', correct: false, why: 'It is about matching risk to purpose.' },
        ],
      },
    ],
    takeaway: 'Keep the first month instant, months two to six in liquid instruments, and any excess in something that at least beats inflation. Know your exit route before you need it.',
  },

  'l2-018': {
    id: 'l2-018',
    title: 'Liquidity Vs Returns',
    subtitle: 'Why higher returns always come with a waiting period',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'goal-ladder', caption: 'Each rung of the ladder carries a different degree of risk — matched to how far away the date is.' },
      { kind: 'p', text: 'Liquidity is how quickly you can turn something into cash without losing value. Return is what it earns. The two trade off against each other almost perfectly, and every financial product sits somewhere on that line — which is why "highest return" is rarely the right question.' },
      {
        kind: 'table',
        caption: 'The liquidity-return line',
        headers: ['Product', 'Liquidity', 'Return', 'Penalty if you break early'],
        rows: [
          ['Savings account', 'Instant', '3–3.5%', 'None'],
          ['Liquid fund', '1 day', '5–7%', 'None'],
          ['Short-duration fund', '2–3 days', '6–8%', 'Exit load may apply'],
          ['FD', 'At maturity', '6–7.5%', '0.25–1% of interest'],
          ['Corporate deposit', 'At maturity', '7.5–8.5%', 'Often nothing'],
          ['Equity fund', '2–4 days', '10–13% long term', 'Market loss possible'],
          ['Direct equity', 'Instant', 'Unpredictable', 'You accept the price'],
        ],
      },
      {
        kind: 'formula',
        label: 'The honest comparison',
        expr: 'Compare after-tax return, after accounting for the days you lose access',
        note: 'An extra 2% locked for five years is a very different trade from 2% available on demand.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Liquidity has an option value',
        text: 'Cash in an instant account lets you act on opportunities as they appear: an FD rate spike, a sale, an investment drop, a job change. That optionality is worth something, which is why sensible portfolios hold a genuine cash buffer rather than putting everything to work.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The maturity-cliff trap',
        text: 'Splitting money across several FDs with staggered maturities means you can access part of it regularly without penalty. Putting everything into one deposit that matures in three years means no access at all for three years — one emergency away from a forced penalty.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Match liquidity to the date you will need the money.',
          'Stagger deposit maturities so something matures every few months.',
          'Never lock money needed within a year.',
          'Compare after-tax returns, not headline rates.',
          'Hold genuine cash for optionality, not just for emergencies.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Liquidity means:',
        options: [
          { text: 'The rate of return on an investment', correct: false, why: 'That is return.' },
          { text: 'How quickly you can convert something to cash without losing value', correct: true, why: 'Exactly right.' },
          { text: 'The amount of water in an investment', correct: false, why: 'Not what it means.' },
        ],
      },
      {
        q: 'Why stagger FD maturities?',
        options: [
          { text: 'To get a higher interest rate', correct: false, why: 'Rate is unrelated to staggering.' },
          { text: 'So something matures regularly and you can access part of your money without penalty', correct: true, why: 'Exactly right.' },
          { text: 'Because banks require it', correct: false, why: 'No requirement.' },
        ],
      },
      {
        q: 'Why hold some genuinely liquid cash beyond an emergency fund?',
        options: [
          { text: 'Because it earns more than investments', correct: false, why: 'It usually earns less.' },
          { text: 'Because it preserves the option to act on opportunities quickly', correct: true, why: 'Exactly right — that option has value.' },
          { text: 'Because it reduces your tax', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Liquidity and return trade off directly. Match liquidity to the date you need the money, stagger deposit maturities, and hold some cash for the option to act.',
  },

  'l2-019': {
    id: 'l2-019',
    title: 'Sinking Funds',
    subtitle: 'The trick that makes irregular big costs boring',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'A sinking fund is a pot of money built specifically for a known, recurring, moderately large cost — annual insurance premiums, half-yearly fees, quarterly taxes, vehicle servicing, school admission charges. The idea is to stop treating these as emergencies.' },
      {
        kind: 'table',
        caption: 'Costs worth a sinking fund',
        headers: ['Cost', 'Frequency', 'Example amount'],
        rows: [
          ['Health and motor insurance', 'Annual', '₹15,000–₹60,000'],
          ['School fees or admission', 'Annual', '₹40,000–₹2,00,000'],
          ['Vehicle servicing and insurance', 'Annual', '₹10,000–₹40,000'],
          ['Advance tax instalments', 'Quarterly', 'Varies widely'],
          ['Property tax and maintenance', 'Annual', 'Varies'],
          ['Income tax balance payment', 'Annual', 'Varies'],
        ],
      },
      {
        kind: 'formula',
        label: 'The monthly contribution',
        expr: 'Monthly = Annual cost ÷ 12',
        note: '₹40,000 of annual premiums becomes ₹3,333 a month — an amount most people never notice.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Annual costs are why people are poor in February',
        text: 'Someone with ₹12,000 a month in genuinely spare cash can be completely cash-strapped in November when two annual premiums fall due. Sinking funds make annual costs monthly, which is the only way to actually provision for them.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Use a single account with separate sub-totals',
        text: 'You do not need twelve accounts. Keep one "sinking fund" account and a simple note of what each pot is for, topping it up monthly. The psychology of a named amount matters more than the account structure.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not mix sinking funds with your emergency fund',
        text: 'Both are for known costs, but they are different. An emergency fund covers the unexpected and must stay intact; sinking funds are consumed on schedule and refilled. Mixing them means every planned annual cost quietly reduces your emergency cover.',
      },
      { kind: 'sim', name: 'sheet', caption: 'Use the spreadsheet to total your annual costs and divide by twelve.' },
    ],
    quiz: [
      {
        q: 'A sinking fund is designed for:',
        options: [
          { text: 'Unexpected emergencies', correct: false, why: 'That is the emergency fund.' },
          { text: 'Known, recurring annual or periodic costs', correct: true, why: 'Exactly right.' },
          { text: 'Long-term investments', correct: false, why: 'Different purpose.' },
        ],
      },
      {
        q: 'The main benefit of a sinking fund is:',
        options: [
          { text: 'Higher returns', correct: false, why: 'Usually held safely with modest returns.' },
          { text: 'Turning a large annual lump into a manageable monthly amount', correct: true, why: 'Exactly right.' },
          { text: 'Lower taxes', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Why keep sinking funds separate from the emergency fund?',
        options: [
          { text: 'So one account is liquid and one is not', correct: false, why: 'That can be true, but it is not the reason.' },
          { text: 'Because scheduled costs are consumed and refilled, and mixing them quietly erodes your emergency cover', correct: true, why: 'Exactly right.' },
          { text: 'Because banks restrict emergency accounts', correct: false, why: 'No such restriction.' },
        ],
      },
    ],
    takeaway: 'A sinking fund turns a large known annual cost into a small monthly one. Keep it separate from the emergency fund so scheduled costs do not quietly eat your buffer.',
  },

  'l2-020': {
    id: 'l2-020',
    title: 'Goal-Based Saving',
    subtitle: 'Different goals need different amounts and different places',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'goal-ladder', caption: 'Each goal gets its own pot, timeline and risk level.' },
      { kind: 'p', text: 'Goal-based saving means every rupee of savings is assigned to a specific purpose, amount and date. It replaces a vague intention with a portfolio of small targets — which makes progress visible and trade-offs explicit.' },
      {
        kind: 'table',
        caption: 'How to structure goals',
        headers: ['Goal', 'Target', 'Horizon', 'Where the money sits'],
        rows: [
          ['Emergency fund', '3–6 months expenses', 'Build now', 'Savings / liquid fund'],
          ['Car in 3 years', '₹8,00,000', 'Medium', 'Short-duration fund or FD ladder'],
          ['House down payment in 6 years', '₹25,00,000', 'Long', 'Mix of FD and equity'],
          ['Child\'s education in 14 years', '₹50,00,000', 'Very long', 'Equity-oriented'],
          ['Retirement at 60', '25× annual expenses', 'Very long', 'Equity + NPS + EPF'],
        ],
      },
      {
        kind: 'formula',
        label: 'Priority scoring for goals',
        expr: 'Priority = (consequence of failure × personal importance) ÷ required effort',
        note: 'Fund the top two properly rather than spreading thin across eight.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Separate pots prevent goal theft',
        text: 'If all savings sit in one account, whichever goal has a birthday soonest wins the money. Separate pots make the trade-off explicit: to spend on the car, you have to decide which other goal actually gets delayed.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Review the plan when life changes, not only when money arrives',
        text: 'New child, salary rise, a loan, a move — each changes either the target or the timeline. Recalculating after a life event is more effective than a rigid annual review, because the change is fresh.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Write each goal with an amount and a date.',
          'Rank them, then fund only the top two or three actively.',
          'Open a separate labelled pot per funded goal.',
          'Match risk to horizon for each.',
          'Recheck the plan after any major life event.',
        ],
      },
      { kind: 'sim', name: 'compound', caption: 'Set each goal\'s monthly amount and horizon to see what it becomes.' },
    ],
    quiz: [
      {
        q: 'Goal-based saving primarily means:',
        options: [
          { text: 'Saving whatever happens to be left over', correct: false, why: 'That is the unstructured approach.' },
          { text: 'Assigning each savings pot to a specific purpose, amount and date', correct: true, why: 'Exactly right.' },
          { text: 'Only saving for retirement', correct: false, why: 'Too narrow.' },
        ],
      },
      {
        q: 'Why use separate pots per goal?',
        options: [
          { text: 'Banks offer better rates on multiple accounts', correct: false, why: 'Rates are the same.' },
          { text: 'So trade-offs between goals become explicit instead of the nearest goal silently winning', correct: true, why: 'Exactly right.' },
          { text: 'To reduce the number of transactions', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'When is the best time to recalculate your goal plan?',
        options: [
          { text: 'Only once a year on a fixed date', correct: false, why: 'Rigid and often mistimed.' },
          { text: 'After a major life event that changes the target or timeline', correct: true, why: 'Exactly right.' },
          { text: 'Never, once set', correct: false, why: 'Plans need revisiting.' },
        ],
      },
    ],
    takeaway: 'Assign every saving pot a purpose, amount and date. Separate pots make trade-offs explicit, and recalculate after any life event that changes a target.',
  },
}