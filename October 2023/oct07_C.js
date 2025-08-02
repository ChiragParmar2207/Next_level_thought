// Javascript push, pop, shift, unshift function

const arr = [10, 15, 20, 25, 30]
/*
  push()
  push function add new element at last position in array
  push function takes 1 argument which we want to add new element
  push fucntion return index of the new added element where it placed
*/
const pushele = arr.push(35)
console.log(`New element added at the position ${pushele}. new array:`, arr)
// Output:  New element added at the position 6. new array: [ 10, 15, 20, 25, 30, 35 ]

/*
  pop()
  pop function remove last element in array
  pop function return deleted element it self
*/
const popele = arr.pop()
console.log(`${popele} deleted. new array:`, arr)
// Output: 35 deleted. new array: [ 10, 15, 20, 25, 30 ]

/*
  unshift()
  unshift function add new element at the beginning of the array
  unshift function return new length of an array after new element added
*/
const unshiftele = arr.unshift(5)
console.log(`New length after unshift function ${unshiftele}. new array:`, arr)
// Output: New length after unshift function 6. new array: [ 5, 10, 15, 20, 25, 30 ]

/*
  shift()
  shift function remove first element of the array
  shift function return deleted element
*/
const shiftele = arr.shift()
console.log(`${shiftele} deleted. new array:`, arr)
// Output: 5 deleted. new array: [ 10, 15, 20, 25, 30 ]
