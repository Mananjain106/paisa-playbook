import type { Block, SceneName, SimName } from '../types'

export const scene = (name: SceneName, caption?: string): Block => ({
  kind: 'scene',
  name,
  caption: caption ?? undefined,
})
export const sim = (name: SimName, caption?: string): Block => ({
  kind: 'sim',
  name,
  caption: caption ?? undefined,
})
export const scene4 = (name: SceneName, caption?: string): Block => ({
  kind: 'scene',
  name,
  caption: caption ?? undefined,
})
export const sim4 = (name: SimName, caption?: string): Block => ({
  kind: 'sim',
  name,
  caption: caption ?? undefined,
})