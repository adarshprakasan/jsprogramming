//? Rotate array by k times

function rotateArray(arr, k) {
  k = k % arr.length;
  for (i = 0; i < k; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  console.log(arr);
}
rotateArray([1, 2, 3, 4], 2);
