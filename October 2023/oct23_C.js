/*
  Javascript some() and every() function
*/

/*
  some()
  It returns a Boolean value.
  If at least one element in the array satisfies the provided testing condition, it returns true. Otherwise, false is returned.
*/
// Ex.
const arr = [100, 1550, -100, 2000, -500, 6000, 1000, -5000]

// Check is any of value in array is greated then 5000
const inArray = arr.some((element) => element > 5000)
console.log('Check is any of value in array is greated then 5000: ', inArray)
// Check is any of value in array is greated then 5000:  true

/*
  every()
  every() function Checks if every element in an array pass a test.
  every() function only returns a true if a all of the elements in an array satisfy the condition that we passed in.
*/
// Check all the values in an array is less then or equal to 6000
const inArray1 = arr.every((element) => element <= 6000)
console.log(
	'Check all the values in an array is less then or equal to 6000:',
	inArray1
)
// Check all the values in an array is less then or equal to 6000: true
