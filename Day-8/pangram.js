//? Check whether the given sentencce is pangram or not

function isPangram(str) {
  let arr = new Array(26).fill(0);
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let index = charCode - 97;
    arr[index] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      return false;
    }
  }
  return true;
}

let res = isPangram("The quick brown fox jumps over the lazy dog");

if (res) {
  console.log("Its Pangram");
} else {
  console.log("Its not Pangram");
}
