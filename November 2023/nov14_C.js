/*
  How to break Array.foreach() loop

  Here we all know that we can't break foreach loop
  when we write break statement in foreach loop it will throw an SyntaxErro error
  and if we write return statement it will not stop loop and continue loop

  I have 3 ways to stop foreach loop
*/

const arr = [1, 2, 3, 4]

// First way is throwing en exception
// arr.forEach((item) => {
// 	if (item === 2) {
// 		throw new Error('Stop Loop here')
// 	}
// 	console.log('item =', item)
// })

// Using above way program will throw an error so that we need to first handle this error using try catch

// Second way is to set arr length to zero
// arr.forEach((item) => {
// 	if (item === 2) {
// 		arr.length = 0
// 	}
// 	console.log('item =', item)
// })
/*
  Output:
  item = 1
  item = 2

  here you can see foreach loop has been stop but the major problem is
  we lost the data what we have in array
*/

// Third way is a use splice function
arr.forEach((item, index) => {
	if (item === 2) {
		arr.splice(index + 1, arr.length)
	}
	console.log('item =', item)
})
/*
  Output:
  item = 1
  item = 2

  Here you can see our foreach loop is stop but again here we lost the data what we have
*/

/*
  Now see when we use foreach loop in our code first estimate what we can do using foreach loop and then 
  decide it is right or not
*/
