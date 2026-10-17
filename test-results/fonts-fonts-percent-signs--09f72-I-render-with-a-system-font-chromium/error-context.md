# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fonts.spec.ts >> fonts >> percent signs in the UI render with a system font
- Location: tests\e2e\fonts.spec.ts:53:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=/%$/') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner:
    - generic:
      - generic [ref=e4]:
        - link "Back to level" [ref=e5] [cursor=pointer]:
          - /url: /level/1
        - link "Paisa Playbook, home" [ref=e8] [cursor=pointer]:
          - /url: /
          - img [aria-hidden] [ref=e9]:
            - generic [ref=e12]: ₹
          - generic [ref=e13]:
            - generic [ref=e14]: Paisa Playbook
            - generic [ref=e15]: Level 1
      - button "Open menu" [ref=e17]:
        - generic [ref=e18]: Menu
  - main [ref=e21]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]: "1"
          - generic [ref=e26]:
            - heading "Money Foundations" [level=1] [ref=e27]
            - paragraph [ref=e28]: What money is, where it comes from, how to save it, and how to keep it safe.
        - generic [ref=e29]: 0/64 done
      - generic [ref=e32]:
        - button "1 What Is Money Not started" [ref=e33]:
          - generic [ref=e34]: "1"
          - generic [ref=e35]:
            - generic [ref=e36]: What Is Money
            - generic [ref=e37]: Not started
        - button "2 History Of Money Not started" [ref=e40]:
          - generic [ref=e41]: "2"
          - generic [ref=e42]:
            - generic [ref=e43]: History Of Money
            - generic [ref=e44]: Not started
        - button "3 The Barter System Not started" [ref=e47]:
          - generic [ref=e48]: "3"
          - generic [ref=e49]:
            - generic [ref=e50]: The Barter System
            - generic [ref=e51]: Not started
        - button "4 Currency Not started" [ref=e54]:
          - generic [ref=e55]: "4"
          - generic [ref=e56]:
            - generic [ref=e57]: Currency
            - generic [ref=e58]: Not started
        - button "5 The Indian Rupee Not started" [ref=e61]:
          - generic [ref=e62]: "5"
          - generic [ref=e63]:
            - generic [ref=e64]: The Indian Rupee
            - generic [ref=e65]: Not started
        - button "6 Purchasing Power Not started" [ref=e68]:
          - generic [ref=e69]: "6"
          - generic [ref=e70]:
            - generic [ref=e71]: Purchasing Power
            - generic [ref=e72]: Not started
        - button "7 How Money Moves Through The Economy Not started" [ref=e75]:
          - generic [ref=e76]: "7"
          - generic [ref=e77]:
            - generic [ref=e78]: How Money Moves Through The Economy
            - generic [ref=e79]: Not started
        - button "8 The RBI Not started" [ref=e82]:
          - generic [ref=e83]: "8"
          - generic [ref=e84]:
            - generic [ref=e85]: The RBI
            - generic [ref=e86]: Not started
        - button "9 Banks Not started" [ref=e89]:
          - generic [ref=e90]: "9"
          - generic [ref=e91]:
            - generic [ref=e92]: Banks
            - generic [ref=e93]: Not started
        - button "10 Government And Businesses Not started" [ref=e96]:
          - generic [ref=e97]: "10"
          - generic [ref=e98]:
            - generic [ref=e99]: Government And Businesses
            - generic [ref=e100]: Not started
        - button "11 Earning Money Not started" [ref=e103]:
          - generic [ref=e104]: "11"
          - generic [ref=e105]:
            - generic [ref=e106]: Earning Money
            - generic [ref=e107]: Not started
        - button "12 Salary Not started" [ref=e110]:
          - generic [ref=e111]: "12"
          - generic [ref=e112]:
            - generic [ref=e113]: Salary
            - generic [ref=e114]: Not started
        - button "13 Wages Not started" [ref=e117]:
          - generic [ref=e118]: "13"
          - generic [ref=e119]:
            - generic [ref=e120]: Wages
            - generic [ref=e121]: Not started
        - button "14 Business Income Not started" [ref=e124]:
          - generic [ref=e125]: "14"
          - generic [ref=e126]:
            - generic [ref=e127]: Business Income
            - generic [ref=e128]: Not started
        - button "15 Freelance Income Not started" [ref=e131]:
          - generic [ref=e132]: "15"
          - generic [ref=e133]:
            - generic [ref=e134]: Freelance Income
            - generic [ref=e135]: Not started
        - button "16 Active Vs Passive Income Not started" [ref=e138]:
          - generic [ref=e139]: "16"
          - generic [ref=e140]:
            - generic [ref=e141]: Active Vs Passive Income
            - generic [ref=e142]: Not started
        - button "17 Needs Vs Wants Not started" [ref=e145]:
          - generic [ref=e146]: "17"
          - generic [ref=e147]:
            - generic [ref=e148]: Needs Vs Wants
            - generic [ref=e149]: Not started
        - button "18 Necessities Vs Luxuries Not started" [ref=e152]:
          - generic [ref=e153]: "18"
          - generic [ref=e154]:
            - generic [ref=e155]: Necessities Vs Luxuries
            - generic [ref=e156]: Not started
        - button "19 Impulse Buying Not started" [ref=e159]:
          - generic [ref=e160]: "19"
          - generic [ref=e161]:
            - generic [ref=e162]: Impulse Buying
            - generic [ref=e163]: Not started
        - button "20 Advertising Psychology Not started" [ref=e166]:
          - generic [ref=e167]: "20"
          - generic [ref=e168]:
            - generic [ref=e169]: Advertising Psychology
            - generic [ref=e170]: Not started
        - button "21 Peer Pressure And Money Not started" [ref=e173]:
          - generic [ref=e174]: "21"
          - generic [ref=e175]:
            - generic [ref=e176]: Peer Pressure And Money
            - generic [ref=e177]: Not started
        - button "22 Budgeting Basics Not started" [ref=e180]:
          - generic [ref=e181]: "22"
          - generic [ref=e182]:
            - generic [ref=e183]: Budgeting Basics
            - generic [ref=e184]: Not started
        - button "23 Income Vs Expenses Not started" [ref=e187]:
          - generic [ref=e188]: "23"
          - generic [ref=e189]:
            - generic [ref=e190]: Income Vs Expenses
            - generic [ref=e191]: Not started
        - button "24 Fixed Vs Variable Expenses Not started" [ref=e194]:
          - generic [ref=e195]: "24"
          - generic [ref=e196]:
            - generic [ref=e197]: Fixed Vs Variable Expenses
            - generic [ref=e198]: Not started
        - button "25 Saving Not started" [ref=e201]:
          - generic [ref=e202]: "25"
          - generic [ref=e203]:
            - generic [ref=e204]: Saving
            - generic [ref=e205]: Not started
        - button "26 Savings Goals Not started" [ref=e208]:
          - generic [ref=e209]: "26"
          - generic [ref=e210]:
            - generic [ref=e211]: Savings Goals
            - generic [ref=e212]: Not started
        - button "27 Bank Accounts Not started" [ref=e215]:
          - generic [ref=e216]: "27"
          - generic [ref=e217]:
            - generic [ref=e218]: Bank Accounts
            - generic [ref=e219]: Not started
        - button "28 Savings Accounts Not started" [ref=e222]:
          - generic [ref=e223]: "28"
          - generic [ref=e224]:
            - generic [ref=e225]: Savings Accounts
            - generic [ref=e226]: Not started
        - button "29 Current Accounts Not started" [ref=e229]:
          - generic [ref=e230]: "29"
          - generic [ref=e231]:
            - generic [ref=e232]: Current Accounts
            - generic [ref=e233]: Not started
        - button "30 Fixed Deposits Not started" [ref=e236]:
          - generic [ref=e237]: "30"
          - generic [ref=e238]:
            - generic [ref=e239]: Fixed Deposits
            - generic [ref=e240]: Not started
        - button "31 Recurring Deposits Not started" [ref=e243]:
          - generic [ref=e244]: "31"
          - generic [ref=e245]:
            - generic [ref=e246]: Recurring Deposits
            - generic [ref=e247]: Not started
        - button "32 Interest Not started" [ref=e250]:
          - generic [ref=e251]: "32"
          - generic [ref=e252]:
            - generic [ref=e253]: Interest
            - generic [ref=e254]: Not started
        - button "33 Simple Interest Not started" [ref=e257]:
          - generic [ref=e258]: "33"
          - generic [ref=e259]:
            - generic [ref=e260]: Simple Interest
            - generic [ref=e261]: Not started
        - button "34 Compound Interest Not started" [ref=e264]:
          - generic [ref=e265]: "34"
          - generic [ref=e266]:
            - generic [ref=e267]: Compound Interest
            - generic [ref=e268]: Not started
        - button "35 Inflation Not started" [ref=e271]:
          - generic [ref=e272]: "35"
          - generic [ref=e273]:
            - generic [ref=e274]: Inflation
            - generic [ref=e275]: Not started
        - button "36 Opportunity Cost Not started" [ref=e278]:
          - generic [ref=e279]: "36"
          - generic [ref=e280]:
            - generic [ref=e281]: Opportunity Cost
            - generic [ref=e282]: Not started
        - button "37 Financial Goals Not started" [ref=e285]:
          - generic [ref=e286]: "37"
          - generic [ref=e287]:
            - generic [ref=e288]: Financial Goals
            - generic [ref=e289]: Not started
        - button "38 Short-Term, Medium-Term And Long-Term Goals Not started" [ref=e292]:
          - generic [ref=e293]: "38"
          - generic [ref=e294]:
            - generic [ref=e295]: Short-Term, Medium-Term And Long-Term Goals
            - generic [ref=e296]: Not started
        - button "39 UPI Not started" [ref=e299]:
          - generic [ref=e300]: "39"
          - generic [ref=e301]:
            - generic [ref=e302]: UPI
            - generic [ref=e303]: Not started
        - button "40 Digital Payments Not started" [ref=e306]:
          - generic [ref=e307]: "40"
          - generic [ref=e308]:
            - generic [ref=e309]: Digital Payments
            - generic [ref=e310]: Not started
        - button "41 Debit Cards Not started" [ref=e313]:
          - generic [ref=e314]: "41"
          - generic [ref=e315]:
            - generic [ref=e316]: Debit Cards
            - generic [ref=e317]: Not started
        - button "42 The ATM Not started" [ref=e320]:
          - generic [ref=e321]: "42"
          - generic [ref=e322]:
            - generic [ref=e323]: The ATM
            - generic [ref=e324]: Not started
        - button "43 NEFT Not started" [ref=e327]:
          - generic [ref=e328]: "43"
          - generic [ref=e329]:
            - generic [ref=e330]: NEFT
            - generic [ref=e331]: Not started
        - button "44 RTGS Not started" [ref=e334]:
          - generic [ref=e335]: "44"
          - generic [ref=e336]:
            - generic [ref=e337]: RTGS
            - generic [ref=e338]: Not started
        - button "45 IMPS Not started" [ref=e341]:
          - generic [ref=e342]: "45"
          - generic [ref=e343]:
            - generic [ref=e344]: IMPS
            - generic [ref=e345]: Not started
        - button "46 Bank Statements Not started" [ref=e348]:
          - generic [ref=e349]: "46"
          - generic [ref=e350]:
            - generic [ref=e351]: Bank Statements
            - generic [ref=e352]: Not started
        - button "47 Receipts And Financial Records Not started" [ref=e355]:
          - generic [ref=e356]: "47"
          - generic [ref=e357]:
            - generic [ref=e358]: Receipts And Financial Records
            - generic [ref=e359]: Not started
        - button "48 Basic Financial Vocabulary Not started" [ref=e362]:
          - generic [ref=e363]: "48"
          - generic [ref=e364]:
            - generic [ref=e365]: Basic Financial Vocabulary
            - generic [ref=e366]: Not started
        - button "49 Financial Habits Not started" [ref=e369]:
          - generic [ref=e370]: "49"
          - generic [ref=e371]:
            - generic [ref=e372]: Financial Habits
            - generic [ref=e373]: Not started
        - button "50 Personal Responsibility With Money Not started" [ref=e376]:
          - generic [ref=e377]: "50"
          - generic [ref=e378]:
            - generic [ref=e379]: Personal Responsibility With Money
            - generic [ref=e380]: Not started
        - button "51 Financial Scams Not started" [ref=e383]:
          - generic [ref=e384]: "51"
          - generic [ref=e385]:
            - generic [ref=e386]: Financial Scams
            - generic [ref=e387]: Not started
        - button "52 OTP Scams Not started" [ref=e390]:
          - generic [ref=e391]: "52"
          - generic [ref=e392]:
            - generic [ref=e393]: OTP Scams
            - generic [ref=e394]: Not started
        - button "53 Phishing Not started" [ref=e397]:
          - generic [ref=e398]: "53"
          - generic [ref=e399]:
            - generic [ref=e400]: Phishing
            - generic [ref=e401]: Not started
        - button "54 Fake Customer Care Not started" [ref=e404]:
          - generic [ref=e405]: "54"
          - generic [ref=e406]:
            - generic [ref=e407]: Fake Customer Care
            - generic [ref=e408]: Not started
        - button "55 UPI Scams Not started" [ref=e411]:
          - generic [ref=e412]: "55"
          - generic [ref=e413]:
            - generic [ref=e414]: UPI Scams
            - generic [ref=e415]: Not started
        - button "56 Basic Cybersecurity Not started" [ref=e418]:
          - generic [ref=e419]: "56"
          - generic [ref=e420]:
            - generic [ref=e421]: Basic Cybersecurity
            - generic [ref=e422]: Not started
        - button "57 Creating A Basic Expense Tracker Not started" [ref=e425]:
          - generic [ref=e426]: "57"
          - generic [ref=e427]:
            - generic [ref=e428]: Creating A Basic Expense Tracker
            - generic [ref=e429]: Not started
        - button "58 Creating A Basic Monthly Budget Not started" [ref=e432]:
          - generic [ref=e433]: "58"
          - generic [ref=e434]:
            - generic [ref=e435]: Creating A Basic Monthly Budget
            - generic [ref=e436]: Not started
        - 'button "59 Trick: Pay Yourself First Not started" [ref=e439]':
          - generic [ref=e440]: "59"
          - generic [ref=e441]:
            - generic [ref=e442]: "Trick: Pay Yourself First"
            - generic [ref=e443]: Not started
        - 'button "60 Trick: The 24-Hour Rule Not started" [ref=e446]':
          - generic [ref=e447]: "60"
          - generic [ref=e448]:
            - generic [ref=e449]: "Trick: The 24-Hour Rule"
            - generic [ref=e450]: Not started
        - 'button "61 Trick: Track Every Rupee For One Month Not started" [ref=e453]':
          - generic [ref=e454]: "61"
          - generic [ref=e455]:
            - generic [ref=e456]: "Trick: Track Every Rupee For One Month"
            - generic [ref=e457]: Not started
        - 'button "62 Trick: Separate Needs From Wants Before Purchasing Not started" [ref=e460]':
          - generic [ref=e461]: "62"
          - generic [ref=e462]:
            - generic [ref=e463]: "Trick: Separate Needs From Wants Before Purchasing"
            - generic [ref=e464]: Not started
        - 'button "63 Trick: Always Know Where Your Money Went Not started" [ref=e467]':
          - generic [ref=e468]: "63"
          - generic [ref=e469]:
            - generic [ref=e470]: "Trick: Always Know Where Your Money Went"
            - generic [ref=e471]: Not started
        - 'button "64 Final Project: Managing A Hypothetical ₹10 Not started" [ref=e474]':
          - generic [ref=e475]: "64"
          - generic [ref=e476]:
            - generic [ref=e477]: "Final Project: Managing A Hypothetical ₹10"
            - generic [ref=e478]: Not started
  - contentinfo [ref=e481]:
    - generic [ref=e482]:
      - generic [ref=e483]: Paisa Playbook — an educational app, not financial advice. Figures and rates are illustrative.
      - generic [ref=e484]: 0 chapters completed
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
  25 |       expect(r.percent, `${r.face} must NOT be used for "%"`).toBe(false)
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
> 57 |     await page.waitForSelector('text=/%$/')
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
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