[[<% moment(tp.file.title,'YYYY - [Q]Q').add(-3,'months').format("YYYY-[Q]Q") %>|<< Last Quarter]] | [[<% moment(tp.file.title,'YYYY-[Q]Q').format("YYYY") %>]] | [[<% moment(tp.file.title,'YYYY - [Q]Q').add(3,'months').format("YYYY-[Q]Q") %>|Next Quarter >>]] 
<% tp.file.rename(tp.file.title) -%>
# <%+ tp.file.title %> in great detail
--- 

## Quarterly Review
### Review Journal Highlights
- <%tp.file.cursor(0)%>

### Insights from Tracking Data
- 

<% await tp.file.move("/🌱 Journal/Review Cycles/Quarterly Notes/" + tp.file.title) %>