//? Find  the sum of all elements in an array

function sumOfEle(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfEle([10, 20, 30, 40]);
