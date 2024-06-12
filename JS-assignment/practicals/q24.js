function checkNumber(num) {
    if (num > 0) {
      return console.log("Given number is positive");
    } else if (num < 0) {
      return console.log("Given number is negative");
    } else {
      return console.log("Given number is zero");
    }
  }
  checkNumber(5); checkNumber(-3); checkNumber(0);