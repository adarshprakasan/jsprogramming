//? Print character according to the number in a given string

function occChar(str) {
  let res = "";
  for (let i = 0; i < str.length; i += 2) {
    let count = Number(str[i + 1]);
    let temp = "";
    for (let j = 0; j < count; j++) {
      temp += str[i];
    }
    res += temp;
  }
  return res;
}
console.log(occChar("a2b3c4"));
