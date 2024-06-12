for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += (j % 2 === 1) ? '1 ' : '0 ';
    }
    console.log(row.trim());
  }