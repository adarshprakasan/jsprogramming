//? Remove the duplicate elements from given array

function removeDupeEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      if (arr[i] == arr[j]) {
        for (let k = j; k < arr.length - 1; k++) {
          arr[k] = arr[k + 1];
        }
        arr.pop();
      }
    }
  }
  return arr;
}
console.log(removeDupeEle([1, 0, 1, 1, 2, 0, 3, 3]));
