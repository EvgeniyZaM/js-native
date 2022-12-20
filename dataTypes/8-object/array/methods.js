const array = [1, 2, 3, 4, 5]

// const item = array.at(-1)
// console.log(item) // 5

// const newArray = array.sort((a, b) => a < b ? 1 : -1)
// console.log(newArray) // [ 5, 4, 3, 2, 1 ]

// const value = array.reduce((acc, item) => acc + item, 0)
// console.log(value) // 15

// array.fill(66, 1, -1)
// console.log(array) // [ 1, 66, 66, 66, 5 ]

// array.push(6)
// console.log(array) // [ 1, 2, 3, 4, 5, 6 ]
//
// array.unshift(0)
// console.log(array) // [ 0, 1, 2, 3, 4, 5, 6 ]
//
// const removedItem = array.pop()
// console.log(removedItem) // 6
//
// const removedItem2 = array.shift()
// console.log(removedItem2) // 0

// const index = array.indexOf(3, 2)
// console.log(index) // 2
//
// const index2 = array.lastIndexOf(4, 3)
// console.log(index2) // 3
//
// const isFound = array.includes(4)
// console.log(isFound) // true

// const array2 = [[[[[[[1, 2, 3, 4, 5]]]]]]]
// const newArray = array2.flat(Infinity)
// console.log(newArray) // [ 1, 2, 3, 4, 5 ]

// const removedItems = array.splice(1, 2, -2, -3)
// console.log(removedItems) // [ 2, 3 ]
// console.log(array) // [ 1, -2, -3, 4, 5 ]

// const newArray = array.concat([6, 7], 8, 9)
// console.log(newArray) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const newArray = array.slice.js(0, 2)
// console.log(newArray) // [ 1, 2 ]

// const str = array.join(", ")
// console.log(str) // "1, 2, 3, 4, 5"

// const newArray = array.reverse()
// console.log(newArray) // [ 5, 4, 3, 2, 1 ]

// const isTrue = array.some((item) => item >= 5)
// console.log(isTrue) // true
//
// const isTrue2 = array.every((item) => item > 0)
// console.log(isTrue2) // true

// const newArray = []
// array.forEach((item) => item > 3 && newArray.push(item))
// console.log(newArray) // [ 4, 5 ]

// const item = array.find((item, index, array) => item === 3)
// console.log(item) // 3

// const index = array.findIndex((item) => item === 3)
// console.log(index) // 2

// const newArray = array.filter((item, index, array) => item >= 4)
// console.log(newArray) // [ 4, 5 ]

// const newArray = array.map((item, index, array) => item + index)
// console.log(newArray) // [ 1, 3, 5, 7, 9 ]

// const isArray = Array.isArray(array)
// console.log(isArray) // true
//
// const newArray = Array.from("hello")
// console.log(newArray) // [ 'h', 'e', 'l', 'l', 'o' ]
//
// const newArray2 = Array.from([1, 2, 3], (item, index) => item + 10)
// console.log(newArray2) // [ 11, 12, 13 ]
//
// const newArray3 = Array.from(new Map([[1, 2], [2, 4]]))
// console.log(newArray3) // [ [ 1, 2 ], [ 2, 4 ] ]
//
// const newArray4 = Array.from(new Set([1, 2, 3, 4, 5]))
// console.log(newArray4) // [ 1, 2, 3, 4, 5 ]
//
// // Генерация случайных чисел:
// const newArray5 = Array.from({length: 5}, (item, index) => index)
// console.log(newArray5) // [0, 1, 2, 3, 4]
//
// function f() {
//   return Array(arguments)
// }
//
// console.log(f(1, 2, 3, 4, 5)) // [ [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } ]
