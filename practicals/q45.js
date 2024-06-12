function isArray(variable) {
    return Array.isArray(variable);
  }
  
  // Example usage:
  const myArray = [1, 2, 3];
  const myObject = { a: 1, b: 2 };
  const myString = "hello";
  
  console.log(isArray(myArray)); // Output: true
  console.log(isArray(myObject)); // Output: false
  console.log(isArray(myString)); // Output: false