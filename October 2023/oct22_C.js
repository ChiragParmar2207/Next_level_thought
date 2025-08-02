/*
  Javascript findIndex() and includes() functions
*/

/*
  findIndex(value)
  findIndex() function array no index find karava mate use thai che 
*/
// Ex. assume that we have an array and we want to find index of where 'apple' is placed
const strArr = ['banana', 'strawberry', 'apple', 'pineapple', 'cherry']
const index = strArr.findIndex((element) => element === 'apple')
console.log('Index of apple id', index) // Index of apple is 2

// Ex.
const accounts = [
	{
		owner: 'Jonas Schmedtmann',
		movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
		interestRate: 1.2,
		pin: 1111,
	},
	{
		owner: 'Jessica Davis',
		movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
		interestRate: 1.5,
		pin: 2222,
	},
	{
		owner: 'Steven Thomas Williams',
		movements: [200, -200, 340, -300, -20, 50, 400, -460],
		interestRate: 0.7,
		pin: 3333,
	},
	{
		owner: 'Sarah Smith',
		movements: [430, 1000, 700, 50, 90],
		interestRate: 1,
		pin: 4444,
	},
]
const index1 = accounts.findIndex(
	(element) => element.owner === 'Jessica Davis'
)
console.log('Jessica Davis`s account is on index', index) // Jessica Davis`s account is on index 2

/*
  includes()
  includes() function return true if a given value is includes in array else it return false
*/
// Ex. in above strArr we want ti find apple is includes in an array or not
const includes = strArr.includes('apple')
console.log('apple is includes in array', includes) // apple is includes in array true

// Ex. in accounts array we want to find Jessica Davis account is includes or not
/*
  Here we have some problem to use include in array of objects.
  if we want to find a value which is includes or not we have 2 way first we use some() function in javascript (we see some() function later)
  second is first we extract an array of all the owners names in seprate array and then use includes() function
  let's see how
*/
const ownerNameArr = accounts.map((element) => element.owner)
console.log('Account orners name array', ownerNameArr)
/*
  Output: 
  Account orners name array [
    'Jonas Schmedtmann',
    'Jessica Davis',
    'Steven Thomas Williams',
    'Sarah Smith'
  ]
*/
const includes1 = ownerNameArr.includes('Jessica Davis')
console.log('Jessica Davis`s account is includes', includes1) // Jessica Davis`s account is on index 2
// Jessica Davis`s account is includes true
