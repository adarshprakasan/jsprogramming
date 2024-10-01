//? Implement Slice without in built method

function slicewoInbuilt(arr, sIn, eIn) {
  let slicedArray = [];
  let j = 0;
  for (let i = sIn; i < eIn; i++) {
    slicedArray[j] = arr[i];
    j++;
  }
  console.log(slicedArray);
}
slicewoInbuilt([10, 20, 30, 40, 50, 60, 70, 80, 90], 2, 6);
