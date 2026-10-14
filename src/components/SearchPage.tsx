import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, Search as SearchIcon } from 'lucide-react'
import { prepareSearch, search } from '../lib/search'
import { SearchBox } from './SearchBox'
import type { SearchHit } from '../lib/search'

/**
 * Full search results across all 508 chapters, with a level filter.
 * The header search box is reused here so results stay in sync with it.
 */
export function SearchPage({
  initialQuery = '',
  onQueryChange,
}: {
  initialQuery?: string
  onQueryChange?: (q: string) => void
}) {
  const [query, setQuery] = useState(initialQuery)
  // The header SearchBox owns the live query and reports it here.
  const handleQuery = (q: string) => {
    setQuery(q)
    onQueryChange?.(q)
  }
  const [level, setLevel] = useState<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    void prepareSearch().then(() => alive && setReady(true))
    return () => {
      alive = false
    }
  }, [])

  const hits: SearchHit[] = useMemo(
    () => (ready ? search(query, 200) : []),
    [ready, query],
  )

  const filtered = level ? hits.filter((h) => h.doc.level === level) : hits
  const levelCounts = useMemo(() => {
    const m = new Map<number, number>()
    for (const h of hits) m.set(h.doc.level, (m.get(h.doc.level) ?? 0) + 1)
    return m
  }, [hits])

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-300">
          <SearchIcon size={14} />
          All 508 chapters
        </div>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">Search</h1>
      </header>

      <SearchBox
        key={initialQuery}
        className="max-w-md"
        initialQuery={initialQuery}
        onQueryChange={handleQuery}
      />

      {ready && (
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setLevel(null)}
            className={`rounded-lg border px-2.5 py-1 transition ${
              level === null
                ? 'border-brand-400/50 bg-brand-400/15 text-brand-300'
                : 'border-white/10 text-ink-400 hover:text-white'
            }`}
          >
            All ({hits.length})
          </button>
          {[...levelCounts.entries()]
            .sort((a, b) => a[0] - b[0])
            .map(([l, n]) => (
              <button
                key={l}
                onClick={() => setLevel(l === level ? null : l)}
                className={`rounded-lg border px-2.5 py-1 transition ${
                  level === l
                    ? 'border-brand-400/50 bg-brand-400/15 text-brand-300'
                    : 'border-white/10 text-ink-400 hover:text-white'
                }`}
              >
                Level {l} ({n})
              </button>
            ))}
        </div>
      )}

      <div className="mt-6">
        {!ready ? (
          <div className="flex items-center justify-center gap-2 py-10 text-sm text-ink-400">
            <Loader2 size={15} className="animate-spin" />
            Building the index from all written chapters…
          </div>
        ) : filtered.length === 0 ? (
          <p className="py-10 text-center text-sm text-ink-400">
            {query ? `Nothing matched “${query}”.` : 'Type to search titles, topics and explanations.'}
          </p>
        ) : (
          <ul className="space-y-2">
            {filtered.map((h) => (
              <li key={h.doc.id}>
                <Link
                  to={`/chapter/${h.doc.id}`}
                  className="block rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:border-white/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{h.doc.title}</span>
                    {!h.doc.authored && (
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-ink-400">
                        coming soon
                      </span>
                    )}
                  </div>
                  <div className="mt-0.5 text-xs text-brand-300">
                    Level {h.doc.level} · {h.doc.levelTitle}
                  </div>
                  {h.doc.subtitle && (
                    <p className="mt-1 text-sm text-ink-300">{h.doc.subtitle}</p>
                  )}
                  {h.snippet && <p className="mt-1 text-xs text-ink-500">{h.snippet}</p>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}