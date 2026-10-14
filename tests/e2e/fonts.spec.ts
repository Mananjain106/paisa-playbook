import { expect, test } from '@playwright/test'

/**
 * Task 1 — font policy, verified in a real browser.
 *
 * The CSS excludes U+0025 from every custom @font-face via `unicode-range`.
 * `document.fonts.check()` honours unicode-range, so it is a direct assertion:
 * if it returns true for Recoleta + "%", the face would be used to render it.
 */
test.describe('fonts', () => {
  test('no custom font can render the percent sign', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    const result = await page.evaluate(async () => {
      await document.fonts.ready
      const faces = ['Recoleta', 'Svetze', 'Caviar Dreams']
      return faces.map((f) => ({
        face: f,
        percent: document.fonts.check(`16px "${f}"`, '%'),
        // A letter that the face DOES cover, as a control.
        letterA: document.fonts.check(`16px "${f}"`, 'A'),
      }))
    })

    for (const r of result) {
      expect(r.percent, `${r.face} must NOT be used for "%"`).toBe(false)
      expect(r.letterA, `${r.face} should still load for normal letters`).toBe(true)
    }
  })

  test('ligatures are disabled on body and headings', async ({ page }) => {
    await page.goto('/chapter/l1-001')
    await page.waitForSelector('h1')

    const styles = await page.evaluate(() => {
      const body = getComputedStyle(document.body)
      const h1 = getComputedStyle(document.querySelector('h1')!)
      return {
        bodyLigatures: body.fontVariantLigatures,
        bodyFeatures: body.fontFeatureSettings,
        h1Ligatures: h1.fontVariantLigatures,
        h1Features: h1.fontFeatureSettings,
      }
    })

    expect(styles.bodyLigatures).toBe('none')
    expect(styles.h1Ligatures).toBe('none')
    for (const feat of ['liga', 'clig', 'dlig', 'hlig', 'calt']) {
      expect(styles.bodyFeatures).toContain(`"${feat}" 0`)
      expect(styles.h1Features).toContain(`"${feat}" 0`)
    }
  })

  test('percent signs in the UI render with a system font', async ({ page }) => {
    // The HUD shows percentages; assert one exists and that its computed family
    // is not one of the custom faces.
    await page.goto('/level/1')
    await page.waitForSelector('text=/%$/')

    const family = await page.evaluate(() => {
      const el = [...document.querySelectorAll('span')].find((n) =>
        /^\d+%?$/.test(n.textContent?.trim() ?? ''),
      )
      return el ? getComputedStyle(el).fontFamily : ''
    })

    expect(family).not.toContain('Recoleta')
    expect(family).not.toContain('Svetze')
    expect(family).not.toContain('Caviar Dreams')
  })
})