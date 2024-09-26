//? Print the nth number in fibonacci series

function fibonacci(n) {
  let ele = 0,
    ele1 = 1,
    temp;
  for (let i = 2; i < n; i++) {
    temp = ele + ele1;
    ele = ele1;
    ele1 = temp;
  }
  console.log(ele1);
}
fibonacci(5);
