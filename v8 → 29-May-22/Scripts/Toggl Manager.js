let togglApi;
let quickAddApi;
let projects;

const back = "<- Back";
const menu = {
    "🏡 Chores & Routine Activities": {
        togglProjectName: "Chores & Routine Activities",
        menuOptions: {
            "🚿 Bathing": "Bathing",
            "🍓 Breakfast": "Breakfast",
            "🍴 Dinner": "Dinner",
            "🥘 Lunch": "Lunch",
            "👙 Porn ": "Porn",
            "🧻 Washroom": "Washroom",
        }
    },
    "🎱 Gaming": {
        togglProjectName: "Gaming",
        menuOptions: {
            "🏗 Cities Skylines": "Cities Skylines",
            "🦇 Batman": "Arkham Knight",
            "🐎 RDR2": "Red Dead Redemption 2",
        }
    },
    "💪 Health & Planning": {
        togglProjectName: "Health & Wellbeing",
        menuOptions: {
            "🖖 Meditation": "Meditation",
            "📆 Monthly Review": "Monthly Review",
            "📅 Planning": "Planning",
            "📆 Quarterly Review": "Quarterly Review",
            "🌀 Weekly Review": "Weekly Review",
            "🏋️‍♂️ Workout": "Workout",
            "🌀 Yearly Review": "Yearly Review",
        }
    },
    "🧠 Knowledge": {
        togglProjectName: "Learning (Informative & Educational)",
        menuOptions: {
            "⚡ Flashcards": "Solving Flashcards",
            "📝 Journaling": "Journaling",
            "🔍 Notes Review": "Reviewing Notes",
            "📖 Reading an Article": "Reading on the web",
            "👨‍🔬 Reading Book": "Reading a Book",
            "🧠 Sensemaking": "Sensemaking Session",
        }
    },
    "🎬 Entertainment": {
        togglProjectName: "Movies-Music-Shows-YouTube",
        menuOptions: {
            "🎧 Music": "Random Music",
            "🎼 Fareed Ayaz & Abu ": "Listening to Fareed Ayaz & Abbu Mohd Qawwals",
            "🎶 NFAK": "Listening to NFAK",
            "👩‍💼 The Office": "The Office",
            "🌀 YouTube": "Random YouTube",
        }
    },
    "🤝 Socializing": {
        togglProjectName: "Socializing",
        menuOptions: {
            "💻 Anne": "Talking to Anne",
            "📞 Bhai": "Talking to Bhai",
            "🖐 Council Meeting": "Sunday Council Meeting",
            "📞 Jain": "Talking to Jain",
        }
    },
    "📚 Studies": {
        togglProjectName: "Studies",
        menuOptions: {
            "💉 Anaesthesia": "Anaesthesia",
            "🦴 Anatomy": "Anatomy",
            "🧬 Biochemistry": "Biochemistry",
            "🍦 Dermatology": "Dermatology",
            "👂 ENT": "ENT",
            "☠ Forensic Medicine": "Forensic Medicine",
            "🩺 Medicine": "Medicine",
            "🦠 Microbiology": "Microbiology",
            "🚺 OBS-GYN": "OBS-GYN",
            "👀 Opthalmology": "Opthalmology",
            "🍖 Orthopedics": "Orthopedics",
            "👶 Paediatrics": "Paediatrics",
            "🔬 Pathology": "Pathology",
            "💊 Pharmacology": "Pharmacology",
            "🩸 Physiology": "Physiology",
            "🧼 PSM": "PSM",
            "🧠 Psychiatry": "Psychiatry",
            "💀 Radiology": "Radiology",
            "🥼 Surgery": "Surgery",
        }
    },
    "💻 Tech & Internet": {
        togglProjectName: "Tech-Internet",
        menuOptions: {
            "🗨 Discord": "Browsing Discord",
            "🖥 Guilded": "Hanging out at Co-x3",
            "📃 Obsidian CSS": "Tweaking Obsidian CSS",
            "♾ Obsidian Plugins ": "Playing with Obsidian Plugins",
            "🙈 Facebook": "Browsing Facebook",
            "🌐 Browsing Random Stuff": "Browsing Random Internet",
        }
    },
    "🥼 Work": {
        togglProjectName: "Work",
        menuOptions: {
            "♻ Random Co-x3": "Co-x3 Work",
            "👨‍🎓 Faction": "Working on students faction",
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