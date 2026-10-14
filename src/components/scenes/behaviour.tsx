import { motion } from 'framer-motion'

/** Streams of money flowing from different income sources */
export function IncomeStreams() {
  const src = [
    { label: 'Salary', c: '#34e0a1', effort: 0.2 },
    { label: 'Business', c: '#38bdf8', effort: 0.6 },
    { label: 'Freelance', c: '#c084fc', effort: 0.5 },
    { label: 'Rent / Interest', c: '#fbbf24', effort: 0.05 },
  ]
  return (
    <>
      {src.map((s, i) => {
        const y = 30 + i * 44
        return (
          <motion.g key={s.label} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
            <rect x="10" y={y} width="130" height="30" rx="8" fill={s.c} opacity="0.25" />
            <text x="75" y={y + 20} textAnchor="middle" fontSize="11" fill={s.c} fontWeight="600">
              {s.label}
            </text>
            <motion.path
              d={`M150,${y + 15} C220,${y + 15} 240,110 280,110`}
              fill="none"
              stroke={s.c}
              strokeWidth="2"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
            />
            <circle cx="150" cy={y + 15} r="4" fill={s.c} />
            <text x="146" y={y + 34} fontSize="9" fill="#656f97">
              effort {Math.round(s.effort * 100)}%
            </text>
          </motion.g>
        )
      })}
      <motion.circle
        cx="320"
        cy="110"
        r="34"
        fill="#34e0a1"
        opacity="0.25"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        style={{ transformOrigin: '320px 110px' }}
      />
      <text x="320" y="115" textAnchor="middle" fontSize="12" fill="#34e0a3" fontWeight="700">
        You
      </text>
    </>
  )
}

/** Needs vs wants pie with rounded labels tucked inside each slice */
export function PieNeedsWants() {
  const cx = 200
  const cy = 108
  const R = 88
  const needs = 0.6

  const polar = (frac: number, r: number) => {
    const a = frac * 2 * Math.PI - Math.PI / 2
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  }
  const wedge = (from: number, to: number) => {
    const a = polar(from, R)
    const b = polar(to, R)
    const large = to - from > 0.5 ? 1 : 0
    return `M${cx},${cy} L${a.x},${a.y} A${R},${R} 0 ${large} 1 ${b.x},${b.y} Z`
  }

  const slices = [
    { from: 0, to: needs, fill: '#38bdf8', label: 'Needs 60%' },
    { from: needs, to: 1, fill: '#f472b6', label: 'Wants 40%' },
  ]
  return (
    <>
      {slices.map((s, i) => (
        <motion.path
          key={s.label}
          d={wedge(s.from, s.to)}
          fill={s.fill}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.25, duration: 0.6 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      {slices.map((s, i) => {
        const p = polar((s.from + s.to) / 2, 48)
        return (
          <motion.g
            key={s.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.25 }}
          >
            <rect x={p.x - 37} y={p.y - 13} width="74" height="26" rx="13" fill="#0b1524" opacity="0.55" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
              {s.label}
            </text>
          </motion.g>
        )
      })}
      <text x={cx} y={213} textAnchor="middle" fontSize="11" fill="#8791b3">
        Money decides faster when you know which is which
      </text>
    </>
  )
}

/** Water leaking out of a budget bucket */
export function SpendLeak() {
  const holes = [0, 1, 2]
  return (
    <>
      <rect x="40" y="40" width="150" height="140" rx="14" fill="#38bdf8" opacity="0.2" stroke="#38bdf8" strokeWidth="2" />
      <motion.rect
        x="44"
        width="142"
        rx="10"
        fill="#38bdf8"
        opacity="0.45"
        initial={{ height: 0, y: 176 }}
        animate={{ height: 120, y: 56 }}
        transition={{ duration: 0.8 }}
      />
      <text x="115" y="30" textAnchor="middle" fontSize="12" fill="#38bdf8">
        Income in
      </text>
      {holes.map((i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.2 }}>
          <circle cx={205} cy={90 + i * 28} r="4" fill="#0b1524" stroke="#38bdf8" />
          <motion.circle
            cx={215}
            r="2.5"
            fill="#38bdf8"
            animate={{ cx: [215, 300], cy: [90 + i * 28, 110 + i * 26], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.4 }}
          />
          <text x="310" y={112 + i * 26} fontSize="10" fill="#8791b3">
            {['small leaks', 'subs forgotten', 'impulse buys'][i]}
          </text>
        </motion.g>
      ))}
      <text x="200" y="210" textAnchor="middle" fontSize="11" fill="#fca5a5">
        Slow leaks empty a budget faster than one big mistake
      </text>
    </>
  )
}

/** Ad shouting at a shopper */
export function AdTrap() {
  const tags = [
    { label: 'urgency', w: 50, cx: 102.5 },
    { label: 'scarcity', w: 48, cx: 161.5 },
    { label: 'discount', w: 52, cx: 221.5 },
    { label: 'social proof', w: 65, cx: 290 },
  ]
  return (
    <>
      <defs>
        <marker id="adtrap-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#f472b6" />
        </marker>
      </defs>

      <motion.g
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.06, 1], opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: '105px 98px' }}
      >
        <rect x="30" y="44" width="150" height="108" rx="16" fill="#f472b6" opacity="0.9" />
        <text x="105" y="84" textAnchor="middle" fontSize="16" fill="#3b0a20" fontWeight="800">
          50% OFF!
        </text>
        <rect x="45" y="100" width="120" height="26" rx="13" fill="#3b0a20" opacity="0.28" />
        <text x="105" y="117" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="700">
          Only 3 left!
        </text>
      </motion.g>

      <motion.path
        d="M298,122 C255,138 215,116 190,101"
        fill="none"
        stroke="#f472b6"
        strokeWidth="2"
        strokeDasharray="6 6"
        markerEnd="url(#adtrap-arrow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, strokeDashoffset: [0, -24] }}
        transition={{ opacity: { delay: 0.6, duration: 0.4 }, strokeDashoffset: { repeat: Infinity, duration: 0.9, ease: 'linear' } }}
      />

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
        <line x1="304" y1="126" x2="262" y2="112" stroke="#34e0a1" strokeWidth="8" strokeLinecap="round" />
        <circle cx="322" cy="94" r="15" fill="#34e0a1" />
        <rect x="300" y="114" width="44" height="52" rx="20" fill="#34e0a1" opacity="0.5" />
        <circle cx="258" cy="110" r="7" fill="#34e0a1" />
      </motion.g>

      {tags.map((t, i) => (
        <motion.g
          key={t.label}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.12 }}
        >
          <rect x={t.cx - t.w / 2} y="13" width={t.w} height="22" rx="11" fill="#f472b6" opacity="0.16" stroke="#f472b6" strokeOpacity="0.6" />
          <text x={t.cx} y="27" textAnchor="middle" fontSize="9" fill="#f9a8d4">
            {t.label}
          </text>
        </motion.g>
      ))}

      <text x="200" y="200" textAnchor="middle" fontSize="11" fill="#8791b3">
        Tactics designed to switch off your rational brain
      </text>
    </>
  )
}

/** Friends pressuring each other to spend */
export function PeerCircle() {
  const people = [0, 1, 2, 3].map((i) => {
    const a = (i / 4) * Math.PI * 2 - Math.PI / 2
    return { x: 200 + 65 * Math.cos(a), y: 105 + 45 * Math.sin(a) }
  })
  return (
    <>
      <circle cx="200" cy="105" r="30" fill="#fbbf24" opacity="0.3" />
      <text x="200" y="110" textAnchor="middle" fontSize="12" fill="#fbbf24" fontWeight="700">
        New phone?
      </text>
      {people.map((p, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        >
          <circle cx={p.x} cy={p.y} r="15" fill="#38bdf8" opacity="0.8" />
        </motion.g>
      ))}
      <motion.g animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} style={{ transformOrigin: '200px 105px' }}>
        <circle cx="200" cy="105" r="42" fill="none" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="4 6" />
      </motion.g>
      <text x="200" y="200" textAnchor="middle" fontSize="11" fill="#8791b3">
        Spending to fit in is the most expensive kind of buying
      </text>
    </>
  )
}