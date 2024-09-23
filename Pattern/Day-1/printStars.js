//? Print *, n times both width and height
// eg: n=3
// ***
// ***
// ***

function printStars(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str = str + "*" + " ";
    }
    console.log(str);
  }
}
printStars(5);
