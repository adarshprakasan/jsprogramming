//? Find the sum of the digits in a given number

// function sumOfDigits(n) {
//   let sum = 0;
//   do {
//     let rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
//   } while (n != 0);
//   console.log(sum);
// }
// sumOfDigits(123);

function sumOfDigits(n) {
  let sum = 0;
  let is_neg = false;
  if (n < 0) {
    is_neg = true;
    n *= -1;
  }
  do {
    let rem = n % 10;
    if (is_neg && n < 10) {
      sum -= rem;
    } else {
      sum += rem;
    }
    n = Math.floor(n / 10);
  } while (n != 0);
  return sum;
}

console.log(sumOfDigits(-121));
