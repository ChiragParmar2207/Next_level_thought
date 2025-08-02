/*
 * Separate Number From String
 * Sum Of All Numbers
 * Count Total No Of Letters In String
 * return round of (sum / total no of letter)
 */
function strOps(str) {
	console.log('Given String is ', str)
	let sum = 0

	// Extract numbers from a given string
	const numArr = str.split('').filter((value) => {
		return Number.isInteger(Number.parseInt(value))
	})

	// Sum of all numbers
	numArr.forEach((value) => {
		sum += Number.parseInt(value)
	})

	//
	const lettersLength = str.split('').filter((value) => {
		return value.match(/[a-zA-Z]/)
	}).length

	console.log('Answer is ', Math.round(sum / lettersLength))
}

strOps('Hello5,23-32,defge')
strOps('1o5,2e3d6fg9jhvjhv32s2')

/*
  Updar na exmple ma aevu key che ke aek string aapi che aema numbers letters ne ae badhu che have aapne aevu karvnu che ke 
  ae string ma jetla individual number che aeno sum karvano che and jetla letters che ae count karavana che
  and last ma numbers na sun and letters na count thi divide karavana che and je answer aave aene round kari ne output print karvanu che
*/
