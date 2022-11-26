// 1 вариант:

// const callback3 = (value) => { // 4
//   console.log(value + 1) // 5
// }
//
// const callback2 = (value) => { // 3
//   callback3(value + 1) // 4
// }
//
// const callback = (value) => { // 2
//   callback2(value + 1) // 3
// }
//
// const f = (value) => { // 1
//   callback(value + 1) // 2
// }
//
// f(1)

// 2 вариант:
const callback3 = (value) => { // 4
  console.log(value + 1) // 5
}

const callback2 = (value, callback3) => { // 3, callback3
  callback3(value + 1)
}

const callback = (value, callback2) => { // 2, callback2
  callback2(value + 1, callback3)
}

const f = (value, callback) => { // 1, callback
  callback(value + 1, callback2)
}

f(1, callback)
