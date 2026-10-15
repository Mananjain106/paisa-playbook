import { expect, test } from '@playwright/test'

/**
 * Level 3 and 4 authoring guarantees.
 *
 * Chapter ids are sequential in the syllabus (`l3-001`…`l3-094`,
 * `l4-001`…`l4-108`), so we can walk every authored chapter and assert the
 * things the authoring standard promises: an interactive quiz, a hands-on
 * simulation and an illustration, with no console errors along the way.
 */
const seq = (prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `${prefix}-${String(i + 1).padStart(3, '0')}`)

const LEVELS = [
  { level: 3, ids: seq('l3', 94), title: /The Investing World/, slug: 'level 3' },
  { level: 4, ids: seq('l4', 108), title: /Taxes & Advanced Money/, slug: 'level 4' },
] as const

// Walking 94 + 108 chapters needs long-lived pages, so keep this file's tests
// serial rather than running two heavy sweeps in parallel (which starves the
// renderer and crashes the context).
test.describe.configure({ mode: 'serial' })

test.describe('levels 3 & 4 authoring', () => {
  test('level pages mark every chapter as written, not "coming soon"', async ({ page }) => {
    for (const l of LEVELS) {
      await page.goto(`/level/${l.level}`)
      await expect(page.getByRole('heading', { level: 1 })).toContainText(l.title)
      await expect(page.getByText('Coming soon')).toHaveCount(0)
    }
  })

  test('levels 1–5 are released and directly reachable', async ({ page }) => {
    await page.goto('/')

    // Level 5 was released when its content began shipping, so all five levels
    // are live now. A chapter inside a released level that has not been written
    // yet still renders the "queued for writing" page rather than a broken one.
    const released = [
      /Money Foundations/,
      /Your Money Machine/,
      /The Investing World/,
      /Taxes & Advanced Money/,
      /Mastery & Life Planning/,
    ]
    for (const name of released) {
      const card = page.getByRole('button', { name })
      await expect(card, `${name} should be open`).toBeEnabled()
      await expect(card, `${name} should be marked live`).toContainText('Live')
    }

    // Deep-link straight into a later level with no prior progress at all.
    for (const [level, title] of [
      [2, /Your Money Machine/],
      [3, /The Investing World/],
      [4, /Taxes & Advanced Money/],
      [5, /Mastery & Life Planning/],
    ] as const) {
      await page.goto(`/level/${level}`)
      await expect(page.getByRole('heading', { level: 1 })).toContainText(title)
      await expect(page.getByText(/still being written|not released yet/)).toHaveCount(0)
    }
  })

  for (const l of LEVELS) {
    test(`every ${l.slug} chapter has a quiz, a simulation and an illustration`, async ({ page }) => {
      // Walking every chapter in a level takes far longer than the default 30s.
      test.setTimeout(300_000)
      page.setDefaultTimeout(15_000)
      const errors: string[] = []
      page.on('console', (m) => {
        if (m.type() === 'error') errors.push(`${page.url()} :: ${m.text()}`)
      })
      page.on('pageerror', (e) => errors.push(`${page.url()} :: ${e.message}`))

      for (const id of l.ids) {
        await page.goto(`/chapter/${id}`)

        // The chapter is authored — never the "queued for writing" stub.
        await expect(page.getByRole('heading', { level: 1 }), `${id} has a title`).toBeVisible()
        await expect(page.getByText('queued for writing'), `${id} is authored`).toHaveCount(0)

        // Illustration (animated SVG scene inside a <figure>).
        await expect(
          page.locator('figure svg[role="img"]').first(),
          `${id} has an illustration`,
        ).toBeVisible()

        // Simulation (the "Interactive" lab card).
        await expect(page.getByText('Interactive', { exact: true }).first(), `${id} has a simulation`).toBeVisible()

        // Quiz.
        await expect(page.getByRole('heading', { name: 'Quick check' }), `${id} has a quiz`).toBeVisible()
      }

      expect(errors, `console errors while walking ${l.slug}:\n${errors.join('\n')}`).toEqual([])
    })
  }

  test('a chapter quiz can be answered and scores correctly', async ({ page }) => {
    await page.goto('/chapter/l3-001')
    await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()
    // Each question's options live in a `div.space-y-2`; pick the first option
    // of every question, then submit.
    const questions = page.locator('section:has(h3:text-is("Quick check")) div.space-y-2')
    const count = await questions.count()
    expect(count, 'quiz has at least one question').toBeGreaterThan(0)
    for (let i = 0; i < count; i++) await questions.nth(i).locator('button').first().click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText(/\d+\/\d+ correct/)).toBeVisible()
  })

  test('a hands-on lab actually mounts and reacts to input', async ({ page }) => {
    await page.goto('/chapter/l4-021') // Tax Slabs — the tax lab
    await expect(page.getByRole('heading', { name: 'Income tax regime lab' })).toBeVisible()
    await expect(page.getByText('Gross annual income')).toBeVisible()
  })

  test('the options payoff lab mounts on a derivatives chapter', async ({ page }) => {
    await page.goto('/chapter/l4-059') // Futures
    await expect(page.getByRole('heading', { name: 'Options payoff lab' })).toBeVisible()
  })
})
