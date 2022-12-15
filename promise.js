"use strict"

// Про асинхронность:
// Конструктор промиса синхронный, а методы промиса вызываются асинхронно
// Но если внутри конструктора промиса есть какая-то асинхронность, в таком случае будет приостановка

// Event loop - это бесконечный цикл, его задача выполнять какие-то задачи

console.log("START")

const promise = new Promise((resolve, reject) => {
  console.log("START PROMISE")
  setTimeout((response) => {
    console.log("START SETTIMEOUT")
    if (response.httpStatus === 200 && response.httpStatus < 400) {
      resolve(response.data)
    } else {
      reject(response.error)
    }
  }, 500, {httpStatus: 200, data: {name: "Evgeny", id: 1, status: "active"}, error: "Not Found"})
  console.log("END PROMISE")
})

console.log("MIDLE")

promise
  .then(console.log)

console.log("END")
// promise
//   .then((data) => {
//     console.log(data)
//     return data
//   })
//   .then((data) => {
//     console.log(data)
//     return data
//   })
//   .then((data) => {
//     console.log(data)
//     return data
//   })
//   .then(null, (error) => { // Не важно где произойдет ошибка, перехват будет здесь!
//     console.log(error)
//   })


// promise
//   .then((data) => {
//     console.log(data)
//     return data
//   })
//   .then((data) => {
//     console.log(data)
//     return data
//   })
//   .then((data) => {
//     console.log(data)
//     return data
//   })
//   .catch((error) => { // Не важно где произойдет ошибка, перехват будет здесь!
//     console.log(error) // "Not Found"
//   })
