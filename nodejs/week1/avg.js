const args = process.argv.slice(2);
const numbers = args.map(Number);
const validNumbers = numbers.filter((n) => !isNaN(n));

if (validNumbers.length === 0) {
  console.error("Error: No valid numbers provided.");
  process.exit(1);
}

if (validNumbers.length < numbers.length) {
  console.error(
    "Warning: Some inputs were not valid numbers and were ignored."
  );
}

const avg = validNumbers.reduce((a, b) => a + b, 0) / validNumbers.length;
console.log(`Average is: ${avg}`);
