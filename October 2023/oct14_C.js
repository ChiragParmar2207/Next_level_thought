// date start in JavaScript is (January 1, 1970) also epoch start with this date

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

const d = new Date()

console.log('Full date', d) // Full date 2023-10-14T05:56:35.958Z
console.log('Current epoch', d.getTime()) // Current epoch 1671597373280
// For epoch there is a seprate concept i'll create a new file for epoch
console.log('Current Hour', d.getHours()) // current Hour 11
console.log('Current Minute', d.getMinutes()) // current Minute 21
console.log('current Second', d.getSeconds()) // current Second 49
console.log('current millisecond', d.getMilliseconds()) // current millisecond 16
console.log('current Date', d.getDate()) // current Date  14
console.log('current Month', d.getMonth() + 1) // current Month 11
// For month I can add + 1 because getMonth function start counting months with 0 that why it is necessory to add + 1 for getting accurate month.
console.log('current year', d.getFullYear()) // current year 2023

// ---------- toDateString() : toDateString() method converts a date to a more readable format
console.log(d.toDateString()) // Sat Oct 14 2023

// ---------- toUTCString() : method converts a date to a string using the UTC standard (Universal Time Coordinated )
console.log(d.toUTCString()) // Sat, 14 Oct 2023 05:52:45 GMT

// ---------- toISOString() : method converts a date to a string using the ISO standard (International Organization for Standardization)
console.log(d.toISOString()) // 2023-10-14T05:52:45.573Z
