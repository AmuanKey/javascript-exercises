const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }else {

    
 let n1=0; let n2= 1; let nextNum;
 let arr = [];
for (let i = 0; i <= n; i++) {
    nextNum = n1 + n2;
    arr.push(n1);
    n1=n2;
    n2=nextNum;

}
return arr[arr.length-1];
    }
};
console.log(fibonacci(-1));
// Do not edit below this line
module.exports = fibonacci;
