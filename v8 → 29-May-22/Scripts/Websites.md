<%*
/*
Templater script to add commands to the command palette to quickly launch web resources
Brought to you by TfT Hacker (https://twitter.com/TfTHacker)

Last update: 2022-04-17

Instructions:
    To add a site: 
        Add a new line with the title of the site and the url to the web page. 
        There are some blank entries for you as a starting point that look like:
            { title: "", url: ""},
    To delete a site: 
        delete the line of a site you don't want in the list
*/

const helpResources = [
    { title: "Dataview", url: "https://blacksmithgu.github.io/obsidian-dataview/" },
    { title: "Dataview - Data Querying", url: "https://blacksmithgu.github.io/obsidian-dataview/query/queries/" },
    { title: "Dataview - JavaScript API", url: "https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/" },
    { title: "Templater", url: "https://silentvoid13.github.io/Templater/internal-functions/overview.html" },
    { title: "Kanban", url: "https://matthewmeye.rs/obsidian-kanban/"},
    { title: "Breadcrumbs", url: "https://skepticmystic.github.io/breadcrumbs/" },
    { title: "Obsidian42 - BRAT", url: "https://github.com/TfTHacker/obsidian42-brat" },
    { title: "Buttons", url: "https://github.com/shabegom/buttons" },
    { title: "Obsidian Plugin Developer Docs by @marcusolsson", url: "https://marcus.se.net/obsidian-plugin-docs/" },
    { title: "Obsidian Community Hub", url: "https://publish.obsidian.md/hub/00+-+Start+here" },
    { title: "Obsidian Sample Plugin", url: "https://github.com/obsidianmd/obsidian-sample-plugin" },
    { title: "Obsidian API TypeScript Definitions/Docs", url: "https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts" },
    { title: "Shawn Murfy Scripts", url: "https://gist.github.com/GitMurf" },
    { title: "", url: ""},
    { title: "", url: ""},
    { title: "", url: ""},
    { title: "", url: ""},
    { title: "", url: ""},
    { title: "", url: ""},
]

helpResources.forEach(resource => {
    if (resource.title !== "") {
        app.commands.addCommand({
            id: "launcher-help-resource-" + resource.title.replace(/\s/g, "-"),
            name: "Launch website: " + resource.title,
            callback: () => { window.open(resource.url) }
        });
    }
});

%>