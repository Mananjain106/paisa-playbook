import type { Chapter } from '../../types'

/** Level 2, chapters 51–55: what insurance is for, and the main policies. */
export const insurance: Record<string, Chapter> = {
  'l2-051': {
    id: 'l2-051',
    title: 'Insurance Fundamentals',
    subtitle: 'Transferring a risk you cannot afford to carry',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'insurance-umbrella', caption: 'Insurance moves a catastrophic risk off your shoulders onto a company that can absorb it.' },
      { kind: 'p', text: 'Insurance is a contract in which you pay a premium in exchange for the insurer taking on a financial consequence if a defined event happens. The purpose is not to protect you from every loss — it is to protect you from losses large enough to damage your life, which you cannot absorb.' },
      {
        kind: 'formula',
        label: 'The principle',
        expr: 'Insure large, unlikely, unaffordable losses. Self-insure small, likely, affordable ones.',
        note: 'If a loss would not trouble you financially, do not insure it. If it would end you, insure it.',
      },
      {
        kind: 'table',
        caption: 'What to insure and what to absorb',
        headers: ['Insure', 'Absorb yourself'],
        rows: [
          ['A hospital bill that would cost lakhs', 'A ₹300 pair of shoes'],
          ['The income your family loses if you die', 'A scratched phone screen'],
          ['A vehicle worth a significant fraction of your net worth', 'Minor servicing costs'],
          ['Liability if your accident injures someone else', 'Your weekly groceries'],
          ['Your home if it is a large share of net worth', 'A ₹5,000 dining bill'],
          ['Loss of your earning capacity', 'Small convenience spending'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Insurance is not an investment',
        text: 'General insurance does not build wealth — the premium you pay is spent, not invested, and the returns are usually negative after claims. Only tax-advantaged products like life cover with a savings element have an investment component. Treating insurance as an investment is a common and costly confusion.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Under-insurance is the real problem',
        text: 'An Indian household often has three policies and no meaningful cover, or one ₹5 lakh health policy on a ₹15 lakh income. Buying many small policies is not protection either. One adequately sized policy beats five inadequate ones.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Start with health cover, sized against income and family.',
          'Add term life insurance if anyone depends on your income.',
          'Insure vehicles and property only if they are a meaningful share of net worth.',
          'Read exclusions and waiting periods before buying, not after a claim.',
          'Review cover annually as income and family change.',
        ],
      },
      { kind: 'sim', name: 'cover', caption: 'Check whether your health cover actually matches your situation.' },
    ],
    quiz: [
      {
        q: 'Insurance is primarily for:',
        options: [
          { text: 'Every loss you might experience', correct: false, why: 'That is unaffordable and unnecessary.' },
          { text: 'Large, unlikely losses you could not absorb financially yourself', correct: true, why: 'Exactly right.' },
          { text: 'Increasing your net worth', correct: false, why: 'Insurance is not primarily an investment.' },
        ],
      },
      {
        q: 'General insurance should generally be regarded as:',
        options: [
          { text: 'An investment with guaranteed returns', correct: false, why: 'It generally is not.' },
          { text: 'Risk transfer rather than wealth creation', correct: true, why: 'Exactly right.' },
          { text: 'A way to reduce your income tax automatically', correct: false, why: 'Only certain deductions apply.' },
        ],
      },
      {
        q: 'The most common Indian insurance problem is:',
        options: [
          { text: 'Too few policies', correct: false, why: 'Many households have several.' },
          { text: 'Policies that are too small to cover a real loss', correct: true, why: 'Exactly right — adequacy, not count.' },
          { text: 'Buying from too many insurers', correct: false, why: 'Not the main issue.' },
        ],
      },
    ],
    takeaway: 'Insurance is risk transfer, not an investment. Insure losses too large to absorb, size them against your real exposure, and read exclusions before buying rather than after a claim.',
  },

  'l2-052': {
    id: 'l2-052',
    title: 'Health Insurance',
    subtitle: 'The most important policy most Indian households buy',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'insurance-umbrella', caption: 'One family, several risks — health is usually the largest by far.' },
      { kind: 'p', text: 'Health insurance pays for medical expenses you cannot afford — hospitalisation, surgery, ICU, medication. In India it has become essential because out-of-pocket hospital bills routinely run into lakhs, and because most households were spending savings on treatment that insurance could have covered.' },
      {
        kind: 'table',
        caption: 'Types of health cover in India',
        headers: ['Type', 'What it covers', 'Typical use'],
        rows: [
          ['Individual health policy', 'One person, hospitalisation', 'Basic cover for one person'],
          ['Family floater', 'Family, with a shared limit', 'Best value for families'],
          ['Top-up policy', 'Additional limit over a base policy', 'Cheap way to raise cover'],
          ['Critical illness cover', 'Lump sum on diagnosis', 'Income replacement during treatment'],
          ['Personal accident cover', 'A benefit on death or disablement', '24×7 cover including off-hours'],
          ['OPD / pharmacy', 'Outpatient and medicines', 'Usually limited, often capped'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Family floater, not separate policies',
        text: 'A floater gives one shared sum insured across the family, so an unused ₹2 lakh for one person offsets what another uses. Separate individual policies waste that offset. A floater is almost always better value for a family, unless one member genuinely needs a very high limit.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Room rent caps are where claims get reduced',
        text: 'Policies typically cap room rent as a multiple of the sum insured — for example ₹1,000 per day on a ₹5 lakh policy. In a private room costing ₹8,000 a day, you pay the difference yourself. The same applies to non-network hospitals, which may pay only 60–80% of charges.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Size cover on income, not on a round number',
        text: 'A good starting point is roughly ten times annual income, adjusted for family size and dependents. A ₹5 lakh policy on a ₹12 lakh income leaves most of the exposure uncovered. Use the adequacy tool in this app to check.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Prefer a family floater over individual policies.',
          'Raise the limit with a top-up rather than waiting.',
          'Check room rent caps, co-payments and network hospital lists.',
          'Understand waiting periods and pre-existing condition exclusions.',
          'Add personal accident cover for 24×7 protection including accidents outside hospital.',
          'Declare pre-existing conditions honestly — non-disclosure voids cover.',
        ],
      },
      { kind: 'sim', name: 'cover', caption: 'Work out roughly how much cover your household needs.' },
    ],
    quiz: [
      {
        q: 'For a family, which structure usually gives better value?',
        options: [
          { text: 'Separate individual policies for each member', correct: false, why: 'Unused limits do not transfer between members.' },
          { text: 'A family floater with a shared limit', correct: true, why: 'Exactly right.' },
          { text: 'Multiple top-ups on individual policies', correct: false, why: 'Costlier for similar cover.' },
        ],
      },
      {
        q: 'Room rent caps in Indian health policies usually:',
        options: [
          { text: 'Are unlimited', correct: false, why: 'They are almost always capped.' },
          { text: 'Limit the daily room charge, so you pay the difference above the cap', correct: true, why: 'Exactly right.' },
          { text: 'Only apply in government hospitals', correct: false, why: 'They apply generally.' },
        ],
      },
      {
        q: 'A sensible starting point for health cover is about:',
        options: [
          { text: 'Ten times annual household income, adjusted for family size', correct: true, why: 'Exactly right.' },
          { text: 'Exactly ₹5 lakh for everyone', correct: false, why: 'A round number unrelated to your exposure.' },
          { text: 'One year of income', correct: false, why: 'Far too low for a serious illness.' },
        ],
      },
    ],
    takeaway: 'Health cover is essential and usually under-bought. Prefer a family floater, size it against income, and understand room rent caps and network restrictions before you need them.',
  },

  'l2-053': {
    id: 'l2-053',
    title: 'Life Insurance',
    subtitle: 'Replacing the income your family depends on',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'life-cover-dependants', caption: 'Life cover protects dependants. With none, the umbrella has little to shelter.' },
      { kind: 'p', text: 'Life insurance pays a sum to your family when you die. Its only purpose is to replace the income your household loses — which means its value is entirely about dependents, not about you.' },
      {
        kind: 'table',
        caption: 'The two kinds of life insurance',
        headers: ['Type', 'How it works', 'Who it suits'],
        rows: [
          ['Term insurance', 'Pure cover for a fixed term, then ends', 'Almost everyone who needs life cover'],
          ['Endowment / whole life', 'Cover plus a savings component', 'Rarely — usually a poor trade'],
          ['ULIP / investment-linked', 'Market-linked savings with cover', 'A poor product for most people'],
          ['Group cover from employer', 'Free, provided by your employer', 'Useful, but usually small'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'If nobody depends on your income, you need no life cover',
        text: 'Life insurance protects dependants. An unmarried person with no financial obligations is far better served by a term policy of modest size — or none at all — plus investing the difference. Buying large cover to "be safe" wastes money.',
      },
      {
        kind: 'formula',
        label: 'Sizing the cover',
        expr: 'Sum assured ≈ Annual income × remaining years of dependency ÷ 100',
        note: 'Then subtract debts and existing assets your family could sell. A ₹10 lakh income with a ₹5 lakh outstanding loan and ₹8 lakh of savings needs much less cover than ₹20 lakh.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Term insurance is almost always the right answer',
        text: 'Term cover is the cheapest way to buy the largest amount of cover — you are paying purely for protection. Endowment and ULIP products bundle expensive savings into the premium, so the cover inside them costs several times what the same cover costs as a standalone term policy. The investment component is generally poor value.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Buy term, and increase cover with income',
        text: 'Most people buy cover at the start of a career and never increase it, so their cover falls behind their income precisely when family obligations peak. Review every year and increase the sum assured when income rises.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Calculate cover from dependants, not from a round number.',
          'Prefer term insurance over endowment and ULIP products.',
          'Compare the price per lakh of cover across insurers.',
          'Review cover each year as income and dependants change.',
          'Tell your family the policy number and nominee details.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The purpose of life insurance is to:',
        options: [
          { text: 'Save for your retirement', correct: false, why: 'That is an investment, not protection.' },
          { text: 'Replace the income your dependants lose', correct: true, why: 'Exactly right.' },
          { text: 'Cover your own medical bills', correct: false, why: 'That is health insurance.' },
        ],
      },
      {
        q: 'Which type of life insurance is usually the most cost-effective?',
        options: [
          { text: 'Endowment policy', correct: false, why: 'Bundled savings make cover expensive.' },
          { text: 'Term insurance', correct: true, why: 'Exactly right.' },
          { text: 'ULIP', correct: false, why: 'A poor product for protection.' },
        ],
      },
      {
        q: 'A person with no dependants and no debts:',
        options: [
          { text: 'Needs very large life cover', correct: false, why: 'Nobody depends on the income.' },
          { text: 'Needs little or no life cover, and is better served by investing', correct: true, why: 'Exactly right.' },
          { text: 'Cannot buy life insurance', correct: false, why: 'They can, it is just not needed.' },
        ],
      },
    ],
    takeaway: 'Life insurance replaces income your dependants lose, so size it from dependants and subtract debts and savings. Term insurance is almost always the right product.',
  },

  'l2-054': {
    id: 'l2-054',
    title: 'Motor Insurance',
    subtitle: 'Mandatory, but heavily overpriced in India',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'motor-third-party', caption: 'Third-party cover matters most when the accident is worst — which is exactly when the statutory cap bites.' },
      { kind: 'p', text: 'Motor insurance is compulsory for every registered vehicle in India. It is one of the few places where the law decides the minimum, and the gap between the legal minimum and a sensible policy is where most of the cost sits.' },
      {
        kind: 'table',
        caption: 'Motor insurance in India',
        headers: ['Type', 'Covers', 'Legally required?'],
        rows: [
          ['Third-party only', 'Damage and injury to others, not your own vehicle', 'Yes'],
          ['Third-party + own damage', 'Adds theft and own-vehicle damage', 'Only above the third-party minimum'],
          ['Comprehensive (no deductible)', 'Everything, with a nil excess', 'Not required'],
          ['Comprehensive + NIL Excess', 'No deduction when you claim', 'Not required'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The no-claim bonus is the biggest lever',
        text: 'Your premium falls each year without a claim and rises sharply after one. Many owners file small claims because it "seems free", and end up paying a higher premium for years. For a dent or a small claim, comparing the no-claim-bonus loss against the repair cost is usually the smarter calculation.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Third-party cover has a government-set cap',
        text: 'Compensation for third-party death or grievous injury is capped by Motor Vehicles (Compensation) Act rules. That cap is far below what an accident victim actually costs a family. This is the strongest argument for buying far more third-party liability cover than the statutory minimum.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Add a personal accident cover for the owner',
        text: 'The statutory ₹15 lakh personal accident benefit applies to the vehicle owner or driver. A voluntary personal accident cover of ₹15 lakh to ₹1 crore costs very little and follows you across vehicles, not just the insured one.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Compare premiums across insurers and aggregators each renewal.',
          'Read the no-claim-bonus scale before filing a small claim.',
          'Consider a NIL excess add-on if you want no deduction at claim time.',
          'Ensure add-ons like zero-accident cover and roadside assistance are actually used.',
          'Never let cover lapse — the penalty for re-instating is severe.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Third-party motor insurance covers:',
        options: [
          { text: 'Damage to your own vehicle', correct: false, why: 'That requires own-damage or comprehensive cover.' },
          { text: 'Injury or damage caused to other people', correct: true, why: 'Exactly right.' },
          { text: 'Theft of your vehicle', correct: false, why: 'That needs own-damage cover.' },
        ],
      },
      {
        q: 'The no-claim bonus system means:',
        options: [
          { text: 'You can claim without affecting your premium', correct: false, why: 'Claims reduce the bonus.' },
          { text: 'Your premium falls without claims and rises after one, so small claims are not always worth filing', correct: true, why: 'Exactly right.' },
          { text: 'The insurer pays you for not claiming', correct: false, why: 'It reduces the premium instead.' },
        ],
      },
      {
        q: 'Third-party liability compensation is capped by law, which means:',
        options: [
          { text: 'The cap is generous enough', correct: false, why: 'It is widely considered too low.' },
          { text: 'Statutory minimum cover may be far less than an accident victim actually costs a family', correct: true, why: 'Exactly right.' },
          { text: 'You can opt out of third-party cover', correct: false, why: 'It is mandatory.' },
        ],
      },
    ],
    takeaway: 'Third-party motor cover is mandatory and its statutory limit is low, so buy more than the minimum. Use the no-claim-bonus scale to decide whether a small claim is worth filing.',
  },

  'l2-055': {
    id: 'l2-055',
    title: 'Property Insurance',
    subtitle: 'Overlooked until something happens',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'insurance-umbrella', caption: 'A home is usually the largest asset on the balance sheet — and usually the least insured.' },
      { kind: 'p', text: 'Property insurance covers damage to or destruction of a building and its contents from fire, natural disasters and other insured events. In India it is widely uninsured, because houses are often fully paid for and feel "safe" once owned outright.' },
      {
        kind: 'table',
        caption: 'Property insurance options',
        headers: ['Type', 'What it covers'],
        rows: [
          ['Standard building cover', 'Fire, lightning, explosion, storm, flood, earthquake if named'],
          ['Householder cover', 'Buildings plus contents, appliances, jewellery up to a limit'],
          ['Landlord cover', 'Rent loss while the property is uninhabitable'],
          ['Contents-only cover', 'Possessions only, for renters'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Under-insurance cuts the payout, it does not just reduce it',
        text: 'If your property is insured for less than its value, many policies apply proportional settlement — you receive only the proportion you insured. Insuring a ₹1 crore house for ₹40 lakh to save a few thousand rupees a year can leave you paying most of a loss yourself.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Check the flood and earthquake position',
        text: 'Flood and earthquake cover is not automatic everywhere. In a purchase agreement, it may be listed by the seller informally but excluded by the actual policy. Ask specifically, in writing, whether each peril is covered and for what sum insured.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Insure the market value, not the built-up cost',
        text: 'Rebuilding cost may be lower than market value. If you want the bank\'s outstanding loan cleared plus the property\'s value restored, insure the higher figure. Also store your policy digitally and keep a copy with the property documents.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Insure at current market or rebuild value, not an old inflated figure.',
          'Confirm flood and earthquake cover explicitly, in writing.',
          'Check for proportional settlement clauses.',
          'Add contents cover if you hold valuable items at home.',
          'Store the policy and the property documents together, digitally.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Proportional settlement in property insurance means:',
        options: [
          { text: 'You are paid the full value regardless of cover', correct: false, why: 'Not how it works.' },
          { text: 'If you under-insure, your payout is reduced in proportion', correct: true, why: 'Exactly right.' },
          { text: 'Premiums are refunded if no claim occurs', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Why do Indian households often skip property insurance?',
        options: [
          { text: 'Because it is illegal to insure a home', correct: false, why: 'It is legal.' },
          { text: 'Because once a house is fully paid off it feels safe, and the annual premium looks like a pure cost', correct: true, why: 'Exactly right.' },
          { text: 'Because banks require it', correct: false, why: 'Banks require it only while the loan runs.' },
        ],
      },
      {
        q: 'A property policy should be written for:',
        options: [
          { text: 'The original purchase price years ago', correct: false, why: 'Likely far below current value.' },
          { text: 'Current market or rebuild value, whichever you need honoured', correct: true, why: 'Exactly right.' },
          { text: 'The loan amount only', correct: false, why: 'The building itself is not the loan.' },
        ],
      },
    ],
    takeaway: 'Property insurance is widely skipped and under-bought. Insure at current value, confirm flood and earthquake cover explicitly, and remember under-insurance reduces the payout proportionally.',
  },
}