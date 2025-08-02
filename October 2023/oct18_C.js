/*
  Javascript Math.trunc(string), Math.pow(number, number), Math.sqrt(number), Math.abs(number), Math.max(array) and Math.min(array) functions
*/

/*
  Math.trunc(string)
  Math.trunc(string) function string argument ley che and jo ae string argument number ma convert thai sake aem hoy to
  ae string ne number ma convert karine number return kare che.
*/
console.log("Math.trunc('9.6') : ", Math.trunc('9.6')) // Math.trunc('9.6') :  9
console.log("Math.trunc('abc') : ", Math.trunc('abc')) // Math.trunc('abc') :  NaN

/*
  Math.pow(number, number)
  Math.pow(number, number) function returns the value of x to the power of y (xy).
*/
console.log('Math.pow(2, 6) : ', Math.pow(2, 6)) // Math.pow(2, 6) :  64
// 2 * 2 * 2 * 2 * 2 * 2 = 64

/*
  Math.sqrt(number)
  Math.sqrt(number) aek argumnet ley che ane aenu square root return kare che
*/
console.log('Math.sqrt(25) : ', Math.sqrt(25)) // Math.sqrt(25) :  5

/*
  Math.abs(number)
  Math.abs(number) function aek number argument ley che and jo ae number minuse hot yo ani
  absolute positive number return kare che
*/
console.log('Math.abs(-6) : ', Math.abs(-6)) // Math.abs(-6) :  6
console.log('Math.abs(4) : ', Math.abs(4)) // Math.abs(4) : 4

const arr = [609, 73, 88, 387, 432, 234, 434, 54, 23, 654]
/*
  Math.max(array)
  Math.max(array) function numbers as a argument ley che ane ae numbers mathi sauthi moti value return kare che
*/
console.log('Math.max(...arr) : ', Math.max(...arr)) // Math.max(...arr) :  654

/*
  Math.min(array)
  Math.min(array) function numbers as a argument ley che ane ae numbers mathi sauthi nani value return kare che
*/
console.log('Math.min(...arr) : ', Math.min(...arr)) // Math.min(...arr) :  23

/*
  Uprana examle ma ...arr lakhyu che aene Spread operator kevay che 

  Spread Operator:
  Spread operator array badhi valune ne alag alag kare che like
  [1, 2, 3, 4, 5] = 1 2 3 4 5
  Math.max() and Math.min() function multiple number ley che arguments ma aetle aapne tya array ne alg alg elemts ma apvu pase aetle
  ex: Math.max(1, 2, 3, 4, 5) aa rite arguments ley che aapne tya array aapshu toh ae NaN(Not a Number) return karse
*/
