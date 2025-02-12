function chooseClothes(temp) {
  let message;

  switch (true) {
    case temp <= 0:
      message = "Winter coat and hat";
      break;
    case temp < 10:
      message = "light jacket";
      break;
    case temp < 20:
      message = "shirt and jeans";
      break;
    case temp > 20:
      message = "t-shirt and jeans";
  }

  console.log(message);

  return message;
}

chooseClothes(10);
