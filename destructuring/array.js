// Деструктуризация массива:

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const array = [1, 2, 3, 4, 5]
const [num1, num2, , , num5, num6 = 6, num7 = getRandomIntInclusive(1, 10)] = array
console.log(num1, num2, num5, num6, num7) // 1 2 5 6 7 (при отсутствии значений будет undefined, но можно указать значение по умолчанию)

let [a, b, c] = "abc" // только строки
// console.log(a, b, c)
const [one, two, three] = new Set([1, 2, 3])
// console.log(one, two, three) // 1, 2, 3

let guest = "Evgeniy"
let admin = "Marina";
[admin, guest] = [guest, admin]
// console.log(guest, admin) // Marina Evgeniy

let person = "Evgeniy Zamatevskiy"
const personArray = person.split(" ")
const [name, lastName] = personArray
// console.log(name, lastName) // Evgeniy Zamatevskiy

let user = {};
[user.name, user.lastName] = ["Ivan", "Ivanov"]
// console.log(user) // { name: 'Ivan', lastName: 'Ivanov' }

let user2 = {name: "John", age: 30}
for (let [key, value] of Object.entries(user2)) {
  // console.log(key) // ключи
  // console.log(value) // значения
}

let user3 = new Map([
  ["name", "Evgeny"],
  ["age", 23],
])

const getItems = ([item1, , item3]) => {
  // console.log(item1) // 1
  // console.log(item3) // 3
}
// getItems([1, 2, 3, 4, 5])

for (let [key, value] of user3) {
  // console.log(key) // ключи
  // console.log(value) // значения
}

// let users = [
//   {
//     id: 1, name: "Evgeniy", age: 23, isMarried: false,
//     address: {city: "Gomel", street: "Lenina"},
//     friends: [
//       {
//         id: 1, name: "Andrey", age: 23, isMarried: true,
//         address: {city: "Minsk", street: "Alibegova"},
//       },
//       {
//         id: 2, name: "Kirill", age: 43, isMarried: true,
//         address: {city: "Minsk", street: "Antonenko"}
//       },
//       {
//         id: 3, name: "Sofia", age: 18, isMarried: false,
//         address: {city: "Gomel", street: "Lenina"}
//       },
//     ]
//   },
//   {
//     id: 2, name: "Kirill", age: 32, isMarried: true,
//     address: {city: "Grodno", street: "Pushkina"},
//     friends: [
//       {
//         id: 1, name: "Maria", age: 24, isMarried: false,
//         address: {city: "Mogilev", street: "Azerina"}
//       },
//       {
//         id: 2, name: "Anton", age: 12, isMarried: false,
//         address: {city: "Mogilev", street: "Aviatorov"}
//       },
//       {
//         id: 3, name: "Bob", age: 65, isMarried: true,
//         address: {city: "Mogilev", street: "Angarskaya"}
//       },
//     ]
//   },
//   {
//     id: 3, name: "Sofia", age: 18, isMarried: false,
//     address: {city: "Gomel", street: "Katunina"},
//     friends: [
//       {
//         id: 1, name: "Evgeniy", age: 23, isMarried: false,
//         address: {city: "Gomel", street: "Katunina"}
//       },
//       {
//         id: 2, name: "Grigoriy", age: 43, isMarried: true,
//         address: {city: "Gomel", street: "Efremova"}
//       },
//       {
//         id: 3, name: "Galina", age: 52, isMarried: true,
//         address: {city: "Gomel", street: "Vatutina"}
//       },
//     ]
//   }
// ]
//
// // Глубокая деструктуризация массива:
// const [{
//   amount,
//   value: v = "test",
//   number = getRandomIntInclusive(1, 10),
//
//   id: id1,
//   name: name1,
//   age: age1,
//   isMarried: isMarried1,
//   address: {city: city1, street: street1},
//   friends: [
//     {
//       id: id2, name: name2, age: age2, isMarried: isMarried2,
//       address: {city: city2, street: street2}
//     },
//     {
//       id: id3, name: name3, age: age3, isMarried: isMarried3,
//       address: {city: city3, street: street3}
//     },
//     {
//       id: id4, name: name4, age: age4, isMarried: isMarried4,
//       address: {city: city4, street: street4}
//     },
//   ]
// },
//   , // Пропуск второго элемента (важно!!!)
//   {
//     id: id5,
//     name: name5,
//     age: age5,
//     isMarried: isMarried5,
//     address: {city: city5, street: street5},
//     friends: [
//       {
//         id: id6, name: name6, age: age6, isMarried: isMarried6,
//         address: {city: city6, street: street6}
//       },
//       {
//         id: id7, name: name7, age: age7, isMarried: isMarried7,
//         address: {city: city7, street: street7}
//       },
//       {
//         id: id8, name: name8, age: age8, isMarried: isMarried8,
//         address: {city: city8, street: street8}
//       },
//     ]
//   }] = users
//
// console.log(amount) // undefined
// console.log(v) // test
// console.log(number) // rand number (1 - 10)
// console.log(id1) // 1
// console.log(name1) // Evgeniy
// console.log(age1) // 23
// console.log(isMarried1) // false
// console.log(city1) // Gomel
// console.log(street1) // Lenina
// console.log(id2) // 1
// console.log(name2) // Andrey
// console.log(age2) // 23
// console.log(isMarried2) // true
// console.log(city2) // Minsk
// console.log(street2) // Alibegova
// console.log(id3) // 2
// console.log(name3) // Kirill
// console.log(age3) // 43
// console.log(isMarried3) // true
// console.log(city3) // Minsk
// console.log(street3) // Antonenko
// console.log(id4) // 3
// console.log(name4) // Sofia
// console.log(age4) // 18
// console.log(isMarried4) // false
// console.log(city4) // Gomel
// console.log(street4) // Lenina
// console.log(id5) // 3
// console.log(name5) // Sofia
// console.log(age5) // 18
// console.log(isMarried5) // false
// console.log(city5) // Gomel
// console.log(street5) // Katunina
// console.log(id6) // 1
// console.log(name6) // Evgeniy
// console.log(age6) // 23
// console.log(isMarried6) // false
// console.log(city6) // Gomel
// console.log(street6) // Katunina
// console.log(id7) // 2
// console.log(name7) // Grigoriy
// console.log(age7) // 43
// console.log(isMarried7) // true
// console.log(city7) // Gomel
// console.log(street7) // Efremova
// console.log(id8) // 3
// console.log(name8) // Galina
// console.log(age8) // 52
// console.log(isMarried8) // true
// console.log(city8) // Gomel
// console.log(street8) // Vatutina
