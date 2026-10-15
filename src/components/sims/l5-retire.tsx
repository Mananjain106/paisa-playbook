import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band two, batch 2 labs (chapters l5-030 to l5-039).
 *
 * Ten separate simulations, one per chapter:
 *   l5-pe-waterfall            draw down a commitment, pay the fees, split the carry
 *   l5-vc-portfolio            see what a power-law portfolio does to the average
 *   l5-liquidity-map           test which holdings are actually available in a shock
 *   l5-total-cost-of-ownership every layer of cost on one holding, in rupees
 *   l5-tax-planner             set off a loss, price a holding period, plan the year
 *   l5-retirement-projector    replace a salary with streams that keep up with prices
 *   l5-independence-number     turn a multiple of spending into a date
 *   l5-fire-stress-test        ruin a plan on purpose, then repair it
 *   l5-savings-rate-lab        measure the rate honestly and move the date with it
 *   l5-passive-income-audit    score streams on effort, tax head and concentration
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: base expense ratio reported from April 2026 under the mutual fund
 * regulations of 2026, with the distribution cost of a regular plan sitting
 * outside that headline; capital-gains treatment of 20% short term and 12.5%
 * long term for listed equity above a ₹1.25 lakh exemption, twelve months for
 * listed equity and twenty-four months for other assets; capital losses set off
 * only against capital gains, carried forward for eight years, never against
 * salary; the NPS exit rule of up to 80% as a lump sum with at least 20% to an
 * annuity after the December 2025 amendment, with the lump sum exempt under
 * section 10(12A); employer NPS contribution deductible to 14% of basic pay in
 * the new regime and an extra ₹50,000 for own contributions in the old one;
 * interest on own EPF contributions above ₹2.5 lakh a year being taxable; tax
 * collected at source on rent above ₹6 lakh a year and on dividends above
 * ₹10,000. All amounts, returns and outcomes are illustrative.
 */

/** The year the app was loaded, read once rather than during a render. */
const CURRENT_YEAR = new Date().getFullYear()

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

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/* ------------------------------------------------------------------ l5-030 */

export function L5PeWaterfall() {
  const [commitment, setCommitment] = useState(2_500_000)
  const [managedYears, setManagedYears] = useState(10)
  const [feeOnCommitted, setFeeOnCommitted] = useState(2)
  const [grossMultiple, setGrossMultiple] = useState(2.1)
  const [hurdle, setHurdle] = useState(8)
  const [carry, setCarry] = useState(20)
  const [liquidNetWorth, setLiquidNetWorth] = useState(9_000_000)

  const managementFees = commitment * (feeOnCommitted / 100) * managedYears
  const invested = commitment * 0.9
  const grossProceeds = commitment * grossMultiple
  const afterFees = grossProceeds - managementFees
  const profit = Math.max(0, afterFees - commitment)
  // Carry applies only to profit above the hurdle, on the commitment.
  const hurdleAmount = commitment * (hurdle / 100) * (managedYears / 10)
  const carryBase = Math.max(0, profit - hurdleAmount)
  const carried = carryBase * (carry / 100)
  const netProceeds = afterFees - carried
  const netMultiple = netProceeds / commitment
  const feeShare = managementFees + carried > 0 ? (managementFees + carried) / Math.max(grossProceeds, 1) : 0
  const commitmentShare = commitment / Math.max(liquidNetWorth, 1)
  const netAnnual = (Math.pow(Math.max(netMultiple, 0.01), 1 / managedYears) - 1) * 100
  const grossAnnual = (Math.pow(grossMultiple, 1 / managedYears) - 1) * 100

  const checks = [
    {
      ok: commitmentShare <= 0.15,
      text: `This commitment is ${(commitmentShare * 100).toFixed(0)}% of your liquid net worth. Private equity money cannot be called back once committed, so a single fund is usually capped in single digits.`,
    },
    {
      ok: managementFees + carried < grossProceeds * 0.25,
      text: `The manager takes ${rupees(managementFees + carried)} of ${rupees(grossProceeds)} gross — ${(feeShare * 100).toFixed(1)}% of the outcome, charged before the multiple you were sold.`,
    },
    {
      ok: netMultiple >= 1.5,
      text: `A gross multiple of ${grossMultiple.toFixed(2)}x becomes ${netMultiple.toFixed(2)}x after fees and carry: ${grossAnnual.toFixed(1)}% a year gross, ${netAnnual.toFixed(1)}% net.`,
    },
    {
      ok: managedYears >= 8,
      text: `Money committed here is unavailable for about ${managedYears} years, and the deep negative years come first. Anything you might need inside that window does not belong in this fund.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">The commitment and its fees</h4>
          <div className="space-y-3">
            <Slider label="Commitment" value={commitment} min={500_000} max={20_000_000} step={100_000} onChange={setCommitment} />
            <Slider label="Fund life" value={managedYears} min={6} max={14} step={1} onChange={setManagedYears} format={(v) => `${v} years`} />
            <Slider label="Management fee, on committed capital" value={feeOnCommitted} min={0.5} max={2.5} step={0.25} onChange={setFeeOnCommitted} format={(v) => `${v.toFixed(2)}% a year`} />
            <Slider label="Gross multiple over the life" value={grossMultiple} min={1} max={3.5} step={0.05} onChange={setGrossMultiple} format={(v) => `${v.toFixed(2)}x`} />
            <Slider label="Hurdle before carry" value={hurdle} min={0} max={15} step={1} onChange={setHurdle} format={(v) => `${v}% a year`} />
            <Slider label="Carried interest" value={carry} min={0} max={30} step={1} onChange={setCarry} format={(v) => `${v}%`} />
            <Slider label="Your liquid net worth" value={liquidNetWorth} min={1_000_000} max={50_000_000} step={500_000} onChange={setLiquidNetWorth} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Net multiple" value={`${netMultiple.toFixed(2)}x`} tone={netMultiple >= 1.5 ? 'good' : 'bad'} />
              <Stat label="Profit to you" value={rupeesShort(netProceeds - commitment)} tone={netProceeds > commitment ? 'good' : 'bad'} />
              <Stat label="To the manager" value={rupeesShort(managementFees + carried)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Committed and drawn: {rupees(invested)}</li>
              <li>Gross proceeds from exits: {rupees(grossProceeds)}</li>
              <li>less management fees over the life: −{rupees(managementFees)}</li>
              <li>less carried interest above the hurdle: −{rupees(carried)}</li>
              <li className="text-white">Net to you: {rupees(netProceeds)}</li>
              <li>Net return a year: {netAnnual.toFixed(1)}%</li>
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
        Private equity pays its managers first and its investors later, and the order explains the J curve. A 2% fee on
        committed capital is charged from year one on money that has not been invested, and carried interest takes a
        fifth of the profit above a hurdle that is expressed as a rate rather than an amount. Set a gross multiple of
        2.1x against ten years of fees and carry and the net multiple is materially smaller — which is the whole lesson.
        The size of the commitment is the second half of it: this money is unavailable for a decade and cannot be
        recalled, so it has to be a small share of what you can genuinely leave alone.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-031 */

export function L5VcPortfolio() {
  const [bets, setBets] = useState(20)
  const [perBet, setPerBet] = useState(100_000)
  const [failRate, setFailRate] = useState(60)
  const [winnerMultiple, setWinnerMultiple] = useState(20)
  const [smallWinners, setSmallWinners] = useState(3)
  const [smallMultiple, setSmallMultiple] = useState(3)

  const total = bets * perBet
  const failures = Math.round((bets * failRate) / 100)
  const winners = Math.max(0, bets - failures - smallWinners)
  const value = smallWinners * perBet * smallMultiple + winners * perBet * winnerMultiple
  const multiple = value / total
  const winnerShare = value > 0 ? (winners * perBet * winnerMultiple) / value : 0
  const medianOutcome = perBet // the middle bet returns roughly nothing
  const perBetLoss = perBet * (failRate / 100)

  const checks = [
    {
      ok: perBet <= total * 0.1,
      text: `Each bet is ${rupees(perBet)} of ${bets} positions. Venture outcomes are decided by a handful of winners, so the position size has to assume most of them return nothing.`,
    },
    {
      ok: winnerShare <= 0.85,
      text: `The best ${winners} position(s) produce ${(winnerShare * 100).toFixed(0)}% of the value. A fund with one dominating holding is a single bet wearing a portfolio's clothes.`,
    },
    {
      ok: failRate <= 70,
      text: `${failures} of ${bets} positions return nothing at all. Expected loss on a single bet at this rate is about ${rupees(perBetLoss)} — the money has to be money you can write off.`,
    },
    {
      ok: multiple >= 1,
      text: `The portfolio returns ${multiple.toFixed(2)}x overall, while the median position returns about ${rupees(medianOutcome)} on ${rupees(perBet)}. The average and the middle are different numbers.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Size the bets, not the hope</h4>
          <div className="space-y-3">
            <Slider label="Number of positions" value={bets} min={5} max={50} step={1} onChange={setBets} format={(v) => `${v} bets`} />
            <Slider label="Amount per position" value={perBet} min={25_000} max={1_000_000} step={25_000} onChange={setPerBet} />
            <Slider label="Share that return nothing" value={failRate} min={30} max={85} step={5} onChange={setFailRate} format={(v) => `${v}%`} />
            <Slider label="Small winners" value={smallWinners} min={0} max={8} step={1} onChange={setSmallWinners} format={(v) => `${v} bets`} />
            <Slider label="Their multiple" value={smallMultiple} min={1} max={6} step={0.5} onChange={setSmallMultiple} format={(v) => `${v.toFixed(1)}x`} />
            <Slider label="The one that works" value={winnerMultiple} min={5} max={50} step={1} onChange={setWinnerMultiple} format={(v) => `${v}x`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Invested" value={rupeesShort(total)} />
              <Stat label="Value returned" value={rupeesShort(value)} tone={multiple >= 1 ? 'good' : 'bad'} />
              <Stat label="Multiple" value={`${multiple.toFixed(2)}x`} tone={multiple >= 1 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Positions returning nothing: {failures} of {bets}</li>
              <li>Small winners at {smallMultiple.toFixed(1)}x: {smallWinners}</li>
              <li>Position(s) at {winnerMultiple}x: {winners}</li>
              <li className="text-white">Share of value from the top holding: {(winnerShare * 100).toFixed(0)}%</li>
              <li>The middle position returns: {rupees(medianOutcome)} on {rupees(perBet)}</li>
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
        Venture returns follow a power law, and the two numbers that describe it — the average and the middle — disagree.
        In the setup above the portfolio can return a respectable multiple while the typical position returns nothing,
        because one holding does the work. That has three consequences worth carrying out of this lab. Position size has
        to assume a total loss, since most positions will be one. The number of positions matters more than the choice
        of any one of them, because the winner cannot be identified in advance. And because a fund is itself a single
        position in your portfolio, an allocation to venture is a bet on the manager's access as much as on the
        businesses.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-032 */

export function L5LiquidityMap() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(70_000)
  const [cash, setCash] = useState(300_000)
  const [liquidFunds, setLiquidFunds] = useState(250_000)
  const [equity, setEquity] = useState(1_800_000)
  const [taxSaver, setTaxSaver] = useState(500_000)
  const [property, setProperty] = useState(4_000_000)
  const [monthsOut, setMonthsOut] = useState(9)

  const available = cash + liquidFunds
  const monthsCovered = available / Math.max(monthlyExpenses, 1)
  const need = monthsOut * monthlyExpenses
  const shortfall = Math.max(0, need - available)
  const forcedSale = Math.min(shortfall, equity) // sell equity, possibly at a 40% discount
  const saleProceeds = forcedSale * 0.6
  const stillShort = Math.max(0, shortfall - saleProceeds)
  const lockedShare = taxSaver + property
  const totalAssets = cash + liquidFunds + equity + taxSaver + property
  const lockedPct = lockedShare / Math.max(totalAssets, 1)

  const checks = [
    {
      ok: monthsCovered >= 6,
      text: `Available the day it is needed: ${rupees(available)} — ${monthsCovered.toFixed(1)} months of spending. Six months is the floor, and it is spent without touching anything invested.`,
    },
    {
      ok: shortfall === 0,
      text: shortfall === 0
        ? `A ${monthsOut}-month interruption is covered from cash and liquid funds, so nothing has to be sold in a falling market.`
        : `A ${monthsOut}-month interruption needs ${rupees(need)} and leaves a ${rupees(shortfall)} gap, which forces a sale.`,
    },
    {
      ok: stillShort === 0 && shortfall === 0,
      text: shortfall === 0
        ? 'No forced sale, so no loss is crystallised at the bottom of a fall.'
        : `Selling ${rupees(forcedSale)} of equity in a 40% drawdown realises only ${rupees(saleProceeds)}, and ${rupees(stillShort)} of the need is still unmet.`,
    },
    {
      ok: lockedPct <= 0.5,
      text: `${(lockedPct * 100).toFixed(0)}% of your assets sit in tax-saver deposits and one property, both of which take years to convert. Liquidity is measured on the whole balance sheet, not the portfolio.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">What you own, by how fast it converts</h4>
          <div className="space-y-3">
            <Slider label="Monthly expenses" value={monthlyExpenses} min={20_000} max={300_000} step={5_000} onChange={setMonthlyExpenses} />
            <Slider label="Savings and sweep balances" value={cash} min={0} max={2_000_000} step={25_000} onChange={setCash} />
            <Slider label="Liquid and overnight funds" value={liquidFunds} min={0} max={2_000_000} step={25_000} onChange={setLiquidFunds} />
            <Slider label="Equity funds and shares" value={equity} min={0} max={10_000_000} step={100_000} onChange={setEquity} />
            <Slider label="Tax-saver fixed deposits" value={taxSaver} min={0} max={3_000_000} step={50_000} onChange={setTaxSaver} />
            <Slider label="Property" value={property} min={0} max={20_000_000} step={500_000} onChange={setProperty} />
            <Slider label="Months without income" value={monthsOut} min={0} max={24} step={1} onChange={setMonthsOut} format={(v) => `${v} months`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Available now" value={rupeesShort(available)} tone={monthsCovered >= 6 ? 'good' : 'bad'} />
              <Stat label="Months covered" value={monthsCovered.toFixed(1)} tone={monthsCovered >= 6 ? 'good' : 'bad'} />
              <Stat label="Forced sale" value={rupeesShort(forcedSale)} tone={forcedSale === 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Need for {monthsOut} months: {rupees(need)}</li>
              <li>Liquid cover: {rupees(available)}</li>
              <li>Shortfall: {rupees(shortfall)}</li>
              <li className="text-white">If it must come from equity in a 40% fall: {rupees(saleProceeds)} recovered</li>
              <li>Locked away for years: {rupeesShort(lockedShare)} of {rupeesShort(totalAssets)}</li>
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
        Liquidity is not a property of an asset in the abstract; it is a relationship between the asset and the date you
        need the money. A tax-saver deposit is safe and useless in month four. Equity is liquid on paper and expensive in
        practice when the sale happens in a fall, because the sale fixes a loss that the interruption did not require.
        The lab prices that: draw the interruption from cash and liquid funds and nothing is crystallised; draw it from
        equity in a 40% drawdown and a need of one amount becomes a sale of nearly double it. Six months of expenses is
        the floor. The number that matters is not how much you own but how much of it can be produced in a week without
        regret.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-033 */

export function L5TotalCostOfOwnership() {
  const [corpus, setCorpus] = useState(2_500_000)
  const [years, setYears] = useState(20)
  const [grossReturn, setGrossReturn] = useState(11)
  const [baseExpense, setBaseExpense] = useState(0.9)
  const [distribution, setDistribution] = useState(0.9)
  const [advisory, setAdvisory] = useState(0.5)
  const [roundTrips, setRoundTrips] = useState(1)
  const [products, setProducts] = useState(4)

  const regular = baseExpense + distribution + advisory
  const direct = baseExpense + advisory
  const roundTripCost = 0.6 * roundTrips

  const grow = (netPct: number) => corpus * Math.pow(1 + (grossReturn - netPct) / 100, years)
  const regularEnd = grow(regular)
  const directEnd = grow(direct)
  const costOfRegular = regularEnd - corpus * Math.pow(1 + grossReturn / 100, years)
  const gap = directEnd - regularEnd
  const costPerYear = Math.abs(costOfRegular / years)
  const exitLoad = corpus * (roundTripCost / 100)
  // Each additional product adds its own minimum ticket and its own exit load.
  const productCost = (products - 1) * exitLoad * 0.25

  const checks = [
    {
      ok: distribution === 0,
      text: distribution === 0
        ? 'No distribution cost, which is what a direct plan means: the same portfolio without the commission.'
        : `The distribution cost of ${distribution.toFixed(2)}% a year stays inside the fund and is not part of the base expense ratio reported from April 2026. Add it back before comparing plans.`,
    },
    {
      ok: advisory <= 0.5,
      text: `Advisory and platform charges of ${advisory.toFixed(2)}% a year are billed outside the fund. They buy something or they are a cost: the test is whether the advice changes a decision.`,
    },
    {
      ok: products <= 3,
      text: `${products} products each carry their own spread, exit load and minimum ticket — about ${rupees(productCost)} of avoidable friction for the same exposure.`,
    },
    {
      ok: gap <= corpus * 0.15,
      text: `Over ${years} years the difference between these two ways of holding the same fund is ${rupeesShort(gap)}. That is the price of the wrapper, not of the market.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Every layer, on one holding</h4>
          <div className="space-y-3">
            <Slider label="Amount invested" value={corpus} min={100_000} max={20_000_000} step={100_000} onChange={setCorpus} />
            <Slider label="Years held" value={years} min={1} max={35} step={1} onChange={setYears} format={(v) => `${v} years`} />
            <Slider label="Gross return from the portfolio" value={grossReturn} min={6} max={16} step={0.5} onChange={setGrossReturn} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Base expense ratio" value={baseExpense} min={0.05} max={2.5} step={0.05} onChange={setBaseExpense} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Distribution cost, regular plan" value={distribution} min={0} max={1.5} step={0.05} onChange={setDistribution} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Advisory or platform fee" value={advisory} min={0} max={1.5} step={0.05} onChange={setAdvisory} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Round trips in the period" value={roundTrips} min={0} max={6} step={1} onChange={setRoundTrips} format={(v) => `${v}`} />
            <Slider label="Products for the same exposure" value={products} min={1} max={10} step={1} onChange={setProducts} format={(v) => `${v}`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Cost a year" value={rupeesShort(costPerYear)} />
              <Stat label="Direct plan ends at" value={rupeesShort(directEnd)} tone="good" />
              <Stat label="Regular plan ends at" value={rupeesShort(regularEnd)} tone="bad" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Total annual cost, regular plan: {regular.toFixed(2)}%</li>
              <li>Total annual cost, direct plan: {direct.toFixed(2)}%</li>
              <li>Difference over {years} years: {rupees(gap)}</li>
              <li>Exit load on one round trip: {rupees(exitLoad)}</li>
              <li className="text-white">Gap from holding {products} products instead of one: {rupees(productCost)}</li>
              <li>Value lost to a {regular.toFixed(2)}% cost over {years} years: {rupees(Math.abs(costOfRegular))}</li>
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
        A fee is a percentage of your money and a rupee amount of your time. Read as a percentage it looks like
        housekeeping; read as rupees over twenty years it is often the largest single line in the outcome. The 2026
        reporting change makes the comparison harder before it makes it easier: the base expense ratio is now published
        on its own, which is honest, and the distribution cost that a regular plan pays is not inside that number, which
        is why the two plans are not comparable from the headline alone. The other costs never appeared on a factsheet at
        all — advisory fees, entry and exit loads, brokerage and the spread — and they are charged whether or not the
        fund does well. Total them, convert them to rupees a year, and ask what the money bought: a portfolio, or a
        wrapper around one.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-034 */

export function L5TaxPlanner() {
  const [stcg, setStcg] = useState(400_000)
  const [ltcg, setLtcg] = useState(900_000)
  const [stcl, setStcl] = useState(120_000)
  const [ltcl, setLtcl] = useState(0)
  const [salary, setSalary] = useState(1_800_000)
  const [holdingMonths, setHoldingMonths] = useState(11)
  const [unrealisedGain, setUnrealisedGain] = useState(250_000)

  // Short-term losses offset short-term gains first, then long-term gains.
  const stcgAfterStcl = Math.max(0, stcg - stcl)
  const leftoverStcl = Math.max(0, stcl - stcg)
  const ltcgAfterStcl = Math.max(0, ltcg - leftoverStcl)
  // Long-term losses only offset long-term gains.
  const ltcgNet = Math.max(0, ltcgAfterStcl - ltcl)
  const ltcgTaxable = Math.max(0, ltcgNet - 125_000)
  const stcgTax = stcgAfterStcl * 0.2
  const ltcgTax = ltcgTaxable * 0.125
  const totalTax = stcgTax + ltcgTax
  const effectiveRate = (stcg + ltcg) > 0 ? totalTax / (stcg + ltcg) : 0
  // Whether waiting for the 12-month mark changes the rate on this holding.
  const monthsToWait = Math.max(0, 12 - holdingMonths)
  const taxIfSoldNow = unrealisedGain * 0.2
  const taxAfterWaiting = unrealisedGain * 0.125
  const saved = taxIfSoldNow - taxAfterWaiting
  const unusedLoss = leftoverStcl > 0 ? leftoverStcl - ltcgAfterStcl + ltcl : Math.max(0, ltcl - ltcgAfterStcl)
  const salaryUntouched = salary * 0.3 // slab tax, illustrative

  const checks = [
    {
      ok: unusedLoss === 0,
      text: unusedLoss > 0
        ? `${rupees(unusedLoss)} of loss is left unused. Capital losses survive eight years only if the return reports them, and they can never be set off against the salary of ${rupees(salary)}.`
        : `Every rupee of loss is used: against the short-term gains first, then the long-term gains. Nothing is wasted and nothing is carried forward.`,
    },
    {
      ok: monthsToWait === 0,
      text:
        monthsToWait === 0
          ? 'This holding has passed the twelve months that make a listed-equity gain long term, so the rate is 12.5% above the ₹1.25 lakh exemption rather than 20%.'
          : `Held ${holdingMonths} months, this gain is short term at 20%. Waiting ${monthsToWait} more month(s) would move it to 12.5% and save ${rupees(saved)} — the cheapest tax planning available.`,
    },
    {
      ok: ltcl <= ltcg,
      text: `A long-term loss of ${rupees(ltcl)} can only ever offset long-term gains, while a short-term loss can offset either. That asymmetry decides the order losses are used in.`,
    },
    {
      ok: effectiveRate <= 0.15,
      text: `Tax on the gains is ${rupees(totalTax)} — an effective ${(effectiveRate * 100).toFixed(1)}% of ${rupees(stcg + ltcg)} — against ${rupees(salaryUntouched)} of slab tax on the salary, which no capital loss can touch.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Plan the year, not the trade</h4>
          <div className="space-y-3">
            <Slider label="Short-term gains realised" value={stcg} min={0} max={3_000_000} step={50_000} onChange={setStcg} />
            <Slider label="Long-term gains realised" value={ltcg} min={0} max={5_000_000} step={50_000} onChange={setLtcg} />
            <Slider label="Short-term losses available" value={stcl} min={0} max={1_000_000} step={10_000} onChange={setStcl} />
            <Slider label="Long-term losses available" value={ltcl} min={0} max={1_000_000} step={10_000} onChange={setLtcl} />
            <Slider label="Salary income" value={salary} min={500_000} max={5_000_000} step={100_000} onChange={setSalary} />
            <Slider label="Months this holding has been held" value={holdingMonths} min={1} max={24} step={1} onChange={setHoldingMonths} format={(v) => `${v} months`} />
            <Slider label="Unrealised gain on that holding" value={unrealisedGain} min={0} max={2_000_000} step={25_000} onChange={setUnrealisedGain} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Tax on gains" value={rupeesShort(totalTax)} tone={totalTax === 0 ? 'good' : 'bad'} />
              <Stat label="Effective rate" value={`${(effectiveRate * 100).toFixed(1)}%`} />
              <Stat label="Exemption used" value={ltcgNet > 0 ? rupeesShort(Math.min(125_000, ltcgNet)) : rupees(0)} tone="good" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Short-term gains after losses: {rupees(stcgAfterStcl)} at 20% = {rupees(stcgTax)}</li>
              <li>Long-term gains after losses: {rupees(ltcgNet)}</li>
              <li>of which exempt: {rupees(Math.min(125_000, ltcgNet))}</li>
              <li>Long-term tax at 12.5%: {rupees(ltcgTax)}</li>
              <li className="text-white">Total: {rupees(totalTax)}</li>
              <li>Cost of selling this holding before twelve months: {rupees(taxIfSoldNow)} instead of {rupees(taxAfterWaiting)}</li>
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
        Tax planning at this level is mostly about three dates and one habit. The dates are the twelve months that make a
        listed-equity gain long term, the twenty-four months that do the same for everything else, and the end of the
        tax year, which is when losses have to have been realised to be usable against this year's gains. The habit is
        keeping a record: a capital loss is only carried forward for eight years if the year it arose was filed with the
        loss in it, and an unused loss that is never reported is simply gone. Note what is not possible: a loss on your
        portfolio cannot reduce the tax on your salary, which is why the ordering rules — short-term losses against
        either kind of gain, long-term losses only against long-term gains — are the ones that decide the arithmetic.
      </Debrief>
    </div>
  )
}
/* ------------------------------------------------------------------ l5-035 */

export function L5RetirementProjector() {
  const [age, setAge] = useState(32)
  const [retireAge, setRetireAge] = useState(60)
  const [expenses, setExpenses] = useState(60_000)
  const [inflation, setInflation] = useState(6)
  const [corpus, setCorpus] = useState(900_000)
  const [monthly, setMonthly] = useState(25_000)
  const [realReturn, setRealReturn] = useState(9)
  const [annuityShare, setAnnuityShare] = useState(40)
  const [annuityRate, setAnnuityRate] = useState(6)

  const years = Math.max(0, retireAge - age)
  const months = years * 12
  const r = 0.09 / 12 // illustrative accumulation return, held fixed
  const projected = corpus * Math.pow(1 + r, months) + (monthly * (Math.pow(1 + r, months) - 1)) / r
  const expenseAtRetirement = expenses * Math.pow(1 + inflation / 100, years)
  const multiple = projected / Math.max(expenseAtRetirement, 1)
  const annuityCorpus = projected * (annuityShare / 100)
  const annuityIncome = (annuityCorpus * (annuityRate / 100)) / 12
  const swpCorpus = projected - annuityCorpus
  const swpIncome = (swpCorpus * (realReturn / 100)) / 12
  const totalIncome = annuityIncome + swpIncome
  const gap = expenseAtRetirement - totalIncome
  const extraNeeded = gap > 0 ? (gap * 12) / (Math.pow(1 + r, months) * r * 12) * 0.09 : 0

  const checks = [
    {
      ok: multiple >= 25,
      text: `The corpus is ${multiple.toFixed(1)} times the first year's expenses at retirement. Twenty-five times is the familiar floor; it assumes nothing about health costs or a bad decade of returns.`,
    },
    {
      ok: annuityShare >= 20,
      text: `An annuity share of ${annuityShare}% is inside the NPS exit rule, which after the December 2025 amendment allows up to 80% as a lump sum with at least 20% to an annuity. The lump sum is exempt; the annuity income is taxed as it is received.`,
    },
    {
      ok: gap <= 0,
      text:
        gap <= 0
          ? `Income of ${rupees(totalIncome)} a month covers the ${rupees(expenseAtRetirement)} needed in year one of retirement, with a surplus of ${rupees(-gap)}.`
          : `Income of ${rupees(totalIncome)} a month falls short of the ${rupees(expenseAtRetirement)} needed, a gap of ${rupees(gap)} a month — a little over ${rupees(extraNeeded)} a month more contributed for the whole accumulation period.`,
    },
    {
      ok: inflation <= 6,
      text: `At ${inflation}% inflation, today's ${rupees(expenses)} becomes ${rupees(expenseAtRetirement)} in ${years} years. The target is that number, not today's.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">From salary to streams</h4>
          <div className="space-y-3">
            <Slider label="Your age" value={age} min={22} max={55} step={1} onChange={setAge} format={(v) => `${v}`} />
            <Slider label="Retirement age" value={retireAge} min={45} max={70} step={1} onChange={setRetireAge} format={(v) => `${v}`} />
            <Slider label="Monthly expenses today" value={expenses} min={20_000} max={300_000} step={5_000} onChange={setExpenses} />
            <Slider label="Inflation assumption" value={inflation} min={3} max={9} step={0.5} onChange={setInflation} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Corpus today" value={corpus} min={0} max={20_000_000} step={100_000} onChange={setCorpus} />
            <Slider label="Monthly contribution" value={monthly} min={0} max={300_000} step={2_500} onChange={setMonthly} />
            <Slider label="Withdrawal rate after retirement" value={realReturn} min={3} max={10} step={0.5} onChange={setRealReturn} format={(v) => `${v.toFixed(1)}% a year`} />
            <Slider label="Share of corpus to an annuity" value={annuityShare} min={20} max={100} step={5} onChange={setAnnuityShare} format={(v) => `${v}%`} />
            <Slider label="Annuity rate offered" value={annuityRate} min={4} max={9} step={0.25} onChange={setAnnuityRate} format={(v) => `${v.toFixed(2)}%`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Corpus at retirement" value={rupeesShort(projected)} tone="good" />
              <Stat label="Multiple of expenses" value={`${multiple.toFixed(1)}x`} tone={multiple >= 25 ? 'good' : 'bad'} />
              <Stat label="Monthly income" value={rupees(totalIncome)} tone={gap <= 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Expenses in the first year of retirement: {rupees(expenseAtRetirement)} a month</li>
              <li>Annuity corpus: {rupees(annuityCorpus)} producing {rupees(annuityIncome)}</li>
              <li>Withdrawal corpus: {rupees(swpCorpus)} producing {rupees(swpIncome)}</li>
              <li className="text-white">Covered: {rupees(totalIncome)} of {rupees(expenseAtRetirement)}</li>
              <li>Gap to close: {rupees(Math.max(0, gap))} a month</li>
              <li>Illustrative accumulation return used: 9% a year</li>
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
        Retirement planning is a replacement exercise, not a savings target. You are replacing a salary with streams,
        and the streams have to keep paying while the prices of the things you buy keep rising: at 6%, the bill doubles
        in about twelve years, so the plan has to reach a point at which the whole corpus is a little over twenty-five
        times the first year's spending and then grow roughly with inflation. Two of the three streams are decided by
        rules you should know rather than by a product you are sold. The provident fund pays out tax-free after five
        years of service, apart from interest on very large own contributions; the pension system lets you take up to
        80% as a lump sum and requires at least 20% in an annuity, and it is the annuity that converts a corpus into a
        payment that cannot be outlived, in exchange for giving up the capital.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-036 */

export function L5IndependenceNumber() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(65_000)
  const [discretionary, setDiscretionary] = useState(30)
  const [withdrawalRate, setWithdrawalRate] = useState(4)
  const [healthCover, setHealthCover] = useState(35_000)
  const [bigTicket, setBigTicket] = useState(1_200_000)
  const [corpus, setCorpus] = useState(2_000_000)
  const [monthly, setMonthly] = useState(40_000)
  const [realReturn, setRealReturn] = useState(5)

  const annual = monthlyExpenses * 12
  const essential = annual * (1 - discretionary / 100)
  const required = annual / (withdrawalRate / 100)
  const requiredWithCover = required + healthCover * 25 + bigTicket
  const gap = Math.max(0, requiredWithCover - corpus)
  const realRate = realReturn / 100
  const monthlyRate = realRate / 12
  const yearsToReach =
    gap === 0
      ? 0
      : Math.log((gap * monthlyRate + monthly) / monthly) / Math.log(1 + monthlyRate) / 12
  const targetYear = CURRENT_YEAR + Math.max(0, Math.round(yearsToReach))
  const multiples = [20, 25, 30, 40]

  const checks = [
    {
      ok: withdrawalRate <= 4,
      text: `A ${withdrawalRate.toFixed(1)}% withdrawal needs ${(100 / withdrawalRate).toFixed(0)} times annual spending. A 4% rule is a research average, not a promise: it was calibrated on a particular market and a particular horizon.`,
    },
    {
      ok: discretionary >= 25,
      text: `${discretionary}% of spending is discretionary. That is the shock absorber: it can be cut in a bad decade without changing how you live. Essential spending is ${rupees(essential)} a year and it cannot be cut.`,
    },
    {
      ok: healthCover > 0 && bigTicket > 0,
      text: `Health cover and repairs are provided for separately: ${rupees(healthCover)} a year of premium, capitalised here at twenty-five times, plus ${rupees(bigTicket)} for the things that arrive whole rather than monthly.`,
    },
    {
      ok: corpus >= requiredWithCover,
      text: `The number is ${rupees(requiredWithCover)} against a corpus of ${rupees(corpus)}. On these assumptions it is reached in ${yearsToReach.toFixed(1)} years, around ${targetYear} — a date, not a hope.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Turn a life into a number</h4>
          <div className="space-y-3">
            <Slider label="Monthly spending" value={monthlyExpenses} min={20_000} max={300_000} step={5_000} onChange={setMonthlyExpenses} />
            <Slider label="Share that is discretionary" value={discretionary} min={0} max={60} step={5} onChange={setDiscretionary} format={(v) => `${v}%`} />
            <Slider label="Withdrawal rate assumed" value={withdrawalRate} min={2.5} max={6} step={0.25} onChange={setWithdrawalRate} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Health premium a year" value={healthCover} min={0} max={150_000} step={5_000} onChange={setHealthCover} />
            <Slider label="Big-ticket provision" value={bigTicket} min={0} max={5_000_000} step={100_000} onChange={setBigTicket} />
            <Slider label="Corpus today" value={corpus} min={0} max={30_000_000} step={100_000} onChange={setCorpus} />
            <Slider label="Monthly contribution" value={monthly} min={0} max={250_000} step={2_500} onChange={setMonthly} />
            <Slider label="Real return after inflation" value={realReturn} min={2} max={8} step={0.5} onChange={setRealReturn} format={(v) => `${v.toFixed(1)}%`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="The number" value={rupeesShort(requiredWithCover)} />
              <Stat label="Years to reach" value={yearsToReach === 0 ? 'now' : yearsToReach.toFixed(1)} />
              <Stat label="Essentials covered" value={`${((essential / (1 - discretionary / 100)) * (1 - discretionary / 100) / annual * 100).toFixed(0)}%`} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Annual spending: {rupees(annual)}</li>
              <li>Essential spending: {rupees(essential)} a year</li>
              <li>Corpus at this withdrawal rate: {rupees(required)}</li>
              <li>plus capitalised health premiums: {rupees(healthCover * 25)}</li>
              <li>plus big-ticket provision: {rupees(bigTicket)}</li>
              <li className="text-white">The number: {rupees(requiredWithCover)}</li>
            </ul>
            <div className="mt-2 grid grid-cols-4 gap-1 text-[10px] text-ink-400">
              {multiples.map((m) => (
                <span key={m}>
                  {m}x = {(100 / m).toFixed(1)}%
                </span>
              ))}
            </div>
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
        Independence is a multiple of what you spend, which is why the two levers are the size of the corpus and the
        size of the life it has to fund. Choosing a lower withdrawal rate raises the multiple: 4% needs twenty-five
        times, 3% needs thirty-three. Choosing a life with a large discretionary share lowers the exposure to a bad
        decade, because the expensive part of a bad decade is the part you cannot cut. Two items never belong inside the
        monthly number: health cover, which is a premium that rises with age and has to be paid whether or not you are
        well, and the expenses that arrive whole — a roof, a wedding, a replacement car — which should be provided for
        as a pot rather than averaged into a month.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-037 */

export function L5FireStressTest() {
  const [startAge, setStartAge] = useState(30)
  const [fireAge, setFireAge] = useState(45)
  const [expenses, setExpenses] = useState(55_000)
  const [inflation, setInflation] = useState(6)
  const [corpus, setCorpus] = useState(12_000_000)
  const [firstDecade, setFirstDecade] = useState(2)
  const [laterReturn, setLaterReturn] = useState(9)
  const [healthFirst, setHealthFirst] = useState(22_000)
  const [healthLater, setHealthLater] = useState(90_000)
  const [horizon, setHorizon] = useState(85)

  // A simple annual model: first ten years at the stressed rate, then the rest.
  let bal = corpus
  let broke = 999
  let end = bal
  const yearly: number[] = []
  for (let age = fireAge; age < horizon; age++) {
    const t = age - fireAge
    const rate = t < 10 ? firstDecade : laterReturn
    const spend = expenses * 12 * Math.pow(1 + inflation / 100, t)
    const premium = (t < 10 ? healthFirst : healthLater) * Math.pow(1 + 0.06, t)
    bal = bal * (1 + rate / 100) - spend - premium
    yearly.push(Math.round(bal))
    if (bal <= 0 && broke === 999) broke = age
    end = bal
  }
  const gapYears = Math.max(0, 60 - fireAge)
  const survives = broke === 999
  const lowestFirstDecade = Math.min(...yearly.slice(0, 10))

  const checks = [
    {
      ok: gapYears === 0 || corpus >= expenses * 12 * gapYears,
      text: `From ${fireAge} to 60 there are ${gapYears} years with no salary, no provident fund access and no pension. That stretch has to be funded entirely from the corpus: about ${rupees(expenses * 12 * gapYears)} at today's prices.`,
    },
    {
      ok: healthFirst > 0 && healthLater >= healthFirst * 3,
      text: `Health cover is assumed to cost ${rupees(healthFirst)} in the first year and ${rupees(healthLater)} later, because premiums rise with age and a gap in cover is the one expense that can end a plan.`,
    },
    {
      ok: survives,
      text: survives
        ? `The corpus survives to ${horizon} even with ${firstDecade}% returns for the first decade. Sequence matters: the same average return in a different order changes the answer.`
        : `The corpus runs out at ${broke}. The first decade of returns did this, not the long-run average — which is exactly why an early retirement has to be stress-tested before it is chosen.`,
    },
    {
      ok: Math.max(...yearly) > 0,
      text: `Lowest balance in the projection: ${rupees(Math.min(...yearly))}${!survives ? ' — below zero, so the plan needed a fallback that has not been written yet' : ''}. A plan with no margin at the bottom is a plan that works only if nothing goes wrong.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Break the plan, then repair it</h4>
          <div className="space-y-3">
            <Slider label="Age you start from" value={startAge} min={22} max={50} step={1} onChange={setStartAge} format={(v) => `${v}`} />
            <Slider label="Age you stop working" value={fireAge} min={35} max={60} step={1} onChange={setFireAge} format={(v) => `${v}`} />
            <Slider label="Monthly expenses today" value={expenses} min={20_000} max={250_000} step={5_000} onChange={setExpenses} />
            <Slider label="Inflation" value={inflation} min={3} max={9} step={0.5} onChange={setInflation} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Corpus at the date" value={corpus} min={2_000_000} max={60_000_000} step={500_000} onChange={setCorpus} />
            <Slider label="Return in the first ten years" value={firstDecade} min={-4} max={12} step={0.5} onChange={setFirstDecade} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Return after that" value={laterReturn} min={5} max={12} step={0.5} onChange={setLaterReturn} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Health premium, first decade" value={healthFirst} min={0} max={80_000} step={1_000} onChange={setHealthFirst} />
            <Slider label="Health premium, later" value={healthLater} min={0} max={250_000} step={5_000} onChange={setHealthLater} />
            <Slider label="Plan to age" value={horizon} min={75} max={100} step={1} onChange={setHorizon} format={(v) => `${v}`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Survives to" value={survives ? `${horizon}` : `${broke}`} tone={survives ? 'good' : 'bad'} />
              <Stat label="Balance at the end" value={rupeesShort(end)} tone={end > 0 ? 'good' : 'bad'} />
              <Stat label="Gap years" value={`${gapYears}`} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Working years left: {Math.max(0, fireAge - startAge)}</li>
              <li>Years funded by the corpus: {horizon - fireAge}</li>
              <li>Pre-pension years: {gapYears}, needing about {rupees(expenses * 12 * gapYears)} at today's prices</li>
              <li>Lowest balance: {rupees(Math.min(...yearly))}</li>
              <li className="text-white">Balance at {horizon}: {rupeesShort(end)}</li>
              <li>Lowest balance in the first decade: {rupeesShort(lowestFirstDecade)}</li>
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
        A FIRE plan is a retirement plan with a longer exposure to the two risks that retirement already carries, and
        nothing else about it is new. The first is sequence: the corpus has no salary behind it, so a bad first decade is
        paid for out of capital that would otherwise have compounded, and the order of returns matters as much as their
        average. The second is the gap: if you stop at 45, the provident fund, the pension system and most annuities do
        not open until 60, so fifteen years have to be funded from the corpus alone — and health cover has to be bought
        at the age you arrive rather than the age you planned. Move the sliders and watch which one decides the answer.
        It is almost never the long-run return.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-038 */

export function L5SavingsRateLab() {
  const [gross, setGross] = useState(120_000)
  const [taxAndDeductions, setTaxAndDeductions] = useState(22_000)
  const [rent, setRent] = useState(28_000)
  const [emis, setEmis] = useState(18_000)
  const [living, setLiving] = useState(22_000)
  const [other, setOther] = useState(8_000)
  const [realReturn, setRealReturn] = useState(5)

  const net = gross - taxAndDeductions
  const spending = rent + emis + living + other
  const saved = net - spending
  const rateOnNet = (saved / Math.max(net, 1)) * 100
  const rateOnGross = (saved / Math.max(gross, 1)) * 100
  const fixedShare = (rent + emis) / Math.max(net, 1)
  const yearsToFunded = (rate: number) => {
    const r = realReturn / 100
    if (rate <= 0) return Infinity
    // Years for savings at this rate of income to fund 25x spending.
    const annualSpend = spending * 12
    const annualSave = net * 12 * (rate / 100)
    const target = annualSpend * 25
    let bal = 0
    let y = 0
    while (bal < target && y < 80) {
      bal = bal * (1 + r) + annualSave
      y++
    }
    return y
  }
  const atCurrent = yearsToFunded(rateOnNet)
  const atPlus10 = yearsToFunded(Math.min(90, rateOnNet + 10))
  const atMinus10 = yearsToFunded(Math.max(1, rateOnNet - 10))
  const onePoint = yearsToFunded(Math.min(90, rateOnNet + 1))
  const investmentShare = (emis + 0) / Math.max(spending, 1)

  const checks = [
    {
      ok: rateOnNet >= 20,
      text: `The rate is ${rateOnNet.toFixed(1)}% of take-home, or ${rateOnGross.toFixed(1)}% of gross. Measure it one way and never switch: gross and net differ by more than most people guess.`,
    },
    {
      ok: fixedShare <= 0.45,
      text: `Rent and loan instalments take ${(fixedShare * 100).toFixed(0)}% of take-home. Above about half, the savings rate stops being a decision and becomes a consequence.`,
    },
    {
      ok: saved > 0,
      text: saved > 0
        ? `Saving ${rupees(saved)} a month. Moving the rate by one point pulls the date in by about ${Math.max(0, atCurrent - onePoint)} year(s); ten points moves it by ${Math.max(0, atCurrent - atPlus10)}.`
        : `Spending exceeds take-home by ${rupees(-saved)} a month. No investment decision can fix a negative rate.`,
    },
    {
      ok: Math.max(0, atCurrent - atPlus10) > Math.max(0, atCurrent - atMinus10),
      text: `Ten points up moves the date by ${Math.max(0, atCurrent - atPlus10)} years; ten points down moves it by ${Math.max(0, atCurrent - atMinus10)}. The lever is not symmetric — which is the case for raising it early.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">The one number that moves the date</h4>
          <div className="space-y-3">
            <Slider label="Monthly gross income" value={gross} min={30_000} max={600_000} step={5_000} onChange={setGross} />
            <Slider label="Tax, provident fund and other deductions" value={taxAndDeductions} min={0} max={200_000} step={2_000} onChange={setTaxAndDeductions} />
            <Slider label="Rent" value={rent} min={0} max={150_000} step={2_000} onChange={setRent} />
            <Slider label="Loan instalments" value={emis} min={0} max={150_000} step={2_000} onChange={setEmis} />
            <Slider label="Living costs" value={living} min={5_000} max={150_000} step={2_000} onChange={setLiving} />
            <Slider label="Everything else" value={other} min={0} max={100_000} step={1_000} onChange={setOther} />
            <Slider label="Real return on savings" value={realReturn} min={2} max={8} step={0.5} onChange={setRealReturn} format={(v) => `${v.toFixed(1)}%`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Saved a month" value={rupees(Math.max(0, saved))} tone={saved > 0 ? 'good' : 'bad'} />
              <Stat label="Rate of take-home" value={`${rateOnNet.toFixed(1)}%`} tone={rateOnNet >= 20 ? 'good' : 'bad'} />
              <Stat label="Years to funded" value={Number.isFinite(atCurrent) ? `${atCurrent}` : '—'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Take-home: {rupees(net)}</li>
              <li>Fixed commitments: {rupees(rent + emis)} ({(fixedShare * 100).toFixed(0)}% of take-home)</li>
              <li>Rate on gross: {rateOnGross.toFixed(1)}%</li>
              <li className="text-white">Rate up 10 points: funded in {Number.isFinite(atPlus10) ? atPlus10 : '—'} years</li>
              <li>Rate down 10 points: funded in {Number.isFinite(atMinus10) ? atMinus10 : '—'} years</li>
              <li>Loan instalments as a share of spending: {(investmentShare * 100).toFixed(0)}%</li>
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
        The savings rate is the only input in this whole level that you control every month, and the lab shows why it
        deserves more attention than fund selection. Ten points of additional saving moves the funding date by more than
        ten points of extra return would, and unlike return it does not have to be forecast to be delivered. The rate
        also has a component you cannot will away: rent and loan instalments are fixed for the year, so a high fixed
        share makes the rate a consequence of decisions already made. That is why the honest measure is taken on gross
        income — it cannot be improved by a smaller tax deduction — and why raising the rate is usually a housing,
        commute or debt decision rather than a consumer-discipline one.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-039 */

export function L5PassiveIncomeAudit() {
  const [rent, setRent] = useState(25_000)
  const [dividends, setDividends] = useState(8_000)
  const [interest, setInterest] = useState(6_000)
  const [royalty, setRoyalty] = useState(0)
  const [business, setBusiness] = useState(10_000)
  const [hours, setHours] = useState(20)
  const [salary, setSalary] = useState(120_000)
  const [tenantVacancy, setTenantVacancy] = useState(2)

  const grossStreams = rent + dividends + interest + royalty + business
  const total = grossStreams + salary
  const share = grossStreams / Math.max(total, 1)
  const perHour = grossStreams / Math.max(hours, 1)
  const rentAnnual = rent * 12
  const rentVacancyCost = rent * tenantVacancy
  const tdsRent = rentAnnual > 600_000
  const tdsDividend = dividends * 12 > 10_000
  const concentration = Math.max(rent, dividends, interest, royalty, business) / Math.max(grossStreams, 1)
  const streams = [
    { name: 'Rent', amount: rent, head: 'house property, 30% standard deduction', taxable: rent * 0.7 },
    { name: 'Dividends', amount: dividends, head: 'other sources, fully taxable', taxable: dividends },
    { name: 'Interest', amount: interest, head: 'other sources, fully taxable', taxable: interest },
    { name: 'Royalty or licence', amount: royalty, head: 'other sources or business', taxable: royalty },
    { name: 'Business you do not run', amount: business, head: 'business income', taxable: business * 0.9 },
  ].filter((s) => s.amount > 0)

  const checks = [
    {
      ok: concentration <= 0.5,
      text: `The largest stream is ${(concentration * 100).toFixed(0)}% of passive income. Above half, it is not a stream, it is a dependency — and its risks are now your income's risks.`,
    },
    {
      ok: hours <= 8,
      text: `${hours} hours a month is ${(hours * 12).toFixed(0)} hours a year, or ${rupees(perHour)} an hour before tax. Below a few hours a month a stream is genuinely passive; above it, it is a part-time job with an investment attached.`,
    },
    {
      ok: !tdsRent || rentAnnual <= 1_200_000,
      text: tdsRent
        ? `Rent of ${rupees(rentAnnual)} a year crosses the ₹6 lakh threshold, so the tenant deducts tax at source at 10%. The full rent is still your income, and the deduction is a payment of your tax, not a reduction of it.`
        : `Rent of ${rupees(rentAnnual)} a year sits below the ₹6 lakh threshold, so no tax is deducted at source. The rent is still taxable under house property.`,
    },
    {
      ok: grossStreams === 0 || share <= 0.4,
      text: `Passive income is ${(share * 100).toFixed(0)}% of total income. The tax question is decided by the head each stream falls under, not by the word passive: dividends and interest are fully taxable, rent gets the 30% standard deduction, and business income carries its own regime.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Audit every stream</h4>
          <div className="space-y-3">
            <Slider label="Rent a month" value={rent} min={0} max={200_000} step={1_000} onChange={setRent} />
            <Slider label="Dividends a month" value={dividends} min={0} max={100_000} step={1_000} onChange={setDividends} />
            <Slider label="Interest a month" value={interest} min={0} max={100_000} step={1_000} onChange={setInterest} />
            <Slider label="Royalty or licence a month" value={royalty} min={0} max={100_000} step={1_000} onChange={setRoyalty} />
            <Slider label="Business income a month" value={business} min={0} max={200_000} step={1_000} onChange={setBusiness} />
            <Slider label="Hours a month you spend on them" value={hours} min={0} max={80} step={1} onChange={setHours} format={(v) => `${v} hours`} />
            <Slider label="Salary a month" value={salary} min={0} max={500_000} step={5_000} onChange={setSalary} />
            <Slider label="Months a year without a tenant" value={tenantVacancy} min={0} max={4} step={1} onChange={setTenantVacancy} format={(v) => `${v} months`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Passive a month" value={rupees(grossStreams)} />
              <Stat label="Per hour of effort" value={rupees(perHour)} tone={hours <= 8 ? 'good' : 'bad'} />
              <Stat label="Largest stream" value={`${(concentration * 100).toFixed(0)}%`} tone={concentration <= 0.5 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Passive share of total income: {(share * 100).toFixed(0)}%</li>
              <li>Vacancy cost at {tenantVacancy} month(s): {rupees(rentVacancyCost)} a year</li>
              <li>TDS applies to rent above ₹6 lakh: {tdsRent ? 'yes' : 'no'}</li>
              <li>TDS applies to dividends above ₹10,000: {tdsDividend ? 'yes' : 'no'}</li>
              {streams.map((s) => (
                <li key={s.name}>
                  {s.name}: {rupees(s.amount)} — {s.head}, taxable about {rupees(s.taxable)}
                </li>
              ))}
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
        Passive income is a description of effort, not a category in the tax code, and the audit is designed to keep
        those two things apart. Three tests decide whether a stream deserves the name. Effort: hours a month spent
        earning it, converted into rupees an hour, which usually shows that the business you do not run is the only
        candidate. Concentration: what share of your income stops if one tenant, one dividend or one platform changes
        its mind. And tax head: rent gets the standard deduction of 30% under house property, dividends and interest are
        taxed in full as other income, and business income keeps its own regime and its own compliance. A stream that
        passes the first test and fails the other two is not passive income; it is a job with an asset attached.
      </Debrief>
    </div>
  )
}
