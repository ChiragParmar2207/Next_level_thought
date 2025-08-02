/*
  Javascript length function
  length function aapne koi array ke string ni length find karva mate use kariae chhiae
*/
const tempArr = [1, 2, 3, 4, 5]
const tempStr = '123456789'
const arrLenght = tempArr.length
const strLength = tempStr.length
console.log('Array length', arrLenght) // Array length 5
console.log('String length', strLength) // String length 9

/*
  aaj no concept che time reduce when we used for loop
  mari pase aek array che and mare ae arrar badha elements ma 5 add karva che toh first toh hu for loop fervish
  and aapne loop ne ketli var fervi che aena mate aapne array ni length find karshu
*/
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] + 5
}
console.log('New Array', arr)
// Output: New Array [5,  6,  7,  8,  9, 10, 11, 12, 13, 14]

/*
  jo aapne aa rite karshu toh aa wring way who kem ke aapne array ni length forr loop ma j find kari toh 
  ae every iteration par array ni length find karva jase and execution no time vadhi jase
  aetle aapne jayre pn aa rite karvanu thai tyre pela length find kari levani pacchi ae variable ne loop ma muki devano
*/
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const length = arr.length
for (let i = 0; i < length; i++) {
	arr1[i] = arr1[i] + 5
}
console.log('New Array', arr1)
// Output: New Array [5,  6,  7,  8,  9, 10, 11, 12, 13, 14]
