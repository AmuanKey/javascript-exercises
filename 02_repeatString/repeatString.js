const repeatString = function(word,num) {
let newWord ="";


    if(num < 0){
        newWord += 'ERROR'; 
    }else{
        for (let i = 0; i < num; i++) {
        newWord += word;

    }
    
}

return newWord;


};
console.log(repeatString("hey",-1));
// Do not edit below this line
module.exports = repeatString;
