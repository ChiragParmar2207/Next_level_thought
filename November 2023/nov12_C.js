/*
  Here we have an object we need to remove '', '-', 'N/A' from that object
*/

const jsonData = {
	name: {
		first: 'Robert',
		middle: '',
		last: 'Smith',
	},
	age: 25,
	DOB: '-',
	hobbies: ['running', 'coding', '-'],
	education: {
		highschool: 'N/A',
		college: 'Yale',
	},
}
// First loop through all key
for (key in jsonData) {
	// Check key has a value object
	if (typeof jsonData[key] === 'object') {
		// Check key has a value array
		if (Array.isArray(jsonData[key])) {
			let arr = jsonData[key]
			let arr1 = []
			// loop value array
			for (let i = 0; i < arr.length; i++) {
				// find array is '-' value or not
				if (jsonData[key][i] !== '-') {
					arr1.push(arr[i])
				}
			}
			jsonData[key] = arr1
		}
		// check if value is '' or N/A
		else {
			for (k in jsonData[key]) {
				if (jsonData[key][k] === '' || jsonData[key][k] === 'N/A') {
					delete jsonData[key][k]
				}
			}
		}
	}
	if (jsonData[key] === '-') {
		delete jsonData[key]
	}
}

console.log(JSON.stringify(jsonData))

// Here I try to solve this problem using my login you can try with your logic.
// maybe you can solve this problem batter time coplexity and less code so you must try your own way
