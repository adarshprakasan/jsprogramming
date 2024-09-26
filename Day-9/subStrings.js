//? Print all the possible substrings of a given word

function subStrings(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      console.log(str.slice(i, j + 1));
    }
  }
}
subStrings("abc");
