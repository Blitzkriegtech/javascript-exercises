const convertToCelsius = function(fahrenheit) {
  const fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
  const resultFahrenheit_Celsius = Math.round(fahrenheitToCelsius *10)/10;
  return resultFahrenheit_Celsius;
};

const convertToFahrenheit = function(celsius) {
const celsiusToFahrenheit = (celsius * (9/5) ) + 32;
const resultCelsius_Fahrenheit = Math.round(celsiusToFahrenheit * 10)/10;
return resultCelsius_Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

