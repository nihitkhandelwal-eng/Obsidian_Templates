let togglApi;
let quickAddApi;
let projects;

const back = "<- Back";
const menu = {
    "๐ง  Learning & Skill Development": {
        togglProjectName: "Learning & Skill Development",
        menuOptions: {
            "โ Note Making": "Note Making",
            "๐ Spaced Repetition": "Spaced Repetition",
            "๐ Read Later Processing": "Read Later Processing",
            "๐จโ๐ป Computer Science & Software Engineering": "Computer Science & Software Engineering",
        }
    },
    "๐คด Personal": {
        togglProjectName: "Personal",
        menuOptions: {
            "๐๏ธโโ๏ธ Exercise": "Exercise",
            "๐งน Chores": "Chores",
            "๐จโ๐ฌ Systems Work": "Systems Work",
            "๐ Weekly Review": "Weekly Review",
            "๐ Monthly Review": "Monthly Review",
            "โ Planning": "Planning",
        }
    },
    "๐จโ๐ School": {
        togglProjectName: "School",
        menuOptions: {
            "๐ง  Machine Intelligence (MI)": "Machine Intelligence (MI)",
            "๐พ Database Systems (DBS)": "Database Systems (DBS)",
            "๐โโ Agile Software Engineering (ASE)": "Agile Software Engineering (ASE)",
            "๐ป P5": "P5",
        }
    }
};

module.exports = async function togglManager(params) {
    togglApi = params.app.plugins.plugins["obsidian-toggl-integration"].toggl._apiManager;
    quickAddApi = params.quickAddApi;
    projects = await togglApi.getProjects();

    openMainMenu(menu);
}

const dateInSeconds = (date) => {
    return Math.floor(date / 1000);
}

async function startTimer(entryName, projectID) {
    await togglApi.startTimer({description: entryName, pid: projectID});
}

async function openMainMenu(menu) {
    const {suggester} = quickAddApi;
    const options = Object.keys(menu);

    const choice = await suggester(options, options);
    if (!choice) return;

    const project = menu[choice];
    await openSubMenu(project);
}

async function openSubMenu(project) {
    const {suggester} = quickAddApi;
    const options = [...Object.keys(project.menuOptions), back];

    const choice = await suggester(options, options);
    if (!choice) return;

    if (choice === back) {
        return await openMainMenu(menu);
    }

    const entryName = project.menuOptions[choice];
    const projectID = projects.find(p => p.name === project.togglProjectName).id;

    startTimer(entryName, projectID);
}