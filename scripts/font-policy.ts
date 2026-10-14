/**
 * Font policy check.
 *
 * Two rules, both enforced here so they cannot silently regress:
 *
 *   1. NO LIGATURES. `src/index.css` must disable liga/clig/dlig/hlig/calt, and
 *      every @font-face must set `font-variant-ligatures: none`.
 *
 *   2. NO CUSTOM FONT MAY RENDER "%" (U+0025). Recoleta's demo build ships a
 *      placeholder percent glyph, so every @font-face declares a `unicode-range`
 *      that deliberately omits U+0025. This is what actually guarantees the
 *      browser falls back to the system sans for a percent sign.
 *
 * Run with: npm run check:fonts
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const CSS_PATH = resolve(import.meta.dirname, '../src/index.css')
const css = readFileSync(CSS_PATH, 'utf8')

const failures: string[] = []

/** Pull out every @font-face block body. */
const faceBlocks = [...css.matchAll(/@font-face\s*\{([^}]*)\}/g)].map((m) => m[1])

if (faceBlocks.length === 0) {
  failures.push('No @font-face rules found in src/index.css')
}

/**
 * Does a CSS `unicode-range` value cover U+0025?
 * Handles `U+25`, `u+0025`, and inclusive `U+A-B` ranges.
 */
const coversPercent = (range: string): boolean => {
  for (const part of range.split(',')) {
    const spec = part.trim()
    if (!spec) continue
    const m = /^u\+([0-9a-f]+)(?:-([0-9a-f]+))?$/i.exec(spec)
    if (!m) continue
    const lo = parseInt(m[1], 16)
    const hi = m[2] ? parseInt(m[2], 16) : lo
    if (0x25 >= lo && 0x25 <= hi) return true
  }
  return false
}

faceBlocks.forEach((body, i) => {
  const family = /font-family:\s*([^;]+);/.exec(body)?.[1]?.trim() ?? `(face ${i + 1})`
  const label = `src/index.css @font-face[${i + 1}] (${family})`

  if (!/font-variant-ligatures:\s*none/.test(body)) {
    failures.push(`${label}: missing "font-variant-ligatures: none"`)
  }

  const range = /unicode-range:\s*([^;]+);/.exec(body)?.[1]
  if (!range) {
    failures.push(
      `${label}: missing "unicode-range". Without it the face covers "%" and Recoleta's demo percent glyph can render.`,
    )
  } else if (coversPercent(range)) {
    failures.push(
      `${label}: unicode-range includes U+0025 ("%"). Remove that range so the browser falls back to the system sans.`,
    )
  }
})

// Global ligature kill switch must still be present in @layer base.
const requiredFeatures = ['liga', 'clig', 'dlig', 'hlig', 'calt']
for (const feat of requiredFeatures) {
  const re = new RegExp(`'${feat}'\\s*0`)
  if (!re.test(css)) {
    failures.push(`src/index.css: missing font-feature-settings '${feat}' 0 in @layer base`)
  }
}
if (!/font-variant-ligatures:\s*none/.test(css)) {
  failures.push('src/index.css: missing a global "font-variant-ligatures: none" declaration')
}

if (failures.length) {
  console.error('✗ Font policy violations\n')
  for (const f of failures) console.error(`  - ${f}`)
  console.error('')
  process.exit(1)
}

console.log(`✓ Font policy OK — ${faceBlocks.length} faces exclude U+0025 ("%"), ligatures disabled`)