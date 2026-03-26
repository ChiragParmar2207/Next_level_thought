/**
 * What is Currying?
 * Currying is a functional programming technique in JavaScript where a function that takes multiple arguments
 * is transformed into a sequence of nested functions, each of which takes a single argument
 *
 * Instead of calling f(a, b, c), you call f(a)(b)(c).
 */

/**
 * Basic Currying (Manual)
 */

// Normal function
const add = (a, b, c) => {
	return a + b + c;
};
const result = add(1, 2, 3);
console.log('==========> result', result); // 6

// Curried version
const curriedAdd = (a) => {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
};
const curriedAddResult = curriedAdd(1)(2)(3);
console.log('==========> curriedAddResult', curriedAddResult); // 6

// Arrow function shorthand (same thing)
const curriedAddArrow = (a) => (b) => (c) => a + b + c;
const curriedAddArrowResult = curriedAddArrow(1)(2)(3);
console.log('==========> curriedAddArrowResult', curriedAddArrowResult); // 6

console.log('==================================================');
/**
 * A Generic curry() Helper
 */

const curry = (fn) => {
	return function curried(...args) {
		// If enough arguments are provided, call the original function
		if (args.length >= fn.length) {
			return fn(...args);
		}
		// Otherwise, return a function that collects more arguments
		return function (...moreArgs) {
			return curried(...args, ...moreArgs);
		};
	};
};

const sum = (a, b, c) => a + b + c;

const addSum = curry(sum);

console.log('addSum(1)(2)(3) => ', addSum(1)(2)(3)); // 6
console.log('addSum(1, 2)(3) => ', addSum(1, 2)(3)); // 6  <- partial application!
console.log('addSum(1)(2, 3) => ', addSum(1)(2, 3)); // 6
console.log('addSum(1, 2, 3) => ', addSum(1, 2, 3)); // 6  <- still works like normal

console.log('==================================================');

/**
 * Partial Application
 * Currying's biggest benefit is partial application — pre-filling some arguments to create reusable, specialized functions
 */

const multiply = curry((a, b) => a * b);

// Create specialized multipliers
const double = multiply(2);
const triple = multiply(3);
const tenX = multiply(10);

console.log('double(5) => ', double(5)); // 10
console.log('triple(5) => ', triple(5)); // 15
console.log('tenX(5) => ', tenX(5)); // 50

// Works great with array methods
console.log('[1, 2, 3, 4, 5].map(double) => ', [1, 2, 3, 4, 5].map(double)); // [2, 4, 6, 8, 10]
console.log('[1, 2, 3, 4, 5].map(triple) => ', [1, 2, 3, 4, 5].map(triple)); // [3, 6, 9, 12, 15]

console.log('==================================================');

/**
 *  Real World: Configurable Logger
 * Currying shines when you have shared configuration that varies across calls:
 */

const log = curry((level, timestamp, message) => {
	console.log(`[${level.toUpperCase()}] ${timestamp}: ${message}`);
});

// Pre-fill the log level
const info = log('info');
const warn = log('warn');
const error = log('error');

// Pre-fill level + timestamp
const infoNow = info(new Date().toISOString());

infoNow('Server started'); // [INFO] 2026-...: Server started
infoNow('Request received'); // [INFO] 2026-...: Request received
warn(new Date().toISOString())('Low memory'); // [WARN] 2026-...: Low memory
error(new Date().toISOString())('Database connection failed'); // [ERROR] 2026-...: Database connection failed

console.log('==================================================');

/**
 * Real World: API Query Builder
 */

const fetchData = curry(async (baseURL, endpoint, params) => {
	const query = new URLSearchParams(params).toString();
	const res = await fetch(`${baseURL}/${endpoint}?${query}`);
	return res.json();
});

// Lock in the base URL for your environment
const fetchFromAPI = fetchData('https://api.example.com');
const fetchFromDev = fetchData('https://dev.example.com');

// Lock in the endpoint
const getUsers = fetchFromAPI('users');
const getProducts = fetchFromAPI('products');

// Final call with params
getUsers({ page: 1, limit: 10 });
getProducts({ category: 'electronics', sort: 'price' });
