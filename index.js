"use strict"

// При использовании await, то только после того, как мы дождемся зарезолвленного promise-а, выполнится код, который после await.
// При использовании await, когда мы не дождались когда promise зарезолвится, код который ниже не выполнится


const promise = new Promise((resolve, reject) => {
  // resolve("Data")
  reject("Error")
})

// Цепочка promise-ов
promise
  // .catch((error)=>{
  //   console.log(error) // "Error"
  // })
  .then((data) => {
    console.log(data) // "Data"
    return data.slice(1)
  })
  // .catch(() => {  // Для обработки ошибки двух верхних методов, catch и then
  //   console.log("Error 1")
  // })
  .then((data) => {
    console.log(data) // "ata"
    return data.slice(1)
  })
  // .catch(() => {  // Для обработки ошибки двух верхних методов, catch и then
  //   console.log("Error 2")
  // })
  .then((data) => {
    console.log(data) // "ta"
  })

  // Срабатывает при вызове функции reject или когда в каком-то из методов then, в первом callback-е произошла ошибка
  .catch(() => {
    console.log("Error")
    return "new error"
  })
  // .then(null, () => { // Альтернатива метода catch, которую лучше не использовать
  //   console.log("Error")
  //   return "new error"
  // })

  // Первый callback метода then может принимать в качестве аргумента возвращенное значение в callback-е метода catch (catch не может)
  // Или возвращенное значение во втором callback-е метода then
  .then((data) => {
    console.log(data) // "new error"
  })

// promise
//   .then( // Первый then
//     (data) => {
//       console.log(data) // "Data"
//       return "new data"
//     },
//     (error) => { // Вызывается если вызовем функцию reject в конструкторе promise
//       console.log(error) // "Error"
//     }
//   )
//   .then( // Второй then
//     (data) => { // Возвращенное значение в первом then
//       console.log(data) // "new data"
//     },
//     () => {  // Вызывается если ошибка будет в первом callback-е первого then
//       console.log("Ошибка в первом callback-е первого then")
//     }
//   )
//   .then(null, () => { // Вызывается если ошибка будет в первом callback-е второго then
//     console.log("Ошибка во втором callback-е первого then")
//   })
