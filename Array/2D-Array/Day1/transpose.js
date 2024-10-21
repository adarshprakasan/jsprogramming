//? Transpose the given 2d array

function transpose(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i !== j) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
        return;
      }
    }
  }
}
let arr = [
  [1, 2],
  [3, 4],
];
transpose(arr);
console.log(arr);
