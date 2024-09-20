//? Find the number of character occurance in a given string

function charOcc(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     let tgt = str[i];
  //     let num = 0;
  //     for (let j = 0; j < str.length; j++) {
  //       if (tgt === str[j]) {
  //         num++;
  //       }
  //     }
  //     console.log(`${str[i]}${num}`);
  //   }

  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  let res = "";
  for (let key in obj) {
    res = res + key + obj[key];
  }
  return res;
}
console.log(charOcc("abacdcab"));
