import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: regulatory verification, verifying any entity on the regulator\'s own register and reading the warn lists.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Verification desk: the four-step process for checking any financial entity. */
export const l5_113: Chapter = {
  id: 'l5-113',
  title: 'Regulatory Verification',
  subtitle: 'Verify any entity on the regulator\'s own register and read the warn lists before transacting.',
  minutes: 10,
  blocks: [
    scene('verification-desk', 'A four-step desk process: register lookup, warn list check, entity details verification, and decision recording.'),
    { kind: 'p', text: 'Before you commit money to any financial entity — a fund, a platform, an advisor, an insurer, or a lending company — you must verify that the entity is registered with the appropriate regulator and that there are no active warnings or enforcement actions against it. The verification desk is a four-step process that makes this check repeatable and recordable. The four steps are: (1) Register lookup: check the entity on the official regulator register. SEBI maintains a register of market intermediaries, RBI maintains a list of registered entities for banking, forex, and deposit-taking, IRDAI maintains an insurer register, and PFRDA maintains the NPS subscriber and pension service registry. (2) Warn list check: read the regulator\'s warn list or alert list, which names entities that have been warned, penalised, or directed to stop operations. (3) Entity details verification: confirm the entity\'s name, registration number, address, and key personnel match the register entry. Scammers often use names that sound similar to legitimate entities. (4) Record the decision: write a brief note — "Entity verified / not verified because…" — with the register URL, the warn list status, and any concerns. This creates a paper trail that protects you later.' },
    { kind: 'p', text: 'The importance of this check cannot be overstated. In India, many entities operate without registration, and many more are on the regulator\'s watchlist for mis-selling, unauthorized deposit-taking, or other violations. The warn list is often the first public indication that a regulator is investigating an entity. If you transact with an unregistered entity or one on the warn list, you have no statutory protection, and recovering your money is extremely difficult. The verification desk takes only a few minutes and is your baseline defence.' },
    { kind: 'h', text: 'The four-step verification desk process' },
    { kind: 'list', ordered: true, items: [
      'Step 1 – Register lookup: Visit the regulator\'s official website and use their searchable register. Note the entity\'s registration number, the type of registration, and the date of registration. If the entity is not on the register, do not proceed.',
      'Step 2 – Warn list check: On the same regulator\'s website, find the warn list, alert list, or list of entities whose registration has been cancelled, suspended, or warned. If the entity appears on the warn list, do not proceed.',
      'Step 3 – Entity details verification: Compare the entity\'s name, registration number, address, and key personnel with the register entry. Scammers often use names that are similar to but not the same as legitimate entities. If any detail does not match, do not proceed.',
      'Step 4 – Record the decision: Write a one-paragraph conclusion: "I am proceeding / not proceeding because…" Note the register URL, the warn list status, and any concerns. Keep this note for your records.',
    ] },
    l5Rule(
      'How to verify any financial entity before transacting',
      'Before you commit money, always run the four-step verification desk: (1) Look up the entity on the regulator\'s register, (2) Check the warn list, (3) Verify the entity\'s details match the register, (4) Record your decision in writing. This repeatable process takes less than ten minutes and is your baseline defence against unregistered and mis-sold products.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-verify-entity', 'You are presented with a financial entity (a fund house, a platform, an advisor, an insurer, or a lending company). You must complete the four-step verification desk and record your conclusion. The lab records which steps you completed, whether the entity appeared on the warn list, whether the details matched, and whether you would proceed. This trains you to make the verification desk a habit before any financial commitment.'),
    l5Illustrative('The entity profiles and register data in the lab are invented for practice. The four-step verification desk and the habit of verifying before transacting are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that the verification desk is not a one-time check. Regulators update their registers and warn lists regularly. An entity that was verified last year may have been penalised or had its registration cancelled. The habit is to verify every time, before every transaction.' },
    { kind: 'terms', items: [
      { term: 'Register lookup', meaning: 'Checking the entity on the official regulator register to confirm its registration status.' },
      { term: 'Warn list', meaning: 'The regulator\'s list of entities that have been warned, penalised, or directed to stop operations.' },
      { term: 'Entity details verification', meaning: 'Confirming the entity\'s name, registration number, address, and key personnel match the register entry.' },
      { term: 'Decision recording', meaning: 'Writing a brief note documenting the verification outcome, the register URL, and any concerns.' },
    ] },
    l5Sources(['rbi', 'sebi', 'irdai', 'pfrda', 'mca'], [
      'The RBI list of regulated entities and its caution lists',
      'The SEBI register of market intermediaries, and the SCORES platform for complaints',
      'IRDAI\'s insurer and agent verification portal',
      'PFRDA\'s NPS registry and subscriber services',
      'MCA\'s company registration and verification portal',
    ]),
  ],
  quiz: [
    {
      q: 'Before investing in a new mutual fund, which of the following should you do FIRST?',
      options: [
        { text: 'Check the fund house and scheme on SEBI\'s register of market intermediaries', correct: true, why: 'The first step in regulatory verification is to confirm the entity is registered with the appropriate regulator. SEBI maintains the register of mutual fund houses and schemes in India.' },
        { text: 'Read the fund\'s key fact statement and expense ratio', why: 'This is important but comes after regulatory verification.' },
        { text: 'Check the fund manager\'s track record and previous funds', why: 'This is secondary to confirming regulatory registration.' },
        { text: 'Ask a friend or family member if they have heard of the fund', why: 'This is informal and not a substitute for regulatory verification.' },
      ],
    },
    {
      q: 'You find an investment platform that is absent from the regulator\'s register, though the website looks professional and the returns quoted are attractive. What should you do?',
      options: [
        { text: 'Treat it as unregulated, report it, and do not commit money', correct: true, why: 'A professional website is a marketing cost, not evidence of authorisation. Where the entity offering the service holds no registration, you have no statutory protection, and the regulator\'s own warnings treat such offers as unlawful.' },
        { text: 'Invest a small amount first, since the returns quoted are attractive', why: 'A small sum does not buy protection; it only establishes the relationship the scheme is looking for, and it is exactly the amount the scheme expects you to start with.' },
        { text: 'Ask the platform to send its registration number', why: 'Asking is not verification: an impostor will simply quote a number. The check has to be made on the regulator\'s own register, in the entity\'s name, by you.' },
        { text: 'Check the platform\'s reviews and social-media following', why: 'Reviews and followers can be bought, and neither is a regulator\'s record of who is authorised to take your money.' },
      ],
    },
    {
      q: 'Which of the following is LEAST likely to be found on a regulator\'s warn list?',
      options: [
        { text: 'An entity that has been penalised for mis-selling', why: 'Enforcement action is precisely what these lists record, so a penalised entity is likely to appear.' },
        { text: 'An entity whose registration has been cancelled or suspended', why: 'A change in registration status is one of the main reasons a regulator publishes a caution, so this belongs on the list.' },
        { text: 'An entity that has won a customer satisfaction award', correct: true, why: 'An award is a marketing event, not a regulatory finding, and it is normally self-reported. It tells you nothing about authorisation or enforcement, which is what these lists publish.' },
        { text: 'An entity that has been directed to stop operations by the regulator', why: 'A direction to stop operating is a regulatory action and would be recorded where the public can see it.' },
      ],
    },
    {
      q: 'You check an entity on the regulator\'s register. The name matches a registered firm, but the registration number quoted to you appears against no entry. What should you do?',
      options: [
        { text: 'Proceed, because the name on the website matches the register', why: 'Impersonation works by copying exactly the things you can see — the name, the logo, the office address. The number is the part that cannot be copied honestly, which is why it is the part to check.' },
        { text: 'Do not proceed: a number that matches nothing means the entity is not the registered firm and may be impersonating one', correct: true, why: 'The registration number is the unique identifier of the authorised entity. If it does not reconcile, then whatever you are dealing with is not the firm whose name you read.' },
        { text: 'Proceed, but keep a screenshot of the register page in case something goes wrong', why: 'Keeping records is sensible, and it is not verification. The screenshot would only document that the number you were given never matched.' },
        { text: 'Call the entity and ask it to confirm its own registration number', why: 'The entity has already given you the number. Repeated confirmation from the source you are testing is not a check; only the regulator\'s record is.' },
      ],
    },
    {
      q: 'Which of these statements about regulatory verification is false?',
      options: [
        { text: 'The register lookup, the warn-list check, the detail match and the record of the decision together take minutes, not hours', why: 'That is what makes the desk practical: it is a short, repeatable routine rather than a project, which is why there is no good reason to skip it.' },
        { text: 'An entity verified last year can be treated as verified today', correct: true, why: 'This is false, and the reason is that registers change. Registrations are suspended, cancelled and restored, penalties are published, and entities are added to warn lists — so a check is a dated fact about a moment, not a permanent property of the entity.' },
        { text: 'A regulator\'s warn list is a public record worth reading before you transact', why: 'Warn lists exist precisely so that the public can see who the regulator has cautioned against, whether or not the entity holds registration.' },
        { text: 'An entity that holds no registration gives you no statutory protection', why: 'Statutory protection is a consequence of the regulatory framework the entity sits inside. Outside it, you are relying on the entity\'s own promises.' },
      ],
    },
  ],
  takeaway: 'Before you commit money to any financial entity, always run the four-step verification desk: register lookup, warn list check, entity details verification, and decision recording. This repeatable process takes less than ten minutes and is your baseline defence against unregistered and mis-sold products.',
}