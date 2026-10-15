import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band four, batch 3 labs (chapters l5-091 to l5-100).
 *
 * Ten separate simulations, one per chapter:
 *   l5-job-loss-plan         the runway, the sources it draws on, and the staged plan
 *   l5-medical-claim-run     a hospitalisation through the cashless and the reimbursement route
 *   l5-crash-simulator       what a written plan does at each stage of a fall
 *   l5-recession-adjuster    fixed costs, income risk and the defensive adjustment
 *   l5-debt-triage           several debts sorted by rate and by consequence
 *   l5-fraud-response-drill  the golden hour, and the liability ladder that follows it
 *   l5-account-recovery      containment, recovery and the linked services people forget
 *   l5-identity-repair       a credit report with something on it, and the dispute that fixes it
 *   l5-scam-inbox            a set of offers, each judged on regulation, destination and hurry
 *   l5-guru-audit            five checks that score a teacher against a promoter
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: a member unemployed for more than a month may take a non-refundable
 * advance of up to 75% of the provident-fund balance under paragraph 68HH of the
 * EPF Scheme; ESIC unemployment relief under the Atal Beemit Vyakti Kalyan
 * Yojana pays 50% of average daily earnings for up to 90 days to an insured
 * person who loses employment; gratuity is exempt up to ₹20,00,000; IRDAI
 * requires a cashless authorisation decision within one hour and a final
 * authorisation for discharge within three hours, and after 60 months of
 * continuous coverage a health claim can no longer be contested except for
 * established fraud or a permanent exclusion; the exchange halts market-wide
 * trading at 10%, 15% and 20% either way; a customer's liability for an
 * unauthorised electronic transaction is zero if reported within three working
 * days, up to ₹25,000 (₹5,000 for an account with limited features) between four
 * and seven working days, and per the bank's policy after that; a secured
 * creditor's enforcement begins with a written demand giving 60 days under
 * section 13(2) of the SARFAESI Act, 2002; the RBI requires a free full credit
 * report once a year from each credit information company; and identity theft is
 * punishable under sections 66C and 66D of the Information Technology Act, 2000
 * with imprisonment up to three years and a fine up to ₹1,00,000. All amounts
 * and scenarios are illustrative.
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

const Choice = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
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

const Toggle = ({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) => (
  <Choice label={`${on ? '✓ ' : ''}${label}`} active={on} onClick={onClick} />
)

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/* ------------------------------------------------------------------ l5-091 */

export function L5JobLossPlan() {
  const [essentials, setEssentials] = useState(55_000)
  const [loanPayments, setLoanPayments] = useState(30_000)
  const [salary, setSalary] = useState(120_000)
  const [emergency, setEmergency] = useState(800_000)
  const [noticeMonths, setNoticeMonths] = useState(2)
  const [severanceMonths, setSeveranceMonths] = useState(2)
  const [pfBalance, setPfBalance] = useState(1_200_000)
  const [usePf, setUsePf] = useState(false)
  const [esicInsured, setEsicInsured] = useState(false)
  const [coverKept, setCoverKept] = useState(false)
  const [cut, setCut] = useState<'subscriptions' | 'cover' | 'sip' | 'equity'>('subscriptions')

  const monthlyNeed = essentials + loanPayments
  const pfAdvance = usePf ? pfBalance * 0.75 : 0
  const relief = esicInsured ? salary * 0.5 * 3 : 0
  const available = emergency + salary * (noticeMonths + severanceMonths) + pfAdvance + relief
  const runway = monthlyNeed ? available / monthlyNeed : 0
  const sixMonths = monthlyNeed * 6
  const cuts = {
    subscriptions: { label: 'Subscriptions, memberships and the optional spends', verdict: 'First, and today', right: true },
    cover: { label: 'The health cover', verdict: 'Never first: an uninsured hospitalisation is what turns a wobble into a crisis', right: false },
    sip: { label: 'New monthly investments', verdict: 'Pause the new ones, and keep what is already invested', right: false },
    equity: { label: 'Sell the equity funds', verdict: 'Last, and only after the liquidity above it is used', right: false },
  } as const
  const chosen = cuts[cut]
  const staged = [
    { phase: 'Months 1 to 3', spend: monthlyNeed + 15_000, note: 'A short search, funded on the full budget' },
    { phase: 'Months 4 to 6', spend: monthlyNeed, note: 'Essentials and every loan payment, nothing else' },
    { phase: 'Beyond month 6', spend: monthlyNeed * 0.85, note: 'The staged plan, not the panic plan' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Essentials a month" value={essentials} min={15_000} max={250_000} step={5_000} onChange={setEssentials} />
            <Slider label="Loan payments a month" value={loanPayments} min={0} max={250_000} step={5_000} onChange={setLoanPayments} />
            <Slider label="Salary a month" value={salary} min={20_000} max={600_000} step={5_000} onChange={setSalary} />
            <Slider label="Emergency fund" value={emergency} min={0} max={3_000_000} step={25_000} onChange={setEmergency} />
            <Slider label="Paid notice, in months" value={noticeMonths} min={0} max={6} step={1} onChange={setNoticeMonths} format={(v) => v + ' months'} />
            <Slider label="Severance and gratuity, in months of pay" value={severanceMonths} min={0} max={6} step={1} onChange={setSeveranceMonths} format={(v) => v + ' months'} />
            <Slider label="Provident fund balance" value={pfBalance} min={0} max={5_000_000} step={50_000} onChange={setPfBalance} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Toggle label="Drawn on the 75% PF advance" on={usePf} onClick={() => setUsePf((v) => !v)} />
            <Toggle label="Covered by ESIC" on={esicInsured} onClick={() => setEsicInsured((v) => !v)} />
            <Toggle label="Health cover kept alive" on={coverKept} onClick={() => setCoverKept((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Runway at this spending" value={runway.toFixed(1) + ' months'} tone={runway >= 6 ? 'good' : 'bad'} />
            <Stat label="Monthly need" value={rupeesShort(monthlyNeed)} tone="neutral" />
            <Stat label="Money you can reach" value={rupeesShort(available)} tone={available >= sixMonths ? 'good' : 'bad'} />
            <Stat label="Six months needs" value={rupeesShort(sixMonths)} tone="neutral" />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The staged spending plan</p>
            <div className="space-y-1.5">
              {staged.map((s) => (
                <div key={s.phase} className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-ink-300">
                    <span className="text-white">{s.phase}</span> — {s.note}
                  </span>
                  <span className="shrink-0 font-mono text-brand-300">{rupeesShort(s.spend)}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What gets cut first</p>
            <div className="grid gap-2">
              <Choice label="Subscriptions and the optional spends" active={cut === 'subscriptions'} onClick={() => setCut('subscriptions')} />
              <Choice label="The health cover" active={cut === 'cover'} onClick={() => setCut('cover')} />
              <Choice label="New monthly investments" active={cut === 'sip'} onClick={() => setCut('sip')} />
              <Choice label="Sell the equity funds" active={cut === 'equity'} onClick={() => setCut('equity')} />
            </div>
            <p className="mt-2 text-xs text-ink-300">
              <strong className={chosen.right ? 'text-brand-300' : 'text-rose-300'}>{chosen.verdict}.</strong> {chosen.label}.
            </p>
          </Panel>

          <Debrief title="What actually buys time">
            The runway is built from four sources, and only the first is really yours: the emergency fund
            ({rupeesShort(emergency)}), paid notice and severance ({rupeesShort(salary * (noticeMonths + severanceMonths))}),
            a provident-fund advance of up to 75% if you are eligible, and unemployment relief where the establishment is
            covered by ESIC. At {rupeesShort(monthlyNeed)} a month that lasts {runway.toFixed(1)} months
            {runway >= 6 ? ', which is enough time to search rather than accept.' : ', which is a search under pressure.'}
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The first fortnight</p>
            <ul className="space-y-1.5">
              <Check ok={usePf}>The provident-fund advance is known: up to 75% after a month unemployed</Check>
              <Check ok={esicInsured}>Unemployment relief has been checked, where ESIC covers the employer</Check>
              <Check ok={coverKept}>Health cover continues, either through the employer or bought separately</Check>
              <Check ok={loanPayments > 0}>The lenders are told before the due date, not after it</Check>
              <Check ok={runway >= 6}>The runway is at least six months at essentials plus loans</Check>
              <Check ok={chosen.right}>The first cut is the optional spend, not the insurance</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-092 */

export function L5MedicalClaimRun() {
  const [bill, setBill] = useState(450_000)
  const [sumInsured, setSumInsured] = useState(500_000)
  const [roomRent, setRoomRent] = useState(8_000)
  const [roomLimit, setRoomLimit] = useState(5_000)
  const [route, setRoute] = useState<'cashless' | 'reimbursement'>('cashless')
  const [preAuth, setPreAuth] = useState(true)
  const [documents, setDocuments] = useState(false)
  const [outOfNetwork, setOutOfNetwork] = useState(false)

  const network = route === 'cashless' && !outOfNetwork
  const consumables = bill * 0.08
  // A room above the eligible limit is settled proportionately, which is the
  // deduction most people meet for the first time on a discharge summary.
  const roomFactor = roomRent > roomLimit ? roomLimit / roomRent : 1
  const payable = Math.max(0, (bill - consumables) * roomFactor)
  const payout = Math.min(sumInsured, network && !preAuth ? payable * 0.7 : payable)
  const upfront = network && preAuth ? Math.min(bill - payout, consumables) : bill
  const shortfall = bill - payout
  const documentsNeeded = [
    'The discharge summary and the final bill',
    'Every investigation report, with the prescription that ordered it',
    'The payment receipts, if you paid anything',
    'The pre-authorisation letter, if there was one',
    'The claim form, signed, with the policy number accurate',
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Which route are you on</p>
          <div className="grid grid-cols-2 gap-2">
            <Choice label="Cashless, in a network hospital" active={route === 'cashless'} onClick={() => setRoute('cashless')} />
            <Choice label="Reimbursement, anywhere else" active={route === 'reimbursement'} onClick={() => setRoute('reimbursement')} />
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Hospital bill" value={bill} min={50_000} max={3_000_000} step={25_000} onChange={setBill} />
            <Slider label="Sum insured" value={sumInsured} min={100_000} max={5_000_000} step={100_000} onChange={setSumInsured} />
            <Slider label="Room rent a day" value={roomRent} min={1_000} max={40_000} step={500} onChange={setRoomRent} />
            <Slider label="Room-rent limit in the policy" value={roomLimit} min={1_000} max={40_000} step={500} onChange={setRoomLimit} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Toggle label="Pre-authorisation obtained" on={preAuth} onClick={() => setPreAuth((v) => !v)} />
            <Toggle label="Every document collected" on={documents} onClick={() => setDocuments((v) => !v)} />
            <Toggle label="Hospital is outside the network" on={outOfNetwork} onClick={() => setOutOfNetwork((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Insurer pays" value={rupeesShort(payout)} tone={payout >= payable ? 'good' : 'bad'} />
            <Stat label="You pay" value={rupeesShort(shortfall)} tone={shortfall > 0 ? 'bad' : 'best'} />
            <Stat label="Cash you need upfront" value={rupeesShort(upfront)} tone={upfront > 0 ? 'bad' : 'best'} />
            <Stat label="Ratio of the bill settled" value={(bill ? (payout / bill) * 100 : 0).toFixed(0) + '%'} tone="neutral" />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The clock the insurer runs on</p>
            <ul className="space-y-1.5">
              <Check ok={network}>Cashless authorisation is decided within one hour of the request</Check>
              <Check ok={network}>Final authorisation for discharge comes within three hours</Check>
              <Check ok={documents}>The claim clock runs from the last document, not from the admission</Check>
              <Check ok={roomRent <= roomLimit || roomLimit === 0}>
                The room is inside the eligible limit, so nothing is settled proportionately
              </Check>
              <Check ok={sumInsured > bill}>The sum insured is above the bill, so nothing exceeds the cover</Check>
            </ul>
          </Panel>

          <Debrief title="Why the upfront number matters">
            {network
              ? 'On the cashless route the insurer and the hospital settle between themselves, and the only cash you need is the part of the bill the policy does not cover — ' + rupees(upfront) + ' here.'
              : 'On the reimbursement route you pay the whole bill first and claim it back, so the money has to exist before the treatment does.'}{' '}
            The shortfall of {rupees(shortfall)} is the part of this bill that your own money absorbs
            {roomRent > roomLimit
              ? ', and much of it comes from the room you chose: above the eligible limit, the whole bill is settled in that proportion.'
              : ', which is the consumables and anything outside the policy.'}
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What the claim file needs</p>
            <ul className="space-y-1">
              {documentsNeeded.map((d) => (
                <li key={d} className="text-xs text-ink-300">
                  · {d}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-ink-300">
              <strong className="text-white">Read the policy before the admission.</strong> After 60 months of
              continuous coverage a claim can no longer be contested except for established fraud or a permanent
              exclusion — which is exactly why the first years, and the waiting periods, are the ones to understand.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-093 */

export function L5CrashSimulator() {
  const [portfolio, setPortfolio] = useState(2_500_000)
  const [equityPct, setEquityPct] = useState(70)
  const [safeMoney, setSafeMoney] = useState(600_000)
  const [dryPowder, setDryPowder] = useState(300_000)
  const [fall, setFall] = useState(-20)
  const [recovery, setRecovery] = useState(25)
  const [band, setBand] = useState(5)
  const [action, setAction] = useState<'nothing' | 'rebalance' | 'sell'>('rebalance')

  const equity = (portfolio * equityPct) / 100
  const debt = portfolio - equity
  const equityAfter = equity * (1 + fall / 100)
  const totalAfter = equityAfter + debt + safeMoney
  const targetEquity = (portfolio * equityPct) / 100
  const drift = equityAfter / (equityAfter + debt) - equityPct / 100
  const rebalanceBuy = Math.min(dryPowder, Math.max(0, targetEquity - equityAfter))
  const deployed = action === 'rebalance' ? rebalanceBuy : 0
  // What the same portfolio recovers to, depending on what was done in the fall.
  const recovered = (equityAfter + deployed) * (1 + recovery / 100) + (debt - deployed) + safeMoney
  // Selling moves the money to cash, where it earns a deposit rate instead.
  const cashReturn = 6
  const soldAndHeld = totalAfter * (1 + cashReturn / 100)
  const loss = portfolio + safeMoney - totalAfter
  const bandBreach = Math.abs(drift) * 100 >= band

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Invested portfolio" value={portfolio} min={100_000} max={50_000_000} step={100_000} onChange={setPortfolio} />
            <Slider
              label="Share in equity"
              value={equityPct}
              min={0}
              max={100}
              step={5}
              onChange={setEquityPct}
              format={(v) => v + '% of the portfolio'}
            />
            <Slider label="Safe money, outside the market" value={safeMoney} min={0} max={10_000_000} step={50_000} onChange={setSafeMoney} />
            <Slider label="Dry powder set aside for a fall" value={dryPowder} min={0} max={10_000_000} step={50_000} onChange={setDryPowder} />
            <Slider
              label="The market falls"
              value={fall}
              min={-50}
              max={0}
              step={5}
              onChange={setFall}
              format={(v) => v + '%'}
            />
            <Slider label="Rebalancing band" value={band} min={1} max={15} step={1} onChange={setBand} format={(v) => v + ' points'} />
            <Slider label="What the market does next year" value={recovery} min={-20} max={50} step={5} onChange={setRecovery} format={(v) => (v > 0 ? '+' : '') + v + '%'} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Portfolio after the fall" value={rupeesShort(totalAfter)} tone="bad" />
            <Stat label="Rupee loss on paper" value={rupeesShort(loss)} tone="bad" />
            <Stat label="Equity has drifted by" value={(drift * 100).toFixed(1) + ' points'} tone={bandBreach ? 'bad' : 'good'} />
            <Stat label="Rebalance step" value={rupeesShort(rebalanceBuy)} tone="neutral" />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What the plan says to do</p>
            <div className="grid grid-cols-3 gap-2">
              <Choice label="Do nothing" active={action === 'nothing'} onClick={() => setAction('nothing')} />
              <Choice label="Rebalance back to target" active={action === 'rebalance'} onClick={() => setAction('rebalance')} />
              <Choice label="Sell and wait" active={action === 'sell'} onClick={() => setAction('sell')} />
            </div>
            <p className="mt-2 text-xs text-ink-300">
              {action === 'sell' ? (
                <>
                  <strong className="text-rose-300">This is the decision that turns a fall into a loss.</strong> At{' '}
                  {fall}% the equity has already fallen, and selling converts an unrealised number into a realised one. If
                  the market returns {recovery}%, a portfolio that stayed invested and rebalanced is worth{' '}
                  {rupeesShort(recovered)} against {rupeesShort(soldAndHeld)} for one that moved to cash — a difference of{' '}
                  {rupeesShort(Math.abs(recovered - soldAndHeld))}.
                </>
              ) : action === 'rebalance' && bandBreach ? (
                <>
                  <strong className="text-brand-300">The band was breached, so this is the plan, not a reaction.</strong>{' '}
                  Equity has drifted {(Math.abs(drift) * 100).toFixed(1)} points away from target, so {rupeesShort(deployed)}{' '}
                  of the dry powder goes in — the only buying a fall is supposed to trigger.
                </>
              ) : (
                <>
                  <strong className="text-brand-300">Scheduled or not at all.</strong> Equity is within{' '}
                  {band} points of target, so the plan does nothing. Selling into a fall to feel better is a decision made
                  without a rule, and it is usually reversed in the wrong week.
                </>
              )}
            </p>
          </Panel>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The plan, in writing, before the fall</p>
            <ul className="space-y-1.5">
              <Check ok={safeMoney > 0}>The money needed within three years is not in equity at all</Check>
              <Check ok={dryPowder > 0}>A set amount is reserved for a fall, and written down in advance</Check>
              <Check ok={bandBreach || action === 'nothing'}>The rebalancing band decides when anything is done</Check>
              <Check ok={action !== 'sell'}>Nothing is sold because the market is falling</Check>
              <Check ok={equityPct > 0}>The allocation was chosen for the goal, not for the news</Check>
            </ul>
            <p className="mt-2 text-xs text-ink-400">
              The exchange halts market-wide trading at 10%, 15% and 20% either way. A halt is a pause for the
              machinery, not a signal for your plan.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-094 */

export function L5RecessionAdjuster() {
  const [income, setIncome] = useState(1_500_000)
  const [fixed, setFixed] = useState(65_000)
  const [variable, setVariable] = useState(40_000)
  const [emergency, setEmergency] = useState(600_000)
  const [payCut, setPayCut] = useState(20)
  const [cutPct, setCutPct] = useState(15)
  const [risk, setRisk] = useState<'stable' | 'variable' | 'single'>('variable')
  const [sip, setSip] = useState(20_000)

  const monthlyIncome = income / 12
  const fixedRatio = monthlyIncome ? fixed / monthlyIncome : 0
  const variableAfter = variable * (1 - cutPct / 100)
  const spend = fixed + variableAfter
  const surplus = monthlyIncome - spend
  const cover = spend ? emergency / spend : 0
  const incomeAfterCut = monthlyIncome * (1 - payCut / 100)
  const gap = Math.max(0, spend - incomeAfterCut)
  const target = risk === 'single' ? 12 : risk === 'variable' ? 9 : 6
  const cushion = emergency - spend * 6
  const defensive = risk === 'single' ? 40 : risk === 'variable' ? 55 : 65

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">How exposed is the income</p>
          <div className="grid gap-2">
            <Choice label="Salaried, and the sector is steady" active={risk === 'stable'} onClick={() => setRisk('stable')} />
            <Choice label="A variable component, or a cyclical sector" active={risk === 'variable'} onClick={() => setRisk('variable')} />
            <Choice label="One income in the house, and it is at risk" active={risk === 'single'} onClick={() => setRisk('single')} />
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Annual income" value={income} min={300_000} max={8_000_000} step={50_000} onChange={setIncome} />
            <Slider label="Fixed costs a month" value={fixed} min={10_000} max={300_000} step={5_000} onChange={setFixed} format={(v) => rupees(v) + ' a month'} />
            <Slider label="Variable spending a month" value={variable} min={5_000} max={300_000} step={5_000} onChange={setVariable} format={(v) => rupees(v) + ' a month'} />
            <Slider label="Emergency fund" value={emergency} min={0} max={5_000_000} step={25_000} onChange={setEmergency} />
            <Slider label="If income fell by" value={payCut} min={0} max={60} step={5} onChange={setPayCut} format={(v) => v + '%'} />
            <Slider label="Variable spending cut by" value={cutPct} min={0} max={60} step={5} onChange={setCutPct} format={(v) => v + '%'} />
            <Slider label="Monthly investment" value={sip} min={0} max={200_000} step={5_000} onChange={setSip} format={(v) => rupees(v) + ' a month'} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Fixed cost ratio" value={(fixedRatio * 100).toFixed(0) + '%'} tone={fixedRatio <= 0.5 ? 'good' : 'bad'} />
            <Stat label="Months of cover" value={cover.toFixed(1)} tone={cover >= target ? 'good' : 'bad'} />
            <Stat label={'If income falls ' + payCut + '%'} value={rupeesShort(gap) + ' a month'} tone={gap ? 'bad' : 'good'} />
            <Stat label="Cover the risk deserves" value={target + ' months'} tone="neutral" />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The adjustment, in order</p>
            <ul className="space-y-1.5">
              <Check ok={fixedRatio <= 0.5}>Fixed costs stay under half of monthly income</Check>
              <Check ok={cover >= target}>The emergency fund matches the risk in the income</Check>
              <Check ok={gap === 0}>Cutting variable spending closes the gap if pay is reduced</Check>
              <Check ok={sip > 0}>The monthly investment continues at a smaller amount rather than stopping</Check>
              <Check ok={cushion > 0 || emergency === 0}>The cushion is measured in months of spending, not in rupees</Check>
            </ul>
            <p className="mt-2 text-xs text-ink-400">
              Nothing here needs a forecast. A recession is a chain of events, and the two links a household controls are
              how much of its spending is fixed and how many months it can coast.
            </p>
          </Panel>

          <Debrief title="What to change, and what not to">
            With an income of {rupees(monthlyIncome)} a month and spending of {rupees(spend)}, the household saves{' '}
            {rupees(surplus)} a month and holds {cover.toFixed(1)} months of cover against the {target} months this income
            risk deserves. If pay fell {payCut}%, it would need to find {rupees(gap)} a month. The defensive share of
            about {defensive}% in growth assets is not a forecast of a recession; it is what the income risk alone
            justifies. What not to change: the SIP stops being new money before it is stopped altogether, and the long-term
            allocation is not re-arranged on the news.
          </Debrief>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-095 */

export function L5DebtTriage() {
  const [card, setCard] = useState(250_000)
  const [cardRate, setCardRate] = useState(42)
  const [personal, setPersonal] = useState(400_000)
  const [personalRate, setPersonalRate] = useState(15)
  const [vehicle, setVehicle] = useState(500_000)
  const [vehicleRate, setVehicleRate] = useState(10.5)
  const [home, setHome] = useState(3_500_000)
  const [homeRate, setHomeRate] = useState(8.5)
  const [extra, setExtra] = useState(15_000)
  const [method, setMethod] = useState<'avalanche' | 'snowball' | 'spread'>('avalanche')

  const debts = [
    { key: 'card', name: 'Credit card', balance: card, rate: cardRate, secured: false },
    { key: 'personal', name: 'Personal loan', balance: personal, rate: personalRate, secured: false },
    { key: 'vehicle', name: 'Vehicle loan', balance: vehicle, rate: vehicleRate, secured: true },
    { key: 'home', name: 'Home loan', balance: home, rate: homeRate, secured: true },
  ]
  const byRate = [...debts].sort((a, b) => b.rate - a.rate)
  const bySize = [...debts].sort((a, b) => a.balance - b.balance)
  const highest = byRate[0]
  const yearlyInterest = debts.reduce((sum, d) => sum + (d.balance * d.rate) / 100, 0)

  // Twelve months of paying the minimums plus the extra, aimed at one debt at a
  // time or spread evenly, so that the cost of spreading can be measured.
  const simulate = (order: string[], spreadEqually: boolean) => {
    const balances: Record<string, number> = {}
    debts.forEach((d) => (balances[d.key] = d.balance))
    let interest = 0
    for (let m = 0; m < 12; m++) {
      debts.forEach((d) => {
        const i = (balances[d.key] * d.rate) / 100 / 12
        interest += i
        balances[d.key] += i
      })
      let pot = extra
      if (spreadEqually) {
        const share = extra / debts.length
        debts.forEach((d) => {
          const pay = Math.min(balances[d.key], Math.max(0, d.balance * 0.01) + share)
          balances[d.key] -= pay
        })
        pot = 0
      } else {
        debts.forEach((d) => {
          const pay = Math.min(balances[d.key], Math.max(0, d.balance * 0.01))
          balances[d.key] -= pay
        })
      }
      for (const key of order) {
        if (pot <= 0) break
        const pay = Math.min(balances[key], pot)
        balances[key] -= pay
        pot -= pay
      }
    }
    return interest
  }
  const order = method === 'snowball' ? bySize.map((d) => d.key) : byRate.map((d) => d.key)
  const interestSpread = simulate(byRate.map((d) => d.key), true)
  const interestNow = method === 'spread' ? interestSpread : simulate(order, false)
  const saved = Math.max(0, interestSpread - interestNow)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Credit card balance" value={card} min={0} max={1_000_000} step={10_000} onChange={setCard} />
            <Slider label="Credit card rate" value={cardRate} min={18} max={48} step={1} onChange={setCardRate} format={(v) => v + '% a year'} />
            <Slider label="Personal loan balance" value={personal} min={0} max={2_000_000} step={10_000} onChange={setPersonal} />
            <Slider label="Personal loan rate" value={personalRate} min={9} max={24} step={0.5} onChange={setPersonalRate} format={(v) => v + '% a year'} />
            <Slider label="Vehicle loan balance" value={vehicle} min={0} max={2_000_000} step={10_000} onChange={setVehicle} />
            <Slider label="Vehicle loan rate" value={vehicleRate} min={8} max={18} step={0.5} onChange={setVehicleRate} format={(v) => v + '% a year'} />
            <Slider label="Home loan balance" value={home} min={0} max={20_000_000} step={100_000} onChange={setHome} />
            <Slider label="Home loan rate" value={homeRate} min={7} max={14} step={0.25} onChange={setHomeRate} format={(v) => v + '% a year'} />
            <Slider label="Extra you can pay every month" value={extra} min={0} max={100_000} step={1_000} onChange={setExtra} format={(v) => rupees(v) + ' a month'} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Total debt" value={rupeesShort(card + personal + vehicle + home)} tone="bad" />
            <Stat label="Interest a year at these rates" value={rupeesShort(yearlyInterest)} tone="bad" />
            <Stat label="Highest rate" value={highest.name + ', ' + highest.rate + '%'} tone="bad" />
            <Stat label="Interest saved in a year" value={rupeesShort(saved)} tone="good" />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The order you pay in</p>
            <div className="grid grid-cols-3 gap-2">
              <Choice label="Highest rate first" active={method === 'avalanche'} onClick={() => setMethod('avalanche')} />
              <Choice label="Smallest balance first" active={method === 'snowball'} onClick={() => setMethod('snowball')} />
              <Choice label="Spread it equally" active={method === 'spread'} onClick={() => setMethod('spread')} />
            </div>
            <div className="mt-3 space-y-1.5">
              {(method === 'snowball' ? bySize : byRate).map((d, i) => (
                <div key={d.key} className="flex items-center justify-between text-xs">
                  <span className="text-ink-300">
                    <span className="text-white">
                      {i + 1}. {d.name}
                    </span>{' '}
                    — {d.rate}% a year{d.secured ? ', secured' : ', unsecured'}
                  </span>
                  <span className="font-mono text-brand-300">{rupeesShort(d.balance)}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-300">
              {method === 'avalanche' ? (
                <>
                  <strong className="text-brand-300">Cheapest in interest.</strong> Attacking the {highest.name.toLowerCase()} first
                  saves {rupeesShort(saved)} over a year against spreading the same money evenly.
                </>
              ) : method === 'snowball' ? (
                <>
                  <strong className="text-brand-300">Cheapest in morale.</strong> Clearing the smallest balance first is slower
                  on interest — {rupeesShort(saved)} is what the order is worth over a year — and it is the version people
                  actually stick to. Choose it knowingly rather than by accident.
                </>
              ) : (
                <>
                  <strong className="text-rose-300">Spreading the money evenly is the expensive option.</strong> The same
                  rupees are available every month, and directing them at one debt at a time is worth{' '}
                  {rupeesShort(saved)} a year here.
                </>
              )}
            </p>
          </Panel>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Before any of that</p>
            <ul className="space-y-1.5">
              <Check ok={cardRate <= cardRate}>The rate on every debt is known, not estimated from the instalment</Check>
              <Check ok={vehicleRate <= 14 && homeRate <= 10}>Nothing secured is allowed to fall behind, whatever the rate</Check>
              <Check ok={extra > 0}>There is an amount going at the debt rather than only the minimums</Check>
              <Check ok={method !== 'spread'}>The extra is aimed at one debt at a time</Check>
              <Check ok={yearlyInterest > 0}>The yearly interest is written down, because that is the cost of waiting</Check>
            </ul>
            <p className="mt-2 text-xs text-ink-400">
              A settlement that pays less than is owed is recorded as settled, and it damages future borrowing far longer
              than the amount saved. Ask for the terms in writing before agreeing to anything.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-096 */

export function L5FraudResponseDrill() {
  const [amount, setAmount] = useState(85_000)
  const [days, setDays] = useState(2)
  const [bankFault, setBankFault] = useState(false)
  const [limited, setLimited] = useState(false)
  const [froze, setFroze] = useState(false)
  const [called, setCalled] = useState(false)
  const [portal, setPortal] = useState(false)
  const [evidence, setEvidence] = useState(false)

  const cap = limited ? 5_000 : 25_000
  const liability = bankFault || days <= 3 ? 0 : days <= 7 ? Math.min(amount, cap) : amount
  const rung = bankFault
    ? 'Zero liability, because the fault was the bank’s'
    : days <= 3
      ? 'Zero liability: reported within three working days'
      : days <= 7
        ? 'Capped at ' + rupees(cap) + ': reported between four and seven working days'
        : 'Per the bank’s own policy: reported beyond seven working days'
  const recoverable = amount - liability
  const steps = [
    { ok: froze, what: 'Freeze the card, the account or the UPI handle', why: 'The first minute is the only one in which the money may still be sitting where it was sent' },
    { ok: called, what: 'Call the bank on the number printed on the card', why: 'The complaint reference is what starts the clock on the liability ladder' },
    { ok: portal, what: 'File on the national cybercrime portal', why: 'A police-side complaint is what lets a bank reverse or freeze a beneficiary account' },
    { ok: evidence, what: 'Preserve the screenshots, SMS and message IDs', why: 'The claim is decided on what you can show, and the app will clear the chat on its own' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Amount taken" value={amount} min={1_000} max={2_000_000} step={1_000} onChange={setAmount} />
            <Slider label="Days until you reported it" value={days} min={0} max={20} step={1} onChange={setDays} format={(v) => (v === 0 ? 'the same day' : v + (v === 1 ? ' day' : ' days'))} />
          </div>
          <div className="mt-3 grid gap-2">
            <Toggle label="The fault was the bank’s" on={bankFault} onClick={() => setBankFault((v) => !v)} />
            <Toggle label="An account with limited features, or no SMS alerts" on={limited} onClick={() => setLimited((v) => !v)} />
          </div>
          <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The first hour, in order</p>
          <div className="grid gap-2">
            <Toggle label="Froze the card or the account" on={froze} onClick={() => setFroze((v) => !v)} />
            <Toggle label="Called the bank and kept the reference" on={called} onClick={() => setCalled((v) => !v)} />
            <Toggle label="Filed on the cybercrime portal" on={portal} onClick={() => setPortal((v) => !v)} />
            <Toggle label="Preserved the evidence" on={evidence} onClick={() => setEvidence((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Your liability" value={rupees(liability)} tone={liability === 0 ? 'best' : 'bad'} />
            <Stat label="You can recover" value={rupees(recoverable)} tone={recoverable > 0 ? 'good' : 'bad'} />
            <Stat label="Days used" value={days === 0 ? 'The same day' : String(days)} tone={days <= 3 ? 'good' : 'bad'} />
            <Stat label="On the liability ladder" value={liability === 0 ? 'Top rung' : liability >= amount ? 'Bottom' : 'Middle'} tone={liability === 0 ? 'best' : liability >= amount ? 'bad' : 'neutral'} />
          </div>

          <Debrief title={rung}>
            The rule is decided by when you reported, not by how convincing your explanation was. Within three working
            days the customer owes nothing for a third-party fraud; between four and seven days the loss is capped at{' '}
            {rupees(cap)}; beyond that it is whatever the bank’s board-approved policy says. Where the deficiency was the
            bank’s — a compromised system, a leak, a failed alert — the liability is zero whenever you report.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The first hour, and why each step</p>
            <ul className="space-y-2">
              {steps.map((s) => (
                <li key={s.what} className="text-xs">
                  <span className={s.ok ? 'text-brand-300' : 'text-ink-300'}>
                    {s.ok ? '✓ ' : '· '}
                    {s.what}
                  </span>
                  <span className="block text-ink-400">{s.why}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-ink-400">
              Every hour matters because the money is usually moved onward within minutes. A freeze that lands in the first
              hour sometimes finds it still in the account it was sent to.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-097 */

export function L5AccountRecovery() {
  const [hours, setHours] = useState(6)
  const [lost, setLost] = useState(60_000)
  const [steps, setSteps] = useState({ blocked: false, clean: false, sessions: false, rekyc: false })
  const [linked, setLinked] = useState({ mandates: true, autopay: true, email: true, forwarding: true, number: true })

  const chance = hours <= 1 ? 0.8 : hours <= 6 ? 0.5 : hours <= 24 ? 0.25 : 0.1
  const recoverable = lost * chance
  const services = [
    { key: 'mandates', label: 'Standing mandates and e-mandates', note: 'A mandate can pull money out every month without a fresh approval' },
    { key: 'autopay', label: 'Autopay and subscriptions on the card', note: 'They survive a new card number more often than people expect' },
    { key: 'email', label: 'The email address registered on the account', note: 'It is where the alerts and the reset links go' },
    { key: 'forwarding', label: 'Forwarding rules in that mailbox', note: 'A silent copy of every statement is the classic compromise' },
    { key: 'number', label: 'The mobile number linked to the account', note: 'A SIM swap makes every OTP somebody else’s' },
  ] as const
  const live = services.filter((s) => linked[s.key]).length
  const contained = steps.blocked && steps.clean && steps.sessions
  const done = [steps.blocked, steps.clean, steps.sessions, steps.rekyc].filter(Boolean).length

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Amount gone" value={lost} min={0} max={2_000_000} step={1_000} onChange={setLost} />
            <Slider label="Hours until you blocked it" value={hours} min={0} max={72} step={1} onChange={setHours} format={(v) => v + (v === 1 ? ' hour' : ' hours')} />
          </div>
          <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Contain, then recover</p>
          <div className="grid gap-2">
            <Toggle label="Blocked the card, the UPI and the account" on={steps.blocked} onClick={() => setSteps((s) => ({ ...s, blocked: !s.blocked }))} />
            <Toggle label="Changed credentials from a clean device" on={steps.clean} onClick={() => setSteps((s) => ({ ...s, clean: !s.clean }))} />
            <Toggle label="Signed out every other session" on={steps.sessions} onClick={() => setSteps((s) => ({ ...s, sessions: !s.sessions }))} />
            <Toggle label="Re-KYC done, once the account was unfrozen" on={steps.rekyc} onClick={() => setSteps((s) => ({ ...s, rekyc: !s.rekyc }))} />
          </div>
          <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The audit people skip</p>
          <div className="grid gap-2">
            {services.map((s) => (
              <Choice
                key={s.key}
                label={(linked[s.key] ? 'Live: ' : 'Reviewed: ') + s.label}
                active={!linked[s.key]}
                onClick={() => setLinked((l) => ({ ...l, [s.key]: !l[s.key] }))}
              />
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Chance of getting it back" value={(chance * 100).toFixed(0) + '%'} tone={chance >= 0.5 ? 'good' : 'bad'} />
            <Stat label="Expected recovery" value={rupeesShort(recoverable)} tone={recoverable > 0 ? 'good' : 'bad'} />
            <Stat label="Services still live" value={live + ' of ' + services.length} tone={live === 0 ? 'best' : 'bad'} />
            <Stat label="Containment steps done" value={done + ' of 4'} tone={contained ? 'good' : 'bad'} />
          </div>

          <Debrief title="Containment is not a password change">
            Blocking the instrument within the first hour keeps about {chance * 100}% of the money recoverable by the
            bank’s own process; a day later the money has usually been moved twice and the odds fall sharply. Changing the
            password is the third step, not the first: an attacker holding a live session, a mandate or a mail-forwarding
            rule does not need your password again.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What survives a new card</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.key} className="text-xs">
                  <span className={linked[s.key] ? 'text-rose-300' : 'text-brand-300'}>
                    {linked[s.key] ? 'Still live: ' : 'Reviewed: '}
                    {s.label}
                  </span>
                  <span className="block text-ink-400">{s.note}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-098 */

export function L5IdentityRepair() {
  const [found, setFound] = useState({ loan: true, card: false, enquiry: true, address: false, tax: false })
  const [actions, setActions] = useState({ bureau: false, lender: false, police: false, aadhaar: false, tax: false })

  const findings = [
    { key: 'loan', label: 'A loan in your name you never took', needs: ['bureau', 'lender', 'police'] },
    { key: 'card', label: 'A card or a pay-later account you did not open', needs: ['bureau', 'lender'] },
    { key: 'enquiry', label: 'An enquiry by a lender you never approached', needs: ['bureau'] },
    { key: 'address', label: 'An address or a phone number that is not yours', needs: ['bureau'] },
    { key: 'tax', label: 'Income on your tax record that is not yours', needs: ['tax', 'police'] },
  ] as const
  const required = new Set<string>()
  findings.forEach((f) => {
    if (found[f.key]) f.needs.forEach((n) => required.add(n))
  })
  const actionList = [
    { key: 'bureau', label: 'Raise a dispute with each credit bureau', note: 'It goes to the lender that reported the entry, which is where it must be corrected' },
    { key: 'lender', label: 'Write to the lender, not only the bureau', note: 'Keep the acknowledgement; a disputed account stays on the report until it is fixed' },
    { key: 'police', label: 'File a police or cybercrime complaint', note: 'The reference number is what makes the rest of the repairs possible' },
    { key: 'aadhaar', label: 'Lock the biometrics and review Aadhaar usage', note: 'A locked biometric cannot authorise a fresh KYC' },
    { key: 'tax', label: 'Check the tax portal and the PAN linkage', note: 'Someone else’s income reported against your PAN is found here first' },
  ] as const
  const outstanding = [...required].filter((r) => !actions[r as keyof typeof actions]).length
  const complete = required.size === 0 ? 100 : Math.round(((required.size - outstanding) / required.size) * 100)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What the credit report shows</p>
          <div className="grid gap-2">
            {findings.map((f) => (
              <Toggle
                key={f.key}
                label={f.label}
                on={found[f.key]}
                onClick={() => setFound((s) => ({ ...s, [f.key]: !s[f.key] }))}
              />
            ))}
          </div>
          <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What you have done about it</p>
          <div className="grid gap-2">
            {actionList.map((a) => (
              <Toggle
                key={a.key}
                label={a.label}
                on={actions[a.key as keyof typeof actions]}
                onClick={() => setActions((s) => ({ ...s, [a.key]: !s[a.key] }))}
              />
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Problems on the report" value={String(findings.filter((f) => found[f.key]).length)} tone={findings.some((f) => found[f.key]) ? 'bad' : 'good'} />
            <Stat label="Actions outstanding" value={String(outstanding)} tone={outstanding === 0 ? 'best' : 'bad'} />
            <Stat label="Repair complete" value={complete + '%'} tone={complete === 100 ? 'good' : 'neutral'} />
            <Stat label="The report is free" value="Once a year" tone="good" />
          </div>

          <Debrief title="The order that works">
            A full credit report is free once a year from each bureau, and it is the cheapest alarm an identity can have.
            When something is on it, the bureau is only the postbox: the entry has to be corrected by the lender that
            reported it, so both get a written complaint. A complaint reference from the police or the cybercrime portal
            is what makes a lender act on a loan you never took, and locking the biometrics stops the next attempt at a
            KYC in your name.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The response, item by item</p>
            <ul className="space-y-2">
              {actionList.map((a) => (
                <li key={a.key} className="text-xs">
                  <span className={required.has(a.key) ? 'text-rose-300' : 'text-ink-400'}>
                    {required.has(a.key) ? 'Needed: ' : 'Optional: '}
                    {a.label}
                  </span>
                  <span className="block text-ink-400">{a.note}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-099 */

type Verdict = 'invest' | 'verify' | 'reject'

export function L5ScamInbox() {
  const [picks, setPicks] = useState<Record<string, Verdict>>({})

  const offers: { id: string; label: string; regulated: string; where: string; hurry: string; verdict: Verdict; why: string }[] = [
    {
      id: 'fd',
      label: 'A fixed deposit at a small finance bank, 7.5% for two years',
      regulated: 'Yes: an RBI-licensed bank',
      where: 'A deposit in your own name, at the bank',
      hurry: 'None at all',
      verdict: 'invest',
      why: 'A licensed bank, money in your own name, and a rate that is plausible for the product. This is what an ordinary deposit looks like.',
    },
    {
      id: 'monthly',
      label: 'A company paying 3% a month on a deposit, guaranteed',
      regulated: 'No regulator is named',
      where: 'A current account in the company’s name',
      hurry: 'The offer closes on Friday',
      verdict: 'reject',
      why: 'Taking a deposit without being registered to do so is banned, and 3% a month is over 40% a year compounded. No lender pays that for money it could borrow from a bank.',
    },
    {
      id: 'nbfc',
      label: 'An NBFC deposit at 11.5%, from a company you have not heard of',
      regulated: 'Claims to be registered',
      where: 'The company, with a rating attached',
      hurry: 'Limited quota, this week',
      verdict: 'verify',
      why: 'Some non-banking finance companies may accept public deposits and others may not, and a deposit has to carry a rating. This one is checkable rather than obviously fake, which is exactly when to check.',
    },
    {
      id: 'task',
      label: 'A part-time job reviewing hotels, with a refundable training deposit',
      regulated: 'None',
      where: 'A person you met in a chat group',
      hurry: 'Pay now, get it back with your first payout',
      verdict: 'reject',
      why: 'Any offer that requires money from the person being hired is a fee, not a job. The refundable deposit is the entire product.',
    },
    {
      id: 'ipo',
      label: 'Pre-IPO shares of an unlisted company, through an app',
      regulated: 'An app you cannot place',
      where: 'A QR code and a wallet',
      hurry: 'Allotment closes tonight',
      verdict: 'reject',
      why: 'Unlisted shares cannot be sold through a payment app to the public, and a price that only goes up is the product being sold rather than the shares.',
    },
    {
      id: 'bond',
      label: 'A rated bond of a listed company, bought through your broker',
      regulated: 'Yes: SEBI-registered broker, listed issuer',
      where: 'Your own demat account',
      hurry: 'The issue has a closing date',
      verdict: 'invest',
      why: 'A rated issuer, settled into your own demat account, through a broker you chose. A closing date on a public issue is a schedule rather than pressure.',
    },
  ]
  const answered = offers.filter((o) => picks[o.id])
  const right = answered.filter((o) => picks[o.id] === o.verdict).length
  const verdicts: { key: Verdict; label: string }[] = [
    { key: 'invest', label: 'Invest' },
    { key: 'verify', label: 'Verify first' },
    { key: 'reject', label: 'Reject' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Judged" value={answered.length + ' of ' + offers.length} tone="neutral" />
        <Stat label="Judged correctly" value={right + ' of ' + offers.length} tone={right === offers.length ? 'best' : 'neutral'} />
        <Stat label="Came with a deadline" value={String(offers.filter((o) => !o.hurry.toLowerCase().startsWith('none')).length)} tone="bad" />
        <Stat label="Named a regulator" value={String(offers.filter((o) => o.regulated.startsWith('Yes')).length)} tone="good" />
      </div>

      <div className="space-y-3">
        {offers.map((o) => (
          <Panel key={o.id}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm text-white">{o.label}</p>
                <p className="text-[11px] text-ink-400">
                  {o.regulated} · {o.where} · {o.hurry}
                </p>
              </div>
              <div className="flex gap-1">
                {verdicts.map((v) => (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => setPicks((p) => ({ ...p, [o.id]: v.key }))}
                    className={`rounded-lg border px-2 py-1 text-[11px] transition ${
                      picks[o.id] === v.key
                        ? 'border-brand-400/60 bg-brand-400/15 text-white'
                        : 'border-white/10 bg-white/5 text-ink-300 hover:border-white/30'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
            {picks[o.id] && (
              <p className="mt-2 text-xs text-ink-300">
                <strong className={picks[o.id] === o.verdict ? 'text-brand-300' : 'text-rose-300'}>
                  {picks[o.id] === o.verdict ? 'Right. ' : 'The answer here is ' + verdicts.find((v) => v.key === o.verdict)?.label + '. '}
                </strong>
                {o.why}
              </p>
            )}
          </Panel>
        ))}
      </div>

      <Debrief title="The three questions">
        Who is regulated, and by which regulator? Where does the money go, and whose name is on the account that receives
        it? What is the hurry? An offer has to pass all three, and the deadline is the tell that costs people the most:
        nobody legitimate minds being checked, and nobody legitimate needs the answer tonight.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-100 */

export function L5GuruAudit() {
  const [checks, setChecks] = useState({ registered: false, disclosed: false, audited: false, falsifiable: false, inbound: false })
  const [paid, setPaid] = useState(70)
  const [positions, setPositions] = useState(false)

  const items = [
    { key: 'registered', label: 'Registered to advise, with a number you looked up', note: 'An investment adviser or a research analyst registration, confirmed on the regulator’s own site' },
    { key: 'disclosed', label: 'Discloses how they are paid', note: 'A fee is fine and honest. Silence about affiliate links and course sales is not' },
    { key: 'audited', label: 'Shows a dated, audited track record', note: 'Complete, including the positions that went wrong, and without the benefit of hindsight' },
    { key: 'falsifiable', label: 'Says what would prove them wrong', note: 'A claim that no outcome can falsify is a belief being sold as a method' },
    { key: 'inbound', label: 'Waits to be found rather than messaging you', note: 'An unsolicited offer of advice is a sales channel, whoever is sending it' },
  ] as const
  const score = items.filter((i) => checks[i.key]).length
  const verdict =
    paid >= 60
      ? 'A promoter. Most of the money comes from the audience rather than from the advice, which decides whose interest is being served.'
      : score >= 4
        ? 'Behaves like a teacher: registered, paid by clients, and willing to be checked.'
        : score >= 2
          ? 'Partly credible. Take the two questions you cannot answer back to the person before acting on anything.'
          : 'Not enough here to call it advice. Treat it as entertainment and keep your money out of it.'

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What you can confirm</p>
          <div className="grid gap-2">
            {items.map((i) => (
              <Toggle key={i.key} label={i.label} on={checks[i.key]} onClick={() => setChecks((s) => ({ ...s, [i.key]: !s[i.key] }))} />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Share of income from affiliate links and courses" value={paid} min={0} max={100} step={5} onChange={setPaid} format={(v) => v + '%'} />
            <Toggle label="Their own positions are disclosed" on={positions} onClick={() => setPositions((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Checks passed" value={score + ' of ' + items.length} tone={score >= 4 ? 'good' : score >= 2 ? 'neutral' : 'bad'} />
            <Stat label="Paid by the audience" value={paid + '%'} tone={paid >= 60 ? 'bad' : 'neutral'} />
            <Stat label="Conflicts disclosed" value={positions ? 'Yes' : 'No'} tone={positions ? 'good' : 'bad'} />
            <Stat label="Registered" value={checks.registered ? 'Confirmed' : 'Not confirmed'} tone={checks.registered ? 'good' : 'bad'} />
          </div>

          <Debrief title="The verdict">{verdict}</Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What each check rules out</p>
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i.key} className="text-xs">
                  <span className={checks[i.key] ? 'text-brand-300' : 'text-ink-300'}>
                    {checks[i.key] ? '✓ ' : '· '}
                    {i.label}
                  </span>
                  <span className="block text-ink-400">{i.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-ink-400">
              A profit screenshot is not evidence: it has no dates, no position size and no losers in it. A record is
              evidence when it is dated, complete and auditable by somebody other than the person who built it.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

