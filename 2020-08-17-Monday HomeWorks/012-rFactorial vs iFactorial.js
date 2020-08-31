// This is my home work on Monday, 2020-08-17.
/* Solve the Factorialize algorithm.
   First find an iterative solution and then a recursive solution.*/

console.log('----------first method also by using function----------');
var factorial = function(n){
  if (n < 0){
    return 'This number is smaller than zero.';
  }
  if (n == 0){
      return 1;
  }else{
      return n * factorial(n - 1);
  }
}
console.log(factorial(6));


console.log('----------second method also by using function----------');
var n = 5;
if (n < 0){
  console.log(n, ' is smaller than zero. Try another number!');
}else if (n == 0){
  console.log(n,'! = 1');
}else{
  var factorial = 1;
  for (var i = 1; i <= n; i++){
    factorial *= i;
  }
  console.log(n, '! = ', factorial);
}