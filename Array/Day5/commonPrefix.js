//? Print the common prefix from the given array

function commonPrefix(arr) {
  firstW = arr[0];
  let ans = "";
  for (let i = 0; i < firstW.length; i++) {
    let ch = firstW[i];
    let isPresent = false;
    for (let j = 1; j < arr.length; j++) {
      let temp = arr[j][i];
      if (temp === ch) {
        isPresent = true;
      } else {
        isPresent = false;
        return ans;
      }
    }
    if (!isPresent) {
      return ans;
    } else {
      ans += ch;
    }
  }
  return ans;
}
console.log(commonPrefix(["flower", "floor", "flow"]));
