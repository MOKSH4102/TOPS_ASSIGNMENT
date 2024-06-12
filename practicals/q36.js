function sumFirstLastDigit(num) {
    let numStr = num.toString();
    let firstDigit = parseInt(numStr[0]);
    let lastDigit = parseInt(numStr[numStr.length - 1]);
    return firstDigit + lastDigit;
  }
  
  console.log(sumFirstLastDigit(1234));