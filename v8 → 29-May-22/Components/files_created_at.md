<%*
/* config */
const IGNORE_DIR_REGEXS = [
  /^40 Daily Notes/,
]

/* utils */
const linkTailRegex = /\.md\|[^\]]+/
const removeLinkTail = s => new String(s).replace(linkTailRegex, '')

/* main logic */
const dateFormat = 'yyyy-MM-dd'
const dv = this.DataviewAPI
let startDate = await tp.system.prompt('Start date', dv.date('today').toFormat(dateFormat))
if (!startDate) {
  return
}
startDate = dv.date(startDate)
let endDate = await tp.system.prompt('End date (optional)')
console.log('endDate', endDate)
if (endDate) {
  endDate = dv.date(endDate)
} else {
  endDate = startDate.plus(dv.duration('1 day'))
}
console.log('dv', dv, startDate, endDate)

tR += `Files created at ${startDate.toFormat(dateFormat)}~${endDate.toFormat(dateFormat)}:\n`
const out = dv.pages()
  .where(p => {
    if (IGNORE_DIR_REGEXS.filter(v => v.test(p.file.path)).length > 0) {
      return false
    }
    return p.file.ctime >= startDate && p.file.ctime < endDate
  })
  .map(p => {
    return `- ${removeLinkTail(p.file.link)}`
  })
  .join("\n")
tR += out
%>