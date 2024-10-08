//? Print anti diagonal elements

function printDiaEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i + j == arr.length - 1) {
        console.log(arr[i][j]);
      }
    }
  }
}
printDiaEle([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
