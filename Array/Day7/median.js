//? Find the median of two sorted arrays

function mergeSortedArr(arr1, arr2) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    } else {
      if (i < arr1.length) {
        res.push(arr1[i]);
        i++;
      }
      if (j < arr2.length) {
        res.push(arr2[j]);
      }
    }
  }
  return res;
}

function median(arr) {
    
}
median([5, 7, 8, 9], [1, 4, 6]);
