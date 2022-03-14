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


console.log(isNaN(10 * 'word')) // true ( Проверка на NaN )
console.log(isFinite(10 / 0)) // false ( Проверка на Infinity )
console.log(Array.isArray([])) // true ( Проверка на Array )

// Объект - представляет собой набор пар - ключ, значения
const person = {
   name: 'Evgeniy',
   age: 22,
   isOnline: true,
   friends: ['Olga', 'Nikolay', 'Max'],
   info: {
      country: 'Belarus',
      city: 'Gomel'
   }
}

// 1 способ копирования:
const person2 = Object.assign({}, person)

// 2 способ копирования:
// const person2 = { ...person }
// person2.friends = [...person2.friends]
// person2.info = { ...person2.info }

// 3 способ копирования:
// const person2 = JSON.parse(JSON.stringify(person))

console.log(person2 === person) // false, т.к. разные объекты
console.log(person2.name === person.name) // true, т.к. внутри первого объекта лежит точно такая же пара - 'ключ','значение' как и внутри второго объекта