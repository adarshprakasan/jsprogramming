//? Find the sum of the digits in a given number

function sumOfDigits(n) {
  let sum = 0;
  do {
    let rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
  } while (n != 0);
  console.log(sum);
}
sumOfDigits(123);
