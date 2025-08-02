// ??  Nullish coalescing operator
/*
  Nullish coalescing operator is a logical operator in javascript.
  ae right-hand side ni value return kare jo left-hand side null ke undefined hoy to
  for example 
  1. null ?? true
    ahiya left side null che toh ae true return karese
  2. undefined ?? true
    same ahiya pn ae true return karse
  3. null ?? false
    ahiya false return thase kem ke aagal null che aetle
  4. undefined ?? true
    same ahiya pn true return thase
*/
console.log('true ?? false = ', true ?? false) // true ?? false =  true
console.log('false ?? true = ', false ?? true) // false ?? true =  false
console.log('null ?? false ?? true = ', null ?? false ?? true) // null ?? false ?? true =  false
console.log('null ?? true ?? false = ', null ?? true ?? false) // null ?? true ?? false =  true

// some more examples for || and && operator in javascript
console.log('true || false = ', true || false) // true || false =  true
console.log('false || true = ', false || true) // false || true =  true
console.log('true && false = ', true && false) // true && false =  false
console.log('false && true = ', false && true) // false && true =  false
console.log('null || false = ', null || false) // null || false =  false
console.log('null || true = ', null || true) // null || true =  true
console.log('!null = ', !null) // !null =  true
console.log('!false = ', !false) // !false =  true
console.log('!true = ', !true) // !true =  false

const temp1 = null
const temp2 = undefined
const temp3 = true
const temp4 = false

console.log(temp1 || temp3) // true
console.log(temp2 ?? temp3 ?? temp4) // true
console.log(temp4 ?? temp1) // false
console.log((temp4 && temp3) || temp3) // true
console.log((temp4 && temp4) || temp4) // false
