// Javascript concat(), join(), split(), toString() functions

const arr1 = ['a', 'b', 'c']
const arr2 = ['x', 'y', 'z']

/*
  concat()
  Javascript concat() function merge two array
  concat() function returns a new array which combines both the array
*/
const concatarr = arr1.concat(arr2)
console.log('Array which contains arr1 and arr2', concatarr)
// Output: Array which contains arr1 and arr2 [ 'a', 'b', 'c', 'x', 'y', 'z' ]

/*
  aapne concat() function no use kara vagar pan 2 array ne merge kari sakiae
  Niche example che
*/
const newArr = [...arr1, ...arr2]
console.log('New array:', newArr)
// Output: New array: [ 'a', 'b', 'c', 'x', 'y', 'z' ]

/*
  join()
  javascript join() function join array elements and retrun new string
  tame join function ne arguments pn aapi sako ke like aapne new srting aakhi sathe joiae che ke koi 
*/
const arr = ['R', 'e', 'e', 'm', 'a']

// Example 1
const example1 = arr.join('')
console.log('Your name: ', example1) // Output: Your name:  Reema

// Example 2
const example2 = arr.join(' ')
console.log('Your name:', example2) // Output: Your name: R e e m a

// Example 3
const example3 = arr.join(',')
console.log('Your name:', example3) // Output: Your name: R,e,e,m,a

/*
  split()
  javascript split() function convert string into an array
  like we have a string like Reema. split() function convert it into an array ['R', 'e', 'e', 'm', 'a']
  join() function ni jem split() pn 1 argument ley che
  aapne argument ma je aapiae split function ae value string ma find karse and ae mali jay aetle tyathi array no aek new element banavse
*/
const str1 = 'Reema'

// Example 1
const newArr1 = str1.split('')
console.log('split() string:', newArr1) // Output: split() string: [ 'R', 'e', 'e', 'm', 'a' ]

// Example 2
const str2 = 'Hello world'
const newArr2 = str2.split(' ')
console.log('split() string:', newArr2) // Output: split() string: [ 'Hello', 'world' ]

// Example 3
const str3 = 'Hello,world'
const newArr3 = str3.split(',')
console.log('split() string:', newArr3) // Output: split() string: [ 'Hello', 'world' ]

/*
  toString()
  javascript toString() function array new atring ma convert kari de
  toString() function join() function ni jem j work kare che
  toString() new string return karse pn ae array na every element vachhe comma(,) mukine new string aapse
*/
const newArray = ['R', 'e', 'e', 'm', 'a']
const newStr = arr.toString()
console.log('New string from toString():', newStr) // Output: New string from toString(): R,e,e,m,a
