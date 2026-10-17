# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fonts.spec.ts >> fonts >> no custom font can render the percent sign
- Location: tests\e2e\fonts.spec.ts:11:3

# Error details

```
Error: Recoleta must NOT be used for "%"

expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
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
    - article [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]: Level 1 · Chapter 001
        - heading "What Is Money" [level=1] [ref=e22]
        - paragraph [ref=e23]: Three jobs, one piece of paper — and why that works
        - generic [ref=e24]: 4 min read
      - generic [ref=e28]:
        - figure "Money is not valuable by itself. Its value comes from what everyone agrees it is worth." [ref=e30]:
          - img "Money is not valuable by itself. Its value comes from what everyone agrees it is worth." [ref=e31]:
            - generic [ref=e32]: ₹
            - generic [ref=e35]: ₹
            - generic [ref=e38]: ₹
            - generic [ref=e41]: ₹
            - generic [ref=e44]: ₹
        - paragraph [ref=e48]: Money is anything that people accept in exchange for goods and services, and that also lets you store value and split it into portions. That is the whole definition — no gold, no paper, no government decree required.
        - heading "The three jobs money does" [level=3] [ref=e49]
        - list [ref=e50]:
          - listitem [ref=e51]:
            - generic [ref=e52]: "1"
            - text: A medium of exchange — it solves the problem of "I have this, I want that" without hunting down a double coincidence of wants.
          - listitem [ref=e53]:
            - generic [ref=e54]: "2"
            - text: A unit of account — it gives everything a comparable number, so you can add a bus fare to a salary and know if the sum makes sense.
          - listitem [ref=e55]:
            - generic [ref=e56]: "3"
            - text: A store of value — it lets you move purchasing power from today to ten years from now.
        - complementary [ref=e57]:
          - generic [ref=e58]: The trust test
          - paragraph [ref=e61]: Money works because of a collective agreement. A ₹500 note is just paper and cotton. Its power comes from the shared belief that your shopkeeper, your employer and your bank will all accept it tomorrow. Belief is the actual asset.
        - heading "Where it shows up in your life" [level=3] [ref=e62]
        - figure "Three forms, one idea" [ref=e63]:
          - paragraph [ref=e65]: Cash in your wallet, money as a number inside a bank app, and units of a mutual fund are all money. The first is physical, the second is a claim on a bank, the third is a claim on assets. Same three jobs, three different forms.
        - generic [ref=e66]:
          - generic [ref=e67]: Forms of money in India
          - table [ref=e68]:
            - rowgroup [ref=e69]:
              - row [ref=e70]:
                - columnheader "Form" [ref=e71]
                - columnheader "What it actually is" [ref=e72]
                - columnheader "Who accepts it" [ref=e73]
            - rowgroup [ref=e74]:
              - row [ref=e75]:
                - cell "Banknotes and coins" [ref=e76]
                - cell "Physical currency issued by the RBI" [ref=e77]
                - cell "Almost everyone" [ref=e78]
              - row [ref=e79]:
                - cell "UPI / NEFT balance" [ref=e80]
                - cell "A claim on your bank" [ref=e81]
                - cell "Anyone who takes a UPI payment" [ref=e82]
              - row [ref=e83]:
                - cell "Cheque" [ref=e84]
                - cell "A written claim on a bank" [ref=e85]
                - cell "Businesses, landlords" [ref=e86]
              - row [ref=e87]:
                - cell "Gold" [ref=e88]
                - cell "A commodity with intrinsic value" [ref=e89]
                - cell "Jewellers, banks" [ref=e90]
        - complementary [ref=e91]:
          - generic [ref=e92]: The catch with store of value
          - paragraph [ref=e95]: Money that keeps you alive this month may quietly shrink in buying power over thirty years. Chapter 35 covers inflation, and chapter 34 covers why money that earns something is a different animal.
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]: Interactive
              - heading "Compound interest lab" [level=3] [ref=e100]
            - paragraph [ref=e101]: See how the same concept of "saving money" turns into growth when money earns a return.
          - generic [ref=e102]:
            - generic [ref=e103]:
              - generic [ref=e104]:
                - generic [ref=e105]:
                  - generic [ref=e106]:
                    - generic [ref=e107]: Starting amount
                    - generic [ref=e108]: ₹1,00,000
                  - slider [ref=e109]: "100000"
                - generic [ref=e110]:
                  - generic [ref=e111]:
                    - generic [ref=e112]: Monthly investment (SIP)
                    - generic [ref=e113]: ₹5,000
                  - slider [ref=e114]: "5000"
                - generic [ref=e115]:
                  - generic [ref=e116]:
                    - generic [ref=e117]: Years
                    - generic [ref=e118]: 20 yr
                  - slider [ref=e119]: "20"
                - generic [ref=e120]:
                  - generic [ref=e121]:
                    - generic [ref=e122]: Annual return
                    - generic [ref=e123]: 12%
                  - slider [ref=e124]: "12"
                  - generic [ref=e125]:
                    - button "5%" [ref=e126]
                    - button "8%" [ref=e127]
                    - button "12%" [ref=e128]
                    - button "14%" [ref=e129]
              - generic [ref=e130]:
                - img "Growth of money over time" [ref=e131]
                - generic [ref=e136]:
                  - generic [ref=e137]: Final value
                  - generic [ref=e139]: What you put in
            - generic [ref=e141]:
              - generic [ref=e142]:
                - generic [ref=e143]: You put in
                - generic [ref=e144]: ₹13,00,000
              - generic [ref=e145]:
                - generic [ref=e146]: It's worth
                - generic [ref=e147]: ₹60,35,532
              - generic [ref=e148]:
                - generic [ref=e149]: Money earned
                - generic [ref=e150]: ₹47,35,532
            - generic [ref=e151]:
              - strong [ref=e152]: "The magic part:"
              - text: you contributed ₹13,00,000 but ended with ₹60,35,532. That extra ₹47.36L is
              - strong [ref=e153]: 364% more
              - text: than you ever actually saved — all of it came from compound interest.
              - generic [ref=e154]: Your money passed double what you put in during year 14.
            - paragraph [ref=e155]: Assumes returns are steady every year and reinvested. Real markets are jumpy — we cover that in Level 3. A withdrawn, matured FD is currently around 6–7%.
        - complementary [ref=e156]:
          - generic [ref=e157]: Try this today
          - paragraph [ref=e161]: "Pick up any note in your wallet and notice three things: who guarantees it, what it promises, and the fact that it carries no claim on any goods. Cash is an instruction, not a receipt."
      - generic [ref=e162]:
        - generic [ref=e163]: Takeaway
        - paragraph [ref=e164]: Money is a shared agreement, not a material thing. It works because it exchanges, measures and stores — and it loses those powers the moment that agreement breaks.
      - generic [ref=e166]:
        - generic [ref=e167]:
          - heading "Quick check" [level=3] [ref=e168]
          - generic [ref=e169]: 0/3 answered
        - generic [ref=e170]:
          - generic [ref=e171]:
            - paragraph [ref=e172]:
              - generic [ref=e173]: "1."
              - text: "Money fundamentally solves a problem of:"
            - generic [ref=e174]:
              - button "A Storing physical wealth safely" [ref=e175]:
                - generic [ref=e176]: A
                - generic [ref=e177]: Storing physical wealth safely
              - button "B Exchange — trading without needing a double coincidence of wants" [ref=e178]:
                - generic [ref=e179]: B
                - generic [ref=e180]: Exchange — trading without needing a double coincidence of wants
              - button "C Producing goods and services" [ref=e181]:
                - generic [ref=e182]: C
                - generic [ref=e183]: Producing goods and services
              - button "D Measuring the value of gold" [ref=e184]:
                - generic [ref=e185]: D
                - generic [ref=e186]: Measuring the value of gold
          - generic [ref=e187]:
            - paragraph [ref=e188]:
              - generic [ref=e189]: "2."
              - text: "A UPI balance in your bank app is best described as:"
            - generic [ref=e190]:
              - button "A A physical claim you can hand over" [ref=e191]:
                - generic [ref=e192]: A
                - generic [ref=e193]: A physical claim you can hand over
              - button "B A claim on your bank that others accept because the payment system clears it" [ref=e194]:
                - generic [ref=e195]: B
                - generic [ref=e196]: A claim on your bank that others accept because the payment system clears it
              - button "C Currency issued by the RBI" [ref=e197]:
                - generic [ref=e198]: C
                - generic [ref=e199]: Currency issued by the RBI
          - generic [ref=e200]:
            - paragraph [ref=e201]:
              - generic [ref=e202]: "3."
              - text: If people stopped accepting a particular note, what would happen to it?
            - generic [ref=e203]:
              - button "A It would still hold value because it is made of cotton and paper" [ref=e204]:
                - generic [ref=e205]: A
                - generic [ref=e206]: It would still hold value because it is made of cotton and paper
              - button "B It would lose almost all its value, showing that trust is the real backing" [ref=e207]:
                - generic [ref=e208]: B
                - generic [ref=e209]: It would lose almost all its value, showing that trust is the real backing
              - button "C The government would buy them all back at the same price" [ref=e210]:
                - generic [ref=e211]: C
                - generic [ref=e212]: The government would buy them all back at the same price
        - button "Check answers" [disabled] [ref=e214]
        - generic [ref=e215]: l1-001
      - navigation [ref=e217]:
        - 'button "Next: History Of Money" [ref=e218]'
  - contentinfo [ref=e222]:
    - generic [ref=e223]:
      - generic [ref=e224]: Paisa Playbook — an educational app, not financial advice. Figures and rates are illustrative.
      - generic [ref=e225]: 0 chapters completed
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | 
  3  | /**
  4  |  * Task 1 — font policy, verified in a real browser.
  5  |  *
  6  |  * The CSS excludes U+0025 from every custom @font-face via `unicode-range`.
  7  |  * `document.fonts.check()` honours unicode-range, so it is a direct assertion:
  8  |  * if it returns true for Recoleta + "%", the face would be used to render it.
  9  |  */
  10 | test.describe('fonts', () => {
  11 |   test('no custom font can render the percent sign', async ({ page }) => {
  12 |     await page.goto('/chapter/l1-001')
  13 |     const result = await page.evaluate(async () => {
  14 |       await document.fonts.ready
  15 |       const faces = ['Recoleta', 'Svetze', 'Caviar Dreams']
  16 |       return faces.map((f) => ({
  17 |         face: f,
  18 |         percent: document.fonts.check(`16px "${f}"`, '%'),
  19 |         // A letter that the face DOES cover, as a control.
  20 |         letterA: document.fonts.check(`16px "${f}"`, 'A'),
  21 |       }))
  22 |     })
  23 | 
  24 |     for (const r of result) {
> 25 |       expect(r.percent, `${r.face} must NOT be used for "%"`).toBe(false)
     |                                                               ^ Error: Recoleta must NOT be used for "%"
  26 |       expect(r.letterA, `${r.face} should still load for normal letters`).toBe(true)
  27 |     }
  28 |   })
  29 | 
  30 |   test('ligatures are disabled on body and headings', async ({ page }) => {
  31 |     await page.goto('/chapter/l1-001')
  32 |     await page.waitForSelector('h1')
  33 | 
  34 |     const styles = await page.evaluate(() => {
  35 |       const body = getComputedStyle(document.body)
  36 |       const h1 = getComputedStyle(document.querySelector('h1')!)
  37 |       return {
  38 |         bodyLigatures: body.fontVariantLigatures,
  39 |         bodyFeatures: body.fontFeatureSettings,
  40 |         h1Ligatures: h1.fontVariantLigatures,
  41 |         h1Features: h1.fontFeatureSettings,
  42 |       }
  43 |     })
  44 | 
  45 |     expect(styles.bodyLigatures).toBe('none')
  46 |     expect(styles.h1Ligatures).toBe('none')
  47 |     for (const feat of ['liga', 'clig', 'dlig', 'hlig', 'calt']) {
  48 |       expect(styles.bodyFeatures).toContain(`"${feat}" 0`)
  49 |       expect(styles.h1Features).toContain(`"${feat}" 0`)
  50 |     }
  51 |   })
  52 | 
  53 |   test('percent signs in the UI render with a system font', async ({ page }) => {
  54 |     // The HUD shows percentages; assert one exists and that its computed family
  55 |     // is not one of the custom faces.
  56 |     await page.goto('/level/1')
  57 |     await page.waitForSelector('text=/%$/')
  58 | 
  59 |     const family = await page.evaluate(() => {
  60 |       const el = [...document.querySelectorAll('span')].find((n) =>
  61 |         /^\d+%?$/.test(n.textContent?.trim() ?? ''),
  62 |       )
  63 |       return el ? getComputedStyle(el).fontFamily : ''
  64 |     })
  65 | 
  66 |     expect(family).not.toContain('Recoleta')
  67 |     expect(family).not.toContain('Svetze')
  68 |     expect(family).not.toContain('Caviar Dreams')
  69 |   })
  70 | })
```