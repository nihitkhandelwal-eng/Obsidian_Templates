<% await tp.file.move("/🌿 Notes/MOC's/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename("🌎 " + `${title}`);
  } else {await tp.file.rename("🌎 " + `${title}`);
  }
%>