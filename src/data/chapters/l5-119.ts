import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-119: the failure modes, and how to design around them. */

export const l5_119: Chapter = {
  id: 'l5-119',
  title: 'AI Limitations',
  subtitle:
    'Know the failure modes of financial AI — stale data, arithmetic slips, invented rules — and design around them.',
  minutes: 10,
  blocks: [
    scene(
      'ai-failure-modes',
      'Five ways a financial answer goes wrong, each with the same outward appearance: a fluent paragraph.',
    ),
    {
      kind: 'p',
      text: 'Every tool has a failure mode, and the useful thing about a failure mode is that it is predictable. A calculator cannot do units. A spreadsheet cannot tell you whether the input is right. An AI assistant has five characteristic failures, and once you know them the tool becomes far less frightening and far more useful, because you know exactly which outputs to distrust.',
    },
    { kind: 'h', text: 'The five failures' },
    {
      kind: 'table',
      caption: 'The failure, what it looks like, and the defence',
      headers: ['Failure', 'What it looks like', 'The defence'],
      rows: [
        ['Knowledge cut-off', 'A confident rule that was current two years ago', 'Check every threshold and rate at the regulator'],
        ['Arithmetic', 'A total that is close but not exact, or rounds the wrong way', 'Recompute independently, or ask for a formula and run it'],
        ['Context loss', 'It forgets a constraint you gave earlier and contradicts itself', 'Restate the key constraints; keep one decision per conversation'],
        ['Invention', 'A citation, scheme or section that does not exist', 'Open the cited document and search for the text'],
        ['Sycophancy', 'It agrees with the premise in your question and builds on it', 'Ask a neutral version, and ask for the counter-case'],
      ],
    },
    {
      kind: 'example',
      title: 'Arithmetic that survives the eye test',
      text: '“A ₹25,000 monthly SIP at 12% for 20 years grows to about ₹2 crore.” The figure is in the right region, which is exactly why it passes the eye test. The same series is actually worth roughly ₹2.47 crore if each instalment goes in at the end of the month, and about ₹2.50 crore if it goes in at the start. A 20% understatement, stated fluently, with no signal that anything was approximated. Ask for the formula and compute it, or use a calculator that shows its inputs.',
    },
    { kind: 'h', text: 'Design around the failures' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Give the assistant the data rather than asking it to remember yours. A number it was told is a number it can restate; a number it inferred is a guess.',
        'Ask for the method, then compute the result yourself. This converts an arithmetic failure into a formula you control.',
        'Keep the context small. One question, one set of facts, one answer — long conversations drift and contradict their own earlier constraints.',
        'Restate the constraints before the final answer: “using 6% inflation and my ₹55,000 monthly spend”.',
        'Treat every citation as unverified until you have opened the document and found the words.',
        'Prefer fresh conversations for fresh decisions, so an earlier wrong premise does not quietly become an assumption.',
      ],
    },
    l5Rule(
      'The tool has no duty to you',
      'A model is not a fiduciary, an adviser or an auditor. It has no obligation to be accurate, to warn you, to keep a record, or to compensate you for a loss. The Data Protection Framework and the AI guidance published by MeitY shape what developers must do with your data; they do not turn an output into advice. The obligations you can enforce are the ones a registered intermediary owes you, which is why the regulated route still matters for decisions that carry real money.',
    ),
    {
      kind: 'callout',
      tone: 'insight',
      title: 'The most useful limitation to remember',
      text: 'The assistant cannot tell the difference between a question it knows the answer to and one it is guessing at. Both arrive in the same voice. That single fact is the reason for every check in this chapter: you supply the distinction the tool cannot make.',
    },
    {
      kind: 'p',
      text: 'None of this makes the tool unusable. It makes it a tool with a known failure profile, which is normal: you would not trust a calculator without checking what it does with rounding, and you would not trust a spreadsheet without checking what it is summing. Apply the same standard and the assistant becomes reliable in the way that matters — reliable for the tasks you have verified it on.',
    },
    sim(
      'l5-ai-stress-test',
      'Put nine prompts through an assistant and identify which of the five failure modes each output shows, then pick the defence.',
    ),
    l5Illustrative(
      'The prompts, outputs and figures in the lab are invented for practice. The failure taxonomy and the defences are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        {
          term: 'Knowledge cut-off',
          meaning: 'The point after which a model has no training data, so anything that changes later may be answered from an outdated state.',
        },
        {
          term: 'Context loss',
          meaning: 'The model dropping or contradicting a constraint given earlier in a long conversation.',
        },
        {
          term: 'Sycophancy',
          meaning: 'Agreeing with the user’s premise, which turns a leading question into a confident but misleading answer.',
        },
        {
          term: 'Invention (hallucination)',
          meaning: 'Producing a citation, figure or rule that does not exist, stated as though it does.',
        },
      ],
    },
    l5Sources(['meity', 'certin'], [
      'MeitY — India’s AI governance and data-protection policy, including the expectations placed on developers',
      'CERT-In — advisories on the security risks of AI tools and how to report an incident',
    ]),
  ],
  quiz: [
    {
      q: 'An assistant gives you a retirement corpus figure. Which check addresses the failure mode most likely to be present?',
      options: [
        {
          text: 'Ask the assistant to double-check its own number',
          why: 'Self-checking re-runs the same generation process. It cannot substitute for an independent calculation.',
        },
        {
          text: 'Compare it with a figure you remember from an article',
          why: 'A remembered figure is unverified and likely built on different assumptions. It is not an independent check.',
        },
        {
          text: 'Ask for the formula and assumptions, then compute the result independently',
          correct: true,
          why: 'The characteristic failure here is arithmetic: a plausible but imprecise figure. A formula you compute yourself removes the model from the calculation.',
        },
        {
          text: 'Check whether the number is stated with a rupee sign and commas',
          why: 'Formatting is presentation, not accuracy. A wrong figure formats perfectly.',
        }
      ],
    },
    {
      q: 'You tell the assistant your inflation assumption, and six messages later it uses a different one. Which failure is this?',
      options: [
        {
          text: 'Sycophancy — it is agreeing with you',
          why: 'Agreeing is not the issue here; the model is contradicting a fact you supplied. That is drift, not flattery.',
        },
        {
          text: 'Invention — it made up the second assumption',
          why: 'It substituted a default rather than fabricating a source or rule. The remedy is the same in practice, but the failure is different.',
        },
        {
          text: 'A knowledge cut-off problem',
          why: 'The cut-off concerns facts after the training date. Your inflation assumption is information given in the conversation.',
        },
        {
          text: 'Context loss — it stopped carrying an earlier constraint, so the constraint must be restated',
          correct: true,
          why: 'Long conversations drift. Restating the key assumptions before the final answer is the direct defence.',
        }
      ],
    },
    {
      q: 'You ask “since equity always beats debt over ten years, how much should I put in equity?” and get agreement. What went wrong?',
      options: [
        {
          text: 'Nothing: the model confirmed a well-known rule',
          why: '“Always” is not a rule, and a ten-year holding period has produced poor equity outcomes in real markets. Agreement is not confirmation.',
        },
        {
          text: 'The premise was supplied as fact, so sycophancy produced an answer built on it rather than challenging it',
          correct: true,
          why: 'A leading question invites agreement. A neutral version — “compare equity and debt over ten-year periods, including the bad ones” — makes the premise testable.',
        },
        {
          text: 'The model had stale data on returns',
          why: 'The problem is the structure of the question, not the vintage of the data. A leading premise would distort a current answer too.',
        },
        {
          text: 'The model cannot discuss equity allocation at all',
          why: 'It can discuss the comparison. What it cannot do is volunteer that your premise is unsafe when you have asserted it.',
        }
      ],
    },
    {
      q: 'Which practice best reduces the risk of an invented citation reaching a decision?',
      options: [
        {
          text: 'Open the cited document and search for the quoted words before relying on the claim',
          correct: true,
          why: 'Invention is defeated by looking. If the words are not in the document, the claim is unsupported regardless of how plausible it sounds.',
        },
        {
          text: 'Ask for the citation in a formal format, such as a section number',
          why: 'Formality is easy to generate. A precise-looking section number is exactly what an invented citation looks like.',
        },
        {
          text: 'Ask the model how confident it is in the citation',
          why: 'Confidence is generated text, not evidence. It correlates poorly with whether the document exists.',
        },
        {
          text: 'Prefer answers that cite older, well-known documents',
          why: 'Familiar documents are easier to fake precisely because you are less likely to check them.',
        }
      ],
    },
  ],
  takeaway:
    'Learn the five failures — cut-off, arithmetic, context loss, invention and sycophancy — and design around each: give the data, ask for the method, keep the context small, restate constraints, and open every citation.',
}
