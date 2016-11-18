// Description:

// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

// difference([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// difference([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  for(i=0; i<b.length; i++) {
  	for(j=0; j<a.length; j++) {
  		if(a[j] === b[i]) {
  			a.splice(j, 1);
  			j--
  		}
  	}
  }
  return a;
}