//? Given a mocks of 3 subjects of a student. Print whether student is passed or failed. (Pass mark 35).
//? Distinction >90
//? First Class 75-90
//? Second class 50-75
//? just Pass >35
//? fail <35

function mockResults(a, b, c) {
  if (a < 35 || b < 35 || c < 35) {
    console.log("Student is Failed");
  } else {
    console.log("Student is Passed");
    let avg = (a + b + c) / 3;
    if (avg >= 90) {
      console.log("Student got Distinction");
    } else if (avg < 90 && avg >= 75) {
      console.log("Student got First Class");
    } else if (avg < 75 && avg >= 50) {
      console.log("Student got Second Class");
    } else {
      console.log("Student is Just Pass");
    }
  }
}
mockResults(50, 60, 100);
