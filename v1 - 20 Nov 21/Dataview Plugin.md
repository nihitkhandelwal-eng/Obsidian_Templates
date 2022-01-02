--- ^kl0hhl3

tags: productivity
---

To display notes in preview mode & not render the info from plugin use this format excited
````markdown
```whatever I want to show as code
from my notes
sort this
```
````

# Metadata
It is data/information about your data, that either is already in your data or manually added ^0z4af4

## YAML
It is a language used to add metadata to markdown notes
Links in YAML are not treated by obsidian as actual link
Obsidian as of now can recognize 3 metadata, `tags`, `aliases` & one more
But I can use absolutely anything, even emojis, so I can have a metadata field called intensity & the reply to that can be 🟥, 🟩
	Now this can be utilized by dataview to sort things or even create a table with these columns

Some interesting examples & inspiration for me
	title of the note `title: {title}`
	date updated
	tags
	aliases
	authors


## Types of Metadata
We can include number, string, date
```markdown
number: 1
string: "this is a string"
date: 
  - 17-Nov-21
```

![[ApplicationFrameHost_5aCmYwSjIK.png]]

-   `file.name`: The file title (a string).
-   `file.folder`: The path of the folder this file belongs to.
-   `file.path`: The full file path (a string).
-   `file.link`: A link to the file (a link).
-   `file.size`: The size (in bytes) of the file (a number).
-   `file.ctime`: The date that the file was created (a date + time).
-   `file.cday`: The date that the file was created (just a date).
-   `file.mtime`: The date that the file was last modified (a date + time).
-   `file.mday`: The date that the file was last modified (just a date).
-   `file.tags`: An array of all unique tags in the note. Subtags are broken down by each level, so `#Tag/1/A` will be stored in the array as `[#Tag, #Tag/1, #Tag/1/A]`.
-   `file.etags`: An array of all explicit tags in the note; unlike `file.tags`, does not include subtags.
-   `file.inlinks`: An array of all incoming links to this file.
-   `file.outlinks`: An array of all outgoing links from this file.
-   `file.aliases`: An array of all aliases for the note.
-   `file.tasks`: An array of all tasks (I.e., `- [ ] blah blah blah`) in this file.

If the file has a date inside its title (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field, it also has the following attributes:

-   `file.day`: An explicit date associated with the file.

# Dataview Typed
## List
````markdown
```dataview
list
```
````
This shows me all my notes in list

Now here, we can use queries
	from = basically the filter for where you want your data from
	where = further filter after from. This lets you use the various comparison 		   operators on the metadata fields in your notes, like =, >,  >=,  <,  <=, !=
			- *where file.size > 1000*
			- *where file.name = or where file.name != "november"*
			- *where file.mtime >= date(today) - dur(1 day)*
			- you can also create a list of notes which do not have a certain metadata field or have the field but it is empty, it is one & the same thing
				- *where !author*
	
	
````markdown
```dataview
list
from #progress
```
````

````markdown
```dataview
list
from "Journal/Daily Notes"
```
````

```dataview
list
where tags
```


to show all notes with links coming into a note
````markdown
```dataview
list
from [[Dataview Plugin]]
```
````

to show all notes with links going out from a note
````markdown
```dataview
list
from outgoing([[Test note for Dataview plugin]])
```
````

	`Links created by dataview are not actual obsidian links, so they won't show up on the graph view & won't be picked up by other dataview queries`

combining sources; 3 basic logical operators can be used here
```md
list from "University" or "Work"
list from #A and #B
list from -#Personal

minus sign works as negation factor
```

### Lists of Lists
A list can also display indented sublists of metadata
	for example if my notes have a metadata thing of authors, i can do this
	
````markdown
```dataview
list authors
```
````

## Task
`Task` searches for all checkboxes `- [ ] ` in your vault
it returns a list of all tasks, grouped by their parent note

````markdown
```dataview
task
```
````



## Table
format  to use `Table {field 1}, {field 2}, ...`
I can sort this in whichever way I want to, even with the properties which I have not used to render this table, look in the example below

````markdown
```dataview
table author
sort file.name asc, intensity desc 
```
````


### Use cases
````markdown
```dataview
list 
where length(file.tags) = 0
```
````

````markdown
```dataview
list
file.mday
sort file.mday desc
```
````



# Real use case
- Use the outgoing links module in a list to create embedded backlinks or even links going out from this note
![[Recording 20211125130758.webm]]
