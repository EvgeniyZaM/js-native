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