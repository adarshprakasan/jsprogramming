//? Given an array replace all the elements according to the frequency in an array
// i/p=>[1,1,2,5,12,12,5]  o/p=>[2,2,1,2,2,2,2]

function freqSort(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = freq[arr[i]];
  }
  console.log(arr);
}
freqSort([1, 1, 2, 5, 12, 12, 5]);
