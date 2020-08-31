// This is my home work on Tuesday, 2020-08-18.
/* Return the length of the longest word in the provided sentence.
   Your response should be a number. For these algorithms you are allowed to use the split() method.

   findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
   findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
   findLongestWord("May the force be with you") should return 5.*/

function longest_word(sentence){
  var longest_word = '';
  var arr_sentence = my_sentence.split(' ');
  for (var i = 0; i < arr_sentence.length; i++){
    if (arr_sentence[i].length > longest_word.length){
      longest_word = arr_sentence[i];
    }
  }
  return 'The longest word is \"' + longest_word + '\" and its length is = ' + longest_word.length;
}


var my_sentence = "The quick brown fox jumped over the lazy dog, and was good.";
console.log(longest_word(my_sentence));