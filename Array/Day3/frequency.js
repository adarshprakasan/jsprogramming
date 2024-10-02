//? Print the frequency of given element inside a given array

function frequency(arr, ele) {
  let freq = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) freq++;
  }
  console.log(freq);
}
frequency([1, 2, 1, 3, 4, 1], 1);
