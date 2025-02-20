const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Prison Break",
    days: 2,
    hours: 18,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  let totalTime = 0;
  const lifespanInHours = 80 * 365 * 24;
  for (let item of seriesDurations) {
    const seriesTimeHours = item.days * 24 + item.hours + item.minutes / 60;
    let percentage = seriesTimeHours / lifespanInHours;
    totalTime += seriesTimeHours;
    console.log(`${item.title} took ${percentage.toFixed(5)}% of my life`);
  }
  percentage = totalTime / lifespanInHours;

  console.log(`\nIn total that is ${percentage.toFixed(5)}% of my life`);
}

logOutSeriesText();
