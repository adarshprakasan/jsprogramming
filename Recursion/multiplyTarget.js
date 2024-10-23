//? Given a target N and a starting number A. Check whether you can reach the target by multiplying A by either 10 or 20 continuously.

function mulTarget(n, a) {
  if (a === n) {
    return true;
  }
  if (a > n) {
    return false;
  }
  return mulTarget(n, a * 10) || mulTarget(n, a * 20);
}

console.log(mulTarget(1000, 10));
