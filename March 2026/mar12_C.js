// JavaScript Console

// 1. console.log()
console.log('This is normal log');
console.log(42);
console.log(true);
console.log({ name: 'Alice', age: 25 });
console.log([1, 2, 3]);

// 2. console.info()
console.info('This is info log');

// 3. console.warn()
console.warn('This is warn log');

// 4. console.error()
console.error('This is error log');

// 5. console.dir()
const obj = {
	a: 1,
	b: { c: 2, d: { e: 3, f: { g: 4, h: { i: 5 } } } },
};
console.log(obj);
/**
 * Output: console.log(obj);
 * { a: 1, b: { c: 2, d: { e: 3, f: [Object] } } }
 */
console.dir(obj, { depth: null });
/**
 * Output: console.dir(obj, { depth: null });
  {
    a: 1,
    b: {
      c: 2,
      d: { e: 3, f: { g: 4, h: { i: 5 } } }
    }
  }
 */

// 6. console.table()
console.log('========== Table example start ==========');
const users = [
	{ name: 'Alice', age: 25, role: 'Admin' },
	{ name: 'Bob', age: 30, role: 'Editor' },
	{ name: 'Carol', age: 22, role: 'Viewer' },
];
console.table(users);
/**
 * Output: console.table(users);
  ┌─────────┬─────────┬─────┬──────────┐
  │ (index) │ name    │ age │ role     │
  ├─────────┼─────────┼─────┼──────────┤
  │ 0       │ 'Alice' │ 25  │ 'Admin'  │
  │ 1       │ 'Bob'   │ 30  │ 'Editor' │
  │ 2       │ 'Carol' │ 22  │ 'Viewer' │
  └─────────┴─────────┴─────┴──────────┘
*/

// Show only specific columns
console.table(users, ['name', 'role']);
/**
 * Output: console.table(users, ['name', 'role']);
  ┌─────────┬─────────┬──────────┐
  │ (index) │ name    │ role     │
  ├─────────┼─────────┼──────────┤
  │ 0       │ 'Alice' │ 'Admin'  │
  │ 1       │ 'Bob'   │ 'Editor' │
  │ 2       │ 'Carol' │ 'Viewer' │
  └─────────┴─────────┴──────────┘
 */
console.log('========== Table example end ==========');

// 7. console.time() and console.timeEnd() and console.timeLog()
console.time('fetchData');

setTimeout(() => {
	console.timeLog('fetchData'); // fetchData: 1002ms
}, 1000);

setTimeout(() => {
	console.timeEnd('fetchData'); // fetchData: 2004ms
}, 2000);

// 8. console.group() and console.groupEnd()
console.log('========== Group example start ==========');
console.group('User Info');
console.log('Name: Alice');
console.log('Age: 25');
console.group('Address');
console.log('City: New York');
console.log('Country: USA');
console.groupEnd();
console.groupEnd();
console.log('========== Group example end ==========');

// 9. console.clear()
// This method clear all the logs shown in the terminal
// console.clear();
