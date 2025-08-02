/*
  Javascript Array.map()
  map() function creates a new array with the result of calling a function for each array element.
  jyare aapne koi array mathi bijo array banavvo hoy ae pn juna array na elements ma kai operation karine tyare 
  map use thai che
  mani lo aapni pase aek array che apne ae array na badha elements ma 2 add karine new array joiae che to 
  aena mate map() function no use kari sakay
*/
const arr = [1, 2, 3, 4, 5]
const newArr = arr.map((element) => {
	return element + 2
})
console.log('New Array =>', newArr) // New Array => [ 3, 4, 5, 6, 7 ]

/*
  map function aek new function ae as a argumnet ley che and ae function je return kare ae new array ma as a elements save thatu jay che 
  niche vadhare realistic way thi batavu
*/
function addTwoInElement(element) {
	return element + 2
}

const newArr1 = arr.map(addTwoInElement)
console.log('New Array =>', newArr1) // New Array => [ 3, 4, 5, 6, 7 ]

/*
  Upar na example ma aek function banayu che and ae function map function ni argument ma aapyu che and tya array na
  badha elemets one by one jase and 2 increase karine return karse and ae return kareli value new array ma store thati jase
*/
