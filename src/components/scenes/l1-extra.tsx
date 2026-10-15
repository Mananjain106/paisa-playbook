import { motion } from 'framer-motion'

/** Additional Level 1 illustrations: distinct scenes that replace repeated ones. */

const ease = { type: 'spring' as const, stiffness: 130 }

/** Freelance income arrives in lumps with gaps between projects. */
export function FreelanceClimb() {
  const vals = [70, 40, 95, 28, 88, 24, 100, 58]
  const base = 170
  const bw = 26
  const scale = 1.3
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#f59e0b" fontWeight="700">
        Freelance income: feast and famine
      </text>
      {vals.map((v, i) => {
        const h = v * scale
        const c = v >= 70 ? '#34e0a1' : v >= 40 ? '#f59e0b' : '#f87171'
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.07 }}>
            <motion.rect
              x={40 + i * 42}
              width={bw}
              rx="4"
              fill={c}
              opacity="0.85"
              initial={{ height: 0, attrY: base }}
              animate={{ height: h, attrY: base - h }}
              transition={{ delay: i * 0.07, ...ease }}
            />
            <text x={40 + i * 42 + bw / 2} y={base + 14} textAnchor="middle" fontSize="8" fill="#8791b3">
              M{i + 1}
            </text>
          </motion.g>
        )
      })}
      <motion.line x1="40" y1="70" x2="368" y2="70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
      <text x="368" y="64" textAnchor="end" fontSize="9" fill="#38bdf8">
        a salaried floor
      </text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        The peaks pay for the gaps - the climb is real, but so is the risk
      </text>
    </>
  )
}
