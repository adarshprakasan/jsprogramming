//? Find the number of valleys crossed by the person from the given string

function trek(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "d" && str[i + 1] === "u") {
      num++;
    }
  }
  console.log(`Number of valleys crossed ${num}`);
}
trek("udduududduu");

//    /\  /\/\  /
//      \/    \/
