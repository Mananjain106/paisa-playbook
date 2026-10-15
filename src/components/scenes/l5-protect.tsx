/**
 * Level 5 illustrations — band four, batch 3 (chapters l5-091 to l5-100).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   runway-months        how long the money lasts, and which sources it draws on
 *   hospital-flow        the cashless path and the reimbursement path, side by side
 *   crash-playbook       what a written plan says at each stage of a fall
 *   recession-map        how a slowdown reaches a household, and what it controls
 *   debt-triage          debts sorted by rate and by consequence
 *   golden-hour          the first hours after a fraud, and the liability ladder
 *   compromise-recovery  contain, recover, re-establish, audit, prevent
 *   identity-trail       where a stolen identity gets used, and the checkpoint for each
 *   scam-triage          three questions that filter most offers
 *   guru-credibility     the five checks that separate a teacher from a promoter
 *
 * Scenes are plain SVG fragments; the `Scene` wrapper supplies the
 * viewBox="0 0 400 220" and the caption. Each is used by exactly one chapter.
 */

const INK = '#c9cfe4'
const MUTED = '#8b93ad'
const PANEL = 'rgba(255,255,255,0.05)'
const LINE = 'rgba(255,255,255,0.14)'
const GOOD = '#34e0a1'
const BLUE = '#38bdf8'
const PURPLE = '#c084fc'
const AMBER = '#facc15'
const ROSE = '#fb7185'

/** l5-091 — how long the money lasts, and what gets drawn on first. */
export function RunwayMonths() {
  const sources = [
    { name: 'Emergency fund', months: 4.5, c: GOOD },
    { name: 'Notice pay and severance', months: 2.5, c: BLUE },
    { name: 'PF advance, up to 75%', months: 1.5, c: PURPLE },
    { name: 'Unemployment relief, if insured', months: 0.5, c: AMBER },
  ]
  let x = 24
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The runway, stacked in the order it is spent
      </text>
      {sources.map((s) => {
        const w = s.months * 33
        const at = x
        x += w
        return (
          <g key={s.name}>
            <rect x={at} y="40" width={w} height="26" rx="3" fill={s.c} opacity="0.28" stroke={LINE} />
            <text x={at + 4} y="57" fill={INK} fontSize="8">
              {s.months} mo
            </text>
          </g>
        )
      })}
      {sources.map((s, i) => (
        <g key={s.name}>
          <circle cx="30" cy={94 + i * 22} r="4" fill={s.c} opacity="0.6" />
          <text x="42" y={98 + i * 22} fill={INK} fontSize="8.5">
            {s.name}
          </text>
        </g>
      ))}
      <line x1="24" y1="80" x2="376" y2="80" stroke={LINE} />
      <text x="24" y="212" fill={MUTED} fontSize="7.5">
        Nine months of runway is not nine months of comfort: the last two are drawn only if the first decisions go well.
      </text>
    </>
  )
}

/** l5-092 — the cashless route and the reimbursement route through a hospitalisation. */
export function HospitalFlow() {
  const cashless = ['Admission', 'Pre-authorisation', 'Authorised in 1 hour', 'Treatment', 'Discharge in 3 hours']
  const reimbursement = ['You pay the bill', 'Collect every document', 'Claim filed', 'Insurer decides', 'Money arrives']
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Two routes through the same hospital stay
      </text>
      <text x="24" y="42" fill={GOOD} fontSize="9" fontWeight="600">
        Cashless, in a network hospital
      </text>
      {cashless.map((step, i) => (
        <g key={step}>
          <rect x="24" y={50 + i * 24} width="164" height="19" rx="4" fill={BLUE} opacity="0.16" />
          <text x="34" y={63 + i * 24} fill={INK} fontSize="8">
            {step}
          </text>
          {i < cashless.length - 1 && <line x1="106" y1={69 + i * 24} x2="106" y2={74 + i * 24} stroke={LINE} />}
        </g>
      ))}
      <text x="212" y="42" fill={AMBER} fontSize="9" fontWeight="600">
        Reimbursement, anywhere else
      </text>
      {reimbursement.map((step, i) => (
        <g key={step}>
          <rect x="212" y={50 + i * 24} width="164" height="19" rx="4" fill={AMBER} opacity="0.14" />
          <text x="222" y={63 + i * 24} fill={INK} fontSize="8">
            {step}
          </text>
        </g>
      ))}
      <text x="24" y="196" fill={MUTED} fontSize="7.5">
        The cashless route turns the bill into a conversation between two institutions. The other one turns it into a loan
        you take from yourself.
      </text>
      <text x="24" y="212" fill={ROSE} fontSize="7.5">
        Either way, the claim runs on documents, and the clock starts when the last one arrives.
      </text>
    </>
  )
}

/** l5-093 — what a written plan says at each stage of a market fall. */
export function CrashPlaybook() {
  const stages = [
    { level: 'Fall of 10%', halt: 'A 45-minute halt before 1 pm, then a pre-open auction', plan: 'Nothing. A scheduled SIP continues' },
    { level: 'Fall of 15%', halt: 'A longer halt, decided by the time of the day', plan: 'Rebalance only if the band is breached' },
    { level: 'Fall of 20%', halt: 'Trading stops for the rest of the day', plan: 'Deploy the dry powder you set aside for this' },
    { level: 'A long bear market', halt: 'No halt at all: it grinds instead', plan: 'Safe money is untouched, and the plan is re-read monthly' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A crash playbook, written before the crash
      </text>
      {stages.map((s, i) => {
        const y = 32 + i * 46
        return (
          <g key={s.level}>
            <rect x="24" y={y} width="352" height="40" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="40" rx="2" fill={i < 3 ? ROSE : AMBER} />
            <text x="38" y={y + 13} fill={i < 3 ? ROSE : AMBER} fontSize="9" fontWeight="600">
              {s.level}
            </text>
            <text x="38" y={y + 25} fill={MUTED} fontSize="7.5">
              {s.halt}
            </text>
            <text x="38" y={y + 36} fill={INK} fontSize="7.5">
              The plan: {s.plan}
            </text>
          </g>
        )
      })}
      <text x="24" y="216" fill={MUTED} fontSize="7.5">
        The exchange halts trading at 10%, 15% and 20%. Your plan decides what you do in the hours it is closed.
      </text>
    </>
  )
}

/** l5-094 — how a recession reaches a household, and what the household controls. */
export function RecessionMap() {
  const chain = [
    { step: 'Demand falls', c: ROSE },
    { step: 'Orders are cut', c: ROSE },
    { step: 'Hiring freezes, then jobs go', c: AMBER },
    { step: 'Household income wobbles', c: AMBER },
    { step: 'Fixed costs do not fall', c: BLUE },
  ]
  const controls = ['Emergency fund', 'Fixed cost ratio', 'Skills and network', 'Debt schedule', 'Allocation and SIP']
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A recession arrives as a chain, not an event
      </text>
      {chain.map((c, i) => (
        <g key={c.step}>
          <rect x="24" y={34 + i * 24} width="200" height="20" rx="4" fill={c.c} opacity="0.14" />
          <text x="34" y={48 + i * 24} fill={INK} fontSize="8">
            {c.step}
          </text>
        </g>
      ))}
      <rect x="244" y="34" width="132" height="116" rx="6" fill={GOOD} opacity="0.08" stroke={LINE} />
      <text x="254" y="50" fill={GOOD} fontSize="8.5" fontWeight="600">
        What you control
      </text>
      {controls.map((c, i) => (
        <text key={c} x="254" y={66 + i * 16} fill={MUTED} fontSize="7.5">
          · {c}
        </text>
      ))}
      <text x="24" y="200" fill={MUTED} fontSize="7.5">
        Nothing on the left is yours to change. Everything on the right is, and only before the chain reaches you.
      </text>
      <text x="24" y="214" fill={AMBER} fontSize="7.5">
        The fixed cost ratio is the number that decides how a wobble feels: rent, EMIs and fees against income.
      </text>
    </>
  )
}

/** l5-095 — debts sorted by rate and by what happens if they are ignored. */
export function DebtTriage() {
  const debts = [
    { name: 'Credit card', rate: '30% to 42%', consequence: 'Reported fast, and the score moves first', d: 'Attack first' },
    { name: 'Personal loan', rate: '12% to 18%', consequence: 'Unsecured, and the lender calls early', d: 'Attack second' },
    { name: 'Vehicle loan', rate: '9% to 14%', consequence: 'The vehicle is the security', d: 'Keep current' },
    { name: 'Home loan', rate: '8% to 9.5%', consequence: 'The largest sum, and the roof', d: 'Keep current' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The order is set by the rate and by the consequence
      </text>
      {debts.map((d, i) => {
        const y = 32 + i * 42
        const hot = i === 0 ? ROSE : i === 1 ? AMBER : BLUE
        return (
          <g key={d.name}>
            <rect x="24" y={y} width="352" height="36" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="36" rx="2" fill={hot} />
            <text x="38" y={y + 14} fill={INK} fontSize="8.5">
              {d.name}
            </text>
            <text x="38" y={y + 25} fill={MUTED} fontSize="7.5">
              {d.rate} — {d.consequence}
            </text>
            <text x={300} y={y + 21} fill={hot} fontSize="8" fontWeight="600">
              {d.d}
            </text>
          </g>
        )
      })}
      <text x="24" y="212" fill={MUTED} fontSize="7.5">
        Paying the cheapest debt first feels good and costs the most. Keeping a secured loan current keeps the asset.
      </text>
    </>
  )
}

/** l5-096 — the first hours, and how the liability ladder is decided. */
export function GoldenHour() {
  const rungs = [
    { when: 'Within 3 working days', who: 'Zero liability', note: 'Fraud by a third party, reported in time', c: GOOD },
    { when: '4 to 7 working days', who: 'Up to ₹25,000', note: '₹5,000 for an account with limited features', c: AMBER },
    { when: 'Beyond 7 working days', who: 'Per the bank\u2019s policy', note: 'Board-approved, and usually the bank\u2019s favour', c: ROSE },
    { when: 'Any time', who: 'Zero liability', note: 'Where the fault was the bank\u2019s, whatever you did', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Report first, argue later
      </text>
      <circle cx="60" cy="66" r="26" fill={ROSE} opacity="0.18" stroke={LINE} />
      <text x="47" y="63" fill={ROSE} fontSize="11" fontWeight="600">
        first
      </text>
      <text x="45" y="76" fill={INK} fontSize="8">
        hour
      </text>
      <text x="100" y="52" fill={INK} fontSize="8.5">
        Freeze the card or the account
      </text>
      <text x="100" y="66" fill={INK} fontSize="8.5">
        Call the bank and the number on the portal
      </text>
      <text x="100" y="80" fill={INK} fontSize="8.5">
        Keep the screenshots and the message IDs
      </text>
      {rungs.map((r, i) => {
        const y = 100 + i * 28
        return (
          <g key={r.when}>
            <rect x="24" y={y} width="352" height="24" rx="4" fill={r.c} opacity="0.12" />
            <text x="34" y={y + 10} fill={INK} fontSize="8">
              {r.when}
            </text>
            <text x="34" y={y + 20} fill={MUTED} fontSize="7.5">
              {r.note}
            </text>
            <text x={286} y={y + 15} fill={r.c} fontSize="8" fontWeight="600">
              {r.who}
            </text>
          </g>
        )
      })}
    </>
  )
}

/** l5-097 — what to do when an account is compromised, in order. */
export function CompromiseRecovery() {
  const steps = [
    { n: '1', what: 'Contain', note: 'Block the card, the UPI and the net-banking session', c: ROSE },
    { n: '2', what: 'Recover', note: 'Report, get the entry reversed, and demand it in writing', c: AMBER },
    { n: '3', what: 'Re-establish', note: 'Change credentials from a clean device, then re-KYC', c: BLUE },
    { n: '4', what: 'Audit', note: 'Mandates, autopay, registered email, linked number', c: BLUE },
    { n: '5', what: 'Prevent', note: 'Turn on alerts, and remove what you do not recognise', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five stages, and the third one is the one people skip
      </text>
      {steps.map((s, i) => {
        const y = 34 + i * 36
        return (
          <g key={s.what}>
            <rect x="24" y={y} width="352" height="30" rx="5" fill={PANEL} stroke={LINE} />
            <circle cx="44" cy={y + 15} r="10" fill={s.c} opacity="0.22" />
            <text x="41" y={y + 19} fill={INK} fontSize="9" fontWeight="600">
              {s.n}
            </text>
            <text x="64" y={y + 13} fill={INK} fontSize="8.5">
              {s.what}
            </text>
            <text x="64" y={y + 24} fill={MUTED} fontSize="7.5">
              {s.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="216" fill={AMBER} fontSize="7.5">
        Changing the password is not containment: the attacker may already hold a session, a mandate or a forwarding rule.
      </text>
    </>
  )
}

/** l5-098 — where a stolen identity gets spent, and the checkpoint for each. */
export function IdentityTrail() {
  const uses = [
    { where: 'A new loan in your name', check: 'The credit report shows an enquiry you never made' },
    { where: 'A new card or a BNPL account', check: 'An account you do not recognise, marked active' },
    { where: 'A new SIM or number', check: 'Your own number losing signal for hours' },
    { where: 'A new bank or wallet account', check: 'A KYC record you never gave' },
    { where: 'A tax or a benefits claim', check: 'A notice quoting income you never earned' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Identity theft is spent somewhere, and each place leaves a trace
      </text>
      {uses.map((u, i) => {
        const y = 32 + i * 34
        return (
          <g key={u.where}>
            <rect x="24" y={y} width="168" height="28" rx="4" fill={ROSE} opacity="0.12" />
            <text x="34" y={y + 18} fill={INK} fontSize="8">
              {u.where}
            </text>
            <line x1="192" y1={y + 14} x2="212" y2={y + 14} stroke={LINE} />
            <path d={'M 212 ' + (y + 8) + ' l 8 6 l -8 6 z'} fill={GOOD} opacity="0.7" />
            <text x="228" y={y + 18} fill={MUTED} fontSize="7.5">
              {u.check}
            </text>
          </g>
        )
      })}
      <text x="24" y="212" fill={MUTED} fontSize="7.5">
        The credit report is the cheapest alarm: a full one is free once a year from each bureau, and monthly from the apps.
      </text>
    </>
  )
}

/** l5-099 — three questions that filter most offers. */
export function ScamTriage() {
  const gates = [
    { q: 'Who is regulated, and by whom?', fail: 'Nobody, or a certificate you cannot verify', c: BLUE },
    { q: 'Where does the money go?', fail: 'To an individual, a wallet, or an account you cannot name', c: AMBER },
    { q: 'What is the hurry?', fail: 'A window closing tonight, or secrecy as a condition', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Three gates, and an offer has to pass all of them
      </text>
      {gates.map((g, i) => {
        const y = 36 + i * 44
        return (
          <g key={g.q}>
            <rect x="24" y={y} width="352" height="38" rx="5" fill={PANEL} stroke={LINE} />
            <circle cx="46" cy={y + 19} r="11" fill={g.c} opacity="0.2" />
            <text x="43" y={y + 23} fill={INK} fontSize="9" fontWeight="600">
              {i + 1}
            </text>
            <text x="66" y={y + 15} fill={INK} fontSize="8.5">
              {g.q}
            </text>
            <text x="66" y={y + 28} fill={ROSE} fontSize="7.5">
              Fails when: {g.fail}
            </text>
          </g>
        )
      })}
      <text x="24" y="188" fill={MUTED} fontSize="7.5">
        A regulated seller has a registration number, and the regulator will confirm it from its own website.
      </text>
      <text x="24" y="204" fill={AMBER} fontSize="7.5">
        An unregistered deposit scheme is not a risky investment. It is banned, and taking the deposit is itself an offence.
      </text>
      <text x="24" y="218" fill={MUTED} fontSize="7.5">
        Nobody legitimate minds being checked. The hurry is what tells you which one you are talking to.
      </text>
    </>
  )
}

/** l5-100 — five checks that separate a teacher from a promoter. */
export function GuruCredibility() {
  const checks = [
    { check: 'Registered to advise', teacher: 'An RIA or RA number you can look up', promoter: 'A certificate of its own making' },
    { check: 'Incentive disclosed', teacher: 'Fees, and holdings, and affiliate links', promoter: 'Silent, and often paid per sign-up' },
    { check: 'Track record', teacher: 'Audited, dated, and complete', promoter: 'Screenshots, and the winners only' },
    { check: 'Falsifiable claims', teacher: 'Says what would prove them wrong', promoter: 'Every outcome confirms the thesis' },
    { check: 'Reaches out to you', teacher: 'Waits to be found', promoter: 'DMs first, with a limited offer' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The same five questions, two different answers
      </text>
      <text x="196" y="36" fill={GOOD} fontSize="8" fontWeight="600">
        A teacher
      </text>
      <text x="306" y="36" fill={ROSE} fontSize="8" fontWeight="600">
        A promoter
      </text>
      {checks.map((c, i) => {
        const y = 42 + i * 32
        return (
          <g key={c.check}>
            <text x="24" y={y + 18} fill={INK} fontSize="8">
              {c.check}
            </text>
            <text x="196" y={y + 18} fill={GOOD} fontSize="7.5">
              {c.teacher}
            </text>
            <text x="306" y={y + 18} fill={MUTED} fontSize="7.5">
              {c.promoter}
            </text>
            <line x1="24" y1={y + 26} x2="376" y2={y + 26} stroke={LINE} />
          </g>
        )
      })}
      <text x="24" y="216" fill={MUTED} fontSize="7.5">
        One answer from the right-hand column is a reason to check. All five is a reason to close the tab.
      </text>
    </>
  )
}
