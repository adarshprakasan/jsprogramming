//? Print the element which is greater than left element and smaller than right element

function gtlstr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      if (arr[i] < arr[i + 1]) {
        return arr[i];
      }
    } else if (i === arr.length - 1) {
      if (arr[i] > arr[i - 1]) {
        return arr[i];
      }
    } else {
      if (arr[i] > arr[i - 1] && arr[i] < arr[i + 1]) {
        return arr[i];
      }
    }
  }
  return -1;
}
console.log(gtlstr([7, 4, 8, 2, 3, 9]));
