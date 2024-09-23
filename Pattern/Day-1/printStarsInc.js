//? Print *, till n times starting from 1
//? if n=3
//& *
//& * *
//& * * *

function printStarsInc(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + "*" + " ";
    }

    console.log(str);
  }
}
printStarsInc(5);
