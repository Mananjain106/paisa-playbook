import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Loader2 } from 'lucide-react'
import { glossaryCount, groupByLetter, prepareGlossary, searchGlossary } from '../lib/glossary'

/**
 * A searchable glossary. Terms come from the hand-authored seed list plus every
 * `terms` block in the written chapters, so a term taught in a lesson also
 * links back to the chapter that explains it.
 */
export function GlossaryPage() {
  const [query, setQuery] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    void prepareGlossary().then(() => alive && setReady(true))
    return () => {
      alive = false
    }
  }, [])

  const groups = useMemo(() => (ready ? groupByLetter(searchGlossary(query, 300)) : []), [ready, query])
  const letters = groups.map((g) => g.letter)
  const total = ready ? glossaryCount() : 0
  const shown = groups.reduce((n, g) => n + g.entries.length, 0)

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-300">
          <BookOpen size={14} />
          Reference
        </div>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">Glossary</h1>
        <p className="mt-2 text-ink-300">
          {total} money words, in plain Indian English. Every entry is written to be understood on first
          reading.
        </p>
      </header>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter terms…"
        aria-label="Filter glossary terms"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400/50 focus:outline-none"
      />

      {!ready ? (
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-400">
          <Loader2 size={15} className="animate-spin" />
          Loading the glossary…
        </div>
      ) : (
        <>
          {letters.length > 0 && (
            <nav className="mt-4 flex flex-wrap gap-1 text-xs" aria-label="Jump to letter">
              {letters.map((l) => (
                <a
                  key={l}
                  href={`#g-${l}`}
                  className="rounded-md border border-white/10 px-2 py-1 text-ink-400 transition hover:border-brand-400/40 hover:text-white"
                >
                  {l}
                </a>
              ))}
            </nav>
          )}

          <p className="mt-4 text-xs text-ink-500">
            {shown} {shown === 1 ? 'term' : 'terms'}
            {query ? ` matching “${query}”` : ''}
          </p>

          <div className="mt-4 space-y-6">
            {groups.map((g) => (
              <section key={g.letter} id={`g-${g.letter}`} className="scroll-mt-28">
                <h2 className="sticky top-20 z-10 -mx-1 mb-2 bg-ink-950/90 px-1 py-1 font-display text-xl text-brand-300 backdrop-blur">
                  {g.letter}
                </h2>
                <dl className="grid gap-2">
                  {g.entries.map((e) => (
                    <div key={e.key} className="card p-4">
                      <dt className="font-display text-lg text-white">{e.term}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-300">{e.meaning}</dd>
                      {(e.chapters.length > 0 || e.see.length > 0) && (
                        <dd className="mt-2 flex flex-wrap gap-2 text-[11px]">
                          {e.chapters.map((id) => (
                            <Link
                              key={id}
                              to={`/chapter/${id}`}
                              className="rounded-md bg-brand-400/15 px-2 py-0.5 text-brand-300 transition hover:bg-brand-400/25"
                            >
                              read in {id.toUpperCase()}
                            </Link>
                          ))}
                          {e.see.slice(0, 4).map((s) => (
                            <button
                              key={s}
                              onClick={() => setQuery(s)}
                              className="rounded-md bg-white/5 px-2 py-0.5 text-ink-400 transition hover:text-ink-200"
                            >
                              {s}
                            </button>
                          ))}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  )
}