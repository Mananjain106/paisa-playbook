import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-118: learning with an assistant without learning last year's rules. */

export const l5_118: Chapter = {
  id: 'l5-118',
  title: 'AI For Financial Education',
  subtitle:
    'Learn concepts with AI while detecting simplified or outdated answers and cross-checking against official sources.',
  minutes: 9,
  blocks: [
    scene(
      'learning-loop',
      'A concept survives the loop when you can restate it, apply it to your own numbers, and name the rule it depends on.',
    ),
    {
      kind: 'p',
      text: 'For learning, an assistant is close to ideal: it has infinite patience, it will re-explain at any level, it will give ten examples of the same idea, and it will not make you feel stupid for asking what a yield curve is. The trouble is that it explains the world as it was written down, and personal finance is a field where the rules are re-written every year.',
    },
    { kind: 'h', text: 'Learn the concept from the model, learn the rule from the regulator' },
    {
      kind: 'p',
      text: 'Split every question into two parts. The concept — why compounding accelerates, why a bond’s price falls when rates rise, why inflation and tax have to come off a return before you compare it — is stable, and an assistant is a good teacher of it. The rule — the current slab, the current ceiling, the current threshold, the current rate of tax on a particular gain — changes, and must be read from the authority that publishes it, for the year you are in.',
    },
    {
      kind: 'table',
      caption: 'Stable concepts versus moving rules',
      headers: ['Ask the assistant', 'Read from the source'],
      rows: [
        ['Why a SIP smooths out purchase price', 'The current exit load or expense-ratio cap'],
        ['How real return is computed from nominal and inflation', 'This year’s inflation and tax figures'],
        ['Why an emergency fund is sized from obligations', 'The current deposit-insurance limit'],
        ['What a marginal relief calculation is doing', 'The slabs and rebate thresholds in force this year'],
        ['Why a pension annuity is irreversible', 'The current withdrawal and annuity rules'],
      ],
    },
    {
      kind: 'example',
      title: 'The answer that was right three years ago',
      text: 'Ask an assistant when the employer’s provident-fund contribution starts on the full salary, and it may explain the position as it stood under an earlier wage ceiling. The reasoning about how EPF is computed is fine; the threshold in the answer is not. A learner who takes the number and not the method has learned something that will be wrong at the next change — and will not know it.',
    },
    { kind: 'h', text: 'Four questions that turn an explanation into understanding' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '“Explain this from first principles, without naming any product.” Strips the marketing and leaves the mechanism.',
        '“What would have to be true for this to be wrong?” Surfaces the assumptions the explanation is standing on.',
        '“Give me the simplest case and the most awkward case.” Tests whether the idea survives a boundary.',
        '“Which official source states the rule you just used, and as of when?” Separates the stable part from the moving part.',
      ],
    },
    l5Rule(
      'Triangulate before you rely on a rule',
      'One explanation is a claim, two are a comparison, and three — the regulator, the actual circular or statute, and an independent explanation — are a basis for acting. For money rules the order matters: the regulator’s own page first, then the instrument it publishes, then anything written about it. If the three disagree, the regulator wins and the question is not yet settled.',
    ),
    {
      kind: 'callout',
      tone: 'warning',
      title: 'Fluency is not understanding',
      text: 'A clear explanation feels like knowledge, and that feeling is the trap. The test is not whether the answer was easy to read; it is whether you can restate it, apply it to a number of your own, and say where the rule comes from. If you cannot do those three things, you have read something, not learned it.',
    },
    {
      kind: 'p',
      text: 'Used this way, the assistant becomes a tutor rather than an oracle. You keep the concept, you discard the stale number, and you build the habit of going to the source whenever a decision depends on a figure that a Finance Act, a regulator or a scheme notification can change.',
    },
    sim(
      'l5-ai-tutor-audit',
      'Read four AI explanations, separate the durable concept from the stale rule, and decide what to verify and where.',
    ),
    l5Illustrative(
      'The explanations in the lab are invented for practice. The concept-versus-rule split and the triangulation order are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        {
          term: 'First principles',
          meaning: 'Explaining a result from the mechanism that produces it, rather than from a remembered figure or a product name.',
        },
        {
          term: 'Stale rule',
          meaning: 'A figure or threshold that was correct when written and has since been changed by a Budget, a circular or a notification.',
        },
        {
          term: 'Triangulation',
          meaning: 'Checking a claim against three independent sources, with the regulator’s own publication taken as decisive.',
        },
        {
          term: 'False confidence',
          meaning: 'The state of feeling informed after a fluent explanation you cannot restate or apply.',
        },
      ],
    },
    l5Sources(['rbi', 'incometax', 'sebi'], [
      'RBI — monetary policy, deposit rules and the publications that state current thresholds',
      'The Income Tax Department — the rates, rebates and thresholds in force for the year',
      'SEBI — the rules that govern products, intermediaries and investor protection',
    ]),
  ],
  quiz: [
    {
      q: 'You ask an AI to explain how tax on a particular investment gain is calculated. Which part of the answer should be checked against an official source?',
      options: [
        {
          text: 'The whole answer, because nothing an assistant says about tax is usable',
          why: 'The explanation of how a gain is computed is a useful teaching aid. The moving figures are what need checking.',
        },
        {
          text: 'Nothing, as long as the answer explains the calculation clearly',
          why: 'Clarity says nothing about currency. A clear explanation of an old rate is still wrong for this year.',
        },
        {
          text: 'The rate and holding-period rule that apply this year, because those are set by the Finance Act and change',
          correct: true,
          why: 'The mechanism of a capital-gains calculation is stable; the rate and the holding period are statutory and revised. Those must be read from the Income Tax Department.',
        },
        {
          text: 'Only the arithmetic, since a calculator can confirm it',
          why: 'Verifying the arithmetic confirms the sum, not whether the rate fed into it is the one in force.',
        }
      ],
    },
    {
      q: 'Which question is most useful for testing whether you have actually understood an explanation?',
      options: [
        {
          text: '“Can you explain it again more simply?”',
          why: 'Simplification improves readability. It does not reveal whether the idea holds at its edges or which assumptions it needs.',
        },
        {
          text: '“Are you sure?”',
          why: 'This invites reassurance rather than evidence, and models tend to accommodate it.',
        },
        {
          text: '“Give me a shorter version.”',
          why: 'Shorter is not deeper; compression is where the conditions that matter tend to disappear.',
        },
        {
          text: '“What would have to be true for this to be wrong, and what is the most awkward case?”',
          correct: true,
          why: 'It forces the assumptions and the boundary into view, which is where understanding either holds or collapses.',
        }
      ],
    },
    {
      q: 'Two explanations of a rule disagree, and one of them cites an older circular. What is the correct order of resolution?',
      options: [
        {
          text: 'Use whichever explanation is easier to follow',
          why: 'Readability is unrelated to being in force. Choosing by clarity is how outdated rules survive.',
        },
        {
          text: 'Go to the regulator’s current page and the instrument it publishes now; the older circular is superseded if the current rule differs',
          correct: true,
          why: 'The regulator’s current publication is authoritative, and a superseded circular is history rather than a competing view.',
        },
        {
          text: 'Average the two answers',
          why: 'A rule is either in force or it is not. Averaging two figures produces a third figure that nothing supports.',
        },
        {
          text: 'Ask the assistant which of the two is right',
          why: 'That asks the source of the disagreement to settle it. The regulator’s own publication is the arbiter.',
        }
      ],
    },
    {
      q: 'Why is an AI assistant a better teacher of concepts than of current rules?',
      options: [
        {
          text: 'Concepts are stable and can be explained from mechanism, while current rules change and the model’s knowledge has a cut-off',
          correct: true,
          why: 'The explanation of a mechanism does not expire. A threshold or rate does, and the model cannot tell you which year its training data stopped.',
        },
        {
          text: 'Because models are not allowed to discuss rules',
          why: 'There is no such restriction. The limitation is the data and its date, not permission.',
        },
        {
          text: 'Because concepts never change and rules change every month',
          why: 'This overstates both: concepts can be refined, and many rules last for years. The cut-off point is stability and verifiability, not frequency.',
        },
        {
          text: 'Because a concept question is shorter to answer',
          why: 'Length has nothing to do with it. A short answer can be just as stale.',
        }
      ],
    },
  ],
  takeaway:
    'Use AI to learn the mechanism, and the regulator to learn the rule. Ask what would make the answer wrong, keep the stable concept, discard the dated figure, and triangulate before you act on a threshold.',
}
