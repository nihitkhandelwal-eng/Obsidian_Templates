---
aliases: [<% tp.file.title %>]
tags: 
cssclass:
author: 
date_started:
date_finished:
---

## Summary


## Key Take-aways & Highlights
### Books & Sources Cited
### Quotes
---

<% await tp.file.move("/🌿 Spaces/Books/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("📚 " + `${title}`);
  } else {await tp.file.rename("📚 " + `${title}`);
  }
%>