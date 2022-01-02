<%*
const choice = await tp.system.suggester(["Simple Note", "Book", "Music", "MOC"], ["Simple Note", "Book", "Music", "MOC"])
switch(choice) {
    case "MOC" :
        await tp.file.include("[[-MOC's]]") await;
		break;
	case "Music" :
	    await tp.file.include("[[-Music]]") await;
		break;
    case "Book" :
        await tp.file.include("[[-Book]]") 
		break;
    default:
        new Notice("No templates match")
}
%>