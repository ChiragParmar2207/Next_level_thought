/*
  Javascript replace() and replaceAll() function
*/

/*
  replace()
  replace() function Replace the string. But only first occurrence which is match the condition.
  Takes two argument first is which character(s) you want to change, and
  second is new character(s) you want to replace.
*/
const str = 'Hello World, I am Test Variable. I am using for experiment.'

const replacestr = str.replace('l', 'L')
console.log("str.replace('l', 'L'); : ", replacestr) //  HeLlo World, I am Test Variable. I am using for experiment.
// Here you can see the output first L in Hello is changes to L and new word is HeLlo

/*
  replaceAll()
  replaceAll() function Replace the string to given character(s). all the occurrence which is match the condition
  Takes two argument first is which character(s) you want to change, and
  second is new character(s) you want to replace.
*/
const replaceallstr = str.replaceAll('l', 'L')
console.log("str.replaceAll('l', 'L') : ", replaceallstr) // str.replaceAll('l', 'L') :  HeLLo WorLd, I am Test VariabLe. I am using for experiment.
// Here you can see all the small 'l' changed with the capital 'L'
