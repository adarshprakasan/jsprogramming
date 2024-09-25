//? Check whether the given number is power of 3 or not

function powerOf3(n) {
  if (Math.cbrt(n) % 3 === 0) {
    console.log("Number is power of 3");
  } else {
    console.log("Number is not a power of 3");
  }
}
powerOf3(9);
