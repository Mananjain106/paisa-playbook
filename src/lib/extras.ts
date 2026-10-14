import type { Block, Chapter, Question } from '../types'

/**
 * Authored gap-filling content for the higher levels.
 *
 * Levels 1 and 2 were written chapter-by-chapter with a hand-picked
 * illustration and simulation each. Levels 3 and 4 were authored in bulk and
 * a large share of chapters ended up with only one of the two, an empty
 * caption, or the same lab repeated two or three times.
 *
 * `applyExtras` normalises a level's chapters — dropping duplicate sims and
 * scenes — and then appends the chapter-specific illustration / simulation
 * declared in the extras map so that **every** chapter ends up with a quiz, a
 * simulation and an illustration that actually match its topic.
 */
type SimBlock = Extract<Block, { kind: 'sim' }>
type SceneBlock = Extract<Block, { kind: 'scene' }>

export type Extra = {
  /** Simulation to append when the chapter has none. */
  sim?: SimBlock
  /** Illustration to append when the chapter has none. */
  scene?: SceneBlock
  /** Extra quiz questions appended to the chapter's own. */
  quiz?: Question[]
  /**
   * Captions for existing sim/scene blocks that were authored with an empty
   * one, keyed by the block's `name`.
   */
  captions?: Record<string, string>
}

/** Insert a block just before the trailing `terms` glossary, if present. */
function insertBeforeTerms(blocks: Block[], block: Block): Block[] {
  const i = blocks.findIndex((b) => b.kind === 'terms')
  if (i === -1) return [...blocks, block]
  return [...blocks.slice(0, i), block, ...blocks.slice(i)]
}

export function applyExtras(
  base: Record<string, Chapter>,
  extras: Record<string, Extra>,
): Record<string, Chapter> {
  const out: Record<string, Chapter> = {}

  for (const [id, chapter] of Object.entries(base)) {
    const seenSims = new Set<string>()
    const seenScenes = new Set<string>()
    let blocks: Block[] = []

    for (const block of chapter.blocks) {
      // Duplicate labs and illustrations add nothing but noise, so keep the
      // first occurrence of each.
      if (block.kind === 'sim') {
        if (seenSims.has(block.name)) continue
        seenSims.add(block.name)
      }
      if (block.kind === 'scene') {
        if (seenScenes.has(block.name)) continue
        seenScenes.add(block.name)
      }

      // Fill an empty caption from the authored caption map, keyed by name.
      if ((block.kind === 'sim' || block.kind === 'scene') && !(block.caption ?? '').trim()) {
        const filled = extras[id]?.captions?.[block.name]
        blocks.push(filled ? { ...block, caption: filled } : block)
      } else {
        blocks.push(block)
      }
    }

    const extra = extras[id]
    if (extra) {
      if (extra.sim && !seenSims.has(extra.sim.name)) blocks = insertBeforeTerms(blocks, extra.sim)
      if (extra.scene && !seenScenes.has(extra.scene.name)) blocks = insertBeforeTerms(blocks, extra.scene)
    }

    out[id] = extra?.quiz
      ? { ...chapter, blocks, quiz: [...chapter.quiz, ...extra.quiz] }
      : { ...chapter, blocks }
  }

  return out
}
