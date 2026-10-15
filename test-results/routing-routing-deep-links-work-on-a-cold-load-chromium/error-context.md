# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: routing.spec.ts >> routing >> deep links work on a cold load
- Location: tests\e2e\routing.spec.ts:5:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('heading', { level: 1 })
Expected pattern: /Learn money by/
Received string:  "Paisa Playbook — learn personal finance in India by playing with it"
Timeout: 5000ms

Call log:
  - Expect "toContainText" getByRole('heading', { level: 1 }) with timeout 5000ms
  - waiting for getByRole('heading', { level: 1 })
    10 × locator resolved to <h1 class="sr-only">Paisa Playbook — learn personal finance in India …</h1>
       - unexpected value "Paisa Playbook — learn personal finance in India by playing with it"

```

```yaml
- heading "Paisa Playbook — learn personal finance in India by playing with it" [level=1]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | 
  3  | /** Task 5 — react-router with clean URLs. */
  4  | test.describe('routing', () => {
  5  |   test('deep links work on a cold load', async ({ page }) => {
  6  |     for (const [path, heading] of [
  7  |       ['/', /Learn money by/],
  8  |       ['/level/2', /Your Money Machine/],
  9  |       ['/chapter/l1-001', /What Is Money/],
  10 |       ['/chapter/l2-037', /EMI/],
  11 |       ['/glossary', /Glossary/],
  12 |     ] as const) {
  13 |       const res = await page.goto(path)
  14 |       expect(res?.status(), `${path} should be served by the SPA fallback`).toBe(200)
> 15 |       await expect(page.getByRole('heading', { level: 1 })).toContainText(heading)
     |                                                             ^ Error: expect(locator).toContainText(expected) failed
  16 |     }
  17 |   })
  18 | 
  19 |   test('client-side navigation does not reload the document', async ({ page }) => {
  20 |     await page.goto('/')
  21 |     // Tag the window; a full page load would drop the marker.
  22 |     await page.evaluate(() => {
  23 |       ;(window as unknown as { __spa: boolean }).__spa = true
  24 |     })
  25 | 
  26 |     await page.getByRole('button', { name: /Browse the syllabus/ }).click()
  27 |     await expect(page).toHaveURL(/\/level\/1$/)
  28 | 
  29 |     const survived = await page.evaluate(() => (window as unknown as { __spa?: boolean }).__spa)
  30 |     expect(survived, 'navigation should not remount the document').toBe(true)
  31 |   })
  32 | 
  33 |   test('no #/ hashes remain in URLs', async ({ page }) => {
  34 |     await page.goto('/')
  35 |     await page.getByLabel('Search chapters').first().fill('salary')
  36 |     await page.locator('ul li button').first().click()
  37 |     await expect(page).toHaveURL(/\/chapter\/l\d-\d+$/)
  38 |     expect(page.url()).not.toContain('#')
  39 |   })
  40 | 
  41 |   test('unknown routes show the not-found page', async ({ page }) => {
  42 |     await page.goto('/definitely/not/a/route')
  43 |     await expect(page.getByRole('heading', { name: /does not exist/ })).toBeVisible()
  44 |     await page.getByRole('button', { name: /Search chapters/ }).click()
  45 |     await expect(page).toHaveURL(/\/search$/)
  46 |   })
  47 | 
  48 |   test('chapter prev/next navigation stays in the syllabus', async ({ page }) => {
  49 |     await page.goto('/chapter/l1-001')
  50 |     const next = page.getByRole('button', { name: /^Next:/ })
  51 |     await expect(next).toBeVisible()
  52 |     const before = page.url()
  53 |     await next.click()
  54 |     await expect(page).not.toHaveURL(before)
  55 |     await expect(page).toHaveURL(/\/chapter\/l1-\d+/)
  56 |   })
  57 | 
  58 |   test('unwritten chapters render the coming-soon page', async ({ page }) => {
  59 |     // l5-001 is written; the level ships in batches, so use a chapter that is
  60 |     // still in the plan (the capstone, l5-161) as the unwritten example.
  61 |     await page.goto('/chapter/l5-161')
  62 |     await expect(page.getByText('This chapter is queued for writing.')).toBeVisible()
  63 |   })
  64 | })
```