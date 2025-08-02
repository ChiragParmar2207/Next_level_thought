/*
  Javascript switch statement
  shu tamne khabr che javascript condition check karva mate seno use kare che == or ===
  chalo aek example thi joiae
*/
const value = 21

switch (value) {
	case '21': {
		console.log('==')
		break
	}
	case 21: {
		console.log('===') // ===
		break
	}
	default: {
		console.log('Something went wrong')
		break
	}
}
// Now you see the answer Javascript ma switch statement condition comparison mate === no use kare che
/*
  Diffrence between == and ===
  == only check the data which is match or not like == mate number ma 21 and srting ma '21' banne same j rese and ae true return karse
  === value ni sathe sathe data type pn check karse and pachhi ae true false return karse aetle number 21 and string '21' ma ae false return karse
*/
console.log('==', 21 == '21') // == true
console.log('===', 21 === '21') // === false
