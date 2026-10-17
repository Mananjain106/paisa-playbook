# Finance101 — Game Design Document (GDD)

**Version:** 1.0  
**Game:** Finance101  
**Phase:** 1 — Student Part-timer  
**Genre:** 2D financial life simulation / strategy / decision-making  
**Platform target:** PC and Web  
**Setting:** Student life in Delhi, India  
**Simulation duration:** 10 in-game months = 40 weeks  
**Currency:** Indian Rupees (₹)  
**Document purpose:** Game design, economy specification, content planning, implementation and testing.

---

# 1. Game Overview

## 1.1 Concept

Finance101 is a 2D financial life simulation in which the player navigates everyday student life while trying to build wealth, maintain a social life, and make financially responsible decisions.

The player is a college student with a part-time income. Money is limited, opportunities compete for time, and seemingly harmless decisions can affect future financial stability.

The player can:

- Earn money through tutoring, freelance work, temporary jobs and other opportunities.
- Pay college fees and travel expenses.
- Spend money on friends, dates, hobbies and college events.
- Borrow money and pay interest.
- Buy, sell, collect and exchange items.
- Trade items or favours with other characters.
- Build social connections and unlock opportunities.
- Track cash, assets, liabilities, net worth and fun.
- Recover from financial mistakes if enough time remains.

The objective is not simply to save every rupee. The player must balance wealth accumulation with enjoying student life.

## 1.2 Design pillars

### Pillar A — Every rupee matters

The economy should be transparent. Players must be able to understand where their money went and why their net worth changed.

### Pillar B — Fun has a cost, but a life without fun isn't the objective

Spending on activities may delay wealth accumulation, but fun points are a required victory condition.

### Pillar C — Opportunities have trade-offs

A paid opportunity might require time, an item, social capital or an upfront expense. The highest-paying option should not always be the obvious choice.

### Pillar D — Decisions have consequences

Borrowing may help in the short term but create future interest costs. Trading an item might unlock an opportunity but reduce the player's collectible assets.

### Pillar E — The game is winnable through different strategies

Players should be able to win through different combinations of work, saving, spending, bartering and social opportunities. There must not be a single mandatory optimal route.

---

# 2. Phase 1 Scope

## Included

- One student character.
- One financial life phase.
- A 40-week calendar.
- Monthly income and mandatory expenses.
- Optional earnings and spending.
- Loans and simple interest.
- Cash, net worth and liabilities.
- Inventory and item valuation.
- Bartering and favours.
- Fun score and social capital.
- Weekly events and choices.
- Victory, failure, retry and save/load.
- A financial history and end-of-run report.

## Excluded

- Other career or life phases.
- Investment products and stock trading.
- Real-money purchases.
- Multiplayer or online leaderboards.
- Real bank integration.
- A server account system.
- Real-time financial market data.

The game should be fully playable offline once installed, with local save data.

---

# 3. Starting Conditions and Victory

## 3.1 Initial state

The player begins at Month 0, Week 0.

| Variable | Starting value |
|---|---:|
| Cash | ₹0 |
| Monthly income | ₹18,000 |
| College fees | ₹10,000/month |
| Travel expenses | ₹5,000/month |
| Outstanding loan principal | ₹0 |
| Unpaid interest | ₹0 |
| Collectible comics | 1 collection |
| Comics' resale value | ₹500 |
| Fun score | 0 |
| Social capital | 0 |
| Favours owed to player | 0 |
| Favours owed by player | 0 |
| Available action points | 0 before Week 1 |
| Investments | Locked |

The comics are an existing asset, not cash. The player can sell them for cash or exchange them through a valid barter opportunity.

The initial net worth is therefore ₹500.

## 3.2 Monthly cash flow

Every month has four weeks. At the start of Weeks 1, 5, 9, 13, 17, 21, 25, 29, 33 and 37, the game performs the monthly financial opening.

| Transaction | Cash change |
|---|---:|
| Receive income | +₹18,000 |
| Pay college fees | −₹10,000 |
| Pay travel expenses | −₹5,000 |
| **Net monthly cash flow before choices** | **+₹3,000** |

After 10 months, the player's baseline cash accumulation is ₹30,000, provided no optional spending, additional earnings, borrowing, interest or asset sales occur.

With the original comics retained, baseline net worth at the end of 10 months would be ₹30,500.

## 3.3 Victory conditions

The player wins if both conditions are met:

- **Net worth ≥ ₹50,000**
- **Cumulative fun score ≥ 2,500**

Both conditions must be satisfied before the end of Week 40.

Reaching only one target is not sufficient.

Victory is checked after each successful player action. Once both targets are reached, the run ends immediately.

## 3.4 Failure conditions

At the close of Week 40:

- If both targets are satisfied, mark the run as won.
- Otherwise, mark the run as failed.
- Show a final financial report and a retry option.

Failure does not permanently delete the run. The player can review decisions and start a fresh attempt.

---

# 4. Core Game Loop

The primary loop is:

1. Open the week.
2. Display current finances and upcoming commitments.
3. Reveal the week's event.
4. Review available choices and requirements.
5. Spend action points on opportunities.
6. Apply financial, inventory, fun and social effects.
7. Update the dashboard and decision history.
8. Advance the week.
9. At every fourth week, close the month and charge interest.
10. Check victory or failure.

The player should always be able to inspect the financial implications of an action before confirming it.

## 4.1 Weekly action system

Each week provides **4 action points (AP)**.

An action point represents the player's discretionary time. It is not money.

Examples:

| Activity | AP cost |
|---|---:|
| Complete a paid gig | 1–2 |
| Attend a social activity | 1 |
| Visit a collectible trade event | 1 |
| Complete a favour | 1 |
| Negotiate a barter | 1 |
| Sell an item through an event | 1 |
| Go to a fun trip| 1-3 |
| Review finances | 0 |

A week may contain one spotlight event and several generic opportunities. Some events provide exclusive alternatives; others allow multiple actions.

The player cannot spend more AP than they have. Unused AP expire at the end of the week.

This creates an opportunity cost: spending time on a paid job can mean missing a social event.

---

# 5. Economic Rules

## 5.1 Net worth

Net worth is the value of owned assets minus all liabilities.

**Formula:**

    Net Worth = Cash
              + Inventory Resale Value
              + Other Recognized Assets
              - Outstanding Principal
              - Unpaid Interest
              - Other Liabilities

Social capital, fun points and favours are not automatically financial assets.

All item values must come from predefined content data. The game must never let the player assign an arbitrary resale value.

## 5.2 Cash

Cash is always an integer number of rupees.

Cash cannot become negative through ordinary purchases. If the player cannot afford an action, the game must reject it or allow the player to explicitly take an available loan first.

Cash may become available through:

- Monthly income.
- Paid opportunities.
- Selling items.
- Valid rewards.
- Loan draws.

Cash is spent on:

- Mandatory expenses.
- Activities.
- Purchases.
- Loan repayments.
- Other explicit event costs.

Every cash movement creates a ledger transaction.

## 5.3 Mandatory expenses

At the beginning of each month:

1. Credit ₹18,000 income.
2. Deduct ₹10,000 college fees.
3. Deduct ₹5,000 travel expenses.

For this phase, the player's regular job or part-time income is assumed to cover these expenses reliably.

Rent, food, medical expenses and other recurring household costs are outside the scope of this phase.

If an event introduces an additional expense, it must be shown explicitly before the player chooses it.

## 5.4 Loans

Loans have a monthly interest rate of 9.5% using simple interest on the original principal.

For each loan draw:

    Monthly Interest = Original Principal × 0.095

Example:

- Original principal: ₹2,000
- Monthly interest: ₹190
- Principal after one month with no repayment: ₹2,000
- Total liability after one month: ₹2,190
- Total liability after ten months with no repayment: ₹3,900

Interest does not compound. Unpaid interest is not included in the principal used to calculate future interest.

### Loan draw

When the player borrows ₹2,000:

- Cash increases by ₹2,000.
- Outstanding principal increases by ₹2,000.
- Net worth does not change immediately.

### Repayment

Repayments are applied in this order:

1. Unpaid interest.
2. Outstanding principal.

If the loan is fully repaid before month-end, it incurs no interest at that month's close.

If any principal remains at month-end, charge 9.5% of the original principal for that loan draw, regardless of partial repayments during that month.

A loan draw should have its own identifier. This ensures that different loans retain their own original principal and interest calculation.

### Loan interface

Before borrowing, display:

- Amount borrowed.
- Original principal.
- Current principal balance.
- Unpaid interest.
- Next expected interest charge.
- The consequences of repayment.

The player should never be surprised by hidden interest calculations.

## 5.5 Inventory and collectibles

Every inventory item has:

- Unique item type.
- Quantity.
- Acquisition method.
- Resale value per unit.
- Optional sentimental or collectible description.
- Optional unlock effects.
- Optional trade eligibility.

The starting comics have a total resale value of ₹500.

An item may be valuable for gameplay without having significant resale value.

For example, a club pass could unlock an event but have zero resale value. A rare comic might be worth ₹500 and also unlock a collector negotiation.

### Buying items

When the player buys an item:

- Deduct the purchase price from cash.
- Add the item to inventory.
- Recognize its predefined resale value.

If an item costs ₹800 but has a resale value of ₹500, the immediate reduction in net worth is ₹300.

### Selling items

When an item is sold:

- Add the sale proceeds to cash.
- Remove the sold quantity from inventory.
- Recalculate net worth.

Selling an item for its exact resale value does not change net worth.

### Bartering

A barter transfers items or favours between participants without cash changing hands unless the event explicitly includes cash.

Example:

- Player gives comics valued at ₹500.
- Player receives a shirt valued at ₹300 and perfume valued at ₹200.
- Cash change: ₹0.
- Inventory asset value before: ₹500.
- Inventory asset value after: ₹500.
- Net worth change: ₹0.

If the exchange also grants fun points or unlocks a new event, those effects are recorded separately.

Do not award free net worth simply because an exchange is labelled a barter.

## 5.6 Social capital and favours

Track social capital and favours separately.

Social capital represents the player's reputation and relationships. It can unlock opportunities, improve negotiation outcomes or provide access to events.

Favours are explicit obligations.

For example:

- Helping a friend may create one favour owed to the player.
- Asking a friend for help may consume one available favour or create one favour owed by the player.

A favour must not silently become cash or net worth.

For the MVP, social capital can be a simple integer score. More detailed relationships can be added later without changing the financial engine.

## 5.7 Fun score

Fun score measures enjoyable experiences.

- It is cumulative.
- It never decays in Phase 1.
- It cannot be spent.
- It cannot be converted to money.
- It is awarded only when the specified action succeeds.
- Declining an activity gives no fun unless the event explicitly defines a consolation reward.

The target is 2,500 fun points.

Activities should vary in their cost and reward so that the player can choose between cheaper, lower-reward options and more expensive, higher-reward experiences.

---

# 6. Time and Event Rules

## 6.1 Calendar

The phase contains 10 months of four weeks each.

| Month | Weeks |
|---|---|
| Month 1 | 1–4 |
| Month 2 | 5–8 |
| Month 3 | 9–12 |
| Month 4 | 13–16 |
| Month 5 | 17–20 |
| Month 6 | 21–24 |
| Month 7 | 25–28 |
| Month 8 | 29–32 |
| Month 9 | 33–36 |
| Month 10 | 37–40 |

At the start of Weeks 1, 5, 9, 13, 17, 21, 25, 29, 33 and 37, income and mandatory expenses are processed.

At the close of Weeks 4, 8, 12, 16, 20, 24, 28, 32, 36 and 40, eligible loan interest is charged.

## 6.2 Event structure

An event contains:

- ID.
- Week.
- Title.
- Description.
- Available choices.
- Requirements.
- Action point cost.
- Cash effects.
- Fun effects.
- Social effects.
- Inventory effects.
- Repeat policy.
- Optional delayed effects.

An event's outcomes must be data-driven rather than implemented as custom interface logic.

## 6.3 Repeat policies

Every opportunity uses one of these policies:

- `once`: can be completed only once per run.
- `weekly`: can be repeated once per week.
- `monthly`: can be repeated once per month.
- `limited`: can be completed a specified number of times.
- `unlimited`: can be repeated without a count limit, but must be carefully balanced.

Most large rewards should be `once` or `limited`.

---

# 7. Forty-Week Event and Opportunity Plan

The following is the proposed Phase 1 content catalogue. Values are initial balance-tuning values, not real-world market prices. They should be adjusted through simulation and playtesting.

Each week has a spotlight event. Unless stated otherwise, the player may decline it without a penalty.

## Month 1 — Establishing Student Life

### Week 1 — First Paycheck

**Context:** The player receives their first monthly income and faces mandatory college expenses.

The game introduces the ledger, mandatory costs and weekly action points.

Choices:
- Save the remaining ₹3,000 and gain no fun.
- Attend a low-cost college hangout for ₹300 and gain 100 fun.
- Spend one action point exploring a paid opportunity board.

The player begins with ₹500 worth of comics but no cash.

**Learning goal:** Income is not the same as disposable income.

### Week 2 — The Comic Collector

**Context:** A collector at college notices the player's old comics.

Choices:
- Keep the comics: retain ₹500 of inventory value.
- Sell the collection for ₹500.
- Negotiate a one-time exchange for a shirt valued at ₹300 and perfume valued at ₹200. Gain 100 fun if the player chooses to wear or use the items in a later activity.

The barter is value-neutral before any separate fun reward.

**Learning goal:** An item can have both financial and gameplay value.

### Week 3 — Help a Junior

**Context:** A junior asks for help preparing study notes.

Choices:
- Tutor the junior for ₹1,000 and consume 1 AP.
- Help without payment and gain 100 fun plus 1 favour owed to the player.
- Decline.

The paid tutoring option is once per run.

**Learning goal:** Time has an opportunity cost, and helping others may create non-cash value.

### Week 4 — First College Event

**Context:** A small college event is happening.

Choices:
- Attend for ₹500 and gain 250 fun.
- Volunteer for 1 AP and gain ₹300 plus 100 fun.
- Skip the event.

At month-end, charge eligible loan interest.

**Learning goal:** A social activity can have a cost, while volunteering can provide a smaller financial reward.

## Month 2 — Social Life and Small Earnings

### Week 5 — Weekend Plan

Choices:
- Go out with friends for ₹500 and gain 250 fun.
- Organize a low-cost gathering for ₹200 and gain 100 fun.
- Decline both and retain the cash.

### Week 6 — Tutoring Opportunity

A parent is looking for a student tutor.

Choices:
- Take a tutoring session for ₹1,500 and consume 2 AP.
- Offer a short revision session for ₹700 and consume 1 AP.
- Decline.

The opportunity can be completed once.

### Week 7 — Campus Photography

A student club needs event photographs.

Choices:
- Accept a paid assignment for ₹1,500 and consume 2 AP.
- Volunteer for 1 AP and gain 150 fun plus 1 social capital.
- Decline.

### Week 8 — Movie Night

Choices:
- Buy a ticket and snacks for ₹500; gain 250 fun.
- Join friends for a low-cost movie night for ₹200; gain 100 fun.
- Skip it.

At month-end, charge eligible loan interest.

## Month 3 — Learning to Negotiate

### Week 9 — Second-Hand Marketplace

A student is selling a used item.

Choices:
- Buy an item for ₹800 with a fixed resale value of ₹500.
- Decline the purchase.
- Sell an eligible item from the player's inventory for its stated sale price.

The item purchase is optional and does not directly award fun.

### Week 10 — Assignment Formatting

A classmate needs help formatting an assignment.

Choices:
- Complete the task for ₹1,200 and consume 1 AP.
- Help for free, gaining 75 fun and 1 favour owed to the player.
- Decline.

### Week 11 — Collector Meetup

The player encounters another collector.

Choices:
- Exchange an eligible collectible for an item of equivalent predefined resale value.
- Keep the collection and gain 1 social capital by discussing it.
- Sell an eligible collectible if the event provides a valid offer.

The event must not create an item that can be traded repeatedly for increasing net worth without an explicit source of value.

### Week 12 — College Fest

Choices:
- Attend for ₹700 and gain 300 fun.
- Volunteer for 2 AP and gain ₹500 plus 150 fun.
- Skip it.

At month-end, charge eligible loan interest.

## Month 4 — Expanding Opportunities

### Week 13 — Poster Design

A college club needs a promotional poster.

Choices:
- Accept a paid commission for ₹1,500 and consume 1 AP.
- Help the club for free, gaining 100 fun and 1 social capital.
- Decline.

### Week 14 — Group Dinner

Choices:
- Join the group dinner for ₹600 and gain 300 fun.
- Arrange a budget meal for ₹250 and gain 125 fun.
- Decline.

### Week 15 — Tutoring Before Exams

Choices:
- Tutor a student for ₹2,000 and consume 2 AP.
- Run a short revision session for ₹800 and consume 1 AP.
- Decline.

This opportunity is once per run and has a higher time commitment.

### Week 16 — Repair or Replace

The player's friends are discussing an old electronic accessory.

Choices:
- Buy an accessory for ₹1,000 with a resale value of ₹600.
- Sell an eligible owned item if a valid buyer is available.
- Avoid the purchase.

This event teaches depreciation and prevents purchase price from being mistaken for asset value.

At month-end, charge eligible loan interest.

## Month 5 — Midpoint Review

### Week 17 — Midpoint Financial Review

No mandatory cost is added.

The player sees:
- Current net worth.
- Cash saved.
- Total optional spending.
- Fun score.
- Outstanding principal.
- Accrued interest.
- Remaining weeks and the average weekly progress required.

Choices:
- Spend 0 AP to review the ledger.
- Use 1 AP to pursue an available paid opportunity.
- Continue without taking action.

This is a decision-support event rather than a forced expense.

### Week 18 — Notes Marketplace

A student wants organized notes.

Choices:
- Sell original notes for ₹1,200 and consume 1 AP.
- Share notes for free, gaining 100 fun and 1 favour owed to the player.
- Decline.

This is a one-time opportunity.

### Week 19 — Date or Social Outing

Choices:
- Spend ₹1,000 and gain 400 fun.
- Choose a budget outing for ₹400 and gain 175 fun.
- Decline.

No relationship outcome should be treated as guaranteed simply because the player spends more money.

### Week 20 — Student Club Project

A student club needs a small technical or organizational task completed.

Choices:
- Complete the task for ₹2,000 and consume 2 AP.
- Volunteer for 1 AP and gain 200 fun plus 2 social capital.
- Decline.

At month-end, charge eligible loan interest.

## Month 6 — More Responsibility

### Week 21 — Laptop Assistance

A classmate needs help troubleshooting a laptop.

Choices:
- Help for ₹1,500 and consume 1 AP.
- Help without payment and gain 100 fun plus 1 favour owed to the player.
- Decline.

### Week 22 — Birthday Contribution

Choices:
- Contribute ₹500 and gain 250 fun.
- Help organize the celebration for 1 AP and gain 150 fun plus 1 social capital.
- Decline.

### Week 23 — Paid Event Assistance

An event organizer needs temporary help.

Choices:
- Take a shift for ₹2,500 and consume 2 AP.
- Take a short shift for ₹1,000 and consume 1 AP.
- Decline.

The opportunity is once per run.

### Week 24 — Collectible Exchange Day

The player can use the comics or another eligible item to negotiate an exchange.

Choices:
- Keep the comics.
- Exchange them for an item or combination of items whose total resale value is at most ₹500.
- Sell the comics for the offered sale price of ₹500.

If the player already traded or sold the comics, the corresponding choice is unavailable.

At month-end, charge eligible loan interest.

## Month 7 — Managing Time and Money

### Week 25 — Freelance Poster Bundle

A student group needs several posters.

Choices:
- Complete the bundle for ₹2,500 and consume 2 AP.
- Take a smaller task for ₹1,000 and consume 1 AP.
- Decline.

### Week 26 — Friends' Trip

Choices:
- Join the trip for ₹1,200 and gain 500 fun.
- Join a local day out for ₹400 and gain 175 fun.
- Decline.

The expensive choice is not mandatory for reaching the fun target.

### Week 27 — Exam Preparation Sessions

Choices:
- Run revision sessions for ₹2,000 and consume 2 AP.
- Run one short session for ₹800 and consume 1 AP.
- Decline.

This is a limited-use paid opportunity.

### Week 28 — Charity or College Drive

Choices:
- Donate ₹300 and gain 100 fun.
- Volunteer for 1 AP and gain 150 fun plus 1 social capital.
- Skip the event.

At month-end, charge eligible loan interest.

## Month 8 — Building Reputation

### Week 29 — Repeat Client

A previous client recommends the player to another student group.

Choices:
- Accept a task for ₹2,500 and consume 2 AP.
- Accept a smaller task for ₹1,000 and consume 1 AP.
- Decline.

This event is unlocked only if the player has completed a qualifying earlier paid opportunity.

### Week 30 — College Club Invitation

Choices:
- Attend for ₹500 and gain 250 fun.
- Help organize the event for 1 AP and gain 150 fun plus 2 social capital.
- Decline.

### Week 31 — Sell or Keep Collectibles

Choices:
- Sell an eligible collectible for its displayed price.
- Keep it for future barter opportunities.
- Exchange it for items with an equal or lower combined resale value.

The game displays the change in cash and net worth before confirmation.

### Week 32 — Social Weekend

Choices:
- Spend ₹700 and gain 350 fun.
- Choose a cheaper gathering for ₹250 and gain 125 fun.
- Decline.

At month-end, charge eligible loan interest.

## Month 9 — Final Financial Push

### Week 33 — Urgent Paid Task

A student group needs a task completed quickly.

Choices:
- Accept for ₹3,000 and consume 2 AP.
- Take a smaller task for ₹1,200 and consume 1 AP.
- Decline.

The larger payment is once per run.

### Week 34 — Friends' Celebration

Choices:
- Spend ₹800 and gain 350 fun.
- Spend ₹300 and gain 150 fun.
- Decline.

### Week 35 — Final Tutoring Campaign

Choices:
- Complete a tutoring bundle for ₹2,500 and consume 2 AP.
- Complete a short session for ₹1,000 and consume 1 AP.
- Decline.

### Week 36 — Budget Checkpoint

The game shows the gap between the current state and both targets.

Choices:
- Review upcoming opportunities at no AP cost.
- Take an available paid job.
- Sell an eligible item.
- Decline further action.

At month-end, charge eligible loan interest.

## Month 10 — Deadline

### Week 37 — Last Month Begins

The game highlights the remaining weeks and the required progress.

The player receives the final monthly income and pays mandatory expenses.

Choices:
- Pursue a high-value available job.
- Choose a fun activity if the fun target is behind.
- Save money if net worth is the priority.

### Week 38 — Final Social Opportunity

Choices:
- Spend ₹500 and gain 250 fun.
- Spend ₹200 and gain 100 fun.
- Decline.

### Week 39 — Last Paid Assignment

Choices:
- Complete a final assignment for ₹2,000 and consume 2 AP.
- Complete a smaller assignment for ₹800 and consume 1 AP.
- Decline.

The player should see the financial consequences before accepting.

### Week 40 — Final Decision

The player receives the last opportunity to make a valid choice before the deadline.

Available actions depend on the current state:
- Earn money through any still-available qualifying opportunity.
- Complete an affordable fun activity.
- Sell an eligible item.
- Repay debt if doing so improves the player's final position.
- Make no further purchase and finish the run.

After the final action, charge eligible month-end interest, recalculate net worth, and evaluate both targets.

If both targets are satisfied, the player wins. Otherwise, the player receives a failure report and may retry.

---

# 8. Opportunity Catalogue and Balance Targets

The weekly event plan is the narrative layer. The opportunity catalogue is the reusable system behind those events.

Each opportunity should be represented as data rather than a custom block of code.

## 8.1 Example opportunity object

    Opportunity {
        id: "tutoring_junior_01",
        title: "Tutor a Junior",
        repeatPolicy: "once",
        actionPointCost: 1,

        requirements: {
            minimumCash: 0,
            requiredItems: [],
            minimumSocialCapital: 0
        },

        effects: {
            cashDelta: 1000,
            funDelta: 0,
            socialCapitalDelta: 0,
            favoursOwedToPlayerDelta: 0,
            inventoryChanges: []
        },

        description:
            "Help a junior prepare for an upcoming exam."
    }

The object is illustrative. A production implementation should validate all effects before applying them.

## 8.2 Balance requirement

The victory target is deliberately challenging.

The player's baseline after 10 months is:

    Baseline net worth = ₹30,000 cash + ₹500 comics
                       = ₹30,500

The required additional net value is:

    ₹50,000 - ₹30,500 = ₹19,500

Therefore, optional earning opportunities must generate enough net value to cover optional spending, loan interest and any depreciation.

The content catalogue should provide multiple ways to generate this additional value.

The fun target also requires a deliberate plan. Ten activities worth 250 fun points each would provide 2,500 fun points, but the actual winning strategy should allow a variety of activities and reward combinations.

The weekly catalogue contains opportunities worth different amounts so that the player can balance money, fun and time.

**Balance gate:** do not assume the game is winnable just because the individual rewards appear reasonable. Simulate the complete 40-week economy, including interest, action-point constraints, item values and activity costs.

---

# 9. Simulation State Model

The game engine must be independent from the rendering engine.

A state model should contain all information required to reproduce a run exactly.

## 9.1 Player state

    PlayerState {
        runId
        status                 // active, won, failed
        month
        week
        cash
        funScore
        socialCapital
        favoursOwedToPlayer
        favoursOwedByPlayer
        actionPointsRemaining

        inventory[]
        loans[]
        transactions[]
        completedOpportunityIds[]
        eventFlags{}
        decisionHistory[]
    }

## 9.2 Loan state

    Loan {
        id
        originalPrincipal
        principalOutstanding
        unpaidInterest
        createdInMonth
        status
    }

## 9.3 Item state

    InventoryItem {
        itemTypeId
        quantity
        resaleValuePerUnit
        acquisitionMethod
        acquisitionWeek
    }

## 9.4 Transaction state

    Transaction {
        id
        week
        month
        transactionType
        description
        cashDelta
        principalDelta
        interestLiabilityDelta
        funDelta
        socialCapitalDelta
        inventoryChanges[]
    }

A transaction should record all effects needed to explain why the state changed. The dashboard must derive totals from the authoritative state rather than maintain unrelated duplicate values.

---

# 10. Language-Independent Pseudocode

## 10.1 Start a month

    function startMonth(state, rules):
        assert state.status == "active"

        state.month += 1

        recordTransaction(
            state,
            "income",
            +rules.monthlyIncome
        )

        recordTransaction(
            state,
            "college_fees",
            -rules.monthlyFees
        )

        recordTransaction(
            state,
            "travel",
            -rules.monthlyTravel
        )

        state.cash += rules.monthlyIncome
        state.cash -= rules.monthlyFees
        state.cash -= rules.monthlyTravel

The production version should validate the transactions and record each effect exactly once. The simplified pseudocode shows the intended order, not a recommended double-entry accounting implementation.

## 10.2 Calculate net worth

    function calculateNetWorth(state):
        assets = state.cash

        for item in state.inventory:
            assets +=
                item.quantity * item.resaleValuePerUnit

        liabilities = 0

        for loan in state.loans:
            liabilities += loan.principalOutstanding
            liabilities += loan.unpaidInterest

        return assets - liabilities

## 10.3 Take a loan

    function takeLoan(state, amount):
        require state.status == "active"
        require amount > 0
        require amount is a valid whole-rupee amount

        loan = Loan(
            id = createUniqueId(),
            originalPrincipal = amount,
            principalOutstanding = amount,
            unpaidInterest = 0,
            createdInMonth = state.month,
            status = "active"
        )

        state.loans.add(loan)
        state.cash += amount

        recordTransaction(
            state,
            "loan_draw",
            amount
        )

        return success

## 10.4 Repay a loan

    function repayLoan(state, loanId, amount):
        require amount > 0
        require amount <= state.cash

        loan = findLoan(state, loanId)

        if loan does not exist:
            return failure

        repayment = amount

        interestPayment =
            min(repayment, loan.unpaidInterest)

        loan.unpaidInterest -= interestPayment
        repayment -= interestPayment

        principalPayment =
            min(repayment, loan.principalOutstanding)

        loan.principalOutstanding -= principalPayment

        actualPayment =
            interestPayment + principalPayment

        state.cash -= actualPayment

        if loan.principalOutstanding == 0
           and loan.unpaidInterest == 0:
            loan.status = "repaid"

        recordTransaction(
            state,
            "loan_repayment",
            -actualPayment
        )

        return success

## 10.5 Close a month

    function closeMonth(state, rules):
        for loan in state.loans:
            if loan.principalOutstanding > 0:
                interest =
                    loan.originalPrincipal
                    * rules.monthlyInterestRate

                loan.unpaidInterest +=
                    roundedInterestInPaise(interest)

                recordInterestTransaction(
                    state,
                    loan.id,
                    interest
                )

        checkVictory(state, rules)

The real implementation should calculate and store interest in integer paise or another exact monetary subunit, using one defined rounding policy.

## 10.6 Complete an opportunity

    function completeOpportunity(state, opportunity):
        if state.status != "active":
            return failure

        if opportunity.id is already completed
           and opportunity.repeatPolicy == "once":
            return failure

        if state.actionPointsRemaining
           < opportunity.actionPointCost:
            return failure

        if not requirementsSatisfied(state, opportunity):
            return failure

        if playerCannotAffordRequiredCash(state, opportunity):
            return failure

        candidateState = copy(state)

        applyAllEffects(candidateState, opportunity)

        if violatesFinancialInvariants(candidateState):
            return failure

        candidateState.actionPointsRemaining -=
            opportunity.actionPointCost

        recordOpportunityCompletion(
            candidateState,
            opportunity.id
        )

        if hasWon(candidateState):
            candidateState.status = "won"

        state = candidateState

        return success

This transactional pattern prevents partial effects. For example, a failed barter must not transfer the player's item while leaving the other item untouched.

## 10.7 Advance the week

    function advanceWeek(state, rules):
        if state.status != "active":
            return

        state.week += 1

        if state.week > 40:
            state.status = "failed"
            return

        state.actionPointsRemaining = 2

        if state.week is 1, 5, 9, 13, 17,
           21, 25, 29, 33, or 37:
            startMonth(state, rules)

        revealWeeklyEvent(state)

The production implementation should explicitly separate opening a week, processing the month's opening, resolving actions, closing the month and checking progression. This makes timing bugs easier to detect.

## 10.8 Victory check

    function hasWon(state):
        return (
            calculateNetWorth(state) >= 50000
            and state.funScore >= 2500
        )

## 10.9 End-of-run check

    function evaluateRunEnd(state):
        if state.status == "won":
            return "victory"

        if state.week == 40
           and week40HasBeenFullySettled(state):
            if hasWon(state):
                state.status = "won"
                return "victory"

            state.status = "failed"
            return "failure"

        return "continue"

---

# 11. User Interface and Player Feedback

## 11.1 Main dashboard

Display these values persistently:

- Current week and month.
- Cash available.
- Net worth.
- Outstanding principal.
- Unpaid interest.
- Fun score.
- Social capital.
- Available action points.
- Progress toward both victory targets.

The net-worth target and fun target should be separate progress indicators. A player should never mistake a high fun score for financial success or vice versa.

## 11.2 Opportunity cards

Each opportunity card should show:

- Title and short description.
- Required action points.
- Upfront cash cost.
- Expected cash reward.
- Fun reward.
- Item requirements.
- Social requirements.
- One-time or repeatable status.
- Any delayed consequence.

Before confirmation, show the predicted changes to cash, net worth, debt and fun.

## 11.3 Month-end report

At every month-end, show:

- Income received.
- Mandatory expenses.
- Optional spending.
- Additional earnings.
- Loan interest charged.
- Debt repaid.
- Net-worth change.
- Fun points earned.
- Most significant decision of the month.

The report should explain the result in plain language.

Example:

"Your net worth fell by ₹190 because your outstanding loan incurred its monthly interest charge. Your cash did not change, but your liabilities increased."

## 11.4 End-of-run report

At victory or failure, show:

- Final net worth.
- Final fun score.
- Total income.
- Total mandatory expenses.
- Total optional spending.
- Total additional earnings.
- Total interest paid and unpaid.
- Final loan principal.
- Highest net worth reached.
- Best and worst financial decisions.
- Retry option.

Do not label a player a financial failure simply because they lose. The report should focus on outcomes and choices.

---

# 12. Save and Load

A save must include:

- Full player state.
- Current week and month.
- Cash and financial liabilities.
- Inventory.
- Completed opportunities.
- Event flags.
- Decision history.
- Random number generator state, if randomness is used.
- Save schema version.

Loading a save must not reapply monthly income, mandatory expenses or interest.

A retry must create a fresh state with the initial ₹500 comic collection, zero cash, zero debt and zero fun points.

Use versioned save data so later releases can detect incompatible saves instead of silently corrupting them.

---

# 13. Technical Architecture

The simulation core should be independent of the 2D renderer.

Recommended conceptual modules:

    finance101/
        game_core/
            state
            calendar
            economy
            loans
            inventory
            barter
            opportunities
            social
            progression
            save_load

        game_content/
            phase_1
            events
            items
            opportunities

        interface/
            dashboard
            event_cards
            financial_report
            inventory
            end_screen

        tests/
            economy_tests
            loan_tests
            inventory_tests
            barter_tests
            progression_tests
            save_load_tests

The language is not locked. The core design requires ordinary data structures, deterministic functions and automated tests. The rendering framework can be selected independently.

---

# 14. Testing Requirements

## Financial tests

- Monthly income is credited exactly once.
- Mandatory expenses are deducted exactly once.
- Net worth includes assets and subtracts all liabilities.
- A loan draw does not increase net worth.
- Interest is based on original principal.
- Interest does not compound.
- A fully repaid loan does not incur interest at month-end.
- A partially repaid loan incurs the specified full monthly interest.
- Item purchases use predefined resale values.
- Selling an item at its resale value leaves net worth unchanged.
- A value-neutral barter does not create net worth.
- Failed transactions leave the state unchanged.

## Gameplay tests

- The player receives 40 weekly turns.
- Each week starts with the correct number of action points.
- Monthly income and expenses occur at the correct boundaries.
- Victory requires both targets.
- The game cannot continue beyond the deadline.
- A failed run offers retry.
- One-time opportunities cannot be farmed.
- Save/load preserves the exact financial state.
- The same action sequence produces the same result.

## Balance tests

Run automated simulations using different strategies:

1. Save almost everything and focus on paid opportunities.
2. Prioritize fun early, then earn more money later.
3. Mix paid work, social activities and bartering.
4. Borrow to finance opportunities, then repay.
5. Avoid debt and focus on low-cost fun.
6. Make several poor choices and test whether recovery is possible.

The objective is not for every strategy to win. It is for more than one sensible strategy to be viable.

Before release, verify that a player can realistically achieve both targets in 40 weeks without relying on a single exploit or an impossible sequence of random events.

---

# 15. MVP Definition of Done

The Phase 1 MVP is complete when:

- A fresh run starts with ₹0 cash and ₹500 of comics.
- Monthly income and mandatory expenses work correctly.
- The player can complete weekly opportunities.
- The player can earn money, spend money, trade items and borrow.
- Loan interest and repayments are calculated correctly.
- Fun, social capital and inventory are tracked separately.
- Net worth is correct after every transaction.
- All 40 weeks are playable.
- Both victory conditions are checked correctly.
- The game can be saved, loaded and retried.
- A month-end report and final report are available.
- Automated tests cover financial invariants and progression.
- Simulation tests demonstrate that the goals are achievable and reasonably balanced.

---

# 16. Final Design Principle

Finance101 should make the player feel that every decision is understandable, even when its consequences are painful.

The player should be able to answer three questions after every major decision:

1. **What did I gain?**
2. **What did it cost me, financially and in time?**
3. **Did it move me closer to my actual goal?**

If the player can understand those trade-offs and see how they shape the outcome, Phase 1 will work as both a game and a financial decision-making simulator.
