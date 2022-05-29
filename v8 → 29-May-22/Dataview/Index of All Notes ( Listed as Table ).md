```dataview
TABLE link(sort(rows.file.name)) AS Files 
FROM "" WHERE file.folder 
FLATTEN file.folder AS Folder 
GROUP BY Folder
SORT Folder Asc 
```
