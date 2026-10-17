import { useState } from 'react'
import { Stat } from './CompoundLab'
import { rupees, rupeesShort, pct, num } from '../../lib/format'

/**
 * Level 5, band three, batch 4 labs (chapters l5-101 to l5-113).
 *
 * Thirteen separate simulations, one per chapter:
 *   l5-pump-dump-detective          work a thin-market pump from inside the tip feed
 *   l5-verify-call                  a cloned voice asks for money; verify or comply
 *   l5-platform-verifier            a trading app tested before and after a large deposit
 *   l5-job-scam-screener            sort the tells of an employment scam from the signals
 *   l5-crypto-claim-check           test a crypto claim on custody, registration and return source
 *   l5-social-engineering-defence   break the authority-urgency-secrecy pattern
 *   l5-diligence-worksheet          run the standard diligence pass on a product
 *   l5-product-comparator           weigh two products on five axes, with your own weights
 *   l5-return-source-analyser       name where each promised return actually comes from
 *   l5-risk-register                classify six events by the risk each one is
 *   l5-liquidity-stress             price the time-to-cash, discount and lock-in of a portfolio
 *   l5-fee-audit                    layer every cost on a gross return and price it over time
 *   l5-verify-entity                check an entity against a regulator's own register
 *
 * Every scenario and number here is illustrative. The rules and registers they
 * refer to were verified on 15 October 2026 and are linked from the chapters.
 */

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">{children}</div>
)

const Choice = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-lg border px-2.5 py-1.5 text-left text-[11px] transition ${
      active
        ? 'border-brand-400/60 bg-brand-400/15 text-white'
        : 'border-white/10 bg-white/5 text-ink-300 hover:border-white/30'
    }`}
  >
    {label}
  </button>
)

const Verdict = ({ tone, children }: { tone: 'good' | 'ok' | 'bad'; children: React.ReactNode }) => {
  const styles = {
    good: 'border-brand-400/40 bg-brand-400/10 text-brand-200',
    ok: 'border-amber-400/40 bg-amber-400/10 text-amber-200',
    bad: 'border-rose-400/40 bg-rose-400/10 text-rose-200',
  }
  return <div className={`rounded-lg border px-3 py-2 text-xs ${styles[tone]}`}>{children}</div>
}

const Debrief = ({ title, tone = 'good', children }: { title: string; tone?: 'good' | 'ok' | 'bad'; children: React.ReactNode }) => (
  <Panel>
    <Verdict tone={tone}>
      <strong className="text-white">{title}.</strong> {children}
    </Verdict>
  </Panel>
)

const Score = ({ right, total }: { right: number; total: number }) => (
  <Stat
    label="Score"
    value={`${right} / ${total}`}
    tone={right === total ? 'best' : right >= total * 0.6 ? 'good' : 'bad'}
  />
)

/* ------------------------------------------------------- l5-101 detective */

const PUMP = [
  { day: 'Mon', price: 100, vol: 'thin', tip: null },
  { day: 'Tue', price: 103, vol: 'thin', tip: 'Quiet accumulation, no news' },
  { day: 'Wed', price: 126, vol: 'heavy', tip: '“Big announcement is coming, load up”' },
  { day: 'Thu', price: 174, vol: 'heavy', tip: '“My brother works there, it is confirmed”' },
  { day: 'Fri', price: 238, vol: 'frantic', tip: '“Everyone in the group is buying, do not miss it”' },
  { day: 'Sat', price: 262, vol: 'frantic', tip: 'An influencer posts a profit screenshot' },
  { day: 'Sun', price: 151, vol: 'heavy', tip: '“Promoters filed a sale, the group went quiet”' },
  { day: 'Mon', price: 84, vol: 'thin', tip: null },
] as const

export function L5PumpDumpDetective() {
  const [i, setI] = useState(0)
  const [entry, setEntry] = useState<number | null>(null)
  const [exit, setExit] = useState<number | null>(null)
  const [buys, setBuys] = useState(0)
  const step = PUMP[i]
  const done = i >= PUMP.length - 1
  const last = PUMP[PUMP.length - 1]

  const buy = () => {
    if (entry === null) {
      setEntry(step.price)
      setBuys((b) => b + 1)
    }
    setI((v) => Math.min(PUMP.length - 1, v + 1))
  }
  const sell = () => {
    if (entry !== null && exit === null) setExit(step.price)
    setI((v) => Math.min(PUMP.length - 1, v + 1))
  }
  const hold = () => setI((v) => Math.min(PUMP.length - 1, v + 1))

  const outcome = entry === null ? 0 : (exit ?? last.price) - entry
  const result = entry === null ? null : outcome / entry
  const leap = ((step.price - PUMP[0].price) / PUMP[0].price) * 100

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">Day {i + 1} of {PUMP.length}</span>
            <span className="font-mono text-xs text-ink-400">Volume: {step.vol}</span>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-display text-3xl text-white">₹{step.price}</span>
            <span className={`text-sm ${leap >= 0 ? 'text-brand-300' : 'text-rose-300'}`}>
              {i === 0 ? 'start' : pct(leap)}
            </span>
          </div>
          <div className="mt-3 h-24 w-full rounded-lg border border-white/10 bg-white/5 p-2">
            <svg viewBox="0 0 300 80" className="h-full w-full">
              {PUMP.slice(0, i + 1).map((p, idx) => {
                const x = 8 + (idx / (PUMP.length - 1)) * 284
                const y = 74 - ((p.price - 60) / 220) * 66
                return idx === 0 ? null : (
                  <line
                    key={p.day}
                    x1={8 + ((idx - 1) / (PUMP.length - 1)) * 284}
                    y1={74 - ((PUMP[idx - 1].price - 60) / 220) * 66}
                    x2={x}
                    y2={y}
                    stroke={idx >= 6 ? '#34e0a1' : '#fb7185'}
                    strokeWidth="2"
                  />
                )
              })}
            </svg>
          </div>
          <p className="mt-3 min-h-[2.5rem] text-sm text-ink-300">
            {step.tip ? `Tip feed: ${step.tip}` : 'Tip feed: quiet.'}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <Choice label="Buy" active={false} onClick={buy} />
            <Choice label="Hold" active={false} onClick={hold} />
            <Choice label={exit !== null ? 'Sold' : 'Sell'} active={false} onClick={sell} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Your entry" value={entry === null ? '—' : `₹${entry}`} tone="neutral" />
            <Stat label="Your exit" value={exit === null ? 'still held' : `₹${exit}`} tone="neutral" />
            <Stat label="Times you bought" value={String(buys)} tone="neutral" />
            <Stat
              label="Result"
              value={entry === null ? 'you stayed out' : pct(result! * 100)}
              tone={entry === null || (result ?? 0) > 0 ? 'good' : 'bad'}
            />
          </div>
          {done ? (
            <Debrief
              title="Debrief"
              tone={entry === null ? 'good' : exit !== null && exit > entry ? 'ok' : 'bad'}
            >
              {entry === null
                ? 'You declined to buy. In a market where the rise is promotion and the float is thin, staying out is the correct trade.'
                : exit !== null && exit > entry
                  ? 'You sold before the cliff. That is luck as much as skill: the insiders decide when the dump starts, not you.'
                  : 'You were still holding at ₹84. The late buyer is the product in this scheme, not the customer.'}{' '}
              The tip cascade never contained information — only the same sentence, forwarded, which made a coordinated
              sale look like a crowd.
            </Debrief>
          ) : (
            <Panel>
              <p className="text-xs text-ink-400">
                Each day you can buy, hold or sell. The tips are all the information you will get — read them critically.
              </p>
            </Panel>
          )}
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------------------------- l5-102 verify call */

const CALL_ANOMALIES = [
  { id: 'lipsync', label: 'Lip-sync drifts by a fraction of a second', off: true },
  { id: 'blink', label: 'The caller barely blinks', off: true },
  { id: 'light', label: 'Lighting changes between frames', off: false },
  { id: 'bg', label: 'The background is unusually still', off: true },
]

export function L5VerifyCall() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [choice, setChoice] = useState<string | null>(null)
  const answered = Object.keys(checked).length
  const correct = choice === 'callback'

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        A live video call arrives from a saved contact — your cousin Ravi. He sounds exactly like himself, and he is
        frightened: an accident, a deposit needed before the hospital will operate, tonight, and “please do not tell
        anyone yet”.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Inspect the call</p>
          <div className="space-y-2">
            {CALL_ANOMALIES.map((a) => (
              <label key={a.id} className="flex items-start gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={Boolean(checked[a.id])}
                  onChange={(e) => setChecked((c) => ({ ...c, [a.id]: e.target.checked }))}
                  className="mt-0.5 accent-brand-400"
                />
                <span className="text-ink-300">{a.label}</span>
              </label>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-ink-400">
            Inspecting helps you notice a fake, but no clue is decisive. Deepfakes can pass every one of these tests.
          </p>
        </Panel>
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Now decide</p>
          <div className="grid gap-2">
            <Choice label="Transfer the money — it is an emergency" active={choice === 'pay'} onClick={() => setChoice('pay')} />
            <Choice label="Ask him a secret question on this call" active={choice === 'secret'} onClick={() => setChoice('secret')} />
            <Choice label="Hang up and call him back on the saved number" active={choice === 'callback'} onClick={() => setChoice('callback')} />
            <Choice label="Send half now and the rest after checking" active={choice === 'half'} onClick={() => setChoice('half')} />
          </div>
          <p className="mt-3 text-[11px] text-ink-400">Anomalies you flagged: {answered} of {CALL_ANOMALIES.length}.</p>
        </Panel>
      </div>
      {choice && (
        <Debrief
          title={correct ? 'Correct' : 'Wrong'}
          tone={correct ? 'good' : 'bad'}
        >
          {choice === 'callback' &&
            'Calling back on the number you already saved puts you on a line the attacker does not control. Ravi answers, he never called, and the money stays where it is.'}
          {choice === 'pay' &&
            'You paid the wrong person. The voice was generated; the number was spoofed; the emergency was scripted. Interviews with victims of voice-cloning scams almost always end here.'}
          {choice === 'secret' &&
            'Better than paying, but weaker than callback: a cloned voice can sometimes guess, and a deepfake can be fed the answer if your shared history is public. Choose the channel the caller cannot control.'}
          {choice === 'half' &&
            'Half of a loss is still a loss. There is no “test amount” with a person who may not exist — the only safe amount is zero until the identity is verified.'}
        </Debrief>
      )}
    </div>
  )
}

/* ------------------------------------------------------ l5-103 platform verifier */

export function L5PlatformVerifier() {
  const [reg, setReg] = useState<'none' | 'checked'>('none')
  const [withdrewSmall, setWithdrewSmall] = useState(false)
  const [deposit, setDeposit] = useState(50_000)
  const [blocked, setBlocked] = useState(false)
  const [fee, setFee] = useState<'pay' | 'refuse' | null>(null)

  const flags = [
    { ok: reg === 'checked', t: 'Registration verified before anything else' },
    { ok: withdrewSmall, t: 'A small withdrawal was tested first' },
    { ok: fee === 'refuse' || !blocked, t: 'Did not pay a “release fee”' },
  ]
  const passed = flags.filter((f) => f.ok).length

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Step 1 — before depositing</p>
          <div className="grid gap-2">
            <Choice label="Check the regulator's register first" active={reg === 'checked'} onClick={() => setReg('checked')} />
            <Choice label="Download the app and deposit — it looks professional" active={false} onClick={() => setReg('none')} />
            <Choice label="Try a tiny withdrawal to test whether they pay" active={withdrewSmall} onClick={() => setWithdrewSmall(true)} />
          </div>
          {reg === 'checked' && (
            <p className="mt-2 text-[11px] text-amber-300">
              The register returns: not found. No valid SEBI or RBI authorisation for this entity.
            </p>
          )}
          {withdrewSmall && (
            <p className="mt-2 text-[11px] text-brand-300">The small withdrawal of ₹500 clears in minutes. It feels like proof.</p>
          )}
        </Panel>
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Step 2 — the larger deposit</p>
          <input
            type="range"
            min={10_000}
            max={1_000_000}
            step={10_000}
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full accent-brand-400"
          />
          <p className="mt-1 text-xs text-ink-300">Amount deposited: <span className="font-mono text-brand-300">{rupees(deposit)}</span></p>
          <button
            type="button"
            onClick={() => setBlocked(true)}
            className="mt-3 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-200 hover:border-white/30"
          >
            Attempt a withdrawal
          </button>
          {blocked && (
            <div className="mt-3">
              <p className="text-[11px] text-rose-300">
                Withdrawal declined. Support now asks for a “20% tax clearance fee” before it will release anything.
              </p>
              <div className="mt-2 grid gap-2">
                <Choice label="Pay the fee to unlock the withdrawal" active={fee === 'pay'} onClick={() => setFee('pay')} />
                <Choice label="Refuse the fee and stop depositing" active={fee === 'refuse'} onClick={() => setFee('refuse')} />
              </div>
            </div>
          )}
        </Panel>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Score right={passed} total={3} />
        <Stat label="Exposed if trapped" value={rupeesShort(deposit)} tone={blocked ? 'bad' : 'neutral'} />
        <Stat label="Registration" value={reg === 'checked' ? 'not found' : 'unchecked'} tone={reg === 'checked' ? 'good' : 'bad'} />
        <Stat label="Release fee" value={fee === 'pay' ? 'paid' : fee === 'refuse' ? 'refused' : '—'} tone={fee === 'pay' ? 'bad' : 'neutral'} />
      </div>
      {blocked && fee && (
        <Debrief title={fee === 'refuse' && reg === 'checked' ? 'You spotted it' : 'Post-mortem'} tone={fee === 'refuse' ? 'good' : 'bad'}>
          {fee === 'pay'
            ? 'The fee did not release the money; it confirmed you will keep paying. Fake platforms are not trading venues — they are collections funnels, and the small withdrawal was the only money they ever intended to give back.'
            : reg === 'checked'
              ? 'You verified first, saw nothing on the register, and refused to chase the money. Everything after the small withdrawal was bait, and you stopped before it became a loss.'
              : 'You refused the fee, which is right, but the deposit should never have happened: the register was empty from the start, and the small withdrawal was designed precisely to buy this trust.'}
        </Debrief>
      )}
    </div>
  )
}

/* ---------------------------------------------------------- l5-104 job screener */

const JOB_ITEMS = [
  { id: 'fee', text: 'A ₹5,000 “registration and kit” fee before you start', tell: true, why: 'A legitimate employer pays you; you never pay to be hired.' },
  { id: 'cheque', text: 'A cheque for equipment, and you forward the balance', tell: true, why: 'The cheque bounces and you are liable for what you forwarded.' },
  { id: 'mule', text: 'The role is to receive payments and forward 60% onward', tell: true, why: 'That is money muling — a criminal offence, even if unwitting.' },
  { id: 'login', text: 'Onboarding asks for your net-banking password “to set up salary”', tell: true, why: 'No employer ever needs your banking password.' },
  { id: 'offer', text: 'A written offer letter, a company CIN, and a live video interview', tell: false, why: 'These are signs of a real employer; verify the CIN on the MCA register.' },
  { id: 'salary', text: '₹1.5 lakh a month for data entry, no experience, work from home', tell: true, why: 'A salary wildly out of line with the work is a lure, not an offer.' },
]

export function L5JobScamScreener() {
  const [picks, setPicks] = useState<Record<string, boolean>>({})
  const answered = JOB_ITEMS.filter((it) => it.id in picks)
  const right = answered.filter((it) => picks[it.id] === it.tell).length
  const allDone = answered.length === JOB_ITEMS.length

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        Read each line of this “offer”. Mark it a red flag or a genuine signal. Then check your read.
      </p>
      <div className="space-y-2">
        {JOB_ITEMS.map((it) => {
          const chosen = picks[it.id]
          const settled = it.id in picks
          const correct = settled && chosen === it.tell
          return (
            <Panel key={it.id}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-ink-200">{it.text}</span>
                <div className="flex shrink-0 gap-2">
                  <Choice label="Red flag" active={chosen === true} onClick={() => setPicks((p) => ({ ...p, [it.id]: true }))} />
                  <Choice label="Genuine" active={chosen === false} onClick={() => setPicks((p) => ({ ...p, [it.id]: false }))} />
                </div>
              </div>
              {settled && (
                <p className={`mt-2 text-[11px] ${correct ? 'text-brand-300' : 'text-rose-300'}`}>
                  {correct ? 'Correct — ' : `Not quite — this is ${it.tell ? 'a red flag' : 'genuine'}. `}
                  {it.why}
                </p>
              )}
            </Panel>
          )
        })}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Score right={right} total={JOB_ITEMS.length} />
        {allDone && (
          <Debrief title={right === JOB_ITEMS.length ? 'Clean screen' : 'Review the misses'} tone={right === JOB_ITEMS.length ? 'good' : 'ok'}>
            The screen is not about being cynical — it is about noticing the direction money moves. In a real job, it moves
            towards you. The moment any step asks you to pay, forward, or hand over credentials, the offer has told you what it is.
          </Debrief>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------- l5-105 crypto claim */

export function L5CryptoClaimCheck() {
  const [daily, setDaily] = useState(0.5)
  const [selfWallet, setSelfWallet] = useState(true)
  const [registered, setRegistered] = useState(false)
  const [realYield, setRealYield] = useState(false)
  const checks = [selfWallet, registered, realYield].filter(Boolean).length
  const annual = (Math.pow(1 + daily / 100, 365) - 1) * 100

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        A dashboard promises a “safe daily payout”. Set the claim, then answer the three questions that actually decide
        whether it is an investment or a scheme.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <label className="block">
            <span className="flex items-center justify-between text-xs text-ink-300">
              <span>Promised return, per day</span>
              <span className="font-mono text-brand-300">{daily.toFixed(2)}%</span>
            </span>
            <input type="range" min={0.1} max={2} step={0.1} value={daily} onChange={(e) => setDaily(Number(e.target.value))} className="mt-1 w-full accent-brand-400" />
          </label>
          <p className="mt-3 text-xs text-ink-400">
            Compounded, that is <span className="font-mono text-rose-300">{num(annual)}%</span> a year. No real activity
            in any market sustains that; only a queue of new deposits can pay it, and the queue ends.
          </p>
          <div className="mt-3 grid gap-2">
            <Choice label="I can withdraw to a wallet I control" active={selfWallet} onClick={() => setSelfWallet((v) => !v)} />
            <Choice label="The platform is on a regulator's register" active={registered} onClick={() => setRegistered((v) => !v)} />
            <Choice label="The payout is funded by real trading or lending" active={realYield} onClick={() => setRealYield((v) => !v)} />
          </div>
        </Panel>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Checks passed" value={`${checks} / 3`} tone={checks === 3 ? 'best' : checks >= 2 ? 'good' : 'bad'} />
            <Stat label="Implied annual" value={`${num(annual)}%`} tone="bad" />
          </div>
          <Debrief
            title={checks === 3 ? 'It clears the test' : 'It fails the test'}
            tone={checks === 3 ? 'good' : 'bad'}
          >
            {checks === 3
              ? 'Custody is yours, the entity is on a register, and the payout has a real source. Even then, crypto is highly volatile and is not a currency issued by the RBI — hold it only with money you can lose.'
              : `With ${3 - checks} of the three checks unmet, the return is a story. The quoted number is the least important fact on the screen: custody, registration and the source of the payout decide everything.`}{' '}
            On any promise of fixed daily returns, the right move is to verify before a single rupee moves, not after.
          </Debrief>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------- l5-106 social engineering */

const SE_SCENES = [
  {
    q: 'A caller says he is from your bank’s fraud team. Your account is “under attack”, you must move savings to a safe account now, and tell no one.',
    correct: 'script',
    why: 'All three levers: authority, a deadline, and secrecy. The script — verify through your own channels — breaks it. Banks never ask you to move money to a “safe account”.',
  },
  {
    q: 'Your “CEO” emails at 9 pm asking for an urgent vendor payment, marked confidential and not to be discussed with finance.',
    correct: 'callback',
    why: 'Authority plus urgency plus secrecy again. Call the CEO back on a number you already have, then bring finance in.',
  },
  {
    q: 'Tech support calls about a “virus”, asks you to install a screen-sharing app, and says it must stay between you and them.',
    correct: 'hangup',
    why: 'Remote-access requests plus secrecy are the signature of a vishing scam. Hang up; never install software a caller asks for.',
  },
]

export function L5SocialEngineeringDefence() {
  const [ans, setAns] = useState<Record<number, string>>({})
  const answered = Object.keys(ans).length
  const right = SE_SCENES.filter((s, i) => ans[i] === s.correct).length
  const options = [
    { id: 'comply', label: 'Do exactly what they ask' },
    { id: 'script', label: '“I will verify through my own channels.”' },
    { id: 'callback', label: 'Call them back on a number I already have' },
    { id: 'hangup', label: 'Hang up / close the message' },
  ]
  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">For each message, choose your response. The pattern is always authority, urgency and secrecy.</p>
      {SE_SCENES.map((s, i) => (
        <Panel key={i}>
          <p className="text-sm text-ink-200">{s.q}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {options.map((o) => (
              <Choice key={o.id} label={o.label} active={ans[i] === o.id} onClick={() => setAns((a) => ({ ...a, [i]: o.id }))} />
            ))}
          </div>
          {ans[i] && (
            <p className={`mt-2 text-[11px] ${ans[i] === s.correct ? 'text-brand-300' : 'text-rose-300'}`}>
              Best answer: {options.find((o) => o.id === s.correct)?.label}. {s.why}
            </p>
          )}
        </Panel>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <Score right={right} total={SE_SCENES.length} />
        {answered === SE_SCENES.length && (
          <Debrief title="The habit that works" tone={right === SE_SCENES.length ? 'good' : 'ok'}>
            Do not try to out-think the story. Follow one procedure every time: pause, refuse to act on the request,
            verify through a channel the caller cannot control, and never keep the request secret.
          </Debrief>
        )}
      </div>
    </div>
  )
}

/* --------------------------------------------------- l5-107 diligence worksheet */

const DILIGENCE = [
  { q: 'Can you name the exact product and the entity that issues it?', best: 'yes' },
  { q: 'Is the seller on the relevant regulator’s register, checked by you?', best: 'yes' },
  { q: 'Do you hold a written document that states the terms?', best: 'yes' },
  { q: 'Where is your money held, and whose name is on that account?', best: 'yes' },
  { q: 'Do you understand exactly where the return comes from?', best: 'yes' },
  { q: 'Is anyone rushing you, or asking for secrecy?', best: 'no' },
]

export function L5DiligenceWorksheet() {
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no' | 'unknown'>>({})
  const score = DILIGENCE.filter((d, i) => answers[i] === d.best).length
  const unknowns = DILIGENCE.filter((_, i) => answers[i] === 'unknown').length
  const done = Object.keys(answers).length === DILIGENCE.length

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        Run the standard pass on an offer of “assured 14% from a real-estate bond”. Answer honestly — “I do not know” is a
        legitimate answer, and it is also a finding.
      </p>
      <div className="space-y-2">
        {DILIGENCE.map((d, i) => (
          <Panel key={d.q}>
            <p className="text-sm text-ink-200">{d.q}</p>
            <div className="mt-2 flex gap-2">
              {(['yes', 'no', 'unknown'] as const).map((v) => (
                <Choice key={v} label={v === 'unknown' ? "I don't know" : v} active={answers[i] === v} onClick={() => setAnswers((a) => ({ ...a, [i]: v }))} />
              ))}
            </div>
          </Panel>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Score right={score} total={DILIGENCE.length} />
        <Stat label="Unanswered" value={String(unknowns)} tone={unknowns === 0 ? 'good' : 'bad'} />
        {done && (
          <div className="col-span-2 sm:col-span-1">
            <Stat
              label="Verdict"
              value={score === DILIGENCE.length ? 'proceed' : unknowns > 0 ? 'ask more' : 'walk away'}
              tone={score === DILIGENCE.length ? 'best' : 'bad'}
            />
          </div>
        )}
      </div>
      {done && (
        <Debrief
          title={score === DILIGENCE.length ? 'Diligence complete' : 'Do not sign yet'}
          tone={score === DILIGENCE.length ? 'good' : 'bad'}
        >
          {unknowns > 0
            ? 'Every “I do not know” is an unanswered question, and unanswered questions are the ones that cost money. Go and get the answer, in writing, before you commit a rupee.'
            : score === DILIGENCE.length
              ? 'All six are answered the right way: the product is named, the seller is on a register, the terms are in writing, the money has a home, the return has a source, and nobody is rushing you.'
              : 'At least one answer is wrong: either the seller is not on a register, the terms are not documented, or you are being rushed. Any of these is enough reason to stop.'}
        </Debrief>
      )}
    </div>
  )
}

/* --------------------------------------------------- l5-108 product comparator */

const AXES = ['Return source', 'Risk', 'Liquidity', 'Cost', 'Tax']
const PRODUCTS = {
  A: { name: 'Bank fixed deposit', scores: [4, 2, 4, 4, 2] },
  B: { name: '“Assured 14%” scheme', scores: [1, 5, 1, 2, 5] },
}

export function L5ProductComparator() {
  const [weights, setWeights] = useState<number[]>([3, 3, 3, 3, 3])
  const total = weights.reduce((s, w) => s + w, 0) || 1
  const scoreOf = (key: 'A' | 'B') =>
    AXES.reduce((s, _, i) => s + PRODUCTS[key].scores[i] * weights[i], 0) / total
  const a = scoreOf('A')
  const b = scoreOf('B')

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        Two products, scored 1–5 on five axes (5 is better, and for “Risk” and “Cost” a higher score means lower risk and
        lower cost). Move the weights to show what you actually care about — the headline return is only one axis.
      </p>
      <Panel>
        <div className="space-y-3">
          {AXES.map((ax, i) => (
            <label key={ax} className="block">
              <span className="flex items-center justify-between text-xs text-ink-300">
                <span>{ax} — importance</span>
                <span className="font-mono text-brand-300">{weights[i]}</span>
              </span>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={weights[i]}
                onChange={(e) => setWeights((w) => w.map((v, j) => (j === i ? Number(e.target.value) : v)))}
                className="mt-1 w-full accent-brand-400"
              />
            </label>
          ))}
        </div>
      </Panel>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label={PRODUCTS.A.name} value={a.toFixed(2)} tone={a >= b ? 'best' : 'neutral'} />
        <Stat label={PRODUCTS.B.name} value={b.toFixed(2)} tone={b > a ? 'best' : 'neutral'} />
        <Stat label="Weight on “Return source”" value={`${Math.round((weights[0] / total) * 100)}%`} tone="neutral" />
        <Stat label="Total weight" value={String(total)} tone="neutral" />
      </div>
      <Debrief title="What the lab shows" tone={b > a ? 'bad' : 'good'}>
        {b > a
          ? 'When you weight the five axes honestly, the “assured 14%” only wins if you ignore risk, liquidity, cost and tax. Weight those, and the sober product wins — not because it is exciting, but because it is priced for what it is.'
          : 'The sober product wins because a real comparison cannot be reduced to a single headline number. The first question is always where the return comes from; the other four axes then decide whether you are being paid for real risk or for a story.'}
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------ l5-109 return source analyser */

const CLAIMS = [
  { q: 'A bank offers 7% on a two-year deposit.', options: ['Interest', 'Rent', 'Profit', 'Capital gain', 'Leverage', 'New deposits'], correct: 'Interest', why: 'The bank on-lends your money and the borrower pays the interest.' },
  { q: 'A REIT promises a distribution from its office towers.', options: ['Interest', 'Rent', 'Profit', 'Capital gain', 'Leverage', 'New deposits'], correct: 'Rent', why: 'The tenants pay rent, which the REIT passes on as a distribution.' },
  { q: 'A small company’s share rises after it reports higher profits.', options: ['Interest', 'Rent', 'Profit', 'Capital gain', 'Leverage', 'New deposits'], correct: 'Profit', why: 'Earnings are the business’s own profit, which supports the value.' },
  { q: 'A scheme returns 15% a year “as long as new investors join”.', options: ['Interest', 'Rent', 'Profit', 'Capital gain', 'Leverage', 'New deposits'], correct: 'New deposits', why: 'The payout is funded by new money, not by any real activity — a Ponzi structure.' },
  { q: 'A fund uses ₹3 of borrowed money for every ₹1 invested and reports big gains.', options: ['Interest', 'Rent', 'Profit', 'Capital gain', 'Leverage', 'New deposits'], correct: 'Leverage', why: 'Borrowed money amplifies both gains and losses; the source of return is amplified risk.' },
]

export function L5ReturnSourceAnalyser() {
  const [ans, setAns] = useState<Record<number, string>>({})
  const right = CLAIMS.filter((c, i) => ans[i] === c.correct).length
  const answered = Object.keys(ans).length

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        For each promise, name the true payer. If you cannot, the rule is simple: do not invest in what you cannot explain.
      </p>
      {CLAIMS.map((c, i) => (
        <Panel key={c.q}>
          <p className="text-sm text-ink-200">{c.q}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {c.options.map((o) => (
              <Choice key={o} label={o} active={ans[i] === o} onClick={() => setAns((a) => ({ ...a, [i]: o }))} />
            ))}
          </div>
          {ans[i] && (
            <p className={`mt-2 text-[11px] ${ans[i] === c.correct ? 'text-brand-300' : 'text-rose-300'}`}>
              {ans[i] === c.correct ? 'Correct — ' : `The payer is ${c.correct}. `}
              {c.why}
            </p>
          )}
        </Panel>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <Score right={right} total={CLAIMS.length} />
        {answered === CLAIMS.length && (
          <Debrief title="The one-question filter" tone={right >= 4 ? 'good' : 'ok'}>
            Every return has a payer: a borrower, a tenant, a business, another buyer, borrowed money, or the next saver.
            Only the last one has no natural limit and no natural source — which is exactly why it ends.
          </Debrief>
        )}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------- l5-110 risk register */

const RISK_TYPES = ['Market', 'Credit', 'Liquidity', 'Concentration', 'Operational', 'Conduct']
const EVENTS = [
  { e: 'A broad market fall takes your equity funds down 20%', t: 'Market', why: 'Prices moved against you; nothing defaulted and nobody misbehaved.' },
  { e: 'A company whose bonds you hold fails to pay interest', t: 'Credit', why: 'The borrower defaulted — credit risk.' },
  { e: 'A property fund gates redemptions when you need cash', t: 'Liquidity', why: 'You cannot exit on time — liquidity risk.' },
  { e: 'Half your portfolio sits in one stock, which halves', t: 'Concentration', why: 'A single position carried too much of the plan.' },
  { e: 'Your broker’s systems fail and you cannot trade for a day', t: 'Operational', why: 'A process or system failure — operational risk.' },
  { e: 'An adviser earns a fat commission to sell you a poor product', t: 'Conduct', why: 'A conflict of interest and mis-selling — conduct risk.' },
]

export function L5RiskRegister() {
  const [ans, setAns] = useState<Record<number, string>>({})
  const right = EVENTS.filter((e, i) => ans[i] === e.t).length
  const answered = Object.keys(ans).length

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">Name the risk each event represents. Naming it is the first step to mitigating it.</p>
      <div className="space-y-2">
        {EVENTS.map((e, i) => (
          <Panel key={e.e}>
            <p className="text-sm text-ink-200">{e.e}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {RISK_TYPES.map((t) => (
                <Choice key={t} label={t} active={ans[i] === t} onClick={() => setAns((a) => ({ ...a, [i]: t }))} />
              ))}
            </div>
            {ans[i] && (
              <p className={`mt-2 text-[11px] ${ans[i] === e.t ? 'text-brand-300' : 'text-rose-300'}`}>
                {ans[i] === e.t ? 'Correct — ' : `That is ${e.t} risk. `}
                {e.why}
              </p>
            )}
          </Panel>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Score right={right} total={EVENTS.length} />
        {answered === EVENTS.length && (
          <Debrief title="Sort by consequence, then probability" tone={right >= 5 ? 'good' : 'ok'}>
            The dangerous ones are high-probability and high-consequence — concentration and conduct, usually. Mitigate
            those first: diversify, and pay for advice that is not commission-driven.
          </Debrief>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------- l5-111 liquidity stress */

const HOLDINGS = [
  { name: 'Liquid mutual fund', time: 'same day', disc: 'none', lock: 'none', why: 'Redeems on any business day with minimal impact.' },
  { name: 'Listed equity', time: 'T+1', disc: 'small', lock: 'none', why: 'Sells on the exchange and settles the next working day, though the price can move.' },
  { name: 'Debt fund with exit load', time: 'a week', disc: 'small', lock: 'a year', why: 'Redeemable, but the exit load is a year-long lock-in in practice.' },
  { name: 'Physical gold', time: 'T+1', disc: 'medium', lock: 'none', why: 'Sold within a day or two, but the buy-back discount bites.' },
  { name: 'Real estate', time: 'months', disc: 'large', lock: 'none', why: 'Months to transact, and a stressed sale can be 10–40% cheaper.' },
]
const TIME_OPTS = ['same day', 'T+1', 'a week', 'months']
const DISC_OPTS = ['none', 'small', 'medium', 'large']
const LOCK_OPTS = ['none', 'a year']

export function L5LiquidityStress() {
  const [ans, setAns] = useState<Record<string, { t?: string; d?: string; l?: string }>>({})
  const set = (name: string, key: 't' | 'd' | 'l', v: string) =>
    setAns((a) => ({ ...a, [name]: { ...a[name], [key]: v } }))
  const graded = HOLDINGS.filter((h) => ans[h.name])
  const right = HOLDINGS.filter((h) => {
    const a = ans[h.name]
    return a && a.t === h.time && a.d === h.disc && a.l === h.lock
  }).length

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        For each holding, estimate the time-to-cash, the discount under stress, and any lock-in. A holding is only liquid
        if all three work for the goal it funds.
      </p>
      {HOLDINGS.map((h) => (
        <Panel key={h.name}>
          <p className="text-sm text-ink-200">{h.name}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wide text-ink-400">Time to cash</p>
              <div className="flex flex-wrap gap-1">
                {TIME_OPTS.map((o) => (
                  <Choice key={o} label={o} active={ans[h.name]?.t === o} onClick={() => set(h.name, 't', o)} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wide text-ink-400">Discount under stress</p>
              <div className="flex flex-wrap gap-1">
                {DISC_OPTS.map((o) => (
                  <Choice key={o} label={o} active={ans[h.name]?.d === o} onClick={() => set(h.name, 'd', o)} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wide text-ink-400">Lock-in</p>
              <div className="flex flex-wrap gap-1">
                {LOCK_OPTS.map((o) => (
                  <Choice key={o} label={o} active={ans[h.name]?.l === o} onClick={() => set(h.name, 'l', o)} />
                ))}
              </div>
            </div>
          </div>
          {ans[h.name] && (
            <p className="mt-2 text-[11px] text-ink-400">
              Expected: time <span className="text-ink-200">{h.time}</span>, discount <span className="text-ink-200">{h.disc}</span>, lock-in{' '}
              <span className="text-ink-200">{h.lock}</span>. {h.why}
            </p>
          )}
        </Panel>
      ))}
      <div className="grid grid-cols-2 gap-2">
        <Score right={right} total={HOLDINGS.length} />
        {graded.length === HOLDINGS.length && (
          <Debrief title="Match the horizon to the holding" tone={right >= 4 ? 'good' : 'ok'}>
            Money you need this year should not sit anywhere with a lock-in or a months-long sale. The stress test is not
            about today’s calm market — it is about the day you are forced to sell into it.
          </Debrief>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------- l5-112 fee audit */

export function L5FeeAudit() {
  const [gross, setGross] = useState(12)
  const [expense, setExpense] = useState(1.5)
  const [advice, setAdvice] = useState(0.9)
  const [transaction, setTransaction] = useState(0.3)
  const [tax, setTax] = useState(1.5)
  const [years, setYears] = useState(20)
  const [corpus, setCorpus] = useState(1_000_000)

  const totalCost = expense + advice + transaction
  const net = gross - totalCost - tax
  const grow = (rate: number) => corpus * Math.pow(1 + rate / 100, years)
  const netValue = grow(net)
  const grossValue = grow(gross)
  const costRupees = grossValue - netValue
  const costShare = grossValue ? (costRupees / grossValue) * 100 : 0

  const slider = (
    l: string,
    v: number,
    set: (n: number) => void,
    min: number,
    max: number,
    step: number,
    suffix = '%',
  ) => (
    <label className="block">
      <span className="flex items-center justify-between text-xs text-ink-300">
        <span>{l}</span>
        <span className="font-mono text-brand-300">
          {v}
          {suffix}
        </span>
      </span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(Number(e.target.value))} className="mt-1 w-full accent-brand-400" />
    </label>
  )

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        Start from a gross return, subtract every layer of cost, and see what actually reaches you — and what the same
        rupees would be worth over time.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            {slider('Gross return', gross, setGross, 4, 20, 0.5)}
            {slider('Fund expense ratio', expense, setExpense, 0, 3, 0.1)}
            {slider('Advisory or distributor fee', advice, setAdvice, 0, 3, 0.1)}
            {slider('Transaction and brokerage', transaction, setTransaction, 0, 2, 0.1)}
            {slider('Tax drag', tax, setTax, 0, 4, 0.1)}
            {slider('Years held', years, setYears, 1, 40, 1, ' yrs')}
            {slider('Corpus, in lakh', corpus / 100_000, (n) => setCorpus(n * 100_000), 1, 100, 1, 'L')}
          </div>
        </Panel>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Net return a year" value={`${net.toFixed(1)}%`} tone={net > 0 ? 'good' : 'bad'} />
            <Stat label="Total cost a year" value={`${totalCost.toFixed(1)}%`} tone="neutral" />
            <Stat label="Corpus at the end" value={rupeesShort(netValue)} tone="best" />
            <Stat label="Lost to cost and tax" value={rupeesShort(costRupees)} tone="bad" />
          </div>
          <Panel>
            <p className="text-xs text-ink-300">
              Over {years} years, cost and tax take <span className="font-mono text-rose-300">{costShare.toFixed(1)}%</span> of
              what the gross return would have built ({rupeesShort(grossValue)} → {rupeesShort(netValue)}). Fees compound
              against you exactly as returns compound for you.
            </p>
          </Panel>
          <Debrief title="Price the fee, then judge it" tone={totalCost <= 1.5 ? 'good' : totalCost <= 3 ? 'ok' : 'bad'}>
            {totalCost <= 1.5
              ? 'That is a low-cost wrapper. Paying it is usually worth it for access to a market you cannot buy directly.'
              : totalCost <= 3
                ? 'A moderate load. Ask what it buys: research, access, or advice you actually use. If it buys nothing you value, it is a drag, not a service.'
                : 'A heavy cost. At this level the fee decides the outcome more than the market does — over long horizons, cost is the one variable you fully control.'}
          </Debrief>
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------------------------- l5-113 verify entity */

const ENTITIES = [
  { name: 'Meridian Capital Advisors', regulator: 'SEBI', status: 'found', right: 'proceed', why: 'On the SEBI register with a matching number — still verify the exact service it is registered for.' },
  { name: 'Nifty Gain Capital', regulator: 'SEBI', status: 'missing', right: 'reject', why: 'No entry on the SEBI register: it cannot legally offer securities services in India.' },
  { name: 'RapidCash Digital Lending', regulator: 'RBI', status: 'warn', right: 'report', why: 'Listed on the cautionary / unauthorised list — do not transact, and report it.' },
  { name: 'Trustlife Insurance Broking', regulator: 'IRDAI', status: 'impersonated', right: 'reject', why: 'A real broker’s name, but the registration number on the site belongs to someone else.' },
]
const REGULATORS = ['RBI', 'SEBI', 'IRDAI', 'PFRDA', 'MCA']

export function L5VerifyEntity() {
  const [picks, setPicks] = useState<Record<string, { reg?: string; done?: boolean; action?: string }>>({})
  const check = (name: string) => setPicks((p) => ({ ...p, [name]: { reg: p[name]?.reg, done: true } }))
  const setReg = (name: string, r: string) => setPicks((p) => ({ ...p, [name]: { ...p[name], reg: r } }))
  const act = (name: string, a: string) => setPicks((p) => ({ ...p, [name]: { ...p[name], action: a } }))
  const settled = ENTITIES.filter((e) => picks[e.name]?.action)
  const right = ENTITIES.filter((e) => picks[e.name]?.action === e.right).length

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-300">
        For each entity: choose the right regulator, check the register, then decide what to do. A certificate the seller
        sends you proves nothing — the register decides.
      </p>
      {ENTITIES.map((e) => {
        const s = picks[e.name] ?? {}
        return (
          <Panel key={e.name}>
            <p className="text-sm text-ink-200">{e.name}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {REGULATORS.map((r) => (
                <Choice key={r} label={r} active={s.reg === r} onClick={() => setReg(e.name, r)} />
              ))}
              <button
                type="button"
                onClick={() => check(e.name)}
                disabled={!s.reg}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-ink-200 hover:border-white/30 disabled:opacity-40"
              >
                Check register
              </button>
            </div>
            {s.done && (
              <div className="mt-2">
                <p
                  className={`text-[11px] ${
                    e.status === 'found' ? 'text-brand-300' : e.status === 'missing' ? 'text-amber-300' : 'text-rose-300'
                  }`}
                >
                  {e.status === 'found' && `Register: found on ${e.regulator}. Number matches.`}
                  {e.status === 'missing' && `Register: no entry found for this name.`}
                  {e.status === 'warn' && `Register: on the cautionary / unauthorised list.`}
                  {e.status === 'impersonated' && `Register: the name exists, but that number belongs to a different firm.`}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Choice label="Proceed" active={s.action === 'proceed'} onClick={() => act(e.name, 'proceed')} />
                  <Choice label="Reject" active={s.action === 'reject'} onClick={() => act(e.name, 'reject')} />
                  <Choice label="Report it" active={s.action === 'report'} onClick={() => act(e.name, 'report')} />
                </div>
              </div>
            )}
            {s.action && (
              <p className={`mt-2 text-[11px] ${s.action === e.right ? 'text-brand-300' : 'text-rose-300'}`}>
                {s.action === e.right ? 'Correct — ' : `Best is to ${e.right}. `}
                {e.why}
              </p>
            )}
          </Panel>
        )
      })}
      <div className="grid grid-cols-2 gap-2">
        <Score right={right} total={ENTITIES.length} />
        {settled.length === ENTITIES.length && (
          <Debrief title="Verification is the cheapest diligence" tone={right === ENTITIES.length ? 'good' : 'ok'}>
            Two minutes on a regulator’s own website replaces every claim, screenshot and certificate a seller can show
            you. Keep the evidence: the register page, the date, and the entity’s exact legal name.
          </Debrief>
        )}
      </div>
    </div>
  )
}
