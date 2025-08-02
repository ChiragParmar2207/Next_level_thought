// object creation in javascript

// 1: Simple and most used way fot create object
const obj1 = {
	id: 1,
	name: 'abc',
}

// 2:
const obj2 = new Object({
	id: 2,
	name: 'def',
})

// 3:
const obj3 = Object.create(obj1)
/*
  object.create new object create kare che 
*/

// 4:
const obj4 = Object.assign(obj1, { gender: 'male' })
/*
  Object.assign fucntion 2 arguments ley che first original array jema aapne new value add karvi che ae
  and second je aapne original array ma add karvi che ae. 
  object.assign function new object return kare che and original array ne pn change kari dey che new valyu thi
*/

// 5:
function createObject() {
	return {
		id: 5,
		name: 'ghi',
	}
}
const obj5 = new createObject()
/* 
  function thi pn object create thai che javascript ma like aapne class ne new keyword thi create kariae ae rite
  and ae aapne je funfction mathi return karu hoy ae value new object ma aape and jo function kai retutn na kartu hot to 
  ae empty {} object return kari de.
*/

console.log('obj1: ', obj1)
console.log('obj2: ', obj2)
console.log('obj3: id:', obj3.id)
console.log('obj3: name:', obj3.name)
console.log('obj4: ', obj4)
console.log('obj5: ', obj5)

/* 
  aa file ne run kari hoy to simpley file nu extention change karine .js kari dejo and
 file run karva mate terminal ma 'node oct01ObjectCreate.js' command run karjo aetle thai jase
*/
