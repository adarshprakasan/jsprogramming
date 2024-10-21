//? Print the fibonacci series till n in an array

function fibonacci(n) {
  let ele = 0,
    ele1 = 1,
    temp;
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    temp = ele + ele1;
    ele = ele1;
    ele1 = temp;
    arr.push(ele1);
  }
  console.log(arr);
}
fibonacci(10);
