<%* if (tp.file.title.charAt(0) == "📚") { %>
<% tp.file.include("[[-Book]]") %>
<%* } else if (tp.file.title.charAt(0) == "👤") { %>
<% tp.file.include("[[-People]]") %>
<%* } else if (tp.file.title.charAt(0) == "♫") { %>
<% tp.file.include("[[-Music]]") %>
<%* } else if (tp.file.title.charAt(0) == "🎬") { %>
<% tp.file.include("[[-Movies & Shows]]") %>
<%* } else if (tp.file.title.charAt(0) == "🌎") { %>
<% tp.file.include("[[-MOC's]]") %>
<%* } else { %>
<% tp.file.include("[[--Default Template]]") %>
<%* } _%> 
