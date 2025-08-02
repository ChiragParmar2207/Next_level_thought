/*
  Javascript reduce() function
  reduce() function Reduce the values of an array to a single value (going left-to-right).
  reduce function no use aapne array na all elements no sum karvo hoy ke pachhi
  array mathi minimum and maximum value nukalvi hoy aena mate thai che
*/
const arr = [5, 9, 3, 1, 7, 4, 10]

// Find sum of all the element in an array
const sum = arr.reduce((acc, cur) => acc + cur, 0)
console.log('Sum of all elements in array', sum) // Sum of all elements in array 39

// Find minimum element of an array
const min = arr.reduce((acc, cur) => {
	if (acc < cur) return acc
	else return cur
}, arr[0])
console.log('Minimum of all elements in array', min) // Minimum of all elements in array 1

// Find maximum element of an array
const max = arr.reduce((acc, cur) => {
	if (acc > cur) return acc
	else return cur
}, arr[0])
console.log('Maximum of all elements in array', max) // Maximum of all elements in array 10
