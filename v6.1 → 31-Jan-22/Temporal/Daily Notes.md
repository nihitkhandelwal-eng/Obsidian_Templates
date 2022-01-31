---
aliases:
tags:
---
[[<% moment(tp.file.title,'DD-MMM-YY').add(-1,'days').format("DD-MMM-YY") %>|<< Yesterday]] | [[<% moment(tp.file.title,'DD-MMM-YY').format("YYYY") %>-W<% moment(tp.file.title, "DD-MMM-YY").week() %>|Week: <% moment(tp.file.title, "DD-MMM-YY").week() %>]] | [[<% moment(tp.file.title,'DD-MMM-YY').add(1,'days').format("DD-MMM-YY") %>|Tomorrow >>]] 

---

## Morning Pages
<%tp.file.cursor(0)%>
## Consolidate
### Connect
### Consume
### Cerebrate
--- 
  
<% await tp.file.move("/🌱 Journal/Daily Notes/" + tp.file.title) %>

