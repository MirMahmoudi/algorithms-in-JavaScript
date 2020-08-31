// This is my home work on Monday, 2020-08-17.
// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

// first way:
console.log('--------This is the first way to get answer--------')

for (var i = 1; i <= 135; i+=2){
  console.log(i);
}



//second way: by using IF condition:
console.log('--------This is the second way to get answer--------')

for (var i = 0; i <= 135; i++){
  if (i % 2 === 1){
    console.log(i);
  }
}