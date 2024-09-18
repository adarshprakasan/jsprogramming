//? Find all the divisor of the number

function divisorOfNumber(n) {
  for (i = 0; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
divisorOfNumber(15);
