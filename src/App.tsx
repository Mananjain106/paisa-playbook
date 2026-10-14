import { Suspense, lazy, useCallback, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Hud } from './components/Hud'
import { useProgress } from './lib/store'
import type { Progress } from './lib/store'

/**
 * Route components are code-split, so the initial download is only the shell:
 * the HUD, the router and the Home page. Everything else — a level's chapter
 * prose, its simulations, the glossary — arrives on demand.
 */
const Home = lazy(() => import('./components/Home').then((m) => ({ default: m.Home })))
const LevelView = lazy(() => import('./components/LevelView').then((m) => ({ default: m.LevelView })))
const ChapterView = lazy(() => import('./components/ChapterView').then((m) => ({ default: m.ChapterView })))
const SearchPage = lazy(() => import('./components/SearchPage').then((m) => ({ default: m.SearchPage })))
const GlossaryPage = lazy(() =>
  import('./components/GlossaryPage').then((m) => ({ default: m.GlossaryPage })),
)

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
    </div>
  )
}

/** Scroll to top on navigation, as the old hash router did. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function LevelRoute({ progress }: { progress: Progress }) {
  const { level } = useParams()
  return <LevelView level={Number(level ?? 1)} progress={progress} />
}

function ChapterRoute({
  onQuiz,
  onRead,
}: {
  onQuiz: (id: string, correct: number, total: number) => void
  onRead: (id: string) => void
}) {
  const { id = '' } = useParams()
  return <ChapterView id={id} onQuiz={onQuiz} onRead={onRead} />
}

function SearchRoute() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') ?? ''
  return (
    <SearchPage
      initialQuery={initialQuery}
      onQueryChange={(q: string) => setSearchParams(q ? { q } : {}, { replace: true })}
    />
  )
}

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <div className="text-5xl">🧭</div>
      <h1 className="mt-3 font-display text-2xl">This page does not exist</h1>
      <p className="mt-2 text-ink-300">
        The link may be old. Try searching, or head back to the start.
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="rounded-lg border border-white/15 px-4 py-2 text-sm text-ink-200 transition hover:text-white"
        >
          ← Home
        </button>
        <button
          onClick={() => navigate('/search')}
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-brand-400"
        >
          Search chapters
        </button>
      </div>
    </div>
  )
}

/**
 * Sync problems used to surface as a few pixels of "sync failed" in the HUD,
 * which is useless when the real cause is a missing database table. This banner
 * says what actually went wrong and, where recognisable, what to do about it.
 */
function SyncErrorBanner({ message }: { message: string }) {
  const missingTable =
    /PGRST205|chapter_progress|does not exist|schema cache/i.test(message)
  const hint = missingTable
    ? 'The progress table has not been created in Supabase yet. Run supabase/schema.sql in the dashboard SQL editor.'
    : 'Your local progress is safe — only the cloud copy is behind.'

  return (
    <div className="mb-5 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-sm">
      <div className="font-semibold text-rose-200">Sync is not working</div>
      <p className="mt-1 break-words text-rose-100/80">{message}</p>
      <p className="mt-1.5 text-xs text-rose-100/60">{hint}</p>
    </div>
  )
}

export default function App() {
  const { progress, stats, recordQuiz, markRead, reset, sync, pullAndMerge } = useProgress()
  const { pathname } = useLocation()

  // Chapter/level routes must wait for that level's content chunk to land,
  // otherwise ChapterView would render the "coming soon" stub.
  const level = /^\/level\/(\d+)/.exec(pathname)?.[1]
    ? Number(/^\/level\/(\d+)/.exec(pathname)![1])
    : /^\/chapter\/(l\d)-/.exec(pathname)
      ? Number(/^\/chapter\/(l\d)-/.exec(pathname)![1])
      : 0

  const onSignedIn = useCallback(() => {
    void pullAndMerge()
  }, [pullAndMerge])

  // Warm the current level's content when the route changes.
  useEffect(() => {
    if (level > 0) void import('./data/curriculum').then((m) => m.loadLevel(level))
  }, [level])

  return (
    <div className="min-h-screen bg-ink-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,224,161,0.10),transparent_60%)]" />
      <Hud level={level} sync={sync} onSignedIn={onSignedIn} />

      <ScrollToTop />

      <main className="relative mx-auto max-w-5xl px-4 py-8">
        {sync.status === 'error' && sync.error && <SyncErrorBanner message={sync.error} />}
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home progress={progress} stats={stats} />} />
            <Route path="/level/:level" element={<LevelRoute progress={progress} />} />
            <Route
              path="/chapter/:id"
              element={<ChapterRoute onQuiz={recordQuiz} onRead={markRead} />}
            />
            <Route path="/search" element={<SearchRoute />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="relative mx-auto max-w-5xl px-4 pb-10 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-ink-500">
          <span>
            Paisa Playbook — an educational app, not financial advice. Figures and rates are illustrative.
          </span>
          <div className="flex items-center gap-3">
            <span>{stats.done} chapters completed</span>
            {stats.done > 0 && (
              <button
                onClick={() => {
                  if (confirm('Reset all your progress?')) reset()
                }}
                className="text-ink-600 transition hover:text-rose-300"
              >
                reset progress
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}