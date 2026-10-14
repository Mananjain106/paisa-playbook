import type { Chapter } from '../../types'

/** Level 1, chapters 33–38: the maths of money over time. */
export const investingBasics: Record<string, Chapter> = {
  'l1-033': {
    id: 'l1-033',
    title: 'Simple Interest',
    subtitle: 'Interest on the original amount only',
    minutes: 3,
    blocks: [
      { kind: 'p', text: 'Simple interest is calculated only on the original principal. The interest earned each year does not itself earn interest. It is easy to calculate, easy to verify, and almost never used by real financial products.' },
      { kind: 'formula',
        label: 'Simple interest',
        expr: 'SI = P × R × T ÷ 100',
        note: 'P = principal, R = annual rate, T = years. The total you receive is P + SI.',
      },
      {
        kind: 'example',
        title: 'Worked example',
        text: '₹10,000 at 8% simple interest for 3 years: interest = 10,000 × 8 × 3 ÷ 100 = ₹2,400. You receive ₹12,400. Each year you earn exactly ₹800, no matter how much has already accumulated — because the calculation ignores the ₹800 you earned last year.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why simple interest understates growth',
        text: 'Because the interest never compounds, simple interest grows in a straight line. Compound interest curves upward. Over 20 years at 8%, simple interest gives you ₹26,000 on ₹10,000; compound interest gives you about ₹46,610. The same rate, wildly different results.',
      },
      {
        kind: 'table',
        caption: 'Simple vs compound on ₹10,000 at 8% for 20 years',
        headers: ['Year', 'Simple interest earned', 'Compound value'],
        rows: [
          ['5', '₹4,000', '₹14,933'],
          ['10', '₹8,000', '₹21,589'],
          ['15', '₹12,000', '₹31,186'],
          ['20', '₹16,000', '₹46,610'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Where you will actually meet it',
        text: 'Simple interest appears in: car loan prepayment calculations, some flat-rate schemes, and "interest on interest" claims in loan offers. It is also the honest way to work out the true cost of a flat-rate loan — see the note below.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The flat-rate EMI trap',
        text: 'A "flat 9%" car loan charges interest on the original amount for the whole term, even though you are slowly repaying it. The real rate is nearly double — often 16–18%. Always convert a flat rate to a reducing-balance rate before judging the cost.',
      },
      { kind: 'sim', name: 'sheet', caption: 'Type =P*R*T/100 with a principal cell of your own and watch the straight line versus the compound curve.' },
    ],
    quiz: [
      {
        q: 'Simple interest on ₹50,000 at 6% for 4 years is:',
        options: [
          { text: '₹12,000', correct: true, why: 'Correct — 50,000 × 6 × 4 ÷ 100 = ₹12,000.' },
          { text: '₹13,448', correct: false, why: 'That is closer to the compound answer, which is higher.' },
          { text: '₹3,000', correct: false, why: 'That is one year of interest.' },
        ],
      },
      {
        q: 'Simple interest differs from compound interest because simple interest:',
        options: [
          { text: 'Is calculated on the original principal only', correct: true, why: 'Exactly right — interest is not added back into the base.' },
          { text: 'Is always higher for the same rate and time', correct: false, why: 'It is always lower or equal.' },
          { text: 'Is never used by lenders', correct: false, why: 'It is used in flat-rate loan calculations and prepayments.' },
        ],
      },
      {
        q: 'A loan advertised at "flat 9%" is misleading mainly because:',
        options: [
          { text: 'The rate is illegal', correct: false, why: 'Flat rates are legal, just costly.' },
          { text: 'It charges interest on the original amount for the full term, so the true rate is far higher', correct: true, why: 'Exactly — convert it to a reducing-balance rate.' },
          { text: 'It includes hidden fees only', correct: false, why: 'The main issue is the interest calculation method.' },
        ],
      },
    ],
    takeaway: 'Simple interest ignores interest on interest, so it grows in a straight line. Use it for quick checks — and convert any flat-rate loan to a real rate before accepting it.',
  },

  'l1-034': {
    id: 'l1-034',
    title: 'Compound Interest',
    subtitle: 'The eighth wonder, and the one number that decides most goals',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'Same rate, same years. The gap is entirely interest on interest.' },
      { kind: 'p', text: 'Compound interest is interest calculated on the principal plus the interest already earned. Each period\'s interest becomes part of the next period\'s base, so growth accelerates over time. It works for you when you save, and against you when you borrow.' },
      { kind: 'formula',
        label: 'Compound amount',
        expr: 'A = P(1 + r/12)^(12t)   or   A = P(1 + r/n)^(n·t)',
        note: 'Monthly compounding is standard for Indian deposits and SIPs: r is the annual rate, t is years.',
      },
      { kind: 'h', text: 'The rule of 72' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Double your money in 72 ÷ rate years',
        text: 'At 12% it takes about 6 years to double; at 8%, 9 years; at 6%, 12 years; at 4%, 18 years. This gives you instant, accurate intuition about how strongly time and rate drive the result — and why starting at 25 beats starting at 35.',
      },
      {
        kind: 'table',
        caption: '₹10,000 invested once at various rates, after 20 years',
        headers: ['Annual rate', 'Value after 10 years', 'Value after 20 years'],
        rows: [
          ['4%', '₹14,889', '₹22,196'],
          ['6%', '₹17,909', '₹32,108'],
          ['8%', '₹21,589', '₹46,610'],
          ['12%', '₹31,058', '₹96,463'],
          ['15%', '₹40,506', '₹164,224'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The same maths against you',
        text: 'A credit card balance of ₹1,00,000 at 36% annualised, left unpaid, becomes ₹1,21,700 after a year — you paid ₹21,700 for ₹1 lakh of spending. Credit card debt is the one place where compound interest reliably destroys money.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Time is the dominant variable',
        text: 'At 12%, ₹5,000 a month for 30 years gives about ₹10 lakh. ₹10,000 a month for 30 years gives about ₹20 lakh. ₹10,000 a month for just 10 more years gives about ₹25 lakh. The last one costs you the least in effort and produces the most — time dominates amount and rate.',
      },
      { kind: 'sim', name: 'compound', caption: 'Run the numbers yourself: change the amount, the years and the rate, and watch what each one is worth.' },
    ],
    quiz: [
      {
        q: '₹10,000 at 10% compounded annually becomes approximately after 10 years:',
        options: [
          { text: '₹20,000', correct: false, why: 'That would be simple interest doubling in exactly 10 years at 10% — not compound.' },
          { text: '₹25,937', correct: true, why: 'Correct — 10,000 × 1.1^10 ≈ ₹25,937.' },
          { text: '₹11,000', correct: false, why: 'That is one year.' },
        ],
      },
      {
        q: 'Using the rule of 72, money at 9% will double in about:',
        options: [
          { text: '9 years', correct: false, why: 'That is the rate, not the doubling time.' },
          { text: '8 years', correct: true, why: 'Correct — 72 ÷ 9 = 8.' },
          { text: '18 years', correct: false, why: 'That is the doubling time at 4%.' },
        ],
      },
      {
        q: 'In the comparison "₹10,000 a month for 20 years" versus "₹5,000 a month for 30 years", which produces more?',
        options: [
          { text: '₹5,000 for 30 years, because more years always wins', correct: false, why: 'Duration helps but the contribution amount matters enormously too.' },
          { text: '₹10,000 for 20 years, because total contributions are far higher', correct: true, why: 'Correct — it totals ₹24 lakh invested versus ₹18 lakh, and it compounds for a long time.' },
          { text: 'They are exactly equal', correct: false, why: 'They are not.' },
        ],
      },
    ],
    takeaway: 'Compound interest grows exponentially; time dominates both rate and amount. Use the rule of 72 for intuition, and remember it works against you on credit card debt.',
  },

  'l1-035': {
    id: 'l1-035',
    title: 'Inflation',
    subtitle: 'The quiet tax on money that sits still',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'inflation-crocodile', caption: 'Prices rise gradually, so you never notice the year your savings shrank.' },
      { kind: 'p', text: 'Inflation is the general rise in prices over time, which means each rupee buys less than it did before. India\'s consumer inflation has typically run in the 5–7% range in recent years, which is far above most savings account rates.' },
      { kind: 'formula',
        label: 'Inflation-adjusted (real) return',
        expr: 'Real return ≈ (1 + nominal return ÷ 1 + inflation) − 1',
        note: 'At 7% FD interest and 6% inflation, your real return is only about 1% a year.',
      },
      {
        kind: 'table',
        caption: 'What ₹100,000 in an FD is worth in today\'s money, over time',
        headers: ['Inflation rate', 'After 10 years', 'After 20 years', 'After 30 years'],
        rows: [
          ['4%', '₹67,200', '₹45,200', '₹30,800'],
          ['6%', '₹55,800', '₹31,100', '₹17,400'],
          ['8%', '₹46,300', '₹21,500', '₹9,950'],
          ['10%', '₹38,600', '₹14,870', '₹5,720'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why cash feels safe and is not',
        text: 'A savings account paying 3.5% against 6% inflation loses about 2.4% of buying power every year. Over twenty years that is roughly a third of your money gone. The risk is not that you will lose the balance sheet — it is that it will quietly stop being able to do what you saved it for.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Inflation is uneven',
        text: 'Headline inflation is an average. Housing, education and healthcare in Indian cities often rise far faster than the headline figure, while electronics and clothing have sometimes fallen. Your personal inflation rate — what your own basket costs — is higher than the national average for most urban households.',
      },
      {
        kind: 'sim', name: 'compound', caption: 'Set the return to your savings rate and the years to 20, then compare the growth against the flat grey line of what you contributed.' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The practical rule',
        text: 'Money needed within 2–3 years should be safe and liquid. Money needed in 10+ years needs to grow faster than inflation, which means accepting some volatility in exchange for real returns.',
      },
    ],
    quiz: [
      {
        q: 'If inflation is 6% and your deposit pays 7%, your approximate real return is:',
        options: [
          { text: '7%', correct: false, why: 'That ignores inflation entirely.' },
          { text: 'About 1%', correct: true, why: 'Correct — roughly 1.06/1.07 − 1 ≈ −1%, i.e. near zero; the point is it is barely positive.' },
          { text: '13%', correct: false, why: 'That would be adding them.' },
        ],
      },
      {
        q: 'Why is personal inflation often higher than the national headline figure?',
        options: [
          { text: 'Because the government understates it', correct: false, why: 'Not a reasonable assumption.' },
          { text: 'Because headline inflation is an average across all goods, and urban households buy disproportionately from the categories rising fastest', correct: true, why: 'Exactly — it is an averaging effect.' },
          { text: 'Because rent is excluded from the index', correct: false, why: 'Housing does enter the calculation in India\'s CPI.' },
        ],
      },
      {
        q: '₹100,000 at 6% inflation for 20 years is worth roughly today\'s money of:',
        options: [
          { text: '₹31,100', correct: true, why: 'Correct — 100,000 ÷ 1.06^20.' },
          { text: '₹2,20,000', correct: false, why: 'That would be growth, not inflation.' },
          { text: '₹1,00,000', correct: false, why: 'The nominal amount is unchanged; the purchasing power is not.' },
        ],
      },
    ],
    takeaway: 'Inflation quietly shrinks cash. Match the risk of where you keep money to how long you need it, and make sure long-term money can outpace inflation.',
  },

  'l1-036': {
    id: 'l1-036',
    title: 'Opportunity Cost',
    subtitle: 'The true price of every choice is the next best one you gave up',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'opportunity-fork', caption: 'Every rupee spent closes a door. The question is which one.' },
      { kind: 'p', text: 'Opportunity cost is the value of the best alternative you gave up by choosing something. It is not usually a cash cost — it is invisible, which is exactly why it gets ignored.' },
      {
        kind: 'example',
        title: 'The ₹300 that was not examined',
        text: 'Buying a ₹300 coffee costs more than ₹300. It costs ₹300 plus the return you would have earned had you invested it for 20 years at 10% — about ₹1,910. The real price of the coffee was around ₹2,200 in lifetime terms.',
      },
      {
        kind: 'table',
        caption: 'Opportunity cost of common choices',
        headers: ['Choice today', 'Cost today', 'Opportunity cost'],
        rows: [
          ['Buy a new phone', '₹30,000', '₹30,000 deposited for 20 years ≈ ₹19,000'],
          ['Keep an old car for 2 more years', '₹0 saved now', 'The resale value you gave up'],
          ['Take a lower-paying job offer', '₹1,50,000 a year', 'Everything you could have built with that salary'],
          ['Spend ₹500 on delivery food', '₹500', '≈ ₹3,200 if invested for 20 years'],
          ['Skip an insurance premium', '₹8,000 saved', 'A potentially catastrophic uncovered loss'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The comparison that matters is time-horizon matched',
        text: 'The opportunity cost of ₹500 spent on food today is only relevant against other uses of ₹500 today. Judging a small daily purchase against a 20-year investment return is a category error — but it is the comparison that makes small spends feel insignificant and that is exactly the trap.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'How to use this without paralysis',
        text: 'For any purchase above about ₹2,000, name the specific alternative you are giving up: "instead of this, I could put ₹2,000 into my emergency fund" or "instead, I could pay down my 18% loan". If the alternative is clearly better, the purchase is usually not. If no alternative exists, the cost is genuinely just the money.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'It applies to time too',
        text: 'Spending three evenings a week on a side project with no revenue path is a real opportunity cost. So is not developing a skill. The cost of a choice is not only the money — it is the time and attention that go into it.',
      },
    ],
    quiz: [
      {
        q: 'Opportunity cost is best defined as:',
        options: [
          { text: 'The cash price of a purchase', correct: false, why: 'That is the explicit cost, not the opportunity cost.' },
          { text: 'The value of the best alternative given up by choosing something', correct: true, why: 'Exactly right.' },
          { text: 'The tax you pay on a purchase', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Why is opportunity cost often ignored?',
        options: [
          { text: 'It cannot be calculated at all', correct: false, why: 'It can be estimated, at least roughly.' },
          { text: 'Because it is invisible — no money changes hands when you forgo the alternative', correct: true, why: 'Correct — no payment makes it easy to overlook.' },
          { text: 'Because it only applies to business decisions', correct: false, why: 'It applies to every choice.' },
        ],
      },
      {
        q: 'Your real cost of a ₹300 item bought with money you had earmarked for a deposit is:',
        options: [
          { text: '₹300', correct: false, why: 'That ignores the deposit you can no longer make.' },
          { text: '₹300 plus the delay to your deposit goal', correct: true, why: 'Exactly — the opportunity cost is the forgone deposit.' },
          { text: 'Zero, since it was affordable', correct: false, why: 'Affordability does not make the alternative worthless.' },
        ],
      },
    ],
    takeaway: 'The true cost of a choice includes the best alternative you gave up. Name that alternative for anything above a few thousand rupees.',
  },

  'l1-037': {
    id: 'l1-037',
    title: 'Financial Goals',
    subtitle: 'Direction first, amounts later',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'goal-ladder', caption: 'Ranked goals, each with its own timeline, amount and vehicle.' },
      { kind: 'p', text: 'A financial goal is a specific thing you want your money to do, with an amount and a timeline. Goals work as priorities: when you know what you are saving for, deciding what to skip becomes obvious rather than emotional.' },
      { kind: 'h', text: 'The four parts' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'What — the specific purpose, named concretely.',
          'How much — the target amount, estimated and rounded up.',
          'By when — a real date, because this drives everything else.',
          'From which money — a dedicated, labelled pot.',
        ],
      },
      {
        kind: 'table',
        caption: 'Common goals with realistic targets',
        headers: ['Goal', 'Typical target', 'Horizon'],
        rows: [
          ['Emergency fund', '3–6 months of expenses', 'Under 1 year to build'],
          ['Vacation', '₹50,000–₹1,50,000', '1–2 years'],
          ['Car down payment', '₹2–₹4 lakh', '2–4 years'],
          ['House down payment', '20–30% of property value', '5–8 years'],
          ['Child\'s education', '₹25–₹80 lakh', '10–18 years'],
          ['Retirement', '25–30× annual expenses', '20–35 years'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'SMART goals survive contact with reality',
        text: 'Specific, Measurable, Achievable, Relevant, Time-bound. "Save for a car" fails; "save ₹2,50,000 by March 2028 for a used car" can be checked weekly. The goal is not to be impressive, it is to be checkable.',
      },
      {
        kind: 'formula',
        label: 'Monthly saving required',
        expr: 'Required per month = (Target − Already saved) ÷ Months left',
        note: 'Always run this before committing to a goal. If the number is impossible, change the goal — not the math.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Goals compete; rank them',
        text: 'You cannot fund everything at once. Rank goals by two factors: consequence of not achieving it, and how much you care. Fund the top two properly and deliberately delay the rest, rather than spreading thin and failing all of them.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Review twice a year',
        text: 'Life changes — income, family, prices. A goal set three years ago may now be irrelevant or urgent. Reviewing twice a year keeps the plan honest without turning it into a monthly obsession.',
      },
    ],
    quiz: [
      {
        q: 'Which of these is a properly formed financial goal?',
        options: [
          { text: 'Save more money', correct: false, why: 'No amount and no date.' },
          { text: 'Save ₹2,50,000 by March 2028 for a used car', correct: true, why: 'Specific, measurable, dated and relevant.' },
          { text: 'Get richer', correct: false, why: 'Not measurable at all.' },
        ],
      },
      {
        q: 'You need ₹3,00,000 in 24 months and have saved ₹60,000. The monthly amount required is:',
        options: [
          { text: '₹10,000', correct: true, why: 'Correct — (3,00,000 − 60,000) ÷ 24 = ₹10,000.' },
          { text: '₹12,500', correct: false, why: 'That divides the target without subtracting what is saved.' },
          { text: '₹2,500', correct: false, why: 'Off by a factor of four.' },
        ],
      },
      {
        q: 'Why rank your goals?',
        options: [
          { text: 'Because lenders require a ranked list', correct: false, why: 'Not a requirement.' },
          { text: 'Because limited money cannot fund everything at once, so deliberate priority beats spreading thin', correct: true, why: 'Exactly right.' },
          { text: 'To reduce taxes', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'A good goal has an amount, a date and a purpose. Always compute the monthly requirement before committing, and rank goals so your money goes where it matters most.',
  },

  'l1-038': {
    id: 'l1-038',
    title: 'Short-Term, Medium-Term And Long-Term Goals',
    subtitle: 'Match the horizon to the vehicle',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'goal-ladder', caption: 'The further away the goal, the more the money must be allowed to grow.' },
      { kind: 'p', text: 'Every goal belongs to one of three horizons, and each horizon implies a different risk level, vehicle and funding method. Putting a 5-year goal into equities, or a 6-month goal into the stock market, are the two most common avoidable mistakes in personal finance.' },
      {
        kind: 'table',
        caption: 'The three horizons compared',
        headers: ['', 'Short-term', 'Medium-term', 'Long-term'],
        rows: [
          ['Time horizon', 'Up to 1 year', '1–5 years', 'Over 5 years'],
          ['Examples', 'Emergency top-up, fees, repairs', 'Car, travel, course, wedding', 'House, education, retirement'],
          ['Priority', 'Highest — must not fail', 'High', 'Important but flexible'],
          ['Risk tolerance', 'Almost none', 'Low to moderate', 'Moderate to high'],
          ['Vehicle', 'Savings account, liquid fund', 'FD, short-duration fund, debt fund', 'Equity funds, stocks, EPF, PPF'],
          ['Review', 'Monthly', 'Every 6 months', 'Annually'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The sequence of priorities is not negotiable',
        text: 'Emergency fund first, then high-interest debt, then short-term goals, then long-term investment. Following this order is uncomfortable and correct. Jumping straight to long-term investing while carrying credit card debt means taking risk with money you cannot afford to lose.',
      },
      {
        kind: 'example',
        title: 'Why the horizon matters more than the return',
        text: 'You need ₹80,000 for a down payment in 18 months. An equity fund might average 12% but could fall 30% in that time. A liquid fund at 6.5% will not surprise you. The equity option might earn more — and might also cost you the down payment, which costs you the flat.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'A practical split to start with',
        text: 'Keep short-term money in a savings or liquid fund. Direct monthly savings into medium-term deposits as they arise. Run a long-term monthly investment — a SIP — that you do not touch for a decade. Three buckets, three purposes, no confusion.',
      },
      {
        kind: 'sim', name: 'compound', caption: 'Compare a 3-year horizon against a 25-year horizon at the same rate and see how differently the outcomes land.' },
    ],
    quiz: [
      {
        q: 'Money needed for a down payment in 18 months is best held in:',
        options: [
          { text: 'Equity shares, for maximum growth', correct: false, why: 'Too risky for a dated, essential goal.' },
          { text: 'A liquid fund or FD, where value is predictable', correct: true, why: 'Correct — match risk to the date.' },
          { text: 'Equity, but only a small portion', correct: false, why: 'Any risky portion can miss the target date.' },
        ],
      },
      {
        q: 'The correct priority order before investing for long-term goals is:',
        options: [
          { text: 'Long-term investments, then emergency fund, then debt', correct: false, why: 'Reversed, and the most common mistake.' },
          { text: 'Emergency fund, then clear high-interest debt, then short-term goals, then long-term investing', correct: true, why: 'Exactly right.' },
          { text: 'Debt, then long-term investing, then emergency fund', correct: false, why: 'Still out of order.' },
        ],
      },
      {
        q: 'A long-term goal can accept more risk mainly because:',
        options: [
          { text: 'Long-term returns are guaranteed to be higher', correct: false, why: 'No guarantee exists.' },
          { text: 'There is more time for growth to recover from a temporary fall, and the date can flex', correct: true, why: 'Exactly — time horizon is what makes risk tolerable.' },
          { text: 'Long-term goals earn tax exemptions', correct: false, why: 'Not the reason.' },
        ],
      },
    ],
    takeaway: 'Match risk to horizon: safe and liquid for near-term dates, growth assets for long ones. Fund in the order emergency fund, then debt, then short-term, then long-term.',
  },
}