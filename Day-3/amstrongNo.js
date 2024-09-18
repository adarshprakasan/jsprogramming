//? Given number is Amstrong Number or not
//sum of the cubes of the digits is equal to the given number

function amstrong(n) {
  let temp = n;
  let sum = 0;
  do {
    let rem = n % 10;
    sum = sum + rem ** 3;
    n = Math.floor(n / 10);
  } while (n != 0);
  if (sum === temp) {
    console.log("Given number is Amstrong");
  } else {
    console.log("Its not Amstrong number");
  }
}
amstrong(153);
