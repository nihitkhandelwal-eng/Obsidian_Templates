[[<% moment(tp.file.title,'YYYY-[W]ww').add(-7,'days').format("YYYY-[W]ww") %>|<< Last Week]] | [[<% moment(tp.file.title,'YYYY-[W]ww').format("MMMM-YYYY") %>]] | [[<% moment(tp.file.title,'YYYY-[W]ww').add(7,'days').format("YYYY-[W]ww") %>|Next Week >>]] 
---

## Highlight of this week
<%tp.file.cursor(0)%>

<% tp.file.rename(tp.file.title) -%>

<% await tp.file.move("/🌱 Journal/Review Cycles/Weekly Notes/" + tp.file.title) %>
