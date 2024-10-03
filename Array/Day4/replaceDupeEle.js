//? Replace the duplicate elements by _ in the given array

function replaceDupeEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr[j] = "_";
      }
    }
  }
  return arr;
}
console.log(replaceDupeEle([1, 0, 1, 2, 0, 3, 3]));
