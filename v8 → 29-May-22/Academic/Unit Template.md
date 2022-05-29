---
aliases:
tags:
cssclass:
---

### Introduction
- <%tp.file.cursor(0)%>

### Modules & Outline
- <%tp.file.cursor(1)%>

<% await tp.file.move("/🌴 Academia/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
%>