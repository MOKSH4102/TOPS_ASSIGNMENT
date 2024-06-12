function checkChar(char) {
    let ch = char.toLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      return console.log("Given character is a Vowel");
    } else {
      return console.log("Given character is a Consonant");
    }
  }
  checkChar('M'); checkChar('O');