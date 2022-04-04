---
aliases:
tags: module
cards-deck: Default
cssclass:
---
---

## Guiding Questions
- <%tp.file.cursor(0)%>
## Key Terms



<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
%>