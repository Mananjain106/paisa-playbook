import type { Chapter } from '../../types'

/** Level 1, chapters 57–64: trackers, tricks, and the final project. */
export const project: Record<string, Chapter> = {
  'l1-057': {
    id: 'l1-057',
    title: 'Creating A Basic Expense Tracker',
    subtitle: 'You cannot manage what you have never written down',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'An expense tracker is a record of what you spend, what category it belongs to, and why. It is the first diagnostic step in personal finance — before any budget, saving or investing, you need to know where the money actually goes.' },
      { kind: 'h', text: 'The minimum viable tracker' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Date — when it happened.',
          'Amount — the only column that must be exact.',
          'Category — one of six or seven fixed options, no more.',
          'Note — optional, but useful for anything unusual.',
          'Payment method — cash, UPI, card. This reveals real patterns.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Cash is the hardest to track, so track it hardest',
        text: 'Digital spending is already recorded by your bank. The blind spot is cash — and it is exactly where leakage happens. If your cash withdrawals are high and your categories are vague, that gap is the answer.',
      },
      {
        kind: 'table',
        caption: 'A working tracker layout',
        headers: ['Date', 'Category', 'Amount', 'Method', 'Note'],
        rows: [
          ['01 Mar', 'Food', '₹420', 'UPI', 'Groceries'],
          ['01 Mar', 'Transport', '₹180', 'Cash', 'Bus top-up'],
          ['02 Mar', 'Wants', '₹350', 'UPI', 'Coffee — impulse'],
          ['02 Mar', 'Bills', '₹1,800', 'UPI', 'Electricity'],
        ],
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Use whatever tool you will actually use — a notebook is better than an app you abandon.',
          'Record within 24 hours, not at month end, when memory has failed.',
          'Use no more than seven categories. More is not more accurate, it is less consistent.',
          'Review weekly for fifteen minutes and look for patterns, not for guilt.',
        ],
      },
      { kind: 'sim', name: 'sheet', caption: 'Build the tracker itself here: one column of expenses, then the four formulas that read it.' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'What to look for after 30 days',
        text: 'Three things: the category that surprised you most, the payment method you overuse, and the number of transactions in the ₹100–₹500 range. That last one is usually where the biggest quiet leak lives.',
      },
    ],
    quiz: [
      {
        q: 'What is the most important column in an expense tracker?',
        options: [
          { text: 'The note', correct: false, why: 'Helpful, but optional.' },
          { text: 'The amount', correct: true, why: 'Correct — everything else is context for the number.' },
          { text: 'The category', correct: false, why: 'Important, but secondary to the amount.' },
        ],
      },
      {
        q: 'Why is cash the most important thing to track manually?',
        options: [
          { text: 'Because banks do not record cash transactions', correct: true, why: 'Correct — which is exactly why cash is the blind spot.' },
          { text: 'Because cash amounts are harder to remember', correct: false, why: 'That is part of it, but the reason is the missing record.' },
          { text: 'Because cash is illegal to spend', correct: false, why: 'Cash is legal.' },
        ],
      },
      {
        q: 'Why limit an expense tracker to about seven categories?',
        options: [
          { text: 'Because apps cannot handle more', correct: false, why: 'Apps handle many categories easily.' },
          { text: 'Because more categories reduce consistency, and a consistent rough record beats a perfect detailed one', correct: true, why: 'Exactly right.' },
          { text: 'Because the law limits categories', correct: false, why: 'No such limit exists.' },
        ],
      },
    ],
    takeaway: 'Track date, amount, category, method and a note — no more than seven categories. Record within 24 hours, and pay special attention to cash.',
  },

  'l1-058': {
    id: 'l1-058',
    title: 'Creating A Basic Monthly Budget',
    subtitle: 'Turn your tracking into a forward plan',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'A tracker looks backwards; a budget looks forward. Once you have one month of tracking data, you can build a budget from real numbers instead of guesses — which is why tracking first makes budgeting dramatically easier.' },
      {
        kind: 'table',
        caption: 'Building a budget from your own data',
        headers: ['Step', 'Action', 'Example'],
        rows: [
          ['1', 'Total your take-home income', '₹60,000'],
          ['2', 'List fixed costs from tracking', '₹24,000'],
          ['3', 'Average variable costs', '₹18,000'],
          ['4', 'Subtract to find current surplus', '₹18,000'],
          ['5', 'Set a savings target and move it first', '₹12,000'],
          ['6', 'Budget the remaining ₹36,000', 'Needs ₹26,000, wants ₹10,000'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Build the budget from below up',
        text: 'Start with your actual tracked spending, not with an idealised plan. A budget built from reality already balances, which makes it far more likely to survive month three. Then improve it — target one category at a time rather than rewriting everything.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Budget for bad months',
        text: 'Build in a 10–15% buffer. A budget that assumes every month looks like your best month will fail the first time something unexpected happens — a medical bill, a repair, a festival. The buffer is what stops a surprise becoming debt.',
      },
      {
        kind: 'sim', name: 'budget', caption: 'Build it here first — set your income, drag the categories, and check the 50/30/20 markers.' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Review monthly, adjust quarterly',
        text: 'Check that you are tracking to budget every month — fifteen minutes. Change the budget itself only every three months. Adjusting constantly means you never let the budget run long enough to learn anything.',
      },
    ],
    quiz: [
      {
        q: 'Why should a first budget be built from actual tracked spending?',
        options: [
          { text: 'Because tracking is legally required', correct: false, why: 'No such requirement.' },
          { text: 'Because a realistic budget already balances, which makes it far more likely to be followed', correct: true, why: 'Exactly right.' },
          { text: 'Because it takes less time', correct: false, why: 'It takes about the same time.' },
        ],
      },
      {
        q: 'A 10–15% buffer in a budget exists to:',
        options: [
          { text: 'Increase your savings rate', correct: false, why: 'It is a buffer, not savings.' },
          { text: 'Absorb unexpected expenses so a surprise does not become debt', correct: true, why: 'Exactly right.' },
          { text: 'Cover annual premiums only', correct: false, why: 'Those can be planned separately.' },
        ],
      },
      {
        q: 'How often should you review whether you are following your budget?',
        options: [
          { text: 'Daily', correct: false, why: 'Too frequent to be useful.' },
          { text: 'Monthly, while changing the budget itself only quarterly', correct: true, why: 'Exactly right — review and change are different cadences.' },
          { text: 'Once a year', correct: false, why: 'Far too infrequent.' },
        ],
      },
    ],
    takeaway: 'Build the budget from your own tracked numbers, add a 10–15% buffer, and review monthly while changing the plan only quarterly.',
  },

  'l1-059': {
    id: 'l1-059',
    title: 'Trick: Pay Yourself First',
    subtitle: 'Invert the order and saving happens automatically',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'The standard approach is: earn, spend what is left, save the remainder. Almost nobody has a remainder. The trick is to reverse it — move your savings out the day you are paid, then spend what is genuinely left.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Decide an amount, or a percentage of take-home pay.',
          'Set a standing instruction on payday to move it to a separate account.',
          'Spend the remaining amount freely, without guilt.',
          'Increase the amount when income rises, before lifestyle expands.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why it works when saving last does not',
        text: 'At the end of the month, money is already spent — the choice has been made passively, dozens of times. Paying yourself first makes saving the first decision rather than the leftover, so it requires one decision instead of fifty.',
      },
      {
        kind: 'formula',
        label: 'Working out your percentage',
        expr: 'Savings rate = (Fixed savings ÷ Take-home income) × 100',
        note: '₹6,000 on ₹50,000 is 12%. Increase it by half the size of each raise, rather than the full amount.',
      },
      {
        kind: 'example',
        title: 'The raise that disappears',
        text: 'You get a ₹10,000 raise and set savings to rise by ₹5,000. You now have ₹5,000 more disposable income and ₹5,000 more invested every month. Repeat this and the raise becomes permanent wealth, while your lifestyle still improves.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Start with an amount you will not miss',
        text: 'Choose 5–10% rather than an ambitious 30%. The habit matters more than the rate at the start. Once the automatic transfer has run for three months without you touching it, increase the amount.',
      },
      { kind: 'sim', name: 'compound', caption: 'Set a monthly amount here and see what a small automatic contribution becomes over 20 years.' },
    ],
    quiz: [
      {
        q: '"Pay yourself first" means:',
        options: [
          { text: 'Paying yourself a salary from a business', correct: false, why: 'That is a business practice, not this trick.' },
          { text: 'Moving savings out on payday before you begin spending', correct: true, why: 'Exactly right.' },
          { text: 'Spending on yourself before anyone else', correct: false, why: 'It is about the order of saving, not leisure.' },
        ],
      },
      {
        q: 'Why does paying yourself first work better than saving what is left?',
        options: [
          { text: 'Because banks pay more for automatic transfers', correct: false, why: 'Rates are identical.' },
          { text: 'Because saving becomes the first decision instead of a leftover after dozens of small ones', correct: true, why: 'Exactly right.' },
          { text: 'Because it increases your salary', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'A reasonable starting savings rate for someone building the habit is:',
        options: [
          { text: '30% or more', correct: false, why: 'Ambitious for most starting out, and often unsustainable.' },
          { text: '5–10%, raised once the habit is established', correct: true, why: 'Exactly right — habit before rate.' },
          { text: '0%, until income is higher', correct: false, why: 'That defeats the purpose.' },
        ],
      },
    ],
    takeaway: 'Move savings out on payday, then spend what remains. Start at 5–10%, build the habit, and raise it by half of every pay increase.',
  },

  'l1-060': {
    id: 'l1-060',
    title: 'Trick: The 24-Hour Rule',
    subtitle: 'One day turns an impulse into a decision',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'ad-trap', caption: 'A day later, the urgency has faded and the desire usually goes with it.' },
      { kind: 'p', text: 'The 24-hour rule is simple: for anything that is not genuinely urgent, wait a full day before buying it. Almost every time, the desire shrinks — because you wanted the excitement of buying, not the object.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Add the item to a wishlist with a date, not a cart.',
          'Wait 24 hours, then ask if you would still want it knowing what you know now.',
          'If yes, and the budget allows, buy it guilt-free.',
          'If you would have forgotten it entirely, that was an impulse — and you just saved the money.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The waiting list is the real product',
        text: 'Keep a single "later" list — a notes file or a wishlist app. Add things there instead of buying them. Most entries will never be bought, and that list becomes visible proof of how much impulse spending you have already avoided.',
      },
      {
        kind: 'formula',
        label: 'The annual value of the rule',
        expr: '₹500 impulse buys avoided × 4 per month × 12 months = ₹24,000 a year',
        note: 'A handful of avoided purchases is worth about two months of take-home pay.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'What does not get a 24-hour delay',
        text: 'Genuine emergencies: medicine, a repair that stops a bigger loss, food when you have none. The rule is for discretionary purchases. Applying it to essentials just creates stress without benefit.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Make it work for small amounts too',
        text: 'For purchases under ₹500, use a shorter waiting period — an hour or until tomorrow. The point is to always create a gap between the urge and the act, however short.',
      },
    ],
    quiz: [
      {
        q: 'The 24-hour rule applies most usefully to:',
        options: [
          { text: 'Emergency medicines', correct: false, why: 'Emergencies are exempt — delay would be harmful.' },
          { text: 'Non-essential discretionary purchases', correct: true, why: 'Exactly right.' },
          { text: 'Utility bills', correct: false, why: 'These are obligations, not choices.' },
        ],
      },
      {
        q: 'Why maintain a "later" wishlist?',
        options: [
          { text: 'To keep track of prices', correct: false, why: 'That is secondary.' },
          { text: 'Because most entries are never bought, providing visible proof of avoided impulse spending', correct: true, why: 'Exactly right — your own data is persuasive.' },
          { text: 'To share with friends', correct: false, why: 'Not the point.' },
        ],
      },
      {
        q: 'If you avoid four ₹500 impulse purchases a month, the annual saving is:',
        options: [
          { text: '₹2,000', correct: false, why: 'That is the monthly total.' },
          { text: '₹24,000', correct: true, why: 'Correct — 500 × 4 × 12.' },
          { text: '₹6,000', correct: false, why: 'Wrong number of months.' },
        ],
      },
    ],
    takeaway: 'Wait 24 hours before any non-essential purchase. Keep a "later" list — most entries never get bought, and that proves how much you avoided.',
  },

  'l1-061': {
    id: 'l1-061',
    title: 'Trick: Track Every Rupee For One Month',
    subtitle: 'One month of honesty changes everything',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Track every single rupee you spend for thirty days. Not a sample, not an estimate — everything. It is the most uncomfortable and most useful financial exercise there is, because it replaces guesses with data.' },
      {
        kind: 'table',
        caption: 'What one month of full tracking typically reveals',
        headers: ['Discovery', 'Usual magnitude', 'The fix'],
        rows: [
          ['Subscription stacking', '₹800–₹2,500 a month', 'Audit and cancel unused'],
          ['Food delivery', '₹3,000–₹10,000 a month', 'Cook more; plan orders'],
          ['Cash leakage', 'Unknown until tracked', 'Reduce ATM withdrawals'],
          ['Impulse online buying', '₹2,000–₹8,000 a month', '24-hour rule'],
          ['Unclaimed subscriptions after free trials', '₹500–₹1,500 a month', 'Audit payment mandates'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why one month is enough to start',
        text: 'You do not need a perfect year of data to change your behaviour. Most recurring and impulsive spending is visible within thirty days, because it repeats weekly. Three months is better, but one month changes people.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Every expense, including ₹10 chai and ₹5 water.',
          'Cash and digital both, tracked separately.',
          'Note the category and, briefly, why you bought it.',
          'Review at the end and write the three biggest surprises.',
          'Act on exactly two of them, not all of them.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Act on two, not ten',
        text: 'A month of tracking produces a long list of possible changes. Trying to fix everything at once usually means fixing nothing. Pick the two largest, change them, and keep tracking for another month. Repeat.',
      },
      { kind: 'sim', name: 'sheet', caption: 'Track twelve days honestly in the spreadsheet, then measure how much of the month you actually covered.' },
    ],
    quiz: [
      {
        q: 'Why does tracking every rupee for one month work when estimating does not?',
        options: [
          { text: 'Because it takes less time', correct: false, why: 'It takes more effort.' },
          { text: 'Because it replaces assumptions with data, and reveals patterns that repeat weekly', correct: true, why: 'Exactly right.' },
          { text: 'Because banks require it', correct: false, why: 'No requirement exists.' },
        ],
      },
      {
        q: 'After a month of tracking, what is the right response to a long list of findings?',
        options: [
          { text: 'Fix everything at once', correct: false, why: 'That usually means fixing nothing.' },
          { text: 'Change the two largest items, then track again', correct: true, why: 'Exactly right — two focused changes beat ten.' },
          { text: 'Ignore the list, since it is probably inaccurate', correct: false, why: 'The data is accurate; the temptation to ignore it is the problem.' },
        ],
      },
      {
        q: 'Subscriptions are a common large discovery because:',
        options: [
          { text: 'They are expensive', correct: false, why: 'Individually they are usually small.' },
          { text: 'They are small, recurring, easy to forget, and often continue after free trials end', correct: true, why: 'Exactly right.' },
          { text: 'They are illegal in India', correct: false, why: 'They are perfectly legal.' },
        ],
      },
    ],
    takeaway: 'Track every rupee for thirty days — it replaces guesses with data. Then act on only the two largest findings, and repeat.',
  },

  'l1-062': {
    id: 'l1-062',
    title: 'Trick: Separate Needs From Wants Before Purchasing',
    subtitle: 'The five-second filter that prevents most regrets',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'pie-needs-wants', caption: 'Name the category before buying, and the choice stops being automatic.' },
      { kind: 'p', text: 'Before any purchase above a small threshold, name the category out loud: need or want. The act of deciding, in the moment, is what changes the outcome — because most regretful spending was never consciously chosen in the first place.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask: would my health, shelter, or ability to earn fail without this?',
          'If yes — need. Buy it, budget permitting, without guilt.',
          'If no — want. Now ask: is this within my wants budget for the month?',
          'If yes — buy it and enjoy it fully, without apology.',
          'If no — the answer is already decided. Skip it.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Wants are not the enemy',
        text: 'The goal is not zero wants. People who eliminate all discretionary spending usually relapse and end up spending more. A defined wants budget that you actually spend makes guilt disappear, because you planned for it.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The disguised want',
        text: 'Expensive phone plans, gym memberships bought "for health", a bigger car for "safety", and courses you never attend are usually wants dressed as needs. Naming them honestly is uncomfortable and necessary.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Upgrade the filter to one sentence',
        text: 'For anything over ₹2,000, complete this sentence before buying: "If I had ₹2,000 cash right now, I would use it for ______ instead." If the honest answer is "nothing", buy it. If there is a better use, take the better use.',
      },
    ],
    quiz: [
      {
        q: 'The purpose of labelling a purchase as a need or a want is to:',
        options: [
          { text: 'Eliminate all discretionary spending', correct: false, why: 'That is not the goal and rarely works.' },
          { text: 'Make the decision consciously and deliberately in the moment', correct: true, why: 'Exactly right.' },
          { text: 'Track income tax accurately', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'An expensive gym membership used rarely is best described as:',
        options: [
          { text: 'A need, because health matters', correct: false, why: 'Often a want that has been justified as a need.' },
          { text: 'A want, and worth judging against whether you actually attend', correct: true, why: 'Exactly right.' },
          { text: 'A financial mistake in all cases', correct: false, why: 'It can be worthwhile if genuinely used.' },
        ],
      },
      {
        q: 'A defined wants budget helps mainly because it:',
        options: [
          { text: 'Reduces the total amount you spend on enjoyment', correct: false, why: 'It often redistributes rather than reduces.' },
          { text: 'Lets you spend guilt-free on planned enjoyment, which reduces the pressure to overspend', correct: true, why: 'Exactly right.' },
          { text: 'Increases your savings rate automatically', correct: false, why: 'Not its main effect.' },
        ],
      },
    ],
    takeaway: 'Name need or want before buying anything significant. Wants are fine within a defined budget — the filter exists to make the choice conscious, not to eliminate pleasure.',
  },

  'l1-063': {
    id: 'l1-063',
    title: 'Trick: Always Know Where Your Money Went',
    subtitle: 'Awareness is the whole mechanism',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'Most financial problems are not caused by a single large mistake. They are caused by many small, invisible ones. The remedy is simple and slightly unglamorous: always know where your money went.' },
      {
        kind: 'table',
        caption: 'The awareness loop',
        headers: ['Step', 'Frequency', 'Output'],
        rows: [
          ['Record transactions', 'Daily, under a minute', 'A current picture'],
          ['Review the tracker', 'Weekly, 15 minutes', 'Patterns and leaks'],
          ['Reconcile the statement', 'Monthly, 15 minutes', 'Accuracy and fraud detection'],
          ['Review goals and net worth', 'Quarterly', 'Progress and drift'],
          ['Full financial audit', 'Annually', 'A reset of the plan'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Awareness changes behaviour automatically',
        text: 'You do not need willpower to spend less once you are tracking. Awareness itself changes behaviour — the ₹1,200 restaurant bill simply feels different when you can see it was the fourth that month.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The blind spots to check specifically',
        text: 'Cash withdrawals, small recurring charges, annual and quarterly payments like insurance and tuition, and spending that runs through someone else\'s account. These are the four places money escapes unnoticed.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Check your balance weekly, not only when you are about to be overdrawn.',
          'Reconcile your own records against the bank statement monthly.',
          'Note any transaction you cannot explain, and resolve it the same week.',
          'Track net worth quarterly so you can see whether you are actually progressing.',
        ],
      },
      { kind: 'sim', name: 'networth', caption: 'Build your own position and watch net worth change as you add and remove items.' },
    ],
    quiz: [
      {
        q: 'Why does tracking spending itself reduce spending?',
        options: [
          { text: 'Because it makes people feel guilty', correct: false, why: 'Awareness works better than guilt.' },
          { text: 'Because awareness alone changes how a purchase feels when you can see it in context', correct: true, why: 'Exactly right.' },
          { text: 'Because banks offer discounts for tracked spending', correct: false, why: 'No such thing.' },
        ],
      },
      {
        q: 'Which of these is a common blind spot where money escapes unnoticed?',
        options: [
          { text: 'Large monthly rent', correct: false, why: 'Rent is impossible to miss.' },
          { text: 'Cash withdrawals and small recurring charges', correct: true, why: 'Exactly right.' },
          { text: 'Your salary', correct: false, why: 'Very visible.' },
        ],
      },
      {
        q: 'Reconciling your own tracker against the bank statement monthly helps you:',
        options: [
          { text: 'Increase your savings rate', correct: false, why: 'Not directly.' },
          { text: 'Catch errors, unauthorised transactions and mis-categorised spending early', correct: true, why: 'Exactly right.' },
          { text: 'Replace the need for an emergency fund', correct: false, why: 'Reconciliation does not replace a cash buffer.' },
        ],
      },
    ],
    takeaway: 'Most financial trouble comes from many small invisible leaks. Track daily, review weekly, reconcile monthly — awareness alone changes behaviour.',
  },

  'l1-064': {
    id: 'l1-064',
    title: 'Final Project: Managing A Hypothetical ₹10',
    subtitle: 'Everything you learned, played with at small scale',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Ten rupees is not money in any real sense. But every decision in the game below is the same decision you make with ₹10,000 — so the practice transfers perfectly, and the stakes stay friendly.' },
      { kind: 'h', text: 'What the project tests' },
      {
        kind: 'terms',
        items: [
          { term: 'Splitting costs', meaning: 'Group deals turn an unaffordable expense into an affordable one — used every month in real life.' },
          { term: 'Genuine vs false discounts', meaning: 'Buy-one-get-one on something you needed is value. A discount on something you did not need is a trap.' },
          { term: 'Impulse control', meaning: 'Scarcity messaging works on everyone; recognising it is the skill.' },
          { term: 'Saving vs spending', meaning: 'Money not spent keeps its optionality.' },
          { term: 'Scam detection', meaning: 'Guaranteed doubling is fake, and that is worth more than any return.' },
          { term: 'Negotiation', meaning: 'Accepting more value than you asked for is a legitimate financial win.' },
        ],
      },
      { kind: 'h', text: 'The rules of the exercise' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'You start with ₹10 and make one decision per day for seven days.',
          'Every choice has a real financial lesson attached to it.',
          'There is no single correct answer — but there are clearly better and worse choices.',
          'At the end, read every lesson, not just your score.',
        ],
      },
      { kind: 'sim', name: 'rupee10', caption: 'The main event: seven days, ten rupees, and seven real money lessons.' },
      { kind: 'h', text: 'The same seven decisions at real scale' },
      {
        kind: 'table',
        caption: 'How each lesson scales up',
        headers: ['At ₹10', 'At ₹10,000', 'The underlying lesson'],
        rows: [
          ['Splitting a ₹60 snack', 'Sharing a ₹60,000 holiday with friends', 'Cost per person falls with group size'],
          ['BOGO on soap', 'BOGO on groceries you already buy', 'Discounts only matter on planned purchases'],
          ['"Only 3 left!" snack', 'Flash sale on something unplanned', 'Scarcity triggers impulse'],
          ['Keeping money safe', 'Moving ₹1,00,000 to an FD', 'Safety and yield beat zero return'],
          ['Accepting a better voucher', 'Negotiating rent or a salary offer', 'Value received can exceed value asked'],
          ['Guaranteed doubling', 'Guaranteed 40% monthly returns', 'Guaranteed high returns are always fraud'],
          ['Saving the remainder', 'Paying yourself first on payday', 'Save before you spend'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'What Level 1 gave you',
        text: 'You can now explain what money is, how it moves through banks and the economy, how to budget and save, how interest and inflation work, how payments are made safely, how to spot fraud, and how to build a tracker. Level 2 turns that into a measured net worth and a real emergency fund.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Your real task after this chapter',
        text: 'Take your actual income and actual spending, and write down three numbers: your fixed costs, your monthly surplus, and your current savings rate. That is your starting position — and it is more useful than any lesson in this chapter.',
      },
    ],
    quiz: [
      {
        q: 'An offer of "guaranteed 40% monthly returns" should be treated as:',
        options: [
          { text: 'An excellent opportunity worth investigating', correct: false, why: 'Guaranteed high returns are the defining sign of a scam.' },
          { text: 'A scam — no legitimate investment guarantees that, and anyone charging to tell you otherwise is a fraudster', correct: true, why: 'Exactly right.' },
          { text: 'A reasonable target for your savings', correct: false, why: 'Impossible in any real market.' },
        ],
      },
      {
        q: 'Why is splitting a cost with friends a legitimate financial skill?',
        options: [
          { text: 'Because it always makes things cheaper regardless of numbers', correct: false, why: 'It lowers the per-person cost but requires more people.' },
          { text: 'Because the per-person cost falls as the group grows, making things affordable', correct: true, why: 'Exactly right.' },
          { text: 'Because friends usually pay your share', correct: false, why: 'Not the mechanism.' },
        ],
      },
      {
        q: 'The most valuable thing to take from the ₹10 exercise is:',
        options: [
          { text: 'The final rupee amount', correct: false, why: 'The score is not the point.' },
          { text: 'Recognising the patterns — cost splitting, false discounts, impulse triggers, and scam signals — which apply at every scale', correct: true, why: 'Exactly right — the patterns transfer.' },
          { text: 'Winning the game', correct: false, why: 'There is no winning.' },
        ],
      },
    ],
    takeaway: 'Ten rupees is too small to matter and exactly the right size to practise. Split costs, take real discounts, resist false urgency, spot scams, and always keep a buffer.',
  },
}