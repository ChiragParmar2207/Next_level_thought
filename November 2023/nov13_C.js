/*
  Here we have an csv string now we need to convert this csv string to json array
*/

const csvData = `Name,Email,Phone
Harry Potter,harrypotter@hogwarts.edu,555-1234
Hermione Granger,hermionegranger@hogwarts.edu,555-5678
Ron Weasley,ronweasley@hogwarts.edu,555-2468
Luna Lovegood,lunalovegood@hogwarts.edu,555-3691
Draco Malfoy,dracomalfoy@hogwarts.edu,555-8024
Neville Longbottom,nevillelongbottom@hogwarts.edu,555-1357
Ginny Weasley,ginnyweasley@hogwarts.edu,555-2468
Cho Chang,chochang@hogwarts.edu,555-3691
Fred Weasley,fredweasley@hogwarts.edu,555-8024
Lavender Brown,lavenderbrown@hogwarts.edu,555-1357`

// Here i conver strong to array
const arr = csvData.split('\n')

// Here i seprate first array element as a header
const headers = arr[0].split(',')

// Here i remove first element from array because we don't need header in data
arr.shift()
let result = []

for (let i = 0; i < arr.length; i++) {
	let obj = {}
	// Here i split data with the ',' because all the data seprated with the ','
	const currentLine = arr[i].split(',')
	headers.forEach((h, i) => {
		obj[h] = currentLine[i]
	})
	result.push(obj)
}

// Print final data
console.dir(result)
