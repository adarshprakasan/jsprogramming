//? Print the 2nd smallest element in a given array

function secSmallestEle(arr) {
  let smallest = arr[0];
  let secSmallest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (secSmallest > arr[i] && arr[i] > smallest) {
      secSmallest = arr[i];
    } else if (arr[i] < smallest) {
      secSmallest = smallest;
      smallest = arr[i];
    }
  }
  console.log(`Second biggest element is ${secSmallest}`);
}
secSmallestEle([45, 69, 10, 111]);
