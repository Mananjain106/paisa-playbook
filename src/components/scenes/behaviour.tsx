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

/** Needs vs wants pie */
export function PieNeedsWants() {
  const needs = 0.6
  const polar = (frac: number, r: number) => {
    const a = frac * 2 * Math.PI - Math.PI / 2
    return { x: 200 + r * Math.cos(a), y: 110 + r * Math.sin(a) }
  }
  const arc = (from: number, to: number, rO: number, rI: number) => {
    const so = polar(from, rO)
    const eo = polar(to, rO)
    const si = polar(from, rI)
    const ei = polar(to, rI)
    // A single slice spanning the full turn has coincident start/end points, so
    // an SVG arc would draw nothing — split it into two half-turns instead.
    if (to - from >= 0.9999) {
      const mo = polar(from + 0.5, rO)
      const mi = polar(from + 0.5, rI)
      return `M${so.x},${so.y} A${rO},${rO} 0 1 1 ${mo.x},${mo.y} A${rO},${rO} 0 1 1 ${so.x},${so.y} L${si.x},${si.y} A${rI},${rI} 0 1 0 ${mi.x},${mi.y} A${rI},${rI} 0 1 0 ${si.x},${si.y} Z`
    }
    const large = to - from > 0.5 ? 1 : 0
    return `M${so.x},${so.y} A${rO},${rO} 0 ${large} 1 ${eo.x},${eo.y} L${ei.x},${ei.y} A${rI},${rI} 0 ${large} 0 ${si.x},${si.y} Z`
  }
  return (
    <>
      <motion.path
        d={arc(0, needs, 88, 48)}
        fill="#38bdf8"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: '200px 110px' }}
      />
      <motion.path
        d={arc(needs, 1, 88, 48)}
        fill="#f472b6"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ transformOrigin: '200px 110px' }}
      />
      <text x="130" y="105" fontSize="11" fill="#0b1524" fontWeight="700">
        Needs 60%
      </text>
      <text x="278" y="120" fontSize="11" fill="#3b0a20" fontWeight="700">
        Wants
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="11" fill="#8791b3">
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
  return (
    <>
      <motion.g
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.06, 1], opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: '120px 90px' }}
      >
        <rect x="40" y="40" width="160" height="100" rx="12" fill="#f472b6" opacity="0.85" />
        <text x="120" y="82" textAnchor="middle" fontSize="15" fill="#3b0a20" fontWeight="800">
          50% OFF!
        </text>
        <text x="120" y="108" textAnchor="middle" fontSize="11" fill="#3b0a20">
          Only 3 left!
        </text>
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
        <circle cx="320" cy="80" r="18" fill="#34e0a1" />
        <rect x="290" y="105" width="60" height="60" rx="12" fill="#34e0a1" opacity="0.5" />
      </motion.g>
      {['urgency', 'discount', 'scarcity', 'social proof'].map((t, i) => (
        <motion.text
          key={t}
          x={250 + i * 38}
          y={25}
          fontSize="9"
          fill="#f472b6"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: [0, 1, 1], y: 0 }}
          transition={{ delay: 0.9 + i * 0.15 }}
        >
          {t}
        </motion.text>
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