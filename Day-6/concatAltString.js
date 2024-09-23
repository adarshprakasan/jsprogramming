//? concat strings alternatively

function concatAlt(a, b) {
  let str = "";
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    str = str + a[i] + b[j];
    i++;
    j++;
  }
  while (i < a.length) {
    str = str + a[i];
    i++;
  }
  while (j < b.length) {
    str = str + b[j];
    j++;
  }
  console.log(str);
}
concatAlt("abcd", "def");
