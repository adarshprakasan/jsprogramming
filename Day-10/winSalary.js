//? Find the number of times count reaches to 4 in 7 days in entire string

function winSalary(n) {
  let count = 0;
  let num = 0;
  for (let i = 0; i < n.length - 7; i++) {
    for (let j = i; j < i + 7; j++) {
      if (n[j] === 1) {
        count++;
      }
    }
    if (count >= 4) {
      num++;
    }
  }
  console.log(num);
}
winSalary("0000010010010010");
