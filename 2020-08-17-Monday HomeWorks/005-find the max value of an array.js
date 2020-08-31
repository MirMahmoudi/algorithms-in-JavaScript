// This is my home work on Monday, 2020-08-17.
/* Given an array X, write a program that would find the maximum value of the array.
   Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.*/

// 1- without using function:

console.log('----------without using function----------');
var x = [4, 6, 7, 1, -1];
var max = x[0];
for (var i = 1; i < x.length; i++){
  if (max < x[i]){
    max = x[i];
  }
}
console.log(max);

// 2- with using function:

console.log('----------with using function----------');
function max_of_array(y){
  max = y[0];
  for (var i = 1; i < y.length; i++){
    if (max < y[i]){
      max = y[i];
    }
  }
  return max;
}

var y = [4, 6, -3, 8, 0, 1];
console.log(max_of_array(y));