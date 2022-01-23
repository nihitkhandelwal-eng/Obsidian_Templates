<%*
const choice = await tp.system.suggester(["Note", "Module", "Unit", "Subject"], ["Note", "Module", "Unit", "Subject"]);
let output = ""
switch(choice) {
    case "Module":
        output = await tp.file.include("[[3. Academic Module Template]]")
        break;
    case "Note":
		output = await tp.file.include("[[4. Academic Note Template]]")
		break;
    case "Subject":
	   output = await tp.file.include("[[1. Subject Template]]")
	   break;
    case "Unit":
        output = await tp.file.include("[[2. Unit Template]]")
        break;
    default:
        new Notice("No Matching Template")
}
   
tR += output
%>