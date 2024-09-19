//? Find the number of capital letters and small letters of the given string

function nosOfCases(str) {
  let lower = 0;
  let upper = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
      lower++;
    } else if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) {
      upper++;
    }
  }
  console.log(`No. of Capital letters = ${upper}`);
  console.log(`No. of Small letters = ${lower}`);
}
nosOfCases("Adarsh");
