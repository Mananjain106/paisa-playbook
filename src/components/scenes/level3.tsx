import { motion } from 'framer-motion'

/** Level 3 illustrations: risk, debt, equity, valuations, portfolio and the macro. */

const ease = { type: 'spring' as const, stiffness: 130 }

/** The risk-return frontier: you cannot pick high returns without picking risk. */
export function RiskReturnCurve() {
  const pts = [
    { l: 'Cash', x: 30, y: 168, c: '#94a3b8' },
    { l: 'FD', x: 72, y: 150, c: '#38bdf8' },
    { l: 'Bonds', x: 118, y: 128, c: '#818cf8' },
    { l: 'Balanced', x: 172, y: 96, c: '#a855f7' },
    { l: 'Equity', x: 232, y: 54, c: '#34e0a1' },
    { l: 'Small-cap', x: 290, y: 26, c: '#f59e0b' },
  ]
  return (
    <>
      <motion.path
        d="M 28 172 Q 160 150 300 24"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2"
        strokeDasharray="5 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {pts.map((p, i) => (
        <motion.g key={p.l} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.1, ...ease }} style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
          <circle cx={p.x} cy={p.y} r="7" fill={p.c} />
          <text x={p.x} y={p.y + 20} textAnchor="middle" fontSize="10" fill="#d7dbe9">
            {p.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        risk →
      </text>
      <text x="16" y="16" fontSize="10" fill="#8791b3">
        return ↑
      </text>
    </>
  )
}

/** Risk capacity (what you can survive) vs risk tolerance (what you can stomach). */
export function CapacityVsTolerance() {
  return (
    <>
      <motion.rect x="40" y="34" width="150" height="66" rx="10" fill="#34e0a1" opacity="0.18" initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} />
      <motion.rect x="208" y="34" width="150" height="66" rx="10" fill="#f59e0b" opacity="0.18" initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} />
      <motion.rect x="40" y="118" width="150" height="66" rx="10" fill="#f87171" opacity="0.18" initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} />
      <motion.rect x="208" y="118" width="150" height="66" rx="10" fill="#f87171" opacity="0.3" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} />

      <text x="115" y="56" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">Take more risk</text>
      <text x="115" y="76" textAnchor="middle" fontSize="10" fill="#d7dbe9">You can survive it and</text>
      <text x="115" y="89" textAnchor="middle" fontSize="10" fill="#d7dbe9">you can stomach it</text>

      <text x="283" y="56" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">Paper loss, panic</text>
      <text x="283" y="76" textAnchor="middle" fontSize="10" fill="#d7dbe9">Can take it, but will</text>
      <text x="283" y="89" textAnchor="middle" fontSize="10" fill="#d7dbe9">sell at the bottom</text>

      <text x="115" y="140" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">Forced to sell</text>
      <text x="115" y="160" textAnchor="middle" fontSize="10" fill="#d7dbe9">The loss breaks the</text>
      <text x="115" y="173" textAnchor="middle" fontSize="10" fill="#d7dbe9">plan, not just the mood</text>

      <text x="283" y="140" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">Too timid</text>
      <text x="283" y="160" textAnchor="middle" fontSize="10" fill="#d7dbe9">You will never build</text>
      <text x="283" y="173" textAnchor="middle" fontSize="10" fill="#d7dbe9">real wealth</text>

      <text x="200" y="210" textAnchor="middle" fontSize="10" fill="#8791b3">
        Only the top-left quadrant is a plan you will actually keep
      </text>
    </>
  )
}

/** The yield curve: short rates vs long rates. */
export function YieldCurve() {
  const pts = [6.2, 6.4, 6.6, 6.8, 7.0, 7.3, 7.6]
  const w = 60
  return (
    <>
      <motion.line x1="36" y1="180" x2="372" y2="180" stroke="#8791b3" strokeWidth="1" />
      <motion.line x1="36" y1="20" x2="36" y2="180" stroke="#8791b3" strokeWidth="1" />
      {pts.map((rate, i) => {
        const h = (rate - 5.5) * 90
        return (
          <motion.rect
            key={i}
            x={44 + i * w}
            y={180 - h}
            width={34}
            height={h}
            rx="4"
            fill={i >= 4 ? '#34e0a1' : '#38bdf8'}
            opacity="0.75"
            initial={{ height: 0, y: 180 }}
            animate={{ height: h, y: 180 - h }}
            transition={{ delay: i * 0.07, ...ease }}
          />
        )
      })}
      {pts.map((_, i) => (
        <text key={i} x={61 + i * w} y="194" textAnchor="middle" fontSize="9" fill="#8791b3">
          {i + 1}y
        </text>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Upward sloping: investors want more to lock money away for longer
      </text>
    </>
  )
}

/** Bond price and yield moving in opposite directions. */
export function PriceYieldInverse() {
  const pts = [170, 150, 128, 108, 88, 72, 60, 50]
  return (
    <>
      <motion.polyline
        points={pts.map((y, i) => `${44 + i * 44},${y}`).join(' ')}
        fill="none"
        stroke="#f87171"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {pts.map((y, i) => (
        <motion.circle
          key={i}
          cx={44 + i * 44}
          cy={y}
          r="5"
          fill="#11131f"
          stroke="#f87171"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.08 }}
        />
      ))}
      <text x="60" y="200" textAnchor="middle" fontSize="10" fill="#34e0a1">low yield</text>
      <text x="340" y="200" textAnchor="middle" fontSize="10" fill="#f87171">high yield</text>
      <text x="200" y="26" textAnchor="middle" fontSize="12" fill="#f87171" fontWeight="700">
        Price falls as yield rises
      </text>
      <text x="200" y="42" textAnchor="middle" fontSize="10" fill="#8791b3">
        Existing fixed coupons become less attractive
      </text>
    </>
  )
}

/** Revenue flowing down to profit, with costs draining it. */
export function ProfitWaterfall() {
  const rows = [
    { l: 'Revenue', v: 170, c: '#38bdf8' },
    { l: 'Costs', v: -96, c: '#f87171' },
    { l: 'Interest', v: -22, c: '#f87171' },
    { l: 'Tax', v: -16, c: '#f87171' },
    { l: 'Profit', v: 36, c: '#34e0a1' },
  ]
  return (
    <>
      {rows.map((r, i) => {
        const y = 34 + i * 34
        const h = Math.abs(r.v) * 0.9
        const yy = y
        return (
          <motion.g key={r.l} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <motion.rect
              x="86"
              y={r.v > 0 ? yy : yy + h}
              width={r.v > 0 ? 220 : 220}
              height={h}
              rx="5"
              fill={r.c}
              opacity="0.75"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ transformOrigin: '86px' }}
            />
            <text x="78" y={yy + h / 2 + 4} textAnchor="end" fontSize="11" fill="#d7dbe9">
              {r.l}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="214" textAnchor="middle" fontSize="10" fill="#8791b3">
        Every rupee of profit is what survived everything above it
      </text>
    </>
  )
}

/** One share = a tiny slice of a company. */
export function ShareSlice() {
  const cx = 200
  const cy = 108
  const r = 74
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill="#34e0a1" opacity="0.12" />
      <motion.g
        initial={{ rotate: -40 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <path
          d={`M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r * 0.7} ${cy + r * 0.7} Z`}
          fill="#34e0a1"
          opacity="0.85"
        />
      </motion.g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#34e0a1" strokeWidth="2" opacity="0.5" />
      <text x={cx} y={cy - 22} textAnchor="middle" fontSize="12" fill="#11131f" fontWeight="800">
        You
      </text>
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="10" fill="#11131f">
        own this
        <br />
        slice
      </text>
      <text x={cx} y={cy + r + 30} textAnchor="middle" fontSize="11" fill="#d7dbe9">
        A share is a claim on a company&apos;s future cash flow
      </text>
    </>
  )
}

/** Where market capitalisation sorts companies by size. */
export function MarketCapLadder() {
  const tiers = [
    { l: 'Large-cap', d: 'Top ~100 companies', c: '#34e0a1', w: 250 },
    { l: 'Mid-cap', d: 'Ranks 101–200', c: '#38bdf8', w: 185 },
    { l: 'Small-cap', d: 'Ranks 201–250', c: '#f59e0b', w: 125 },
  ]
  return (
    <>
      {tiers.map((t, i) => (
        <motion.g key={t.l} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
          <motion.rect
            x="40"
            y={30 + i * 52}
            width={t.w}
            height="38"
            rx="8"
            fill={t.c}
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: t.w }}
            transition={{ delay: i * 0.12, ...ease }}
          />
          <text x={54} y={54 + i * 52} fontSize="12" fill="#11131f" fontWeight="700">
            {t.l}
          </text>
          <text x={t.w + 52} y={54 + i * 52} fontSize="10" fill="#8791b3">
            {t.d}
          </text>
        </motion.g>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        More risk, more potential, more ways to be wrong
      </text>
    </>
  )
}

/** Expense ratio bleeding a tiny slice every single year. */
export function FeeDragVisual() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
          <rect x={40 + i * 54} y={40} width={44} height={130 - i * 4} rx="6" fill="#34e0a1" opacity={0.8 - i * 0.1} />
          <text x={62 + i * 54} y={184 - i * 4} textAnchor="middle" fontSize="9" fill="#8791b3">
            {2010 + i}
          </text>
        </motion.g>
      ))}
      <text x="200" y="206" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        The same return, a smaller pot, every single year
      </text>
    </>
  )
}

/** Asset allocation pie for a typical working portfolio. */
export function AllocationPie() {
  const slices = [
    { pct: 0.55, c: '#34e0a1' },
    { pct: 0.25, c: '#38bdf8' },
    { pct: 0.08, c: '#f59e0b' },
    { pct: 0.07, c: '#a855f7' },
    { pct: 0.05, c: '#94a3b8' },
  ]
  const r = 70
  const cx = 120
  const cy = 110
  let angle = -90
  return (
    <>
      <motion.g initial={{ rotate: -20 }} animate={{ rotate: 0 }} transition={{ duration: 0.7 }} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {slices.map((s, i) => {
          const sweep = s.pct * 360
          const a0 = (angle * Math.PI) / 180
          const a1 = ((angle + sweep) * Math.PI) / 180
          const x0 = cx + r * Math.cos(a0)
          const y0 = cy + r * Math.sin(a0)
          const x1 = cx + r * Math.cos(a1)
          const y1 = cy + r * Math.sin(a1)
          const large = sweep > 180 ? 1 : 0
          angle += sweep
          return (
            <motion.path
              key={i}
              d={`M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`}
              fill={s.c}
              opacity="0.85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: i * 0.1 }}
            />
          )
        })}
      </motion.g>
      <text x="272" y="72" fontSize="11" fill="#34e0a1">Equity</text>
      <text x="272" y="96" fontSize="11" fill="#38bdf8">Debt</text>
      <text x="272" y="120" fontSize="11" fill="#f59e0b">Gold</text>
      <text x="272" y="144" fontSize="11" fill="#a855f7">Property</text>
      <text x="272" y="168" fontSize="11" fill="#94a3b8">Cash</text>
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        One decision drives most of your outcome
      </text>
    </>
  )
}

/** The rupee losing ground against a foreign currency. */
export function CurrencyErosion() {
  const bars = [78, 74, 70, 66, 61, 56, 50, 44]
  return (
    <>
      {bars.map((v, i) => (
        <motion.rect
          key={i}
          x={30 + i * 44}
          y={180 - v * 1.5}
          width={30}
          height={v * 1.5}
          rx="5"
          fill={i < 2 ? '#34e0a1' : '#f59e0b'}
          opacity="0.8"
          initial={{ height: 0, y: 180 }}
          animate={{ height: v * 1.5, y: 180 - v * 1.5 }}
          transition={{ delay: i * 0.08, ...ease }}
        />
      ))}
      <text x="30" y="198" fontSize="10" fill="#34e0a1">2016</text>
      <text x="360" y="198" textAnchor="end" fontSize="10" fill="#f87171">2026</text>
      <text x="200" y="26" textAnchor="middle" fontSize="12" fill="#f59e0b" fontWeight="700">
        What ₹1 buys abroad keeps shrinking
      </text>
    </>
  )
}

/** A dividend arriving, year after year, without doing anything. */
export function DividendStream() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <motion.circle
          key={i}
          cx={44 + i * 42}
          cy={140 - i * 6}
          r="9"
          fill="#34e0a1"
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 0.9, y: 140 - i * 6 }}
          transition={{ delay: i * 0.1, ...ease }}
        />
      ))}
      <text x="200" y="30" textAnchor="middle" fontSize="12" fill="#34e0a1" fontWeight="700">
        Cash, arriving on its own
      </text>
      <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#8791b3">
        Plus any growth in the shares themselves
      </text>
    </>
  )
}

/** Property rent coming in against a loan going out. */
export function PropertyCashflow() {
  return (
    <>
      <motion.rect x="40" y="36" width="150" height="34" rx="8" fill="#34e0a1" opacity="0.8" initial={{ width: 0 }} animate={{ width: 150 }} transition={ease} />
      <text x="115" y="58" textAnchor="middle" fontSize="11" fill="#11131f" fontWeight="700">Rent in</text>
      <motion.rect x="210" y="36" width="150" height="34" rx="8" fill="#f87171" opacity="0.8" initial={{ width: 0 }} animate={{ width: 150 }} transition={{ delay: 0.15, ...ease }} />
      <text x="285" y="58" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">EMI out</text>
      <motion.rect x="40" y="96" width="110" height="28" rx="6" fill="#38bdf8" opacity="0.7" initial={{ width: 0 }} animate={{ width: 110 }} transition={{ delay: 0.3, ...ease }} />
      <text x="95" y="115" textAnchor="middle" fontSize="10" fill="#0b1524">Maintenance</text>
      <motion.rect x="170" y="96" width="60" height="28" rx="6" fill="#38bdf8" opacity="0.7" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.4, ...ease }} />
      <text x="200" y="115" textAnchor="middle" fontSize="10" fill="#0b1524">Tax</text>
      <motion.rect x="250" y="96" width="110" height="28" rx="6" fill="#38bdf8" opacity="0.7" initial={{ width: 0 }} animate={{ width: 110 }} transition={{ delay: 0.5, ...ease }} />
      <text x="305" y="115" textAnchor="middle" fontSize="10" fill="#0b1524">Vacancy</text>
      <text x="200" y="164" textAnchor="middle" fontSize="12" fill="#f59e0b" fontWeight="700">
        What is left is the real return
      </text>
      <text x="200" y="184" textAnchor="middle" fontSize="10" fill="#8791b3">
        Often much less than the yield on the internet
      </text>
    </>
  )
}

/** Time horizon: the single biggest input to how risky you can be. */
export function TimeHorizon() {
  const bars = [
    { l: '< 1 yr', v: 0.08, c: '#f87171', r: 'Cash only' },
    { l: '3 yrs', v: 0.28, c: '#f59e0b', r: 'Debt heavy' },
    { l: '7 yrs', v: 0.6, c: '#38bdf8', r: 'Balanced' },
    { l: '15 yrs+', v: 0.85, c: '#34e0a1', r: 'Equity heavy' },
  ]
  return (
    <>
      {bars.map((b, i) => (
        <motion.g key={b.l} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
          <text x="34" y={44 + i * 40} fontSize="11" fill="#d7dbe9">
            {b.l}
          </text>
          <motion.rect
            x="88"
            y={30 + i * 40}
            width={b.v * 250}
            height="24"
            rx="6"
            fill={b.c}
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: b.v * 250 }}
            transition={{ delay: i * 0.12, ...ease }}
          />
          <text x={94 + b.v * 250} y={47 + i * 40} fontSize="10" fill="#8791b3">
            {b.r}
          </text>
        </motion.g>
      ))}
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        You only need to sell when the goal arrives, not when the market does
      </text>
    </>
  )
}

/** Passive vs active: two paths to the same market. */
export function PassiveVsActive() {
  return (
    <>
      <motion.polyline
        points="40,160 90,140 140,150 190,120 240,100 290,70 350,52"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.polyline
        points="40,168 100,120 160,145 230,95 300,110 350,50"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeDasharray="5 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <text x="200" y="24" textAnchor="middle" fontSize="12" fill="#34e0a1" fontWeight="700">
        Same market, two routes
      </text>
      <text x="46" y="192" fontSize="11" fill="#34e0a1">Index — straight line</text>
      <text x="46" y="208" fontSize="11" fill="#38bdf8">Active — same shape, higher fees</text>
    </>
  )
}

/** Growth in the market shrinking what your money buys. */
export function RealVsNominal() {
  return (
    <>
      <motion.rect x="44" y="30" width="150" height="130" rx="8" fill="#34e0a1" opacity="0.7" initial={{ height: 0, y: 160 }} animate={{ height: 130, y: 30 }} transition={{ duration: 0.7 }} />
      <text x="119" y="100" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Nominal</text>
      <text x="119" y="118" textAnchor="middle" fontSize="10" fill="#0b1524">the balance</text>
      <motion.rect x="206" y="66" width="150" height="94" rx="8" fill="#f87171" opacity="0.7" initial={{ height: 0, y: 160 }} animate={{ height: 94, y: 66 }} transition={{ delay: 0.2, duration: 0.7 }} />
      <text x="281" y="112" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">Real</text>
      <text x="281" y="130" textAnchor="middle" fontSize="10" fill="#2a0f0f">what it buys</text>
      <text x="200" y="190" textAnchor="middle" fontSize="11" fill="#f87171">
        The gap between these two bars is inflation
      </text>
    </>
  )
}

/** Gold as a hedge rather than a growth engine. */
export function GoldRole() {
  return (
    <>
      <motion.line x1="30" y1="90" x2="370" y2="90" stroke="#8791b3" strokeWidth="1" strokeDasharray="4 4" />
      <motion.rect x="60" y="30" width="90" height="60" rx="8" fill="#f59e0b" opacity="0.8" initial={{ y: 30 }} animate={{ y: 30 }} transition={ease} />
      <text x="105" y="66" textAnchor="middle" fontSize="11" fill="#11131f" fontWeight="700">Equity</text>
      <motion.rect x="250" y="60" width="90" height="30" rx="8" fill="#f59e0b" opacity="0.5" initial={{ width: 0 }} animate={{ width: 90 }} transition={ease} />
      <text x="295" y="80" textAnchor="middle" fontSize="10" fill="#f59e0b">Gold</text>
      <text x="105" y="120" textAnchor="middle" fontSize="10" fill="#34e0a1">Long-run growth</text>
      <text x="295" y="120" textAnchor="middle" fontSize="10" fill="#8791b3">No income at all</text>
      <text x="200" y="166" textAnchor="middle" fontSize="12" fill="#d7dbe9">
        Gold keeps its value in a crisis. It does not pay you while it waits.
      </text>
      <text x="200" y="186" textAnchor="middle" fontSize="10" fill="#8791b3">
        A small allocation is insurance, not an engine
      </text>
    </>
  )
}

/** Money split: invested, kept safe, and owed. */
export function MoneyAllocation() {
  return (
    <>
      {[
        { l: 'Invested for the future', v: 200, c: '#34e0a1' },
        { l: 'Safe and accessible', v: 80, c: '#38bdf8' },
        { l: 'Debt to clear first', v: 56, c: '#f87171' },
        { l: 'Spent on living', v: 64, c: '#94a3b8' },
      ].map((r, i) => (
        <motion.g key={r.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <motion.rect
            x="30"
            y={30 + i * 40}
            width={r.v}
            height="26"
            rx="6"
            fill={r.c}
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: r.v }}
            transition={{ delay: i * 0.1, ...ease }}
          />
          <text x={42 + r.v} y={48 + i * 40} fontSize="10" fill="#d7dbe9">
            {r.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Order matters more than cleverness
      </text>
    </>
  )
}
