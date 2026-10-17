import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-115: using AI to categorise and summarise spending. */

export const l5_115: Chapter = {
  id: 'l5-115',
  title: 'AI For Budgeting',
  subtitle:
    'Use AI to categorise and summarise spending while checking its category logic against your own statement.',
  minutes: 10,
  blocks: [
    scene(
      'ai-budget-loop',
      'The loop only closes when the categorised total is reconciled back to the statement it came from.',
    ),
    {
      kind: 'p',
      text: 'Sorting a bank statement into categories is dull, repetitive and rule-shaped — which is why it is one of the better uses of an assistant. It is also the place where a single mis-categorised row can quietly change the story your budget tells you. The rule that makes this safe is simple: the assistant may propose categories, and the statement must still balance before you believe any of them.',
    },
    { kind: 'h', text: 'What an assistant is actually doing' },
    {
      kind: 'p',
      text: 'When you paste a line like “UPI/DR/412345678901/SWIGGY/2026-09-14”, the assistant is guessing from the merchant string. That guess is usually right for obvious names and often wrong for the ones that matter: a payment to a person who is your landlord, a wallet top-up that then pays for groceries, a credit-card settlement that is not an expense at all. The categories are a first draft. The arithmetic is the check.',
    },
    {
      kind: 'table',
      caption: 'The rows an AI categoriser gets wrong most often',
      headers: ['Row type', 'The wrong call', 'The right treatment'],
      rows: [
        ['Credit-card bill payment', 'Counted as an expense', 'A transfer — the individual card spends are the expense'],
        ['Transfer to your own savings', 'Counted as spending', 'A transfer between your accounts'],
        ['UPI to a person', 'Guessed as “shopping”', 'Ask: rent, salary, loan repayment or a shared bill?'],
        ['Refund or cashback', 'Counted as new income', 'A reduction of the original expense'],
        ['ATM withdrawal', 'Dropped as “cash”', 'Cash spending, tracked separately or estimated'],
        ['Wallet top-up + wallet spend', 'Both counted', 'Double count — choose one side only'],
      ],
    },
    {
      kind: 'example',
      title: 'The balance that catches everything',
      text: 'Opening balance ₹84,200, credits ₹1,46,000, debits ₹1,38,750, closing balance ₹91,450. If your categorised expenses total ₹1,51,000, the categorisation is wrong before you read a single category — you have booked ₹12,250 of transfers as spending. Reconcile first, then interpret.',
    },
    { kind: 'h', text: 'A repeatable prompt' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Give a fixed category list and nothing else. Free-form categories produce a different taxonomy every month and no way to compare.',
        'Ask for one line per transaction, with the original merchant string kept beside the category.',
        'Ask it to list unmatched or uncertain rows separately rather than forcing a guess.',
        'Ask for the total of each category and the grand total, so the arithmetic is visible.',
        'Reconcile the grand total against the statement yourself before using any number.',
      ],
    },
    l5Rule(
      'The data minimisation rule',
      'A bank statement is personal data: your name, account number, UPI IDs and the pattern of your life. India’s data-protection framework is built on collecting and sharing only what a purpose needs, which applies to you too when you decide what to paste into a chat box. Redact the account number, the name and every UPI handle; keep amounts, dates and merchant strings, which are what the categorisation actually needs. The framework is published at meity.gov.in.',
    ),
    {
      kind: 'callout',
      tone: 'warning',
      title: 'Deleting the message is not deleting the data',
      text: 'A consumer chat tool may retain a conversation for review, for abuse detection, or under its own settings, and you cannot un-send a pasted statement. Redact before you paste. If a tool offers a setting that stops your content being used for training, turning it on is sensible — and is still not a reason to paste an unredacted account number.',
    },
    {
      kind: 'p',
      text: 'There is a second, quieter benefit to doing the categorisation yourself each month: you notice the subscriptions you forgot and the merchant you do not recognise. The assistant is fastest at the first pass; the review is where the value is. Use it to get to the review sooner, not to skip it.',
    },
    sim(
      'l5-ai-budget-review',
      'Correct an AI-categorised month, reconcile it to the statement, and redact what should never have been pasted.',
    ),
    l5Illustrative(
      'The transactions, balances and AI guesses in the lab are invented for practice. The reconciliation method and the data-minimisation rule are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        { term: 'Categorisation', meaning: 'Assigning each transaction to a spending category from a fixed list.' },
        {
          term: 'Reconciliation',
          meaning:
            'Proving that the categorised total agrees with the statement: opening balance plus credits minus debits equals closing balance.',
        },
        {
          term: 'Double counting',
          meaning:
            'Recording the same money twice — the classic case being a credit-card bill payment and the card spends it settles.',
        },
        {
          term: 'Redaction',
          meaning:
            'Removing identifiers from a document before sharing it, while keeping the structure and figures needed for the task.',
        },
      ],
    },
    l5Sources(['dpdp', 'meity'], [
      'The Data Protection Framework — purpose limitation, minimisation and the obligations of anyone holding your data',
      'MeitY — the ministry responsible for India’s data-protection and AI policy',
    ]),
  ],
  quiz: [
    {
      q: 'An AI has categorised last month’s statement. Which check comes first?',
      options: [
        {
          text: 'Check whether the largest category looks plausible for your lifestyle',
          why: 'Plausibility is judged against the same intuition that produced the guess. A comfortable-looking number can still be ₹12,000 wrong.',
        },
        {
          text: 'Scan the categories for any merchant name you do not recognise',
          why: 'Useful, but it finds unknown merchants, not transfers booked as expenses or refunds booked as income.',
        },
        {
          text: 'Reconcile the categorised total to the statement’s opening balance, credits, debits and closing balance',
          correct: true,
          why: 'If the total does not tie back to the statement, at least one row is misclassified or double counted, and every category figure is suspect.',
        },
        {
          text: 'Ask the assistant whether it is confident about the categorisation',
          why: 'Confidence is generated text, not evidence. The statement’s arithmetic is the evidence.',
        }
      ],
    },
    {
      q: 'You pay your credit-card bill of ₹18,400 from your bank account. The statement also shows the individual card spends. How should this appear in a budget?',
      options: [
        {
          text: 'Both the bill payment and the card spends count, because money left the bank account',
          why: 'Money left the bank, but the expense happened when the card was used. Counting both reports the same rupees twice.',
        },
        {
          text: 'Only the bill payment counts, because the card spends were on credit',
          why: 'The timing differs but the spending is real. Excluding the card spends and counting the bill is the same double count in reverse.',
        },
        {
          text: 'Neither counts, because a credit card is not part of your bank statement',
          why: 'The spending is yours and belongs in the month it happened; the settlement is merely how the bank balance moved.',
        },
        {
          text: 'The card spends count as expenses; the bill payment is a transfer and must not be counted again',
          correct: true,
          why: 'The bill payment settles spending that has already been recorded. Counting both inflates expenses by the whole bill.',
        }
      ],
    },
    {
      q: 'Which detail should you remove before pasting a statement into a chat tool?',
      options: [
        {
          text: 'The merchant names, keeping the account number so the file can be matched later',
          why: 'This inverts the trade-off: it removes the only field the task needs and keeps the most identifying one.',
        },
        {
          text: 'The account number, your name and the UPI handles, keeping dates, amounts and merchant names',
          correct: true,
          why: 'The categorisation task needs amounts, dates and merchants. Account numbers, names and handles identify you without improving the answer.',
        },
        {
          text: 'Nothing — the tool needs the full document to be accurate',
          why: 'Categorisation depends on merchant strings and amounts. Identifiers add risk and no accuracy.',
        },
        {
          text: 'Only the closing balance, since that is the most sensitive number',
          why: 'The balance is needed to reconcile. The identifiers are what should go.',
        }
      ],
    },
    {
      q: 'A refund of ₹2,400 from a cancelled order appears in the statement. How should it be treated?',
      options: [
        {
          text: 'As a reduction of the original expense, so the category shows the net amount',
          correct: true,
          why: 'The refund reverses spending that was already booked. Treating it as income would overstate both spending and earnings.',
        },
        {
          text: 'As income, because money was credited to the account',
          why: 'A credit is a direction of cash flow, not a source of income. This refund returns your own money.',
        },
        {
          text: 'As a transfer between accounts',
          why: 'Nothing moved between your own accounts. It is the reversal of a purchase.',
        },
        {
          text: 'Ignore it, since it is small relative to the month',
          why: 'Ignoring it leaves the category overstated, and the sum of many small refunds is how a budget drifts away from reality.',
        }
      ],
    },
  ],
  takeaway:
    'Let AI do the first pass on categorisation, then reconcile the total to the statement before believing any category. Remove identifiers before anything is pasted, and review the output for transfers and refunds, which are what an assistant gets wrong.',
}
