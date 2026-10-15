# Paisa Playbook

An interactive personal-finance course. 508 chapters across 5 progressive levels, taught through short
explanations, animated SVG illustrations, hands-on simulations and quizzes — grounded in the Indian
financial system (RBI, UPI, TDS, EPF, Nifty/Sensex).

## Status

| Level | Topic | Chapters | Content |
| --- | --- | --- | --- |
| 1 | Money Foundations | 64 | ✅ live |
| 2 | Your Money Machine | 81 | ✅ live |
| 3 | The Investing World | 94 | ✅ live |
| 4 | Taxes & Advanced Money | 108 | ✅ live |
| 5 | Mastery & Life Planning | 161 | syllabus mapped |

**Levels 1–4 (347 chapters) are released** and playable end to end: every chapter carries a quiz, an animated
illustration and a hands-on simulation, and no level is gated behind progress. The full syllabus is generated
from `.agents/workflow/Prompts.json`, so all 508 chapter titles exist in the app from day one; the remaining
Level 5 chapters render an explicit "queued for writing" page rather than a broken one.

## Commands

```bash
npm run dev            # start the dev server
npm run build          # typecheck + production build
npm run test           # content + font-policy + formula-engine + sync checks
npm run check          # validate authored chapter data
npm run check:fonts    # enforce the ligature / "%" font policy
npm run test:sheet     # unit-test the spreadsheet formula engine
npm run test:sync      # unit-test the cross-device merge logic
npm run test:e2e       # Playwright end-to-end suite
npm run gen:curriculum # regenerate the syllabus from Prompts.json
```

## Stack

React 19 + TypeScript + Vite + Tailwind v4 + Framer Motion + React Router 7 + Supabase.

Progress lives in `localStorage` and, once signed in, is mirrored to Supabase for cross-device sync.
With no Supabase env vars the app runs entirely offline.

## Cross-device sync

Passwordless: type an email, Supabase emails a one-time link, and progress syncs.

1. Apply `supabase/schema.sql` once (Supabase dashboard → SQL editor). It creates
   `chapter_progress`, enables RLS, and adds the `merge_progress` RPC.
2. Copy `backend.env` values into `.env.local` as `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_PUBLISHABLE_KEY`. Never commit the secret key.
3. **Add your deployed origin** to Supabase → Authentication → URL Configuration →
   Redirect URLs, otherwise magic links bounce to the default Site URL.

Merging is safe in both directions: `read` chapters are unioned, quiz scores keep the best
result, and XP is always *derived* from that merged state, so syncing twice can never
double-count.

## Hero

The home hero uses [React Bits](https://reactbits.dev/text-animations/tech-text) **TechText**
(MIT), vendored to `src/components/TechText.tsx`. It renders the wordmark to a canvas: letters
turn into dashed vector paths near the cursor and spring back when you drag them. It pauses
itself when scrolled offscreen and respects `prefers-reduced-motion`.

## Architecture

```
src/
  types.ts                    content-block model every chapter is built from
  lib/
    sheet.ts                  spreadsheet formula engine (SUM/SUMIF/SUMIFS/IF/...)
    store.ts                  progress + XP/streak, localStorage-backed
    router.ts                 hash-based routing
    format.ts                 ₹ / lakh / crore formatting
  data/
    curriculum.generated.ts   AUTO-GENERATED syllabus — do not edit
    curriculum.ts             joins syllabus to authored content
    chapters/l1-*.ts          the written chapters, grouped by theme
  components/
    scenes/                   animated SVG illustrations (hand-drawn, no assets)
    sims/                     interactive simulations
    BlockRenderer.tsx         renders each content block type
    Quiz.tsx                  quiz engine with per-option explanations
scripts/
  gen-curriculum.mjs          Prompts.json -> curriculum.generated.ts
  check-content.ts            data integrity checks
  check-sheet.ts              formula engine tests
```

### Content model

A chapter is a list of typed blocks — `p`, `h`, `callout`, `example`, `list`, `table`, `formula`, `terms`,
`scene` (animated SVG) and `sim` (interactive) — plus a quiz and a takeaway. Adding a new block type means
adding one variant to `Block` in `src/types.ts` and one case in `BlockRenderer`.

### Simulations

| Sim | What it teaches |
| --- | --- |
| `compound` | compound interest, SIP growth, inflation erosion |
| `budget` | the 50/30/20 rule with a live donut |
| `networth` | assets vs liabilities, net worth |
| `market` | bull/bear/crash paths, SIP vs lump sum, volatility |
| `sheet` | a real spreadsheet with working `SUM`, `SUMIF`, `SUMIFS`, `IF`, `ROUND` |
| `rupee10` | a 7-day money-management game with ten rupees |
| `scam-spotter` | realistic Indian scam messages with red-flag reveal |
| `emi` | EMI maths and the true total cost of a loan |
| `salary-slip` | CTC → take-home: PF, TDS, gratuity and the real number |
| `minpayment` | why paying only the minimum keeps a balance alive |
| `cover` | is your health cover enough for your income and family? |

### Illustrations

44 animated SVG scenes drawn in code (`src/components/scenes/`). No image assets, no API keys, nothing to
load — they scale crisply and theme with the rest of the app.

## Authoring a new chapter

1. Pick the chapter id from `src/data/curriculum.generated.ts` (e.g. `l2-001`).
2. Add an entry to the appropriate file in `src/data/chapters/`, or create a new one and spread it into
   `level1.ts` / a future `level2.ts`.
3. Register it in `src/data/curriculum.ts`.
4. Run `npm run check` — it validates quiz correctness (exactly one right answer per question), that every
   quiz option has an explanation, and that each chapter has at least one illustration or simulation.

## Fonts

`fonts/` holds Svetze, Recoleta and Caviar Dreams, used for display type. Recoleta and the others are demo
licences — check before shipping this publicly.