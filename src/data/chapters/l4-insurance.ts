import type { Chapter } from '../../types'
import { scene4 } from '../../lib/chapter-blocks'

const SCENE_0 = scene4('cover-ladder')

export const insurance: Record<string, Chapter> = {
  'l4-037': {
    id: 'l4-037',
    title: 'Life Insurance',
    subtitle: 'Protection first, investment second — usually much second.',
    minutes: 6,
    blocks: [
      SCENE_0,
      { kind: 'p', text: "Life insurance is often sold as a single story — protect your family. The trouble is that in practice, people bundle protection and investment together and end up paying for both, often badly. The clearer way to think about life insurance is as a risk-transfer product: it is meant to replace the financial impact of death on dependents, not to be the main engine of wealth creation." },
      SCENE_0,
      { kind: 'h', text: 'The two jobs of life insurance' },
      { kind: 'list', items: [
        'Protection: a death benefit that supports dependents who depend on the insured’s income or presence.',
        'Savings or investment: a savings element, if any, that should be judged separately and usually not as the primary reason to buy the policy.',
        'The clean split matters because if you need protection, the cheapest and simplest form is usually a pure protection policy; if you need investment, there is usually a more efficient place for it.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The blended-policy trap', text: "A policy that tries to do both can look convenient, but it often costs more and delivers less on each job than doing them separately. If you need life cover, buy cover. If you need investment, invest. Mixing the two can be comfortable, but comfort is not the same as value." },
      SCENE_0,
      { kind: 'example', title: 'A clean separation', text: 'One family buys a term policy to cover the financial risk of the earning member’s death, and invests separately in a way they understand. Another family buys a single policy that blends both. The first family usually knows what each rupee is doing. The second family often discovers years later that the protection was thinner than expected and the investment returns were disappointing. Same goal, very different outcome.' },
      { kind: 'terms', items: [
        { term: 'life insurance', meaning: 'a contract that pays a benefit on the death of the insured, usually meant to protect dependents from the financial impact of that loss.' },
        { term: 'protection', meaning: 'the risk-cover function of insurance — paying when a specified adverse event happens, rather than building wealth directly.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the cleanest way to think about life insurance?',
        options: [
          { text: 'As a protection product for dependents, with any savings element judged separately and usually not as the main reason to buy it.', correct: true, why: 'Splitting protection from investment makes the decision clearer and often cheaper and more effective for each purpose.' },
          { text: 'As the single best way to both protect and build wealth, since it does both at once.', correct: false, why: 'A blended policy can do both, but not necessarily well. Doing the jobs separately is often clearer and more efficient.' },
          { text: 'As an investment product first, with protection as a minor side benefit.', correct: false, why: 'For most people needing life cover, the protection job is the primary one; treating it mainly as an investment often leads to poor outcomes.' },
        ],
      },
    ],
    takeaway: 'Life insurance is primarily a protection product. Buy cover for the dependents who need it, and handle investment separately, where you can see the returns more clearly.',
  },

  'l4-038': {
    id: 'l4-038',
    title: 'Term Insurance',
    subtitle: 'Simple, low-cost protection for a defined period.',
    minutes: 6,
    blocks: [
      scene4('term-cover-rungs'),
      { kind: 'p', text: "Term insurance is the pure-protection version of life insurance: you pay a premium for a death benefit over a chosen term, and if you survive the term, there is typically no maturity payout beyond what the policy terms provide. Because it is focused on protection and not on savings, the cost per unit of cover is usually much lower than in blended products. That is the point." },
      scene4('term-cover-rungs'),
      { kind: 'h', text: 'Why term cover is often the core of life protection' },
      { kind: 'list', items: [
        'It provides a large death benefit for a relatively small premium compared with savings-oriented policies.',
        'It is simple: cover for a term, with the risk-transfer job done clearly.',
        'It fits families who need to protect dependents and do not want to overpay for a bundled savings element they may not need.',
        'It is usually the recommended base layer of life insurance where protection is the real need.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Match the cover to the dependency, not to the maximum number you can afford', text: "The point of term cover is to protect dependents if something happens to the earning member. The right amount depends on the people who rely on that income, the debts to be covered, and the years of support needed — not on buying the biggest policy that fits the budget. A well-sized term policy is a responsibility tool, not a trophy." },
      scene4('term-cover-rungs'),
      { kind: 'example', title: 'A practical term decision', text: 'If the family would face a serious loss of income on the death of the main earner, term insurance can bridge that gap for the years dependents need support. If the dependents are minimal and debts are small, the need is much smaller. Term insurance is not one-size-fits-all; it is sized to the risk it is meant to cover.' },
      { kind: 'terms', items: [
        { term: 'term insurance', meaning: 'a life insurance product that provides cover for a fixed term, paying a benefit on death during the term, often with little or no savings element.' },
        { term: 'death benefit', meaning: 'the benefit paid under a life insurance policy when the insured dies during the cover period.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main advantage of term insurance for someone who needs life cover?',
        options: [
          { text: 'It can provide a large death benefit for a relatively low premium because it is focused on protection rather than savings.', correct: true, why: 'That is the design advantage of term cover: clear protection, usually at a lower cost per unit of cover than blended products.' },
          { text: 'It always builds a large cash value that you can withdraw whenever you want.', correct: false, why: 'Pure term insurance is not primarily a cash-value product; its job is protection over the term.' },
          { text: 'It is the best product for building wealth, since it combines cover and high returns.', correct: false, why: 'Term insurance is for protection. For wealth-building, other products are usually more suitable and more transparent.' },
        ],
      },
    ],
    takeaway: 'Term insurance is the pure-protection life product: cover for a term, often at a lower cost per unit of cover. For many families, it is the sensible base layer of life protection.',
  },

  'l4-039': {
    id: 'l4-039',
    title: 'Whole-Life Insurance',
    subtitle: 'Protection that lasts for life, with a different cost and purpose.',
    minutes: 6,
    blocks: [
      scene4('whole-life-bundle'),
      { kind: 'p', text: "Whole-life insurance is life cover that lasts for the insured’s life rather than a fixed term. It can serve a specific purpose — for example, leaving a defined benefit to dependents regardless of when death occurs, or providing permanent cover for a continuing obligation. The trade-off is usually cost: permanent cover tends to be more expensive per unit of protection than pure term cover." },
      scene4('whole-life-bundle'),
      { kind: 'h', text: 'When whole-life can make sense' },
      { kind: 'list', items: [
        'When the need for cover does not end at a fixed age — for example, a permanent obligation or a desire to leave a guaranteed benefit.',
        'When you want life-long protection rather than cover that expires.',
        'When you understand and accept that the cost is higher because the cover is permanent and the product may include a savings element.',
        'When it serves a real purpose rather than being chosen because it sounds like a complete solution.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Permanent cover is not automatically better cover', text: "A longer-lasting policy is not always the right answer. For many people, the real need is protection during the dependent years, which can be served by term cover. Whole-life is useful for specific purposes, but it is not a default upgrade from term insurance; it is a different tool with a different cost structure." },
      scene4('whole-life-bundle'),
      { kind: 'example', title: 'A purpose-led choice', text: 'Someone with a lifelong dependent or a specific bequest goal might consider whole-life cover so that the benefit persists regardless of when death occurs. Someone whose main concern is protecting a young family during the years they rely on income might be better served by term cover sized to that period. The right choice depends on the purpose, not the label.' },
      { kind: 'terms', items: [
        { term: 'whole-life insurance', meaning: 'a life insurance product that provides cover for the insured’s whole life, usually at a higher cost than term cover and sometimes with a savings element.' },
        { term: 'permanent cover', meaning: 'insurance that lasts for the insured’s life or for a very long period, rather than expiring at the end of a fixed term.' },
      ] },
    ],
    quiz: [
      {
        q: 'When is whole-life insurance most likely to be a suitable choice?',
        options: [
          { text: 'When the insured has a permanent or lifelong need for cover and understands the higher cost compared with term insurance.', correct: true, why: 'Whole-life is for situations where the cover need is long-lasting, not just for the dependent years, and the cost trade-off is accepted.' },
          { text: 'Whenever someone wants the cheapest possible life cover for a short period.', correct: false, why: 'Whole-life is usually more expensive per unit of cover than term insurance, so it is not the cheapest short-term solution.' },
          { text: 'When the main goal is to save money in the same way as a bank account.', correct: false, why: 'Whole-life is insurance first; it is not mainly a savings account, and its cost and features should be judged as insurance.' },
        ],
      },
    ],
    takeaway: 'Whole-life insurance provides cover for the insured’s life, which can suit specific permanent needs. It is a different tool from term insurance, usually with a higher cost, and is best chosen for a purpose.',
  },

  'l4-040': {
    id: 'l4-040',
    title: 'Endowment Plans',
    subtitle: 'Protection with a savings promise — and a cost for that promise.',
    minutes: 6,
    blocks: [
      scene4('endowment-mix'),
      { kind: 'p', text: "An endowment plan is a life insurance product that combines protection with a maturity benefit: if the insured survives the policy term, the plan pays a sum at the end, and if the insured dies during the term, a death benefit is paid. The appeal is the promise of both protection and a lump sum at maturity. The caution is that this combination usually comes at a higher cost than buying protection and savings separately." },
      scene4('endowment-mix'),
      { kind: 'h', text: 'What endowment plans are trying to do' },
      { kind: 'list', items: [
        'Provide life cover during the term.',
        'Promise a maturity benefit if the insured survives, often marketed as a disciplined savings outcome.',
        'Combine both in one product so the customer sees one premium and one policy.',
        'Appeal to people who like the idea of a guaranteed-ish end benefit alongside protection.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The endowment trade-off', text: "The problem is not that endowment plans are bad by definition. The problem is that they often cost more for the same protection and deliver lower growth than a simple term policy plus a separate investment. The convenience is real, but convenience has a price. Ask what each part actually costs and whether the combined product is still worth it." },
      scene4('endowment-mix'),
      { kind: 'example', title: 'Separating the jobs', text: 'Consider a family that wants both life cover and a savings outcome. If it buys an endowment plan, it gets one product doing both jobs. If it buys term insurance for protection and invests the difference separately, it may get better-targeted protection and a more transparent return. The second route is not always right, but it is often worth comparing before committing to the blended product.' },
      { kind: 'terms', items: [
        { term: 'endowment plan', meaning: 'a life insurance policy that provides both protection and a maturity benefit if the insured survives the term.' },
        { term: 'maturity benefit', meaning: 'the sum paid at the end of a policy term if the insured is alive at that point, according to the policy terms.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which statement about endowment plans is most accurate?',
        options: [
          { text: 'They combine life cover with a maturity benefit, but that combination usually costs more than buying protection and savings separately.', correct: true, why: 'Endowment plans are designed to do two jobs, but the convenience often comes with a higher cost and lower efficiency than a split approach.' },
          { text: 'They are always the cheapest way to buy life cover, because the maturity benefit makes them low-cost.', correct: false, why: 'Endowment plans are usually not the cheapest pure protection option; the savings element adds cost.' },
          { text: 'They are purely investment products, with no insurance element at all.', correct: false, why: 'Endowment plans are insurance-plus-savings products, not pure investments without risk cover.' },
        ],
      },
    ],
    takeaway: 'Endowment plans blend protection and a maturity benefit, which can be appealing. But the convenience usually costs more than doing protection and savings separately, so compare before you commit.',
  },

  'l4-041': {
    id: 'l4-041',
    title: 'ULIPs',
    subtitle: 'Insurance with an investment flavour — understand what you are paying for.',
    minutes: 6,
    blocks: [
      scene4('ulip-charges'),
      { kind: 'p', text: "ULIP stands for Unit-Linked Insurance Plan. It is a life insurance product where part of the premium goes to insurance cover and part is invested in units linked to market funds, similar in spirit to a mix of protection and investment. The attraction is the idea of one product that does both. The reality is that ULIPs can be useful for some people, but they are not automatically the best way to do either job." },
      scene4('ulip-charges'),
      { kind: 'h', text: 'What to watch in a ULIP' },
      { kind: 'list', items: [
        'The split between insurance cost and investment: understand how much of the premium is doing each job.',
        'The charges: ULIPs can involve various fees and costs that affect returns.',
        'The fund choices and risk: the investment side is market-linked, so returns can rise or fall.',
        'The lock-in and structure: these plans often have features that make them less flexible than a separate insurance and investment setup.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'ULIPs are not a secret high-return shortcut', text: "ULIPs can be attractive because they blend cover and market-linked investments, but the blend also means you should compare them against the simple alternative: term cover plus a separate investment. If the combined product does not beat that clearly after costs, the convenience may not be worth it." },
      scene4('ulip-charges'),
      { kind: 'example', title: 'A comparison habit', text: 'Before buying a ULIP, compare the insurance cover on a standalone term plan and the investment on a product you understand well. Ask whether the ULIP’s combined structure gives you something genuinely better, or whether you are paying extra for packaging. The answer is sometimes yes, often no — but you should know which.' },
      { kind: 'terms', items: [
        { term: 'ULIP', meaning: 'Unit-Linked Insurance Plan — a life insurance product where part of the premium is invested in market-linked units, combining protection and investment in one product.' },
        { term: 'unit-linked', meaning: 'tied to units in an investment fund, so the value moves with the market performance of that fund rather than being a fixed assured benefit.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important thing to understand before buying a ULIP?',
        options: [
          { text: 'How the premium is split between insurance cover and investment, what the charges are, and whether a term plan plus separate investment would be better.', correct: true, why: 'ULIPs combine two jobs, so the sensible comparison is the cost and outcome of doing each job separately and seeing whether the blend is worth it.' },
          { text: 'That ULIPs are guaranteed high-return products with no risk.', correct: false, why: 'ULIPs are market-linked on the investment side, so they can go up or down; they are not risk-free high-return products.' },
          { text: 'Only the insurance cover, since the investment part is too small to matter.', correct: false, why: 'The investment side can matter a lot because it affects the value; ignoring it misses half the product.' },
        ],
      },
    ],
    takeaway: 'ULIPs combine protection and market-linked investment in one product. They can suit some people, but you should compare the blend with term cover plus a separate investment before buying.',
  },

  'l4-042': {
    id: 'l4-042',
    title: 'Insurance Vs Investment',
    subtitle: 'Two different jobs, usually best kept separate.',
    minutes: 6,
    blocks: [
      SCENE_0,
      { kind: 'p', text: "A lot of financial confusion comes from treating insurance and investment as if they were the same kind of product. They are not. Insurance is about transferring risk — paying a premium so that, if a bad event happens, the financial consequence is handled. Investment is about putting money to work to grow or produce income over time. The overlap products exist, but the overlap is not a reason to blur the two jobs." },
      SCENE_0,
      { kind: 'h', text: 'The two jobs side by side' },
      { kind: 'list', items: [
        'Insurance: protects against a specific adverse event, usually for a defined risk and a defined payout condition.',
        'Investment: aims to grow money or generate income over time, with risk and return instead of a promised payout on an event.',
        'The cleanest planning usually keeps the two separate so you can see the cost of protection and the return on investment clearly.',
        'When a product blends both, test each job separately before you trust the blend.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'A good rule of thumb', text: "If you need protection, buy protection. If you want growth, invest. If a product claims to do both brilliantly, demand the proof for each job separately. Most of the time, the magic is in the marketing, not the mechanism." },
      SCENE_0,
      { kind: 'example', title: 'Same rupees, different purposes', text: 'A family might buy term insurance to cover the risk of income loss on death, and separately invest in assets they understand. That makes it obvious what money is protecting the family and what money is growing the family’s future. If those jobs are mashed together, it becomes harder to see whether either is being done well.' },
      { kind: 'terms', items: [
        { term: 'insurance', meaning: 'a contract for transferring risk, where a premium is paid in return for a payout under defined adverse conditions.' },
        { term: 'investment', meaning: 'putting money to work with the aim of growth or income over time, accepting risk in pursuit of return.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful rule of thumb for insurance and investment?',
        options: [
          { text: 'Keep the jobs separate: buy protection for risk, and invest for growth, rather than confusing one product for the other.', correct: true, why: 'Separating the jobs makes cost and return easier to see and usually leads to better-targeted decisions.' },
          { text: 'Always buy a single product that claims to do both, because that is the smartest way to save money.', correct: false, why: 'A combined product can be convenient, but it is not automatically superior; the jobs should still be tested separately.' },
          { text: 'Treat insurance as the main way to build wealth, since it always gives the best returns.', correct: false, why: 'Insurance is not primarily a wealth-building tool; its core job is risk transfer, not maximum return.' },
        ],
      },
    ],
    takeaway: 'Insurance and investment do different jobs. Protection handles risk; investment grows money. Keeping them separate usually makes both decisions clearer and better.',
  },

  'l4-043': {
    id: 'l4-043',
    title: 'Health Insurance In Greater Depth',
    subtitle: 'Why health cover deserves more attention than it usually gets.',
    minutes: 7,
    blocks: [
      SCENE_0,
      { kind: 'p', text: "Health insurance is one of the few products that can matter more in a single bad year than all the investing you do in ten good ones. A serious illness or accident can generate costs that wipe out savings quickly. The reason health cover deserves depth is not that it is glamorous; it is that the downside is large, sudden, and hard to recover from without insurance." },
      SCENE_0,
      { kind: 'h', text: 'What to look for beyond the headline sum insured' },
      { kind: 'list', items: [
        'Scope of coverage: what is covered, what is excluded, and how broad the definition of a hospitalisation event is.',
        'Room rent, ICU, and other limits: sub-limits can quietly shrink the value of a big headline number.',
        'Network hospitals and cashless facilities: the practical convenience matters when you are stressed.',
        'Family structure: individual covers, floater covers, and how the cover fits the people it is meant to protect.',
        'Renewability: the value of a policy is often in the ability to keep it when you need it most.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Health costs can move faster than you expect', text: "In India, hospital costs, specialist care, and related expenses can rise quickly and unevenly. A sum insured that feels comfortable today may stretch thin in a bad year if it is eroded by sub-limits, exclusions, and medical inflation. The practical habit is to buy with the worst year in mind, not the average year." },
      SCENE_0,
      { kind: 'example', title: 'A health cover audit', text: 'Check whether the policy’s real value is closer to the headline sum insured or much less once room rent, disease-specific limits, and exclusions are considered. Then ask whether the cover is enough for a serious event in a good hospital, and whether it can be renewed as you age. The point of the audit is to find the gap before the gap finds you.' },
      { kind: 'terms', items: [
        { term: 'health insurance', meaning: 'insurance that covers medical expenses from illness or injury, often including hospitalisation and related costs under the policy terms.' },
        { term: 'sum insured', meaning: 'the maximum amount the policy will pay for a covered event or over the policy period, subject to the terms and limits.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why does health insurance deserve deeper attention than many people give it?',
        options: [
          { text: 'Because a single serious illness or accident can create costs large enough to wipe out savings quickly, so the downside is severe and sudden.', correct: true, why: 'Health cover is about protecting against a high-impact, hard-to-recover event, not just a routine expense.' },
          { text: 'Because health insurance is the best way to build wealth through investment returns.', correct: false, why: 'Health insurance is primarily protection, not an investment product; its value is in risk reduction, not returns.' },
          { text: 'Because it is popular and therefore always a good buy regardless of the policy details.', correct: false, why: 'Popularity does not make a policy good. The details — scope, limits, exclusions, renewability — matter a lot.' },
        ],
      },
    ],
    takeaway: 'Health insurance is one of the most important financial protections because a serious medical event can damage finances fast. Look beyond the headline sum insured to scope, limits, network, and renewability.',
  },

  'l4-044': {
    id: 'l4-044',
    title: 'Deductibles',
    subtitle: 'The part of the claim you pay first — and why that can be a good thing.',
    minutes: 5,
    blocks: [
      scene4('deductible-tradeoff'),
      { kind: 'p', text: "A deductible is the amount you agree to bear before the insurer pays the rest of a covered claim. It is a simple idea, but it has a big effect on the policy’s cost and on how you use it. A higher deductible usually lowers the premium, because you are taking on more of the small claims yourself and leaving the insurer to cover the larger ones." },
      { kind: 'h', text: 'Why deductibles exist' },
      { kind: 'list', items: [
        'To reduce moral hazard: if you have some skin in the game, you are less likely to claim for trivial amounts.',
        'To lower premiums: by taking on small claims, you shift less cost to the insurer for every minor event.',
        'To focus the cover on larger, more serious losses, which is often where insurance matters most.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Use deductibles deliberately, not by accident', text: "A deductible is not just a penalty; it is a design choice. If you can comfortably absorb small out-of-pocket costs, a higher deductible can make sense because it can reduce the premium and preserve the cover for bigger events. The right deductible is the one that matches your cash buffer and your risk tolerance." },
      { kind: 'example', title: 'Deductible in practice', text: 'If a policy has a ₹25,000 deductible and a covered hospitalisation costs ₹4 lakh, you pay the first ₹25,000 and the insurer pays the balance under the policy terms, subject to limits. If the claim is only ₹20,000, the deductible means the insurer may pay nothing. The deductible shapes both premium and claims behaviour.' },
      { kind: 'terms', items: [
        { term: 'deductible', meaning: 'the amount the insured agrees to pay first before the insurer pays the rest of a covered claim, often used to reduce premiums.' },
        { term: 'premium', meaning: 'the amount paid for an insurance policy, which is affected by choices such as the deductible, the sum insured, and the risk covered.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most accurate effect of a higher deductible?',
        options: [
          { text: 'It usually lowers the premium because you take on more of the small claims yourself.', correct: true, why: 'A higher deductible shifts more of the small-claim cost to the insured, which typically reduces the insurer’s exposure and the premium.' },
          { text: 'It makes the policy pay more on every claim, including the smallest ones.', correct: false, why: 'A higher deductible means the insured pays more upfront on a claim, not less; small claims may even fall entirely below the deductible.' },
          { text: 'It removes all out-of-pocket costs for the insured on every claim.', correct: false, why: 'A deductible is, by definition, an amount the insured pays; it does not eliminate out-of-pocket cost.' },
        ],
      },
    ],
    takeaway: 'A deductible is the part of a claim you pay first. Used deliberately, it can lower your premium and focus the cover on the larger events where insurance really matters.',
  },

  'l4-045': {
    id: 'l4-045',
    title: 'Co-Pay',
    subtitle: 'Another way you share the claim cost with the insurer.',
    minutes: 5,
    blocks: [
      scene4('copay-slice'),
      { kind: 'p', text: "A co-pay is the share of a covered claim that you agree to pay each time, usually expressed as a percentage or a fixed amount. Like a deductible, it reduces the insurer’s exposure to every claim, but it works differently: instead of a one-time threshold, it is a shared slice of the claim that can apply more often. The practical effect is that you bear part of the cost when you claim, which can lower the premium." },
      { kind: 'h', text: 'Co-pay versus deductible' },
      { kind: 'list', items: [
        'A deductible is a threshold you meet before the insurer pays, often once per claim or once in a defined way.',
        'A co-pay is a share you pay on the claim, which can apply again and again depending on the policy.',
        'Both reduce premiums by shifting some cost to you, but they shape claims behaviour in different ways.',
        'The right choice depends on how often you expect to claim and how much you can comfortably pay out of pocket.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Read the co-pay carefully', text: "A co-pay can sound small until you face a large hospital bill and discover that your share is still meaningful. The percentage form is especially important to understand: a 10% co-pay on a large bill is not a small number. Read the policy in plain arithmetic before you rely on the headline." },
      { kind: 'example', title: 'Co-pay example', text: 'If a covered hospitalisation costs ₹3 lakh and the policy has a 10% co-pay, you pay ₹30,000 and the insurer pays the balance under the policy terms, subject to limits. If the co-pay is 20%, your share rises to ₹60,000. The same bill, two very different out-of-pocket numbers.' },
      { kind: 'terms', items: [
        { term: 'co-pay', meaning: 'the share of a covered claim that the insured pays, often as a percentage, in addition to or instead of a deductible, depending on the policy.' },
        { term: 'out-of-pocket', meaning: 'the cost the insured bears directly, such as a deductible or co-pay, rather than what the insurer pays.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the key difference between a co-pay and a deductible?',
        options: [
          { text: 'A deductible is usually a threshold you meet first, while a co-pay is a share you pay on the claim, which can apply more than once depending on the policy.', correct: true, why: 'The two reduce premiums by shifting cost to you, but they do so in different ways: one is a threshold, the other is a shared slice.' },
          { text: 'A co-pay is always a fixed rupee amount, while a deductible is always a percentage.', correct: false, why: 'Both can appear in different forms; the key difference is the mechanism, not that one is always rupees and the other always a percentage.' },
          { text: 'A co-pay has no effect on the premium, while a deductible always does.', correct: false, why: 'Both can affect the premium because both shift some cost to the insured.' },
        ],
      },
    ],
    takeaway: 'A co-pay is your share of a covered claim, often a percentage, and it works differently from a deductible. Understand both so the out-of-pocket number is not a surprise when you claim.',
  },

  'l4-046': {
    id: 'l4-046',
    title: 'Waiting Periods',
    subtitle: 'The time before some covers actually kick in.',
    minutes: 5,
    blocks: [
      scene4('waiting-period'),
      { kind: 'p', text: "A waiting period is the time you must wait before certain parts of the cover become payable. It is a standard feature in many health policies because insurers need to reduce the risk of people buying cover only when they already know a claim is coming. The important thing is that waiting periods are part of the value you buy: a policy is not fully useful on day one for every condition." },
      { kind: 'h', text: 'Why waiting periods matter' },
      { kind: 'list', items: [
        'They reduce immediate adverse selection, where people buy cover only because a claim is imminent.',
        'They mean some conditions are not covered immediately, even if the policy has started.',
        'They make timing relevant: buying earlier can mean waiting periods are satisfied before you need them.',
        'They are one of the reasons buying health cover while healthy is smarter than waiting until you need it.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not assume cover is immediate for everything', text: "A policy can be active and still have waiting periods for specific conditions. If you buy cover only when you already suspect a problem, the waiting period can be the difference between protection and no protection for that condition. The best time to buy is when you do not yet need the claim." },
      { kind: 'example', title: 'A timing lesson', text: 'If you wait to buy health cover until after you have symptoms, some covers may be subject to waiting periods that you cannot usefully serve. If you buy earlier, those waiting periods may be completed in advance, so the cover is actually useful when a claim eventually arises. Timing is part of the product’s value.' },
      { kind: 'terms', items: [
        { term: 'waiting period', meaning: 'a period, usually from policy start, during which certain conditions or claims are not covered or are covered only after the period has passed.' },
        { term: 'adverse selection', meaning: 'the tendency for those most likely to claim to be the most eager to buy cover, which insurers manage partly through features like waiting periods.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why do health policies often have waiting periods?',
        options: [
          { text: 'To reduce adverse selection by not covering certain conditions immediately, so people cannot buy cover only when a claim is already imminent.', correct: true, why: 'Waiting periods are one way insurers manage the risk that cover is bought only because a claim is about to happen.' },
          { text: 'To make the policy more expensive with no real purpose.', correct: false, why: 'Waiting periods have a risk-management purpose; they are not just a price increase without reason.' },
          { text: 'To guarantee that every condition is covered from the first day, with no exception.', correct: false, why: 'A waiting period means some conditions are not covered immediately, which is the opposite of immediate full coverage.' },
        ],
      },
    ],
    takeaway: 'Waiting periods mean some health cover is not effective immediately for certain conditions. That is exactly why buying cover while healthy matters: you satisfy the waiting period before you need the claim.',
  },

  'l4-047': {
    id: 'l4-047',
    title: 'Exclusions',
    subtitle: 'What the policy deliberately does not cover.',
    minutes: 5,
    blocks: [
      scene4('cover-exclusions'),
      { kind: 'p', text: "Exclusions are the parts of risk that the policy does not cover. They are not a hidden flaw; they are part of the product’s definition. The mistake people make is assuming a policy covers broadly because it covers a lot. A health policy, for example, may cover hospitalisation broadly while still excluding specific conditions, specific treatments, or specific circumstances until certain conditions are met." },
      { kind: 'h', text: 'How to read exclusions usefully' },
      { kind: 'list', items: [
        'Identify what is not covered and when it might become covered, if ever.',
        'Check whether exclusions are permanent, time-bound, or condition-specific.',
        'Compare exclusions across policies before choosing one, not after a claim is denied.',
        'Ask how the exclusions interact with the rest of the cover, not just whether they exist.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Exclusions are where disappointment is designed', text: "A policy can look generous in marketing and still have exclusions that matter a great deal in a real claim. The marketing tells you what the product is trying to sell; the exclusions tell you what it is not selling. Read both." },
      { kind: 'example', title: 'A claim-shaped by exclusions', text: 'A policyholder may believe the policy covers a serious illness, only to find that the specific condition, stage, or treatment is excluded, or is covered only after a waiting period. The policy may still have been bought in good faith, but the exclusion defines the limit of the protection. Knowing the exclusion before the claim is what makes the purchase realistic.' },
      { kind: 'terms', items: [
        { term: 'exclusion', meaning: 'a condition, treatment, event, or circumstance that the policy does not cover, as stated in the policy terms.' },
        { term: 'coverage', meaning: 'the scope of risk or loss that the policy will pay for under its terms, within the sum insured and other conditions.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to treat exclusions when buying a policy?',
        options: [
          { text: 'Read them carefully before buying and compare them across policies, so you know what is not covered before a claim happens.', correct: true, why: 'Exclusions define the limits of the cover. Knowing them early is the only way to avoid a surprise when you rely on the policy.' },
          { text: 'Ignore them because they are rare and usually meaningless.', correct: false, why: 'Exclusions can be the difference between a payout and no payout, so ignoring them can be a costly mistake.' },
          { text: 'Assume the marketing description covers everything, since exclusions do not matter in practice.', correct: false, why: 'The marketing is not the policy. Exclusions are part of the legal cover and can matter a great deal.' },
        ],
      },
    ],
    takeaway: 'Exclusions define what the policy does not cover. Read them before you buy, compare them across policies, and understand that a broad-looking policy can still leave big gaps.',
  },

  'l4-048': {
    id: 'l4-048',
    title: 'Claim Procedures',
    subtitle: 'The practical steps that turn a policy into a payout.',
    minutes: 6,
    blocks: [
      scene4('cover-claim-steps'),
      { kind: 'p', text: "A policy is only useful if you can actually make a claim when the event happens. That means the claim process — intimation, documents, approvals, and settlement — matters as much as the coverage on paper. The best policy is the one you can use without a nightmare at the worst possible time. Understanding the process in advance removes a lot of stress when you need it." },
      { kind: 'h', text: 'The steps that usually matter' },
      { kind: 'list', items: [
        'Intimation: informing the insurer about the event within the policy’s required time frame.',
        'Documentation: the hospital bills, reports, admission details, and other papers the insurer asks for.',
        'Pre-authorisation or cashless approval, where applicable: the process that allows treatment to proceed with the insurer involved.',
        'Assessment and settlement: the insurer’s review of the claim and the payment or rejection under the policy terms.',
        'Appeals and escalation, if needed: what to do if the claim is disputed or delayed.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Prepare the paperwork before the emergency', text: "In a real health event, the last thing you want is to hunt for documents and policy details at the last minute. Keep the policy number, the insurer’s claim contact, and the key documents accessible. The easier you make the process ahead of time, the smoother the claim is likely to be." },
      { kind: 'example', title: 'A smoother claim', text: 'A family that already knows how to raise a cashless request, what documents the hospital needs, and how to follow up with the insurer is far better placed than one that learns the process during admission. The claim procedure is not glamorous, but it is the bridge between buying cover and actually using it.' },
      { kind: 'terms', items: [
        { term: 'claim', meaning: 'a request to the insurer for payment or benefit under the policy when a covered event occurs.' },
        { term: 'intimation', meaning: 'the act of informing the insurer about a possible or actual claim, usually within the time frame required by the policy.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful thing to do about the claim process before you ever need it?',
        options: [
          { text: 'Learn how to intimate the insurer, what documents are needed, and how cashless or reimbursement works, and keep the key details accessible.', correct: true, why: 'A claim is stressful; knowing the process beforehand reduces delays and mistakes when the time comes.' },
          { text: 'Wait until a claim happens and then figure out the process under pressure.', correct: false, why: 'Learning the process during an emergency is slower and more error-prone than knowing it in advance.' },
          { text: 'Assume the insurer will handle everything without any input from you.', correct: false, why: 'Claims usually require cooperation, documents, and timely intimation; the insurer does not handle everything without your part.' },
        ],
      },
    ],
    takeaway: 'A policy’s value is realised through the claim process. Know how to intimate, document, and follow up before you need it, because the paperwork is the bridge between coverage and payout.',
  },
}