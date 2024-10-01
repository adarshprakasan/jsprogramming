//? Check whether given element is present in array or not

function isPresent(arr, e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == e) {
      return true;
    }
  }
  return false;
}
console.log(isPresent([4, 8, 2, 1, 9], 8));
