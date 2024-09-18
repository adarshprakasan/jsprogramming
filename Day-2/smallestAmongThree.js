//? Given 3 no.s a,b,c. Print the smallest among the 3 no.s.

function smallestAmongThree(a, b, c) {
  if (a < b && a < c) {
    console.log(`${a} is the smallest number`);
  } else if (b < a && b < c) {
    console.log(`${b} is the smallest number`);
  } else {
    console.log(`${c} is the smallest number`);
  }
}
smallestAmongThree(10, 20, 30);
