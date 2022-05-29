<%* 
selection = tp.file.selection();
cursor = tp.file.cursor(0);
const highlightr = await tp.system.suggester(["📘 Blue","🌿 Green","🌸 Pink","🟡 Yellow"], ["blue","green","pink","yellow"]);

if (highlightr === undefined || highlightr === null) {
	return;
} else {
	return "<mark class='" + highlightr + "' >" + selection + cursor + "</mark>";
}
%>



