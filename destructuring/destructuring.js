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

for (let [key, value] of user3) {
  // console.log(key) // ключи
  // console.log(value) // значения
}
