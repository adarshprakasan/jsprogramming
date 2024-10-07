//? Find the index of the given element in the array if its present else return the index where it should be present

function missingEle(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (key <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}
console.log(missingEle([1, 2, 4, 5], 4));
