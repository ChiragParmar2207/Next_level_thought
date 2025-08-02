// Types of functions in javascript

let a = 5
let b = 3
console.log('a =>', a) // a => 5
console.log('b =>', b) // b => 3

// Function Declaration
// This is a traditional way to write a function in javascript
function fun1(a, b) {
	return a + b
}
console.log('fun1 => ', fun1(a, b)) // fun1 =>  8

// Function Expression or Anonymous Functions
// Here we define a function using a variable and store the returned value in that variable
/* 
  function() {
    // Function Body...
  } 

  or

  ( () => {
    // Function Body...
  } )();
*/

const fun2 = function (a, b) {
	return a + b
}
console.log('fun2 => ', fun2(a, b)) // fun2 =>  8

// ES6 Arrow function
// Arrow function is introduce in ES6
// Arrow function always return some value. if we not write return it will return undefined
// we can write arrow function in 2 way
const fun3 = (a, b) => a + b
console.log('fun3 => ', fun3(a, b)) // fun3 =>  8

const fun4 = (a, b) => {
	if (a > b) return 'a is big'
	else return 'b is big'
}
console.log('fun4 => ', fun4(a, b)) // fun4 =>  a is big

// Here see this Arrow function return undefined
const fun5 = () => {
	console.log('a => ', a, ' b => ', b) // a =>  5  b =>  3
}
console.log('fun5 => ', fun5(a, b)) // fun5 =>  undefined

// Callback Functions
// Callback functions are functions passed as arguments to other functions to be executed later
function fun6(callback) {
	// Fetch data from a source
	const data = 'Some data'
	callback(data) // data =>  Some data
}

function fun7(data) {
	console.log('data => ', data)
}
fun6(fun7)

// Note now a days mostly we userd arrow function
// Javascript is mostly used programming language world wide
