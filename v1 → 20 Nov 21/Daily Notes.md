---
date: <% moment(tp.file.title,'DD-MMM-YY').format("DD-MMM-YYYY") %>
---
# <% moment(tp.file.title,'DD-MMM-YY').format("dddd") %>, <% tp.file.title %>

<< [[<% moment(tp.file.title,'DD-MMM-YY').add(-1,'days').format("DD-MMM-YY") %>|⏪ Yesterday]] | [[<% moment(tp.file.title,'DD-MMM-YY').format("YYYY") %>-W<% moment(tp.file.title, "DD-MMM-YY").week() %>|Week: <% moment(tp.file.title, "DD-MMM-YY").week() %>]] | [[<% moment(tp.file.title,'DD-MMM-YY').add(1,'days').format("DD-MMM-YY") %>|Tomorrow ⏩]] >>
<% tp.file.rename(tp.file.title) -%>


# On this day
> [[<% moment(tp.file.title,'DD-MMM-YY').subtract(365,'days').format("DD-MMM-YY") %>]]




---

# Reference

This Day:
```dataview
list
from [[#this.file.name]]
```

Outgoing Links:
```dataview
list
from outgoing([[#this.file.name]])
```