// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order 
// of the strings of a1 which are substrings of strings of a2.

// Example 1:

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:

// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// Beware: r must be without duplicates.

function inArray(array1,array2){
  var r = []
  for(i=0; i<array1.length; i++) {
    for(j=0; j<array2.length; j++) {
      if(array2[j].indexOf(array1[i]) !== -1) {
        r.push(array1[i]);
        break;
      }
    }
  }
  r.sort();
  return r;
}