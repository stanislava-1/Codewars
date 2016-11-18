// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, 
// you need to return it.

// Example:

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  var odd = [];
  var oddPos = [];
  for(i=0; i<array.length; i++) {
    if(array[i]%2 === 1) {
      odd.push(array[i]);
      oddPos.push(i);
    } 
  }
  odd.sort(function(a, b){return a-b});
  for(i=0; i<odd.length; i++) {
    array[oddPos[i]] = odd[i];
  }
  return array;
}