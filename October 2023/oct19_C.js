/*
  Javascript filter() function

  array.filter(callbackFunction)
  Here array is the array to be filtered and callbackFunction is a function that is used to test each element in the array.
  The callback function takes three arguments:
  currentValue: The current element being processed.
  index: The index of the current element.
  array: The array that is being filtered.

  filter() function is used to create a new array with elements that pass a test provided by a function
  Or
  filter() fucntion of Array instances creates a shallow copy of a portion of a given array,
  filtered down to just the elements from the given array that pass the test implemented by the provided function.
  */
// Ex: mani lo aapni pase aek numbers no array che and ae array mathi aapne aevi values joiti che je even number hoy
const arr = [10, 58, 69, 16, 85, 89, 48, 65]
const evenNumberArr = arr.filter((element) => {
	return element % 2 === 0 // if the number is divisible by two then it's an even number
})
/*
  uparni rit ma aapne return statment lakhiyu che jo ae na lakhavu hoy to aene biji rite pn lakhi sakay

  const evenNumberArr = arr.filter((element) => element % 2 === 0)

  aapne kai pn return kara vagar direct condition muki daiae to ae jo condition match thai toh ae value return kari dese
*/
console.log('Even numbers list:', evenNumberArr) // Even numbers list: [ 10, 58, 16, 48 ]

// Ex. aapni pase aek string elements no aek array che aemathi aapne aeva elements joiae che jeni length 6 karta vadhare hoy
const strArr = ['apple', 'banana', 'strawberry', 'pineapple', 'cherry']
const newStrArr = strArr.filter((element) => {
	return element.length > 6
})
console.log(
	'String array where every element lengh should be more then 6:',
	newStrArr
)
// String array where every element lengh should be more then 6: [ 'strawberry', 'pineapple' ]

// Ex. aapni pase aek objects no array che jo aapne aemathi aevu
// find karvu che ke jeni salary 2500 karata vadhare che aeva objects joiae che
const objArr = [
	{ id: 1, name: 'abc', salary: 26000 },
	{ id: 2, name: 'pqr', salary: 30000 },
	{ id: 3, name: 'mno', salary: 24000 },
	{ id: 4, name: 'xyz', salary: 35000 },
	{ id: 5, name: 'stu', salary: 20000 },
]
const salaryObj = objArr.filter((element) => element.salary > 25000)
console.log('Objects which salary is greated then 25000:', salaryObj)
/*
  Output: 
  Objects which salary is greated then 25000: [
    { id: 1, name: 'abc', salary: 26000 },
    { id: 2, name: 'pqr', salary: 30000 },
    { id: 4, name: 'xyz', salary: 35000 }
  ]
*/
