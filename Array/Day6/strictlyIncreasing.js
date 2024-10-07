//? Check whether the given array is strictly increasing or not

function strictInc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] <= arr[i]) {
      return false;
    }
  }
  return true;
}
console.log(strictInc([1, 2, 3, 4, 4, 5]));
