/*
  Javascript Math.round(), Math.ceil() and Math.floor() functions
*/

/*
  Math.round()
  Math.round() function rounds a number to the nearest integer.
  like if a number is 4.6 then it will return 5 and
  if a number is 4.4 then return 4
*/
console.log('Math.round(4.49)', Math.round(4.49)) // Math.round(4.49) 4
console.log('Math.round(4.50)', Math.round(4.5)) // Math.round(4.50) 5

/*
  Math.ceil()
  Math.ceil() function rounds up a number and returns the smallest integer greater than or equal to a given number.
  in Other words The Math.ceil() function in JavaScript is used to round the number passed as a parameter to
  its nearest integer in an Upward direction of rounding i.e towards the greater value.
*/
console.log('Math.ceil(4.89)', Math.ceil(4.89)) // Math.ceil(4.89) 5
console.log('Math.ceil(4.23)', Math.ceil(4.23)) // Math.ceil(4.23) 5

/*
  Math.floor()
  Math.floor() function rounds down a number and returns the largest integer less than or equal to a given number.
  In other words The Javascript Math.floor() method is used to round off the number passed as a parameter to 
  its nearest integer in a Downward direction of rounding i.e. towards the lesser value.
*/
console.log('Math.floor(4.24)', Math.floor(4.24)) // Math.ceil(4.24) 4
console.log('Math.floor(4.89)', Math.floor(4.89)) // Math.ceil(4.89) 4
