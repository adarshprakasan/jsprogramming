//? From the given string, print the non repeating Character

function nonRepeat(str) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    let idx = charcode - 97;
    arr[idx] = arr[idx] + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (arr[i] == 1) {
      console.log(String.fromCharCode(97 + i));
      break;
    }
  }
}
nonRepeat("aabcd");
