import type { Chapter } from '../../types'
import { scene4 } from '../../lib/chapter-blocks'

const SCENE_0 = scene4('corpus-ladder')
const SCENE_1 = scene4('nps-annuity')

export const retirement: Record<string, Chapter> = {
  'l4-030': {
    id: 'l4-030',
    title: 'Retirement Planning',
    subtitle: 'Designing the long gap when your salary stops.',
    minutes: 7,
    blocks: [
      SCENE_0,
      { kind: 'p', text: "Retirement planning is not about picking a date and hoping for the best. It is about building a bridge between the income you have while working and the years when you stop or sharply reduce work. The bridge has to cover everyday living, medical costs, and the inflation that quietly eats purchasing power every year. The earlier you start, the less brutal the monthly savings need to be." },
      SCENE_0,
      { kind: 'h', text: 'What retirement planning actually solves' },
      { kind: 'list', items: [
        'Income replacement: your expenses do not stop just because your salary does. The question is what your spending will look like after work.',
        'Time: retirement can last decades, so a one-time lump sum is not the same as a sustainable income stream.',
        'Inflation: whatever your corpus is worth in today’s rupees, a future number must be much larger to buy the same lifestyle.',
        'Medical and unexpected costs: health costs rise with age, and a retirement plan that ignores them is fragile.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Start with expenses, not with a corpus number', text: "A retirement corpus is easier to design when you begin with what you actually spend. Work out the lifestyle you want, adjust for the expenses that will disappear and the ones that will rise, and only then convert that into a number. The number is the output of the plan, not the starting point." },
      SCENE_0,
      { kind: 'example', title: 'A simple planning frame', text: "1. Estimate the annual spending you want in retirement, in today’s rupees.\n2. Add a cushion for medical and unexpected costs.\n3. Adjust for inflation over the years until retirement.\n4. Convert that into a corpus target and the savings needed to reach it.\n5. Review the plan whenever your income, spending, or goals change." },
      { kind: 'terms', items: [
        { term: 'retirement planning', meaning: 'the process of arranging savings, investments, and income sources so that you can support yourself in the years after you stop working or sharply reduce work.' },
        { term: 'retirement corpus', meaning: 'the accumulated amount aimed at funding retirement, whether taken as income, drawn down, or converted into an annuity.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why should retirement planning usually start with expenses rather than with a corpus number?',
        options: [
          { text: 'Because the corpus is the output of the plan: once you know the lifestyle you want and the inflation you must beat, the number follows.', correct: true, why: 'Starting with expenses keeps the plan tied to real life. A random corpus number can be too small, too large, or simply unconnected to what you actually need.' },
          { text: 'Because the corpus number is always fixed by the government and cannot be changed.', correct: false, why: 'Your retirement target is personal, not fixed by the state. What you need depends on your own spending and goals.' },
          { text: 'Because retirement planning only matters after you have already retired.', correct: false, why: 'Planning is most useful before retirement, when there is time for savings and compounding to work.' },
        ],
      },
    ],
    takeaway: 'Retirement planning is the bridge from working income to a long stretch without it. Start with the lifestyle and the expenses, then let the corpus target emerge from that reality.',
  },

  'l4-031': {
    id: 'l4-031',
    title: 'Inflation-Adjusted Retirement Goals',
    subtitle: 'A crore today is not a crore in twenty-five years.',
    minutes: 6,
    blocks: [
      scene4('corpus-ladder'),
      { kind: 'p', text: "The most common retirement mistake is setting a goal in today’s rupees and then treating the future number as if it were the same value. It is not. Inflation erodes purchasing power year after year. A goal of ₹X in today’s money must become a much larger number by the time you reach retirement, and then it must still be large enough to last through decades of spending." },
      { kind: 'h', text: 'Why ‘a crore’ is not enough by itself' },
      { kind: 'list', items: [
        'A crore in 25 years does not buy what a crore buys today.',
        'Healthcare, housing, and food costs can rise faster than the general inflation you feel day to day.',
        'Retirement can last longer than people expect, so the money has to last through more years of inflation than the saving years.',
        'The goal is not just to retire; it is to retire with enough purchasing power to maintain the lifestyle you want.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not confuse the number with the lifestyle', text: "It is easy to say ‘I need ₹5 crore’ without saying what that ₹5 crore must do. A number without a lifestyle attached is just a number. The better question is: what annual spending, in today’s money, do I want to support, and what does that become by the time I retire?" },
      { kind: 'example', title: 'Adjusting a goal for inflation', text: 'If you want to spend the equivalent of ₹10 lakh a year today, and you expect inflation to erode purchasing power over the next 20 years, the actual annual spending at retirement will need to be far higher than ₹10 lakh. The exact number depends on the inflation assumption, but the point is that the future figure is not the same as today’s comfort level.' },
      { kind: 'terms', items: [
        { term: 'inflation-adjusted goal', meaning: 'a future target expressed in terms that account for the loss of purchasing power over time, so the goal reflects what money will actually buy then.' },
        { term: 'purchasing power', meaning: 'what a given amount of money can actually buy; it falls over time when prices rise.' },
      ] },
    ],
    quiz: [
      {
        q: 'Why is a retirement goal stated in today’s rupees usually not enough on its own?',
        options: [
          { text: 'Because inflation will reduce what that money can buy by the time you retire, so the future number must be larger to support the same lifestyle.', correct: true, why: 'A goal in today’s money does not account for the loss of purchasing power before and during retirement.' },
          { text: 'Because the government will automatically convert today’s rupees into a different unit at retirement.', correct: false, why: 'There is no automatic conversion by the government; the adjustment comes from inflation and time, not from a fixed official rule.' },
          { text: 'Because retirement goals are only meaningful if they are expressed in a foreign currency.', correct: false, why: 'The currency is your own; the issue is purchasing power over time, not the unit of account.' },
        ],
      },
    ],
    takeaway: 'Inflation-adjusted goals tell you what your future money must really do. A number that looks large today can still be too small if it ignores the decades of price rises ahead.',
  },

  'l4-032': {
    id: 'l4-032',
    title: 'Retirement Corpus',
    subtitle: 'The pile that must fund a long retirement.',
    minutes: 6,
    blocks: [
      scene4('corpus-ladder'),
      scene4('nps-annuity'),
      { kind: 'p', text: "A retirement corpus is the total amount you aim to have available when work income stops or drops sharply. It is not a magic figure; it is the output of how much you spend, how long retirement will last, how much growth and inflation you assume, and how conservatively you want to plan. A corpus that is too small creates a retirement that runs out; a corpus that is too conservative can mean decades of over-saving." },
      { kind: 'h', text: 'What shapes the corpus number' },
      { kind: 'list', items: [
        'Annual spending target: the lifestyle you want to fund.',
        'Years in retirement: the longer it lasts, the more the corpus must stretch.',
        'Inflation: the rise in what you will have to pay over time.',
        'Expected returns: how much the corpus can grow while it is being drawn down.',
        'Drawdown rate: how much you take out each year without exhausting the fund too early.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Treat the corpus as a range, not a single point', text: "A corpus target is an estimate, not a destiny. Build it from assumptions, stress-test it with a worse market and a longer life, and know what you would do if things go sideways. A good plan has a number and a backup." },
      { kind: 'example', title: 'A drawdown habit', text: 'If you have a corpus and withdraw a fixed percentage each year, the key question is whether that percentage is safe over a long retirement with market ups and downs. Too much withdrawal early on, especially in a bad market, can shorten a portfolio’s life more than people expect.' },
      { kind: 'terms', items: [
        { term: 'corpus', meaning: 'an accumulated fund built up for a particular purpose, such as retirement, a child’s education, or a house.' },
        { term: 'drawdown', meaning: 'the process of taking money out of a corpus over time, usually as income in retirement.' },
      ] },
    ],
    quiz: [
      {
        q: 'What most shapes the size of a retirement corpus?',
        options: [
          { text: 'The annual spending target, how long retirement will last, the assumed inflation and returns, and the drawdown rate you use.', correct: true, why: 'A corpus is a derived number. It depends on spending, time, inflation, returns, and how fast you withdraw.' },
          { text: 'Only the age at which you plan to retire.', correct: false, why: 'Retirement age matters, but it is only one part of the picture. Spending, longevity, and returns matter too.' },
          { text: 'The current market price of the stocks you happen to own.', correct: false, why: 'Market prices affect the path, but the target should come from what you need, not from what the market happens to show today.' },
        ],
      },
    ],
    takeaway: 'A retirement corpus is the fund built to support a long retirement. Size it from spending, longevity, inflation, returns, and drawdown — and treat it as a range with a backup plan.',
  },

  'l4-033': {
    id: 'l4-033',
    title: 'EPF',
    subtitle: 'The employee provident fund: a long-built, forced-savings base for retirement.',
    minutes: 6,
    blocks: [
      scene4('corpus-ladder'),
      { kind: 'p', text: "The EPF, or Employee Provident Fund, is a retirement savings system for many salaried employees in India. Both the employee and the employer contribute, and the money accumulates with interest over the years of service. For a lot of people, it is the first large, involuntary retirement asset they ever build — which is useful precisely because it happens automatically." },
      { kind: 'h', text: 'What makes EPF useful' },
      { kind: 'list', items: [
        'It is a disciplined, long-term accumulation vehicle built into the job.',
        'Contributions and growth build up over time, usually across many years of employment.',
        'It is a base layer of retirement savings for many salaried workers, often alongside other assets.',
        'The useful question is not just how much is there, but how it fits with the rest of the retirement plan.',
      ] },
      { kind: 'callout', tone: 'india', title: 'EPF is a base, not the whole plan', text: "For many people, EPF alone will not fund a comfortable retirement, especially if lifestyle expectations are high or inflation is strong. Treat it as the foundation — valuable, stable, and worth protecting — and then build personal savings on top of it." },
      { kind: 'example', title: 'A layered base', text: 'If EPF is the first layer of retirement savings, the second layer might be personal retirement accounts and other investments, and the third layer might be a lifestyle buffer for the kind of spending you want beyond essentials. The better the layers, the less fragile retirement becomes.' },
      { kind: 'terms', items: [
        { term: 'EPF', meaning: 'Employee Provident Fund — a long-term retirement savings arrangement for many salaried employees, with contributions from the employee and employer.' },
        { term: 'provident fund', meaning: 'a forced-savings fund built up during employment, often for retirement, with contributions and accumulated interest or returns.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most accurate way to view EPF in a retirement plan?',
        options: [
          { text: 'As a useful base layer that builds automatically over a career, but usually not the entire retirement solution on its own.', correct: true, why: 'EPF is strong as a foundation, but a comfortable retirement often needs more than the provident fund alone.' },
          { text: 'As the only retirement asset most people will ever need.', correct: false, why: 'For many people, EPF will not be enough by itself if the lifestyle target is high or inflation is strong.' },
          { text: 'As a short-term savings pot that should be withdrawn as soon as possible.', correct: false, why: 'EPF is designed for long-term retirement accumulation, not as an emergency pot to drain early.' },
        ],
      },
    ],
    takeaway: 'EPF is a forced, long-built retirement base for many salaried employees. Value it as a foundation, but build personal savings on top for the lifestyle you actually want.',
  },

  'l4-034': {
    id: 'l4-034',
    title: 'PPF',
    subtitle: 'A long, government-backed savings route with a retirement-friendly profile.',
    minutes: 6,
    blocks: [
      scene4('corpus-ladder'),
      { kind: 'p', text: "The PPF, or Public Provident Fund, is a long-term, government-backed savings scheme. It is popular in India as a retirement and long-savings tool because it combines a long lock-in, tax benefits in the right context, and a profile that suits people who want a stable, assured-like component in their plan. It is not a high-return product, but it is often valued for safety and discipline." },
      { kind: 'h', text: 'When PPF makes sense' },
      { kind: 'list', items: [
        'When you want a long, stable savings component alongside riskier assets.',
        'When you value a government-backed structure and a long horizon.',
        'When you want a place for money that you do not want to expose to market swings.',
        'When you are building a retirement base and want diversity in the type of savings you hold.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'PPF is best as a building block, not the whole building', text: "PPF can be a good part of a retirement plan, especially for the conservative part of the portfolio. But a retirement plan usually needs more than one tool. Use PPF for what it is good at, and do not pretend it can do the job of growth assets if your time horizon can support them." },
      { kind: 'example', title: 'A balanced retirement core', text: 'A retirement core might include EPF for the forced employer-linked base, PPF for a long government-backed savings component, and personal investments for growth and flexibility. The mix depends on your age, risk, and goals, but the idea is to avoid putting every rupee into the same bucket.' },
      { kind: 'terms', items: [
        { term: 'PPF', meaning: 'Public Provident Fund — a long-term, government-backed savings scheme in India used for retirement and other long-horizon goals.' },
        { term: 'lock-in', meaning: 'a minimum period during which money cannot easily be withdrawn, which is common in long-term savings products.' },
      ] },
    ],
    quiz: [
      {
        q: 'When is PPF most likely to be a sensible part of a retirement plan?',
        options: [
          { text: 'When you want a long, stable, government-backed savings component alongside other assets.', correct: true, why: 'PPF suits people looking for a long horizon, stability, and a conservative core, not necessarily maximum growth.' },
          { text: 'When you want the highest possible short-term return available in the market.', correct: false, why: 'PPF is not designed to be a high short-term-return product; it is a long-term savings tool.' },
          { text: 'When you need full liquidity every month for everyday spending.', correct: false, why: 'PPF has a long horizon and limited liquidity features; it is not built for monthly access.' },
        ],
      },
    ],
    takeaway: 'PPF is a long, government-backed savings tool that can anchor the conservative part of a retirement plan. Use it for stability and discipline, and combine it with other tools for growth and flexibility.',
  },

  'l4-035': {
    id: 'l4-035',
    title: 'NPS',
    subtitle: 'A market-linked retirement account with a purpose-built design.',
    minutes: 6,
    blocks: [
      SCENE_1,
      { kind: 'p', text: "NPS, the National Pension System, is a market-linked retirement savings system. It is designed to accumulate over a career and then be used at retirement, typically through a mix of lump sum and annuity. For many people, the appeal is the combination of long-term discipline, market-linked growth potential, and a structure that nudges you toward retirement rather than impulse spending." },
      SCENE_1,
      { kind: 'h', text: 'What NPS is designed to do' },
      { kind: 'list', items: [
        'Accumulate retirement savings over many years through regular contributions.',
        'Offer market-linked returns depending on the choice of investment option.',
        'Encourage a retirement-focused mindset by making the money harder to treat as a short-term pot.',
        'Provide a retirement exit path that can include both withdrawal and pension-like income, depending on the plan and rules.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'NPS is retirement money, not a general savings account', text: "NPS has features that make it genuinely useful for retirement, but those same features can make it less flexible than a plain investment account. Use it for retirement savings, not for money you might need soon. The restrictions exist because the product is built for a long horizon." },
      SCENE_1,
      { kind: 'example', title: 'Using NPS well', text: 'If NPS is part of your retirement plan, treat it as one component of a broader base. It can add a market-linked, long-term accumulation layer, but it works best when you understand the exit rules and the trade-off between accumulation and the income you want at retirement.' },
      { kind: 'terms', items: [
        { term: 'NPS', meaning: 'National Pension System — a market-linked retirement savings framework in India designed for long-term accumulation and retirement use.' },
        { term: 'annuity', meaning: 'a product or arrangement that can convert a lump sum into a stream of income over time, often used at retirement.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main design purpose of NPS?',
        options: [
          { text: 'To accumulate retirement savings over the long term and convert them into retirement benefits, often with market-linked returns.', correct: true, why: 'NPS is built as a retirement system, combining accumulation, market-linked choice, and retirement use.' },
          { text: 'To act as a fully liquid short-term savings account with no restrictions.', correct: false, why: 'NPS is not designed as a fully liquid everyday savings account; it has retirement-oriented restrictions.' },
          { text: 'To replace all other retirement tools so that no other savings are needed.', correct: false, why: 'NPS can be a strong component, but it does not by itself remove the need for a broader plan.' },
        ],
      },
    ],
    takeaway: 'NPS is a market-linked retirement account built for long-term accumulation and retirement use. Use it for what it is designed for, and understand the exit path before you rely on it.',
  },

  'l4-036': {
    id: 'l4-036',
    title: 'Annuities',
    subtitle: 'Turning a lump sum into a stream of income.',
    minutes: 6,
    blocks: [
      scene4('corpus-ladder'),
      { kind: 'p', text: "An annuity is a financial arrangement that can convert a lump sum into a stream of income over time. In retirement, that stream can be attractive because it reduces the risk of outliving your money. The trade-off is that an annuity can reduce flexibility and can be taxable depending on how the income is treated. The right use is as one option among several, not as a default for every retirement plan." },
      { kind: 'h', text: 'When an annuity is useful' },
      { kind: 'list', items: [
        'When you want predictable income for a defined period or for life.',
        'When you want to reduce the risk of spending a lump sum too quickly.',
        'When you prefer certainty over full flexibility.',
        'When you are using it as one part of a plan that also includes liquid assets and growth assets.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Annuities trade flexibility for certainty', text: "An annuity can create a dependable income stream, but it usually comes with less access to the lump sum and less room to change course. If your plans are likely to change, or if you want to leave money behind, that trade-off matters. Buy certainty only after you understand what you are giving up." },
      { kind: 'example', title: 'A blended retirement income idea', text: 'A retirement plan might use part of the corpus for flexible income and growth, part for a predictable annuity-like stream, and part as a reserve for health and unexpected costs. The blend depends on the person, but the idea is to avoid putting all your retirement income into a single form.' },
      { kind: 'terms', items: [
        { term: 'annuity', meaning: 'a financial arrangement that can provide a stream of income over time in return for a lump sum or contributions, often used in retirement.' },
        { term: 'pension', meaning: 'regular retirement income, which may come from an employer scheme, an annuity, or a self-managed drawdown from a corpus.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main trade-off of an annuity?',
        options: [
          { text: 'It can provide a steady income stream, but usually at the cost of flexibility and full access to the lump sum.', correct: true, why: 'Annuities exchange some flexibility for predictability; that is the central design trade-off.' },
          { text: 'It always gives a higher return than any other retirement product, with no downside.', correct: false, why: 'Annuities are not automatically higher-return; their value is in the income structure and risk reduction, not in guaranteed outperformance.' },
          { text: 'It removes all retirement risk, including the risk of inflation and medical costs.', correct: false, why: 'An annuity can reduce some risks, but it does not remove inflation or medical-cost risk entirely.' },
        ],
      },
    ],
    takeaway: 'Annuities turn a lump sum into a stream of income, which can reduce the risk of outliving your money. Use them for certainty where it fits, but understand the flexibility you give up.',
  },
}