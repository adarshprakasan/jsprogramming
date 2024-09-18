//? Given 3 no.s a,b,c. Print the biggest among the 3 no.s.

function biggestAmongThree(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a} is the biggest number`);
  } else if (b > a && b > c) {
    console.log(`${b} is the biggest number`);
  } else {
    console.log(`${c} is the biggest number`);
  }
}
biggestAmongThree(10, 20, 30);
