function fibonacci(n, a = 0, b = 1) {
    if (a > n) return;
    console.log(a);
    fibonacci(n, b, a + b);
  }
  
  fibonacci(100); 