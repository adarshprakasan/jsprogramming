//? Convert given decimal to binary

function decConversion(n) {
  let num = "";
  if (n === 0) {
    num = 0;
  }

  while (n != 0) {
    let rem = n % 2;
    num = rem + num;
    n = Math.floor(n / 2);
  }
  console.log(num);
}
decConversion(8);
