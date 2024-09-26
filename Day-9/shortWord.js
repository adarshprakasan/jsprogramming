//? Given a string, print the string in following format. I/P : "examination", O/P : "e9n".

function shortWord(str) {
  let word = "";
  let n = 0;
  if (str.length < 2) {
    return false;
  }

  for (let i = 1; i < str.length - 1; i++) {
    n++;
  }
  word += str[0] + n + str[str.length - 1];

  console.log(word);
}
shortWord("examination");
