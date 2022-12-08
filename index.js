"use strict"

// Массив - это объект

// Объект - это ссылочный тип данных, который состоит из свойств [ключ, значение] и методов (объект всегда приводит ключи к строкам)

// Виды создания массива
// Если new Array вызывается с одним аргументом, который представляет собой число, он создаёт массив без элементов, но с заданной длиной
const arr = new Array(10) // [ <10 empty items> ]
const arr2 = []

// Виды создания объекта
const obj = new Object()
const obj2 = {}

// Основы
const name = "Evgeniy"
const name2 = "Dimon"
const id = 1
const id2 = 2
const married = "marital status"
const value = "React"

function sayName4([value1, value2, value3]) {
  console.log(`${this.name} ${value1} ${value2} ${value3}`)
}

const sayName5 = function ([value1, ...rest]) {
  console.log(`${this.name} ${value1} ${rest[0]} ${rest[1]}`)
}

const sayName6 = (value1, value2, value3) => {
  console.log(`${this.name} ${value1} ${value2} ${value3}`)
}

const friendsItem1 = {
  name: "Andrey", age: 23,
  address: {city: "Minsk", street: "Alibegova"},
}

const friendsItem2 = {
  name: "Kirill", age: 43,
  address: {city: "Minsk", street: "Antonenko"}
}

const friendsItem3 = {
  name: "Sofia", age: 18,
  address: {city: "Gomel", street: "Lenina"}
}

const friendsItems = [
  {id: 1, ...friendsItem1, isMarried: true},
  {id: 2, ...friendsItem2, isMarried: true},
  {id: 3, ...friendsItem3, isMarried: false},
]

const users = [
  {
    id: id,
    name,
    [married]: true,
    ["I likes" + value]: true,
    var: "var good",
    0: "zero string",
    address: {city: "Gomel", street: "Lenina"},
    friends: [...friendsItems],
    sayName1({value1, ...rest}) {
      console.log(`${this.name} ${value1} ${rest.value2} ${rest.value3}`) // "Evgeniy 1 2 3"
    },
    sayName2: function ({value1, value2, value3}) {
      console.log(`${this.name} ${value1} ${value2} ${value3}`) // "Evgeniy 1 2 3"
    },
    sayName3: (value1, value2, value3) => {
      console.log(`${this.name} ${value1} ${value2} ${value3}`) // "undefined 1 2 3"
    },
    sayName4: sayName4, // "Evgeniy 1 2 3"
    sayName5, // "Evgeniy 1 2 3"
    sayName6, // "undefined 1 2 3"
  },
  {
    id: id2,
    name: name2,
    [married]: false,
    ["I likes" + value]: false,
    var: "var good 2",
    0: "zero string 2",
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
    ],
    sayName1({value1, ...rest}) {
      console.log(`${this.name} ${value1} ${rest.value2} ${rest.value3}`) // "Dimon 1 2 3"
    },
    sayName2: function ({value1, value2, value3}) {
      console.log(`${this.name} ${value1} ${value2} ${value3}`) // "Dimon 1 2 3"
    },
    sayName3: (value1, value2, value3) => {
      console.log(`${this.name} ${value1} ${value2} ${value3}`) // "undefined 1 2 3"
    },
    sayName4: sayName4, // "Dimon 3 2 1"
    sayName5, // "Dimon 3 2 1"
    sayName6, // undefined 1 2 3
  },
]

// Так делать можно, но не нужно!
// users.name = "Evgeniy" //  Добавление нечислового свойства
// users[999] = "Element" // Создание «дыр»
// delete users[0] // удаление с использованием текстового оператора delete (свойства объекта удалять можно)

// Работа с длиной массива
// console.log(users.length) // 2
// users.length = 1 // Оставить 1 элемент в массиве
// users.length = 0 // Очистить массив
// users[users.length] = "Новый элемент!" (добавление элемента в конец массива)

// Чтение свойств:
// console.log(users)
// console.log(users[0])
// console.log(users[0].id)
// console.log(users[0].name)
// console.log(users[0][married])
// console.log(users[0]["I likes" + value])
// console.log(users[0].var)
// console.log(users[0]["0"])
// console.log(users[0].address)
// console.log(users[0].address.city)
// console.log(users[0].address.street)
// console.log(users[0].friends)
// console.log(users[0].friends[0])
// console.log(users[0].friends[0].id)
// console.log(users[0].friends[0].name)
// console.log(users[0].friends[0].age)
// console.log(users[0].friends[0].isMarried)
// console.log(users[0].friends[0].address)
// console.log(users[0].friends[0].address.city)
// console.log(users[0].friends[0].address.street)
// console.log(users[0].friends[1])
// console.log(users[0].friends[1].id)
// console.log(users[0].friends[1].name)
// console.log(users[0].friends[1].age)
// console.log(users[0].friends[1].isMarried)
// console.log(users[0].friends[1].address)
// console.log(users[0].friends[1].address.city)
// console.log(users[0].friends[1].address.street)
// console.log(users[0].friends[2])
// console.log(users[0].friends[2].id)
// console.log(users[0].friends[2].name)
// console.log(users[0].friends[2].age)
// console.log(users[0].friends[2].isMarried)
// console.log(users[0].friends[2].address)
// console.log(users[0].friends[2].address.city)
// console.log(users[0].friends[2].address.street)
// users[0].sayName1({value1: "1", value2: "2", value3: "3"})
// users[0].sayName2({value1: "1", value2: "2", value3: "3"})
// users[0].sayName3("1", "2", "3")
// users[0].sayName4(["1", "2", "3"])
// users[0].sayName5(["1", "2", "3"])
// users[0].sayName6("1", "2", "3")

// Добавление свойств (изменение работает аналогичным образом)
// users[2] = []
// users[2] = {}
// users[2].id = 3
// users[2].name = "Sofia"
// users[2][married] = false
// users[2]["I likes" + value] = true
// users[2].var = "var good 3"
// users[2]["0"] = "zero good 3"
// users[2].address = {}
// users[2].address.city = "Gomel"
// users[2].address.street = "Ogarenko"
// users[2].friends = []
// users[2].friends[0] = {}
// users[2].friends[0].id = 1
// users[2].friends[0].name = "Karl"
// users[2].friends[0].age = 18
// users[2].friends[0].isMarried = false
// users[2].friends[0].address = {}
// users[2].friends[0].address.city = "Gomel"
// users[2].friends[0].address.street = "Sviridova"
// users[2].friends[1] = {}
// users[2].friends[1].id = 2
// users[2].friends[1].name = "Maria"
// users[2].friends[1].age = 22
// users[2].friends[1].isMarried = true
// users[2].friends[1].address = {}
// users[2].friends[1].address.city = "Gomel"
// users[2].friends[1].address.street = "Checherskaya"
// users[2].sayName7 = function (value1, value2, value3) {
//   console.log(`${this.name} ${value1} ${value2} ${value3}`) // Sofia 1 2 3
// }
// users[2].sayName8 = (value1, value2, value3) => {
//   console.log(`${this.name} ${value1} ${value2} ${value3}`) // undefined 1 2 3
// }

// Удаление свойств:
// delete users[2].id
// delete users[2].name
// delete users[2][married]
// delete users[2]["I likes" + value]
// delete users[2].var
// delete users[2]["0"]
// delete users[2].address.city
// delete users[2].address.street
// delete users[2].address
// delete users[2].friends[0].id
// delete users[2].friends[0].name
// delete users[2].friends[0].age
// delete users[2].friends[0].isMarried
// delete users[2].friends[0].address.city
// delete users[2].friends[0].address.street
// delete users[2].friends[0].address
// delete users[2].friends[0]
// delete users[2].friends[1].id
// delete users[2].friends[1].name
// delete users[2].friends[1].age
// delete users[2].friends[1].isMarried
// delete users[2].friends[1].address.city
// delete users[2].friends[1].address.street
// delete users[2].friends[1].address
// delete users[2].friends[1]
// delete users[2].friends
// delete users[2].sayName7
// delete users[2].sayName8
// delete users[2]

// Проверка на существования свойств в объекте:
// 1. undefined
// console.log(users[0].name === undefined) // false
// console.log(users[0].newName === undefined) // true

// 2. Оператор in
// const key = "name"
// console.log(key in users[0]) // true
// console.log("newName" in users[0]) // false

// 3. Object.hasOwn
// console.log(Object.hasOwn(users[0], "name")) // true
// console.log(Object.hasOwn(users[0], "newName")) // false

// Итерация по объекту
for (let key in users[0]) {
  // console.log(key) // Ключи
  // console.log(users[0][key]) // Значения
}

// Итерация по массиву
// for (самый оптимальный вариант)
for (let i = 0; i < users.length; i++) {
  // console.log(i) // индексы
  // console.log(users[i]) // элементы
}

// for of (не предоставляет доступа к индексу текущего элемента, только к его значению)
for (let item of users) {
  // console.log(item) // элементы
}

// for in (для массивов использовать можно, но не нужно!)
for (let key in users) {
  // console.log(key) // индексы
  // console.log(users[key]) // элементы
}

// Копирование массива
// 1. for (поверхностная копия)
// const newArray = []
// for (let i = 0; i < users.length; i++) {
//   newArray[i] = users[i]
// }

// 2. Array.from() (поверхностная копия)
// const newArray2 = Array.from(users)

// 3. slice() (поверхностная копия)
// const newArray3 = users.slice()

// 4. concat() (поверхностная копия)
// const newArray4 = users.concat()

// 5. JSON.parse(JSON.stringify) (глубокая копия) (пропадают методы, если они есть)
// const newArray5 = JSON.parse(JSON.stringify(users))

// 6. Оператор Spread (поверхностная копия, но можно делать полную)
// const newArray6 = users.map(user => ({
//   ...user,
//   address: {...user.address},
//   friends: user.friends.map(friend => ({...friend, address: {...friend.address}}))
// }))

// Копирование объекта
// 1. for (поверхностная копия)
// const newObject = {}
// for (let key in users[0]) {
//   newObject[key] = users[0][key]
// }

// 2. Object.assign() (поверхностная копия)
// const newObject2 = Object.assign({}, users[0])

// 3. JSON.parse(JSON.stringify) (глубокая копия) (пропадают методы, если они есть)
// const newObject3 = JSON.parse(JSON.stringify(users[0]))

// 4. Оператор Spread
// const newObject4 = {
//   ...users[0],
//   address: {...users[0].address},
//   friends: users[0].friends.map(friend => ({...friend, address: {...friend.address}}))
// }

// Глубокая деструктуризация
// const [
//   , // пропуск элемента
//   {
//     id: id3,
//     name: name3,
//     [married]: isMarried,
//     ["I likes" + value]: isLikesValue,
//     var: var2,
//     ["0"]: zero,
//     address: {city, street},
//     friends: [
//       {
//         id: id4, name: name4, age: age4, isMarried: isMarried4,
//         address: {city: city2, street: street2}
//       },
//       {
//         id: id5, name: name5, age: age5, isMarried: isMarried5,
//         address: {city: city3, street: street3}
//       },
//       {
//         id: id6, name: name6, age: age6, isMarried: isMarried6,
//         address: {city: city4, street: street4}
//       },
//     ],
//     ...rest // Оператор Rest
//   },
//   item3 = 1, // значение по умолчанию
//   item4, // undefined (т.к. нет значения)
// ] = users


// Методы для переопределения контекста (bind, call, apply)
// rest.sayName1.bind(users[1], "1", "2", "3")()
// rest.sayName2.call(users[1], "1", "2", "3")
// rest.sayName3.apply(users[1], ["1", "2", "3"])
// rest.sayName4.apply(users[1], ["1", "2", "3"])
// rest.sayName5.call(users[1], "1", "2", "3")
// rest.sayName6.bind(users[1], "1", "2", "3")()

// Деструктуризация отдельных данных
// const [
//   , // пропуск элемента
//   item2,
//   item3 = 1, // значение по умолчанию
//   item4 // undefined (т.к. нет значения)
// ] = users
//
// const {
//   id: id3,
//   name: name3,
//   [married]: isMarried,
//   ["I likes" + value]: isLikesValue,
//   var: var2,
//   ["0"]: zero,
//   address
// } = users[1]
//
// const {city, street} = users[1].address
//
// const [friend1, friend2, friend3] = users[1].friends
//
// const {id: id4, name: name4, age: age4, isMarried: isMarried4, address: address2} = users[1].friends[0]
// const {id: id5, name: name5, age: age5, isMarried: isMarried5, address: address3} = users[1].friends[1]
// const {id: id6, name: name6, age: age6, isMarried: isMarried6, address: address4} = users[1].friends[2]
//
// const {city: city2, street: street2} = users[1].friends[0].address
// const {city: city3, street: street3} = users[1].friends[1].address
// const {city: city4, street: street4} = users[1].friends[2].address
//
// const {sayName1, sayName2, sayName3, sayName4: sayName44, sayName5: sayName55, sayName6: sayName66} = users[1]
//
// sayName1.bind(users[0], "1", "2", "3")()
// sayName2.call(users[0], "1", "2", "3")
// sayName3.apply(users[0], ["1", "2", "3"])
// sayName44.apply(users[0], ["1", "2", "3"])
// sayName55.call(users[0], "1", "2", "3")
// sayName66.bind(users[0], "1", "2", "3")()
