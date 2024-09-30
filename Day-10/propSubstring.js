//? Print the longest substrings of a given word without repeating elements.
//? i/p : "ababacdefacde". o/p : 6 (bacdef)

function propSubString(str) {
  let maxLen = -Infinity;
  let winStart = 0;
  let winEnd = 0;
  for (i = 0; i < str.length; i++) {
    let arr = new Array(256).fill(false);
    for (let j = i; j < str.length; j++) {
      if (arr[str.charCodeAt(j)] == true) {
        break;
      } else {
        if (maxLen < j - i + 1) {
          maxLen = j - i + 1;
          winStart = i;
          winEnd = j;
        }
        arr[str.charCodeAt(j)] = true;
      }
    }
  }
  return str.slice(winStart, winEnd + 1);
}

console.log(propSubString("ababacdefacde"));
