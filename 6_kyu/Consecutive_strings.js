// Description:

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
    
    var strarrLengths = [];
    for (i = 0; i < strarr.length; i++) {
      strarrLengths.push(strarr[i].length);
    }
    
    var lenArrSequence = [];
    var strArrSequence = [];
    var newStringLength = 0;
    var newString = "";
    var maxStringLength = 0;
    var longestString = "";
    var n = strarr.length;
    
    if (n>0 && n>=k && k>0) {
      for (i = 0; i < n-(k-1); i++) {
        lenArrSequence = strarrLengths.slice(i, i+k);
        strArrSequence = strarr.slice(i, i+k);
        for (j = 0; j < lenArrSequence.length; j++) {
          newStringLength += lenArrSequence[j];
          newString += strArrSequence[j];
        }
        if (newStringLength > maxStringLength) {
          maxStringLength = newStringLength;
          longestString = newString;
        }
        newStringLength = 0;
        newString = "";
      }
      
    }

    return longestString;
}
