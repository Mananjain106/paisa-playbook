import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { rupees } from '../../lib/format'

type Choice = { label: string; cash: number; xp: number; note: string }
type Event = { day: string; scene: string; prompt: string; choices: Choice[] }

const EVENTS: Event[] = [
  {
    day: 'Day 1',
    scene: '🪙',
    prompt: 'You start with ₹10 — everything you have. A friend offers to split a ₹60 snack. You each pay ₹10.',
    choices: [
      { label: 'Split it — ₹30 total each way', cash: -10, xp: 10, note: 'Splitting a bill is how ₹10 becomes affordable. Group deals are a real skill.' },
      { label: 'Skip it, keep your ₹10', cash: 0, xp: 10, note: 'Equally smart. Skipping is a legitimate money decision.' },
    ],
  },
  {
    day: 'Day 2',
    scene: '📱',
    prompt: 'A shopkeeper offers a "buy 1 get 1" on a ₹10 soap you already needed anyway.',
    choices: [
      { label: 'Take both', cash: -10, xp: 15, note: 'You needed one and got one free — that is genuine value, not a trap.' },
      { label: 'Buy one', cash: -10, xp: 5, note: 'Paying full price for one. Safe, but you left value on the table.' },
    ],
  },
  {
    day: 'Day 3',
    scene: '💸',
    prompt: 'An ad for a ₹9 snack says "only 3 left!". You already ate.',
    choices: [
      { label: 'Buy it anyway', cash: -10, xp: 0, note: 'Scarcity ("only 3 left") is a pressure tactic. This is impulse buying.' },
      { label: 'Walk away', cash: 0, xp: 20, note: 'Impulse control is the single highest-return money skill there is.' },
    ],
  },
  {
    day: 'Day 4',
    scene: '🏦',
    prompt: 'A shop offers to keep your money safe for a week and pay you ₹1 back.',
    choices: [
      { label: 'Hand it over', cash: 1, xp: 10, note: 'That is 10% in a week — absurdly good. Real returns are smaller and you must check who is offering.' },
      { label: 'Keep it in your pocket', cash: 0, xp: 5, note: 'Cash in hand is risk-free but earns nothing. Real savings sit in a bank.' },
    ],
  },
  {
    day: 'Day 5',
    scene: '🎁',
    prompt: 'Someone owes you ₹5 from yesterday and offers a ₹15 voucher instead.',
    choices: [
      { label: 'Accept the voucher', cash: 10, xp: 20, note: 'Getting more value than you asked for. Negotiation and creative payment both work.' },
      { label: 'Take the ₹5', cash: 5, xp: 5, note: 'Fair and simple. Sometimes the straightforward deal is right.' },
    ],
  },
  {
    day: 'Day 6',
    scene: '🎰',
    prompt: 'A "guaranteed double your money in 24 hours" scheme appears in a WhatsApp group.',
    choices: [
      { label: 'Double your ₹10', cash: 20, xp: 0, note: 'Guaranteed doubling sounds fake because it is. This is how people lose real money.' },
      { label: 'Ignore and warn your group', cash: 0, xp: 25, note: 'Recognising a scam is worth more than any return. This skill protects lakhs later.' },
    ],
  },
  {
    day: 'Day 7',
    scene: '🎯',
    prompt: 'Final day. You have some money left and one goal: build a bigger buffer.',
    choices: [
      { label: 'Save all of it', cash: 0, xp: 20, note: 'A buffer is what stops you borrowing at the worst moment.' },
      { label: 'Spend ₹5 on something useful', cash: -5, xp: 10, note: 'Needs are fine when they prevent a bigger cost later.' },
    ],
  },
]

export function RupeeTen() {
  const [i, setI] = useState(0)
  const [cash, setCash] = useState(10)
  const [xp, setXp] = useState(0)
  const [log, setLog] = useState<{ day: string; note: string; delta: number }[]>([])
  const [done, setDone] = useState(false)

  const choose = (c: Choice) => {
    const next = cash + c.cash
    setCash(Math.max(0, next))
    setXp((x) => x + c.xp)
    setLog((l) => [...l, { day: EVENTS[i].day, note: c.note, delta: c.cash }])
    if (i + 1 >= EVENTS.length) setDone(true)
    else setI(i + 1)
  }

  const restart = () => {
    setI(0)
    setCash(10)
    setXp(0)
    setLog([])
    setDone(false)
  }

  if (done) {
    const smart = log.filter((l) => l.note && l.delta >= 0).length
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-brand-400/20 to-sky-400/10 p-6 text-center">
          <div className="text-5xl">{cash >= 15 ? '🏆' : cash >= 5 ? '👍' : '🤔'}</div>
          <h4 className="mt-2 font-display text-2xl text-white">You finished with {rupees(cash)}</h4>
          <p className="mt-1 text-sm text-ink-300">Score: {xp} points</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-200">
            Ten rupees is too small for real life, but the decision you practised is not:{' '}
            <strong className="text-brand-300">split costs, take real discounts, resist fake urgency,
            spot scams, and keep a buffer.</strong> Every one of these applies to lakhs.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-display text-white">What you learned</h4>
          {log.map((l, n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: n * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm"
            >
              <span className="mr-2 font-semibold text-brand-300">{l.day}</span>
              <span className="text-ink-200">{l.note}</span>
            </motion.div>
          ))}
        </div>
        <button onClick={restart} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-brand-400">
          Play again
        </button>
        <p className="text-xs text-ink-500">{smart} of your moves ended with you better off — a strong week.</p>
      </motion.div>
    )
  }

  const ev = EVENTS[i]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-400">{ev.day} of 7</div>
          <div className="font-display text-xl text-white">You have {rupees(cash)}</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-widest text-ink-400">Score</div>
          <div className="font-display text-xl text-brand-300">{xp}</div>
        </div>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div className="h-full bg-brand-400" animate={{ width: `${(i / EVENTS.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="text-4xl">{ev.scene}</div>
          <p className="mt-2 text-ink-100">{ev.prompt}</p>
          <div className="mt-4 space-y-2">
            {ev.choices.map((c) => (
              <button
                key={c.label}
                onClick={() => choose(c)}
                className="w-full rounded-xl border border-white/10 bg-ink-900/60 p-3 text-left text-sm text-ink-100 transition hover:border-brand-400/50 hover:bg-ink-900"
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {log.length > 0 && (
        <div className="space-y-1.5">
          <h4 className="text-xs uppercase tracking-widest text-ink-400">So far</h4>
          {log.map((l, n) => (
            <div key={n} className="flex items-center gap-2 text-xs text-ink-400">
              <span className={l.delta > 0 ? 'text-brand-300' : l.delta < 0 ? 'text-rose-300' : 'text-ink-500'}>
                {l.delta > 0 ? '+' : ''}
                {rupees(l.delta)}
              </span>
              <span className="truncate">{l.note.slice(0, 70)}…</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}