//? Find the sum of extreme digits sum and internal digits sum of given number

function exinsum(n) {
  let temp = n;
  let exsum = 0;
  let insum = 0;
  do {
    let rem = n % 10;
    if (n === temp || n < 10) {
      exsum = exsum + rem;
    } else {
      insum = insum + rem;
    }
    n = Math.floor(n / 10);
  } while (n != 0);
  console.log(`Extreme digits sum is ${exsum}`);
  console.log(`Internal digits sum is ${insum}`);
}
exinsum(1221);
