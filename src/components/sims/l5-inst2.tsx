import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band three, batch 2 labs (chapters l5-050 to l5-059).
 *
 * Ten separate simulations, one per chapter:
 *   l5-broker-compare          count every cost, not the headline brokerage
 *   l5-demat-service-check     audit a demat account's charges and its readiness
 *   l5-kyc-doctor              which register holds the record, and is it due
 *   l5-aml-simulator           cash totals, structuring, and what resolves a lien
 *   l5-protection-limits       which safety net applies, and where it ends
 *   l5-complaint-builder       build the escalation, and watch the clock
 *   l5-consumer-case-builder   the right commission, and the limitation period
 *   l5-contract-scanner        score a contract on its cost, risk and control clauses
 *   l5-loan-agreement-audit    check loan clauses against the rules that govern them
 *   l5-policy-reader           reduce a claim by the wording, then read the clock
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: securities transaction tax of 0.1% on both sides of a delivery
 * trade and stamp duty of 0.015% on the buy side only; the depository charge
 * levied per scrip on a sell; the basic services demat account charge slabs of
 * nil up to ₹4 lakh and ₹100 between ₹4 lakh and ₹10 lakh, in force since
 * 1 September 2024; periodic KYC updation at least every two years for high
 * risk, eight for medium and ten for low; the 14-digit identifier issued by the
 * central KYC records registry and its use in place of collecting documents
 * again; cash transaction reporting above ₹10 lakh and suspicion reporting with
 * no threshold; the ten per cent beneficial ownership threshold; deposit
 * insurance of ₹5 lakh per depositor per bank; the investor protection fund
 * ceiling set by each exchange, currently ₹35 lakh per claim at the National
 * Stock Exchange; the banking ombudsman's ₹30 lakh and ₹3 lakh compensation
 * limits under the 2026 scheme; the insurance ombudsman's ₹50 lakh ceiling and
 * one-year window; consumer commission limits of ₹50 lakh and ₹2 crore with a
 * two-year limitation; the ban on prepayment charges for floating-rate loans to
 * individuals and small enterprises from 1 January 2026; penalties charged as
 * charges rather than interest, with no capitalisation, since 1 January 2024;
 * and health-insurance waiting periods of thirty days initially, up to
 * thirty-six months for pre-existing conditions, and a sixty-month moratorium.
 * All amounts and scenarios are illustrative.
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

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/* ------------------------------------------------------------------ l5-050 */

export function L5BrokerCompare() {
  const [turnover, setTurnover] = useState(1_200_000)
  const [orders, setOrders] = useState(40)
  const [sells, setSells] = useState(6)
  const [flatPlan, setFlatPlan] = useState(true)
  const [pctBroker, setPctBroker] = useState(0.3)

  // The two plans are alternatives rather than additions: one charges a flat fee
  // per executed order, the other a percentage of turnover.
  const flatCost = orders * 20
  const pctCost = (turnover * pctBroker) / 100
  const brokerage = flatPlan ? flatCost : pctCost
  const cheaper = flatCost <= pctCost ? 'the flat fee' : 'the percentage plan'
  const stt = turnover * 0.001
  const stamp = turnover * 0.00015
  const exchange = turnover * 0.00003
  const sebiFee = (turnover / 10_000_000) * 10
  const gst = (brokerage + exchange + sebiFee) * 0.18
  const dpCharges = sells * 13.5 * 1.18
  const total = brokerage + stt + stamp + exchange + sebiFee + gst + dpCharges
  const statutory = stt + stamp + exchange + sebiFee
  const visible = brokerage + gst + dpCharges
  const share = (total / turnover) * 100
  const turnoverPerOrder = turnover / Math.max(1, orders)

  const checks = [
    {
      ok: statutory < total,
      text: `On ${rupees(turnover)} of turnover the statutory levies alone come to ${rupees(statutory)}: tax on both sides, stamp duty on the buy, exchange and regulator fees on the trade. These are identical at every broker, which is why they cannot be part of a price comparison.`,
    },
    {
      ok: flatPlan === (flatCost <= pctCost),
      text: `Brokerage on this plan is ${rupees(brokerage)}: ${rupees(flatCost)} on a flat fee of ₹20 an order against ${rupees(pctCost)} on a ${pctBroker.toFixed(2)}% plan. At ${rupees(turnoverPerOrder)} an order the cheaper of the two is ${cheaper}, and the gap widens as order sizes change.`,

    },
    {
      ok: sells <= 12,
      text: sells <= 12
        ? `${sells} sells a year cost ${rupees(dpCharges)} in depository charges. Selling is the expensive half of investing, and it is charged by the scrip rather than by value.`
        : `${sells} sells a year cost ${rupees(dpCharges)} in depository charges alone. A portfolio rebalanced monthly pays this every month.`,
    },
    {
      ok: share < 0.5,
      text: `Total cost is ${rupees(total)}, or ${share.toFixed(3)}% of turnover. The figure to carry in your head is not the brokerage rate but this percentage, and it rises as the average order size falls.`,
    },
    {
      ok: visible < total,
      text: `Charges you would see on a broker's page: ${rupees(visible)}. Charges you would not: ${rupees(statutory)}, collected through the trade itself. Comparing brokers on the first line and ignoring the second is the standard mistake.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Cost a year of trading</h4>
          <div className="space-y-3">
            <Slider label="Turnover a year" value={turnover} min={100_000} max={10_000_000} step={100_000} onChange={setTurnover} />
            <Slider label="Orders a year" value={orders} min={4} max={400} step={4} onChange={setOrders} format={(v) => `${v}`} />
            <Slider label="Sell transactions a year" value={sells} min={0} max={60} step={1} onChange={setSells} format={(v) => `${v}`} />
            <Slider label="Percentage brokerage plan" value={pctBroker} min={0} max={0.5} step={0.02} onChange={setPctBroker} format={(v) => `${v.toFixed(2)}%`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Flat ₹20 an order" active={flatPlan} onClick={() => setFlatPlan(true)} />
              <Choice label="Percentage of turnover" active={!flatPlan} onClick={() => setFlatPlan(false)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Total cost" value={rupeesShort(total)} tone="bad" />
              <Stat label="Of turnover" value={`${share.toFixed(3)}%`} />
              <Stat label="Statutory" value={rupeesShort(statutory)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Brokerage: {rupees(brokerage)} ({flatPlan ? 'flat fee' : 'percentage'} plan)</li>
              <li>Transaction tax, 0.1% both sides: {rupees(stt)}</li>
              <li>Stamp duty, 0.015% on the buy: {rupees(stamp)}</li>
              <li>Exchange and regulator fees: {rupees(exchange + sebiFee)}</li>
              <li>Tax on the charges, 18%: {rupees(gst)}</li>
              <li>Depository charge, per scrip per sell: {rupees(dpCharges)}</li>
              <li className="text-white">Every line except brokerage and the depository charge is the same at any broker</li>
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
        A broker's price has two halves, and only one of them is negotiable. The statutory half — transaction tax on
        both sides, stamp duty on the purchase, exchange and regulator fees — is identical everywhere and is collected
        through the trade rather than billed. The other half is what the broker decides: brokerage, the depository
        charge it passes on for every scrip you sell, and anything it charges for statements or physical documents. The
        comparison that matters is therefore not the brokerage rate but the annual total as a share of turnover, because
        that ratio worsens as order sizes fall. The other half of choosing a broker is not about price at all: it is
        whether client funds and securities are kept apart from the firm's own, and whether an instruction can be traced
        to you when it matters.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-051 */

export function L5DematServiceCheck() {
  const [holding, setHolding] = useState(350_000)
  const [sells, setSells] = useState(10)
  const [pledged, setPledged] = useState(100_000)
  const [hasNomination, setHasNomination] = useState(false)
  const [jointlyHeld, setJointlyHeld] = useState(false)
  const [frozen, setFrozen] = useState(false)

  const amc = holding <= 400_000 ? 0 : holding <= 1_000_000 ? 100 : 300
  const dpCharges = sells * 13.5 * 1.18
  const annual = amc + dpCharges
  const available = Math.max(0, holding - pledged)
  const pledgedPct = (pledged / Math.max(1, holding)) * 100
  const transmissionReady = hasNomination || jointlyHeld
  const canUse = !frozen

  const checks = [
    {
      ok: amc === 0,
      text: amc === 0
        ? `Holdings of ${rupees(holding)} sit inside the basic-services slab, where the annual maintenance charge is nil. The slabs are ₹4 lakh and ₹10 lakh: below the first there is no charge, and between them the charge is ₹100 a year.`
        : holding <= 1_000_000
          ? `Holdings of ${rupees(holding)} fall in the ₹4 lakh to ₹10 lakh slab, where the annual maintenance charge is capped at ₹100. Above ₹10 lakh the account is treated as a regular one and charged accordingly.`
          : `Holdings of ${rupees(holding)} are above the ₹10 lakh ceiling for a basic-services account, so the annual maintenance charge is the regular one. Splitting accounts across holders does not change the slab — it follows the value in the account.`,
    },
    {
      ok: dpCharges <= 500,
      text: `Depository charges of ${rupees(dpCharges)} on ${sells} sells are levied per scrip per day of selling, not on the value sold. A portfolio sold in many small lots pays this repeatedly for the same money.`,
    },
    {
      ok: pledgedPct <= 50,
      text: pledgedPct === 0
        ? 'Nothing is pledged, so the entire balance is available to transfer or sell.'
        : `${pledgedPct.toFixed(0)}% of the account is pledged. A pledge is a lien rather than a transfer: the shares stay in your name, the pledgee can act only on the terms agreed, and the balance shown to you is the unpledged part — ${rupees(available)} here.`,
    },
    {
      ok: transmissionReady,
      text: transmissionReady
        ? hasNomination
          ? 'A nomination is registered, which is the cheapest piece of estate planning in the whole account: it decides who can operate the holdings without a succession process.'
          : 'The account is jointly held, so the surviving holder can continue to operate it. A nomination on top of joint holding still shortens the paperwork.'
        : 'No nomination and no joint holder. On death, the family has to produce a succession certificate or probate to move the holdings, which takes months at the worst possible time and costs more than the shares were ever charged.',
    },
    {
      ok: canUse,
      text: canUse
        ? 'The account is free of any freeze, so instructions will be executed as given.'
        : 'The account is frozen. Only credits and the delivery of already-held securities are allowed: a freeze that is not understood is the single most common reason a long-term holding cannot be sold when it is needed.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Audit the account, not the broker</h4>
          <div className="space-y-3">
            <Slider label="Value of holdings" value={holding} min={20_000} max={2_000_000} step={10_000} onChange={setHolding} />
            <Slider label="Sells a year" value={sells} min={0} max={60} step={1} onChange={setSells} format={(v) => `${v}`} />
            <Slider label="Value pledged" value={pledged} min={0} max={2_000_000} step={10_000} onChange={setPledged} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Nomination registered" active={hasNomination} onClick={() => setHasNomination((v) => !v)} />
              <Choice label="Jointly held" active={jointlyHeld} onClick={() => setJointlyHeld((v) => !v)} />
              <Choice label="Account frozen" active={frozen} onClick={() => setFrozen((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Annual charge" value={rupees(annual)} tone={amc === 0 ? 'good' : 'bad'} />
              <Stat label="Available now" value={rupeesShort(available)} />
              <Stat label="Pledged" value={rupeesShort(pledged)} tone={pledged > 0 ? 'bad' : 'good'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Maintenance: {rupees(amc)} a year, by value slab</li>
              <li>Depository charges: {rupees(dpCharges)} on {sells} sells</li>
              <li>Holdings belong to you, held in the depository's records in your name</li>
              <li>Closing an account is free, and the request is made to the participant</li>
              <li className="text-white">A lien, a pledge and a freeze look similar on an app and behave very differently</li>
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
        A demat account is a record rather than a vault, and the record sits with the depository while the interface
        sits with your broker. That structure explains the three things worth auditing. The charges are levied per
        scrip sold rather than on value, so the cost of selling rises as the lots get smaller, and the maintenance
        charge follows the value slab. The pledge is a lien rather than a transfer, which is why a pledged balance
        still belongs to you while being unavailable at short notice. And the nomination decides what happens without a
        succession process, which is the only part of this chapter that costs nothing and saves everything. Remember
        too that a demat account is no safer than its nomination is current: the holding is not lost for want of
        paperwork, but it can be locked behind it for months.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-052 */

const KYC_PRODUCTS = [
  { key: 'bank', label: 'A bank account', register: 'the bank\u2019s own KYC record, shared with the central registry', docs: 'identity, address and PAN' },
  { key: 'demat', label: 'A demat and broking account', register: 'the securities-market registry, through your broker as an intermediary', docs: 'identity, address, PAN and a bank proof' },
  { key: 'mf', label: 'A mutual fund, first time', register: 'the securities-market registry, so the next fund needs no fresh paperwork', docs: 'identity, address and PAN' },
  { key: 'insurance', label: 'An insurance policy', register: 'the insurer\u2019s own record, plus the central registry', docs: 'identity, address, and age proof' },
  { key: 'loan', label: 'A loan', register: 'the lender\u2019s own record, under the same rules as a bank', docs: 'identity, address, income proof' },
]

const FRAUD_SIGNS = [
  'The call asks for a one-time password',
  'They want you to install a screen-sharing app',
  'Payment is asked for into a personal account',
  'The number is a mobile, not the institution\u2019s line',
  'A link asks you to update KYC or lose the account',
]

export function L5KycDoctor() {
  const [product, setProduct] = useState(KYC_PRODUCTS[0].key)
  const [risk, setRisk] = useState<'high' | 'medium' | 'low'>('low')
  const [lastUpdated, setLastUpdated] = useState(2016)
  const [signs, setSigns] = useState<string[]>([])
  const [cardKept, setCardKept] = useState(false)

  const item = KYC_PRODUCTS.find((p) => p.key === product) ?? KYC_PRODUCTS[0]
  const interval = risk === 'high' ? 2 : risk === 'medium' ? 8 : 10
  const yearsSince = 2026 - lastUpdated
  const due = yearsSince >= interval
  const yearsLeft = Math.max(0, interval - yearsSince)
  const score = signs.length
  const verdict = score === 0 ? 'nothing here looks wrong' : score <= 1 ? 'verify through the official channel before responding' : 'this is a fraud attempt'

  const checks = [
    {
      ok: !due,
      text: due
        ? `Last updated in ${lastUpdated}: ${yearsSince} years against a refresh interval of ${interval} years for this risk category. A refresh is due, and the institution may restrict the account until it is done.`
        : `Last updated in ${lastUpdated}: the next refresh for this risk category is in about ${yearsLeft} year(s), unless the record changes sooner \u2014 a new address, a new phone number or a new name.`,
    },
    {
      ok: true,
      text: `For this product the record lives with ${item.register}, and updating it usually reuses what is already on file there rather than collecting ${item.docs} all over again.`,
    },
    {
      ok: score === 0,
      text: score === 0
        ? 'None of the classic fraud signals are present. The remaining discipline is to conduct KYC inside the institution\u2019s own app or branch, not on a call.'
        : `${score} signal(s) present: ${verdict}. No genuine update needs a one-time password, remote access to your screen, or a payment to an individual.`,
    },
    {
      ok: cardKept,
      text: cardKept
        ? 'The record number is stored, which is what turns a future update into a single step instead of a fresh round of documents.'
        : 'The record number has not been noted down. Keeping it in your own files is how the next institution pulls the record instead of asking you for it again.',
    },
    {
      ok: score < 2,
      text: 'KYC fraud is the most common financial fraud in India because the request sounds routine: the caller already knows your name, your bank and often part of your account number, which is what makes the script credible.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Which record, and when is it due</h4>
          <div className="grid grid-cols-2 gap-2">
            {KYC_PRODUCTS.map((p) => (
              <Choice key={p.key} label={p.label} active={p.key === product} onClick={() => setProduct(p.key)} />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <div className="flex gap-2">
              <Choice label="High risk" active={risk === 'high'} onClick={() => setRisk('high')} />
              <Choice label="Medium risk" active={risk === 'medium'} onClick={() => setRisk('medium')} />
              <Choice label="Low risk" active={risk === 'low'} onClick={() => setRisk('low')} />
            </div>
            <Slider label="Year the record was last updated" value={lastUpdated} min={2004} max={2026} step={1} onChange={setLastUpdated} format={(v) => `${v}`} />
            <Choice label="Record number noted in my files" active={cardKept} onClick={() => setCardKept((v) => !v)} />
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-ink-200">
            <div className="text-[11px] uppercase tracking-wide text-ink-400">Record holder</div>
            <div>{item.register}</div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Test the request you have received</h4>
            <p className="mb-2 text-[11px] text-ink-400">Tick everything the caller or message has asked for.</p>
            <div className="flex flex-wrap gap-2">
              {FRAUD_SIGNS.map((f) => (
                <Choice
                  key={f}
                  label={f}
                  active={signs.includes(f)}
                  onClick={() => setSigns((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]))}
                />
              ))}
            </div>
            <ul className="mt-3 space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Refresh interval" value={`${interval} yrs`} />
              <Stat label="Years since" value={`${yearsSince}`} tone={due ? 'bad' : 'good'} />
              <Stat label="Fraud signals" value={`${score}/5`} tone={score === 0 ? 'good' : 'bad'} />
            </div>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        KYC exists because an institution has to know who it is dealing with and be able to prove it later, and the
        practical consequence is that one identity record now serves several registers: the bank's own, the central
        registry with its fourteen-digit number, the securities-market registry, and each insurer's file. That sharing
        is why a genuine update is quick — the record can be pulled rather than collected again. The refresh intervals
        are set by risk category, and low-risk customers have been given the longest runway precisely because the
        paperwork is the least useful part of the exercise for them. The fraud, meanwhile, is not really about KYC at
        all: it borrows the language of compliance to obtain a one-time password or remote control of your phone, and
        the defence is a rule rather than vigilance — KYC is never completed on a call.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-053 */

export function L5AmlSimulator() {
  const [deposit, setDeposit] = useState(450_000)
  const [count, setCount] = useState(3)
  const [cash, setCash] = useState(true)
  const [thirdParty, setThirdParty] = useState(false)
  const [incomeDocumented, setIncomeDocumented] = useState(false)
  const [domestic, setDomestic] = useState(true)

  const monthlyTotal = deposit * count
  const ctr = cash && monthlyTotal > 1_000_000
  const structuring = cash && deposit > 800_000 && deposit < 1_000_000 && count > 1
  const wireReport = !cash && monthlyTotal > 500_000
  const suspicion = (thirdParty ? 1 : 0) + (structuring ? 1 : 0) + (incomeDocumented ? 0 : 1)
  const outcome = ctr || wireReport ? 'reported to the financial intelligence unit' : suspicion >= 2 ? 'a query, and possibly a lien, until the source is explained' : 'cleared'

  const checks = [
    {
      ok: !structuring,
      text: structuring
        ? `Deposits of ${rupees(deposit)} repeated ${count} times a month come to ${rupees(monthlyTotal)} — each one under the reporting threshold, all of them integrally connected. Splitting a payment this way is the pattern the rules are written to catch.`
        : `Cash deposits of ${rupees(deposit)} × ${count} = ${rupees(monthlyTotal)}. What is reported is the connected series over a month, not each individual deposit.`,
    },
    {
      ok: !ctr,
      text: ctr
        ? `Cash above ₹10 lakh in a month is reported as a cash transaction report. Nothing is wrong with the deposit itself; the report is a record, and it is filed whether or not you are asked anything.`
        : `No cash transaction report arises here: ${rupees(monthlyTotal)} against a ₹10 lakh monthly threshold, with the threshold applied to connected transactions rather than to each credit.`,
    },
    {
      ok: suspicion < 2,
      text: `Suspicion reporting has no threshold at all: it depends on the pattern, and a single transfer with an unexplained counterparty can be reported where a larger ordinary one is not. Signals here: ${suspicion}.`,
    },
    {
      ok: !thirdParty,
      text: thirdParty
        ? 'Money moving in from, or out to, a third party who is not part of the arrangement is the fastest way to turn a lawful account into a monitored one. Lending your account to anybody is the whole risk.'
        : 'Funds move only between accounts in the same name, which is the pattern that needs no explanation if a query arrives.',
    },
    {
      ok: incomeDocumented,
      text: incomeDocumented
        ? 'The source of the money is documented and kept, which is what resolves a query: a sale deed, a statement, an invoice or a tax return, filed where you can find it.'
        : 'The source is not documented in a retrievable form. A lien is usually released by evidence rather than by argument, and evidence that takes a month to assemble is a month of frozen money.',
    },
    {
      ok: !domestic || cash === false || monthlyTotal <= 1_000_000,
      text: domestic
        ? 'Domestic transfers of ordinary size sit below every reporting threshold. Cross-border flows face additional reporting, which is why a first foreign remittance often triggers a call.'
        : 'Cross-border transactions carry their own reporting obligations on top of the domestic ones.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">A month of transactions through the monitor</h4>
          <div className="space-y-3">
            <Slider label="Size of each deposit" value={deposit} min={50_000} max={1_500_000} step={50_000} onChange={setDeposit} />
            <Slider label="Deposits in the month" value={count} min={1} max={8} step={1} onChange={setCount} format={(v) => `${v}`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="In cash" active={cash} onClick={() => setCash((v) => !v)} />
              <Choice label="Cross-border" active={!domestic} onClick={() => setDomestic((v) => !v)} />
              <Choice label="Involves a third party" active={thirdParty} onClick={() => setThirdParty((v) => !v)} />
              <Choice label="Source documented" active={incomeDocumented} onClick={() => setIncomeDocumented((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Monthly total" value={rupeesShort(monthlyTotal)} />
              <Stat label="Cash report" value={ctr ? 'applies' : 'no'} tone={ctr ? 'bad' : 'good'} />
              <Stat label="Outcome" value={outcome === 'cleared' ? 'cleared' : 'flagged'} tone={outcome === 'cleared' ? 'good' : 'bad'} />
            </div>
            <p className="mt-2 text-xs text-ink-300">What happens next: {outcome}.</p>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Cash above ₹10 lakh in a month: reported, as a series if the transactions are connected</li>
              <li>Suspicion: no threshold, filed within days, and never disclosed to you</li>
              <li>Large wire transfers carry their own reporting</li>
              <li>A flag is not an accusation: it is a message that the file needs a source</li>
              <li className="text-white">The one request that resolves most liens is a document showing where the money came from</li>
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
        Anti-money-laundering rules are not aimed at the ordinary account, and the ordinary account still runs into
        them for a simple reason: the system monitors patterns rather than intentions, so a lawful transaction that
        looks unusual is treated as unusual. Cash above ₹10 lakh in a month is reported as a record; suspicion is
        reported with no threshold at all and with no notice to you; and splitting a payment to stay under a line is
        itself the pattern. When the file is queried the resolution is documentary, which is why the habit worth
        keeping is not a rule about amounts but a habit about paper: keep the invoice, the deed, the statement, the tax
        return, and know where each is. Where the money is genuinely someone else's — a borrowed account, a
        transaction for a friend — the explanation will not exist, and that is the line worth never crossing.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-054 */

const SCENARIOS = [
  { key: 'bank', label: 'A bank fails', layer: 'Deposit insurance', cap: 500_000, note: 'per depositor, per bank, principal and interest together' },
  { key: 'broker', label: 'A broker defaults', layer: 'Settlement guarantee and the investor protection fund', cap: 3_500_000, note: 'settlement is completed; a shortfall is a capped claim at the exchange' },
  { key: 'unauthorised', label: 'A fraudulent transfer from your account', layer: 'The bank\u2019s liability, and the banking ombudsman', cap: 3_000_000, note: 'the ombudsman may award compensation for the loss plus time and stress' },
  { key: 'claim', label: 'An insurer refuses a health claim', layer: 'The insurance ombudsman', cap: 5_000_000, note: 'free, binding on the insurer, on a complaint made within a year' },
  { key: 'market', label: 'Your shares fell 40%', layer: 'Nothing', cap: 0, note: 'price risk is entirely the holder\u2019s, in any market' },
  { key: 'scheme', label: 'A scheme nobody registered stopped paying', layer: 'Enforcement, not compensation', cap: 0, note: 'the regulator can act; it cannot restore the money' },
  { key: 'nbfc', label: 'A non-bank lender fails holding your deposit', layer: 'Nothing', cap: 0, note: 'deposit insurance covers banks, not non-bank deposits' },
]

export function L5ProtectionLimits() {
  const [scenarioKey, setScenarioKey] = useState(SCENARIOS[0].key)
  const [loss, setLoss] = useState(900_000)

  const s = SCENARIOS.find((x) => x.key === scenarioKey) ?? SCENARIOS[0]
  const covered = Math.min(loss, s.cap)
  const uncovered = loss - covered
  const capped = s.cap > 0 && loss > s.cap
  const nothing = s.cap === 0

  const checks = [
    {
      ok: !nothing,
      text: nothing
        ? `There is no fund behind this loss. ${s.note.charAt(0).toUpperCase()}${s.note.slice(1)}, which means the amount is not capped — it is simply yours.`
        : `This is a case the system answers for: ${s.layer.toLowerCase()}. ${s.note.charAt(0).toUpperCase()}${s.note.slice(1)}.`,
    },
    {
      ok: !capped,
      text: nothing
        ? 'Where no fund applies, the only protections left are the ones you arrange yourself: position size, a written complaint, and for fraud, a report made within hours.'
        : capped
          ? `The ceiling does the work here: ${rupees(s.cap)} of ${rupees(loss)} is answered, and ${rupees(uncovered)} is not. Every safety net in this chapter is bounded, and the bound is the part worth remembering.`
          : `The loss of ${rupees(loss)} sits inside the ceiling of ${rupees(s.cap)}, so the whole amount is recoverable in principle. Procrastination is the usual reason it is not recovered in practice.`,
    },
    {
      ok: s.key === 'market' || s.key === 'scheme',
      text: `Protection in finance covers process failures: a bank's insolvency, a broker's default, an unauthorised debit, a claim refused on grounds the rules do not allow. It has never covered a judgement about what to own.`,
    },
    {
      ok: true,
      text: scenarioKey === 'unauthorised'
        ? 'For a fraudulent debit the clock matters more than the argument: report to the bank and on the cybercrime portal immediately, and the liability is shared by how promptly you acted rather than by how much you shouted.'
        : 'The complaint route is part of the protection. A ceiling you never approach because you never filed is a ceiling that did nothing.',
    },
    {
      ok: covered > 0,
      text: covered > 0
        ? `Covered here: ${rupees(covered)}. Keep the documents that prove the loss — the statement, the contract note, the policy, the refusal letter — because each fund pays against evidence rather than against a description.`
        : 'Nothing is covered in this scenario, so the planning question is different: how much of this loss could you have prevented by splitting the money or by not concentrating it.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Pick the loss, find the net</h4>
          <div className="grid grid-cols-1 gap-2">
            {SCENARIOS.map((x) => (
              <Choice key={x.key} label={x.label} active={x.key === scenarioKey} onClick={() => setScenarioKey(x.key)} />
            ))}
          </div>
          <div className="mt-3">
            <Slider label="Size of the loss" value={loss} min={50_000} max={6_000_000} step={50_000} onChange={setLoss} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Covered" value={rupeesShort(covered)} tone={covered > 0 ? 'good' : 'bad'} />
              <Stat label="Not covered" value={rupeesShort(uncovered)} tone={uncovered > 0 ? 'bad' : 'good'} />
              <Stat label="Ceiling" value={s.cap ? rupeesShort(s.cap) : 'none'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Applies: {s.layer}</li>
              <li>{s.note}</li>
              <li>Deposit insurance: ₹5 lakh per depositor per bank, and not for non-bank deposits</li>
              <li>The exchange ceiling is set by each exchange and revised from time to time</li>
              <li className="text-white">No net anywhere covers a price that fell, a tip, or an unregistered scheme</li>
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
        Investor and depositor protection in India is a set of funds and forums, each with a defined job and a stated
        ceiling, and the ceilings are the part that decides behaviour. Deposit insurance pays to ₹5 lakh per depositor
        per bank, which is what makes spreading deposits rational rather than fussy. Settlement at an exchange is
        guaranteed through a clearing corporation, and a shortfall caused by a member's failure is a capped claim on
        that exchange's protection fund — a different number at each exchange, and revised from time to time. The
        ombudsman routes for banks and insurers answer for service failures and refusals, with their own limits and
        windows. Nothing in that list answers for the market, which is why the honest sentence about protection is that
        it covers the plumbing and never the decision.
      </Debrief>
    </div>
  )
}
/* ------------------------------------------------------------------ l5-055 */

const ENTITIES = [
  { key: 'bank', label: 'A bank', channel: 'the single-window banking ombudsman', window: 30, unit: 'days after the complaint' },
  { key: 'nbfc', label: 'A non-bank lender', channel: 'the same ombudsman, which covers these lenders', window: 30, unit: 'days after the complaint' },
  { key: 'broker', label: 'A broker or a fund', channel: 'the market regulator\u2019s complaint system', window: 30, unit: 'days after the complaint' },
  { key: 'insurer', label: 'An insurer', channel: 'the insurer\u2019s grievance officer, then the insurance ombudsman', window: 365, unit: 'days to complain, from the refusal' },
]

const EVIDENCE = [
  'The account statement or contract note',
  'The complaint reference number from the entity',
  'Written correspondence, including automated replies',
  'The agreement, policy or scheme document',
  'Dates and amounts in a single list',
  'The demand, in one sentence',
]

export function L5ComplaintBuilder() {
  const [entityKey, setEntityKey] = useState(ENTITIES[0].key)
  const [days, setDays] = useState(35)
  const [ticks, setTicks] = useState<string[]>([])
  const [demand, setDemand] = useState<string[]>([])

  const entity = ENTITIES.find((e) => e.key === entityKey) ?? ENTITIES[0]
  const completeness = (ticks.length / EVIDENCE.length) * 100
  const windowOpen = days >= entity.window
  const expired = entity.key === 'insurer' ? days > 365 : days > 730
  const specificity = demand.length
  const ready = windowOpen && completeness >= 80 && specificity >= 3 && !expired

  const checks = [
    {
      ok: windowOpen,
      text: windowOpen
        ? `${days} days since the complaint: the entity has had its ${entity.key === 'insurer' ? 'turn' : 'thirty-day window'}, so the next rung is ${entity.channel}.`
        : `${days} days since the complaint. The entity gets its window first, and asking before it closes is how a complaint is sent back rather than heard.`,
    },
    {
      ok: completeness >= 80,
      text: completeness >= 80
        ? `The evidence pack is ${completeness.toFixed(0)}% assembled. Complaints are decided on the record, and the record is what you sent.`
        : `The evidence pack is ${completeness.toFixed(0)}% assembled. Missing: ${EVIDENCE.filter((e) => !ticks.includes(e)).join('; ')}.`,
    },
    {
      ok: specificity >= 3,
      text: specificity >= 3
        ? 'The demand names what you want. A complaint that asks for "action against the bank" cannot be granted by anybody.'
        : 'The demand is not yet specific. What is missing: ' +
          ['the amount or the correction wanted', 'the date it went wrong', 'the rule or the charge in dispute', 'what you will do if it is not resolved']
            .filter((_, i) => !demand.includes(String(i)))
            .join('; ') +
          '.',
    },
    {
      ok: !expired,
      text: expired
        ? 'The escalation window has closed: a year for an insurance complaint from the refusal, and two years for a consumer case. A regulator can still act on its own, but you can no longer compel a decision.'
        : `Still inside the escalation window, which is a year from an insurance refusal and two years from the cause of action for a consumer case.`,
    },
    {
      ok: ticks.includes('Written correspondence, including automated replies'),
      text: 'Automated replies are evidence too: they timestamp the entity\u2019s silence, which is often the complaint in itself.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Build the escalation</h4>
          <div className="grid grid-cols-2 gap-2">
            {ENTITIES.map((e) => (
              <Choice key={e.key} label={e.label} active={e.key === entityKey} onClick={() => setEntityKey(e.key)} />
            ))}
          </div>
          <div className="mt-3">
            <Slider label="Days since the complaint to the entity" value={days} min={0} max={400} step={5} onChange={setDays} format={(v) => `${v} days`} />
          </div>
          <p className="mt-3 text-[11px] text-ink-400">Tick what the pack contains.</p>
          <div className="mt-1 grid grid-cols-1 gap-2">
            {EVIDENCE.map((e) => (
              <Choice
                key={e}
                label={e}
                active={ticks.includes(e)}
                onClick={() => setTicks((prev) => (prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]))}
              />
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Make the demand specific</h4>
            <div className="grid grid-cols-1 gap-2">
              {['the amount or the correction wanted', 'the date it went wrong', 'the rule or the charge in dispute', 'what happens if it is not resolved'].map((d, i) => (
                <Choice
                  key={d}
                  label={d}
                  active={demand.includes(String(i))}
                  onClick={() => setDemand((prev) => (prev.includes(String(i)) ? prev.filter((x) => x !== String(i)) : [...prev, String(i)]))}
                />
              ))}
            </div>
            <ul className="mt-3 space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Evidence" value={`${completeness.toFixed(0)}%`} tone={completeness >= 80 ? 'good' : 'bad'} />
              <Stat label="Window" value={expired ? 'closed' : windowOpen ? 'open' : 'not yet'} tone={expired ? 'bad' : windowOpen ? 'good' : 'bad'} />
              <Stat label="Ready" value={ready ? 'yes' : 'not yet'} tone={ready ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Next rung: {entity.channel}</li>
              <li>Escalation of an award: thirty days to the appellate authority, in the banking scheme</li>
              <li>Insurance refusal: complain within one year; the award ceiling is ₹50 lakh</li>
              <li className="text-white">Keep every complaint at the same reference number, and change only the addressee</li>
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A complaint works when it is a file rather than a feeling. Choose the channel by the entity rather than by
        volume, because a bank, a lender, a broker and an insurer answer to different forums with different clocks.
        Give the entity its defined window before escalating, and keep the automatic reply that proves the window ran.
        Then make the demand specific: the amount or the correction, the date, the rule or charge in dispute, and what
        you will do next. The two mistakes that sink otherwise valid complaints are escalation before the window closes
        and a demand nobody can grant — both are timing and drafting problems, not problems of merit. And the clock is
        real: a year for an insurance refusal, two years for a consumer case, so the discipline is to complain while
        the events are still recent.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-056 */

export function L5ConsumerCaseBuilder() {
  const [value, setValue] = useState(180_000)
  const [nature, setNature] = useState<'deficiency' | 'practice'>('deficiency')
  const [months, setMonths] = useState(9)
  const [docs, setDocs] = useState<string[]>([])

  const tier = value <= 5_000_000 ? 'the district commission' : value <= 20_000_000 ? 'the state commission' : 'the national commission'
  const tierLimit = value <= 5_000_000 ? 5_000_000 : value <= 20_000_000 ? 20_000_000 : 0
  const withinLimitation = months <= 24
  const monthsLeft = Math.max(0, 24 - months)
  const readiness = (docs.length / 5) * 100

  const reliefs =
    nature === 'deficiency'
      ? ['Removal of the deficiency and the return of the amount charged', 'Compensation for the loss caused', 'Interest on the amount retained, from the date it was taken', 'Costs of the proceedings']
      : ['Discontinuation of the practice', 'Refund or return of the amount collected', 'Compensation for the loss caused', 'Punitive damages where the practice was repeated']

  const checks = [
    {
      ok: true,
      text: `A dispute of ${rupees(value)} belongs to ${tier}${tierLimit ? `, whose ceiling is ${rupees(tierLimit)}` : ', which has no ceiling'}. The value decides the forum before any argument about the merits does.`,
    },
    {
      ok: withinLimitation,
      text: withinLimitation
        ? `${months} months since the problem arose, against a two-year limitation: about ${monthsLeft} month(s) left, and a delay explained and recorded can still be condoned.`
        : `${months} months have passed. The two-year limitation has run, and a case now depends on persuading the commission to condone the delay rather than on the merits.`,
    },
    {
      ok: readiness >= 80,
      text: readiness >= 80
        ? 'The documents are in place, and that is the difference between a case and a complaint: a commission decides on evidence with dates.'
        : `Documents are ${readiness.toFixed(0)}% in place. Missing: ${['the agreement or policy', 'the statement showing the charge', 'all correspondence with the entity', 'the complaint reference numbers', 'a short timeline of what happened'].filter((d) => !docs.includes(d)).join('; ')}.`,
    },
    {
      ok: nature === 'deficiency' || value <= 5_000_000,
      text: nature === 'deficiency'
        ? 'A deficiency in service is a failure to deliver what the contract promised, and it does not require proof of dishonesty — only of the gap between the promise and the outcome.'
        : 'An unfair trade practice involves a method rather than a single failure: an undisclosed charge built into a product, a misleading description, or a condition that serves no purpose but to keep you in.',
    },
    {
      ok: true,
      text: 'The commission and the regulator\u2019s ombudsman are alternatives rather than steps: choose one for the same relief, and use the free forum first where the claim is small and the failure is procedural.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Place the case before you write it</h4>
          <div className="space-y-3">
            <Slider label="Value of the claim" value={value} min={20_000} max={40_000_000} step={20_000} onChange={setValue} />
            <Slider label="Months since the problem arose" value={months} min={1} max={36} step={1} onChange={setMonths} format={(v) => `${v}`} />
            <div className="flex gap-2">
              <Choice label="Deficiency in service" active={nature === 'deficiency'} onClick={() => setNature('deficiency')} />
              <Choice label="Unfair trade practice" active={nature === 'practice'} onClick={() => setNature('practice')} />
            </div>
            <p className="text-[11px] text-ink-400">Documents assembled so far.</p>
            <div className="grid grid-cols-1 gap-2">
              {['the agreement or policy', 'the statement showing the charge', 'all correspondence with the entity', 'the complaint reference numbers', 'a short timeline of what happened'].map((d) => (
                <Choice key={d} label={d} active={docs.includes(d)} onClick={() => setDocs((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]))} />
              ))}
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Forum" value={tier.replace('the ', '')} />
              <Stat label="Limitation" value={withinLimitation ? 'live' : 'expired'} tone={withinLimitation ? 'good' : 'bad'} />
              <Stat label="Documents" value={`${readiness.toFixed(0)}%`} tone={readiness >= 80 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              {reliefs.map((r) => (
                <li key={r}>{r}</li>
              ))}
              <li className="text-white">Filing is online, a lawyer is not required, and the fee is small</li>
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
        Consumer law gives a financial customer a forum of their own, and the first thing it does is sort cases by
        value: up to ₹50 lakh at the district commission, between ₹50 lakh and ₹2 crore at the state commission, and
        above that nationally. The second thing it does is impose a deadline — two years from the cause of action, with
        room to explain a delay. What makes the route usable is that it does not require a lawyer and can be filed
        online, and what makes it distinct from the regulator's schemes is scope: the ombudsman decides within a defined
        scheme and a ceiling, while the commission can decide wider claims for compensation and can address a practice
        rather than one transaction. Choose by what you actually want, and do not run both for the same relief.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-057 */

const CONTRACT_CLAUSES = [
  { key: 'discretion', label: 'Anything done "at the lender\u2019s discretion"', kind: 'risk' as const, why: 'Discretionary clauses decide outcomes that no rate table shows, from approving a co-borrower to releasing security.' },
  { key: 'reset', label: 'How the rate resets, and how often', kind: 'cost' as const, why: 'The benchmark, the spread and the reset frequency together decide your payment for the whole tenure.' },
  { key: 'fees', label: 'The fee schedule and what triggers it', kind: 'cost' as const, why: 'Late fees, statement charges and duplicate-document fees are priced individually and read collectively.' },
  { key: 'acceleration', label: 'When the whole amount becomes due', kind: 'risk' as const, why: 'An acceleration clause converts one missed payment into a demand for the entire balance.' },
  { key: 'setoff', label: 'Set-off, security and guarantor liability', kind: 'risk' as const, why: 'Set-off lets the lender take from your deposits; the guarantor clause hands the same obligation to somebody else.' },
  { key: 'renewal', label: 'Automatic renewal and termination', kind: 'control' as const, why: 'Renewal by default and notice periods decide whether you can leave when you want to.' },
  { key: 'authority', label: 'What you authorise the other side to do', kind: 'control' as const, why: 'Debit authority, standing instructions and powers of attorney are the clauses that act without asking again.' },
  { key: 'dispute', label: 'Dispute resolution and jurisdiction', kind: 'control' as const, why: 'A clause fixing the city or the arbitrator decides whether complaining is realistic at your size of claim.' },
]

export function L5ContractScanner() {
  const [clause, setClause] = useState(CONTRACT_CLAUSES[0].key)
  const [flagged, setFlagged] = useState<string[]>([])
  const [rate, setRate] = useState(11)
  const [annualFee, setAnnualFee] = useState(0)
  const [value, setValue] = useState(2_000_000)
  const [years, setYears] = useState(5)

  const c = CONTRACT_CLAUSES.find((x) => x.key === clause) ?? CONTRACT_CLAUSES[0]
  const unflagged = (kind: 'cost' | 'other') =>
    CONTRACT_CLAUSES.filter((x) => !flagged.includes(x.key)).filter((x) =>
      kind === 'cost' ? x.kind === 'cost' : x.kind !== 'cost',
    )
  const riskLeft = unflagged('other').length
  const costLeft = unflagged('cost').length
  const totalFee = annualFee * years
  const feeShare = (totalFee / value) * 100
  const rateCost = (value * rate * years) / 100
  const score = 8 - flagged.length

  const checks = [
    {
      ok: riskLeft === 0,
      text: riskLeft === 0
        ? 'Every risk clause has been read and marked. Acceleration, set-off and the guarantor clause are the three that turn a missed payment into a bigger problem than the payment.'
        : `${riskLeft} risk clause(s) unmarked: ${unflagged('other').map((x) => x.label).join('; ')}. These are the ones to read twice, because none of them shows up in a rate quote.`,
    },
    {
      ok: costLeft === 0,
      text: costLeft === 0
        ? 'Every cost clause has been identified. Cost clauses are also the only ones worth negotiating, and they are usually negotiable at the point of sale rather than afterwards.'
        : `${costLeft} cost clause(s) not yet identified: ${unflagged('cost').map((x) => x.label).join('; ')}. Ask for the schedule in writing: a fee quoted verbally is not part of the contract.`,
    },
    {
      ok: feeShare < 5,
      text: feeShare < 5
        ? `A yearly fee of ${rupees(annualFee)} over ${years} years costs ${rupees(totalFee)}, or ${feeShare.toFixed(1)}% of the amount involved. Small percentages of a large number are still large numbers.`
        : `A yearly fee of ${rupees(annualFee)} over ${years} years costs ${rupees(totalFee)} — ${feeShare.toFixed(1)}% of the amount involved, charged in addition to interest of about ${rupees(rateCost)}.`,
    },
    {
      ok: score >= 6,
      text: score >= 6
        ? `${score} of 8 clauses carry a marked reading. That is a contract understood rather than skimmed.`
        : `${score} of 8 clauses marked so far. The standard failure is to read the rate page, sign the annexures and discover the fees, the authority and the jurisdiction clause later.`,
    },
    {
      ok: true,
      text: `The clause you are looking at: ${c.why} Some clauses cannot be enforced even when they are written down, which is why ${c.kind === 'cost' ? 'the rulebook, not the word' : 'knowing the rule'} matters more than the wording.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Mark the clauses that matter</h4>
          <div className="grid grid-cols-1 gap-2">
            {CONTRACT_CLAUSES.map((x) => (
              <Choice
                key={x.key}
                label={`${flagged.includes(x.key) ? '✓ ' : ''}${x.label}`}
                active={x.key === clause}
                onClick={() => {
                  setClause(x.key)
                  setFlagged((prev) => (prev.includes(x.key) ? prev : [...prev, x.key]))
                }}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Amount involved" value={value} min={100_000} max={20_000_000} step={100_000} onChange={setValue} />
            <Slider label="Rate" value={rate} min={6} max={24} step={0.5} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Yearly fee buried in the schedule" value={annualFee} min={0} max={20_000} step={500} onChange={setAnnualFee} />
            <Slider label="Years" value={years} min={1} max={20} step={1} onChange={setYears} format={(v) => `${v}`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Clauses marked" value={`${flagged.length}/8`} tone={flagged.length >= 6 ? 'good' : 'bad'} />
              <Stat label="Yearly fees" value={rupees(totalFee)} tone={feeShare >= 5 ? 'bad' : 'good'} />
              <Stat label="Interest cost" value={rupeesShort(rateCost)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Current clause kind: {c.kind}</li>
              <li>{c.why}</li>
              <li>Cost clauses: negotiable. Risk clauses: read twice. Control clauses: they decide your exit</li>
              <li className="text-white">A clause cannot override a rule: where the two conflict, the rule wins</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((x) => (
                <Check key={x.text} ok={x.ok}>
                  {x.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A financial contract is a risk allocation document wearing the clothes of a price list. Read it that way and
        eight clauses do most of the work: definitions that decide meaning, the pricing and reset clause, the fee
        schedule, the acceleration clause that makes the whole balance due on a default, the security and set-off
        clause, the renewal and termination terms, the authority you grant through direct debits and standing
        instructions, and the dispute clause that decides where and how a disagreement is heard. Cost clauses are the
        ones to negotiate and the easiest to compare between providers; risk clauses are the ones to read twice, because
        nothing in a headline rate tells you about them; and control clauses decide whether you can leave. Where a
        clause contradicts a rule the regulator has made, the rule prevails — which is why knowing the rule is more
        useful than arguing about the wording.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-058 */

export function L5LoanAgreementAudit() {
  const [amount, setAmount] = useState(3_000_000)
  const [rate, setRate] = useState(9.5)
  const [years, setYears] = useState(15)
  const [floating, setFloating] = useState(true)
  const [individual, setIndividual] = useState(true)
  const [smallEnterprise, setSmallEnterprise] = useState(false)
  const [prepayCharge, setPrepayCharge] = useState(2)
  const [penalInterest, setPenalInterest] = useState(false)
  const [linkedInsurance, setLinkedInsurance] = useState(false)
  const [resetExplained, setResetExplained] = useState(false)

  const r = rate / 1200
  const n = years * 12
  const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalInterest = emi * n - amount
  const repaymentClaim = amount * (prepayCharge / 100)
  const floatingIndividual = floating && (individual || smallEnterprise) && amount <= 5_000_000
  const prepayIllegal = floatingIndividual && prepayCharge > 0
  const insuranceCost = linkedInsurance ? amount * 0.04 : 0
  const violations = [prepayIllegal, penalInterest, linkedInsurance, floating && !resetExplained].filter(Boolean).length
  const recoverable = (prepayIllegal ? repaymentClaim : 0) + (penalInterest ? amount * 0.01 : 0)

  const checks = [
    {
      ok: !prepayIllegal,
      text: prepayIllegal
        ? `A prepayment charge of ${prepayCharge.toFixed(1)}% on a floating-rate loan of ${rupees(amount)} to an individual${smallEnterprise ? ' or a small enterprise' : ''} is not permitted: the directions in force from 1 January 2026 bar prepayment and foreclosure charges on floating-rate loans in this category, whether the repayment is partial or in full. The clause is worth ${rupees(repaymentClaim)} if it is ever applied.`
        : floating
          ? `No prepayment charge is attached to this floating-rate loan, which matches the rule: for this category the ban runs from 1 January 2026, and restrictions such as a lock-in or a minimum prepayment amount are not allowed either.`
          : 'This is a fixed-rate loan, where a prepayment charge is not prohibited. Fixed rates buy certainty at a price, and the exit fee is part of that price — so compare it before signing rather than after.',
    },
    {
      ok: !penalInterest,
      text: penalInterest
        ? 'The agreement charges the penalty as interest, and interest on a penalty compounds it. Since 1 January 2024 penalties must be levied as penal charges, in rupees or as a stated amount, disclosed in the agreement, and never capitalised.'
        : 'The agreement charges penalties as charges rather than as interest, which is the position the rules require and the cheaper one for a borrower in a bad month.',
    },
    {
      ok: !linkedInsurance,
      text: linkedInsurance
        ? `A bundled insurance premium of about ${rupees(insuranceCost)} has been added to the loan. Bundling is permitted only with consent and with the cost shown separately, and financing it means paying interest on the premium for the whole tenure.`
        : 'No insurance has been added to the loan. Cover bought separately can be priced against alternatives that are not available inside a bundled product.',
    },
    {
      ok: !floating || resetExplained,
      text: floating
        ? resetExplained
          ? 'The reset options are explained: on a change in the benchmark, the borrower must be offered the choice between a changed instalment and a changed tenure, and told what the new payment will be.'
          : 'The agreement is silent on what happens at reset. On a floating-rate loan the borrower is entitled to be told what a reset does and to choose between a higher instalment and a longer tenure.'
        : 'A fixed rate carries no reset question, and the risk of the benchmark moving is taken by the lender rather than by you.',
    },
    {
      ok: violations === 0,
      text: violations === 0
        ? `Every clause in this agreement sits inside the rules. Total interest over the tenure: about ${rupees(totalInterest)} on ${rupees(amount)}.`
        : `${violations} clause(s) sit outside the rules, with about ${rupees(recoverable)} recoverable in the scenarios shown. Cost is not the only thing to audit: an unenforceable clause is a right you still have to claim.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Audit the agreement clause by clause</h4>
          <div className="space-y-3">
            <Slider label="Loan amount" value={amount} min={200_000} max={20_000_000} step={100_000} onChange={setAmount} />
            <Slider label="Rate" value={rate} min={7} max={24} step={0.25} onChange={setRate} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Tenure" value={years} min={1} max={25} step={1} onChange={setYears} format={(v) => `${v} years`} />
            <Slider label="Prepayment charge in the agreement" value={prepayCharge} min={0} max={5} step={0.25} onChange={setPrepayCharge} format={(v) => `${v.toFixed(2)}%`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Floating rate" active={floating} onClick={() => setFloating((v) => !v)} />
              <Choice label="To an individual" active={individual} onClick={() => setIndividual((v) => !v)} />
              <Choice label="To a small enterprise" active={smallEnterprise} onClick={() => setSmallEnterprise((v) => !v)} />
              <Choice label="Penalty charged as interest" active={penalInterest} onClick={() => setPenalInterest((v) => !v)} />
              <Choice label="Insurance bundled in" active={linkedInsurance} onClick={() => setLinkedInsurance((v) => !v)} />
              <Choice label="Reset options explained" active={resetExplained} onClick={() => setResetExplained((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Instalment" value={rupees(emi)} />
              <Stat label="Interest over the tenure" value={rupeesShort(totalInterest)} tone="bad" />
              <Stat label="Clauses outside the rules" value={`${violations}`} tone={violations === 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Prepayment charge claimed: {rupees(repaymentClaim)}</li>
              <li>Bundled cover financed: {rupees(insuranceCost)}</li>
              <li>Potentially recoverable: {rupees(recoverable)}</li>
              <li>Interest on the bundle is paid for the whole tenure</li>
              <li className="text-white">Rule changes apply to loans in force, so an old agreement is not automatically exempt</li>
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
        A loan agreement has four moving parts and one direction of travel: everything you signed, and nothing the
        agreement forgot to mention. Start with the pricing clause and how it resets, because on a floating-rate loan
        the benchmark, the spread and the reset decide your payment for years — and the rules require the lender to
        explain what a reset does and to offer the choice between a higher instalment and a longer tenure. Then check
        the exit: prepayment charges on floating-rate loans to individuals and small enterprises are barred from
        1 January 2026, and lock-ins and minimum prepayment amounts meant to keep you in are not allowed either. Then
        the penalty clause, which since January 2024 must be a charge rather than interest and must never be capitalised,
        because interest on a penalty is how a bad month becomes a bad year. Finally the security, the guarantor and any
        bundled insurance, which are where cost and risk quietly change hands. Every one of those clauses is checkable
        against a published rule rather than against a lender's assurance.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-059 */

export function L5PolicyReader() {
  const [claim, setClaim] = useState(320_000)
  const [roomLimit, setRoomLimit] = useState(6_000)
  const [roomActual, setRoomActual] = useState(11_000)
  const [copay, setCopay] = useState(10)
  const [monthsCovered, setMonthsCovered] = useState(30)
  const [daysSinceStart, setDaysSinceStart] = useState(120)
  const [listedTreatment, setListedTreatment] = useState(false)

  const monthsServed = daysSinceStart / 30
  const roomRatio = roomActual > roomLimit ? roomLimit / roomActual : 1
  const roomDeduction = claim * (1 - roomRatio)
  const afterRoom = claim * roomRatio
  const copayDeduction = (afterRoom * copay) / 100
  const afterCopay = afterRoom - copayDeduction
  const waitingBlocked = listedTreatment ? monthsServed < monthsCovered : monthsServed < 1
  const payout = waitingBlocked ? 0 : afterCopay
  const freeLookOpen = daysSinceStart <= 30
  const moratoriumDone = monthsServed >= 60

  const checks = [
    {
      ok: roomActual <= roomLimit,
      text: roomActual <= roomLimit
        ? `Room rent of ${rupees(roomActual)} against a limit of ${rupees(roomLimit)}: the bill is paid in full on this count, which is the simplest way to avoid the largest avoidable deduction in health insurance.`
        : `The room rate exceeds the limit, and the deduction is proportionate rather than limited to the room: every part of the bill is reduced by the same ratio, costing ${rupees(roomDeduction)} on a bill of ${rupees(claim)}.`,
    },
    {
      ok: copay === 0,
      text: copay === 0
        ? 'No co-payment applies, so the insurer takes the whole of the allowed bill.'
        : `A co-payment of ${copay}% costs ${rupees(copayDeduction)} on this claim. Co-payment is a permanent share of every claim, which is why it matters most on the policy you keep for decades.`,
    },
    {
      ok: !waitingBlocked,
      text: waitingBlocked
        ? `The claim falls inside a waiting period: ${monthsServed.toFixed(1)} months of cover against ${monthsCovered} months required. Nothing is payable for that treatment, and the waiting period already served travels with you if you move to another insurer.`
        : `Cover has run ${monthsServed.toFixed(1)} months, past the waiting period that applies here. Initial waiting is thirty days except for accidents, pre-existing conditions are capped at thirty-six months, and specific treatments carry their own clocks.`,
    },
    {
      ok: freeLookOpen,
      text: freeLookOpen
        ? `Day ${daysSinceStart} of the thirty-day free-look window: the policy can still be returned and the premium refunded, less the costs the rules permit. This is the moment to read the wording rather than the brochure.`
        : `Day ${daysSinceStart} — the free-look window has closed. The reading you do now is for the next renewal, and for the portability decision.`,
    },
    {
      ok: moratoriumDone || payout > 0,
      text: moratoriumDone
        ? 'The moratorium has run: after sixty months, a claim cannot be contested on the ground of non-disclosure, except where there is fraud. That is the strongest protection a long-held policy carries.'
        : `The moratorium is still ${Math.max(0, 60 - monthsServed).toFixed(0)} months away. Until then, the disclosure in the proposal form is the document that decides whether a claim is paid.`,
    },
    {
      ok: payout === claim,
      text: `Payout on this claim: ${rupees(payout)} of ${rupees(claim)}. The difference is not a decision anybody made at the claim desk: each rupee of it comes from a clause written into the wording before you bought, which is exactly why the wording is worth reading first.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Read the wording, then the bill</h4>
          <div className="space-y-3">
            <Slider label="Claim amount" value={claim} min={50_000} max={2_000_000} step={10_000} onChange={setClaim} />
            <Slider label="Room rent limit in the wording" value={roomLimit} min={2_000} max={20_000} step={500} onChange={setRoomLimit} />
            <Slider label="Room rent you actually paid" value={roomActual} min={2_000} max={30_000} step={500} onChange={setRoomActual} />
            <Slider label="Co-payment" value={copay} min={0} max={30} step={1} onChange={setCopay} format={(v) => `${v}%`} />
            <Slider label="Waiting period for this condition" value={monthsCovered} min={1} max={48} step={1} onChange={setMonthsCovered} format={(v) => `${v} months`} />
            <Slider label="Days since the policy started" value={daysSinceStart} min={1} max={2_400} step={1} onChange={setDaysSinceStart} format={(v) => `${v} days`} />
            <Choice label="The treatment is on the listed list" active={listedTreatment} onClick={() => setListedTreatment((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Payout" value={rupeesShort(payout)} tone={payout > 0 ? 'good' : 'bad'} />
              <Stat label="Room deduction" value={rupeesShort(roomDeduction)} tone={roomDeduction > 0 ? 'bad' : 'good'} />
              <Stat label="Co-payment" value={rupeesShort(copayDeduction)} tone={copayDeduction > 0 ? 'bad' : 'good'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Free look: {freeLookOpen ? 'open' : 'closed'}</li>
              <li>Moratorium: {moratoriumDone ? 'complete' : `${Math.max(0, 60 - monthsServed).toFixed(0)} months to go`}</li>
              <li>Waiting periods: 30 days initially, up to 36 months for pre-existing conditions</li>
              <li>Portability keeps the waiting period already served</li>
              <li className="text-white">The schedule gives the facts; the wording decides what is paid</li>
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
        An insurance policy is two documents, and confusing them is how a claim surprises its owner. The schedule states
        the facts — who is covered, for how much, from when, at what premium — and the wording decides what is actually
        paid. Four clause families do most of that work. Waiting periods decide whether the condition is covered yet:
        thirty days at the start except for accidents, up to thirty-six months for pre-existing conditions, and a
        sixty-month moratorium after which a claim cannot be contested on the ground of non-disclosure except where
        there is fraud. Sub-limits decide how much of the bill counts, and a room-rent limit reduces the whole bill
        proportionately rather than trimming the room charge. Co-payment takes a permanent share of every claim.
        Exclusions decide what is never covered. The free-look window is the only one of these that can be used to undo
        a bad purchase, at thirty days, and portability is what preserves the waiting periods already served when a
        policy is moved.
      </Debrief>
    </div>
  )
}
