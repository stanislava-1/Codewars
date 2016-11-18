// Description:

// Given two strings s1 and s2, we want to visualize how different the two strings are. 
// We will only take into account the lowercase letters (a to z). 
// First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. 
// In the following we will not consider letters when the maximum of their occurrences 
// is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" 
// where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. 
// In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears 
// as many times as its maximum if this maximum is strictly greater than 1; these letters will 
// be prefixed by the number of the string where they appear with their maximum value and :. 
// If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings will be in decreasing order of their length and when they have 
// the same length sorted alphabetically (more precisely sorted by codepoint); the different 
// groups will be separated by '/'.

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

function charCount(string, number) {
  var charList = {};
  for(i=97; i<123; i++) {
  	var key = String.fromCharCode(i);
    charList[key] = number;
    for(j=0; j<string.length; j++) {
      if(string.charAt(j) === key) {
        charList[key] += key;
      }
    }
  }
  return charList;
}

function deepSort( e1 , e2 ) {
    // Convert to string and extract the length:
    var l1 = e1.length;
    var l2 = e2.length;
    var c1 = e1.charCodeAt(0);
    var c2 = e2.charCodeAt(0);
    var c12 = e1.charCodeAt(2);
    var c22 = e2.charCodeAt(2)
    return l1<l2 ? 1 : ( l1>l2 ? -1 : (c1>c2 ? 1 : (c1<c2 ? -1 : (c12>c22 ? 1 : -1))));
}


function mix(s1, s2) {
	var list1 = charCount(s1, "1:");
	var list2 = charCount(s2, "2:");
	var listMix = {};
	var listMixArr = [];

	for(i=97; i<123; i++) {
		var key = String.fromCharCode(i);
		if(list1[key].length === list2[key].length) {
			listMix[key] = "=:" + list1[key].slice(2);
		} else if(list1[key].length > list2[key].length) {
			listMix[key] = list1[key];
		} else {
			listMix[key] = list2[key];
		}
		if(listMix[key].length < 4) {
			delete listMix[key];
		} else {
			listMixArr.push(listMix[key]);
		}
	}

	listMixArr = listMixArr.sort(deepSort);
	var result = "";

	for(i=0; i<listMixArr.length; i++) {
		result += listMixArr[i] + "/";
	}

	return result.slice(0,-1);
}