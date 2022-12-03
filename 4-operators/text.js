// Текстовые операторы:

// 1. typeof (проверяет тип данных и возвращает строку с именем типа данных)
const f = () => {
}
const f2 = function () {
}
console.log(typeof "") // "string"
console.log(typeof 0) // "number"
console.log(typeof true) // "boolean"
console.log(typeof false) // "boolean"
console.log(typeof false) // "boolean"
console.log(typeof null) // "object" (официально признанная ошибка в typeof)
console.log(typeof undefined) // undefined
console.log(typeof 1n) // bigint
console.log(typeof Symbol("id")) // symbol
console.log(typeof NaN) // number
console.log(typeof Infinity) // number
console.log(typeof -Infinity) // number
console.log(typeof {}) // object (что бы в объекте не находилось - результат будет object)
console.log(typeof []) // object (что бы в массиве не находилось - результат будет object)
console.log(typeof Math) // object
console.log(typeof function () {
}) // function (что бы в функции не находилось - результат будет object)
console.log(typeof f) // function (что бы в функции не находилось - результат будет object)
console.log(typeof f2) // function (что бы в функции не находилось - результат будет object)

// 2. delete (удаляет свойство в объекте)
const obj = {a: 1}
console.log(obj) // {a: 1}
delete obj.a
console.log(obj) // {}

// 3. in (проверяет, существовует ли свойство у объекта)
const obj2 = {name: "Evgeniy", age: 23}
console.log("name" in obj2) // true
console.log("info" in obj2) // false
const key = "age"
console.log(key in obj2) // true (если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства)
