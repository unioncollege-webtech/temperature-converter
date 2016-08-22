# Temperature Converter

[![Join the chat at https://gitter.im/unioncollege-webtech/temperature-converter](https://badges.gitter.im/unioncollege-webtech/temperature-converter.svg)](https://gitter.im/unioncollege-webtech/temperature-converter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Define functions to convert between celsius and fahrenheit.

## Description

Create a file called "temperature.js", which does the following:

1. Create a new variable `Temperature`, which is an [Object] with two properties:
  1. **toFahrenheit**: A [Function] which takes one argument: `celsius` (a number), calculates the equivalent value in Fahrenheit, and returns the Fahrenheit value.
  2. **toCelsius**: A [Function] which takes one argument: `fahrenheit` (a number), calculates the equivalent value in Celsius, and returns the Celsius value.

  The formula for converting Celsius to Fahrenheit is: `F = C × (9⁄5) + 32`.  
  The reverse of that is: `C = (F - 32) × (5⁄9)`
2. Create a new variable `tempToday`, and set the value to 82. This is today’s temperature in Fahrenheit.
3. Create a new variable `tempInCelsius`, and set its value equal to the Celsius equivalent, rounded to the nearest whole number.
   The Celsius equivalent should be calculated by calling the `toCelsius` function property on `Temperature`, passing it `tempToday`. Round the result by using the `Math.round()` function.
4. Create a new variable, `message`, and set its value equal to a string that is in this form:
“Today’s temperature is <tempToday>°F, which is <tempInCelsius>°C.”
5. Log `message` to the console.

## Resources
[Objects][Object]
[Functions][Function]

[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
[Function]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#functions
