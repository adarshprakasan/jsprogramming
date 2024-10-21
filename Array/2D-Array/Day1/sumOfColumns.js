//? Sum of columns in 2d array

function sumOfAllEle(arr) {
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
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
