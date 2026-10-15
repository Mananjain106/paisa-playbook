import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band four, batch 1 labs (chapters l5-071 to l5-080).
 *
 * Ten separate simulations, one per chapter:
 *   l5-estate-planner          which route each slice of an estate actually takes
 *   l5-nomination-audit        every account audited against the nomination it holds
 *   l5-beneficiary-designer    shares under a will, and under the default rule it replaces
 *   l5-will-builder            assemble a valid will and see which part is missing
 *   l5-inheritance-processor   clear liabilities, verify title, then decide — in order
 *   l5-succession-planner      ownership, control and funding across a handover
 *   l5-joint-holding-chooser   what each joint mode does on death, and what it does not
 *   l5-family-finance-setup    who pays what, who sees what, and what survives an income stop
 *   l5-marriage-finance-plan   what stays separate, what a spouse inherits, what to update
 *   l5-parent-care-budget      the recurring, the medical and the one-off cost of support
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: the ₹5 lakh deposit-insurance cover per depositor per bank; a
 * nominee receiving money as a custodian rather than as an owner, with the legal
 * heirs retaining their claim; registration of a will being optional under
 * section 18 of the Registration Act, 1908; a daughter being a coparcener by
 * birth under section 6 of the Hindu Succession Act as amended in 2005; an
 * inherited asset keeping the previous owner's cost of acquisition and holding
 * period under section 49(1); gifts from relatives and inheritances being exempt
 * under section 56(2)(x), with no inheritance tax in India; and the section 80D
 * limits of ₹25,000 for self and family, ₹50,000 for a senior-citizen parent,
 * available in the old regime. All amounts and scenarios are illustrative.
 */

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">{children}</div>
)

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format = (v: number) => rupees(v),
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) => (
  <label className="block">
    <span className="flex items-center justify-between text-xs text-ink-300">
      <span>{label}</span>
      <span className="font-mono text-brand-300">{format(value)}</span>
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="mt-1 w-full accent-brand-400"
    />
  </label>
)

const Check = ({ ok, children }: { ok: boolean; children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-xs">
    <span
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
      style={{ background: ok ? '#34e0a1' : 'rgba(255,255,255,0.12)', color: ok ? '#11131f' : '#c9cfe4' }}
    >
      {ok ? '✓' : '·'}
    </span>
    <span className={ok ? 'text-ink-200' : 'text-ink-400'}>{children}</span>
  </li>
)

const Choice = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-lg border px-2.5 py-1.5 text-left text-[11px] transition ${
      active ? 'border-brand-400/60 bg-brand-400/15 text-white' : 'border-white/10 bg-white/5 text-ink-300 hover:border-white/30'
    }`}
  >
    {label}
  </button>
)

const Toggle = ({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) => (
  <Choice label={`${on ? '✓ ' : ''}${label}`} active={on} onClick={onClick} />
)

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/* ------------------------------------------------------------------ l5-071 */

export function L5EstatePlanner() {
  const [property, setProperty] = useState(8_000_000)
  const [deposits, setDeposits] = useState(2_500_000)
  const [investments, setInvestments] = useState(3_000_000)
  const [business, setBusiness] = useState(4_000_000)
  const [hasWill, setHasWill] = useState(false)
  const [nominated, setNominated] = useState(false)
  const [inventory, setInventory] = useState(false)
  const [businessCovered, setBusinessCovered] = useState(false)

  const total = property + deposits + investments + business
  // A nomination can carry deposits and investments; property and a business
  // interest need a will, or they fall to the default succession rule.
  const byNomination = nominated ? deposits + investments : 0
  const byWill = hasWill ? property + business : 0
  const intestate = total - byNomination - byWill
  const documented = byNomination + byWill
  const coverage = total ? documented / total : 0
  const readiness = [hasWill, nominated, inventory, business && businessCovered].filter(Boolean).length

  const checks = [
    {
      ok: hasWill,
      text: hasWill
        ? 'A will is in place, so immovable property and an unlisted business interest have a stated destination. Registration is optional; clarity is what makes it work.'
        : `No will. ${rupees(property + business)} of property and business interest would fall to the default succession rule instead of to the people you would name.`,
    },
    {
      ok: nominated,
      text: nominated
        ? 'Nominations are recorded on the deposits and investments, so those are released to a named person rather than through a claim. The nominee holds the money as a custodian: the legal heirs still have their claim on it.'
        : `Deposits and investments of ${rupees(deposits + investments)} carry no nomination, which turns a one-page form into a claim with paperwork and a wait.`,
    },
    {
      ok: inventory,
      text: inventory
        ? 'There is a written inventory. This is the part that decides whether the rest works, because a will that names three accounts and forgets two still leaves two to the default rule.'
        : 'No document map exists. Without an inventory, the executor or the family has to reconstruct where everything sits from statements — the single most common delay in settling an estate.',
    },
    {
      ok: !business || businessCovered,
      text: business === 0
        ? 'There is no business interest, so the firm’s own documents are not in play.'
        : businessCovered
          ? 'The business interest is covered by the firm’s documents as well as the will. A partnership deed or articles usually decide what happens to a share on death, and they bind before a will does.'
          : `A business interest of ${rupees(business)} is not addressed. The firm’s own documents decide a share on death before a will does, so this needs to be checked and, if it is silent, a will clause added.`,
    },
    {
      ok: coverage >= 0.9,
      text: `Documented ${rupees(documented)} of ${rupees(total)} — about ${Math.round(coverage * 100)}%. The rest, ${rupees(intestate)}, would be divided by the succession law of the person’s religion rather than by instruction.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Build the estate on paper</h4>
          <div className="space-y-3">
            <Slider label="Property and land" value={property} min={0} max={50_000_000} step={500_000} onChange={setProperty} />
            <Slider label="Bank deposits and small savings" value={deposits} min={0} max={20_000_000} step={100_000} onChange={setDeposits} />
            <Slider label="Mutual funds, shares and insurance" value={investments} min={0} max={30_000_000} step={100_000} onChange={setInvestments} />
            <Slider label="Business interest" value={business} min={0} max={50_000_000} step={500_000} onChange={setBusiness} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Toggle label="A will is in place" on={hasWill} onClick={() => setHasWill((v) => !v)} />
            <Toggle label="Nominations set everywhere" on={nominated} onClick={() => setNominated((v) => !v)} />
            <Toggle label="Document inventory written" on={inventory} onClick={() => setInventory((v) => !v)} />
            <Toggle label="Business interest addressed" on={businessCovered} onClick={() => setBusinessCovered((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Estate" value={rupeesShort(total)} />
              <Stat label="Documented" value={rupeesShort(documented)} tone={coverage >= 0.9 ? 'best' : 'neutral'} />
              <Stat label="Left to rule" value={rupeesShort(intestate)} tone={intestate > 0 ? 'bad' : 'best'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Passes by nomination: {rupees(byNomination)}</li>
              <li>Passes by will: {rupees(byWill)}</li>
              <li>Passes by the default rule: {rupees(intestate)}</li>
              <li>Readiness: {readiness} of 4 basics in place</li>
              <li className="text-white">A nomination is a release mechanism, not a transfer of ownership</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Estate planning is an inventory before it is a document. Three separate mechanisms move money after a death,
        and each covers a different slice. Nominations release deposits, funds and policies to a named person, and the
        institution is entitled to pay them. A will states who is entitled, and it is the only instrument that reaches
        immovable property and an unlisted business interest. Where neither says anything, the succession law of the
        person’s religion divides the estate on its own terms, which is rarely the split a family assumes. The exercise
        worth repeating once a year is the boring one: list every account, leave a nomination on each, name an executor,
        describe each asset precisely, and keep one copy where the family can find it.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-072 */

const NOMINATION_SITES = [
  { key: 'salary', label: 'Current salary account', weight: 0.08 },
  { key: 'old', label: 'Dormant savings account', weight: 0.04 },
  { key: 'fd', label: 'Fixed deposits', weight: 0.18 },
  { key: 'mf', label: 'Mutual fund folios', weight: 0.24 },
  { key: 'demat', label: 'Demat account', weight: 0.16 },
  { key: 'life', label: 'Term insurance', weight: 0.14 },
  { key: 'epf', label: 'EPF and NPS', weight: 0.1 },
  { key: 'ppf', label: 'PPF and small savings', weight: 0.06 },
]

export function L5NominationAudit() {
  const [estate, setEstate] = useState(6_000_000)
  const [set, setSet] = useState<string[]>(['salary', 'life', 'epf'])
  const [minorNominee, setMinorNominee] = useState(false)

  const total = NOMINATION_SITES.length
  const covered = set.length
  const coveredValue = NOMINATION_SITES.filter((s) => set.includes(s.key)).reduce((n, s) => n + s.weight, 0) * estate
  const uncovered = estate - coveredValue

  const checks = [
    {
      ok: covered === total,
      text:
        covered === total
          ? 'Every account carries a nomination, so each institution can release its balance to a named person rather than asking the family to prove who the heirs are.'
          : `${total - covered} of ${total} accounts have no nomination, covering about ${rupees(uncovered)}. An account without a nomination is settled through the bank’s claim process: a succession certificate, an indemnity, or both.`,
    },
    {
      ok: !set.includes('old'),
      text: set.includes('old')
        ? 'Even a dormant account is audited. A closed or forgotten account still needs a nomination, since the balance and the file survive long after the person stops using them.'
        : `The dormant account is the one people forget. About ${rupees(estate * 0.04)} of this estate sits there, and a dormant balance with no nomination is the most expensive record to recover.`,
    },
    {
      ok: minorNominee,
      text: minorNominee
        ? 'A minor nominee is named. The institution may still require a guardian to receive the money, so appointing one in the nomination form or the will saves a court application later.'
        : 'No minor is a nominee. Where one is, appoint a guardian in the same document: a payout to a minor without a named guardian invites an application for guardianship certificate.',
    },
    {
      ok: covered >= total - 2,
      text: `Audited ${covered} of ${total} places money sits. The audit is the whole skill: the institution pays the nominee, the nominee holds the money for the legal heirs, and the only way to be sure the right accounts are covered is to open each one and look.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Click each place money sits to check it</h4>
          <div className="grid grid-cols-1 gap-2">
            {NOMINATION_SITES.map((s) => (
              <Choice
                key={s.key}
                label={`${set.includes(s.key) ? '✓ ' : '· '}${s.label} — ${rupees(Math.round(estate * s.weight))}`}
                active={set.includes(s.key)}
                onClick={() => setSet((prev) => (prev.includes(s.key) ? prev.filter((x) => x !== s.key) : [...prev, s.key]))}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Total value of everything here" value={estate} min={500_000} max={40_000_000} step={500_000} onChange={setEstate} />
            <Toggle label="A minor is named as a nominee" on={minorNominee} onClick={() => setMinorNominee((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Accounts audited" value={`${covered}/${total}`} tone={covered === total ? 'best' : 'bad'} />
              <Stat label="Nominee will receive" value={rupeesShort(coveredValue)} tone="best" />
              <Stat label="No name on it" value={rupeesShort(uncovered)} tone={uncovered > 0 ? 'bad' : 'best'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Deposit insurance covers up to ₹5 lakh per depositor per bank, and it follows the depositor, not the nominee</li>
              <li>A nomination can be changed at any time by the account holder</li>
              <li>A nominee receives the money but does not become its owner</li>
              <li className="text-white">The legal heirs keep their claim on the amount, whatever the nomination says</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A nomination is the cheapest piece of estate planning there is, and the most commonly half-done. It does one
        narrow job: it tells an institution who may receive a balance, so the money does not have to wait for a
        succession certificate. It does not transfer ownership, and a court will treat the nominee as a custodian
        holding the money for whoever is entitled to it. That is why the audit matters more than the average family
        assumes. Money sits in more places than anyone lists from memory — a dormant account from a first job, a folio
        bought years ago, a pension account opened through an employer — and each one is a separate nomination. Set
        them, name a guardian where a minor is involved, and re-read the list when a job, a bank or a family changes.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-073 */

type Regime = 'will' | 'hindu' | 'muslim'

export function L5BeneficiaryDesigner() {
  const [regime, setRegime] = useState<Regime>('will')
  const [estate, setEstate] = useState(10_000_000)
  const [children, setChildren] = useState(2)
  const [spouse, setSpouse] = useState(true)
  const [mother, setMother] = useState(true)
  const [minorChild, setMinorChild] = useState(false)
  const [trust, setTrust] = useState(false)

  // Default-rule shares, simplified to the shape the chapter teaches: Class I
  // heirs share equally among the surviving heirs in the preferred class, with a
  // Muslim estate following the Quranic shares and the one-third will limit.
  const heirCount = (spouse ? 1 : 0) + children + (mother ? 1 : 0)
  const equalShare = heirCount > 0 ? estate / heirCount : 0
  const muslimSpouse = estate * (children > 0 ? 0.125 : 0.25)
  const muslimChildrenPool = estate - muslimSpouse - (mother && children > 0 ? estate * (1 / 6) : 0)
  const willCap = estate / 3

  const rows =
    regime === 'will'
      ? [
          { who: 'Spouse', share: spouse ? estate * 0.4 : 0, note: 'as directed by the will' },
          { who: `${children} child(ren)`, share: estate * (spouse ? 0.5 : 0.9), note: 'equally, unless stated' },
          { who: 'Mother', share: mother ? estate * 0.1 : 0, note: 'a specific bequest' },
        ]
      : regime === 'hindu'
        ? [
            { who: 'Spouse', share: spouse ? equalShare : 0, note: 'Class I heir, shares equally' },
            { who: `${children} child(ren)`, share: equalShare * children, note: 'each takes one equal share' },
            { who: 'Mother', share: mother ? equalShare : 0, note: 'Class I heir, shares equally' },
          ]
        : [
            { who: 'Spouse', share: muslimSpouse, note: 'a Quranic share, fixed' },
            { who: `${children} child(ren)`, share: muslimChildrenPool, note: 'the residue, split 2:1 by sex' },
            { who: 'Mother', share: mother && children > 0 ? estate / 6 : 0, note: 'a Quranic share' },
          ]

  const checks = [
    {
      ok: true,
      text:
        regime === 'will'
          ? 'A will can direct the estate as the testator wishes, subject to the rules on dependants and to what the person’s personal law does not permit. The shares on the left are an illustration of a choice, not a legal formula.'
          : 'Without a will, the estate is divided by the succession law of the person’s religion. The shares on the left are what that rule produces, and they are usually different from what a family would have written.',
    },
    {
      ok: regime !== 'muslim' || willCap > 0,
      text:
        regime === 'muslim'
          ? `In a Muslim estate, a will may generally reach only one-third of the estate — here ${rupees(willCap)} — and the Quranic shares apply to the rest. Only one-third is available to redirect by will, and that is a limit, not a suggestion.`
          : 'In the other regimes shown here there is no one-third cap: a will can reach the whole estate, provided the bequests are clear and no dependant is left without provision.',
    },
    {
      ok: !minorChild || trust || spouse,
      text:
        minorChild
          ? trust || spouse
            ? 'A minor is a beneficiary and there is a mechanism to hold the money: a trust, or a surviving parent. Without one, the money is administered through a guardianship application instead.'
            : 'A minor beneficiary with no trust and no surviving parent means the money is held through a court-appointed guardian until majority. A trust clause removes that application and states the purpose of the money.'
          : 'No minor beneficiary is involved, so a trust is optional rather than necessary.',
    },
    {
      ok: heirCount > 0,
      text: `Heirs counted in the default rule: ${heirCount}. Disputes are usually not about the total but about who belongs in the list and what each person’s share is — which is exactly what a clear will removes.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Choose how the estate is divided</h4>
          <div className="grid grid-cols-1 gap-2">
            <Choice label="A will directs the shares" active={regime === 'will'} onClick={() => setRegime('will')} />
            <Choice label="No will — Hindu succession rule" active={regime === 'hindu'} onClick={() => setRegime('hindu')} />
            <Choice label="No will — Muslim personal law" active={regime === 'muslim'} onClick={() => setRegime('muslim')} />
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Estate value" value={estate} min={1_000_000} max={50_000_000} step={500_000} onChange={setEstate} />
            <Slider label="Children" value={children} min={0} max={5} step={1} onChange={setChildren} format={(v) => `${v}`} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Toggle label="Spouse alive" on={spouse} onClick={() => setSpouse((v) => !v)} />
            <Toggle label="Mother alive" on={mother} onClick={() => setMother((v) => !v)} />
            <Toggle label="A beneficiary is a minor" on={minorChild} onClick={() => setMinorChild((v) => !v)} />
            <Toggle label="A trust clause is added" on={trust} onClick={() => setTrust((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Estate" value={rupeesShort(estate)} />
              <Stat label="Heirs in the rule" value={`${heirCount}`} />
              <Stat label="Reachable by will" value={regime === 'muslim' ? rupeesShort(willCap) : rupeesShort(estate)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              {rows.map((r) => (
                <li key={r.who}>
                  {r.who}: <span className="text-white">{rupees(r.share)}</span> — {r.note}
                </li>
              ))}
              <li className="text-white">
                {regime === 'will'
                  ? 'A will states intent, and the nomination simply tells each institution who to pay'
                  : 'The default rule is the division that happens when nobody writes anything down'}
              </li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Beneficiaries are chosen against a background rule, not on a blank page. Hindu, Muslim, Christian and Parsi
        estates each have their own default division, and a will operates on top of that background with limits set by
        the person’s personal law. The practical discipline is to know which default applies to you, decide whether the
        will should change it, and then make the two agree with the nominations you have already signed. The most
        common failure is not a wrong share but an inconsistent set of documents: a nomination naming one person, a will
        naming another, and a joint holding with a survivor clause deciding a third outcome. Read the three together
        and make them say the same thing.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-074 */

const WILL_PARTS = [
  { key: 'identify', label: 'Testator identified', essential: true },
  { key: 'revoke', label: 'Earlier wills revoked', essential: false },
  { key: 'executor', label: 'An executor is named', essential: true },
  { key: 'specific', label: 'Each asset described specifically', essential: true },
  { key: 'residue', label: 'A residue clause', essential: true },
  { key: 'guardian', label: 'Guardian named for a minor', essential: false },
  { key: 'witnesses', label: 'Two witnesses, present together', essential: true },
  { key: 'original', label: 'The original is findable', essential: true },
]

export function L5WillBuilder() {
  const [parts, setParts] = useState<string[]>(['identify'])
  const [assets, setAssets] = useState(12_000_000)
  const [assetsNamed, setAssetsNamed] = useState(6_000_000)

  const missingEssential = WILL_PARTS.filter((p) => p.essential && !parts.includes(p.key))
  const missingOptional = WILL_PARTS.filter((p) => !p.essential && !parts.includes(p.key))
  const validity = parts.filter((p) => WILL_PARTS.find((w) => w.key === p)?.essential).length
  const described = assets ? assetsNamed / assets : 0

  const checks = [
    {
      ok: missingEssential.length === 0,
      text:
        missingEssential.length === 0
          ? 'Every essential part is present. A will needs the testator’s identification, a named executor, a description of what goes to whom, a residue clause for everything unnamed, and two witnesses who are present together when the signature is made.'
          : `Still missing the parts that decide whether the document works: ${missingEssential.map((p) => p.label.toLowerCase()).join(', ')}.`,
    },
    {
      ok: parts.includes('witnesses'),
      text: parts.includes('witnesses')
        ? 'Two witnesses attest the signature, present at the same time. A witness should not be a person who takes a benefit under the will, because that invites a challenge.'
        : 'No witnesses, which is fatal: an unattested will is not proved, and the estate falls back to the default rule whatever the paper says.',
    },
    {
      ok: described >= 0.95,
      text: `Assets described precisely: ${rupees(assetsNamed)} of ${rupees(assets)}, about ${Math.round(described * 100)}%. A bequest of "my bank account" when three accounts exist is the sentence that produces a dispute.`,
    },
    {
      ok: parts.includes('original'),
      text: parts.includes('original')
        ? 'The original is kept somewhere findable, and its location is known to the executor. Registration is optional under section 18 of the Registration Act; being discoverable is not.'
        : 'Nobody knows where the original is. A will that cannot be found is treated as though it was never made, so the place it is kept matters as much as what it says.',
    },
    {
      ok: missingOptional.length === 0,
      text:
        missingOptional.length === 0
          ? 'The optional clauses are in as well: an express revocation of earlier wills, and a guardian for any minor child.'
          : `Worth adding: ${missingOptional.map((p) => p.label.toLowerCase()).join(', ')}. These are not formal requirements, but each one removes an argument.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Assemble the will, one part at a time</h4>
          <div className="grid grid-cols-1 gap-2">
            {WILL_PARTS.map((p) => (
              <Choice
                key={p.key}
                label={`${parts.includes(p.key) ? '✓ ' : '· '}${p.label}${p.essential ? ' (essential)' : ''}`}
                active={parts.includes(p.key)}
                onClick={() => setParts((prev) => (prev.includes(p.key) ? prev.filter((x) => x !== p.key) : [...prev, p.key]))}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Total estate value" value={assets} min={1_000_000} max={60_000_000} step={500_000} onChange={setAssets} />
            <Slider label="Value described specifically" value={assetsNamed} min={0} max={assets} step={100_000} onChange={setAssetsNamed} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Essential parts" value={`${validity}/5`} tone={validity === 5 ? 'best' : 'bad'} />
              <Stat label="Undescribed" value={rupeesShort(assets - assetsNamed)} tone={assets - assetsNamed > 0 ? 'bad' : 'best'} />
              <Stat label="Findable" value={parts.includes('original') ? 'yes' : 'no'} tone={parts.includes('original') ? 'best' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Registration of a will is optional under the Registration Act, 1908</li>
              <li>Probate is generally optional, though it is required in a few jurisdictions</li>
              <li>The residue clause decides everything the will does not name</li>
              <li className="text-white">An ambiguous bequest is what creates a dispute, not an unfair one</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A will is a short document with a long life, and it fails for boring reasons: a missing witness, an asset
        described too loosely to identify, a clause that quietly conflicts with the will it was meant to replace.
        Registration is optional, and probate is generally optional too, so the document does not need ceremony — it
        needs specificity, a named executor, a residue clause and two witnesses. Then it needs to be found. Write down
        what you own, describe each item precisely, say who gets what, add a sentence for everything you have not
        mentioned, sign it in front of two witnesses, and tell the executor where the original is. Revisit it whenever a
        birth, marriage, death or purchase changes the picture, because an out-of-date will is worse than none at all.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-075 */

export function L5InheritanceProcessor() {
  const [estate, setEstate] = useState(14_000_000)
  const [liabilities, setLiabilities] = useState(2_500_000)
  const [months, setMonths] = useState(1)
  const [liabilitiesCleared, setLiabilitiesCleared] = useState(false)
  const [titlesVerified, setTitlesVerified] = useState(false)
  const [inventory, setInventory] = useState(false)
  const [selling, setSelling] = useState(false)

  const net = estate - liabilities
  // Illustration of an inherited asset keeping the previous owner's cost: the
  // gain is measured against that cost, not against the value at inheritance.
  const previousCost = estate * 0.35
  const gain = Math.max(0, estate - previousCost)
  const ltcg = gain * 0.125

  const checks = [
    {
      ok: inventory,
      text: inventory
        ? 'Every asset is listed first, with the nomination, joint holding or bequest that applies to each one. This is the step that stops an asset being overlooked because nobody knew it existed.'
        : 'No inventory yet. The first step in an inheritance is a list — deposits, funds, shares, property, insurance, pension and anything held jointly — with the document that governs each one.',
    },
    {
      ok: liabilitiesCleared,
      text: liabilitiesCleared
        ? `Liabilities of ${rupees(liabilities)} are settled from the estate. A loan is repaid out of the estate before anything is distributed, and a secured loan against a specific asset remains attached to that asset.`
        : `${rupees(liabilities)} of liabilities are still outstanding. An heir who takes an asset takes it subject to the loan secured on it, so liabilities are settled first and are never simply inherited as cash.`,
    },
    {
      ok: titlesVerified,
      text: titlesVerified
        ? 'Title and records are updated — mutation, transmission in the depository, and name changes on each account. Until the record is in the heir’s name, the asset is legally still the deceased’s.'
        : 'Titles are not yet transferred. Deposits and securities move by transmission through the institution, and immovable property needs mutation in the municipal or revenue record. This is paperwork, and it is the step most often left undone.',
    },
    {
      ok: months >= 6,
      text: `Held ${months} month(s) before deciding. There is no tax reason to rush and a good non-tax one to wait: an inheritance is often the largest single sum a person has handled, and the decisions that go wrong are the ones made in the first weeks.`,
    },
    {
      ok: !selling,
      text: selling
        ? `Selling now would realise a long-term gain of about ${rupees(gain)}, restoring an illustration of ${rupees(ltcg)} of tax at 12.5%. An inherited asset keeps the previous owner’s cost and holding period, so the gain is measured from that earlier cost — not from the value on the day of death.`
        : 'Nothing is being sold yet. Holding is the default: no gain is taxed until there is a transfer, and the previous owner’s cost and holding period carry over when a sale eventually happens.',
    },
    {
      ok: net > 0,
      text: `Net estate after liabilities: ${rupees(net)}. Tax on an inheritance itself is nil — India has no inheritance tax — but income the inherited assets produce, and any gain when they are sold, are taxed in the heir’s hands under the regime shown in the chapter.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Work through the inheritance in order</h4>
          <div className="grid grid-cols-2 gap-2">
            <Toggle label="Inventory written first" on={inventory} onClick={() => setInventory((v) => !v)} />
            <Toggle label="Liabilities cleared" on={liabilitiesCleared} onClick={() => setLiabilitiesCleared((v) => !v)} />
            <Toggle label="Titles and records updated" on={titlesVerified} onClick={() => setTitlesVerified((v) => !v)} />
            <Toggle label="Selling immediately" on={selling} onClick={() => setSelling((v) => !v)} />
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Value of the estate" value={estate} min={1_000_000} max={80_000_000} step={500_000} onChange={setEstate} />
            <Slider label="Liabilities attached to it" value={liabilities} min={0} max={20_000_000} step={100_000} onChange={setLiabilities} />
            <Slider label="Months held before deciding" value={months} min={0} max={36} step={1} onChange={setMonths} format={(v) => `${v} months`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Net estate" value={rupeesShort(net)} />
              <Stat label="Tax on inheriting" value="nil" tone="best" />
              <Stat label="Tax if sold now" value={selling ? rupeesShort(ltcg) : '—'} tone={selling ? 'bad' : 'neutral'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Liabilities to settle first: {rupees(liabilities)}</li>
              <li>Illustrative previous owner’s cost: {rupees(previousCost)}</li>
              <li>Illustrative gain on a sale today: {rupees(gain)}</li>
              <li>Deposit insurance covers up to ₹5 lakh per depositor per bank, and it follows the depositor</li>
              <li className="text-white">An inherited asset keeps the previous owner’s cost and holding period</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        An inheritance is not a windfall with a tax form attached; it is a process with an order. Establish what passes
        and by which route, because nominations, joint holdings and the will can each cover a different item. Settle
        liabilities before distributing, since a secured loan travels with the asset it is secured on. Update titles
        and records, because an asset in someone else’s name is not usable. And then wait. India taxes no inheritance as
        such, and an inherited asset keeps the previous owner’s cost of acquisition and holding period, so there is no
        tax advantage in selling early — while there is a real advantage in deciding a large sum slowly, after the
        paperwork is complete.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-076 */

export function L5SuccessionPlanner() {
  const [businessValue, setBusinessValue] = useState(25_000_000)
  const [successors, setSuccessors] = useState(2)
  const [willCovers, setWillCovers] = useState(false)
  const [documents, setDocuments] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [transitionYears, setTransitionYears] = useState(0)

  const cashNeeded = businessValue * 0.4
  const readiness = [willCovers, documents, insurance, transitionYears >= 3].filter(Boolean).length
  const controlGap = successors === 0 ? 1 : transitionsGap(successors, transitionYears)

  function transitionsGap(n: number, years: number): number {
    const spread = n === 1 ? 1 : 1 / n
    const transitioned = Math.min(1, years / 5)
    return Math.max(0, spread * (1 - transitioned))
  }

  const checks = [
    {
      ok: documents,
      text: documents
        ? 'The firm’s own documents are checked — a partnership deed, articles, or a buy-sell agreement. These bind a share on death before a will does, so they set the frame the personal plan works inside.'
        : 'The firm’s own documents have not been checked. A partnership deed or the articles of a company usually decide what happens to a share on death, and a will cannot override them.',
    },
    {
      ok: willCovers,
      text: willCovers
        ? 'The will addresses the business interest explicitly, describing the share rather than the business in general, and naming who receives it.'
        : 'The will does not address the business interest. A solvent business passing in fragments to heirs who do not work in it is the classic way a company is destroyed by succession.',
    },
    {
      ok: insurance,
      text: insurance
        ? `Funding is arranged — keyman or buy-sell cover — so a successor can buy a share rather than having to find the money. The cover needed here is roughly ${rupeesShort(cashNeeded)} to keep control inside the business.`
        : `No funding arrangement. The tax and legal transfer is the easy part; the hard part is that ${rupeesShort(cashNeeded)} of value has to change hands, and without funding the estate has to sell a share in the open market.`,
    },
    {
      ok: transitionYears >= 3,
      text: `A transition of ${transitionYears} year(s) is planned. Ownership, control and knowledge do not move at the same speed, and a handover that runs for three to five years is the one that survives first contact with a bad quarter.`,
    },
    {
      ok: controlGap < 0.4,
      text: `Share of control still to be transferred: about ${Math.round(controlGap * 100)}%. Spreading ownership across ${successors} successor(s) reduces concentration risk, but only if the rules for decisions move with the shares.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Plan the handover, not just the will</h4>
          <div className="space-y-3">
            <Slider label="Value of the business interest" value={businessValue} min={1_000_000} max={200_000_000} step={1_000_000} onChange={setBusinessValue} />
            <Slider label="Successors who would take it" value={successors} min={0} max={5} step={1} onChange={setSuccessors} format={(v) => `${v}`} />
            <Slider label="Years planned for the transition" value={transitionYears} min={0} max={10} step={1} onChange={setTransitionYears} format={(v) => `${v} years`} />
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <Toggle label="Firm’s own documents reviewed" on={documents} onClick={() => setDocuments((v) => !v)} />
            <Toggle label="Will addresses the business interest" on={willCovers} onClick={() => setWillCovers((v) => !v)} />
            <Toggle label="Funding arranged (keyman or buy-sell)" on={insurance} onClick={() => setInsurance((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Business value" value={rupeesShort(businessValue)} />
              <Stat label="Funding needed" value={rupeesShort(cashNeeded)} tone={insurance ? 'best' : 'bad'} />
              <Stat label="Basics done" value={`${readiness}/4`} tone={readiness === 4 ? 'best' : 'neutral'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Successors: {successors} — {successors === 0 ? 'no plan at all' : `${Math.round((1 / Math.max(1, successors)) * 100)}% each on an equal split`}</li>
              <li>Control still to move: about {Math.round(controlGap * 100)}%</li>
              <li>A business interest needs the firm’s documents and the will to agree</li>
              <li className="text-white">Knowledge is the part that cannot be signed over in a single document</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Succession is the part of estate planning that is too big for a will. Three things move at once — ownership,
        control and the knowledge of how the business actually runs — and they move at different speeds. The firm’s own
        documents, a partnership deed or the articles, set the frame for a share on death. A will then says who gets it.
        Funding arrangements, through keyman cover or a buy-sell agreement, are what let a successor buy a share instead
        of the estate having to sell one. And the transition runs for years, with decisions and responsibility moving
        ahead of ownership, because the owner who leaves on Friday and hands over the keys on Saturday has planned a
        distribution, not a succession.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-077 */

const JOINT_MODES = [
  { key: 'single', label: 'Held in one name, with a nomination', survivor: false },
  { key: 'either', label: 'Either or survivor', survivor: true },
  { key: 'former', label: 'Former or survivor', survivor: true },
  { key: 'jointly', label: 'Operated jointly by both', survivor: false },
  { key: 'anyone', label: 'Anyone or survivor', survivor: true },
]

export function L5JointHoldingChooser() {
  const [mode, setMode] = useState('either')
  const [value, setValue] = useState(7_000_000)
  const [otherHeirs, setOtherHeirs] = useState(true)
  const [nomination, setNomination] = useState(true)
  const [intent, setIntent] = useState<'gift' | 'convenience'>('convenience')

  const chosen = JOINT_MODES.find((m) => m.key === mode)!
  const paysSurvivor = chosen.survivor

  const checks = [
    {
      ok: paysSurvivor || nomination,
      text: paysSurvivor
        ? 'The survivorship clause lets the institution pay the surviving holder and close the account without a succession certificate. That is convenience, and it is real: it is the difference between weeks and a year.'
        : nomination
          ? 'Held singly with a nomination, so the nominee may receive the balance. The nominee is a custodian; the heirs are entitled to it.'
          : 'Held singly with no nomination and no survivorship clause, so the family must go through the institution’s claim process with a succession certificate or an indemnity.',
    },
    {
      ok: !otherHeirs || intent === 'convenience',
      text: otherHeirs
        ? intent === 'convenience'
          ? 'There are other heirs, and the joint holding is being used for convenience — access, bill-paying, a parent and an adult child. That is the honest reason to hold jointly, provided everyone understands the survivor is not necessarily the owner.'
          : 'There are other heirs, and the joint holding is intended as a gift to the survivor. A survivorship clause is not a substitute for a will: the other heirs can still claim the amount, because the surviving holder receives it as a custodian, not as a beneficiary by right.'
        : 'There are no other heirs, so the survivorship outcome and the succession outcome agree. This is the only case where a joint holding does the whole job by itself.',
    },
    {
      ok: !!nomination,
      text: nomination
        ? 'A nomination is present as well. Held jointly, the survivorship clause usually governs first and the nomination follows; keep both accurate, and change them together.'
        : 'No nomination. A joint account without a nomination relies entirely on the survivorship clause, and a singly held account without either relies on a claim process.',
    },
    {
      ok: mode !== 'former' || intent === 'convenience',
      text:
        mode === 'former'
          ? 'In a former-or-survivor account the first-named holder operates it alone during their lifetime, and the second holder acts only after a death. It is a control arrangement, not a shared one.'
          : mode === 'jointly'
            ? 'An account operated jointly needs both signatures for everything, which protects both parties and slows down every transaction, including one needed in an emergency.'
            : 'The mode chosen matches the everyday use: whoever needs to pay can pay.',
    },
    {
      ok: true,
      text: `Value passing under this arrangement: ${rupees(value)}. A transfer between relatives is exempt from tax under section 56(2)(x), so nothing arises on the transfer itself — the question this chapter asks is succession, not tax.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Choose how the holding is worded</h4>
          <div className="grid grid-cols-1 gap-2">
            {JOINT_MODES.map((m) => (
              <Choice
                key={m.key}
                label={`${mode === m.key ? '✓ ' : '· '}${m.label}`}
                active={mode === m.key}
                onClick={() => setMode(m.key)}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Value held" value={value} min={100_000} max={40_000_000} step={100_000} onChange={setValue} />
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <Toggle label="There are other legal heirs" on={otherHeirs} onClick={() => setOtherHeirs((v) => !v)} />
            <Toggle label="A nomination is also recorded" on={nomination} onClick={() => setNomination((v) => !v)} />
            <Choice
              label={`${intent === 'convenience' ? '✓ ' : '· '}Held jointly for convenience`}
              active={intent === 'convenience'}
              onClick={() => setIntent('convenience')}
            />
            <Choice
              label={`${intent === 'gift' ? '✓ ' : '· '}Held jointly as a gift to the survivor`}
              active={intent === 'gift'}
              onClick={() => setIntent('gift')}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Value" value={rupeesShort(value)} />
              <Stat label="Survivor gets paid" value={paysSurvivor ? 'yes' : 'no'} tone={paysSurvivor ? 'best' : 'bad'} />
              <Stat label="Ownership decided" value={paysSurvivor ? 'not by wording' : 'by succession'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>On death of one holder: {chosen.survivor ? 'the surviving holder may operate the account' : 'the account is frozen pending the claim process'}</li>
              <li>Other heirs with a claim: {otherHeirs ? 'yes' : 'none'}</li>
              <li>Joint holding does not change income tax: the income is taxed by ownership, not by whose name is on the account</li>
              <li className="text-white">Survivorship tells the institution who to pay, not who owns the money</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Joint holding is easy to open and easy to misread. The wording on the account decides operational access: how
        the account is run in life, and who the bank may pay after a death. It does not decide ownership, and it is not
        a will. A survivor named under an either-or-survivor clause receives the balance as a custodian, and the other
        heirs keep their claim unless the survivor is also the sole heir or the person the will names. The reason people
        open joint accounts is usually convenience — an elderly parent adding an adult child, a couple paying bills from
        one account — and that is a perfectly good reason, provided everyone concerned knows what the account does and
        does not do, and provided the nomination beside it says the same thing.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-078 */

export function L5FamilyFinanceSetup() {
  const [incomeA, setIncomeA] = useState(90_000)
  const [incomeB, setIncomeB] = useState(60_000)
  const [shared, setShared] = useState(70_000)
  const [savingsRate, setSavingsRate] = useState(25)
  const [joint, setJoint] = useState(true)
  const [proRata, setProRata] = useState(true)
  const [visibility, setVisibility] = useState(false)
  const [bigLimit, setBigLimit] = useState(0)

  const household = incomeA + incomeB
  const surplus = household - shared
  const saved = (household * savingsRate) / 100
  const leftover = surplus - saved
  const shareA = proRata && household ? (incomeA / household) * shared : shared / 2
  const shareB = shared - shareA
  const bufferMonths = shared ? Math.max(0, saved * 12) / shared : 0

  const checks = [
    {
      ok: leftover >= 0,
      text:
        leftover >= 0
          ? `Each month, ${rupees(saved)} is set aside and ${rupees(leftover)} remains for everything else. A plan that runs a surplus is the only one that survives an ordinary surprise.`
          : `The plan is short by ${rupees(-leftover)} a month before anything unexpected. A saving target that cannot be met is worse than a smaller one that can, because it gets abandoned in month three.`,
    },
    {
      ok: visibility,
      text: visibility
        ? 'Both partners can see the shared accounts and the plan. Visibility is not surveillance: it is what makes the fallback arrangements work if one of you is out of action for a month.'
        : 'Only one partner sees the whole picture. If that person is ill, away or simply busy, nobody else can pay the bills or find the investments, and that is a household risk, not a personal one.',
    },
    {
      ok: joint || surplus > 0,
      text: joint
        ? `Shared costs of ${rupees(shared)} run through an account both can operate, so household obligations are met without chasing a transfer. Individuals keep their own accounts beside it.`
        : 'There is no joint account, so shared costs are met by transfers between individuals each month. It works, and it needs a written rule for who pays what, because the month one transfer is late is the month it becomes an argument.',
    },
    {
      ok: bigLimit > 0,
      text:
        bigLimit > 0
          ? `Purchases above ${rupees(bigLimit)} are agreed by both. A threshold turns a recurring negotiation into a single decision made once.`
          : 'There is no spending threshold, so every large purchase is negotiated from scratch at the moment it is wanted.',
    },
    {
      ok: bufferMonths >= 6,
      text: `At this saving rate the household builds about ${bufferMonths.toFixed(1)} months of shared costs in a year. The number to aim at is not fixed: it depends on how many incomes are at risk, and how long a gap between jobs would be.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Set the household up on paper</h4>
          <div className="space-y-3">
            <Slider label="Income A, monthly" value={incomeA} min={0} max={500_000} step={5_000} onChange={setIncomeA} />
            <Slider label="Income B, monthly" value={incomeB} min={0} max={500_000} step={5_000} onChange={setIncomeB} />
            <Slider label="Shared costs a month" value={shared} min={0} max={500_000} step={5_000} onChange={setShared} />
            <Slider label="Target saving rate" value={savingsRate} min={0} max={60} step={1} onChange={setSavingsRate} format={(v) => `${v}%`} />
            <Slider label="Agreed limit for a big purchase" value={bigLimit} min={0} max={200_000} step={5_000} onChange={setBigLimit} />
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <Toggle label="A joint account for shared costs" on={joint} onClick={() => setJoint((v) => !v)} />
            <Toggle label="Shared costs split in proportion to income" on={proRata} onClick={() => setProRata((v) => !v)} />
            <Toggle label="Both partners can see everything" on={visibility} onClick={() => setVisibility((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Household" value={rupeesShort(household)} />
              <Stat label="Shared cost" value={rupeesShort(shared)} tone={surplus >= 0 ? 'good' : 'bad'} />
              <Stat label="Saved a month" value={rupeesShort(saved)} tone={leftover >= 0 ? 'best' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Each partner’s share of the shared cost: {rupees(shareA)} and {rupees(shareB)}</li>
              <li>Left after saving: {rupees(leftover)}</li>
              <li>Buffer built in a year: {bufferMonths.toFixed(1)} months</li>
              <li>Money in each partner’s own account stays that person’s money</li>
              <li className="text-white">There is no joint tax status and no joint liability for a partner’s debts</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        A household is a small financial institution, and it runs better with a written constitution. Four questions
        cover almost all of it: who pays what, who sees what, who decides what, and what happens if one income stops.
        Answering them is unromantic and remarkably effective, because nearly every family money argument is one of
        those four questions being answered differently by two people who never said their answers out loud. Keep
        individual accounts for dignity and a shared account for obligations, split the shared cost in proportion to
        income so the arrangement is not quietly unfair, agree a limit above which purchases are discussed, and make
        sure both partners can find and operate everything if one of them is out of action.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-079 */

export function L5MarriageFinancePlan() {
  const [assetsA, setAssetsA] = useState(2_000_000)
  const [assetsB, setAssetsB] = useState(500_000)
  const [debtB, setDebtB] = useState(300_000)
  const [streedhan, setStreedhan] = useState(true)
  const [nominations, setNominations] = useState(false)
  const [jointPlan, setJointPlan] = useState(false)
  const [married, setMarried] = useState(true)

  const combined = assetsA + assetsB
  const inheritedBySpouse = married ? combined / 2 : 0
  const readiness = [streedhan, nominations, jointPlan].filter(Boolean).length

  const checks = [
    {
      ok: !married || inheritedBySpouse > 0,
      text: married
        ? `On marriage, each spouse becomes an heir under the applicable succession law. Without a will the estate is divided by that rule, so a spouse’s share is decided by the law rather than by either partner.`
        : 'Not married, so neither partner is an heir to the other and nothing passes by default between them. A will is the only route.',
    },
    {
      ok: streedhan,
      text: streedhan
        ? 'Streedhan — a woman’s own property, from gifts, inheritance or her own earnings — is tracked separately and remains hers. Keeping records of what came from where is what makes that meaningful later.'
        : 'No record is kept of what belongs to whom. Where everything is pooled without records, the legal distinction between each spouse’s own property and joint money is hard to prove when it matters.',
    },
    {
      ok: nominations,
      text: nominations
        ? 'Nominations and beneficiaries are updated after the marriage, so a policy or account opened years ago no longer names a parent or an old form.'
        : 'Nominations have not been updated. A policy or account still naming someone from before is the most common way a marriage changes a plan on paper while leaving the documents saying something else.',
    },
    {
      ok: jointPlan,
      text: jointPlan
        ? 'The couple has agreed how money will be held: individual accounts kept, a shared account for shared costs, and each person’s investments visible to the other.'
        : 'No agreement yet on how money will be held. India has no community of property on marriage, so nothing is shared automatically — it is all a matter of what the couple decides and records.',
    },
    {
      ok: debtB === 0,
      text: `Debt brought into a marriage — here ${rupees(debtB)} — stays that person’s debt. A spouse does not inherit a partner’s liabilities, though household finances feel the repayment, so it belongs in the plan whichever way the law reads.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Work out the defaults, then override them</h4>
          <div className="space-y-3">
            <Slider label="Partner A’s own assets" value={assetsA} min={0} max={30_000_000} step={100_000} onChange={setAssetsA} />
            <Slider label="Partner B’s own assets" value={assetsB} min={0} max={30_000_000} step={100_000} onChange={setAssetsB} />
            <Slider label="Debt brought into the marriage" value={debtB} min={0} max={10_000_000} step={50_000} onChange={setDebtB} />
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <Toggle label="Married" on={married} onClick={() => setMarried((v) => !v)} />
            <Toggle label="Streedhan and own property tracked" on={streedhan} onClick={() => setStreedhan((v) => !v)} />
            <Toggle label="Nominations updated after marriage" on={nominations} onClick={() => setNominations((v) => !v)} />
            <Toggle label="Couple agreed how money is held" on={jointPlan} onClick={() => setJointPlan((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Combined assets" value={rupeesShort(combined)} />
              <Stat label="Spouse’s default share" value={married ? rupeesShort(inheritedBySpouse) : 'nil'} tone={married ? 'good' : 'bad'} />
              <Stat label="Plan in place" value={`${readiness}/3`} tone={readiness === 3 ? 'best' : 'neutral'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Assets each partner keeps: {rupees(assetsA)} and {rupees(assetsB)}</li>
              <li>Debt that stays with one partner: {rupees(debtB)}</li>
              <li>Gifts received on marriage are exempt from tax under section 56(2)(x)</li>
              <li>There is no inheritance tax, and no joint tax status for a married couple</li>
              <li className="text-white">A spouse becomes an heir on marriage; without a will the law decides the share</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Marriage changes a financial plan through defaults rather than through transfers. India has no community of
        property on marriage: assets do not become joint, income is not pooled for tax, and one partner’s debts do not
        become the other’s. What changes is succession — a spouse becomes an heir — and what people notice is what does
        not change, which is why the practical work is a short list. Record what each partner brought in and what was
        earned after. Keep nominating and beneficiary details current, because they are the documents that actually
        decide who receives a policy or an account. Decide deliberately how shared costs are met, and revisit all of it
        when a child arrives, a house is bought, a business starts or a parent needs support.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-080 */

export function L5ParentCareBudget() {
  const [support, setSupport] = useState(15_000)
  const [ageA, setAgeA] = useState(68)
  const [ageB, setAgeB] = useState(65)
  const [premium, setPremium] = useState(38_000)
  const [medicines, setMedicines] = useState(4_000)
  const [buffer, setBuffer] = useState(200_000)
  const [covered, setCovered] = useState(true)
  const [seniorSelf, setSeniorSelf] = useState(false)

  const seniorParent = ageA >= 60 || ageB >= 60
  const supportYear = support * 12
  const medicinesYear = medicines * 12
  const totalYear = supportYear + medicinesYear + premium
  // Section 80D: ₹50,000 where a parent is a senior citizen, else ₹25,000; the
  // same split applies to the self-and-family limit. Available under the old
  // regime; the new regime allows no chapter VI-A deductions.
  const parentCap = seniorParent ? 50_000 : 25_000
  const selfCap = seniorSelf ? 50_000 : 25_000
  const deductible = Math.min(premium, parentCap) + Math.min(premium, selfCap)
  const emergencyMonths = totalYear ? buffer / (totalYear / 12) : 0

  const checks = [
    {
      ok: covered,
      text: covered
        ? `The parents are covered by health insurance at ${rupees(premium)} a year. Their cover is a separate policy in their name: an employer's policy for you does not reach them, and a policy in their names survives your own job change.`
        : `No separate cover for the parents. Their hospitalisation would fall entirely on the family's cash flow, and at this age a single event can cost more than the whole of this annual budget.`,
    },
    {
      ok: buffer >= totalYear,
      text: `Medical buffer of ${rupees(buffer)} — about ${emergencyMonths.toFixed(1)} months of this annual commitment. A buffer exists because insurance pays after the event, and the hospital asks at the counter.`,
    },
    {
      ok: seniorParent && premium > 0,
      text: seniorParent
        ? `A parent is 60 or over, so the section 80D limit for their premium is ${rupees(parentCap)} a year. The premium here is ${rupees(premium)}, so about ${rupees(deductible)} of the total premium is deductible — in the old regime only, where you are claiming deductions.`
        : `Neither parent is a senior citizen yet, so the section 80D limit for their premium is ${rupees(parentCap)} a year. This is a reason to buy cover before the premium and the limits are shaped by age.`,
    },
    {
      ok: support > 0,
      text: support > 0
        ? `Monthly support of ${rupees(support)}, or ${rupees(supportYear)} a year. Put it on a scheduled transfer rather than paying as asked: an unplanned contribution is the one that gets skipped under pressure.`
        : 'No monthly support is budgeted. Where a parent is financially dependent, the amount should be decided before it is needed, and reviewed every year with the cost of living.',
    },
    {
      ok: medicinesYear < supportYear,
      text: `Recurring medicines cost ${rupees(medicinesYear)} a year — the line most family budgets omit, because it is neither insurance nor a monthly transfer. Total annual commitment: ${rupees(totalYear)}.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Budget the support properly</h4>
          <div className="space-y-3">
            <Slider label="Monthly support" value={support} min={0} max={100_000} step={1_000} onChange={setSupport} />
            <Slider label="Age of the elder parent" value={ageA} min={40} max={95} step={1} onChange={setAgeA} format={(v) => `${v}`} />
            <Slider label="Age of the other parent" value={ageB} min={40} max={95} step={1} onChange={setAgeB} format={(v) => `${v}`} />
            <Slider label="Health insurance premium, a year" value={premium} min={0} max={200_000} step={1_000} onChange={setPremium} />
            <Slider label="Medicines and routine care, a month" value={medicines} min={0} max={50_000} step={500} onChange={setMedicines} />
            <Slider label="Medical contingency buffer" value={buffer} min={0} max={3_000_000} step={25_000} onChange={setBuffer} />
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <Toggle label="Parents have their own cover" on={covered} onClick={() => setCovered((v) => !v)} />
            <Toggle label="You are 60 or over yourself" on={seniorSelf} onClick={() => setSeniorSelf((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Commitment a year" value={rupeesShort(totalYear)} />
              <Stat label="Mediclaim deductible" value={rupees(deductible)} tone="best" />
              <Stat label="Buffer months" value={emergencyMonths.toFixed(1)} tone={emergencyMonths >= 6 ? 'best' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Monthly support over a year: {rupees(supportYear)}</li>
              <li>Medicines and routine care: {rupees(medicinesYear)}</li>
              <li>Premium: {rupees(premium)} — deductible up to {rupees(parentCap)} for parents under section 80D</li>
              <li>Section 80D is available in the old regime; the new regime allows no such deduction</li>
              <li className="text-white">A separate policy in the parents’ names is what survives your own job change</li>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Debrief title="Debrief">
        Supporting a parent is a recurring commitment with an uninsurable tail. Budget it in layers. The first is cover:
        a separate policy in the parents’ names, because your employer’s cover does not reach them and does not follow
        you out of a job. The second is the monthly transfer, best done as a scheduled payment and indexed each year so
        it does not quietly shrink in real terms. The third is medicines and routine care, which is the line that never
        appears in a budget until it is large. The fourth is a cash buffer, because insurance reimburses after the event
        and the counter asks first. The tax benefit under section 80D is real but secondary, and only in the old regime:
        choose the policy for its cover and its exclusions, not for the deduction attached to its premium.
      </Debrief>
    </div>
  )
}
