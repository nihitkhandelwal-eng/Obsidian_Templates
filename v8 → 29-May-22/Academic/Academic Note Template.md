---
aliases:
tags:
cssclass:
---

<%tp.file.cursor(0)%>



<% await tp.file.move("/🌴 Academia/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
%>