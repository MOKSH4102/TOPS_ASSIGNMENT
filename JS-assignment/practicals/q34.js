function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join(''));
  }
  
  console.log(reverseNumber(64728)); 