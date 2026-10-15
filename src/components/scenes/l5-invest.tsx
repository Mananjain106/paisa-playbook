/**
 * Level 5 illustrations — band two, batch 1 (chapters l5-020 to l5-029).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   construction-blocks   a portfolio built from purpose, not from products
 *   weight-targets        target weights and the job each asset has
 *   diversity-web         where holdings that look different are actually the same
 *   rebalance-band        a tolerance band, and the two ways to trade back to target
 *   goal-bucket-tree      every rupee mapped to a dated purpose
 *   reit-cashflow         rent to net distributable cash flow to your account
 *   invit-toll-road       a concession's cash flows, and where they end
 *   currency-bridge       the same rupee on both sides of a currency
 *   etf-nav-gap           the gap between what an ETF is worth and what it trades at
 *   alternatives-map      the alternatives, and the four questions each must answer
 *
 * Scenes are plain SVG fragments; the `Scene` wrapper supplies the
 * viewBox="0 0 400 220" and the caption. Each is used by exactly one chapter.
 */

const INK = '#c9cfe4'
const MUTED = '#8b93ad'
const PANEL = 'rgba(255,255,255,0.05)'
const LINE = 'rgba(255,255,255,0.14)'
const GOOD = '#34e0a1'
const BLUE = '#38bdf8'
const PURPLE = '#c084fc'
const AMBER = '#facc15'
const ROSE = '#fb7185'

/** l5-020 — purpose first, products last. */
export function ConstructionBlocks() {
  const layers = [
    { label: 'Purpose', note: 'what the money is for', c: GOOD, w: 120 },
    { label: 'Horizon', note: 'when it is needed', c: BLUE, w: 150 },
    { label: 'Risk capacity', note: 'how much loss the plan survives', c: PURPLE, w: 180 },
    { label: 'Asset mix', note: 'equity, debt, gold, cash', c: AMBER, w: 210 },
    { label: 'Products', note: 'chosen last, and interchangeable', c: MUTED, w: 240 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Built from the top down; bought from the bottom up
      </text>
      {layers.map((l, i) => {
        const y = 34 + i * 36
        return (
          <g key={l.label}>
            <rect x="24" y={y} width={l.w} height="28" rx="6" fill={l.c} opacity={0.2} />
            <rect x="24" y={y} width="5" height="28" rx="2" fill={l.c} />
            <text x="38" y={y + 13} fill={INK} fontSize="10.5">
              {l.label}
            </text>
            <text x="38" y={y + 24} fill={MUTED} fontSize="8.5">
              {l.note}
            </text>
            {i < layers.length - 1 && <line x1={24 + l.w + 6} y1={y + 14} x2={24 + layers[i + 1].w - 6} y2={y + 14} stroke={LINE} />}
          </g>
        )
      })}
      <text x="24" y="216" fill={MUTED} fontSize="8.5">
        A portfolio that starts at the bottom layer is a collection of products looking for a reason.
      </text>
    </>
  )
}

/** l5-021 — target weights, and what each asset is for. */
export function WeightTargets() {
  const assets = [
    { label: 'Equity', weight: 55, role: 'growth over decades', c: BLUE },
    { label: 'Debt', weight: 30, role: 'stability and known dates', c: GOOD },
    { label: 'Gold', weight: 10, role: 'a hedge that behaves differently', c: AMBER },
    { label: 'Cash', weight: 5, role: 'liquidity, not return', c: MUTED },
  ]
  let x = 24
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Four assets, four jobs, one sum of 100%
      </text>
      {assets.map((a) => {
        const w = (a.weight / 100) * 352
        const rect = <rect key={a.label} x={x} y="38" width={w} height="34" fill={a.c} opacity="0.75" />
        x += w
        return rect
      })}
      {assets.map((a, i) => (
        <g key={a.label}>
          <circle cx="32" cy={100 + i * 24} r="4" fill={a.c} />
          <text x="46" y={104 + i * 24} fill={INK} fontSize="10.5">
            {a.label}
          </text>
          <text x="120" y={104 + i * 24} fill={a.c} fontSize="10.5">
            {a.weight}%
          </text>
          <text x="176" y={104 + i * 24} fill={MUTED} fontSize="9">
            {a.role}
          </text>
        </g>
      ))}
      <rect x="24" y="196" width="352" height="18" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="209" fill={MUTED} fontSize="8.5">
        Drift is expected. A band, not a constant, is what you actually manage.
      </text>
    </>
  )
}

/** l5-022 — holdings that look different and behave the same. */
export function DiversityWeb() {
  const funds = [
    { name: 'Large-cap active A', financials: 34, it: 14, c: BLUE },
    { name: 'Large-cap index', financials: 36, it: 13, c: GOOD },
    { name: 'Large-cap active B', financials: 33, it: 15, c: PURPLE },
    { name: 'Mid-cap fund', financials: 22, it: 9, c: AMBER },
    { name: 'Gold ETF', financials: 0, it: 0, c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Three large-cap funds is one bet, not three
      </text>
      {funds.map((f, i) => {
        const y = 36 + i * 30
        return (
          <g key={f.name}>
            <text x="24" y={y + 12} fill={INK} fontSize="9.5">
              {f.name}
            </text>
            <rect x="150" y={y} width="228" height="18" rx="4" fill={PANEL} />
            <rect x="150" y={y} width={(f.financials / 40) * 228} height="18" rx="4" fill={f.c} opacity="0.55" />
            <text x="158" y={y + 13} fill={INK} fontSize="8.5">
              financials {f.financials}%
            </text>
          </g>
        )
      })}
      <rect x="24" y="188" width="352" height="24" rx="8" fill={AMBER} opacity="0.12" />
      <text x="34" y="203" fill={AMBER} fontSize="9">
        Own asset classes and sectors, not tickers. Look through the wrapper before counting a holding.
      </text>
    </>
  )
}

/** l5-023 — a tolerance band and the two ways back to target. */
export function RebalanceBand() {
  const target = 55
  const drift = [55, 58, 61, 63, 64, 66, 69]
  const x0 = 40
  const scale = (v: number) => x0 + ((v - 45) / 30) * 320
  const bandLo = scale(target - 5)
  const bandHi = scale(target + 5)
  const points = drift.map((v, i) => `${x0 + i * (320 / (drift.length - 1))},${180 - (v - 45) * 4}`).join(' ')
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Equity crept from 55% to 69% without a decision
      </text>
      <rect x={bandLo} y="30" width={bandHi - bandLo} height="150" fill={GOOD} opacity="0.12" />
      <line x1={scale(target)} y1="30" x2={scale(target)} y2="180" stroke={GOOD} strokeDasharray="4 4" />
      <text x={scale(target)} y="26" fill={GOOD} fontSize="8.5" textAnchor="middle">
        target 55%
      </text>
      <text x={bandLo - 4} y="196" fill={MUTED} fontSize="8.5" textAnchor="middle">
        50%
      </text>
      <text x={bandHi + 4} y="196" fill={MUTED} fontSize="8.5" textAnchor="middle">
        60%
      </text>
      <polyline points={points} fill="none" stroke={ROSE} strokeWidth="2" />
      <circle cx={x0 + 6 * (320 / (drift.length - 1))} cy={180 - (69 - 45) * 4} r="4" fill={ROSE} />
      <text x="360" y="52" fill={ROSE} fontSize="9" textAnchor="end">
        the band was crossed in year 4
      </text>
      <text x="24" y="214" fill={MUTED} fontSize="8.5">
        Rebalance with new money first; selling is the second choice, because it is the one that costs tax.
      </text>
    </>
  )
}

/** l5-024 — goals as buckets with dates. */
export function GoalBucketTree() {
  const goals = [
    { label: 'Buffer top-up', years: 1, mix: '100% cash-like', c: MUTED },
    { label: 'Vehicles / travel', years: 4, mix: '70% debt, 30% equity', c: GOOD },
    { label: "Children's education", years: 12, mix: '70% equity, 30% debt', c: BLUE },
    { label: 'Retirement', years: 30, mix: '80% equity, 20% debt', c: PURPLE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Four goals, four horizons, four different mixes
      </text>
      <line x1="30" y1="40" x2="30" y2="176" stroke={LINE} />
      {goals.map((g, i) => {
        const y = 44 + i * 34
        return (
          <g key={g.label}>
            <line x1="30" y1={y + 10} x2="52" y2={y + 10} stroke={g.c} />
            <circle cx="30" cy={y + 10} r="4" fill={g.c} />
            <rect x="52" y={y} width="316" height="24" rx="6" fill={g.c} opacity="0.14" />
            <text x="62" y={y + 16} fill={INK} fontSize="9.5">
              {g.label}
            </text>
            <text x="216" y={y + 16} fill={g.c} fontSize="9">
              {g.years} {g.years === 1 ? 'year' : 'years'}
            </text>
            <text x="266" y={y + 16} fill={MUTED} fontSize="9">
              {g.mix}
            </text>
          </g>
        )
      })}
      <text x="24" y="212" fill={MUTED} fontSize="8.5">
        The same fund cannot be right for a one-year goal and a thirty-year goal. The horizon sets the mix.
      </text>
    </>
  )
}

/** l5-025 — how rent becomes a distribution. */
export function ReitCashflow() {
  const steps = [
    { label: 'Rent from tenants', value: '₹100', c: BLUE },
    { label: 'less property expenses', value: '−₹18', c: ROSE },
    { label: 'less interest on debt', value: '−₹12', c: ROSE },
    { label: 'net distributable cash flow', value: '₹70', c: GOOD },
    { label: 'at least 90% distributed', value: '₹63', c: AMBER },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Every ₹100 of rent is not a ₹100 distribution
      </text>
      {steps.map((s, i) => {
        const y = 36 + i * 32
        return (
          <g key={s.label}>
            <rect x="24" y={y} width={Math.max(40, (parseFloat(s.value.replace(/[^0-9.]/g, '')) / 100) * 220)} height="22" rx="4" fill={s.c} opacity="0.55" />
            <text x="256" y={y + 15} fill={INK} fontSize="9.5">
              {s.value} · {s.label}
            </text>
            {i > 0 && <line x1="24" y1={y} x2="24" y2={y + 22} stroke={LINE} />}
          </g>
        )
      })}
      <text x="24" y="204" fill={MUTED} fontSize="8.5">
        Occupancy, lease expiry and the cost of debt decide the distribution. So does the sponsor's discipline.
      </text>
      <text x="24" y="216" fill={MUTED} fontSize="8.5">
        A high yield on a low-quality tenant is a debt-like risk wearing an equity wrapper.
      </text>
    </>
  )
}

/** l5-026 — a concession that ends. */
export function InvitTollRoad() {
  const years = 22
  const start = 24
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A toll road pays you until the concession ends
      </text>
      <line x1={start} y1="70" x2="376" y2="70" stroke={LINE} />
      {[0, 5, 10, 15, 20].map((y) => (
        <g key={y}>
          <line x1={start + (y / years) * 340} y1="64" x2={start + (y / years) * 340} y2="76" stroke={LINE} />
          <text x={start + (y / years) * 340} y="88" fill={MUTED} fontSize="8.5" textAnchor="middle">
            year {y}
          </text>
        </g>
      ))}
      {Array.from({ length: years }).map((_, i) => {
        const h = 10 + Math.sin((i / years) * Math.PI) * 46
        return (
          <rect
            key={i}
            x={start + (i / years) * 340}
            y={70 - h}
            width={340 / years - 2}
            height={h}
            fill={i > years - 5 ? ROSE : GOOD}
            opacity={i > years - 5 ? 0.7 : 0.45}
          />
        )
      })}
      <text x="24" y="112" fill={INK} fontSize="10">
        Distributions are the toll collections, not a promise
      </text>
      <rect x="24" y="124" width="352" height="80" rx="8" fill={PANEL} stroke={LINE} />
      <text x="36" y="142" fill={MUTED} fontSize="9">
        At least 90% of net distributable cash flow must be distributed, which is why
      </text>
      <text x="36" y="156" fill={MUTED} fontSize="9">
        the yield is high — and why the value of the unit falls as the concession runs out.
      </text>
      <text x="36" y="174" fill={AMBER} fontSize="9">
        The terminal value you are paying for is the years after the bars above end.
      </text>
      <text x="36" y="192" fill={MUTED} fontSize="9">
        Ask which toll, which tenant, which counterparty — and for how long.
      </text>
    </>
  )
}

/** l5-027 — one rupee, two currencies, and a rate in between. */
export function CurrencyBridge() {
  const points = '0,60 40,58 80,64 120,54 160,66 200,62 240,74 280,70 320,80 352,78'
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A foreign asset is two bets: the asset and the rupee
      </text>
      <line x1="24" y1="40" x2="376" y2="40" stroke={LINE} />
      <polyline points={points.split(' ').map((p) => p.split(',').map(Number).map((v, i) => (i === 0 ? v + 24 : v)).join(',')).join(' ')} fill="none" stroke={BLUE} strokeWidth="2" />
      <text x="360" y="52" fill={BLUE} fontSize="9" textAnchor="end">
        USD/INR
      </text>
      <rect x="24" y="112" width="168" height="48" rx="8" fill={GOOD} opacity="0.12" />
      <text x="36" y="130" fill={GOOD} fontSize="9.5">
        Recorded as ₹
      </text>
      <text x="36" y="148" fill={MUTED} fontSize="9">
        Your return, tax and reporting
      </text>
      <rect x="208" y="112" width="168" height="48" rx="8" fill={PURPLE} opacity="0.12" />
      <text x="220" y="130" fill={PURPLE} fontSize="9.5">
        Lived as $
      </text>
      <text x="220" y="148" fill={MUTED} fontSize="9">
        The asset's own return
      </text>
      <text x="24" y="182" fill={MUTED} fontSize="9">
        Both matter. Diversification is real, and so is the fact that the rupee has moved
      </text>
      <text x="24" y="196" fill={MUTED} fontSize="9">
        in one direction over long periods — a tailwind for a resident, a risk for the plan.
      </text>
      <text x="24" y="212" fill={AMBER} fontSize="9">
        Remittances face the LRS limit, tax collected at source above the threshold, and reporting.
      </text>
    </>
  )
}

/** l5-028 — the two prices of the same thing. */
export function EtfNavGap() {
  const nav = 100
  const trades = [99.6, 99.9, 100.4, 100.8, 100.2, 99.7, 100.6]
  const y = (v: number) => 150 - (v - 99) * 30
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        An ETF has a value and a price, and they are not always equal
      </text>
      <line x1="40" y1={y(nav)} x2="376" y2={y(nav)} stroke={GOOD} strokeDasharray="5 4" />
      <text x="40" y={y(nav) - 6} fill={GOOD} fontSize="9">
        iNAV ₹100
      </text>
      {trades.map((t, i) => (
        <g key={i}>
          <line x1={52 + i * 46} y1="150" x2={52 + i * 46} y2={y(t)} stroke={t >= nav ? BLUE : ROSE} strokeWidth="1.5" />
          <circle cx={52 + i * 46} cy={y(t)} r="3.5" fill={t >= nav ? BLUE : ROSE} />
          <text x={52 + i * 46} y="166" fill={MUTED} fontSize="8" textAnchor="middle">
            {t.toFixed(1)}
          </text>
        </g>
      ))}
      <text x="24" y="188" fill={MUTED} fontSize="9">
        Paying ₹100.8 for something worth ₹100 is a 0.8% loss before the trade settles. On a thin
      </text>
      <text x="24" y="202" fill={MUTED} fontSize="9">
        ETF in a volatile session that gap can be far wider than a year of expense ratio.
      </text>
      <text x="24" y="216" fill={AMBER} fontSize="9">
        Liquidity is a property of the instrument on the day, not of the wrapper.
      </text>
    </>
  )
}

/** l5-029 — what every alternative has to answer. */
export function AlternativesMap() {
  const kinds = [
    { label: 'AIF Cat I / II', min: '₹1 crore', lock: '7–10 yrs', value: 'periodic, manager-set', c: BLUE },
    { label: 'AIF Cat III', min: '₹1 crore', lock: 'often open-ended', value: 'frequent, marked', c: PURPLE },
    { label: 'Listed REIT / InvIT', min: 'one lot', lock: 'none, but thin', value: 'daily market price', c: GOOD },
    { label: 'Unlisted equity', min: 'deal-specific', lock: 'years', value: 'rare, negotiated', c: AMBER },
    { label: 'Gold, commodity ETFs', min: 'one unit', lock: 'none', value: 'daily, observable', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Alternatives differ by access, lock-in and how the price is known
      </text>
      {kinds.map((k, i) => {
        const y = 34 + i * 34
        return (
          <g key={k.label}>
            <rect x="24" y={y} width="352" height="28" rx="6" fill={k.c} opacity="0.12" />
            <text x="36" y={y + 18} fill={k.c} fontSize="10">
              {k.label}
            </text>
            <text x="150" y={y + 18} fill={INK} fontSize="9">
              {k.min}
            </text>
            <text x="230" y={y + 18} fill={MUTED} fontSize="9">
              {k.lock}
            </text>
            <text x="330" y={y + 18} fill={MUTED} fontSize="9">
              {k.value}
            </text>
          </g>
        )
      })}
      <text x="24" y="214" fill={MUTED} fontSize="8.5">
        Four questions, every time: how do I get in, how do I get out, who sets the price, and what does it cost?
      </text>
    </>
  )
}
