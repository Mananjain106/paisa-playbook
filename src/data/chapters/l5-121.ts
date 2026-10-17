import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-121: what to remove before a prompt leaves your hands. */

export const l5_121: Chapter = {
  id: 'l5-121',
  title: 'Privacy When Using AI',
  subtitle:
    'Share the minimum necessary when using AI, and redact the identifiers that turn a prompt into a leak.',
  minutes: 9,
  blocks: [
    scene(
      'redaction-filter',
      'The prompt that leaves your hands should carry the shape of the problem, not the identity of the person in it.',
    ),
    {
      kind: 'p',
      text: 'The moment you paste a bank statement, a policy schedule, a salary slip or a loan sanction into a chat box, you have handed a copy of your financial life to a system you do not control. That is not automatically wrong — assistants are useful precisely because they can work on real material — but it is a decision, and most people make it without noticing they made it.',
    },
    { kind: 'h', text: 'What counts as an identifier' },
    {
      kind: 'table',
      caption: 'The six categories, and what to do with each',
      headers: ['Category', 'Examples', 'Treatment'],
      rows: [
        ['Identity', 'Name, PAN, Aadhaar number, passport, date of birth', 'Remove — replace with [NAME] or [PAN]'],
        ['Contact', 'Phone, email, home address', 'Remove — replace with [PHONE], [ADDRESS]'],
        ['Account', 'Bank account, card number, UPI handle, demat ID, policy number', 'Remove or mask all but the last four digits'],
        ['Financial', 'Salary, balances, loan amounts, transaction counterparties', 'Keep only the figures the question actually needs'],
        ['Health', 'Diagnosis, hospital, treatment, medical history in a claim document', 'Remove entirely — the most sensitive category here'],
        ['Credentials', 'OTP, PIN, password, CVV, recovery codes', 'Never share, in any tool, for any reason'],
      ],
    },
    {
      kind: 'p',
      text: 'The test for each field is simple: does the answer change if I remove this? A categorisation question needs amounts, dates and merchant strings; it does not need your account number. A policy question needs the clauses; it does not need your name or your diagnosis. A loan question needs the rate, tenure and fees; it does not need the loan account number. Most of what makes a document sensitive is irrelevant to the question you are asking.',
    },
    {
      kind: 'example',
      title: 'A prompt before and after',
      text: 'Before: “My salary is ₹82,000, credited to A/c 5010xxxx7781 at [bank], and my PAN is ABCDE1234F. Why is my September take-home lower than August?” After: “Gross ₹95,000 a month; September had a one-off ₹4,200 deduction labelled ‘professional tax arrears’. Why would take-home fall by that amount plus ₹900?” The second prompt gets a better answer, because the question is now specific, and it exposes nothing.',
    },
    l5Rule(
      'The principles you are applying are the ones the law applies to others',
      'India’s data-protection framework rests on purpose limitation, minimisation, accuracy, storage limitation and erasure, with consent as the usual basis for processing. When you paste a document into a third-party tool, you are the one deciding the purpose and the scope. Applying the same discipline to yourself — collect less, keep less, share less — is both the legal design and the practical defence. The framework and its rules are published at meity.gov.in.',
    ),
    { kind: 'h', text: 'The things people forget' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Screenshots carry more than the thing you cropped: notification banners, account names, balances in the corner.',
        'PDFs carry metadata — author, device, sometimes a file path — that survives a visual redaction.',
        'Deleting the conversation does not recall the copy. Retention and training settings are set by the provider, not by your delete button.',
        'Free consumer tiers usually have the widest data-use terms; the paid tier is not a guarantee either.',
        'A shared family device or a linked account means your prompt may be visible to someone else.',
        'Never paste a document that contains someone else’s data — a spouse’s medical report, a parent’s policy — without their agreement.',
      ],
    },
    {
      kind: 'callout',
      tone: 'insight',
      title: 'Redaction is not secrecy, and that is fine',
      text: 'The aim is not to make the prompt anonymous in a cryptographic sense. It is to remove the fields that turn a useful question into an identity record. A prompt with the amounts, dates and clause text is still useful; a prompt with your PAN in it adds risk and no value.',
    },
    sim(
      'l5-ai-privacy-audit',
      'Audit four prompts, strip the identifiers that do not help the question, and see how much risk remains.',
    ),
    l5Illustrative(
      'The documents and prompts in the lab are invented for practice. The identifier categories and the minimisation rule are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        { term: 'Data minimisation', meaning: 'Sharing only the data the purpose actually requires, and no more.' },
        { term: 'Purpose limitation', meaning: 'Using data only for the reason it was collected or shared for.' },
        {
          term: 'Redaction',
          meaning: 'Removing or masking identifiers in a document while keeping the structure and figures needed for the task.',
        },
        {
          term: 'Retention',
          meaning: 'How long a service keeps your content, and whether it may be reviewed or used to improve models.',
        },
      ],
    },
    l5Sources(['dpdp', 'meity', 'certin'], [
      'The Data Protection Framework — consent, purpose limitation, minimisation, retention and erasure',
      'MeitY — the ministry that publishes and administers the data-protection framework',
      'CERT-In — guidance on protecting personal data and reporting a breach',
    ]),
  ],
  quiz: [
    {
      q: 'Which field can safely be removed from a prompt asking an AI to categorise your transactions?',
      options: [
        {
          text: 'The transaction amounts, because they are the most sensitive numbers',
          why: 'Amounts are what the categorisation is for. Removing them leaves nothing to categorise.',
        },
        {
          text: 'The merchant names, because they reveal where you shop',
          why: 'Merchant strings are the main signal the task uses. Without them the categorisation is a guess.',
        },
        {
          text: 'The bank account number, because categorisation depends on merchant, date and amount',
          correct: true,
          why: 'The answer does not change when the account number is removed. Identifiers add exposure and no accuracy.',
        },
        {
          text: 'The dates, since a monthly total does not need them',
          why: 'Dates are needed to scope the month and to spot duplicates. They are also far less identifying than an account number.',
        }
      ],
    },
    {
      q: 'You redact a policy PDF visually and upload it. What else may still identify you?',
      options: [
        {
          text: 'Nothing — a black box over the name is sufficient',
          why: 'A visual box hides what is on the page, not what is in the file. Metadata and selectable text can survive.',
        },
        {
          text: 'Only the file name, which is harmless',
          why: 'The file name can itself contain a policy number or a name, and it is not the only remaining field.',
        },
        {
          text: 'Nothing, provided you delete the conversation afterwards',
          why: 'Deletion is not recall. The content has already been transmitted, and retention is set by the provider.',
        },
        {
          text: 'File metadata such as the author name and device, which visual redaction does not remove',
          correct: true,
          why: 'Metadata travels with the file. Removing it, or converting to a clean image, is part of redaction rather than an optional extra.',
        }
      ],
    },
    {
      q: 'Which document should not be pasted into a general AI tool at all, even with the name removed?',
      options: [
        {
          text: 'Your own salary slip with the PAN masked',
          why: 'With identifiers removed and only the figures kept, this can be a legitimate use for a computation question.',
        },
        {
          text: 'A family member’s medical claim file, because it is their health data and not yours to share',
          correct: true,
          why: 'Health data is the most sensitive category, and it belongs to the person it describes. Their agreement is required, and removing it entirely is usually the better answer.',
        },
        {
          text: 'A loan sanction letter with the account number masked',
          why: 'The rate, tenure and fee clauses are what the question needs, and those are not personal identifiers.',
        },
        {
          text: 'A policy wording with the schedule removed',
          why: 'The wording is standard text. Without the schedule it carries little that identifies you.',
        }
      ],
    },
    {
      q: 'What does the principle of data minimisation imply for prompting?',
      options: [
        {
          text: 'Share only the fields the question needs, and design the prompt around the smallest sufficient set',
          correct: true,
          why: 'Minimisation is about necessity: the prompt should carry what answers the question and nothing that only identifies you.',
        },
        {
          text: 'Share everything once, so you never have to share again',
          why: 'Sharing more increases exposure permanently. It does not reduce future need.',
        },
        {
          text: 'Share nothing and never use these tools',
          why: 'Avoidance is one choice, but minimisation is the more useful discipline: it lets you use the tool without handing over your identity.',
        },
        {
          text: 'Share only with paid tools, which are automatically compliant',
          why: 'Paying changes the commercial terms, not the necessity of each field. Minimisation applies either way.',
        }
      ],
    },
  ],
  takeaway:
    'Before pasting anything, ask which fields the question actually needs, and remove the rest. Strip identity, contact, account and health details; keep amounts, dates and clause text; and never share another person’s data without their agreement.',
}
