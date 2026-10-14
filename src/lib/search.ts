import { allChapters, chapterContent, loadAllContent } from '../data/curriculum'
import type { Block } from '../types'

/**
 * A small, dependency-free full-text index over every chapter in the course.
 *
 * Authored chapters (currently Levels 1-2) contribute their subtitle, takeaway,
 * body prose and glossary terms. Unwritten chapters are still searchable by
 * title so the full 508-chapter syllabus is navigable today.
 *
 * Scoring is deliberately simple: title hits outweigh body hits, prefix hits
 * outweigh word-start hits. That is enough for a keyboard-driven search box and
 * keeps the whole index small enough to build at module load.
 */

export type SearchDoc = {
  id: string
  title: string
  subtitle: string
  takeaway: string
  level: number
  levelTitle: string
  authored: boolean
  /** Lowercased haystack for body matching. */
  haystack: string
  /** Title + subtitle lowercased, kept separate for weighting. */
  titleKey: string
}

export type SearchHit = {
  doc: SearchDoc
  score: number
  /** Short excerpt around the first body match, if the body matched. */
  snippet?: string
}

/** Strip punctuation so "50/30/20" and "503020" are comparable-ish. */
const normalise = (s: string) =>
  s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^\p{L}\p{N}\s%/.-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/** Pull the searchable prose out of a chapter's block list. */
const blockText = (b: Block): string => {
  switch (b.kind) {
    case 'p':
    case 'h':
      return b.text
    case 'callout':
      return `${b.title ?? ''} ${b.text}`
    case 'example':
      return `${b.title} ${b.text}`
    case 'list':
      return b.items.join(' ')
    case 'table':
      return [...b.headers, ...b.rows.flat()].join(' ')
    case 'formula':
      return `${b.label} ${b.expr} ${b.note ?? ''}`
    case 'terms':
      return b.items.map((t) => `${t.term} ${t.meaning}`).join(' ')
    default:
      return ''
  }
}

const buildDocs = (): SearchDoc[] =>
  allChapters.map((c) => {
    const authored = chapterContent[c.id]
    const subtitle = authored?.subtitle ?? ''
    const takeaway = authored?.takeaway ?? ''
    const body = authored ? authored.blocks.map(blockText).join(' ') : ''
    const title = authored?.title ?? c.title
    return {
      id: c.id,
      title,
      subtitle,
      takeaway,
      level: c.level,
      levelTitle: c.levelTitle,
      authored: Boolean(authored),
      titleKey: normalise(`${title} ${subtitle}`),
      haystack: normalise(`${body} ${takeaway}`),
    }
  })

/**
 * Built once, lazily, on first search. Because chapter content is code-split per
 * level, `prepare` must run first — it awaits every authored level so the index
 * covers the whole course. The caller shows a loading state meanwhile.
 */
let docs: SearchDoc[] | null = null
let ready: Promise<SearchDoc[]> | null = null

export const prepareSearch = (): Promise<SearchDoc[]> => {
  ready ??= loadAllContent().then(() => {
    docs = buildDocs()
    return docs
  })
  return ready
}

const index = (): SearchDoc[] => docs ?? []

export const searchDocCount = () => index().length

const snippetFor = (doc: SearchDoc, needle: string): string | undefined => {
  const i = doc.haystack.indexOf(needle)
  if (i < 0) return undefined
  const start = Math.max(0, i - 60)
  const end = Math.min(doc.haystack.length, i + needle.length + 80)
  const slice = doc.haystack.slice(start, end).trim()
  return `${start > 0 ? '…' : ''}${slice}${end < doc.haystack.length ? '…' : ''}`
}

/**
 * Ranked search. Returns at most `limit` hits.
 * An empty query returns authored chapters in syllabus order (a useful default
 * listing for the results page).
 */
export const search = (query: string, limit = 40): SearchHit[] => {
  const q = normalise(query)
  const all = index()

  if (!q) {
    return all
      .filter((d) => d.authored)
      .slice(0, limit)
      .map((doc) => ({ doc, score: 0 }))
  }

  const terms = q.split(' ').filter(Boolean)
  const hits: SearchHit[] = []

  for (const doc of all) {
    let score = 0
    let bodyMatched = false

    for (const term of terms) {
      const inTitle = doc.titleKey.indexOf(term)
      const inBody = doc.haystack.indexOf(term)

      if (inTitle < 0 && inBody < 0) {
        score = 0
        break
      }

      if (inTitle >= 0) {
        // Exact title is best, then word-start, then any occurrence.
        score += doc.titleKey === term ? 60 : doc.titleKey.startsWith(term) ? 40 : 20
      }
      if (inBody >= 0) {
        bodyMatched = true
        score += doc.haystack.startsWith(term) ? 10 : 6
      }
    }

    if (score <= 0) continue

    // Prefer written chapters and shallower levels when scores tie.
    if (doc.authored) score += 4
    score -= doc.level * 0.1

    hits.push({
      doc,
      score,
      snippet: bodyMatched ? snippetFor(doc, terms[0]) : undefined,
    })
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit)
}