//? Rotate array by 90deg

function rotateArr(arr) {
  let n = arr.length;
  let res = new Array(n).fill(0).map((ele) => {
    return new Array(n).fill(0);
  });
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res[j][n - i - 1] = arr[i][j];
    }
  }
  console.log(res);
}
rotateArr([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
