//? Fold array by k times
// [1,2,3,4] =(1)=> [5,5] =(2)=> [10] (k=2)

function foldArray(arr, k) {
  for (let i = 0; i < k; i++) {
    let res = [];
    for (let j = 0; j < Math.floor(arr.length / 2); j++) {
      let sum = arr[j] + arr[arr.length - 1 - j];
      res.push(sum);
    }
    if (arr.length % 2 !== 0) [res.push(arr[Math.floor(arr.length / 2)])];
    arr = [...res];
  }
  console.log(arr);
}
foldArray([1, 2, 3, 4, 5], 3);
