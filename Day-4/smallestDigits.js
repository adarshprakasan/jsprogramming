//? Find the smallest digit in the number

function smallest(n) {
  let big = +Infinity;
  do {
    let rem = n % 10;
    if (big > rem) {
      big = rem;
    }
    n = Math.floor(n / 10);
  } while (n != 0);
  console.log(`Smallest digit is ${big}`);
}
smallest(9335987);
