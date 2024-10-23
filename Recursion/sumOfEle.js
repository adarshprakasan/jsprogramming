//? Find the sum of elements in an Array

function sumOfEle(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumOfEle(arr.slice(1));
}
console.log(sumOfEle([1, 2, 3, 4]));

//--------------without using slice-------------------

function sumOfElt(arr, i) {
  if (i === arr.length - 1) {
    return arr[i];
  }
  return arr[i] + sumOfElt(arr, i + 1);
}
console.log(sumOfElt([1, 2, 3, 4, 5], 0));
