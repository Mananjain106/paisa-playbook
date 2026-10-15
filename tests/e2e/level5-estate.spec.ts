import { expect, test, type Page } from '@playwright/test'

/**
 * Level 5, band four, batch 1 — chapters l5-071 to l5-080.
 *
 * These ten chapters cover the estate and the family: estate planning,
 * nominations, beneficiaries, wills, inheritance, succession, joint holdings,
 * household money, marriage and supporting parents. Each one is authored with
 * its own illustration, its own interactive lab, a quiz of three explained
 * questions and its own takeaway, so this spec walks the batch and asserts all
 * of that against the real production build.
 *
 * The batch is heavy on sliders and choices, so the labs are exercised through
 * their controls rather than merely mounted, and the chapters are walked in one
 * pass to keep the renderer alive (ten long pages in parallel starve it).
 */
test.describe.configure({ mode: 'serial' })

/**
 * Open a chapter and wait for its body. Chapter content is code-split, so a cold
 * load renders the shell before the prose arrives; under a loaded machine that
 * wait can outlast the default assertion timeout, which used to surface as a
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
  { id: 'l5-071', title: 'Estate Planning', scene: 'route each one takes after a death', lab: 'Estate planning lab', control: 'Property and land' },
  { id: 'l5-072', title: 'Nominees', scene: 'Eight places where money sits', lab: 'Nomination audit', control: 'Current salary account' },
  { id: 'l5-073', title: 'Beneficiaries', scene: 'One estate branching into the shares it is divided into', lab: 'Beneficiary designer', control: 'A will directs the shares' },
  { id: 'l5-074', title: 'Wills', scene: 'The seven parts a will is assembled from', lab: 'Will builder', control: 'Testator identified' },
  { id: 'l5-075', title: 'Inheritance', scene: 'Four steps in the right order', lab: 'Inheritance processor', control: 'Inventory written first' },
  { id: 'l5-076', title: 'Succession', scene: 'Ownership, control and the knowledge of how the business actually runs', lab: 'Succession planner', control: 'Will addresses the business interest' },
  { id: 'l5-077', title: 'Joint Ownership', scene: 'Five ways to hold something, and five different endings', lab: 'Joint holding chooser', control: 'Either or survivor' },
  { id: 'l5-078', title: 'Family Finance', scene: 'Three places the money lives and four things to agree', lab: 'Household money setup', control: 'A joint account for shared costs' },
  { id: 'l5-079', title: 'Marriage Finances', scene: 'What changes on marriage and what does not', lab: 'Marriage finance planner', control: 'Streedhan and own property tracked' },
  { id: 'l5-080', title: 'Supporting Parents', scene: 'Five layers', lab: 'Parent support budget', control: 'Age of the elder parent' },
]

test.describe('level 5 estate batch (l5-071 to l5-080)', () => {
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
    // Nomination audit: unchecking an account changes what the audit reports.
    await openChapter(page, 'l5-072')
    // Three of the eight accounts start out nominated, so five have no name on them.
    await expect(page.getByText('5 of 8 accounts have no nomination').first()).toBeVisible()
    await page.getByRole('button', { name: /Current salary account/ }).click()
    await expect(page.getByText('6 of 8 accounts have no nomination').first()).toBeVisible()

    // Joint holding chooser: the mode decides what happens on a death.
    await openChapter(page, 'l5-077')
    await expect(page.getByText('An account operated jointly needs both signatures').first()).toHaveCount(0)
    await page.getByRole('button', { name: 'Operated jointly by both' }).click()
    await expect(page.getByText('An account operated jointly needs both signatures').first()).toBeVisible()
    await page.getByRole('button', { name: /Either or survivor$/ }).click()
    await expect(page.getByText('An account operated jointly needs both signatures').first()).toHaveCount(0)

    // Parent care budget: moving a slider changes the number it reports.
    await openChapter(page, 'l5-080')
    const support = page.locator('label', { hasText: 'Monthly support' })
    await expect(support).toContainText('₹15,000')
    await support.locator('input[type="range"]').press('ArrowRight')
    await expect(support).toContainText('₹16,000')
  })

  test('a quiz scores a wrong answer and a right one differently', async ({ page }) => {
    await openChapter(page, 'l5-071')
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
    const correctIndexes = [1, 2, 1]
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').nth(correctIndexes[i]).click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText('3/3 correct')).toBeVisible()
    await expect(page.getByText(/Perfect score/)).toBeVisible()
  })

  test('quiz progress is recorded and chapter navigation works', async ({ page }) => {
    await openChapter(page, 'l5-072')
    // Wait for the quiz before counting: chapter content is code-split, so on a
    // cold load the questions do not exist yet and a bare count() would read 0.
    await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()
    const groups = page.locator('section:has(h3:text-is("Quick check")) div.space-y-2')
    const count = await groups.count()
    expect(count, 'the chapter ships three questions').toBe(3)
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').first().click()
    await expect(page.getByText('3/3 answered')).toBeVisible()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText(/\d+\/\d+ correct/)).toBeVisible()

    // Next/prev move through the syllabus.
    await expect(page.getByRole('button', { name: /^Next: Beneficiaries/ })).toBeVisible()
    await page.getByRole('button', { name: /^Next: Beneficiaries/ }).click()
    await expect(page).toHaveURL(/\/chapter\/l5-073$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Beneficiaries')

    // The score is stored, so the level page shows it on the chapter's row.
    await page.goto('/level/5')
    const row = page.getByRole('button', { name: /Nominees/ }).first()
    await expect(row).toContainText(/Quiz \d+\/3/)
  })
})
