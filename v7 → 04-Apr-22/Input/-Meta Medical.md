<%*
const choice = await tp.system.suggester(["Note", "Module", "Unit", "Subject"], ["Note", "Module", "Unit", "Subject"]);
let output = ""
switch(choice) {
    case "Module":
        output = await tp.file.include("[[Module Template]]")
        break;
    case "Note":
		output = await tp.file.include("[[Academic Note Template]]")
		break;
    case "Subject":
	   output = await tp.file.include("[[Subject Template]]")
	   break;
    case "Unit":
        output = await tp.file.include("[[Unit Template]]")
        break;
    default:
        new Notice("No Matching Template")
}
   
tR += output
%>