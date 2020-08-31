// This is my home work on Monday, 2020-08-17.
/* Given an array X, write a program that will remove all negative numbers and replace them with a 0.
  For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].*/

// 1- without using function:
console.log('----------without using function----------');

var x = [2, -1, 4, -3];
for (var i = 0; i < x.length; i++){
  if (x[i] < 0){
    x[i] = 0;
  }
}
console.log(x);

// 2- with using function:
console.log('----------with using function----------');

function eliminate_neg(arr){
  for (var j = 0; j < arr.length; j++){
    if (arr[j] < 0){
      arr[j] = 0;
    }
  }
  return arr
}

var y = [2, -6, 5, -4, 7, 8, -9, 3, 0, -1, 2, 4, -5];
console.log(eliminate_neg(y));