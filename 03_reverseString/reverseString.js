
const reverseString = function(word) {
let reversearray = [];
for (let i = word.length-1; i >= 0; i--) {
    reversearray.push(word[i]);
    }
let reverseWord = reversearray.join("");
console.log(reverseWord);
};


reverseString("123! abc! Hello, Odinite.");
// Do not edit below this line
module.exports = reverseString;
