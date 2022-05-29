```dataviewjs
let morning = [
    "Let's do great work today!",
    "It's a new day!"
];

let afternoon = [
    "Let's finish the day well!",
    "Let's keep up our focus!",
    "Need another cup of coffee? ☕"
];

let evening = [
    "End on a high!",
    "Evening Arthur!"
];

const currentHour = moment().format('HH'); 
let greeting; 

if (currentHour >= 17 || currentHour < 5) { 
    greeting = "🌙 Good Evening! "
        + evening[Math.floor(Math.random()*evening.length)];
} else if (currentHour >= 5 && currentHour < 12) { 
    greeting = "🌞 Good Morning! " +
        + morning[Math.floor(Math.random()*morning.length)];
} else { 
    greeting = "🌞 Good Afternoon! "
        + afternoon[Math.floor(Math.random()*afternoon.length)];
} 
dv.paragraph(greeting);
```