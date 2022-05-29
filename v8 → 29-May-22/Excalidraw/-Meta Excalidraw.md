<%*
const choice = await tp.system.suggester(["Blank Slate", "Embed a Drawing Here", "Placeholder 2", "Placeholder 3", "Placeholder 4"]), (["Blank Slate", "Embed a Drawing Here", "Placeholder 2", "Placeholder 3", "Placeholder 4"]);
let output = ""
switch(choice) {
	case "Blank Slate":
		output = await tp.file.include("[[☘️ Templates/Excalidraw/☘️ Templates/Excalidraw/Blank Slate]]")
		break;
	case "Embed a Drawing Here"
		output = await tp.file.include("[[Insert Drawing Into the Current Note]]")
	default:
		new Notice("No Matching Template")
}

tR += output
%>