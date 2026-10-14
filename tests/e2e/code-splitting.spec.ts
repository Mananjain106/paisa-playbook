import { expect, test } from '@playwright/test'

/**
 * Task 4 — code splitting.
 *
 * These assertions are about what the network actually does: the home page must
 * not pull level prose or simulation code, and those chunks must arrive only
 * when a chapter that needs them is opened.
 */

test.describe('code splitting', () => {
  test('home page loads no level prose and no sim chunks', async ({ page }) => {
    const urls: string[] = []
    page.on('request', (r) => {
      if (r.url().endsWith('.js')) urls.push(r.url())
    })

    await page.goto('/')
    await expect(page.getByRole('heading', { name: /Learn money by/ })).toBeVisible()
    await page.waitForTimeout(500)

    const names = urls.map((u) => u.split('/').pop() ?? '')
    expect(names.some((n) => n.startsWith('level1-')), 'level1 prose should not load on home').toBe(false)
    expect(names.some((n) => n.startsWith('level2-')), 'level2 prose should not load on home').toBe(false)
    for (const sim of ['CompoundLab', 'SheetLab', 'BudgetBuilder', 'MarketLab', 'RupeeTen', 'EmiLab']) {
      expect(names.some((n) => n.startsWith(sim)), `${sim} should not load on home`).toBe(false)
    }
  })

  test('opening a chapter fetches only that level and its sim', async ({ page }) => {
    await page.goto('/')

    const urls: string[] = []
    page.on('request', (r) => {
      if (r.url().endsWith('.js')) urls.push(r.url())
    })

    await page.goto('/chapter/l2-037')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await page.waitForTimeout(500)

    const names = urls.map((u) => u.split('/').pop() ?? '')
    expect(names.some((n) => n.startsWith('level2-')), 'level2 prose should load').toBe(true)
    expect(names.some((n) => n.startsWith('level1-')), 'level1 prose should stay unloaded').toBe(false)
    expect(names.some((n) => n.startsWith('EmiLab')), 'the chapter sim should load').toBe(true)
    expect(names.some((n) => n.startsWith('SheetLab')), 'unrelated sims should stay unloaded').toBe(false)
  })

  test('a lazy sim mounts and renders its controls', async ({ page }) => {
    await page.goto('/chapter/l2-037')
    await expect(page.getByText('Interactive').first()).toBeVisible()
    // The EMI lab exposes range sliders; they only exist once the chunk mounts.
    await expect(page.locator('input[type="range"]').first()).toBeVisible()
  })

  test('the glossary pulls every level on demand', async ({ page }) => {
    const urls: string[] = []
    page.on('request', (r) => {
      if (r.url().endsWith('.js')) urls.push(r.url())
    })
    await page.goto('/glossary')
    await expect(page.getByText(/^\d+ terms?$/)).toBeVisible({ timeout: 15_000 })
    const names = urls.map((u) => u.split('/').pop() ?? '')
    expect(names.some((n) => n.startsWith('level1-'))).toBe(true)
    expect(names.some((n) => n.startsWith('level2-'))).toBe(true)
  })
})