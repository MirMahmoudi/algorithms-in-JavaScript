// This is my home work on Monday, 2020-08-17.
/* Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen.
   Your program should work with arrays of all sizes.*/

function numbers_of_array(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

var x = [1, 4, 2, 12]
numbers_of_array(x);