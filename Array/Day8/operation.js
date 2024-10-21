//? An array element starting from nth index, each element will be (2*i)+1 You have to pick 2 elements. One these element you can perform following
//? operations. For one element you can add or substract. Find the min no. of operations required to make the array equal.

function minOperation(n) {
  //   let middleEle = arr[(arr.length - 1) / 2];
  //   console.log(middleEle);

  let sum = 0;

  if (n % 2 == 0) {
    for (let i = 1; i < n; i = i + 2) {
      sum += i;
    }
  } else {
    for (let i = 0; i < n; i = i + 2) {
      sum += i;
    }
  }
  return sum;
}
console.log(minOperation(4));
