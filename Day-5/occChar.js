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

// function occChars(str) {
//   let result = "";
//   let currentChar = "";
//   let countStr = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (isNaN(char)) {
//       if (currentChar !== "" && countStr !== "") {
//         let count = parseInt(countStr);
//         for (let j = 0; j < count; j++) {
//           result += currentChar;
//         }
//       }
//       currentChar = char;
//       countStr = "";
//     } else {
//       countStr += char;
//     }
//   }

//   if (currentChar !== "" && countStr !== "") {
//     let count = parseInt(countStr);
//     for (let j = 0; j < count; j++) {
//       result += currentChar;
//     }
//   }

//   return result;
// }
// console.log(occChars("a20b3c9"));

//! -----------------------------------------

// function solve(str) {
//   let ans = "";
//   let i = 0;
//   while (i < str.length) {
//     let ch = str[i];
//     let ascii = str.charCodeAt(i);
//     if (ascii >= 97 && ascii <= 122) {
//       i++;
//       let newCh = str[i];
//       let newAscii = str.charCodeAt(i);
//       let num = 0;
//       while (newAscii >= 48 && newAscii <= 57) {
//         num = num * 10 + Number(newCh);
//         i++;
//         newCh = str[i];
//         newAscii = str.charCodeAt(i);
//       }
//       let temp = "";
//       while (num !== 0) {
//         temp += ch;
//         num--;
//       }
//       ans += temp;
//     } else {
//       i++;
//     }
//   }
//   return ans;
// }
// console.log(solve("a0b13c9"));

//! -----------------------------------------

// function print(str){
//   let i=0
//   let res=""
//   while(i<str.length){
//     if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){}
//   }
// }