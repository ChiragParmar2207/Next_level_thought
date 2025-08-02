/*
  Javascript Object
  we can create new object with new keyword
*/
const obj = new Object() // Create empty object
console.log('create empty object:', obj) // create empty object: {}

const obj1 = new Object({ id: 1, name: 'abc', dob: '01/01/2000', age: 23 })
console.log('Create object with value:', obj1) // Create object with value: { id: 1, name: 'abc', dob: '01/01/2000', age: 23 }

/*
  we can add new key: value pair in an existing object
  for adding new value in object javascrit provide Object.assing() method
  Object.assign() method takes 2 argument first is a destination object and second is source which we want to add in an existing object
*/
Object.assign(obj1, { gender: 'Male' })
console.log('New value after adding new key: value pair:', obj1)
// New value after adding new key: value pair: { id: 1, name: 'abc', dob: '01/01/2000', age: 23, gender: 'Male' }

/*
  We can also delere key: value from object
*/
delete obj1['gender']
console.log('After delete gener property from object:', obj1)
// After delete gener property from object: { id: 1, name: 'abc', dob: '01/01/2000', age: 23 }

/*
  Also we can print any one property of object
  we can use two ways to do this
*/
console.log('obj1.name', obj1.name) // obj1.name abc
console.log(`obj['age']`, obj1['age']) // obj['age'] 23

// if we want to iterate all the key value pair we do
// First way
for (const key in obj1) {
	console.log('key:', key, ', Value:', obj1[key])
}
/*
  Output:
  key: id Value: 1
  key: name Value: abc
  key: dob Value: 01/01/2000
  key: age Value: 23
*/

// Second way
Object.keys(obj1).map((key) => {
	console.log('key:', key, ', Value:', obj1[key])
})
/*
  Output:
  key: id Value: 1
  key: name Value: abc
  key: dob Value: 01/01/2000
  key: age Value: 23
*/

/*
  Object.keys() function return all the keys which we have in object
*/
const keys = Object.keys(obj1)
console.log('All the keys in a object:', keys) // All the keys in a object: [ 'id', 'name', 'dob', 'age' ]

/*
  Object.values() function return all the values which we have in object
*/
const values = Object.values(obj1)
console.log('All the values in a object:', values) // All the values in a object: [ 1, 'abc', '01/01/2000', 23 ]
