const sumAll = function(a,b) {
    let sum = 0;
    let bigNum = 0;
    let smallNum = 0;
    if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR";
    }
    else{
    if (a>b){
         bigNum = a;
         smallNum = b;
    }else{
bigNum = b;
smallNum = a;
    }
for (let i = smallNum; i <= bigNum; i++) {
    sum = sum + i;
  
    
}}
return sum;
};
console.log(sumAll("5",1));
// Do not edit below this line
module.exports = sumAll;
