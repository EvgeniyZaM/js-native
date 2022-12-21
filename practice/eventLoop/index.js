// Задача 1
// console.log(1)
// const f = () => {
//   console.log(2)
//   Promise.resolve().then(() => f())
//   console.log(3)
// }
// f()
// console.log(4)
// // 1, 2, 3, 4, бесконечность... 2, 3, 2, 3, 2, 3

// Задача 2
// Promise.resolve()
//   .then(() => console.log(1))
//   .then(() => {
//     console.log(2)
//     throw new Error()
//   })
//   .catch(() => console.log(3))
//   .then(() => console.log(4))
//
// Promise.resolve()
//   .then(() => console.log(5))
//   .then(() => {
//     console.log(6)
//     throw new Error()
//   })
//   .catch(() => console.log(7))
//   .then(() => console.log(8))
// // 1, 5, 2, 6, 3, 7, 4, 8

// Задача 3
// console.log(1)
// Promise.resolve()
//   .then(() => {
//     console.log(2)
//     setTimeout(() => {
//       console.log(3)
//     }, 0)
//   })
//
// setTimeout(() => {
//   console.log(4)
//   Promise.resolve()
//     .then(() => {
//       console.log(5)
//     })
// }, 0)
//
// console.log(6)
// // 1, 6, 2, 4, 5, 3

// 1, 3, 5, 7, 4, 2

// Задача 4
// setTimeout(() => console.log(2))
//
// Promise.reject(3).catch(console.log)
// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4))
//
// Promise.resolve(5).then(console.log)
// setTimeout(() => console.log(7), 0)
// // 3, 5, 2, 4, 7

// Задача 5
// const myPromise = (delay) => new Promise((res, rej) => {
//   setTimeout(res, delay)
// })
// setTimeout(() => console.log(1), 1000)
// myPromise(1000).then(res => console.log(2))
// setTimeout(() => console.log(3), 100)
// myPromise(2000).then(res => console.log(4))
// setTimeout(() => console.log(5), 2000)
// myPromise(1000).then(res => console.log(6))
// setTimeout(() => console.log(7), 1000)
// myPromise(5000).then(res => console.log(8))
// // 3, 1, 2, 6, 7, 4, 5, 8

// Задача 6
// new Promise(() => {
//   console.log(1)
// })
// new Promise(() => {
//   setTimeout(() => console.log(2), 0)
// })
// Promise.resolve(setTimeout(() => console.log(3), 0))
// console.log(4)
// Promise.reject(console.log(5))
// // 1, 4, 5, 2, 3

// Задача 7
// setTimeout(() => console.log(1), 100)
// let i = 0
// while (i < 5e9) {
//   i++
// }
// setTimeout(() => console.log(3), 50)
// // 1, 3
