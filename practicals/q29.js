function Week(day) {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }
  console.log(Week(1));
  console.log(Week(2));
  console.log(Week(3));
  console.log(Week(4));
  console.log(Week(5));
  console.log(Week(6));
  console.log(Week(7));
  console.log(Week(8));