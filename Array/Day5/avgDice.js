//? You have observation of n+m 6 sided dice rolls with each face numbered from 1-6. n of the observations are went missing and you only have the
//? observation of m rolls. Fortunately you have also calculated the average value of n+m rolls. You are given an integer array rolls of length m where
//? rolls[i] is the value of the ith observation. You are also given two integers mean and n.

// function sumOfEle(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// function avgDice(rolls, n, mean) {
//   let remSum = 3 * (rolls.length + 2) - sumOfEle(rolls);
//   let arr = new Array(n).fill(1);
//   for (let i = 0; i < arr.length; i++) {
//     let add = Math.min(5, remSum);
//     arr[i] += add;
//     remSum = remSum - add;
//     if (remSum === 0) {
//       break;
//     }
//   }
//   console.log(arr);
// }
// avgDice([2, 4, 3, 1], 2, 3);

let obs = [2, 4, 3, 1];
let n = 2;
let avg = 3;
let sumOfObs = 0;

for (let i = 0; i < obs.length; i++) {
  sumOfObs += obs[i];
}

let remSum = avg * (obs.length + n) - sumOfObs;
let unObs = new Array(n).fill(1);
remSum = remSum - n;

for (let i = 0; i < unObs.length; i++) {
  let add = Math.min(5, remSum);
  unObs[i] += add;
  remSum -= add;
  if (remSum == 0) {
    break;
  }
}

console.log(unObs);
