//? Print the sum of Even numbers and sum of odd numbers upto n

function sumEvenOdd(n) {
  let oddSum = 0;
  let evenSum = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      oddSum += i;
    } else {
      evenSum += i;
    }
  }
  console.log("With For Loop-");
  console.log(`Sum of Odd numbers = ${oddSum}`);
  console.log(`Sum of Even numbers = ${evenSum}`);
}
sumEvenOdd(20);

//? Print the sum of Even numbers and sum of odd numbers upto n using While Loop

function sumEvenOddNo(n) {
  let oddSum = 0;
  let evenSum = 0;
  let i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      oddSum += i;
    } else {
      evenSum += i;
    }
    i++;
  }
  console.log("With While Loop-");
  console.log(`Sum of Odd numbers = ${oddSum}`);
  console.log(`Sum of Even numbers = ${evenSum}`);
}
sumEvenOddNo(20);
