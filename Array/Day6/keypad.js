//? Print all the possible combination of given number from a keypad

function keypad(n) {
  let obj = {
    1: "abc",
    2: "def",
    3: "ghi",
    4: "jkl",
    5: "mno",
    6: "pqr",
    7: "stu",
    8: "vwx",
    9: "yz",
    0: "-",
  };
  n1 = Math.floor(n / 10);
  n2 = n % 10;
  first_word = obj[n1];
  second_word = obj[n2];
  for (let i = 0; i < first_word.length; i++) {
    for (let j = 0; j < second_word.length; j++) {
      console.log(first_word[i] + second_word[j]);
    }
  }
}
keypad(56);
