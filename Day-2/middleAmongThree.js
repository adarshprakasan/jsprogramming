//? Given 3 no.s a,b,c. Print the middle among the 3 no.s.

function middleAmongThree(a, b, c) {
  if ((a > b && a < c) || (c < a && a < b)) {
    console.log(`${a} is the middle number`);
  } else if ((b > a && b < c) || (b > c && b < a)) {
    console.log(`${b} is the middle number`);
  } else {
    console.log(`${c} is the middle number`);
  }
}
middleAmongThree(40, 20, 30);
