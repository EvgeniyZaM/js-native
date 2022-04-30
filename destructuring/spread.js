// Spread

const arr1 = [2, 3, 4, 5]
const arr2 = [6, 7, 8, 9]

// Array
// Объединение массивов
const exampleSpreadArr = [1, ...arr1, ...arr2, 10]
// console.log(exampleSpreadArr) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Копирование объекта
const obj = { name: 'Evgeniy', age: 22 }

const newObj = { ...obj, isOnline: true }
// console.log(obj === newObj) // false