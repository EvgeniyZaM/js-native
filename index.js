"use strict"

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


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 1")
  }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 2")
  }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data 3")
  }, 500)
})

const f = async () => {
  const all = await Promise.all([promise1, promise2, promise3])
  console.log(all)
}

f()
