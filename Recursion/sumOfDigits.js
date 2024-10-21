//? Find the sum of digits of the given number

function sumOfDigits(n) {
  if (n >= 0 && n < 10) {
    return n;
  }
  sum = n % 10;
  return sum + sumOfDigits(Math.floor(n / 10));
}
console.log(sumOfDigits(123));
