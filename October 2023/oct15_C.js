/*
  Write a JavaScript program to count the number of arrays inside a given array.
  */
const arr = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]

const length = arr.length
let count = 0

for (let i = 0; i < length; i++) {
	if (Array.isArray(arr[i])) {
		count++
	}
}
console.log('Total numbers of array in given array is', count)
// Output: Total numbers of array in given array is 2

/*
  Javascript isArray() function
  javascript isArray() is a array function which return true if given argument is array or return false if given argument is not an array
*/
const arr1 = [1, 2, 3, 4]
const isArray = Array.isArray(arr1)
console.log('arr1 is an array?', isArray) // arr1 is an array? true

const arr2 = 'Hello I am testing string'
const isArray1 = Array.isArray(arr2)
console.log('arr2 is an array?', isArray) // arr2 is an array? false
