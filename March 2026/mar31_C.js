/**
 * shallow copy vs deep copy in JavaScript
 *
 * JavaScript stores values in two ways: primitives (numbers, strings, booleans) are stored directly,
 * while objects and arrays are stored as references — think of it like a pointer to a location in memory.
 * This is what makes copying objects tricky
 */

/**
 * Shallow Copy
 * A shallow copy creates a new object, but only copies the top-level properties. If any of those properties
 * are themselves objects (nested), the copy still holds a reference to the same nested object — not a new one.
 */

// Spread operator {...obj} — the most common approach:
const original = { name: 'Alice', address: { city: 'Delhi' } };
const copy = { ...original };

copy.name = 'Bob'; // only changes copy
copy.address.city = 'Mumbai'; // changes BOTH original and copy!

console.log('original.name =>', original.name); // "Alice" (safe)
console.log('original.address.city => ', original.address.city); // "Mumbai" (oops!)

// Object.assign({}, obj) — same behavior as spread:
const originalObj = { x: 1, settings: { theme: 'dark' } };
const copyObj = Object.assign({}, originalObj);

copyObj.settings.theme = 'light'; // affects originalObj too!
console.log('originalObj.settings.theme => ', originalObj.settings.theme); // "light"

// Array.slice() / [...arr] — for arrays (shallow):
const originalArr = [
	[1, 2],
	[3, 4],
];
const copyArr = [...originalArr];

copyArr[0].push(99); // mutates the inner array!
console.log('originalArr[0] => ', originalArr[0]); // [1, 2, 99]

/**
 * Deep Copy
 * A deep copy creates a completely independent clone — every nested object is also recursively cloned.
 * Changes to the copy never affect the original.
 */

/**
 * structuredClone() — the modern standard (ES2022+):
 * This is the recommended way in modern JavaScript. It handles arrays, nested objects, Date, Map, Set, and more.
 */
const originalDeep = { name: 'Alice', address: { city: 'Delhi' } };
const copyDeep = structuredClone(originalDeep);

copyDeep.address.city = 'Mumbai';
console.log('originalDeep.address.city => ', originalDeep.address.city); // "Delhi" untouched!

// JSON.parse(JSON.stringify(obj)) — the classic hack:
const originalJson = { name: 'Alice', scores: [10, 20, 30] };
const copyJson = JSON.parse(JSON.stringify(originalJson));

copyJson.scores.push(99);
console.log('originalJson.scores => ', originalJson.scores); // [10, 20, 30]

// Limitations:
const obj = { fn: () => {}, d: new Date(), u: undefined };
const bad = JSON.parse(JSON.stringify(obj));
console.log('bad.fn => ', bad.fn); // undefined - functions are lost!
console.log('bad.d => ', bad.d); // string - Date becomes a string!
console.log('bad.u => ', bad.u); // key is missing - undefined is dropped!

// Recursive custom function — full control:
const deepClone = (value) => {
	if (value === null || typeof value !== 'object') return value;
	if (Array.isArray(value)) return value.map(deepClone);
	return Object.fromEntries(
		Object.entries(value).map(([k, v]) => [k, deepClone(v)])
	);
};

const originalDeepObj = { a: 1, b: { c: { d: 42 } } };
const copyDeepObj = deepClone(originalDeepObj);

copyDeepObj.b.c.d = 999;
console.log('originalDeepObj.b.c.d => ', originalDeepObj.b.c.d); // 42
