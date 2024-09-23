//? Print till n^2, in n width and height

function printTillSq(n) {
  let num = 0;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      num++;
      if (num < 10) {
        str = str + "0" + num + " ";
      } else {
        str = str + num + " ";
      }
    }
    console.log(str);
  }
}
printTillSq(5);

// function print(n) {
//   for (let i = 0; i < n; i++) {
//     let res = "";
//     for (let j = 1; j <= n; j++) {
//       res += String(n * i + j) + " ";
//     }
//     console.log(res);
//   }
// }
// print(5);
