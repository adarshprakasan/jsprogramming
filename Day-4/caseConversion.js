//? From given string convert caps to small and small to caps

function caseConversion(str) {
  let res = "";
  for (let i = 0; i <= str.length; i++) {
    if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
      res = res + str[i].toUpperCase();
    } else if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) {
      res = res + str[i].toLowerCase();
    }
  }
  console.log(res);
}
caseConversion("AdaRsh");
