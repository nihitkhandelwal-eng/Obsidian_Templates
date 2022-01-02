# <% tp.file.title %> at a glance

<<[[<% moment(tp.file.title,'MMMM-YYYY').add(-1,'months').format("MMMM-YYYY") %>|⏪ Last Month]] | [[<% moment(tp.file.title,'MMMM-YYYY').format("YYYY - [Q]Q") %>]] | [[<% moment(tp.file.title,'MMMM-YYYY').add(1,'months').format("MMMM-YYYY") %>|Next Month⏩]] >>
<% tp.file.rename(tp.file.title) -%>

---

# Reference

This Month:
```dataview
list
from [[#this.file.name]]
```


Outgoing Links:
```dataview
list
from outgoing([[#this.file.name]])
```





