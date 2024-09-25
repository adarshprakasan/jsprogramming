//? Reverse the sentence. I/P: "The sky is blue". O/P: "blue is sky The".

function revSentence(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      revStr = str[i] + revStr;
    } else {
      revStr = revStr + " ";
    }
  }
  console.log(revStr);
}
revSentence("Ajay is a bad boy");
