//? Tom is writing a secret message  using a string of text 'str'. However he accidentally mixed up two important characters that is ch1 and ch2.
//? Now all instance of ch1 have termed in ch2, and ch2 has termed into ch1. Your mission is to help Tom by creating a function that will restore the
//? original message. The function should take string str along with the 2 characters ch1 and ch2 and strap them back to their current places.
//? so that the message is exactly as Tom intended it.

function misPlaced(str, ch1, ch2) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch1) {
      word += ch2;
    } else if (str[i] === ch2) {
      word += ch1;
    } else {
      word += str[i];
    }
  }
  console.log(word);
}
misPlaced("paale", "a", "p");
