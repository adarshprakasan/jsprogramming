//? Find the biggest digit in the number

function biggest(n) {
  let big = 0;
  do {
    let rem = n % 10;
    if (big < rem) {
      big = rem;
    }
    n = Math.floor(n / 10);
  } while (n != 0);
  console.log(`Biggest digit is ${big}`);
}
biggest(12987);
