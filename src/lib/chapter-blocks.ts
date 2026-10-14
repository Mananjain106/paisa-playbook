import type { Block, SceneName, SimName } from '../types'

type SimBlock = Extract<Block, { kind: 'sim' }>
type SceneBlock = Extract<Block, { kind: 'scene' }>

export const sim = (name: SimName, caption?: string): SimBlock => ({
  kind: 'sim',
  name,
  caption: caption ?? undefined,
})
export const scene = (name: SceneName, caption?: string): SceneBlock => ({
  kind: 'scene',
  name,
  caption: caption ?? undefined,
})
export const scene4 = scene
export const sim4 = sim
