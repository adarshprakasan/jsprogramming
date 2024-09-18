//? Print the digit in the given number

function digitsInNo(n) {
  if (n < 0) {
    n = -1 * n;
    do {
      let rem = n % 10;
      console.log(rem);
      n = Math.floor(n / 10);
    } while (n != 0);
  }
}
digitsInNo(1234);
