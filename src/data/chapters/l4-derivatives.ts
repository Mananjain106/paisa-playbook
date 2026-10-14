import type { Chapter } from '../../types'
import { scene4, sim4 } from '../../lib/chapter-blocks'

const SCENE_DERIV = scene4('deriv-payoff')
const SCENE_CP = scene4('call-put')
const SCENE_CUR = scene4('currency-risk')
const SIM_OPTS = sim4('options-payoff', 'Trace the breakeven and the payoff shape of a call or put.')
const SIM_CURRENCY = sim4('currency', 'What rupee depreciation gives you abroad, and what it costs at home.')

export const derivatives: Record<string, Chapter> = {
  'l4-059': {
    id: 'l4-059',
    title: 'Futures',
    subtitle: 'A contract to trade later at a price set today.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "A futures contract is an agreement to buy or sell something at a set price on a set future date. The something can be a stock index, a commodity, a currency, or another underlying. The price is agreed today, but the exchange happens later. That simple structure is why futures are used both for speculation and for managing risk: they let people lock in a future price, for better or worse." },
      SCENE_DERIV,
      { kind: 'h', text: 'Why futures exist' },
      { kind: 'list', items: [
        'To lock in a price: a producer or buyer can reduce uncertainty by fixing the future price now.',
        'To speculate: traders can try to profit from price moves without owning the underlying in the spot market.',
        'To bridge markets: futures can make it easier to take a view or hedge without dealing with the logistics of physical delivery.',
        'To transfer risk: someone who wants to reduce risk can pass it to someone willing to take it.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Futures are not free lunches', text: "Futures can be powerful, but they also magnify outcomes because of leverage and because they roll over time. A locked-in price can be a win or a loss depending on what the market does later. The structure is honest about that: you are agreeing to a future transaction at a price that may look great today and terrible tomorrow." },
      SCENE_DERIV,
      { kind: 'example', title: 'A simple futures idea', text: "A buyer who needs a commodity later may use a futures contract to fix the price now, so the budget is less exposed to a future spike. A trader may take the other side, betting that the price will move differently. Same contract, two different purposes: one is risk management, one is a bet on direction." },
      { kind: 'terms', items: [
        { term: 'futures contract', meaning: 'a standardised contract to buy or sell an underlying at a specified price on a specified future date, traded on an exchange.' },
        { term: 'underlying', meaning: 'the asset, index, commodity, or currency that the derivative contract is based on.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main purpose of a futures contract?',
        options: [
          { text: 'To agree today on a future price for buying or selling an underlying, often to lock in a price or to express a market view.', correct: true, why: 'Futures are about a future transaction at a price set today, which can be used for hedging or speculation.' },
          { text: 'To buy a physical asset today and take delivery immediately.', correct: false, why: 'A futures contract is about a future settlement at a set price, not an immediate physical purchase.' },
          { text: 'To avoid all risk from price changes forever.', correct: false, why: 'Futures can reduce uncertainty for someone who hedges, but they do not eliminate risk for everyone; one side’s hedge is the other side’s risk.' },
        ],
      },
    ],
    takeaway: 'A futures contract is a deal to trade later at a price set today. It is used to lock in prices, express views, and move risk around — not to make the future predictable.',
  },

  'l4-060': {
    id: 'l4-060',
    title: 'Futures Contracts',
    subtitle: 'The details that shape what the contract actually does.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Not all futures contracts are the same. The contract size, the underlying, the expiry date, the tick size, the margin rules, and whether the contract is cash-settled or physically settled all matter. These details determine how much exposure you have, how much capital you need, and what happens when the contract ends." },
      SCENE_DERIV,
      { kind: 'h', text: 'Contract features worth knowing' },
      { kind: 'list', items: [
        'Contract size: how much of the underlying one contract represents, which affects the scale of the position.',
        'Expiry: when the contract ends and what happens at or near the end.',
        'Settlement: whether the contract ends in cash or in delivery of the underlying.',
        'Tick size and tick value: the smallest price move and its monetary value, which affects profit and loss granularity.',
        'Margin: the capital required to hold the position, which shapes leverage and risk.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The contract is not the underlying', text: "A futures contract is a derivative of the underlying, not the underlying itself. The price can track closely, but the contract has its own rules, its own timing, and its own risk profile. Treating a futures contract as if it were the same thing as owning the asset is a common source of confusion." },
      SCENE_DERIV,
      { kind: 'example', title: 'Why details matter', text: 'Two index futures may both be linked to the same market, but if one contract is four times the size of another, the same price move has four times the impact on the smaller or larger contract. The underlying story may be identical; the contract exposure is not. That is why the contract specification is part of the decision.' },
      { kind: 'terms', items: [
        { term: 'contract size', meaning: 'the quantity of the underlying represented by one futures contract, which determines how much exposure a single contract gives.' },
        { term: 'settlement', meaning: 'how a contract is resolved at expiry: in cash, or by delivery of the underlying asset.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why do the details of a futures contract matter?',
        options: [
          { text: 'Because contract size, expiry, settlement, tick value, and margin determine the exposure, capital required, and what happens at the end.', correct: true, why: 'These specifications shape the risk and scale of the position, not just the direction of the trade.' },
          { text: 'Because the contract details do not matter; only the underlying matters.', correct: false, why: 'The contract is not the underlying; its terms affect the exposure and mechanics even if the underlying price is the same.' },
          { text: 'Because all futures contracts are identical, so the details are just paperwork.', correct: false, why: 'Futures contracts are not identical across products and exchanges; the specification can change the scale and settlement of the position.' },
        ],
      },
    ],
    takeaway: 'A futures contract is defined by more than the underlying. Pay attention to size, expiry, settlement, tick value, and margin, because those details determine what you are actually buying or selling.',
  },

  'l4-061': {
    id: 'l4-061',
    title: 'Margin',
    subtitle: 'The capital you post to hold a leveraged position.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Margin is the money you put up to enter and maintain a position in a leveraged market like futures. It is not the full value of the contract; it is the performance bond, the stake that shows you can meet your obligations as the market moves. The word can be confusing because it is used for different things in different contexts, but in derivatives it usually means the capital required to keep the trade alive." },
      SCENE_DERIV,
      { kind: 'h', text: 'What margin does' },
      { kind: 'list', items: [
        'It protects the counterparty and exchange against default if the position moves against you.',
        'It lets traders take larger exposure with less capital than the full notional value.',
        'It can change as the market moves, because open positions may require more funds if they go against you.',
        'It creates the lever that makes futures powerful and dangerous at the same time.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Margin is a source of both power and peril', text: "Margin lets a trader control a large notional value with a smaller amount of capital, which is why futures can produce large gains and large losses from small moves. The danger is not the leverage itself; it is forgetting that leverage works both ways. A small adverse move can require more capital or force a closure." },
      SCENE_DERIV,
      { kind: 'example', title: 'Margin in plain terms', text: "If a contract’s notional value is large but the margin required is much smaller, you are controlling more value than the cash you put up. That is the leverage. If the market moves against you, the margin may need to be topped up, or the position may be at risk. The smaller the margin relative to the contract value, the larger the lever — and the larger the swing." },
      { kind: 'terms', items: [
        { term: 'margin', meaning: 'the capital posted to enter or hold a leveraged position, serving as a performance bond against future price moves.' },
        { term: 'leverage', meaning: 'using a smaller amount of capital to control a larger notional exposure, which amplifies both gains and losses.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main function of margin in a leveraged market?',
        options: [
          { text: 'To post capital as a performance bond so the position can be held and obligations can be met as the market moves.', correct: true, why: 'Margin is the stake that supports the leveraged position and helps protect the counterparty and exchange from default.' },
          { text: 'To pay the full value of the underlying asset upfront.', correct: false, why: 'Margin is not the full notional value; it is much smaller and is there to support leverage, not to fund the entire contract.' },
          { text: 'To guarantee a profit no matter which way the market moves.', correct: false, why: 'Margin does not guarantee profit; it supports the trade, but the market can still move against you.' },
        ],
      },
    ],
    takeaway: 'Margin is the capital you put up to hold a leveraged position. It enables large exposure from small capital, which is why it amplifies both gains and losses.',
  },

  'l4-062': {
    id: 'l4-062',
    title: 'Leverage',
    subtitle: 'Small money controlling large exposure — and why that cuts both ways.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Leverage is the use of borrowed capital or margin to amplify exposure. In derivatives, leverage is built into the structure: you do not need the full notional value to take a position. That is what makes derivatives efficient for hedging and attractive for speculation. It is also what makes them dangerous when the move is against you, because the same magnification applies to losses." },
      SCENE_DERIV,
      { kind: 'h', text: 'Leverage in practice' },
      { kind: 'list', items: [
        'Higher leverage means a smaller move in the underlying can produce a larger percentage change in your capital.',
        'Leverage can make a modest market move feel dramatic in the P&L.',
        'It can accelerate both the upside and the downside.',
        'The right amount of leverage depends on the size of the move you expect, the risk you can tolerate, and the possibility of being wrong.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Leverage without risk control is just risk on fast forward', text: "Leverage by itself is not a strategy. A leveraged position without a stop, a plan, and a sensible size is a fast way to turn a bad idea into a bad outcome. Leverage should be chosen with reference to the risk you are taking, not just with reference to how much exposure you want." },
      SCENE_DERIV,
      { kind: 'example', title: 'A lever cut both ways', text: "If a position is leveraged, a small fall in the underlying can wipe out a large fraction of the capital at risk, even if the underlying does not move far in absolute terms. That is why two traders can have the same view and very different outcomes: the one who uses leverage without sizing and exits can be hurt far more by the same move." },
      { kind: 'terms', items: [
        { term: 'leverage', meaning: 'amplifying exposure relative to capital, so that a given move in the underlying produces a larger percentage change in the position’s value.' },
        { term: 'notional value', meaning: 'the full value of the position’s underlying exposure, which can be much larger than the capital used to control it when leverage is involved.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the central risk of leverage?',
        options: [
          { text: 'It amplifies both gains and losses, so a small adverse move can cause a large percentage loss on the capital at risk.', correct: true, why: 'Leverage magnifies the effect of market moves in both directions, making correct sizing and risk control essential.' },
          { text: 'It always leads to a loss, because leverage is inherently bad.', correct: false, why: 'Leverage is not inherently bad; it is a tool that can be useful, but it amplifies risk as well as return.' },
          { text: 'It removes all the risk from the underlying and replaces it with a fixed outcome.', correct: false, why: 'Leverage does not remove underlying risk; it changes the scale of the exposure to that risk.' },
        ],
      },
    ],
    takeaway: 'Leverage magnifies exposure relative to capital, which means it magnifies both the upside and the downside. Use it with a plan, a size limit, and a clear reason — not as a way to make a small bet feel big.',
  },

  'l4-063': {
    id: 'l4-063',
    title: 'Expiry',
    subtitle: 'The date that forces a decision or a replacement.',
    minutes: 5,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Expiry is the date on which a contract or option ceases to be live in its current form. For futures, it is the point where the contract is settled or rolled. For options, it is the last day the contract has life as an option. Expiry matters because it forces action: a position does not go on forever just because you want it to." },
      SCENE_DERIV,
      { kind: 'h', text: 'Why expiry changes behaviour' },
      { kind: 'list', items: [
        'Positions can’t be held indefinitely in the same contract; they must be closed, settled, or rolled.',
        'Rolling into the next contract can involve a price gap between contracts, called the roll cost or roll spread.',
        'Near expiry, time value in options erodes, which changes the option’s behaviour.',
        'Expiry can create rushed decisions, which is exactly when poor risk control is most dangerous.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not let expiry become a surprise deadline', text: "Expiry is a feature, not a trap, if you plan for it. The trap is holding a contract into expiry without knowing what you will do at the end. Know the expiry, know the settlement, and know whether you want to roll, close, or let it settle." },
      SCENE_DERIV,
      { kind: 'example', title: 'A roll decision', text: "If you want a futures view to continue past the current contract’s expiry, you may need to close the near contract and open the next one. The move from one contract to the next is not always seamless; there can be a price difference and a transaction cost. That is part of the cost of maintaining a longer view through the futures market." },
      { kind: 'terms', items: [
        { term: 'expiry', meaning: 'the date on which a contract or option ceases to be live in its current form and is settled, closed, or rolled.' },
        { term: 'roll', meaning: 'moving a position from an expiring contract to a later contract, often at a price difference and transaction cost.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why does expiry matter in derivatives?',
        options: [
          { text: 'Because contracts do not live forever; they must be closed, settled, or rolled, and the move between contracts can have a cost.', correct: true, why: 'Expiry is the point where the current contract ends, so it forces a decision and can create roll costs.' },
          { text: 'Because expiry guarantees a profit if you hold to the end.', correct: false, why: 'Expiry does not guarantee profit; it just ends the current contract and determines settlement.' },
          { text: 'Because it has no practical effect beyond a label on the contract.', correct: false, why: 'Expiry changes what happens to the position and can affect cost and behaviour, so it is not just a label.' },
        ],
      },
    ],
    takeaway: 'Expiry is the date that ends a contract’s life as it stands. Plan for it: close, settle, or roll, and remember that moving into the next contract can carry a cost.',
  },

  'l4-064': {
    id: 'l4-064',
    title: 'Mark-To-Market',
    subtitle: 'Daily settlement of gains and losses as the price moves.',
    minutes: 5,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Mark-to-market means the position is revalued at current market prices, often daily, so gains and losses are recognised as they happen rather than waiting until the end. In futures, this is part of how margin works: if the position moves against you, you may need to add funds; if it moves in your favour, you may get a credit. The idea is to keep the exposure backed by current value." },
      SCENE_DERIV,
      { kind: 'h', text: 'What mark-to-market changes' },
      { kind: 'list', items: [
        'You see gains and losses earlier, not just at maturity or final settlement.',
        'Cash can flow in or out as the position fluctuates, which affects liquidity.',
        'A position can be profitable on paper and still require more funds if it moves against you before settling.',
        'It makes leverage felt sooner, because the capital tied up can change with the daily price.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Paper profit is not the same as spendable cash', text: "Mark-to-market can make a position look good one day and painful the next. That is normal, but it is not the same as intending to pay bills from a temporary gain. If you rely on a mark-to-market profit that can reverse, you are borrowing against the market, which is a fragile plan." },
      SCENE_DERIV,
      { kind: 'example', title: 'Daily revaluation in action', text: "A futures position may gain on one day, reducing the margin requirement or creating a credit, and then lose on the next day, requiring funds again. The market’s daily movement becomes a series of small settlements, not one big result at the end. That daily rhythm is what mark-to-market means in practice." },
      { kind: 'terms', items: [
        { term: 'mark-to-market', meaning: 'revaluing a position to current market prices, often daily, so gains and losses are recognised as they occur.' },
        { term: 'settlement', meaning: 'the process of recognising and paying or receiving the gains or losses resulting from the revaluation of a position.' },
      ] },
    ],
    quiz: [
      {
        q: 'What does mark-to-market mean for a derivatives position?',
        options: [
          { text: 'The position is revalued to current market prices, often daily, so gains and losses are recognised as they happen and can affect margin or cash.', correct: true, why: 'Mark-to-market makes the current value of the position explicit and can create cash movements before final settlement.' },
          { text: 'The position is valued only at the end, with no daily recognition of gains or losses.', correct: false, why: 'That is the opposite of mark-to-market; daily revaluation is the defining feature.' },
          { text: 'The position is guaranteed a fixed result regardless of market price.', correct: false, why: 'Mark-to-market reflects the actual market price, not a predetermined outcome.' },
        ],
      },
    ],
    takeaway: 'Mark-to-market revalues a position to current prices, often daily, so gains and losses show up as they happen. That is useful for transparency and risk, but it also means cash and margin can move quickly.',
  },

  'l4-065': {
    id: 'l4-065',
    title: 'Hedging',
    subtitle: 'Using derivatives to reduce a specific risk, not to make a guess.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Hedging is the use of a derivative to offset or reduce a risk you already have. If you own an asset and worry about a price drop, you can use a futures or option position to cushion the impact. If you are due to buy something later and worry about a price rise, you can lock in a price. The point of hedging is not to chase profit; it is to make an existing exposure less dangerous." },
      SCENE_DERIV,
      { kind: 'h', text: 'What hedging is and is not' },
      { kind: 'list', items: [
        'A hedge is a deliberate offset to a known or expected exposure.',
        'It can reduce the range of outcomes for a given risk.',
        'It often costs something, because risk transfer is not free.',
        'It is not the same as speculation, even though the same instruments can be used for both.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'A hedge is a shield, not a crystal ball', text: "A hedge can reduce the impact of a particular risk, but it does not turn a bad decision into a good one. If the underlying exposure is poor, a hedge only shifts part of the consequence. The best hedge is one that solves a real exposure rather than one that creates a new speculative position in disguise." },
      SCENE_DERIV,
      { kind: 'example', title: 'A practical hedge', text: "A producer worried about prices falling before harvest may use a futures sell to lock in a price. That reduces the uncertainty about what the producer will receive. The trade-off is that the producer also gives up some upside if prices rise. A hedge is a trade between certainty and flexibility." },
      { kind: 'terms', items: [
        { term: 'hedging', meaning: 'using a financial instrument to reduce or offset a specific risk, often by taking an opposite position in a related market.' },
        { term: 'counterparty', meaning: 'the other side of a trade or contract; in hedging, the person or entity on the other side of the derivative position.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main purpose of hedging?',
        options: [
          { text: 'To reduce or offset a specific risk you already face, often by taking an opposite or related position.', correct: true, why: 'Hedging is about managing an existing exposure, not about gambling on direction for its own sake.' },
          { text: 'To make a speculative bet on the market and maximise profit.', correct: false, why: 'Speculation seeks profit from price moves; hedging seeks to reduce the impact of a risk on an existing position.' },
          { text: 'To eliminate all risk from every part of a business forever.', correct: false, why: 'Hedging can reduce specific risks, but it does not remove all risk, and it often introduces other trade-offs.' },
        ],
      },
    ],
    takeaway: 'Hedging is using derivatives to reduce a specific risk you already have. It is a shield for an exposure, not a guess about where the market is going.',
  },

  'l4-066': {
    id: 'l4-066',
    title: 'Speculation',
    subtitle: 'Taking risk on purpose, with the hope of profit.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Speculation is taking a position in the hope of profit from a price move, with the acceptance of risk. It is the opposite of hedging in purpose, even if the instruments are the same. A speculator does not already have the exposure they are betting on or against; they are creating a new exposure because they think the price will move in their favour." },
      SCENE_DERIV,
      { kind: 'h', text: 'Speculation in plain terms' },
      { kind: 'list', items: [
        'The motive is profit from a predicted price move.',
        'The risk is real: the prediction can be wrong, and the position can lose money.',
        'Leverage can make speculation more powerful and more dangerous at the same time.',
        'A good speculator thinks in terms of risk, size, and exit, not just in terms of being right.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Speculation is not investment, and it is not a hobby paid by confidence', text: "A speculative position can be thoughtful or reckless. The difference is whether the person has a plan for sizing, risk, and exit, and whether they accept that being wrong is part of the game. Speculation without a plan is just gambling with better vocabulary." },
      SCENE_DERIV,
      { kind: 'example', title: 'Speculation versus hedging', text: "A trader who buys a futures contract because they think the price will rise is speculating. A farmer who sells a futures contract because they want to lock in a price for a crop they will harvest is hedging. The instrument may be similar, but the purpose is different: one is creating risk in search of profit, the other is reducing risk already there." },
      { kind: 'terms', items: [
        { term: 'speculation', meaning: 'taking a position in the hope of profit from a price move, accepting the risk that the prediction may be wrong.' },
        { term: 'risk', meaning: 'the possibility that the outcome will be worse than expected, including the loss of capital on a speculative position.' },
      ] },
    ],
    quiz: [
      {
        q: 'What most clearly distinguishes speculation from hedging?',
        options: [
          { text: 'Speculation takes risk on purpose in the hope of profit, while hedging is used to reduce an existing exposure.', correct: true, why: 'The same instruments can be used for both, but the purpose is different: speculation creates or takes risk; hedging offsets it.' },
          { text: 'Speculation always uses the spot market, while hedging always uses derivatives.', correct: false, why: 'Both can use derivatives or spot markets; the distinction is the purpose, not the venue.' },
          { text: 'Speculation is risk-free, while hedging is risky.', correct: false, why: 'Speculation is risky by nature; hedging is about managing risk, not eliminating it entirely.' },
        ],
      },
    ],
    takeaway: 'Speculation is taking risk on purpose for the hope of profit. The same instruments can be used for hedging or speculation; what differs is whether you are trying to reduce an exposure or create one.',
  },

  'l4-067': {
    id: 'l4-067',
    title: 'Options',
    subtitle: 'A right, not an obligation — and that one word changes everything.',
    minutes: 7,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "An option is a contract that gives the buyer the right, but not the obligation, to buy or sell an underlying at a set price on or before a set date. That right has a price, called the premium. Because the buyer can walk away, the option changes the risk profile: the buyer’s loss is limited to the premium paid, while the seller of the option takes on a different kind of risk in return for collecting that premium." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'The two basic option jobs' },
      { kind: 'list', items: [
        'Call: the right to buy the underlying at the strike price.',
        'Put: the right to sell the underlying at the strike price.',
        'Long options give the holder a right; short options create an obligation if the holder exercises.',
        'The premium reflects the value of that right, and it depends on the strike, the time left, the volatility, and the underlying price.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Right versus obligation is the whole game', text: "A lot of confusion comes from forgetting that an option buyer can choose not to exercise. That is what makes the loss limited on the buy side and the risk profile different on the sell side. If you treat an option like a futures contract, you are missing the central feature: choice." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'Buying a call as a right', text: "If you buy a call with a strike of ₹100 and the underlying rises to ₹130, the right to buy at ₹100 is valuable. If the price stays below ₹100, you can let the option expire and your loss is limited to the premium. The same move in a futures contract would not give you the option to walk away." },
      { kind: 'terms', items: [
        { term: 'option', meaning: 'a contract giving the buyer the right, but not the obligation, to buy or sell an underlying at a strike price by a specified date, in return for paying a premium.' },
        { term: 'premium', meaning: 'the price paid for an option, representing the value of the right it confers.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the central feature that distinguishes an option from many other derivatives?',
        options: [
          { text: 'The buyer has the right, not the obligation, to exercise; that choice limits the buyer’s loss to the premium.', correct: true, why: 'The right-without-obligation feature is what makes options different in risk profile from contracts that force a transaction.' },
          { text: 'Options are always settled in cash and can never involve the underlying.', correct: false, why: 'Options can have various settlement methods; the central distinction is the right, not the settlement format.' },
          { text: 'Options guarantee a profit to the buyer if the market moves.', correct: false, why: 'An option can still lose value, including the entire premium, if the move does not go the buyer’s way.' },
        ],
      },
    ],
    takeaway: 'An option is a right without an obligation, paid for by a premium. That single feature changes the risk profile: the buyer’s loss is limited, and the seller’s risk is a different shape entirely.',
  },

  'l4-068': {
    id: 'l4-068',
    title: 'Calls',
    subtitle: 'The right to buy at a set price, used when you expect a rise.',
    minutes: 6,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "A call option gives the holder the right to buy the underlying at the strike price. People usually buy calls when they expect the price to rise, though calls can also be used in more advanced strategies. The buyer profits if the underlying ends above the strike by enough to cover the premium; otherwise the call can expire worthless and the buyer loses the premium." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'What a call pays off' },
      { kind: 'list', items: [
        'If the underlying finishes above the strike, the call gains value because the right to buy at the lower strike is valuable.',
        'If the underlying stays below the strike, the call may expire worthless or near worthless.',
        'The buyer’s loss is limited to the premium paid.',
        'The seller of a call takes on the risk of having to sell at the strike if assigned.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A call is not a guarantee of profit', text: "Buying a call does not mean you profit whenever the market rises a little. The price has to rise enough to exceed the strike plus the premium you paid, or at least enough to make the option worth more than you paid. Small moves can leave the call disappointing or worthless." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'A call payoff idea', text: "If you pay a premium for a call with a strike of ₹100, and the underlying ends at ₹140, the call has value because you could buy at ₹100 and capture the difference. If it ends at ₹105, the call is worth less, because the move above the strike is small relative to the premium. A call rewards a move large enough to overcome its cost." },
      { kind: 'terms', items: [
        { term: 'call option', meaning: 'an option giving the holder the right to buy the underlying at the strike price, usually used when expecting a price rise.' },
        { term: 'strike price', meaning: 'the price at which the option holder can buy or sell the underlying, as specified in the option contract.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the basic property of a call option?',
        options: [
          { text: 'It gives the holder the right to buy the underlying at the strike price, and it gains value when the underlying rises above that strike by enough to cover the premium.', correct: true, why: 'A call is a right to buy at a set price, so its value increases when the underlying price is favourable relative to the strike and the premium.' },
          { text: 'It gives the holder the right to sell the underlying at the strike price.', correct: false, why: 'That is a put, not a call; a call is a right to buy.' },
          { text: 'It guarantees a profit whenever the underlying rises at all.', correct: false, why: 'A call can still lose value or expire worthless if the rise is too small relative to the premium and strike.' },
        ],
      },
    ],
    takeaway: 'A call is the right to buy at a set price, and it rewards a rise large enough to justify its premium. It is not a sure thing; the payoff depends on how far and how fast the underlying moves.',
  },

  'l4-069': {
    id: 'l4-069',
    title: 'Puts',
    subtitle: 'The right to sell at a set price, used when you expect a fall.',
    minutes: 6,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "A put option gives the holder the right to sell the underlying at the strike price. People often buy puts when they expect the price to fall, or when they want to protect a long position from a drop. The buyer profits if the underlying ends below the strike by enough to cover the premium; otherwise the put can expire worthless and the buyer loses the premium." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'What a put pays off' },
      { kind: 'list', items: [
        'If the underlying finishes below the strike, the put gains value because the right to sell at the higher strike is valuable.',
        'If the underlying stays above the strike, the put may expire worthless or near worthless.',
        'The buyer’s loss is limited to the premium paid.',
        'The seller of a put takes on the risk of having to buy at the strike if assigned.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A put is not a magic downside switch', text: "Buying a put does not make every drop profitable. The price has to fall enough to exceed the strike minus the premium, or at least enough to make the option worth more than you paid. A modest dip can leave a put underwhelming." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'A put payoff idea', text: "If you pay a premium for a put with a strike of ₹100, and the underlying ends at ₹70, the put has value because you can sell at ₹100 in the contract terms. If it ends at ₹95, the put is worth less, because the move below the strike is small relative to the premium. A put rewards a fall large enough to overcome its cost." },
      { kind: 'terms', items: [
        { term: 'put option', meaning: 'an option giving the holder the right to sell the underlying at the strike price, usually used when expecting a price fall or seeking protection.' },
        { term: 'insurance-like payoff', meaning: 'a payoff that limits loss in a down move, like a put that can offset some of the decline in a portfolio.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the basic property of a put option?',
        options: [
          { text: 'It gives the holder the right to sell the underlying at the strike price, and it gains value when the underlying falls below that strike by enough to cover the premium.', correct: true, why: 'A put is a right to sell at a set price, so it becomes more valuable when the underlying price drops below the strike.' },
          { text: 'It gives the holder the right to buy the underlying at the strike price.', correct: false, why: 'That is a call, not a put; a put is a right to sell.' },
          { text: 'It guarantees a profit whenever the underlying falls at all.', correct: false, why: 'A put can still lose value if the fall is too small relative to the premium, so a small drop is not automatically a win.' },
        ],
      },
    ],
    takeaway: 'A put is the right to sell at a set price, and it rewards a drop large enough to justify its premium. It is often used for protection or a bearish view, but it still depends on the size of the move.',
  },

  'l4-070': {
    id: 'l4-070',
    title: 'Strike Price',
    subtitle: 'The price written into the option that shapes everything else.',
    minutes: 5,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "The strike price is the price at which the option holder can buy or sell the underlying. It is the reference point that determines whether the option is in the money, at the money, or out of the money. The strike is not just a number; it is the hinge on which the option’s value turns, together with the underlying price and the premium." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'How the strike matters' },
      { kind: 'list', items: [
        'A call is more valuable when the strike is lower relative to the underlying price; a put is more valuable when the strike is higher.',
        'The strike sets the breakeven relationship between the underlying move and the premium paid.',
        'Different strikes give very different payoff shapes even for the same underlying and expiry.',
        'Choosing a strike is a choice about how much movement you need to make the option worth it.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'The strike chooses your threshold', text: "When you pick a strike, you are choosing how far the underlying must move before the option starts to do its job. A strike closer to the current price is usually more expensive but needs less movement; a strike further away is cheaper but needs a bigger move. The choice is a trade between probability and payoff." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'Strike selection as a trade-off', text: "A call with a strike near the current price might cost more but has a better chance of gaining value if the market rises modestly. A call with a strike far above the current price might be cheaper but only pays off if the market rallies a lot. The strike is the lever that shapes both cost and required move." },
      { kind: 'terms', items: [
        { term: 'strike price', meaning: 'the price specified in an option contract at which the holder can buy or sell the underlying.' },
        { term: 'in the money', meaning: 'an option that already has intrinsic value because the underlying price is favourable relative to the strike.' },
      ] },
    ],
    quiz: [
      {
        q: 'What does the strike price primarily determine for an option?',
        options: [
          { text: 'The price at which the underlying can be bought or sold, which shapes whether the option is in the money and how much movement is needed to make it valuable.', correct: true, why: 'The strike is the reference price in the contract, so it decides the option’s relationship to the underlying and its payoff shape.' },
          { text: 'Only the expiry date of the option.', correct: false, why: 'Expiry is a separate feature; the strike sets the price threshold, not the time limit.' },
          { text: 'The exact premium the option will always have, regardless of the underlying price.', correct: false, why: 'The premium depends on many factors, including the underlying price, time, and volatility, not just the strike alone.' },
        ],
      },
    ],
    takeaway: 'The strike price is the price written into the option that defines the buy or sell reference. It shapes whether the option is valuable now, how much movement is needed, and what the payoff looks like.',
  },

  'l4-071': {
    id: 'l4-071',
    title: 'Premium',
    subtitle: 'The price of the right — and the first thing an option costs.',
    minutes: 6,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "The premium is what the option buyer pays to the seller for the right the option confers. It is the upfront cost of the position and the maximum loss for the buyer if the option expires worthless. The premium is not arbitrary; it reflects the strike, the underlying price, the time left, the volatility, and the interest environment. In other words, it is a price for a probability-weighted promise." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'What drives the premium' },
      { kind: 'list', items: [
        'The underlying price relative to the strike, which affects intrinsic value.',
        'Time remaining, because more time generally means more chance for the option to become valuable.',
        'Volatility, because larger expected swings increase the chance of a favourable move.',
        'The risk-free rate and other market conditions, which also influence option pricing.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A higher premium is not automatically a better trade', text: "Paying more for an option does not by itself make the trade smarter. A high premium can mean the option already has a lot of value baked in, which may limit the upside relative to the cost. The right premium is the one that fits the trade, not the one that sounds most expensive or cheapest." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'Premium as price of a right', text: "If you buy a call for ₹10, that is the most you can lose if the option expires worthless. If the underlying rallies enough, the option can become worth far more than ₹10. The premium is the entry ticket, and the trade is whether that ticket is worth the chance it buys." },
      { kind: 'terms', items: [
        { term: 'premium', meaning: 'the price paid for an option, representing the value of the right it gives the buyer.' },
        { term: 'intrinsic value', meaning: 'the part of an option’s value that comes from the underlying price being favourable relative to the strike.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the premium in an options trade?',
        options: [
          { text: 'The price paid for the option, which is the upfront cost and the maximum loss for the buyer if the option expires worthless.', correct: true, why: 'The premium is the cost of the right; for the buyer, losing the premium is the worst-case if the option finishes worthless.' },
          { text: 'The profit the option will definitely make.', correct: false, why: 'The premium is a cost, not a guarantee of profit; the option can still lose value.' },
          { text: 'The strike price written into the contract.', correct: false, why: 'The premium and the strike are different things; the strike is the reference price, the premium is the price of the right to use it.' },
        ],
      },
    ],
    takeaway: 'The premium is the price of the option. It reflects the chance and value of the right, and for the buyer it is the cost and the maximum loss if the option expires worthless.',
  },

  'l4-072': {
    id: 'l4-072',
    title: 'Intrinsic Value',
    subtitle: 'The value an option already has if it is in the money.',
    minutes: 5,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "Intrinsic value is the part of an option’s value that comes from the underlying price already being favourable relative to the strike. A call with the underlying above the strike has intrinsic value; a put with the underlying below the strike has intrinsic value. If the option is out of the money, its intrinsic value is zero or near zero, and any remaining value is from time and other factors." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'Intrinsic value in practice' },
      { kind: 'list', items: [
        'It is the minimum value an in-the-money option would have if exercised immediately, ignoring time value.',
        'It grows as the underlying moves further into the money.',
        'It helps explain why some options already have value even before the expiry date.',
        'It is one component of the premium; the other main component is time value.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Intrinsic value is the floor, not the whole house', text: "When an option is in the money, intrinsic value is the part of the price you can point to and say ‘this is already real’. But the option can be worth more than that because of time value. Do not confuse the floor with the ceiling." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'Reading intrinsic value', text: "If a call has a strike of ₹100 and the underlying is ₹120, the intrinsic value is roughly ₹20, because you could theoretically buy at ₹100 and sell at ₹120. If the option is trading for ₹25, the extra ₹5 is time value and other factors, not intrinsic. The split matters when you judge what you are paying for." },
      { kind: 'terms', items: [
        { term: 'intrinsic value', meaning: 'the portion of an option’s value that comes from the underlying price being favourable relative to the strike, representing the value if exercised now.' },
        { term: 'time value', meaning: 'the portion of an option’s premium beyond intrinsic value, reflecting the chance that the option may become more valuable before expiry.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is intrinsic value in an option?',
        options: [
          { text: 'The part of the option’s value that comes from the underlying price already being favourable relative to the strike, representing the value if exercised now.', correct: true, why: 'Intrinsic value is the in-the-money portion of an option, the value already locked in by the relationship between strike and underlying.' },
          { text: 'The total premium paid for the option, including all time value.', correct: false, why: 'Total premium can include time value; intrinsic value is only the in-the-money part.' },
          { text: 'The amount the option will gain after expiry.', correct: false, why: 'Intrinsic value is about current in-the-money value, not future gains after expiry.' },
        ],
      },
    ],
    takeaway: 'Intrinsic value is the in-the-money part of an option — the value already there from the underlying price relative to the strike. It is the floor beneath the premium, with time value sitting on top.',
  },

  'l4-073': {
    id: 'l4-073',
    title: 'Time Value',
    subtitle: 'What you pay for the chance that the option will become more valuable.',
    minutes: 5,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "Time value is the part of an option’s premium beyond intrinsic value. It reflects the possibility that the underlying will move in a way that makes the option more valuable before expiry. More time usually means more time value, because there is more opportunity for the market to move. As expiry approaches, time value tends to erode, and the option’s price increasingly reflects intrinsic value alone." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'Why time value matters' },
      { kind: 'list', items: [
        'It is what you pay for the chance, not the certainty.',
        'It can make an out-of-the-money option worth something even though it has no intrinsic value yet.',
        'It erodes as time passes, which is why options can lose value even if the underlying does not move.',
        'It is sensitive to volatility, because bigger expected swings increase the chance of a favourable outcome.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Time value can melt away', text: "An option can hurt you not because the market went the wrong way, but because time passed and the option’s chance premium evaporated. That is one of the central risks of buying options: you can be right about direction and still lose if the move does not happen soon enough." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'Time value erosion', text: "Suppose you buy an option for ₹12 when intrinsic value is ₹2. The remaining ₹10 is time value and other factors. If the underlying stays where it is and time passes, that ₹10 can shrink toward zero. The option’s fate depends on both direction and timing, which is why time value is such an important part of the price." },
      { kind: 'terms', items: [
        { term: 'time value', meaning: 'the part of an option’s premium beyond intrinsic value, reflecting the remaining chance that the option may become more valuable before expiry.' },
        { term: 'time decay', meaning: 'the erosion of an option’s time value as expiry approaches, all else equal.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is time value in an option?',
        options: [
          { text: 'The part of the premium beyond intrinsic value, reflecting the chance that the option may become more valuable before expiry.', correct: true, why: 'Time value is the premium for potential future movement, not for value already present.' },
          { text: 'The same thing as intrinsic value.', correct: false, why: 'Time value and intrinsic value are different components; intrinsic value is the in-the-money part, time value is the rest.' },
          { text: 'A guaranteed profit that grows every day.', correct: false, why: 'Time value can shrink as expiry approaches; it is not a guaranteed daily profit.' },
        ],
      },
    ],
    takeaway: 'Time value is the premium you pay for the chance that an option will become more valuable before expiry. It can erode as time passes, which is why buying options is a bet on both direction and timing.',
  },

  'l4-074': {
    id: 'l4-074',
    title: 'Option Buyers Vs Sellers',
    subtitle: 'The same contract looks very different depending on which side you are on.',
    minutes: 6,
    blocks: [
      SCENE_CP,
      SIM_OPTS,
      { kind: 'p', text: "Buying an option and selling an option are not two versions of the same trade; they are two different risk profiles. The buyer pays the premium and gets a right with limited downside. The seller collects the premium and takes on the obligation if the option is exercised, with a different and often larger risk shape. Confusing the two is one of the most common beginner mistakes in options." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'h', text: 'The two sides compared' },
      { kind: 'list', items: [
        'Buyer: pays premium, has the right, and usually loses at most the premium if the option expires worthless.',
        'Seller: collects premium, may face an obligation if the buyer exercises, and can face larger losses depending on the position.',
        'The buyer wants the option to gain enough value to justify the premium.',
        'The seller wants the option to lose value or expire worthless.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Selling options is not the mirror image of buying them', text: "Selling an option can seem attractive because you collect premium, but it can also bring obligations and larger risk than the premium collected. The buyer’s loss is capped by the premium; the seller’s loss is not, unless the position is structured to cap it. Never assume the sell side is just ‘the buy side in reverse’." },
      SCENE_CP,
      SIM_OPTS,
      { kind: 'example', title: 'Buying versus selling a call', text: "A buyer of a call risks the premium and hopes the underlying rises enough to make the option valuable. A seller of the same call collects that premium upfront but may be assigned to sell at the strike if the underlying rises a lot. The buyer’s downside is defined; the seller’s downside can be much larger if the move is strong." },
      { kind: 'terms', items: [
        { term: 'option buyer', meaning: 'the person who pays the premium for the right conferred by the option, with limited downside if the option expires worthless.' },
        { term: 'option seller', meaning: 'the person who collects the premium and may face the obligation under the option if it is exercised.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the key difference between an option buyer and an option seller?',
        options: [
          { text: 'The buyer pays the premium for a right with limited downside, while the seller collects the premium and may face an obligation with a different and often larger risk shape.', correct: true, why: 'The two sides have different risk profiles: the buyer’s loss is usually limited to the premium, while the seller’s obligation and loss potential can be larger.' },
          { text: 'They face identical risk, so the side does not matter.', correct: false, why: 'The side matters a lot; buyer and seller have different rights, obligations, and downside.' },
          { text: 'The seller always loses and the buyer always wins.', correct: false, why: 'Neither side always wins; the outcome depends on the market and the terms of the option.' },
        ],
      },
    ],
    takeaway: 'Option buyers pay for a right with limited downside; option sellers collect premium and take on obligation and a different risk profile. The two sides are not mirror images — know which one you are on.',
  },

  'l4-075': {
    id: 'l4-075',
    title: 'Derivatives As Risk-Management Tools',
    subtitle: 'Instruments that can transfer risk, not just create it.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Derivatives get a bad reputation because they are used for speculation, but their original usefulness is risk management. A futures contract can lock in a price for a future sale or purchase. An option can protect a position from a bad move while leaving some upside. A swap or other derivative can shift interest-rate or currency exposure. Used well, derivatives are tools for moving risk from where it is unwanted to where it is more acceptable." },
      SCENE_DERIV,
      { kind: 'h', text: 'When derivatives are useful for risk management' },
      { kind: 'list', items: [
        'When you already have an exposure and want to reduce its uncertainty.',
        'When you want to lock in a price or protect a downside without selling the underlying.',
        'When you want to reshape a risk rather than take a directional bet.',
        'When the cost of the hedge is acceptable relative to the risk it addresses.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A hedge can be a bad hedge if it is done badly', text: "Not every derivative position is a hedge. A hedge is a risk-management action with a clear exposure in mind. A derivative bet disguised as hedging is still a bet. The test is simple: what risk are you reducing, and is the hedge actually reducing it, or just adding another position?" },
      SCENE_DERIV,
      { kind: 'example', title: 'Risk management in action', text: "A business expecting to receive payment in a foreign currency may use a derivative to reduce the risk of a bad exchange-rate move before the payment arrives. The derivative does not guarantee the best outcome; it reduces the range of bad outcomes for that exposure. That is the risk-management use: not prediction, but protection." },
      { kind: 'terms', items: [
        { term: 'risk management', meaning: 'the practice of identifying, understanding, and reducing or transferring risks that matter to a business or portfolio.' },
        { term: 'hedge ratio', meaning: 'the proportion of an exposure that is offset by a derivative position, often used to tailor the amount of protection.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most accurate way to use derivatives for risk management?',
        options: [
          { text: 'To offset or reshape a specific existing exposure, with a clear understanding of the risk being reduced and the cost of the hedge.', correct: true, why: 'Risk-management derivatives are about an existing exposure, not about making a directional bet dressed up as protection.' },
          { text: 'To eliminate every risk in a business or portfolio by using derivatives for everything.', correct: false, why: 'Derivatives can reduce specific risks, but they cannot eliminate all risk, and using them for everything can create new risks.' },
          { text: 'To make a speculative bet and call it a hedge for appearance.', correct: false, why: 'A speculative bet is not a hedge; calling it one does not change what it does.' },
        ],
      },
    ],
    takeaway: 'Derivatives can be risk-management tools when they offset or reshape a real exposure. The key is clarity: know the exposure you are reducing and do not confuse a hedge with a disguised bet.',
  },

  'l4-076': {
    id: 'l4-076',
    title: 'Commodity Futures',
    subtitle: 'Locking in prices for physical goods and inputs.',
    minutes: 6,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Commodity futures are futures contracts on physical goods such as metals, energy products, or agricultural commodities. They are used by producers, consumers, and traders. For a business that buys or sells a commodity, the contract can reduce the risk of price swings; for a trader, it can be a way to take a view on the commodity market." },
      SCENE_DERIV,
      { kind: 'h', text: 'Why commodity futures matter' },
      { kind: 'list', items: [
        'They help businesses manage the risk of input-cost swings or sales-price swings.',
        'They let the market price commodities in a forward-looking way.',
        'They can be used to hedge real physical exposure, not just to speculate.',
        'They carry storage, delivery, and roll considerations that do not exist in the same way for financial futures.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Commodity futures are not just a price chart', text: "A commodity futures price reflects expectations, storage costs, seasonality, and the practical realities of the physical market. Thinking about a commodity only as a line on a chart misses the economics that shape the contract. The physical side matters." },
      SCENE_DERIV,
      { kind: 'example', title: 'A commodity hedge idea', text: "An airline worried about fuel prices may use energy futures or similar instruments to reduce exposure to price spikes. A miner worried about metal prices may use metal futures to lock in a forward price. In each case, the futures contract is a tool for managing real commodity risk, not just an abstract bet." },
      { kind: 'terms', items: [
        { term: 'commodity futures', meaning: 'futures contracts on physical commodities such as metals, energy, or agricultural products, used for hedging or speculation.' },
        { term: 'physical delivery', meaning: 'settlement of a contract by actual delivery of the commodity, as opposed to cash settlement.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main practical use of commodity futures?',
        options: [
          { text: 'To manage price risk for businesses that buy or sell commodities, and to let the market price commodities forward-looking.', correct: true, why: 'Commodity futures are useful both for hedging real commodity exposure and for forming forward prices in the market.' },
          { text: 'Only to speculate on the chart of a commodity, with no connection to the physical market.', correct: false, why: 'Commodity futures are linked to the physical market and are often used for hedging, not only for speculation.' },
          { text: 'To guarantee that a commodity will never change price.', correct: false, why: 'Futures do not freeze prices forever; they lock in a price for a future transaction, with all the trade-offs that implies.' },
        ],
      },
    ],
    takeaway: 'Commodity futures help businesses manage the risk of physical goods and inputs, and they let the market price commodities forward. They are practical tools, not just charts.',
  },

  'l4-077': {
    id: 'l4-077',
    title: 'Index Futures',
    subtitle: 'Trading a whole market in one contract.',
    minutes: 5,
    blocks: [
      SCENE_DERIV,
      { kind: 'p', text: "Index futures are futures contracts on a market index, such as a broad equity index. They let traders and institutions take a position on the overall market direction or use the contract to hedge a portfolio. Because one contract represents a basket of stocks, index futures are often used as a compact way to express a market view or to manage market risk." },
      SCENE_DERIV,
      { kind: 'h', text: 'What index futures are used for' },
      { kind: 'list', items: [
        'To take a directional view on the market without picking individual stocks.',
        'To hedge a portfolio against broad market moves.',
        'To gain or reduce market exposure efficiently in a single contract.',
        'To trade around key events or index moves with a standardised instrument.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Index futures track the index, but they are not the index', text: "An index future is tied to the index, but it has its own contract, expiry, margin, and settlement. It can move very closely with the index, but it is not the same thing as owning the index. The contract mechanics matter, especially around expiry and in times of stress." },
      SCENE_DERIV,
      { kind: 'example', title: 'A market-risk hedge idea', text: "An investor with a long equity portfolio may use an index future to offset part of the portfolio’s market exposure if they are worried about a broad decline. The hedge may not be perfect, but it can reduce the portfolio’s sensitivity to a market move. That is one of the classic uses of index futures." },
      { kind: 'terms', items: [
        { term: 'index futures', meaning: 'futures contracts whose underlying is a market index, used to take a view on or hedge exposure to the broad market.' },
        { term: 'market exposure', meaning: 'the degree to which a portfolio or position is affected by broad market moves.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is a common use of index futures?',
        options: [
          { text: 'To take a broad market view or hedge a portfolio’s market exposure in a single contract.', correct: true, why: 'Index futures represent a basket through an index, so they are a compact way to express or hedge a market-level view.' },
          { text: 'To pick the single best stock in the market.', correct: false, why: 'Index futures track a basket, not a single stock; they are not a stock-selection tool.' },
          { text: 'To earn interest from a bank deposit.', correct: false, why: 'Index futures are market-linked derivatives, not deposit instruments.' },
        ],
      },
    ],
    takeaway: 'Index futures let traders and institutions take a market view or hedge broad market risk in one contract. They track an index, but they are still a contract with its own mechanics.',
  },

  'l4-078': {
    id: 'l4-078',
    title: 'Forex',
    subtitle: 'The market where currencies are traded against each other.',
    minutes: 6,
    blocks: [
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'p', text: "Forex, or foreign exchange, is the market where currencies are exchanged for one another. It is one of the largest and most continuous markets in the world, and it touches almost every business that crosses borders: importers, exporters, travellers, investors, and governments. For an Indian investor, forex matters most when money needs to move across currencies or when foreign assets are held in rupee terms." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'h', text: 'Why forex matters to ordinary finance' },
      { kind: 'list', items: [
        'It sets the price of one currency in terms of another, which affects imports, exports, travel, and foreign investments.',
        'It can change the rupee value of a foreign asset even if the asset itself does nothing.',
        'It can create gains and losses that have nothing to do with the underlying business or investment.',
        'It is a continuous, globally linked market, so prices can move for many reasons at once.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Currency moves can quietly help or hurt', text: "A foreign investment can look like a great winner in its own currency and still disappoint in rupee terms if the rupee strengthens. The same position can look worse in foreign-currency terms but better in rupee terms if the rupee weakens. Currency is often the hidden variable in cross-border investing." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'example', title: 'Currency as a second dimension', text: "If you hold a foreign asset, there are two moves to think about: the asset’s own performance and the currency move between that asset’s currency and the rupee. You can have a strong asset and a weak rupee outcome, or a modest asset and a strong rupee outcome. Forex is the second dimension that changes the final answer." },
      { kind: 'terms', items: [
        { term: 'forex', meaning: 'foreign exchange: the market in which currencies are traded against each other, setting exchange rates between them.' },
        { term: 'exchange rate', meaning: 'the price of one currency expressed in terms of another, which determines how much of one currency you get for another.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why does forex matter for an Indian investor with foreign exposure?',
        options: [
          { text: 'Because the exchange rate between the rupee and the foreign currency can change the rupee value of the investment even if the asset itself does not move.', correct: true, why: 'Currency is a separate source of gain or loss in cross-border holdings, and it can dominate the final rupee outcome.' },
          { text: 'Because forex only matters for travellers and has no effect on investments.', correct: false, why: 'Forex affects any cross-border financial position, including investments, not just travel.' },
          { text: 'Because foreign assets are always priced in rupees, so currency is irrelevant.', correct: false, why: 'Many foreign assets are priced in another currency, so the exchange rate matters when you convert back to rupees.' },
        ],
      },
    ],
    takeaway: 'Forex is where currencies trade, and it sets the exchange rate that can quietly change the rupee value of any cross-border investment. Always think in two dimensions: the asset and the currency.',
  },

  'l4-079': {
    id: 'l4-079',
    title: 'Exchange Rates',
    subtitle: 'How one currency is priced in another — and why it moves.',
    minutes: 6,
    blocks: [
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'p', text: "An exchange rate is the price of one currency in terms of another. It can be quoted directly or indirectly, and it moves for many reasons: interest-rate differences, inflation expectations, trade balances, capital flows, policy actions, and market sentiment. The important thing for a practical finance student is not to memorise every driver, but to understand that the rate is a price, not a fixed number." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'h', text: 'What makes exchange rates move' },
      { kind: 'list', items: [
        'Interest-rate differences between countries, which can attract or repel capital.',
        'Inflation differences, which affect purchasing power and competitiveness over time.',
        'Trade and current-account flows, which create demand and supply for currencies.',
        'Policy actions and intervention, which can influence the rate directly or indirectly.',
        'Market sentiment and safe-haven flows, which can move rates quickly.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not treat the exchange rate as a forecast device', text: "Exchange rates can be mean-reverting for long stretches and wildly unpredictable for short ones. Using today’s rate as if it were a sure guide to the future is a common mistake. The rate is a current price reflecting a complex balance of forces, not a promise." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'example', title: 'A rate move in plain terms', text: "If the rupee weakens against the dollar, the same dollar-denominated asset is worth more in rupee terms. If the rupee strengthens, it is worth less. The asset may have done nothing, but the rate changed the rupee answer. That is why exchange-rate moves matter even when the underlying asset is calm." },
      { kind: 'terms', items: [
        { term: 'exchange rate', meaning: 'the price of one currency in terms of another, showing how much of one currency is needed to buy a unit of another.' },
        { term: 'appreciation', meaning: 'a rise in the value of one currency relative to another, so it buys more of the other currency than before.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the best way to think about an exchange rate?',
        options: [
          { text: 'As a price of one currency in terms of another that moves for many reasons, and not as a fixed number or a reliable short-term forecast.', correct: true, why: 'Exchange rates are prices shaped by many forces; they can be useful as a current market reference, but not as a guaranteed guide to the future.' },
          { text: 'As a permanent number set by the government and never changed.', correct: false, why: 'Exchange rates move; even where managed, they are not permanently fixed in every case.' },
          { text: 'As a number that matters only for banks and never for individuals.', correct: false, why: 'Exchange rates affect anyone who holds, earns, or spends in more than one currency.' },
        ],
      },
    ],
    takeaway: 'An exchange rate is the price of one currency in another. It moves for many reasons, and it can make cross-border holdings better or worse even when the asset itself is unchanged.',
  },

  'l4-080': {
    id: 'l4-080',
    title: 'INR/USD',
    subtitle: 'The rupee-dollar rate as a familiar example of currency risk.',
    minutes: 5,
    blocks: [
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'p', text: "INR/USD is the rupee-dollar exchange rate, one of the most watched currency pairs for an Indian audience. The rupee is the domestic currency and the dollar is the dominant international currency for trade, finance, and many global asset prices. Because so much cross-border activity is priced in dollars, the rupee-dollar rate is a practical place to understand how currency moves affect Indian money." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'h', text: 'Why rupee-dollar matters' },
      { kind: 'list', items: [
        'Many global assets, commodities, and business costs are influenced by the dollar.',
        'A weakening rupee can raise the rupee cost of dollar-priced imports and foreign assets.',
        'A strengthening rupee can reduce the rupee value of dollar-denominated gains.',
        'The pair is a useful example for understanding currency risk more broadly.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A stronger or weaker rupee is not inherently good or bad', text: "People often say a stronger rupee is ‘good’ or a weaker rupee is ‘bad’. The truth is more nuanced. A weaker rupee can be painful for importers and travellers but helpful for rupee-based holders of foreign assets. A stronger rupee can be good for importers and bad for exporters. The direction matters depending on what you hold." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'example', title: 'Two sides of the same move', text: "If the rupee weakens, a family planning an overseas trip faces higher rupee costs, while an Indian investor holding a dollar asset sees that asset worth more in rupees. The same rate move cuts in different directions for different people. That is the practical lesson of watching INR/USD." },
      { kind: 'terms', items: [
        { term: 'INR/USD', meaning: 'the exchange rate between the Indian rupee and the US dollar, a commonly watched pair for Indian currency risk.' },
        { term: 'currency pair', meaning: 'two currencies quoted against each other, showing how much of one is needed to buy the other.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to think about INR/USD?',
        options: [
          { text: 'As a common example of currency risk, where rupee weakness or strength helps some holders and hurts others depending on what they own.', correct: true, why: 'The rupee-dollar rate is useful as a concrete example of how currency moves cut both ways, not as a simple good-or-bad indicator.' },
          { text: 'As a number that is always good when the rupee is stronger and always bad when it is weaker.', correct: false, why: 'The effect depends on your exposure; a stronger rupee is not universally good and a weaker rupee is not universally bad.' },
          { text: 'As irrelevant to Indian investors because it only matters to banks.', correct: false, why: 'INR/USD affects importers, exporters, travellers, and anyone with foreign-currency exposure.' },
        ],
      },
    ],
    takeaway: 'INR/USD is a practical rupee-dollar rate to watch because it shows how currency moves affect imports, exports, travel, and foreign assets. A weaker rupee is not automatically good or bad; it depends on your exposure.',
  },

  'l4-081': {
    id: 'l4-081',
    title: 'Currency Risk',
    subtitle: 'The risk that exchange-rate moves change the value of what you hold.',
    minutes: 6,
    blocks: [
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'p', text: "Currency risk is the risk that an exchange-rate movement changes the value of an asset or cash flow expressed in another currency. If you hold a foreign asset, receive foreign income, or have a foreign liability, currency risk is a real part of the return. It can turn a good investment into a mediocre one in home-currency terms, or it can add a bonus on top of the underlying performance." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'h', text: 'Where currency risk shows up' },
      { kind: 'list', items: [
        'Direct foreign investments and foreign funds held in rupee terms.',
        'Incomes or liabilities denominated in a foreign currency.',
        'Businesses that earn or spend in more than one currency.',
        'Travel, education, and other personal costs that depend on another currency.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Currency risk can be the dominant risk', text: "For a foreign asset held in rupee terms, the currency move can be as important as, or more important than, the asset’s own performance over a period. Ignoring currency risk because the asset looks solid is a mistake. The final rupee outcome is the combination of the asset and the rate." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'example', title: 'Currency risk in practice', text: "If you hold a US stock and the rupee weakens against the dollar, your rupee return is boosted by the currency move, even if the stock is only modestly up. If the rupee strengthens, the same stock may look less impressive in rupees. The stock did its thing; the currency did something else; the two combine into your final result." },
      { kind: 'terms', items: [
        { term: 'currency risk', meaning: 'the risk that exchange-rate movements change the value of a foreign asset, cash flow, or liability when measured in the home currency.' },
        { term: 'home currency', meaning: 'the currency in which you mostly live, spend, and report your finances; for an Indian investor, usually the rupee.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is currency risk in simple terms?',
        options: [
          { text: 'The risk that exchange-rate moves change the home-currency value of a foreign asset, income, or liability.', correct: true, why: 'Currency risk is the effect of rate moves on the value of anything expressed in another currency when you measure it in your own currency.' },
          { text: 'The risk that a foreign asset will stop existing.', correct: false, why: 'Currency risk is about exchange rates, not about the asset disappearing.' },
          { text: 'Only the risk that a bank will fail to process a foreign transfer.', correct: false, why: 'Currency risk is about price movement of the rate, not about payment processing failures.' },
        ],
      },
    ],
    takeaway: 'Currency risk is the risk that exchange-rate moves change the value of what you hold in another currency. For cross-border holdings, the rate can be just as important as the asset itself.',
  },

  'l4-082': {
    id: 'l4-082',
    title: 'International Transactions',
    subtitle: 'Moving money across borders is more than a swipe.',
    minutes: 6,
    blocks: [
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'p', text: "International transactions involve more than the purchase itself. There is the exchange rate, the timing, the fees, the regulatory rules, the tax implications, and the risk that the rate changes between the decision and the settlement. For an Indian individual or business, the practical lesson is to treat cross-border payments as multi-layered decisions, not as simple transfers." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'h', text: 'What makes international transactions more complex' },
      { kind: 'list', items: [
        'Exchange-rate timing: the rate can move between the quote and the settlement.',
        'Fees and spreads: conversion costs and intermediary charges can add up.',
        'Regulations and limits: cross-border rules can affect how much can be sent, how, and for what purpose.',
        'Taxes and reporting: cross-border flows can have tax and documentation consequences.',
        'Settlement risk: the time lag between commitment and completion can create exposure.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Plan for the rate and the cost, not just the price', text: "When you pay or receive money across borders, the headline price is only one part. The exchange rate, the conversion cost, and the timing all matter. A cheaper-looking payment can be more expensive once conversion and fees are included, and a rate that moves in the meantime can change the final rupee cost." },
      SCENE_CUR,
      SIM_CURRENCY,
      { kind: 'example', title: 'A cross-border purchase', text: "If you buy something priced in dollars and pay later, the rupee cost may change between the day you see the price and the day you actually pay, because the rupee-dollar rate moves. Add the conversion cost and any intermediary fees, and the final rupee outlay may be quite different from the number you first saw. That is why international transactions need a wider lens." },
      { kind: 'terms', items: [
        { term: 'international transaction', meaning: 'a payment or trade that crosses borders and involves more than one currency, with exchange-rate, fee, regulatory, and settlement considerations.' },
        { term: 'settlement', meaning: 'the completion of a transaction, when the money or asset finally changes hands, which may happen later than the agreed price.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important thing to remember about international transactions?',
        options: [
          { text: 'They involve exchange-rate timing, fees, regulations, and settlement, so the final cost or value can differ from the headline price.', correct: true, why: 'Cross-border transactions are multi-layered; exchange rate, cost, timing, and rules all affect the real outcome.' },
          { text: 'They are exactly the same as domestic payments, only in a different language.', correct: false, why: 'International transactions carry extra layers such as exchange rates and cross-border rules; they are not identical to domestic payments.' },
          { text: 'The only thing that matters is the price written on the invoice.', correct: false, why: 'The invoice price is only one part; the rate movement and conversion costs can change the final rupee amount.' },
        ],
      },
    ],
    takeaway: 'International transactions carry exchange-rate timing, fees, regulations, and settlement risk. Treat the headline price as only one part; the real cost or value is what lands after conversion and timing.',
  },
}