//? Check whether the given number is power of 3 or not

function powerOf3(n) {
  while (n % 3 == 0) {
    n /= 3;
  }
  if (n === 1) {
    console.log("Its a power of 3");
  } else {
    console.log("Its not a power of 3");
  }
}
powerOf3(-27);
