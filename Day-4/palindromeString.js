//? String is palindrome or not

// function isPalindrome(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res = res + str[i];
//   }
//   if (res === str) {
//     console.log("Given string is Palindrome");
//   } else {
//     console.log("Its not Palindrome");
//   }
// }
// isPalindrome("mom");

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
let res = isPalindrome("mom");

if (res) {
  console.log("Its Palindrome");
} else {
  console.log("Its not palindrome");
}
