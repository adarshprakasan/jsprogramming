//? Print pattern of 1 and 0, n times both width and height

function print1010(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (j % 2 == 0) {
        str = str + 1 + " ";
      } else {
        str = str + 0 + " ";
      }
    }
    console.log(str);
  }
}
print1010(5);

// function print1010(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       if (str[j] == 0 || str[i] == null) {
//         str = str + 0;
//       } else {
//         str = str + 1;
//       }
//     }
//     console.log(str);
//   }
// }
// print1010(5);
