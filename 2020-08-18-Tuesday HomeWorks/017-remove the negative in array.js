// This is my home work on Tuesday, 2020-08-18.
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

var x = [1, -2, 4, 1, -5, 8, 7, -11, 5, 11, 12, 74, -5];
for (var i = 0; i < x.length; i++){
  if (x[i] < 0){
    x.splice(i, 1);
  }
}
console.log(x);