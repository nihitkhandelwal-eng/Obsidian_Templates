---
aliases:
tags: ```js quickadd
const input = await this.quickAddApi.inputPrompt("Tags")
return input.replaceAll('#', '\r\n - ').toString();
```
---
---
<%tp.file.cursor(0)%>

See also:

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
%>
