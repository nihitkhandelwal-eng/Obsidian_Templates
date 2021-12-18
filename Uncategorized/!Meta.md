<%* if (tp.file.title.charAt(0) == "✎") { %>
<% tp.file.include("[[Book Template]]") %>
<%* } else if (tp.file.title.charAt(0) == "☻") { %>
<% tp.file.include("[[People Template]]") %>
<%* } else if (tp.file.title.charAt(0) == "♫") { %>
<% tp.file.include("[[Music Template]]") %>
<%* } else if (tp.file.title.charAt(0) == "✦") { %>
<% tp.file.include("[[Movies Template]]") %>
<%* } else if (tp.file.title.charAt(0) == "+") { %>
<% tp.file.include("[[MOC's Template]]") %>
<%* } else { %>
<% tp.file.include("[[Default Template]]") %>
<%* } _%>
