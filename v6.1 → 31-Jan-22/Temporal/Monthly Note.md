  
[[<% moment(tp.file.title,'MMMM-YYYY').add(-1,'months').format("MMMM-YYYY") %>|<< Last Month]] | [[<% moment(tp.file.title,'MMMM-YYYY').format("YYYY-[Q]Q") %>]] | [[<% moment(tp.file.title,'MMMM-YYYY').add(1,'months').format("MMMM-YYYY") %>|Next Month >>]]  
---  
## Highlight of this month

<% tp.file.rename(tp.file.title) -%>

<% await tp.file.move("/🌱 Journal/Review Cycles/Monthly Notes/" + tp.file.title) %>