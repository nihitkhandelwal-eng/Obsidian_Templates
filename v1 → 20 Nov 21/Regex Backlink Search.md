<%*
const search = app.workspace.getLeavesOfType("search")[0];
const editor = app.workspace.activeLeaf.view.editor;
const getCur = editor.getCursor();
const curLineNum = getCur.line;
const curPos = getCur.ch;
let thisFile = app.workspace.getActiveFile();
let mdCache = this.app.metadataCache.getFileCache(thisFile);
let mdLinks = mdCache.links;
if (mdLinks) {
    let otherLink;
    let foundLink = mdLinks.find(eachLink => {
        const startPos = eachLink.position.start;
        const endPos = eachLink.position.end;
        if(startPos.line === curLineNum) {
            otherLink = eachLink;
            if(startPos.col <= curPos && endPos.col >= curPos) {
                return true;
            } else {return false;}
        } else {return false;}
    });
    if(!foundLink){foundLink = otherLink}
    if(foundLink) {
        //SortOrder Options: alphabeticalReverse, alphabetical, byModifiedTime, byModifiedTimeReverse, byCreatedTime, byCreatedTimeReverse
        search.view.setSortOrder("byCreatedTime");
        search.view.setCollapseAll(false);
        search.view.setExtraContext(true);
        let myString = foundLink.link;
        myString = myString.replace(/[-[\]{}()+?.,\\^$|#]/g, '\\$&');
        search.view.setQuery(`/\\[\\[${myString}(\\]\\]|\\|)/`);
        app.workspace.revealLeaf(search);
    }
}
%>