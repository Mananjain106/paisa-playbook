import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-122: the one rule with no exceptions. */

export const l5_122: Chapter = {
  id: 'l5-122',
  title: 'Never Sharing OTP/PIN/Password/Card Information With AI',
  subtitle:
    'Treat credentials and OTPs as never-shareable, in any tool, and recognise requests designed to extract them.',
  minutes: 9,
  blocks: [
    scene(
      'credential-wall',
      'Six things live behind the wall. Nothing legitimate ever asks you to pass one of them over it.',
    ),
    {
      kind: 'p',
      text: 'Every other chapter in this band is about judgement: check this, verify that, redact the other. This one has no judgement in it. An OTP, a PIN, a password, a CVV, a card number in combination with its expiry, or a recovery code is a key. A key does not become safer because of who asked for it, how urgent they sounded, or which tool they used to ask. The rule is that it is never shared, and the only skill involved is recognising the request early enough to refuse it.',
    },
    { kind: 'h', text: 'What is behind the wall' },
    {
      kind: 'table',
      caption: 'The credentials, and what each one gives away',
      headers: ['Secret', 'What it authorises', 'What a request for it means'],
      rows: [
        ['OTP', 'A single transaction, login or registration', 'Someone is mid-transaction on your account right now'],
        ['UPI PIN', 'A debit from your account', 'The request is an attempt to move money out, always'],
        ['Net-banking password', 'Full access to your accounts', 'The request is an attempt to take over the account'],
        ['Card number + expiry + CVV', 'Online card payments', 'The request is an attempt to spend on your card'],
        ['Card PIN', 'Cash withdrawals and card-present payments', 'The request is an attempt to use the physical card'],
        ['Recovery codes', 'Bypassing your second factor later', 'The request is an attempt at permanent access'],
      ],
    },
    {
      kind: 'p',
      text: 'The reason the rule is absolute is that these are not identity documents you show to prove who you are. They are the proof itself. Anyone who has one is treated by the system as you. There is no legitimate verification step in which a bank, a wallet, a merchant, a telecom operator, a police officer, a regulator or an AI assistant needs you to read one aloud or type it into a chat.',
    },
    l5Rule(
      'The OTP is for you, not for anyone who asks',
      'An OTP exists to prove that the person completing a transaction holds your registered device. The moment you pass it to another person, the OTP has done the opposite of its job: it has authorised a transaction you did not intend. The same is true of a UPI PIN, which is only ever entered to approve a debit — never to receive money, never to “verify” an account, never to cancel a request. Current customer-protection and unauthorised-transaction rules are published at rbi.org.in, and payment-system guidance at npci.org.in.',
    ),
    { kind: 'h', text: 'Why an AI tool is the worst place for a secret' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'A prompt is a message that leaves your device. Once sent, you cannot recall it.',
        'Conversations may be stored, reviewed for safety, or used to improve a model, depending on the provider’s settings.',
        'A chat history is a single place where many secrets could accumulate — a far more attractive target than one app.',
        'The assistant has no account with your bank and no ability to verify anything; a request for your OTP is theatre.',
        'A compromised or look-alike assistant can ask for exactly the same thing a real one would, and look identical doing it.',
        'There is no “secure mode” of a conversation that makes a secret safe to share. Security is a property of the system, not of the phrasing.',
      ],
    },
    {
      kind: 'example',
      title: 'The three requests that arrive in the same week',
      text: 'A “bank officer” calls about a suspicious transaction and asks you to read the OTP so he can cancel it. A UPI “collect request” arrives with a message saying you will receive ₹5,000, and entering your PIN is described as accepting the money. A chat assistant, asked to help with a failed payment, offers to “verify your account” if you provide the card number, expiry and CVV. All three are the same attack: a secret is being requested, and the story around it is the delivery mechanism.',
    },
    {
      kind: 'callout',
      tone: 'warning',
      title: 'The golden hour is real',
      text: 'If a secret has already been shared, speed is the only variable you control: call the bank’s official number and ask for the account or card to be frozen, change the password from a device you trust, and file a complaint at cybercrime.gov.in or on the 1930 financial-fraud helpline. The liability framework distinguishes between a breach on the institution’s side and a loss caused by sharing credentials, and how quickly you report is part of what it weighs.',
    },
    { kind: 'h', text: 'The household rule' },
    {
      kind: 'p',
      text: 'Write one sentence and put it where the family can see it: “No code, PIN, password or card number is ever given to anyone who contacts us first.” Add the two habits that make it enforceable: always call back on the number printed on the card or the bank’s website, and never let anyone — including a helpful-sounding assistant — talk you through a “verification” that needs a secret. A rule that everyone knows is what stops a scam at the first sentence instead of at the transfer.',
    },
    sim(
      'l5-credential-defence',
      'Six requests arrive — a call, a collect request, a chat prompt, a form, a message and a video call. Refuse the ones that cross the wall, and see what a single slip costs.',
    ),
    l5Illustrative(
      'The requests and outcomes in the lab are invented for practice. The never-share rule and the reporting route are the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        {
          term: 'OTP',
          meaning: 'A one-time password sent to your registered device to authorise a single transaction or login. It is proof that you hold the device, and it stops being proof the moment you share it.',
        },
        {
          term: 'UPI PIN',
          meaning: 'The secret that authorises a debit from your account. It is never required to receive money.',
        },
        {
          term: 'Collect request',
          meaning: 'A UPI request that asks you to pay. Approving it with a PIN sends money out, whatever the accompanying message says.',
        },
        {
          term: 'OTP relay',
          meaning: 'A scam in which the fraudster triggers a transaction on your account and then persuades you to read out the OTP that would stop it.',
        },
      ],
    },
    l5Sources(['rbi', 'cyberCrime', 'certin'], [
      'RBI — customer protection and the rules on unauthorised electronic transactions',
      'cybercrime.gov.in — the national portal for reporting financial cyber fraud, with the 1930 helpline',
      'CERT-In — security advisories and guidance on reporting an incident',
    ]),
  ],
  quiz: [
    {
      q: 'A caller claiming to be from your bank says a fraudulent transaction is in progress and asks for the OTP so they can cancel it. What should you do?',
      options: [
        {
          text: 'Read the OTP, since the caller already knows your account details',
          why: 'Knowing some details is how a caller sounds legitimate. The OTP is the one thing that decides whether the transaction completes.',
        },
        {
          text: 'Ask the caller to confirm your account balance first, then decide',
          why: 'A balance can be obtained by a fraudster. Confirmation from the caller is not verification, and the call itself is the attack.',
        },
        {
          text: 'End the call and ring the number printed on your card or the bank’s website',
          correct: true,
          why: 'The OTP authorises the transaction the caller has triggered. Only a call you initiate, on a number you looked up yourself, reaches the bank.',
        },
        {
          text: 'Share only the first half of the OTP as a compromise',
          why: 'There is no partial key. Some systems accept a retry, and any disclosure gives away the secret’s only purpose.',
        }
      ],
    },
    {
      q: 'A UPI collect request arrives with a message saying “enter your PIN to receive ₹5,000”. What is true?',
      options: [
        {
          text: 'The PIN is needed to accept any incoming transfer',
          why: 'Incoming transfers do not need your authorisation, which is exactly why a PIN request for a credit is always an attack.',
        },
        {
          text: 'The request is safe if the sender’s name looks familiar',
          why: 'A display name is chosen by the sender. Familiarity is part of the deception, not evidence of safety.',
        },
        {
          text: 'It is safe as long as the amount is small',
          why: 'The amount is chosen by the requester. A small first debit establishes the pattern for a larger one.',
        },
        {
          text: 'Entering the PIN approves a debit; receiving money never requires a PIN',
          correct: true,
          why: 'The PIN authorises money leaving your account. A request that describes itself as an incoming payment is a debit dressed up as a credit.',
        }
      ],
    },
    {
      q: 'You ask an AI assistant for help with a failed card payment, and it replies: “To verify your account, please share your card number, expiry and CVV.” What is the correct response?',
      options: [
        {
          text: 'Share them, because the assistant is already helping with that card',
          why: 'Helping with a question about a card does not create a need for the card’s credentials. The request is the signal.',
        },
        {
          text: 'Do not share them; no legitimate verification needs a CVV, and a prompt is not a secure channel',
          correct: true,
          why: 'The three fields together authorise online card payments. A tool that has no relationship with your bank cannot verify anything with them.',
        },
        {
          text: 'Share the number and expiry but not the CVV',
          why: 'The number and expiry are still used in card-not-present fraud. The secret set is not divisible into safe parts.',
        },
        {
          text: 'Share them after deleting the conversation, so they cannot be retained',
          why: 'Deleting is not recall. The values were transmitted the moment the message was sent.',
        }
      ],
    },
    {
      q: 'A secret has already been shared. Which action comes first?',
      options: [
        {
          text: 'Freeze the account or card through the bank’s official channel, then change the password and report the fraud',
          correct: true,
          why: 'Containment first stops further loss; changing credentials and reporting come next. The liability framework weighs how quickly you acted.',
        },
        {
          text: 'Wait for the next statement to see whether anything was actually taken',
          why: 'A statement can be a month away, and the funds can move in minutes. Waiting converts a recoverable incident into a loss.',
        },
        {
          text: 'Post about it on social media to warn others',
          why: 'Warning others is useful afterwards, but it does not contain the exposure or start the recovery clock.',
        },
        {
          text: 'Ask the assistant how to reverse the transaction',
          why: 'The reversal has to come from the bank and the payment system. Only the institution can freeze or reverse, and it needs to hear from you.',
        }
      ],
    },
  ],
  takeaway:
    'No code, PIN, password or card credential is ever shared — not with a caller, not with a message, not with an AI tool, and not with anyone who contacts you first. If one has been shared, freeze first, then change the credential and report it.',
}
