import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band three, batch 1 labs (chapters l5-040 to l5-049).
 *
 * Ten separate simulations, one per chapter:
 *   l5-jurisdiction-finder   name the product, name the owner, name the register
 *   l5-rbi-checklist         what a depositor can use and what covers what
 *   l5-sebi-verify           check a market intermediary, and read the red flags
 *   l5-insurer-verify        verify seller and insurer, then test the claim ladder
 *   l5-pension-setup         build a pension account and price its exit
 *   l5-bank-picker           spread deposits against the insurance limit
 *   l5-nbfc-check            cost a non-bank loan against a bank loan
 *   l5-insurer-scorecard     score insurers on the four published figures
 *   l5-amc-diligence         read an asset manager like an owner
 *   l5-exchange-role         what settlement guarantees and what it does not
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: deposit insurance of ₹5 lakh per depositor per bank, and its
 * exclusion of non-bank deposits; the single-window bank ombudsman route; the
 * payment-bank deposit ceiling of ₹2 lakh per customer; the ₹1 crore and
 * ₹25 lakh minimums for pooled funds; the requirement that an insurer stay
 * above a 150% solvency ratio; the thirty-day free-look period; the health
 * claim timelines of one hour for cashless authorisation and three hours for
 * discharge authorisation; the Insurance Ombudsman's award ceiling of ₹50 lakh
 * and the one-year window to complain; the pension exit rule of up to 80% as a
 * lump sum with at least 20% to an annuity; and the settlement guarantee
 * provided through a clearing corporation. All amounts are illustrative.
 */

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">{children}</div>
)

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format = (v: number) => rupees(v),
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) => (
  <label className="block">
    <span className="flex items-center justify-between text-xs text-ink-300">
      <span>{label}</span>
      <span className="font-mono text-brand-300">{format(value)}</span>
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="mt-1 w-full accent-brand-400"
    />
  </label>
)

const Check = ({ ok, children }: { ok: boolean; children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-xs">
    <span
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
      style={{ background: ok ? '#34e0a1' : 'rgba(255,255,255,0.12)', color: ok ? '#11131f' : '#c9cfe4' }}
    >
      {ok ? '✓' : '·'}
    </span>
    <span className={ok ? 'text-ink-200' : 'text-ink-400'}>{children}</span>
  </li>
)

const Choice = ({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-lg border px-2.5 py-1.5 text-left text-[11px] transition ${
      active ? 'border-brand-400/60 bg-brand-400/15 text-white' : 'border-white/10 bg-white/5 text-ink-300 hover:border-white/30'
    }`}
  >
    {label}
  </button>
)

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/* ------------------------------------------------------------------ l5-040 */

type Product = {
  key: string
  label: string
  regulator: string
  register: string
  route: string
  flag: string
}

const PRODUCTS: Product[] = [
  {
    key: 'fd',
    label: 'A bank fixed deposit',
    regulator: 'RBI',
    register: 'the bank itself, and the deposit-insurance cover that applies',
    route: 'The bank first, then the single-window banking ombudsman',
    flag: 'Any promise of a rate far above the market, or a deposit taken by an individual rather than at a branch',
  },
  {
    key: 'mf',
    label: 'A mutual fund',
    regulator: 'SEBI',
    register: 'the scheme, the asset manager and the distributor you bought through',
    route: 'The fund house first, then the SEBI complaints system',
    flag: 'A guaranteed return, a scheme that cannot be looked up, or a plan sold without a scheme document',
  },
  {
    key: 'life',
    label: 'A life insurance policy',
    regulator: 'IRDAI',
    register: 'the insurer, and the licence of the agent, broker or bank that sold it',
    route: 'The insurer first, then the insurance ombudsman',
    flag: 'A premium paid to a person rather than to the insurer, or a policy sold as an investment with a guaranteed return',
  },
  {
    key: 'nps',
    label: 'A pension account',
    regulator: 'PFRDA',
    register: 'the scheme and the points of presence you opened it through',
    route: 'The recordkeeper and the trust first, then the pension regulator',
    flag: 'Anyone promising a fixed pension amount from a market-linked account',
  },
  {
    key: 'gold',
    label: 'A gold loan from a lender',
    regulator: 'RBI',
    register: 'the lender in the register of non-bank financial companies',
    route: 'The lender first, then the banking ombudsman, which covers these lenders',
    flag: 'An app that names no lender, an unregistered entity, or a loan against a deposit that offered you interest',
  },
  {
    key: 'scheme',
    label: 'A pooled fund for private companies',
    regulator: 'SEBI',
    register: 'the fund in the register of alternative investment funds, and the minimum ticket it may accept',
    route: 'The manager first, then the SEBI complaints system',
    flag: 'A pooled private fund that takes small amounts from the public, or one that is not on the register at all',
  },
]

export function L5JurisdictionFinder() {
  const [selected, setSelected] = useState(PRODUCTS[0].key)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const product = PRODUCTS.find((p) => p.key === selected) ?? PRODUCTS[0]
  const STEPS = ['regulator', 'register', 'route', 'documents'] as const
  const done = STEPS.filter((s) => checked[s]).length
  const ready = done === STEPS.length

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Name the product first</h4>
          <div className="grid grid-cols-2 gap-2">
            {PRODUCTS.map((p) => (
              <Choice
                key={p.key}
                label={p.label}
                active={p.key === selected}
                onClick={() => setSelected(p.key)}
              />
            ))}
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] uppercase tracking-wide text-ink-400">Regulator</div>
              <div className="text-sm text-white">{product.regulator}</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] uppercase tracking-wide text-ink-400">Check the register</div>
              <div className="text-xs text-ink-200">{product.register}</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] uppercase tracking-wide text-ink-400">If it goes wrong</div>
              <div className="text-xs text-ink-200">{product.route}</div>
            </div>
            <div className="rounded-lg border border-rose-400/30 bg-rose-400/10 p-3">
              <div className="text-[11px] uppercase tracking-wide text-rose-200">The flag to watch</div>
              <div className="text-xs text-rose-100">{product.flag}</div>
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Before the money moves</h4>
            <div className="flex flex-wrap gap-2">
              {STEPS.map((s) => (
                <Choice
                  key={s}
                  label={s === 'regulator' ? 'regulator named' : s === 'register' ? 'entity looked up on the register' : s === 'route' ? 'grievance route known' : 'documents read'}
                  active={!!checked[s]}
                  onClick={() => setChecked((prev) => ({ ...prev, [s]: !prev[s] }))}
                />
              ))}
            </div>
            <ul className="mt-3 space-y-2">
              <Check ok={done >= 1}>
                Naming the owner of the product is the first step, because the register, the documents and the complaint route all follow from it.
              </Check>
              <Check ok={done >= 2}>
                Looking the entity up takes minutes and is the only check that cannot be talked around by a salesperson.
              </Check>
              <Check ok={done >= 3}>
                Knowing the escalation route before there is a problem changes what you accept while there is not one.
              </Check>
              <Check ok={ready}>
                {ready
                  ? 'All four checks done. This is the whole verification, and it works for every product in the list.'
                  : 'A product whose seller cannot name a regulator is not a simpler product. It is an unregulated one.'}
              </Check>
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Regulation in India is split by product, not by seller: banks and lenders belong to one regulator, funds and
        brokers to another, insurers to a third and pensions to a fourth. The map matters because each one publishes a
        register, imposes its own documents and runs its own complaint route — so a person who cannot say which
        regulator owns a product has no way to check whether the seller may sell it at all. Click through the products
        above and notice the pattern: the goods change, the four questions do not.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-041 */

export function L5RbiChecklist() {
  const [deposits, setDeposits] = useState([
    { name: 'Main salary bank', amount: 800_000 },
    { name: 'Second bank', amount: 450_000 },
    { name: 'Co-operative bank', amount: 200_000 },
    { name: 'Non-bank lender deposit', amount: 300_000 },
  ])
  const [daysElapsed, setDaysElapsed] = useState(45)
  const [monthlyMandate, setMonthlyMandate] = useState(40_000)

  const insured = deposits
    .filter((d) => d.name !== 'Non-bank lender deposit')
    .reduce((sum, d) => sum + Math.min(d.amount, 500_000), 0)
  const total = deposits.reduce((s, d) => s + d.amount, 0)
  const exposed = total - insured
  const perBank = deposits.map((d) => ({ ...d, cover: Math.min(d.amount, 500_000), gap: Math.max(0, d.amount - 500_000) }))
  const nbfcDeposit = deposits.find((d) => d.name === 'Non-bank lender deposit')?.amount ?? 0
  const banksOver = perBank.filter((d) => d.gap > 0 && d.name !== 'Non-bank lender deposit').length
  const mandateFree = monthlyMandate <= 100_000

  const checks = [
    {
      ok: banksOver === 0,
      text: banksOver === 0
        ? 'No bank holds more than the insured amount, so the cover is doing its job.'
        : `${banksOver} bank(s) hold more than the insured amount. Cover is ₹5 lakh per depositor per bank, principal and interest together, so the excess is the bank's credit risk and not a regulatory promise.`,
    },
    {
      ok: nbfcDeposit === 0,
      text: nbfcDeposit === 0
        ? 'Everything held with a lender is a bank deposit, and deposit insurance applies to banks rather than to non-bank lenders.'
        : `${rupees(nbfcDeposit)} sits with a non-bank lender. Deposit insurance does not cover it at all, whatever rate it offers in exchange.`,
    },
    {
      ok: mandateFree,
      text: mandateFree
        ? `A recurring mandate of ${rupees(monthlyMandate)} executes without additional authentication: the ceiling for that is ₹1 lakh per transaction, with advance notice before each debit.`
        : `A mandate of ${rupees(monthlyMandate)} exceeds the ₹1 lakh ceiling, so each debit will need authentication. That is a payment rule, not a bank preference.`,
    },
    {
      ok: daysElapsed >= 30,
      text: daysElapsed >= 30
        ? 'The complaint has had its run with the entity, so the single-window ombudsman route is available: one portal for banks, lenders and payment operators, with no fee.'
        : `Only ${daysElapsed} days have passed. Give the bank its window to respond first; the ombudsman route normally opens after that.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">What a depositor can use</h4>
          <div className="space-y-3">
            {deposits.map((d, i) => (
              <Slider
                key={d.name}
                label={d.name}
                value={d.amount}
                min={0}
                max={2_000_000}
                step={50_000}
                onChange={(v) => setDeposits((prev) => prev.map((x, j) => (j === i ? { ...x, amount: v } : x)))}
              />
            ))}
            <Slider label="Days since the complaint to the bank" value={daysElapsed} min={0} max={90} step={1} onChange={setDaysElapsed} format={(v) => `${v} days`} />
            <Slider label="Monthly recurring mandate" value={monthlyMandate} min={5_000} max={200_000} step={5_000} onChange={setMonthlyMandate} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Deposits" value={rupeesShort(total)} />
              <Stat label="Insured" value={rupeesShort(insured)} tone="good" />
              <Stat label="Uninsured" value={rupeesShort(exposed)} tone={exposed === 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              {perBank.map((d) => (
                <li key={d.name}>
                  {d.name}: {rupees(d.amount)} — covered {rupees(d.cover)}
                  {d.gap > 0 && (d.name === 'Non-bank lender deposit' ? ', no cover applies' : `, ${rupees(d.gap)} exposed`)}
                </li>
              ))}
              <li className="text-white">Bank cover is per depositor per bank, and each bank counts separately.</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        The four tools in this lab answer four different questions. Insurance answers "what if the bank fails" — up to
        ₹5 lakh per depositor per bank, and not at all for a non-bank lender. Payment rules answer "what will the system
        do automatically" — a recurring mandate up to ₹1 lakh executes without another authentication, with notice
        before each debit. The ombudsman answers "who hears this when the bank will not", and it opens after the entity
        has had its window. The alert list answers the earliest question of all: whether the name in front of you is one
        the regulator has already named. Spreading deposits across banks is the cheapest use of the first of these, and
        it costs nothing but a little administration.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-042 */

const RED_FLAGS = [
  'A guaranteed return on a market-linked product',
  'A request for your login, one-time password or card details',
  'No registration number anywhere on the site or app',
  'A trading app that does not name the broker behind it',
  'Profit-sharing on your trading gains',
  'Pressure to transfer money to a personal account',
]

const INTERMEDIARIES = [
  { key: 'broker', label: 'A broker or trading platform', area: 'must be registered, and must keep client funds apart from its own', route: 'The broker first, then the complaints system of the market regulator' },
  { key: 'adviser', label: 'An investment adviser', area: 'must be registered; unregistered advice is prohibited, whoever gives it', route: 'The adviser first, then the regulator complaints system' },
  { key: 'amc', label: 'An asset manager and its scheme', area: 'schemes are registered, assets are held in trust, and documents must be published', route: 'The fund house first, then the regulator complaints system' },
  { key: 'pms', label: 'A discretionary portfolio manager', area: 'registered, with a minimum ticket and reporting obligations', route: 'The manager first, then the regulator complaints system' },
]

export function L5SebiVerify() {
  const [who, setWho] = useState(INTERMEDIARIES[0].key)
  const [flags, setFlags] = useState<string[]>([])
  const [verified, setVerified] = useState(false)
  const [readDocs, setReadDocs] = useState(false)
  const entity = INTERMEDIARIES.find((e) => e.key === who) ?? INTERMEDIARIES[0]
  const score = flags.length
  const verdict = score === 0 ? 'no red flags recorded' : score <= 2 ? 'more than one flag: verify before paying anything' : 'walk away'
  const blocked = score >= 3

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Who is selling, and what must they do</h4>
          <div className="grid grid-cols-2 gap-2">
            {INTERMEDIARIES.map((e) => (
              <Choice key={e.key} label={e.label} active={e.key === who} onClick={() => setWho(e.key)} />
            ))}
          </div>
          <div className="mt-3 space-y-2 text-xs text-ink-200">
            <p>{entity.area}</p>
            <p className="text-ink-400">{entity.route}</p>
          </div>
          <div className="mt-4 space-y-3">
            <Choice label="Registration number checked on the regulator's list" active={verified} onClick={() => setVerified((v) => !v)} />
            <Choice label="Scheme or disclosure document read" active={readDocs} onClick={() => setReadDocs((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Statements that end the conversation</h4>
            <p className="mb-2 text-[11px] text-ink-400">Click each claim you have heard from this seller.</p>
            <div className="flex flex-wrap gap-2">
              {RED_FLAGS.map((f) => (
                <Choice
                  key={f}
                  label={f}
                  active={flags.includes(f)}
                  onClick={() => setFlags((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]))}
                />
              ))}
            </div>
            <ul className="mt-3 space-y-1.5">
              <Check ok={verified}>
                {verified ? 'The registration was checked, which is the only verification a salesperson cannot argue with.' : 'Registration has not been checked. Start there, because everything else is a claim.'}
              </Check>
              <Check ok={readDocs}>
                {readDocs ? 'The document was read, so the terms are known rather than described.' : 'The disclosure document has not been read. Fees, exit loads and risk labelling all live in it.'}
              </Check>
              <Check ok={!blocked}>
                {blocked
                  ? 'Three or more flags. No legitimate intermediary needs a login, a personal transfer or a promise of returns.'
                  : `Verdict so far: ${verdict}.`}
              </Check>
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Checking a market intermediary is a five-minute exercise with three parts: find the name on the regulator's list,
        read the two documents that matter (the scheme or product document, and the fee disclosure), and know where a
        complaint goes. What the check cannot do is make the investment good; it establishes only that the counterparty
        is permitted to sell it and that somebody is accountable. The statements on the right are the ones with no
        legitimate version — anyone asking for your login or for a transfer to a personal account is not an intermediary
        at all, and a promise of returns on a market-linked product is prohibited rather than merely optimistic.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-043 */

export function L5InsurerVerify() {
  const [claim, setClaim] = useState(450_000)
  const [authorisationHours, setAuthorisationHours] = useState(6)
  const [dischargeHours, setDischargeHours] = useState(8)
  const [licenceChecked, setLicenceChecked] = useState(false)
  const [premiumChannel, setPremiumChannel] = useState<'insurer' | 'individual'>('insurer')
  const [freeLookDays, setFreeLookDays] = useState(40)
  const [gaveInsurerTime, setGaveInsurerTime] = useState(true)
  const [monthsSinceRefusal, setMonthsSinceRefusal] = useState(3)

  const lateAuthorisation = Math.max(0, authorisationHours - 1)
  const lateDischarge = Math.max(0, dischargeHours - 3)
  const withinFreeLook = freeLookDays <= 30
  const ombudsmanWindowOpen = monthsSinceRefusal <= 12
  const awardCap = 5_000_000

  const checks = [
    {
      ok: licenceChecked && premiumChannel === 'insurer',
      text: licenceChecked && premiumChannel === 'insurer'
        ? 'The seller is licensed and the premium went to the insurer, with a receipt. Those two facts decide whether the policy is enforceable at all.'
        : premiumChannel === 'individual'
          ? 'A premium paid to a person, or collected in cash by an agent, is the single most common way a policy turns out not to exist. Pay the insurer.'
          : 'The licence of the agent, broker or bank has not been checked. The regulator publishes licences, and the seller should be able to show the number.',
    },
    {
      ok: lateAuthorisation === 0,
      text: lateAuthorisation === 0
        ? 'Cashless authorisation was decided within the hour that the rules require.'
        : `Authorisation took ${authorisationHours} hours against the one hour required, so ${lateAuthorisation} hours of delay are the insurer's, and are worth documenting at the hospital desk.`,
    },
    {
      ok: lateDischarge === 0,
      text: lateDischarge === 0
        ? 'Final authorisation for discharge came within the three hours required, so the hospital did not have to keep the patient waiting on paperwork.'
        : `Final authorisation took ${dischargeHours} hours against three. Keep the timestamps: delay of this kind is exactly what a complaint is built on.`,
    },
    {
      ok: withinFreeLook,
      text: withinFreeLook
        ? `Day ${freeLookDays} of the thirty-day free-look window: the policy can still be returned and the premium refunded, less the costs the rules allow, which is the remedy for a policy sold on a misleading description.`
        : `Day ${freeLookDays} — the free-look window has closed. The remedies left are the grievance route and, for a health policy, portability to another insurer without losing the waiting periods already served.`,
    },
    {
      ok: gaveInsurerTime && ombudsmanWindowOpen,
      text: gaveInsurerTime && ombudsmanWindowOpen
        ? `The insurer has had its turn and ${monthsSinceRefusal} month(s) have passed since the refusal, so the ombudsman route is open: free, no lawyer needed, and an award the insurer must comply with — up to ${rupeesShort(awardCap)} of compensation.`
        : !ombudsmanWindowOpen
          ? `${monthsSinceRefusal} months have passed since the refusal. Complaints must reach the ombudsman within a year, so this route has closed.`
          : 'The insurer has not yet been given its chance to answer. That step comes first on every escalation ladder.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Verify the seller, then test the claim</h4>
          <div className="space-y-3">
            <Choice label="Insurer and agent licence checked" active={licenceChecked} onClick={() => setLicenceChecked((v) => !v)} />
            <div className="flex gap-2">
              <Choice label="Premium paid to the insurer" active={premiumChannel === 'insurer'} onClick={() => setPremiumChannel('insurer')} />
              <Choice label="Premium paid to an individual" active={premiumChannel === 'individual'} onClick={() => setPremiumChannel('individual')} />
            </div>
            <Slider label="Claim amount" value={claim} min={50_000} max={2_000_000} step={25_000} onChange={setClaim} />
            <Slider label="Hours to cashless authorisation" value={authorisationHours} min={0} max={24} step={1} onChange={setAuthorisationHours} format={(v) => `${v} hours`} />
            <Slider label="Hours to discharge authorisation" value={dischargeHours} min={0} max={24} step={1} onChange={setDischargeHours} format={(v) => `${v} hours`} />
            <Slider label="Days since the policy document arrived" value={freeLookDays} min={0} max={90} step={1} onChange={setFreeLookDays} format={(v) => `${v} days`} />
            <Slider label="Months since the insurer refused" value={monthsSinceRefusal} min={0} max={24} step={1} onChange={setMonthsSinceRefusal} format={(v) => `${v} months`} />
            <Choice label="The insurer has already been asked to reconsider" active={gaveInsurerTime} onClick={() => setGaveInsurerTime((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Claim" value={rupeesShort(claim)} />
              <Stat label="Authorisation" value={lateAuthorisation === 0 ? 'in time' : `+${lateAuthorisation}h`} tone={lateAuthorisation === 0 ? 'good' : 'bad'} />
              <Stat label="Free look" value={withinFreeLook ? 'open' : 'closed'} tone={withinFreeLook ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Cashless authorisation within 1 hour; discharge within 3 hours</li>
              <li>Free-look period: 30 days from the policy document</li>
              <li>Ombudsman: free, awards up to {rupeesShort(awardCap)}, complaint within a year</li>
              <li className="text-white">Escalation order: insurer, then regulator's grievance route, then the ombudsman</li>
              <li>Award compliance: the insurer must comply within the period the rules set</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Insurance is the one product in this level where the purchase decision is made before you know whether it was
        any good, and where the remedy arrives only if you kept the papers. Verification is therefore front-loaded:
        confirm the insurer exists on the register, confirm the person selling is licensed, and pay the insurer — never
        an individual. At claim time the rules are specific and worth knowing in advance: cashless authorisation within
        an hour, discharge authorisation within three, and, where the claim is refused, a free escalation to the
        ombudsman whose awards insurers must comply with and where compensation can reach a substantial ceiling. The
        free-look window is the shortest-lived of those rights, at thirty days, and it is the only one that undoes a
        purchase rather than fighting it.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-044 */

export function L5PensionSetup() {
  const [age, setAge] = useState(32)
  const [own, setOwn] = useState(10_000)
  const [employer, setEmployer] = useState(8_000)
  const [equity, setEquity] = useState(60)
  const [lumpSumShare, setLumpSumShare] = useState(60)
  const [annuityRate, setAnnuityRate] = useState(6)
  const [basicPay, setBasicPay] = useState(60_000)

  const years = Math.max(0, 60 - age)
  const months = years * 12
  const monthly = own + employer
  const r = 0.1 / 12
  const corpus = (monthly * (Math.pow(1 + r, months) - 1)) / r
  const annuityShare = 100 - lumpSumShare
  const lumpSum = corpus * (lumpSumShare / 100)
  const annuityCorpus = corpus * (annuityShare / 100)
  const monthlyAnnuity = (annuityCorpus * (annuityRate / 100)) / 12
  const employerWithinCap = employer <= basicPay * 0.14
  const ownDeduction = Math.min(50_000, own * 12)
  const taxOnAnnuity = monthlyAnnuity * 12

  const checks = [
    {
      ok: annuityShare >= 20,
      text: annuityShare >= 20
        ? `An annuity share of ${annuityShare}% is inside the rules: at exit up to 80% may be taken as a lump sum, with at least 20% used to buy an annuity. The lump sum is exempt; the annuity is taxed as it arrives.`
        : `An annuity share of ${annuityShare}% is below the minimum. At least 20% of the corpus has to buy an annuity, whatever the rest of the plan says.`,
    },
    {
      ok: employerWithinCap,
      text: employerWithinCap
        ? `The employer contribution of ${rupees(employer)} is within the 14% of basic pay allowed as a deduction in the current regime — the most valuable pension relief still available to a salaried person.`
        : `An employer contribution of ${rupees(employer)} exceeds 14% of basic pay of ${rupees(basicPay)}, so the excess does not get the deduction.`,
    },
    {
      ok: equity <= 75 || years >= 15,
      text: `An equity allocation of ${equity}% is available under the current investment choices, including a full-equity option for those who want it. It also means the corpus at sixty is a market outcome, not a promised figure.`,
    },
    {
      ok: ownDeduction > 0,
      text: `Own contributions attract an additional deduction of up to ₹50,000, available only under the old regime: here that is worth ${rupees(ownDeduction)} a year. Whether it helps depends on which regime you are in.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Open it, fund it, and plan the exit</h4>
          <div className="space-y-3">
            <Slider label="Your age" value={age} min={22} max={55} step={1} onChange={setAge} format={(v) => `${v}`} />
            <Slider label="Your monthly contribution" value={own} min={500} max={100_000} step={500} onChange={setOwn} />
            <Slider label="Employer contribution" value={employer} min={0} max={50_000} step={500} onChange={setEmployer} />
            <Slider label="Basic pay" value={basicPay} min={20_000} max={300_000} step={5_000} onChange={setBasicPay} />
            <Slider label="Equity share" value={equity} min={0} max={100} step={5} onChange={setEquity} format={(v) => `${v}%`} />
            <Slider label="Taken as a lump sum at exit" value={lumpSumShare} min={0} max={80} step={5} onChange={setLumpSumShare} format={(v) => `${v}%`} />
            <Slider label="Annuity rate offered" value={annuityRate} min={4} max={9} step={0.25} onChange={setAnnuityRate} format={(v) => `${v.toFixed(2)}%`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Corpus at 60" value={rupeesShort(corpus)} tone="good" />
              <Stat label="Lump sum" value={rupeesShort(lumpSum)} />
              <Stat label="Monthly annuity" value={rupees(monthlyAnnuity)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Contribution a month: {rupees(monthly)}</li>
              <li>Annuity corpus: {rupees(annuityCorpus)} at {(annuityRate).toFixed(2)}%</li>
              <li>Lump sum exempt, annuity taxed as received</li>
              <li className="text-white">Annuity income taxed each year: about {rupees(taxOnAnnuity)}</li>
              <li>Employer deduction ceiling: 14% of basic pay = {rupees(basicPay * 0.14)}</li>
              <li>Own-contribution deduction available: {rupees(ownDeduction)} a year, old regime only</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A pension account is a structure rather than a product: a regulator that sets the rules, a trust that holds the
        assets apart from the fund managers, a recordkeeper that owns your account, managers whose funds you allocate
        between, and annuity providers for the part that must become income. Knowing which of those you can change is
        the practical content of the chapter: you choose the managers and the mix, you cannot choose the recordkeeper,
        and you cannot hold the assets yourself — that separation is the protection. The exit is where the arithmetic
        bites. Up to 80% may come out as a lump sum and is exempt, at least 20% must buy an annuity and is taxed as it
        arrives, and the annuity is the only part of the plan that cannot be outlived.
      </Debrief>
    </div>
  )
}
/* ------------------------------------------------------------------ l5-045 */

export function L5BankPicker() {
  const [rows, setRows] = useState([
    { name: 'Full-service bank', balance: 900_000, freeTxns: 6, minimumBalance: 10_000 },
    { name: 'Small finance bank', balance: 500_000, freeTxns: 4, minimumBalance: 2_000 },
    { name: 'Co-operative bank', balance: 420_000, freeTxns: 3, minimumBalance: 1_000 },
    { name: 'Payments bank', balance: 200_000, freeTxns: 5, minimumBalance: 0 },
  ])
  const [withdrawals, setWithdrawals] = useState(14)
  const [chargesKnown, setChargesKnown] = useState(false)

  const total = rows.reduce((s, r) => s + r.balance, 0)
  const insured = rows.reduce((s, r) => s + Math.min(r.balance, 500_000), 0)
  const gap = rows.filter((r) => r.balance > 500_000)
  const extraWithdrawals = rows.reduce((s, r) => s + Math.max(0, withdrawals - r.freeTxns), 0)
  const overCeiling = rows.filter((r, i) => i === rows.length - 1 && r.balance > 200_000)
  const penalty = rows.reduce((s, r) => {
    const shortfall = r.balance < r.minimumBalance ? r.minimumBalance - r.balance : 0
    return s + Math.max(0, shortfall * 0.06 + shortfall * 0.05 * 12)
  }, 0)
  const txnCost = extraWithdrawals * 21
  const spread = gap.length === 0

  const checks = [
    {
      ok: spread,
      text: spread
        ? 'Every account is inside the ₹5 lakh per-depositor-per-bank limit, and the limits add up across banks rather than across accounts in one bank.'
        : `${gap.map((g) => g.name).join(', ')} hold more than the insured amount. Two accounts in one bank share one ₹5 lakh limit; a second bank gets its own.`,
    },
    {
      ok: overCeiling.length === 0,
      text: overCeiling.length === 0
        ? 'No account sits where a product ceiling applies.'
        : `The payments bank account holds ${rupees(overCeiling[0].balance)}. A payments bank may hold at most ₹2 lakh per customer, and that balance cannot be used for lending — the ceiling is a condition of its licence, not a service limitation.`,
    },
    {
      ok: extraWithdrawals === 0,
      text: extraWithdrawals === 0
        ? `With ${withdrawals} withdrawals a month, every account stays inside its free-transaction allowance, so no per-transaction charge applies.`
        : `${extraWithdrawals} withdrawal(s) a month fall outside the free allowances, costing about ${rupees(txnCost)} a year at typical charges.`,
    },
    {
      ok: chargesKnown && penalty === 0,
      text: !chargesKnown
        ? 'The schedule of charges has not been read. It is published by every bank and is where minimum-balance penalties and free-transaction rules actually live.'
        : penalty === 0
          ? 'Minimum balances are met, so no penalty accrues. A penalty on a shortfall is the most avoidable charge in retail banking.'
          : `Minimum-balance shortfalls cost about ${rupees(penalty)} a year across accounts. Moving to an account whose requirement fits your balance is free and immediate.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Compare banks on what you use</h4>
          <div className="space-y-3">
            {rows.map((r, i) => (
              <Slider
                key={r.name}
                label={`${r.name} balance`}
                value={r.balance}
                min={0}
                max={1_500_000}
                step={10_000}
                onChange={(v) => setRows((prev) => prev.map((x, j) => (j === i ? { ...x, balance: v } : x)))}
              />
            ))}
            <Slider label="Cash withdrawals a month" value={withdrawals} min={0} max={30} step={1} onChange={setWithdrawals} format={(v) => `${v}`} />
            <Choice label="Schedule of charges read" active={chargesKnown} onClick={() => setChargesKnown((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Total deposits" value={rupeesShort(total)} />
              <Stat label="Insured" value={rupeesShort(insured)} tone="good" />
              <Stat label="Above the limit" value={rupeesShort(total - insured)} tone={total === insured ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Cover: ₹5 lakh per depositor per bank, principal and interest together</li>
              <li>Banks in the plot: {rows.length}, so {rupeesShort(rows.length * 500_000)} of cover is available in total</li>
              <li>Charges outside free allowances: {rupeesShort(txnCost)} a year</li>
              <li>Minimum-balance penalties: {rupeesShort(penalty)} a year</li>
              <li className="text-white">A complaint goes to the bank first and then to the single-window banking ombudsman</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Banks differ in three ways that matter: what happens if one fails, what it charges to hold your money, and what
        it will do when something goes wrong. The first is answered by the insurance limit — ₹5 lakh per depositor per
        bank, counted per bank rather than per account, which makes spreading deposits a genuine and costless risk
        control. The second is answered by the schedule of charges, where the small print about minimum balances and
        free transactions decides real annual cost. The third has a single route now: the bank first, then the
        ombudsman, whose coverage extends across banks, lenders and payment operators. Deposits at a payments bank sit
        under their own low ceiling, because a licence to hold balances is not the same as a licence to lend them.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-046 */

export function L5NbfcCheck() {
  const [amount, setAmount] = useState(600_000)
  const [rate, setRate] = useState(16)
  const [fee, setFee] = useState(3)
  const [years, setYears] = useState(3)
  const [bankRate, setBankRate] = useState(11)
  const [registered, setRegistered] = useState(true)
  const [takesDeposits, setTakesDeposits] = useState(false)
  const [namesLender, setNamesLender] = useState(true)
  const [secured, setSecured] = useState(false)

  const emi = (p: number, annual: number) => {
    const r = annual / 1200
    const n = Math.max(1, years * 12)
    return r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  }
  const feeAmount = amount * (fee / 100)
  const financed = amount + feeAmount
  const emiNbfc = emi(financed, rate)
  const emiBank = emi(amount, bankRate)
  const totalNbfc = emiNbfc * years * 12
  const totalBank = emiBank * years * 12
  const extra = totalNbfc - totalBank
  const advertised = emi(amount, rate) * years * 12 - amount
  const real = totalNbfc - amount

  const checks = [
    {
      ok: registered && namesLender,
      text: !registered
        ? 'The lender does not appear in the register of non-bank financial companies. Nothing below this line matters: an unregistered lender has no regulator to appeal to and no rulebook to be held to.'
        : !namesLender
          ? 'The app does not name the lender behind it. The app is the agent, the registered entity is the lender, and every right you have runs against the registered entity.'
          : 'The lender is on the register and the app names it, which is the first thing a borrower should check and the easiest to skip.',
    },
    {
      ok: !takesDeposits,
      text: takesDeposits
        ? 'A non-bank lender may not accept demand deposits, and only a small number may accept term deposits at all. Money placed with one is not deposit-insured, however familiar the paperwork looks.'
        : 'The lender takes no deposits as well as lending. Deposit insurance applies to banks only, so a deposit with a non-bank lender would have been uncovered.',
    },
    {
      ok: extra <= 0,
      text: extra <= 0
        ? `At ${rate}% with a ${fee}% fee, this loan costs less than a bank loan at ${bankRate}%. Compare the total repaid, not the quoted rate.`
        : `The fee of ${rupees(feeAmount)} is financed and adds ${rupees(extra)} over the term compared with a bank loan at ${bankRate}%. That gap is the price of convenience, and it is worth naming.`,
    },
    {
      ok: secured || rate <= 14,
      text: secured
        ? 'The loan is against an asset, which usually lowers the rate and defines what the lender may take if you stop paying.'
        : rate <= 14
          ? 'The rate is in the range where an unsecured non-bank loan competes with a bank loan on convenience rather than on price.'
          : `At ${rate}% unsecured, the whole cost sits in the rate. Compare the same amount with a bank or, in a crunch, against a deposit: borrowing against your own money is usually cheaper than borrowing against your income.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Cost a non-bank loan honestly</h4>
          <div className="space-y-3">
            <Slider label="Loan amount" value={amount} min={100_000} max={3_000_000} step={50_000} onChange={setAmount} />
            <Slider label="Quoted rate" value={rate} min={8} max={30} step={0.5} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Processing fee" value={fee} min={0} max={6} step={0.25} onChange={setFee} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Tenure" value={years} min={1} max={7} step={1} onChange={setYears} format={(v) => `${v} years`} />
            <Slider label="Bank rate for the same loan" value={bankRate} min={8} max={20} step={0.5} onChange={setBankRate} format={(v) => `${v.toFixed(1)}%`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="On the register" active={registered} onClick={() => setRegistered((v) => !v)} />
              <Choice label="Accepts deposits" active={takesDeposits} onClick={() => setTakesDeposits((v) => !v)} />
              <Choice label="App names the lender" active={namesLender} onClick={() => setNamesLender((v) => !v)} />
              <Choice label="Loan is secured" active={secured} onClick={() => setSecured((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Monthly payment" value={rupees(emiNbfc)} />
              <Stat label="Bank would be" value={rupees(emiBank)} tone="good" />
              <Stat label="Extra over the term" value={rupees(extra)} tone={extra <= 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Fee financed up front: {rupees(feeAmount)}</li>
              <li>Total repaid: {rupees(totalNbfc)} against {rupees(totalBank)} at a bank</li>
              <li>The rate alone would have cost {rupees(advertised)} in interest; the fee makes it {rupees(real)}</li>
              <li>Grievance: the lender first, then the banking ombudsman, which covers these lenders</li>
              <li className="text-white">Deposit insurance does not apply here, and there is no recourse to a will</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A non-bank lender is a normal, regulated business — but it is regulated as a lender, not as a bank. It cannot
        accept demand deposits; only a handful may take term deposits, and even then the money is not covered by deposit
        insurance. So the comparison to make is not "bank or non-bank" but "what does this loan cost, in total, against
        the alternative", with the fee, the rate and the tenure all loaded in. Two checks take minutes and settle most
        of the risk: whether the lender is on the register, and whether the app names it. If it does not, the name you
        would complain against does not exist, and the ombudsman route that covers these lenders has nobody to hear
        about.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-047 */

export function L5InsurerScorecard() {
  const [solvency, setSolvency] = useState(1.8)
  const [settlementRatio, setSettlementRatio] = useState(97)
  const [complaints, setComplaints] = useState(12)
  const [hospitals, setHospitals] = useState(6_000)
  const [premium, setPremium] = useState(24_000)
  const [bancassurance, setBancassurance] = useState(false)

  const solvencyScore = Math.max(0, Math.min(1, (solvency - 1.5) / 0.7))
  const settlementScore = Math.max(0, Math.min(1, (settlementRatio - 90) / 9))
  const serviceScore = Math.max(0, Math.min(1, 1 - complaints / 40))
  const networkScore = Math.max(0, Math.min(1, hospitals / 9_000))
  const total = solvencyScore + settlementScore + serviceScore + networkScore
  const verdict = total >= 3.4 ? 'strong on all four' : total >= 2.5 ? 'acceptable, with one figure to watch' : 'check the weak figure before buying'
  const belowFloor = solvency < 1.5

  const checks = [
    {
      ok: !belowFloor,
      text: belowFloor
        ? `A solvency ratio of ${solvency.toFixed(2)} is below the 150% level insurers are required to stay above. Regulatory records and the annual report are where this figure is disclosed.`
        : `A solvency ratio of ${solvency.toFixed(2)} × means assets of ${solvency.toFixed(2)} for every 1 of liabilities, above the 150% level insurers are required to hold. It is a measure of the firm's balance sheet, not a promise that a claim will be paid smoothly.`,
    },
    {
      ok: settlementRatio >= 95,
      text: settlementRatio >= 95
        ? `A settlement ratio of ${settlementRatio}% says most claims are paid, and says nothing about how many are paid only after a fight. Pair it with the complaint figure, which is measured per ten thousand claims.`
        : `A settlement ratio of ${settlementRatio}% is on the low side for the industry, so read the repudiation and complaint numbers behind it rather than the headline.`,
    },
    {
      ok: complaints <= 25,
      text: complaints <= 25
        ? `${complaints} complaints per ten thousand claims is a reasonable service record. This is the figure that catches insurers whose settlement ratio looks fine and whose claimants do not.`
        : `${complaints} complaints per ten thousand claims is a heavy service load: the insurer pays, but apparently not smoothly.`,
    },
    {
      ok: !bancassurance,
      text: bancassurance
        ? 'A policy sold through a bank earns the bank a commission on the premium, and the person at the counter is usually not comparing insurers. The figures above decide the choice; the counter does not.'
        : 'No commission chain sits between you and the insurer here, so the figures above are the whole decision.',
    },
    {
      ok: networkScore >= 0.5 && premium > 0,
      text: `Network of ${hospitals.toLocaleString('en-IN')} hospitals against a premium of ${rupees(premium)} a year: the network matters only where you live and are treated, and the premium only in relation to cover, not on its own.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Judge the insurer on published figures</h4>
          <div className="space-y-3">
            <Slider label="Solvency ratio" value={solvency} min={1.0} max={2.5} step={0.05} onChange={setSolvency} format={(v) => `${v.toFixed(2)} ×`} />
            <Slider label="Claim settlement ratio" value={settlementRatio} min={85} max={100} step={1} onChange={setSettlementRatio} format={(v) => `${v}%`} />
            <Slider label="Complaints per 10,000 claims" value={complaints} min={0} max={60} step={1} onChange={setComplaints} format={(v) => `${v}`} />
            <Slider label="Network hospitals" value={hospitals} min={1_000} max={12_000} step={250} onChange={setHospitals} format={(v) => v.toLocaleString('en-IN')} />
            <Slider label="Annual premium" value={premium} min={6_000} max={90_000} step={1_000} onChange={setPremium} />
            <Choice label="Sold through a bank counter" active={bancassurance} onClick={() => setBancassurance((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Score" value={`${total.toFixed(2)}/4`} tone={total >= 2.5 ? 'good' : 'bad'} />
              <Stat label="Solvency floor" value={belowFloor ? 'breached' : 'met'} tone={belowFloor ? 'bad' : 'good'} />
              <Stat label="Premium" value={rupeesShort(premium)} />
            </div>
            <p className="mt-2 text-xs text-ink-300">Verdict: {verdict}.</p>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Solvency: assets against liabilities, required to stay above 150%</li>
              <li>Settlement ratio: policies settled as a share of claims; the complaint figure says how</li>
              <li>Complaints per claim: the cleaner comparison between insurers</li>
              <li className="text-white">All four figures are published annually; the sales brochure usually shows one</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        An insurance company is judged on four numbers, and the order matters. Solvency comes first and is a
        requirement rather than a selling point: the regulator requires insurers to hold assets above a set proportion
        of liabilities, and a firm below that level is a supervisory problem, not a discount. The claim settlement ratio
        comes second, and only in company: a high ratio with a heavy complaint load means claims are paid after
        friction. Complaints per claim is the cleanest comparison because it is normalised, and network size matters
        only where you actually live. The distributor's incentives sit outside all four — a policy sold across a bank
        counter earns the bank a commission, and nothing about that counter compares insurers for you.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-048 */

export function L5AmcDiligence() {
  const [aum, setAum] = useState(5_000_000_000)
  const [ter, setTer] = useState(1.3)
  const [turnover, setTurnover] = useState(45)
  const [tenure, setTenure] = useState(4)
  const [schemeAge, setSchemeAge] = useState(7)
  const [investment, setInvestment] = useState(500_000)

  const aumCrore = aum / 10_000_000
  const managerRevenue = aum * (ter / 100)
  const annualCost = investment * (ter / 100)
  const twentyYearCost = annualCost * 20
  const growth = 0.11
  const withFee = investment * Math.pow(1 + growth - ter / 100, 20)
  const withoutFee = investment * Math.pow(1 + growth, 20)
  const feeDrag = withoutFee - withFee
  const independent = schemeAge >= 3 && tenure >= 3
  const styleStable = turnover <= 60
  const bigEnough = aumCrore >= 300

  const checks = [
    {
      ok: true,
      text: `The asset manager earns ${rupeesShort(managerRevenue)} a year on this scheme at a ${ter.toFixed(2)}% expense ratio, before any performance fee. Its revenue rises with assets, not with your returns — which is a fact about incentives, not misconduct.`,
    },
    {
      ok: feeDrag < withoutFee * 0.25,
      text: `On ${rupees(investment)} at 11% assumed growth, a ${ter.toFixed(2)}% ratio costs ${rupeesShort(feeDrag)} over twenty years. The fee is charged on the whole balance every year, so it compounds against you exactly as returns compound for you.`,
    },
    {
      ok: independent,
      text: independent
        ? `The manager has run the scheme ${tenure} years and the scheme is ${schemeAge} years old, so there is a record to read rather than a record to imagine.`
        : `Tenure of ${tenure} years against a scheme age of ${schemeAge} years means the results were built by somebody else. A track record travels with the scheme, not with the person narrating it.`,
    },
    {
      ok: styleStable,
      text: styleStable
        ? `Portfolio turnover of ${turnover}% is moderate, which keeps trading costs inside the portfolio from quietly adding to the expense ratio you can see.`
        : `Turnover of ${turnover}% is high. Trading costs come out of the portfolio before the expense ratio is even calculated, so the visible fee understates the real cost.`,
    },
    {
      ok: bigEnough && schemeAge >= 3,
      text: bigEnough
        ? `At ${aumCrore.toFixed(0)} crore the scheme is large enough to survive on its own economics — a point worth checking, because small schemes are where mergers, changed mandates and quiet fee rises happen.`
        : `At ${aumCrore.toFixed(0)} crore the scheme is small. Small schemes are the ones merged into others, and a merger changes the mandate under your feet.`,
    },
    {
      ok: true,
      text: 'The scheme\u2019s assets are held by a custodian and a trustee, not by the manager, so the manager\u2019s own financial trouble is not your financial trouble. Your risk is the portfolio, not the firm.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Read the manager like an owner</h4>
          <div className="space-y-3">
            <Slider label="Scheme size" value={aum} min={100_000_000} max={6_000_000_000} step={100_000_000} onChange={setAum} format={(v) => `₹${(v / 10_000_000).toFixed(0)} cr`} />
            <Slider label="Direct plan expense ratio" value={ter} min={0.2} max={2.5} step={0.05} onChange={setTer} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Portfolio turnover" value={turnover} min={5} max={150} step={5} onChange={setTurnover} format={(v) => `${v}%`} />
            <Slider label="Time this manager has run it" value={tenure} min={0} max={15} step={1} onChange={setTenure} format={(v) => `${v} years`} />
            <Slider label="Scheme age" value={schemeAge} min={0} max={25} step={1} onChange={setSchemeAge} format={(v) => `${v} years`} />
            <Slider label="Your investment" value={investment} min={50_000} max={5_000_000} step={50_000} onChange={setInvestment} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Manager's annual fee" value={rupeesShort(managerRevenue)} />
              <Stat label="Your fee, a year" value={rupees(annualCost)} />
              <Stat label="Fee drag in 20 years" value={rupeesShort(feeDrag)} tone="bad" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Twenty years of visible fees: {rupeesShort(twentyYearCost)}</li>
              <li>Portfolio after twenty years at 11%: {rupeesShort(withFee)} against {rupeesShort(withoutFee)} with no fee</li>
              <li>Manager’s revenue rises with assets under management, ours with returns earned</li>
              <li className="text-white">Assets are held by a custodian and a trustee, separate from the manager’s own balance sheet</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        An asset manager is a business whose revenue is a percentage of the money it manages, and reading it that way
        dissolves most of the confusion. Its income rises when assets grow and never falls when returns do, so the
        interests of the manager and the investor point in the same direction on size and in different directions on
        cost. Everything else follows from the structure: because the assets sit with a custodian and a trustee rather
        than on the manager's books, the manager's failure is not the scheme's failure — the risk in a fund is the
        portfolio it holds, not the firm that runs it. What is left to diligence is a short list: the expense ratio
        measured over decades rather than years, turnover that hides cost inside the portfolio, and a manager whose
        tenure is shorter than the record being shown to you.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-049 */

export function L5ExchangeRole() {
  const [tradeValue, setTradeValue] = useState(400_000)
  const [cycle, setCycle] = useState<'T+1' | 'T+0'>('T+1')
  const [brokerDefault, setBrokerDefault] = useState(false)
  const [sharesReceived, setSharesReceived] = useState(false)
  const [marketMove, setMarketMove] = useState(-8)
  const [tipLoss, setTipLoss] = useState(60_000)

  const days = cycle === 'T+1' ? 1 : 0
  const marketLoss = (tradeValue * marketMove) / 100
  const settlementRisk = brokerDefault && !sharesReceived
  const notCovered = marketLoss + tipLoss

  const checks = [
    {
      ok: true,
      text: `Your trade settles in ${days === 0 ? 'the same day under the optional same-day cycle, which runs for a limited set of shares' : 'one working day'}. From the moment it settles, the shares sit with your depository, not with the broker.`,
    },
    {
      ok: !settlementRisk,
      text: settlementRisk
        ? `If the broker fails before settlement, the clearing corporation still completes it: the seller is paid and you receive the shares. That guarantee is the whole point of a clearing house, and it is why the trade is safe while the broker may not be.`
        : 'Settlement is guaranteed through the clearing corporation, so a broker default between trade and settlement does not cost you the shares you bought.',
    },
    {
      ok: true,
      text: brokerDefault
        ? 'A failed broker may still owe you money or securities that the settlement guarantee does not reach. That shortfall is what the investor protection fund exists for: a capped claim, made through the exchange that ran the fund, and never a claim for a fall in price.'
        : 'If a broker fails and leaves a shortfall the settlement guarantee does not reach, the investor protection fund answers for it, up to a cap set by the regulator and claimed through the exchange.',
    },
    {
      ok: true,
      text: `What no exchange covers: a fall in price, a tip that went wrong, or a stop-loss you did not set. Here that is ${rupees(notCovered)} of loss, and none of it is a claim against anybody.`,
    },
    {
      ok: marketMove >= -20,
      text: `Circuit filters pause trading when a price moves beyond set bands, which slows a panic without stopping a decline. Your trade value of ${rupees(tradeValue)} is set by the market on the day, not protected at yesterday\u2019s price.`,
    },
    {
      ok: true,
      text: 'The exchange also polices the companies it lists — disclosure, surveillance and price bands — so an exchange-listed company means reporting obligations were met, not that the business is good.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">What is guaranteed, and what is not</h4>
          <div className="space-y-3">
            <Slider label="Trade value" value={tradeValue} min={50_000} max={2_000_000} step={25_000} onChange={setTradeValue} />
            <div className="flex gap-2">
              <Choice label="One-day settlement" active={cycle === 'T+1'} onClick={() => setCycle('T+1')} />
              <Choice label="Same-day settlement" active={cycle === 'T+0'} onClick={() => setCycle('T+0')} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Choice label="Broker fails before settlement" active={brokerDefault} onClick={() => setBrokerDefault((v) => !v)} />
              <Choice label="Shares already in your account" active={sharesReceived} onClick={() => setSharesReceived((v) => !v)} />
            </div>
            <Slider label="Price move after you buy" value={marketMove} min={-30} max={30} step={1} onChange={setMarketMove} format={(v) => `${v}%`} />
            <Slider label="Loss on advice taken from a tip" value={tipLoss} min={0} max={500_000} step={10_000} onChange={setTipLoss} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Settlement" value={cycle} />
              <Stat label="Settlement covers" value={brokerDefault ? rupeesShort(tradeValue) : '—'} tone={brokerDefault ? 'good' : 'bad'} />
              <Stat label="Loss nobody covers" value={rupeesShort(notCovered)} tone="bad" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Trade risk passes to the clearing corporation; the broker is not your counterparty to the settlement</li>
              <li>Investor protection fund: for shortfalls a broker leaves behind, within a regulatory cap — not for the market loss above</li>
              <li>Market loss of {rupees(marketLoss)} on this trade is yours, whichever way the price went</li>
              <li className="text-white">Price bands and surveillance reduce manipulation; they do not protect a price</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        An exchange is two businesses wearing one name. The first is a market: it matches buyers and sellers, and it
        guarantees that matched trades settle through a clearing corporation, so the person on the other side of your
        order does not have to be trusted and neither does your broker's balance sheet — within the settlement window.
        The second is a regulator of its members and listed companies: registration, disclosure, price bands,
        surveillance. What it does not do is carry your market risk. A price that fell, a tip that misled you, or a stop
        you did not place are losses with nobody to claim against, while the one case the system does cover — a broker
        whose failure leaves a genuine shortfall — is met by the investor protection fund, capped and claimed through
        the exchange.
      </Debrief>
    </div>
  )
}
