import { motion } from 'framer-motion'

export const V = { w: 400, h: 220 }

/** Falling coin stack */
export function Coins() {
  const coins = Array.from({ length: 5 }, (_, i) => i)
  return (
    <>
      <defs>
        <linearGradient id="coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {coins.map((i) => (
        <motion.g
          key={i}
          initial={{ y: -170, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.12, type: 'spring', stiffness: 140, damping: 12 }}
        >
          {/* Static geometry; the drop-in animation lives on the wrapping <g>. */}
          <ellipse
            cx={200}
            cy={196 - i * 30}
            rx={74 - i * 6}
            ry={15}
            fill="url(#coin)"
            stroke="#b45309"
            strokeWidth="2"
          />
          <text x={200} y={201 - i * 30} textAnchor="middle" fontSize="13" fill="#92400e" fontWeight="700">
            ₹
          </text>
        </motion.g>
      ))}
    </>
  )
}

/** Two people trading goods directly */
export function Barter() {
  return (
    <>
      <motion.g initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <circle cx="70" cy="80" r="20" fill="#38bdf8" />
        <rect x="40" y="105" width="60" height="60" rx="14" fill="#38bdf8" opacity="0.5" />
      </motion.g>
      <motion.g initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <circle cx="330" cy="80" r="20" fill="#f472b6" />
        <rect x="300" y="105" width="60" height="60" rx="14" fill="#f472b6" opacity="0.5" />
      </motion.g>
      <motion.rect
        x="170"
        y="80"
        width="60"
        height="44"
        rx="8"
        fill="#34e0a1"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 180 }}
        style={{ transformOrigin: '200px 102px' }}
      />
      <motion.path
        d="M105 90 Q200 20 295 90"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2"
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      <motion.path
        d="M295 110 Q200 190 105 110"
        fill="none"
        stroke="#f472b6"
        strokeWidth="2"
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <text x="200" y="205" textAnchor="middle" fontSize="11" fill="#8791b3">
        Direct swap — no middleman, but no way to value things
      </text>
    </>
  )
}

/** Coin-age timeline */
export function Timeline() {
  const eras = [
    { y: '6000 BC', label: 'Barter' },
    { y: '3000 BC', label: 'Coins' },
    { y: '1000 AD', label: 'Paper' },
    { y: '1946', label: 'Digital' },
    { y: '2016', label: 'UPI' },
  ]
  return (
    <>
      <line x1="30" y1="110" x2="370" y2="110" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
      {eras.map((e, i) => (
        <motion.g
          key={e.y}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          <motion.circle
            cx={40 + i * 80}
            cy={110}
            r="8"
            fill="#34e0a1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 260 }}
            style={{ transformOrigin: `${40 + i * 80}px 110px` }}
          />
          <text x={40 + i * 80} y={88} textAnchor="middle" fontSize="10" fill="#34e0a1" fontWeight="700">
            {e.y}
          </text>
          <text x={40 + i * 80} y={136} textAnchor="middle" fontSize="10" fill="#d7dbe9">
            {e.label}
          </text>
        </motion.g>
      ))}
    </>
  )
}

/** Indian rupee notes fanning out */
export function Rupee() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <motion.g
          key={i}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: -12 + i * 8 }}
          transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
          style={{ transformOrigin: '200px 120px' }}
        >
          <rect x="130" y="60" width="140" height="70" rx="6" fill={['#f87171', '#fbbf24', '#4ade80', '#38bdf8'][i]} opacity="0.85" />
          <text x="200" y="103" textAnchor="middle" fontSize="26" fill="#11131f" fontWeight="800">
            ₹
          </text>
        </motion.g>
      ))}
      <text x="200" y="180" textAnchor="middle" fontSize="12" fill="#d7dbe9">
        Issued by the Reserve Bank of India
      </text>
      <text x="200" y="198" textAnchor="middle" fontSize="10" fill="#8791b3">
        ₹1 · ₹2 · ₹5 · ₹10 … ₹2000 · ₹500 notes
      </text>
    </>
  )
}

/** Same pile of cash, shrinking over time */
export function RupeeErode() {
  const bars = [
    { label: '2000', h: 130 },
    { label: '2010', h: 108 },
    { label: '2020', h: 86 },
    { label: '2030', h: 68 },
  ]
  return (
    <>
      {bars.map((b, i) => (
        <motion.g key={b.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
          <motion.rect
            x={50 + i * 80}
            width="54"
            rx="8"
            fill="#f87171"
            animate={{ height: b.h, y: 190 - b.h }}
            transition={{ delay: 0.2 + i * 0.2, type: 'spring', stiffness: 90 }}
          />
          <text x={77 + i * 80} y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
            {b.label}
          </text>
        </motion.g>
      ))}
      <motion.text
        x="200"
        y="40"
        textAnchor="middle"
        fontSize="12"
        fill="#fca5a5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        What ₹100 of fixed savings was worth, in today&apos;s money
      </motion.text>
    </>
  )
}

/** Money circulating between households, banks and firms */
export function MoneyFlow() {
  const nodes = [
    { x: 200, y: 30, label: 'Households', c: '#38bdf8' },
    { x: 60, y: 180, label: 'Banks', c: '#34e0a1' },
    { x: 340, y: 180, label: 'Firms', c: '#c084fc' },
  ]
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 0],
    [0, 2],
    [2, 1],
    [1, 0],
  ]
  return (
    <>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#34e0a1" />
        </marker>
      </defs>
      {links.map(([a, b], i) => {
        const A = nodes[a]
        const B = nodes[b]
        return (
          <motion.path
            key={i}
            d={`M${A.x},${A.y} Q${(A.x + B.x) / 2 + (i % 2 ? 26 : -26)},${(A.y + B.y) / 2} ${B.x},${B.y}`}
            fill="none"
            stroke="#34e0a1"
            strokeWidth="1.5"
            strokeDasharray="5 8"
            strokeOpacity="0.6"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          />
        )
      })}
      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.15, type: 'spring', stiffness: 220 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle cx={n.x} cy={n.y} r="26" fill={n.c} opacity="0.25" />
          <circle cx={n.x} cy={n.y} r="18" fill={n.c} />
          <text x={n.x} y={n.y + 34} textAnchor="middle" fontSize="11" fill="#d7dbe9">
            {n.label}
          </text>
        </motion.g>
      ))}
    </>
  )
}

/** Deposits flow down through banks to the economy and interest flows back up */
export function RbiFunnel() {
  const flows = [
    { label: 'Deposits', c: '#38bdf8', y: 24 },
    { label: 'Banks pool money', c: '#34e0a1', y: 82 },
    { label: 'Loans to businesses', c: '#c084fc', y: 140 },
    { label: 'Goods, jobs, growth', c: '#fbbf24', y: 190 },
  ]
  return (
    <>
      {flows.map((f, i) => (
        <motion.g key={f.label} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}>
          <motion.rect
            width={140 + i * 40}
            height="34"
            x={(400 - (140 + i * 40)) / 2}
            y={f.y}
            rx="10"
            fill={f.c}
            opacity="0.75"
            initial={{ scaleX: 0.3 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 140 }}
            style={{ transformOrigin: '200px 0px' }}
          />
          <text x="200" y={f.y + 22} textAnchor="middle" fontSize="12" fill="#11131f" fontWeight="700">
            {f.label}
          </text>
          {i < flows.length - 1 && (
            <motion.text
              x="200"
              y={f.y + 54}
              textAnchor="middle"
              fontSize="14"
              fill="#34e0a1"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.15 }}
            >
              ▼
            </motion.text>
          )}
        </motion.g>
      ))}
      <motion.text
        x="380"
        y="110"
        fontSize="11"
        fill="#fbbf24"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        textAnchor="end"
      >
        interest ↑
      </motion.text>
    </>
  )
}

/** Bank services pyramid */
export function BankPyramid() {
  const layers = [
    { label: 'ATM, UPI, cards, passbook', w: 70, c: '#38bdf8' },
    { label: 'Savings, FD, RD, insurance', w: 110, c: '#34e0a1' },
    { label: 'Loans, home loans, business credit', w: 150, c: '#a855f7' },
    { label: 'Money creation & policy', w: 190, c: '#f59e0b' },
  ]
  return (
    <>
      {layers.map((l, i) => (
        <motion.g key={l.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <motion.rect
            x={200 - l.w / 2}
            width={l.w}
            height="40"
            rx="8"
            y={16 + i * 48}
            fill={l.c}
            opacity="0.75"
            initial={{ width: 0 }}
            animate={{ width: l.w }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{ transformOrigin: '200px 0px' }}
          />
          <text x="200" y={41 + i * 48} textAnchor="middle" fontSize="10" fill="#11131f" fontWeight="700">
            {l.label}
          </text>
        </motion.g>
      ))}
    </>
  )
}