//? Print alphabets, n times both width and height

function printAlphabets(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <n; j++) {
      str = str + String.fromCharCode(j+65) + " ";
    }
    console.log(str);
  }
}
printAlphabets(5);
