//? Find the way to withdraw money from ATM with minimum notes

function atm(atm, money) {
  let res = [];
  for (let i = atm.length - 1; i >= 0; i--) {
    while (money >= atm[i]) {
      res.push(atm[i]);
      money -= atm[i];
    }
    if (money === 0) {
      return res;
    }
  }
  return res;
}
console.log(atm([50, 100, 200, 500], 1250));
