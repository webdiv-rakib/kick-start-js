// 1. Write a function to convert temperature from Celsius to Fahrenheit.
function tempConversion(temp) {
    const result = temp * 9 / 5 + 32;
    return result;
}
const fahrenheit = tempConversion(38);
console.log('Temperature is fahrenheit:', fahrenheit);
