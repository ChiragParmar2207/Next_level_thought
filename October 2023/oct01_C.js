// object creation in javascript

// 1. Object Literal (Most common and recommended way)
const obj1 = {
	id: 1,
	name: 'abc',
};
console.log('obj1: ', obj1);

/*
  Aa JavaScript ma object create karva ni sauthi simple ane most used method che.
  Aa direct object create kare che with key-value pairs.
  Recommended because:
  - readable che
  - simple che
  - fast che
*/

// 2. Using new Object()
const obj2 = new Object({
	id: 2,
	name: 'def',
});
console.log('obj2: ', obj2);

/*
  new Object() thi pan object create kari shakay che.
  Pan internally aa object literal jevu j che.
  Example:
  new Object({ id: 2 })

  almost same as:
  { id: 2 }

  Modern JavaScript ma object literal vadhu preferred che.
*/

// 3. Using Object.create()
const obj3 = Object.create(obj1);
console.log('obj3: id', obj3.id);
console.log('obj3: name', obj3.name);

/*
  Object.create(obj1) new object create kare che
  pan aa obj1 ni copy nathi karto.
  Aa obj3 no prototype obj1 banave che.
  Means:
  obj3 pase own properties nathi,
  pan obj1 ni properties prototype chain thi access thay che.

  Example:
  obj3.id works because JS obj1 mathi value lese.

  Important:
  obj3.hasOwnProperty('id') => false
*/

// 4. Using Object.assign()
const obj4 = Object.assign({}, obj1, { gender: 'male' });
console.log('obj4:', obj4);

/*
  Object.assign target object ma source object ni values copy kare che.
  Syntax:
  Object.assign(target, source)

  Ahiya:
  {} = empty target object
  obj1 = source
  { gender: 'male' } = extra value

  Result:
  obj4 ma new object male che
  obj1 unchanged rahe che.

  Important:
  Jo direct obj1 target tarike aapo:

  Object.assign(obj1, { gender: 'male' })

  to original obj1 change thai jay.
*/

// 5. Using Constructor Function
function CreateObject() {
	return {
		id: 5,
		name: 'ghi',
	};
}

const obj5 = new CreateObject();
console.log('obj5:', obj5);

/*
  Function ne new sathe call kariye to constructor function tarike work kare che.

  JavaScript internally:
  1. empty object create kare
  2. this bind kare
  3. function execute kare
  4. jo object return hoy to returned object male

  Important naming convention:
  Constructor function capital letter thi lakhvani.

  Example:
  CreateObject()

  jo function object return na kare to empty object return thay.
*/

// Extra Example: Constructor with this

function User() {
	this.id = 10;
	this.name = 'xyz';
}

const user1 = new User();

console.log('user1:', user1);

/*
  Aa constructor function nu standard use che.

  this newly created object ne refer kare che.
*/

// Check prototype behavior
console.log(obj3.name); // abc
console.log(obj3.hasOwnProperty('name')); // false

/*
  name obj3 ma directly nathi
  prototype obj1 mathi male che.
*/
