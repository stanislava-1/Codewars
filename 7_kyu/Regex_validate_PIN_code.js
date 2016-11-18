// Description:

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN (pin) {
  //return true or false
  var result = true;
  var len = pin.length;
  if(len === 4 || len === 6) {
    for(i=0; i<len; i++) {
      if(pin.charCodeAt(i)<48 || pin.charCodeAt(i)>57) {
        result = false;
      } 
    }
  } else {
    result = false;
  } 
  return result;
}