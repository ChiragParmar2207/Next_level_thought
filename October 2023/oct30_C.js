/*
  Today we see how we can print nested object.
*/
const myObject = {
	a: 'a',
	b: {
		c: 'c',
		d: {
			e: 'e',
			f: {
				g: 'g',
				h: {
					i: 'i',
				},
			},
		},
	},
}
console.log(myObject)
/*
  When we execute above log we can see output like this
  { a: 'a', b: { c: 'c', d: { e: 'e', f: [Object] } } }

  here you can see after f we can get [Object]
  so it means that there is another object inside of the f property, but we can not see what is the value of this
  here is the two solution we use for this 
*/
// First
console.log(myObject.b.d)
/*
  { e: 'e', f: { g: 'g', h: { i: 'i' } } }
  here you can see the outputl like this 

  but when we get thew object from ant api we don't know how object looks like right?
*/

// Second
console.dir(myObject, { depth: null })
/*
  {
    a: 'a',
    b: {
      c: 'c',
      d: { e: 'e', f: { g: 'g', h: { i: 'i' } } }
    }
  }

  Here now you see the actual object because of the dir 
*/
