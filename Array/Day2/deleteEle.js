//? Delete element at a given position inside array

function deleteEle(arr, p) {
  if (p > 0 && p < arr.length) {
    for (let i = arr.length; i >= p; i--) {
      arr[i] = arr[i + 1];
    }
  }
  console.log(arr);
}
deleteEle([1, 2, 3, 4], 3);
