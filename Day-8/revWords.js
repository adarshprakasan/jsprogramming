//? Reverse the words and reverse the sentence. I/P: "The sky is blue". O/P: "eulb si yks ehT".

function revSentence(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      revStr = revStr + str[i];
    } else {
      revStr = revStr + " ";
    }
  }
  console.log(revStr);
}
revSentence("Ajay is a bad boy");
