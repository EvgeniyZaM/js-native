// Виды создания массива:

let arr = new Array()
let arr2 = []

const array = ["Яблоко", "Апельсин", "Слива"]

console.log(array[0]) // Яблоко
console.log(array[-1]) // undefined
console.log(array[array.length - 1]) // Слива
console.log(array.at(-1)) // Слива

// Замена элемента:
array[0] = "Мандарин"

// Добавление элемента
array[3] = "Банан"
console.log(array.length) // 4 (длинна массива)

const anyDataTypes = ["Яблоко", {name: "Джон"}, true, function () {
  console.log("hello")
}]
// anyDataTypes[3]()

const arr3 = []
// Методы
// push (добавляет новый элемент или элементы в конец массива)
arr3.push(1, 2, 3)

// shift (удаляет первый элемент из массива, сдвигая очередь, так что второй элемент становится первым. Удаленный элемент возвращается)
// Если массив пуст, возвращается undefined
const el = arr3.shift()
console.log(arr3)

// pop (удаляет последний элемент из массива и возвращает его)
// Если массив пуст, возвращается undefined
const el2 = arr3.pop()

// unshift (добавляет новый элемент или элементы в начало массива)
arr3.unshift(1)

// Добавление элемента в конец массива
arr3[arr3.length] = 56

// Так делать можно, но не нужно!
const arr4 = [1, 2, 3]
arr4.name = "Evgeniy" // Добавление нечислового свойства
arr4[100] = 4 // Создание «дыр»
console.log(arr4)

// Циклы для перебора элементов
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// проходит по значениям
// for of не предоставляет доступа к индексу текущего элемента, только к его значению
// for (let fruit of fruits) {
//   console.log(fruit)
// }

// for in для массивов использовать не нужно
// for (let key in arr) {
//   console.log(arr[key]) // Яблоко, Апельсин, Груша
// }

// Длину можно перезаписывать
arr3.length = 1
console.log(arr3) // [ 1 ]
arr3.length = 0
console.log(arr3) // [] (чистка массива)

// Многомерный массив
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matrix[0][2]) // 3

//////
console.log([] + 1) // "1"
console.log([1] + 1) // 11
console.log([1, 2] + 1) // 1,21

console.log([].toString() === "")
