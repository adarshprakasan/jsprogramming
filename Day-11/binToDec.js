//? Convert given binary digits to decimal

function binConversion(n) {
  let num = 0;
  let i = 0;
  while (n != 0) {
    let rem = n % 10;
    num += rem * 2 ** i;
    n = Math.floor(n / 10);
    i++;
  }
  console.log(num);
}
binConversion(1010);
