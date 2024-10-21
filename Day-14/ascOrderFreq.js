//? Given an array, print the elements in an ascending order of its frequency
// arr=[1,3,3,2,2,2,5] => arr=[1,5,3,2]

function ascOrdFreq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  //   arr = Object.keys(obj)
  //     .sort((a, b) => obj[a] - obj[b])
  //     .map(Number);

  arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][1] > arr[j][1]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][0]);
  }

  console.log(res);
}
ascOrdFreq([1, 3, 3, 2, 2, 2, 5]);
