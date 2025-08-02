/*
  aaje aapne password match ni technique joishu matlb
  koi random password che aema aapne 
  * 1 Uppercase character
  * 1 lowercase character
  * 1 number 
  * 1 special character like (@_$)
  * last 8 digit hova joiae

  uparni condition parthi aapne password ni strength nakki karshu like jo
  * koi 2 karta occhi condition match thai to RED
  * 2 thi 4 ni vache thai to ORANGE 
  * badhi condition match thai jay to GREEN
*/
/*
  uppercase lowercase number and special characters check karva mateni 2 rit che aek toh regex and aek manual way
  aapne banne joishu
*/
const password = 'Test@123'

const passwordlenght = password.length

let strength = 0

// regex way
// const uppercaseRegex = /.*[A-Z].*/
// const lowercaseRegex = /.*[A-Z].*/
// const numberRegex = /[0-9]/
// const specialRegex = /[_@$]/

// if (uppercaseRegex.test(password)) strength++
// if (lowercaseRegex.test(password)) strength++
// if (numberRegex.test(password)) strength++
// if (specialRegex.test(password)) strength++
// if (password.length >= 8) strength++

// manual way
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const number = '0123456789'.split('')
const special = '@_$'.split('')

if ([...password].some((char) => uppercase.includes(char))) strength++
if ([...password].some((char) => lowercase.includes(char))) strength++
if ([...password].some((char) => number.includes(char))) strength++
if ([...password].some((char) => special.includes(char))) strength++
if (password.length >= 8) strength++

console.log(strength)

if (match < 3) console.log('Red')
else if (match === 3 || match === 4) console.log('Orange')
else console.log('Green')
