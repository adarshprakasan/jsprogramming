//? Check whether the given number is palindrome or not

function palindrome(n) {
  let temp = n;
  let pal = 0;
  do {
    let rem = n % 10;
    pal = pal * 10 + rem;
    n = Math.floor(n / 10);
  } while (n != 0);
  if (pal === temp) {
    console.log("Given number is Palindrome");
  } else {
    console.log("Its not Palindrome");
  }
}
palindrome(121);
