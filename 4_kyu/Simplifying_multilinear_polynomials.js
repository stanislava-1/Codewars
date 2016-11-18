// When we attended middle school were asked to simplify mathematical expressions like 
// "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that 
// to your pc and we'll see! 

// Write a function:

// simplify(poly)

// that takes a string in input, representing a multilinear non-constant polynomial in integers 
// coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same 
// expression has been simplified in the following way ( -> means application of simplify):

// All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
// "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"

// All monomials appears in order of increasing number of variables, e.g.:
// "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz" 

// If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
// "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz" 

// There is no leading + sign if the first coefficient is positive, e.g.:
// "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y" 

// N.B. to keep it simplest, the string in input is restricted to represent only multilinear 
// non-constant polynomials, so you won't find something like `-3+yx^2'. 
// Multilinear means in this context: of degree 1 on each variable.

// Warning: 
// the string in input can contain arbitrary variables represented by lowercase characters 
// in the english alphabet.

function sortByAlph(e1, e2) {
  var x = [e1, e2].sort();
  if(x.indexOf(e2)<x.indexOf(e1)) {
    return 1;
  } else {
    return -1
  }
}

function sortByLength(e1, e2) {
    // Convert to string and extract the length:
    var l1 = e1.length;
    var l2 = e2.length;
    return l2<l1 ? 1 : ( l2>l1 ? -1 : sortByAlph(e1, e2));
}


function simplify(poly){
  for(i=1; i<poly.length; i++) {
    if(poly.charAt(i) === "+" || poly.charAt(i) === "-") {
      poly = poly.slice(0, i) + " " + poly.slice(i);
      i++;
    }
  }
  poly = poly.split(" ");
  console.log(poly);

  for(i=0; i<poly.length; i++) {

    if(poly[i].charAt(0) !== "+" && poly[i].charAt(0) !== "-") {
      poly[i] = "+" + poly[i];
    }
    
    if(poly[i].charCodeAt(1)<48 || poly[i].charCodeAt(1)>57) {
      poly[i] = poly[i].slice(0,1) + "1" + poly[i].slice(1);
    }

    for(j=poly[i].length-1; j>0; j--) {

      if(poly[i].charCodeAt(j)<97) {
        poly[i] = [poly[i].slice(j+1).split("").sort().join(""), Number(poly[i].slice(0,j+1))];
        break;
      }
    }
  }

  console.log(poly);
  var poly2 = {};
  var order = []

  for(i=0; i<poly.length; i++) {
    if(Object.keys(poly2).indexOf(poly[i][0]) == -1) {
      poly2[poly[i][0]] = poly[i][1];
      order.push(poly[i][0]);
    } else {
      poly2[poly[i][0]] += poly[i][1];
    }
  }

  order = order.sort(sortByLength);

  for(key in poly2) {
      if(poly2[key] === 1) {
        poly2[key] = "+";
      } else if(poly2[key] > 1) {
        poly2[key] = "+" + poly2[key].toString();
      } else if(poly2[key] === -1) {
        poly2[key] = "-";  
      } else if(poly2[key] < -1) {
        poly2[key] = poly2[key].toString();
      } 
  }

  var poly3 = "";
  for(i=0; i<order.length; i++) {
    if(poly2[order[i]] !== 0) {
      poly3 += poly2[order[i]] + order[i];
    }
  }
  if(poly3.charAt(0) === "+") {
    poly3 = poly3.slice(1);
  }
  
  return poly3;
}