//? Find the length of word which is having maximum length in the given sentence

function maxLength(str) {
  let currStr = 0;
  let maxStr = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currStr++;
    } else {
      if (currStr > maxStr) {
        maxStr = currStr;
      }
      currStr = 0;
    }
  }
  console.log(currStr);
}
maxLength("the sky is blue today");
