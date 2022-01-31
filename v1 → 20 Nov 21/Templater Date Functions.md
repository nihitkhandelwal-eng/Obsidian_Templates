- Today's Date without format: <% tp.date.now() %>
- Today's Date: <% tp.date.now("DD-MMM-YY") %>
- Date three days back: <% tp.date.now("DD-MMM-YY", -3) %>
- Date after five days: <% tp.date.now("DD-MMM-YY", 5) %>
- Date last week: <% tp.date.now("dddd DD-MMM-YY", -7) %>
	- This dddd is added to get the date of the week
- Date last week (Alternative): <% tp.date.now("DD-MMM-YY","P-1W") %>
- Date 3 weeks back: <% tp.date.now("DD-MMM-YY","P-3W") %>
- Date Last month:  <% tp.date.now("DD-MMM-YY","P-1M") %>
- Date Next Year: <% tp.date.now("DD-MMM-YY","P1Y") %>


- Date Yesterday: <% tp.date.yesterday("DD-MMM-YY") %>
	- add square brackets `[[ ]]`  before < &  after > too automatically create a link 
- Date Tomorrow: <% tp.date.tomorrow("DD-MMM-YY") %>

- Monday: <% tp.date.weekday("DD-MMM-YY", 0) %>
- Tuesday: <% tp.date.weekday("DD-MMM-YY", 1) %>
- Wednesday: <% tp.date.weekday("DD-MMM-YY", 2) %>
- Thursday: <% tp.date.weekday("DD-MMM-YY", 3) %>
- Friday: <% tp.date.weekday("DD-MMM-YY", 4) %>
- Saturday: <% tp.date.weekday("DD-MMM-YY", 5) %>
- Sunday: <% tp.date.weekday("DD-MMM-YY", 6) %>


