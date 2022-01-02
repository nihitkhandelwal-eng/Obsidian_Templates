  
<<[[<% moment(tp.file.title,'MMMM-YYYY').add(-1,'months').format("MMMM-YYYY") %>|⏪ Last Month]] | [[<% moment(tp.file.title,'MMMM-YYYY').format("YYYY - [Q]Q") %>]] | [[<% moment(tp.file.title,'MMMM-YYYY').add(1,'months').format("MMMM-YYYY") %>|Next Month⏩]] >>  
<% tp.file.rename(tp.file.title) -%>  
### <%+ tp.file.title %> at a glance  
This Month:  
```dataview  
list  
from [[#this.file.name]]  
```  


### Highlight of this month
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