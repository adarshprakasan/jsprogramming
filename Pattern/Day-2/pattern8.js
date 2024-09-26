//? let str="JSPIDER"
// J           J
//   S       S
//     P   P
//       I
//     D   D
//   E      E
// R           R

function printPattern(n) {
  for (let i = 0; i < n.length; i++) {
    let row = "";
    for (let j = 0; j < n.length; j++) {
      if (i === j || i + j === n.length - 1) {
        row += n[i];
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

printPattern("JSPIDER");
