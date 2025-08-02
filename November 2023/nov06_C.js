/*
  Javascript startsWith(string) and endsWith() functions
*/

const str = 'Hello World, I am Test Variable.'

/*
  startsWith(string) function take one argument string and
  Check the string is staring with the given character(s)/String.
  if yes it will returns true else return false.
*/
const stratwithstr = str.startsWith('Hello')
console.log("str.startsWith('Hello'):", stratwithstr) // str.startsWith('Hello'): true

/* 
  endsWith() function get one argument string and
  Check the string is ending with the given character(s)/String.
  if yes it will returns true else return false.
*/
const endswithstr = str.endsWith('Variable.')
console.log("str.endsWith('Variable.'):", endswithstr) // str.endsWith('Variable.'): true
