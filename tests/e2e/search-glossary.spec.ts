import { expect, test } from '@playwright/test'

/** Task 2 — searchable glossary and chapter search. */
test.describe('glossary', () => {
  test('lists terms and filters them', async ({ page }) => {
    await page.goto('/glossary')
    await expect(page.getByRole('heading', { name: 'Glossary', level: 1 })).toBeVisible()

    // Seeds load, so the term count line appears with no query.
    await expect(page.getByText(/^\d+ terms?$/)).toBeVisible({ timeout: 15_000 })

    const before = await page.locator('dt').count()
    expect(before).toBeGreaterThan(50)

    await page.getByLabel('Filter glossary terms').fill('emi')
    await expect(page.locator('dt').first()).toHaveText('EMI')
    await expect(page.getByText(/matching “emi”/)).toBeVisible()
  })

  test('letter navigation jumps to a section', async ({ page }) => {
    await page.goto('/glossary')
    await expect(page.getByText(/^\d+ terms?$/)).toBeVisible({ timeout: 15_000 })
    await page.getByRole('link', { name: 'E', exact: true }).click()
    await expect(page.locator('#g-E')).toBeVisible()
  })

  test('cross-links from a chapter to the glossary and back', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    await page.getByRole('link', { name: 'Glossary' }).click()
    await expect(page.getByRole('heading', { name: 'Glossary', level: 1 })).toBeVisible()
  })
})

test.describe('search', () => {
  test('header search finds a chapter by title and navigates to it', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('Search chapters').first().fill('compound')

    const first = page.locator('ul li button').first()
    await expect(first).toBeVisible()
    await first.click()

    await expect(page).toHaveURL(/\/chapter\/l\d-\d+/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('search page returns results with level filters', async ({ page }) => {
    await page.goto('/search?q=salary')
    await expect(page.getByRole('heading', { name: 'Search', level: 1 })).toBeVisible()

    const links = page.locator('ul li a[href^="/chapter/"]')
    await expect(links.first()).toBeVisible({ timeout: 15_000 })
    const count = await links.count()
    expect(count).toBeGreaterThan(1)

    // A "Level 1" filter button should exist once results are in.
    const levelFilter = page.getByRole('button', { name: /Level 1 \(\d+\)/ })
    await expect(levelFilter).toBeVisible()
    await levelFilter.click()
    await expect(page.getByText(/^Level 1$/).first()).toBeVisible()
  })

  test('shows a friendly empty state for a nonsense query', async ({ page }) => {
    await page.goto('/search?q=zzzqqxnotathing')
    await expect(page.getByText(/Nothing matched/)).toBeVisible({ timeout: 15_000 })
  })

  test('search covers chapters beyond the written content by title', async ({ page }) => {
    // Every syllabus title is searchable from day one. Level 5 ships in batches,
    // so a chapter still in the plan is findable and marked "coming soon";
    // l5-101 "Pump-And-Dump Schemes" is one of those.
    await page.goto('/search?q=Pump-And-Dump')
    const soon = page.locator('ul li a', { hasText: 'coming soon' })
    await expect(soon.first()).toBeVisible({ timeout: 15_000 })
  })
})