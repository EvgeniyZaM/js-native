"use strict"

const promise = new Promise((resolve, reject) => {
  resolve("Data")
  // reject("Error")
})

// promise
//   .catch((error) => {
//     console.log(error) // "Error"
//   })
//   .then((data) => {
//     console.log(data) // "Data"
//     return data.slice(1)
//   })
//   .catch(() => {  // Для обработки ошибки двух верхних методов, catch и then
//     console.log("Error 1")
//   })
//   .then((data) => {
//     console.log(data) // "ata"
//     return data.slice(1)
//   })
//   .catch(() => {  // Для обработки ошибки двух верхних методов, catch и then
//     console.log("Error 2")
//   })
//   .then((data) => {
//     console.log(data) // "ta"
//   })

// .catch(() => { // Срабатывает при вызове функции reject или когда в каком-то из методов then, в первом callback-е произошла ошибка
//   console.log("Error")
//   return "new error"
// })
// .then((data) => { // Первый callback метода then может принимать в качестве аргумента возвращенное значение в callback-е метода catch (catch не может)
//   console.log(data) // "new error"
// })

// Альтернативный подход, который использовать не нужно:
// promise
//   .then( // Первый then
//     (data) => {
//       console.log(data) // "Data"
//       return data.slice(1)
//     },
//     (error) => { // Для обработки ошибки, при вызове функции reject
//       console.log(error) // "Error"
//     }
//   )
//   .then( // Второй then
//     (data) => {
//       console.log(data) // "ata"
//       return data.slice(1)
//     },
//     () => { // Для обработки ошибки двух callback-ов первого метода then
//       console.log("Error 1")
//     }
//   )
//   .then(
//     (data) => {
//       console.log(data) // "ta"
//     },
//     () => { // Для обработки ошибки двух callback-ов второго метода then
//       console.log("Error 2")
//     }
//   )
//
// .then(null, () => {   // Срабатывает при вызове функции reject или когда в каком-то из методов then, в первом callback-е произошла ошибка
//   console.log("Error")
//   return "my error"
// })
// .then((data) => { // Первый callback метода then может принимать в качестве аргумента возвращенное значение во втором callback-е метода then
//   console.log(data) // "my error"
// })

// В callback-е метода finally происходит ошибка и он удаляет всю дальнейшую цепочку promise-ов
// .then((data) => { // Отработает
//   console.log(data) // "Data"
//   return data
// })
// .finally(() => {
//   throw new Error() // Происходит ошибка в callback-е
// })
// .then((data) => { // Не отработает
//   console.log(data)
//   return data
// })
// .then((data) => { // Не отработает
//   console.log(data)
// })
// .catch(() => { // Перехватит ошибку, которая была в callback-е метода finally
//   console.log("Error") // "Error"
// })

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data 1")
//   }, 1000)
// })
//
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data 2")
//   }, 2000)
// })
//
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data 3")
//   }, 500)
// })

// const resolve = (Promise.resolve("Date"))
// console.log(resolve)

// const reject = Promise.reject("Error")
// console.log(reject)

// const any = Promise.any([promise2, promise3, promise4])
// console.log(any)

// const race = Promise.race([promise2, promise3, promise4])
// console.log(race)

// const allSettled = Promise.allSettled([promise2, promise3, promise4])
// console.log(allSettled)

// const all = Promise.all([promise2, promise3, promise4])
// console.log(all)
