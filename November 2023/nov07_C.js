/*
  Javascript reverse() and flat()
*/

const arr = [1, 2, 3, 4, 5, 6, 7]

/*
  reverse() function reverses the order of the elements in an array. It will change the original array.
*/
arr.reverse()
console.log('Revers Array:', arr) // Revers Array: [7, 6, 5, 4, 3, 2, 1]

/*
  flat() function takes one arguent how many levels flat you want.
  flat() function used to flatten an array, to reduce the nesting of an array.
  flat() function simply aevu kare ke koi array ni andar array hoy ae array ma pn bijo array hoy to 
  ae badha array ne 1 j array ma convert kari de
*/
const arr2 = [[[1, 2], 3], [4, [5, [6, 9, [10]]]], 7, 8]
console.log(arr2.flat(1)) // [ [ 1, 2 ], 3, 4, [ 5, [ 6, 9, [Array] ] ], 7, 8 ]
console.log(arr2.flat(2)) // [ 1, 2, 3, 4, 5, [ 6, 9, [ 10 ] ], 7, 8 ]
console.log(arr2.flat(3)) // [1, 2, 3, 4, 5, 6, 9, [ 10 ], 7, 8]
console.log(arr2.flat(4)) // [1, 2,  3, 4, 5, 6, 9, 10, 7, 8]
