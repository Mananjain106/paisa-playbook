import type { Chapter } from '../../types'
import { scene4 } from '../../lib/chapter-blocks'

export const education: Record<string, Chapter> = {
  'l4-054': {
    id: 'l4-054',
    title: 'Education Finance',
    subtitle: 'Funding learning without funding the decision badly.',
    minutes: 6,
    blocks: [
      scene4('goal-ladder', 'Education is a rung bought with fees, time and forgone income.'),
      { kind: 'p', text: "Education is often treated as a sacred investment, and in many cases it is one of the most valuable things a person can buy. But it is still a purchase with a price, a financing choice, a timeline, and an expected return. The useful habit is to finance education thoughtfully: compare the cost with the likely outcome, avoid debt that outlives the benefit, and keep the decision grounded in the career and life it is meant to enable." },
      { kind: 'h', text: 'The finance questions education raises' },
      { kind: 'list', items: [
        'What is the true cost: fees, living costs, materials, and the income forgone while studying.',
        'What is the likely payoff: career access, earnings trajectory, mobility, and skills that matter in the market.',
        'How will it be funded: savings, family support, scholarships, or debt.',
        'What is the risk if the outcome is weaker than expected, and how much financing can be tolerated before the risk becomes too high.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Treat education like a major purchase with a future payoff', text: "That does not mean treating learning as a cold transaction. It means refusing to make a six- or seven-figure decision on sentiment alone. A good education decision has a purpose, a plan, and a repayment or payoff path. A vague dream funded by debt is a riskier thing." },
      { kind: 'example', title: 'Finance before ambition', text: "A student who knows what they want to do, what the course costs, how they will pay, and what the realistic range of outcomes is, is in a very different position from one who borrows first and figures the rest out later. The ambition is important; the finance is what makes the ambition survivable." },
      { kind: 'terms', items: [
        { term: 'education finance', meaning: 'the planning and funding of education costs, including the trade-offs between savings, support, scholarships, and debt.' },
        { term: 'opportunity cost of studying', meaning: 'the income or experience forgone while studying instead of working or doing something else.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to approach financing education?',
        options: [
          { text: 'Treat it as a major purchase with a future payoff, and plan the funding around the cost, the likely outcome, and the risk if the outcome is weaker than expected.', correct: true, why: 'Education can be a strong investment, but it is still a financial decision, and the funding should fit the risk and the payoff.' },
          { text: 'Avoid any discussion of cost because education should be judged only by its ideal value.', correct: false, why: 'Ideal value is not the same as financial reality. Ignoring cost can leave a student or family exposed to debt they cannot comfortably carry.' },
          { text: 'Borrow as much as possible now and worry about repayment only after the course ends.', correct: false, why: 'That reverses the responsible order. The repayment risk belongs in the decision before the money is borrowed.' },
        ],
      },
    ],
    takeaway: 'Education finance is about funding a future payoff responsibly. Match the cost to the likely outcome, avoid debt that outlives the benefit, and plan the money before you commit to the course.',
  },

  'l4-055': {
    id: 'l4-055',
    title: 'Scholarships',
    subtitle: 'Money for learning that does not have to be repaid.',
    minutes: 5,
    blocks: [
      scene4('scholarship-offset', 'A scholarship removes part of the cost of the very same rung.'),
      { kind: 'p', text: "A scholarship is money for education that does not have to be repaid, usually awarded on the basis of merit, need, or both, depending on the program. Because it is not a loan, a scholarship changes the economics of education in a way that loans do not: it lowers the price directly rather than lowering only the timing problem. That is why scholarships are worth pursuing aggressively when they are accessible." },
      { kind: 'h', text: 'Why scholarships matter financially' },
      { kind: 'list', items: [
        'They reduce the amount of debt needed, which lowers future repayment pressure.',
        'They reduce the risk of funding education with expensive or inflexible borrowing.',
        'They can make a course or path affordable that would otherwise be marginal.',
        'They reward preparation, research, and timely applications, which are themselves useful skills.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Treat scholarship hunting as part of the education plan', text: "A scholarship search is not a side activity; it is part of the funding strategy. The time spent applying can have a high payoff if it lowers tuition or living costs. The practical habit is to know the deadlines, the eligibility rules, and the documentation, and to apply broadly where it makes sense." },
      { kind: 'example', title: 'A scholarship changes the calculation', text: "A course that looks expensive with a loan can look very different if part of the cost is covered by a scholarship. The course may still be a stretch, but the financing becomes safer, and the student may avoid borrowing money that would take years to repay. That is the practical value of free money where it is available." },
      { kind: 'terms', items: [
        { term: 'scholarship', meaning: 'financial aid for education that usually does not have to be repaid, awarded on criteria such as merit, need, or program-specific rules.' },
        { term: 'financial aid', meaning: 'broadly, any assistance that helps fund education, including scholarships, grants, loans, and other support.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main financial advantage of a scholarship over a loan?',
        options: [
          { text: 'It reduces the cost of education without adding a repayment obligation.', correct: true, why: 'A scholarship is not repaid, so it lowers both the price and the future financial pressure, unlike a loan.' },
          { text: 'It always pays for everything, so no other funding is ever needed.', correct: false, why: 'Scholarships vary widely; some cover part of the cost, and many do not cover everything.' },
          { text: 'It is guaranteed for every student regardless of eligibility.', correct: false, why: 'Scholarships have criteria and competition; they are not universally available.' },
        ],
      },
    ],
    takeaway: 'A scholarship lowers the cost of education without creating debt. Pursue them as part of the funding plan, because free money changes the risk and the repayment burden in a way loans cannot.',
  },

  'l4-056': {
    id: 'l4-056',
    title: 'Education Loans',
    subtitle: 'Borrowing for a future payoff — useful, but not free.',
    minutes: 6,
    blocks: [
      scene4('loan-amort', 'A loan spreads the fee bill into years of interest and principal.'),
      { kind: 'p', text: "An education loan can be a sensible way to fund a course when the expected payoff justifies the borrowing and the terms are manageable. It can bridge the gap when savings, scholarships, and family support are not enough. But a loan is still a loan: it creates a future obligation, with interest, and that obligation should be sized against the realistic earnings the education is meant to unlock." },
      { kind: 'h', text: 'What to weigh before taking an education loan' },
      { kind: 'list', items: [
        'The total repayment amount, not just the first EMI: interest, tenure, and any fees can make the final cost materially higher.',
        'The realistic earning range after the course, not just the best case.',
        'The cash flow you expect in the years after the course, and whether the EMI will fit.',
        'The flexibility of the loan: are there grace periods, prepayment options, or terms that help if the outcome is slower than hoped.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A loan is not a promise that the degree will pay for itself', text: "The quality of the education matters, and so does the market it leads to. But no loan comes with a guaranteed job or a guaranteed salary. Borrow with the median case in mind, not with the dream case. If the repayments are painful in the realistic scenario, the loan may be too large." },
      { kind: 'example', title: 'A responsible loan decision', text: "If a course is expected to open up a higher-earning career, an education loan can be a bridge worth taking. If the same loan would be hard to service on the more likely salary, the burden may be too high. A sensible loan matches the debt to the probable income, with room for things to go less perfectly." },
      { kind: 'terms', items: [
        { term: 'education loan', meaning: 'borrowing used to fund education costs, usually repaid over time with interest after the course or after a grace period.' },
        { term: 'grace period', meaning: 'a period after the course, or after a defined point, during which repayment may be deferred or structured differently.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important thing to check before taking an education loan?',
        options: [
          { text: 'Whether the likely post-course income range can realistically service the loan over time, including interest and tenure.', correct: true, why: 'An education loan is justified when the borrower can reasonably repay it; the loan should fit the probable income, not just the optimistic one.' },
          { text: 'Only the amount needed for tuition, since living costs do not matter much.', correct: false, why: 'Living costs and the total repayment amount matter too; focusing only on tuition ignores a large part of the burden.' },
          { text: 'Whether the loan has the longest possible tenure, because that always makes it safest.', correct: false, why: 'A long tenure can lower EMIs but can also increase total interest; the safest loan is the one that fits the borrower’s expected cash flow and total cost.' },
        ],
      },
    ],
    takeaway: 'An education loan can fund a worthwhile future, but it is still borrowing with interest and a real repayment obligation. Size the loan to the probable income, and treat the optimistic case as a bonus, not a plan.',
  },

  'l4-057': {
    id: 'l4-057',
    title: 'ROI Of Education',
    subtitle: 'What the education is expected to return, in money and in options.',
    minutes: 6,
    blocks: [
      scene4('education-payoff', 'The payoff of education arrives years after the cost.'),
      { kind: 'p', text: "Return on investment for education is not only the salary you might earn after a course. It is also the doors it opens, the skills it builds, the mobility it gives you, and the option value it creates. Money matters, but so does whether the education meaningfully expands what you can do. The best education decisions compare the cost with the full range of expected benefits, not just the highest hoped-for salary." },
      { kind: 'h', text: 'What counts as return' },
      { kind: 'list', items: [
        'Expected income gains over time, compared with the cost and financing.',
        'Optionality: paths that become available because of the education, even if you do not take all of them.',
        'Skill value: usefulness in the labour market and the ability to adapt as conditions change.',
        'Network and credentials, where they matter for the specific field.',
        'Risk reduction, if the education is linked to steadier or more durable work.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'ROI is a range, not a slogan', text: "Some courses have a clear, strong financial payoff; some do not, and are still worth it for non-financial reasons; and some are hard to justify on any realistic basis. The useful question is not ‘is education always a good investment?’ but ‘for this course, at this cost, with this likely outcome, does it make sense?’" },
      { kind: 'example', title: 'A balanced ROI view', text: 'A professional course with high fees may still be a strong investment if it leads to access to a well-paid field and the student can realistically service the debt. A cheaper course with weak labour-market value may have a worse return even though it costs less. ROI is about the relationship between cost and outcome, not about prestige or price alone.' },
      { kind: 'terms', items: [
        { term: 'ROI', meaning: 'return on investment: what you get back relative to what you put in, often considered in money, opportunity, and option value.' },
        { term: 'optionality', meaning: 'the value of having more choices available, such as career paths, roles, or geographies, that the education makes possible.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the best way to think about the return on education?',
        options: [
          { text: 'As a range that includes income gains, optionality, skills, and access, weighed against the total cost and financing.', correct: true, why: 'ROI for education is broader than salary alone; it includes the options and skills the course opens, and it must be judged against what it costs.' },
          { text: 'Only as the highest possible salary after the course, because that is the only return that matters.', correct: false, why: 'A single optimistic salary ignores risk and cost; a realistic range is more useful than the best case.' },
          { text: 'As a guarantee, since education always pays off financially no matter the course or cost.', correct: false, why: 'Education does not always pay off financially; the outcome depends on the course, the field, the cost, and the market.' },
        ],
      },
    ],
    takeaway: 'ROI of education is the return against the cost, in money, skills, and options. Judge it as a range tied to the specific course and likely outcome, not as a slogan or a guarantee.',
  },

  'l4-058': {
    id: 'l4-058',
    title: 'Opportunity Cost Of Education',
    subtitle: 'What studying costs besides the fee bill.',
    minutes: 5,
    blocks: [
      scene4('real-vs-nominal', 'The cost you see is only part of the cost you actually pay.'),
      { kind: 'p', text: "When people think about the cost of education, they usually think about fees. They should also think about the things they give up to study: the income they do not earn, the experience they do not gain, and the years they spend in one path instead of another. That forgone value is the opportunity cost of education, and it can be a large part of the real price." },
      { kind: 'h', text: 'What is often left out of the cost' },
      { kind: 'list', items: [
        'Forgone earnings while studying full-time or part-time.',
        'Forgone work experience and seniority that come from staying in the job market instead.',
        'The alternative uses of money spent on fees and living costs.',
        'The option of entering the workforce earlier with a different path.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not count fees and ignore everything else', text: "A course with moderate fees can still be expensive if it forces a long break from earning, or if it delays career progress for years. The full cost is fees plus the opportunity cost, and that total is what matters when you compare one path with another." },
      { kind: 'example', title: 'A fuller cost picture', text: "A student who leaves work for a year of study may pay a fee bill and also lose a year of earnings, a year of experience, and a year of compounding on savings they might otherwise have built. Another student who studies part-time and keeps earning may face a different trade-off. The opportunity cost is what makes the two paths different beyond the fees." },
      { kind: 'terms', items: [
        { term: 'opportunity cost', meaning: 'the value of the next best alternative you give up when you choose one path over another, including income, experience, and other uses of time and money.' },
        { term: 'forgone earnings', meaning: 'the income not earned because time was spent studying, training, or otherwise not working in the alternative path.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the opportunity cost of education most likely to include?',
        options: [
          { text: 'The income, experience, and alternative uses of money and time given up in order to study.', correct: true, why: 'Opportunity cost is about what is sacrificed for the choice, and for education that means more than fees alone.' },
          { text: 'Only the tuition fees paid to the institution, since that is the only real cost.', correct: false, why: 'Tuition is part of the cost, but the income and experience given up while studying can also be large.' },
          { text: 'Nothing, because studying always happens alongside paid work.', correct: false, why: 'Some study does happen alongside work, but many forms of education involve time that could have been used differently.' },
        ],
      },
    ],
    takeaway: 'The cost of education is not just the fees. Add the income, experience, and alternative uses of money and time you give up, because opportunity cost is a real part of what the decision costs.',
  },
}