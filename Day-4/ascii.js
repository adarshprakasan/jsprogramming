//? Print the ASCII Value of all the string characters

function ascii(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(`ASCII Value of ${str[i]} is ${str.charCodeAt(i)}`);
  }
}
ascii("adarsh");
