/*
  Javascript sort() function
  sort() function sort all the elements of array
*/
// Ex. 1
const strArr = ['banana', 'strawberry', 'apple', 'pineapple', 'cherry']
const sortedArr1 = strArr.sort()
console.log('Ex. 1: ', sortedArr1) // Ex. 1:  [ 'apple', 'banana', 'cherry', 'pineapple', 'strawberry' ]

// Ex. 2
const numArray = [100, 1550, -100, 2000, -500, 6000, 1000, -5000]
const sortedArr2 = numArray.sort()
console.log('Ex. 2: ', sortedArr2) // Ex. 2:  [-100, -500, -5000, 100, 1000,  1550, 2000, 6000]
// in above example you can see the sorting is wrong right?
// By default, the sort() method converts the elements to strings and sorts them lexicographically.
// This can lead to incorrect sorting of numbers because they are treated as strings,
// and the sorting is based on their character codes.
// for above example we can do like this

// Ex. 3 ascending order
const sortedArr3 = numArray.sort((a, b) => a - b)
console.log('Ex. 3: ', sortedArr3) // Ex. 3:  [-5000, -500, -100, 100, 1000, 1550, 2000, 6000]

// Ex. 4 descending oder
const sortedArr4 = numArray.sort((a, b) => b - a)
console.log('Ex. 4: ', sortedArr4) // Ex. 4:  [6000,  2000, 1550, 1000,   100, -100, -500, -5000]
