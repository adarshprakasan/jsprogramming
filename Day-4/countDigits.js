//? Count the number of digits in a given number

function countDigits(n) {
  let num = 0;
  do {
    n = Math.floor(n / 10);
    num++;
  } while (n != 0);
  console.log(`No. of digits is ${num}`);
}
countDigits(0);
