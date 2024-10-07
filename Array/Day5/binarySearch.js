//? Find the element is present inside array or not using binary search

// function binarySearch(arr, n) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === n) {
//       return true;
//     } else if (arr[mid] > n) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return false;
// }
// console.log(binarySearch([1, 2, 3, 4, 5], 2));

function binarySearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) {
      return true;
    } else if (arr[mid] > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
console.log(binarySearch([5, 7, 9, 4, 3, 2, 1], 2));
