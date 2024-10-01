//? Print the adjascent element such that its sum is equal to the target

function sumAdjTarget(arr, target) {
  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i] + arr[i - 1];
    if (target == sum) {
      return [arr[i - 1], arr[i]];
    }
  }
  return -1;
}
console.log(sumAdjTarget([4, 8, 2, 1, 9], 10));
