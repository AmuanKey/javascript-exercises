const palindromes = function (str) {
let newStr=  str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" "]/g,'').toLowerCase();
let reverseStr = newStr.split('').reverse().join('');

if(reverseStr == newStr){
    return true;
}
else{
    return false;
}


};
console.log(palindromes("??rac3e3car!!!"));
// Do not edit below this line
module.exports = palindromes;
