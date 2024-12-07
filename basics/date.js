let d = new Date()
console.log(d.toDateString())
console.log(typeof d) // date is of object data type

let mydate = new Date(2003,5,16)
console.log(mydate.toDateString())
let date = new Date("02-09-2002")
console.log(date.toLocaleTimeString())

let newDate = new Date();
console.log(newDate.getMonth())