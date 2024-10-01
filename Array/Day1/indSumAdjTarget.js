//? Find any 2 index such that its sum is equal to the target

function sumAdjTarget(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}
console.log(sumAdjTarget([2, 5, 4, 6, 7, 9, 1], 10));
