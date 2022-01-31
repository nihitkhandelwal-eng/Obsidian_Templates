# <% tp.file.title %> at a glance

<<[[<% moment(tp.file.title,'YYYY').add(-1,'years').format("YYYY") %>|⏪ Last Year]] | [[<% moment(tp.file.title,'YYYY').add(1,'years').format("YYYY") %>|Next Year⏩]] >>
<% tp.file.rename(tp.file.title) -%>


---

# Reference

This Year:
```dataview
list
from [[#this.file.name]]
```


Outgoing Links:
```dataview
list
from outgoing([[#this.file.name]])
```