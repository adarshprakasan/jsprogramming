//? Print the running maximum element

function runningMax(arr) {
  let maxEle = -Infinity;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxEle) {
      maxEle = arr[i];
    }
    // console.log(maxEle);
    res.push(maxEle);
  }
  console.log(res);
}
runningMax([4, 8, 2, 1, 9]);
