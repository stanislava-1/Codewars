// You have to create a function that takes a positive integer number and returns the next bigger 
// number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(n){
  n = n.toString().split("");

  for(i=n.length-1; i>0; i--) {
    var front = n.slice(0, i);
    var end = n.slice(i).sort(function(a,b) {return a-b});
    for(j=0; j<end.length; j++) {
      if(end[j] > n[i-1]) {
        var change = end[j];
        end.splice(j, 1);
        end.push(n[i-1]);
        front.pop();
        n = front.join("") + change + end.sort(function(a, b){return a-b}).join("");
        break;
      }
    }
    if(typeof n == "string") {
      break;
    }
  }

  if(typeof n != "string") {
    return -1;
  }

  return Number(n);
}