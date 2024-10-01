//? Print the smallest element in a given array

function smallestEle(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      break;
    }
  }
  console.log(`Smallest element is ${smallest}`);
}
smallestEle([45, 10, 70, 21, 30, 41, 60]);
