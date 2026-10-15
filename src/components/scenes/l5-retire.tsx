/**
 * Level 5 illustrations — band two, batch 2 (chapters l5-030 to l5-039).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   j-curve              a fund that loses money for years before it earns any
 *   power-law            ten bets, one winner, and why the average is a lie
 *   liquidity-ladder     how fast each holding becomes spendable cash
 *   fee-stack            every layer of cost, and which ones the headline hides
 *   tax-year-grid        asset class against holding period, with the rate in each cell
 *   retirement-bridge    accumulation on one side, income streams on the other
 *   multiple-ladder      how many years of spending the corpus has to be worth
 *   fire-timeline        the gap years, when nothing is being saved and no pension is payable
 *   rate-lever           the savings rate as the one lever that moves the date
 *   income-stream-types  every stream, by how passive it is and how it is taxed
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

/** l5-030 — a fund that spends years under water before it earns anything. */
export function JCurve() {
  const pts = [
    [0, 0], [1, -14], [2, -22], [3, -25], [4, -18], [5, -4], [6, 18], [7, 46], [8, 72], [9, 96], [10, 118],
  ]
  const x = (y: number) => 44 + y * 33
  const zero = 150
  const y = (v: number) => zero - v * 0.62
  const path = pts.map(([a, b]) => `${x(a)},${y(b)}`).join(' ')
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Down for four years, then the harvest
      </text>
      <line x1="34" y1={zero} x2="374" y2={zero} stroke={LINE} />
      <line x1="34" y1="40" x2="34" y2="182" stroke={LINE} />
      <text x="40" y={zero - 4} fill={MUTED} fontSize="8.5">
        money in
      </text>
      <text x="40" y={zero + 12} fill={MUTED} fontSize="8.5">
        money out
      </text>
      <polyline points={path} fill="none" stroke={BLUE} strokeWidth="2.2" />
      {pts.filter((_, i) => i % 2 === 0).map(([a, b]) => (
        <circle key={a} cx={x(a)} cy={y(b)} r="2.6" fill={BLUE} />
      ))}
      <rect x="70" y="112" width="120" height="46" rx="6" fill={ROSE} opacity="0.16" />
      <text x="80" y="130" fill={ROSE} fontSize="9">
        fees are charged from year one
      </text>
      <text x="80" y="144" fill={MUTED} fontSize="8.5">
        on committed and drawn capital
      </text>
      <rect x="230" y="34" width="140" height="42" rx="6" fill={GOOD} opacity="0.16" />
      <text x="240" y="52" fill={GOOD} fontSize="9">
        exits return the capital
      </text>
      <text x="240" y="66" fill={MUTED} fontSize="8.5">
        a decade after it was committed
      </text>
      {[0, 2, 4, 6, 8, 10].map((t) => (
        <text key={t} x={x(t)} y={zero + 22} fill={MUTED} fontSize="8">
          yr {t}
        </text>
      ))}
      <text x="24" y="212" fill={MUTED} fontSize="8.5">
        The shape is the J: a trough created by fees and early write-downs, then the climb.
      </text>
    </>
  )
}

/** l5-031 — power law: most of ten bets do nothing, one carries the fund. */
export function PowerLaw() {
  const bets = [
    { label: '#1', mult: 22, c: GOOD },
    { label: '#2', mult: 3.4, c: BLUE },
    { label: '#3', mult: 1.8, c: BLUE },
    { label: '#4', mult: 0.6, c: MUTED },
    { label: '#5', mult: 0.3, c: MUTED },
    { label: '#6', mult: 0, c: ROSE },
    { label: '#7', mult: 0, c: ROSE },
    { label: '#8', mult: 0, c: ROSE },
    { label: '#9', mult: 0, c: ROSE },
    { label: '#10', mult: 0, c: ROSE },
  ]
  const base = 168
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Ten bets, one outcome, and the average hides both
      </text>
      <line x1="30" y1={base} x2="378" y2={base} stroke={LINE} />
      {bets.map((b, i) => {
        const h = (b.mult / 22) * 108
        const bx = 36 + i * 34
        return (
          <g key={b.label}>
            <rect x={bx} y={base - h} width="22" height={Math.max(h, 1)} rx="3" fill={b.c} opacity="0.85" />
            <text x={bx + 11} y={base + 12} fill={MUTED} fontSize="8" textAnchor="middle">
              {b.label}
            </text>
            {b.mult > 0 && (
              <text x={bx + 11} y={base - h - 5} fill={b.c} fontSize="8" textAnchor="middle">
                {b.mult}x
              </text>
            )}
          </g>
        )
      })}
      <text x="24" y="46" fill={MUTED} fontSize="9">
        one 22x, two small wins, seven that return nothing
      </text>
      <rect x="24" y="182" width="352" height="26" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="199" fill={INK} fontSize="9">
        A fund is carried by its best holding. A portfolio of funds needs the same reasoning, once more.
      </text>
    </>
  )
}

/** l5-032 — how fast each holding turns into spendable cash. */
export function LiquidityLadder() {
  const rungs = [
    { label: 'Savings and sweep', when: 'same day', c: GOOD, w: 340 },
    { label: 'Liquid and overnight funds', when: 'T+1, small exit load in the first days', c: GOOD, w: 310 },
    { label: 'Listed shares and equity funds', when: 'T+1 to T+3 settlement', c: BLUE, w: 260 },
    { label: 'ELSS units', when: '3 years from each instalment', c: AMBER, w: 210 },
    { label: 'Tax-saver fixed deposit', when: '5 years', c: AMBER, w: 180 },
    { label: 'PPF, EPF, NPS', when: '15 years to 60, with narrow exceptions', c: PURPLE, w: 130 },
    { label: 'Property', when: 'months, and not at the price you want', c: ROSE, w: 80 },
    { label: 'Unlisted funds and shares', when: 'no market at all', c: ROSE, w: 46 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Liquidity is a date, not a feeling
      </text>
      {rungs.map((r, i) => {
        const y = 34 + i * 22
        return (
          <g key={r.label}>
            <rect x="24" y={y} width={r.w} height="16" rx="4" fill={r.c} opacity="0.22" />
            <rect x="24" y={y} width="4" height="16" rx="2" fill={r.c} />
            <text x="36" y={y + 11.5} fill={INK} fontSize="9.5">
              {r.label}
            </text>
            <text x="196" y={y + 11.5} fill={r.c} fontSize="8.5">
              {r.when}
            </text>
          </g>
        )
      })}
      <text x="24" y="216" fill={MUTED} fontSize="8.5">
        Everything here is investable. Only the top two rungs are available on the day you need them.
      </text>
    </>
  )
}

/** l5-033 — every layer of cost, and which ones the headline number hides. */
export function FeeStack() {
  const layers = [
    { label: 'Base expense ratio', note: 'inside the fund, disclosed', pct: 0.9, c: BLUE },
    { label: 'Distribution cost, regular plan', note: 'inside the fund, not in the headline', pct: 0.9, c: AMBER },
    { label: 'Advisory or platform fee', note: 'billed outside the fund', pct: 0.5, c: PURPLE },
    { label: 'Entry and exit loads', note: 'once per round trip', pct: 0.3, c: ROSE },
    { label: 'Brokerage, stamp duty, spread', note: 'per transaction', pct: 0.3, c: MUTED },
  ]
  let x = 24
  const total = 2.9
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The same fund costs 0.9% or 2.9% depending on how you buy it
      </text>
      {layers.map((l) => {
        const w = (l.pct / total) * 352
        const rect = <rect key={l.label} x={x} y="40" width={w} height="30" fill={l.c} opacity="0.75" />
        x += w
        return rect
      })}
      {layers.map((l, i) => (
        <g key={l.label}>
          <circle cx="32" cy={104 + i * 22} r="4" fill={l.c} />
          <text x="44" y={108 + i * 22} fill={INK} fontSize="10">
            {l.label}
          </text>
          <text x="228" y={108 + i * 22} fill={MUTED} fontSize="9">
            {l.note}
          </text>
          <text x="356" y={108 + i * 22} fill={l.c} fontSize="10" textAnchor="end">
            {l.pct.toFixed(1)}%
          </text>
        </g>
      ))}
      <rect x="24" y="192" width="352" height="20" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="205" fill={MUTED} fontSize="8.5">
        From April 2026 the base expense ratio is reported on its own. Add the rest yourself.
      </text>
    </>
  )
}

/** l5-034 — asset class against holding period, with the rate in each cell. */
export function TaxYearGrid() {
  const rows = [
    { label: 'Listed equity, equity funds', short: '20%', long: '12.5% over ₹1.25 lakh', hold: '12 months' },
    { label: 'Debt funds, deposits, gold', short: 'slab rate', long: '12.5%', hold: '24 months' },
    { label: 'Property', short: 'slab rate', long: '12.5%', hold: '24 months' },
    { label: 'Foreign shares and funds', short: 'slab rate', long: '12.5%', hold: '24 months' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The holding period decides the rate, not the asset alone
      </text>
      <text x="176" y="42" fill={MUTED} fontSize="8.5">
        short term
      </text>
      <text x="266" y="42" fill={MUTED} fontSize="8.5">
        long term
      </text>
      <text x="352" y="42" fill={MUTED} fontSize="8.5" textAnchor="end">
        becomes long term
      </text>
      {rows.map((r, i) => {
        const y = 50 + i * 32
        return (
          <g key={r.label}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} />
            <text x="32" y={y + 16.5} fill={INK} fontSize="9">
              {r.label}
            </text>
            <text x="176" y={y + 16.5} fill={ROSE} fontSize="9.5">
              {r.short}
            </text>
            <text x="266" y={y + 16.5} fill={GOOD} fontSize="9.5">
              {r.long}
            </text>
            <text x="368" y={y + 16.5} fill={MUTED} fontSize="8.5" textAnchor="end">
              {r.hold}
            </text>
          </g>
        )
      })}
      <text x="24" y="196" fill={MUTED} fontSize="8.5">
        A loss in one row can offset a gain in another. It can never offset your salary.
      </text>
      <text x="24" y="210" fill={MUTED} fontSize="8.5">
        Unused capital losses survive eight years, so the record has to be kept.
      </text>
    </>
  )
}

/** l5-035 — accumulation on one side, the income streams that replace it on the other. */
export function RetirementBridge() {
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Two halves of a retirement plan, joined at a date you choose
      </text>
      <rect x="24" y="36" width="150" height="128" rx="8" fill={PANEL} stroke={LINE} />
      <text x="34" y="54" fill={BLUE} fontSize="9.5" fontWeight="600">
        paying in
      </text>
      {['EPF: employer plus own', 'NPS: 14% employer, extra ₹50,000', 'PPF', 'Equity and debt funds'].map((t, i) => (
        <text key={t} x="34" y={74 + i * 20} fill={INK} fontSize="8.5">
          {t}
        </text>
      ))}
      <rect x="196" y="36" width="180" height="128" rx="8" fill={PANEL} stroke={LINE} />
      <text x="206" y="54" fill={GOOD} fontSize="9.5" fontWeight="600">
        paying out
      </text>
      {[
        'Annuity: at least 20% of NPS',
        'Systematic withdrawal from the corpus',
        'Interest and dividends',
        'Rent, if you own one',
      ].map((t, i) => (
        <text key={t} x="206" y={74 + i * 20} fill={INK} fontSize="8.5">
          {t}
        </text>
      ))}
      <line x1="176" y1="100" x2="194" y2="100" stroke={GOOD} strokeWidth="2" />
      <text x="176" y="94" fill={MUTED} fontSize="8" textAnchor="middle">
        the date
      </text>
      <rect x="24" y="174" width="352" height="38" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="190" fill={INK} fontSize="8.5">
        The right half has to cover the same life at rising prices: at 6%, costs double in about twelve years.
      </text>
      <text x="34" y="204" fill={MUTED} fontSize="8.5">
        A corpus that only funds today's expenses funds a shrinking life.
      </text>
    </>
  )
}

/** l5-036 — how many years of spending the corpus has to be worth. */
export function MultipleLadder() {
  const rungs = [
    { multiple: '20x', rate: '5.0%', note: 'leaves little room for a bad decade', c: ROSE },
    { multiple: '25x', rate: '4.0%', note: 'the familiar rule of thumb, and only that', c: AMBER },
    { multiple: '30x', rate: '3.3%', note: 'survives a poor start more often', c: BLUE },
    { multiple: '40x', rate: '2.5%', note: 'room for health costs and family', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Independence is a multiple, and the multiple is your choice
      </text>
      {rungs.map((r, i) => {
        const y = 36 + i * 36
        return (
          <g key={r.multiple}>
            <rect x="24" y={y} width={80 + i * 88} height="28" rx="6" fill={r.c} opacity="0.2" />
            <rect x="24" y={y} width="5" height="28" rx="2" fill={r.c} />
            <text x="40" y={y + 18} fill={INK} fontSize="11" fontWeight="600">
              {r.multiple}
            </text>
            <text x="96" y={y + 18} fill={r.c} fontSize="9.5">
              withdraw {r.rate} a year
            </text>
            <text x="200" y={y + 18} fill={MUTED} fontSize="8.5">
              {r.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="196" fill={MUTED} fontSize="8.5">
        A 4% withdrawal has the rupee amount you would take in rupee one as its only certainty.
      </text>
      <text x="24" y="210" fill={MUTED} fontSize="8.5">
        Everything after that depends on returns, inflation and how long the money has to last.
      </text>
    </>
  )
}

/** l5-037 — the gap years: no saving, no pension, and the returns still matter. */
export function FireTimeline() {
  const marks = [
    { age: 25, x: 40, label: 'start' },
    { age: 45, x: 180, label: 'the date' },
    { age: 60, x: 268, label: 'pension access' },
    { age: 85, x: 372, label: 'the horizon' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The fifteen years nobody plans for
      </text>
      <line x1="34" y1="96" x2="378" y2="96" stroke={LINE} />
      <rect x="40" y="80" width="140" height="16" rx="8" fill={BLUE} opacity="0.3" />
      <text x="46" y="74" fill={BLUE} fontSize="9">
        paying in, and compounding
      </text>
      <rect x="180" y="80" width="88" height="16" rx="8" fill={AMBER} opacity="0.35" />
      <text x="186" y="74" fill={AMBER} fontSize="9">
        the gap: drawing down
      </text>
      <rect x="268" y="80" width="110" height="16" rx="8" fill={GOOD} opacity="0.3" />
      <text x="274" y="74" fill={GOOD} fontSize="9">
        EPF, NPS and annuity arrive
      </text>
      {marks.map((m) => (
        <g key={m.age}>
          <circle cx={m.x} cy="96" r="4" fill={INK} />
          <text x={m.x} y="112" fill={INK} fontSize="9" textAnchor="middle">
            {m.age}
          </text>
          <text x={m.x} y="124" fill={MUTED} fontSize="8" textAnchor="middle">
            {m.label}
          </text>
        </g>
      ))}
      <rect x="24" y="140" width="352" height="66" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="156" fill={ROSE} fontSize="8.5">
        In the gap years there is no salary, no provident fund and no pension.
      </text>
      <text x="34" y="170" fill={INK} fontSize="8.5">
        Health cover is bought at the age you arrive, not the age you planned it.
      </text>
      <text x="34" y="184" fill={INK} fontSize="8.5">
        A bad first decade of returns, early, is the risk that ends plans.
      </text>
      <text x="34" y="198" fill={MUTED} fontSize="8.5">
        Retiring early makes sequence risk larger, not smaller: the money has longer to last.
      </text>
    </>
  )
}

/** l5-038 — the savings rate as a lever on the date. */
export function RateLever() {
  const rows = [
    { rate: 10, years: 51, c: ROSE },
    { rate: 25, years: 32, c: AMBER },
    { rate: 40, years: 22, c: BLUE },
    { rate: 50, years: 17, c: GOOD },
    { rate: 65, years: 11, c: GOOD },
  ]
  const maxW = 300
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Years to a funded life, at a real return of 5%
      </text>
      {rows.map((r, i) => (
        <g key={r.rate}>
          <text x="24" y={48 + i * 30} fill={INK} fontSize="9.5">
            save {r.rate}%
          </text>
          <rect x="86" y={36 + i * 30} width={(r.years / 51) * maxW} height="16" rx="4" fill={r.c} opacity="0.35" />
          <text x={92 + (r.years / 51) * maxW} y={48 + i * 30} fill={r.c} fontSize="9.5">
            {r.years} yrs
          </text>
        </g>
      ))}
      <rect x="24" y="186" width="352" height="26" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="203" fill={INK} fontSize="8.5">
        Returns decide how much you end with. The rate decides how long you have to wait.
      </text>
    </>
  )
}

/** l5-039 — every stream, by how passive it is and how it is taxed. */
export function IncomeStreamTypes() {
  const streams = [
    { label: 'Interest and dividends', eff: 'none', head: 'other sources', c: GOOD },
    { label: 'Rent', eff: 'low', head: 'house property, 30% standard deduction', c: GOOD },
    { label: 'Royalty and licence fees', eff: 'low', head: 'other sources or business', c: BLUE },
    { label: 'A business you do not run', eff: 'medium', head: 'business income', c: AMBER },
    { label: 'A business you do run', eff: 'none', head: 'business income, and your time', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Passive income is a claim about effort, not a tax category
      </text>
      {streams.map((s, i) => {
        const y = 34 + i * 32
        return (
          <g key={s.label}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} />
            <rect x="24" y={y} width="4" height="26" rx="2" fill={s.c} />
            <text x="36" y={y + 17} fill={INK} fontSize="9.5">
              {s.label}
            </text>
            <text x="212" y={y + 17} fill={s.c} fontSize="8.5">
              effort: {s.eff}
            </text>
            <text x="368" y={y + 17} fill={MUTED} fontSize="8.5" textAnchor="end">
              {s.head}
            </text>
          </g>
        )
      })}
      <text x="24" y="208" fill={MUTED} fontSize="8.5">
        Each stream keeps its own head of income. There is no such thing as a passive income slab.
      </text>
    </>
  )
}
