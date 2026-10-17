import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-120: catching an invented fact before it reaches a decision. */

export const l5_120: Chapter = {
  id: 'l5-120',
  title: 'Hallucination Detection',
  subtitle:
    'Catch an invented fact, figure or citation before it reaches a real financial decision.',
  minutes: 10,
  blocks: [
    scene(
      'hallucination-hunt',
      'The invented claim does not look different from the true one. Only the trail behind it does.',
    ),
    {
      kind: 'p',
      text: 'A hallucination is an output that is wrong and does not know it is wrong. In finance it usually takes one of four shapes: a citation to a document that does not exist, a number that is plausible but not the right one, a rule attributed to the wrong authority, or a quote that is real in substance and wrong in wording. Each one has a specific check, and the checks are mechanical. That is the good news: you do not need to be an expert to catch most of them.',
    },
    { kind: 'h', text: 'The five checks' },
    {
      kind: 'table',
      caption: 'Shape of the hallucination, and the check that catches it',
      headers: ['The claim', 'The check'],
      rows: [
        ['“SEBI circular SEBI/HO/…/2024/112 says…”', 'Search the regulator’s site for the number; if the circular exists, open it and search the quoted words'],
        ['“The LTCG rate on this is 12.5%”', 'Confirm the rate applies to this asset class and this year, not to a different one'],
        ['“Under the DPDP Act, you must…”', 'Read the section cited; note that the Act and its rules are separate documents'],
        ['“The RBI has directed that…”', 'Find the direction on rbi.org.in; a paraphrase is not a direction'],
        ['A total that adds up internally', 'Recompute each line from its stated inputs'],
      ],
    },
    {
      kind: 'example',
      title: 'Plausible and wrong at once',
      text: 'An assistant says a long-term capital gain on listed equity is taxed at 12.5% with no exemption limit. The rate is a real rate — which is what makes the sentence dangerous — but it is the rate on listed equity, and it does not describe debt funds, unlisted shares or property, each with its own treatment. The number was not invented. It was borrowed from the right rule and applied to the wrong asset.',
    },
    { kind: 'h', text: 'Internal consistency is a cheap filter' },
    {
      kind: 'p',
      text: 'Before you look anything up, read the answer for arithmetic that does not close. If a table of monthly expenses is said to total ₹62,000, add the rows. If an answer says a corpus lasts 26 years and also that it lasts until age 88 when retirement is at 60, the two statements disagree. Models drift within a single answer, and internal contradictions are the one failure you can catch without any external source at all.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Re-add every total in the answer. One failed sum discredits the section it sits in.',
        'Check dates against each other: a rule cited as “current” with a date before the last change is suspect.',
        'Check that the authority matches the subject — pension rules come from PFRDA, insurance from IRDAI, securities from SEBI.',
        'Check units: percentage versus percentage point, lakh versus crore, monthly versus annual.',
        'Ask what would be different if the claim were false. If nothing in the answer would change, the claim is decoration, not reasoning.',
      ],
    },
    l5Rule(
      'A citation is a promise to be checked',
      'A citation is only useful if you open it. The regulator’s website is the record: RBI publishes directions and master circulars, SEBI publishes circulars and its register, IRDAI publishes regulations and product norms, PFRDA publishes the pension framework, and the Income Tax Department publishes the rates and the Act as amended. If the document cannot be found there, the claim is unsupported — not necessarily false, but unsupported, which is enough to stop a decision.',
    ),
    {
      kind: 'callout',
      tone: 'warning',
      title: 'The confident sentence is the one to check',
      text: 'Hedged answers invite checking; confident ones do not. Treat “under Section 44AB”, “as per the 2024 circular” and “the limit is ₹5 lakh” as claims with a burden of proof, precisely because they are stated with the specificity that makes them feel settled.',
    },
    {
      kind: 'p',
      text: 'When the primary source is ambiguous — and sometimes it is — the correct escalation is to a professional who carries the obligation to advise you, not to a second chatbot. The point of detection is not to become your own regulator. It is to stop an invented sentence before it becomes a payment.',
    },
    sim(
      'l5-ai-claim-verifier',
      'Six AI claims, each with a citation. Trace each one to the source, and mark it supported, unsupported or wrong in a way that changes the decision.',
    ),
    l5Illustrative(
      'The claims and citations in the lab are invented for practice, and the register entries are illustrative. The verification method is the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        {
          term: 'Hallucination',
          meaning: 'An output that is factually wrong while being presented as fact, with no signal of uncertainty.',
        },
        {
          term: 'Fabricated citation',
          meaning: 'A reference to a circular, section or document that does not exist, or does not say what is attributed to it.',
        },
        {
          term: 'Internal inconsistency',
          meaning: 'Two statements in the same answer that cannot both be true — the cheapest hallucination to catch.',
        },
        {
          term: 'Primary source',
          meaning: 'The regulator’s or legislature’s own publication of a rule, as opposed to a summary of it.',
        },
      ],
    },
    l5Sources(['rbi', 'incometax', 'meity'], [
      'RBI — directions, master circulars and press releases, searchable by number',
      'The Income Tax Department — the Act as amended, the rates for the year and the official explanations',
      'MeitY — the data-protection framework and its rules, which are separate instruments and often conflated',
    ]),
  ],
  quiz: [
    {
      q: 'An assistant cites “RBI circular RBI/2024-25/112” for a claim about deposit insurance. What is the correct check?',
      options: [
        {
          text: 'Accept it, because a specific circular number is hard to invent',
          why: 'Numbers are easy to generate and look authoritative precisely because they are specific. Specificity is not evidence.',
        },
        {
          text: 'Search the web for the claim and see whether other pages repeat it',
          why: 'Repetition can trace back to the same model output, and secondary pages often paraphrase without checking.',
        },
        {
          text: 'Search rbi.org.in for the circular, open it, and confirm the quoted words appear in it',
          correct: true,
          why: 'Both halves matter: the document must exist, and it must say what was attributed to it. A real circular cited for something it does not say is still a hallucination.',
        },
        {
          text: 'Ask the assistant to quote the relevant paragraph',
          why: 'A quotation from the same source is not verification. It can be generated just as fluently as the citation.',
        }
      ],
    },
    {
      q: 'Which hallucination can you catch without opening any external source?',
      options: [
        {
          text: 'A rule attributed to the wrong regulator',
          why: 'Catching that requires knowing which regulator owns the subject, or checking the regulator’s site.',
        },
        {
          text: 'A citation to a circular that does not exist',
          why: 'It requires a search of the regulator’s records. Nothing in the answer itself reveals that the document is missing.',
        },
        {
          text: 'A rate that applied in an earlier year but not this one',
          why: 'Telling current from stale needs the current source; the answer looks the same either way.',
        },
        {
          text: 'A table whose stated total does not equal the sum of its rows',
          correct: true,
          why: 'Internal inconsistency is visible inside the answer: the rows and the total cannot both be right.',
        }
      ],
    },
    {
      q: 'An AI says listed-equity long-term gains are taxed at 12.5%. Why is this claim dangerous even though the rate is real?',
      options: [
        {
          text: 'Because 12.5% is not a real rate anywhere in the tax code',
          why: 'It is a real rate for a particular class of gains. The error is the asset it was applied to, not the existence of the number.',
        },
        {
          text: 'A real rate applied to the wrong asset class is still wrong, and it reads as authoritative because the number is familiar',
          correct: true,
          why: 'Different assets carry different holding periods and rates. The familiar figure makes the misapplication harder to notice, not easier.',
        },
        {
          text: 'Because capital gains are never taxed in India',
          why: 'They are taxed, with rates and holding periods that vary by asset. The claim that they are untaxed is simply false.',
        },
        {
          text: 'Because rates only apply to residents, and the question did not say',
          why: 'Residency changes the answer, but the deeper error here is applying a listed-equity rate to another asset class.',
        }
      ],
    },
    {
      q: 'A rule is genuinely ambiguous in the primary source. What is the right next step?',
      options: [
        {
          text: 'Take the question to a professional who owes you a duty of care, rather than to a second chatbot',
          correct: true,
          why: 'Detection is about stopping invented claims. Where the law itself is unclear, the answer needs someone accountable, not another generated opinion.',
        },
        {
          text: 'Ask several chatbots and go with the majority answer',
          why: 'Models share training material and failure modes. Agreement among them measures similarity, not correctness.',
        },
        {
          text: 'Choose the interpretation that produces the lower tax',
          why: 'A lower liability is not a legal basis. If the position is challenged, the interpretation has to be defensible.',
        },
        {
          text: 'Rely on the most confident answer you received',
          why: 'Confidence is generated text. It is uncorrelated with whether the underlying reading is right.',
        }
      ],
    },
  ],
  takeaway:
    'Check every citation by opening it, re-add every total, and test authority, date and units against the claim. A real number applied to the wrong asset is a hallucination too, and the only reliable answer to an ambiguous rule is a source that carries a duty to you.',
}
