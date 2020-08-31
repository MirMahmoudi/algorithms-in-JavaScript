// This is my home work on Tuesday, 2020-08-18.
/* A 3x3 magic square is a 3x3 grid of the numbers 1-9
   such that each row, column, and major diagonal adds up to 15. Here's an example:
  8 1 6
  3 5 7
  4 9 2
  The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

  Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square.
  Use whatever format you want for the grid, such as a 2-dimensional array,
  or a 1-dimensional array of length 9,
  or a function that takes 9 arguments.
  You do not need to parse the grid from the program's input, but you can if you want to.
  You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.*/

var a = [];
for (var a0 = 1; a0 <= 9; a0++){
  for (var a1 = 1; a1 <= 9; a1++){
    if (a0 == a1){
      continue
    }else{
      var a2 = 15 - (a0 + a1);
    for (var a3 = 1; a3 <= 9; a3++){
      var a6 = 15 - (a0 + a3);
      for (var a4 = 1; a4 <= 9; a4++){
        var a7 = 15 - (a1 + a4);
        for (var a5 = 1; a5 <= 9; a5++){
          var a8 = 15 - (a2 + a5);
          if (a0 + a4 + a8 == 15 && a2 + a4 + a6 == 15){
            a.push(a0);
            a.push(a1);
            a.push(a2);
            a.push(a3);
            a.push(a4);
            a.push(a5);
            a.push(a6);
            a.push(a7);
            a.push(a8);
            console.log(a);
            var a = [];
          }
        }
      }
    }
    }
    
  }
}