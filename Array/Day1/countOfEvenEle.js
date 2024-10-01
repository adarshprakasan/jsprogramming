//? Count the number of even elements in an array

function countOfOddEle(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}
countOfOddEle([10, 21, 30, 41]);
