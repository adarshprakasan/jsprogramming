//? let n=5
//      *
//    * * *
//  * * * * *
//    * * *
//      *

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    if (i <= Math.floor(n / 2)) {
      for (let j = 0; j < n - i - 1; j++) {
        row += "  ";
      }

      for (let k = 0; k < 2 * i + 1; k++) {
        if (k === 0 || k === 2 * i) {
          row += " *";
        } else {
          row += "  ";
        }
      }
    } else {
      for (let j = 0; j < n - i - 1; j++) {
        row += "  ";
      }

      for (let k = 0; k < 2 * i + 1; k++) {
        if (k === 0 || k === 2 * i) {
          row += " *";
        } else {
          row += "  ";
        }
      }
    }
    console.log(row);
  }
}
pattern(9);
