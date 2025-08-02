// Javascript slice(), substring() and substr() functions

const str = 'Hello World, I am Test Variable. I am using for experiment.'

/*
  slice()
  String.prototype.slice(startIndex, endIndex) return new string
  slice function 2 arguments ley che and aek new string return kare che
  slice function ni peli argument start index and bijo element end index (banne ma number j aapvana)
  start index mtlb aapni pase aek string che ae aena 5 ma indes thi last element mtlb ke aapne biji ae argument apvi tya sudhi ma vachhe je 
    string aavti hoy ae return kare
  example: aapni pase che aek string che like "Hello World, I am Test Variable. I am using for experiment."
  have mare aa string mathi 5 ma index thi 15 ma index sudhima je string aavti hoy ae joic che eana mate slice function no use thai
  slice function ni biji argument optionl che jo ae na aapvi toh pn chale error na aave,
  jo aapne biji argument na aapiae toh ae start index thi last sudhinu badhu return kare che
*/

// Example 1
const newStr1 = str.slice(5, 15)
console.log('str.split(5, 15)', newStr1) // Output: str.split(5, 15)  World, I

// Example 2
const newStr2 = str.slice(8)
console.log('str.slice(8)', newStr2) // Output: str.slice(8) rld, I am Test Variable. I am using for experiment.

/*
  substring()
  String.prototype.substring(startIndex, endIndex) return new string
  substring() function works same as slice() function
  it takes 2 argument second argument is optional
  and return a new string
*/
// Example 1
const newStr3 = str.substring(5, 15)
console.log('str.substring(5, 15)', newStr3) // Output: str.split(5, 15)  World, I

// Example 2
const newStr4 = str.substring(8)
console.log('str.substring(8)', newStr4) // Output: str.slice(8) rld, I am Test Variable. I am using for experiment.

/*
  substr()
  String.prototype.substr(startIndex, length) return new string
  Javascript substr() function return new string based on its arguments.
  substr() function 2 arguments ley che jema slice() and substring() function ni jem biji argument optional che
  substr() function ni first argument start index chre and biji argument string ni length che
  like start index(first argument) 5 che and biji argument 10 che toh ae string ma 5 ma index thi 10 ma index sudhini new string return karse
*/
const newStr5 = str.substr(5, 15)
console.log('str.substr(5, 15)', newStr5) // Iutput: str.substr(5, 10)  World, I am Te

/*
  Note: 
  substring()
  - If start > stop, then substring will swap those 2 arguments.
  - If indexStart >= str.length, an empty string is returned.
  - If either argument is negative or is NaN, it is treated as if it were 0.
  - If start equals stop: returns an empty string

  slice()
  - If start > stop, slice() will return the empty string. ('')
  - If the First Argument is Greater than the Second slice() doesn't perform 

  substr()
  - substr() now Deprecated. now devlopers not use this function
  - If start >= str.length, an empty string is returned.
  - If length < 0, an empty string is returned.
*/
