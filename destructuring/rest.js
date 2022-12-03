const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const obj = {a: 1, b: 2, c: 3}

const [item1, item2, ...rest] = numbers
const {el, ...rest2} = obj
// console.log(rest) // [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(rest2) // { a: 1, b: 2, c: 3 }

const calcSum = (a, b, c, ...rest) => {
  // console.log(rest) // [ 4, 5, 6, 7, 8, 9 ]
}
calcSum(1, 2, 3, 4, 5, 6, 7, 8, 9)
