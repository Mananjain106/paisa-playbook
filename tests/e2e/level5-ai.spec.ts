import { expect, test, type Page } from '@playwright/test'

/**
 * Level 5, band five — chapters l5-114 to l5-122, the AI tools band.
 *
 * The band teaches a tool rather than a product: what an assistant is good for,
 * where it fails, and the check that has to happen before an output is used.
 * Each chapter is authored with its own illustration, its own interactive lab,
 * four explained quiz questions and its own takeaway, so this spec walks the
 * batch and asserts all of that against the real production build.
 *
 * The labs are all decision-and-verdict labs, so they are exercised through
 * their own buttons rather than merely mounted, and the chapters are walked in
 * one pass to keep the renderer alive (nine long pages in parallel starve it).
 */
test.describe.configure({ mode: 'serial' })

/** Open a chapter and wait for its body, which is code-split per level. */
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
  {
    id: 'l5-114',
    title: 'AI-Assisted Finance',
    scene: 'it may draft anything, and it may decide nothing',
    lab: 'Task router',
    control: 'Let the assistant draft it — no check needed',
  },
  {
    id: 'l5-115',
    title: 'AI For Budgeting',
    scene: 'The loop only closes when the categorised total is reconciled',
    lab: 'Budget review lab',
    control: 'Before you paste: what goes?',
  },
  {
    id: 'l5-116',
    title: 'AI For Spreadsheet Creation',
    scene: 'It is correct when it survives the rows you designed to break it',
    lab: 'Formula checker',
    control: 'Total September spend by category',
  },
  {
    id: 'l5-117',
    title: 'AI For Document Analysis',
    scene: 'Every claim gets a page and a clause, or it gets removed',
    lab: 'Policy summary checker',
    control: 'Supported by the clause',
  },
  {
    id: 'l5-118',
    title: 'AI For Financial Education',
    scene: 'A concept survives the loop when you can restate it',
    lab: 'Tutor audit',
    control: 'Keep it — stable concept',
  },
  {
    id: 'l5-119',
    title: 'AI Limitations',
    scene: 'Five ways a financial answer goes wrong',
    lab: 'AI failure-mode stress test',
    control: 'Knowledge cut-off',
  },
  {
    id: 'l5-120',
    title: 'Hallucination Detection',
    scene: 'The invented claim does not look different from the true one',
    lab: 'Claim verifier',
    control: 'Open the cited source',
  },
  {
    id: 'l5-121',
    title: 'Privacy When Using AI',
    scene: 'The prompt that leaves your hands should carry the shape of the problem',
    lab: 'Prompt privacy audit',
    control: 'The prompt you are about to send',
  },
  {
    id: 'l5-122',
    title: 'Never Sharing OTP/PIN/Password/Card Information With AI',
    scene: 'Six things live behind the wall',
    lab: 'Credential defence',
    control: 'Request 1 of 6',
  },
]

test.describe('level 5 AI batch (l5-114 to l5-122)', () => {
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

      await expect(page.getByRole('heading', { level: 1 }), `${c.id} title`).toContainText(c.title)
      await expect(page.getByText('queued for writing'), `${c.id} is authored`).toHaveCount(0)

      const caption = page.locator('figure figcaption', { hasText: c.scene })
      await expect(caption, `${c.id} illustration caption`).toBeVisible()
      await expect(page.locator('figure svg[role="img"]').first(), `${c.id} illustration svg`).toBeVisible()

      await expect(page.getByText('Interactive', { exact: true }), `${c.id} lab marker`).toBeVisible()
      await expect(page.getByRole('heading', { name: c.lab }), `${c.id} lab title`).toBeVisible()
      await expect(page.getByText(c.control).first(), `${c.id} lab control`).toBeVisible()

      await expect(page.getByRole('heading', { name: 'Quick check' }), `${c.id} quiz`).toBeVisible()
      await expect(page.getByRole('button', { name: 'Check answers' }), `${c.id} quiz submit`).toBeVisible()

      await expect(page.getByText('Takeaway'), `${c.id} takeaway`).toBeVisible()
      await expect(page.getByText(/Last verified/).first(), `${c.id} verification date`).toBeVisible()
      await expect(
        page.getByText(/meity\.gov\.in|rbi\.org\.in|irdai\.gov\.in|incometax\.gov\.in|cybercrime\.gov\.in|cert-in\.org\.in/).first(),
        `${c.id} official source`,
      ).toBeVisible()
    }

    expect(errors, `console errors:\n${errors.join('\n')}`).toEqual([])
    expect(failedRequests, `failed requests:\n${failedRequests.join('\n')}`).toEqual([])
  })

  test('the labs react to their controls', async ({ page }) => {
    // Task router (l5-114): a checked hand-off, and the reason it is not a
    // no-check hand-off.
    await openChapter(page, 'l5-114')
    await page.getByRole('button', { name: 'Assistant drafts, you verify before use', exact: true }).click()
    await expect(page.getByText(/Not quite — the right call is/)).toBeVisible()

    // Budget review (l5-115): redacting the identifiers scores six of six, and
    // the review then reconciles the categorised month to the statement. The
    // lab is a lazy chunk, so the controls are addressed by their own
    // accessible names rather than by text that the chapter also contains.
    await openChapter(page, 'l5-115')
    for (const field of ['Your name keep', 'Account number keep', 'UPI IDs keep']) {
      await page.getByRole('button', { name: field, exact: true }).click()
    }
    await page.getByRole('button', { name: 'Check my redaction' }).click()
    await expect(page.getByText('6 of 6 fields handled correctly')).toBeVisible()
    await page.getByRole('button', { name: 'Send the redacted statement' }).click()
    await expect(page.getByText('₹41,899')).toBeVisible()
    await expect(page.getByText('₹23,499')).toBeVisible()
    await expect(page.getByText('₹18,400', { exact: true })).toBeVisible()

    // Formula checker (l5-116): the off-by-one range, named.
    await openChapter(page, 'l5-116')
    await page.getByRole('button', { name: 'The range ends one row before the data does', exact: true }).click()
    await expect(page.getByText(/keep the boundary test row in the sheet permanently/)).toBeVisible()

    // Policy reader (l5-117): a claim contradicted by its own clause.
    await openChapter(page, 'l5-117')
    await page.getByRole('button', { name: 'Open the wording', exact: true }).click()
    await page.getByRole('button', { name: 'Contradicted by the clause', exact: true }).click()
    await expect(page.getByText(/gets removed, not softened/)).toBeVisible()

    // Tutor audit (l5-118): the durable concept is kept, and discarding it is
    // corrected. The stale rule is the next explanation in the set.
    await openChapter(page, 'l5-118')
    await page.getByRole('button', { name: 'Discard — wrong or stale', exact: true }).click()
    await expect(page.getByText(/Better call: “Keep it — stable concept”/)).toBeVisible()
    await page.getByRole('button', { name: 'Next explanation' }).click()
    await page.getByRole('button', { name: 'Discard — wrong or stale', exact: true }).click()
    await expect(page.getByText(/the ceiling in the statement is wrong/)).toBeVisible()

    // Failure-mode stress test (l5-119): the raised deposit-insurance limit.
    await openChapter(page, 'l5-119')
    await page.getByRole('button', { name: 'Knowledge cut-off', exact: true }).click()
    await expect(page.getByText(/was the limit before it was raised/)).toBeVisible()

    // Claim verifier (l5-120): a real limit with a real source, then the
    // citation that cannot be found at all.
    await openChapter(page, 'l5-120')
    await page.getByRole('button', { name: 'Open the cited source' }).click()
    await expect(page.getByText(/Found: The DICGC insures deposits/)).toBeVisible()
    await page.getByRole('button', { name: 'Supported by the source', exact: true }).click()
    await expect(page.getByText('Correct.')).toBeVisible()
    await page.getByRole('button', { name: 'Next claim' }).click()
    await page.getByRole('button', { name: 'Open the cited source' }).click()
    await expect(page.getByText(/No circular with that number exists/)).toBeVisible()
    await page.getByRole('button', { name: 'Unsupported or contradicted', exact: true }).click()
    await expect(page.getByText(/The citation could not be found/)).toBeVisible()

    // Privacy audit (l5-121): only the three fields the question needs are a
    // right call as the prompt stands, and the rest are named back as leaked.
    await openChapter(page, 'l5-121')
    await page.getByRole('button', { name: 'Check the prompt', exact: true }).click()
    await expect(page.getByText('3 / 8')).toBeVisible()
    await expect(page.getByText(/identifiers left/i)).toBeVisible()

    // Credential defence (l5-122): refusing the OTP request, and the cost of
    // reading it out.
    await openChapter(page, 'l5-122')
    await page.getByRole('button', { name: 'End the call and ring the number printed on your card', exact: true }).click()
    await expect(page.getByText('Refused correctly.')).toBeVisible()
  })

  test('a quiz scores a wrong answer and a right one differently', async ({ page }) => {
    await openChapter(page, 'l5-114')
    await page.getByRole('heading', { name: 'Quick check' }).scrollIntoViewIfNeeded()

    const groups = page.locator('section:has(h3:text-is("Quick check")) div.space-y-2')
    const count = await groups.count()
    expect(count, 'the chapter ships four questions').toBe(4)

    // One wrong option per question, so the score must be zero.
    const wrong = [0, 0, 0, 1]
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').nth(wrong[i]).click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText('0/4 correct')).toBeVisible()

    // The correct option in each question is spread across the four positions.
    await page.getByRole('button', { name: 'Try again' }).click()
    const correctIndexes = [2, 3, 1, 0]
    for (let i = 0; i < count; i++) await groups.nth(i).locator('button').nth(correctIndexes[i]).click()
    await page.getByRole('button', { name: 'Check answers' }).click()
    await expect(page.getByText('4/4 correct')).toBeVisible()
    await expect(page.getByText(/Perfect score/)).toBeVisible()
  })
})
