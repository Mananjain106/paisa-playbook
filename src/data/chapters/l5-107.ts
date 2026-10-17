import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: financial due diligence, and how to run a standard pass.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Due diligence checklist: registration, documents, counterparty, and the recorded decision. */
export const l5_107: Chapter = {
  id: 'l5-107',
  title: 'Financial Due Diligence',
  subtitle: 'Run a standard diligence pass on any product or intermediary before committing money.',
  minutes: 13,
  blocks: [
    scene('diligence-checklist', 'A four-step checklist: registration check, document review, counterparty questions, and recording the decision.'),
    { kind: 'p', text: 'Financial due diligence is the disciplined pass that you run on any product, scheme, or intermediary before committing money. It is not a one-off check but a repeatable process that covers four areas: whether the entity is registered with the right regulator, whether the documents match the claims, what the counterparty\'s background and incentives are, and whether the decision is recorded with a clear reason. The standard pass prevents you from committing on a hype-filled pitch and forces you to face the concrete questions that determine whether the product is what it claims to be.' },
    { kind: 'p', text: 'The four steps of the standard pass are: (1) Registration check: verify the entity is registered with the appropriate regulator (SEBI for market intermediaries, RBI for deposit-taking or forex, IRDAI for insurance, PFRDA for pension schemes). An unregistered entity operating in India cannot legally offer the product. (2) Document review: obtain and read the key fact statement, the product disclosure document, the terms and conditions, and any audited accounts or reports. Look for conditions, risks, and costs that are not highlighted in the sales pitch. (3) Counterparty questions: ask about the entity\'s history, the people behind it, their incentives, and any prior regulatory actions. Who benefits from the product, and how do they make money? (4) Record the decision: write down your conclusion, the reasons for it, and any remaining concerns. This creates a paper trail that protects you later if the product underperforms or turns out to be mis-sold.' },
    { kind: 'h', text: 'The four-step due diligence pass' },
    { kind: 'list', ordered: true, items: [
      'Step 1 – Registration: Check the entity on the regulator\'s official register — SEBI\'s register of intermediaries and its investment-avoidance lists, the RBI\'s list of regulated entities, IRDAI\'s insurer and intermediary records, or PFRDA\'s registered entities for the national pension system. If the entity is not on the register, do not proceed.',
      'Step 2 – Documents: Obtain the key fact statement, product terms, and any audited reports. Read for hidden conditions, excessive costs, and risk disclosures that are not emphasised in the pitch.',
      'Step 3 – Counterparty: Ask who owns the entity, what their track record is, whether there have been regulatory actions or complaints, and how the entity makes money. Be wary of opaque ownership, lack of track record, or business models that rely on new entrants\' deposits.',
      'Step 4 – Record: Write a one-paragraph conclusion: "I am proceeding / not proceeding because…" List any remaining concerns. This note is your protection if the product underperforms or is mis-sold later.',
    ] },
    l5Rule(
      'How to run a standard financial due diligence pass',
      'Before committing money, run the four-step pass: (1) Register with the regulator, (2) Review all documents for hidden conditions and costs, (3) Ask counterparty questions about ownership, track record, and incentives, (4) Record your conclusion in writing. This repeatable process takes less than an hour for standard products and is your best protection against mis‑selling and fraud.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-diligence-worksheet', 'You are presented with a product summary, a set of documents (some with hidden conditions), and counterparty background information. You must complete the four-step pass and record your conclusion. The lab records which steps you completed, any concerns you identified, and whether you would proceed. This trains you to make the due diligence process a habit rather than an afterthought.'),
    l5Illustrative('The product summaries, documents and counterparty profiles in the lab are invented for practice. The four-step pass and the habit of recording the decision are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that due diligence is not about finding a "perfect" product — it is about making an informed decision. Every product has risks and costs. The value of the process is that you see them before you commit, not after you have already lost the money.' },
    { kind: 'terms', items: [
      { term: 'Due diligence', meaning: 'A repeatable pass on registration, documents, counterparty, and decision-recording before committing money to any product or intermediary.' },
      { term: 'Key fact statement', meaning: 'The summary of a product\'s terms, risks, and costs, given before it is signed or invested in.' },
      { term: 'Counterparty', meaning: 'The person or entity on the other side of the product or transaction. Their history, incentives and track record are central to the due diligence pass.' },
      { term: 'Registration check', meaning: 'Verifying the entity is on the official regulator register before proceeding with any product.' },
    ] },
    l5Sources(['rbi', 'sebi', 'irdai', 'pfrda'], [
      'The RBI list of regulated entities, and its warnings against entities that accept deposits without authorisation',
      'The SEBI register of intermediaries, on which a market entity\'s registration can be looked up, and the SCORES grievance platform for complaints',
      'IRDAI\'s insurer and intermediary verification lookup',
      'PFRDA\'s register of entities and the national pension system subscriber services',
    ]),
  ],
  quiz: [
    {
      q: 'Before investing in a new mutual fund, which of the following should you check first?',
      options: [
        { text: 'The fund\'s historical returns', why: 'Past returns are not a reliable guide to future performance, and they are not the first step in due diligence.' },
        { text: 'Whether the fund house and scheme are registered with SEBI', correct: true, why: 'Registration is the baseline. An unregistered fund house or scheme cannot legally offer a mutual fund in India, and this check must come before any analysis of the product itself.' },
        { text: 'The fund manager\'s education and previous employers', why: 'These are secondary to regulatory registration.' },
        { text: 'Whether the fund has a riskometer label', why: 'The riskometer is important but comes after registration.' },
      ],
    },
    {
      q: 'You obtain the key fact statement for a debt mutual fund. What should you look for that is NOT highlighted in the sales pitch?',
      options: [
        { text: 'The expense ratio and any exit load', why: 'Both are standard items in a scheme\'s published terms and are almost always mentioned at the point of sale.' },
        { text: 'The average maturity of the portfolio and the interest rate reset profile', correct: true, why: 'These are the technical details that are often buried in the fine print and not emphasised in the sales pitch. The average maturity tells you how sensitive the fund is to interest rate changes.' },
        { text: 'The fund\'s investment objective', why: 'The objective is usually highlighted in the pitch.' },
        { text: 'The name of the fund house', why: 'The fund house name is always highlighted.' },
      ],
    },
    {
      q: 'A platform offers 12% annual returns on gold deposits, much higher than bank interest. The platform is not listed on the RBI\'s register of regulated entities. What does due diligence indicate?',
      options: [
        { text: 'The return is likely funded by new entrants\' deposits rather than by real gold-backed activity', correct: true, why: 'The combination of high returns and absence from the regulator\'s register is a strong red flag. The four-step due diligence pass would register the absence, flag the return source as uncertain, and lead to a decision not to proceed.' },
        { text: 'The return is genuine because the platform has a professional website', why: 'A professional website does not substitute for regulatory registration or a verified return source.' },
        { text: 'The return is safe because the platform is backed by physical gold', why: 'Without registration and a verified return source, the claim about gold backing cannot be trusted.' },
        { text: 'Due diligence cannot be done on crypto-related products', why: 'The four-step pass applies to any product or intermediary, including gold-deposit platforms.' },
      ],
    },
    {
      q: 'A scheme offers 18% a year and invites you to invest after a seminar. Which pair of findings should stop you before any further analysis?',
      options: [
        { text: 'The scheme appears on no regulator\'s register, and nobody can explain whether the 18% comes from interest, rent, profit or a capital gain', correct: true, why: 'These are the two questions the pass exists to answer: is the seller regulated, and where does the money come from? A return that cannot be traced to a source and a seller who is not registered are disqualifying on their own.' },
        { text: 'The office is in a city you have never visited', why: 'Location is not by itself a finding. Registered firms operate from many cities, and an unregistered one can rent an office anywhere.' },
        { text: 'The minimum investment is larger than you had planned to commit', why: 'Ticket size is a suitability question, not a diligence finding. It may rule the scheme out for you, but it says nothing about whether the scheme is sound.' },
        { text: 'The scheme has been running for only two years', why: 'A short record is a reason for caution, but a young registered firm with an explainable return is a different proposition from an unregistered one with no source for its payout.' },
      ],
    },
    {
      q: 'After completing the four-step due diligence pass, you have a remaining concern: the entity\'s ownership is opaque, but the documents are clear and the entity is registered. What should you do?',
      options: [
        { text: 'Proceed, because the documents are clear and the entity is registered', why: 'Opaque ownership is a significant concern that the due diligence pass has identified. Proceeding would ignore a key red flag.' },
        { text: 'Do not proceed, because opaque ownership is a red flag identified during the counterparty questions step', correct: true, why: 'The due diligence process is designed to surface concerns like opaque ownership. If a concern remains after the pass, the prudent decision is not to proceed, or to seek further clarification before deciding.' },
        { text: 'Proceed but keep the concern to yourself, so you can say you were not warned later', why: 'Hiding a known concern does not remove it, and it does not protect you if the product underperforms.' },
        { text: 'Contact the regulator after proceeding, in case things go wrong', why: 'This is reactive, not preventive. The due diligence pass is meant to prevent you from committing in the first place.' },
      ],
    },
  ],
  takeaway: 'The four-step due diligence pass — registration check, document review, counterparty questions, and recording the decision in writing — is a repeatable process that protects you from mis‑selling and fraud. Before committing money, always run the pass.',
}