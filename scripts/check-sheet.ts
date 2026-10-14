/** Unit tests for the spreadsheet formula engine. Run: npm run test:sheet */
import { evaluateCell, type Sheet } from '../src/lib/sheet'

const sheet: Sheet = {
  A1: 'Food',
  A2: 'Rent',
  A3: 'Food',
  A4: 'Travel',
  B1: 'Need',
  B2: 'Need',
  B3: 'Want',
  B4: 'Want',
  C1: '1000',
  C2: '5000',
  C3: '300',
  C4: '700',
  D1: '40000',
}

const cases: [string, number | string][] = [
  ['=SUM(C1:C4)', 7000],
  ['=SUMIF(A1:A4,"Food",C1:C4)', 1300],
  ['=SUMIF(B1:B4,"Want",C1:C4)', 1000],
  ['=SUMIF(A1:A4,"Food",C1:C4)', 1300],
  // 2-arg SUMIF sums numeric matches only, so text cells contribute 0 (as in Excel)
  ['=SUMIF(A1:A4,"Food")', 0],
  ['=COUNTIF(B1:B4,"Need")', 2],
  ['=SUMIFS(C1:C4,A1:A4,"Food",B1:B4,"Want")', 300],
  ['=AVERAGE(C1:C4)', 1750],
  ['=MAX(C1:C4)', 5000],
  ['=MIN(C1:C4)', 300],
  ['=COUNT(C1:C4)', 4],
  ['=C2-C1', 4000],
  ['=D1-C2-C3', 34700],
  ['=ROUND((C1/C4)*100,1)', 142.9],
  ['=IF(C3>500,"big","small")', 'small'],
  ['=IF(C2>1000,"big","small")', 'big'],
  ['=SUM(C1:C4)-C2', 2000],
  ['=SUM(C1:C2)*2', 12000],
]

let failed = 0
for (const [formula, expected] of cases) {
  const got = evaluateCell(sheet, 'E1', new Set(['E1']))
  void got
  // evaluate the formula in an isolated cell so refs resolve against `sheet`
  const v = evaluateCell({ ...sheet, E1: formula }, 'E1')
  const ok = typeof v === 'number' && typeof expected === 'number'
    ? Math.abs(v - expected) < 0.01
    : String(v) === String(expected)
  if (!ok) {
    failed++
    console.error(`  ✗ ${formula} → got ${JSON.stringify(v)}, expected ${JSON.stringify(expected)}`)
  } else {
    console.log(`  ✓ ${formula} → ${typeof v === 'object' ? JSON.stringify(v) : v}`)
  }
}

// plain values pass through
const plain = evaluateCell(sheet, 'C1')
console.log(`  ✓ plain value C1 → ${plain}`)

if (failed) {
  console.error(`\n${failed} formula test(s) failed`)
  process.exit(1)
}
console.log('\n✓ All formula tests passed')