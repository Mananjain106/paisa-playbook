# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: routing.spec.ts >> routing >> no #/ hashes remain in URLs
- Location: tests\e2e\routing.spec.ts:33:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Search chapters').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner:
    - generic:
      - link "Paisa Playbook, home" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [aria-hidden] [ref=e6]:
          - generic [ref=e9]: ₹
        - generic [ref=e10]:
          - generic [ref=e11]: Paisa Playbook
          - generic [ref=e12]: money, taught honestly
      - button "Open menu" [ref=e14]:
        - generic [ref=e15]: Menu
  - main [ref=e18]:
    - generic [ref=e19]:
      - generic [ref=e21]:
        - heading "Paisa Playbook — learn personal finance in India by playing with it" [level=1] [ref=e22]
        - generic [ref=e23]: Levels 1–5 are live · 508 chapters written
        - img "PAISA PLAYBOOK" [ref=e28]
        - paragraph [ref=e30]: Learn money by playing with it. Short chapters, live simulations and quizzes — grounded in how money actually works in India. Start with ₹10 and finish able to build a real financial plan.
        - generic [ref=e31]:
          - button "Start learning" [ref=e32]
          - button "Browse the syllabus" [ref=e35]
        - generic [ref=e36]:
          - generic [ref=e37]:
            - term [ref=e38]: chapters live
            - definition [ref=e39]:
              - generic [ref=e40]: "508"
              - text: chapters live
          - generic [ref=e41]:
            - term [ref=e42]: interactive labs
            - definition [ref=e43]:
              - generic [ref=e44]: "120"
              - text: interactive labs
          - generic [ref=e45]:
            - term [ref=e46]: levels live
            - definition [ref=e47]:
              - generic [ref=e48]: "5"
              - text: levels live
        - paragraph [ref=e49]: "Tip: hover the letters above, then grab one and pull."
      - generic [ref=e50]:
        - generic [ref=e51]:
          - generic [ref=e52]: Chapters done
          - generic [ref=e60]: "0"
          - generic [ref=e61]: of 508
        - generic [ref=e62]:
          - generic [ref=e63]: XP earned
          - generic [ref=e68]: "0"
          - generic [ref=e69]: 10 per correct answer
        - generic [ref=e70]:
          - generic [ref=e71]: Day streak
          - generic [ref=e75]: "1"
          - generic [ref=e76]: keep it going
        - generic [ref=e77]:
          - generic [ref=e78]:
            - generic [ref=e79]: 🎯
            - generic [ref=e80]: Quiz accuracy
          - generic [ref=e81]: 0%
          - generic [ref=e82]: all attempts
      - generic [ref=e83]:
        - generic [ref=e84]:
          - heading "The five levels" [level=2] [ref=e85]
          - paragraph [ref=e86]: Levels 1–4 are live now · 508 chapters written. Level 5 is coming next.
        - generic [ref=e87]:
          - button "1 Money Foundations 64 ch Live What money is, where it comes from, how to save it, and how to keep it safe. 0%" [ref=e88]:
            - generic [ref=e89]: "1"
            - generic [ref=e90]:
              - generic [ref=e91]:
                - heading "Money Foundations" [level=3] [ref=e92]
                - generic [ref=e93]: 64 ch
                - generic [ref=e94]: Live
              - paragraph [ref=e95]: What money is, where it comes from, how to save it, and how to keep it safe.
              - generic [ref=e96]: 0%
          - button "2 Your Money Machine 81 ch Live Track your income, build a net worth, and grow a real emergency fund. 0%" [ref=e101]:
            - generic [ref=e102]: "2"
            - generic [ref=e103]:
              - generic [ref=e104]:
                - heading "Your Money Machine" [level=3] [ref=e105]
                - generic [ref=e106]: 81 ch
                - generic [ref=e107]: Live
              - paragraph [ref=e108]: Track your income, build a net worth, and grow a real emergency fund.
              - generic [ref=e109]: 0%
          - button "3 The Investing World 94 ch Live Stocks, mutual funds, bonds, market cycles, and building your first portfolio. 0%" [ref=e114]:
            - generic [ref=e115]: "3"
            - generic [ref=e116]:
              - generic [ref=e117]:
                - heading "The Investing World" [level=3] [ref=e118]
                - generic [ref=e119]: 94 ch
                - generic [ref=e120]: Live
              - paragraph [ref=e121]: Stocks, mutual funds, bonds, market cycles, and building your first portfolio.
              - generic [ref=e122]: 0%
          - button "4 Taxes & Advanced Money 108 ch Live TDS, income tax, insurance, loans, and making money work harder. 0%" [ref=e127]:
            - generic [ref=e128]: "4"
            - generic [ref=e129]:
              - generic [ref=e130]:
                - heading "Taxes & Advanced Money" [level=3] [ref=e131]
                - generic [ref=e132]: 108 ch
                - generic [ref=e133]: Live
              - paragraph [ref=e134]: TDS, income tax, insurance, loans, and making money work harder.
              - generic [ref=e135]: 0%
          - button "5 Mastery & Life Planning 161 ch Live Retirement, risk, scams, spreadsheets, AI tools, and your complete financial plan. 0%" [ref=e140]:
            - generic [ref=e141]: "5"
            - generic [ref=e142]:
              - generic [ref=e143]:
                - heading "Mastery & Life Planning" [level=3] [ref=e144]
                - generic [ref=e145]: 161 ch
                - generic [ref=e146]: Live
              - paragraph [ref=e147]: Retirement, risk, scams, spreadsheets, AI tools, and your complete financial plan.
              - generic [ref=e148]: 0%
  - contentinfo [ref=e153]:
    - generic [ref=e154]:
      - generic [ref=e155]: Paisa Playbook — an educational app, not financial advice. Figures and rates are illustrative.
      - generic [ref=e156]: 0 chapters completed
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
  15 |       await expect(page.getByRole('heading', { level: 1 })).toContainText(heading)
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
> 35 |     await page.getByLabel('Search chapters').first().fill('salary')
     |                                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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