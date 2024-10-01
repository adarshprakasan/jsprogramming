//? Insert element at a given position inside array

function insertEle(arr, p, e) {
  if (p > 0 && p < arr.length) {
    for (let i = arr.length; i >= p; i--) {
      arr[i] = arr[i - 1];
    }
    arr[p - 1] = e;
  }
  console.log(arr);
}
insertEle([1, 2, 3, 4], 3, 100);
