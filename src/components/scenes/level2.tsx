import { motion } from 'framer-motion'

/** Level 2 illustrations: net worth, credit, loans, insurance, fraud, psychology. */

/** Assets on one side, liabilities on the other, net worth in the middle. */
export function BalanceSheet() {
  const assets = [
    { label: 'Bank + FD', w: 90, y: 30 },
    { label: 'EPF + NPS', w: 74, y: 62 },
    { label: 'Gold', w: 48, y: 94 },
    { label: 'Property', w: 60, y: 126 },
  ]
  const debts = [
    { label: 'Home loan', w: 84, y: 30 },
    { label: 'Car loan', w: 56, y: 62 },
    { label: 'Card + BNPL', w: 40, y: 94 },
  ]
  return (
    <>
      <text x="95" y="20" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">
        ASSETS
      </text>
      <text x="305" y="20" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        LIABILITIES
      </text>
      {assets.map((a, i) => (
        <motion.rect
          key={a.label}
          x={20}
          y={a.y}
          height="24"
          rx="6"
          fill="#34e0a1"
          opacity="0.6"
          initial={{ width: 0 }}
          animate={{ width: a.w }}
          transition={{ delay: i * 0.12, type: 'spring', stiffness: 140 }}
        />
      ))}
      {debts.map((d, i) => (
        <motion.rect
          key={d.label}
          x={380 - d.w}
          y={d.y}
          height="24"
          rx="6"
          fill="#f87171"
          opacity="0.6"
          initial={{ width: 0 }}
          animate={{ width: d.w }}
          transition={{ delay: i * 0.12 + 0.2, type: 'spring', stiffness: 140 }}
        />
      ))}
      <line x1="200" y1="24" x2="200" y2="170" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
      {assets.map((a, i) => (
        <motion.text
          key={a.label}
          x={20 + a.w + 8}
          y={a.y + 15}
          fontSize="9"
          fill="#d7dbe9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.08 }}
        >
          {a.label}
        </motion.text>
      ))}
      {debts.map((d, i) => (
        <motion.text
          key={d.label}
          x={380 - d.w - 8}
          y={d.y + 15}
          textAnchor="end"
          fontSize="9"
          fill="#d7dbe9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + (i + 4) * 0.08 }}
        >
          {d.label}
        </motion.text>
      ))}
      <motion.text
        x="200"
        y="195"
        textAnchor="middle"
        fontSize="12"
        fill="#34e0a3"
        fontWeight="700"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Net worth = assets − liabilities
      </motion.text>
    </>
  )
}

/** One EMI payment split into principal and interest. */
export function EmiSplit() {
  const cx = 108
  const cy = 100
  const R = 52
  const C = 2 * Math.PI * R
  const interestFrac = 0.8
  const svgRotate = `rotate(-90 ${cx} ${cy})`
  return (
    <>
      <motion.g
        initial={{ opacity: 0, scale: 0.84 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 140 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="22" />
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="#f87171"
          strokeWidth="22"
          strokeDasharray={`${C * interestFrac} ${C}`}
          transform={svgRotate}
        />
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="#34e0a1"
          strokeWidth="22"
          strokeDasharray={`${C * (1 - interestFrac)} ${C}`}
          strokeDashoffset={-C * interestFrac}
          transform={svgRotate}
        />
        <text x={cx} y={cy - 1} textAnchor="middle" fontSize="16" fill="#e8ecf7" fontWeight="800">
          EMI
        </text>
        <text x={cx} y={cy + 15} textAnchor="middle" fontSize="9" fill="#8791b3">
          each month
        </text>
      </motion.g>

      <motion.g initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
        <rect x="196" y="58" width="12" height="12" rx="3" fill="#f87171" />
        <text x="216" y="68" fontSize="11" fill="#fca5a5" fontWeight="700">
          Interest
        </text>
        <text x="196" y="87" fontSize="9" fill="#8791b3">
          ≈80% · the lender&apos;s — never comes back
        </text>
        <rect x="196" y="106" width="12" height="12" rx="3" fill="#34e0a1" />
        <text x="216" y="116" fontSize="11" fill="#a7f3d0" fontWeight="700">
          Principal
        </text>
        <text x="196" y="135" fontSize="9" fill="#8791b3">
          ≈20% · this part reduces your loan
        </text>
      </motion.g>

      <text x="200" y="205" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Early on, most of your EMI buys nothing you own
      </text>
    </>
  )
}

/** Umbrella getting wider as months of expenses are saved. */
export function EmergencyLadder() {
  const levels = [
    { label: '1 month', w: 105, c: '#38bdf8', note: 'quick buffer' },
    { label: '3 months', w: 155, c: '#34e0a1', note: 'most salaried' },
    { label: '6 months', w: 205, c: '#a855f7', note: 'single income' },
    { label: '12 months', w: 250, c: '#f59e0b', note: 'very irregular' },
  ]
  return (
    <>
      <text x="40" y="18" fontSize="9" fill="#8791b3" letterSpacing="0.4">
        MONTHS OF EXPENSES
      </text>
      {levels.map((l, i) => (
        <motion.g key={l.label} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
          <motion.rect
            x="40"
            y={30 + i * 44}
            height="34"
            rx="8"
            fill={l.c}
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: l.w }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 130 }}
          />
          <text x="54" y={52 + i * 44} fontSize="12" fill="#11131f" fontWeight="700">
            {l.label}
          </text>
          <text x={l.w + 52} y={52 + i * 44} fontSize="10" fill="#8791b3">
            {l.note}
          </text>
        </motion.g>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        More months suits freelancers, irregular income and single-income families
      </text>
    </>
  )
}

/** Minimum payments barely dent a balance that keeps compounding. */
export function MinPaymentTrap() {
  const bars = [
    { m: '0', b: 100000 },
    { m: '6', b: 112000 },
    { m: '12', b: 126000 },
    { m: '24', b: 158000 },
    { m: '36', b: 198000 },
  ]
  const base = 170
  const maxH = 108
  const max = 198000
  return (
    <>
      <text x="200" y="24" textAnchor="middle" fontSize="12" fill="#fca5a5" fontWeight="700">
        Paying only the minimum
      </text>
      <text x="200" y="40" textAnchor="middle" fontSize="9" fill="#8791b3">
        ₹1,00,000 of card debt that is never cleared
      </text>
      <line x1="24" y1={base} x2="376" y2={base} stroke="white" strokeOpacity="0.15" strokeWidth="1.5" />
      {bars.map((b, i) => {
        const h = (b.b / max) * maxH
        const x = 33 + i * 72
        return (
          <motion.g key={b.m} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.14 }}>
            <motion.rect
              x={x}
              width="46"
              rx="6"
              fill="#f87171"
              opacity="0.85"
              initial={{ height: 0, y: base }}
              animate={{ height: h, y: base - h }}
              transition={{ delay: i * 0.14, type: 'spring', stiffness: 110, damping: 16 }}
            />
            <text x={x + 23} y={base - h - 7} textAnchor="middle" fontSize="9" fill="#fca5a5" fontWeight="700">
              {`₹${(b.b / 100000).toFixed(2)}L`}
            </text>
            <text x={x + 23} y="186" textAnchor="middle" fontSize="9" fill="#8791b3">
              {`M${b.m}`}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="208" textAnchor="middle" fontSize="10" fill="#8791b3">
        Months 0 → 36 at roughly 3% a month — it only ever climbs
      </text>
    </>
  )
}

/** Secured loan backed by a house vs unsecured floating alone. */
export function SecuredVsUnsecured() {
  return (
    <>
      <motion.g initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <rect x="30" y="60" width="140" height="90" rx="10" fill="#34e0a1" opacity="0.25" stroke="#34e0a1" strokeWidth="2" />
        <path d="M60 60 L100 34 L140 60 Z" fill="#34e0a1" opacity="0.6" />
        <text x="100" y="95" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontWeight="700">
          Secured
        </text>
        <text x="100" y="112" textAnchor="middle" fontSize="9" fill="#a7f3d0">
          house is collateral
        </text>
        <text x="100" y="125" textAnchor="middle" fontSize="9" fill="#a7f3d0">
          lower rate, longer tenure
        </text>
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
        <circle cx="300" cy="105" r="48" fill="#f87171" opacity="0.2" stroke="#f87171" strokeWidth="2" strokeDasharray="6 5" />
        <text x="300" y="100" textAnchor="middle" fontSize="11" fill="#fca5a5" fontWeight="700">
          Unsecured
        </text>
        <text x="300" y="117" textAnchor="middle" fontSize="9" fill="#fca5a5">
          nothing to seize
        </text>
        <text x="300" y="130" textAnchor="middle" fontSize="9" fill="#fca5a5">
          higher rate, shorter tenure
        </text>
      </motion.g>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Higher rate is the lender charging for taking more risk
      </text>
    </>
  )
}

/** An umbrella covering a household. */
export function InsuranceUmbrella() {
  const risks = ['health', 'life', 'vehicle', 'property', 'travel', 'liability']
  const cols = [96, 222]
  const rows = [64, 102, 140]
  return (
    <>
      <motion.path
        d="M200 18 L328 58 V128 C328 172 272 198 200 206 C128 198 72 172 72 128 V58 Z"
        fill="#38bdf8"
        opacity="0.16"
        stroke="#38bdf8"
        strokeWidth="2"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.16 }}
        transition={{ type: 'spring', stiffness: 150 }}
        style={{ transformOrigin: '200px 116px' }}
      />
      {risks.map((r, i) => {
        const c = i % 2
        const rr = Math.floor(i / 2)
        const x = cols[c]
        const y = rows[rr]
        return (
          <motion.g key={r} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 + i * 0.1 }}>
            <rect x={x - 48} y={y} width="96" height="24" rx="6" fill="#38bdf8" opacity="0.22" />
            <text x={x} y={y + 16} textAnchor="middle" fontSize="10" fill="#7dd3fc">
              {r}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="40" textAnchor="middle" fontSize="13" fill="#7dd3fc" fontWeight="700">
        One household, several risks
      </text>
      <motion.text
        x="200"
        y="206"
        textAnchor="middle"
        fontSize="10"
        fill="#8791b3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Insurance transfers a risk you cannot afford, not one you can
      </motion.text>
    </>
  )
}

/** Early payouts funded by later investors. */
export function PonziChain() {
  const levels = [
    { y: 34, xs: [200] },
    { y: 74, xs: [160, 240] },
    { y: 114, xs: [120, 160, 240, 280] },
    { y: 154, xs: [80, 110, 140, 170, 230, 260, 290, 320] },
  ]
  return (
    <>
      {levels.map((lvl, r) => (
        lvl.xs.map((x, i) => {
          const above = levels[r - 1]
          if (!above) return null
          const ax = above.xs[Math.floor(i / 2)]
          return (
            <motion.path
              key={`${r}-${i}`}
              d={`M${ax},${levels[r - 1].y} L${x},${lvl.y}`}
              stroke="#fbbf24"
              strokeWidth="1.2"
              strokeDasharray="4 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ delay: (r - 1) * 0.18 + (i % 2) * 0.06, duration: 0.4 }}
            />
          )
        })
      ))}
      {levels.map((lvl, r) => (
        lvl.xs.map((x, i) => (
          <motion.g
            key={`n${r}${i}`}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: r * 0.18 + i * 0.05, type: 'spring', stiffness: 200 }}
            style={{ transformOrigin: `${x}px ${lvl.y}px` }}
          >
            <circle cx={x} cy={lvl.y} r={r === 0 ? 16 : 10} fill={r === 0 && i === 0 ? '#34e0a1' : '#fbbf24'} opacity={r === 0 ? 0.85 : 0.7} />
            {r === 0 && (
              <text x={x} y={lvl.y + 4} textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">you</text>
            )}
          </motion.g>
        ))
      ))}
      <motion.circle
        cx="320"
        cy="154"
        r="16"
        fill="none"
        stroke="#f87171"
        strokeWidth="2"
        animate={{ r: [12, 22, 12], opacity: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      />
      <motion.text
        x="200"
        y="192"
        textAnchor="middle"
        fontSize="11"
        fill="#fcd34d"
        fontWeight="700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        New money flows up to pay earlier investors
      </motion.text>
      <text x="200" y="210" textAnchor="middle" fontSize="9" fill="#8791b3">
        When new money stops, the bottom layer has no one left — collapse
      </text>
    </>
  )
}

/** Recruiting-based pyramid. */
export function PyramidScheme() {
  const rows = 5
  return (
    <>
      {Array.from({ length: rows }, (_, r) => {
        const y = 30 + r * 32
        const n = r * 2 + 1
        return (
          <motion.g key={r} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: r * 0.16 }}>
            {Array.from({ length: n }, (_, c) => (
              <rect
                key={c}
                x={200 - (n * 34) / 2 + c * 34}
                y={y}
                width="28"
                height="24"
                rx="5"
                fill={r === 0 ? '#34e0a1' : '#fbbf24'}
                opacity={0.85 - r * 0.12}
              />
            ))}
          </motion.g>
        )
      })}
      <motion.text
        x="200"
        y="200"
        textAnchor="middle"
        fontSize="11"
        fill="#fcd34d"
        fontWeight="700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Money comes from recruiting, not from selling anything
      </motion.text>
    </>
  )
}

/** Price spikes after hearing everyone else bought. */
export function FomoChase() {
  const bars = [30, 42, 38, 55, 80, 118, 96, 70, 58, 52, 48, 45]
  return (
    <>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={14 + i * 31}
          width="24"
          rx="4"
          fill={i === 5 ? '#f87171' : i > 5 ? '#fb923c' : '#34e0a1'}
          opacity="0.8"
          initial={{ height: 0, y: 180 }}
          animate={{ height: h, y: 180 - h }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 130 }}
        />
      ))}
      <line x1="14" x2="386" y1="180" y2="180" stroke="white" strokeOpacity="0.12" />
      <motion.circle
        cx={14 + 5 * 31 + 12}
        cy={180 - 118}
        r="3.5"
        fill="#f87171"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      />
      <motion.text
        x={14 + 5 * 31 + 12}
        y={180 - 118 - 6}
        textAnchor="middle"
        fontSize="10"
        fill="#fca5a5"
        fontWeight="700"
      >
        everyone talks about it
      </motion.text>
      <text x="200" y="205" textAnchor="middle" fontSize="10" fill="#8791b3">
        You buy at the loudest point and hold through the fall
      </text>
    </>
  )
}

/** Costs rising each year while savings stay flat. */
export function LifestyleInflation() {
  const income = [80, 92, 104, 116]
  const spending = [78, 90, 103, 115]
  const saved = income.map((v, i) => v - spending[i])
  return (
    <>
      <line x1="30" y1="185" x2="380" y2="185" stroke="white" strokeOpacity="0.15" />
      {income.map((v, i) => {
        const x = 50 + i * 95
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.18 }}>
            <motion.rect x={x} width="26" rx="4" fill="#38bdf8" opacity="0.7" animate={{ height: v * 1.1, y: 185 - v * 1.1 }} transition={{ delay: i * 0.18, type: 'spring', stiffness: 120 }} />
            <motion.rect x={x + 28} width="26" rx="4" fill="#f87171" opacity="0.7" animate={{ height: spending[i] * 1.1, y: 185 - spending[i] * 1.1 }} transition={{ delay: i * 0.18, type: 'spring', stiffness: 120 }} />
            <text x={x + 27} y={198} textAnchor="middle" fontSize="9" fill={saved[i] <= 0 ? "#fca5a5" : "#fcd34d"} fontWeight={saved[i] <= 0 ? 700 : 400}>
              {saved[i] <= 0 ? 0 : `+${saved[i}`}
            </text>
          </motion.g>
        )
      })}
      <text x="70" y="20" fontSize="10" fill="#7dd3fc">
        income
      </text>
      <text x="130" y="20" fontSize="10" fill="#fca5a5">
        spending
      </text>
      <text x="250" y="20" fontSize="10" fill="#fcd34d">
        saved (₹K)
      </text>
      <motion.text
        x="200"
        y="120"
        textAnchor="middle"
        fontSize="12"
        fill="#fcd34d"
        fontWeight="700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Every raise gets spent
      </motion.text>
    </>
  )
}

/** Gross salary arriving, with deductions peeling away before take-home. */
export function SalaryDeductions() {
  const deductions = [
    { l: 'Employee PF', y: 34 },
    { l: 'TDS', y: 94 },
    { l: 'Professional tax', y: 154 },
  ]
  return (
    <>
      <motion.rect
        x="24"
        y="26"
        width="190"
        height="42"
        rx="8"
        fill="#38bdf8"
        opacity="0.7"
        initial={{ scaleX: 0.2, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.7 }}
        transition={{ type: 'spring', stiffness: 140 }}
        style={{ transformOrigin: '24px 26px' }}
      />
      <text x="119" y="53" textAnchor="middle" fontSize="13" fill="#0b1524" fontWeight="800">
        Gross salary
      </text>

      <motion.path
        d="M99,68 L99,146"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2"
        strokeDasharray="5 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      <motion.rect
        x="24"
        y="150"
        width="150"
        height="42"
        rx="8"
        fill="#34e0a1"
        opacity="0.75"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 140 }}
        style={{ transformOrigin: '24px 150px' }}
      />
      <text x="99" y="177" textAnchor="middle" fontSize="13" fill="#0b1524" fontWeight="800">
        Take-home
      </text>

      {deductions.map((d, i) => (
        <motion.g key={d.l} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.25 }}>
          <motion.path
            d={`M214,55 Q232,${d.y + 5} 236,${d.y + 15}`}
            fill="none"
            stroke="#f87171"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            animate={{ strokeDashoffset: [0, -36] }}
            transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.3 }}
          />
          <rect x="236" y={d.y} width="140" height="30" rx="7" fill="#f87171" opacity="0.22" />
          <text x="306" y={d.y + 20} textAnchor="middle" fontSize="11" fill="#fca5a5">
            {d.l}
          </text>
        </motion.g>
      ))}

      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        Deductions leave before the money reaches your account
      </text>
    </>
  )
}

/** A personal monthly dashboard: the four headline numbers, plus every line they feed. */
export function Dashboard() {
  const cards = [
    { l: 'Income', c: '#34e0a1' },
    { l: 'Expenses', c: '#f87171' },
    { l: 'Savings', c: '#38bdf8' },
    { l: 'Debt', c: '#f59e0b' },
  ]
  const lines = [
    { l: 'Rent', w: 160, a: '₹22,000' },
    { l: 'Loan EMIs', w: 104, a: '₹14,000' },
    { l: 'SIPs', w: 74, a: '₹12,000' },
    { l: 'Food', w: 58, a: '₹8,000' },
    { l: 'Professional tax', w: 9, a: '₹200', hot: true },
  ]
  return (
    <>
      {cards.map((c, i) => (
        <motion.g key={c.l} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
          <rect x={22 + i * 92} y="16" width="80" height="44" rx="10" fill={c.c} opacity="0.18" stroke={c.c} strokeOpacity="0.5" />
          <text x={62 + i * 92} y="43" textAnchor="middle" fontSize="11" fill={c.c} fontWeight="700">
            {c.l}
          </text>
        </motion.g>
      ))}

      <motion.text
        x="22"
        y="76"
        fontSize="9.5"
        fill="#8791b3"
        letterSpacing="0.4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        WHERE EACH PAYSLIP GOES
      </motion.text>

      {lines.map((ln, i) => (
        <motion.g key={ln.l} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.14 }}>
          <text x="22" y={93 + i * 20} fontSize="10" fill={ln.hot ? '#f59e0b' : '#d7dbe9'} fontWeight={ln.hot ? '700' : '500'}>
            {ln.l}
          </text>
          <motion.rect
            x="118"
            y={84 + i * 20}
            height="11"
            rx="5.5"
            fill={ln.hot ? '#f59e0b' : '#38bdf8'}
            opacity={ln.hot ? 1 : 0.55}
            initial={{ width: 0 }}
            animate={{ width: ln.w }}
            transition={{ delay: 0.6 + i * 0.14, type: 'spring', stiffness: 140, damping: 18 }}
          />
          <text x="378" y={93 + i * 20} textAnchor="end" fontSize="10" fill={ln.hot ? '#f59e0b' : '#8791b3'}>
            {ln.a}
          </text>
        </motion.g>
      ))}

      <motion.text
        x="200"
        y="200"
        textAnchor="middle"
        fontSize="10"
        fill="#8791b3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        Four numbers, plus every small line beneath them
      </motion.text>
    </>
  )
}

/** A gauge from poor to excellent credit. */
export function ScoreMeter() {
  const bands = [
    { l: '300–549', c: '#ef4444', t: 'Poor' },
    { l: '550–649', c: '#f59e0b', t: 'Fair' },
    { l: '650–749', c: '#facc15', t: 'Good' },
    { l: '750–900', c: '#4ade80', t: 'Excellent' },
  ]
  const base = 150
  return (
    <>
      {bands.map((b, i) => {
        const h = 28 + i * 26
        const x = 30 + i * 88
        const top = base - h
        return (
          <motion.g key={b.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.16 }}>
            <motion.rect
              x={x}
              width="84"
              rx="6"
              fill={b.c}
              opacity="0.8"
              initial={{ attrY: base, height: 0 }}
              animate={{ attrY: top, height: h }}
              transition={{ delay: i * 0.16, type: 'spring', stiffness: 120 }}
            />
            <text x={x + 42} y={top - 9} textAnchor="middle" fontSize="10" fill={b.c} fontWeight="700">
              {b.t}
            </text>
            <text x={x + 42} y={base + 17} textAnchor="middle" fontSize="9" fill="#8791b3">
              {b.l}
            </text>
          </motion.g>
        )
      })}
      <line x1="24" y1={base} x2="376" y2={base} stroke="white" strokeOpacity="0.15" strokeWidth="1.5" />
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Payment history is roughly two-thirds of your score
      </text>
    </>
  )
}



