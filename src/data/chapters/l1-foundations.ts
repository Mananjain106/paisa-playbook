import type { Chapter } from '../../types'

/** Level 1, chapters 1–8: what money is and where it came from. */
export const foundations: Record<string, Chapter> = {
  'l1-001': {
    id: 'l1-001',
    title: 'What Is Money',
    subtitle: 'Three jobs, one piece of paper — and why that works',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'coins', caption: 'Money is not valuable by itself. Its value comes from what everyone agrees it is worth.' },
      { kind: 'p', text: 'Money is anything that people accept in exchange for goods and services, and that also lets you store value and split it into portions. That is the whole definition — no gold, no paper, no government decree required.' },
      { kind: 'h', text: 'The three jobs money does' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A medium of exchange — it solves the problem of "I have this, I want that" without hunting down a double coincidence of wants.',
          'A unit of account — it gives everything a comparable number, so you can add a bus fare to a salary and know if the sum makes sense.',
          'A store of value — it lets you move purchasing power from today to ten years from now.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The trust test',
        text: 'Money works because of a collective agreement. A ₹500 note is just paper and cotton. Its power comes from the shared belief that your shopkeeper, your employer and your bank will all accept it tomorrow. Belief is the actual asset.',
      },
      { kind: 'h', text: 'Where it shows up in your life' },
      {
        kind: 'example',
        title: 'Three forms, one idea',
        text: 'Cash in your wallet, money as a number inside a bank app, and units of a mutual fund are all money. The first is physical, the second is a claim on a bank, the third is a claim on assets. Same three jobs, three different forms.',
      },
      {
        kind: 'table',
        caption: 'Forms of money in India',
        headers: ['Form', 'What it actually is', 'Who accepts it'],
        rows: [
          ['Banknotes and coins', 'Physical currency issued by the RBI', 'Almost everyone'],
          ['UPI / NEFT balance', 'A claim on your bank', 'Anyone who takes a UPI payment'],
          ['Cheque', 'A written claim on a bank', 'Businesses, landlords'],
          ['Gold', 'A commodity with intrinsic value', 'Jewellers, banks'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The catch with store of value',
        text: 'Money that keeps you alive this month may quietly shrink in buying power over thirty years. Chapter 35 covers inflation, and chapter 34 covers why money that earns something is a different animal.',
      },
      { kind: 'sim', name: 'compound', caption: 'See how the same concept of "saving money" turns into growth when money earns a return.' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Try this today',
        text: 'Pick up any note in your wallet and notice three things: who guarantees it, what it promises, and the fact that it carries no claim on any goods. Cash is an instruction, not a receipt.',
      },
    ],
    quiz: [
      {
        q: 'Money fundamentally solves a problem of:',
        options: [
          { text: 'Storing physical wealth safely', correct: false, why: 'Gold and vaults do that. Storage is one benefit but not the core problem.' },
          { text: 'Exchange — trading without needing a double coincidence of wants', correct: true, why: 'This is the original problem money solves, and the reason barter systems were so limiting.' },
          { text: 'Producing goods and services', correct: false, why: 'That is what work and business do, not money.' },
          { text: 'Measuring the value of gold', correct: false, why: 'Money measures the value of everything, not just gold.' },
        ],
      },
      {
        q: 'A UPI balance in your bank app is best described as:',
        options: [
          { text: 'A physical claim you can hand over', correct: false, why: 'There is nothing physical — it is an account balance.' },
          { text: 'A claim on your bank that others accept because the payment system clears it', correct: true, why: 'Right. Digital money is an accounting entry that is transferable through the payment rails.' },
          { text: 'Currency issued by the RBI', correct: false, why: 'The RBI issues notes; your balance is a deposit liability of your bank.' },
        ],
      },
      {
        q: 'If people stopped accepting a particular note, what would happen to it?',
        options: [
          { text: 'It would still hold value because it is made of cotton and paper', correct: false, why: 'Material value is irrelevant. A note that nobody accepts is just paper.' },
          { text: 'It would lose almost all its value, showing that trust is the real backing', correct: true, why: 'Exactly — the shared belief of acceptance is what makes money money.' },
          { text: 'The government would buy them all back at the same price', correct: false, why: 'Legal tender guarantees redemption at face value by the issuing bank, not market value in trade.' },
        ],
      },
    ],
    takeaway: 'Money is a shared agreement, not a material thing. It works because it exchanges, measures and stores — and it loses those powers the moment that agreement breaks.',
  },

  'l1-002': {
    id: 'l1-002',
    title: 'History Of Money',
    subtitle: 'From cowries to UPI — 5,000 years of trust problems',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'timeline', caption: 'Each money era solved a specific problem with the one before it.' },
      { kind: 'p', text: 'Every stage of money history is a response to a practical problem. Shells were easy to count but hard to store. Coins were durable but heavy. Gold solved storage but not portability. Each invention fixed one flaw and created another.' },
      { kind: 'h', text: 'The eras' },
      {
        kind: 'table',
        caption: 'How money evolved',
        headers: ['Era', 'Form', 'What it fixed', 'What it broke'],
        rows: [
          ['Before 3000 BC', 'Cattle, grain, cowrie shells', 'No central issuer needed', 'Hard to divide, count and store'],
          ['c. 700 BC', 'Electrum and silver coins (Lydda)', 'Durable, divisible, verifiable', 'Heavy, and where did the gold come from?'],
          ['c. 1000 AD', 'Paper money in China (jiaozi)', 'Lightweight, easy to transport', 'Counterfeiting and hyperinflation'],
          ['1660s', 'Banknotes in Sweden and England', 'Fixed the weight problem', 'Only worked while banks stayed solvent'],
          ['1946', 'UPI launched in India', '24×7 transfers, no holidays', 'Depends entirely on digital trust'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The recurring pattern',
        text: 'Each leap in money also produced a new fraud. Coin clipping. Counterfeit notes. Fake UPI screens. The history of money is largely the history of people trying to cheat it.',
      },
      {
        kind: 'example',
        title: 'The Bank of England note experiment',
        text: 'When the Bank of England was founded in 1694 it promised to pay note-holders in silver on demand. It kept that promise for about 280 years, which is why the phrase "as safe as the Bank of England" existed at all. In 1939 the promise was suspended under wartime pressure and never formally restored.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'India specifically',
        text: 'India has layered its own history onto this: silver rupees, then the colonial shift to a sterling-linked rupee, the 1957 decimalisation, demonetisation in 2016 to remove old ₹500 and ₹1000 notes, and now a UPI system that settles more retail payments than cards do.',
      },
      { kind: 'sim', name: 'sheet', caption: 'Age each form of money, from cowrie shells to UPI, and see how recent the money you use daily really is.' },
      {
        kind: 'table',
        caption: 'The Indian rupee timeline',
        headers: ['Year', 'Event', 'Why it mattered'],
        rows: [
          ['1946', 'RBI nationalised', 'Removed the British-era central bank'],
          ['1957', 'Decimal coinage', 'Made small change practical'],
          ['1971', 'Rupee devalued', 'First post-independence major devaluation'],
          ['2016', 'UPI launched', 'Free, instant payments that scaled nationwide'],
          ['2016', 'Demonetisation', 'Showed cash itself can be withdrawn from circulation'],
        ],
      },
    ],
    quiz: [
      {
        q: 'Why was paper money an improvement over coins?',
        options: [
          { text: 'It lasted longer', correct: false, why: 'Paper actually degrades faster; coins survive centuries.' },
          { text: 'It was lighter and portable while representing far more value', correct: true, why: 'Correct — carrying value without carrying weight was the breakthrough.' },
          { text: 'It could not be counterfeited', correct: false, why: 'Counterfeiting paper money became the central security problem.' },
        ],
      },
      {
        q: 'The main problem money history repeatedly produced was:',
        options: [
          { text: 'Not enough money in circulation', correct: false, why: 'Scarcity has existed, but the recurring story is fraud and trust.' },
          { text: 'Fraud — clipping coins, counterfeiting notes, fake payment screens', correct: true, why: 'Yes, and each new money form created a new version of this problem.' },
          { text: 'A lack of people willing to work', correct: false, why: 'Work and money are separate concerns.' },
        ],
      },
      {
        q: 'What did UPI change most fundamentally in India?',
        options: [
          { text: 'It introduced a new currency', correct: false, why: 'UPI moves existing money; it does not create a currency.' },
          { text: 'It made transfers instant, free and available 24×7 at scale', correct: true, why: 'Correct — convenience and cost, not a new currency.' },
          { text: 'It replaced the need for banks', correct: false, why: 'UPI runs through banks and the NPCI clearing system.' },
        ],
      },
    ],
    takeaway: 'Money history is a series of fixes: lighter, more portable, more divisible, more instant — each one solving yesterday\'s problem and creating tomorrow\'s fraud opportunity.',
  },

  'l1-003': {
    id: 'l1-003',
    title: 'The Barter System',
    subtitle: 'Why trading things directly never scaled',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'barter', caption: 'Barter needs two people to want exactly what the other has, at the same time.' },
      { kind: 'p', text: 'Barter is exchanging goods directly without money. It is the original human economic system, and it worked at small scale for thousands of years. It fails for structural reasons, not because people are bad at trading.' },
      { kind: 'h', text: 'The four structural problems' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Double coincidence of wants — the plumber has a leaking tap, but needs food, not plumbing.',
          'No common measure — without a shared unit, "three coconuts" and "a bolt of cloth" cannot be compared.',
          'Divisibility — a cow is valuable but cannot be used to buy half a loaf.',
          'Storage and spoilage — grain rots, goats die, and you cannot save a season of labour as a fish.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why it still exists',
        text: 'Barter persists where money is scarce or untrusted. You see cash-only rural markets, and barter arrangements inside villages with thin banking access. It is not naive — it is the rational response to a missing trust layer.',
      },
      {
        kind: 'example',
        title: 'A barter chain going wrong',
        text: 'You have 5 kg of rice and need a bicycle. The cyclist wants a specific spare part. The parts seller wants cash. Nobody in the chain wants rice. You end up selling rice to whoever will take it, at a price they set — because you had no alternative and no standard to argue with.',
      },
      {
        kind: 'table',
        caption: 'Barter vs money',
        headers: ['Feature', 'Barter', 'Money'],
        rows: [
          ['Needs a double coincidence', 'Yes', 'No'],
          ['Value comparison across goods', 'Very hard', 'Instant and standard'],
          ['Divisible payments', 'Almost impossible', 'Any amount'],
          ['Store value over time', 'Poor', 'Good, though inflation bites'],
          ['Scalable to large economies', 'No', 'Essential'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'See it in modern life',
        text: 'Time banking and barter clubs exist in several Indian cities where participants earn "hours" instead of rupees. It is barter, deliberately revived — which proves how strong the underlying need was.',
      },
    ],
    quiz: [
      {
        q: 'The "double coincidence of wants" problem means:',
        options: [
          { text: 'Both parties must want what the other is offering, at the same time', correct: true, why: 'Right — that simultaneous match is the bottleneck barter cannot get past.' },
          { text: 'People need to agree on a unit of measurement', correct: false, why: 'That is the measurement problem, a separate barter weakness.' },
          { text: 'Goods must be divisible', correct: false, why: 'That is the divisibility problem.' },
        ],
      },
      {
        q: 'Why can a cow not be used to buy half a loaf of bread?',
        options: [
          { text: 'Cows are too expensive', correct: false, why: 'Not the reason — the issue is physical and practical.' },
          { text: 'Goods like cows are not divisible into small units of exchange', correct: true, why: 'Exactly. Money solves this with denominations.' },
          { text: 'Barter has no rules', correct: false, why: 'Barter has rules; it simply lacks divisibility.' },
        ],
      },
      {
        q: 'Barter persists today mainly where:',
        options: [
          { text: 'Money has been banned', correct: false, why: 'Barter persists in many places, but not because money is banned there.' },
          { text: 'Money is scarce or the people involved do not fully trust it', correct: true, why: 'Correct — barter survives where the trust layer money needs is thin.' },
          { text: 'People prefer no numbers', correct: false, why: 'Numerical comparison is usually a benefit, not a problem people want to avoid.' },
        ],
      },
    ],
    takeaway: 'Barter failed not because of human nature but because it lacked a shared measure, divisibility and a way to store value — exactly the three jobs money does better.',
  },

  'l1-004': {
    id: 'l1-004',
    title: 'Currency',
    subtitle: 'Cash, coins, digital balances — and what backs each one',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Currency is the physical or digital form money takes so it can be carried and handed over. In India, currency means RBI-issued banknotes and coins. What matters for your finances is that currency comes in denominations and that not all of it is equally useful.' },
      { kind: 'scene', name: 'rupee', caption: 'Indian banknotes are obligations of the Reserve Bank of India.' },
      { kind: 'h', text: 'The denominations in use' },
      {
        kind: 'table',
        caption: 'Current Indian currency',
        headers: ['Type', 'Values', 'Note'],
        rows: [
          ['Banknotes', '₹1 (issued by government), ₹2, ₹10, ₹20, ₹50 (old gen. notes being phased out), ₹100, ₹200, ₹500, ₹2000', '₹500 and ₹2000 are the highest in circulation'],
          ['Coins', '₹1 to ₹10, then ₹20, ₹50, ₹100, ₹200, ₹500', '₹1 coin still circulating'],
          ['Digital', 'UPI, NEFT, IMPS, card balances', 'Not currency, but functions as money'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Currency vs money',
        text: 'Currency is the note in your hand. Money is the broader concept — it includes your bank balance, which is money without any currency at all. Most Indian money today is digital: that gap is worth internalising.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Cash has real costs',
        text: 'Cash that sits in a drawer loses value to inflation, risks theft, and costs you the 4–6% you could earn in an FD. Modern 2000-rupee notes are also widely rejected by small vendors, so a cash-heavy habit has a practical cost.',
      },
      {
        kind: 'example',
        title: 'The withdrawal trap',
        text: 'Many first-time investors and small traders treat ATM cash as leftover money and run a wallet at near-zero. Ten withdrawals a month at ₹200 each is ₹24,000 a year sitting where it cannot earn, cannot be tracked automatically, and cannot be audited.',
      },
      {
        kind: 'table',
        caption: 'Cash vs digital for daily money',
        headers: ['Factor', 'Cash', 'Digital'],
        rows: [
          ['Earning potential', '0%', '4–7% in an FD, more invested'],
          ['Tracking', 'Manual memory or diaries', 'Automatic statements'],
          ['Fraud risk', 'Loss, snatching', 'Phishing, but auditable'],
          ['Offline use', 'Works anywhere', 'Needs power, network, battery'],
          ['Privacy', 'Anonymous', 'Every transaction is recorded'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Practical rule',
        text: 'Carry some cash for emergencies and small vendors, but treat it as the smallest line in your budget, not a parallel banking system. If your cash exceeds about a week of spending, move the excess somewhere it can grow.',
      },
    ],
    quiz: [
      {
        q: 'What is the difference between currency and money?',
        options: [
          { text: 'They are the same thing', correct: false, why: 'They overlap but are not identical.' },
          { text: 'Currency is the physical/digital instrument; money is the broader concept including bank balances', correct: true, why: 'Correct — a bank balance is money with no currency in it.' },
          { text: 'Currency is foreign, money is Indian', correct: false, why: 'Not the distinction.' },
        ],
      },
      {
        q: 'Money sitting as cash in a drawer earns:',
        options: [
          { text: 'Bank rate', correct: false, why: 'Cash earns nothing from a bank.' },
          { text: 'Zero, while inflation quietly reduces what it buys', correct: true, why: 'Exactly — cash has no yield and shrinking purchasing power.' },
          { text: 'Dividends', correct: false, why: 'Dividends only apply to investments.' },
        ],
      },
      {
        q: 'A benefit of digital money over cash is:',
        options: [
          { text: 'It works with no power or network', correct: false, why: 'That is cash\'s advantage, not digital\'s.' },
          { text: 'Every transaction is recorded, making tracking and auditing automatic', correct: true, why: 'Correct — automatic records are a major practical advantage.' },
          { text: 'It cannot be stolen', correct: false, why: 'Digital accounts can be compromised; the risk changes form rather than disappearing.' },
        ],
      },
    ],
    takeaway: 'Currency is the note in your hand; money is the wider concept. Cash is convenient but earns nothing, so use it for convenience and grow the rest.',
  },

  'l1-005': {
    id: 'l1-005',
    title: 'The Indian Rupee',
    subtitle: '₹ — a floating currency shaped by trade, inflation and policy',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'rupee', caption: 'The rupee is not backed by gold; it is managed by the RBI on behalf of the Government of India.' },
      { kind: 'p', text: 'The rupee is the official currency of India, managed by the Reserve Bank of India under the RBI Act. It is a fiat currency: it holds value because a central bank and government stand behind it and because people accept it, not because of the metal inside.' },
      { kind: 'h', text: 'How the rupee behaves' },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Managed, not fixed',
        text: 'The rupee floats against a basket of currencies rather than being pegged to one. If India imports more oil than it exports software, demand for dollars rises and the rupee tends to weaken against the dollar. That movement changes what your imported goods and international investments cost.',
      },
      {
        kind: 'table',
        caption: 'Factors that push the rupee up or down',
        headers: ['Pushes ₹ stronger', 'Pushes ₹ weaker'],
        rows: [
          ['Strong foreign inflows (FPI equity buying)', 'Capital outflows to overseas assets'],
          ['Rising exports, improving trade balance', 'Widening trade deficit'],
          ['Higher interest rates attracting investors', 'Risk-off selling during global shocks'],
          ['Stable inflation expectations', 'Oil price spikes'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Why a falling rupee matters to you personally',
        text: 'If the rupee weakens, imported goods cost more, and a ₹1,000 foreign investment may be worth less in rupees when you sell. This is one reason Indian investors are advised to keep some assets in foreign currency rather than everything at home.',
      },
      {
        kind: 'example',
        title: 'Why ₹100 from five years ago buys less',
        text: 'India\'s consumer inflation has generally run in the 5–7% range over the past decade. At roughly 6% per year, ₹100 buys only about ₹75 worth of goods after five years and ₹55 after ten. Same number, much less buying power.',
      },
      {
        kind: 'table',
        caption: 'Indian currency denominations in daily use',
        headers: ['You handle', 'How often', 'Best for'],
        rows: [
          ['₹10 – ₹100 notes, UPI', 'Every day', 'Small payments, splits, transit'],
          ['₹500 note, UPI', 'Weekly', 'Groceries, bills'],
          ['₹2000 note', 'Rarely', 'Large cash transactions; often refused'],
          ['Digital balance', 'Daily', 'Savings, investments, anywhere'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Cash in circulation is huge',
        text: 'Roughly ₹30–32 lakh crore of currency is in circulation, and around 80%+ of that value is still in ₹500 notes. Most of it sits in bank vaults, not in wallets — so "printing more money" is a misleading description of what actually happens.',
      },
    ],
    quiz: [
      {
        q: 'The Indian rupee is a fiat currency, meaning its value comes from:',
        options: [
          { text: 'A fixed quantity of gold held by the RBI', correct: false, why: 'India does not hold gold to back the currency at a fixed rate.' },
          { text: 'Government and central bank backing, plus public acceptance', correct: true, why: 'Correct — no commodity backs it; trust and policy do.' },
          { text: 'A law that fixes it to the dollar', correct: false, why: 'India manages the rupee actively rather than pegging it to the dollar.' },
        ],
      },
      {
        q: 'India runs a trade deficit. What does that usually do to the rupee?',
        options: [
          { text: 'Strengthens it, because more imports mean more trade', correct: false, why: 'Import demand means selling rupees to buy foreign currency.' },
          { text: 'Weakens it, because more rupees are sold to pay for imports', correct: true, why: 'Right — this is why a deficit usually pressures the currency downward.' },
          { text: 'Has no effect on currency value', correct: false, why: 'Trade flows are one of the main drivers of currency demand.' },
        ],
      },
      {
        q: 'At roughly 6% annual inflation, ₹100 today is worth roughly in about ten years:',
        options: [
          { text: '₹100', correct: false, why: 'That would require zero inflation.' },
          { text: '₹55', correct: true, why: 'Correct — 100 / 1.06^10 ≈ ₹55.' },
          { text: '₹160', correct: false, why: 'That is the effect of 5% inflation in reverse — not how it works.' },
        ],
      },
    ],
    takeaway: 'The rupee is managed by the RBI, floats against other currencies, and loses buying power to inflation — so holding rupees is a decision, not a default.',
  },

  'l1-006': {
    id: 'l1-006',
    title: 'Purchasing Power',
    subtitle: 'What really matters is what your money can buy',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'rupee-erode', caption: 'The same pile of cash buys less every year unless it earns something.' },
      { kind: 'p', text: 'Purchasing power is how much goods and services a fixed amount of money can buy. It is the measure that actually matters. A salary of ₹10 lakh sounds impressive, but if rent, food and schooling consume most of it, the lifestyle it buys is what counts.' },
      { kind: 'h', text: 'Three forces that change it' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Inflation — general prices rise, so each rupee buys less.',
          'Income growth — if your income rises faster than prices, your purchasing power rises even without a promotion.',
          'Your own spending pattern — choosing ₹500 tea over ₹50 tea is a direct purchase of a better life at the cost of a worse one elsewhere.',
        ],
      },
      {
        kind: 'formula',
        label: 'Real (inflation-adjusted) value',
        expr: 'Real value = Nominal value ÷ (1 + inflation rate)^years',
        note: 'If you hold ₹100,000 for 10 years at 6% inflation, it buys the equivalent of about ₹55,800 in today\'s money.',
      },
      {
        kind: 'example',
        title: 'Two people, same salary, different lives',
        text: 'Ravi and Meera both earn ₹80,000 a month. Ravi spends ₹45,000 on rent and a car loan. Meera rents a smaller place and commutes, spending ₹18,000. Neither is "wrong", but Meera has ₹27,000 more per month to deploy — which over ten years becomes a very different life.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The uncomfortable question',
        text: 'Ask of any expense: how many hours of my life did this cost? A ₹500 dinner at ₹250 an hour of wage is two hours of your life, permanently spent. That reframing kills a lot of impulse purchases faster than any budgeting rule.',
      },
      {
        kind: 'table',
        caption: 'What inflation does to different goals',
        headers: ['Goal', 'Inflation effect', 'Response'],
        rows: [
          ['1-year goal', 'Negligible (~6%)', 'Plain savings account is fine'],
          ['5-year goal', 'Loses about a quarter of value', 'FD or short-duration debt fund'],
          ['15-year goal', 'Loses over half its buying power', 'Growth assets such as equity'],
          ['Retirement corpus', 'Must last 25+ years', 'Mostly growth assets, reviewed regularly'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Raise your own purchasing power',
        text: 'Skills are the one asset whose purchasing power never inflates away. A qualification that raises your income by 10% permanently outpaces a savings rate that delivers 7% for one year.',
      },
    ],
    quiz: [
      {
        q: 'Purchasing power refers to:',
        options: [
          { text: 'The number of notes you hold', correct: false, why: 'Counting notes measures quantity, not what they can buy.' },
          { text: 'How much goods and services a given amount of money can buy', correct: true, why: 'Correct — that is the whole concept.' },
          { text: 'The interest rate on your savings', correct: false, why: 'Interest affects purchasing power indirectly, but it is not the definition.' },
        ],
      },
      {
        q: 'You hold ₹100,000 in cash for 10 years with 6% inflation. Its real value is about:',
        options: [
          { text: '₹100,000', correct: false, why: 'Cash does not shrink nominally — but it shrinks in what it buys.' },
          { text: '₹55,800', correct: true, why: 'Correct: 100,000 / 1.06^10.' },
          { text: '₹160,000', correct: false, why: 'That is growth, not inflation.' },
        ],
      },
      {
        q: 'Your salary rises 10% while inflation runs at 6%. Your purchasing power:',
        options: [
          { text: 'Fell by 6%', correct: false, why: 'That ignores the salary increase.' },
          { text: 'Rose by roughly 4%', correct: true, why: 'Approximately right — 10% growth minus 6% inflation leaves about 4% real growth.' },
          { text: 'Stayed flat', correct: false, why: 'Real growth is positive here, just modest.' },
        ],
      },
    ],
    takeaway: 'Judge money by what it buys, not by how many zeros it has. Inflation quietly taxes cash, so money sitting idle loses ground every single year.',
  },
}