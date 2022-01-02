# <% tp.file.title %> at a glance

<<[[<% moment(tp.file.title,'YYYY - [Q]Q').add(-3,'months').format("YYYY - [Q]Q") %>|⏪ Last Quarter]] | [[<% moment(tp.file.title,'YYYY - [Q]Q').format("YYYY") %>]] | [[<% moment(tp.file.title,'YYYY - [Q]Q').add(3,'months').format("YYYY - [Q]Q") %>|Next Quarter⏩]] >>
<% tp.file.rename(tp.file.title) -%>

---

# Reference

This Quarter:
```dataview
list
from [[#this.file.name]]
```


Outgoing Links:
```dataview
list
from outgoing([[#this.file.name]])
```