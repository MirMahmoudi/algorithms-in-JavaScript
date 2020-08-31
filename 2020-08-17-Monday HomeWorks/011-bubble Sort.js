// This is my home work on Monday, 2020-08-17.
/* Bubble Sort Method :
   While the array is not sorted, the code would do the following steps =>
   1- Take each pair of 2 adjacent numbers and compare them.
   2- If their order is not correct, switch them.
   The very important step is to keep in mind that these steps are repeated over and over until the array gets to its final sorted state.*/

console.log('----------first method also by using function----------');
function bubbleSort(arr){
  for (var i = arr.length-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
       }
    }
  }
  return arr;
}
console.log(bubbleSort([7,5,2,4,3,9]));

console.log('----------second method----------');
var array = [8,5,6,1,4];
var temp = 0;
var flag = 1;
while (flag == 1){
  flag = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] > array[i+1]){
      temp = array[i];
      array[i] = array[i +1];
      array[i +1] = temp;
      flag = 1;
    } 
  }
}
console.log(array);