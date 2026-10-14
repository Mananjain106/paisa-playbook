import type { Chapter } from '../../types'

/** Level 3, chapters 1–20: risk, asset classes, and the fixed-income ladder. */
export const foundations: Record<string, Chapter> = {
  'l3-001': {
    id: 'l3-001',
    title: 'Saving vs Investing',
    subtitle: 'They do different jobs, and you need both',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'money-allocation', caption: 'Every rupee should have a job. The mistake is putting all of them on the same job.' },
      { kind: 'p', text: 'Saving and investing are not rivals. Saving protects money you will need soon; investing grows money you will not need for years. Confusing them produces the two classic failures: keeping a decade of savings in an FD, or putting next month’s rent into a small-cap fund.' },
      {
        kind: 'formula',
        label: 'The only question that decides where money goes',
        expr: 'Will I need this money within 3 years?',
        note: 'Yes — keep it safe and liquid. No — it needs to be invested, because cash alone will not beat inflation.',
      },
      {
        kind: 'table',
        caption: 'Two jobs, two toolkits',
        headers: ['Saving is for', 'Investing is for'],
        rows: [
          ['Emergency fund', 'Retirement'],
          ['Money needed within 3 years', 'A 10-year house deposit'],
          ['Short-term goals (bike, trip)', 'A 20-year wealth goal'],
          ['Capital you must not lose', 'Capital that can grow for decades'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Cash is an asset, not a failure',
        text: 'Holding 10–15% in cash or a liquid fund is a deliberate allocation decision, not indecision. It buys you the ability to act when everyone else is panicking.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The dangerous middle',
        text: 'The worst place for money is the grey zone — five to eight years, invested in something volatile. Long enough to suffer a crash, short enough that you cannot wait it out. Either shorten the horizon or lengthen it; do not sit in the middle.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Clear 36% credit card debt first — that is a guaranteed, tax-free return.',
          'Build one month of expenses as a starter emergency fund.',
          'Then build six months before taking market risk.',
          'Only after that, start a monthly investment and never stop.',
        ],
      },
      { kind: 'sim', name: 'realreturn', caption: 'See what happens to savings alone while inflation does its work.' },
    ],
    quiz: [
      {
        q: 'You need ₹4 lakh for a down payment in 30 months. Where should it sit?',
        options: [
          { text: 'An equity fund, for higher returns', why: 'You have a fixed deadline. Equity could be 30% down at exactly the wrong month, forcing you to sell low or abandon the purchase.' },
          { text: 'A mix of short deposits and a liquid fund', correct: true, why: 'The date is fixed, so the priority is certainty. Keep it safe, liquid, and free from lock-in penalties.' },
          { text: 'Small-cap shares, because you need growth', why: 'Small caps are the most volatile asset in the market and the least likely to be up when you need the cash.' },
          { text: 'Gold jewellery', why: 'Jewellery carries a large making charge and selling it back usually loses money.' },
        ],
      },
      {
        q: 'Why is holding all savings in an FD a problem after several years?',
        options: [
          { text: 'FDs are not insured', why: 'Deposit insurance up to ₹5 lakh per bank is exactly the sort of thing a beginner should check — but this is not the real problem here.' },
          { text: 'The bank can change the rate any time', why: 'Once you place an FD, the rate is locked for the tenure. That is a feature, not the issue.' },
          { text: 'Its return after inflation can be near zero', correct: true, why: 'At 7% FD and 6% inflation the real return is under 1%. The money grows on paper and shrinks in purchasing power.' },
          { text: 'You cannot withdraw early', why: 'You can, but you lose the interest for the broken tenure. Lock-in is a real cost, but not the central problem.' },
        ],
      },
    ],
    takeaway: 'Match the tool to the date. Money needed within three years stays safe; money not needed for a decade gets invested. Both jobs matter, and mixing them up is what causes most financial damage.',
  },

  'l3-002': {
    id: 'l3-002',
    title: 'Risk and Return',
    subtitle: 'The price of higher return is always more uncertainty',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'risk-return-curve', caption: 'Nothing sits at the top-left. Every point higher and to the right costs you something.' },
      { kind: 'p', text: 'Return is what you earn. Risk is how uncertain that outcome is — including the possibility of losing money, not just earning less. The two are linked by the most reliable law in finance: higher expected return must come with higher uncertainty.' },
      { kind: 'formula', label: 'Expected return', expr: 'Probability of outcome × return in that outcome' },
      {
        kind: 'example',
        title: 'Why small caps are not "free money"',
        text: 'A small cap might offer a 20% expected return — but a real 40% chance of a severe loss in any given year. Its expected return is higher, but its expected pain is higher too. Expected value ignores your ability to survive the bad years, which is the part that actually matters.',
      },
      {
        kind: 'table',
        caption: 'What "risk" really means',
        headers: ['Type of risk', 'What it looks like'],
        rows: [
          ['Volatility risk', 'Prices swing 30% in a year'],
          ['Permanent loss risk', 'A company fails, an insurer goes bust'],
          ['Liquidity risk', 'You cannot sell when you need to'],
          ['Currency risk', 'The rupee moves against you'],
          ['Inflation risk', 'Growth is eaten by rising prices'],
          ['Concentration risk', 'One bad asset sinks the portfolio'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Volatility is not the same as risk',
        text: 'A share that swings wildly but recovers fully is not necessarily badly risky. A fixed deposit that never moves but loses 6% a year to inflation is quietly risky too. Judge investments by what you actually lose, not by how bumpy the ride looks.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Slide allocations and watch expected return rise only when volatility does too.' },
      { kind: 'sim', name: 'currency', caption: 'One risk on that list is invisible to an Indian investor at first glance: the rupee moving against the assets you own.' },
    ],
    quiz: [
      {
        q: 'If an investment promises a very high return with almost no risk, the most likely explanation is:',
        options: [
          { text: 'It is a genuinely rare bargain', why: 'Genuine bargains with no risk do not get advertised. This shape is the signature of a fraud.' },
          { text: 'The return is not really free — the risk is hidden or the promise is false', correct: true, why: 'Higher return must be paid for with higher uncertainty. A riskless high return violates the one relationship that always holds.' },
          { text: 'It will only be good for a short while', why: 'Sometimes true, but it does not address the core inconsistency.' },
          { text: 'You need a long lock-in period', why: 'Lock-in adds time risk but does not create a free return.' },
        ],
      },
      {
        q: 'Which is a form of risk that a high-return equity fund can carry but an FD cannot?',
        options: [
          { text: 'Inflation risk', why: 'An FD suffers this too — often more, since its nominal return is low.' },
          { text: 'Currency risk', correct: true, why: 'An FD pays in rupees; a fund holding foreign assets is exposed to how the rupee moves.' },
          { text: 'Credit risk', why: 'An FD is a bank deposit, backed by the bank. Equity carries credit risk of the companies it owns.' },
          { text: 'Liquidity risk', why: 'A penalty FD has some lock-in; a liquid fund or an equity fund is usually easier to exit than a fixed deposit.' },
        ],
      },
    ],
    takeaway: 'Risk and return are joined at the hip. Any offer of high return with little risk is hiding either the risk or the return, and finding out which is the expensive part.',
  },

  'l3-003': {
    id: 'l3-003',
    title: 'Risk Capacity',
    subtitle: 'What your numbers say you can survive',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'capacity-tolerance', caption: 'Only the top-left box is a plan you can actually keep during a crash.' },
      { kind: 'p', text: 'Risk capacity is the amount of volatility your financial life can absorb. It is arithmetic: it depends on your time horizon, your income stability, your emergency fund and how much debt you carry. It is not a matter of nerve.' },
      {
        kind: 'table',
        caption: 'What raises or lowers your capacity',
        headers: ['Raises capacity', 'Lowers capacity'],
        rows: [
          ['A 10+ year horizon', 'Money needed within 3 years'],
          ['Steady salary or diversified income', 'Freelance or commission income'],
          ['6 months of expenses saved', 'No emergency fund at all'],
          ['No EMIs beyond one home loan', 'High-cost credit card debt'],
          ['Steady family support', 'You are the only earner for five people'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Capacity is objective, tolerance is emotional',
        text: 'Your capacity is what the numbers allow. Your tolerance is what your stomach allows. When they disagree, the gap gets closed by the market at the worst possible moment — and it gets closed by a crash, not by a plan.',
      },
      { kind: 'list', items: ['Count years until the money is needed, not until you feel ready.', 'Stress-test a 40% fall: would it force you to sell?', 'If yes, reduce equity until the answer is no.'] },
      { kind: 'sim', name: 'portfolio', caption: 'The horizon switch flags allocations that do not match the money\'s deadline.' },
    ],
    quiz: [
      {
        q: 'A freelancer with 8 months of expenses saved and a 15-year goal should hold:',
        options: [
          { text: '80% equity', why: 'The horizon supports it, but income volatility and a thin buffer do not. This ignores half the picture.' },
          { text: 'Less equity than a salaried person with the same horizon', correct: true, why: 'Irregular income and a small buffer both reduce capacity. The goal is not matched on every axis — only the most obvious one.' },
          { text: 'The same allocation as everyone else', why: 'Capacity is individual. Two people can share a goal and need very different portfolios.' },
          { text: '100% debt, to be safe', why: 'Over-correcting. Capacity is about surviving, not avoiding all movement.' },
        ],
      },
      {
        q: 'Your equity allocation is 70%, and a 35% crash would mean selling your home. You should:',
        options: [
          { text: 'Hold on — crashes always recover', why: 'True over long horizons, but irrelevant if you are forced to sell during it. The recovery does not help a person who has already lost the flat.' },
          { text: 'Reduce equity until a crash would not force a sale', correct: true, why: 'This is exactly what risk capacity means: sizing the portfolio so the bad years cannot break your life.' },
          { text: 'Add more small caps to recover faster', why: 'That raises volatility further and makes the forced sale more likely.' },
          { text: 'Invest in whatever is performing best', why: 'Chasing recent winners raises risk at exactly the wrong time.' },
        ],
      },
    ],
    takeaway: 'Decide your risk budget with arithmetic, not adrenaline. If a market crash would force you to sell, you are invested too heavily, regardless of how confident you feel.',
  },

  'l3-004': {
    id: 'l3-004',
    title: 'Risk Tolerance',
    subtitle: 'What your stomach can actually sit through',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'capacity-tolerance', caption: 'Bottom-right is "safe" and also poor. The top-left is the only genuinely useful square.' },
      { kind: 'p', text: 'Risk tolerance is emotional rather than financial: how large a fall in your statement you could watch without selling. It only becomes visible in a crash, which is exactly when it is hardest to judge.' },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Tolerance is measured in a crisis, not in calm',
        text: 'Everyone is brave in a bull market. Ask instead: if this fell 40% tomorrow, what would I do? If the honest answer is "sell", lower your equity today, while you are calm.',
      },
      {
        kind: 'example',
        title: 'The test that works',
        text: 'Look at the largest fall in the index since you started investing and honestly decide whether you would have held. If you would not have, your tolerance is lower than you think and your allocation should match the lower number.',
      },
      { kind: 'list', items: ['Answer honestly before the crash, not during it.', 'If tolerance is below capacity, trust the lower number.', 'Increase risk only after a full cycle has passed without selling.'] },
      { kind: 'sim', name: 'cycle', caption: 'Watch what a bear market does to the balance on screen.' },
    ],
    quiz: [
      {
        q: 'You say you are comfortable with 60% equity, but 2020-type volatility would make you sell. You should:',
        options: [
          { text: 'Stay at 60% and hold through it', why: 'If you will sell, you will. The allocation was wrong for you from the start.' },
          { text: 'Drop to a level you would genuinely hold', correct: true, why: 'Align the portfolio with real behaviour, not intended behaviour. That is what survives a crash.' },
          { text: 'Use leverage to earn back the loss', why: 'Leverage magnifies exactly the loss that caused you to sell in the first place.' },
          { text: 'Switch to a different asset class immediately', why: 'The issue is not the asset class, it is the size of the position relative to your temperament.' },
        ],
      },
    ],
    takeaway: 'Know your tolerance in advance and size to it. A portfolio you will abandon in a crash is worse than a cautious one you keep, because only the one you keep compounds.',
  },

  'l3-005': {
    id: 'l3-005',
    title: 'Liquidity',
    subtitle: 'Converting something into cash, fast, without losing much',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Liquidity is not "is it cash" — it is how quickly and cheaply you can turn an asset into spendable money. Cash is perfectly liquid. A listed large-cap share is fairly liquid. A 5-year FD is not. An apartment is barely liquid at all.' },
      {
        kind: 'table',
        caption: 'How quickly money actually gets to you',
        headers: ['Asset', 'Time to cash', 'Cost to exit'],
        rows: [
          ['Savings account', 'Immediate', 'None'],
          ['Liquid fund', '1 working day', 'Small exit load sometimes'],
          ['Large-cap equity fund', '2–3 working days', 'Exit load if under 1 year'],
          ['5-year FD', 'Penalty interest', 'Loss of interest on break'],
          ['Direct equity', 'Instant to sell, 2 days to receive', 'Brokerage, stamp duty, market impact'],
          ['Property', 'Months', 'Registration and tax, often 5–10% of value'],
          ['Gold jewellery', 'Sellable', '20–40% making charges'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Illiquidity is a real return',
        text: 'You are compensated for holding things you cannot sell quickly. That is the whole logic behind term deposits and property. The mistake is accepting illiquidity by accident, in an asset you never intended to hold.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Cash and near-cash are counted separately here — that is the liquid slice.' },
    ],
    quiz: [
      {
        q: 'Which asset is genuinely illiquid?',
        options: [
          { text: 'An Nifty index fund', why: 'Units redeem within a couple of days and the fund holds liquid stocks.' },
          { text: 'A residential flat you bought to live in', correct: true, why: 'Selling takes months, involves registration and tax, and you would lose a large slice of value in the process.' },
          { text: 'A savings account', why: 'Available on demand, with no penalty at all.' },
          { text: 'A 91-day treasury bill', why: 'Short-dated and readily sold, so it behaves like cash — this is the wrong answer.' },
        ],
      },
      {
        q: 'Why do long-term deposits pay more than liquid ones?',
        options: [
          { text: 'They are riskier', why: 'They are usually lower risk — you are lending to a bank. The extra rate is compensation for something else.' },
          { text: 'Because you accept illiquidity', correct: true, why: 'The lender gets to keep your money for longer. That inconvenience is exactly what the extra interest pays for.' },
          { text: 'Because the bank wants customers', why: 'Partly true, but it does not explain the consistent rate difference.' },
          { text: 'Because of inflation', why: 'Long deposits often beat inflation more easily, but that is a consequence, not the reason.' },
        ],
      },
    ],
    takeaway: 'Liquidity is a price. Faster money costs more to hold, slower money earns more but cannot rescue you in an emergency. Match the liquidity to the date you will need it.',
  },

  'l3-006': {
    id: 'l3-006',
    title: 'Diversification',
    subtitle: 'The only free lunch in investing',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Diversification means holding things that do not all fall together. It is the only genuinely free improvement available to an investor: you reduce the risk of your portfolio without giving up any expected return.' },
      {
        kind: 'formula',
        label: 'Why it works',
        expr: 'Portfolio risk < average of individual risks',
        note: 'Once two assets stop moving in lockstep, the combined portfolio is steadier than either holding on its own.',
      },
      {
        kind: 'table',
        caption: 'Diversified or not?',
        headers: ['Looks diversified', 'Actually concentrated'],
        rows: [
          ['Ten different mutual funds', 'Ten funds tracking the same index'],
          ['Five sectors', 'All five depend on one input cost'],
          ['Ten house properties', 'All in one city, one developer type'],
          ['Ten stocks', 'All are banks, so one RBI move hits all of them'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Correlation is the hidden variable',
        text: 'Two assets can both be "stocks" and still move together. Real diversification comes from assets whose returns are driven by different forces — equity vs debt, India vs overseas, growth assets vs a long-term bond.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Diversification does not remove market risk',
        text: 'In a 2008-style crash, broadly diversified equity portfolios still fell 40–50% together. Diversification reduces specific risk, not the risk of a whole market falling.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Gold is set to be slightly negatively correlated with equity — that is the part doing the work.' },
    ],
    quiz: [
      {
        q: 'Why does diversification reduce risk without reducing expected return?',
        options: [
          { text: 'Because you earn fees on more transactions', why: 'Fees reduce returns; they do not create the benefit.' },
          { text: 'Because assets that do not move together cancel out each other\'s variation', correct: true, why: 'Low correlation between components means the portfolio moves less than its parts. Nothing has to be sold off to achieve it.' },
          { text: 'Because the regulator guarantees it', why: 'No regulator guarantees portfolio outcomes.' },
          { text: 'Because it increases the number of investments', why: 'Counting holdings is not the mechanism — correlation is.' },
        ],
      },
      {
        q: 'You hold five mutual funds. Which makes this NOT well diversified?',
        options: [
          { text: 'They cover different asset classes', why: 'Different asset classes is exactly what you want.' },
          { text: 'They all track the same broad index', correct: true, why: 'Five funds buying the same hundred companies is one investment bought five times.' },
          { text: 'They have different fund managers', why: 'Different managers doing similar things is not much diversification, but different asset classes is still the main point.' },
          { text: 'They invest in different sectors', why: 'Sector spread helps, though it is weaker than asset-class spread.' },
        ],
      },
    ],
    takeaway: 'Diversification is the one improvement that costs nothing. Spread across asset classes first, then within them — and check that your holdings are not secretly the same bet five times.',
  },

  'l3-007': {
    id: 'l3-007',
    title: 'Asset Classes',
    subtitle: 'The four or five buckets everything fits into',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'allocation-pie', caption: 'A typical working portfolio. The split, not the selection, drives most of the outcome.' },
      { kind: 'p', text: 'An asset class is a family of investments that behave similarly. Almost everything you own is one of four: equity, debt, real assets like property and gold, or cash. Deciding how to split across them is asset allocation, and it drives the majority of your long-term result.' },
      {
        kind: 'table',
        caption: 'The main classes, honestly described',
        headers: ['Class', 'Typical return', 'Typical fall', 'Role in a portfolio'],
        rows: [
          ['Equity (stocks)', '11–13% long term', '−30% to −50%', 'Growth engine'],
          ['International equity', '9–12% in rupees', '−25% to −40%', 'Diversifier, currency-exposed'],
          ['Debt (bonds, FDs)', '6–8%', '−5% to −15%', 'Stability, some growth'],
          ['Gold', '8–10% long term', '−15% to −30%', 'Hedge, not growth'],
          ['Property', '6–9% incl. rent', 'Illiquid', 'Diversifier, often with leverage'],
          ['Cash', '3–6%', '~0', 'Optionality and safety'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Your time horizon picks the class',
        text: 'The right asset class is a function of when you need the money, not of which has done best recently. Money needed in two years does not belong in equities no matter how bullish the mood.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Geography is a class of its own',
        text: 'Indian equity is one country\'s economy, one currency and one set of regulators. A portfolio that is 100% Indian assets is concentrated even when it owns fifty different funds. Overseas equity is the only exposure that is genuinely uncorrelated with what happens to the rupee and to the Indian market.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Set a mix across all the classes and read off the risk it produces. The international sleeve moves with the currency slider.' },
      { kind: 'sim', name: 'currency', caption: 'A foreign return only becomes a rupee return after the currency has had its say.' },
    ],
    quiz: [
      {
        q: 'Which asset class has historically acted best as a hedge during a severe equity crash?',
        options: [
          { text: 'Cash', why: 'Cash is stable but its return is near zero, and it did not fall much because it barely rises either.' },
          { text: 'Gold', correct: true, why: 'Gold has a low correlation with equities and has repeatedly held up when shares collapsed, which is why a small allocation helps.' },
          { text: 'Corporate bonds', why: 'Corporate bonds can fall alongside equities in a crisis because credit and equity risk are then correlated.' },
          { text: 'Property', why: 'Illiquid, and Indian property has not reliably hedged equity crashes.' },
        ],
      },
      {
        q: 'Roughly how much of a diversified portfolio\'s long-term result comes from asset allocation rather than picking individual funds?',
        options: [
          { text: 'About 10%', why: 'Far too low. Allocation is not a minor detail.' },
          { text: 'Around 50%', why: 'Closer, but still low.' },
          { text: 'The majority — often quoted around 70–90%', correct: true, why: 'Academic work consistently finds allocation explains most of the variation in outcomes, with security selection and timing adding comparatively little.' },
          { text: 'None of it — fund selection is everything', why: 'This is the most common and most expensive misconception in retail investing.' },
        ],
      },
    ],
    takeaway: 'Almost everything you own sits in one of four or five buckets. Your split across them matters far more than which specific fund or stock you pick inside each.',
  },

  'l3-008': {
    id: 'l3-008',
    title: 'Fixed Deposits',
    subtitle: 'Safe, predictable, and quietly losing to inflation',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'real-vs-nominal', caption: 'The gap between the two bars is inflation, tax, or both.' },
      { kind: 'p', text: 'An FD locks a lump sum at a fixed rate for a fixed term. It is the most predictable investment available to an Indian household and one of the least rewarding once inflation and tax are counted.' },
      {
        kind: 'formula',
        label: 'The number that matters',
        expr: 'Real return = (1 + rate) ÷ (1 + inflation) − 1',
        note: 'At 7% with 6% inflation the real return is about 0.9%, before tax.',
      },
      {
        kind: 'table',
        caption: 'FD facts worth knowing',
        headers: ['Feature', 'What it means for you'],
        rows: [
          ['Deposit insurance', '₹5 lakh per bank per depositor'],
          ['Premature closure', 'Interest paid up to the date, often at a lower slab'],
          ['TDS', 'Deducted above ₹50,000 in a year (₹1 lakh for seniors)'],
          ['Taxation', 'Fully taxable at your slab rate — no 80C benefit'],
          ['Compounding', 'Usually quarterly for FDs, monthly for RDs'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Never take the maximum-tenure FD',
        text: 'Rate risk is real: lock in for five years at 6.5% when rates are heading to 9% and you have locked in a below-market return for the whole period. Match the tenure to the goal, and prefer a shorter FD you can roll over.',
      },
      { kind: 'sim', name: 'realreturn', caption: 'Compare an FD against a rising inflation rate directly.' },
    ],
    quiz: [
      {
        q: 'An FD pays 7% while inflation is 6%. What is the approximate real return?',
        options: [
          { text: '1%', correct: true, why: '1.07 ÷ 1.06 = 1.0094, so roughly 0.9% — call it 1%. The naive subtraction happens to be close here, but the formula matters much more when the numbers are larger.' },
          { text: '7%', why: 'That is the nominal rate, which is what the bank advertises.' },
          { text: '−1%', why: 'Arithmetic subtraction of 6% from 7% gives 1%, not −1%.' },
          { text: '13%', why: 'That would be the case if you added them, which is not how any of this works.' },
        ],
      },
      {
        q: 'What is the main practical disadvantage of a long-tenure FD?',
        options: [
          { text: 'It is not insured', why: 'Deposits up to ₹5 lakh per bank are insured by DICGC.' },
          { text: 'You lock in a rate that may later look too low', correct: true, why: 'If rates rise after you deposit, your rate is stuck. That is rate risk, and it is why long tenures need a reason.' },
          { text: 'It pays no interest', why: 'It pays exactly the stated rate.' },
          { text: 'You cannot open one online', why: 'Most major Indian banks allow FDs entirely online in minutes.' },
        ],
      },
    ],
    takeaway: 'An FD is useful for short, certain goals and as a parking space. It is a poor engine for long-term wealth, because after inflation and tax it adds very little to what you can actually buy.',
  },

  'l3-009': {
    id: 'l3-009',
    title: 'Recurring Deposits',
    subtitle: 'Discipline beats size — for people starting small',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'interest-growth', caption: 'Compounding needs time — the same money, the same rate, a very different result over 5 years versus 25.' },


      { kind: 'p', text: 'An RD is a fixed deposit where you commit a small amount every month for a fixed period. It suits someone with a modest income who could not "just invest a lump sum" because a lump sum never existed.' },
      {
        kind: 'formula',
        label: 'Future value of an RD',
        expr: 'FV = P × [((1 + r/12)^n − 1) ÷ (r/12)] × (1 + r/12)',
        note: 'r is the monthly rate and n the number of months. Because deposits are late in arriving, an RD earns less than the same total invested as a lump sum at the start.',
      },
      {
        kind: 'table',
        caption: 'RD versus a SIP in a fund',
        headers: ['RD', 'Mutual fund SIP'],
        rows: [
          ['Fixed 6–7% return', 'Market-linked, 8–12% long term'],
          ['Fully taxable', 'ELSS gives 80C benefit'],
          ['No inflation growth risk', 'Can outgrow inflation'],
          ['Bank risk', 'SEBI-regulated market risk'],
          ['Penalty on missing a month', 'Flexible — most allow a missed month'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The habit is the real product',
        text: 'The strongest argument for an RD is not the rate, it is that the money leaves your account before you can spend it. An automatic transfer achieves the same thing with a better asset.',
      },
      { kind: 'list', items: ['Start with any amount the transfer will not embarrass you by skipping.', 'Raise it every time your salary does.', 'Move to an equity SIP once your emergency fund is complete.'] },
    ],
    quiz: [
      {
        q: 'Why does an RD typically earn less than investing the same total amount as a lump sum at the start?',
        options: [
          { text: 'Banks charge RDs a hidden fee', why: 'There is no meaningful fee difference; the gap comes from timing.' },
          { text: 'Your money arrives late in the compounding period', correct: true, why: 'A lump sum compounds for the whole tenure. Each RD instalment joins later and compounds for less time.' },
          { text: 'RDs are taxed more heavily', why: 'Both are fully taxable at your slab rate.' },
          { text: 'They compound quarterly instead of monthly', why: 'Compounding frequency does make a difference, but the dominant factor is how late each instalment arrives.' },
        ],
      },
    ],
    takeaway: 'An RD is a good on-ramp for small, regular savers because the discipline is enforced. Once your buffer is built, move the same amount into a market-linked SIP and keep the habit.',
  },

  'l3-010': {
    id: 'l3-010',
    title: 'Government Securities',
    subtitle: 'The risk-free benchmark everything else is measured against',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'yield-curve', caption: 'The government yield curve, refreshed daily, is the yardstick for every other investment.' },
      { kind: 'p', text: 'Government securities are IOUs issued by the government. Because they are backed by the state printing its own currency, the chance of default is treated as zero. That is why they are called risk-free — and it is exactly why they set the benchmark for judging every other investment.' },
      {
        kind: 'table',
        caption: 'The main government securities',
        headers: ['Instrument', 'Tenor', 'How you buy it'],
        rows: [
          ['Treasury bill', '91 days – 1 year', 'Primary auction, then exchanges'],
          ['Government of India bond', '5–40 years', 'Retail Direct, banks, brokers'],
          ['State development loan', '1–30 years', 'Retail Direct and exchanges'],
          ['Floating rate bond', '5–10 years', 'Resets against a market benchmark'],
          ['National Savings bonds', '5–10 years', 'Post offices and banks'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'If a bond returns less than a government bond, why hold it?',
        text: 'You should not — unless the extra return genuinely compensates you for default risk, tax inefficiency or illiquidity. Many retail bond purchases are simply worse risk-adjusted bets than buying the same bond directly from the government.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The no-commission route',
        text: 'Retail Direct (rbil.retaildirect.gov.in) lets you buy government securities directly with no brokerage and no dealer margin. That difference alone can be worth a full percentage point over years.',
      },
      { kind: 'sim', name: 'bond', caption: 'See how market yields price these bonds, day by day.' },
    ],
    quiz: [
      {
        q: 'Why are government securities called risk-free?',
        options: [
          { text: 'They are insured by SEBI', why: 'SEBI regulates markets, not sovereign credit.' },
          { text: 'The government can always print the money it owes', correct: true, why: 'Default risk is effectively nil because the issuer controls the currency. The risk you take instead is interest-rate risk.' },
          { text: 'They are guaranteed by DICGC', why: 'That guarantee covers bank deposits.' },
          { text: 'Their price never changes', why: 'Prices move every day, often sharply, as yields change.' },
        ],
      },
      {
        q: 'A corporate bond pays 1.5% more than a government bond of the same tenor. What are you being paid for?',
        options: [
          { text: 'A free lunch', why: 'It is not free — it is compensation.' },
          { text: 'The chance the company fails and you lose some or all of it', correct: true, why: 'Credit risk. Whether 1.5% is enough compensation depends on the company; for a weak issuer, often it is not.' },
          { text: 'Higher inflation', why: 'Both bonds share the same inflation environment.' },
          { text: 'Better liquidity', why: 'Corporate bonds are usually less liquid than government securities, not more.' },
        ],
      },
    ],
    takeaway: 'Government securities are the yardstick. When something else looks attractive, first check what a government bond of the same duration pays — that is the risk-free alternative you are giving up.',
  },

  'l3-011': {
    id: 'l3-011',
    title: 'Treasury Bills',
    subtitle: 'The most liquid government instrument there is',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'safe-vs-risk', caption: 'For money needed within a year there is almost nothing safer than a government bill.' },


      { kind: 'p', text: 'A Treasury bill is a government security maturing in 91 days, 182 days or one year. It is issued at a discount and redeemed at face value, so the difference is your return. For money needed very soon, there is almost nothing safer or more convenient.' },
      {
        kind: 'formula',
        label: 'Return on a T-bill',
        expr: 'Return = (Face value − Purchase price) ÷ Purchase price × (365 ÷ days)',
        note: 'A ₹95,000 bill redeeming at ₹1,00,000 in 91 days is a 5.48% annualised return.',
      },
      {
        kind: 'list',
        items: ['Sold directly by the RBI in primary auctions — no broker needed.', 'Listed on exchanges, so you can also buy in the secondary market.', 'Almost zero default risk and near-perfect liquidity.', 'TDS applies, and the interest is fully taxable at your slab rate.'] },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'A T-bill is not a savings account',
        text: 'The extra yield over a savings account is small but real. It is worth using for the emergency fund if you can reach it within a day, and it is a sensible parking place for money due out within a year.',
      },
    ],
    quiz: [
      {
        q: 'You buy a 91-day T-bill for ₹95,500 and get ₹1,00,000 at maturity. What is the annualised return?',
        options: [
          { text: '4.5%', why: 'That is the ₹4,500 gain without annualising for the 91 days.' },
          { text: 'About 18%', correct: true, why: '4.5 ÷ 95,500 = 4.71% over 91 days. Scaled to a year (×365/91) that is roughly 18.9%.' },
          { text: 'About 4.7%', why: 'That is the return for the 91 days, not the annualised rate.' },
          { text: 'About 9.5%', why: 'No standard annualisation method produces this.' },
        ],
      },
    ],
    takeaway: 'Treasury bills are the safest sensible home for money needed within a year: negligible risk, excellent liquidity, and a slightly better return than a savings account.',
  },

  'l3-012': {
    id: 'l3-012',
    title: 'Bonds',
    subtitle: 'Lending to someone, with a date and a promise attached',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'price-yield-inverse', caption: 'The most counter-intuitive rule in investing: prices and yields move in opposite directions.' },
      { kind: 'p', text: 'A bond is a loan. You lend money, the borrower pays interest (the coupon) and promises to repay the face value on a fixed date. The borrower may be a government, a company or a bank. The defining feature is that the return is contractual, not market-dependent.' },
      {
        kind: 'formula',
        label: 'What a bond is worth today',
        expr: 'Price = Σ coupon ÷ (1+y)^t  +  face ÷ (1+y)^n',
        note: 'Every future payment is discounted back at today\'s yield y. That is the entire pricing model.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A bond fund is not a fixed deposit',
        text: 'A bond fund\'s NAV moves every day with interest rates. It can and does fall 5–10% in a year when rates rise. What is guaranteed is the repayment of a bond held to maturity — not the price of the fund holding it.',
      },
      {
        kind: 'table',
        caption: 'The three ways a bond investor can be hurt',
        headers: ['Risk', 'What causes it', 'Who it hits'],
        rows: [
          ['Interest-rate risk', 'Rates rise, existing coupons look stingy', 'Bond fund investors'],
          ['Credit risk', 'The issuer fails or is downgraded', 'Everyone holding that issuer'],
          ['Liquidity risk', 'The market is thin when you need to sell', 'Small investors first'],
        ],
      },
      { kind: 'sim', name: 'bond', caption: 'Set a coupon and a yield, then watch the price move against the market.' },
    ],
    quiz: [
      {
        q: 'Interest rates rise and you hold a long-term bond fund. What happens?',
        options: [
          { text: 'It goes up, because new bonds are more attractive', why: 'New issues being attractive means existing ones are worth less.' },
          { text: 'It falls, because existing fixed coupons are now less attractive', correct: true, why: 'A bond paying 6% is worth more when the market wants 5%, and less when the market wants 8%.' },
          { text: 'Nothing changes, because bonds are fixed income', why: '"Fixed income" describes the promised payments, not the price of the claim.' },
          { text: 'It becomes a loss-free government instrument', why: 'Nothing about a bond fund changes its risk profile when rates move.' },
        ],
      },
      {
        q: 'Which bond risk is irrelevant if you hold to maturity?',
        options: [
          { text: 'Credit risk', why: 'You still need the issuer to actually repay at maturity.' },
          { text: 'Interest-rate risk', correct: true, why: 'If you hold to redemption, you receive the coupons and the face value regardless of what the price did in between. That is precisely why holding period matters.' },
          { text: 'Reinvestment risk', why: 'Real: you do not know what rate you will get when you reinvest the coupons.' },
          { text: 'Inflation risk', why: 'Very real — fixed payments lose purchasing power.' },
        ],
      },
    ],
    takeaway: 'A bond is a loan with a fixed return and a fixed end date. Its price moves opposite to rates, which is why a bond fund is not as safe as the word "bond" suggests.',
  },

  'l3-013': {
    id: 'l3-013',
    title: 'Corporate Bonds',
    subtitle: 'More yield than the government, and a real chance of loss',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'A corporate bond is the same promise as a government bond, made by a company instead. You get more yield in exchange for accepting that the company might not pay. Rating agencies grade that risk from AAA down to D.' },
      {
        kind: 'table',
        caption: 'Reading a rating',
        headers: ['Rating', 'Meaning', 'Should a retail investor care?'],
        rows: [
          ['AAA', 'Highest quality, very low default risk', 'Safe-ish, but check the price'],
          ['AA', 'Very high quality', 'Reasonable'],
          ['A / BBB', 'Investment grade, adequate', 'Acceptable with diversification'],
          ['BB and below', 'Speculative ("junk")', 'High default risk'],
          ['C / D', 'Substantial risk or already defaulting', 'Avoid'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The problem with corporate bonds in India',
        text: 'Many retail investors were introduced to corporate bonds as "higher-yield, government-like". The 2020 ILFS default was a reminder that these are genuinely different instruments. If the yield is high, work out exactly what risk is being paid for.',
      },
      {
        kind: 'list',
        items: ['Check the rating on a CRISIL, ICRA or CARE basis.', 'Look at the issuer\'s debt-to-equity, not just its rating.', 'Prefer diversified bond funds to single issues.', 'Check whether the bond is secured and what happens on default.'] },
      { kind: 'sim', name: 'bond', caption: 'The same maths, now with a company\'s promise behind it.' },
    ],
    quiz: [
      {
        q: 'A corporate bond yields 2% more than a similar government bond. The extra 2% is compensation for:',
        options: [
          { text: 'Higher inflation', why: 'Both are exposed to the same inflation.' },
          { text: 'Credit risk — the company might not pay', correct: true, why: 'That is the fundamental trade. If you are not being paid enough for that risk, the bond is not attractive.' },
          { text: 'Longer tenure', why: 'Compare like tenures before concluding anything.' },
          { text: 'Liquidity premium', why: 'Corporate bonds are typically less liquid than government securities, if anything.' },
        ],
      },
      {
        q: 'A broker offers a "high-yield, AAA, government-like" bond. What should you do?',
        options: [
          { text: 'Buy, since AAA means it cannot fail', why: 'AAA is the strongest rating, but a strong rating is not a guarantee, and "government-like" in marketing copy is a warning sign.' },
          { text: 'Verify the rating independently and understand what you are being paid for', correct: true, why: 'Check the rating on a rating agency site, look at the issuer\'s financials, and price the extra yield against the default risk.' },
          { text: 'Buy a small amount to test', why: 'Position sizing is sensible, but you still need to know what you hold before you size it.' },
          { text: 'Reject anything not issued by the government', why: 'Corporate bonds are legitimate assets — this is too absolute, and would cost you genuine income.' },
        ],
      },
    ],
    takeaway: 'Corporate bonds pay more because they can lose. Treat any extra yield as compensation you must size sensibly, and never accept a bond because someone described it as government-like.',
  },

  'l3-014': {
    id: 'l3-014',
    title: 'Bond Terminology',
    subtitle: 'The vocabulary that lets you read any bond',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'yield-curve', caption: 'Every bond term has its own yield — learn the vocabulary and you can read any quote.' },


      { kind: 'p', text: 'A bond prospectus is dense, but almost every bond uses the same handful of terms. Learning them turns a wall of text into something you can price yourself.' },
      {
        kind: 'table',
        caption: 'The words you will meet on every bond',
        headers: ['Term', 'Meaning', 'Example'],
        rows: [
          ['Face value', 'The amount repaid at maturity', '₹1,000'],
          ['Coupon rate', 'Annual interest as a % of face value', '7% on ₹1,000 = ₹70 a year'],
          ['Maturity', 'When the loan ends and face value is repaid', '2031'],
          ['Yield', 'The return if you bought today and held to maturity', '7.4%'],
          ['Price', 'What you actually pay per ₹1,000 face value', '₹985'],
          ['Accrued interest', 'Coupon earned since the last payment date', 'Varies'],
          ['Call/put option', 'Issuer\'s or your right to end the bond early', 'Rare for retail'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Yield to maturity is the number to compare',
        text: 'Two bonds with different coupons and maturities are only comparable through their yield. Always compare yields, never face values or coupon percentages on their own.',
      },
    ],
    quiz: [
      {
        q: 'Two bonds: one pays 6% coupon, the other 8%. Which gives more over the same period?',
        options: [
          { text: 'The 8% one, obviously', why: 'Not obviously — price and maturity matter too. A higher coupon often comes with a higher risk of default or a lower price.' },
          { text: 'Whichever has the higher yield to maturity', correct: true, why: 'YTM folds coupon, price, tenor and default expectations into one comparable figure.' },
          { text: 'The 6% one, because it is safer', why: 'Safety is part of why its yield is lower, but the comparison is incomplete without YTM.' },
          { text: 'The one with the longer maturity', why: 'Maturity affects YTM, but it is not the answer on its own.' },
        ],
      },
    ],
    takeaway: 'Face value, coupon, price, yield and maturity are the whole vocabulary. Compare bonds on yield to maturity, and every other number becomes a supporting detail.',
  },

  'l3-015': {
    id: 'l3-015',
    title: 'Coupon',
    subtitle: 'The income you get for holding — and the trap inside it',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'price-yield-inverse', caption: 'The coupon is fixed; the price and yield move opposite to the market.' },


      { kind: 'p', text: 'The coupon is the periodic interest payment on a bond, paid as a percentage of face value. On a ₹1,000 face value bond with a 7% coupon, you receive ₹70 a year, usually split into two payments.' },
      {
        kind: 'formula',
        label: 'Annual coupon payment',
        expr: 'Coupon payment = Face value × Coupon rate',
        note: 'The rate is fixed; the price is not. That asymmetry is the key to understanding bonds.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Your coupon is fixed, your return is not',
        text: 'If you buy at a discount and hold to maturity, your total return is the coupon plus a capital gain. If you buy at a premium, part of that fat coupon is really handing money back to the issuer.',
      },
      {
        kind: 'list',
        items: ['Fixed-rate bond: the coupon never changes.', 'Floating-rate bond: the coupon resets periodically against a benchmark.', 'Zero-coupon bond: no coupon, all return comes from the price rising to face value at maturity.'] },
    ],
    quiz: [
      {
        q: 'You buy a bond at ₹1,050 when its face value is ₹1,000, with a 10% coupon. At maturity you receive:',
        options: [
          { text: '₹100 a year and ₹1,000 back, so a guaranteed profit', why: 'You paid ₹1,050 and get ₹1,000 back — you lose ₹50 of capital as the premium unwinds.' },
          { text: '₹100 a year plus ₹1,000, for an overall loss of ₹50', correct: true, why: 'The coupons compensate you for the premium. Net of the ₹50 capital loss, your yield is below the 10% coupon.' },
          { text: '₹105 a year and ₹1,050 back', why: 'Coupons are always calculated on face value, and redemption is always at face value.' },
          { text: '₹100 a year and ₹1,050 back', why: 'Redemption is at the stated face value, not what you paid.' },
        ],
      },
    ],
    takeaway: 'The coupon is fixed for the life of the bond, which is why it can be a drag or a gift depending on the price you paid. Judge the deal on yield, not on the coupon rate.',
  },

  'l3-016': {
    id: 'l3-016',
    title: 'Face Value',
    subtitle: 'The number on the bond, and the one that never changes',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'price-yield-inverse', caption: 'Face value never changes — but the price you pay and the yield you earn do.' },


      { kind: 'p', text: 'Face value (par value) is the amount a bond issuer promises to repay at maturity. It is fixed for the life of the bond and is the base for every coupon calculation. It is not what you pay, and it is not what the bond is worth today.' },
      {
        kind: 'table',
        caption: 'Three numbers, three meanings',
        headers: ['Number', 'What it means', 'Changes over time'],
        rows: [
          ['Face value', 'Repayment promise at maturity', 'Never'],
          ['Market price', 'What you pay in the market today', 'Every day'],
          ['Book value', 'The asset\'s accounting value', 'Each quarter'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Why you should care about face value at all',
        text: 'It matters because most retail bonds are issued in denominations of ₹1,000, and because it is the denominator for the coupon. A ₹10,000 face value bond at a 7% coupon pays ₹700 a year — the percentage is meaningless on its own.',
      },
    ],
    quiz: [
      {
        q: 'A bond with ₹1,000 face value and a 9% coupon pays how much a year?',
        options: [
          { text: '₹900', correct: true, why: '9% of ₹1,000 is ₹90 a year — not ₹900. The percentage applies to the face value of ₹1,000.' },
          { text: '₹90', why: '₹90 is the correct coupon; this option just states it as the wrong answer.' },
          { text: '₹90,000', why: 'Way off scale.' },
          { text: 'It depends on the market price', why: 'The coupon is calculated on face value, not on what you pay.' },
        ],
      },
    ],
    takeaway: 'Face value is the fixed promise at maturity and the base for the coupon. It is not the price you pay and it does not move — knowing the difference prevents most first-time confusion.',
  },

  'l3-017': {
    id: 'l3-017',
    title: 'Maturity',
    subtitle: 'When the loan ends and the money comes home',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'yield-curve', caption: 'Each tenor on this curve has its own yield. Term is a choice, not a given.' },
      { kind: 'p', text: 'Maturity is the date a bond matures and repays face value. It sets the length of your loan, your lock-in, and how sensitive the bond is to interest-rate changes. Duration — roughly, maturity — is the single biggest driver of a bond\'s rate risk.' },
      {
        kind: 'table',
        caption: 'What maturity does to a bond',
        headers: ['Short maturity (1–3 yrs)', 'Long maturity (10–25 yrs)'],
        rows: [
          ['Low rate sensitivity', 'Very high rate sensitivity'],
          ['Locks you out of rising rates', 'Locks you into a low rate'],
          ['Lower returns', 'Higher returns'],
          ['Small rate move barely matters', 'A 1% rate move can shift price by 10%+'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Matching maturity to the goal is the whole trick',
        text: 'A bond maturing after your goal date will have moved with rates in between, and you will be forced to sell at an unknown price. If you need the money in 2030, you want a bond maturing in 2030 — that is what makes the return predictable.',
      },
    ],
    quiz: [
      {
        q: 'Which bond is more sensitive to a rise in interest rates?',
        options: [
          { text: 'A 2-year bond', why: 'Short bonds have little rate sensitivity because there is little time for the price to move.' },
          { text: 'A 20-year bond', correct: true, why: 'Twenty years of payments are all discounted at the new, higher rate — a much bigger shift in present value.' },
          { text: 'Neither — bonds are fixed income', why: 'Fixed income describes the cash flows, not their present value.' },
          { text: 'They move by the same amount', why: 'Duration differs sharply between a 2-year and a 20-year bond.' },
        ],
      },
      {
        q: 'You need ₹5 lakh in 2032. Which bond is most appropriate?',
        options: [
          { text: 'A 10-year bond maturing in 2032', correct: true, why: 'It matures exactly when you need the money, so you receive the face value regardless of rate moves in between.' },
          { text: 'A 30-year bond maturing in 2045', why: 'You would have to sell it in 2032 at a price set by rates at that moment — entirely unpredictable.' },
          { text: 'A 1-year bond rolled over every year', why: 'Reinvestment risk: you do not know the rate you will get in 2031.' },
          { text: 'The highest-yielding bond available', why: 'The highest yield usually signals more risk or a longer maturity than you can hold to.' },
        ],
      },
    ],
    takeaway: 'Maturity sets both your lock-in and your interest-rate sensitivity. Choosing a bond that matures exactly when you need the money is what converts an uncertain price into a known one.',
  },

  'l3-018': {
    id: 'l3-018',
    title: 'Yield',
    subtitle: 'The only number that makes bonds comparable',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Yield to maturity is the annualised return you get if you buy the bond at today\'s price and hold it to maturity, assuming every payment is made on time. It folds coupon, price, tenor and default expectation into a single figure.' },
      {
        kind: 'formula',
        label: 'Current yield (the simpler cousin)',
        expr: 'Current yield = Annual coupon ÷ Price paid',
        note: 'Current yield ignores capital gain or loss at maturity, which is why it overstates the return on a premium bond.',
      },
      {
        kind: 'table',
        caption: 'Yield versus coupon — a ₹1,000 face value bond',
        headers: ['Price paid', 'Coupon', 'Yield', 'What happens at maturity'],
        rows: [
          ['₹1,000', '7%', '7%', 'Neutral — the common case'],
          ['₹950', '7%', '~8.2%', 'Capital gain of ₹50'],
          ['₹1,050', '7%', '~6.1%', 'Capital loss of ₹50'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'How to read a bond quote',
        text: 'A bond quoted as "104.20" means 104.20% of face value. On ₹1,000 face value that is ₹1,042. Quoted yield, clean and dirty price, and accrued interest all sit around it in most Indian bond quotations.',
      },
      { kind: 'sim', name: 'bond', caption: 'Move the yield and watch this exact table appear in the price.' },
    ],
    quiz: [
      {
        q: 'You buy a ₹1,000 face value bond with a 7% coupon for ₹950. Its yield to maturity is:',
        options: [
          { text: 'Exactly 7%', why: 'The coupon rate is 7%, but you paid less than face value so the total return is higher.' },
          { text: 'Higher than 7%, because of the ₹50 gain at maturity', correct: true, why: 'You collect ₹70 a year plus ₹50 at maturity on a ₹950 outlay — so the yield to maturity is above 7%.' },
          { text: 'Lower than 7%, because you paid less', why: 'Paying less than face value is a gain, not a cost.' },
          { text: 'It cannot be calculated without knowing the market price', why: 'You already have both numbers: face value and purchase price.' },
        ],
      },
    ],
    takeaway: 'Yield is the return that actually matters, and it is not the coupon rate. Two bonds with the same coupon can have very different yields purely because their prices differ.',
  },

  'l3-019': {
    id: 'l3-019',
    title: 'Interest-Rate Risk',
    subtitle: 'The main reason bond funds are not deposits',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'price-yield-inverse', caption: 'The curve is always downward. Understanding why is most of understanding bonds.' },
      { kind: 'p', text: 'Interest-rate risk is the risk that rising rates push existing bond prices down. It is the defining behaviour of fixed-income investing and the reason a bond fund can show a loss in a year when no borrower defaulted anywhere.' },
      {
        kind: 'formula',
        label: 'Rough duration sensitivity',
        expr: 'Price change ≈ −Duration × Change in yield',
        note: 'A duration of 6 and a 1% rate rise implies roughly a 6% fall in price.',
      },
      {
        kind: 'table',
        caption: 'What rising rates do to different things',
        headers: ['Asset', 'Effect of rising rates'],
        rows: [
          ['New government bonds', 'Offer higher yields'],
          ['Existing bonds', 'Fall in price'],
          ['Bond funds', 'NAV falls'],
          ['FD rates', 'Usually rise after a lag'],
          ['Home loan EMIs (floating)', 'Rise after the reset'],
          ['Savings account', 'Barely moves'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Why this shows up sharply in India',
        text: 'When the RBI moves rates, every new bond is repriced immediately, and existing ones fall to match — often within days. This is why a "safe" debt fund can drop 5–8% in a rate-hike cycle, which is a shock most first-time investors have not been warned about.',
      },
      { kind: 'sim', name: 'bond', caption: 'Hit the rate hike button and watch a long bond fall.' },
    ],
    quiz: [
      {
        q: 'The RBI raises repo rates and your bond fund drops 6% while every borrower keeps paying. Why?',
        options: [
          { text: 'The fund holds bad debts', why: 'Nothing defaulted. The fall is entirely a repricing.' },
          { text: 'New bonds now pay more, so the old ones are worth less', correct: true, why: 'That is interest-rate risk: a portfolio of fixed coupons loses value when the market demands a higher yield.' },
          { text: 'Bond funds are equities in disguise', why: 'They hold government and corporate debt instruments, not shares.' },
          { text: 'The fund manager sold badly', why: 'Fund quality does not prevent the market repricing a bond portfolio.' },
        ],
      },
      {
        q: 'Which is most exposed to interest-rate risk?',
        options: [
          { text: 'A savings account', why: 'Savings rates barely move and there is no market price.' },
          { text: 'A 25-year government bond fund', correct: true, why: 'Very high duration, so every payment is discounted over a long horizon and small yield moves shift the price a lot.' },
          { text: 'A 1-year treasury bill', why: 'Held to maturity there is no rate risk at all.' },
          { text: 'Gold', why: 'Gold responds to real rates, but it is not a fixed-income instrument and this comparison does not apply.' },
        ],
      },
    ],
    takeaway: 'Bond prices fall when rates rise, purely because new bonds pay more. This is why a bond fund can lose money in a good year for the economy, and why holding period is the first question to ask.',
  },

  'l3-020': {
    id: 'l3-020',
    title: 'Credit Risk',
    subtitle: 'The risk that the borrower simply does not pay',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'yield-curve', caption: 'Credit risk and rate risk are different. One is about the borrower, the other about the market.' },

      { kind: 'p', text: 'Credit risk is the chance a bond issuer fails to make interest or principal payments. It is the reason corporate bonds yield more than government bonds, and it is the one risk that does not disappear when interest rates fall.' },
      {
        kind: 'table',
        caption: 'How to read credit quality',
        headers: ['Signal', 'Why it matters'],
        rows: [
          ['Rating agency grade', 'Independent opinion, but slow to change'],
          ['Debt-to-equity', 'How much debt the company already carries'],
          ['Interest coverage', 'Can profit even pay the interest?'],
          ['Audited accounts', 'Profit or accounting fiction?'],
          ['Promoter behaviour', 'Related-party loans and pledges are red flags'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Ratings are lagging indicators',
        text: 'A downgrade usually arrives after the credit has already deteriorated. Never treat a rating as a guarantee — treat it as one input alongside the company\'s own balance sheet.',
      },
      {
        kind: 'example',
        title: 'Diversification is the real defence',
        text: 'Even a well-researched single bond can surprise you. Holding a diversified corporate bond fund spreads that across dozens of issuers, so no single failure matters much. With individual bonds, position size is your only control.',
      },
      { kind: 'list', items: ['Prefer AA and above for anything you cannot afford to lose.', 'Read the company\'s balance sheet, not just the rating.', 'Diversify across issuers, sectors and maturities.', 'Watch for downgrades and negative watch notices.'] },
    ],
    quiz: [
      {
        q: 'A bond issuer is upgraded to AAA but the company\'s debt-to-equity has tripled this year. What do you conclude?',
        options: [
          { text: 'Buy — the rating is the professional opinion', why: 'Ratings lag. A sharp jump in leverage is a stronger and faster warning than an upgrade.' },
          { text: 'Be cautious — the ratings may not have caught up with the deteriorating balance sheet', correct: true, why: 'Independent analysis of the financials matters more than a lagging rating. Look at coverage and leverage directly.' },
          { text: 'It depends only on the rating', why: 'Ratings are one input, not the verdict.' },
          { text: 'Sell everything immediately', why: 'Rising leverage alone is a reason to investigate, not a reason to panic.' },
        ],
      },
    ],
    takeaway: 'Credit risk is about the borrower, not the market. Ratings lag reality, so verify the balance sheet yourself — and if you cannot, diversify across many issuers instead of concentrating in one.',
  },
}
