function findMax(num1, num2, num3) {
    return (num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3));
  }
  console.log("the maximum value is:",findMax(55, 10, 15));
  console.log("the maximum value is:",findMax(15, 10, 25));
  console.log("the maximum value is:",findMax(45, 95, 10));