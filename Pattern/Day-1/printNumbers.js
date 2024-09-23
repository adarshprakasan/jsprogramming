//? Print till n, till n width and height

function printNumbers(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      str = str + j + " ";
    }
    console.log(str);
  }
}
printNumbers(5);
