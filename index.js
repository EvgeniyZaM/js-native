"use strict"

// Event loop (цикл событий) - это бесконечный цикл, который ожидает задачи, выполняет их и затем снова ожидает поступление новых задач

// call stack - сначала попадает синхронный код, выполняется поочередно и как только call stack будет пустым, event loop начнет разгребать микро-таски, а потом макро-таски

// Очередь макро-тасок (первый вошел, последний вышел) - в очередь макро-тасок попадают setTimeout, setInterval, обработчики события (синхронного кода быть не может)
// Очередь микро-тасок - в очередь микро-тасок попадают коллбэки метода then, mutation observer, queueMicrotask (синхронного кода быть не может)

// При использовании await, то только после того, как мы дождемся зарезолвленного промиса, выполнится код, который после await
// При использовании await, когда мы не дождались когда промис зарезолвится, код который ниже не выполнится

// Пример 1:
// setTimeout(function () {
//   console.log(1)
// }, 4000)
//
// setTimeout(function () {
//   console.log(2)
// }, 1000)
//
// setTimeout(function () {
//   console.log(3)
// }, 1)
//
// new Promise(function (resolve) {
//   console.log(4)
//   resolve()
//   console.log(5)
// })
//   .then(function () {
//     console.log(5)
//   })
//
// console.log(6)
//
// // 4, 5, 6, 5, 3, 2, 1

// Пример 2:
// setTimeout(function () {
//   console.log(1)
// }, 1)
//
// setTimeout(() => {
//   console.log(2)
// }, 1000)
//
// new Promise(function (resolve, reject) {
//   console.log(3)
//   resolve()
//   console.log(4)
// })
//   .then(function () {
//     console.log(5)
//   })
//
// console.log(6)
//
// async function f() {
//   console.log(7)
//   await f2()
//   console.log(8)
//   console.log(9)
// }
//
// function f2() {
//   console.log(10)
// }
//
// f()
//
// console.log(11)
// 3, 4, 6, 7, 10, 11, 5, 8, 9, 1, 2

// Пример 3:
// console.log(1)
//
// setTimeout(() => {
//   console.log(2)
//   Promise.resolve()
//     .then(() => {
//       console.log(3)
//     })
// }, 1000)
//
// new Promise((resolve) => {
//   console.log(4)
//   resolve(5)
// })
//   .then((data) => {
//     console.log(data)
//
//     Promise.resolve()
//       .then(() => {
//         console.log(6)
//       })
//       .then(() => {
//         console.log(7)
//
//         setTimeout(() => {
//           console.log(8)
//         }, 2000)
//       })
//   })
//
// setTimeout(() => {
//   console.log(9)
// }, 2000)
//
// console.log(10)
// // 1, 4, 10, 5, 6, 7, 2, 3, 9, 8

// Пример 4:
// console.log(1)
//
// setTimeout(function () {
//   console.log(2)
// }, 2)
//
// let p = new Promise(function (resolve, reject) {
//   console.log(3)
//   resolve()
// })
//
// p.then(function () {
//   console.log(4)
// })
//
// console.log(5)
// 1, 3, 5, 4, 2

// Пример 5:
// console.log(1)
// setTimeout(() => console.log(2), 1000)
// Promise.resolve().then(() => console.log(3))
// Promise.resolve()
//   .then(() => setTimeout(() => console.log(4), 4000))
//   .then(() => console.log(5))
// Promise.resolve().then(() => console.log(6))
// Promise.resolve().then(() => console.log(7))
//
// setTimeout(() => console.log(8), 2000)
//
// console.log(9)
// 1, 9, 3, 6, 7, 5, 2, 8, 4
