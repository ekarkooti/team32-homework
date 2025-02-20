function travelDuration(info) {
  const hours = Math.floor(info.destinationDistance / info.speed);
  const decimalHours = (info.destinationDistance / info.speed) % 1;
  const minutes = Math.floor(decimalHours * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = travelDuration(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
