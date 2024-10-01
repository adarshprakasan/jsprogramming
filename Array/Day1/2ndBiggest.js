//? Print the 2nd biggest element in a given array

function secBiggestEle(arr) {
  let biggest = arr[0];
  let secBiggest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (secBiggest < arr[i] && arr[i] < biggest) {
      secBiggest = arr[i];
    } else if (arr[i] > biggest) {
      secBiggest = biggest;
      biggest = arr[i];
    }
  }
  console.log(`Second biggest element is ${secBiggest}`);
}
secBiggestEle([45, 69, 10, 111, 70, 21, 98, 30, 41, 60]);
