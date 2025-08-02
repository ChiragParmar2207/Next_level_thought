/*
  Javascript indexOf() and lastIndexOf() functions
  both functions are used in array and string 
*/

const movements = [100, 1550, -100, 2000, -500, 1550, 6000, 1000, 2000 - 5000]
const str = "I'm learn javascript."

/*
  indexOf() Search the array for a given element and returns its index number in array where it is placed
  if value not found it will return -1
  jo koi value ni aapne index find kariae chhiae pn ae value array ma multiple times aaveli che toh indexOf function
  first time ae value match thai jase aeno index number aapi dese baki ni badhi values ne ae ignore karse.
*/
const indexOf = movements.indexOf(1550)
console.log('movements.indexOf(1550):', indexOf) // movements.indexOf(1550): 1

const strIndexOf = str.indexOf('a')
console.log('str.indexOf("a"):', strIndexOf) // str.indexOf("a"): 6

/*
  lastIndexOf() Give index where the given value is placed it give only last occurrence in string
  if value not found it will return -1
  lastIndexOf tyre use thai jyre apne koi value serch karvi che and ae value multiple time array ma aaveli che
  and aapne ae check karvu che ke ae value last kaya index par che
*/
const lastIndexOf = movements.lastIndexOf(1550)
console.log('movements.lastIndexOf(1550):', lastIndexOf) // movements.lastIndexOf(1550): 5

const strLastIndexOf = str.lastIndexOf('a')
console.log('str.lastIndexOf("a"):', strLastIndexOf) // str.lastIndexOf("a"):13
