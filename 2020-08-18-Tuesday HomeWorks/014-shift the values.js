// This is my home work on Tuesday, 2020-08-18.
/* Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
   When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].*/

console.log('----------first method also without using function----------');
var my_array = [2, 1, 6, 4, -7, 12, 1, 0];
var shifted_array = [];
for (i = my_array.length - 1; i >= 0; i--){
  shifted_array.push(my_array[i]);
}
console.log(shifted_array);

console.log('----------second method also with using function----------');
function shift_array(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    var temp = arr[i];
    arr.splice(i,1);
    arr.push(temp);
  }
  return arr
}
console.log(shift_array([2, 1, 6, 3, 14, 4, -7, -12, 1, 0]));