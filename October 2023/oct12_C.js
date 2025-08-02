/*
  Javascript set() function
  set() function convert javascript array into set and remove all the duplicate values from the array
  set() function pase potani thodik properties che like new element add karvani elemnet delete karvani
  Here the list:

  Method          Description
  new Set()	      Creates a new Set
  add()	          Adds a new element to the Set
  delete()	      Removes an element from a Set
  has()	          Returns true if a value exists
  clear()	        Removes all elements from a Set
  forEach()	      Invokes a callback for each element
  values()	      Returns an Iterator with all the values in a Set
  keys()	        Same as values()
  entries()	      Returns an Iterator with the [value,value] pairs from a Set
  size	          Returns the number elements in a Set

  Below some examples for this.
*/
const newSet = new Set()
console.log('New empty set:', newSet) // New empty set: Set(0) {}
newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.add(4)
newSet.add(5)
newSet.add(6)
console.log('After adding some values in set:', newSet) // After adding some values in set: Set(3) { 1, 2, 3 }
// if we try to add new element with an existing value set function can not react for that element.
// because set only contains unique values
newSet.add(2)
console.log('Trying to add existing value in set:', newSet) // Trying to add existing value in set: Set(3) { 1, 2, 3 }
newSet.delete(5)
console.log('After delete 5 in set:', newSet) // After delete 5 in set:  Set(5) { 1, 2, 3, 4, 6 }
console.log('Size of the set using size() method', newSet.size) // Size of the set using size() method 5
console.log('has() methos of set', newSet.has(3)) // has() methos of set true
// In above has() example we can see that true is return because 3 is in the set
newSet.clear()
console.log('After apply clear method in set:', newSet) // After apply clear method in set: Set(0) {}

/*
  JavaScript Array.from() function
  Array.from() function returns a new Array from an array like an object or iterable objects like Map, Set, etc. 
*/

/*
  Write a JavaScript program to find all unique values in given array numbers.
  here first we create a new set from the given array. So, we get a new set with uniques values.
  After that we convert that set into an array using Array.from() function. So that we get a new array with all the unique values.
*/
const arr = [1, 2, 2, 3, 4, 4, 5]
const set = new Set(arr)
const uniqueValues = Array.from(set)
console.log('uniqueValues:', uniqueValues) // uniqueValues: [ 1, 2, 3, 4, 5 ]
