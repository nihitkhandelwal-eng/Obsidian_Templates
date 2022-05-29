---
aliases: [<% tp.file.title %>]
tags: 
cssclass:
Lyricist: <%tp.file.cursor(0)%>
Singer:
Composer:
---


<% await tp.file.move("/🌿 Spaces/Music/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("♫ " + `${title}`);
  } else {await tp.file.rename("♫ " + `${title}`);
  }
%>