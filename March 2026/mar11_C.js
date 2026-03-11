/**
 * JavaScript Object.freeze() and Object.seal() methods
 * These methods are used to stop modifying the object
 */

/**
 *
 */

/**
 * Object.freeze() Method
 * This method freezes object completely
 * - It not allow to add new property
 * - It not allow to modify property
 * - It not allow to delete property
 */
const obj1 = {
	name: 'Chirag',
	age: 25,
};

Object.freeze(obj1);

obj1.city = 'New York';
obj1.name = 'John';
delete obj1.age;

console.log('Object.freeze() => obj1', obj1);

/**
 * Object.seal() Method
 * - This method allow us to change property value
 * - It not allow to add new property
 * - It not allow to delete property
 */
const obj2 = {
	name: 'Chirag',
	age: 25,
};

Object.seal(obj2);

obj2.name = 'John';
obj2.city = 'New York';
delete obj2.age;

console.log('Object.seal() => obj2', obj2);
