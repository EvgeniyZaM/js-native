// typeof:
console.log(typeof '') // string
console.log(typeof typeof 32) // string

console.log(typeof true) // boolean

console.log(typeof 32) // number
console.log(typeof Infinity) // number
console.log(typeof -Infinity) // number
console.log(typeof NaN) // number

console.log(typeof undefined) // undefined
console.log(typeof null) // object ( Официально признанная ошибка typeof )


console.log(typeof {}) // object
console.log(typeof []) // object

console.log(typeof Function) // function
console.log(typeof BigInt) // function