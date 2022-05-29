```dataview
TABLE WITHOUT ID (tag + "(" + length(rows.file.link) + ")") 
AS Tags, link(sort(rows.file.name)) 
AS Files 
FROM "" 
WHERE file.tags 
FLATTEN file.tags 
AS tag 
GROUP BY tag 
SORT file.name Asc 
```
