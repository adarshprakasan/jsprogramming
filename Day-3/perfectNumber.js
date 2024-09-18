//? Check the given number is perfect number or not
// a perfect number is a number which is the sum of all divisor of the number

function perfectNumber(n) {
  let sum = 0;
  for (i = 0; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }
  if (sum === n) {
    console.log("It is a Perfect number");
  } else {
    console.log("Its not a perfect number");
  }
}
perfectNumber(28);
