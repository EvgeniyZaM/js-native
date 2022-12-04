// Текстовые операторы:
function functionDeclaration() {
}

const functionExpression = function () {
}
const arrowFunction = () => {
}

// 1. typeof (проверяет тип данных и возвращает строку с именем типа данных)
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
console.log(typeof functionDeclaration) // function (что бы в функции не находилось - результат будет object)
console.log(typeof functionExpression) // function (что бы в функции не находилось - результат будет object)
console.log(typeof arrowFunction) // function (что бы в функции не находилось - результат будет object)

// 2. delete (удаляет свойство в объекте)
const obj = {a: 1}
console.log(obj) // {a: 1}
delete obj.a
console.log(obj) // {}

// 3. in (проверяет, существует ли свойство у объекта)
const obj2 = {name: "Evgeniy", age: 23}
console.log("name" in obj2) // true
console.log("info" in obj2) // false
const key = "age"
console.log(key in obj2) // true (если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства)

// 4. await (дожидается когда promise зарезолвится)
const asyncFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const json = await response.json()
  console.log(json)
}
asyncFunction()
