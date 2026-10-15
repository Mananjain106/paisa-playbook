import type { Chapter } from '../../types'
import { scene4 } from '../../lib/chapter-blocks'

const SCENE_0 = scene4('rent-vs-buy')
const SCENE_1 = scene4('loan-amort')

export const property: Record<string, Chapter> = {
  'l4-049': {
    id: 'l4-049',
    title: 'Property Purchase Economics',
    subtitle: 'The true cost of a home is more than the sale price.',
    minutes: 7,
    blocks: [
      SCENE_0,
      { kind: 'p', text: "A house purchase is one of the biggest financial decisions many Indians ever make, and it is usually priced by people who focus on the flat’s face value. That is a mistake. The real cost includes the down payment, the loan interest over the years, legal and registration costs, stamp duty, maintenance, repairs, property taxes, and the opportunity cost of the money tied up in the asset. A ₹X crore home is not a ₹X crore decision; it is a long chain of smaller costs that add up." },
      SCENE_0,
      { kind: 'h', text: 'The costs people often underestimate' },
      { kind: 'list', items: [
        'One-time purchase costs: stamp duty, registration, legal charges, and other transaction costs that come on top of the price.',
        'Loan cost: the interest paid over the life of the loan, which can be large relative to the home’s price.',
        'Ongoing holding costs: maintenance, society charges, property taxes, repairs, and insurance where relevant.',
        'Opportunity cost: the returns you might have earned if the same money were deployed differently.',
        'Illiquidity and transaction friction: a home is not easy to sell quickly without cost and hassle.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not confuse monthly EMI with monthly cost', text: "The EMI tells you what the loan costs month to month, but it does not tell you the full cost of owning the home. Maintenance, taxes, repairs, and the interest already baked into the EMI all matter. If you only look at EMI, you are pricing a loan, not a home." },
      SCENE_0,
      { kind: 'example', title: 'A fuller purchase picture', text: "If the sale price is ₹X, add the down payment, the total interest payable over the loan term, the one-time legal and registration charges, and then think about the ongoing maintenance and taxes. That fuller picture is the purchase economics. The sale price is only the headline." },
      { kind: 'terms', items: [
        { term: 'purchase economics', meaning: 'the full set of costs and trade-offs involved in buying a property, including price, financing, transaction costs, holding costs, and opportunity cost.' },
        { term: 'opportunity cost', meaning: 'the benefit you give up by using money in one way instead of another, such as investing it elsewhere.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most common mistake people make when judging a home purchase?',
        options: [
          { text: 'Focusing only on the sale price and EMI while ignoring transaction costs, total loan interest, maintenance, taxes, and opportunity cost.', correct: true, why: 'The price and EMI are only part of the picture; the real decision includes one-time costs, lifetime interest, holding costs, and what the money could have done elsewhere.' },
          { text: 'Thinking too much about the location of the property.', correct: false, why: 'Location matters, but ignoring the broader cost picture is the more common financial mistake in purchase decisions.' },
          { text: 'Checking the builder’s reputation before buying.', correct: false, why: 'Checking the builder is sensible; the financial mistake is treating the price and EMI as the whole cost.' },
        ],
      },
    ],
    takeaway: 'The economics of buying property go far beyond the sale price. Add the down payment, the interest over the loan life, the transaction costs, the holding costs, and the opportunity cost before you decide.',
  },

  'l4-050': {
    id: 'l4-050',
    title: 'Rent Vs Buy Analysis',
    subtitle: 'Owning and renting are two different financial pictures, not two versions of the same thing.',
    minutes: 7,
    blocks: [
      SCENE_0,
      { kind: 'p', text: "The rent-versus-buy question sounds simple, but it is really a comparison of two very different financial lives. Buying commits you to a large upfront payment, a long loan, maintenance, and a less flexible asset. Renting keeps more of your money liquid and flexible, but you do not build an owned asset from the monthly payment. The right answer depends on the numbers, the timeline, and how long you expect to stay in the place." },
      SCENE_0,
      { kind: 'h', text: 'The two sides of the comparison' },
      { kind: 'list', items: [
        'Buying: down payment, loan interest, transaction costs, maintenance, taxes, repairs, possibly appreciation, but also illiquidity and concentration risk.',
        'Renting: a monthly payment with no ownership stake, but more flexibility, lower upfront commitment, and the ability to invest the difference elsewhere.',
        'The comparison should include the money that could be invested instead of left in a down payment or tied up in the home.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not let emotional attachment fake the maths', text: "A lot of people decide to buy because it feels like the adult thing to do, then try to justify it with optimistic assumptions about appreciation. Appreciation is not guaranteed, and even when it happens it may not beat a disciplined alternative after costs. The decision should start with the maths and the timeline, not with the romance of ownership." },
      SCENE_0,
      { kind: 'example', title: 'The comparison mindset', text: "If you rent for a while and invest the money you did not spend on a down payment and closure costs, you may end up with a very different financial position than if you had bought. If you buy, you may gain from ownership and possible appreciation, but you also take on concentration, illiquidity, and maintenance. Neither path is universally better; the comparison is what matters." },
      { kind: 'terms', items: [
        { term: 'rent vs buy', meaning: 'the comparison between living in a rented home and purchasing one, weighing cost, flexibility, ownership, and the investment alternatives on both sides.' },
        { term: 'concentration risk', meaning: 'the risk of having too much of your wealth tied up in a single asset, such as one home.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to think about rent vs buy?',
        options: [
          { text: 'As a comparison of two different financial lives, weighing buying costs, ownership benefits, maintenance, illiquidity, and the investment alternatives on both sides.', correct: true, why: 'Rent and buy are not the same decision in different clothing; they involve different commitments, risks, and opportunities, so the comparison must include both.' },
          { text: 'As a moral choice where buying is always superior because it is more responsible.', correct: false, why: 'Buying is not automatically superior in every case; the financial fit depends on the numbers, timeline, and alternatives.' },
          { text: 'Only by comparing the rent amount with the EMI, since those are the only two numbers that matter.', correct: false, why: 'That comparison misses down payment, transaction costs, maintenance, taxes, and the opportunity cost of the money used to buy.' },
        ],
      },
    ],
    takeaway: 'Rent and buy are different financial pictures, not just a monthly payment comparison. Weigh ownership, flexibility, costs, and what the money could do on each side before deciding.',
  },

  'l4-051': {
    id: 'l4-051',
    title: 'Down Payment',
    subtitle: 'The first big chunk of money that shapes the whole loan.',
    minutes: 5,
    blocks: [
      scene4('downpayment-effect'),
      { kind: 'p', text: "A down payment is the part of the purchase price you pay from your own funds instead of borrowing. It matters because it reduces the loan amount, changes the interest bill over time, and often affects whether a loan is approved at all. The size of the down payment can shape the affordability and the long-term cost of the purchase more than people realise." },
      { kind: 'h', text: 'Why the down payment matters' },
      { kind: 'list', items: [
        'It reduces the amount you borrow, which reduces interest cost and monthly payment pressure.',
        'It can affect loan approval, because lenders often want the buyer to have skin in the game.',
        'It ties up a large amount of your own money, so the opportunity cost of that money matters.',
        'A bigger down payment can mean a safer financial position if it leaves you with a manageable loan and enough buffer left over.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not drain everything for the down payment', text: "A large down payment can look responsible, but if it leaves you with no emergency fund, no liquidity, and no room to live, it can backfire. The smartest down payment is one that lowers the loan without making the rest of your finances brittle. Ownership should not come at the cost of basic resilience." },
      { kind: 'example', title: 'A down payment trade-off', text: "Paying more upfront can reduce the loan and the interest over time, but the money might also be used to keep a buffer or to invest. The decision is not just about the house; it is about balance. A decision that looks good on the purchase but leaves you exposed is not a good financial decision overall." },
      { kind: 'terms', items: [
        { term: 'down payment', meaning: 'the portion of a purchase price paid from your own funds upfront, with the rest financed by a loan or other borrowing.' },
        { term: 'loan-to-value', meaning: 'the proportion of the purchase price financed by the loan; a higher down payment lowers the loan-to-value.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most balanced way to think about a down payment?',
        options: [
          { text: 'As a tool that can reduce the loan and long-term interest, but one that should not leave you with no emergency buffer or liquidity.', correct: true, why: 'A down payment should improve the financial picture overall, not just the purchase, so the rest of your finances still need room to breathe.' },
          { text: 'As the largest possible amount, because putting in more always makes the purchase safer.', correct: false, why: 'A very large down payment can be risky if it drains buffers; more is not always better if it leaves you exposed.' },
          { text: 'As a small formality that does not affect the rest of the loan.', correct: false, why: 'The down payment changes the loan size, the interest cost, and often the approval, so it is far from a formality.' },
        ],
      },
    ],
    takeaway: 'A down payment affects the loan size, the interest, and often approval. Use it to improve the purchase, but do not let it hollow out your emergency buffer or liquidity.',
  },

  'l4-052': {
    id: 'l4-052',
    title: 'Home-Loan Amortisation',
    subtitle: 'Early payments are mostly interest; later payments are mostly principal.',
    minutes: 6,
    blocks: [
      SCENE_1,
      { kind: 'p', text: "A home loan is usually amortising, which means each EMI is fixed, but the split between interest and principal changes over time. In the early years, a large part of the EMI goes to interest because the outstanding balance is large. Later, as the balance falls, more of the EMI goes to principal. That is why prepayment early in the loan can be much more powerful than prepayment near the end." },
      SCENE_1,
      { kind: 'h', text: 'The amortisation insight' },
      { kind: 'list', items: [
        'The EMI is level, but the interest portion is largest at the start when the balance is highest.',
        'As the balance shrinks, the interest cost shrinks, so more of the EMI reduces the loan.',
        'Prepaying early removes principal that would otherwise generate a lot of interest over many years.',
        'Understanding amortisation helps you judge prepayment, tenure, and the real cost of the loan.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Think about interest rate and timing together', text: "A low interest rate helps, but the timing of any prepayment matters too. Paying down the loan early can save more interest than the same payment made later, because the early principal you remove would otherwise accrue interest for years. The loan’s structure is the reason timing matters." },
      SCENE_1,
      { kind: 'example', title: 'Why early prepayment bites harder', text: 'If you prepay a part of the loan in year 2, you reduce the balance that the interest is calculated on for the remaining years, and that can shorten the loan and reduce total interest. The same prepayment in year 10 has less effect because more of the loan has already been paid down. The same rupee does different work depending on when it is used.' },
      { kind: 'terms', items: [
        { term: 'amortisation', meaning: 'the process by which a loan is paid down over time through regular payments, with the split between interest and principal changing as the balance falls.' },
        { term: 'principal', meaning: 'the amount of the loan still owed, excluding interest; the part of the EMI that reduces the principal lowers future interest.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why is a prepayment usually more effective early in a home loan than later?',
        options: [
          { text: 'Because the outstanding balance is larger early on, so the interest saved by reducing that balance over the remaining years is greater.', correct: true, why: 'Early prepayment removes principal while the balance and interest cost are still high, so it can save more interest and shorten the loan more than a later prepayment.' },
          { text: 'Because EMIs are smaller in the early years and therefore easier to apply.', correct: false, why: 'EMI size does not by itself make early prepayment more valuable; the effect comes from the outstanding balance and the interest it would have generated.' },
          { text: 'Because interest rates are lower in the early years of every loan.', correct: false, why: 'The rate is not necessarily lower early on; what changes is the balance and the split between interest and principal.' },
        ],
      },
    ],
    takeaway: 'Home-loan amortisation means early EMIs are mostly interest and later EMIs are mostly principal. That is why early prepayment can save more interest than the same payment made later.',
  },

  'l4-053': {
    id: 'l4-053',
    title: 'Total Ownership Cost',
    subtitle: 'What you spend over time to keep the asset alive.',
    minutes: 6,
    blocks: [
      scene4('loan-amort'),
      { kind: 'p', text: "Total ownership cost is what it actually costs to own, hold, and run a property over time — not just the purchase price. It includes the loan interest, maintenance, society charges, property taxes, insurance, repairs, and the indirect costs of illiquidity and transaction friction. A home that looks affordable on EMI alone can be expensive once all the holding costs are added." },
      { kind: 'h', text: 'The pieces of total ownership cost' },
      { kind: 'list', items: [
        'Loan interest over the life of the loan.',
        'Maintenance and society or association charges.',
        'Property taxes and any local levies that recur.',
        'Repairs and upkeep, which are irregular but real.',
        'Insurance and other protection costs where relevant.',
        'Transaction costs and the friction of selling or moving later.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Ownership cost is a long-run number, not a first-year estimate', text: "Some costs are lumpy and some are steady, but together they shape whether the asset is affordable over the long run. A house should be judged not by the first year’s cash flow alone, but by whether the total cost is sustainable for the years you expect to hold it." },
      { kind: 'example', title: 'Thinking in totals', text: 'If the EMI seems comfortable but maintenance, taxes, and repairs are steady, and the loan interest over 20 years is large, the total cost of ownership may be much higher than the EMI suggests. The total-ownership view is what prevents a comfortable EMI from hiding a strained long-term position.' },
      { kind: 'terms', items: [
        { term: 'total ownership cost', meaning: 'the full cost of owning and holding an asset over time, including financing, maintenance, taxes, repairs, insurance, and transaction friction.' },
        { term: 'holding cost', meaning: 'the recurring cost of keeping an asset, such as maintenance, taxes, and insurance, as opposed to the one-time purchase cost.' },
      ] },
    ],
    quiz: [
      {
        q: 'What does total ownership cost include that EMI alone does not?',
        options: [
          { text: 'Loan interest over the life of the loan, maintenance, taxes, repairs, insurance, and the friction of transaction costs and illiquidity.', correct: true, why: 'EMI covers the loan payment, but total ownership cost is the broader long-run cost of keeping the asset.' },
          { text: 'Only the initial purchase price, since that is the true cost of ownership.', correct: false, why: 'The purchase price is part of it, but total ownership cost is broader and includes the ongoing and lifetime costs of holding the asset.' },
          { text: 'Only the maintenance charges, since everything else is optional.', correct: false, why: 'Maintenance is only one part; another part is financing cost, taxes, repairs, insurance, and transaction friction.' },
        ],
      },
    ],
    takeaway: 'Total ownership cost is the real cost of keeping a home over time. Look beyond the EMI to interest, maintenance, taxes, repairs, insurance, and transaction friction before judging affordability.',
  },
}