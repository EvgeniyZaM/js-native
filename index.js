"use strict"

// Деструктуризация - с помощью деструктуризации мы можем вытащить свойства из объекта, элементы из массива или символы из строки

const object = {
  name: "Evgeniy",
  age: 23,
  isMarried: false,
  address: {city: "Gomel", street: "Pushkina", numbers: {one: 1, two: 2, three: 3}},
  showInfo1({value1, value2, value3, value4: newValue4 = "4", value5}) { // Деструктуризация объекта в функции
    console.log(`${value1} ${value2} ${value3} ${newValue4} ${value5}`)
  },
  showInfo2([value1, value2, value3, value4 = "4", value5]) { // Деструктуризация массива в функции
    console.log(`${value1} ${value2} ${value3} ${value4} ${value5}`)
  },
}

// Глубокая деструктуризация объекта:
const {
  value1: newValue = `default ${2 + 2}`,
  value2,
  name,
  age,
  isMarried,
  address: {city, street, numbers: {one, two, three}},
  showInfo1,
  showInfo2
} = object

console.log(newValue) // "default 4"
console.log(value2) // undefined
console.log(name) // "Evgeniy"
console.log(age) // 23
console.log(isMarried) // false
console.log(city) // "Gomel"
console.log(street) // "Pushkina"
console.log(one) // 1
console.log(two) // 2
console.log(three) // 3
showInfo1({value1: "1", value2: "2", value3: "3"}); // 1 2 3 4 undefined
showInfo2(["1", "2", "3"]); // 1 2 3 4 undefined

// Деструктуризация конкретных объектов
// const {name, age, isMarried, address, showInfo1, showInfo2} = object
// console.log(name) // "Evgeniy"
// console.log(age) // 23
// console.log(isMarried) // false
// console.log(address) // {city: 'Gomel', street: 'Pushkina', numbers: {…}}
// showInfo1({value1: "1", value2: "2", value3: "3"}) // 1 2 3 4 undefined
// showInfo2(["1", "2", "3"]) // 1 2 3 4 undefined
//
// const {city, street, numbers} = object.address
// console.log(city) // "Gomel"
// console.log(street) // "Pushkina"
// console.log(numbers) // {one: 1, two: 2, three: 3}
//
// const {one, two, three} = object.address.numbers
// console.log(one) // 1
// console.log(two) // 2
// console.log(three) // 3

// Деструктуризация массива
const array = [1, 2, 3]
const [, , item3, item4 = `${2 + 2}`, item5] = array
console.log(item3) // 3
console.log(item4) // "4"
console.log(item5) // undefined

// Деструктуризация строки
const string = "hello"
const [char1, char2, char3, char4, char5] = string
console.log(char1) // "h"
console.log(char2) // "e"
console.log(char3) // "l"
console.log(char4) // "l"
console.log(char5) // "0"

// Деструктуризация объекта set
const set = new Set([1, 2, 3])
const [set1, set2, set3] = set
console.log(set1) // 1
console.log(set2) // 2
console.log(set3) // 3

// Смена значений с помощью деструктуризации
let a = 1
let b = 2
let c = 3
console.log(a, b, c); // 1 2 3

[a, b, c] = [c, b, a]
console.log(a, b, c) // 3 2 1

// Деструктуризация преобразованного объекта, в массив пар [ключ, значение]
for (let [key, value] of Object.entries(object)) {
  console.log(key) // ключи объекта
  console.log(value) // значения объекта
}

const map = new Map([
  ["name", "Evgeny"],
  ["age", 23],
])

for (let [key, value] of map) {
  console.log(key) // Ключи
  console.log(value) // Значения
}

// Добавление новых свойств в объект с помощью деструктуризации
[object.newValue1, object.newValue2] = ["value1", "value2"]

console.log(object.newValue1) // value1
console.log(object.newValue2) // value2
