// Текстовые операторы:

// 1. typeof (проверяет тип данных и возвращает строку с именем типа данных)
console.log(typeof undefined) // undefined
console.log(typeof 1) // number
console.log(typeof 1.1) // number
console.log(typeof Infinity) // number
console.log(typeof -Infinity) // number
console.log(typeof NaN) // number
console.log(typeof "") // string
console.log(typeof 1n) // bigint
console.log(typeof true) // boolean
console.log(typeof false) // boolean
console.log(typeof Symbol("id")) // symbol
console.log(typeof null) // object (официально признанная ошибка в typeof)
console.log(typeof Math) // object
console.log(typeof function () {
}) // function


// 2. delete (удаляет свойство в объекте)
const obj = {a: 1}
console.log(obj) // {a: 1}
delete obj.a
console.log(obj) // {}
