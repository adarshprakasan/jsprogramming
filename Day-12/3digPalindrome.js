//? Print all the 3 digit palindrome numbers

function palindrome3Dig() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      console.log(`${i}${j}${i}`);
    }
  }
}
palindrome3Dig();
