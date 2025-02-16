const firstWords=["Easy","Awesome","Corporate","Smart","Quick","Innovative","Global",
    "Creative","Reliable","Future"];

const secondWords=["Solutions","Systems","Tech","Innovations","Analytics","Group",
    "Network","Ventures","Labs","AI"];

let startupName;

const random1 = Math.floor(Math.random() * 10)

const random2 = Math.floor(Math.random() * 10)

startupName = firstWords[random1]+" "+secondWords[random2];

console.log(`The startup: ${startupName} contains ${startupName.length} characters` )

