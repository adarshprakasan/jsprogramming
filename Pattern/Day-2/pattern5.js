//? n=4
// *     *
// *   * *
// * *   *
// *     *

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j === 0 || j === n - 1 || i + j == n - 1) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

printPattern(6);
