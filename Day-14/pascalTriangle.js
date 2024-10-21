//? Write a program for pascal triangle
//        1
//      1   1
//    1   2   1
//  1   3   3   1
//1   4   6   4   1

//! -----------------------------------------------

// function pascalTriangle(n) {
//   for (let i = 0; i < n; i++) {
//     let ele = 1;
//     let res = [];
//     for (let j = 0; j <= i; j++) {
//       res.push(ele);
//       ele = (ele * (i - j)) / (j + 1);
//     }
//     console.log(res);
//   }
// }
// pascalTriangle(5);

//! -----------------------------------------------

function pascalTriangle(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      res.push([1]);
    } else if (i == 1) {
      res.push([1, 1]);
    } else {
      let arr = [1];
      let prev = res[i - 1];
      for (let j = 0; j < i - 1; j++) {
        arr.push(prev[j + 0] + prev[j + 1]);
      }
      arr.push(1);
      res.push(arr);
    }
  }
  console.log(res);
}
pascalTriangle(5);
