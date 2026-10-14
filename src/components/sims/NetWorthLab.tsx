import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { rupees } from '../../lib/format'

type Item = { id: number; name: string; value: number; kind: 'asset' | 'liability' }

let uid = 0
const mk = (name: string, value: number, kind: Item['kind']): Item => ({ id: ++uid, name, value, kind })

const startAssets: Item[] = [
  mk('Salary account', 40_000, 'asset'),
  mk('Savings / FD', 1_20_000, 'asset'),
  mk('EPF balance', 3_10_000, 'asset'),
  mk('Two-wheeler (resale)', 25_000, 'asset'),
]

const startLiabilities: Item[] = [mk('Car loan', 2_60_000, 'liability'), mk('Credit card', 12_000, 'liability')]

export function NetWorthLab() {
  const [assets, setAssets] = useState(startAssets)
  const [liabilities, setLiabilities] = useState(startLiabilities)
  const [name, setName] = useState('')
  const [value, setValue] = useState(50_000)
  const [kind, setKind] = useState<Item['kind']>('asset')

  const A = assets.reduce((n, i) => n + i.value, 0)
  const L = liabilities.reduce((n, i) => n + i.value, 0)
  const net = A - L

  const add = () => {
    const label = name.trim() || (kind === 'asset' ? 'New asset' : 'New liability')
    const item = mk(label, value, kind)
    if (kind === 'asset') setAssets((s) => [...s, item])
    else setLiabilities((s) => [...s, item])
    setName('')
  }

  const remove = (id: number) => {
    setAssets((s) => s.filter((i) => i.id !== id))
    setLiabilities((s) => s.filter((i) => i.id !== id))
  }

  const column = (kind: Item['kind'], items: Item[], total: number) => (
    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-lg text-white">{kind === 'asset' ? 'Assets' : 'Liabilities'}</h3>
        <span className={`font-semibold ${kind === 'asset' ? 'text-brand-300' : 'text-rose-300'}`}>{rupees(total)}</span>
      </div>
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {items.map((i) => (
            <motion.div
              key={i.id}
              layout
              initial={{ opacity: 0, x: kind === 'asset' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between gap-2 rounded-lg bg-ink-900/50 px-3 py-2 text-sm"
            >
              <span className="truncate text-ink-200">{i.name}</span>
              <div className="flex shrink-0 items-center gap-2">
                <span className={kind === 'asset' ? 'text-brand-300' : 'text-rose-300'}>{rupees(i.value)}</span>
                <button onClick={() => remove(i.id)} className="text-ink-500 transition hover:text-rose-300" aria-label={`remove ${i.name}`}>
                  ✕
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {items.length === 0 && <p className="py-2 text-center text-xs text-ink-500">Nothing here yet</p>}
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-br from-brand-400/15 to-sky-400/10 p-5">
        <span className="text-xs uppercase tracking-widest text-ink-300">Net Worth = Assets − Liabilities</span>
        <motion.div
          key={net}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`font-display text-4xl ${net >= 0 ? 'text-brand-300' : 'text-rose-300'}`}
        >
          {rupees(net)}
        </motion.div>
        <div className="mt-1 h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
          <motion.div
            className={`h-full ${net >= 0 ? 'bg-brand-400' : 'bg-rose-400'}`}
            animate={{ width: `${Math.min(100, (A / Math.max(A, L, 1)) * 100)}%` }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          />
        </div>
        <p className="text-center text-xs text-ink-400">
          {net >= 0
            ? 'Positive — you own more than you owe. This is the number to grow.'
            : 'Negative — you owe more than you own. Focus on clearing high-interest debt first.'}
        </p>
      </div>

      <div className="flex gap-3">
        {column('asset', assets, A)}
        {column('liability', liabilities, L)}
      </div>

      <div className="flex flex-wrap items-end gap-3 rounded-xl border border-white/10 p-3">
        <div className="flex gap-1">
          {(['asset', 'liability'] as const).map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                kind === k ? 'bg-brand-400 text-ink-950' : 'bg-white/10 text-ink-300 hover:bg-white/20'
              }`}
            >
              {k === 'asset' ? '+ Asset' : '+ Liability'}
            </button>
          ))}
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (e.g. Gold, Bike loan)"
          className="min-w-[160px] flex-1 rounded-lg border border-white/10 bg-ink-900 px-3 py-1.5 text-sm text-white outline-none focus:border-brand-400/50"
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-28 rounded-lg border border-white/10 bg-ink-900 px-3 py-1.5 text-sm text-white outline-none focus:border-brand-400/50"
        />
        <button onClick={add} className="rounded-lg bg-brand-500 px-4 py-1.5 text-sm font-semibold text-ink-950 transition hover:bg-brand-400">
          Add
        </button>
      </div>
    </div>
  )
}