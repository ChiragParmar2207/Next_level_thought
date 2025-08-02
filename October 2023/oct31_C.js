/*
  Javascript padStart() and padEnd() functions
*/

const str = 'Hello'

/*
  padStart(length, character) function return a new string with the new length which is given in first argument.
  padStart() takes 2 arguments first is length which is now new length of a string
    second is a character what we add in string
  padStart() function basically aevu kare ke mani koi aek string ni length 5 che and aapne aeni length 10 karvi che to
    ae length first argument thai and aapne 10 ni length karva mate kaik character joise right?
    toh ae character second argument na aapyu che toh have padStart() aevu karse ke ae 10 ni length karva mate jetla character
    ochha che aetle character string ni starting ma add kari dese
*/
const padStart = str.padStart(10, 'O')
console.log('padStart()', padStart) // padStart() OOOOOHello
// In above example you can see new length of string is 10

/*
  padEnd() function same padStart() function ni jem j work kare che bas ae starting ni badle last ma new characters add karse
*/
const padEnd = str.padEnd(10, 'O')
console.log('padEnd()', padEnd) // padStart() HelloOOOOO
