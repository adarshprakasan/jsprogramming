//? Stock price at particular days are given. Find the max profit that can be made.

// function stockProfit(arr) {
//   let profit = 0;
//   let buyPrice = 0,
//     sellPrice = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] > profit) {
//         profit = arr[j] - arr[i];
//         buyPrice = arr[i];
//         sellPrice = arr[j];
//       }
//     }
//   }
//   return [
//     `profit : ${profit}`,
//     `Buying Price : ${buyPrice}`,
//     `Selling Price : ${sellPrice}`,
//   ];
// }
// console.log(stockProfit([2, 5, 7, 1, 9, 12]));

//! ----------------------------------------------

function stockProfit(arr) {
  let profit = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    profit = Math.max(profit, arr[i] - min);
  }
  return [`profit : ${profit}`];
}
console.log(stockProfit([2, 5, 7, 1, 9, 12]));
