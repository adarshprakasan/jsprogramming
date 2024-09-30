//? Find the number of valleys crossed by the person from the given string

function trek(str) {
  let num = 0;
  let msl = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "u") {
      msl++;
    } else if (str[i] === "d") {
      msl--;
    }
    if (msl === 0 && str[i] === "u") {
      num++;
    }
  }
  console.log(`Number of valleys crossed ${num}`);
}
trek("udduududduu");
trek("uddduduu");

//    /\  /\/\  /
//      \/    \/
