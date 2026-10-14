import { motion } from 'framer-motion'

/** Money divided into needs / wants / savings */
export function BudgetPie() {
  const segs = [
    { f: 0.5, c: '#38bdf8', label: 'Needs 50%' },
    { f: 0.3, c: '#f472b6', label: 'Wants 30%' },
    { f: 0.2, c: '#34e0a1', label: 'Save 20%' },
  ]
  const polar = (frac: number, r: number) => {
    const a = frac * 2 * Math.PI - Math.PI / 2
    return { x: 200 + r * Math.cos(a), y: 105 + r * Math.sin(a) }
  }
  const arc = (from: number, to: number) => {
    const so = polar(from, 84)
    const eo = polar(to, 84)
    const si = polar(from, 44)
    const ei = polar(to, 44)
    const large = to - from > 0.5 ? 1 : 0
    return `M${so.x},${so.y} A84,84 0 ${large} 1 ${eo.x},${eo.y} L${ei.x},${ei.y} A44,44 0 ${large} 0 ${si.x},${si.y} Z`
  }
  let acc = 0
  return (
    <>
      {segs.map((s, i) => {
        const from = acc
        acc += s.f
        return (
          <motion.path
            key={s.label}
            d={arc(from, acc)}
            fill={s.c}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 180 }}
            style={{ transformOrigin: '200px 105px' }}
          />
        )
      })}
      <text x="200" y="102" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">
        ₹100
      </text>
      <text x="200" y="118" textAnchor="middle" fontSize="9" fill="#0b1524">
        rule of thumb
      </text>
      {segs.map((s, i) => (
        <motion.text
          key={s.label}
          x={30 + i * 125}
          y="215"
          fontSize="10"
          fill={s.c}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + i * 0.15 }}
        >
          {s.label}
        </motion.text>
      ))}
    </>
  )
}

/** Stacked bars showing fixed vs variable expenses */
export function ExpenseBars() {
  const months = [
    { fixed: 18000, variable: 9000 },
    { fixed: 18000, variable: 14000 },
    { fixed: 18000, variable: 7000 },
    { fixed: 18000, variable: 18000 },
  ]
  return (
    <>
      {months.map((m, i) => {
        const x = 60 + i * 80
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
            <motion.rect
              x={x}
              width="46"
              rx="6"
              fill="#f87171"
              animate={{ height: m.fixed / 900, y: 180 - m.fixed / 900 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 120 }}
            />
            <motion.rect
              x={x}
              width="46"
              rx="6"
              fill="#fbbf24"
              animate={{ height: m.variable / 900, y: 180 - m.fixed / 900 - m.variable / 900 }}
              transition={{ delay: 0.1 + i * 0.15, type: 'spring', stiffness: 120 }}
            />
            <text x={x + 23} y="200" textAnchor="middle" fontSize="9" fill="#8791b3">
              M{i + 1}
            </text>
          </motion.g>
        )
      })}
      <text x="20" y="20" fontSize="10" fill="#f87171">
        ■ fixed
      </text>
      <text x="90" y="20" fontSize="10" fill="#fbbf24">
        ■ variable
      </text>
      <text x="200" y="215" textAnchor="middle" fontSize="10" fill="#8791b3">
        Fixed costs set your floor. Variable costs are your lever.
      </text>
    </>
  )
}

/** Goals climbing a staircase by horizon: the further the goal, the higher the step. */
export function GoalLadder() {
  const steps = [
    { label: 'Short term', ex: 'phone, courses', veh: 'savings, liquid fund', x: 36, y: 150, w: 104, h: 52, c: '#38bdf8' },
    { label: 'Medium term', ex: 'bike, holiday', veh: 'FD, debt fund', x: 140, y: 104, w: 104, h: 98, c: '#c084fc' },
    { label: 'Long term', ex: 'house, retirement', veh: 'equity, EPF, PPF', x: 244, y: 54, w: 122, h: 148, c: '#34e0a1' },
  ]
  return (
    <>
      {steps.map((s, i) => (
        <motion.g
          key={s.label}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.18, type: 'spring', stiffness: 120 }}
        >
          <text x={s.x + 8} y={s.y - 24} fontSize="11" fill={s.c} fontWeight="700">
            {s.label}
          </text>
          <text x={s.x + 8} y={s.y - 11} fontSize="9" fill="#8791b3">
            {s.ex}
          </text>
          <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="8" fill={s.c} opacity="0.28" />
          <rect x={s.x} y={s.y} width={s.w} height="5" rx="2.5" fill={s.c} />
          <text x={s.x + 8} y={s.y + s.h - 12} fontSize="9" fill="#cbd5e1">
            {s.veh}
          </text>
        </motion.g>
      ))}
      <text x="200" y="214" textAnchor="middle" fontSize="10" fill="#8791b3">
        Further goal → higher step → more time to grow
      </text>
    </>
  )
}

/** Two jars: safe vs risky */
export function SafeVsRisk() {
  return (
    <>
      {[
        { x: 110, c: '#38bdf8', label: 'Safe', sub: 'FD, PPF, savings', h: 80 },
        { x: 280, c: '#c084fc', label: 'Risky', sub: 'equity, crypto', h: 120 },
      ].map((j, i) => (
        <motion.g key={j.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.25 }}>
          <rect x={j.x - 45} y="50" width="90" height="120" rx="14" fill="none" stroke={j.c} strokeWidth="2" opacity="0.5" />
          <motion.rect
            x={j.x - 42}
            width="84"
            rx="10"
            fill={j.c}
            opacity="0.5"
            initial={{ height: 0, y: 168 }}
            animate={{ height: j.h, y: 168 - j.h }}
            transition={{ delay: 0.3 + i * 0.25, type: 'spring', stiffness: 100 }}
          />
          <text x={j.x} y="190" textAnchor="middle" fontSize="12" fill={j.c} fontWeight="700">
            {j.label}
          </text>
          <text x={j.x} y="205" textAnchor="middle" fontSize="9" fill="#8791b3">
            {j.sub}
          </text>
        </motion.g>
      ))}
    </>
  )
}

/** Simple vs compound curve */
export function InterestGrowth() {
  const yrs = 20
  const simple = Array.from({ length: yrs + 1 }, (_, i) => 100 + i * 12)
  const compound = Array.from({ length: yrs + 1 }, (_, i) => 100 * 1.1 ** i)
  const max = Math.max(...compound)
  const px = (i: number) => 20 + (i / yrs) * 250
  const py = (v: number) => 175 - (v / max) * 150
  const path = (arr: number[]) => arr.map((v, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ')
  return (
    <>
      <motion.path d={path(simple)} fill="none" stroke="#8791b3" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.path d={path(compound)} fill="none" stroke="#34e0a1" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.2 }} />
      <text x="285" y={py(100 * 1.1 ** yrs) + 4} fontSize="10" fill="#34e0a1" fontWeight="700">
        compound
      </text>
      <text x="285" y={py(simple[yrs]) - 6} fontSize="10" fill="#8791b3">
        simple
      </text>
      <text x="145" y="200" fontSize="10" fill="#8791b3" textAnchor="middle">
        Year 0 → Year 20
      </text>
    </>
  )
}

/** Inflation crocodile eating your money */
export function InflationCrocodile() {
  return (
    <>
      <motion.g
        initial={{ x: -60 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 14 }}
      >
        {/* Tail */}
        <path d="M75 120 L28 104 L48 134 L28 164 L75 146 Z" fill="#22c55e" opacity="0.5" />
        {/* Body */}
        <ellipse cx="155" cy="132" rx="88" ry="32" fill="#22c55e" opacity="0.5" />
        {/* Legs */}
        <rect x="108" y="160" width="14" height="20" rx="4" fill="#16a34a" opacity="0.6" />
        <rect x="182" y="160" width="14" height="20" rx="4" fill="#16a34a" opacity="0.6" />
        {/* Back ridges */}
        {Array.from({ length: 5 }, (_, i) => (
          <path key={i} d={`M${96 + i * 24} 106 L${108 + i * 24} 106 L${102 + i * 24} 94 Z`} fill="#14532d" opacity="0.7" />
        ))}
        {/* Head: lower jaw, dark mouth, upper jaw, eye, teeth */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          style={{ transformOrigin: '240px 132px' }}
        >
          <path d="M238 148 L312 170 L312 180 L238 164 Z" fill="#16a34a" opacity="0.85" />
          <path d="M240 128 L312 133 L310 166 L240 150 Z" fill="#11131f" />
          <path d="M236 106 L314 124 L314 134 L236 128 Z" fill="#22c55e" opacity="0.9" />
          <circle cx="306" cy="127" r="3" fill="#11131f" opacity="0.5" />
          <circle cx="254" cy="104" r="7" fill="#e5e7eb" />
          <circle cx="255" cy="104" r="3.5" fill="#11131f" />
          <path
            d="M246 129 L251 138 L256 129 Z M266 130 L271 139 L276 130 Z M286 131 L291 140 L296 131 Z"
            fill="#f8fafc"
          />
          <path d="M250 150 L255 142 L260 150 Z M272 153 L277 145 L282 153 Z" fill="#f8fafc" />
        </motion.g>
      </motion.g>
      {['Rent', 'Milk', 'Petrol', 'School fees', 'Dinner out'].map((t, i) => (
        <motion.g key={t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.15 }}>
          <motion.text
            x={330}
            y={70 + i * 26}
            fontSize="10"
            fill="#fca5a5"
            animate={{ x: [330, 318] }}
            transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.2 }}
          >
            {t} ↑
          </motion.text>
        </motion.g>
      ))}
      <text x="200" y="200" textAnchor="middle" fontSize="11" fill="#fca5a5">
        Inflation eats cash quietly, every single year
      </text>
    </>
  )
}

/** Choosing one path blocks the other */
export function OpportunityFork() {
  return (
    <>
      <motion.circle cx="60" cy="110" r="18" fill="#34e0a1" opacity="0.7" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ transformOrigin: '60px 110px' }} />
      <path d="M78 110 Q180 40 300 55" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
      <path d="M78 110 Q180 180 300 165" fill="none" stroke="#f472b6" strokeWidth="2.5" />
      <motion.path
        d="M78 110 Q180 180 300 165"
        fill="none"
        stroke="#f472b6"
        strokeWidth="4"
        strokeDasharray="8 8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9 }}
      />
      <motion.circle cx="300" cy="55" r="20" fill="#38bdf8" opacity="0.5" />
      <motion.circle cx="300" cy="165" r="20" fill="#f472b6" opacity="0.5" />
      <text x="300" y="60" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">
        Movie
      </text>
      <text x="300" y="170" textAnchor="middle" fontSize="10" fill="#3b0a20" fontWeight="700">
        Invest
      </text>
      <text x="60" y="115" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">
        ₹500
      </text>
      <motion.text
        x="140"
        y="195"
        fontSize="10"
        fill="#8791b3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        You only get one — the other is the opportunity cost
      </motion.text>
    </>
  )
}