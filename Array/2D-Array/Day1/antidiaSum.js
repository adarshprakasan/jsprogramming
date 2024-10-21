//? Find the sum of antidiagonal elements

function sumOfAntidiaEle(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i + j == arr.length - 1) {
        sum += arr[i][j];
      }
    }
  }
  console.log(sum);
}
sumOfAntidiaEle([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
