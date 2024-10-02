//? Print the frequency of all elements inside a given array

function frequency(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    // let freq = 0;
    // for (let j = 0; j < arr.length; j++) {
    //   if (arr[i] == arr[j]) {
    //     freq++;
    //   }
    // }
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  return obj;
}
console.log(frequency([1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1]));
