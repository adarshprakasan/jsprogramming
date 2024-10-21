//? Find the sum of n natural numbers

function sumOfN(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumOfN(n - 1);
}

console.log(sumOfN(5));
