//? Find the product of the digits in a given number

function productOfDigits(n) {
  let sum = 1;
  do {
    let rem = n % 10;
    sum = sum * rem;
    n = Math.floor(n / 10);
  } while (n != 0);
  console.log(sum);
}
productOfDigits(1234);
