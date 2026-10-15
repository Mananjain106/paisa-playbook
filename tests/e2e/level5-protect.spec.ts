import { expect, test, type Page } from '@playwright/test'

/**
 * Level 5, band four, batch 3 — chapters l5-091 to l5-100.
 *
 * The batch closes the protection band with the events nobody schedules — an
 * income that stops, a hospitalisation, a market that falls, a recession,
 * several debts at once — and opens the fraud band with the response itself:
 * fraud reporting, account compromise, identity theft, scam detection and the
 * sellers who are not regulated at all. Each chapter is authored with its own
 * illustration, its own interactive lab, a quiz of three explained questions and
 * its own takeaway, so this spec walks the batch and asserts all of that against
 * the real production build.
 *
 * The labs are heavy on sliders, toggles and verdicts, so they are exercised
 * through their controls rather than merely mounted, and the chapters are walked
 * in one pass to keep the renderer alive (ten long pages in parallel starve it).
 */
test.describe.configure({ mode: 'serial' })

/**
 * Open a chapter and wait for its body. Chapter content is code-split, so a cold
 * load renders the shell before the prose arrives; under a loaded machine that
 * wait can outlast the default assertion timeout, which surfaces as a missing h1
 * rather than as the slow chunk it actually is.
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
  { id: 'l5-091', title: 'Job Loss', scene: 'How long the money lasts', lab: 'Job loss runway plan', control: 'Essentials a month' },
  { id: 'l5-092', title: 'Medical Emergencies', scene: 'The cashless route and the reimbursement route', lab: 'Medical claim run', control: 'Sum insured' },
  { id: 'l5-093', title: 'Market Crashes', scene: 'What a written plan says at each stage of a fall', lab: 'Crash plan simulator', control: 'The market falls' },
  { id: 'l5-094', title: 'Recession', scene: 'How a slowdown travels from demand to a household', lab: 'Recession adjuster', control: 'Fixed costs a month' },
  { id: 'l5-095', title: 'Debt Crisis', scene: 'Debts sorted by rate and by what happens if they are ignored', lab: 'Debt triage', control: 'Credit card balance' },
  { id: 'l5-096', title: 'Fraud Response', scene: 'The first hour of a fraud', lab: 'Fraud response drill', control: 'Amount taken' },
  { id: 'l5-097', title: 'Account Compromise', scene: 'Five stages of recovery', lab: 'Account recovery lab', control: 'Amount gone' },
  { id: 'l5-098', title: 'Identity Theft', scene: 'Where a stolen identity gets spent', lab: 'Identity repair lab', control: 'A loan in your name you never took' },
  { id: 'l5-099', title: 'Financial Scam Detection', scene: 'Three gates an offer has to pass', lab: 'Scam inbox', control: 'A company paying 3% a month on a deposit, guaranteed' },
  { id: 'l5-100', title: 'Fake Gurus', scene: 'The same five questions', lab: 'Guru audit', control: 'Registered to advise, with a number you looked up' },
]

test.describe('level 5 protection batch (l5-091 to l5-100)', () => {
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
    // Fraud response: the days until you report decide the liability rung.
    await openChapter(page, 'l5-096')
    await expect(page.getByText(/Zero liability: reported within three working days/)).toBeVisible()
    const days = page.locator('label', { hasText: 'Days until you reported it' })
    for (let i = 0; i < 3; i++) await days.locator('input[type="range"]').press('ArrowRight')
    await expect(days).toContainText('5 days')
    await expect(page.getByText(/Capped at ₹25,000: reported between four and seven working days/)).toBeVisible()

    // Account recovery: auditing a linked service takes it off the live list.
    await openChapter(page, 'l5-097')
    await expect(page.getByText('5 of 5')).toBeVisible()
    await page.getByRole('button', { name: 'Live: Standing mandates and e-mandates', exact: true }).click()
    await expect(page.getByText('4 of 5')).toBeVisible()

    // Scam inbox: the verdict on a guaranteed monthly return, and why.
    await openChapter(page, 'l5-099')
    const offer = page.locator('div.rounded-xl', { hasText: 'A company paying 3% a month on a deposit, guaranteed' }).last()
    await offer.getByRole('button', { name: 'Reject' }).click()
    await expect(offer.getByText('Right.')).toBeVisible()
    await expect(offer.getByText(/40% a year compounded/)).toBeVisible()

    // Job loss: which cut the plan refuses to make. Scoped to the lab panel and
    // matched exactly, because the same words are also one of the quiz options.
    await openChapter(page, 'l5-091')
    const cutPanel = page.locator('div.rounded-xl', { hasText: 'What gets cut first' }).last()
    await cutPanel.getByRole('button', { name: 'The health cover', exact: true }).click()
    await expect(cutPanel.getByText(/Never first: an uninsured hospitalisation/)).toBeVisible()

    // Guru audit: one confirmed check out of five.
    await openChapter(page, 'l5-100')
    await page.getByRole('button', { name: 'Registered to advise, with a number you looked up', exact: true }).click()
    await expect(page.getByText('1 of 5')).toBeVisible()
  })

  test('a quiz scores a wrong answer and a right one differently', async ({ page }) => {
    await openChapter(page, 'l5-092')
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
    await openChapter(page, 'l5-091')
    await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()
    const groups = page.locator('section:has(h3:text-is("Quick check")) div.space-y-2')
    const count = await groups.count()
    expect(count, 'the chapter ships three questions').toBe(3)
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').first().click()
    await expect(page.getByText('3/3 answered')).toBeVisible()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText(/\d+\/\d+ correct/)).toBeVisible()

    // Next/prev move through the syllabus.
    await expect(page.getByRole('button', { name: /^Next: Medical Emergencies/ })).toBeVisible()
    await page.getByRole('button', { name: /^Next: Medical Emergencies/ }).click()
    await expect(page).toHaveURL(/\/chapter\/l5-092$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Medical Emergencies')

    // The score is stored, so the level page shows it on the chapter's row.
    await page.goto('/level/5')
    const row = page.getByRole('button', { name: /Job Loss/ }).first()
    await expect(row).toContainText(/Quiz \d+\/3/)
  })
})
