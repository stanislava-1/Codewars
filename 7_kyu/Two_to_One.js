// Description:

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  var joined = s1.concat(s2).split("").sort();
  var result = joined[0];
  for(i=1; i<joined.length; i++) {
    if (joined[i] !== result.charAt(result.length-1)) {
      result += joined[i];
    }
  }
  return result;
}