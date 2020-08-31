// This is my home work on Tuesday, 2020-08-18.
function shift_array(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    var temp = arr[i];
    arr.splice(i,1);
    arr.push(temp);
  }
  return arr
}

function str_to_arr(str){
  var temp_arr = [];
  for (var j = 0; j < str.length; j++){
    temp_arr.push(str[j]);
  }
return temp_arr;
}

var my_string = 'hello';
var new_string = shift_array(str_to_arr(my_string)).join('');

if (my_string === new_string){
  console.log(true + ' => ' + my_string + ' is palindrome word. and its palindrome is ' + new_string);
}else{
  console.log(false + ' => ' + my_string + ' is not palindrome word. and ' + new_string + ' is not its palindrome.');
}