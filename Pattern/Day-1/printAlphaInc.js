//? Print alphabets, till n times starting from 1
//? if n=3
//& a
//& a b
//& a b c

function printAlphaInc(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + String.fromCharCode(j + 97) + " ";
    }

    console.log(str);
  }
}
printAlphaInc(5);
