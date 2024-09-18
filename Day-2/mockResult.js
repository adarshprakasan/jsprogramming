//? Given a mocks of 3 subjects of a student. Print whether student is passed or failed. (Pass mark 35).

function mockResult(a, b, c) {
  if (a < 35 || b < 35 || c < 35) {
    console.log("Student is Failed");
  } else {
    console.log("Student is Passed");
  }
}
mockResult(40, 20, 30);
