const promise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    // Promise chain
    .then((res) => res.json())
    .then((data) => data[0])
    .then((user) => user.address)
    .then((address) => address.geo)
    .then((geo) => resolve(geo.lat))
    .catch((err) => reject(err))
})

promise
  .then((lat) => console.log(lat))
  .catch((err) => console.warn(err))
  .finally(() => console.log("Finally"))

const promise2 = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    // Promise chain
    .then((res) => res.json())
    .then((data) => data[0])
    .then((user) => user.address)
    .then((address) => address.geo)
    .then((geo) => resolve(geo.lng))
    .catch((err) => reject(err))
})

promise2
  .then((lng) => console.log(lng))
  .catch((err) => console.warn(err))
  .finally(() => console.log("Finally"))

Promise.all([promise, promise2])
  .then((results) => console.log("Promise all:", results))
  .catch((err) => console.warn(err))


Promise.allSettled([promise, promise2])
  .then((results) => console.log("allSettled:", results))
  .catch((err) => console.warn(err))

Promise.race([promise, promise2])
  .then((result) => console.log("Promise race:", result))
  .catch((err) => console.warn(err))

// // Promise у которого изначально состояние 'fulfilled'
// const resolvedPromise = Promise.resolve({ data: {}, status: 200 })
// console.log(resolvedPromise) // 'fulfilled'

// resolvedPromise
//    .then((data) => {
//       console.log(resolvedPromise) // 'fulfilled'
//       console.log(data)
//    })

// // Promise у которого изначально состояние 'rejected'
// const rejectedPromise = Promise.reject({ message: 'Some error' })
// console.log(rejectedPromise) // 'rejected'

// rejectedPromise
//    .catch((error) => {
//       console.log(rejectedPromise) // 'rejected'
//       console.log(error)
//    })

// const p3 = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       return fetch('https://jsonplaceholder.typicode.com/posts/1')
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }
// p3()
