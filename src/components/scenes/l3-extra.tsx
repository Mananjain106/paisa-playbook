import { motion } from 'framer-motion'

/** Additional Level 3 illustrations: valuation, fixed income, funds, property and macro. */

const ease = { type: 'spring' as const, stiffness: 130 }

/* ------------------------------------------------------------------ Property */

/** Land sits idle: no income, slow to sell. */
export function LandIdle() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Land holds value but produces nothing
      </text>
      <motion.polygon points="60,120 150,80 330,90 250,150" fill="#f59e0b" opacity="0.18" stroke="#f59e0b" strokeWidth="1.5" initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} />
      <text x="195" y="122" textAnchor="middle" fontSize="11" fill="#f59e0b">empty plot</text>
      <text x="195" y="182" textAnchor="middle" fontSize="10" fill="#8791b3">no rent, no dividend</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <line x1="250" y1="150" x2="352" y2="150" stroke="#8791b3" strokeWidth="2" />
        <text x="352" y="144" textAnchor="end" fontSize="9" fill="#8791b3">to sell: years</text>
      </motion.g>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#f87171">
        Hard to mortgage, slower still to sell
      </text>
    </>
  )
}

/** An apartment owes maintenance every month for life. */
export function ApartmentDues() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        An apartment bills you every month
      </text>
      <rect x="60" y="46" width="90" height="112" rx="4" fill="#1b2436" stroke="#38bdf8" strokeWidth="1.5" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1].map((c) => (
          <rect key={`${r}-${c}`} x={72 + c * 34} y={58 + r * 24} width="18" height="14" rx="2" fill="#38bdf8" opacity="0.6" />
        )),
      )}
      <text x="105" y="172" textAnchor="middle" fontSize="9" fill="#8791b3">apartment</text>
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}>
          <rect x={200 + i * 56} y="60" width="40" height="26" rx="6" fill="#f87171" opacity="0.8" />
          <text x={220 + i * 56} y="77" textAnchor="middle" fontSize="8" fill="#2a0f0f">₹ dues</text>
        </motion.g>
      ))}
      <text x="200" y="120" textAnchor="middle" fontSize="10" fill="#8791b3">
        maintenance, society charges, repairs
      </text>
      <text x="200" y="150" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        every month, for life
      </text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#34e0a1">
        More liquid than land - but never fully quiet
      </text>
    </>
  )
}

/** Appreciation is the main return, and the hardest part to forecast. */
export function AppreciationForecast() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Appreciation: the part you cannot see
      </text>
      <line x1="40" y1="176" x2="376" y2="176" stroke="#8791b3" strokeWidth="1" />
      <line x1="40" y1="176" x2="40" y2="40" stroke="#8791b3" strokeWidth="1" />
      <motion.polygon points="52,168 360,60 360,140" fill="#f59e0b" opacity="0.14" initial={{ opacity: 0 }} animate={{ opacity: 0.14 }} />
      <motion.polyline points="52,168 140,150 240,120 360,96" fill="none" stroke="#34e0a1" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <text x="300" y="82" fontSize="10" fill="#34e0a1">best case</text>
      <text x="300" y="150" fontSize="10" fill="#f59e0b">wide range</text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Most property return is price growth - the least predictable part
      </text>
    </>
  )
}

/** Property tax is small but permanent; unpaid dues block a sale. */
export function PropertyTaxClock() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Small, yearly, and it never stops
      </text>
      <circle cx="110" cy="112" r="52" fill="none" stroke="#8791b3" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2
        return <line key={i} x1={110 + 46 * Math.cos(a)} y1={112 + 46 * Math.sin(a)} x2={110 + 52 * Math.cos(a)} y2={112 + 52 * Math.sin(a)} stroke="#8791b3" strokeWidth="1.5" />
      })}
      <line x1="110" y1="112" x2="110" y2="74" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <line x1="110" y1="112" x2="144" y2="126" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <text x="110" y="176" textAnchor="middle" fontSize="9" fill="#8791b3">tax falls due each year</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <rect x="228" y="74" width="128" height="76" rx="8" fill="#1b2436" stroke="#f87171" strokeWidth="1.5" />
        <rect x="272" y="96" width="40" height="30" rx="4" fill="#f87171" opacity="0.85" />
        <path d="M280 96 v-8 a12 12 0 0 1 24 0 v8" fill="none" stroke="#f87171" strokeWidth="3" />
        <text x="292" y="142" textAnchor="middle" fontSize="9" fill="#f87171">unpaid dues block a sale</text>
      </motion.g>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Clear dues before you list - buyers check
      </text>
    </>
  )
}

/** Stamp duty and registration add 5-10% upfront, never recovered. */
export function StampDutyCost() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Upfront cost you never get back
      </text>
      <motion.rect x="46" y="56" height="44" rx="6" fill="#38bdf8" opacity="0.85" initial={{ width: 0 }} animate={{ width: 190 }} transition={ease} />
      <text x="141" y="83" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Property price</text>
      <motion.rect x="236" y="56" height="44" rx="6" fill="#f87171" opacity="0.85" initial={{ width: 0 }} animate={{ width: 74 }} transition={{ delay: 0.25, ...ease }} />
      <text x="273" y="83" textAnchor="middle" fontSize="9" fill="#2a0f0f" fontWeight="700">Stamp duty</text>
      <motion.rect x="310" y="56" height="44" rx="6" fill="#f59e0b" opacity="0.85" initial={{ width: 0 }} animate={{ width: 44 }} transition={{ delay: 0.4, ...ease }} />
      <text x="332" y="83" textAnchor="middle" fontSize="9" fill="#0b1524" fontWeight="700">Reg.</text>
      <text x="200" y="128" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        Add 5-10% on day one
      </text>
      <text x="200" y="156" textAnchor="middle" fontSize="10" fill="#8791b3">
        The property must rise this much before you break even
      </text>
      <text x="200" y="188" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Paid in cash, financed rarely, recovered never
      </text>
    </>
  )
}

/** Keep the registration papers for the life of the property. */
export function RegistrationRecords() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The receipts are the real asset
      </text>
      <rect x="60" y="48" width="96" height="120" rx="6" fill="#1b2436" stroke="#38bdf8" strokeWidth="1.5" />
      <polygon points="156,48 156,74 130,74" fill="#38bdf8" opacity="0.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="74" y={72 + i * 18} width={i % 2 === 0 ? 60 : 40} height="6" rx="2" fill="#8791b3" />
      ))}
      <text x="108" y="184" textAnchor="middle" fontSize="9" fill="#8791b3">original cost proof</text>
      <motion.g initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <rect x="216" y="60" width="124" height="96" rx="10" fill="#34e0a1" opacity="0.14" stroke="#34e0a1" strokeWidth="1.5" />
        <text x="278" y="96" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">Keep for life</text>
        <text x="278" y="118" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">they set your tax basis</text>
        <text x="278" y="136" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">when you eventually sell</text>
      </motion.g>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Lose the papers and you lose the cost you can claim
      </text>
    </>
  )
}

/** Maintenance is a running cost that drags the return down every year. */
export function MaintenanceDrag() {
  const yrs = ['Yr 1', 'Yr 5', 'Yr 10', 'Yr 15']
  const gross = [190, 190, 190, 190]
  const drag = [24, 40, 62, 88]
  const base = 176
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Running costs eat the return every year
      </text>
      <line x1="40" y1={base} x2="364" y2={base} stroke="#8791b3" strokeWidth="1" />
      {yrs.map((y, i) => {
        const x = 56 + i * 80
        return (
          <motion.g key={y} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <motion.rect x={x} width={40} rx="4" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: base }} animate={{ height: gross[i], attrY: base - gross[i] }} transition={{ delay: i * 0.12, ...ease }} />
            <motion.rect x={x} width={40} rx="4" fill="#f87171" opacity="0.85" initial={{ height: 0, attrY: base - gross[i] }} animate={{ height: drag[i], attrY: base - gross[i] }} transition={{ delay: 0.15 + i * 0.12, ...ease }} />
            <text x={x + 20} y={base + 14} textAnchor="middle" fontSize="9" fill="#8791b3">{y}</text>
          </motion.g>
        )
      })}
      <circle cx="70" cy="34" r="4" fill="#34e0a1" />
      <text x="80" y="38" fontSize="9" fill="#d7dbe9">gross</text>
      <circle cx="150" cy="34" r="4" fill="#f87171" />
      <text x="160" y="38" fontSize="9" fill="#d7dbe9">maintenance drag</text>
      <text x="200" y="208" textAnchor="middle" fontSize="10" fill="#8791b3">
        Treat property like a bond and subtract every running cost
      </text>
    </>
  )
}

/** Property is the least liquid major asset. */
export function PropertyLiquidity() {
  const rows = [
    { l: 'Cash', v: 2, c: '#34e0a1', t: 'same day' },
    { l: 'Shares / funds', v: 20, c: '#38bdf8', t: 'days' },
    { l: 'Gold', v: 40, c: '#f59e0b', t: 'weeks' },
    { l: 'Property', v: 320, c: '#f87171', t: 'months' },
  ]
  const max = 320
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        How long to turn it into cash
      </text>
      {rows.map((r, i) => (
        <motion.g key={r.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <text x="40" y={52 + i * 34} fontSize="10" fill="#d7dbe9">{r.l}</text>
          <motion.rect x="132" y={42 + i * 34} height="18" rx="5" fill={r.c} opacity="0.85" initial={{ width: 0 }} animate={{ width: (r.v / max) * 190 + 6 }} transition={{ delay: i * 0.1, ...ease }} />
          <text x={132 + (r.v / max) * 190 + 14} y={56 + i * 34} fontSize="9" fill={r.c}>{r.t}</text>
        </motion.g>
      ))}
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#f87171">
        Concentrating your net worth in one flat is a liquidity risk
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Funds / allocation */

/** Many investors' rupees pool into one basket. */
export function MfPool() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Many rupees, one basket
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.circle key={i} cx="46" cy={62 + i * 30} r="9" fill="#38bdf8" opacity="0.8" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 0.8, x: 0 }} transition={{ delay: i * 0.1 }} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="58" y1={62 + i * 30} x2="196" y2="112" stroke="#8791b3" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      <motion.path d="M206 76 h130 a10 10 0 0 1 10 10 v58 a10 10 0 0 1 -10 10 h-130 a10 10 0 0 1 -10 -10 v-58 a10 10 0 0 1 10 -10 z" fill="#34e0a1" opacity="0.18" stroke="#34e0a1" strokeWidth="1.5" initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} />
      <text x="266" y="122" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">the scheme</text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#8791b3">
        Each investor owns units of the same pooled pot
      </text>
    </>
  )
}

/** NAV = (assets - liabilities) / units. */
export function NavCalc() {
  return (
    <>
      <text x="200" y="26" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        What one unit is worth
      </text>
      <rect x="30" y="70" width="72" height="54" rx="8" fill="#34e0a1" opacity="0.8" />
      <text x="66" y="102" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Assets</text>
      <text x="112" y="104" textAnchor="middle" fontSize="18" fill="#8791b3">−</text>
      <rect x="126" y="70" width="72" height="54" rx="8" fill="#f87171" opacity="0.8" />
      <text x="162" y="96" textAnchor="middle" fontSize="10" fill="#2a0f0f" fontWeight="700">Liab-</text>
      <text x="162" y="110" textAnchor="middle" fontSize="10" fill="#2a0f0f" fontWeight="700">ilities</text>
      <text x="210" y="104" textAnchor="middle" fontSize="18" fill="#8791b3">÷</text>
      <rect x="224" y="70" width="60" height="54" rx="8" fill="#38bdf8" opacity="0.8" />
      <text x="254" y="96" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Units</text>
      <text x="254" y="110" textAnchor="middle" fontSize="9" fill="#0b1524">in issue</text>
      <text x="298" y="104" textAnchor="middle" fontSize="18" fill="#8791b3">=</text>
      <motion.circle cx="345" cy="97" r="30" fill="#f59e0b" opacity="0.85" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 0.85 }} transition={{ delay: 0.5, ...ease }} style={{ transformOrigin: '345px 97px' }} />
      <text x="345" y="103" textAnchor="middle" fontSize="13" fill="#0b1524" fontWeight="700">NAV</text>
      <text x="200" y="178" textAnchor="middle" fontSize="10" fill="#8791b3">
        Everything the scheme owns, divided by every unit
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        The number you actually buy and sell at
      </text>
    </>
  )
}

/** A hybrid fund is a managed dial between equity and debt. */
export function HybridMix() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        One fund, two engines
      </text>
      <motion.rect x="50" y="64" height="46" rx="8" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 170 }} transition={ease} />
      <text x="135" y="93" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Equity</text>
      <motion.rect x="220" y="64" height="46" rx="8" fill="#38bdf8" opacity="0.85" initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.2, ...ease }} />
      <text x="280" y="93" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Debt</text>
      <motion.circle cx="220" cy="87" r="7" fill="#f59e0b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
      <text x="200" y="140" textAnchor="middle" fontSize="10" fill="#8791b3">
        The manager moves the split as conditions change
      </text>
      <text x="200" y="166" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">
        Useful when you want the decision handled for you
      </text>
      <text x="200" y="194" textAnchor="middle" fontSize="10" fill="#8791b3">
        You pay for the balancing, whichever way it goes
      </text>
    </>
  )
}

/** Diversify across assets that fail for different reasons. */
export function DiversifyFail() {
  const paths = [
    { p: '44,120 120,150 180,92 260,120 356,70', c: '#34e0a1' },
    { p: '44,120 130,80 200,150 280,96 356,120', c: '#38bdf8' },
    { p: '44,120 150,120 220,70 300,140 356,96', c: '#f59e0b' },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Spread across things that fail differently
      </text>
      {paths.map((s, i) => (
        <motion.polyline key={i} points={s.p} fill="none" stroke={s.c} strokeWidth="2.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: i * 0.15 }} />
      ))}
      <motion.line x1="44" y1="120" x2="356" y2="120" stroke="#8791b3" strokeWidth="1" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        When one falls, another holds - not just more names
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Real diversification is uncorrelated shocks
      </text>
    </>
  )
}

/** Portfolio construction: goals decide assets, assets decide weights. */
export function PortfolioBuild() {
  const layers = [
    { l: 'Your goals and horizons', c: '#a855f7' },
    { l: 'Choose asset classes', c: '#38bdf8' },
    { l: 'Set the weights', c: '#34e0a1' },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Build from the top down
      </text>
      {layers.map((l, i) => (
        <motion.g key={l.l} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.18 }}>
          <rect x={70 + i * 10} y={40 + i * 44} width={260 - i * 20} height="34" rx="8" fill={l.c} opacity="0.8" />
          <text x="200" y={62 + i * 44} textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">
            {l.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="190" textAnchor="middle" fontSize="10" fill="#8791b3">
        One allocation decision drives most of your outcome
      </text>
    </>
  )
}

/** Target weights versus actual weights; the gap is what you track. */
export function TargetVsActual() {
  const rows = [
    { l: 'Equity', t: 55, a: 63 },
    { l: 'Debt', t: 30, a: 24 },
    { l: 'Gold', t: 15, a: 13 },
  ]
  const s = 3.6
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Target versus what you actually hold
      </text>
      {rows.map((r, i) => (
        <motion.g key={r.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
          <text x="40" y={58 + i * 42} fontSize="10" fill="#d7dbe9">{r.l}</text>
          <motion.rect x="96" y={44 + i * 42} height="14" rx="4" fill="#8791b3" opacity="0.7" initial={{ width: 0 }} animate={{ width: r.t * s }} transition={{ delay: i * 0.12, ...ease }} />
          <motion.rect x="96" y={62 + i * 42} height="14" rx="4" fill="#34e0a1" opacity="0.9" initial={{ width: 0 }} animate={{ width: r.a * s }} transition={{ delay: 0.1 + i * 0.12, ...ease }} />
          <text x={100 + Math.max(r.t, r.a) * s + 6} y={66 + i * 42} fontSize="9" fill={r.a > r.t ? '#f59e0b' : '#38bdf8'}>
            {r.a > r.t ? '+' : ''}{(r.a - r.t).toFixed(0)}%
          </text>
        </motion.g>
      ))}
      <circle cx="60" cy="176" r="4" fill="#8791b3" />
      <text x="70" y="180" fontSize="9" fill="#d7dbe9">target</text>
      <circle cx="140" cy="176" r="4" fill="#34e0a1" />
      <text x="150" y="180" fontSize="9" fill="#d7dbe9">actual</text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Rebalance when the gap grows
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Financial statements */

/** Every expense line comes off revenue before profit. */
export function ExpenseLines() {
  const lines = [
    { l: 'Raw material', v: 70 },
    { l: 'Salaries', v: 46 },
    { l: 'Power & fuel', v: 22 },
    { l: 'Interest', v: 24 },
    { l: 'Tax', v: 14 },
  ]
  let x = 40
  const total = lines.reduce((a, b) => a + b.v, 0)
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Every line subtracts before profit
      </text>
      {lines.map((l, i) => {
        const bx = x
        x += (l.v / total) * 300
        const w = (l.v / total) * 300
        return (
          <motion.g key={l.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <motion.rect x={bx} y="56" height="34" rx="4" fill="#f87171" opacity={0.85 - i * 0.1} initial={{ width: 0 }} animate={{ width: w }} transition={{ delay: i * 0.12, ...ease }} />
            <text x={bx + w / 2} y="77" textAnchor="middle" fontSize="8" fill="#2a0f0f" fontWeight="700">{l.l}</text>
          </motion.g>
        )
      })}
      <motion.rect x="40" y="112" rx="6" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 90 }} transition={{ delay: 0.7, ...ease }} />
      <text x="85" y="134" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Profit</text>
      <text x="150" y="134" fontSize="10" fill="#8791b3">what survives the cuts</text>
      <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#8791b3">
        The earlier a cost sits, the more it drags the margin
      </text>
      <text x="200" y="202" textAnchor="middle" fontSize="10" fill="#f87171">
        Revenue is not profit until every line clears
      </text>
    </>
  )
}

/** Profit is an opinion; cash is the reality check. */
export function CashVsProfit() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Profit on paper, cash in the bank
      </text>
      <motion.rect x="86" width="86" rx="8" fill="#38bdf8" opacity="0.8" initial={{ height: 0, attrY: 168 }} animate={{ height: 130, attrY: 38 }} transition={ease} />
      <text x="129" y="60" textAnchor="middle" fontSize="10" fill="#0b1524">Accounting</text>
      <text x="129" y="76" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">profit</text>
      <motion.rect x="228" width="86" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 78, attrY: 90 }} transition={{ delay: 0.25, ...ease }} />
      <text x="271" y="120" textAnchor="middle" fontSize="10" fill="#0b1524">Cash actually</text>
      <text x="271" y="136" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">received</text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Only one of these can pay a bill, a dividend or a salary
      </text>
    </>
  )
}

/** Profit divided by shares gives earnings per share. */
export function EpsSplit() {
  const n = 10
  const cx = 120
  const cy = 112
  const r = 58
  const seg = 360 / n
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Profit, divided by every share
      </text>
      <motion.g initial={{ rotate: -16 }} animate={{ rotate: 0 }} transition={{ duration: 0.7 }} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {Array.from({ length: n }).map((_, i) => {
          const a0 = ((i * seg - 90) * Math.PI) / 180
          const a1 = (((i + 1) * seg - 90) * Math.PI) / 180
          return (
            <path key={i} d={`M ${cx} ${cy} L ${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} Z`} fill={i === 0 ? '#34e0a1' : '#33415c'} />
          )
        })}
      </motion.g>
      <text x="120" y="117" textAnchor="middle" fontSize="10" fill="#d7dbe9" fontWeight="700">Profit</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <text x="220" y="82" fontSize="13" fill="#34e0a1" fontWeight="700">EPS</text>
        <text x="220" y="102" fontSize="10" fill="#d7dbe9">= profit ÷ shares</text>
        <text x="220" y="126" fontSize="10" fill="#8791b3">Each share earns its slice.</text>
        <text x="220" y="144" fontSize="10" fill="#8791b3">More shares, thinner slice.</text>
      </motion.g>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        The number the market watches per share
      </text>
    </>
  )
}

/** ROE: profit earned on the owners' money. */
export function RoeLevers() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Return on the owners' money
      </text>
      <motion.rect x="70" y="56" height="96" rx="8" fill="#33415c" opacity="0.8" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} />
      <text x="114" y="110" textAnchor="middle" fontSize="10" fill="#d7dbe9">Shareholders'</text>
      <text x="114" y="126" textAnchor="middle" fontSize="10" fill="#d7dbe9">equity</text>
      <motion.rect x="230" y="56" height="96" rx="8" fill="#34e0a1" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} />
      <text x="274" y="102" textAnchor="middle" fontSize="10" fill="#0b1524">Profit</text>
      <text x="274" y="118" textAnchor="middle" fontSize="10" fill="#0b1524">earned</text>
      <line x1="40" y1="152" x2="360" y2="152" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="182" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">
        ROE = profit ÷ equity
      </text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        High ROE means the owners' money is working hard
      </text>
    </>
  )
}

/** Debt-to-equity: how the business is funded. */
export function DebtEquityMix() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Who funded the assets?
      </text>
      <motion.rect x="40" y="58" height="52" rx="8" fill="#f87171" opacity="0.85" initial={{ width: 0 }} animate={{ width: 130 }} transition={ease} />
      <text x="105" y="89" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">Borrowed</text>
      <motion.rect x="170" y="58" height="52" rx="8" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 190 }} transition={{ delay: 0.2, ...ease }} />
      <text x="265" y="89" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Owners' money</text>
      <text x="200" y="138" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">
        Debt-to-equity is the ratio
      </text>
      <text x="200" y="164" textAnchor="middle" fontSize="10" fill="#8791b3">
        More borrowing means more room used, less room left
      </text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Debt is fine until it cannot be serviced
      </text>
    </>
  )
}

/** Your gross return pays the AMC first; only the remainder is your NAV growth. */
export function AmcExpense() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The house is paid before you are
      </text>
      <motion.rect x="40" y="58" height="46" rx="8" fill="#38bdf8" opacity="0.85" initial={{ width: 0 }} animate={{ width: 300 }} transition={ease} />
      <text x="150" y="87" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Gross return earned</text>
      <motion.rect x="300" y="58" height="46" rx="8" fill="#f87171" opacity="0.9" initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 0.4 }} />
      <text x="330" y="87" textAnchor="middle" fontSize="9" fill="#2a0f0f" fontWeight="700">AMC fee</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x="40" y="122" height="34" rx="8" fill="#34e0a1" opacity="0.85" />
        <text x="120" y="144" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Your NAV</text>
        <text x="196" y="144" fontSize="10" fill="#8791b3">= gross − expense ratio</text>
      </motion.g>
      <text x="200" y="194" textAnchor="middle" fontSize="10" fill="#8791b3">
        The expense ratio is the slice the fund keeps every year
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Fixed income */

/** A weaker borrower must pay a higher yield - the credit spread. */
export function CreditSpread() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The gap is the cost of credit risk
      </text>
      <line x1="40" y1="176" x2="376" y2="176" stroke="#8791b3" strokeWidth="1" />
      <motion.polyline points="52,150 140,132 240,112 356,88" fill="none" stroke="#38bdf8" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points="52,128 140,104 240,78 356,48" fill="none" stroke="#f59e0b" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <motion.polygon points="300,58 340,54 340,90 300,94" fill="#f87171" opacity="0.2" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 0.6 }} />
      <text x="150" y="118" fontSize="9" fill="#38bdf8">government</text>
      <text x="150" y="86" fontSize="9" fill="#f59e0b">corporate</text>
      <text x="344" y="76" fontSize="9" fill="#f87171" textAnchor="end">spread</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Compare bonds at the same tenure to read the spread
      </text>
    </>
  )
}

/** A bond, labelled: the vocabulary you need to read any quote. */
export function BondTerms() {
  const rows = [
    ['Issuer', 'who borrowed'],
    ['Face value', 'what you get back'],
    ['Coupon', 'the interest paid'],
    ['Maturity', 'when it ends'],
    ['Yield', 'return at today\'s price'],
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Reading a bond quote
      </text>
      <rect x="46" y="38" width="308" height="150" rx="12" fill="#1b2436" stroke="#38bdf8" strokeWidth="1.5" />
      {rows.map((r, i) => (
        <motion.g key={r[0]} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
          <text x="66" y={66 + i * 26} fontSize="10.5" fill="#34e0a1" fontWeight="700">{r[0]}</text>
          <text x="170" y={66 + i * 26} fontSize="10" fill="#d7dbe9">{r[1]}</text>
        </motion.g>
      ))}
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Learn the words and any bond quote becomes readable
      </text>
    </>
  )
}

/** Credit risk and rate risk are two different things. */
export function CreditVsRateRisk() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Two risks, not one
      </text>
      <g>
        <circle cx="120" cy="106" r="52" fill="none" stroke="#8791b3" strokeWidth="2" />
        <motion.path d="M120 106 L120 62 A44 44 0 0 1 158 84" fill="none" stroke="#f87171" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
        <text x="120" y="100" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">Credit</text>
        <text x="120" y="116" textAnchor="middle" fontSize="8.5" fill="#d7dbe9">will the borrower pay?</text>
        <text x="120" y="176" textAnchor="middle" fontSize="9" fill="#8791b3">about the issuer</text>
      </g>
      <g>
        <circle cx="280" cy="106" r="52" fill="none" stroke="#8791b3" strokeWidth="2" />
        <motion.path d="M280 106 L280 62 A44 44 0 0 1 318 84 A44 44 0 0 1 320 110" fill="none" stroke="#38bdf8" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
        <text x="280" y="100" textAnchor="middle" fontSize="11" fill="#38bdf8" fontWeight="700">Rate</text>
        <text x="280" y="116" textAnchor="middle" fontSize="8.5" fill="#d7dbe9">what rates do</text>
        <text x="280" y="176" textAnchor="middle" fontSize="9" fill="#8791b3">about the market</text>
      </g>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        A safe borrower can still fall when rates rise
      </text>
    </>
  )
}

/** Debt funds hold bonds, so their NAV follows yields. */
export function DebtFundNav() {
  const yields = [80, 74, 78, 66, 60, 64, 54]
  const nav = [50, 58, 55, 66, 72, 68, 78]
  const x = (i: number) => 48 + i * 50
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Yields move, so does the NAV
      </text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <motion.polyline points={yields.map((y, i) => `${x(i)},${y}`).join(' ')} fill="none" stroke="#f59e0b" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points={nav.map((y, i) => `${x(i)},${y}`).join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <circle cx="48" cy="90" r="4" fill="#f59e0b" />
      <text x="58" y="94" fontSize="9" fill="#f59e0b">yield</text>
      <circle cx="48" cy="108" r="4" fill="#38bdf8" />
      <text x="58" y="112" fontSize="9" fill="#38bdf8">fund NAV</text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#8791b3">
        When yields rise, bond prices - and the NAV - fall
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Equity / market */

/** Nifty 50: fifty companies, weighted by value. */
export function Nifty50() {
  const dots = [
    [70, 60, 12], [110, 54, 9], [150, 66, 8], [190, 58, 7], [230, 70, 10],
    [270, 62, 7], [310, 74, 8], [90, 104, 8], [130, 98, 7], [170, 108, 6],
    [210, 100, 9], [250, 112, 6], [290, 104, 7], [330, 116, 8], [70, 146, 7],
    [120, 142, 9], [165, 150, 7], [210, 144, 8], [255, 152, 6], [300, 146, 7],
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Fifty companies, one index
      </text>
      {dots.map((d, i) => (
        <motion.circle key={i} cx={d[0]} cy={d[1]} r={d[2]} fill={i < 5 ? '#34e0a1' : '#38bdf8'} opacity={i < 5 ? 0.9 : 0.5} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.03 }} style={{ transformOrigin: `${d[0]}px ${d[1]}px` }} />
      ))}
      <text x="330" y="180" textAnchor="end" fontSize="9" fill="#34e0a1">bigger = larger weight</text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        The NSE's flagship basket, refreshed as companies change
      </text>
    </>
  )
}

/** Price-to-book: what the market pays per rupee of net worth. */
export function PbRatio() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Price against net worth
      </text>
      <motion.rect x="80" y="56" height="60" rx="8" fill="#38bdf8" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} />
      <text x="140" y="92" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Market cap</text>
      <motion.rect x="80" y="128" height="44" rx="8" fill="#34e0a1" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ delay: 0.2 }} />
      <text x="140" y="156" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Net worth</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <path d="M250 96 h64" stroke="#f59e0b" strokeWidth="2" />
        <path d="M250 88 v16 M314 88 v16" stroke="#f59e0b" strokeWidth="2" />
        <text x="282" y="82" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">P/B ratio</text>
        <text x="282" y="122" textAnchor="middle" fontSize="9" fill="#d7dbe9">what the market pays</text>
        <text x="282" y="138" textAnchor="middle" fontSize="9" fill="#d7dbe9">per ₹1 of net worth</text>
      </motion.g>
      <text x="200" y="194" textAnchor="middle" fontSize="10" fill="#8791b3">
        A high P/B prices in a lot of future profitability
      </text>
    </>
  )
}

/** Nifty weights are set by free-float market value. */
export function NiftyWeights() {
  const rows = [
    { l: 'Reliance', v: 9.5 },
    { l: 'HDFC Bank', v: 8.2 },
    { l: 'ICICI Bank', v: 7.4 },
    { l: 'Infosys', v: 5.8 },
    { l: 'Others (46)', v: 69.1 },
  ]
  const s = 2.9
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Weighted by what is actually tradeable
      </text>
      {rows.map((r, i) => (
        <motion.g key={r.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <text x="40" y={52 + i * 32} fontSize="10" fill="#d7dbe9">{r.l}</text>
          <motion.rect x="146" y={42 + i * 32} height="18" rx="5" fill={i === rows.length - 1 ? '#38bdf8' : '#34e0a1'} opacity="0.85" initial={{ width: 0 }} animate={{ width: r.v * s }} transition={{ delay: i * 0.1, ...ease }} />
          <text x={150 + r.v * s} y={56 + i * 32} fontSize="9" fill="#8791b3">{r.v}%</text>
        </motion.g>
      ))}
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Free-float weighting keeps the index honest
      </text>
    </>
  )
}

/** Sensex: thirty companies, float-weighted, the BSE bellwether. */
export function Sensex30() {
  const angles = Array.from({ length: 30 }).map((_, i) => (i / 30) * Math.PI * 2 - Math.PI / 2)
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Thirty companies, one bellwether
      </text>
      <motion.circle cx="140" cy="114" r="68" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} />
      {angles.map((a, i) => (
        <motion.circle key={i} cx={140 + 68 * Math.cos(a)} cy={114 + 68 * Math.sin(a)} r={i < 4 ? 8 : 5} fill={i < 4 ? '#34e0a1' : '#38bdf8'} opacity={i < 4 ? 0.9 : 0.6} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.03 }} style={{ transformOrigin: `${140 + 68 * Math.cos(a)}px ${114 + 68 * Math.sin(a)}px` }} />
      ))}
      <text x="140" y="118" textAnchor="middle" fontSize="11" fill="#d7dbe9">SENSEX</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <text x="250" y="92" fontSize="10" fill="#34e0a1">Biggest by</text>
        <text x="250" y="108" fontSize="10" fill="#34e0a1">free float</text>
        <text x="250" y="134" fontSize="10" fill="#8791b3">The index Indian families</text>
        <text x="250" y="150" fontSize="10" fill="#8791b3">have heard about since 1986.</text>
      </motion.g>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        The BSE's long-running benchmark
      </text>
    </>
  )
}

/** A manager takes discretionary calls; you pay for them either way. */
export function ManagerDiscretion() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Someone is choosing for you
      </text>
      <circle cx="140" cy="112" r="52" fill="none" stroke="#8791b3" strokeWidth="8" />
      <line x1="140" y1="112" x2="140" y2="66" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      <line x1="140" y1="112" x2="180" y2="132" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      <circle cx="140" cy="112" r="9" fill="#38bdf8" />
      {['Buy A', 'Sell B', 'Hold'].map((t, i) => (
        <motion.g key={t} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}>
          <rect x={246} y={74 + i * 40} width={96} height="26" rx="6" fill="#1b2436" stroke="#38bdf8" strokeWidth="1" />
          <text x={294} y={92 + i * 40} textAnchor="middle" fontSize="10" fill="#d7dbe9">{t}</text>
        </motion.g>
      ))}
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        The fee is the same whether the calls are right or wrong
      </text>
    </>
  )
}

/** An ETF is an index inside a wrapper that trades like a share. */
export function EtfWrapper() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        An index that trades like a share
      </text>
      <rect x="70" y="58" width="120" height="96" rx="10" fill="#1b2436" stroke="#34e0a1" strokeWidth="1.5" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}-${c}`} x={82 + c * 32} y={72 + r * 20} width="22" height="12" rx="2" fill="#34e0a1" opacity="0.55" />
        )),
      )}
      <text x="130" y="172" textAnchor="middle" fontSize="9" fill="#34e0a1">the index inside</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <rect x="250" y="58" width="96" height="96" rx="12" fill="#38bdf8" opacity="0.18" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="298" y="100" textAnchor="middle" fontSize="11" fill="#38bdf8" fontWeight="700">A unit</text>
        <text x="298" y="118" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">on the exchange</text>
        <path d="M214 96 h30 M244 88 l10 8 -10 8" fill="none" stroke="#8791b3" strokeWidth="1.5" />
        <path d="M244 128 h-30 M214 120 l-10 8 10 8" fill="none" stroke="#8791b3" strokeWidth="1.5" />
      </motion.g>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Buy and sell it through your broker, like any share
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Gold / commodities */

/** Physical gold carries a large entry cost before you even own it. */
export function PhysicalGoldCost() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Physical gold: you pay to buy in
      </text>
      <motion.rect x="66" y="56" width="196" height="72" rx="10" fill="#f59e0b" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} />
      <text x="164" y="100" textAnchor="middle" fontSize="12" fill="#0b1524" fontWeight="700">Gold</text>
      <motion.rect x="262" y="56" width="60" height="72" rx="10" fill="#f87171" opacity="0.85" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.3, ...ease }} />
      <text x="292" y="90" textAnchor="middle" fontSize="9" fill="#2a0f0f" fontWeight="700">making</text>
      <text x="292" y="104" textAnchor="middle" fontSize="9" fill="#2a0f0f" fontWeight="700">charges</text>
      <text x="200" y="156" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        Add 20-40% at entry, lose some on purity
      </text>
      <text x="200" y="182" textAnchor="middle" fontSize="10" fill="#8791b3">
        You start behind and must catch up before you break even
      </text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#34e0a1">
        For investing, prefer a fund or ETF
      </text>
    </>
  )
}

/** Silver is half precious, half industrial, and roughly 1.5x as volatile. */
export function SilverVolatility() {
  const gold = '44,120 100,112 156,122 212,108 268,118 324,106 360,112'
  const silver = '44,120 100,84 156,150 212,70 268,158 324,60 360,120'
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Silver swings wider than gold
      </text>
      <line x1="40" y1="120" x2="360" y2="120" stroke="#8791b3" strokeWidth="1" strokeDasharray="3 3" />
      <motion.polyline points={gold} fill="none" stroke="#f59e0b" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points={silver} fill="none" stroke="#94a3b8" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <circle cx="56" cy="40" r="4" fill="#f59e0b" />
      <text x="66" y="44" fontSize="9" fill="#d7dbe9">Gold — steady</text>
      <circle cx="176" cy="40" r="4" fill="#94a3b8" />
      <text x="186" y="44" fontSize="9" fill="#d7dbe9">Silver — ~1.5x swings</text>
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        Industrial demand adds a second driver to the price
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Size silver smaller than gold for the same risk
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Misc equity / costs */

/** A paper gain and the gain after tax are two different numbers. */
export function GainPrePostTax() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The gain on paper, and after tax
      </text>
      <motion.rect x="86" width="86" rx="8" fill="#38bdf8" opacity="0.8" initial={{ height: 0, attrY: 168 }} animate={{ height: 120, attrY: 48 }} transition={ease} />
      <text x="129" y="70" textAnchor="middle" fontSize="10" fill="#0b1524">Paper</text>
      <text x="129" y="86" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">gain</text>
      <motion.rect x="228" width="86" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 86, attrY: 82 }} transition={{ delay: 0.25, ...ease }} />
      <text x="271" y="104" textAnchor="middle" fontSize="10" fill="#0b1524">After-tax</text>
      <text x="271" y="120" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">gain</text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#f87171">
        The gap between the bars is tax - the second one is what you keep
      </text>
    </>
  )
}

/** Face value never moves; price and yield do. */
export function FaceVsPrice() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Face value is fixed; price is not
      </text>
      <motion.line x1="40" y1="84" x2="360" y2="84" stroke="#34e0a1" strokeWidth="2" strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      <text x="352" y="78" textAnchor="end" fontSize="9" fill="#34e0a1">face value ₹1,000</text>
      <motion.polyline points="46,110 110,96 174,120 238,88 302,110 356,92" fill="none" stroke="#38bdf8" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <text x="46" y="140" fontSize="10" fill="#38bdf8">market price</text>
      <text x="240" y="164" fontSize="10" fill="#f59e0b">yield moves opposite to price</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        The face value is a promise; the price is a negotiation
      </text>
    </>
  )
}

/** The costs a broker stacks on every trade. */
export function BrokerCosts() {
  const parts = [
    { l: 'Brokerage', v: 40, c: '#38bdf8' },
    { l: 'STT', v: 30, c: '#f59e0b' },
    { l: 'GST', v: 22, c: '#a855f7' },
    { l: 'Stamp duty', v: 18, c: '#34e0a1' },
    { l: 'Exchange', v: 12, c: '#94a3b8' },
  ]
  let x = 40
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Every trade carries a stack of charges
      </text>
      {parts.map((p, i) => {
        const bx = x
        x += p.v * 2
        return (
          <motion.g key={p.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <motion.rect x={bx} y="56" height="40" rx="5" fill={p.c} opacity="0.85" initial={{ width: 0 }} animate={{ width: p.v * 2 }} transition={{ delay: i * 0.12, ...ease }} />
            <text x={bx + p.v} y="80" textAnchor="middle" fontSize="8" fill="#0b1524" fontWeight="700">{p.l}</text>
          </motion.g>
        )
      })}
      <text x="200" y="128" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        No single charge looks big
      </text>
      <text x="200" y="154" textAnchor="middle" fontSize="10" fill="#8791b3">
        Stacked across a few trades a month, they quietly take a slice
      </text>
      <text x="200" y="188" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Trade less, and the stack shrinks
      </text>
    </>
  )
}

/** A written record of every decision, and how you felt making it. */
export function DecisionJournal() {
  const faces = ['#34e0a1', '#38bdf8', '#f59e0b', '#f87171']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Write it down while it is fresh
      </text>
      <rect x="56" y="40" width="200" height="148" rx="10" fill="#1b2436" stroke="#38bdf8" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="72" y={60 + i * 24} width={i % 2 === 0 ? 150 : 110} height="8" rx="3" fill="#8791b3" />
          {i < faces.length && <circle cx="240" cy={64 + i * 24} r="7" fill={faces[i]} opacity="0.85" />}
        </g>
      ))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <text x="300" y="96" fontSize="10" fill="#d7dbe9">What you did,</text>
        <text x="300" y="112" fontSize="10" fill="#d7dbe9">why, and how</text>
        <text x="300" y="128" fontSize="10" fill="#d7dbe9">you felt</text>
      </motion.g>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Your emotions are part of the data
      </text>
    </>
  )
}
