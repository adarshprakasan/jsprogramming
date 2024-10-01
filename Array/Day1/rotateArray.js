//? Rotate array by k times

function rotateArray(arr, k) {
  k = k % arr.length;
  let arr2 = [];
  for (i = 0; i < arr.length - k; i++) {
    k--;
  }
  console.log(arr);
}
rotateArray([1, 2, 3, 4], 2);
