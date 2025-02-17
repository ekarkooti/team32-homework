const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(ndaysFromToday) {
  if (ndaysFromToday < 0) {
    console.log("Event can't be in the past.");
    return;
  }

  const today = new Date();
  const currentDay = today.getDay();
  const eventDayIndex = (currentDay + ndaysFromToday) % 7;
  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(2));
