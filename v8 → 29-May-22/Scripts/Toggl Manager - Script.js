let togglApi;
let quickAddApi;
let projects;

const back = "<- Back";
const menu = {
    "๐ก Chores & Routine Activities": {
        togglProjectName: "Chores & Routine Activities",
        menuOptions: {
            "๐ฟ Bathing": "Bathing",
            "๐ Breakfast": "Breakfast",
            "๐ด Dinner": "Dinner",
            "๐ฅ Lunch": "Lunch",
            "๐ Porn ": "Porn",
            "๐งป Washroom": "Washroom",
        }
    },
    "๐ฑ Gaming": {
        togglProjectName: "Gaming",
        menuOptions: {
            "๐ Cities Skylines": "Cities Skylines",
            "๐ฆ Batman": "Arkham Knight",
            "๐ RDR2": "Red Dead Redemption 2",
        }
    },
    "๐ช Health & Planning": {
        togglProjectName: "Health & Wellbeing",
        menuOptions: {
            "๐ Meditation": "Meditation",
            "๐ Monthly Review": "Monthly Review",
            "๐ Planning": "Planning",
            "๐ Quarterly Review": "Quarterly Review",
            "๐ Weekly Review": "Weekly Review",
            "๐๏ธโโ๏ธ Workout": "Workout",
            "๐ Yearly Review": "Yearly Review",
        }
    },
    "๐ง  Knowledge": {
        togglProjectName: "Learning (Informative & Educational)",
        menuOptions: {
            "โก Flashcards": "Solving Flashcards",
            "๐ Journaling": "Journaling",
            "๐ Notes Review": "Reviewing Notes",
            "๐ Reading an Article": "Reading on the web",
            "๐จโ๐ฌ Reading Book": "Reading a Book",
            "๐ง  Sensemaking": "Sensemaking Session",
        }
    },
    "๐ฌ Entertainment": {
        togglProjectName: "Movies-Music-Shows-YouTube",
        menuOptions: {
            "๐ง Music": "Random Music",
            "๐ผ Fareed Ayaz & Abu ": "Listening to Fareed Ayaz & Abbu Mohd Qawwals",
            "๐ถ NFAK": "Listening to NFAK",
            "๐ฉโ๐ผ The Office": "The Office",
            "๐ YouTube": "Random YouTube",
        }
    },
    "๐ค Socializing": {
        togglProjectName: "Socializing",
        menuOptions: {
            "๐ป Anne": "Talking to Anne",
            "๐ Bhai": "Talking to Bhai",
            "๐ Council Meeting": "Sunday Council Meeting",
            "๐ Jain": "Talking to Jain",
        }
    },
    "๐ Studies": {
        togglProjectName: "Studies",
        menuOptions: {
            "๐ Anaesthesia": "Anaesthesia",
            "๐ฆด Anatomy": "Anatomy",
            "๐งฌ Biochemistry": "Biochemistry",
            "๐ฆ Dermatology": "Dermatology",
            "๐ ENT": "ENT",
            "โ  Forensic Medicine": "Forensic Medicine",
            "๐ฉบ Medicine": "Medicine",
            "๐ฆ  Microbiology": "Microbiology",
            "๐บ OBS-GYN": "OBS-GYN",
            "๐ Opthalmology": "Opthalmology",
            "๐ Orthopedics": "Orthopedics",
            "๐ถ Paediatrics": "Paediatrics",
            "๐ฌ Pathology": "Pathology",
            "๐ Pharmacology": "Pharmacology",
            "๐ฉธ Physiology": "Physiology",
            "๐งผ PSM": "PSM",
            "๐ง  Psychiatry": "Psychiatry",
            "๐ Radiology": "Radiology",
            "๐ฅผ Surgery": "Surgery",
        }
    },
    "๐ป Tech & Internet": {
        togglProjectName: "Tech-Internet",
        menuOptions: {
            "๐จ Discord": "Browsing Discord",
            "๐ฅ Guilded": "Hanging out at Co-x3",
            "๐ Obsidian CSS": "Tweaking Obsidian CSS",
            "โพ Obsidian Plugins ": "Playing with Obsidian Plugins",
            "๐ Facebook": "Browsing Facebook",
            "๐ Browsing Random Stuff": "Browsing Random Internet",
        }
    },
    "๐ฅผ Work": {
        togglProjectName: "Work",
        menuOptions: {
            "โป Random Co-x3": "Co-x3 Work",
            "๐จโ๐ Faction": "Working on students faction",
        }
    }
};

module.exports = async function togglManager(params) {
    togglApi = params.app.plugins.plugins["obsidian-toggl-integration"].toggl;
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