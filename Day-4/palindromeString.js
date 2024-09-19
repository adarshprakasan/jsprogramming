//? String is palindrome or not

function palindrome(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  if (res === str) {
    console.log("Given string is Palindrome");
  } else {
    console.log("Its not Palindrome");
  }
}
palindrome("mom");
