// This is my home work on Monday, 2020-08-17.
/*We want to play a "Game of 3s". Here's how you play it:
  First, you pick a random number. Then, repeatedly do the following:
  If the number is divisible by 3, divide it by 3.
  If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
  The game stops when you reach "1".*/

var n = 100;
console.log(n, ' is the number of Game of 3s!');
while (n > 1){
  if (n % 3 === 0){
    console.log(n, 0);
    n = n / 3;
  }
  else if (n % 3 === 1){
    console.log(n, -1);
    n = (n - 1) / 3;
  }
  else {
    console.log(n, +1);
    n = (n + 1) / 3;
  }
}
console.log(n, ' is the last number and the game is finished.');