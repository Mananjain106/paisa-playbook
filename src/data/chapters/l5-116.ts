import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band five — l5-116: getting formulas from an assistant, then testing them. */

export const l5_116: Chapter = {
  id: 'l5-116',
  title: 'AI For Spreadsheet Creation',
  subtitle:
    'Get AI to draft formulas and sheet structures, then test every formula before trusting a number.',
  minutes: 11,
  blocks: [
    scene(
      'ai-formula-test',
      'A formula is not correct because it looks right. It is correct when it survives the rows you designed to break it.',
    ),
    {
      kind: 'p',
      text: 'Spreadsheets are one of the few places where an AI assistant can save real hours: it will draft a SUMIFS, suggest a sheet layout, explain an error code, and propose the test cases you forgot. It will also produce formulas with an off-by-one range, a hard-coded rate, a missing absolute reference, or a function your version of the software does not have — and it will present all of them with the same confidence.',
    },
    { kind: 'h', text: 'Ask for the structure and the tests, not just the formula' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Give the sheet layout: what is in each column, where the headers sit, and which row real data starts on.',
        'Ask for the formula plus a one-line explanation of each reference, so you can see what it is anchored to.',
        'Ask for five test rows that should break it: a blank, a text value in a number column, a duplicate, a date outside the range, and a zero.',
        'Enter the formula, then enter the tests. A formula that passes five deliberate failures is worth trusting; one that has never been tested is a guess.',
        'Check the headline total with an independent method — a filter and a manual sum, or a second formula written differently.',
      ],
    },
    {
      kind: 'table',
      caption: 'The mistakes an AI-written formula makes most often',
      headers: ['Mistake', 'What it looks like', 'How to catch it'],
      rows: [
        ['Off-by-one range', 'SUMIFS over A2:A100 when data ends on row 101', 'Count the data rows, then check the range ends on the last one'],
        ['Hard-coded rate', '0.07 typed into the formula', 'Put the rate in a named cell and reference it'],
        ['Relative anchor', 'The rate cell drifts when the formula is copied down', 'Absolute reference ($B$2) for anything that must not move'],
        ['Criteria syntax', '“>”&B2 written as “>B2”', 'Test a value that should match and confirm it does'],
        ['Wrong function', 'XLOOKUP in a version that does not have it', 'Try it in your actual application, not in the chat'],
        ['Mismatched types', 'Text numbers that SUM ignores', 'Check the count of numeric cells against the count of rows'],
      ],
    },
    {
      kind: 'example',
      title: 'The test that finds the off-by-one',
      text: 'You ask for “total spend in September by category”. The formula returns ₹41,300. You then add a test row dated 30 September as the very last row of the sheet and the total does not move. The range ended one row early. Nothing else in the sheet would have revealed it — the number looked reasonable, and only a deliberate boundary row exposed the gap.',
    },
    l5Rule(
      'Your software is the referee, not the chat',
      'Whether a function exists in your version of Excel, Google Sheets or LibreOffice is decided by the application, not by the model that recommended it. A formula must be pasted into the real sheet and evaluated there before any number it produces is used. This is not a rule that changes yearly — which is exactly why it is worth stating: the assistant can be out of date about a feature even when it is right about the logic.',
    ),
    { kind: 'h', text: 'Document the sheet while you still remember it' },
    {
      kind: 'p',
      text: 'A sheet built from a conversation is a sheet whose logic lives in a conversation you will not find in eight months. Put a short notes block at the top: what each input column means, where the rates live, which cells are assumptions, and what each summary row is calculating. When a number looks wrong later, the notes are what let you audit it instead of rebuilding it.',
    },
    {
      kind: 'callout',
      tone: 'warning',
      title: 'Never paste a real statement into a prompt',
      text: 'The fastest way to get a useful formula is to describe the columns, not to paste the data. Column headings and three invented rows are enough for the assistant to draft and test. Pasting the real sheet exposes balances, names and account details for no gain in accuracy.',
    },
    sim(
      'l5-ai-formula-checker',
      'Take three AI-written formulas, run them against the test rows that should break them, and fix what fails.',
    ),
    l5Illustrative(
      'The sheet, formulas and results in the lab are invented for practice. The test-first method is the real content, verified on 15 October 2026 and linked below.',
    ),
    {
      kind: 'terms',
      items: [
        {
          term: 'Absolute reference',
          meaning: 'A cell reference fixed with $ signs so it does not move when the formula is copied, used for rates and lookup tables.',
        },
        {
          term: 'Off-by-one range',
          meaning: 'A range that starts or ends one row away from the real data, silently excluding or including a row.',
        },
        {
          term: 'Boundary test',
          meaning: 'A test row placed exactly on the edge of a date range or the last row of data, to prove the range reaches it.',
        },
        {
          term: 'Independent check',
          meaning: 'Confirming a total by a different route — a filter and manual sum, or a second formula written another way.',
        },
      ],
    },
    l5Sources(['meity'], [
      'MeitY — India’s AI policy home, for the guidance and frameworks that shape what these tools are expected to do',
    ]),
  ],
  quiz: [
    {
      q: 'An assistant gives you a SUMIFS formula for September spending. What should you do before using its output?',
      options: [
        {
          text: 'Compare the formula with the one you used last month',
          why: 'Agreement with a formula that may itself be wrong proves nothing, and the two may be wrong in the same way.',
        },
        {
          text: 'Ask the assistant to confirm the formula is correct',
          why: 'A model cannot evaluate your sheet. Confirmation from the same source that produced the formula is not a test.',
        },
        {
          text: 'Enter it in the real sheet and run boundary tests, including a row dated the last day of September',
          correct: true,
          why: 'The most common failure is a range that stops one row short. Only a deliberate boundary row proves the formula reaches the end of the month.',
        },
        {
          text: 'Use it if the total looks close to what you expected',
          why: 'A wrong range usually produces a plausible total. Expectation is the weakest of all the checks.',
        }
      ],
    },
    {
      q: 'You will copy a formula down a column, and it must always apply the same tax rate held in cell B2. Which reference is correct?',
      options: [
        { text: 'B2', why: 'A relative reference moves down with the formula, so later rows would read B3, B4 and so on.' },
        { text: 'B$2', why: 'The row is locked but the column can shift sideways, which breaks as soon as the formula is copied across.' },
        { text: '$B2', why: 'The column is locked but the row moves down, so the rate reference drifts away from B2.' },
        {
          text: '$B$2',
          correct: true,
          why: 'Both the column and the row are locked, so the reference stays on B2 in every copied row.',
        }
      ],
    },
    {
      q: 'An AI recommends XLOOKUP but your spreadsheet application is an older version that does not support it. What does this tell you?',
      options: [
        {
          text: 'The model is wrong about everything and should not be used for spreadsheets',
          why: 'The logic may be sound and only the function availability stale. Reject the specific recommendation, not the whole method.',
        },
        {
          text: 'The model’s knowledge of available features does not match your software, so the formula must be tested in the application itself',
          correct: true,
          why: 'Function availability is decided by the application and its version. The chat has no access to your install, so its recommendation is unverified.',
        },
        {
          text: 'You should upgrade your software so the formula works',
          why: 'Upgrading may not be possible or desirable, and a working alternative formula usually exists. The tool should fit your environment.',
        },
        {
          text: 'The formula will work if you type it carefully enough',
          why: 'Typing accuracy does not add a function to an application that does not have it.',
        }
      ],
    },
    {
      q: 'What is the best way to get help with a formula without exposing your financial data?',
      options: [
        {
          text: 'Describe the column headings and paste three invented rows that have the same shape as the real data',
          correct: true,
          why: 'The formula depends on structure and types, not on your actual balances. Invented rows with the same shape expose nothing and test the same logic.',
        },
        {
          text: 'Paste the real sheet and delete the names afterwards',
          why: 'Once pasted, the data has been sent. There is no reliable undo, and the deleted copy does not reach the tool’s logs.',
        },
        {
          text: 'Paste the real sheet with the amounts rounded to the nearest thousand',
          why: 'Rounding hides magnitudes but keeps account numbers, merchants and dates, which are the identifiers worth protecting.',
        },
        {
          text: 'Paste only the rows you do not recognise',
          why: 'Unrecognised rows are still your transactions, and they are usually the ones carrying counterparty names and UPI handles.',
        }
      ],
    },
  ],
  takeaway:
    'Ask AI for the layout, the formula and the test cases, then test the formula in the real application with deliberately awkward rows. Fix the range before you trust the number, and document the sheet while the logic is still fresh.',
}
