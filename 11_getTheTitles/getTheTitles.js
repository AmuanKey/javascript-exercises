const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


const getTheTitles = function(n) {
    let arr = [];
for (let i = 0; i < n.length; i++) {
    const element = n[i].title;
    arr.push(element);
    
}
return arr;
};
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
