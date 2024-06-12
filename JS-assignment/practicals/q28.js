function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
  console.log("The maximum number is:",findLargest(45, 50, 75));
  console.log("The maximum number is:",findLargest(65, 30, 25));
  console.log("The maximum number is:",findLargest(75, 95, 60));