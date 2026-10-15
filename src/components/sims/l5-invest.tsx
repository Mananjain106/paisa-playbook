import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band two, batch 1 labs (chapters l5-020 to l5-029).
 *
 * Ten separate simulations, one per chapter:
 *   l5-portfolio-architect    build from purpose and horizon, then write the policy
 *   l5-allocation-designer    set target weights and watch drift and a glide path
 *   l5-overlap-checker        look through wrappers and measure real concentration
 *   l5-rebalance-trigger      compare a calendar rule with a threshold band, net of tax
 *   l5-goal-mapper            map money to dated goals and find the shortfall
 *   l5-reit-analyser          turn rent into a distribution and split it by tax treatment
 *   l5-invit-analyser         weigh a concession's cash flows against its end date
 *   l5-global-diversifier     price a remittance after TCS and currency, and report it
 *   l5-etf-cost-check         compare an ETF with an index fund, spread by spread
 *   l5-alternatives-screener  test whether an alternative is even accessible to you
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: equity short-term gains at 20% and long-term gains at 12.5% above a
 * ₹1.25 lakh annual exemption for listed equity held over 12 months; the REIT
 * and InvIT requirement to distribute at least 90% of net distributable cash
 * flow; the exemption of the dividend component of those distributions for
 * unitholders from April 2026; the ₹1 crore minimum for an AIF; the USD 250,000
 * annual LRS limit with tax collected at source above ₹10 lakh; and the RBI's
 * industry-wide USD 7 billion ceiling on overseas mutual fund investment. All
 * amounts and returns are illustrative.
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

/* ------------------------------------------------------------------ l5-020 */

type Bucket = { id: string; label: string; years: number; equity: number; debt: number; gold: number }

export function L5PortfolioArchitect() {
  const [buckets, setBuckets] = useState<Bucket[]>([
    { id: 'short', label: 'Needed within 3 years', years: 3, equity: 10, debt: 80, gold: 10 },
    { id: 'mid', label: 'Needed in 5 to 12 years', years: 8, equity: 65, debt: 30, gold: 5 },
    { id: 'long', label: 'Needed after 15 years', years: 20, equity: 80, debt: 15, gold: 5 },
  ])
  const [monthly, setMonthly] = useState(15_000)
  const [policyWritten, setPolicyWritten] = useState(false)

  const set = (id: string, patch: Partial<Bucket>) =>
    setBuckets((prev) => prev.map((b) => (b.id === id ? { ...b, ...patch } : b)))

  // A crude but honest stress test: the worst realistic year for that mix.
  const stress = (b: Bucket) => -(b.equity * 0.45 + b.gold * 0.2 - b.debt * 0.02)
  const worst = Math.min(...buckets.map(stress))

  const checks = [
    { ok: buckets.every((b) => b.equity + b.debt + b.gold === 100), text: 'Each bucket sums to 100%. A mix that does not add up is a mix that has not been decided.' },
    { ok: buckets[0].equity <= 20, text: `Money needed within three years holds ${buckets[0].equity}% equity. A horizon of three years does not give a drawdown time to recover.` },
    { ok: buckets[2].equity >= 60, text: `Money needed after fifteen years holds ${buckets[2].equity}% equity. Too little equity over that horizon is the risk of not getting there.` },
    { ok: buckets.every((b, i) => i === 0 || b.equity >= buckets[i - 1].equity - 20), text: 'Equity rises monotonically with the horizon, which is what a horizon-matched plan looks like.' },
    { ok: policyWritten, text: policyWritten ? 'The policy is written down: purpose, horizon, mix, and the rule for changing it.' : 'Nothing is written down, so the mix will be re-decided in the middle of a bad month.' },
  ]

  const policy = buckets
    .map((b) => `• ${b.label}: ${b.equity}/${b.debt}/${b.gold} equity/debt/gold, reviewed annually`)
    .join('\n')

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Build from purpose down</h4>
          <div className="space-y-4">
            {buckets.map((b) => (
              <div key={b.id} className="rounded-lg border border-white/10 p-2">
                <Slider label={`${b.label} — horizon`} value={b.years} min={1} max={35} step={1} onChange={(v) => set(b.id, { years: v })} format={(v) => `${v} years`} />
                <div className="mt-2 space-y-1">
                  <Slider label="Equity" value={b.equity} min={0} max={100} step={5} onChange={(v) => set(b.id, { equity: v })} format={(v) => `${v}%`} />
                  <Slider label="Debt" value={b.debt} min={0} max={100} step={5} onChange={(v) => set(b.id, { debt: v })} format={(v) => `${v}%`} />
                  <Slider label="Gold" value={b.gold} min={0} max={100} step={5} onChange={(v) => set(b.id, { gold: v })} format={(v) => `${v}%`} />
                </div>
                <p className={`mt-1 text-[11px] ${b.equity + b.debt + b.gold === 100 ? 'text-ink-500' : 'text-rose-300'}`}>
                  Total {b.equity + b.debt + b.gold}%
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Invested each month" value={monthly} min={0} max={200_000} step={1_000} onChange={setMonthly} />
            <label className="flex items-center gap-2 text-xs text-ink-300">
              <input type="checkbox" checked={policyWritten} onChange={(e) => setPolicyWritten(e.target.checked)} className="accent-brand-400" />
              I have written the policy down
            </label>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Monthly invested" value={rupeesShort(monthly)} />
              <Stat label="Worst bucket fall" value={`${worst.toFixed(0)}%`} tone={worst < -25 ? 'bad' : 'neutral'} />
              <Stat label="Checks passed" value={`${checks.filter((c) => c.ok).length}/5`} />
            </div>
            <p className="mt-3 text-[11px] text-ink-400">
              The stress figure is a rough planning number, not a forecast: equity down 45%, gold down 20%,
              debt roughly flat. Use it to ask whether you could keep contributing after such a year.
            </p>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">The policy you would write</h4>
            <pre className="whitespace-pre-wrap text-[11px] leading-relaxed text-ink-300">{policy}</pre>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> A portfolio is a set of answers to dated questions,
          and the answers change with the date: money needed in three years cannot be held in something that can
          halve, and money needed in thirty years cannot be held in something that cannot grow. The order of
          construction — purpose, horizon, risk capacity, mix, and products last — matters because products are
          the layer that changes constantly and the layer that matters least. Write the mix down, with the rule
          for changing it, so that the decision is made once rather than re-made in every bad month.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-021 */

const ASSETS = [
  { id: 'equity', label: 'Equity', cagr: 11 },
  { id: 'debt', label: 'Debt', cagr: 7 },
  { id: 'gold', label: 'Gold', cagr: 8 },
  { id: 'cash', label: 'Cash', cagr: 4 },
] as const

type AssetId = (typeof ASSETS)[number]['id']

export function L5AllocationDesigner() {
  const [weights, setWeights] = useState<Record<AssetId, number>>({ equity: 55, debt: 30, gold: 10, cash: 5 })
  const [glide, setGlide] = useState(2)
  const [years, setYears] = useState(15)

  const total = Object.values(weights).reduce((a, b) => a + b, 0)

  // Walk the years, drifting by each asset's assumed return, then apply the glide.
  const path: Record<AssetId, number>[] = []
  {
    let w: Record<AssetId, number> = { ...weights }
    let value = 100
    for (let y = 0; y < years; y++) {
      const target = glide
      // Glide: move `glide` points a year from equity to debt.
      const shifted: Record<AssetId, number> = { ...w }
      if (target > 0) {
        const move = Math.min(w.equity, target)
        shifted.equity -= move
        shifted.debt += move
      }
      const grown = ASSETS.reduce((acc, a) => acc + value * (shifted[a.id] / 100) * (1 + a.cagr / 100), 0)
      const next = {} as Record<AssetId, number>
      for (const a of ASSETS) next[a.id] = (value * (shifted[a.id] / 100) * (1 + a.cagr / 100) / grown) * 100
      w = next
      value = grown
      path.push({ ...w })
    }
  }
  const last = path[path.length - 1]
  const equityStart = path[0].equity
  const equityEnd = last.equity

  const checks = [
    { ok: total === 100, text: `The targets sum to ${total}%, so every rupee has a home.` },
    { ok: weights.cash >= 3, text: weights.cash >= 3 ? 'Cash is a deliberate slice rather than an accident of timing.' : 'Almost no cash means every shock is met by selling an asset, which is the moment you least want to sell.' },
    { ok: glide > 0, text: glide > 0 ? `A glide of ${glide} points a year from equity to debt reduces the risk of the mix as the date approaches.` : 'No glide path: the same mix is held on the day you need the money as twenty years before it.' },
    { ok: equityEnd >= 40, text: `After ${years} years, equity settles near ${equityEnd.toFixed(0)}% — above 40% for a long horizon, and still a real drawdown risk.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Set the targets, then the glide</h4>
          <div className="space-y-3">
            {ASSETS.map((a) => (
              <Slider
                key={a.id}
                label={`${a.label} — assumed ${a.cagr}% a year`}
                value={weights[a.id]}
                min={0}
                max={100}
                step={5}
                onChange={(v) => setWeights((prev) => ({ ...prev, [a.id]: v }))}
                format={(v) => `${v}%`}
              />
            ))}
            <Slider label="Points moved from equity to debt each year" value={glide} min={0} max={5} step={1} onChange={setGlide} format={(v) => `${v} pts/yr`} />
            <Slider label="Years to the goal" value={years} min={3} max={35} step={1} onChange={setYears} format={(v) => `${v} years`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Equity at start" value={`${equityStart.toFixed(0)}%`} />
              <Stat label="Equity at the end" value={`${equityEnd.toFixed(0)}%`} />
              <Stat label="Targets total" value={`${total}%`} tone={total === 100 ? 'good' : 'bad'} />
            </div>
            <div className="mt-3 flex h-24 items-end gap-2">
              {ASSETS.map((a) => (
                <div key={a.id} className="flex-1">
                  <div className="flex flex-col justify-end gap-1" style={{ height: '72px' }}>
                    <div
                      className="w-full rounded-sm bg-brand-400"
                      style={{ height: `${last[a.id] * 0.7}px` }}
                      title={`${a.label}: ${last[a.id].toFixed(1)}%`}
                    />
                  </div>
                  <span className="mt-1 block text-center text-[10px] text-ink-500">{a.label}</span>
                  <span className="block text-center text-[10px] text-brand-300">{last[a.id].toFixed(0)}%</span>
                </div>
              ))}
            </div>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Allocation is where the risk of a plan is set, long
          before any product is chosen. Each asset is on the page because it does a job no other asset does:
          equity compounds, debt keeps a date, gold behaves differently when the rupee or the world changes shape,
          and cash means you never have to sell an asset to meet an ordinary month. The glide path is the one
          scheduled change in a portfolio — reduce equity as the date approaches — and it should be written as a
          rule so that it does not become a market-timing decision. The assumed returns here are assumptions, not
          promises: the discipline is in the weights and the rule, not in the forecast.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-022 */

type Fund = { id: string; label: string; category: 'large' | 'mid' | 'debt' | 'gold'; financials: number; top: number; topName: string }

const FUNDS: Fund[] = [
  { id: 'a', label: 'Large-cap active A', category: 'large', financials: 34, top: 9.5, topName: 'HDFC Bank' },
  { id: 'b', label: 'Large-cap index fund', category: 'large', financials: 36, top: 11, topName: 'HDFC Bank' },
  { id: 'c', label: 'Large-cap active B', category: 'large', financials: 33, top: 8.8, topName: 'ICICI Bank' },
  { id: 'd', label: 'Mid-cap fund', category: 'mid', financials: 22, top: 4.2, topName: 'Federal Bank' },
  { id: 'e', label: 'Short-duration debt fund', category: 'debt', financials: 3, top: 2, topName: 'Treasury bill' },
  { id: 'f', label: 'Gold ETF', category: 'gold', financials: 0, top: 0, topName: '—' },
]

export function L5OverlapChecker() {
  const [amounts, setAmounts] = useState<Record<string, number>>({ a: 40_000, b: 40_000, c: 30_000, d: 20_000, e: 20_000, f: 10_000 })

  const total = Object.values(amounts).reduce((a, b) => a + b, 0) || 1
  const share = (id: string) => amounts[id] / total
  const financials = FUNDS.reduce((s, f) => s + share(f.id) * f.financials, 0)
  const largeShare = FUNDS.filter((f) => f.category === 'large').reduce((s, f) => s + share(f.id), 0)
  const largeCount = FUNDS.filter((f) => f.category === 'large' && amounts[f.id] > 0).length
  const topHolding = FUNDS.reduce((s, f) => s + share(f.id) * f.top, 0)
  const topName = FUNDS.reduce((best, f) => (f.top > best.top ? f : best), FUNDS[0]).topName
  const categories = new Set(FUNDS.filter((f) => amounts[f.id] > 0).map((f) => f.category)).size

  const checks = [
    { ok: largeShare <= 0.5, text: `Large-cap exposure is ${(largeShare * 100).toFixed(0)}% of the portfolio across ${largeCount} separate funds. Three funds in one category is one bet with three expense ratios.` },
    { ok: financials <= 30, text: `Looking through the wrappers, financials are ${financials.toFixed(0)}% of what you own. That is the exposure that counts, not the number of holdings.` },
    { ok: topHolding <= 5, text: `A single company — ${topName} — is ${topHolding.toFixed(1)}% of the portfolio once every wrapper is opened.` },
    { ok: categories >= 3, text: `${categories} asset categories are represented. Diversification is about what behaves differently, not about how many lines the statement has.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">What you actually hold</h4>
          <div className="space-y-2">
            {FUNDS.map((f) => (
              <div key={f.id} className="rounded-lg border border-white/10 p-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white">{f.label}</span>
                  <span className="text-[10px] text-ink-500">{f.category === 'large' ? 'large cap' : f.category}</span>
                </div>
                <Slider label="" value={amounts[f.id]} min={0} max={200_000} step={5_000} onChange={(v) => setAmounts((prev) => ({ ...prev, [f.id]: v }))} />
                <span className="text-[10px] text-ink-500">
                  financials {f.financials}% · largest holding {f.top}% ({f.topName})
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Financials exposure" value={`${financials.toFixed(0)}%`} tone={financials > 30 ? 'bad' : 'good'} />
              <Stat label="Largest company" value={`${topHolding.toFixed(1)}%`} />
              <Stat label="Categories" value={`${categories}`} tone={categories >= 3 ? 'good' : 'bad'} />
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
            <h4 className="mb-2 font-display text-sm text-white">Why the count lies</h4>
            <p className="text-xs text-ink-300">
              Two large-cap funds hold much the same fifty companies, so owning both buys concentration and pays
              two expense ratios. The honest measure is look-through: open every wrapper, add up the underlying
              holdings, and see what your largest exposures actually are. Single-issuer limits, sector
              concentration and category overlap are the three things that survive that test — and none of them
              appear anywhere on a statement that lists six scheme names.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-023 */

export function L5RebalanceTrigger() {
  const [targetEquity, setTargetEquity] = useState(60)
  const [band, setBand] = useState(5)
  const [fresh, setFresh] = useState(20_000)
  const [portfolio, setPortfolio] = useState(1_000_000)
  const [rule, setRule] = useState<'calendar' | 'threshold'>('threshold')

  // A deterministic path: equity returns 18% while debt returns 7% for four years.
  const equityReturn = 18
  const debtReturn = 7
  const rows: { year: number; equity: number; debt: number; action: string; tax: number }[] = []
  {
    let equity = (targetEquity / 100) * portfolio
    let debt = portfolio - equity
    for (let y = 1; y <= 4; y++) {
      equity *= 1 + equityReturn / 100
      debt *= 1 + debtReturn / 100
      const total = equity + debt
      const equityPct = (equity / total) * 100
      let action = 'no action'
      let tax = 0
      const overBand = Math.abs(equityPct - targetEquity) > band
      const due = rule === 'calendar' || overBand
      if (due) {
        const target = (targetEquity / 100) * (total + fresh)
        const move = equity - target
        if (move > 0) {
          // Sell equity down to target; the gain is long term if held over a year.
          const gain = move * 0.35
          tax = gain * 0.125
          equity -= move
          debt += move
          action = `sell ${rupeesShort(move)} of equity`
        } else {
          equity += fresh
          action = `direct ${rupeesShort(fresh)} of new money to equity`
        }
      }
      rows.push({ year: y, equity: equityPct, debt: 100 - equityPct, action, tax })
    }
  }
  const totalTax = rows.reduce((s, r) => s + r.tax, 0)
  const peakDrift = Math.max(...rows.map((r) => Math.abs(r.equity - (rule === 'calendar' ? r.debt : targetEquity))))

  const checks = [
    { ok: band <= 5, text: `A ${band} point band means the portfolio is allowed to drift before anything is traded. Wide bands trade less and cost less.` },
    { ok: rule === 'threshold', text: rule === 'threshold' ? 'A threshold rule acts when the band is crossed rather than on a fixed date, so it responds to drift instead of to the calendar.' : 'A calendar rule trades whether or not anything has moved, which pays tax and costs for no change in risk.' },
    { ok: fresh > 0, text: fresh > 0 ? `${rupeesShort(fresh)} of new contributions a year can do most of the rebalancing, which avoids selling anything.` : 'With no new money, every rebalance is a sale, and every sale is a tax event.' },
    { ok: totalTax <= portfolio * 0.01, text: `Tax on the four years of rebalancing is about ${rupees(totalTax)} — under 1% of the portfolio. If it were larger, the band or the rule is doing the damage.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Set the rule before the market moves</h4>
          <div className="space-y-3">
            <Slider label="Target equity weight" value={targetEquity} min={20} max={90} step={5} onChange={setTargetEquity} format={(v) => `${v}%`} />
            <Slider label="Tolerance band either side" value={band} min={1} max={15} step={1} onChange={setBand} format={(v) => `±${v} pts`} />
            <Slider label="New contributions each year" value={fresh} min={0} max={200_000} step={5_000} onChange={setFresh} />
            <Slider label="Portfolio today" value={portfolio} min={100_000} max={20_000_000} step={100_000} onChange={setPortfolio} />
          </div>
          <div className="mt-2 flex gap-2">
            {(
              [
                ['threshold', 'Threshold rule'],
                ['calendar', 'Calendar rule'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setRule(id)}
                className={`flex-1 rounded-lg border px-3 py-1.5 text-xs transition ${
                  rule === id ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Equity after 4 years" value={`${rows[3].equity.toFixed(0)}%`} tone={Math.abs(rows[3].equity - targetEquity) > band ? 'bad' : 'good'} />
              <Stat label="Rebalances" value={`${rows.filter((r) => r.action !== 'no action').length}/4`} />
              <Stat label="Tax over 4 years" value={rupeesShort(totalTax)} tone={totalTax > portfolio * 0.01 ? 'bad' : 'good'} />
            </div>
            <table className="mt-3 w-full text-xs">
              <thead>
                <tr className="text-ink-500">
                  <th className="pb-1 text-left font-normal">Year</th>
                  <th className="pb-1 text-right font-normal">Equity</th>
                  <th className="pb-1 text-left font-normal">Action</th>
                  <th className="pb-1 text-right font-normal">Tax</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[11px]">
                {rows.map((r) => (
                  <tr key={r.year} className="text-ink-300">
                    <td className="py-0.5">{r.year}</td>
                    <td className="py-0.5 text-right">{r.equity.toFixed(0)}%</td>
                    <td className="py-0.5 pl-2 font-sans">{r.action}</td>
                    <td className="py-0.5 text-right">{r.tax ? rupeesShort(r.tax) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-[11px] text-ink-500">
              Peak drift from target: {peakDrift.toFixed(0)} points. Equity returns 18% a year here and debt 7%,
              which is an assumption chosen to make the drift visible, not a forecast.
            </p>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Rebalancing is a risk decision expressed as a
          mechanical rule. Without a rule, the winning asset quietly becomes most of the portfolio, which is how
          a plan that was written as 60/40 arrives at 80/20 without anyone choosing it. With a rule, you choose
          the band, direct new money first, and accept that a sale costs tax — 20% of a short-term gain and 12.5%
          of a long-term one on listed equity, above the annual exemption. The rule that pays least tax is the one
          that uses contributions instead of sales, which is why the order is new money first, sales second.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-024 */

type Goal = { id: string; label: string; target: number; years: number; monthly: number; mix: 'cash' | 'balanced' | 'growth' }

export function L5GoalMapper() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 'buffer', label: 'Buffer top-up', target: 150_000, years: 1, monthly: 8_000, mix: 'cash' },
    { id: 'car', label: 'Vehicle', target: 800_000, years: 4, monthly: 12_000, mix: 'balanced' },
    { id: 'edu', label: 'Education', target: 2_500_000, years: 12, monthly: 10_000, mix: 'growth' },
    { id: 'retire', label: 'Retirement', target: 30_000_000, years: 28, monthly: 15_000, mix: 'growth' },
  ])
  const [surplus, setSurplus] = useState(30_000)
  const [inflation, setInflation] = useState(6)

  const rate = (mix: Goal['mix']) => (mix === 'cash' ? 5 : mix === 'balanced' ? 9 : 11.5)

  const rows = goals.map((g) => {
    const r = rate(g.mix) / 100 / 12
    const months = g.years * 12
    const fv = r === 0 ? g.monthly * months : g.monthly * ((Math.pow(1 + r, months) - 1) / r)
    const inflated = g.target * Math.pow(1 + inflation / 100, g.years)
    const needed = r === 0 ? inflated / months : (inflated * r) / (Math.pow(1 + r, months) - 1)
    return { ...g, fv, inflated, needed, funding: Math.min(150, (fv / inflated) * 100) }
  })

  const committed = goals.reduce((s, g) => s + g.monthly, 0)
  const totalNeeded = rows.reduce((s, r) => s + Math.max(0, r.needed - r.monthly), 0)

  const checks = [
    { ok: committed <= surplus, text: `Committed contributions total ${rupees(committed)} against ${rupees(surplus)} of investable surplus.` },
    { ok: rows.every((r) => (r.years <= 3 ? r.mix !== 'growth' : true)), text: 'No growth mix is used for a goal less than three years away, where a drawdown has no time to recover.' },
    { ok: rows.every((r) => r.target > 0 && r.years > 0), text: 'Every goal has both a date and an amount. A goal without a date cannot be funded.' },
    { ok: totalNeeded <= surplus, text: totalNeeded > 0 ? `Closing the shortfalls needs ${rupees(totalNeeded)} a month more than the plan commits. The gap is visible here because the goals were priced, not guessed.` : 'Every goal is on track at the contributions set.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Goals with dates and amounts</h4>
          <div className="space-y-3">
            {goals.map((g) => (
              <div key={g.id} className="rounded-lg border border-white/10 p-2">
                <span className="text-xs text-white">{g.label}</span>
                <div className="mt-1 space-y-1">
                  <Slider label="Target today" value={g.target} min={50_000} max={40_000_000} step={50_000} onChange={(v) => setGoals((prev) => prev.map((x) => (x.id === g.id ? { ...x, target: v } : x)))} />
                  <Slider label="Years away" value={g.years} min={1} max={35} step={1} onChange={(v) => setGoals((prev) => prev.map((x) => (x.id === g.id ? { ...x, years: v } : x)))} format={(v) => `${v} yrs`} />
                  <Slider label="Monthly contribution" value={g.monthly} min={0} max={60_000} step={500} onChange={(v) => setGoals((prev) => prev.map((x) => (x.id === g.id ? { ...x, monthly: v } : x)))} />
                </div>
                <button
                  onClick={() =>
                    setGoals((prev) =>
                      prev.map((x) =>
                        x.id === g.id
                          ? { ...x, mix: x.mix === 'cash' ? 'balanced' : x.mix === 'balanced' ? 'growth' : 'cash' }
                          : x,
                      ),
                    )
                  }
                  className="mt-1 rounded-lg border border-white/15 px-2 py-1 text-[11px] text-ink-300 transition hover:border-white/30"
                >
                  Mix: {g.mix} (assumed {rate(g.mix)}% a year) — tap to change
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Investable surplus each month" value={surplus} min={5_000} max={200_000} step={1_000} onChange={setSurplus} />
            <Slider label="Assumed inflation" value={inflation} min={3} max={10} step={0.5} onChange={setInflation} format={(v) => `${v}% a year`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Committed" value={rupeesShort(committed)} />
              <Stat label="Shortfall a month" value={totalNeeded > 0 ? `+${rupeesShort(totalNeeded)}` : '—'} tone={totalNeeded > 0 ? 'bad' : 'good'} />
              <Stat label="Checks passed" value={`${checks.filter((c) => c.ok).length}/4`} />
            </div>
            <ul className="mt-3 space-y-2">
              {rows.map((r) => (
                <li key={r.id} className="text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-200">{r.label}</span>
                    <span className={r.funding >= 100 ? 'text-brand-300' : 'text-amber-300'}>
                      {r.funding.toFixed(0)}% funded · needs {rupees(r.needed)}/mo
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full" style={{ width: `${Math.min(100, r.funding)}%`, background: r.funding >= 100 ? '#34e0a1' : '#facc15' }} />
                  </div>
                  <span className="text-[10px] text-ink-500">
                    Target inflated to {rupeesShort(r.inflated)} by year {r.years}
                  </span>
                </li>
              ))}
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Goal-based investing is what turns a return target into
          a plan: each goal gets an amount, a date, and a mix that its horizon can support. Education in twelve
          years and retirement in twenty-eight can both hold growth assets; a vehicle in four years should be
          mostly debt; a buffer needed in a year is not an investment at all. The number this lab makes visible is
          the shortfall — the difference between what the goals need and what the plan contributes — because that
          is the only honest answer to "am I saving enough", and it changes the moment a date or an inflation
          assumption changes.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-025 */

export function L5ReitAnalyser() {
  const [price, setPrice] = useState(340)
  const [rent, setRent] = useState(26)
  const [occupancy, setOccupancy] = useState(92)
  const [costRatio, setCostRatio] = useState(18)
  const [debtCost, setDebtCost] = useState(4)
  const [leverage, setLeverage] = useState(28)
  const [growth, setGrowth] = useState(4)
  const [split, setSplit] = useState({ interest: 30, dividend: 40, repayment: 30 })

  const grossRent = rent * (occupancy / 100)
  const expenses = grossRent * (costRatio / 100)
  const interest = rent * (leverage / 100) * (debtCost / 100) * 8
  const ndcf = grossRent - expenses - interest
  const distribution = ndcf * 0.9
  const yieldPct = (distribution / price) * 100
  const interestPart = distribution * (split.interest / 100)
  const dividendPart = distribution * (split.dividend / 100)
  const repaymentPart = distribution * (split.repayment / 100)
  const totalReturn = yieldPct + growth

  const checks = [
    { ok: occupancy >= 90, text: `Occupancy of ${occupancy}% is the number that decides the distribution. Below about 90% the yield starts to be a warning rather than a return.` },
    { ok: leverage <= 49, text: `Leverage of ${leverage}% is inside the limit that applies to these trusts, so the interest line is not yet eating the rent.` },
    { ok: dividendPart > 0, text: `The dividend component of ${rupees(dividendPart)} a year is exempt in your hands from April 2026, while the interest component of ${rupees(interestPart)} is taxed at your slab rate.` },
    { ok: totalReturn >= 9, text: `Distribution yield of ${yieldPct.toFixed(1)}% plus ${growth}% of growth gives about ${totalReturn.toFixed(1)}% a year. A yield alone is not a return: the unit price can also fall.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">From rent to your account</h4>
          <div className="space-y-3">
            <Slider label="Unit price" value={price} min={100} max={800} step={5} onChange={setPrice} />
            <Slider label="Rent per unit a year" value={rent} min={10} max={60} step={1} onChange={setRent} />
            <Slider label="Occupancy" value={occupancy} min={60} max={100} step={1} onChange={setOccupancy} format={(v) => `${v}%`} />
            <Slider label="Property expenses, share of rent" value={costRatio} min={5} max={40} step={1} onChange={setCostRatio} format={(v) => `${v}%`} />
            <Slider label="Leverage, debt as share of assets" value={leverage} min={0} max={55} step={1} onChange={setLeverage} format={(v) => `${v}%`} />
            <Slider label="Cost of debt" value={debtCost} min={6} max={14} step={0.5} onChange={setDebtCost} format={(v) => `${v}%`} />
            <Slider label="Assumed asset growth" value={growth} min={0} max={10} step={0.5} onChange={setGrowth} format={(v) => `${v}% a year`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Distribution yield" value={`${yieldPct.toFixed(1)}%`} tone="good" />
              <Stat label="Total return est." value={`${totalReturn.toFixed(1)}%`} />
              <Stat label="NDCF per unit" value={rupees(ndcf)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Gross rent at {occupancy}% occupancy: {rupees(grossRent)}</li>
              <li>less property expenses: −{rupees(expenses)}</li>
              <li>less interest on debt: −{rupees(interest)}</li>
              <li className="text-white">Net distributable cash flow: {rupees(ndcf)}</li>
              <li>At least 90% must be distributed: {rupees(distribution)}</li>
              <li>of which interest, taxed at your slab: {rupees(interestPart)}</li>
              <li>of which dividend, exempt from April 2026: {rupees(dividendPart)}</li>
              <li>of which repayment of capital, not income: {rupees(repaymentPart)}</li>
            </ul>
            <div className="mt-3">
              <span className="text-[11px] text-ink-400">Split of the distribution (adjust to see the tax)</span>
              {(['interest', 'dividend', 'repayment'] as const).map((k) => (
                <Slider
                  key={k}
                  label={k === 'repayment' ? 'repayment of capital (not taxed now)' : `${k} (${k === 'dividend' ? 'exempt from April 2026' : 'taxed at slab'})`}
                  value={split[k]}
                  min={0}
                  max={100}
                  step={5}
                  onChange={(v) => setSplit((prev) => ({ ...prev, [k]: v }))}
                  format={(v) => `${v}%`}
                />
              ))}
              <span className={`text-[11px] ${split.interest + split.dividend + split.repayment === 100 ? 'text-ink-500' : 'text-rose-300'}`}>
                Split totals {split.interest + split.dividend + split.repayment}%
              </span>
            </div>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> A REIT is a wrapper around income-producing property,
          and the honest way to read it is to start at the rent and subtract, not to start at the headline yield.
          Occupancy and lease expiry decide how much rent there is; expenses and the cost of debt decide how much
          survives; regulation decides that at least 90% of what survives must be distributed. The distribution
          itself is not one thing: the interest component is taxed at your slab, the dividend component is exempt
          in your hands from April 2026, and the repayment of capital is not taxed when you receive it but reduces
          your cost of the unit. Read the split, not just the yield.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-026 */

export function L5InvitAnalyser() {
  const [price, setPrice] = useState(120)
  const [ndcf, setNdcf] = useState(11)
  const [life, setLife] = useState(18)
  const [topCounterparty, setTopCounterparty] = useState(45)
  const [leverage, setLeverage] = useState(35)
  const [escalation, setEscalation] = useState(3)

  const yieldPct = (ndcf / price) * 100
  // Distributions stop when the concession ends; the unit's terminal value depends
  // on how much of the remaining life is left after the horizon.
  const yearsToHorizon = 10
  const remainingAfter = Math.max(0, life - yearsToHorizon)
  const terminalShare = remainingAfter / Math.max(life, 1)
  const totalReturn = yieldPct + escalation * 0.6

  const checks = [
    { ok: life >= 12, text: `About ${life} years of concession remain. A trust whose assets have years left can still be held; one with a short life is a bond with an equity price.` },
    { ok: topCounterparty <= 50, text: `The largest counterparty is ${topCounterparty}% of the cash flow. Concentration in one tenant, one toll or one off-taker is the risk that a yield figure hides.` },
    { ok: leverage <= 49, text: `Leverage of ${leverage}% is inside the limit for these trusts. Higher leverage turns a cash-flow asset into a credit bet.` },
    { ok: escalation > 0, text: escalation > 0 ? `Cash flows escalate about ${escalation}% a year, which is what protects the real value of a fixed unit price.` : 'Without escalation the distribution loses real value every year, and the headline yield is a shrinking one.' },
    { ok: terminalShare > 0.2, text: `After a ${yearsToHorizon}-year holding period, about ${(terminalShare * 100).toFixed(0)}% of the concession life is still ahead — which is the part of the price you are paying for and cannot see in the yield.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Price the cash flows and the end date</h4>
          <div className="space-y-3">
            <Slider label="Unit price" value={price} min={40} max={400} step={5} onChange={setPrice} />
            <Slider label="Net distributable cash flow per unit" value={ndcf} min={2} max={40} step={0.5} onChange={setNdcf} format={(v) => rupees(v)} />
            <Slider label="Years of concession left" value={life} min={4} max={40} step={1} onChange={setLife} format={(v) => `${v} years`} />
            <Slider label="Largest counterparty share of cash flow" value={topCounterparty} min={10} max={90} step={5} onChange={setTopCounterparty} format={(v) => `${v}%`} />
            <Slider label="Leverage" value={leverage} min={0} max={60} step={1} onChange={setLeverage} format={(v) => `${v}%`} />
            <Slider label="Annual escalation in cash flow" value={escalation} min={0} max={8} step={0.5} onChange={setEscalation} format={(v) => `${v}%`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Distribution yield" value={`${yieldPct.toFixed(1)}%`} tone={yieldPct > 12 ? 'bad' : 'good'} />
              <Stat label="Est. total return" value={`${totalReturn.toFixed(1)}%`} />
              <Stat label="Life left after 10 yrs" value={`${remainingAfter} yrs`} tone={remainingAfter >= 4 ? 'good' : 'bad'} />
            </div>
            <p className="mt-3 text-xs text-ink-300">
              {yieldPct > 12
                ? 'A yield this far above a government bond is not free money: it usually prices in a shorter life, a weaker counterparty or a higher cost of debt.'
                : 'The yield is in a range where the cash flows, not a distressed price, are doing most of the work.'}
            </p>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> An infrastructure trust is a bundle of contracts with
          an expiry date, dressed as a high-yielding investment. The distribution looks like interest and behaves
          like it until the concession, the tenant or the off-taker changes. The questions that decide the outcome
          are therefore contractual rather than financial: who pays, for how long, on what escalation, and what
          happens if they stop. A yield that is far above a government bond is the market telling you that one of
          those answers is uncertain — your job is to find out which one, and to decide whether you are being paid
          enough to accept it.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-027 */

export function L5GlobalDiversifier() {
  const [amount, setAmount] = useState(1_500_000)
  const [purpose, setPurpose] = useState<'invest' | 'education' | 'medical'>('invest')
  const [depreciation, setDepreciation] = useState(3)
  const [years, setYears] = useState(10)
  const [assetReturn, setAssetReturn] = useState(9)

  const tcsRate = purpose === 'invest' ? 0.2 : 0.02
  const tcs = amount > 1_000_000 ? (amount - 1_000_000) * tcsRate : 0
  const lrsUsed = amount
  const headroom = 250_000 * 86 - lrsUsed // 250,000 USD at ₹86 (illustrative rate)
  const invested = amount - tcs
  // The rupee outcome: the asset grows in dollars, the rupee moves against it.
  const rupeeRate = depreciation
  const inrValue = invested * Math.pow(1 + assetReturn / 100, years) * Math.pow(1 + rupeeRate / 100, years)
  const flatCurrency = invested * Math.pow(1 + assetReturn / 100, years)

  const checks = [
    { ok: tcs === 0 || purpose !== 'invest' || tcsRate <= 0.2, text: `Tax collected at source is ${rupees(tcs)}, at ${(tcsRate * 100).toFixed(0)}% on the amount above ₹10 lakh. It is collected, not lost: it is credited against your tax liability or refunded.` },
    { ok: headroom > 0, text: `This remittance uses ${rupees(lrsUsed)} of the annual limit. The scheme allows USD 250,000 per financial year per person, so about ${rupees(Math.max(0, headroom))} of headroom remains at an illustrative ₹86 a dollar.` },
    { ok: purpose === 'invest' || tcsRate < 0.05, text: purpose === 'invest' ? 'Investing abroad is the category with the highest rate: an education or medical remittance pays far less, and an education loan funds it at nil.' : 'Education and medical remittances above ₹10 lakh attract a much lower rate than investments.' },
    { ok: true, text: `Held ${years} years with the rupee depreciating ${depreciation}% a year, the same asset is worth ${rupeesShort(inrValue)} in rupees against ${rupeesShort(flatCurrency)} at a constant rate. Currency is a second bet, and it has been a tailwind for a resident.` },
    { ok: true, text: 'A foreign holding must be reported in the annual return, and the tax you pay abroad may be relieved under a treaty — but only if you claim it and keep the records.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Price the remittance before you make it</h4>
          <div className="space-y-3">
            <Slider label="Amount remitted" value={amount} min={100_000} max={20_000_000} step={100_000} onChange={setAmount} />
            <Slider label="Assumed rupee depreciation" value={depreciation} min={0} max={6} step={0.5} onChange={setDepreciation} format={(v) => `${v}% a year`} />
            <Slider label="Assumed asset return in its own currency" value={assetReturn} min={0} max={15} step={0.5} onChange={setAssetReturn} format={(v) => `${v}% a year`} />
            <Slider label="Holding period" value={years} min={1} max={25} step={1} onChange={setYears} format={(v) => `${v} years`} />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ['invest', 'Investment'],
                ['education', 'Education'],
                ['medical', 'Medical'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setPurpose(id)}
                className={`rounded-lg border px-3 py-1 text-xs transition ${
                  purpose === id ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Tax collected" value={rupeesShort(tcs)} tone={tcs > 0 ? 'neutral' : 'good'} />
              <Stat label="Actually invested" value={rupeesShort(invested)} />
              <Stat label="Value in ₹" value={rupeesShort(inrValue)} tone="good" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Remitted: {rupees(amount)}</li>
              <li>TCS at {(tcsRate * 100).toFixed(0)}% above ₹10 lakh: −{rupees(tcs)}</li>
              <li>Invested: {rupees(invested)}</li>
              <li>Value in ₹ after {years} years: {rupees(inrValue)}</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks and cautions</h4>
            <ul className="space-y-1.5">
              {checks.map((c, i) => (
                <Check key={i} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Adding foreign assets is a diversification decision
          with three costs attached: the paperwork, the tax collected at source, and the currency. The paperwork is
          the annual reporting, which is not optional. The tax is collected above ₹10 lakh of remittances in a
          year, at a much lower rate for education and medical than for investment, and it is credited against
          your liability rather than being a fee. The currency is the one that decides outcomes — and it cuts both
          ways, which is precisely why a foreign holding that is a small share of the portfolio behaves like
          diversification while a large one becomes a leveraged bet on the rupee.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-028 */

export function L5EtfCostCheck() {
  const [order, setOrder] = useState(200_000)
  const [spread, setSpread] = useState(0.35)
  const [premium, setPremium] = useState(0.15)
  const [brokerage, setBrokerage] = useState(0.05)
  const [etfFee, setEtfFee] = useState(0.1)
  const [fundFee, setFundFee] = useState(0.4)
  const [tracking, setTracking] = useState(0.2)
  const [years, setYears] = useState(5)

  const tradingCostPct = spread / 2 + premium + brokerage
  const tradingCost = (order * tradingCostPct) / 100
  const drag = tracking
  // Compare the all-in cost of the ETF against a comparable index fund.
  const costAt = (n: number) => {
    let etf = order
    let fund = order
    for (let y = 0; y < n; y++) {
      etf *= 1 - (etfFee + drag) / 100
      fund *= 1 - fundFee / 100
    }
    return { etf: etf - tradingCost, fund }
  }
  const at5 = costAt(5)
  const at1 = costAt(1)
  const breakeven = (() => {
    for (let y = 1; y <= 25; y++) if (costAt(y).etf >= costAt(y).fund) return y
    return null
  })()

  const checks = [
    { ok: tradingCostPct <= 0.5, text: `Crossing the spread, any premium and brokerage costs ${tradingCostPct.toFixed(2)}% — about ${rupees(tradingCost)} on this order, before anything is earned.` },
    { ok: premium <= 0.3, text: `The price is ${premium.toFixed(2)}% away from the indicative value. Paying up to buy is a real loss, and it is invisible in the expense ratio.` },
    { ok: breakeven !== null && breakeven <= 3, text: breakeven ? `The ETF is ahead of the comparable fund after about ${breakeven} year(s) at this order size, because the yearly fee saving eventually repays the trading cost.` : 'At this order size the fund never catches up inside twenty-five years, because the trading cost exceeds every year of fee saving.' },
    { ok: years >= 3, text: `Held ${years} years the gap widens: ${rupeesShort(at5.etf)} against ${rupeesShort(at5.fund)} over five years. Short holding periods are the wrong place for a wrapper with a trading cost.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">The same exposure, two wrappers</h4>
          <div className="space-y-3">
            <Slider label="Order size" value={order} min={10_000} max={5_000_000} step={10_000} onChange={setOrder} />
            <Slider label="Bid-ask spread" value={spread} min={0.05} max={2} step={0.05} onChange={setSpread} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Premium (or discount) to indicative value" value={premium} min={-0.5} max={1.5} step={0.05} onChange={setPremium} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Brokerage and transaction charges" value={brokerage} min={0} max={0.5} step={0.01} onChange={setBrokerage} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="ETF yearly fee" value={etfFee} min={0.02} max={1} step={0.01} onChange={setEtfFee} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Index fund yearly fee" value={fundFee} min={0.02} max={1.5} step={0.01} onChange={setFundFee} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Tracking difference a year" value={tracking} min={0} max={1} step={0.05} onChange={setTracking} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Years held" value={years} min={1} max={20} step={1} onChange={setYears} format={(v) => `${v} years`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Cost to get in" value={`${tradingCostPct.toFixed(2)}%`} tone={tradingCostPct > 0.5 ? 'bad' : 'good'} />
              <Stat label="On this order" value={rupees(tradingCost)} />
              <Stat label="Break-even" value={breakeven ? `${breakeven} yrs` : 'never'} tone={breakeven && breakeven <= 3 ? 'good' : 'bad'} />
            </div>
            <table className="mt-3 w-full text-xs">
              <thead>
                <tr className="text-ink-500">
                  <th className="pb-1 text-left font-normal">After</th>
                  <th className="pb-1 text-right font-normal">ETF</th>
                  <th className="pb-1 text-right font-normal">Index fund</th>
                </tr>
              </thead>
              <tbody className="font-mono text-[11px]">
                {[1, 3, 5, 10].map((y) => {
                  const c = costAt(y)
                  return (
                    <tr key={y} className="text-ink-300">
                      <td className="py-0.5">{y} yr</td>
                      <td className="py-0.5 text-right">{rupees(c.etf)}</td>
                      <td className="py-0.5 text-right">{rupees(c.fund)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p className="mt-2 text-[11px] text-ink-500">
              Returns are assumed zero here so the comparison isolates cost. At one year the ETF is{' '}
              {at1.etf >= at1.fund ? 'ahead' : 'behind'} and at five years it is {at5.etf >= at5.fund ? 'ahead' : 'behind'}.
            </p>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> An ETF and an index fund can hold the same portfolio
          and behave very differently in your hands, because one is bought in a market and the other is bought at
          the end of the day at a price the fund computes. The ETF's yearly fee is usually lower; its entry and
          exit cost — half the spread, any premium to the indicative value, and brokerage — is paid once, up front,
          and it is larger than most people assume. That makes the wrapper a function of order size and holding
          period rather than of fashion: large orders held for years favour the ETF, small orders and short
          horizons favour the fund, and tracking difference belongs in the comparison on both sides.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-029 */

type Alt = {
  id: string
  label: string
  minimum: number
  lock: number
  valuation: 'daily' | 'periodic' | 'rare'
  fee: number
  regulated: boolean
  access: string
}

const ALTS: Alt[] = [
  { id: 'aif1', label: 'AIF Category I (venture, SME)', minimum: 10_000_000, lock: 8, valuation: 'periodic', fee: 2, regulated: true, access: 'accredited investors only' },
  { id: 'aif2', label: 'AIF Category II (private equity, debt)', minimum: 10_000_000, lock: 7, valuation: 'periodic', fee: 2, regulated: true, access: 'accredited investors only' },
  { id: 'aif3', label: 'AIF Category III (long-short, leverage)', minimum: 10_000_000, lock: 1, valuation: 'periodic', fee: 2.5, regulated: true, access: 'accredited investors only' },
  { id: 'reit', label: 'Listed REIT / InvIT', minimum: 15_000, lock: 0, valuation: 'daily', fee: 0.2, regulated: true, access: 'any investor with a demat account' },
  { id: 'unlisted', label: 'Unlisted equity (pre-IPO)', minimum: 500_000, lock: 4, valuation: 'rare', fee: 1.5, regulated: false, access: 'varies; often informal' },
  { id: 'goldetf', label: 'Gold ETF / commodity ETF', minimum: 1_000, lock: 0, valuation: 'daily', fee: 0.4, regulated: true, access: 'any investor' },
]

export function L5AlternativesScreener() {
  const [surplus, setSurplus] = useState(2_000_000)
  const [horizon, setHorizon] = useState(7)
  const [picked, setPicked] = useState<string>('aif2')

  const alt = ALTS.find((a) => a.id === picked) ?? ALTS[0]
  const share = surplus > 0 ? (alt.minimum / surplus) * 100 : 100

  const checks = [
    { ok: alt.minimum <= surplus * 0.25, text: `The minimum is ${rupees(alt.minimum)}, or ${share.toFixed(1)}% of your investable surplus. A single holding that large is a concentration decision, not a diversification one.` },
    { ok: alt.lock <= horizon, text: `A ${alt.lock === 0 ? 'listed, sellable' : `${alt.lock}-year`} lock-in against a ${horizon}-year horizon.${alt.lock > horizon ? ' The money is committed for longer than the plan allows.' : ''}` },
    { ok: alt.valuation !== 'rare', text: `Valuation is ${alt.valuation}: ${alt.valuation === 'daily' ? 'there is a price every day, even if it is thin.' : alt.valuation === 'periodic' ? 'the manager marks it periodically, so the number you see is an opinion.' : 'there is effectively no observable price, so you cannot know what you own.'}` },
    { ok: alt.fee <= 2.5, text: `Fees are about ${alt.fee}% a year plus a share of gains in most cases. On a product with an illiquid exit, the fee is paid whatever happens to the underlying.` },
    { ok: alt.regulated, text: alt.regulated ? 'The product sits under a regulator, so there is a registration, a grievance route and a set of disclosure duties.' : 'This is not a regulated product: there is no registration to check, no disclosure standard, and no grievance mechanism beyond a court.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">What is actually accessible to you</h4>
          <div className="space-y-3">
            <Slider label="Investable surplus (outside emergency funds)" value={surplus} min={100_000} max={50_000_000} step={100_000} onChange={setSurplus} />
            <Slider label="Years you can leave it alone" value={horizon} min={1} max={20} step={1} onChange={setHorizon} format={(v) => `${v} years`} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {ALTS.map((a) => (
              <button
                key={a.id}
                onClick={() => setPicked(a.id)}
                className={`rounded-lg border px-2.5 py-1 text-[11px] transition ${
                  picked === a.id ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-xs text-white">{alt.label}</span>
            <ul className="mt-1 space-y-0.5 text-[11px] text-ink-400">
              <li>Minimum: {rupees(alt.minimum)}</li>
              <li>Lock-in: {alt.lock === 0 ? 'none, but the market may be thin' : `${alt.lock} years`}</li>
              <li>Valuation: {alt.valuation}</li>
              <li>Access: {alt.access}</li>
            </ul>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Minimum" value={rupeesShort(alt.minimum)} />
              <Stat label="Share of surplus" value={`${share.toFixed(1)}%`} tone={share > 25 ? 'bad' : 'good'} />
              <Stat label="Checks passed" value={`${checks.filter((c) => c.ok).length}/5`} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">The four questions</h4>
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

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> The alternatives are not one category; they differ in
          four ways that decide whether they belong in your plan at all. How you get in — a minimum of ₹1 crore
          makes most private funds a decision for a different balance sheet. How you get out — a lock-in longer
          than your horizon is a commitment you cannot fund. Who sets the price — a daily market price, even a thin
          one, is information; a manager's periodic mark is an opinion; no price at all means you cannot know what
          you own. And what it costs — an illiquid product still charges every year, whatever the assets do. Answer
          those four before returns, because returns are the only one of the five that cannot be verified from the
          document.
        </p>
      </Panel>
    </div>
  )
}
