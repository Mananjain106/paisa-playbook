/**
 * Level 5 illustrations — band four, batch 2 (chapters l5-081 to l5-090).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   dependant-matrix          every dependant against the risk that lands on you
 *   education-ladder          the cost of a course, rung by rung, rising as it goes
 *   tco-breakdown             the sticker price against the five-year total
 *   house-cost-stack          every layer between the asking price and the loan
 *   vehicle-five-year-cost    what a car costs and what it is worth, year by year
 *   education-payback         what a degree costs against what it adds, and when
 *   rent-buy-crossover        rent-and-invest against buy-and-repay, wearing the same shoes
 *   new-used-curve            two depreciation curves, and what the gap buys you
 *   cash-finance-seesaw       the loan rate on one side, the safe return on the other
 *   crisis-order              the order to work through a financial crisis in
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

/** l5-081 — who depends on you, and which risk lands on you for each. */
export function DependantMatrix() {
  const cols = ['Your income stops', 'Their health event', 'Their long-term care']
  const rows = [
    { who: 'Spouse', cover: [true, true, false] },
    { who: 'Children (school)', cover: [true, true, false] },
    { who: 'Children (higher study)', cover: [true, false, false] },
    { who: 'Parents', cover: [false, true, true] },
    { who: 'A dependant with disability', cover: [true, true, true] },
    { who: 'A co-borrower on your loan', cover: [true, false, false] },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Every dependant, and the risk that lands on you
      </text>
      {cols.map((c, i) => (
        <text key={c} x={160 + i * 82} y="42" fill={MUTED} fontSize="7.5">
          {i === 0 ? 'income stops' : i === 1 ? 'health event' : 'long-term care'}
        </text>
      ))}
      {rows.map((r, i) => {
        const y = 50 + i * 27
        return (
          <g key={r.who}>
            <rect x="24" y={y} width="352" height="22" rx="4" fill={PANEL} stroke={LINE} />
            <text x="34" y={y + 15} fill={INK} fontSize="8.5">
              {r.who}
            </text>
            {r.cover.map((has, j) => (
              <circle
                key={cols[j]}
                cx={182 + j * 82}
                cy={y + 11}
                r="5.5"
                fill={has ? (j === 0 ? GOOD : j === 1 ? BLUE : AMBER) : 'rgba(255,255,255,0.10)'}
              />
            ))}
          </g>
        )
      })}
      <text x="24" y="216" fill={MUTED} fontSize="8">
        A filled circle is a risk you are already carrying for someone else.
      </text>
    </>
  )
}

/** l5-082 — a course paid for in instalments, with each year's cost rising. */
export function EducationLadder() {
  const rungs = [
    { year: 'Starting today', cost: 4, note: 'what the fee is now' },
    { year: 'In 6 years', cost: 5.6, note: 'inflation at about 6%' },
    { year: 'In 12 years', cost: 8, note: 'and the fee is not the whole bill' },
    { year: 'In 18 years', cost: 11.4, note: 'living costs rise with it' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The same course, four different prices
      </text>
      {rungs.map((r, i) => {
        const y = 148 - i * 32
        const w = r.cost * 22
        return (
          <g key={r.year}>
            <rect x="120" y={y} width={w} height="24" rx="4" fill={BLUE} opacity="0.18" />
            <rect x="120" y={y} width={w} height="24" rx="4" fill="none" stroke={BLUE} opacity="0.5" />
            <text x="120" y={y - 4} fill={INK} fontSize="8">
              {r.year} — ₹{r.cost.toFixed(1)}L
            </text>
            <text x={126 + w} y={y + 16} fill={MUTED} fontSize="7.5">
              {r.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="200" fill={AMBER} fontSize="8">
        Saving for a child is not saving the price today. It is saving the price at the day of admission.
      </text>
      <text x="24" y="214" fill={MUTED} fontSize="7.5">
        Figures are illustrative, at about 6% a year on an education cost that has been rising faster than general inflation.
      </text>
    </>
  )
}

/** l5-083 — a sticker price against the total cost of owning the thing. */
export function TcoBreakdown() {
  const bars = [
    { label: 'Sticker price', v: 60, c: BLUE, note: 'what the board says' },
    { label: 'Tax and registration', v: 12, c: AMBER, note: 'paid once, unavoidable' },
    { label: 'Financing cost', v: 16, c: PURPLE, note: 'interest over the years' },
    { label: 'Running and upkeep', v: 20, c: ROSE, note: 'every year, not every purchase' },
    { label: 'Resale loss', v: 18, c: GOOD, note: 'what you do not get back' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        One price tag, five places the money goes
      </text>
      {bars.map((b, i) => {
        const y = 34 + i * 33
        return (
          <g key={b.label}>
            <text x="24" y={y + 10} fill={INK} fontSize="8.5">
              {b.label}
            </text>
            <rect x="150" y={y} width={b.v * 3.6} height="20" rx="4" fill={b.c} opacity="0.2" />
            <text x={158 + b.v * 3.6} y={y + 14} fill={MUTED} fontSize="7.5">
              {b.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="208" fill={AMBER} fontSize="8">
        A purchase you can afford the payment on is not the same as one you can afford to own.
      </text>
    </>
  )
}

/** l5-084 — the layers between the asking price and what you actually pay. */
export function HouseCostStack() {
  const layers = [
    { name: 'Agreement value', of: 'the number the seller quotes', v: 100, c: BLUE },
    { name: 'Stamp duty', of: 'a state rate, commonly about 5% to 7%', v: 6, c: AMBER },
    { name: 'Registration charge', of: 'about 1%, with a ceiling in some states', v: 1, c: AMBER },
    { name: 'GST on an under-construction flat', of: '5%, or 1% for affordable housing', v: 4, c: ROSE },
    { name: 'Interest over the loan', of: 'the largest layer, paid over 20 years', v: 78, c: PURPLE },
    { name: 'Maintenance, tax and upkeep', of: 'monthly, and it never stops', v: 24, c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The asking price is the smallest honest number
      </text>
      {layers.map((l, i) => {
        const y = 34 + i * 27
        return (
          <g key={l.name}>
            <rect x="24" y={y} width={l.v * 3.2} height="22" rx="4" fill={l.c} opacity="0.16" />
            <rect x="24" y={y} width="4" height="22" rx="2" fill={l.c} />
            <text x="36" y={y + 10} fill={INK} fontSize="8.5">
              {l.name}
            </text>
            <text x="36" y={y + 19} fill={MUTED} fontSize="7.5">
              {l.of}
            </text>
          </g>
        )
      })}
      <text x="24" y="212" fill={MUTED} fontSize="7.5">
        Stamp duty rates are set by each state, so the same flat costs different amounts in different cities.
      </text>
    </>
  )
}

/** l5-085 — a vehicle's value falling while its costs keep coming. */
export function VehicleFiveYearCost() {
  const years = [
    { y: 'Year 1', worth: 82, cost: 16 },
    { y: 'Year 2', worth: 72, cost: 14 },
    { y: 'Year 3', worth: 62, cost: 15 },
    { y: 'Year 4', worth: 52, cost: 18 },
    { y: 'Year 5', worth: 44, cost: 22 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        What it is worth, against what it keeps asking for
      </text>
      {years.map((r, i) => {
        const x = 44 + i * 68
        return (
          <g key={r.y}>
            <rect x={x} y={186 - r.worth * 1.5} width="30" height={r.worth * 1.5} rx="4" fill={BLUE} opacity="0.2" />
            <rect
              x={x + 34}
              y={186 - r.cost * 3}
              width="14"
              height={r.cost * 3}
              rx="3"
              fill={ROSE}
              opacity="0.45"
            />
            <text x={x} y="200" fill={MUTED} fontSize="7.5">
              {r.y}
            </text>
          </g>
        )
      })}
      <line x1="30" y1="186" x2="380" y2="186" stroke={LINE} />
      <text x="24" y="214" fill={MUTED} fontSize="7.5">
        Blue is resale value; red is the year's insurance, fuel, servicing and repairs. Both are invented here.
      </text>
    </>
  )
}

/** l5-086 — what a qualification costs against what it adds, and when it pays back. */
export function EducationPayback() {
  const cost = 'M 60 60 L 140 92 L 220 110 L 300 118'
  const earn = 'M 60 60 L 140 46 L 220 34 L 300 26'
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The two lines that decide whether a course is worth it
      </text>
      <line x1="40" y1="140" x2="380" y2="140" stroke={LINE} />
      <line x1="40" y1="30" x2="40" y2="140" stroke={LINE} />
      <path d={cost} fill="none" stroke={ROSE} strokeWidth="2" />
      <path d={earn} fill="none" stroke={GOOD} strokeWidth="2" />
      <circle cx="220" cy="72" r="4" fill={AMBER} />
      <text x="228" y="70" fill={AMBER} fontSize="8">
        break-even
      </text>
      <text x="46" y="152" fill={MUTED} fontSize="7.5">
        graduation
      </text>
      <text x="250" y="152" fill={MUTED} fontSize="7.5">
        years after it
      </text>
      <text x="60" y="176" fill={ROSE} fontSize="8">
        cost: fees, forgone salary, interest
      </text>
      <text x="60" y="190" fill={GOOD} fontSize="8">
        gain: the extra income over what you would have earned anyway
      </text>
      <text x="60" y="208" fill={MUTED} fontSize="7.5">
        Both lines are invented; the method is comparing them, not the drawing.
      </text>
    </>
  )
}

/** l5-087 — the year buying passes renting, once both are costed properly. */
export function RentBuyCrossover() {
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Renting and buying are both costs, until one of them is not
      </text>
      <line x1="44" y1="150" x2="376" y2="150" stroke={LINE} />
      <line x1="44" y1="34" x2="44" y2="150" stroke={LINE} />
      <path d="M 44 120 L 130 106 L 216 96 L 300 90 L 372 86" fill="none" stroke={BLUE} strokeWidth="2" />
      <path d="M 44 62 L 130 70 L 216 78 L 300 84 L 372 88" fill="none" stroke={AMBER} strokeWidth="2" />
      <circle cx="300" cy="86" r="4" fill={GOOD} />
      <text x="306" y="80" fill={GOOD} fontSize="8">
        buying pulls ahead
      </text>
      <text x="48" y="162" fill={MUTED} fontSize="7.5">
        year 1
      </text>
      <text x="320" y="162" fill={MUTED} fontSize="7.5">
        year 10
      </text>
      <text x="52" y="184" fill={BLUE} fontSize="8">
        rent plus what the down payment would have earned
      </text>
      <text x="52" y="198" fill={AMBER} fontSize="8">
        all the costs of owning, net of what the house is worth
      </text>
      <text x="52" y="214" fill={MUTED} fontSize="7.5">
        Curve shapes are illustrative; the crossing point is the only thing that matters.
      </text>
    </>
  )
}

/** l5-088 — two depreciation curves, and what the gap between them buys. */
export function NewUsedCurve() {
  const bars = [
    { year: 'Year 0', newV: 100, usedV: 62 },
    { year: 'Year 1', newV: 82, usedV: 56 },
    { year: 'Year 2', newV: 70, usedV: 50 },
    { year: 'Year 3', newV: 60, usedV: 44 },
    { year: 'Year 4', newV: 52, usedV: 39 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The first owner pays for the steepest part
      </text>
      {bars.map((b, i) => {
        const x = 40 + i * 68
        return (
          <g key={b.year}>
            <rect x={x} y={170 - b.newV} width="20" height={b.newV} rx="3" fill={BLUE} opacity="0.25" />
            <rect x={x + 22} y={170 - b.usedV} width="20" height={b.usedV} rx="3" fill={GOOD} opacity="0.25" />
            <text x={x} y="184" fill={MUTED} fontSize="7.5">
              {b.year}
            </text>
          </g>
        )
      })}
      <line x1="34" y1="170" x2="380" y2="170" stroke={LINE} />
      <text x="24" y="202" fill={BLUE} fontSize="8">
        New: the full price, full warranty, and the fastest loss in year one
      </text>
      <text x="24" y="216" fill={GOOD} fontSize="8">
        Used: less loss, less warranty, and an inspection you must actually pay for
      </text>
    </>
  )
}

/** l5-089 — the loan rate against the return the cash could safely earn. */
export function CashFinanceSeesaw() {
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The only comparison that settles it
      </text>
      <rect x="24" y="36" width="168" height="96" rx="8" fill={ROSE} opacity="0.10" stroke={LINE} />
      <text x="38" y="58" fill={INK} fontSize="9" fontWeight="600">
        Financing costs you
      </text>
      <text x="38" y="84" fill={ROSE} fontSize="20" fontWeight="600">
        9.4%
      </text>
      <text x="38" y="104" fill={MUTED} fontSize="7.5">
        the loan rate, plus any fee
      </text>
      <text x="38" y="120" fill={MUTED} fontSize="7.5">
        and the monthly discipline it demands
      </text>
      <rect x="208" y="36" width="168" height="96" rx="8" fill={GOOD} opacity="0.10" stroke={LINE} />
      <text x="222" y="58" fill={INK} fontSize="9" fontWeight="600">
        Keeping the cash earns you
      </text>
      <text x="222" y="84" fill={GOOD} fontSize="20" fontWeight="600">
        6.6%
      </text>
      <text x="222" y="104" fill={MUTED} fontSize="7.5">
        after tax, on money you can reach
      </text>
      <text x="222" y="120" fill={MUTED} fontSize="7.5">
        and it stays yours
      </text>
      <line x1="200" y1="46" x2="200" y2="122" stroke={AMBER} strokeWidth="2" />
      <text x="24" y="160" fill={AMBER} fontSize="8">
        Pay cash when the loan rate is clearly above what the money earns, and you still hold a reserve afterwards.
      </text>
      <text x="24" y="176" fill={INK} fontSize="8">
        Finance it when the gap is small, the rate is fixed, or the loan comes with a subsidy you would lose.
      </text>
      <text x="24" y="200" fill={MUTED} fontSize="7.5">
        The two rates here are invented. Substitute your own quote and the rate your cash really earns after tax.
      </text>
    </>
  )
}

/** l5-090 — the order to work a financial crisis in. */
export function CrisisOrder() {
  const steps = [
    { n: '1', what: 'Stop the bleeding', note: 'cancel what is genuinely optional, today', c: ROSE },
    { n: '2', what: 'Protect the four essentials', note: 'housing, food, health cover, transport to work', c: AMBER },
    { n: '3', what: 'List every rupee coming in and out', note: 'the emergency budget, written down', c: AMBER },
    { n: '4', what: 'Talk to the lender before the due date', note: 'a restructure agreed early beats a default', c: BLUE },
    { n: '5', what: 'Use liquidity in order', note: 'cash, then liquid funds, then the rest', c: BLUE },
    { n: '6', what: 'Rebuild the buffer before resuming goals', note: 'the crisis is over when the runway is back', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A crisis is a sequence, not a sale
      </text>
      {steps.map((s, i) => {
        const y = 32 + i * 30
        return (
          <g key={s.n}>
            <rect x="24" y={y} width="352" height="26" rx="4" fill={PANEL} stroke={LINE} />
            <circle cx="42" cy={y + 13} r="9" fill={s.c} opacity="0.25" />
            <text x="39" y={y + 17} fill={INK} fontSize="9" fontWeight="600">
              {s.n}
            </text>
            <text x="62" y={y + 11} fill={INK} fontSize="8.5">
              {s.what}
            </text>
            <text x="62" y={y + 21} fill={MUTED} fontSize="7.5">
              {s.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="216" fill={ROSE} fontSize="8">
        The step that is never first: selling a long-term asset at a bad price.
      </text>
    </>
  )
}
