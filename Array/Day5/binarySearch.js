//? Find the element is present inside array or not using binary search

function binarySearch(arr, n) {
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
console.log(binarySearch([1, 2, 3, 4, 5], 2));
