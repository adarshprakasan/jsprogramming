//? Find the sum of elements in an Array

function sumOfEle(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumOfEle(arr.slice(1));
}

console.log(sumOfEle([1, 2, 3, 4]));
