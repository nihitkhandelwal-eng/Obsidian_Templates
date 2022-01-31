[[<% moment(tp.file.title,'YYYY').add(-1,'years').format("YYYY") %>|<< Last Year]] | [[<% moment(tp.file.title,'YYYY').add(1,'years').format("YYYY") %>|Next Year >>]]
---
## Annual Review
### Review Journal Highlights
- <%tp.file.cursor(0)%>

### Insights from Tracking Data
- 

<% tp.file.rename(tp.file.title) -%>

<% await tp.file.move("/🌱 Journal/Review Cycles/Yearly Notes/" + tp.file.title) %>