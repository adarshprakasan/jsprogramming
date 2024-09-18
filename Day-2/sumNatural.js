//? Find the sum oof all the natural numbers upto n

function sumNatural(n) {
  let a = 0;
  for (i = 0; i <= n; i++) {
    a += i;
  }
  console.log(a);
}
sumNatural(20);
