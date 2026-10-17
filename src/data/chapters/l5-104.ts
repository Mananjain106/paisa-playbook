import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: fake jobs, and how to screen job offers.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Fake job offer red-flag map: the tells that reveal an employment scam. */
export const l5_104: Chapter = {
  id: 'l5-104',
  title: 'Fake Jobs',
  subtitle: 'Screen a job offer for the tells of an employment scam, from registration fees to equipment cheques.',
  minutes: 10,
  blocks: [
    scene('job-offer-redflags', 'A checklist of red flags: fee-for-job, equipment cheque, data harvesting, unverified company.'),
    { kind: 'p', text: 'Fake job offers follow a predictable pattern. The scammer posts a listing for a desirable role — often remote, well-paid, and with minimal qualifications required. The initial contact is professional-looking, and the offer seems too good to be true. The tells appear progressively: the victim is asked to pay a "registration fee", "equipment deposit", "training cost", or "visa processing fee". In some cases, the scammer sends a fake cheque for equipment and asks the victim to forward the balance. In others, the "job" involves data entry or processing payments, which is actually a money-muling operation. The common thread is that the victim pays money or provides sensitive data, and either nothing is heard from the "employer" again, or the victim is drawn into a criminal scheme.' },
    { kind: 'p', text: 'The typical flow begins with a job listing that requires little or no experience, offers a high salary for remote work, and makes contact via messaging apps or email rather than a formal hiring process. The "employer" may cite urgency, remote location, or international operations as reasons the process is unusual. The tells then appear: a request for a payment to secure the role, a request to purchase equipment and forward the balance, an offer of a cheque that turns out to be fake, or a task that involves receiving and transferring money. Any of these tells indicates a scam, and the safest response is to stop all communication and report the offer.' },
    { kind: 'h', text: 'The five job-offer tells' },
    { kind: 'list', ordered: true, items: [
      'A fee to "secure" the job or "process your application": no legitimate employer asks the candidate to pay for the job.',
      'A request to purchase equipment or software and forward the balance to the "employer": the equipment may not exist, and the victim loses the money forwarded.',
      'A fake cheque or payment sent to your account, with a request to forward a portion elsewhere: the cheque will bounce, and you may be held liable or drawn into money muling.',
      'The "job" involves receiving money into your account and transferring it elsewhere: this is a money-muling operation, which is illegal and can make you complicit in fraud.',
      'The employer refuses to provide verifiable company details, a formal offer letter, or a video interview: a legitimate employer will always provide these.',
    ] },
    l5Rule(
      'How to screen a job offer for fraud tells',
      'If any of the five tells appears — especially a fee to secure the job, a request to forward money or equipment, a fake cheque, or a money-muling task — stop communication immediately. A legitimate employer will never ask you to pay for the job, will provide a verifiable company name and formal offer, and will use a standard hiring process with video or in-person interviews.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-job-scam-screener', 'You are presented with a job offer that has various elements: salary, requirements, payment requests, and company verification data. You must identify which, if any, of the five tells are present, and decide whether to accept, request more information, or reject the offer. The lab records your choices and the red flags you identified.'),
    l5Illustrative('The job offers and company details in the lab are invented for practice. The five tells and the rule about never paying for a job are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that the fee-for-job tell is the most common entry point, but it is also the easiest to spot once you know to look for it. The lesson is to treat any request for payment as a scam unless you have independently verified the employer\'s legitimacy through official channels.' },
    { kind: 'terms', items: [
      { term: 'Fee-for-job', meaning: 'A request to pay a registration, processing, or training fee to secure a job — no legitimate employer asks the candidate to pay.' },
      { term: 'Equipment cheque', meaning: 'A fake cheque sent to the victim\'s account, with a request to forward the balance elsewhere; the cheque bounces and the victim may be liable.' },
      { term: 'Money muling', meaning: 'Allowing your bank account to be used to transfer illicit funds, making you complicit in a criminal scheme.' },
      { term: 'Verifiable company', meaning: 'A company that can be confirmed through official registers, a physical address, and a formal hiring process.' },
    ] },
    l5Sources(['cyberCrime', 'mca'], [
      'Indian Cyber Crime portal guidelines for reporting employment fraud',
      'MCA (Ministry of Corporate Affairs) guidelines on company registration and verification',
    ]),
  ],
  quiz: [
    {
      q: 'You receive a job offer by email for a remote role with a high salary and no experience required. The offer says you must pay a "training fee" of ₹5,000 to secure the position. What should you do?',
      options: [
        { text: 'Pay the fee, because it is standard for remote jobs', why: 'No legitimate employer asks the candidate to pay for the job or training.' },
        { text: 'Treat it as a scam: the "training fee" is the fee-for-job tell, and you should stop communication immediately', correct: true, why: 'The fee-for-job tell is one of the five definitive red flags. A legitimate employer pays the employee, not the other way around.' },
        { text: 'Pay the fee and ask for a refund after joining', why: 'Paying the fee does not guarantee the job, and it funds the scam.' },
        { text: 'Negotiate the fee down to ₹2,000', why: 'There is no legitimate fee to negotiate; any fee from the candidate is a red flag.' },
      ],
    },
    {
      q: 'You are offered a job that involves receiving money into your bank account and transferring 60% of it to another account. What is this?',
      options: [
        { text: 'A legitimate cash-flow management role', why: 'Legitimate companies do not ask employees to transfer money between personal accounts.' },
        { text: 'A money-muling operation, which is illegal and can make you complicit in fraud', correct: true, why: 'The "receive and transfer" tell is one of the five job-offer red flags. Money muling is a criminal offence, even if the victim does not realise it at the time.' },
        { text: 'A standard finance role where you reconcile accounts', why: 'Account reconciliation is done on the company\'s systems, not by moving money between personal accounts.' },
        { text: 'A tax-efficient salary structuring role', why: 'Tax structuring does not involve moving customer or third-party money through personal accounts.' },
      ],
    },
    {
      q: 'Which of the following is LEAST likely to be a tell of a fake job offer?',
      options: [
        { text: 'The offer requires you to pay a "registration fee" to secure the role', why: 'A payment from the candidate is the fee-for-job tell, and it is the most reliable single sign that the employer is not real.' },
        { text: 'The employer provides a formal offer letter on company letterhead and a verifiable company address', correct: true, why: 'A verifiable company and a formal offer are what a genuine hiring process produces, so this is the one item on the list that is a sign of legitimacy rather than a warning.' },
        { text: 'The "job" involves receiving cheques and forwarding the balance', why: 'Forwarding money or equipment on the employer\'s behalf is the money-muling tell: the cheques bounce and the person who forwarded the balance carries the loss.' },
        { text: 'The employer insists on communicating only through messaging apps, never by video or in person', why: 'Refusing a real interview is the unverified-company tell, because a genuine employer has an office and people willing to be seen.' },
      ],
    },
    {
      q: 'You see a job posting that promises ₹1 lakh per month for data entry, requires no experience, and asks you to pay for a "background verification" kit. What is the risk?',
      options: [
        { text: 'The salary is high for data entry, but the kit fee is a red flag', why: 'The kit fee is a tell, but the salary alone is not unusual.' },
        { text: 'The "background verification" kit fee is the fee-for-job tell, and the offer is a scam', correct: true, why: 'Any request for payment from the candidate is the fee-for-job tell. Combined with the other red flags (no experience, high salary for data entry), the offer is a classic employment scam.' },
        { text: 'The kit is required for compliance, and the salary is legitimate', why: 'No legitimate employer requires the candidate to pay for verification.' },
        { text: 'The offer is genuine, but the kit supplier is a third party', why: 'The employer is responsible for the hiring process. Asking the candidate to pay is always a red flag.' },
      ],
    },
    {
      q: 'After you transfer money as part of a "job" to forward funds to vendors, what typically happens?',
      options: [
        { text: 'The vendors receive the money and you get a bonus', why: 'This does not happen. The money is typically lost, and you may be complicit in fraud.' },
        { text: 'The cheque bounces, you are held liable for the amount, and you may be investigated for money muling', correct: true, why: 'The fake cheque or payment sent to your account will bounce. You may be liable for the full amount, and transferring money on behalf of scammers can make you complicit in fraud (money muling).' },
        { text: 'The money is transferred and the job continues with a higher salary', why: 'This does not happen. The job typically ends once the money is transferred.' },
        { text: 'The bank reverses the transfer and gives you a warning', why: 'The bank may warn you, but you remain liable for the bounced amount, and the damage to your reputation and legal standing can be severe.' },
      ],
    },
  ],
  takeaway: 'No legitimate employer asks the candidate to pay for the job. The five tells — fee-for-job, equipment cheque, money muling, fake cheques, and unverified company — are your screening checklist. If any appear, stop communication and report the offer.',
}