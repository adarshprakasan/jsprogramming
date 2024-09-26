//? let n=3
//    *
//  * * *
//* * * * *

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= n - i - 1; j++) {
      row += "  ";
    }
    for (let k = 0; k <= 2 * i; k++) {
      row += " *";
    }
    console.log(row);
  }
}
pattern(10);
