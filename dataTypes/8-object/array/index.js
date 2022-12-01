// Виды создания массива:

let arr = new Array()
let arr2 = []

// Если new Array вызывается с одним аргументом, который представляет собой число, он создаёт массив без элементов, но с заданной длиной
const arr3 = new Array(10)
console.log(arr3) // [ <10 empty items> ]

let users = [
  {
    id: 1, name: "Evgeniy", age: 23, isMarried: false,
    address: {city: "Gomel", street: "Lenina"},
    friends: [
      {
        id: 1, name: "Andrey", age: 23, isMarried: true,
        address: {city: "Minsk", street: "Alibegova"},
      },
      {
        id: 2, name: "Kirill", age: 43, isMarried: true,
        address: {city: "Minsk", street: "Antonenko"}
      },
      {
        id: 3, name: "Sofia", age: 18, isMarried: false,
        address: {city: "Gomel", street: "Lenina"}
      },
    ]
  },
  {
    id: 2, name: "Kirill", age: 32, isMarried: true,
    address: {city: "Grodno", street: "Pushkina"},
    friends: [
      {
        id: 1, name: "Maria", age: 24, isMarried: false,
        address: {city: "Mogilev", street: "Azerina"}
      },
      {
        id: 2, name: "Anton", age: 12, isMarried: false,
        address: {city: "Mogilev", street: "Aviatorov"}
      },
      {
        id: 3, name: "Bob", age: 65, isMarried: true,
        address: {city: "Mogilev", street: "Angarskaya"}
      },
    ]
  },
  {
    id: 3, name: "Sofia", age: 18, isMarried: false,
    address: {city: "Gomel", street: "Katunina"},
    friends: [
      {
        id: 1, name: "Evgeniy", age: 23, isMarried: false,
        address: {city: "Gomel", street: "Katunina"}
      },
      {
        id: 2, name: "Grigoriy", age: 43, isMarried: true,
        address: {city: "Gomel", street: "Efremova"}
      },
      {
        id: 3, name: "Galina", age: 52, isMarried: true,
        address: {city: "Gomel", street: "Vatutina"}
      },
    ]
  }
]

// Чтение:
// console.log(users[0]) // первый элемент
// console.log(users.at(0)) // первый элемент
// console.log(users[-1]) // undefined
// console.log(users[users.length - 1]) // последний элемент
// console.log(users.at(-1)) // последний элемент

// Замена элемента
// users[0] = {
//   id: 1, name: "Mark", age: 18, isMarried: false,
//   address: {city: "Gomel", street: "Lenina"},
//   friends: [
//     {
//       id: 1, name: "Tolik", age: 17, isMarried: false,
//       address: {city: "Gomel", street: "Vatutina"},
//     },
//     {
//       id: 2, name: "Sasha", age: 43, isMarried: false,
//       address: {city: "Gomel", street: "Efremova"}
//     },
//     {
//       id: 3, name: "Dasha", age: 18, isMarried: false,
//       address: {city: "Gomel", street: "Ogarenko"}
//     },
//   ]
// }

// Добавление элемента:
// users[3] = {
//   id: 4, name: "Mark", age: 18, isMarried: false,
//   address: {city: "Gomel", street: "Lenina"},
//   friends: [
//     {
//       id: 1, name: "Tolik", age: 17, isMarried: false,
//       address: {city: "Gomel", street: "Vatutina"},
//     },
//     {
//       id: 2, name: "Sasha", age: 43, isMarried: false,
//       address: {city: "Gomel", street: "Efremova"}
//     },
//     {
//       id: 3, name: "Dasha", age: 18, isMarried: false,
//       address: {city: "Gomel", street: "Ogarenko"}
//     },
//   ]
// }

// Длинна массива:
// console.log(users.length) // 3
// users.length = 2 // Оставить 2 элемента в массиве
// users.length = 0 // Очистить массив
// Добавление элемента в конец массива:
// users[users.length] = {
//   id: 4, name: "Mark", age: 18, isMarried: false,
//   address: {city: "Gomel", street: "Lenina"},
//   friends: [
//     {
//       id: 1, name: "Tolik", age: 17, isMarried: false,
//       address: {city: "Gomel", street: "Vatutina"},
//     },
//     {
//       id: 2, name: "Sasha", age: 43, isMarried: false,
//       address: {city: "Gomel", street: "Efremova"}
//     },
//     {
//       id: 3, name: "Dasha", age: 18, isMarried: false,
//       address: {city: "Gomel", street: "Ogarenko"}
//     },
//   ]
// }

// Так делать можно, но не нужно!
// users.name = "Evgeniy" // Добавление нечислового свойства
// users[999] = "Element" // Создание «дыр»

// Циклы для перебора массива:
// for (самый оптимальный вариант)
// for (let i = 0; i < users.length; i++) {
//   // console.log(i) // индексы
//   // console.log(users[i]) // элементы
// }

// for of (не предоставляет доступа к индексу текущего элемента, только к его значению)
// for (let item of users) {
//   console.log(item) // элементы
// }

// for in (для массивов использовать не нужно)
// for (let key in users) {
//   console.log(key) // индексы
//   console.log(users[key]) // элементы
// }
