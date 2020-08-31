// This is my home work on Tuesday, 2020-08-18.
/* Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word "Program" with "*",
   so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
   Then make your algorithm work for any word of your choice.*/

var x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
for (var i = 0; i < x.length; i++){
  x[i] = '*'.repeat(x[i].length);
}
console.log(x);