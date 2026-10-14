import { useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'

const FACTORS: Record<string, { people: number; factor: number }> = {
  single: { people: 1, factor: 1 },
  couple: { people: 2, factor: 1.7 },
  'one-child': { people: 3, factor: 2.2 },
  'two-children': { people: 4, factor: 2.7 },
}

export function CoverLab() {
  const [age, setAge] = useState(32)
  const [income, setIncome] = useState(1_200_000)
  const [family, setFamily] = useState<keyof typeof FACTORS>('one-child')
  const [hasParents, setHasParents] = useState(false)
  const [existing, setExisting] = useState(500_000)

  const f = FACTORS[family]
  const incomeMultiple = 10
  const base = income * incomeMultiple
  const olderParents = hasParents ? Math.max(0, (65 - age)) * 150_000 + 300_000 : 0
  const recommended = Math.round((base * f.factor + olderParents) / 50_000) * 50_000
  const gap = Math.max(0, recommended - existing)
  const adequate = gap === 0

  const barMax = Math.max(recommended, existing)

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Your age</span>
            <span className="font-semibold text-white">{age}</span>
          </div>
          <input type="range" min={18} max={60} step={1} value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full accent-brand-400" />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Annual household income</span>
            <span className="font-semibold text-white">{rupeesShort(income)}</span>
          </div>
          <input type="range" min={200_000} max={6_000_000} step={100_000} value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-brand-400" />
        </div>
      </div>

      <div>
        <div className="mb-1.5 text-sm text-ink-300">Who needs cover</div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(FACTORS) as (keyof typeof FACTORS)[]).map((k) => (
            <button
              key={k}
              onClick={() => setFamily(k)}
              className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                family === k ? 'border-brand-400 bg-brand-400/15 text-brand-300' : 'border-white/10 text-ink-400 hover:border-white/25'
              }`}
            >
              {k === 'single' ? 'Single' : k === 'couple' ? 'Couple' : k === 'one-child' ? 'You + 1 child' : 'You + 2 children'}
            </button>
          ))}
          <button
            onClick={() => setHasParents((v) => !v)}
            className={`rounded-lg border px-3 py-1.5 text-sm transition ${
              hasParents ? 'border-brand-400 bg-brand-400/15 text-brand-300' : 'border-white/10 text-ink-400 hover:border-white/25'
            }`}
          >
            + ageing parents
          </button>
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-ink-300">Cover you already have</span>
          <span className="font-semibold text-white">{rupeesShort(existing)}</span>
        </div>
        <input type="range" min={0} max={5_000_000} step={50_000} value={existing} onChange={(e) => setExisting(Number(e.target.value))} className="w-full accent-brand-400" />
      </div>

      <div className="space-y-3">
        <div>
          <div className="mb-1 flex justify-between text-xs text-ink-400">
            <span>What you have</span>
            <span>{rupeesShort(existing)}</span>
          </div>
          <div className="h-5 overflow-hidden rounded-lg bg-white/10">
            <motion.div className="h-full bg-sky-400/70" animate={{ width: `${(existing / barMax) * 100}%` }} />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs text-ink-400">
            <span>What you probably need</span>
            <span>{rupeesShort(recommended)}</span>
          </div>
          <div className="h-5 overflow-hidden rounded-lg bg-white/10">
            <motion.div className="h-full bg-brand-400/80" animate={{ width: `${(recommended / barMax) * 100}%` }} />
          </div>
        </div>
      </div>

      <motion.div
        key={recommended + '-' + existing}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl border p-4 text-sm ${
          adequate ? 'border-brand-400/30 bg-brand-400/10 text-brand-100' : 'border-amber-400/30 bg-amber-400/10 text-amber-100'
        }`}
      >
        {adequate ? (
          <>
            <strong>Looks broadly adequate</strong> for the income you entered. Check the{' '}
            <span className="font-semibold">room rent cap</span>, pre-existing condition waiting periods, and
            network hospital list before assuming you are protected — those cause most claim disputes.
          </>
        ) : (
          <>
            <strong>Potential shortfall of {rupeesShort(gap)}.</strong> Most Indian households are under-insured
            relative to income. A ₹5 lakh policy on a ₹12 lakh income leaves income uncovered for years.
          </>
        )}
      </motion.div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-ink-300">
        <strong className="text-white">Why income × 10?</strong> Because a hospital stay costs money, not just a
        bill. Income is lost for months while you care for someone, and that lost income is the bigger financial
        shock for most families — so cover should replace income, not just hospital bills.
      </div>
      <p className="text-xs text-ink-500">
        Illustrative sizing only — roughly ten times annual income, scaled for family size and ageing parents.
        Underwriters assess medical history, occupation and claims history, so an insurer will ultimately decide the
        cover it offers you.
      </p>
    </div>
  )
}