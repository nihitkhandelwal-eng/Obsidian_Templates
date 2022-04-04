---
aliases: df
tags: 
cssclass:
---
---
## Summary

###### Metadata 
author:: 
why_this_book::
recommended_by:: 
date_started::
date_finished::

## Key Take-aways & Highlights
### Books & Sources Cited
### Quotes
---

<% await tp.file.move("/🌿 Notes/Books/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("📚 " + `${title}`);
  } else {await tp.file.rename("📚 " + `${title}`);
  }
%>