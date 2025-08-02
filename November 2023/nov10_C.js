/*
  Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
*/

function timeConversion(s) {
	const hour = s.slice(0, 2)
	const minute = s.slice(3, 5)
	const second = s.slice(6, 8)
	if (s.slice(8) === 'PM') {
		const h = hour === '12' ? 12 : Number(hour) + 12
		return `${h}:${minute}:${second}`
	} else {
		const h = hour === '12' ? '00' : hour
		return `${h}:${minute}:${second}`
	}
}
console.log(timeConversion('00:05:45AM')) // 00:05:45
console.log(timeConversion('12:15:12PM')) // 12:15:12
console.log(timeConversion('11:25:00PM')) // 23:25:00
