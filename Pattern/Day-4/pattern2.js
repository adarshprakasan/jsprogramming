//? let n=5
//      *
//    *   *
//  *       *
//    *   *
//      *

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
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

    console.log(row);
  }

  for (let i = n - 2; i >= 0; i--) {
    let row = "";

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

    console.log(row);
  }
}
pattern(5);
