//? let n=3
//    1
//  1 2
//1 2 3

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= n - i - 1; j++) {
      row += "  ";
    }
    for (let k = 0; k <= i; k++) {
      row += " " + (k + 1);
    }
    console.log(row);
  }
}
pattern(3);
