//? Print the biggest element in a given array

function biggestEle(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
      break;
    }
  }
  console.log(`Biggest element is ${biggest}`);
}
biggestEle([45, 10, 70, 21, 30, 41, 60]);
