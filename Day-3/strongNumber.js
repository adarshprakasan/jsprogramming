//? Check the given number is strong number or not
// sum of the factorials of the digits of the number

function strongNumber(n) {
  let temp = n;
  let sum = 0;
  do {
    let rem = n % 10;
    sum = sum + factorial(rem);
    n = Math.floor(n / 10);
  } while (n != 0);

  if (sum === temp) {
    console.log("Its a strong number");
  } else {
    console.log("Its not a strong number");
  }
}
strongNumber(135);

function factorial(n) {
  let fact = 1;
  if (n === 0) {
    return 0;
  } else {
    for (i = n; i > 0; i--) {
      fact = fact * i;
    }
    return fact;
  }
}
