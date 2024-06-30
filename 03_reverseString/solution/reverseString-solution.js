const reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("hello"));
module.exports = reverseString;
