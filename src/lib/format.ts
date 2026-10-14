/** ₹ formatting, with lakh/crore grouping so Indian amounts read naturally. */

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

/** ₹1,23,456 — exact, for statements and ledgers. */
export const rupees = (n: number): string => inr.format(Math.round(n))

/** ₹1.23L / ₹4.5Cr — compact, for dashboards and axis labels. */
export const rupeesShort = (n: number): string => {
  const abs = Math.abs(n)
  const sign = n < 0 ? '-' : ''
  if (abs >= 1e7) return `${sign}₹${(abs / 1e7).toFixed(2)}Cr`
  if (abs >= 1e5) return `${sign}₹${(abs / 1e5).toFixed(2)}L`
  if (abs >= 1e3) return `${sign}₹${(abs / 1e3).toFixed(1)}K`
  return `${sign}₹${Math.round(abs)}`
}

/** Plain grouped number without the currency symbol. */
export const num = (n: number, digits = 0): string =>
  n.toLocaleString('en-IN', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })

/** Percentage with a sign, e.g. +12.4% / -3.0% */
export const pct = (n: number, digits = 1): string =>
  `${n >= 0 ? '+' : ''}${n.toFixed(digits)}%`