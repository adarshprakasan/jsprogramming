//? Reverse the given string

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  console.log(rev);
}
reverseString("Adarsh");
