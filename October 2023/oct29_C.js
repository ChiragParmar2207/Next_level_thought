/*
  Javascript charAt() and charCodeAt() functions
*/

const str = "I'm learn javascript."

/*
  charAt() function returns the character at a specified index (position) in a string.
  charAt() function takes one argument indedx of a string and return a character which is placed to that index
*/
const character = str.charAt(5)
console.log('str.charAt(5):', character) // str.charAt(5): e

/*
  charCodeAt() function returns the Unicode of the character at a specified index(position) in a string.
  charCodeAt() function takes one argument indedx of a string and return unicode of a character which is placed that index
*/
const charcodeatstr = str.charCodeAt(5)
console.log('str.charCodeAt(0):', charcodeatstr) // str.charCodeAt(0): 101

/*
  Note: https://en.wikipedia.org/wiki/List_of_Unicode_characters
  Above is a unicode list for refrence
*/
