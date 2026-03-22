/**
 * SyntaxError
 * Thrown when the JavaScript engine encounters code that violates the language's grammar rules — the code can't even be parsed.
 */

// // Missing closing parenthesis
// if (true {
//   console.log('hello');
// }
// // SyntaxError: Unexpected token '{'

// // Invalid assignment target
// const 123abc = 'invalid';
// // SyntaxError: Invalid or unexpected token

/**
 * ReferenceError
 * Thrown when you try to access a variable that doesn't exist in the current scope
 */

// console.log(myVar);
// // ReferenceError: myVar is not defined

// const greet = () => {
// 	console.log(name); // 'name' not declared here
// };
// greet();
// // ReferenceError: name is not defined

/**
 * TypeError
 * The most common error. Thrown when a value is not of the expected type — like calling a non-function or accessing a property on null/undefined.
 */

// null.toString();
// // TypeError: Cannot read properties of null (reading 'toString')

// const num = 42;
// num();
// // TypeError: num is not a function

// undefined.length;
// // TypeError: Cannot read properties of undefined (reading 'length')

/**
 * RangeError
 * Thrown when a value is outside the allowed range for an operation.
 */

// new Array(-1);
// // RangeError: Invalid array length

// const num = 1;
// num.toFixed(200);
// // RangeError: toFixed() digits argument must be between 0 and 100

// const recurse = () => {
// 	recurse();
// };
// recurse();
// // RangeError: Maximum call stack size exceeded

/**
 * URIError
 * Thrown when encodeURI(), decodeURI(), or their component variants receive a malformed URI.
 */

// decodeURIComponent('%');
// // URIError: URI malformed

// decodeURI('%E0%A4%A');
// // URIError: URI malformed

/**
 * EvalError
 * Historically thrown for misuse of the eval() function. Modern engines rarely throw this, but it still exists for legacy compatibility.
 */

// // Modern JS engines don't throw this anymore, but it can be thrown manually:
// throw new EvalError('eval() was used incorrectly');
// // EvalError: eval() was used incorrectly

/**
 * InternalError
 * Thrown by some engines (notably Firefox/SpiderMonkey) when an internal error occurs
 * — like too much recursion or an extremely large switch statement. Not part of the official spec.
 */

/**
 * AggregateError
 * AggregateError is a newer built-in error type introduced in ES2021 (ES12) that represents multiple errors wrapped into a single error.
 * It's used when one operation needs to report several failures at once.
 * It inherits from Error and adds one key property: .errors — an array containing all the individual errors.
 */

// Promise.any([Promise.reject('A'), Promise.reject('B')]);
// // [AggregateError: All promises were rejected] { [errors]: [ 'A', 'B' ] }

const p1 = Promise.reject(new Error('Server A failed'));
const p2 = Promise.reject(new Error('Server B failed'));
const p3 = Promise.reject(new Error('Server C failed'));

try {
	await Promise.any([p1, p2, p3]);
} catch (err) {
	console.log(err instanceof AggregateError); // true
	console.log(err.message); // "All promises were rejected"
	console.log(err.errors);
	// [
	//   Error: "Server A failed",
	//   Error: "Server B failed",
	//   Error: "Server C failed"
	// ]
}
