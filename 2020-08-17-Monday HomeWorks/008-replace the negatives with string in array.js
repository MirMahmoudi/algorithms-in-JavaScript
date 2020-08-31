// This is my home work on Monday, 2020-08-17.
/* Write a program that takes an array of numbers and turns the negative values to strings.
  For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].*/

// 1- without using function:
console.log('----------without using function----------');

var x = [1, -4, 0, -1];
for (var i = 0; i < x.length; i++){
  if (x[i] < 0){
    x[i] = 'Turing';
  }
}
console.log(x);

// 2- with using function:
console.log('----------with using function----------');

function eliminate_neg(arr){
  for (var j = 0; j < arr.length; j++){
    if (arr[j] < 0){
      arr[j] = 'JS';
    }
  }
  return arr
}

var y = [2, -6, 5, -4, 7, 8, -9, 3, 0, -1, 2, 4, -5];
console.log(eliminate_neg(y));