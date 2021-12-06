[[<% moment(tp.file.title,'YYYY-[W]ww').add(-7,'days').format("YYYY-[W]ww") %>|⏪ Last Week]] | [[<% moment(tp.file.title,'YYYY-[W]ww').format("MMMM-YYYY") %>]] | [[<% moment(tp.file.title,'YYYY-[W]ww').add(7,'days').format("YYYY-[W]ww") %>|Next Week ⏩]] 
<% tp.file.rename(tp.file.title) -%>
# <% moment(tp.file.title,'YYYY-[W]ww').format("MMM") %>, <%+ tp.file.title %> at a glance
---

## Highlight of this week
<%tp.file.cursor(0)%>

