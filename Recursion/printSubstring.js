//? Print all the substring of given string

function printSubstring(str, start, curr) {
  if (start == str.length) {
    return;
  }
  for (let i = start; i < str.length; i++) {
    curr = curr + str[i];
    console.log(curr);
  }
  return printSubstring(str, start + 1, "");
}
printSubstring("abc", 0, "");
