import type { Chapter } from '../../types'

/** Level 1, chapters 17–21: why people spend money the way they do. */
export const behaviour: Record<string, Chapter> = {
  'l1-017': {
    id: 'l1-017',
    title: 'Needs Vs Wants',
    subtitle: 'The single most useful money distinction there is',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'pie-needs-wants', caption: 'Needs keep you alive and functional. Wants make life better.' },
      { kind: 'p', text: 'A need is something you cannot remove without harm — food, shelter, medicines, transport to work. A want is anything beyond that. The distinction looks obvious and is genuinely hard in practice, because a phone is a tool and a status symbol simultaneously.' },
      { kind: 'h', text: 'A practical test' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'If you did not buy this, could you still work, eat, sleep, stay healthy and keep your commitments? If yes, it is a want.',
          'Would every reasonable person agree this is essential? If yes, it is closer to a need.',
          'If you lost income tomorrow, would you keep buying it? A yes suggests want.',
          'Does it keep you earning? Tools and training sit on the boundary and are usually worth calling needs.',
        ],
      },
      {
        kind: 'table',
        caption: 'Sorting real spending',
        headers: ['Spending', 'Verdict', 'Why'],
        rows: [
          ['Rent', 'Need', 'Shelter'],
          ['Medicine', 'Need', 'Health'],
          ['Bus pass to work', 'Need', 'Earning capability'],
          ['Laptop for a design job', 'Need', 'Directly enables income'],
          ['Gym membership', 'Want (borderline)', 'Often cancelled within two months'],
          ['Streaming subscriptions', 'Want', 'Entertainment, entirely optional'],
          ['Latest phone', 'Want', 'An older phone usually works'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The 50/30/20 rule in one line',
        text: 'Aim to spend about 50% on needs, 30% on wants, and 20% on saving and debt repayment. The value is not in hitting it exactly — it is in having a target to measure against, because most people have never once written down what they spend.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not let this become self-judgment',
        text: 'Classifying every purchase as a want is the fastest route to burnout and a rigid life. The goal is not austerity. It is that money spent on genuine priorities gets protected, and money spent on autopilot gets noticed.',
      },
      { kind: 'sim', name: 'budget', caption: 'Set your income and try to stay inside the 50/30/20 markers. See how quickly the red bars appear.' },
    ],
    quiz: [
      {
        q: 'You are a graphic designer and your phone breaks. Buying a new one is:',
        options: [
          { text: 'A need, because you cannot work without a phone', correct: true, why: 'Correct — it directly enables your income, even if it is expensive.' },
          { text: 'A want, because phones are consumer goods', correct: false, why: 'Ignores that it is a work tool here.' },
          { text: 'Neither, because you could borrow a phone', correct: false, why: 'Borrowing is possible but costly; it does not change the need.' },
        ],
      },
      {
        q: 'The most useful test for distinguishing a need from a want is:',
        options: [
          { text: 'How much the item costs', correct: false, why: 'Price does not determine the category.' },
          { text: 'Whether your health, shelter, or ability to earn and meet commitments fails without it', correct: true, why: 'Exactly right — the consequence test.' },
          { text: 'What your friends think', correct: false, why: 'That is social influence, not need.' },
        ],
      },
      {
        q: 'The main value of the needs/wants distinction for your finances is that it:',
        options: [
          { text: 'Guarantees you will never buy anything enjoyable', correct: false, why: 'That is austerity, not the point.' },
          { text: 'Gives you a way to protect money for priorities and spot autopilot spending', correct: true, why: 'Correct — it creates a filter, not a restriction.' },
          { text: 'Reduces your income tax', correct: false, why: 'Tax depends on income and regime, not your spending categories.' },
        ],
      },
    ],
    takeaway: 'Needs keep you functioning; wants improve life. The test is whether health, shelter or earning ability fails without it — use it to protect priorities and spot autopilot spending.',
  },

  'l1-018': {
    id: 'l1-018',
    title: 'Necessities Vs Luxuries',
    subtitle: 'When "essential" is a matter of degree',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'The same pot of money covers both the safe floor and the comfortable extras.' },
      { kind: 'p', text: 'Necessities and luxuries sit on a spectrum rather than in separate boxes. A necessity is required to live safely and keep earning; a luxury is discretionary and disproportionately more expensive. The interesting part is that the line moves with your income and your situation.' },
      { kind: 'table',
        caption: 'The spectrum, from essential to luxury',
        headers: ['Necessity', 'Comfort', 'Luxury'],
        rows: [
          ['Bus travel to work', 'Own two-wheeler for convenience', 'Car with loan'],
          ['Cooked food at home', 'Eating out twice a week', 'Dining out daily'],
          ['One working phone', 'Latest mid-range phone', 'Flagship phone on EMI'],
          ['Family health cover', 'Top-up cover', 'Domestic and overseas cover'],
          ['Basic clothing', 'Good quality, few pieces', 'Wardrobe full of premium items'],
          ['Public transport', 'Cab occasionally', 'Frequent cabs, no thought to cost'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Luxury goods are not the problem',
        text: 'A ₹1.5 lakh holiday once a year is a legitimate choice if the rest of the plan holds. The problem is when luxuries are financed with debt or when they become fixed monthly commitments that survive a fall in income.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The EMI trap',
        text: 'A luxury bought on EMI is worse than a luxury bought outright, because it takes money from future months that have not happened yet. If income drops, the EMI does not drop with it. That mismatch is what turns a treat into a crisis.',
      },
      {
        kind: 'example',
        title: 'Upgrade the car or upgrade the emergency fund',
        text: 'Both improve your life. Only one is still there in eight months when the laptop dies and your income has paused. When choosing between two upgrades that feel equally good, prefer the one that protects your future optionality.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Decide your luxury budget as a fixed monthly amount — not per event.',
          'Prefer paying cash for luxuries so the cost is felt immediately.',
          'Buy fewer, better things rather than many cheap ones.',
          'Keep the total of "comfort" spending visible in one monthly number.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why is a luxury bought on EMI riskier than one bought with cash?',
        options: [
          { text: 'EMI purchases are always higher quality', correct: false, why: 'Quality is unrelated to how you pay.' },
          { text: 'The payment is a fixed future commitment that continues even if your income falls', correct: true, why: 'Exactly — the fixed obligation is the risk.' },
          { text: 'Banks do not allow EMIs on luxuries', correct: false, why: 'They generally do.' },
        ],
      },
      {
        q: 'A sensible way to manage luxury spending is to:',
        options: [
          { text: 'Allow unlimited spending when you have a good month', correct: false, why: 'Good months are exactly when the long-term decisions get made.' },
          { text: 'Set a fixed monthly amount and pay cash, so the cost is felt now', correct: true, why: 'Correct — a fixed cap and immediate payment keeps luxuries optional.' },
          { text: 'Avoid all discretionary spending entirely', correct: false, why: 'Austerity is not the goal.' },
        ],
      },
      {
        q: 'The "necessity" line is described as moving because:',
        options: [
          { text: 'Prices change every month', correct: false, why: 'Prices matter but do not define the line.' },
          { text: 'What counts as essential depends on your income, family situation and stage of life', correct: true, why: 'Correct — the same expense can be a luxury for one person and a necessity for another.' },
          { text: 'The government changes definitions', correct: false, why: 'Not how it works.' },
        ],
      },
    ],
    takeaway: 'Necessities and luxuries are a spectrum, and the line moves with your circumstances. A luxury is fine — financed with debt, it becomes a risk.',
  },

  'l1-019': {
    id: 'l1-019',
    title: 'Impulse Buying',
    subtitle: 'The 30-second purchase that takes 30 months to pay off',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Impulse buying is a purchase made on emotion in the moment, before you have thought it through. It is not about buying something expensive — most impulse spending is small, which is exactly why it adds up to thousands a year.' },
      { kind: 'scene', name: 'spend-leak', caption: 'Small unplanned spends rarely hurt once. Together they drain a budget steadily.' },
      { kind: 'h', text: 'The usual triggers' },
      {
        kind: 'table',
        caption: 'What triggers impulse spending',
        headers: ['Trigger', 'What it feels like', 'The reality'],
        rows: [
          ['Urgency', '"Only 2 left!"', 'Stock is not actually limited'],
          ['Emotion', 'Stress, boredom, celebration', 'The purchase does not fix the feeling'],
          ['Social proof', 'Everyone seems to have it', 'You are seeing ads, not reality'],
          ['Small cost', '"It\'s only ₹299"', 'Small amounts, 300 times a year'],
          ['Convenience', 'One-tap checkout', 'The pause that would prevent it is gone'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Small spends, big totals',
        text: 'An average ₹500 impulse purchase every second day is about ₹91,000 a year. That is a flight, several months of savings, or a meaningful chunk of a deposit — spent without a single decision.',
      },
      {
        kind: 'formula',
        label: 'The honest cost of small spending',
        expr: 'Annual total = ₹500 impulse buys × 182 days',
        note: 'Change the frequency and the number changes completely. That is why tracking frequency beats tracking amounts.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Five defences that actually work',
        text: 'Use the 24-hour rule for anything non-essential. Remove saved cards from shopping apps. Only shop with a written list. Keep a separate "fun money" account so guilt does not drive all decisions. And pay with UPI rather than stored cards, so a real pause is required.',
      },
      {
        kind: 'example',
        title: 'Inserting a pause',
        text: 'Keep a screenshot list of things you nearly bought. Most of the time, a week later you do not remember wanting any of them. That list is the most convincing argument you can give yourself, because it is your own data.',
      },
    ],
    quiz: [
      {
        q: 'What makes impulse buying especially hard to control?',
        options: [
          { text: 'The amounts are usually large', correct: false, why: 'Most impulse buys are small.' },
          { text: 'Most individual amounts are small, but their frequency adds up to large totals', correct: true, why: 'Exactly — that is what makes it easy to ignore.' },
          { text: 'It only happens online', correct: false, why: 'It happens everywhere.' },
        ],
      },
      {
        q: 'The 24-hour rule is designed to:',
        options: [
          { text: 'Delay non-essential purchases so emotion has time to fade', correct: true, why: 'Correct — most wants shrink once the moment passes.' },
          { text: 'Guarantee you will buy nothing fun', correct: false, why: 'It delays, it does not forbid.' },
          { text: 'Increase your credit card limit', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Paying with UPI instead of a saved card helps because it:',
        options: [
          { text: 'UPI is always cheaper in interest', correct: false, why: 'For a debit-funded UPI payment there is no interest either way.' },
          { text: 'It adds a deliberate step, breaking the one-tap autopilot', correct: true, why: 'Right — friction is the intervention.' },
          { text: 'It guarantees refunds', correct: false, why: 'It does not.' },
        ],
      },
    ],
    takeaway: 'Impulse buying is small purchases at high frequency. Add a deliberate pause — the 24-hour rule, a list, and real payment steps — and most of it disappears.',
  },

  'l1-020': {
    id: 'l1-020',
    title: 'Advertising Psychology',
    subtitle: 'How ads are built to switch off your judgement',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'ad-trap', caption: 'Urgency, discount, scarcity and social proof — four levers, one goal.' },
      { kind: 'p', text: 'Advertising does not just inform you. It is engineered to bypass the part of your brain that does arithmetic. Once you can name the tactic, it loses most of its power — which is why ad-readers spend far less.' },
      { kind: 'table',
        caption: 'Common tactics and what they trigger',
        headers: ['Tactic', 'Example', 'The fear or desire it uses'],
        rows: [
          ['Scarcity', '"Only 3 left!"', 'Fear of missing out'],
          ['Urgency', '"Sale ends tonight"', 'Panic about losing a deal'],
          ['Anchor pricing', '"Was ₹9,999, now ₹2,999"', 'Pleasure at apparent saving'],
          ['Social proof', '"17,000 people bought this"', 'Fear of being left behind'],
          ['Loss aversion', '"Don\'t miss your chance"', 'Dislike of regret'],
          ['Reciprocity', 'Free sample before the sale', 'Feeling of obligation'],
          ['Authority', 'A doctor or expert endorses it', 'Trust transferred from the expert'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Loss aversion is the strongest lever',
        text: 'Studies on decision-making consistently find that losing ₹100 hurts roughly two to three times more than gaining ₹100 feels good. Ads exploit this by framing buying as the *avoidance* of a loss — missing the deal, missing the last unit, missing the chance.',
      },
      {
        kind: 'example',
        title: 'The anchor in action',
        text: 'A "was ₹9,999, now ₹2,999" ad gives you a reference point to feel good about. The ₹2,999 is not judged against what the product is worth to you — it is judged against a number you were never going to pay. Ask instead: what would I pay for this if nobody had shown me a crossed-out price?',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Advertising targets your insecurity',
        text: 'Ads rarely sell a product on its features. They sell an identity — the successful version of you, the caring parent, the person others respect. Recognising that the ad is about you and not the product removes much of the appeal.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Practical defences',
        text: 'Unfollow accounts that make you feel inadequate. Read the full fine print to find the real total cost. Ask whether you would want this if the ad were not telling you to want it. And wait 24 hours — urgency always decays, and genuine offers survive waiting.',
      },
    ],
    quiz: [
      {
        q: 'Scarcity advertising ("only 3 left!") works mainly by triggering:',
        options: [
          { text: 'A genuine reduction in supply', correct: false, why: 'Scarcity is often manufactured.' },
          { text: 'Fear of missing out, which creates urgency you would not otherwise feel', correct: true, why: 'Exactly — it manufactures the feeling of scarcity.' },
          { text: 'A better product quality guarantee', correct: false, why: 'Quantity has no connection to quality.' },
        ],
      },
      {
        q: 'Loss aversion means:',
        options: [
          { text: 'Losses feel roughly equal to equivalent gains', correct: false, why: 'That is the opposite of the finding.' },
          { text: 'Losing a given amount hurts more than gaining the same amount feels good', correct: true, why: 'Correct — losses weigh roughly two to three times more heavily.' },
          { text: 'People avoid all financial risk', correct: false, why: 'Too strong; people take risks regularly.' },
        ],
      },
      {
        q: 'The most effective way to resist advertising is often to:',
        options: [
          { text: 'Buying more often, at better prices', correct: false, why: 'That increases spending.' },
          { text: 'Name the tactic being used and ask whether you would want the product without the ad', correct: true, why: 'Right — awareness of the tactic removes most of its force.' },
          { text: 'Reading more advertisements', correct: false, why: 'More ad exposure increases desire.' },
        ],
      },
    ],
    takeaway: 'Ads target your insecurity, not the product. Naming the tactic — scarcity, urgency, anchoring, social proof — takes away most of its power.',
  },

  'l1-021': {
    id: 'l1-021',
    title: 'Peer Pressure And Money',
    subtitle: 'Spending to fit in is the most expensive kind',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'peer-circle', caption: 'The pressure is rarely explicit. It is shown, implied and repeated.' },
      { kind: 'p', text: 'Peer pressure on spending rarely arrives as an instruction. It appears as a comparison — their phone, their holiday, their restaurant bill — and it works because belonging feels more important than arithmetic.' },
      {
        kind: 'table',
        caption: 'How it shows up',
        headers: ['Pressure', 'Typical line', 'What it costs'],
        rows: [
          ['Consumption', '"Everyone has the new model"', '₹60,000+ on EMI'],
          ['Experience', '"We all went, you missed out"', 'A holiday that cost half a month of savings'],
          ['Reciprocity', 'You host, so they host', 'Recurring hosting costs'],
          ['Group splitting', 'Splitting a costly outing among few people', 'Paying for strangers\' fun'],
          ['Loan culture', '"Just take the loan, you\'ll manage"', 'Interest on consumption'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Your peers are not your financial benchmark',
        text: 'You are comparing your outgoings to their outgoings while comparing against a different income. A ₹80,000 holiday funded by a ₹30 lakh house is not the same sacrifice as one funded by credit card debt. Always compare like with like.',
      },
      {
        kind: 'example',
        title: 'The group-trip maths',
        text: 'A four-night trip costs ₹12,000 per person. If only three of nine people actually want to go, the price per person rises to ₹36,000 — because you split by who came, not by who wanted to. The same trip was affordable for some and a burden for others, and nobody said anything.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Debt is contagious',
        text: 'Peer borrowing is one of the most common routes to credit card debt. In practice, lending to friends rarely returns; lending a large amount can also cost you the friendship. A firm "no, or a small amount only" is a complete sentence.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Three ways out',
        text: 'Decide your budget before the event, not during it. Have a plain early exit ready ("I have an early start") so declining costs nothing socially. And pay for your own share first — it removes the awkward last-moment split.',
      },
    ],
    quiz: [
      {
        q: 'Peer pressure to spend is most powerful because it:',
        options: [
          { text: 'Uses direct instructions to convince you', correct: false, why: 'It is rarely direct.' },
          { text: 'Taps the human need to belong, so the decision feels social rather than financial', correct: true, why: 'Exactly — belonging outweighs arithmetic.' },
          { text: 'Usually comes from family rather than friends', correct: false, why: 'Friends and colleagues are the usual source.' },
        ],
      },
      {
        q: 'When comparing your finances to a friend\'s, the fairest comparison is:',
        options: [
          { text: 'Their spending against your spending', correct: false, why: 'That is exactly the misleading comparison.' },
          { text: 'Their savings rate and debt against yours, not just their spending', correct: true, why: 'Correct — ratios on comparable incomes are the meaningful measure.' },
          { text: 'Whichever of you spends less', correct: false, why: 'Spending less is not always the goal.' },
        ],
      },
      {
        q: 'When friends ask to borrow money, the healthiest default is to:',
        options: [
          { text: 'Lend generously to protect the friendship', correct: false, why: 'Large loans rarely return and can damage the friendship.' },
          { text: 'Decline, or offer a small amount only, without explanation', correct: true, why: 'Correct — a clear, brief no avoids both the debt and the argument.' },
          { text: 'Lend and immediately ask for it back', correct: false, why: 'That is a loan with awkward expectations attached.' },
        ],
      },
    ],
    takeaway: 'Spending to fit in is the most expensive category there is. Set the limit before the event, and compare savings rates rather than lifestyles.',
  },
}