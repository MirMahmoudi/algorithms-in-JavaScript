// This is my home work on Tuesday, 2020-08-18.
/* For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
   A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series.
   A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
   0 1 1 2 3 5 8 13 21...*/



console.log('----------first method: by using while loop without function----------');

var a = 1000000;
var fibo_arr = [0, 1];
var last_item = fibo_arr[fibo_arr.length - 2] + fibo_arr[fibo_arr.length - 1];
while (last_item < a){
  fibo_arr.push(last_item);
  last_item = fibo_arr[fibo_arr.length - 2] + fibo_arr[fibo_arr.length - 1];
}
console.log(fibo_arr);




console.log('----------second method: by using for loop with function----------');

function fibonacci(n){
  var fibo = [0, 1];
  for (var i = 2; i < n; i++){
    var temp = fibo[i - 1] + fibo[i - 2];
    if (temp < n){
      fibo.push(temp);
    }else{
      return fibo;
      break;
    }
  }
}

var m = 1000000;
console.log(fibonacci(m));