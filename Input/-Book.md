---
aliases:
tags: 
author:
---

Why this book : <%tp.file.cursor(0)%>
Date Started & Finished :
Recommended By :
Summary
Key Take-aways & Highlights
Books & Sources Cited
Quotes

<% await tp.file.move("/🌿 Notes/Books/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("📚 " + `${title}`);
  } else {await tp.file.rename("📚 " + `${title}`);
  }
%>