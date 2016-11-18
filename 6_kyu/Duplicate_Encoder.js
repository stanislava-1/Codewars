// Description:

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("

function duplicateEncode(word) {
  word = word.toLowerCase();
  var wordNew = word;
  for(i=0; i<word.length; i++) {
    if(word.slice(0,i).indexOf(word[i]) !== -1 || word.slice(i+1).indexOf(word[i]) !== -1) {
      wordNew = wordNew.split(word[i]).join(")");
    } else {
      wordNew = wordNew.slice(0,i) + wordNew.slice(i).replace(wordNew[i], "(");
    }
  }
  return wordNew;
}
