//? Find  the sum of odd elements in an array

function sumOfOddEle(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}
sumOfOddEle([10, 21, 30, 41]);
