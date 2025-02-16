function calcVolume(width, length, height) {
  return width * length * height;
}

function calcHousePrice(volumeInMeters, gardenSizeInM2) {
  return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

function comparePrice(width, depth, height, gardenSize, houseCost, name) {
  houseVolume = calcVolume(depth, height, width);
  housePrice = calcHousePrice(gardenSize, houseVolume);
  if (housePrice < houseCost) {
    console.log(
      `${name} is paying too much!!! ${houseCost} instead of ${housePrice}`
    );
  } else {
    console.log(
      `${name} is paying too little!!! ${houseCost} instead of ${housePrice}`
    );
  }
}

// peters house

let width = 8;
let depth = 10;
let height = 10;
let gardenSize = 100;
let houseCost = 2500000;

comparePrice(width, depth, height, gardenSize, houseCost, "Peter");

//Julias house
width = 5;
depth = 11;
height = 8;
gardenSize = 70;
houseCost = 1000000;
comparePrice(width, depth, height, gardenSize, houseCost, "Julia");
