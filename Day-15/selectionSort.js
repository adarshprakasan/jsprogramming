//? Implement Selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minInd] > arr[j]) {
        minInd = j;
      }
    }
    if (minInd !== i) {
      let temp = arr[i];
      arr[i] = arr[minInd];
      arr[minInd] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([12, 8, 9, 3, 11, 5, 4]));
