//? Find the sum of digits of the given number

function sumOfDigits(n) {
  if (n === 0) {
    return 0;
  }
  sum = n % 10;
  // if (sum < 0) {
  //   return sumOfDigits(n) - sum;
  // }
  n = Math.floor(n / 10);
  return sum + sumOfDigits(n);
}
console.log(sumOfDigits(-121));
