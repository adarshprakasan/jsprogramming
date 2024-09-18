//? Given 3 Numbers. Print them in Ascending Order.

function nosAscending(a, b, c) {
  let one, two, three;
  if (a < b && a < c) {
    one = a;
    if (b < c) {
      two = b;
      three = c;
    } else {
      two = c;
      three = b;
    }
  } else if (b < a && b < c) {
    one = b;
    if (a < c) {
      two = a;
      three = c;
    } else {
      two = c;
      three = a;
    }
  } else if (c < a && c < b) {
    one = c;
    if (b < a) {
      two = b;
      three = a;
    } else {
      two = a;
      three = b;
    }
  }

  console.log(`${one},${two},${three}`);
}
nosAscending(40, 70, 30);
