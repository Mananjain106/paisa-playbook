// Regenerates src/data/curriculum.generated.ts from the workflow spec at
// .agents/workflow/Prompts.json. Run with: npm run gen:curriculum
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const LEVEL_META = {
  1: {
    title: 'Money Foundations',
    blurb: 'What money is, where it comes from, how to save it, and how to keep it safe.',
    color: '#22c55e',
  },
  2: {
    title: 'Your Money Machine',
    blurb: 'Track your income, build a net worth, and grow a real emergency fund.',
    color: '#0ea5e9',
  },
  3: {
    title: 'The Investing World',
    blurb: 'Stocks, mutual funds, bonds, market cycles, and building your first portfolio.',
    color: '#a855f7',
  },
  4: {
    title: 'Taxes & Advanced Money',
    blurb: 'TDS, income tax, insurance, loans, and making money work harder.',
    color: '#f59e0b',
  },
  5: {
    title: 'Mastery & Life Planning',
    blurb: 'Retirement, risk, scams, spreadsheets, AI tools, and your complete financial plan.',
    color: '#ec4899',
  },
}

const raw = JSON.parse(readFileSync(join(root, '.agents/workflow/Prompts.json'), 'utf8'))

const entries = []
const seen = new Map()

for (const item of raw) {
  const match = /topic '(.+?)' \(as part of LEVEL (\d)\)/.exec(item.content)
  if (!match) continue // prompt_index 1 is the master app brief, not a chapter
  const topic = match[1].trim()
  const level = Number(match[2])

  // The spec contains a placeholder entry titled "000" and a repeated
  // "purchasing power" chapter. Skip both so learners never see a blank lesson.
  if (!/[a-z]/i.test(topic)) continue
  const dedupeKey = `${level}:${topic.toLowerCase()}`
  if (seen.has(dedupeKey)) continue
  seen.set(dedupeKey, true)

  entries.push({ topic, level })
}

entries.sort((a, b) => a.level - b.level)

const slugify = (topic) =>
  topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)

const levels = [1, 2, 3, 4, 5].map((n) => {
  const chapters = entries.filter((e) => e.level === n)
  return {
    level: n,
    ...LEVEL_META[n],
    chapters: chapters.map((e, i) => ({
      id: `l${n}-${String(i + 1).padStart(3, '0')}`,
      slug: slugify(e.topic),
      title: e.topic.replace(/\b\w/g, (c) => c.toUpperCase()),
      promptIndex: entries.indexOf(e) + 2,
    })),
  }
})

const lines = []
lines.push('// AUTO-GENERATED from .agents/workflow/Prompts.json — do not edit by hand.')
lines.push('// Regenerate with: npm run gen:curriculum')
lines.push('')
lines.push('export type ChapterRef = {')
lines.push('  id: string')
lines.push('  slug: string')
lines.push('  title: string')
lines.push('  promptIndex: number')
lines.push('}')
lines.push('')
lines.push('export type LevelRef = {')
lines.push('  level: number')
lines.push('  title: string')
lines.push('  blurb: string')
lines.push('  color: string')
lines.push('  chapters: ChapterRef[]')
lines.push('}')
lines.push('')
lines.push('export const levels: LevelRef[] = ' + JSON.stringify(levels, null, 2))
lines.push('')

writeFileSync(join(root, 'src/data/curriculum.generated.ts'), lines.join('\n'))

console.log(
  `Wrote ${entries.length} chapters: ` +
    levels.map((l) => `L${l.level}=${l.chapters.length}`).join(', '),
)