// () (оператор группировки)
// Увеличивает приоритет, чтобы выражение с меньшим приоритетом выполнилось раньше
// Без оператора:
console.log(2 + 2 * 2) // 6
// С оператором:
console.log((2 + 2) * 2) // 8

// = (присвоение)
const variable = 10

// - (унарный минус)
// Преобразует положительное число в отрицательное, а отрицательное в положительное
let x = 10
console.log(x = -x) // -10
console.log(x = -x) // 10

// + (унарный плюс)
// Преобразовывает в число (аналог функции Number())
console.log(+"10") // 10

// , (запятая) (каждое выражение выполняется, но возвращается результат только последнего)
let a = (1 + 2, 3 + 4, 10 + 5) // Нужны скобки из-за низкого приоритета
console.log(a) // 7 (результат вычисления 10 + 5)

// . (доступ к свойствам через точку)
const obj = {obj2: {obj3: {obj4: {obj5: {value: "hello"}}}}}
console.log(obj.obj2.obj3.obj4.obj5.value) // "hello"

// [] (доступ к свойствам через квадратные скобки)
const object = {object2: {object3: {object4: {object5: {value: "hello"}}}}}
console.log(object["object2"]["object3"]["object4"]["object5"]["value"]) // "hello"

// () (вызов функции)
function f() {
  console.log("hello")
}

f()

// +=, -=, *=, /=, ||=, &&=, ??= (сокращенное применение оператора к переменной)
let b = 5
b += 5
// Аналогичная запись b = b + 5
console.log(b) // 10

b -= 5
// Аналогичная запись b = b - 5
console.log(b) // 5

b *= 2
// Аналогичная запись b = b * 2
console.log(b) // 10

b /= 5
// Аналогичная запись b = b / 5
console.log(b) // 2

let b2 = true
let b3 = false
b3 ||= b2
// Аналогичная запись b3 = b3 || b2
console.log(b3) // true

let b4 = true
let b5 = false
b4 &&= b5
// Аналогичная запись b4 = b4 && b5
console.log(b4) // false

let b6 = null
let b7 = "text"
b6 ??= b7
// Аналогичная запись b6 = b6 ?? b7
console.log(b6) // "text"

// ? : (тернарный оператор)
const number = 4
number === 0
  ? console.log("Вы ввели число 0")
  : number === 1
    ? console.log("Вы ввели число 1")
    : number === 2 || number === 3
      ? console.log("Вы ввели число 2, а может и 3")
      : console.log("Другое число")

// ?. (Опциональная цепочка) Если значение перед ?. равно undefined или null, ?. остановит вычисление и вернет undefined
// Синтаксис:
// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined

let key = "is likes"
const user = null

const user2 = {
  sayHi() {
    console.log("Hi")
  }
}

// console.log(user) // null
// console.log(user.address) // Error (обращение к address у null)
// console.log(user.address.city) // Error (обращение к address у null)
// console.log(user.address.city.name) // Error (обращение к address у null)

// console.log(user?.address) // undefined (остановка на user, т.к. он равен null)
// console.log(user?.address?.city) // undefined (остановка на user, т.к. он равен null)
// console.log(user?.address?.city?.name) // undefined (остановка на user, т.к. он равен null)

// delete user.address.city // Error (обращение к address у null)
// delete user?.address // Ошибки нету (остановка на user, т.к. он равен null и удаление не происходит)

// console.log(user[key]) // Error (обращение к "is likes" у null)
// console.log(user?.[key]) // undefined (остановка на user, т.к. он равен null)

// user.sayHi() // Error (обращение к sayHi у null)
// user?.sayHi?.() // ничего не произошло (остановка на user, т.к. он равен null)
// user2.sayHi?.() // Hi

// console.log(user3?.address) // Error (объекта user3 не существует)

// user2.name = "John" // Работает
// user2?.name = "John" // Error
