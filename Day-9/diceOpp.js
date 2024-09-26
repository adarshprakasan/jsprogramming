//? Given the no. on the facce of dice, Print the number present on the opposite side of dice

let num;

function oppDice(n) {
  if (n > 6 || n < 0) {
    return false;
  } else {
    num = 7 - n;
    return num;
  }
}

let res = oppDice("5");

if (res) {
  console.log(`Opposite number is ${num}`);
} else {
  console.log("Wrong Input");
}
