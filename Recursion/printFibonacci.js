//? Print the nth Fibonacci using recurssion

function printFibonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n == 2 || n == 3) {
    return 1;
  }
  return printFibonacci(n - 1) + printFibonacci(n - 2);
}
console.log(printFibonacci(10));
