// This is my home work on Wednesday, 2020-08-19.
/* Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
   If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
   Factorials are often represented with the shorthand notation n!
   By this code we can only calculate the factorial of natural numbers.
   For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 */

function n_factorial(n){
  var n_fact = 1;
  for (var i = 1; i <= n; i++){
    n_fact *= i;
  };
  return n_fact;
};

var n = 2/3;

if (typeof(n) != 'number'){ // for checking if the input is number or not.
  console.log('The factorial of ' + '"' + n + '"' + ' can not be calculated. Because ' + '"' + n + '"' + ' is not a number.');
}else if(Math.floor(n) === n){ //for checking if the number is integer or float.
  if (n == 0){ // for checking the input, if it is Zero.
    console.log('The factorial of', n , 'is 1.');
  }else if(n < 0){ // for checking the input, if it is a negative number.
    console.log(n + ' is negative number. Please try another number!');
  }else{ // in this line input is a natural number. By calling n_factorial function when can calculate the "n!".
    console.log('The factorial of ' + n + ' is: ' + n_factorial(n));
  };
}else{
  console.log(n + ' is not a natural number. Please try another number!')
};