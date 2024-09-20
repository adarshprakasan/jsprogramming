//? Print character according to the number in a given string
//! consider there is only one number after each char

// function occChar(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i += 2) {
//     let count = Number(str[i + 1]);
//     let temp = "";
//     for (let j = 0; j < count; j++) {
//       temp += str[i];
//     }
//     res += temp;
//   }
//   return res;
// }
// console.log(occChar("a2b3c4"));

//! consider there is multiple number after each char

function occChars(str) {
  let result = "";
  let currentChar = "";
  let countStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (isNaN(char)) {
      if (currentChar !== "" && countStr !== "") {
        let count = parseInt(countStr);
        for (let j = 0; j < count; j++) {
          result += currentChar;
        }
      }
      currentChar = char;
      countStr = "";
    } else {
      countStr += char;
    }
  }

  if (currentChar !== "" && countStr !== "") {
    let count = parseInt(countStr);
    for (let j = 0; j < count; j++) {
      result += currentChar;
    }
  }

  return result;
}
console.log(occChars("a20b3c4"));
