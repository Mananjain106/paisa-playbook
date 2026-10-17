import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band five — AI tools (l5-114 to l5-122).
 *
 * These chapters teach the tool, not a product: what an AI assistant is good
 * for, where it quietly fails, and the verification habits that keep the
 * decision with the person who is accountable for it. Nothing here recommends
 * a specific model or app, and every rule a learner might act on is linked to
 * the official source that can be re-checked.
 *
 * Facts verified on 15 October 2026.
 */

export const l5_114: Chapter = {
  id: 'l5-114',
  title: 'AI-Assisted Finance',
  subtitle:
    'Use AI as a research assistant while keeping the calculation, the decision and the accountability with you.',
  minutes: 9,
  blocks: [
    scene(
      'ai-assist-boundary',
      'The line that makes AI useful rather than dangerous: it may draft anything, and it may decide nothing.',
    ),
    {
      kind: 'p',
      text: 'An AI assistant is genuinely good at a narrow set of tasks: explaining a term you have never met, turning a dense paragraph into plain language, drafting a checklist, proposing three ways to structure a problem, and telling you which questions you have not asked yet. Those are research tasks. They are also, almost exactly, the tasks where being wrong is cheap — because a plausible sentence costs nothing until you check it.',
    },
    {
      kind: 'p',
      text: 'The tasks where being wrong is expensive are the ones people most want to delegate: the actual arithmetic, the current statutory limit, and the decision itself. A model produces text that looks like the answer. It does not read your passbook, it does not know the circular issued last month, and it has no liability if you act on a wrong number. So the useful division of labour is fixed: the assistant drafts, you verify, you decide, and you sign your name to the result.',
    },
    { kind: 'h', text: 'The boundary, stated plainly' },
    {
      kind: 'table',
      caption: 'What to hand the assistant, and what never to hand over',
      headers: ['The assistant may', 'The assistant may not'],
      rows: [
        ['Explain a concept in simpler words', 'Tell you the rule that applies today'],
        ['Draft a structure, a checklist or a first attempt', 'Do the arithmetic you will act on'],
        ['Point out the assumptions you left unstated', 'Know your income, obligations or risk capacity'],
        ['Summarise a document you then check', 'Replace the document'],
        ['Suggest what to verify', 'Verify anything'],
      ],
    },
    {
      kind: 'p',
      text: 'The right-hand column is not a limitation to work around; it is the definition of the tool. A model is a compression of a very large amount of text, and text about money is full of numbers that were correct in the year they were written. Ask it for the method and you get something durable. Ask it for the current figure and you get something that was true at some point in its training data, which you cannot see.',
    },
    l5Rule(
      'A chatbot is not a registered adviser',
      'Advice about securities in India sits inside a registration regime: investment advice is given by advisers registered with SEBI, and the conduct rules — suitability, disclosure of conflicts, record-keeping, redressal — are written for a person who can be held to them. A general-purpose chatbot is not registered, cannot assess your suitability, and carries no such obligations. Treat its output as research material that you are responsible for checking, not as advice. The current framework is on sebi.gov.in.',
    ),
    { kind: 'h', text: 'Prompt hygiene: four habits that raise the quality' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'State the date and the jurisdiction. “For an Indian resident in the 2026-27 tax year” filters out answers written for another country or an older year.',
        'Ask for the method, not the number. “Give me the formula and the assumptions” is checkable; “what will my corpus be” is not.',
        'Force the assumptions into the open. Ask what the answer depends on, and which single assumption would change it most.',
        'Ask for the counter-case. “What would make this advice wrong?” surfaces the risks a confident answer leaves out.',
      ],
    },
    {
      kind: 'example',
      title: 'The same question, asked two ways',
      text: '“How much should I save for retirement?” returns a confident paragraph built from somebody else’s income. “I am 29, I spend ₹55,000 a month, I expect prices to rise about 6% a year, and I want to stop working at 60 — lay out the formula, the assumptions and the three inputs that matter most” returns a structure you can check line by line. Neither answer is advice; the second one is usable.',
    },
    {
      kind: 'callout',
      tone: 'warning',
      title: 'The failure that costs the most is the one that looks best',
      text: 'A wrong answer written fluently is harder to catch than a wrong answer written badly, because fluency is the signal most people use to decide whether to trust something. Read for the citation, the date and the arithmetic, not for the confidence.',
    },
    { kind: 'h', text: 'Keep a decision log' },
    {
      kind: 'p',
      text: 'Write down four lines for any money decision where an assistant helped: the question you asked, what it said, what you checked and where, and what you decided. This is not bureaucracy. It is how you find out, a year later, whether the tool is helping you or merely agreeing with you — and it is the record you will want if a decision goes wrong and you need to explain why you made it.',
    },
    sim(
      'l5-ai-assistants',
      'Route nine real money tasks to the assistant, to yourself, or to both — and see which hand-offs leave nobody accountable.',
    ),
    l5Illustrative(
      'The tasks and answers in the lab are invented for practice. The boundary rule, the prompt habits and the registration point are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        {
          term: 'Knowledge cut-off',
          meaning:
            'The date after which a model has no information. Anything that changes yearly — slabs, ceilings, thresholds — may be stale even when the answer is stated confidently.',
        },
        {
          term: 'Sycophancy',
          meaning:
            'The tendency of a model to agree with the premise in your question. A leading prompt gets a leading answer, which is why the question has to be neutral.',
        },
        {
          term: 'Decision log',
          meaning:
            'A short record of the question, the AI output, the verification you did and the decision you took, kept so the reasoning can be audited later.',
        },
        {
          term: 'Human in the loop',
          meaning:
            'A required step where a person checks the machine output before it has any effect. It is only real if the person can say no.',
        },
      ],
    },
    l5Sources(['meity', 'dpdp', 'certin'], [
      'MeitY — the ministry that owns India’s AI and data-protection policy, and publishes the frameworks tools are built against',
      'The Data Protection Framework — what counts as personal data and what a tool may do with it',
      'CERT-In — the national computer emergency response team, for advisories, incident reporting and security guidance',
    ]),
  ],
  quiz: [
    {
      q: 'You ask an AI assistant for the current income-tax slab rates and it answers with a table. What is the correct next step?',
      options: [
        {
          text: 'Use the table, because the answer was specific and internally consistent',
          why: 'Specificity and consistency are properties of the text, not evidence about the world. A confidently written stale table is still stale.',
        },
        {
          text: 'Use the table but round the numbers, which makes small errors harmless',
          why: 'A wrong slab boundary is not a rounding error; it changes the tax on the whole band above it.',
        },
        {
          text: 'Check the table against the Income Tax Department’s own published rates for the year before using it',
          correct: true,
          why: 'Rates change with each Finance Act, and a model’s answer reflects its training data rather than today’s law. The department’s website is the authoritative check.',
        },
        {
          text: 'Ask the same assistant again and use the answer if it repeats',
          why: 'Repetition measures consistency, not correctness. The same training data produces the same stale figure twice.',
        }
      ],
    },
    {
      q: 'Which task is the best fit for an AI assistant, on its own, with no checking?',
      options: [
        {
          text: 'Computing the total interest on your specific loan over eight years',
          why: 'Arithmetic on your own terms is exactly the kind of output that must be recomputed independently before you rely on it.',
        },
        {
          text: 'Confirming whether a lender is registered with the RBI',
          why: 'Registration is a fact held in a register. It has to be read from the regulator’s own list, not recalled by a model.',
        },
        {
          text: 'Deciding how much of your salary should go into equity',
          why: 'That decision depends on your horizon, obligations and tolerance for loss — information a model does not have and cannot be accountable for.',
        },
        {
          text: 'Naming the three questions you should ask before signing a loan agreement',
          correct: true,
          why: 'Generating candidate questions is cheap to be wrong about: a bad suggestion is discarded, and nothing moves until you act on it.',
        }
      ],
    },
    {
      q: 'A chatbot offers to act as your financial adviser and says it can personalise its recommendations to your situation. What is the sound reading of that claim?',
      options: [
        {
          text: 'It is fine, because personalisation means the model has assessed your suitability',
          why: 'Personalisation means the output refers to details you supplied. It is not a suitability assessment, and nothing in the tool verifies that those details are accurate.',
        },
        {
          text: 'It is a general-purpose tool giving research material; it is not a SEBI-registered adviser and carries none of the obligations registration imposes',
          correct: true,
          why: 'Advice on securities in India sits inside a registration and conduct regime. A chatbot is not registered, cannot assess suitability, and cannot be held to those duties.',
        },
        {
          text: 'It is better than a human adviser, because a model has no commission to earn',
          why: 'The absence of a commission removes one conflict, not the need for registration, suitability assessment or accountability.',
        },
        {
          text: 'It is acceptable if you use a paid version of the tool',
          why: 'A subscription changes the price, not the regulatory status of the entity giving the answer.',
        }
      ],
    },
    {
      q: 'Which prompt is most likely to produce an answer you can actually check?',
      options: [
        {
          text: '“For an Indian resident in FY 2026-27, give the formula for the corpus I need at 60, list every assumption, and say which input matters most.”',
          correct: true,
          why: 'It fixes the jurisdiction and year, asks for the method rather than a single number, and requires the assumptions to be exposed.',
        },
        {
          text: '“How much money do I need to retire?”',
          why: 'With no context the answer is built from assumptions the model invents and does not show, so there is nothing to check.',
        },
        {
          text: '“Tell me the best retirement plan for me.”',
          why: '“Best” invites a recommendation the tool cannot ground in your circumstances, and it will not disclose the inputs it guessed.',
        },
        {
          text: '“I am 29 and want to retire at 60 — I know equity gives 12%, so just confirm the number.”',
          why: 'The premise is supplied as a fact, which invites agreement. A leading prompt produces a leading answer.',
        }
      ],
    },
  ],
  takeaway:
    'Use AI for research, explanation and drafting, and never for the calculation, the current rule or the decision. Ask for the method and the assumptions, check the figure at the official source, and write down what you decided — the accountability stays with you.',
}
