import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: social engineering, and how to break the manipulation pattern.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Social engineering loop: the three patterns — authority, urgency, secrecy — and the refusal script. */
export const l5_106: Chapter = {
  id: 'l5-106',
  title: 'Social Engineering',
  subtitle: 'Recognise the manipulation pattern — authority, urgency, secrecy — and break it with a scripted response.',
  minutes: 11,
  blocks: [
    scene('social-engineering-loop', 'A loop diagram: the attacker establishes authority, creates a sense of urgency, and enforces secrecy, then the victim either complies or breaks the pattern with a refusal script.'),
    { kind: 'p', text: 'Social engineering exploits human psychology rather than technical vulnerabilities. The pattern is remarkably consistent: the attacker establishes a reason for the victim to trust authority, creates a sense that immediate action is required, and demands that the victim keep the request secret. The three core patterns are authority (impersonating a boss, official, or trusted figure), urgency (a deadline, a freezing account, a missed opportunity), and secrecy ("don\'t tell anyone", "this is confidential", "this is between us"). The victim who recognises the pattern and uses a scripted response can break free without feeling rude or panicked.' },
    { kind: 'p', text: 'The typical scenario begins with a call, email, or message from someone claiming to be an authority figure — a bank manager, a government official, a senior colleague, or even a family member in distress. The story is usually urgent: your account has been compromised, a payment is due immediately, a family member is in trouble and needs money wired right away. The attacker then enforces secrecy: "Don\'t tell anyone at the bank", "This is confidential", "Your colleagues don\'t need to know". The combination of authority, urgency, and secrecy short-circuits the victim\'s normal caution, and the requested action — transferring money, sharing credentials, installing software — is performed without verification.' },
    { kind: 'h', text: 'The three patterns and how to recognise them' },
    { kind: 'list', ordered: true, items: [
      'Authority: the attacker impersonates a person or institution you trust. The voice or email looks official, and the title or role is used to demand compliance.',
      'Urgency: the attacker creates a false deadline. "Transfer today or the account will be frozen", "Send money within the hour or your family member will be harmed". The pressure is designed to prevent you from thinking or verifying.',
      'Secrecy: the attacker insists that you keep the request confidential. "Don\'t tell your spouse", "Don\'t call the bank", "This is between us". Secrecy removes the safety net of a second opinion.',
    ] },
    l5Rule(
      'How to break the social engineering pattern',
      'If anyone — whether claiming to be a bank, a government official, a colleague, or a family member — asks you to move money, share credentials, or install software, and combines authority, urgency, and secrecy, stop. Use the refusal script: "I need to verify this through my own channels. I will call you back on a number I trust." Then callback on a known number, ask a secret question, or consult a person who is not subject to the same pressure. The technology or authority behind the attacker does not matter: the procedural defence of verification through an independent channel is reliable because it exploits a physical limit — the attacker cannot control a channel they do not have access to.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-social-engineering-defence', 'You receive a series of scenarios that combine authority (a caller claiming to be from your bank), urgency (your account is about to be frozen), and secrecy ("don\'t tell anyone at the bank"). You must decide whether to follow the request, use the refusal script, or ask for verification. The lab records your choice and the reason you gave, training you to recognise the pattern in real life.'),
    l5Illustrative('The scenarios in the lab are synthesized for demonstration. The three patterns — authority, urgency, secrecy — and the refusal script are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that social engineering is not about technical sophistication. It is about exploiting psychological patterns that all humans share. The defence is not to be more suspicious of everyone, but to have a standard procedure — the refusal script and independent verification — that you follow whenever authority, urgency, and secrecy are combined.' },
    { kind: 'terms', items: [
      { term: 'Social engineering', meaning: 'The manipulation of a person to perform actions or disclose information, typically by exploiting authority, urgency, or secrecy.' },
      { term: 'Authority pattern', meaning: 'Impersonating a trusted figure to demand compliance.' },
      { term: 'Urgency pattern', meaning: 'Creating a false deadline to prevent verification or thought.' },
      { term: 'Secrecy pattern', meaning: 'Insisting that the request remain confidential to remove the safety net of a second opinion.' },
      { term: 'Refusal script', meaning: 'A standard response such as "I need to verify this through my own channels" that breaks the manipulation pattern.' },
    ] },
    l5Sources(['cyberCrime', 'rbi', 'npci'], [
      'Indian Cyber Crime portal guidelines on social engineering and impersonation scams',
      'RBI advisories on vishing (voice phishing) and remote-access scams',
      'NPCI warnings on OTP relay and screen-sharing fraud',
    ]),
  ],
  quiz: [
    {
      q: 'You receive a call from someone claiming to be from your bank\'s fraud department. They say your account has been compromised and you must immediately transfer your savings to a "safe account". They also say "Don\'t tell anyone at the bank or your family, this is confidential." What is the best action?',
      options: [
        { text: 'Transfer the money immediately to the safe account, because the bank is protecting you', why: 'This combines all three patterns (authority, urgency, secrecy) and is a classic vishing scam. Never transfer money based on an unsolicited call.' },
        { text: 'Hang up and call your bank back on the number on the back of your card, and do not mention the call to anyone else until you have verified', correct: true, why: 'The defence is to break the pattern by verifying through an independent channel. The refusal script ("I need to verify this through my own channels") and a callback on a known number are the reliable defence.' },
        { text: 'Tell your family immediately, because they need to know about the compromise', why: 'While telling family is good practice, the order matters. First verify the claim through your bank\'s real channel. The secrecy pattern depends on you not telling anyone, so breaking the secrecy by calling your bank is the priority.' },
        { text: 'Install the remote-access app the caller recommends, so the bank can secure your account', why: 'This is the final step of the scam. Never install software recommended by an unsolicited caller.' },
      ],
    },
    {
      q: 'Which of the following is the LEAST effective response to a social engineering attempt that uses authority, urgency, and secrecy?',
      options: [
        { text: 'Using a standard refusal script and calling back on a known number', why: 'This is the most effective response, because it breaks all three patterns at once: it declines to comply automatically, it takes back the time that urgency was meant to remove, and it brings the request into the open.' },
        { text: 'Acting immediately without verification, because the situation is urgent', correct: true, why: 'This is the least effective response, and it is exactly what the three patterns are built to produce. Urgency is manufactured so that the step which would have caught the fraud — verification on an independent channel — is skipped.' },
        { text: 'Telling a colleague or a family member about the request, which breaks the secrecy', why: 'This is helpful, because secrecy depends on the request staying private. It is weaker than a callback, however, because the person you tell may not know how to check the claim.' },
        { text: 'Hanging up and refusing to engage any further', why: 'Refusing to engage prevents immediate loss, but it forfeits the chance to verify the claim and to report it. A callback is the stronger move.' },
      ],
    },
    {
      q: 'You receive an email from your CEO asking you to transfer ₹5 lakh to a new vendor within the hour, with the note "This is confidential and must not be shared with anyone else in finance." What should you do?',
      options: [
        { text: 'Transfer the money immediately, because the CEO would not risk the company\'s money on a scam', why: 'This combines all three patterns. The CEO\'s authority, the hourly urgency, and the enforced secrecy are the classic social engineering sequence.' },
        { text: 'Call the CEO back on a known number (not the one in the email) to verify the request, and tell the finance team once verification is complete', correct: true, why: 'This breaks all three patterns. The callback on a known number breaks authority + urgency. Telling the finance team after verification breaks secrecy. This is the procedural defence.' },
        { text: 'Email the finance team immediately, marked "urgent and confidential"', why: 'This reinforces the secrecy pattern rather than breaking it. The finance team may act on the unverified request.' },
        { text: 'Transfer a small amount first to test the waters, and then the rest if it works', why: 'A small test does not reduce the risk. If it is a scam, even a small loss is damaging, and the test may confirm the attacker\'s narrative.' },
      ],
    },
    {
      q: 'Which detail is the strongest single signal that a request is a social-engineering attempt rather than a genuine one?',
      options: [
        { text: 'The caller uses a title or a job description to establish who he is', why: 'Authority alone is not proof of fraud: genuine institutions do call customers, and a title is easy to state. It is the combination that should worry you.' },
        { text: 'The caller insists that you keep the request secret from your family, your colleagues or your bank', correct: true, why: 'Secrecy is the tell, because no genuine institution needs you to conceal a transaction from the people who could verify it. It is the pattern that exists purely to isolate you from a second opinion.' },
        { text: 'The request arrives by telephone rather than in writing', why: 'The channel is not the tell. Many legitimate matters begin with a phone call; what matters is what the caller asks you to do next.' },
        { text: 'The caller asks you to act on the same day', why: 'Deadlines are common in genuine business too. Urgency is a warning that should slow you down, but on its own it does not identify the fraud.' },
      ],
    },
    {
      q: 'The refusal script "I need to verify this through my own channels" is effective against social engineering because it',
      options: [
        { text: 'Challenges the attacker\'s authority', why: 'This is part of it, but not the core reason.' },
        { text: 'Breaks all three patterns: it challenges authority (you are not automatically complying), it removes urgency (you are taking time to verify), and it breaks secrecy (you are talking about the request)', correct: true, why: 'The refusal script is effective because it simultaneously challenges authority ("I am not complying automatically"), creates a pause that removes the pressure of urgency, and breaks the secrecy pattern by bringing the request into the open. This is the core defence.' },
        { text: 'Removes the secrecy pattern only', why: 'This is too narrow. The script breaks all three patterns.' },
        { text: 'Is the only defence needed, because no other step is required', why: 'While the script is the core defence, it works best when followed by independent verification (callback on a known number).' },
      ],
    },
  ],
  takeaway: 'Social engineering exploits the combined patterns of authority, urgency, and secrecy. The defence is the refusal script ("I need to verify this through my own channels") followed by independent verification (callback on a known number, a secret question, or real-time proof). No detector is reliable enough to replace this procedure.',
}