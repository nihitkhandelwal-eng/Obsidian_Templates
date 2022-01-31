It is a template language enabling uses of variables & functions in templates & thus notes
syntax: <% command %>

# Internal Module
- Date Module
	- Today's Date without format: <% tp.date.now() %>  
	- Today's Date: <% tp.date.now("DD-MMM-YY") %>  
	- Date three days back: <% tp.date.now("DD-MMM-YY", -3) %>  
	- Date after five days: <% tp.date.now("DD-MMM-YY", 5) %>  
	- Date last week: <% tp.date.now("dddd DD-MMM-YY", -7) %>  
	 - This dddd is added to get the date of the week  
	- Date last week (Alternative): <% tp.date.now("DD-MMM-YY","P-1W") %>  
	- Date 3 weeks back: <% tp.date.now("DD-MMM-YY","P-3W") %>  
	- Date Last month: <% tp.date.now("DD-MMM-YY","P-1M") %>  
	- Date Next Year: <% tp.date.now("DD-MMM-YY","P1Y") %>  


		- Date Yesterday: <% tp.date.yesterday("DD-MMM-YY") %>  
		 - add square brackets `[[ ]]` before < & after > too automatically create a link  
		- Date Tomorrow: <% tp.date.tomorrow("DD-MMM-YY") %>  

		- Monday: <% tp.date.weekday("DD-MMM-YY", 0) %>  
		- Tuesday: <% tp.date.weekday("DD-MMM-YY", 1) %>  
		- Wednesday: <% tp.date.weekday("DD-MMM-YY", 2) %>  
		- Thursday: <% tp.date.weekday("DD-MMM-YY", 3) %>  
		- Friday: <% tp.date.weekday("DD-MMM-YY", 4) %>  
		- Saturday: <% tp.date.weekday("DD-MMM-YY", 5) %>  
		- Sunday: <% tp.date.weekday("DD-MMM-YY", 6) %>
	- File Module
		- syntax: <% tp.file %>
		- Content
			- <% tp.file.content %>
			- Copies the content of the file as is 
		- Create_New
			- this creates a new file with a specified name or with a specified content
			- It has various arguments which add on to its functionality
				1. Template - you can either choose a template you intend to use or the content inside quotes
				2. file name - by default it is untitled, you can specify name of file heredffff
				3. open_new - it is a boolean, as to whether or not you want the new file to be opened in a new window
				4. folder - where do you want to put the new file in
			- eg: <% tp.file.create_new("content","File",true).basename %>
		- Creation Date 
			- <% tp.file.creation_date(DD-MMM-YY) %>
			- 19-Nov-21
		- Last modified date 
			- <% tp.file.last_modified_date() %>
			- <%+ tp.file.last_modified_date("DD-MMM-YY HH:mm") %>
			- SInce this is a dynamic component use + sign after % to make it dynamic
			- I can use this for title as well
		- Title
			- <%+ tp.file.title %>
		- Move File
			- <% tp.file.move("02 Notes/" + tp.file.title)