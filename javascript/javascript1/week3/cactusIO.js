// Adding an activity

let activities = [];
const usageLimit = 60; //Usage limit is 60 minutes
var today = new Date();

function addActivity(date, activity, duration) {
  if (typeof date !== "string") {
    console.log("the date needs to be a string!");
    process.exit();
  }
  if (typeof activity !== "string") {
    console.log("the activity needs to be a string!");
    process.exit();
  }
  if (typeof duration !== "number") {
    console.log("the duration needs to be a number!");
    process.exit();
  }
  if (date === "today") {
    date = today.toISOString().slice(0, 10);
  }

  activityObject = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(activityObject);
}

addActivity("today", "youTube", 2);
addActivity("today", "Playing", 20);
addActivity("yesterday", "Playing", 40);

console.log(activities);

// Show my status

function showStatus() {
  const today = new Date();

  if (activities.length === 0) {
    return "Add some activities before calling showStatus";
  }
  let totalUsage = 0;
  let activitiesToday = [];
  for (let item of activities) {
    if (item.date === today.toISOString().slice(0, 10)) {
      totalUsage += item.duration;
      activitiesToday += item;
    }
  }
  if (totalUsage >= usageLimit) {
    return "You have reached your limit, no more smartphoning for you!";
  }

  return `You have added ${activitiesToday.length} activities today. They amount to ${totalUsage} min. of usage`;
}

console.log(showStatus());

// Extra feature
// ability to edit the duration for an activity
//  could be helpful

function editActivities(activity, duration) {
  for (let item of activities) {
    if (item.date === today.toISOString().slice(0, 10)) {
      if (item.activity === activity) {
        item.duration = duration;
      }
    }
  }

  return `The duration changed for activity ${activity}!`;
}

const message = editActivities("Playing", 30);

console.log(message);
console.log(activities);

// the optional features 1 and 2, implemented above

// the funciton for finding the activity with most spent time

function findActivity() {
  let countAllTimes = {};
  let activityMostSpent = {};
  for (let item of activities) {
    countAllTimes[item.activity] =
      (countAllTimes[item.activity] || 0) + item.duration;
  }
  let highestValue = 0;
  let highestKey;
  for (let key in countAllTimes) {
    if (countAllTimes[key] > highestValue) {
      highestValue = countAllTimes[key];
      highestKey = key;
    }
  }
  return {
    histogram: countAllTimes,
    highestKey: highestKey,
    highestValue: highestValue,
  };
}

const activityTimes = findActivity();
console.log(activityTimes["histogram"]);
console.log(
  `The activity "${activityTimes["highestKey"]}" has the most time "${activityTimes["highestValue"]}"`
);
