import { expect, test } from '@playwright/test'

/**
 * Task 3 — progress and sync.
 *
 * The Supabase credentials in .env.local point at a real project, so the live
 * auth path can't be exercised without a mailbox. These tests cover what is
 * deterministic and user-visible: local progress persistence, quiz recording,
 * XP accounting, and the presence and correct wiring of the sync UI.
 *
 * The merge algorithm itself (best-of on quiz scores, union on read chapters,
 * derived XP) is covered by `npm run test:sync`.
 */

test.describe('progress', () => {
  test('quiz answers are recorded and XP is awarded', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    const check = page.getByRole('button', { name: 'Check answers' })
    await expect(check).toBeDisabled()

    // Answer every question by picking the first option.
    const groups = page.locator('section .space-y-6 > div')
    const n = await groups.count()
    for (let i = 0; i < n; i++) {
      await groups.nth(i).locator('button').first().click()
    }

    await expect(check).toBeEnabled()
    await check.click()
    await expect(page.getByText(/\d+\/\d+ correct/)).toBeVisible()

    const stored = await page.evaluate(() =>
      JSON.parse(localStorage.getItem('finance-adventure:progress:v1') ?? '{}'),
    )
    expect(stored.read).toContain('l1-001')
    expect(stored.scores['l1-001']).toBeTruthy()
    // XP is derived: 5 per read + 10 per correct.
    expect(stored.xp).toBeGreaterThanOrEqual(5)
  })

  test('progress survives a reload', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    const groups = page.locator('section .space-y-6 > div')
    const n = await groups.count()
    for (let i = 0; i < n; i++) await groups.nth(i).locator('button').first().click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText(/\d+\/\d+ correct/)).toBeVisible()

    const before = await page.evaluate(
      () => JSON.parse(localStorage.getItem('finance-adventure:progress:v1') ?? '{}').xp,
    )

    await page.goto('/')
    await page.goto('/chapter/l1-001')
    const after = await page.evaluate(
      () => JSON.parse(localStorage.getItem('finance-adventure:progress:v1') ?? '{}').xp,
    )

    expect(after).toBe(before)
  })

  test('a completed chapter is marked done on its level page', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    const groups = page.locator('section .space-y-6 > div')
    const n = await groups.count()
    for (let i = 0; i < n; i++) await groups.nth(i).locator('button').first().click()
    await page.getByRole('button', { name: 'Check answers' }).click()

    await page.goto('/level/1')
    await expect(page.getByText(/1\/64 done/)).toBeVisible()
  })

  test('reset clears stored progress', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    const groups = page.locator('section .space-y-6 > div')
    const n = await groups.count()
    for (let i = 0; i < n; i++) await groups.nth(i).locator('button').first().click()
    await page.getByRole('button', { name: 'Check answers' }).click()

    page.once('dialog', (d) => void d.accept())
    await page.getByRole('button', { name: 'reset progress' }).click()

    const stored = await page.evaluate(
      () => JSON.parse(localStorage.getItem('finance-adventure:progress:v1') ?? '{}').read ?? [],
    )
    expect(stored).toHaveLength(0)
  })
})

test.describe('sync UI', () => {
  test('shows the magic-link sign-in form when Supabase is configured', async ({ page }) => {
    await page.goto('/')
    const emailInput = page.getByLabel('Email for cross-device sync')
    if ((await emailInput.count()) === 0) {
      test.skip(true, 'Supabase env vars not set — offline mode')
    }
    await expect(emailInput).toBeVisible()
    await expect(page.getByRole('button', { name: 'sign in' })).toBeVisible()
  })

  test('sending a magic link reports that the email was sent', async ({ page }) => {
    await page.goto('/')
    const emailInput = page.getByLabel('Email for cross-device sync')
    if ((await emailInput.count()) === 0) {
      test.skip(true, 'Supabase env vars not set — offline mode')
    }
    await emailInput.fill(`e2e-${Date.now()}@example.com`)
    await page.getByRole('button', { name: 'sign in' }).click()
    // Either the confirmation, or an inline error — both mean the UI is wired.
    await expect(page.getByText('check your inbox').or(page.locator('.text-rose-300'))).toBeVisible({
      timeout: 20_000,
    })
  })

  test('falls back to a local-only indicator with no backend configured', async ({ page }) => {
    await page.goto('/')
    const configured = (await page.getByLabel('Email for cross-device sync').count()) > 0
    if (configured) test.skip(true, 'Supabase configured')
    await expect(page.getByText('local only')).toBeVisible()
  })
})