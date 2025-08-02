// Javascript slice and splice methods

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
/* 
  ***** slice(start, end) *****
  The slice() method can be used to create a copy of an array or return a portion of an array.
  It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
*/
console.log('arr.slice(2) : ', arr.slice(2)) //  ['c', 'd', 'e', 'f', 'g']
console.log('arr.slice(2, 4) : ', arr.slice(2, 4)) //  ['c', 'd']
console.log('arr.slice(-1) : ', arr.slice(-1)) //  ['g']
console.log('arr.slice(1, -2) : ', arr.slice(1, -2)) //  ['b', 'c', 'd', 'e']
console.log('arr.slice() : ', arr.slice()) //  ['a', 'b', 'c', 'd', 'e', 'f', 'g']

/*
  ***** splice(start, end) *****
  the splice() method will change the contents of the original array.
  The splice() method is used to add or remove elements of an existing array and
  the return value will be the removed items from the array.
*/
console.log('arr.splice(2) : ', arr.splice(2)) //  ['c', 'd', 'e', 'f', 'g']
console.log('arr : ', arr) //  ['a', 'b']
console.log('arr.splice(1, 2) : ', arr.splice(1, 2)) //  ['b']
console.log('arr : ', arr) //  ['a']

/*
  tame joi sako chho keline no 11 and 12 ma minuse value no use karo che 
  jyare aapne function ni argument minus ma aapiae toh ae value array ma last mathi return karse
  like jo aapne -1 aapshu toh ae array ni last value return karse
*/
