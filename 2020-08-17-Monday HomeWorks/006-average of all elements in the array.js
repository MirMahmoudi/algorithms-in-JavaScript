// This is my home work on Monday, 2020-08-17.
/* Given an array X, write a program that will return the average value of all elements in the array.
   For example, for array X = [2,1,3] your output should be 2.*/

// 1- without using function:
console.log('----------without using function----------');

var x = [2, 1, 3];
average = 0;
for (var i = 0; i<x.length; i++){
  average += x[i];
};
console.log(average = average / x.length);

// 2- with using function:
console.log('----------with using function----------');

function average_array(arr){
  var average = 0;
  for (var i = 0; i < arr.length; i++){
    average += arr[i];
  }
  average = average / x.length
  return average
}

var x = [2, 3, 0, -1, 18, -7];
console.log(average_array(x));