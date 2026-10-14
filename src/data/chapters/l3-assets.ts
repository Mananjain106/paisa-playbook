import type { Chapter } from '../../types'

/** Level 3, chapters 67–84: gold, commodities and the Indian property market. */
export const assets: Record<string, Chapter> = {
  'l3-067': {
    id: 'l3-067',
    title: 'Gold',
    subtitle: 'Not an investment that pays you — insurance you wear',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'gold-role', caption: 'Gold keeps its value when everything else is on fire. It pays you nothing while it waits.' },
      { kind: 'p', text: 'Gold pays no interest, no dividend and no rent. Its return comes entirely from price. Over very long periods Indian gold has grown roughly in line with inflation — which means it preserves purchasing power but does not build wealth.' },
      {
        kind: 'table',
        caption: 'What gold is good at, and what it is not',
        headers: ['Gold is good for', 'Gold is bad for'],
        rows: [
          ['Diversifying a portfolio', 'Generating income'],
          ['Hedging inflation and currency weakness', 'Growing wealth over decades'],
          ['Crisis insurance — a genuine store of value', 'Beating inflation by much'],
          ['A small satellite allocation', 'Being the whole portfolio'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why gold has worked so well in India',
        text: 'India imports a large share of its gold, so a weaker rupee mechanically lifts rupee gold prices on top of global moves. That currency effect has been a genuine multi-decade tailwind for Indian holders of gold — and it is not guaranteed to continue at the same pace.',
      },
      {
        kind: 'list',
        items: ['Keep gold at roughly 5–10% of a portfolio, not more.', 'It pays no yield, so too much drags on long-run returns.', 'Rebalance it like any other asset.', 'It is most valuable in a portfolio precisely when equities are crashing — which is when it feels wrong to hold it.'] },
      { kind: 'sim', name: 'portfolio', caption: 'Watch the gold slice lower overall portfolio volatility.' },
      { kind: 'sim', name: 'currency', caption: 'Gold is the same hedge from the other direction: it holds its value in a currency that is losing value.' },
    ],
    quiz: [
      {
        q: 'A person holds 60% of their portfolio in gold because "it is safe". The main problem is:',
        options: [
          { text: 'Gold is not really safe', why: 'Gold has been a reliable store of value for centuries, including through 2008 and 2020.' },
          { text: 'Gold pays no return, so it drags down long-run growth', correct: true, why: 'With no yield, the more you hold the lower your expected return — and 60% is far beyond any sensible hedge allocation.' },
          { text: 'Gold is taxed heavily', why: 'Gold taxation varies by form, but the core problem here is return, not tax.' },
          { text: 'Gold is too volatile', why: 'Gold is less volatile than equity; the issue is that it earns nothing.' },
        ],
      },
    ],
    takeaway: 'Gold is insurance, not an engine. A 5–10% allocation hedges inflation and crisis, but because it pays nothing, more than that quietly lowers your long-run return.',
  },

  'l3-068': {
    id: 'l3-068',
    title: 'Physical Gold',
    subtitle: 'The most emotional, and most expensive, way to hold gold',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'gold-role', caption: 'Physical gold carries a 20–40% entry cost — for investment use a fund or ETF.' },


      { kind: 'p', text: 'Buying gold coins or bars feels safe because you can hold it. In practice you pay a making charge of 20–40% on entry, lose much of it on exit, and pay GST on the purchase — all before the gold price moves at all.' },
      {
        kind: 'table',
        caption: 'The real cost of physical gold',
        headers: ['Cost', 'Typical range'],
        rows: [
          ['Making / manufacturing charge on coins', '5–25%'],
          ['Jewellery making charge', '15–40%'],
          ['GST on purchase', '3–5%'],
          ['Loss reselling to a jeweller', '2–10%'],
          ['Storage and security', 'Varies'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Jewellery is a terrible investment vehicle',
        text: 'You are paying a retailer\'s markup, a GST, and a design charge, for metal that is typically 70–75% of what you paid. It is a consumption purchase. If you want gold exposure for investment, buy a fund or an ETF.',
      },
      {
        kind: 'list', items: ['Buy 24-carat bullion or coins if you must hold physical.', 'Keep the invoice — you need it to prove what you paid.', 'Store securely and consider the insurance on it.', 'For investment exposure, prefer a gold ETF or a fund.'] },
    ],
    quiz: [
      {
        q: 'A 22-carat gold necklace costs ₹58,000. The gold content is worth about ₹45,000. The ₹13,000 difference is:',
        options: [
          { text: 'A premium you will get back when you sell', why: 'You will not. Jewellers buy back at close to the metal value, not what you paid.' },
          { text: 'Making charge and GST you have permanently lost', correct: true, why: 'This is a real, immediate, roughly 22% cost before the gold price moves at all.' },
          { text: 'Profit on the gold market', why: 'It has nothing to do with the gold price.' },
          { text: 'A charge you can negotiate away', why: 'It is already paid, and it cannot be recovered on resale.' },
        ],
      },
    ],
    takeaway: 'Physical gold carries a 20–40% entry cost and a resale haircut. For investment exposure use a fund or ETF; buy physical only if you want to hold it, not to profit from it.',
  },

  'l3-069': {
    id: 'l3-069',
    title: 'Gold ETFs',
    subtitle: 'Gold exposure without the making charges',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'gold-role', caption: 'A gold ETF gives metal exposure at a fraction of physical gold\'s cost — watch the premium to NAV.' },


      { kind: 'p', text: 'A gold ETF buys gold bullion and tracks its price closely. It solves almost every problem with physical gold: no making charge, no storage, no resale haircut, and a total expense ratio often around 0.5–1%.' },
      {
        kind: 'formula',
        label: 'Why it tracks well',
        expr: 'ETF return ≈ Gold price return − Expense ratio − Tracking difference',
        note: 'Because the fund holds the metal itself, there is no "manager skill" to add or subtract.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The premium problem applies here too',
        text: 'Gold ETFs in India can trade above their NAV, especially when demand spikes. Paying a 3% premium means you lose that 3% if the premium normalises, regardless of what gold does. Check the live NAV versus market price, and use a limit order.',
      },
      {
        kind: 'list', items: ['Lower expense ratio than most physical routes.', 'Instant liquidity in a demat account.', 'No risk of a jeweller buying back below metal value.', 'Set a target allocation — gold is a satellite, not a core.'] },
    ],
    quiz: [
      {
        q: 'A gold ETF trades at ₹110 when its NAV is ₹100. You buy at market price. You have:',
        options: [
          { text: 'Paid 10% extra for the same gold', correct: true, why: 'The premium is a real cost; if it normalises you lose 10% even if gold is flat.' },
          { text: 'Nothing — the premium is a bonus', why: 'A premium is a cost, not a gift.' },
          { text: 'Guaranteed 10% profit', why: 'The reverse: the premium can collapse entirely.' },
          { text: 'No effect as long as you hold', why: 'It matters even while holding, since you could have bought at NAV instead.' },
        ],
      },
    ],
    takeaway: 'A gold ETF gives you metal exposure with a fraction of physical gold\'s cost and friction. The one thing to watch is the premium to NAV, which can quietly cost you several percent.',
  },

  'l3-070': {
    id: 'l3-070',
    title: 'Commodities',
    subtitle: 'Real things, traded as contracts',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Commodities are raw materials — crude oil, natural gas, metals, agricultural produce. In India they are mostly traded through futures on MCX and NCDEX, and by most retail investors they are a speculative instrument rather than an investment.' },
      {
        kind: 'table',
        caption: 'Why commodities are hard to hold well',
        headers: ['Problem', 'What it means'],
        rows: [
          ['No cash flow', 'A barrel of crude pays you nothing'],
          ['Contango and roll costs', 'Rolling futures can quietly cost you'],
          ['High volatility', 'Movements of 10% in a month are normal'],
          ['Storage and convenience', 'Physical commodity needs warehousing'],
          ['Easy to over-leverage', 'Futures margins can be small relative to exposure'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Commodities are a trading vehicle more than a holding',
        text: 'The long-run return on holding a broad commodity position has often been poor once futures roll costs are deducted. If your reasoning is "inflation will rise, so buy commodities", gold has historically done that job more cheaply and more simply.',
      },
      { kind: 'callout', tone: 'tip', text: 'If you want inflation protection, a small gold allocation or an equity fund is the more reliable route for a long-term investor. Treat commodities as a satellite, sized so that being wrong is survivable.', title: 'A simpler alternative' },
      { kind: 'sim', name: 'currency', caption: 'Crude oil is the clearest example of rupee depreciation feeding into Indian inflation.' },
    ],
    quiz: [
      {
        q: 'What is the main long-run problem with holding a commodity position?',
        options: [
          { text: 'They cannot be bought in India', why: 'They are traded on Indian exchanges daily.' },
          { text: 'They produce no income, and futures roll costs eat into returns', correct: true, why: 'Without yield, the entire return must come from price, and the mechanics of rolling contracts often subtract from it.' },
          { text: 'They are too risky in the short term only', why: 'They are also risky long-term; the structural issue is the absence of yield.' },
          { text: 'They have no volatility', why: 'They have very high volatility — that is not the problem.' },
        ],
      },
    ],
    takeaway: 'Commodities pay nothing and carry roll costs, so they are a speculative satellite rather than a long-term holding. For inflation protection, a small gold allocation is simpler and cheaper.',
  },

  'l3-071': {
    id: 'l3-071',
    title: 'Silver',
    subtitle: 'Half precious metal, half industrial metal',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'gold-role', caption: 'Silver is half precious, half industrial — roughly 1.5x as volatile as gold.' },


      { kind: 'p', text: 'Silver is both a precious metal and an essential industrial input — solar panels, electronics and electrical contacts. That dual role makes it more volatile than gold, with industrial demand swinging alongside investor demand.' },
      {
        kind: 'table',
        caption: 'Gold versus silver',
        headers: ['Gold', 'Silver'],
        rows: [
          ['Primarily a store of value', 'Also a manufacturing input'],
          ['Jewellery and investment', 'Industrial use is significant'],
          ['Very low volatility', 'Roughly 1.5× gold\'s volatility'],
          ['₹6,000+ per 10g in 2024–25', 'Roughly ₹1/10th of gold per unit'],
          ['No cash flow', 'No cash flow'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Jewellery is an even worse way to hold silver',
        text: 'Silver jewellery carries the same making charges as gold and often far higher, sometimes 50% or more. If you are buying silver for investment, use a fund or ETF.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Silver behaves like a leveraged gold position',
        text: 'Because it is more volatile and moves largely with gold, holding a lot of it is a rough doubling-down on the same view. That is a concentration risk disguised as diversification.',
      },
    ],
    quiz: [
      {
        q: 'Silver is more volatile than gold partly because:',
        options: [
          { text: 'It is less popular', why: 'Popularity is not the mechanism.' },
          { text: 'A large share of demand is industrial, so it moves with manufacturing cycles', correct: true, why: 'Industrial demand swings the price independently of investor sentiment, adding a second source of volatility.' },
          { text: 'It is sold in smaller units', why: 'Unit size does not create volatility.' },
          { text: 'It has lower liquidity than gold', why: 'Liquidity differs, but industrial demand is the main driver of the extra volatility.' },
        ],
      },
    ],
    takeaway: 'Silver is a hybrid precious and industrial metal, so it is roughly 1.5× as volatile as gold. Holding a lot of it is not real diversification — it is a leveraged bet on the same view.',
  },

  'l3-072': {
    id: 'l3-072',
    title: 'Commodity Markets',
    subtitle: 'Futures, contracts and leverage',
    minutes: 6,
    blocks: [

      { kind: 'scene', name: 'currency-erosion', caption: 'Futures give leveraged exposure with daily settlement — size these positions very small.' },


      { kind: 'p', text: 'A futures contract is an agreement to buy or sell a commodity at a fixed price on a future date. In India these trade on MCX and NCDEX, regulated by SEBI. The small margin you post means the actual exposure is many times that amount.' },
      {
        kind: 'table',
        caption: 'What you need to understand first',
        headers: ['Concept', 'What it means'],
        rows: [
          ['Contract size', 'The quantity per lot — often 5–10 barrels or 1,000 kg'],
          ['Margin', 'A fraction of the contract value you must deposit'],
          ['Leverage', 'Contract value ÷ margin, often 5–10×'],
          ['Expiry', 'The contract ends; you must close or roll it'],
          ['Mark-to-market', 'Profits and losses are settled daily, not at expiry'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Daily settlement is a feature, not a bug',
        text: 'Because gains and losses settle every day, a commodity position can be closed out by a temporary spike even if the longer-term view eventually proves right. This is the main reason beginners lose money here.',
      },
      {
        kind: 'list', items: ['Start with a very small position — smaller than feels reasonable.', 'Decide your exit before you enter.', 'Never trade commodities with borrowed money.', 'Do not hold more than 5–10% of your portfolio here.', 'If you cannot explain how you make money, do not trade it.'] },
    ],
    quiz: [
      {
        q: 'You post ₹50,000 margin on a contract worth ₹5,00,000. You hold:',
        options: [
          { text: '₹50,000 of exposure', why: 'You have much more exposure than the margin suggests.' },
          { text: '₹5,00,000 of exposure — a 10× leverage', correct: true, why: 'A 2% move against you wipes out your entire margin before you can add to the position.' },
          { text: '₹4,50,000 of exposure', why: 'Not how leverage works.' },
          { text: 'No exposure until expiry', why: 'Exposure begins at the moment the position is opened.' },
        ],
      },
    ],
    takeaway: 'Futures give you leveraged exposure with daily settlement. A small margin can be wiped out by a modest move, so size these positions very small and decide your exit before you enter.',
  },

  'l3-073': {
    id: 'l3-073',
    title: 'Real Estate',
    subtitle: 'The Indian family\'s default investment — and why it is complicated',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'property-cashflow', caption: 'What is left after rent, EMI, maintenance, tax and vacancy is the real return.' },
      { kind: 'p', text: 'For most Indian households, property has been the primary store of wealth. It has genuine benefits — a place to live, forced savings, sometimes rental income — but it is also illiquid, leveraged, expensive to transact and heavily taxed.' },
      {
        kind: 'table',
        caption: 'What a home gives you and what it costs you',
        headers: ['Gives you', 'Costs you'],
        rows: [
          ['A home to live in, not rented', '8–12% upfront in registration, stamp duty and GST'],
          ['Forced monthly saving via the EMI', 'EMI, maintenance, property tax, repairs'],
          ['Rental income if let out', 'Vacancy, tenant risk, repairs, tax'],
          ['A tangible, tangible asset', 'Months to sell, at the market price of the day'],
          ['Leverage to build an asset', 'Interest that can exceed the rent earned'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The flat-versus-rent calculation everyone skips',
        text: 'Rent is the cost of not owning. A home is not automatically the cheaper option: you are comparing rent against the EMI, maintenance and the opportunity cost of the lakhs you put down as equity. In many Indian cities renting and investing the difference genuinely wins.',
      },
      {
        kind: 'formula',
        label: 'The honest monthly comparison',
        expr: 'Owning cost = EMI + maintenance + tax − expected appreciation',
        note: 'Compare that against rent, plus investing the money you did not put down as a deposit.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Property belongs in the allocation conversation, and it is lumpy and illiquid.' },
    ],
    quiz: [
      {
        q: 'Why is comparing a house loan EMI directly with rent misleading?',
        options: [
          { text: 'EMIs are usually cheaper', why: 'EMIs include the interest portion, which is a genuine cost.' },
          { text: 'You must also account for maintenance, tax, and the capital locked in the down payment', correct: true, why: 'The deposit and the running costs can exceed the rent difference, which is why renting plus investing sometimes wins.' },
          { text: 'Rent always includes maintenance', why: 'Rent usually excludes maintenance, which works the other way.' },
          { text: 'You can sell a house instantly', why: 'The opposite — property is highly illiquid.' },
        ],
      },
    ],
    takeaway: 'Property has real benefits, but it is illiquid, costly to buy and sell, and heavily loaded with running costs. Compare owning against renting honestly, including the capital you lock up.',
  },

  'l3-074': {
    id: 'l3-074',
    title: 'Land',
    subtitle: 'Illiquid, unbankable, and rarely a good idea',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Land produces no income, is nearly impossible to mortgage and takes years to sell.' },


      { kind: 'p', text: 'Land is the most illiquid major asset in India. It pays nothing, cannot be mortgaged easily, has unclear title risk, and takes years to sell at the right price. Most people buying land are hoping for appreciation with no income to offset the wait.' },
      {
        kind: 'table',
        caption: 'The specific problems with land',
        headers: ['Problem', 'Why it matters'],
        rows: [
          ['Title disputes', 'A fraction of a claim can freeze the entire purchase'],
          ['No rental income', 'It costs you while producing nothing'],
          ['Very hard to mortgage', 'Usually only a small loan is possible'],
          ['Long development timelines', 'Permissions can take years'],
          ['Very high transaction cost', 'Stamp duty, registration, brokerage, often 10%+'],
          ['Poor resale liquidity', 'Only if you own nearby and it has zoning'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Land is usually a bet on a single developer or location',
        text: 'If you buy land and it never gets developed, or the road never arrives, you have no income and no buyer. That is a single, all-or-nothing outcome with no diversification at all.',
      },
    ],
    quiz: [
      {
        q: 'What is the most fundamental problem with buying land as an investment?',
        options: [
          { text: 'It is too expensive', why: 'Price varies enormously by location.' },
          { text: 'It produces no income while you wait years for appreciation', correct: true, why: 'No rent, no yield, no cash flow — you rely entirely on resale value going up.' },
          { text: 'It cannot be sold at all', why: 'It can be sold, though often slowly and at a discount to expectations.' },
          { text: 'It is taxed heavily', why: 'Transaction taxes are high, but the absence of income is the deeper issue.' },
        ],
      },
    ],
    takeaway: 'Land produces no income, is nearly impossible to mortgage and takes years to sell. It is the highest-risk form of Indian property investment and rarely a sensible choice for most households.',
  },

  'l3-075': {
    id: 'l3-075',
    title: 'Apartments',
    subtitle: 'More liquid than land, but you pay to maintain it',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Apartments are more liquid than land, but you owe maintenance every month for life.' },


      { kind: 'p', text: 'An apartment gives you a defined, habitable asset on a known plot, which is why most Indian households prefer it to land. It is easier to sell, can sometimes be mortgaged, and produces potential rental income. But you pay monthly maintenance forever, which land does not.' },
      {
        kind: 'table',
        caption: 'Ongoing costs buyers forget',
        headers: ['Cost', 'Typical range'],
        rows: [
          ['Monthly maintenance', '₹2,000–₹15,000 depending on city and size'],
          ['Property tax', 'Annual, varies by city'],
          ['Lift and water charges', 'Often separate from maintenance'],
          ['Sink fund', 'A few lakhs every few years'],
          ['Repainting and repairs', 'Every 5–7 years'],
          ['Society charges on transfer', 'One-off but real'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Check the society before you buy the flat',
        text: 'Reserves, pending litigation, dues and the quality of the managing committee affect your future bills and your ability to resell. Ask for the accounts and the minutes — many buyers never do.',
      },
    ],
    quiz: [
      {
        q: 'Two apartments cost the same. One has ₹8,000 monthly maintenance and the other ₹2,000. Over 10 years, ignoring appreciation, the cheaper one saves you:',
        options: [
          { text: '₹80,000', why: 'That is only the first year.' },
          { text: '₹7,20,000', correct: true, why: '₹6,000 × 12 months × 10 years = ₹7.2 lakh. This is a real, ongoing cost that rarely appears in sale brochures.' },
          { text: 'Nothing, since maintenance is shared', why: 'It is charged specifically to you, whether or not others share the building.' },
          { text: '₹6,000', why: 'That is the monthly difference only.' },
        ],
      },
    ],
    takeaway: 'Apartments are more liquid and financeable than land, but you owe maintenance and charges every month for life. Check the society\'s finances and dues before you commit.',
  },

  'l3-076': {
    id: 'l3-076',
    title: 'Rental Yield',
    subtitle: 'The number that tells you if a property pays',
    minutes: 6,
    blocks: [
      { kind: 'formula',
        label: 'Rental yield',
        expr: 'Rental yield % = (Annual rent ÷ Total property cost) × 100',
        note: 'Total cost means what you paid plus registration, not just the loan amount.',
      },
      { kind: 'p', text: 'Rental yield is the return from rent before costs. In most Indian cities it sits between 1.5% and 4%, which is often far below the home loan interest rate — meaning a let-out property can cost you cash every month rather than generating income.' },
      {
        kind: 'table',
        caption: 'The honest yield calculation',
        headers: ['Component', 'Include?'],
        rows: [
          ['Rent received', 'Yes'],
          ['Vacancy', 'Deduct — assume 1 month a year'],
          ['Maintenance and repairs', 'Deduct'],
          ['Property tax', 'Deduct'],
          ['Society charges', 'Deduct'],
          ['Home loan interest', 'Deduct — the honest comparison'],
          ['Depreciation of the building', 'Mention, do not deduct from cash'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The negative-rental-yield trap',
        text: 'If your home loan is at 8.5% and the property yields 2.5%, you pay roughly 6% a year on the borrowed amount simply to hold the asset. The rent is not covering the debt. This works only if appreciation or a genuine need to live there justifies it.',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Property is a real allocation — but it pays little and cannot be sold quickly.' },
    ],
    quiz: [
      {
        q: 'A property costing ₹50 lakh yields ₹1.5 lakh a year. The yield is:',
        options: [
          { text: '1.5%', why: 'That would be the case if the rent were ₹75,000 rather than ₹1.5 lakh. Divide by the full property cost, not the loan.' },
          { text: '3%', correct: true, why: '₹1.5 lakh ÷ ₹50 lakh = 3%, before deducting maintenance, vacancy and interest.' },
          { text: '30%', why: 'Off by a factor of ten.' },
          { text: 'It cannot be calculated without the loan', why: 'Yield uses the property cost, not the loan amount.' },
        ],
      },
      {
        q: 'A property yields 2.5% and your loan costs 8.5%. This means:',
        options: [
          { text: 'You are making a 6% return', why: 'The reverse — the debt costs more than the asset earns.' },
          { text: 'The rent does not cover the loan, so the property costs you cash each month', correct: true, why: 'You are paying roughly 6% of the borrowed amount annually to hold the asset. Appreciation or a personal need must justify it.' },
          { text: 'The property is a bargain', why: 'A negative rental position is not a bargain by itself.' },
          { text: 'You should immediately sell', why: 'It may still make sense if appreciation or self-use justifies holding.' },
        ],
      },
    ],
    takeaway: 'Rental yield is usually 1.5–4% in Indian cities, often below your loan rate — so a let-out property can consume cash rather than produce it. Judge it with all costs included.',
  },

  'l3-077': {
    id: 'l3-077',
    title: 'Capital Appreciation',
    subtitle: 'Where property returns actually come from',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Appreciation is the main source of property return — and the hardest to forecast.' },


      { kind: 'p', text: 'Appreciation is the rise in the property\'s price over time. For most Indian property investors it has been the dominant component of return — and it is the component nobody can reliably forecast.' },
      {
        kind: 'table',
        caption: 'What drives appreciation',
        headers: ['Pushes price up', 'Pushes price down'],
        rows: [
          ['Infrastructure in the area', 'Oversupply of new housing'],
          ['Employment and migration', 'Weak local job market'],
          ['Interest rates falling', 'Interest rates rising'],
          ['Limited supply, good amenities', 'A new competing development'],
          ['General inflation', 'Faster local income growth than wages'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Buying at the top of a local cycle is the main risk',
        text: 'Indian property has had long flat and falling stretches in specific cities even during national growth. Location dominates: a good flat in a weak market can stagnate while a modest one in a growing corridor does well.',
      },
      {
        kind: 'formula',
        label: 'Annualised appreciation',
        expr: 'CAGR = (Final price ÷ Purchase price)^(1/years) − 1',
        note: 'Always annualise. A 30% total gain over 10 years is only 2.6% a year.' },
    ],
    quiz: [
      {
        q: 'A property bought at ₹40 lakh is worth ₹52 lakh after 10 years. Annualised appreciation is about:',
        options: [
          { text: '30%', why: 'That is the total gain over the decade, not per year.' },
          { text: '2.6% a year', correct: true, why: '₹52 ÷ ₹40 = 1.3 over 10 years; 1.3^(1/10) − 1 ≈ 2.65%.' },
          { text: '12% a year', why: 'Far too high for that total gain.' },
          { text: '1.2% a year', why: 'Close-ish, but the correct annualised figure is about 2.6%.' },
        ],
      },
    ],
    takeaway: 'Appreciation is the main source of property return and the hardest to forecast. Always annualise the gain — a large total increase over a long period is usually a modest yearly return.',
  },

  'l3-078': {
    id: 'l3-078',
    title: 'Property Taxes',
    subtitle: 'Small, recurring, and easy to forget',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Property tax is small but permanent — unpaid dues complicate a sale.' },


      { kind: 'p', text: 'Property tax is an annual local-government charge, usually a small percentage of the assessed or market value depending on the state. It is trivial next to maintenance, but it recurs forever and is often unpaid, which creates liability on sale.' },
      {
        kind: 'table',
        caption: 'Taxes and charges that attach to property',
        headers: ['Charge', 'Nature'],
        rows: [
          ['Property tax', 'Annual, municipal, usually small'],
          ['Stamp duty and registration', 'One-off, 5–10% on purchase'],
          ['GST on new property', 'Under-construction, around 5% and rising'],
          ['TDS on rent', 'If you are a tenant in the tax bracket'],
          ['Capital gains tax', 'On sale, based on holding period'],
          ['Cess', 'On property tax, usually 12%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Unpaid property tax blocks a clean sale',
        text: 'Outstanding dues accumulate and must be cleared before transfer, often with penalties. If you are holding property, set a calendar reminder for the annual payment — it is a small task that prevents a large delay.',
      },
    ],
    quiz: [
      {
        q: 'Property tax on an Indian apartment is typically:',
        options: [
          { text: 'The single largest cost of ownership', why: 'That is almost always maintenance and the home loan interest.' },
          { text: 'A small annual municipal charge that must be paid on schedule', correct: true, why: 'Individually small, but it recurs indefinitely and unpaid dues complicate a future sale.' },
          { text: 'Paid once at purchase', why: 'That description fits stamp duty and registration, which are one-off.' },
          { text: 'Not applicable to apartments', why: 'Municipal property tax applies to all property.' },
        ],
      },
    ],
    takeaway: 'Property tax is small but permanent, and unpaid dues complicate a sale. Set a reminder, and remember that the big purchase-time costs are stamp duty, registration and GST.',
  },

  'l3-079': {
    id: 'l3-079',
    title: 'Stamp Duty',
    subtitle: 'The biggest upfront cost nobody quotes you',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Stamp duty and registration add 5–10% to a purchase — paid upfront, never recovered.' },


      { kind: 'p', text: 'Stamp duty is a state-level tax on property transactions, payable on registration. Together with registration charges it is often 5–10% of the purchase price, and some states also levy a registration fee on a similar base.' },
      {
        kind: 'table',
        caption: 'Typical stamp duty and registration by state',
        headers: ['State', 'Approximate stamp duty + registration'],
        rows: [
          ['Maharashtra', 'Around 5–6%'],
          ['Karnataka', 'Around 5–6%'],
          ['Delhi', 'Around 6–9%'],
          ['Tamil Nadu', 'Around 7–8%'],
          ['West Bengal', 'Around 6–7%'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'It is not a cost if you hold long enough — but it is a barrier to entry',
        text: 'On a ₹1 crore flat, 6% is ₹6 lakh that never comes back. That does not stop a long-term purchase being sensible, but it does mean a property bought purely to flip within a few years has a very poor starting point.',
      },
    ],
    quiz: [
      {
        q: 'You buy a flat for ₹50 lakh with 6% stamp duty and registration. How much do you actually pay at purchase?',
        options: [
          { text: '₹50 lakh', why: 'That is only the agreement price.' },
          { text: '₹53 lakh', correct: true, why: '₹3 lakh of government charges, before any GST on an under-construction unit.' },
          { text: '₹47 lakh', why: 'Charges are additional, not deducted.' },
          { text: 'It varies only by buyer', why: 'The rate is set by the state and applies to all buyers.' },
        ],
      },
    ],
    takeaway: 'Stamp duty and registration add roughly 5–10% to a property purchase, paid upfront and never recovered. Factor it into affordability from the start.',
  },

  'l3-080': {
    id: 'l3-080',
    title: 'Registration Costs',
    subtitle: 'Where the paperwork actually happens',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Registration receipts prove your original cost — keep them for the life of the property.' },


      { kind: 'p', text: 'Registration is the legal recording of the sale with the sub-registrar office. It carries its own fee on the transaction value plus stamp duty, and it is the point at which the buyer officially owns the property.' },
      {
        kind: 'list',
        items: ['Registration fee, usually calculated alongside stamp duty.', 'GST, for under-construction property from a builder.', 'Legal and advocate fees, typically ₹10,000–₹50,000.', 'Society NOC and transfer charges.', 'A working bank account in the same city, often required.'] },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Keep every receipt, permanently',
        text: 'Registration receipts establish your original purchase cost, which determines your capital gains tax years later. They also form the base for your own future calculations. Store them somewhere durable, not in a folder in the same house.',
      },
    ],
    quiz: [
      {
        q: 'Why should you keep the registration receipt for the life of the property?',
        options: [
          { text: 'The municipality requires it to be displayed', why: 'No such display requirement exists.' },
          { text: 'It proves your original cost, which sets your capital gains tax when you sell', correct: true, why: 'Capital gains are computed from purchase price, and disputes over records are common without the receipt.' },
          { text: 'It proves you paid the stamp duty', why: 'It evidences that, but the main long-term value is the purchase-price proof.' },
          { text: 'It renews automatically each year', why: 'Registration is a one-time event, not an annual charge.' },
        ],
      },
    ],
    takeaway: 'Registration charges and stamp duty are real upfront costs, and the receipt is your proof of original cost for tax years later. Keep it, and store it somewhere safe.',
  },

  'l3-081': {
    id: 'l3-081',
    title: 'Maintenance Costs',
    subtitle: 'The cost nobody stops paying',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Maintenance never stops — treat property as a zero-coupon bond and subtract every running cost.' },


      { kind: 'p', text: 'Unlike a bond, a property never finishes costing money. Alongside the EMI you pay maintenance, property tax, society charges, lift and water bills, insurance, repairs and eventual repainting — every single year, for as long as you own it.' },
      {
        kind: 'formula',
        label: 'Annual running cost',
        expr: 'Maintenance + tax + charges + insurance + repairs − rent',
        note: 'For a self-occupied flat this is a pure annual cost. For a rented one it is the shortfall.',
      },
      {
        kind: 'table',
        caption: 'Annual running costs on a ₹1 crore flat',
        headers: ['Item', 'Typical annual'],
        rows: [
          ['Maintenance and society charges', '₹36,000–₹1,80,000'],
          ['Property tax and cess', '₹5,000–₹25,000'],
          ['Insurance', '₹3,000–₹8,000'],
          ['Repairs and painting (amortised)', '₹20,000–₹60,000'],
          ['Lift and water charges', 'Varies'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Compare property against a bond, not against cash',
        text: 'Property is a bond with a coupon of zero: you get no income from it at all, so every rupee of maintenance is a pure drag. That is the honest way to think about the running costs.',
      },
    ],
    quiz: [
      {
        q: 'An apartment costs ₹40,000 a year to run, and you lend it for ₹2.2 lakh. Net annual cash from it is:',
        options: [
          { text: '₹1.8 lakh', correct: true, why: '₹2.2 lakh − ₹40,000 = ₹1.8 lakh, before servicing the loan.' },
          { text: '₹2.6 lakh', why: 'That would be rent plus the costs, which is not cash flow.' },
          { text: '₹40,000', why: 'That is the cost, not the net income.' },
          { text: 'It varies with property tax alone', why: 'All running costs matter, not just tax.' },
        ],
      },
    ],
    takeaway: 'Maintenance never stops — unlike a bond that matures. Treat property as a zero-coupon bond and subtract every annual running cost before judging whether it produces income.',
  },

  'l3-082': {
    id: 'l3-082',
    title: 'Home Loans',
    subtitle: 'Leverage on a very expensive, very illiquid asset',
    minutes: 7,
    blocks: [
      { kind: 'p', text: 'A home loan lets you buy a property with a small upfront payment, which is the main reason Indian households use it. In the old regime you also get tax benefits: principal repayment counts under Section 80C, interest on a self-occupied home up to ₹2 lakh a year under Section 24(b), and first-time buyers of affordable homes may claim an extra interest deduction under Section 80EEA.' },
      {
        kind: 'table',
        caption: 'The four types, and what they cost',
        headers: ['Loan type', 'Who lends', 'Typical rate'],
        rows: [
          ['RERA-approved builder', 'A bank or housing finance company', '8.5–9.5%'],
          ['Bank loan on a resale flat', 'Any major bank', '8.5–9.5%'],
          ['Fixed vs floating', 'Either', 'Floating resets; fixed locks'],
          ['Balance transfer', 'Another lender', 'A rate reduction'],
        ],
      },
      {
        kind: 'formula',
        label: 'The rule that keeps it sane',
        expr: 'Total EMI should be under about 35–40% of net monthly income',
        note: 'Above that, a rate rise or a job loss turns a home into a financial emergency.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Stretching the tenure to cut the EMI is a trap',
        text: 'Taking a 30-year loan to make the EMI look affordable means paying interest for longer — often ₹15–25 lakh more in total interest. Compare total interest, not just the monthly number.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Keep an emergency fund before you take the loan',
        text: 'A home loan means a large fixed payment for 15–30 years. With no emergency fund, three months of missed work can turn a long-term investment into a default. Six months of expenses first.',
      },
      { kind: 'sim', name: 'emi', caption: 'See how much of an early EMI is interest rather than ownership.' },
    ],
    quiz: [
      {
        q: 'Why is stretching a home loan to 30 years to reduce the EMI risky?',
        options: [
          { text: 'Banks refuse tenures over 25 years', why: 'Banks will happily lend 30 years.' },
          { text: 'You pay substantially more total interest for the same flat', correct: true, why: 'Extending the tenure adds years of interest on a balance that barely falls — often ₹15–25 lakh more.' },
          { text: 'It affects your credit score negatively', why: 'A longer tenure itself does not harm your score.' },
          { text: 'The tax benefit disappears', why: 'Tax benefits continue for the loan\'s full tenure.' },
        ],
      },
      {
        q: 'The safest EMI for a ₹6 lakh-per-month take-home income is about:',
        options: [
          { text: '₹3.6 lakh (60%)', why: 'That leaves nothing for anything, including a rate rise or a job loss.' },
          { text: 'Around ₹2.1–2.4 lakh (35–40%)', correct: true, why: 'That leaves room for other obligations and absorbs a rate reset or a couple of months without income.' },
          { text: '₹30,000 (5%)', why: 'Very conservative, but it would make the flat unaffordable for many buyers.' },
          { text: 'Whatever the bank approves', why: 'Banks approve based on your income, but the sensible number is set by your own safety margin.' },
        ],
      },
    ],
    takeaway: 'A home loan is long-term leverage on an expensive, illiquid asset. Keep the EMI under about 35–40% of take-home, avoid stretching the tenure, and build an emergency fund first.',
  },

  'l3-083': {
    id: 'l3-083',
    title: 'The Liquidity of Property',
    subtitle: 'Weeks to sell, and you sell at the market price of that day',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'property-cashflow', caption: 'Property is the least liquid major asset — concentrating your net worth in one flat is risky.' },


      { kind: 'p', text: 'Selling property takes weeks or months, involves legal transfer and taxes, and only reaches a buyer at whatever the market offers that day. That is the opposite of how equities work, and it changes how property should be held.' },
      {
        kind: 'table',
        caption: 'Liquidity compared',
        headers: ['Asset', 'Time to convert to cash'],
        rows: [
          ['Savings account', 'Instant'],
          ['Equity fund', '2–3 days'],
          ['Listed share', 'Minutes'],
          ['Property', 'Several weeks to months'],
          ['Land', 'Months to years, if at all'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Illiquidity changes your allocation',
        text: 'If property is 60% of your net worth, then essentially all of your wealth is in something you cannot convert for months. For most people that is far too concentrated, regardless of how comfortable they feel living there.',
      },
    ],
    quiz: [
      {
        q: 'Your net worth is 70% in one flat. The main risk is:',
        options: [
          { text: 'Property prices always fall', why: 'Prices rise in some markets for long periods.' },
          { text: 'Concentration risk combined with total illiquidity', correct: true, why: 'You cannot sell quickly, and a single asset in a single place determines your financial position.' },
          { text: 'You pay too much tax', why: 'Tax matters but is not the defining risk here.' },
          { text: 'Rent is too high', why: 'Unrelated to your net worth concentration.' },
        ],
      },
    ],
    takeaway: 'Property is the least liquid major asset you can own. Concentrating your net worth in one flat means you cannot convert it in a crisis — so keep property to a sensible share of total wealth.',
  },

  'l3-084': {
    id: 'l3-084',
    title: 'Property Risk',
    subtitle: 'Location, leverage, liquidity and paperwork',
    minutes: 6,
    blocks: [
      { kind: 'p', text: 'Property carries a distinctive combination of risks that do not apply to a fund or a bond: it is local, leveraged, illiquid, and dependent on paperwork you cannot independently verify.' },
      {
        kind: 'table',
        caption: 'The specific risks of property',
        headers: ['Risk', 'What goes wrong'],
        rows: [
          ['Location risk', 'One bad local market can stay flat for a decade'],
          ['Leverage risk', 'A rate rise makes the EMI unaffordable'],
          ['Liquidity risk', 'You must sell in a downturn to raise cash'],
          ['Title risk', 'A claim on the land can freeze everything'],
          ['Developer risk', 'Under-construction projects can stall or fail'],
          ['Maintenance risk', 'Structural and building costs rise over time'],
          ['Concentration risk', 'One asset, one city, one asset class'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Under-construction is the highest-risk category',
        text: 'Buying from a developer means your money funds construction before a home exists. Project delays and defaults have been widespread in Indian cities. Verify the project is RERA-registered and check the developer\'s track record of on-time delivery.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        text: 'The most valuable property decision is not which flat — it is how much of your net worth any single flat represents. Fifteen years of disciplined investing is usually destroyed by one over-concentrated property purchase.', title: 'The most important property rule',
      },
      { kind: 'sim', name: 'portfolio', caption: 'Property is real diversification, but it is lumpy, illiquid and hard to rebalance.' },
    ],
    quiz: [
      {
        q: 'Which is the most underrated risk when buying an under-construction flat?',
        options: [
          { text: 'Interest rate risk', why: 'It exists, but it applies to completed property too.' },
          { text: 'Developer and project risk — your money funds a building that may not be completed on time', correct: true, why: 'Project stalls and developer defaults have been common in Indian cities; check RERA registration and delivery track record.' },
          { text: 'Stamp duty risk', why: 'Stamp duty is certain and known, so it is not really a risk.' },
          { text: 'Title risk', why: 'Title risk is real, but it applies equally to resale property. The construction-specific risk is what is unique here.' },
        ],
      },
    ],
    takeaway: 'Property risk is location, leverage, illiquidity, title and concentration combined. Verify titles and RERA status, and keep any single property to a sane share of your net worth.',
  },
}
