//? Reverse an array and print the sum of even index elements

function revArray(arr) {
  let revArr = [];
  let j = 0;
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr[j] = arr[i];
    j++;
  }
  for (let j = 0; j < arr.length; j += 2) {
    sum += revArr[j];
  }
  console.log(revArr);
  console.log(sum);
}
revArray([1, 2, 3, 4, 5, 6, 7]);
