// optional chaining operator (?.)
/*
  optional chaining operator no javascript ma bau j use thai che
  jyare aaapne object mathi koi perticular property print karavi and jo ae property object na hoy to
  code ma error aavi jay aetle ae error na aave ae mate optional chaining no use thai che
*/

const person = {
	id: 1,
	firstName: 'abc',
	lastName: 'xyz',
	gender: 'female',
	salary: 50000,
}
console.log(person.firstName)
// console.log(person.fullName)
// uparni line error aapse and kem ke person object ma fullName namni koi property j nathi aetle
console.log(person?.fullName)
/* 
  ahiya aapne optional chaining no use karine fullName ne print karavshu toh error nai aape
  kem ke option chaining operator pela check karse ke person namna object ma fullName ni property che ke nai jo hase to
  ae print karavi dese otherwise ae undefined print karse error nai aave
*/
