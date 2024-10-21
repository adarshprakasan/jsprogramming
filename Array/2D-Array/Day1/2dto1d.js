//? Convert 2D array to 1D array

function twoDto1D(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res.push(arr[i][j]);
    }
  }
  console.log(res);
}
twoDto1D([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
