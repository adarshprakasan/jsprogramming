//? Print character according to the number in a given string

function occChar(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    let num = 0;
    while (i % 2 == 0) {
      console.log(str[i]);
      //   num = parseInt(str[i]);
    }
    for (let j = 0; j <= num; j++) {
      word = word + str[i];
    }
  }
  console.log(word);
}
occChar("a2b3c4");
