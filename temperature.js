var Temperature = {
  toFahrenheit: function(celsius) {
    return celsius * (9/5) + 32;
  },
  //Don't forget to add that comma above here...
  toCelsius: function(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  }
}

var tempToday = 82; //Today's temperature in fahrenheit
var tempInCelsius = Math.round(Temperature.toCelsius(tempToday));
var message = "Today's temperature is " + tempToday + "°F, which is " + tempInCelsius + "°C.";

console.log(message);
