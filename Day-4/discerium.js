//? Check whether the given number is discerium number
// a no. is said to be the discerium number when the sum of its digits raised to the power of their respective position = no. itself

function discerium(n) {
  let temp = n;
  let count = countDigits(n);
  let sum = 0;
  do {
    let rem = n % 10;
    sum = sum + rem ** count;
    count--;
    n = Math.floor(n / 10);
  } while (n != 0);
  if (sum === temp) {
    console.log("Given number is Discerium number");
  } else {
    console.log("Its not Discerium number");
  }
}
discerium(89);

function countDigits(n) {
  let num = 0;
  do {
    n = Math.floor(n / 10);
    num++;
  } while (n != 0);
  return num;
}
