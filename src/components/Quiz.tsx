import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, RotateCcw, X } from 'lucide-react'
import type { Question } from '../types'

type Answers = (number | null)[]

export function Quiz({
  questions,
  chapterId,
  onComplete,
}: {
  questions: Question[]
  chapterId: string
  onComplete: (correct: number, total: number) => void
}) {
  const [answers, setAnswers] = useState<Answers>(questions.map(() => null))
  const [submitted, setSubmitted] = useState(false)
  const [rewarded, setRewarded] = useState<string | null>(null)

  const score = useMemo(
    () => answers.filter((a, i) => a !== null && questions[i].options[a]?.correct).length,
    [answers, questions],
  )
  const answered = answers.filter((a) => a !== null).length
  const allAnswered = answered === questions.length

  const submit = () => {
    setSubmitted(true)
    onComplete(score, questions.length)
    setRewarded(`${score}/${questions.length}`)
  }

  const reset = () => {
    setAnswers(questions.map(() => null))
    setSubmitted(false)
  }

  if (!questions.length) return null

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-xl">Quick check</h3>
        <span className="text-xs text-ink-400">
          {answered}/{questions.length} answered
        </span>
      </div>

      <div className="space-y-6">
        {questions.map((q, qi) => {
          const picked = answers[qi]
          return (
            <div key={qi}>
              <p className="mb-3 font-medium text-white">
                <span className="mr-2 text-brand-300">{qi + 1}.</span>
                {q.q}
              </p>
              <div className="space-y-2">
                {q.options.map((o, oi) => {
                  const isPicked = picked === oi
                  const showRight = submitted && o.correct
                  const showWrong = submitted && isPicked && !o.correct
                  return (
                    <motion.button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))}
                      whileHover={submitted ? undefined : { x: 4 }}
                      animate={
                        showRight
                          ? { backgroundColor: 'rgba(52,224,161,0.18)', borderColor: '#34e0a1' }
                          : showWrong
                            ? { backgroundColor: 'rgba(248,113,113,0.15)', borderColor: '#f87171', x: [0, -6, 6, 0] }
                            : {}
                      }
                      transition={{ duration: 0.25 }}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition ${
                        showRight
                          ? 'border-brand-400 bg-brand-400/15'
                          : showWrong
                            ? 'border-rose-400/60'
                            : isPicked
                              ? 'border-sky-400/60 bg-sky-400/10'
                              : 'border-white/10 bg-ink-900/50 hover:border-white/25'
                      }`}
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 text-[11px]">
                        {showRight ? <Check size={12} className="text-brand-300" /> : showWrong ? <X size={12} className="text-rose-300" /> : String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1">
                        <span className="text-ink-100">{o.text}</span>
                        {submitted && (showRight || showWrong) && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-1.5 block text-xs text-ink-400"
                          >
                            {o.why}
                          </motion.span>
                        )}
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-ink-950 transition hover:bg-brand-400 disabled:opacity-40"
          >
            Check answers
          </button>
        ) : (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2 text-sm text-ink-200 transition hover:border-white/30 hover:text-white"
          >
            <RotateCcw size={14} />
            Try again
          </button>
        )}

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <span
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                  score === questions.length ? 'bg-brand-400/20 text-brand-300' : 'bg-amber-400/15 text-amber-200'
                }`}
              >
                {score}/{questions.length} correct
              </span>
              {rewarded && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-brand-300"
                >
                  +{score * 10} XP
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {submitted && score < questions.length && (
        <p className="mt-3 text-sm text-ink-400">
          Re-read the highlighted explanations above, then try again — repetition is what makes this stick.
        </p>
      )}
      {submitted && score === questions.length && (
        <p className="mt-3 text-sm text-brand-300">Perfect score. This one is locked in. 🎉</p>
      )}
      <span className="sr-only">{chapterId}</span>
    </section>
  )
}