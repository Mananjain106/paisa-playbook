import { useState } from 'react'
import { Stat } from './CompoundLab'
import { rupees, num } from '../../lib/format'

/**
 * Level 5, band five — AI tools (chapters l5-114 to l5-122).
 *
 * Nine separate labs, one per chapter:
 *   l5-ai-assistants         route a task to the assistant, to a checked hand-off, or to yourself
 *   l5-ai-budget-review      redact, then correct an AI-categorised month and reconcile it
 *   l5-ai-formula-checker    diagnose three AI-written formulas from their symptoms
 *   l5-ai-policy-reader      check summary claims against the clauses they cite
 *   l5-ai-tutor-audit        separate a durable concept from a stale rule
 *   l5-ai-stress-test        name the failure mode behind six fluent outputs
 *   l5-ai-claim-verifier     trace five claims to their sources and mark them supported or not
 *   l5-ai-privacy-audit      decide what to redact, and whether the question still works
 *   l5-credential-defence    answer six requests for secrets without losing the account
 *
 * Every scenario and figure here is illustrative. The rules and reporting routes
 * they refer to were verified on 15 October 2026 and are linked from the chapters.
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

const Score = ({ right, total }: { right: number; total: number }) => (
  <Stat
    label="Score"
    value={`${right} / ${total}`}
    tone={right === total ? 'best' : right >= total * 0.6 ? 'good' : 'bad'}
  />
)

/* ------------------------------------------------------- l5-114 task router */

type Route = 'assist' | 'check' | 'self'

const ROUTE_LABEL: Record<Route, string> = {
  assist: 'Let the assistant draft it — no check needed',
  check: 'Assistant drafts, you verify before use',
  self: 'Do it yourself — no assistant',
}

const ROUTER: { task: string; best: Route; why: string }[] = [
  {
    task: 'Explain what marginal relief is',
    best: 'assist',
    why: 'A stable concept. A wrong explanation is cheap because you will apply it to a worked example you can check.',
  },
  {
    task: 'Compute the tax on your exact salary',
    best: 'check',
    why: 'Arithmetic on your own numbers. Let the model draft the method, then compute and confirm every figure yourself.',
  },
  {
    task: 'Draft the questions to ask before signing a loan agreement',
    best: 'assist',
    why: 'Generating candidate questions is cheap to be wrong about; a bad suggestion is discarded before anything moves.',
  },
  {
    task: 'Confirm whether a lender is registered with the RBI',
    best: 'self',
    why: 'A fact held in a register. It has to be read from the regulator’s own list, not recalled by a model.',
  },
  {
    task: 'Summarise a forty-page health policy',
    best: 'check',
    why: 'A good first pass, but every claim must be traced to a clause before it informs a decision.',
  },
  {
    task: 'Decide how much of your salary should go into equity',
    best: 'self',
    why: 'The answer depends on your horizon, obligations and tolerance for loss — and someone has to be accountable for it.',
  },
  {
    task: 'Explain why bond prices fall when interest rates rise',
    best: 'assist',
    why: 'A mechanism that does not expire. The explanation can be checked against a simple worked example.',
  },
  {
    task: 'State the current EPF wage ceiling',
    best: 'self',
    why: 'A threshold that changes. It is read from the EPFO, for the date you need it.',
  },
  {
    task: 'Turn a bank statement into spending categories',
    best: 'check',
    why: 'A strong first draft, but transfers, refunds and person-to-person payments are exactly what it gets wrong.',
  },
]

export function L5AiAssistants() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<Route | null>(null)
  const [right, setRight] = useState(0)
  const [answered, setAnswered] = useState(0)
  const item = ROUTER[i]
  const done = answered === ROUTER.length
  const isRight = picked === item.best

  const choose = (r: Route) => {
    if (picked) return
    setPicked(r)
    setAnswered((a) => a + 1)
    if (r === item.best) setRight((n) => n + 1)
  }
  const next = () => {
    setPicked(null)
    if (answered === ROUTER.length) {
      setRight(0)
      setAnswered(0)
      setI(0)
      return
    }
    setI((v) => (v + 1) % ROUTER.length)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Task {i + 1} of {ROUTER.length}
            </span>
            <span className="font-mono text-xs text-ink-400">answered {answered}</span>
          </div>
          <p className="mt-3 text-sm text-white">{item.task}</p>
          <div className="mt-3 grid gap-2">
            {(Object.keys(ROUTE_LABEL) as Route[]).map((r) => (
              <Choice key={r} label={ROUTE_LABEL[r]} active={picked === r} onClick={() => choose(r)} />
            ))}
          </div>
          {picked && (
            <div className="mt-3 space-y-2">
              <Verdict tone={isRight ? 'good' : 'bad'}>
                <strong className="text-white">{isRight ? 'Correct.' : `Not quite — the right call is “${ROUTE_LABEL[item.best]}”.`}</strong>{' '}
                {item.why}
              </Verdict>
              <button
                type="button"
                onClick={next}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {answered === ROUTER.length ? 'Restart' : 'Next task'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={ROUTER.length} />
            <p className="mt-2 text-xs text-ink-400">
              A hand-off is only safe when the person receiving the output can say no to it. Routing a decision to a
              checked hand-off still leaves the decision with you.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">The three routes</h4>
            <ul className="mt-2 space-y-1.5 text-xs text-ink-300">
              <li>
                <span className="text-white">Draft:</span> the output is cheap to be wrong about, and you will see the
                error before it costs anything.
              </li>
              <li>
                <span className="text-white">Check:</span> the output is useful but every figure and citation must be
                verified.
              </li>
              <li>
                <span className="text-white">Yourself:</span> a fact in a register, a current rule, or a decision that
                needs accountability.
              </li>
            </ul>
          </Panel>
          {done && right === ROUTER.length && (
            <Verdict tone="good">
              <strong className="text-white">Routing mastered.</strong> You kept the decisions and handed over the
              drafting.
            </Verdict>
          )}
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------------------- l5-115 budget review */

const FIELDS = [
  { t: 'Your name', redact: true, why: 'Identifies you; the categorisation does not use it.' },
  { t: 'Account number', redact: true, why: 'The single most identifying field on a statement.' },
  { t: 'Transaction amounts', redact: false, why: 'The categories depend on what was spent.' },
  { t: 'Merchant names', redact: false, why: 'The main signal the categoriser works from.' },
  { t: 'UPI IDs', redact: true, why: 'Handles identify both you and the counterparty, and add nothing to the category.' },
  { t: 'Dates', redact: false, why: 'Needed to scope the month and spot duplicates.' },
]

const TXNS = [
  { d: '02 Sep', m: 'SWIGGY', amt: 640, ai: 'Shopping', truth: 'Food' },
  { d: '05 Sep', m: 'CREDIT CARD PAYMENT', amt: 18400, ai: 'Bills', truth: 'Transfer' },
  { d: '07 Sep', m: 'UPI TO R. MEHTA', amt: 15000, ai: 'Shopping', truth: 'Rent' },
  { d: '11 Sep', m: 'AMAZON REFUND', amt: -2400, ai: 'Income', truth: 'Refund' },
  { d: '14 Sep', m: 'ATM WITHDRAWAL', amt: 5000, ai: 'Cash', truth: 'Cash' },
  { d: '18 Sep', m: 'NETFLIX', amt: 649, ai: 'Entertainment', truth: 'Entertainment' },
  { d: '22 Sep', m: 'ELECTRICITY BOARD', amt: 2210, ai: 'Bills', truth: 'Bills' },
  { d: '28 Sep', m: 'NIFTY INDEX SIP', amt: 10000, ai: 'Investment', truth: 'Investment' },
]

const defaultAccepted = (): Record<number, boolean> =>
  TXNS.reduce<Record<number, boolean>>((acc, _, i) => ({ ...acc, [i]: true }), {})

export function L5AiBudgetReview() {
  const [phase, setPhase] = useState<'redact' | 'review'>('redact')
  const [redacted, setRedacted] = useState<Record<string, boolean>>({})
  const [checked, setChecked] = useState(false)
  const [accepted, setAccepted] = useState<Record<number, boolean>>(defaultAccepted)

  const redactRight = FIELDS.filter((f) => Boolean(redacted[f.t]) === f.redact).length
  const mistakes = TXNS.filter((t, i) => t.ai !== t.truth && accepted[i]).length
  const fixesRight = TXNS.filter((t, i) => (t.ai === t.truth) === Boolean(accepted[i])).length

  const aiSpend = TXNS.filter((t) => t.ai !== 'Transfer' && t.ai !== 'Investment' && t.ai !== 'Refund').reduce(
    (s, t) => s + Math.max(0, t.amt),
    0,
  )
  const trueSpend = TXNS.filter((t) => t.truth !== 'Transfer' && t.truth !== 'Investment' && t.truth !== 'Refund').reduce(
    (s, t) => s + Math.max(0, t.amt),
    0,
  )

  if (phase === 'redact') {
    return (
      <div className="space-y-4">
        <Panel>
          <h4 className="text-sm font-semibold text-white">Before you paste: what goes?</h4>
          <p className="mt-1 text-xs text-ink-400">
            Tick every field you would remove. The question still has to be answerable afterwards.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {FIELDS.map((f) => {
              const on = Boolean(redacted[f.t])
              const good = on === f.redact
              return (
                <button
                  key={f.t}
                  type="button"
                  onClick={() => setRedacted((r) => ({ ...r, [f.t]: !on }))}
                  className={`rounded-lg border px-3 py-2 text-left text-[11px] transition ${
                    on ? 'border-rose-400/50 bg-rose-400/10 text-white' : 'border-white/10 bg-white/5 text-ink-300'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{f.t}</span>
                    <span className={on ? 'text-rose-300' : 'text-brand-300'}>{on ? 'redact' : 'keep'}</span>
                  </span>
                  {checked && (
                    <span className={`mt-1 block text-[10px] ${good ? 'text-brand-300' : 'text-rose-300'}`}>
                      {good ? '✓ right call — ' : '✗ '}
                      {f.why}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => (checked ? setPhase('review') : setChecked(true))}
              className="rounded-lg border border-brand-400/50 bg-brand-400/15 px-3 py-1.5 text-xs text-white"
            >
              {checked ? 'Send the redacted statement' : 'Check my redaction'}
            </button>
            {checked && (
              <span className="text-xs text-ink-400">
                {redactRight} of {FIELDS.length} fields handled correctly
              </span>
            )}
          </div>
        </Panel>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <h4 className="text-sm font-semibold text-white">The AI’s first pass</h4>
          <p className="mt-1 text-xs text-ink-400">
            Leave a row accepted if the category is right. Switch it off if you would reclassify it.
          </p>
          <div className="mt-3 space-y-1.5">
            {TXNS.map((t, i) => {
              const ok = accepted[i]
              const wrong = t.ai !== t.truth
              return (
                <button
                  key={`${t.d}-${t.m}`}
                  type="button"
                  onClick={() => setAccepted((a) => ({ ...a, [i]: !a[i] }))}
                  className={`grid w-full grid-cols-[52px_1fr_70px_86px_18px] items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-[11px] ${
                    ok ? 'border-white/10 bg-white/5' : 'border-amber-400/40 bg-amber-400/10'
                  }`}
                >
                  <span className="text-ink-400">{t.d}</span>
                  <span className="truncate text-ink-200">{t.m}</span>
                  <span className="text-right font-mono text-ink-300">{num(t.amt)}</span>
                  <span className={wrong && ok ? 'text-rose-300' : 'text-brand-300'}>{t.ai}</span>
                  <span className="text-center text-ink-500">{ok ? '✓' : '↺'}</span>
                </button>
              )
            })}
          </div>
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={fixesRight} total={TXNS.length} />
            <p className="mt-2 text-xs text-ink-400">
              Rows left accepted: {Object.values(accepted).filter(Boolean).length} of {TXNS.length}
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">The reconciliation</h4>
            <dl className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <dt className="text-ink-400">AI’s spending total</dt>
                <dd className="font-mono text-white">{rupees(aiSpend)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-400">True spending total</dt>
                <dd className="font-mono text-brand-300">{rupees(trueSpend)}</dd>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-1.5">
                <dt className="text-ink-400">Overstated by</dt>
                <dd className="font-mono text-rose-300">{rupees(aiSpend - trueSpend)}</dd>
              </div>
            </dl>
            <p className="mt-2 text-[11px] text-ink-400">
              {mistakes > 0
                ? `${mistakes} misclassified row${mistakes === 1 ? '' : 's'} still accepted. The card payment alone books ₹18,400 as spending twice.`
                : 'Every misclassification is corrected. The month now reconciles to the statement.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setPhase('redact')
                setChecked(false)
                setAccepted(defaultAccepted())
              }}
              className="mt-3 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
            >
              Start again
            </button>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------ l5-116 formula checker */

const FORMULAS = [
  {
    task: 'Total September spend by category',
    formula: '=SUMIFS(D2:D100, A2:A100, ">="&F1, A2:A100, "<="&F2)',
    symptom: 'The 30 September row, added last, does not change the total.',
    options: [
      'The range ends one row before the data does',
      'The criteria strings are reversed',
      'The rate cell needs an absolute reference',
      'SUMIFS cannot handle date criteria',
    ],
    answer: 0,
    fix: 'Extend every range to the last data row, and keep the boundary test row in the sheet permanently.',
  },
  {
    task: 'Apply the tax rate in B2 to column C, copied down',
    formula: '=C2*B2',
    symptom: 'Rows below the first give a smaller and smaller tax figure.',
    options: [
      'The formula needs IFERROR',
      'The rate reference is relative, so it drifts down with the formula',
      'The multiplication order is wrong',
      'The cell is formatted as text',
    ],
    answer: 1,
    fix: 'Use =C2*$B$2 so the rate stays anchored while the income reference moves.',
  },
  {
    task: 'Add 18% GST to a fee',
    formula: '=D2*1.18',
    symptom: 'The rate changes next quarter and you must edit every row.',
    options: [
      'The formula should use SUM',
      'The percentage is inverted',
      'The rate is hard-coded instead of referenced from a named cell',
      'The formula needs a circular reference',
    ],
    answer: 2,
    fix: 'Put 18% in one named cell and use =D2*(1+$GST), so a change is made in one place.',
  },
]

export function L5AiFormulaChecker() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [right, setRight] = useState(0)
  const [seen, setSeen] = useState(0)
  const f = FORMULAS[i]
  const done = seen === FORMULAS.length

  const choose = (n: number) => {
    if (picked !== null) return
    setPicked(n)
    setSeen((s) => s + 1)
    if (n === f.answer) setRight((r) => r + 1)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Formula {i + 1} of {FORMULAS.length}
            </span>
            <span className="font-mono text-[11px] text-ink-400">{f.task}</span>
          </div>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-[11px] text-brand-200">
            {f.formula}
          </pre>
          <p className="mt-2 text-xs text-amber-200">Symptom: {f.symptom}</p>
          <div className="mt-3 grid gap-2">
            {f.options.map((o, n) => (
              <Choice key={o} label={o} active={picked === n} onClick={() => choose(n)} />
            ))}
          </div>
          {picked !== null && (
            <div className="mt-3 space-y-2">
              <Verdict tone={picked === f.answer ? 'good' : 'bad'}>
                <strong className="text-white">{picked === f.answer ? 'Diagnosed.' : 'That is not the cause.'}</strong>{' '}
                {f.fix}
              </Verdict>
              <button
                type="button"
                onClick={() => {
                  setPicked(null)
                  if (done) {
                    setRight(0)
                    setSeen(0)
                    setI(0)
                    return
                  }
                  setI((v) => (v + 1) % FORMULAS.length)
                }}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {done ? 'Restart' : 'Next formula'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={FORMULAS.length} />
            <p className="mt-2 text-xs text-ink-400">
              The formula is a hypothesis. The test rows are the experiment, and the application is the only place the
              experiment can run.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">Test before you trust</h4>
            <ul className="mt-2 space-y-1.5 text-xs text-ink-300">
              <li>Blank row</li>
              <li>Text inside a number column</li>
              <li>Duplicate transaction</li>
              <li>Last day of the range</li>
              <li>Zero-amount row</li>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------- l5-117 policy reader */

const CLAIMS = [
  {
    claim: 'Pre-existing conditions are covered after a 36-month waiting period.',
    clause: 'Clause 4.2: pre-existing diseases are excluded until 36 months of continuous cover have elapsed.',
    verdict: 'supported',
  },
  {
    claim: 'Room rent is capped at 1% of the sum insured per day.',
    clause: 'Clause 6.1: room rent is limited to 1% of the sum insured per day; excess is borne by the insured.',
    verdict: 'supported',
  },
  {
    claim: 'Maternity is covered from day one.',
    clause: 'Clause 5.4: maternity benefit is available after 24 months for the first two children.',
    verdict: 'contradicts',
  },
  {
    claim: 'The policy pays for home-care treatment.',
    clause: 'No clause on home care appears in the wording; the schedule lists hospitalisation only.',
    verdict: 'not-in-document',
  },
  {
    claim: 'The free-look period is 15 days.',
    clause: 'The schedule states a free-look window of the length set by the regulator at the time of issue; the clause does not print a number.',
    verdict: 'contradicts',
  },
]

const VERDICTS = [
  { key: 'supported', label: 'Supported by the clause' },
  { key: 'contradicts', label: 'Contradicted by the clause' },
  { key: 'not-in-document', label: 'Not in the document' },
]

export function L5AiPolicyReader() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [right, setRight] = useState(0)
  const [seen, setSeen] = useState(0)
  const [showClause, setShowClause] = useState(false)
  const c = CLAIMS[i]

  const choose = (k: string) => {
    if (picked) return
    setPicked(k)
    setSeen((s) => s + 1)
    if (k === c.verdict) setRight((r) => r + 1)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Claim {i + 1} of {CLAIMS.length}
            </span>
            <button
              type="button"
              onClick={() => setShowClause((s) => !s)}
              className="text-[11px] text-ink-300 underline decoration-dotted"
            >
              {showClause ? 'Hide the wording' : 'Open the wording'}
            </button>
          </div>
          <p className="mt-3 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white">
            “{c.claim}”
          </p>
          {showClause && (
            <p className="mt-2 rounded-lg border border-brand-400/30 bg-brand-400/5 px-3 py-2 text-xs text-brand-200">
              {c.clause}
            </p>
          )}
          <div className="mt-3 grid gap-2">
            {VERDICTS.map((v) => (
              <Choice key={v.key} label={v.label} active={picked === v.key} onClick={() => choose(v.key)} />
            ))}
          </div>
          {picked && (
            <div className="mt-3 space-y-2">
              <Verdict tone={picked === c.verdict ? 'good' : 'bad'}>
                <strong className="text-white">
                  {picked === c.verdict ? 'Correct.' : `The answer is “${VERDICTS.find((v) => v.key === c.verdict)?.label}”.`}
                </strong>{' '}
                A summary claim that cannot be traced to a clause gets removed, not softened.
              </Verdict>
              <button
                type="button"
                onClick={() => {
                  setPicked(null)
                  setShowClause(false)
                  if (seen === CLAIMS.length) {
                    setRight(0)
                    setSeen(0)
                    setI(0)
                    return
                  }
                  setI((v) => (v + 1) % CLAIMS.length)
                }}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {seen === CLAIMS.length ? 'Restart' : 'Next claim'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={CLAIMS.length} />
            <p className="mt-2 text-xs text-ink-400">
              A summary that does not distinguish the schedule from the wording cannot be checked. Ask for a page or
              clause for every sentence.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">What the summary misses</h4>
            <ul className="mt-2 space-y-1.5 text-xs text-ink-300">
              <li>Waiting periods attached to cover</li>
              <li>Room-rent caps and sub-limits</li>
              <li>Co-payment and deductibles</li>
              <li>The difference between network and non-network care</li>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------- l5-118 tutor audit */

type TutorCall = 'concept' | 'verify' | 'discard'

const TUTOR: { s: string; call: TutorCall; why: string }[] = [
  {
    s: 'Real return is (1 + nominal) ÷ (1 + inflation) − 1, not the simple subtraction.',
    call: 'concept',
    why: 'A mechanism that does not expire, and it produces a number you can check with two inputs.',
  },
  {
    s: 'Employer PF contributions are 12% of salary, and the wage ceiling has been ₹15,000 since 2014.',
    call: 'discard',
    why: 'The contribution rate is durable; the ceiling in the statement is wrong. Take the rate, drop the threshold, and read EPFO for the current figure.',
  },
  {
    s: 'A bond’s price falls when interest rates rise because its fixed coupon is worth less relative to new issues.',
    call: 'concept',
    why: 'A durable explanation of the mechanism, which you can confirm with a bond calculator.',
  },
  {
    s: 'Long-term capital gains on listed equity are taxed at 12.5% in the current year.',
    call: 'verify',
    why: 'The rate is plausible and possibly current, but capital-gains rates are statutory and change with the Finance Act. Check the Income Tax Department for the year.',
  },
  {
    s: 'A SIP guarantees a better return than a lump sum because it averages the purchase price.',
    call: 'discard',
    why: 'This is a false generalisation. SIP changes the timing of purchases; it does not guarantee a better outcome. Reject the claim and keep the mechanism.',
  },
  {
    s: 'The free-look period on a new policy gives you a window to return it; the exact length is set by the regulator.',
    call: 'verify',
    why: 'The concept is stable, but the number of days is a current rule. Read IRDAI for the window that applies to your policy.',
  },
]

const TUTOR_LABEL: Record<TutorCall, string> = {
  concept: 'Keep it — stable concept',
  verify: 'Keep the idea, verify the rule',
  discard: 'Discard — wrong or stale',
}

export function L5AiTutorAudit() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<TutorCall | null>(null)
  const [right, setRight] = useState(0)
  const [seen, setSeen] = useState(0)
  const item = TUTOR[i]

  const choose = (c: TutorCall) => {
    if (picked) return
    setPicked(c)
    setSeen((s) => s + 1)
    if (c === item.call) setRight((r) => r + 1)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Explanation {i + 1} of {TUTOR.length}
            </span>
            <span className="font-mono text-[11px] text-ink-400">answered {seen}</span>
          </div>
          <p className="mt-3 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white">{item.s}</p>
          <div className="mt-3 grid gap-2">
            {(Object.keys(TUTOR_LABEL) as TutorCall[]).map((c) => (
              <Choice key={c} label={TUTOR_LABEL[c]} active={picked === c} onClick={() => choose(c)} />
            ))}
          </div>
          {picked && (
            <div className="mt-3 space-y-2">
              <Verdict tone={picked === item.call ? 'good' : 'bad'}>
                <strong className="text-white">{picked === item.call ? 'Right call.' : `Better call: “${TUTOR_LABEL[item.call]}”.`}</strong>{' '}
                {item.why}
              </Verdict>
              <button
                type="button"
                onClick={() => {
                  setPicked(null)
                  if (seen === TUTOR.length) {
                    setRight(0)
                    setSeen(0)
                    setI(0)
                    return
                  }
                  setI((v) => (v + 1) % TUTOR.length)
                }}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {seen === TUTOR.length ? 'Restart' : 'Next explanation'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={TUTOR.length} />
            <p className="mt-2 text-xs text-ink-400">
              Learn the mechanism from the model, the rule from the regulator. Anything with a rate, slab, ceiling or
              threshold in it belongs in the second column.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">Triangulate</h4>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-ink-300">
              <li>The regulator’s own page</li>
              <li>The instrument it publishes</li>
              <li>An independent explanation</li>
            </ol>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------- l5-119 stress test */

type Failure = 'cutoff' | 'maths' | 'context' | 'invention' | 'sycophancy'

const FAILURE_LABEL: Record<Failure, string> = {
  cutoff: 'Knowledge cut-off',
  maths: 'Arithmetic',
  context: 'Context loss',
  invention: 'Invention',
  sycophancy: 'Sycophancy',
}

const STRESS: { output: string; mode: Failure; why: string }[] = [
  {
    output: '“The RBI’s deposit-insurance limit is ₹1 lakh per depositor per bank.”',
    mode: 'cutoff',
    why: 'This was the limit before it was raised. The number is stated with no date, which is exactly how a stale rule passes.',
  },
  {
    output: '“₹1 lakh invested at 12% a year becomes ₹2.2 lakh after ten years.”',
    mode: 'maths',
    why: 'That is simple interest — 12% × 10 years on the principal. Compounded at 12%, ₹1 lakh becomes about ₹3.11 lakh. Ask for the formula and compute the series yourself.',
  },
  {
    output: 'You set a 6% inflation assumption, and four messages later the answer uses 4%.',
    mode: 'context',
    why: 'A constraint you supplied was dropped. Restate the key assumptions before the final answer and keep one decision per conversation.',
  },
  {
    output: '“As per Section 80CCD(2), the employer contribution up to 14% of salary is deductible under the new regime.”',
    mode: 'invention',
    why: 'The section and the concept are real, which is the trap. The percentage and the conditions must be read in the Act for the year; a specific citation is a claim to be opened, not a fact.',
  },
  {
    output: 'You ask “since debt is always safer, I should hold no equity, right?” and the answer agrees.',
    mode: 'sycophancy',
    why: 'The premise was supplied as fact. Over a long horizon, that premise produces a plan that inflation will quietly dismantle.',
  },
  {
    output: '“That fund’s expense ratio is 0.2%, so its returns will be 0.2% lower every year.”',
    mode: 'maths',
    why: 'The direction is right but the arithmetic of compounding is skipped, and the answer ignores exit load and tracking difference. Ask for the cost model, not the slogan.',
  },
]

export function L5AiStressTest() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<Failure | null>(null)
  const [right, setRight] = useState(0)
  const [seen, setSeen] = useState(0)
  const s = STRESS[i]

  const choose = (f: Failure) => {
    if (picked) return
    setPicked(f)
    setSeen((n) => n + 1)
    if (f === s.mode) setRight((r) => r + 1)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Output {i + 1} of {STRESS.length}
            </span>
            <span className="font-mono text-[11px] text-ink-400">answered {seen}</span>
          </div>
          <p className="mt-3 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white">{s.output}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {(Object.keys(FAILURE_LABEL) as Failure[]).map((f) => (
              <Choice key={f} label={FAILURE_LABEL[f]} active={picked === f} onClick={() => choose(f)} />
            ))}
          </div>
          {picked && (
            <div className="mt-3 space-y-2">
              <Verdict tone={picked === s.mode ? 'good' : 'bad'}>
                <strong className="text-white">
                  {picked === s.mode ? 'Named it.' : `This is ${FAILURE_LABEL[s.mode].toLowerCase()}.`}
                </strong>{' '}
                {s.why}
              </Verdict>
              <button
                type="button"
                onClick={() => {
                  setPicked(null)
                  if (seen === STRESS.length) {
                    setRight(0)
                    setSeen(0)
                    setI(0)
                    return
                  }
                  setI((v) => (v + 1) % STRESS.length)
                }}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {seen === STRESS.length ? 'Restart' : 'Next output'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={STRESS.length} />
            <p className="mt-2 text-xs text-ink-400">
              Every failure arrives in the same fluent voice. Naming the mode tells you which check to run.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">The matching defences</h4>
            <ul className="mt-2 space-y-1.5 text-xs text-ink-300">
              <li>Cut-off → read the regulator</li>
              <li>Arithmetic → recompute from the formula</li>
              <li>Context → restate the constraints</li>
              <li>Invention → open the citation</li>
              <li>Sycophancy → ask a neutral question</li>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------ l5-120 claim verifier */

const CLAIMS2 = [
  {
    claim: 'Deposits are insured up to ₹5 lakh per depositor per bank.',
    citation: 'DICGC Act, 1961, as amended; DICGC website',
    source: 'The DICGC insures deposits up to ₹5 lakh per depositor per bank, for both principal and interest.',
    found: true,
    supported: true,
  },
  {
    claim: 'A fixed deposit of ₹12 lakh at one bank is fully insured.',
    citation: '“RBI circular RBI/2024-25/112”',
    source: 'No circular with that number exists on the RBI site. The deposit-insurance limit is ₹5 lakh per depositor per bank.',
    found: false,
    supported: false,
  },
  {
    claim: 'Listed-equity long-term gains above ₹1.25 lakh are taxed at 12.5%.',
    citation: 'Income Tax Department — capital gains, current year',
    source: 'For listed equity, long-term gains exceeding the annual exemption are taxed at 12.5% without indexation, subject to the conditions in the current Finance Act.',
    found: true,
    supported: true,
  },
  {
    claim: 'The same 12.5% rate applies to gains on a debt fund held for four years.',
    citation: '“Same as listed equity”',
    source: 'Debt funds do not follow the listed-equity treatment; the holding period and rate are different and specified separately.',
    found: true,
    supported: false,
  },
  {
    claim: 'Under the DPDP Act, a data fiduciary must erase data once its purpose is served.',
    citation: 'DPDP Act, 2023 — obligations of a data fiduciary',
    source: 'The Act requires erasure on withdrawal of consent or when the purpose is no longer served, unless retention is required by law.',
    found: true,
    supported: true,
  },
]

export function L5AiClaimVerifier() {
  const [i, setI] = useState(0)
  const [opened, setOpened] = useState(false)
  const [picked, setPicked] = useState<boolean | null>(null)
  const [right, setRight] = useState(0)
  const [seen, setSeen] = useState(0)
  const c = CLAIMS2[i]

  const choose = (v: boolean) => {
    if (picked !== null) return
    setPicked(v)
    setSeen((n) => n + 1)
    if (v === c.supported) setRight((r) => r + 1)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Claim {i + 1} of {CLAIMS2.length}
            </span>
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="text-[11px] text-ink-300 underline decoration-dotted"
            >
              {opened ? 'Source opened' : 'Open the cited source'}
            </button>
          </div>
          <p className="mt-3 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white">{c.claim}</p>
          <p className="mt-2 font-mono text-[11px] text-ink-400">cited: {c.citation}</p>
          {opened && (
            <p
              className={`mt-2 rounded-lg border px-3 py-2 text-xs ${
                c.found
                  ? 'border-brand-400/30 bg-brand-400/5 text-brand-200'
                  : 'border-rose-400/40 bg-rose-400/10 text-rose-200'
              }`}
            >
              {c.found ? 'Found: ' : 'Not found: '}
              {c.source}
            </p>
          )}
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <Choice label="Supported by the source" active={picked === true} onClick={() => choose(true)} />
            <Choice label="Unsupported or contradicted" active={picked === false} onClick={() => choose(false)} />
          </div>
          {picked !== null && (
            <div className="mt-3 space-y-2">
              <Verdict tone={picked === c.supported ? 'good' : 'bad'}>
                <strong className="text-white">
                  {picked === c.supported
                    ? 'Correct.'
                    : `The claim is ${c.supported ? 'supported' : 'not supported'} by the source.`}
                </strong>{' '}
                {c.found
                  ? 'The document exists — the remaining question is whether it says what was attributed to it.'
                  : 'The citation could not be found, so the claim is unsupported regardless of how plausible it sounds.'}
              </Verdict>
              <button
                type="button"
                onClick={() => {
                  setPicked(null)
                  setOpened(false)
                  if (seen === CLAIMS2.length) {
                    setRight(0)
                    setSeen(0)
                    setI(0)
                    return
                  }
                  setI((v) => (v + 1) % CLAIMS2.length)
                }}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {seen === CLAIMS2.length ? 'Restart' : 'Next claim'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={CLAIMS2.length} />
            <p className="mt-2 text-xs text-ink-400">
              Opening the source is the whole check. A real number applied to the wrong asset fails just as badly as a
              citation that does not exist.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">The trail</h4>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-ink-300">
              <li>Does the document exist?</li>
              <li>Does it contain the words?</li>
              <li>Does the authority match the subject?</li>
              <li>Does the rate apply to this asset and this year?</li>
            </ol>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------- l5-121 privacy audit */

const PROMPT_FIELDS = [
  { t: 'Name: Ravi Sharma', need: false, why: 'The question is about a deduction, not about who you are.' },
  { t: 'PAN: ABCDE1234F', need: false, why: 'One of the most identifying fields there is. Never paste it.' },
  { t: 'Account: 5010 7781 2244', need: false, why: 'Not needed to explain a salary deduction.' },
  { t: 'Salary: ₹95,000 gross', need: true, why: 'The amount is the subject of the question.' },
  { t: 'Deduction: ₹4,200 professional tax arrears', need: true, why: 'The line item that needs explaining.' },
  { t: 'Phone: 98xxxxxx21', need: false, why: 'No connection to the question at all.' },
  { t: 'Month: September', need: true, why: 'Time period scopes the comparison.' },
  { t: 'Employer: Acme Pvt Ltd', need: false, why: 'Replace with [EMPLOYER]; the name adds risk and no accuracy.' },
]

export function L5AiPrivacyAudit() {
  const [removed, setRemoved] = useState<Record<string, boolean>>({})
  const [checked, setChecked] = useState(false)

  const right = PROMPT_FIELDS.filter((f) => Boolean(removed[f.t]) === !f.need).length
  const keptNeeded = PROMPT_FIELDS.filter((f) => f.need && !removed[f.t]).length
  const neededTotal = PROMPT_FIELDS.filter((f) => f.need).length
  const leaked = PROMPT_FIELDS.filter((f) => !f.need && !removed[f.t]).length

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <h4 className="text-sm font-semibold text-white">The prompt you are about to send</h4>
          <p className="mt-1 text-xs text-ink-400">
            Click any field to remove it. Keep enough for the question to still make sense.
          </p>
          <div className="mt-3 space-y-1.5">
            {PROMPT_FIELDS.map((f) => {
              const gone = Boolean(removed[f.t])
              const good = gone === !f.need
              return (
                <button
                  key={f.t}
                  type="button"
                  onClick={() => setRemoved((r) => ({ ...r, [f.t]: !gone }))}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-1.5 text-left text-[11px] ${
                    gone ? 'border-rose-400/40 bg-rose-400/10 text-ink-400 line-through' : 'border-white/10 bg-white/5 text-ink-200'
                  }`}
                >
                  <span className="truncate">{f.t}</span>
                  <span className={`shrink-0 ${checked ? (good ? 'text-brand-300' : 'text-rose-300') : 'text-ink-500'}`}>
                    {checked ? (good ? '✓' : '✗') : gone ? 'removed' : 'in prompt'}
                  </span>
                </button>
              )
            })}
          </div>
          {checked && (
            <div className="mt-3 space-y-1.5">
              {PROMPT_FIELDS.filter((f) => Boolean(removed[f.t]) !== !f.need).map((f) => (
                <p key={f.t} className="text-[11px] text-rose-300">
                  {f.t}: {f.why}
                </p>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="mt-3 rounded-lg border border-brand-400/50 bg-brand-400/15 px-3 py-1.5 text-xs text-white"
          >
            Check the prompt
          </button>
        </Panel>
        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-2 gap-2">
              <Stat label="Right calls" value={`${right} / ${PROMPT_FIELDS.length}`} tone={right === PROMPT_FIELDS.length ? 'best' : 'good'} />
              <Stat label="Identifiers left" value={String(leaked)} tone={leaked === 0 ? 'best' : leaked > 2 ? 'bad' : 'good'} />
            </div>
            <p className="mt-2 text-xs text-ink-400">
              {keptNeeded === neededTotal
                ? 'The question still works: amounts, month and the deduction are all present.'
                : `${neededTotal - keptNeeded} field(s) the question actually needs have been removed. Redaction should not make the prompt useless.`}
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">Remember</h4>
            <ul className="mt-2 space-y-1.5 text-xs text-ink-300">
              <li>Deleting the chat is not recall.</li>
              <li>PDF metadata survives visual redaction.</li>
              <li>Screenshots carry notification banners.</li>
              <li>Never share another person’s health data.</li>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------------- l5-122 credential defence */

const REQUESTS = [
  {
    s: 'A caller says a ₹47,000 debit is in progress and asks for the OTP to cancel it.',
    options: [
      'Read the OTP so the transaction can be cancelled',
      'End the call and ring the number printed on your card',
      'Share only the first three digits, which cannot be used alone',
    ],
    answer: 1,
    why: 'The OTP authorises the transaction the caller has triggered. Only a call you initiate, on a number you looked up, reaches the bank.',
    cost: 'Read the OTP and ₹47,000 leaves your account in the seconds that follow.',
  },
  {
    s: 'A UPI collect request arrives: “Enter PIN to receive ₹5,000 from Rahul.”',
    options: [
      'Enter the PIN — receiving money needs approval',
      'Reject the request; a PIN only ever approves a debit',
      'Enter the PIN but only for a small amount',
    ],
    answer: 1,
    why: 'Receiving money never requires your PIN. The PIN authorises money leaving your account, whatever the message says.',
    cost: 'The PIN approves a debit, not a credit — the money moves the other way.',
  },
  {
    s: 'An AI assistant helping with a failed card payment asks for the card number, expiry and CVV to “verify the account”.',
    options: [
      'Share all three — it is already helping with that card',
      'Share the number and expiry but not the CVV',
      'Share none; no verification needs a CVV, and a prompt is not a secure channel',
    ],
    answer: 2,
    why: 'The three fields together authorise online payments. A tool with no relationship to your bank cannot verify anything with them.',
    cost: 'Card-not-present fraud needs exactly those three fields.',
  },
  {
    s: 'A message says your KYC has expired and asks you to upload a photo of your Aadhaar and PAN to a link.',
    options: [
      'Upload, since KYC does expire and the link looks like the bank',
      'Open your bank’s own app or visit a branch; never upload identity documents to a link',
      'Upload only the PAN, which is less sensitive',
    ],
    answer: 1,
    why: 'A link in a message is not a verified channel. KYC is completed through the institution’s own app or a branch you chose.',
    cost: 'The documents support loans and accounts opened in your name.',
  },
  {
    s: 'A “support agent” on a video call asks you to install a screen-sharing app so they can fix the payment.',
    options: [
      'Install it, but watch what they do',
      'Install it and close your banking app first',
      'Refuse; remote access to your device is never part of support',
    ],
    answer: 2,
    why: 'Screen sharing exposes your messages, your OTPs and anything you type. A genuine institution does not need to see your screen.',
    cost: 'With the screen shared, the OTP arrives in front of them.',
  },
  {
    s: 'A secret has already been shared. What comes first?',
    options: [
      'Wait for the next statement to see whether anything was taken',
      'Freeze the card or account with the bank, then change the credential and report it',
      'Ask the caller to reverse the transaction',
    ],
    answer: 1,
    why: 'Containment first. Freezing stops further loss, changing the credential removes the access, and reporting starts the recovery clock.',
    cost: 'Every hour of delay is another hour the credential works.',
  },
]

export function L5CredentialDefence() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [right, setRight] = useState(0)
  const [seen, setSeen] = useState(0)
  const r = REQUESTS[i]

  const choose = (n: number) => {
    if (picked !== null) return
    setPicked(n)
    setSeen((s) => s + 1)
    if (n === r.answer) setRight((v) => v + 1)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Panel>
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-widest text-brand-300">
              Request {i + 1} of {REQUESTS.length}
            </span>
            <span className="font-mono text-[11px] text-ink-400">answered {seen}</span>
          </div>
          <p className="mt-3 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white">{r.s}</p>
          <div className="mt-3 grid gap-2">
            {r.options.map((o, n) => (
              <Choice key={o} label={o} active={picked === n} onClick={() => choose(n)} />
            ))}
          </div>
          {picked !== null && (
            <div className="mt-3 space-y-2">
              <Verdict tone={picked === r.answer ? 'good' : 'bad'}>
                <strong className="text-white">{picked === r.answer ? 'Refused correctly.' : 'That answer gives away a key.'}</strong>{' '}
                {r.why}
              </Verdict>
              {picked !== r.answer && <p className="text-xs text-rose-300">What happens next: {r.cost}</p>}
              <button
                type="button"
                onClick={() => {
                  setPicked(null)
                  if (seen === REQUESTS.length) {
                    setRight(0)
                    setSeen(0)
                    setI(0)
                    return
                  }
                  setI((v) => (v + 1) % REQUESTS.length)
                }}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-white/35"
              >
                {seen === REQUESTS.length ? 'Restart' : 'Next request'}
              </button>
            </div>
          )}
        </Panel>
        <div className="space-y-4">
          <Panel>
            <Score right={right} total={REQUESTS.length} />
            <p className="mt-2 text-xs text-ink-400">
              The story around a request is the delivery mechanism. The request itself is the attack.
            </p>
          </Panel>
          <Panel>
            <h4 className="text-xs uppercase tracking-widest text-brand-300">If a secret is gone</h4>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-ink-300">
              <li>Freeze the card or account</li>
              <li>Change the password from a trusted device</li>
              <li>Report at cybercrime.gov.in or on 1930</li>
            </ol>
          </Panel>
        </div>
      </div>
    </div>
  )
}
