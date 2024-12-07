let score = 33 
let score_1 = "33abc" 
let valueiumber = Number(score_1) // datatype conversion
// console.log(typeof valueiumber);
// console.log(valueiumber); // ot does convert 33abc to number but actually it is not a valid form it outputs NaN

// why string to number coversion is confusing

let value = 3
// console.log(-3);
// console.log("1"+6) // gives output 16
// console.log("1"+6+7)// gives output 167
// console.log("1"+(6+7)) // gives output 113
// so use oarenthesis in proper order to avoid these 

// comparison of datatypes
console.log(null==0)
console.log(null>=0) // avoid such comparisions

// summary 
/* 1. primtive , 2, non primitive or reference type
    .string         . arrays , objects,functions
    . number 
    .boolean
    . undefiened
    .BigInt



*/
const heros =["me", "bhadwa", "behenkaloda"];
let myObJ = {
    name: "fakhir",
    age:22,
}

const myFunction = function(){
    console.log("Hello");


}
console.log(typeof myFunction)

// stack memory( primitve datatypes ) , Heap(non primitve datatypes)



//--------------strings------------------------
// string interpolation 
// const game = new String('my name is ') // another way of declaring string without double quotes 

// console.log(game[0])
// console.log(game.__proto__)
// const name = "SlimShady"
// console.log(`hello ${game} ${name}`)
// console.log(game.indexOf('i'))
// console.log(game.trim())

//----------maths--------------
// Math.random() always generates number bw 0 and 1 and then depending on our range in which we want number we use the below form

const max =100
const min = 50
console.log(Math.floor(Math.random()*(max-min))+min)

