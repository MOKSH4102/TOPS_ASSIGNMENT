function findMax(num1, num2, num3) {
    return (num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3));
  }
  console.log("the minimum value is:",findMax(15, 10, 25));
  console.log("the minimum value is:",findMax(45, 95, 30));
  console.log("the minimum value is:",findMax(45, 80, 75));