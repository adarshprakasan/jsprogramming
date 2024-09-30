//? Swap the adjascent elements in an array

function swap(arr) {
  let ele1 = 0;
  let ele2 = 0;
  let swappedArr = [];
  for (i = 0; i < arr.length; i += 2) {
    ele1 = arr[i + 1];
    ele2 = arr[i];
    swappedArr.push(ele1, ele2);
  }
  console.log(swappedArr);
}
swap([2, 1, 4, 3, 6, 5]);
