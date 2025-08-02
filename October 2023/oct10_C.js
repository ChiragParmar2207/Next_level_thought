/*
  isNaN() (Not a Number) function
  javascript isNaN() function check kare ke apne ae aeni argument ma je number aapyo che ae number che ke nai
  jo number hase to ae treu return karse and jo number nai hoy toh ae false return karse
  aapne isNaN() function ni argument koi string aapi che pn ae number na convert thai sake tem che toh aa function
  aene as a number j lese and true return karse
*/

/*
  Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
*/
const arr = [2, '11', '9b', 3, 'a2', false, 5, 7, 1]
let answer = 0
for (i in arr) {
	if (!isNaN(arr[i])) {
		answer += Number(arr[i])
	} else continue
}
console.log(`The total is ${answer}`)
// Output: The total is 29

/*
  jovo ahiya aek interesting vastu thai
  total aavyo che 29 but aapna integer numbers no sum toh 18 j thai che toh answer 29 kem aayo?
  me upar kidhu ae rite ke isNaN() function ne koi string argument mali che pn ae number ma convert thai sake aem che toh ae number ma j lese
  and aapne if condition ma ae string ne number ma convert karine j sum karo che aetle koi error nai aave
*/
