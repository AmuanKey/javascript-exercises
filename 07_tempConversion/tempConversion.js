const convertToCelsius = function(f) {
  let newTemp = (f-32)*(5/9);
  let c = Math.round(newTemp*10)/10;
  return c;
};



const convertToFahrenheit = function(c) {
  let newTemp = (c*(9/5))+32;
  let f = Math.round(newTemp*10)/10;
  return f;
};
console.log(convertToCelsius(-100));
//console.log(convertToFahrenheit(40));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
