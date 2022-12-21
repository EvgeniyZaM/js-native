// Задача 1
// Нужно сделать так, чтобы выводилось 3, 2, 1
// Можно менять только тело функции sleep
// async function sleep(ms) {
//     setTimeout(() => {
//       console.log(ms)
//     }, ms * 100)
// }
//
// async function show() {
//   await sleep(3)
//   await sleep(2)
//   await sleep(1)
// }
//
// show()
// // Решение:
// async function sleep(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res()
//       console.log(ms)
//     }, ms * 100)
//   })
// }
// async function show() {
//   await sleep(3)
//   await sleep(2)
//   await sleep(1)
// }
// show()
