//? Print floyd's triangle for given n values

function floydsTriangle(n) {
  let num = 0;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      num++;
      str = str + num + " ";
    }
    console.log(str);
  }
}
floydsTriangle(10);
