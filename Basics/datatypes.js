let score = "33abc"
console.log(typeof score);

let valueNumber = Number(score)
console.log(typeof valueNumber)
console.log(valueNumber)

let check = NaN
console.log(typeof check);


let score2 = Number(null)
console.log(typeof score2);
console.log(score2);

let score3 = Number(undefined)
console.log(typeof score3);
console.log(score3);


let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId);
