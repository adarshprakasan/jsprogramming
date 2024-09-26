//? let n=3
//    A
//  A B
//A B C

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= n - i - 1; j++) {
      row += "  ";
    }
    for (let k = 0; k <= i; k++) {
        
      row += " " + String.fromCharCode(k + 65);
    }
    console.log(row);
  }
}
pattern(3);
