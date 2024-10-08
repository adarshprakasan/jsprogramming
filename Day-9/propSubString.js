//? Print the number of characters in longest substring of a given word without repeating elements
//? i/p : "ababacdefacde". o/p : 6 (bacdef)

function propSubString(str) {
  let maxLen = -Infinity;
  for (i = 0; i < str.length; i++) {
    let arr = new Array(256).fill(false);
    for (let j = i; j < str.length; j++) {
      if (arr[str.charCodeAt(j)] == true) {
        break;
      } else {
        maxLen = Math.max(maxLen, j - i + 1);
        arr[str.charCodeAt(j)] = true;
      }
    }
  }
  console.log(maxLen);
}
propSubString("ababacdefacde");
