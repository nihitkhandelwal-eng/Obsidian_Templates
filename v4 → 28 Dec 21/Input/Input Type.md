<%*
	const title_prefix = await tp.system.suggester(
		["๐งป Simple Note",
		"๐ MOC",
		"๐ Book",
		"๐ง Music",
		"๐ค Person",
		"๐ฌ Movies/Show"], 
		["",
		"+ ",
		"โ ",
		"โซ ",
		"โป ",
		"โฆ "],
		false,
		"Input Type"
	)
	let title = tp.file.title
	await tp.file.rename(title_prefix + title)
_%>