//? Check whether the given 2 string is anagram or not

function isAnagram(str1, str2) {
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(26).fill(0);
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let charCode = str1.charCodeAt(i);
    let index = charCode - 97;
    arr1[index] += 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let charCode = str2.charCodeAt(i);
    let index = charCode - 97;
    arr2[index] += 1;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
let res = isAnagram("leap", "peal");

if (res) {
  console.log("Its Anagram");
} else {
  console.log("Its not Anagram");
}
