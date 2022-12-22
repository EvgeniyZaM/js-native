// Пример 1
// const object = {
//   name: "Evgeniy",
//
//   functionDeclaration() {
//     console.log(this);
//   }
// }
// const object2 = {
//   name: "Maria",
//   address: {
//     city: "Minsk"
//   }
// }

// const ref = object.functionDeclaration
// ref() // window
//
// object.functionDeclaration() // object

// object2.address.functionDeclaration = object.functionDeclaration
// object2.address.functionDeclaration() // address

// Пример 2
// const object3 = {
//   name: "Evgeny",
//
//   arrowFunction: () => {
//     console.log(this); // window
//
//     (() => {
//       console.log(this) // window
//     })()
//   }
// }
// object3.arrowFunction()

// Пример 3
// const object4 = {
//   name: "Evgeny",
//
//   functionDeclaration() {
//     console.log(this); // object3
//
//     (() => {
//       console.log(this) // object3
//     })()
//
//     setTimeout(() => {
//       console.log(this); // object3
//     })
//   }
// }
//
// object4.functionDeclaration()

// Пример 4
// const object5 = {
//   name: "Evgeny",
//
//   functionDeclaration() {
//     console.log(this);
//
//     return () => {
//       console.log(this)
//     }
//   }
// }
//
// const object6 = {name: "Maria"}
//
// // object6.functionDeclaration = object5.functionDeclaration() // object5
// // object6.functionDeclaration() // object5
//
// object6.functionDeclaration = object5.functionDeclaration
// const ref = object6.functionDeclaration() // object6
// ref() // object6


// Методы bind, call, apply

// Пример 1
// let object = {name: "Evgeny"}
//
// function functionDeclaration(a, b, c) {
//   console.log(this, a, b, c) // {name: 'Evgeny'} 1 2 3
// }
//
// const newFunction = functionDeclaration.bind(object, 1, 2)
// newFunction(3)

// Пример 2
// const object2 = {
//   name: "Evgeny",
//
//   functionDeclaration() {
//     console.log(this)
//   }
// }
// const object3 = {name: "Maria"}
//
// object2.functionDeclaration() // object2
// object2.functionDeclaration.bind(object3)() // object3

function functionDeclaration(a, b, c) {
  console.log(this, a, b, c)
}

const object3 = {name: "Evgeny"}
const object4 = {name: "Maria"}
const object5 = {name: "Diana"}
const object6 = {name: "Dima"}

// const newFunction = functionDeclaration.bind(object3, 1, 2, 3).bind(object4, 10, 20, 30).bind(object5, 100, 200, 300).bind(object6, 1000, 2000, 3000)
// newFunction() // {name: 'Evgeny'} 1, 2, 3

// const newFunction2 = functionDeclaration.bind(object3, 1).bind(object4, 20).bind(object5, 200).bind(object6, 2000)
// newFunction2() // {name: 'Evgeny'} 1 20 200
