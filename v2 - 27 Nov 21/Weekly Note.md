[[<% moment(tp.file.title,'YYYY-[W]ww').add(-7,'days').format("YYYY-[W]ww") %>|⏪ Last Week]] | [[<% moment(tp.file.title,'YYYY-[W]ww').format("MMMM-YYYY") %>]] | [[<% moment(tp.file.title,'YYYY-[W]ww').add(7,'days').format("YYYY-[W]ww") %>|Next Week ⏩]] 
<% tp.file.rename(tp.file.title) -%>
### <% moment(tp.file.title,'YYYY-[W]ww').format("MMM") %>, <%+ tp.file.title %> at a glance

This Week:
```dataview
list
from [[#this.file.name]]
```

### Highlight of this week
- 
### What went Well
-
### What could be better
- 
### What I started doing
- 
### What will I Stop Doing
- 

---

### Reference 

Outgoing Links:
```dataview
list
from outgoing([[#this.file.name]])
```

