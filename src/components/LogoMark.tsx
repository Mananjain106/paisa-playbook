/**
 * The brand mark: a rupee glyph on a dark rounded tile with a green glow.
 *
 * This is the same artwork as `public/favicon.svg`, inlined as a component so it
 * can be sized and coloured inline without an extra network request. Keep the
 * two in sync — if you change the favicon, change it here too.
 */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#11131f" />
      <circle cx="32" cy="32" r="21" fill="#34e0a1" opacity="0.2" />
      <text
        x="32"
        y="43"
        fontFamily="system-ui, sans-serif"
        fontSize="30"
        fontWeight="800"
        fill="#34e0a1"
        textAnchor="middle"
      >
        ₹
      </text>
    </svg>
  )
}