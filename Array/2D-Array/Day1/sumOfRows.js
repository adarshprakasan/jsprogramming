//? Sum of rows in 2d array

function sumOfAllEle(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    res.push(sum);
  }
  console.log(res);
}
sumOfAllEle([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
