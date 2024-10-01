//? Check whether the 3 consecutive elements are odd or not in an array

function oddSequence(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
      return [arr[i], arr[i + 1], arr[i + 2]];
    }
  }
  return false;
}
console.log(oddSequence([1, 2, 3, 5, 7, 8, 9, 11]));
