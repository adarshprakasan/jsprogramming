//? Check whether the consequtive elements are greater or not

function consqGt(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
      return [arr[i], arr[i + 1], arr[i + 2]];
    }
  }
  return false;
}
console.log(consqGt([5, 2, 6, 5, 7, 8]));
