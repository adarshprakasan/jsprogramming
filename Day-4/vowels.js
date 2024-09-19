//? Count the number of vowels in the given string

function countVowels(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      num++;
    }
  }
  console.log(`Number of vowels ${num}`);
}
countVowels("adarsh");
