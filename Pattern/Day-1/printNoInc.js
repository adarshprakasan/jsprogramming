//? Print number, till n times starting from 1
//? if n=3
//& 1
//& 1 2
//& 1 2 3

function printNoInc(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 1; j <= i + 1; j++) {
      str = str + j + " ";
    }

    console.log(str);
  }
}
printNoInc(5);
