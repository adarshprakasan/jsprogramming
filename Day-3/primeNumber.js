//? Check whether the given number is prime number or not

function primeNumber(n) {
  let temp = 0;
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("Its not Prime Number");
      temp = 1;
      break;
    }
  }

  if (temp === 0) {
    console.log("Its a Prime Number");
  }
}
primeNumber(7);
