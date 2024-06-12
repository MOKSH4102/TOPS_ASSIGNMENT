let count = 0;
while (count < 3) {
  let num = parseInt(prompt(`Enter number ${count + 1}: `));
  let reversedNum = parseInt(num.toString().split('').reverse().join(''));
  if (num === reversedNum) {
    console.log(`${num} is a palindrome`);
  } else {
    console.log(`${num} is not a palindrome`);
  }
  count++;
}