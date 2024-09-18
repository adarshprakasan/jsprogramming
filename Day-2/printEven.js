//? Print only the even numbers upto n and include n also.

function printToN(n) {
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printToN(21);
