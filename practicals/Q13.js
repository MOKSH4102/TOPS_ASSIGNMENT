function convertFahrenheitToCelsius(fahrenheit) {
  
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  console.log(convertFahrenheitToCelsius(50));