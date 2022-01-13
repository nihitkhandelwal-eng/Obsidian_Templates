<%*
const choice = await tp.system.suggester(["Medical Note", "Book", "Empty Note", "MOC", "Movie / Show", "Music", "People", "Simple Note"], ["Medical Note", "Book", "Empty Note", "MOC", "Movie / Show", "Music", "People", "Simple Note"]);
let output = ""
switch(choice) {
    case "Medical Note":
        output = await tp.file.include("[[-Medical Meta]]")
        break;
    case "Book":
		output = await tp.file.include("[[Book Template]]")
		break;
    case "Empty Note":
	   output = await tp.file.include("[[Empty Note]]")
	   break;
    case "MOC":
        output = await tp.file.include("[[MOC's Template]]")
        break;
    case "Movie / Show":
	   output = await tp.file.include("[[Movies & Shows Template]]")
	   break;
    case "Music":
        output = await tp.file.include("[[Music Template]]")
        break;
    case "People":
	   output = await tp.file.include("[[People Template]]")
	   break;
    case "Simple Note":
		output = await tp.file.include("[[Default Template]]")
		break;
    default:
        new Notice("No Matching Template")
}
   
tR += output
%>