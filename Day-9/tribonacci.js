//? Print the nth number in tribonacci series

function tribonacci(n) {
  let ele = 0,
    ele1 = 1,
    ele2 = 1,
    temp;
  for (let i = 2; i < n; i++) {
    temp = ele + ele1 + ele2;
    ele = ele1;
    ele1 = ele2;
    ele2 = temp;
  }
  console.log(ele1);
}
tribonacci(5);
