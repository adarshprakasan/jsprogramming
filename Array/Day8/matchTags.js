//? Match the corresponding paranthesis

function matchTags(str) {
  let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
      stack.push(obj[str[i]]);
    } else {
      let closing = stack.pop();
      if (str[i] !== closing) {
        return false;
      }
    }
  }
  return stack.length == 0 ? true : false;
}
console.log(matchTags("{}[()]"));
