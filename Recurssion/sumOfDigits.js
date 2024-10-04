//? Find the sum of digits of the given number

function sumOfDigits(n) {
  if (n === 0) {
    return 0;
  }
  num = n % 10;
  n = Math.floor(n / 10);
  return num + sumOfDigits(n);
}
console.log(sumOfDigits(121));
