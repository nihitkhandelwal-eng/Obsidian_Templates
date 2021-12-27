---
aliases: 
tags: 
---
artists: 

<% await tp.file.move("/🌿 Notes/Music/" + tp.file.title) %>
<%tp.file.cursor(0)%>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("♫ " + `${title}`);
  } else {await tp.file.rename("♫ " + `${title}`);
  }
%>