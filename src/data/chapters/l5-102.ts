import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: how to spot deepfakes, fake platforms,
 * and other cons, and how to verify before committing money.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Deepfake verification flowchart: the channel the caller cannot control. */
export const l5_102: Chapter = {
  id: 'l5-102',
  title: 'Deepfake Scams',
  subtitle: 'Verify identity through a channel the caller cannot control when a familiar voice or face asks for money.',
  minutes: 12,
  blocks: [
    scene('deepfake-check', 'A flowchart: verify through a callback on a known number, a face-to-face meeting, or a secret question only the real person would know.'),
    { kind: 'p', text: 'Deepfake technology can now generate audio and video that is nearly indistinguishable from the real person. Scammers have exploited this to impersonate family members, executives, or officials, asking the victim to transfer money, authorize a transaction, or reveal credentials. The core defence is to verify through a channel the caller cannot control: call the person back on a number you already have, ask a question only the real person would know, or arrange an in-person meeting. No voice or video recording is a sufficient substitute for real-time verification through an independent channel.' },
    { kind: 'p', text: 'The typical scenario begins with a call, video message, or voice note from someone who sounds exactly like a relative, a boss, or a government official. The story is usually urgent — a legal problem, a medical emergency, a frozen account, or a lucrative investment opportunity — and the request is for money, a transfer, or credentials. Because the voice (or video) is convincing, the victim complies without question. Only later does the real person contact them to say they never made the call.' },
    { kind: 'h', text: 'The three verification rules' },
    { kind: 'list', ordered: true, items: [
      'Always callback: never accept the caller\'s number or link. Use a number you already have saved or look up the official number from a trusted source.',
      'Ask a secret question: a question whose answer would not appear on social media or in a public profile — such as the name of a childhood pet, the street they grew up on, or a shared memory.',
      'Demand real-time proof: a recent photo holding today\'s newspaper, a live video call where the person performs a simple action (like touching their nose), or a code word that was agreed in advance.',
    ] },
    l5Rule(
      'How to verify a caller who claims to be someone you know',
      'If a voice or video asks you to move money or share credentials, do not act on the request. Instead, call the person back on a number you trust, ask a secret question, or require real-time proof that only the real person could provide. The technology to fake a voice or video is improving, but the inability to control a live, independent channel is a physical limit that no deepfake can overcome.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-verify-call', 'You receive a video call from someone who claims to be a relative in distress. The video appears real, but the simulator introduces subtle anomalies (lip-sync delay, unnatural blinking, inconsistent lighting). You must decide whether to send money, ask for a code word, or hang up and call back on a known number. The lab records your choice and the reason you gave.'),
    l5Illustrative('The voice and video samples in the lab are synthesized for demonstration. The three verification rules — callback, secret question, and real-time proof — are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that deepfakes exploit the trust we place in familiar voices and faces. The defence is not technical (no detector is reliable enough) but procedural: always verify through a channel the caller cannot control. If the person truly needs help, they will accept the extra step. If the request is fraudulent, the extra step will expose it.' },
    { kind: 'terms', items: [
      { term: 'Deepfake', meaning: 'Audio or video content that has been synthesized or manipulated using AI to misrepresent what was said or done.' },
      { term: 'Callback', meaning: 'Returning a call on a number you already have or have independently verified, rather than accepting the caller\'s number.' },
      { term: 'Secret question', meaning: 'A question whose answer is not publicly available and only the real person would know.' },
      { term: 'Real-time proof', meaning: 'A live demonstration or token that only the genuine person could provide, such as holding today\'s newspaper or performing a specific action on video.' },
    ] },
    l5Sources(['cyberCrime', 'certin', 'rbi'], [
      'Cyber Crime portal guidance on reporting impersonation fraud, and the helpline for reporting it',
      'Indian Computer Emergency Response Team (CERT-In) advisories on deepfake misuse and on reporting a suspected AI-generated impersonation',
      'RBI advisories warning the public about deepfake videos impersonating officials of the Bank, and about KYC-update fraud',
    ]),
  ],
  quiz: [
    {
      q: 'You receive a video call from someone who sounds like your sibling, asking you to transfer money for a medical emergency. The video appears real, but you suspect it might be a deepfake. What should you do first?',
      options: [
        { text: 'Transfer the money immediately, because the emergency is real', why: 'Acting on an unverified request, even for a genuine-seeming emergency, is the primary risk with deepfakes.' },
        { text: 'Hang up and call your sibling back on a number you already have saved, or ask a secret question only they would know', correct: true, why: 'The core defence against deepfakes is verification through a channel the caller cannot control: a known phone number or a question whose answer is not public.' },
        { text: 'Ask the caller to send a photo of themselves holding today\'s newspaper', why: 'While a newspaper photo is a form of real-time proof, it can also be fabricated. The safer first step is to callback on a known number.' },
        { text: 'Reply to the voice note with "Can you call me back on my landline?"', why: 'This is essentially a callback, but it is safer to initiate the callback yourself on a number you trust, not one the caller provides.' },
      ],
    },
    {
      q: 'Which of these is the most reliable way to verify a caller who may be a deepfake?',
      options: [
        { text: 'Ending the call and ringing the person back on a number you already have saved', correct: true, why: 'A callback on a number you hold yourself is the only check the attacker cannot control: the voice and the video belong to him, but the line you dial does not.' },
        { text: 'Asking a secret question whose answer could not be found on social media', why: 'This is a genuine second check, but it depends on the attacker not knowing the answer. A callback on your own number removes that dependence.' },
        { text: 'Accepting the call because the voice and the face match the person you know', why: 'Resemblance is the one thing that proves nothing here, because cloning a voice or swapping a face is precisely what the fraud is built on.' },
        { text: 'Checking whether the lips stay in sync with the audio during the call', why: 'Artefacts are a useful clue when you notice them, but their absence proves nothing: generation keeps improving, and a poor connection can make a genuine call look out of step.' },
      ],
    },
    {
      q: 'A deepfake scam typically creates which kind of urgency?',
      options: [
        { text: 'A request to invest in a time-limited opportunity that will expire in hours', why: 'This is one common pattern, but not the only one.' },
        { text: 'A claim that a family member is in legal or medical trouble and needs money immediately', correct: true, why: 'The most common deepfake scenarios involve an urgent family emergency, a legal problem, or a frozen account, pressuring the victim to act before they can verify.' },
        { text: 'A notification that a password will expire in 24 hours', why: 'This is a phishing pattern, not typically a deepfake scenario.' },
        { text: 'An offer that will disappear if you do not act within the hour', why: 'This is a sales tactic, not a deepfake pattern.' },
      ],
    },
    {
      q: 'You receive a voice note from your "boss" asking you to transfer funds to a new vendor. The voice is very convincing. What is the best action?',
      options: [
        { text: 'Transfer the funds, because your boss would not ask you to do something risky', why: 'Executives are frequently impersonated in deepfake scams, and the request is designed to bypass normal caution.' },
        { text: 'Callback your boss on a known number and verify the request before transferring anything', correct: true, why: 'The core defence is to verify through a channel the caller cannot control. A callback on a known number is the simplest and most reliable method.' },
        { text: 'Transfer a small amount first to test the waters', why: 'This does not reduce risk. If it is a deepfake, any amount transferred is lost.' },
        { text: 'Ask the boss to send a written request on company letterhead', why: 'While written requests are good practice, they can also be forged. The faster and more reliable step is a callback on a known number.' },
      ],
    },
    {
      q: 'Why can\'t you rely on a voice-detection app to identify a deepfake?',
      options: [
        { text: 'Voice-detection apps are not yet accurate enough to be used as a security measure', why: 'This is true, but the deeper reason is that the defence is procedural, not technical.' },
        { text: 'Because the defence against deepfakes is procedural (verify through an independent channel), not technical (detect the fake)', correct: true, why: 'No deepfake detector is reliable enough to serve as a security measure. The only reliable defence is to verify through a channel the caller cannot control, such as a known phone number or a secret question.' },
        { text: 'Because deepfakes can only be detected by the original speaker', why: 'This is false; detection is possible in some cases but not reliable enough for security.' },
        { text: 'Because voice-detection apps are expensive and not widely available', why: 'Cost and availability are not the primary reasons.' },
      ],
    },
    {
      q: 'A caller who sounds like your cousin asks you not to mention the request to the rest of the family. Why does that detail matter?',
      options: [
        { text: 'It shows the caller is being considerate of a private matter', why: 'Consideration is the disguise. The practical effect of secrecy is what matters, and that effect is to remove the person who would have asked the obvious question.' },
        { text: 'It removes the second opinion that would otherwise catch the fraud, and the secrecy request is a standard feature of impersonation scams', correct: true, why: 'Impersonation scams work best when nobody else is consulted. A request to keep the matter quiet is a warning in its own right, whatever the voice sounds like.' },
        { text: 'It proves the caller is genuine, because a fraud would never ask for discretion', why: 'Frauds ask for discretion routinely, because a confidential request is harder for the target to test against anyone else.' },
        { text: 'It has no significance once the voice has been recognised as familiar', why: 'The voice is the part of the call the attacker controls. Familiarity of the voice therefore cannot make the request safe.' },
      ],
    },
  ],
  takeaway: 'Deepfakes exploit trust in familiar voices and faces. The defence is procedural, not technical: always verify through a channel the caller cannot control — callback on a known number, a secret question, or real-time proof. No detector is reliable enough to replace this procedure.',
}