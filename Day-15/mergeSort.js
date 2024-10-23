//? Implement Merge sort

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middleInd = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleInd);
  let rightArr = arr.slice(middleInd);

  let result = [];
  let leftInd = 0;
  let rightInd = 0;
  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);

  while (leftInd < sortedLeft.length && rightInd < sortedRight.length) {
    if (sortedLeft[leftInd] < sortedRight[rightInd]) {
      result.push(sortedLeft[leftInd]);
      leftInd++;
    } else {
      result.push(sortedRight[rightInd]);
      rightInd++;
    }
  }

  return result
    .concat(sortedLeft.slice(leftInd))
    .concat(sortedRight.slice(rightInd));
}
console.log(mergeSort([12, 8, 9, 3, 11, 5, 4]));
