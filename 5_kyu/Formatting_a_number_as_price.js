// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51

// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, 
// cents need to be truncated to 2 decimals, in the case that the decimal part of the number 
// is 1 character long or none you should add 0's so that the result will always have 
// 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function(number) {
  var n = 0;
  if(number<0) {
    n=1;
  }

  if(typeof(number) == "number") {
    number = number.toString();
    if(number.indexOf(".") !== -1) {
      number = number.slice(0, number.indexOf(".") + 3);
    }
    number = (Number(number).toFixed(2)).toString();
    for(i=number.indexOf(".")-3; i>n; i-=3) {
      number = number.slice(0, i) + "," + number.slice(i);
    }
    return number;
  }

  return "NaN";
}