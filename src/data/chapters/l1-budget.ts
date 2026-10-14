import type { Chapter } from '../../types'

/** Level 1, chapters 22–26: the practical money system — budget and save. */
export const budget: Record<string, Chapter> = {
  'l1-022': {
    id: 'l1-022',
    title: 'Budgeting Basics',
    subtitle: 'Give every rupee a job before it arrives',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'budget-pie', caption: 'The 50/30/20 rule is a starting template, not a law.' },
      { kind: 'p', text: 'A budget is a plan for money before it is spent, not a record afterwards. Most people who say they have a budget actually have a record — and a record cannot prevent anything.' },
      { kind: 'h', text: 'The four parts of any budget' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Income — take-home, not CTC. Include bonuses and rental income, and leave out one-off windfalls.',
          'Needs — the floor you must cover to function and earn.',
          'Wants — the flexible part you genuinely choose to spend.',
          'Savings and debt repayment — the part that is not negotiable if you want future options.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Pay yourself first, in reverse order',
        text: 'Most people budget by spending everything and saving what happens to be left — which is usually nothing. Instead, decide the savings number first, treat it as a bill due on payday, and spend only what remains. The chapter titled "Pay yourself first" builds this out fully.',
      },
      { kind: 'h', text: 'Three ways to run a budget' },
      {
        kind: 'table',
        caption: 'Budgeting methods compared',
        headers: ['Method', 'How it works', 'Best for'],
        rows: [
          ['50/30/20 rule', 'Fixed percentages of income', 'Starting quickly with no data'],
          ['Zero-based', 'Every rupee assigned a job, including savings', 'People who want full control'],
          ['Envelope / category caps', 'Fixed limit per category, like cash envelopes', 'People who overspend in one area'],
          ['Pay-what-you-can / automatic transfers', 'Fixed savings on payday, spending the rest', 'Busy people who forget to save'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The one-week test',
        text: 'You do not need a perfect system. Track everything for seven days in any free app or a notebook, then look at the total. Most people discover two or three categories that surprise them, and that discovery alone changes spending more than any rule.',
      },
      { kind: 'sim', name: 'budget', caption: 'Build your own monthly budget here and see which category pushes you over.' },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Budgeting failure mode: too many categories',
        text: 'A budget with 25 categories will not survive contact with a real month. Six to eight is plenty: housing, food, transport, bills, wants, savings, and a small buffer. The aim is a plan you will still follow in month three.',
      },
    ],
    quiz: [
      {
        q: 'What separates a budget from a spending record?',
        options: [
          { text: 'A budget is done on paper only', correct: false, why: 'The medium does not matter.' },
          { text: 'A budget plans allocations in advance, so it can influence spending', correct: true, why: 'Correct — forward-looking versus backward-looking.' },
          { text: 'A record covers a year, a budget covers a day', correct: false, why: 'Time span is not the distinction.' },
        ],
      },
      {
        q: 'When budgeting, you should plan on the basis of:',
        options: [
          { text: 'Your CTC', correct: false, why: 'CTC includes amounts you never receive.' },
          { text: 'Your take-home pay, since that is the money that actually arrives', correct: true, why: 'Correct — budget from real cash in hand.' },
          { text: 'Your gross salary plus rent from family', correct: false, why: 'Unrealistic and inconsistent.' },
        ],
      },
      {
        q: 'Why should savings be allocated first when budgeting?',
        options: [
          { text: 'Because banks require it', correct: false, why: 'No such requirement exists.' },
          { text: 'Because anything left after spending tends to be nothing, so saving must come out first', correct: true, why: 'Exactly — reverse budgeting is the reliable version.' },
          { text: 'To reduce your income tax', correct: false, why: 'Saving does not reduce tax.' },
        ],
      },
    ],
    takeaway: 'A budget is a forward plan that gives every rupee a job. Save first, then budget what remains, and keep it to six or seven categories you will actually use.',
  },

  'l1-023': {
    id: 'l1-023',
    title: 'Income Vs Expenses',
    subtitle: 'The gap decides everything, and it can be negative',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Income minus expenses equals what you can save, invest or repay. This is the single most informative number in your finances, and it is different for every month — which is exactly why averages are misleading.' },
      { kind: 'formula',
        label: 'Monthly surplus',
        expr: 'Surplus = Total income − Total expenses',
        note: 'Negative surplus means you are borrowing to live, and the cost of that borrowing is a future expense.',
      },
      {
        kind: 'table',
        caption: 'Three months that look similar on paper',
        headers: ['Month', 'Income', 'Expenses', 'Surplus'],
        rows: [
          ['January', '₹60,000', '₹38,000', '+₹22,000'],
          ['February', '₹60,000', '₹38,000', '+₹22,000'],
          ['March', '₹60,000', '₹74,000', '−₹14,000'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Averages hide the emergencies',
        text: 'Averaged over three months, this person saved ₹10,000 a month. But March\'s ₹14,000 deficit had to come from savings or credit. Judging your finances on the annual average can hide exactly the month that hurt most.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'When the gap is negative',
        text: 'A persistent negative gap is not a budgeting failure — it is a structural mismatch. Either income must rise, fixed costs must fall, or the gap must be funded deliberately at the lowest possible cost. Covering a ₹10,000 monthly shortfall with credit card interest at around 40% annualised is one of the most expensive mistakes in personal finance.',
      },
      { kind: 'h', text: 'Know your fixed number' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Total monthly income — take-home only.',
          'Total monthly expenses, including EMIs and insurance premiums.',
          'The difference, reviewed month by month, not averaged.',
          'The single largest expense — the best place to look for savings.',
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Build your own income-versus-expense sheet and find your real monthly number in a few minutes.' },
    ],
    quiz: [
      {
        q: 'If monthly income is ₹50,000 and monthly expenses are ₹56,000, your situation is:',
        options: [
          { text: 'Savings of ₹6,000', correct: false, why: 'The sign is reversed.' },
          { text: 'A ₹6,000 monthly deficit that must be funded from savings or debt', correct: true, why: 'Correct — that is a negative surplus.' },
          { text: 'A 6% return', correct: false, why: 'Not how the arithmetic works.' },
        ],
      },
      {
        q: 'Why is a three-month average potentially misleading?',
        options: [
          { text: 'Averages are never accurate', correct: false, why: 'Averages are useful for some purposes.' },
          { text: 'A single bad month can be hidden by a good one, so the average hides the month that caused damage', correct: true, why: 'Exactly — the shortfall still happened.' },
          { text: 'Because incomes are seasonal in India', correct: false, why: 'Seasonality is real but is not the reason averaging hides shortfalls.' },
        ],
      },
      {
        q: 'Funding a persistent monthly deficit on a credit card is dangerous mainly because:',
        options: [
          { text: 'Credit cards cannot be used for essentials', correct: false, why: 'They can be used for anything.' },
          { text: 'The interest cost compounds, so the debt grows faster than the spending it covered', correct: true, why: 'Correct — revolving debt at high interest is destructive.' },
          { text: 'It lowers your credit score immediately', correct: false, why: 'It affects score through utilisation and repayment history over time.' },
        ],
      },
    ],
    takeaway: 'Income minus expenses is the number that matters. Review it monthly rather than as an average, and fix a persistent deficit deliberately rather than hoping it closes itself.',
  },

  'l1-024': {
    id: 'l1-024',
    title: 'Fixed Vs Variable Expenses',
    subtitle: 'Know which costs you can actually change',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'expense-bars', caption: 'Fixed costs set your floor. Variable costs are your only real lever.' },
      { kind: 'p', text: 'Fixed costs stay the same regardless of what you do this month — rent, EMIs, insurance premiums, subscriptions. Variable costs move with your choices and your mood — food, transport, shopping, dining out.' },
      {
        kind: 'table',
        caption: 'Fixed, semi-fixed and variable',
        headers: ['Fixed', 'Semi-fixed', 'Variable'],
        rows: [
          ['Rent, home loan EMI', 'Electricity bill', 'Groceries'],
          ['Phone and internet bill', 'Insurance premium (annual, paid monthly)', 'Dining out'],
          ['Gym membership', 'Petrol or cab fares', 'Clothing'],
          ['Subscriptions', 'Medical costs', 'Entertainment'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Fixed costs are the real wealth number',
        text: 'The gap between income and fixed costs is what you have genuinely free to allocate. If your salary is ₹80,000 and fixed costs are ₹62,000, your flexible budget is ₹18,000 — and your savings capacity is capped by that number unless you change a fixed cost.',
      },
      {
        kind: 'formula',
        label: 'Flexible budget',
        expr: 'Income − Fixed costs = the only money you can truly direct',
        note: 'Many people try to fix variable spending when the real problem is an expensive fixed commitment they signed up for too early.',
      },
      {
        kind: 'example',
        title: 'The house that ate the salary',
        text: 'A family earning ₹1,80,000 a month takes a ₹95,000 home loan to live in a "better" house, plus ₹40,000 in other fixed costs. Only ₹45,000 remains for food, transport and savings — and savings quietly becomes whatever is left. The house was the decision; the shortfall is the symptom.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Fixed costs resist change',
        text: 'Fixed costs feel safe because they never change — but they are also hard to reverse, and they compound the pain of a job loss. Before signing any long commitment, check what it would look like at 60% of your current income.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Two specific moves',
        text: 'First, list every fixed cost and renegotiate at least one — a mobile plan, an insurance review, or a subscription you stopped using. Second, cap variable spending with a weekly amount, because weekly control is far easier than monthly control.',
      },
    ],
    quiz: [
      {
        q: 'Which of these is a fixed cost?',
        options: [
          { text: 'Groceries', correct: false, why: 'Groceries change every month.' },
          { text: 'Home loan EMI', correct: true, why: 'Correct — the EMI is a fixed monthly commitment.' },
          { text: 'Dining out', correct: false, why: 'Dining out is discretionary and variable.' },
        ],
      },
      {
        q: 'If income is ₹80,000 and fixed costs total ₹62,000, your flexible budget is:',
        options: [
          { text: '₹1,42,000', correct: false, why: 'That adds instead of subtracting.' },
          { text: '₹18,000', correct: true, why: 'Correct — 80,000 − 62,000.' },
          { text: '₹62,000', correct: false, why: 'That is the fixed cost, not the flexible part.' },
        ],
      },
      {
        q: 'Why are fixed costs important to identify?',
        options: [
          { text: 'They are the easiest expenses to reduce', correct: false, why: 'They are the hardest to change.' },
          { text: 'They set the floor of your lifestyle and cap how much you can save or invest', correct: true, why: 'Exactly — the flexible remainder is your real budget.' },
          { text: 'They are not deductible from income', correct: false, why: 'They absolutely reduce what is available.' },
        ],
      },
    ],
    takeaway: 'Fixed costs set your floor and cap your saving potential. Know the exact total, renegotiate at least one, and control variable spending weekly rather than monthly.',
  },

  'l1-025': {
    id: 'l1-025',
    title: 'Saving',
    subtitle: 'Paying your future self before your present self spends',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Saving is moving income you do not need today into a form that grows or stays safe. It is the step that turns income into financial independence, and it is also the step most often skipped.' },
      {
        kind: 'table',
        caption: 'Where savings can live',
        headers: ['Option', 'Typical return', 'Liquidity', 'Best for'],
        rows: [
          ['Savings account', '~3–3.5%', 'Instant', 'Day-to-day buffer'],
          ['Liquid fund', '~5–7%', 'Same day or next day', 'Short-term goals, 1–3 years'],
          ['Tax-saver FD (5 years)', '~6–7%', 'Locked, with penalty on early exit', 'Long-term, tax-efficient'],
          ['Public Provident Fund', '~7–7.5%', '5-year lock', 'Very long-term, tax benefit'],
          ['Fixed deposit', '~6–7%', 'Penalty if broken early', 'Known future amounts'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Start with an awkward number',
        text: 'Most people fail to save because they save what is left. Instead, pick a number small enough that missing it would feel embarrassing — ₹500 or ₹1,000 — automate it on payday, and build the habit first. The amount matters far less than the automation.',
      },
      {
        kind: 'formula',
        label: 'The 24× test',
        expr: 'Monthly savings × 24 = one year of emergency expenses available',
        note: 'If you need ₹2,40,000 for three months of expenses at ₹80,000, saving ₹10,000 a month reaches it in 24 months.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Savings that never get spent are savings that never grew',
        text: 'Revolving between a savings account and spending is the most common failure mode. Move savings to a separate account, ideally at a different bank, so spending it requires a deliberate transfer rather than a single tap.',
      },
      {
        kind: 'example',
        title: 'The difference over ten years',
        text: '₹10,000 a month saved in cash and spent from a drawer over 10 years leaves you with nothing but a habit. ₹10,000 a month invested at 10% average annual growth leaves roughly ₹23 lakh. Same monthly discipline, entirely different outcome — the destination matters more than the effort.',
      },
      { kind: 'sim', name: 'compound', caption: 'Try this: put ₹10,000 a month into the compound lab at 10% for 10, 20 and 30 years.' },
    ],
    quiz: [
      {
        q: 'The most important step to start saving is usually:',
        options: [
          { text: 'Earning a very high salary first', correct: false, why: 'Not necessary — structure matters more.' },
          { text: 'Automating a small fixed transfer on payday', correct: true, why: 'Correct — automation removes the monthly decision and the temptation.' },
          { text: 'Waiting until you have spare cash at month end', correct: false, why: 'Spare cash is exactly what never appears.' },
        ],
      },
      {
        q: 'Why keep savings in a separate account or bank?',
        options: [
          { text: 'Banks offer higher rates for separate accounts', correct: false, why: 'Rates are usually identical.' },
          { text: 'It adds friction, so spending savings requires a deliberate transfer instead of one tap', correct: true, why: 'Exactly — friction is the control.' },
          { text: 'It makes savings tax-free', correct: false, why: 'Tax treatment does not depend on which account holds it.' },
        ],
      },
      {
        q: '₹10,000 saved monthly for 10 years at 10% average growth is roughly:',
        options: [
          { text: '₹12 lakh', correct: false, why: 'That is the total contributed with almost no growth.' },
          { text: 'About ₹23 lakh', correct: true, why: 'Correct — roughly ₹12.3 lakh contributed becomes about ₹23 lakh.' },
          { text: '₹2.3 lakh', correct: false, why: 'Off by a factor of ten.' },
        ],
      },
    ],
    takeaway: 'Automate a small fixed saving on payday, keep it somewhere separate from spending, and remember that where the money sits determines whether it grows.',
  },

  'l1-026': {
    id: 'l1-026',
    title: 'Savings Goals',
    subtitle: 'Specific, dated and named beats "save some money"',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'goal-ladder', caption: 'Different horizons need different amounts and different vehicles.' },
      { kind: 'p', text: 'A savings goal is a target amount with a purpose and a date. Vague intentions like "save more" reliably fail, because there is no moment at which you know you are finished.' },
      { kind: 'h', text: 'The four parts of a real goal' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A specific purpose — "₹60,000 for a laptop I already need", not "for electronics".',
          'A target amount and a date — ₹60,000 by March next year.',
          'A named account, separate from everyday spending.',
          'A monthly contribution you have confirmed is actually affordable.',
        ],
      },
      {
        kind: 'formula',
        label: 'Does the goal add up?',
        expr: 'Monthly saving = (Target − Already saved) ÷ Months remaining',
        note: 'A ₹3,00,000 car in 18 months with ₹40,000 saved needs ₹14,444 a month. Often that number ends the purchase or the timeline.',
      },
      {
        kind: 'table',
        caption: 'Matching goals to timelines',
        headers: ['Horizon', 'Examples', 'Where the money should sit'],
        rows: [
          ['Under 1 year', 'Emergency top-up, a phone, course fee', 'Savings or liquid fund'],
          ['1–3 years', 'Car, travel, wedding, equipment', 'Liquid fund or short-duration deposit'],
          ['3–7 years', 'Car upgrade, higher deposit', 'Bank FD or corporate deposit'],
          ['Over 7 years', 'House down payment, retirement', 'Equity-oriented, reviewed periodically'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Match the risk to the date',
        text: 'Money needed on a fixed date should not be exposed to a fall in value just before that date. Long-dated money can accept volatility in exchange for higher growth. Using the wrong vehicle for the wrong horizon is how people lose money on money they could not afford to lose.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Make it visible',
        text: 'Name the account after the goal — "Laptop March 2027". Track progress monthly. A goal you can see weekly is far more likely to survive a hard month than one that lives only in your head.',
      },
    ],
    quiz: [
      {
        q: 'Why does the goal "save some money" fail?',
        options: [
          { text: 'Because saving requires high income', correct: false, why: 'Not about income.' },
          { text: 'It has no amount, no date and no defined finish line, so you can never know you are done', correct: true, why: 'Exactly — specificity is what makes it actionable.' },
          { text: 'Because banks do not allow small deposits', correct: false, why: 'They do.' },
        ],
      },
      {
        q: 'A goal of ₹60,000 by March next year, with ₹40,000 already saved and 18 months left, needs how much a month?',
        options: [
          { text: '₹1,111', correct: false, why: 'That divides by 18 with the wrong starting amount.' },
          { text: '₹1,111 a month', correct: true, why: 'Correct — (60,000 − 40,000) ÷ 18 ≈ ₹1,111.' },
          { text: '₹3,333 a month', correct: false, why: 'That is 60,000 ÷ 18, ignoring the ₹40,000 already saved.' },
        ],
      },
      {
        q: 'Money needed for a fixed date should generally be:',
        options: [
          { text: 'Invested in the highest-risk asset available for maximum growth', correct: false, why: 'Too risky for money you need on a specific date.' },
          { text: 'Held in something stable, so it is reliably there when the date arrives', correct: true, why: 'Correct — match risk to timeline.' },
          { text: 'Kept as cash at home', correct: false, why: 'Cash at home carries theft risk and inflation loss.' },
        ],
      },
    ],
    takeaway: 'A goal needs a purpose, an amount, a date and its own account. Match the risk of where the money sits to how soon you need it.',
  },
}