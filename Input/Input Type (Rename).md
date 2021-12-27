<%*
	const title_prefix = await tp.system.suggester(
		["🧻 Simple Note",
		"🌎 MOC",
		"📚 Book",
		"🎧 Music",
		"👤 Person",
		"🎬 Movies/Show"], 
		["",
		"+ ",
		"✎ ",
		"♫ ",
		"☻ ",
		"✦ "],
		false,
		"Input Type"
	)
	let title = await tp.system.prompt("What do you wanna call it?")
	await tp.file.rename(title_prefix + title)
_%>