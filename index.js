"use strict"

// Event loop (цикл событий) - это бесконечный цикл, который ожидает задачи, выполняет их и затем снова ожидает поступление новых задач

// Дело в том, что JS это синхронный, однопоточный язык программирования, т.е. в текущий момент времени, может выполнятся только одна задача и если эта задача ресурсоемкая, мы не сможем приступить к следующей, пока не выполнится текущая. Решить эту проблему помогает Event Loop

// Начинается выполнение кода построчно:
// Если попадается синхронный код, он попадает в call stack, выполняется и уходит из call stack-а.
// Если попадается setTimeout, setInterval, обработчик события, то переданный callback попадает в call stack, после чего уходит из call stack-а и попадает в web api
// С web api коллбэки попадают в очередь макро-тасок и как только call stack будет пустой, в него начнут попадать коллбэки из web api
// Если попадается метод промиса, то переданный callback попадает в очередь микро-тасок и как только call stack будет пустой, в него начнут попадать коллбэки из микро-тасок
// Сперва выполняются микро-таски, после чего макро-таски

// Очередь макро-тасок - в очередь макро-тасок попадают setTimeout, setInterval, обработчики события (синхронного кода быть не может)
// Очередь микро-тасок - в очередь микро-тасок попадают коллбэки методов промиса, mutation observer, queueMicrotask (синхронного кода быть не может)

// При использовании await, то только после того, как мы дождемся зарезолвленного промиса, выполнится код, который после await
// При использовании await, когда мы не дождались когда промис зарезолвится, код который ниже не выполнится

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

// Пример 3:
// setTimeout(() => {
//   console.log(2)
//   Promise.resolve()
//     .then(() => {
//       console.log(3)
//     })
// }, 1000)
//
// new Promise((resolve) => {
//   resolve()
// })
//   .then(() => {
//     console.log(5)
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

// Пример 5:
// setTimeout(() => console.log(2), 1000)
// Promise.resolve().then(() => console.log(3))
// Promise.resolve()
//   .then(() => setTimeout(() => console.log(4), 4000))
//   .then(() => console.log(5))
// Promise.resolve().then(() => console.log(6))
// Promise.resolve().then(() => console.log(7))
//
// setTimeout(() => console.log(8), 2000)


// setTimeout(() => console.log(2), 1000)
// Promise.resolve().then(() => setTimeout(() => console.log(3), 500))
// Promise.resolve()
//   .then(() => setTimeout(() => console.log(4), 4000))
//   .then(() => setTimeout(() => console.log(5), 1500))
// Promise.resolve().then(() => setTimeout(() => console.log(6), 5000))
// Promise.resolve().then(() => setTimeout(() => console.log(7), 200))
//
// setTimeout(() => console.log(8), 2000)
