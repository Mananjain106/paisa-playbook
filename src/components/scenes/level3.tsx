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
  const bw = 32
  const step = 48
  const x0 = 46
  const floor = 5.5
  const scale = 70
  return (
    <>
      <motion.line x1="40" y1="180" x2="376" y2="180" stroke="#8791b3" strokeWidth="1" />
      <motion.line x1="40" y1="24" x2="40" y2="180" stroke="#8791b3" strokeWidth="1" />
      {pts.map((rate, i) => {
        const h = (rate - floor) * scale
        return (
          <motion.rect
            key={`b${i}`}
            x={x0 + i * step}
            width={bw}
            rx="4"
            fill={i >= 4 ? '#34e0a1' : '#38bdf8'}
            opacity="0.8"
            initial={{ height: 0, attrY: 180 }}
            animate={{ height: h, attrY: 180 - h }}
            transition={{ delay: i * 0.07, ...ease }}
          />
        )
      })}
      {pts.map((rate, i) => (
        <text key={`v${i}`} x={x0 + bw / 2 + i * step} y={180 - (rate - floor) * scale - 6} textAnchor="middle" fontSize="8" fill={i >= 4 ? '#34e0a1' : '#38bdf8'}>
          {rate.toFixed(1)}%
        </text>
      ))}
      {pts.map((_, i) => (
        <text key={`x${i}`} x={x0 + bw / 2 + i * step} y="194" textAnchor="middle" fontSize="9" fill="#8791b3">
          {i + 1}y
        </text>
      ))}
      <text x="200" y="210" textAnchor="middle" fontSize="10" fill="#d7dbe9">
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

/** Revenue shrinking step by step until only profit is left. */
export function ProfitWaterfall() {
  const bars = [
    { l: 'Revenue', c: '#38bdf8', a: 0, b: 170, v: '170' },
    { l: 'Costs', c: '#f87171', a: 74, b: 170, v: '-96' },
    { l: 'Interest', c: '#f87171', a: 52, b: 74, v: '-22' },
    { l: 'Tax', c: '#f87171', a: 36, b: 52, v: '-16' },
    { l: 'Profit', c: '#34e0a1', a: 0, b: 36, v: '+36' },
  ]
  const x0 = 96
  const s = 1.55
  const px = (v: number) => x0 + v * s
  const bh = 22
  const links = [
    { x: px(170), y1: 52, y2: 62 },
    { x: px(74), y1: 84, y2: 94 },
    { x: px(52), y1: 116, y2: 126 },
    { x: px(36), y1: 148, y2: 158 },
  ]
  return (
    <>
      {links.map((k, i) => (
        <motion.line key={i} x1={k.x} x2={k.x} y1={k.y1} y2={k.y2} stroke="#8791b3" strokeWidth="1" strokeDasharray="2 2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.1 }} />
      ))}
      {bars.map((r, i) => {
        const y = 30 + i * 32
        const bx = px(r.a)
        const bw = px(r.b) - px(r.a)
        return (
          <motion.g key={r.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <motion.rect
              x={bx}
              y={y}
              width={bw}
              height={bh}
              rx="5"
              fill={r.c}
              opacity="0.85"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{ transformOrigin: `${bx}px` }}
            />
            <text x="88" y={y + 15} textAnchor="end" fontSize="11" fill="#d7dbe9">
              {r.l}
            </text>
            <text x={bx + bw + 7} y={y + 15} fontSize="10" fill={r.c}>
              {r.v}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="208" textAnchor="middle" fontSize="10" fill="#8791b3">
        Revenue, minus every cost and tax - what survives is profit
      </text>
    </>
  )
}

/** One share = a slice of the whole business, carved into ownership. */
export function ShareSlice() {
  const cx = 128
  const cy = 112
  const R = 70
  const RI = 44
  const n = 8
  const seg = (2 * Math.PI) / n
  const a0 = -Math.PI / 2
  const ring = (i: number) => {
    const s = a0 + i * seg
    const e = s + seg
    return `M ${cx + R * Math.cos(s)} ${cy + R * Math.sin(s)} A ${R} ${R} 0 0 1 ${cx + R * Math.cos(e)} ${cy + R * Math.sin(e)} L ${cx + RI * Math.cos(e)} ${cy + RI * Math.sin(e)} A ${RI} ${RI} 0 0 0 ${cx + RI * Math.cos(s)} ${cy + RI * Math.sin(s)} Z`
  }
  const ya = a0 + seg / 2
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <motion.path
          key={i}
          d={ring(i)}
          fill={i === 0 ? '#34e0a1' : '#33415c'}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === 0 ? 0.95 : 0.85 }}
          transition={{ delay: i * 0.06 }}
        />
      ))}
      <rect x={cx - 15} y={cy - 4} width="30" height="26" rx="3" fill="#38bdf8" />
      <polygon points={`${cx - 19},${cy - 4} ${cx},${cy - 20} ${cx + 19},${cy - 4}`} fill="#38bdf8" />
      <rect x={cx - 9} y={cy + 2} width="6" height="6" fill="#0b1220" />
      <rect x={cx + 3} y={cy + 2} width="6" height="6" fill="#0b1220" />
      <rect x={cx - 4} y={cy + 12} width="8" height="10" fill="#0b1220" />
      <motion.line x1={cx + (R - 4) * Math.cos(ya)} y1={cy + (R - 4) * Math.sin(ya)} x2="232" y2="76" stroke="#34e0a1" strokeWidth="1" strokeDasharray="3 3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
      <circle cx="234" cy="76" r="4" fill="#34e0a1" />
      <text x="246" y="80" fontSize="11" fill="#34e0a1" fontWeight="700">You - 1 share</text>
      <text x="246" y="94" fontSize="9" fill="#8791b3">one sliver of the company</text>
      <circle cx="234" cy="120" r="4" fill="#33415c" />
      <text x="246" y="124" fontSize="10" fill="#8791b3">Other investors</text>
      <text x="234" y="152" fontSize="9" fill="#8791b3">A share is a claim on the</text>
      <text x="234" y="165" fontSize="9" fill="#8791b3">profits, assets and debts.</text>
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

/** Dividends arriving each year, with compounding growth stacked on top. */
export function DividendStream() {
  const growth = [14, 24, 36, 50, 66, 84]
  const dividend = 18
  const base = 178
  const bw = 30
  return (
    <>
      <motion.line x1="36" y1={base} x2="374" y2={base} stroke="#8791b3" strokeWidth="1" />
      <circle cx="52" cy="30" r="5" fill="#34e0a1" />
      <text x="63" y="34" fontSize="10" fill="#d7dbe9">Dividend each year</text>
      <circle cx="186" cy="30" r="5" fill="#38bdf8" />
      <text x="197" y="34" fontSize="10" fill="#d7dbe9">Growth compounds</text>
      {growth.map((g, i) => {
        const x = 48 + i * 54
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
            <motion.rect
              x={x}
              width={bw}
              rx="3"
              fill="#34e0a1"
              opacity="0.9"
              initial={{ height: 0, attrY: base }}
              animate={{ height: dividend, attrY: base - dividend }}
              transition={{ delay: i * 0.1, ...ease }}
            />
            <motion.rect
              x={x}
              width={bw}
              rx="3"
              fill="#38bdf8"
              opacity="0.85"
              initial={{ height: 0, attrY: base - dividend }}
              animate={{ height: g, attrY: base - dividend - g }}
              transition={{ delay: 0.15 + i * 0.1, ...ease }}
            />
            <text x={x + bw / 2} y={base + 14} textAnchor="middle" fontSize="9" fill="#8791b3">
              Yr {i + 1}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="208" textAnchor="middle" fontSize="10" fill="#8791b3">
        Dividends arrive on their own; growth is stacked on top
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
      <motion.rect x="44" width="150" rx="8" fill="#34e0a1" opacity="0.75" initial={{ height: 0, attrY: 160 }} animate={{ height: 130, attrY: 30 }} transition={{ duration: 0.7 }} />
      <text x="119" y="100" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Nominal</text>
      <text x="119" y="118" textAnchor="middle" fontSize="10" fill="#0b1524">the balance</text>
      <motion.rect x="206" width="150" rx="8" fill="#f87171" opacity="0.85" initial={{ height: 0, attrY: 160 }} animate={{ height: 94, attrY: 66 }} transition={{ delay: 0.2, duration: 0.7 }} />
      <text x="281" y="112" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">Real</text>
      <text x="281" y="130" textAnchor="middle" fontSize="10" fill="#2a0f0f">what it buys</text>
      <motion.line x1="44" y1="30" x2="356" y2="30" stroke="#8791b3" strokeWidth="1" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
      <text x="281" y="49" textAnchor="middle" fontSize="9" fill="#f87171">inflation</text>
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
      <motion.rect x="60" width="90" rx="8" fill="#f59e0b" opacity="0.8" initial={{ height: 0, attrY: 90 }} animate={{ height: 60, attrY: 30 }} transition={ease} />
      <text x="105" y="66" textAnchor="middle" fontSize="11" fill="#11131f" fontWeight="700">Equity</text>
      <motion.rect x="250" width="90" rx="8" fill="#f59e0b" opacity="0.5" initial={{ height: 0, attrY: 90 }} animate={{ height: 30, attrY: 60 }} transition={{ delay: 0.15, ...ease }} />
      <text x="295" y="80" textAnchor="middle" fontSize="10" fill="#fff7ed">Gold</text>
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
