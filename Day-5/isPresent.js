//? Check whether the given character is present inside the string or not

function isPresent(str, target) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      return true;
    }
  }
  return false;
}
let res = isPresent("apple", "e");

if (res) {
  console.log("Character Found");
} else {
  console.log("Character not found");
}
