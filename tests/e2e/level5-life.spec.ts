import { expect, test, type Page } from '@playwright/test'

/**
 * Level 5, band four, batch 2 — chapters l5-081 to l5-090.
 *
 * These ten chapters cover the household's own decisions: who depends on the
 * income, what education costs at the day of admission, the purchases people
 * make with a loan (a major item, a house, a vehicle), renting against buying,
 * new against used, cash against financing, and the order to work a shortfall
 * in. Each one is authored with its own illustration, its own interactive lab,
 * a quiz of three explained questions and its own takeaway, so this spec walks
 * the batch and asserts all of that against the real production build.
 *
 * The labs are heavy on sliders and choices, so they are exercised through their
 * controls rather than merely mounted, and the chapters are walked in one pass
 * to keep the renderer alive (ten long pages in parallel starve it).
 */
test.describe.configure({ mode: 'serial' })

/**
 * Open a chapter and wait for its body. Chapter content is code-split, so on a
 * cold load the page renders before the prose arrives; under a loaded machine
 * that wait can exceed the default assertion timeout, which used to show up as a
 * missing h1 rather than as the slow chunk it actually was.
 */
async function openChapter(page: Page, id: string) {
  await page.goto(`/chapter/${id}`)
  await page.getByText('Takeaway').first().waitFor({ timeout: 60_000 })
}

type BatchChapter = {
  id: string
  title: string
  /** A distinctive fragment of this chapter's illustration caption. */
  scene: string
  /** The title of the interactive lab the chapter declares. */
  lab: string
  /** A control the lab must show. */
  control: string
}

const BATCH: BatchChapter[] = [
  { id: 'l5-081', title: 'Dependents', scene: 'Every person who depends on the income', lab: 'Dependant planner', control: 'A spouse' },
  { id: 'l5-082', title: "Children's Education Planning", scene: 'The same course priced at four different admission dates', lab: 'Education goal planner', control: 'What the course costs today' },
  { id: 'l5-083', title: 'Major Purchases', scene: 'One price tag, and the five places the money actually goes', lab: 'Major purchase analyser', control: 'Price of the thing' },
  { id: 'l5-084', title: 'House Purchase', scene: 'Every layer between the asking price and the loan', lab: 'House affordability lab', control: 'Agreement value of the house' },
  { id: 'l5-085', title: 'Vehicle Purchase', scene: 'Resale value falling year by year', lab: 'Vehicle cost of ownership', control: 'Ex-showroom price' },
  { id: 'l5-086', title: 'Education Decisions', scene: 'The cost of a qualification against the extra income it buys', lab: 'Education return lab', control: 'Engineering degree' },
  { id: 'l5-087', title: 'Rent Vs Buy', scene: 'Rent plus the invested down payment', lab: 'Rent versus buy model', control: 'Rent a month' },
  { id: 'l5-088', title: 'New Vs Used', scene: 'Two depreciation curves for the same vehicle', lab: 'New versus used lab', control: 'Price of the used one' },
  { id: 'l5-089', title: 'Cash Vs Financing', scene: 'The loan rate on one side, the after-tax return on the cash on the other', lab: 'Cash versus financing lab', control: 'Pay cash' },
  { id: 'l5-090', title: 'Financial Crisis Management', scene: 'The order to work a financial crisis in', lab: 'Crisis drill', control: 'Essentials a month' },
]

test.describe('level 5 life batch (l5-081 to l5-090)', () => {
  test('every chapter renders its title, illustration, lab and quiz', async ({ page }) => {
    test.setTimeout(180_000)
    page.setDefaultTimeout(15_000)

    const errors: string[] = []
    const failedRequests: string[] = []
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(`${page.url()} :: ${m.text()}`)
    })
    page.on('pageerror', (e) => errors.push(`${page.url()} :: ${e.message}`))
    page.on('requestfailed', (r) => failedRequests.push(`${r.url()} :: ${r.failure()?.errorText}`))

    for (const c of BATCH) {
      await openChapter(page, c.id)

      // Authored, not the "queued for writing" stub, and titled per the syllabus.
      await expect(page.getByRole('heading', { level: 1 }), `${c.id} title`).toContainText(c.title)
      await expect(page.getByText('queued for writing'), `${c.id} is authored`).toHaveCount(0)

      // Its own illustration, identified by the caption that belongs to it.
      const caption = page.locator('figure figcaption', { hasText: c.scene })
      await expect(caption, `${c.id} illustration caption`).toBeVisible()
      await expect(page.locator('figure svg[role="img"]').first(), `${c.id} illustration svg`).toBeVisible()

      // Its own lab, with the controls it declares.
      await expect(page.getByText('Interactive', { exact: true }), `${c.id} lab marker`).toBeVisible()
      await expect(page.getByRole('heading', { name: c.lab }), `${c.id} lab title`).toBeVisible()
      await expect(page.getByText(c.control).first(), `${c.id} lab control`).toBeVisible()

      // A quiz that can be answered.
      await expect(page.getByRole('heading', { name: 'Quick check' }), `${c.id} quiz`).toBeVisible()
      await expect(page.getByRole('button', { name: 'Check answers' }), `${c.id} quiz submit`).toBeVisible()

      // The takeaway and the "last verified" source table the level requires.
      await expect(page.getByText('Takeaway'), `${c.id} takeaway`).toBeVisible()
      await expect(page.getByText(/Last verified/).first(), `${c.id} verification date`).toBeVisible()
    }

    expect(errors, `console errors:\n${errors.join('\n')}`).toEqual([])
    expect(failedRequests, `failed requests:\n${failedRequests.join('\n')}`).toEqual([])
  })

  test('the labs react to their controls', async ({ page }) => {
    // Dependant planner: adding a person you support changes the cover required.
    await openChapter(page, 'l5-081')
    await expect(page.getByText('₹15.60L').first(), 'two dependants at the start').toBeVisible()
    await page.getByRole('button', { name: /Parents you support/ }).click()
    await expect(page.getByText('₹18.00L').first(), 'three dependants after the toggle').toBeVisible()

    // Education goal: the years to admission drive the cost at admission.
    await openChapter(page, 'l5-082')
    const years = page.locator('label', { hasText: 'Years to admission' })
    await expect(years).toContainText('12 years')
    await years.locator('input[type="range"]').press('ArrowRight')
    await expect(years).toContainText('13 years')

    // Rent versus buy: moving the rent changes the model.
    await openChapter(page, 'l5-087')
    const rent = page.locator('label', { hasText: 'Rent a month' })
    await expect(rent).toContainText('₹30,000')
    await rent.locator('input[type="range"]').press('ArrowRight')
    await expect(rent).toContainText('₹31,000')

    // New versus used: the holding period changes both numbers it reports.
    await openChapter(page, 'l5-088')
    await expect(page.getByText('Cost of new, over 5 years')).toBeVisible()
    await page.getByRole('button', { name: '8 years', exact: true }).click()
    await expect(page.getByText('Cost of new, over 8 years')).toBeVisible()

    // Crisis drill: the first thing you sell decides whether the order was right.
    await openChapter(page, 'l5-090')
    await page.getByRole('button', { name: 'Long-term equity, at whatever price' }).click()
    await expect(page.getByText('Not first.')).toBeVisible()
    await expect(page.getByText(/Selling growth assets in a falling market/)).toBeVisible()
    await page.getByRole('button', { name: 'Cash and liquid funds first' }).click()
    await expect(page.getByText('Right order.')).toBeVisible()
  })

  test('a quiz scores a wrong answer and a right one differently', async ({ page }) => {
    await openChapter(page, 'l5-081')
    await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()

    // Every question is answered with its first option, which is wrong in all
    // three, so the score must be zero and the retry prompt must appear.
    const groups = page.locator('section:has(h3:text-is("Quick check")) div.space-y-2')
    const count = await groups.count()
    expect(count, 'the chapter ships three questions').toBe(3)
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').first().click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText('0/3 correct')).toBeVisible()
    await expect(page.getByText(/Re-read the highlighted explanations/)).toBeVisible()

    // The correct options in this chapter's three questions.
    await page.getByRole('button', { name: 'Try again' }).click()
    const correctIndexes = [1, 2, 2]
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').nth(correctIndexes[i]).click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText('3/3 correct')).toBeVisible()
    await expect(page.getByText(/Perfect score/)).toBeVisible()
  })

  test('quiz progress is recorded and chapter navigation works', async ({ page }) => {
    await openChapter(page, 'l5-082')
    // Wait for the quiz before counting: the questions exist once the body has
    // rendered, and a bare count() would read 0 on a cold load.
    await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()
    const groups = page.locator('section:has(h3:text-is("Quick check")) div.space-y-2')
    const count = await groups.count()
    expect(count, 'the chapter ships three questions').toBe(3)
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').first().click()
    await expect(page.getByText('3/3 answered')).toBeVisible()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText(/\d+\/\d+ correct/)).toBeVisible()

    // Next/prev move through the syllabus.
    await expect(page.getByRole('button', { name: /^Next: Major Purchases/ })).toBeVisible()
    await page.getByRole('button', { name: /^Next: Major Purchases/ }).click()
    await expect(page).toHaveURL(/\/chapter\/l5-083$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Major Purchases')

    // The score is stored, so the level page shows it on the chapter's row.
    await page.goto('/level/5')
    const row = page.getByRole('button', { name: /Children/ }).first()
    await expect(row).toContainText(/Quiz \d+\/3/)
  })
})
