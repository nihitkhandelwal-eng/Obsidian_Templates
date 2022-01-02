<%*
let title = tp.file.title
{
title = await tp.system.prompt("Title");
await tp.file.rename(title);
  }
%>