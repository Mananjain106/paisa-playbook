import { expect, test } from '@playwright/test'

/** Task 5 — react-router with clean URLs. */
test.describe('routing', () => {
  test('deep links work on a cold load', async ({ page }) => {
    for (const [path, heading] of [
      ['/', /Learn money by/],
      ['/level/2', /Your Money Machine/],
      ['/chapter/l1-001', /What Is Money/],
      ['/chapter/l2-037', /EMI/],
      ['/glossary', /Glossary/],
    ] as const) {
      const res = await page.goto(path)
      expect(res?.status(), `${path} should be served by the SPA fallback`).toBe(200)
      await expect(page.getByRole('heading', { level: 1 })).toContainText(heading)
    }
  })

  test('client-side navigation does not reload the document', async ({ page }) => {
    await page.goto('/')
    // Tag the window; a full page load would drop the marker.
    await page.evaluate(() => {
      ;(window as unknown as { __spa: boolean }).__spa = true
    })

    await page.getByRole('button', { name: /Browse the syllabus/ }).click()
    await expect(page).toHaveURL(/\/level\/1$/)

    const survived = await page.evaluate(() => (window as unknown as { __spa?: boolean }).__spa)
    expect(survived, 'navigation should not remount the document').toBe(true)
  })

  test('no #/ hashes remain in URLs', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('Search chapters').first().fill('salary')
    await page.locator('ul li button').first().click()
    await expect(page).toHaveURL(/\/chapter\/l\d-\d+$/)
    expect(page.url()).not.toContain('#')
  })

  test('unknown routes show the not-found page', async ({ page }) => {
    await page.goto('/definitely/not/a/route')
    await expect(page.getByRole('heading', { name: /does not exist/ })).toBeVisible()
    await page.getByRole('button', { name: /Search chapters/ }).click()
    await expect(page).toHaveURL(/\/search$/)
  })

  test('chapter prev/next navigation stays in the syllabus', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    const next = page.getByRole('button', { name: /^Next:/ })
    await expect(next).toBeVisible()
    const before = page.url()
    await next.click()
    await expect(page).not.toHaveURL(before)
    await expect(page).toHaveURL(/\/chapter\/l1-\d+/)
  })

  test('unwritten chapters render the coming-soon page', async ({ page }) => {
    // l5-001 is written; the level ships in batches, so use a chapter that is
    // still in the plan (the capstone, l5-161) as the unwritten example.
    await page.goto('/chapter/l5-161')
    await expect(page.getByText('This chapter is queued for writing.')).toBeVisible()
  })
})