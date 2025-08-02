/*
  Javascript find() function
  find() function array mathi koi aek perticular value find karva and ae value par kaik operation karva pate thai che
  find() function find a value in an array and return first value which is true for a given condition.
  Returns the value of the first element in an array that pass a test. If no match is found, it returns undefined
*/
const arr = [55, 2, 6, 9, 7, 42, 56, 51, 21, 65, 32]
const find1 = arr.find((element) => element % 5 === 0)
console.log('Find a first value that is divisible by 5:', find1) // Find a first value that is divisible by 5: 55

// Ex. we have an array of bank account holders we want to find Jessica Davis account details
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
const findAccount = accounts.find(
	(element) => element.owner === 'Jessica Davis'
)
console.log('Jessica Davis acccount details', findAccount)
/*
  Jessica Davis acccount details 
  {
    owner: 'Jessica Davis',
    movements: [
      5000,  3400,  -150,
      -790, -3210, -1000,
      8500,   -30
    ],
    interestRate: 1.5,
    pin: 2222
  }
*/
