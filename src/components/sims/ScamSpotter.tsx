import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

type Case = {
  channel: string
  message: string
  flags: string[]
  answer: string
}

const CASES: Case[] = [
  {
    channel: 'SMS · +91-BSNL-OTP',
    message: 'Dear customer, your account is temporarily blocked due to KYC pending. Click http://rbi-kyc-verify.xyz to update within 2 hours or your account will be deactivated.',
    flags: ['Bank never asks for KYC over a link', 'Threatening 2-hour deadline', 'Lookalike domain "rbi-…" instead of the real bank', 'Asks you to "update" details proactively'],
    answer: 'Fake. RBI and every real bank verify KYC in-branch or in the official app. Block the sender and report to 1930.',
  },
  {
    channel: 'WhatsApp · "HDFC Bank Support"',
    message: 'Hello sir, your credit card will be blocked today. To avoid this kindly share your OTP and card number on this chat.',
    flags: ['Bank staff never ask for an OTP', 'Asking for full card number', 'Unverified WhatsApp number', 'Urgency to stop you thinking'],
    answer: 'Fake. Your OTP is a password — anyone who has it can withdraw your money. No bank ever asks for it.',
  },
  {
    channel: 'Phone call · "CIBIL/SBI officer"',
    message: 'Sir, this is from the credit card department. Your loan account is in arrears. To update your records kindly share your account number, PIN and Aadhaar number.',
    flags: ['Impersonating a bank department', 'Asking for PIN', 'Asking for Aadhaar over phone', 'A real caller knows only partial info'],
    answer: 'Fake. Banks never request PIN or Aadhaar by phone. Hang up and call the number printed on your card.',
  },
  {
    channel: 'UPI collect request',
    message: 'You receive a Collect Request of ₹500 from "Priya" — actually someone using your friend’s phone. Accepting would debit your account.',
    flags: ['Unexpected collect request', 'You do not recognise the request', 'Collect requests debit YOU, unlike a payment request', 'UPI PIN gets captured on entry'],
    answer: 'Real risk. Decline any collect request you did not personally initiate. Never approve to "receive" money.',
  },
  {
    channel: 'Instagram · "Investment guru"',
    message: 'DM: "Sir I am SEBI registered. Guaranteed 40% monthly. Join my free Telegram for 50 lucky investors today only."',
    flags: ['Guaranteed high returns', 'SEBI registration is trivially faked — verify on sebi.gov.in', 'Urgency ("today only")', 'Free group leading to paid "signal" service'],
    answer: 'Fake. No legitimate investment returns a guaranteed 40% a month. Verify any advisor registration directly on SEBI\'s site.',
  },
  {
    channel: 'Email · "Your parcel is on hold"',
    message: 'Your ₹2,400 COD shipment could not be delivered. Pay the ₹25 customs fee at http://india-post-delivery.in/ref/9931 to release it.',
    flags: ['Link to a non-government domain', 'Small "fee" to release a parcel', 'Real India Post never asks for fees via links', 'Generic greeting with no tracking data'],
    answer: 'Fake. Check the tracking number on the official India Post site instead of clicking anything.',
  },
  {
    channel: 'Legitimate-looking · ₹0 deducted',
    message: '₹5 was debited from your UPI and ₹5 credited back. Your bank is asking for your UPI ID "to reverse the duplicate charge".',
    flags: ['Cashing out the refund scam', 'Legitimate refunds do not need your UPI ID or PIN', 'Bank already reversed it — the original debit is visible in your statement'],
    answer: 'Real trick. If a genuine refund fails, money comes back automatically. No bank asks for UPI ID or PIN to process a refund.',
  },
]

export function ScamSpotter() {
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [caught, setCaught] = useState(0)

  const current = CASES[i]
  const next = () => {
    setRevealed(false)
    setI((v) => (v + 1) % CASES.length)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-ink-400">
        <span>
          Case {i + 1} of {CASES.length}
        </span>
        <span>
          Caught <strong className="text-brand-300">{caught}</strong> / {revealed ? i + 1 : 0}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div className="h-full bg-brand-400" animate={{ width: `${((i + (revealed ? 1 : 0)) / CASES.length) * 100}%` }} />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="mb-2 inline-block rounded-md bg-ink-900 px-2 py-1 font-mono text-[11px] text-ink-300">
          {current.channel}
        </div>
        <p className="text-ink-100">{current.message}</p>

        <div className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {current.flags.map((f, n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: revealed ? 0.06 * n : 0 }}
              className={`flex items-start gap-1.5 text-xs ${revealed ? 'text-rose-200' : 'text-ink-500 blur-[3px] select-none'}`}
            >
              <span className="mt-0.5 text-rose-400">⚠</span>
              {f}
            </motion.div>
          ))}
        </div>

        {!revealed ? (
          <button
            onClick={() => {
              setRevealed(true)
              setCaught((c) => c + 1)
            }}
            className="mt-4 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-brand-400"
          >
            I've spotted it — reveal the red flags
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-3">
            <div className="rounded-lg border border-brand-400/30 bg-brand-400/10 p-3 text-sm text-brand-200">
              {current.answer}
            </div>
            <button
              onClick={next}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm text-ink-200 transition hover:border-white/30 hover:text-white"
            >
              Next case →
            </button>
          </motion.div>
        )}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-ink-300">
        <strong className="text-white">Golden rule:</strong> if a message creates urgency, asks for an OTP,
        PIN, or password, or offers guaranteed returns — stop. Contact your bank using the number on your card,
        the app, or a branch. Never use a link or number from the message itself.
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 size={14} className="text-brand-400" /> Report fraud: 1930 (cyber helpline)
        </span>
        <span className="inline-flex items-center gap-1">
          <XCircle size={14} className="text-rose-400" /> Bank fraud email: cybercrime.gov.in
        </span>
      </div>
      <AnimatePresence />
    </div>
  )
}