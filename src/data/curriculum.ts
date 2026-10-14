import { levels } from './curriculum.generated'
import type { ChapterRef, LevelRef } from './curriculum.generated'
import type { Chapter } from '../types'

export { levels }
export type { Chapter, ChapterRef, LevelRef }

/**
 * Authored chapter content is loaded per level so the initial bundle stays small.
 *
 * `levels` (the generated 508-chapter syllabus) is tiny and always eager — titles
 * and structure are needed for every view. The actual prose is ~700 kB, so it is
 * code-split: each level's modules land in their own chunk and are fetched the
 * first time a level or chapter inside it is opened. The search page and the
 * content validator deliberately pull every level.
 *
 * AUTHORED_LEVELS lists which levels have written content, so we can show
 * "coming soon" without downloading anything.
 */
export const AUTHORED_LEVELS = [1, 2, 3, 4]

const levelLoaders: Record<number, () => Promise<Record<string, Chapter>>> = {
  1: () => import('./chapters/level1').then((m) => m.level1),
  2: () => import('./chapters/level2').then((m) => m.level2),
  3: () => import('./chapters/level3').then((m) => m.level3),
  4: () => import('./chapters/level4').then((m) => m.level4),
}

/** Populated as levels load. Read through `getChapter` / `isAuthored`. */
export const chapterContent: Record<string, Chapter> = {}

const loaded = new Set<number>()
const inFlight = new Map<number, Promise<void>>()

/** Load one level's content. Safe to call repeatedly; caches the promise. */
export function loadLevel(level: number): Promise<void> {
  if (loaded.has(level)) return Promise.resolve()
  const existing = inFlight.get(level)
  if (existing) return existing

  const loader = levelLoaders[level]
  if (!loader) {
    loaded.add(level)
    return Promise.resolve()
  }

  const p = loader()
    .then((mod) => {
      Object.assign(chapterContent, mod)
      loaded.add(level)
      inFlight.delete(level)
    })
    .catch((err) => {
      inFlight.delete(level)
      console.error(`Failed to load level ${level} content`, err)
    })

  inFlight.set(level, p)
  return p
}

/** Load every authored level. Used by search and the content validator. */
export async function loadAllContent(): Promise<void> {
  await Promise.all(AUTHORED_LEVELS.map((l) => loadLevel(l)))
}

export const isLevelLoaded = (level: number) => loaded.has(level)

/** True only once that chapter's level has been loaded. */
export const isAuthored = (id: string): boolean => Boolean(chapterContent[id])

export const getChapter = (ref: ChapterRef): Chapter | undefined => chapterContent[ref.id]

/** Which level a chapter id belongs to, e.g. "l2-014" -> 2. */
export const levelOf = (id: string): number => Number(id.slice(1, id.indexOf('-')))

/** Flat ordered list of every chapter in the course. */
export const allChapters = levels.flatMap((l) =>
  l.chapters.map((c) => ({ ...c, level: l.level, levelTitle: l.title, color: l.color })),
)

export const findChapterRef = (id: string) => allChapters.find((c) => c.id === id)

export const neighbours = (id: string) => {
  const i = allChapters.findIndex((c) => c.id === id)
  return { prev: i > 0 ? allChapters[i - 1] : undefined, next: i >= 0 ? allChapters[i + 1] : undefined }
}