//? Find  the sum of even index elements in an array

function sumOfEvenIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}
sumOfEvenIndex([10, 20, 30, 40]);
