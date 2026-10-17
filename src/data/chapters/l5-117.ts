import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-117: summarising policies and agreements without trusting the summary. */

export const l5_117: Chapter = {
  id: 'l5-117',
  title: 'AI For Document Analysis',
  subtitle:
    'Use AI to summarise policies and agreements, then verify every clause it cites against the original text.',
  minutes: 10,
  blocks: [
    scene(
      'doc-ai-verify',
      'A summary is only as good as the sentence it came from. Every claim gets a page and a clause, or it gets removed.',
    ),
    {
      kind: 'p',
      text: 'An insurance policy, a loan agreement or a tenancy contract is long, repetitive and deliberately hard to read. An assistant can cut through that in minutes: it will list the exclusions, find the waiting periods, and explain a clause in plain language. The risk is not that the summary is useless. The risk is that it is smooth, plausible, and quietly missing the sub-limit that decides your claim.',
    },
    { kind: 'h', text: 'What a good summary must contain' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'A citation for every claim: page number, section or clause heading, so the claim can be checked in the source.',
        'A separate list of what the document does not say, which is where a summary usually invents cover.',
        'The numbers that limit a payout, quoted rather than paraphrased: room-rent caps, sub-limits, co-payment, deductibles.',
        'The clocks: waiting periods, free-look window, claim intimation deadline, and the notice period for termination.',
        'Anything the assistant could not read clearly, marked as unclear rather than filled in with the standard wording.',
      ],
    },
    {
      kind: 'table',
      caption: 'Where summaries go wrong on Indian policies and agreements',
      headers: ['The claim in the summary', 'What the document often actually says'],
      rows: [
        ['“Covers pre-existing conditions”', 'Covers them after a waiting period, which the summary must state in months'],
        ['“Cashless hospitalisation”', 'Cashless at network hospitals only, with a room-rent cap that changes the bill'],
        ['“Full reimbursement”', 'Reimbursement after co-payment and non-payable items, at the insurer’s rates'],
        ['“Free look of 15 days”', 'The current window is set by the regulator and has been revised; check the schedule'],
        ['“Loan can be prepaid anytime”', 'Prepayment may carry a charge, and the clause usually defines when it does not'],
        ['“Notice period of one month”', 'Often one month from the tenant and two from the landlord — read both sides'],
      ],
    },
    {
      kind: 'example',
      title: 'The clause that was merged',
      text: 'A summary says the health policy “covers maternity after 24 months”. The wording has two separate clauses: maternity is covered after 24 months for the first two children, and complications of pregnancy are covered after 36 months. The summary fused them into one sentence that is wrong on both counts — and nothing about the sentence signals that a merge happened.',
    },
    l5Rule(
      'Verify against the schedule and the wording, in that order',
      'A policy is a schedule plus a wording. The schedule holds your particulars — sum insured, members, deductibles, the policy period. The wording holds the exclusions, waiting periods and limits. A summary that does not distinguish them cannot be checked, and a claim decision depends on both. The current policyholder rules and the standard wording requirements are published at irdai.gov.in.',
    ),
    { kind: 'h', text: 'Redact before you upload' },
    {
      kind: 'p',
      text: 'A policy or loan document is dense with identifiers: your name, date of birth, address, phone number, policy number, loan account number, and — in a health policy — your medical history. All of that is personal data, and medical data is the category people most regret sharing. Remove or mask the identifiers, keep the clauses, and crop the schedule to the fields the question actually needs.',
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'Ask for the questions, not only the answers',
      text: 'A better use of the assistant is to have it list what you should ask the insurer or the lender: “Why is this exclusion phrased so broadly? What is the room-rent cap in this policy? Is this waiting period counted from the first policy or from each renewal?” A good question costs nothing and often finds the gap a summary hid.',
    },
    sim(
      'l5-ai-policy-reader',
      'Check an AI summary against the policy text, clause by clause, and mark the three claims the document does not support.',
    ),
    l5Illustrative(
      'The policy, wording and summary in the lab are invented for practice. The citation-checking method and the schedule-versus-wording distinction are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        { term: 'Schedule', meaning: 'The page of a policy that states your particulars: sum insured, members covered, deductibles and the policy period.' },
        { term: 'Wording', meaning: 'The standard terms of the policy: definitions, exclusions, waiting periods, limits and claim conditions.' },
        { term: 'Citation check', meaning: 'Reading the cited clause in the original to confirm the summary says neither more nor less than the text.' },
        { term: 'Redaction', meaning: 'Removing identifiers from a document before it leaves your control, while keeping the clauses needed for the question.' },
      ],
    },
    l5Sources(['irdai', 'dpdp'], [
      'IRDAI — policyholder rights, standard policy wording and the current free-look and claim rules',
      'The Data Protection Framework — why medical and financial identifiers should not be uploaded casually',
    ]),
  ],
  quiz: [
    {
      q: 'An AI summary of your health policy says “pre-existing diseases are covered”. What is the correct next step?',
      options: [
        {
          text: 'Accept it, since the summary is based on the actual document',
          why: 'The summary is generated text about the document. Compressing clauses is exactly where a condition goes missing.',
        },
        {
          text: 'Ask the assistant to confirm that pre-existing diseases are covered',
          why: 'Asking the same source to restate its own summary produces agreement, not verification.',
        },
        {
          text: 'Find the clause in the wording and check the waiting period it attaches to that cover',
          correct: true,
          why: 'Cover for pre-existing conditions almost always carries a waiting period. The summary dropped the condition that decides when a claim is payable.',
        },
        {
          text: 'Check the premium receipt, which shows the policy is active',
          why: 'The receipt proves the policy exists and is paid. It says nothing about what the wording covers.',
        }
      ],
    },
    {
      q: 'Which request produces a summary you can actually verify?',
      options: [
        {
          text: '“Summarise this policy in 200 words.”',
          why: 'A length limit forces compression, and compression is what drops the sub-limits and waiting periods that matter.',
        },
        {
          text: '“Tell me if this policy is good.”',
          why: '“Good” depends on your needs and invites a judgement the tool cannot ground. It also produces no citations to check.',
        },
        {
          text: '“Explain the policy as if I have never bought insurance.”',
          why: 'This improves readability, not verifiability: a plain-language explanation can be clear and still omit the limiting clause.',
        },
        {
          text: '“List each exclusion with the page and clause heading it comes from, and mark anything you cannot read clearly.”',
          correct: true,
          why: 'Citations make each claim checkable, and the instruction to mark unclear text stops the assistant from filling gaps with standard wording.',
        }
      ],
    },
    {
      q: 'Why does the difference between the policy schedule and the policy wording matter when checking a summary?',
      options: [
        {
          text: 'The schedule is legally binding and the wording is only a guide',
          why: 'Both form the contract. The schedule without the wording tells you what you bought, not what is excluded.',
        },
        {
          text: 'The schedule holds your particulars while the wording holds the exclusions and limits, so a claim depends on checking both',
          correct: true,
          why: 'Sum insured and members come from the schedule; waiting periods and sub-limits come from the wording. A summary that blurs them cannot be audited.',
        },
        {
          text: 'The wording is standard across insurers, so only the schedule needs checking',
          why: 'Standard wording still varies by product and by version, and the version that applies is the one in your policy.',
        },
        {
          text: 'The distinction matters only for life insurance, not health insurance',
          why: 'It applies to both. Health policies have schedules of members and sums insured, and wordings full of limits.',
        }
      ],
    },
    {
      q: 'You want help understanding a loan agreement. What is the safest way to use an assistant?',
      options: [
        {
          text: 'Remove your name, account number, address and PAN, keep the clauses, and ask it to cite the clause behind each point',
          correct: true,
          why: 'The clauses are what the question needs; the identifiers add risk and no accuracy. Citations make the analysis checkable.',
        },
        {
          text: 'Upload the whole agreement, since the lender already has your details',
          why: 'The lender holding your data under a contract does not make it safe to share with an unrelated tool that has no such obligation to you.',
        },
        {
          text: 'Upload only the first and last pages, which contain the parties and signatures',
          why: 'That is the opposite of minimisation: it shares the identifying pages and omits the clauses you wanted explained.',
        },
        {
          text: 'Ask the assistant to promise not to store the document',
          why: 'A promise in generated text is not a data-retention setting. You cannot rely on it, and it does not change what has been sent.',
        }
      ],
    },
  ],
  takeaway:
    'Use AI to find the clauses, not to replace them: demand a citation for every claim, check each one in the schedule and the wording, and read the numbers and the clocks yourself. Redact the identifiers before anything is uploaded.',
}
