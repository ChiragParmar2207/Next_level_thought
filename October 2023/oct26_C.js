/*
  Javascript trim(), trimStart() and trimEnd() methods
  Above all the methods only remove whitespace from the string and it is not modifiy original string
*/

const str = '   Hello world!   '

/*
  trim()
  trim() method of String values removes whitespace from both ends of this string and returns a new string,
*/
const trim = str.trim()
console.log(`After trim() method used: "${trim}"`) // After trim() method used: "Hello world!"

/*
  trimStart()
  trimStart() method of String values remove whitespace from start of the sting and return a new string.
*/
const trimStart = str.trimStart()
console.log(`After trimStart() method used: "${trimStart}"`) // After trimStart() method used: "Hello world!   "

/*
  trimEnd()
  trimEnd() method of String values remove whitespace from end of the sting and return a new string.
*/
const trimEnd = str.trimEnd()
console.log(`After trimEnd() method used: "${trimEnd}"`) // After trimEnd() method used: "   Hello world!"
