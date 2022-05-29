<%*
const title = tp.file.title; 
const uri = 'obsidian://open?vault=The_Brainforest&file=' + encodeURI(title);
const fullstring = '[' + title + ']' + '(' + uri + ')';
navigator.clipboard.writeText(fullstring); 
%>
