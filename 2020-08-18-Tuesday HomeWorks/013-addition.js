// This is my home work on Tuesday, 2020-08-18.
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.
var divisible_3_5 = [];
var sum = 0;
for (var i = 200; i <= 270; i++){
  if ((i % 3 == 0 || i % 5 == 0) && (i % 15 != 0)){
    divisible_3_5.push(i);
    sum += i;
  }
}
console.log(divisible_3_5, sum, 'is the sum of the divisible numbers')