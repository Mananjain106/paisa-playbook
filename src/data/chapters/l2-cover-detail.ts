import type { Chapter } from '../../types'

/** Level 2, chapters 56–60: how policies are priced and what limits them. */
export const coverDetail: Record<string, Chapter> = {
  'l2-056': {
    id: 'l2-056',
    title: 'Insurance Premium',
    subtitle: 'The price of protection, and how it is set',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'Two people can pay different premiums for identical cover. The price follows risk, not fairness.' },
      { kind: 'p', text: 'A premium is what you pay for cover. In India it is usually annual, and it is priced by the insurer according to the risk it is taking — which means the same cover can cost very different amounts for different people.' },
      {
        kind: 'table',
        caption: 'What raises your premium',
        headers: ['Factor', 'Effect on premium'],
        rows: [
          ['Age (health insurance)', 'Rises sharply with age'],
          ['Pre-existing conditions', 'May exclude the condition, or price for it'],
          ['Health claims history', 'Higher after claims'],
          ['Smoking, alcohol, weight', 'Higher, where declared and assessed'],
          ['Occupation (life, accident)', 'Hazardous occupations cost more'],
          ['Sum insured chosen', 'Broadly proportional'],
          ['City (motor, travel)', 'Varies by zone and traffic density'],
          ['No-claim bonus (motor)', 'Reduces the premium each clean year'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Insurance should get cheaper as you get safer',
        text: 'With a no-claim bonus, motor premiums fall each year you do not claim. In health cover, staying healthy and making no claims over a long period usually allows renewal at a better price. Most people let this lapse by switching insurers for a small saving and losing their accumulated bonus.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The first-year discount can be a trap',
        text: 'An aggregator offering a very cheap first-year premium often raises the renewal price sharply, and bundling add-ons you will not use. Read the second-year renewal quote before accepting, not just the first-year price.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Always compare like with like',
        text: 'Comparing premiums across policies means comparing sum insured, deductibles, add-ons, network hospitals and claim ratios. A cheap premium with a ₹20,000 deductible and a restricted network is not cheaper insurance. Ask for the renewal terms in writing.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Read the renewal quote, not just the first-year offer.',
          'Keep claim-free years wherever the bonus applies.',
          'Compare policies on sum insured, deductible and network, not premium alone.',
          'Bundle only what you will actually use.',
          'Pay on time — late payment can void cover or attract penalties.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Premiums are mainly priced according to:',
        options: [
          { text: 'How important the customer is to the insurer', correct: false, why: 'Not the basis.' },
          { text: 'The risk the insurer is taking — age, health, claims, usage and sum insured', correct: true, why: 'Exactly right.' },
          { text: 'The length of the policy term', correct: false, why: 'Term matters but is not the main driver.' },
        ],
      },
      {
        q: 'A very low first-year premium should prompt you to ask:',
        options: [
          { text: 'Nothing, a low price is always good', correct: false, why: 'Renewal terms can differ sharply.' },
          { text: 'What the second-year renewal will cost and which add-ons are bundled', correct: true, why: 'Exactly right.' },
          { text: 'Whether the insurer is profitable', correct: false, why: 'Irrelevant to you.' },
        ],
      },
      {
        q: 'The no-claim bonus means:',
        options: [
          { text: 'You receive a refund for not claiming', correct: false, why: 'It reduces the premium instead.' },
          { text: 'Your premium falls with each claim-free year and rises after a claim', correct: true, why: 'Exactly right.' },
          { text: 'Claims are paid faster', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Premiums are priced on risk. Read renewal terms before accepting a first-year offer, keep claim-free years where the bonus applies, and compare policies on cover rather than price alone.',
  },

  'l2-057': {
    id: 'l2-057',
    title: 'Sum Insured',
    subtitle: 'How much cover is enough',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Sum insured is the maximum the insurer will pay on a claim. It is the single most important number in a policy, because it caps your loss no matter how expensive the treatment. Choosing it too low is the most common and most expensive insurance mistake.' },
      {
        kind: 'table',
        caption: 'How to size the sum insured',
        headers: ['Policy type', 'Sizing guide'],
        rows: [
          ['Health insurance', 'About 10× annual household income, more with dependents or elderly parents'],
          ['Life (term)', 'Income × years of dependency, minus debts and investable assets'],
          ['Motor third-party', 'Statutory minimum, but consider far higher if you can afford it'],
          ['Home insurance', 'Rebuild cost or market value, whichever is higher'],
          ['Travel insurance', 'Medical + trip cancellation + baggage value'],
          ['Accident cover', 'A few years of income at minimum'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Medical inflation is severe in India',
        text: 'Hospital costs have risen far faster than general inflation for two decades, and advanced procedures in private hospitals are expensive. A cover of ₹5 lakh bought today may be worth materially less in ten years, so health cover needs periodic review and topping up as costs rise.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Under-insurance is silent until the claim',
        text: 'There is no warning that your cover is too low — you discover it when the hospital bill exceeds it. A ₹5 lakh policy with an ₹11 lakh ICU bill leaves you to find ₹6 lakh. Sizing is the only defence, and it must be done deliberately.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Top-ups are cheap way to raise cover',
        text: 'A top-up policy adds limit on top of an existing base policy, usually with no additional waiting period and often at a lower premium rate per rupee than a fresh policy. It is the most cost-effective route to closing an adequacy gap.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Size health cover on income and family, not on a round number.',
          'Review cover annually as income, family and medical costs change.',
          'Use top-ups rather than discarding an existing base policy.',
          'For life cover, subtract debts and liquid assets.',
          'For property, insure rebuild cost or market value, whichever is higher.',
        ],
      },
      { kind: 'sim', name: 'cover', caption: 'Check whether your current sum insured is adequate.' },
    ],
    quiz: [
      {
        q: 'Sum insured represents:',
        options: [
          { text: 'The annual premium you pay', correct: false, why: 'That is the premium.' },
          { text: 'The maximum the insurer will pay on a claim', correct: true, why: 'Exactly right.' },
          { text: 'The number of years of cover', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'A good starting point for health cover is:',
        options: [
          { text: 'About ten times annual household income', correct: true, why: 'Exactly right.' },
          { text: 'Exactly ₹5 lakh', correct: false, why: 'A round number unrelated to your exposure.' },
          { text: 'One month of income', correct: false, why: 'Far too little.' },
        ],
      },
      {
        q: 'Why is topping up often the cheapest way to raise cover?',
        options: [
          { text: 'Because top-ups have no waiting period and often a lower rate per rupee', correct: true, why: 'Exactly right.' },
          { text: 'Because they are free', correct: false, why: 'They cost money.' },
          { text: 'Because they never claim', correct: false, why: 'They do claim.' },
        ],
      },
    ],
    takeaway: 'Sum insured caps your loss, so under-insuring is silent and expensive. Size health cover around ten times income, review it annually, and use top-ups to close gaps cheaply.',
  },

  'l2-058': {
    id: 'l2-058',
    title: 'Deductibles',
    subtitle: 'The amount you agree to keep',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'A higher deductible lowers the premium and raises the amount you must find yourself.' },
      { kind: 'p', text: 'A deductible, or excess, is the amount of a claim you agree to pay yourself; the insurer pays the rest. Higher deductibles lower the premium, which is a genuine trade — but only if you can actually absorb the deductible when you need to.' },
      {
        kind: 'table',
        caption: 'How deductibles trade against premium',
        headers: ['Deductible', 'Premium effect', 'Sensible for'],
        rows: [
          ['₹5,000', 'Highest', 'People with a real emergency fund'],
          ['₹25,000', 'Moderate', 'Most households with a buffer'],
          ['₹50,000', 'Lower', 'People who can self-fund ₹50,000 easily'],
          ['₹1 lakh', 'Lowest', 'Not usually worth the risk'],
          ['Nil excess add-on', 'Premium rises', 'Those who want no shortfall at claim time'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'A deductible is only cheap if you can meet it',
        text: 'Choosing a ₹1 lakh deductible to save ₹2,000 a year is a bad trade if a claim lands in a month you cannot produce ₹1 lakh. The saving is real, but the risk it creates is far larger than the saving.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Nil excess add-ons exist, and are sometimes worth it',
        text: 'Motor insurers offer a NIL excess (deductible waiver) add-on that removes the deduction at claim time. For comprehensive cover on a newer car, where even a small excess is a meaningful share of the claim, it can be worth the extra premium.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Emergency fund and deductible are linked',
        text: 'Your emergency fund should comfortably exceed your insurance deductible. That is the practical reason the fund exists: not for small expenses, but for the moment a ₹50,000 claim lands alongside a month you were already short.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Compare deductibles across quotes, not just premiums.',
          'Choose a deductible comfortably below your emergency fund.',
          'Consider NIL excess on comprehensive motor cover for newer cars.',
          'Ask whether the deductible applies per person or per policy.',
          'Check whether there is a separate deductible for room rent and for consumables.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A deductible is:',
        options: [
          { text: 'The amount you pay out of pocket on a claim, with the insurer paying the rest', correct: true, why: 'Exactly right.' },
          { text: 'The amount the insurer keeps', correct: false, why: 'Not the definition.' },
          { text: 'A penalty for late claim filing', correct: false, why: 'Different thing.' },
        ],
      },
      {
        q: 'Choosing a high deductible is only sensible if:',
        options: [
          { text: 'You are certain you will never claim', correct: false, why: 'That is not a plan.' },
          { text: 'You could comfortably pay it from an emergency fund when needed', correct: true, why: 'Exactly right.' },
          { text: 'The insurer prefers it', correct: false, why: 'Irrelevant.' },
        ],
      },
      {
        q: 'A NIL excess add-on:',
        options: [
          { text: 'Reduces your premium to zero', correct: false, why: 'Unrelated.' },
          { text: 'Removes the deductible at claim time, usually for a higher premium', correct: true, why: 'Exactly right.' },
          { text: 'Covers you against price increases', correct: false, why: 'Not what it does.' },
        ],
      },
    ],
    takeaway: 'A deductible is your share of a claim and a real trade against premium. Choose one your emergency fund comfortably covers, and consider NIL excess on newer vehicles.',
  },

  'l2-059': {
    id: 'l2-059',
    title: 'Exclusions',
    subtitle: 'What the policy will not pay for',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'policy-gaps', caption: 'The shield only covers what the policy says it covers. Everything else falls through it.' },
      { kind: 'p', text: 'An exclusion is something the policy does not cover. Exclusions are where most claim rejections happen, and they are always written in the policy document rather than the sales pitch. Reading them before buying is the single most effective way to avoid a rejected claim.' },
      {
        kind: 'table',
        caption: 'Common exclusions in Indian policies',
        headers: ['Policy', 'Frequent exclusions'],
        rows: [
          ['Health', 'Pre-existing disease (2–4 years), waiting periods, cosmetic surgery, dental unless listed, intoxication, self-inflicted injury'],
          ['Motor', 'Mechanical or electrical breakdown, wear and tear, tyre damage, water ingress without comprehensive, driving without a valid licence'],
          ['Life', 'Suicide within one or two years, pre-existing disease disclosure failure, criminal activity, intoxication'],
          ['Home', 'Wear and tear, gradual deterioration, deliberate damage, unoccupied property beyond a period'],
          ['Travel', 'Pre-existing conditions, risky sports, no medical evacuation cover, passport loss after leaving India'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Waiting periods are the most common surprise',
        text: 'Most health policies impose a waiting period — typically 24 to 36 months — on pre-existing conditions declared at purchase. That means you may pay premiums for years before being covered for the very condition you are worried about. Declaring honestly at purchase is what starts that clock; concealing it invalidates the policy entirely.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Non-disclosure is worse than a rejected claim',
        text: 'Failing to declare a pre-existing condition does not merely delay a claim — it voids the contract, and insurers also report the lapse to the credit bureau. Honesty costs money; concealment costs coverage and your credit record.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Read these four sections before paying',
        text: 'The policy wording, the exclusions list, the waiting periods, and the claim process. A policy summary from a salesperson is marketing; the wording is the contract. Ten minutes reading prevents most disputes.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Read exclusions and waiting periods before buying, not after a claim.',
          'Declare every pre-existing condition truthfully.',
          'Check whether your specific worry is covered or excluded.',
          'Ask in writing if an exclusion is ambiguous.',
          'Store a copy of the policy and its wording, not just the premium receipt.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Most claim rejections happen because of:',
        options: [
          { text: 'Insurers being unreliable', correct: false, why: 'Most rejections trace to policy terms.' },
          { text: 'Exclusions and waiting periods the policyholder did not read', correct: true, why: 'Exactly right.' },
          { text: 'Claims being filed too late', correct: false, why: 'Late filing is a factor but not the main one.' },
        ],
      },
      {
        q: 'A waiting period on a pre-existing condition means:',
        options: [
          { text: 'You pay premiums but are not covered for it until the period ends', correct: true, why: 'Exactly right.' },
          { text: 'You are never covered for it', correct: false, why: 'That is a permanent exclusion.' },
          { text: 'You get a refund if you do not claim', correct: false, why: 'Not what it does.' },
        ],
      },
      {
        q: 'Not declaring a pre-existing condition results in:',
        options: [
          { text: 'A higher premium in the next year', correct: false, why: 'Much worse than that.' },
          { text: 'The policy being voided and the lapse being reported to the credit bureau', correct: true, why: 'Exactly right.' },
          { text: 'A shorter waiting period', correct: false, why: 'The opposite.' },
        ],
      },
    ],
    takeaway: 'Most rejections come from exclusions and waiting periods nobody read. Read the policy wording before buying, and declare pre-existing conditions honestly — concealment voids cover and damages your credit record.',
  },

  'l2-060': {
    id: 'l2-060',
    title: 'Claims',
    subtitle: 'The moment the policy is tested',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'claim-steps', caption: 'Pre-authorisation before admission is what makes a cashless claim quick.' },
      { kind: 'p', text: 'A claim is the process of asking the insurer to pay for a covered loss. How it is handled — cashless or reimbursement, and how smoothly — matters as much as whether you have cover, and a poor claims experience can be as damaging financially as no insurance at all.' },
      {
        kind: 'table',
        caption: 'Cashless vs reimbursement',
        headers: ['Aspect', 'Cashless (hospital)'],
        rows: [
          ['Who pays the hospital', 'Insurer directly'],
          ['Your upfront payment', 'Usually just the deductible'],
          ['Speed', 'Fast if pre-approved'],
          ['Requirement', 'Treatment at a network hospital, with pre-authorisation'],
          ['Best for', 'Planned hospitalisations, major surgeries'],
        ],
      },
      {
        kind: 'formula',
        label: 'Reimbursement checklist',
        expr: 'Discharge summary + itemised final bill + investigation reports + pharmacy bills + ID proof + claim form',
        note: 'Keep originals and take copies of everything before leaving the hospital.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Pre-authorisation is where claims are won or lost',
        text: 'For cashless treatment, you or the hospital must obtain pre-authorisation from the insurer before admission. A cashless claim without prior approval is often settled on a reimbursement basis, delaying payment by weeks. One phone call before admission prevents almost all of that.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The first 48 hours matter',
        text: 'Intimate your insurer as soon as an incident or admission occurs. Most policies require prompt intimation, and late intimation is a common ground for reducing or rejecting a claim. Keep the insurer\'s 24-hour helpline number saved in your phone.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Escalate in writing',
        text: 'If a claim is delayed or wrongly reduced, ask for the reason in writing, quote your policy clause, and escalate to the insurer\'s grievance officer and then the IRDAI if unresolved. A documented escalation is far more effective than repeated calls.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Save your insurer\'s claim helpline in your phone now.',
          'Get pre-authorisation before planned admission.',
          'Intimate any incident immediately, in writing where possible.',
          'Photograph all documents before leaving the hospital.',
          'Escalate in writing with a policy clause reference.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Pre-authorisation for a planned hospitalisation:',
        options: [
          { text: 'Is optional in India', correct: false, why: 'It is essential for cashless treatment.' },
          { text: 'Should be obtained before admission, or the claim may be settled on reimbursement terms', correct: true, why: 'Exactly right.' },
          { text: 'Applies only to emergency admissions', correct: false, why: 'Emergency is exactly when it is hardest to obtain.' },
        ],
      },
      {
        q: 'Failing to intimate an incident to the insurer promptly can:',
        options: [
          { text: 'Have no effect', correct: false, why: 'It can.' },
          { text: 'Give the insurer a ground for reducing or rejecting the claim', correct: true, why: 'Exactly right.' },
          { text: 'Only increase your premium next year', correct: false, why: 'More serious than that.' },
        ],
      },
      {
        q: 'The most effective way to escalate a disputed claim is to:',
        options: [
          { text: 'Keep calling the helpline', correct: false, why: 'Repetition rarely helps.' },
          { text: 'Escalate in writing, quoting the specific policy clause, and use the grievance officer', correct: true, why: 'Exactly right.' },
          { text: 'Complain on social media', correct: false, why: 'Unreliable and reactive.' },
        ],
      },
    ],
    takeaway: 'A claim is where cover is tested. Pre-authorise before planned admission, intimate immediately, keep every document, and escalate disputed claims in writing with the policy clause quoted.',
  },
}