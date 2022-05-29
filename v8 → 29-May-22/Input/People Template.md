---
aliases: [<% tp.file.title %>]
tags:
cssclass:
DOB:
Anniversary:
Date_of_importance:
Email:
Contact_Number:
Profession:
---


<%tp.file.cursor(0)%>

<% await tp.file.move("/🌿 Spaces/People/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("👤 " + `${title}`);
  } else {await tp.file.rename("👤 " + `${title}`);
  }
%>