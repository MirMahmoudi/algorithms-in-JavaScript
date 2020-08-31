// This is my home work on Tuesday, 2020-08-18.
/* Create an algorithm that inserts the numbers from 1 to 135 into an array.
   while replacing the values that are divisible by 3 with the word "Fizz",
   the numbers that are divisible by 5 with the word "Buzz",
   and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
   Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]*/

var my_array = [];
for (var i = 1; i <= 135; i++){
  if (i % 3 === 0 && i % 15 !== 0){
    my_array.push('Fizz');
  }else if (i % 5 === 0 && i % 15 !==0){
    my_array.push('Buzz');
  }else if (i % 15 === 0){
    my_array.push('FizzBuzz');
  }else{
    my_array.push(i);
  }
}
console.log(my_array);