import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: fake trading platforms, and how to verify
 * before funding.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Fake trading platform funnel: the small withdrawal that baits the deposit. */
export const l5_103: Chapter = {
  id: 'l5-103',
  title: 'Fake Trading Platforms',
  subtitle: 'Test a trading app before funding it: registration, withdrawal evidence, and the shape of the deposit trail.',
  minutes: 11,
  blocks: [
    scene('fake-platform-funnel', 'A funnel diagram: registration → small withdrawal → large deposit → withdrawal blocked or delayed.'),
    { kind: 'p', text: 'Fake trading platforms lure victims with the promise of high returns, low fees, and an easy-to-use app. The pattern is almost always the same: the platform allows a small withdrawal soon after registration, creating a sense of trust and proving "they pay". Once the victim deposits a larger amount, the platform either blocks withdrawals, imposes impossible verification steps, or simply disappears. The small early withdrawal is the bait; the large later deposit is the trap.' },
    { kind: 'p', text: 'The typical onboarding flow goes like this. After a quick registration (sometimes with minimal KYC), the platform allows the user to make a small withdrawal — often a percentage of the initial deposit or a modest profit from a few trades. This is the "evidence" that the platform is legitimate. The user then deposits a much larger amount, believing the platform is safe. After the larger deposit, the platform either stops responding, requests additional "verification fees" or "tax payments" before any withdrawal, or simply disappears, leaving the victim with no recourse because the platform was unregistered and the victim\'s money was sent to an unregulated entity.' },
    { kind: 'h', text: 'The three checks before you fund' },
    { kind: 'list', ordered: true, items: [
      'Check registration: verify the platform is registered with the appropriate regulator (SEBI for securities, RBI for forex or digital lending, or the relevant authority for crypto). Unregistered platforms are illegal.',
      'Test the small withdrawal: before depositing a large amount, try withdrawing the small amount that was offered during onboarding. If the platform makes it difficult, imposes hidden fees, or refuses, do not deposit more.',
      'Read the fine print: look for clauses that limit withdrawal rights, impose impossible verification, or shift all risk to the user. Legitimate platforms disclose these terms upfront.',
    ] },
    l5Rule(
      'How to test a trading platform before committing money',
      'Never deposit a large amount without first testing a small withdrawal. If the platform resists, imposes hidden conditions, or the withdrawal is delayed without explanation, the pattern matches a fake platform. Registration with the relevant regulator is the baseline: an unregistered platform operating in India cannot legally offer trading services.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-platform-verifier', 'You are shown a trading app interface with a simulated balance. You attempt a small withdrawal immediately after "registration", and then a large withdrawal after a larger deposit. The lab records whether the withdrawal succeeds, what obstacles appear, and how long the delay is. This trains you to recognise the red flags before you face them with real money.'),
    l5Illustrative('The platform interface and withdrawal times in the lab are invented for practice. The three checks — registration, small withdrawal, and fine print — are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that the small early withdrawal is the key psychological lever. It creates trust where none should exist. The lesson is to treat every platform as unproven until you have personally tested a small withdrawal, and to verify registration with the regulator before any money changes hands.' },
    { kind: 'terms', items: [
      { term: 'Fake trading platform', meaning: 'An unregulated website or app that mimics a legitimate trading platform to collect deposits and prevent withdrawals.' },
      { term: 'Regulator', meaning: 'The body that oversees the market in question — SEBI for securities, RBI for forex and digital lending, IRDAI for insurance. India has no dedicated financial-sector regulator for crypto, which is why a virtual digital asset service provider\'s registration with the Financial Intelligence Unit is a starting check rather than a guarantee.' },
      { term: 'Small withdrawal bait', meaning: 'A small, easy withdrawal early in the relationship, designed to create trust before the larger deposit is taken.' },
      { term: 'Know-your-customer (KYC)', meaning: 'The identity-verification process that regulated platforms must perform; minimal or missing KYC is a red flag.' },
    ] },
    l5Sources(['sebi', 'rbi', 'cyberCrime'], [
      'SEBI warnings on unregistered trading platforms and investment schemes',
      'RBI advisories on unauthorized digital lending and forex trading apps',
      'Indian Cyber Crime portal guidelines for reporting fake trading apps',
    ]),
  ],
  quiz: [
    {
      q: 'What is the "small withdrawal bait" in a fake trading platform?',
      options: [
        { text: 'A small withdrawal allowed soon after registration, designed to create trust before the larger deposit', correct: true, why: 'The small withdrawal is the core bait: it proves "the platform pays" and lures the victim into depositing a much larger amount.' },
        { text: 'A withdrawal fee charged on the first small trade', why: 'This is a legitimate fee structure, not the bait.' },
        { text: 'A small withdrawal that requires extensive KYC before it can be processed', why: 'This is a red flag, not the standard bait. Standard bait allows the withdrawal easily.' },
        { text: 'A withdrawal of profits after a successful trade', why: 'This is a normal feature, not the specific bait pattern.' },
      ],
    },
    {
      q: 'You register on a new trading app and are immediately allowed to withdraw a small profit. What does this indicate?',
      options: [
        { text: 'The app is legitimate and you can now deposit more', why: 'The small withdrawal is the bait. It is designed to create trust, not a guarantee of legitimacy.' },
        { text: 'This is the standard pump pattern: the small withdrawal is the bait, and the larger deposit is the trap', correct: true, why: 'The small withdrawal early in the relationship is the hallmark of a fake trading platform. It creates the appearance of legitimacy before the larger deposit is trapped.' },
        { text: 'The app has a generous referral program', why: 'Referral programs exist, but the small withdrawal pattern is specifically the bait-and-switch sequence.' },
        { text: 'The app is regulated by SEBI', why: 'Registration and the bait pattern are not the same thing. An unregistered platform can still allow a small withdrawal as bait.' },
      ],
    },
    {
      q: 'After you deposit a large amount on a trading platform, the platform requests an additional "verification fee" before allowing any withdrawal. What should you do?',
      options: [
        { text: 'Pay the fee, because it is a standard regulatory requirement', why: 'Legitimate platforms do not charge fees to release your own money. This is a common trap on fake platforms.' },
        { text: 'Refuse to pay and attempt to withdraw without the fee; if the platform resists or delays further, do not deposit any further amounts', correct: true, why: 'A legitimate platform does not require an additional fee to release your funds. Any request for an extra payment to enable withdrawal is a strong red flag matching the fake-platform pattern.' },
        { text: 'Pay the fee and wait for the withdrawal to process', why: 'Paying the fee does not guarantee the withdrawal, and it funds the scam.' },
        { text: 'Contact customer support to ask why the fee is needed', why: 'Customer support on fake platforms is either nonexistent or part of the deception.' },
      ],
    },
    {
      q: 'Which of the following is the most important first step when evaluating a new trading platform?',
      options: [
        { text: 'Download the app and check the user interface', why: 'A professional interface does not guarantee legitimacy.' },
        { text: 'Verify the platform\'s registration with the relevant regulator (SEBI, RBI, or the crypto authority)', correct: true, why: 'Registration is the baseline: an unregulated platform operating in India cannot legally offer trading services, and this check should come before any deposit or withdrawal test.' },
        { text: 'Read the online reviews and social media comments', why: 'Reviews can be fabricated and are secondary to regulatory registration.' },
        { text: 'Try a small withdrawal immediately after registration', why: 'This is the second step. Registration must be verified first.' },
      ],
    },
    {
      q: 'You see an app that promises guaranteed returns of 1% daily on crypto investments. The app is not listed on SEBI\'s register of regulated entities. What is the risk?',
      options: [
        { text: 'The returns are guaranteed because the app is well-designed', why: 'No legitimate investment guarantees daily returns, especially in crypto. The app is likely unregulated.' },
        { text: 'The app may be a fake trading platform: unregulated platforms often promise guaranteed returns and allow a small withdrawal as bait', correct: true, why: 'The combination of guaranteed returns (which no legitimate platform offers) and the absence from the regulator\'s register are the two strongest red flags. The small withdrawal bait may already be active.' },
        { text: 'The app is safe because it has a professional website', why: 'A professional website is easy to fake and does not indicate regulation.' },
        { text: 'The app is registered with the RBI, so it is safe', why: 'The option states the app is NOT listed on SEBI\'s register, and RBI registration does not cover all crypto activities.' },
      ],
    },
  ],
  takeaway: 'The small early withdrawal is the bait that creates trust before the large deposit is trapped. Always verify registration with the regulator first, test a small withdrawal before depositing more, and read the fine print for withdrawal restrictions.',
}