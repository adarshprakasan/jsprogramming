//? Reverse an array

function revArray(arr) {
  let revArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr[j] = arr[i];
    j++;
  }
  console.log(revArr);
}
revArray([1, 2, 3, 4]);

//? By using two pointer approach

function revsArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
// let arr = [5, 6, 7, 8];

console.log(revsArray([5, 6, 7, 8]));
