const firstWords=["Easy","Awesome","Corporate","Smart","Quick","Innovative","Global",
    "Creative","Reliable","Future"];

const secondWords=["Solutions","Systems","Tech","Innovations","Analytics","Group",
    "Network","Ventures","Labs","AI"];

let startupName;

startupName = firstWords[Math.floor(Math.random() * 10)]+" "+secondWords[Math.floor(Math.random() * 10)];

console.log(`The startup: ${startupName} contains ${startupName.length} characters` )

