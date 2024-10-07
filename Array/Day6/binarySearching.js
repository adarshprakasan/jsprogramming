function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[start] < arr[end];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (isAscending) {
      if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
console.log(binarySearch([6, 5, 4, 3, 2, 1, 0], 5));
