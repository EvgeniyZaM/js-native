"use strict"

const promise = new Promise((resolve, reject) => {
  resolve("Data")
  //reject("Error")
})

promise
  .catch((error) => {
    console.log(error)
  })
  .then((data) => {
    console.log(data) // "Data"
    return data.slice(1)
  })
  .catch((error) => {  // Для обработки ошибки двух верхних методов, catch и then
    console.log(error.message)
  })
  .then((data) => {
    console.log(data) // "ata"
    return data.slice(1)
  })
  .catch((error) => {  // Для обработки ошибки двух верхних методов, catch и then
    console.log(error.message)
  })
  .then((data) => {
    console.log(data) // "ta"
  })
// // нижний catch, который срабатывает когда любой promise зареджектится
// .catch((error) => {
//   console.log(error)
// })

// Альтернативный подход, который использовать не нужно:
// promise
//   .then( // Первый then
//     (data) => {
//       console.log(data) // "Data"
//       return data.slice(1)
//     },
//     (error) => { // Для обработки ошибки, при вызове функции reject
//       console.log(error)
//     }
//   )
//   .then( // Второй then
//     (data) => {
//       console.log(data) // "ata"
//       return data.slice(1)
//     },
//     (error) => { // Для обработки ошибки двух callback-ов первого метода then
//       console.log(error.message)
//     }
//   )
//   .then(
//     (data) => {
//       console.log(data) // "ta"
//     },
//     (error) => { // Для обработки ошибки двух callback-ов второго метода then
//       console.log(error.message)
//     }
//   )
// // нижний then, который срабатывает когда любой promise зареджектится
// // .then(null, (error) => {
// //   console.log(error)
// // })

// В callback-е метода finally происходит ошибка и он удаляет всю дальнейшую цепочку promise-ов
// .then((data) => { // Отработает
//   console.log(data) // "Data"
//   return data
// })
// .finally(() => {
//   throw new Error("my error") // Происходит ошибка в callback-е
// })
// .then((data) => { // Не отработает
//   console.log(data)
//   return data
// })
// .then((data) => { // Не отработает
//   console.log(data)
// })
// .catch((error) => { // Перехватит ошибку, которая была в callback-е метода finally
//   console.log(error.message) // "my error"
// })

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 1")
  }, 1000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 2")
  }, 2000)
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 3")
  }, 500)
})

// const all = Promise.all([promise2, promise3, promise4])
// console.log(all)
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: Array(3)

// const race = Promise.race([promise2, promise3, promise4])
// console.log(race)
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "Data 3"

// const any = Promise.any([promise2, promise3, promise4])
// console.log(any)
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "Data 3"

// const allSettled = Promise.allSettled([promise2, promise3, promise4])
// console.log(allSettled)
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: Array(3)

// const resolve = (Promise.resolve("Date"))
// console.log(resolve) // Promise{<fulfilled>: 'Date'}

// const reject = Promise.reject("Error")
// console.log(reject) // Promise{<rejected>: 'Error'}
