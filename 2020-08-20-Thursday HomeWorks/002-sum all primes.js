// Sum all the prime numbers up to and including the provided number.
/*
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example,
2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/


// swap two number in an array
const checkPrime = (num, arr) => {
  for(let i = 0; i < arr.length; i++){
    if(num % arr[i] === 0){
      return false;
    }else{
      continue;
    }
  }
  return true;
}


// iterate between 2 and the provided number (here is 20), and check it if the numbers are prime, then push them in "prime" array.
let prime = [2];
for(let number = 2; number <= 20; number++){
  if(checkPrime(number, prime) === true){
    prime.push(number);
  }
}
console.log(prime);


// calculating to the sum of the prime numbers
let primeSum = 0;
for(let i = 0; i < prime.length; i++){
  primeSum += prime[i];
}
console.log(primeSum);