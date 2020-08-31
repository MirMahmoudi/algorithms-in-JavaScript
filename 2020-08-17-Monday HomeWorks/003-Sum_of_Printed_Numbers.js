// This is my home work on Monday, 2020-08-17.
/* Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far.
   Your output should look similar to this:
   Number is: 0 Sum: 0
   Number is: 1 Sum: 1
   Number is: 2 Sum: 3
   Number is: 3 Sum: 6
   You are NOT allowed to use an array to solve this exercise.*/

var sum = 0;
for (var i = 0; i <= 135; i++){
  sum += i;
  console.log('Number is: ', i, ' Sum: ', sum);
}