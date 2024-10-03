//? Stock price at particular days are given. Find the max profit that can be made.

function stockProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > profit) {
        profit = arr[j] - arr[i];
      }
    }
  }
  return profit;
}
console.log(stockProfit([2, 5, 7, 1, 9, 12]));
