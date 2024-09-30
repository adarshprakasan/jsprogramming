//? Find  the sum of odd & even elements in an array

function sumOfOddEvenEle(arr) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  console.log(`Sum of odd numbers is ${oddSum}`);
  console.log(`Sum of even numbers is ${evenSum}`);
}
sumOfOddEvenEle([10, 21, 30, 41]);
