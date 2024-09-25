//? Find the length of last word in a sentence

function lastWord(str) {
  let noStr = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      noStr++;
    } else {
      break;
    }
  }
  console.log(noStr);
}
lastWord("Ajay is a bad boy");
