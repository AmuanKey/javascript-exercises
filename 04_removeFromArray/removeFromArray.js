const removeFromArray = function(arr,...arg) {

return  arr.filter((item)=> !arg.includes(item));

};

removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
