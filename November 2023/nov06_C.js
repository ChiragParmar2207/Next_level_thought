/*
  Javascript startsWith(string) and endsWith(string) functions
*/

const str = 'Hello World, I am Test Variable.';

/*
  startsWith(string) function take one argument string and
  Check the string is staring with the given character(s)/String.
  if yes it will returns true else return false.
*/
const startWithStr = str.startsWith('Hello');
console.log("str.startsWith('Hello'):", startWithStr); // str.startsWith('Hello'): true

/* 
  endsWith() function get one argument string and
  Check the string is ending with the given character(s)/String.
  if yes it will returns true else return false.
*/
const endsWithStr = str.endsWith('Variable.');
console.log("str.endsWith('Variable.'):", endsWithStr); // str.endsWith('Variable.'): true
