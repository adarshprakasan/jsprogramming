//? Find the factorial of the given number

function factorial(n) {
  let fact = 1;
  if (n === 0) {
    console.log("Factorial of the given number is 0");
  } else {
    for (i = n; i > 0; i--) {
      fact = fact * i;
    }
    console.log(`Factorial of the given number is ${fact}`);
  }
}
factorial(5);
