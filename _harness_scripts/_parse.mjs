import { readFileSync } from 'node:fs'

const file = process.argv[2]
const txt = readFileSync(file, 'utf8')
const j = JSON.parse(txt.slice(txt.lastIndexOf('\n{')))
console.log('failures', j.failures)
console.log('not-ok pages:', j.report.filter((r) => r.ok === false).length)
console.log('scene duplicates:', j.report.filter((r) => r.distinctScene && r.distinctScene !== 'ok').length)
for (const r of j.report) {
  if (r.id) {
    console.log(
      r.id,
      'ok=' + r.ok,
      'svg=' + r.svgCount,
      'ranges=' + r.ranges,
      'words=' + r.words,
      'missing=' + JSON.stringify(r.missing),
      'artifacts=' + JSON.stringify(r.artifacts),
      r.consoleErrors?.length ? 'console=' + JSON.stringify(r.consoleErrors).slice(0, 200) : '',
    )
  }
}
console.log('--- distinct scene openers')
for (const [id, t] of Object.entries(j.scenes)) console.log(id, '|', t)
