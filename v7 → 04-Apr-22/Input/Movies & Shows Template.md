---
tags:
aliases:
cssclass:
---
---
<%tp.file.cursor(0)%>

<% await tp.file.move("/🌿 Notes/Movies/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("🎬 " + `${title}`);
  } else {await tp.file.rename("🎬 " + `${title}`);
  }
%>

