//? Sort an array in decreasing order

function decreaseSort(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
decreaseSort([1, 8, 4, 1, 7, 9]);