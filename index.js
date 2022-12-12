"use strict"

// Прежде чем скрипт начнет выполняться, движок пробегается по коду 2 раза

// 1 пробег:
// Создается лексическое окружение, в котором создается ссылка на внешнее лексическое окружение и пустая окружающая среда

// Движок собирает все объявленные переменные с помощью ключевого слова var и Function Declaration, поднимает их и добавляет в лексическое окружение (hoisting)
// Function Declaration это будет ссылка на функцию, а в переменных объявленных с помощью ключевого слова var будет undefined.
// Т.к. поднимается именно объявление переменной, а присвоение значения происходит там, где мы его явно присваиваем

// 2 пробег:
// Идет выполнение кода построчно

// Каждый раз, когда вызывается функция, у нее создается новое лексическое окружение
// Сборщик мусора не удаляет лексическое окружение до тех пор, пока на него есть хоть одна ссылка

const globalLexicalEnvironment = {
  outer: null,
  environmentRecord: {
    a: 1, // undefined => 1
    functionDeclaration: "ref",
    result: "ref", // undefined => "ref"
    b: 2
  },
}

var a = 1
let b = 2

function functionDeclaration(arg) {
  const functionDeclarationLexicalEnvironment = {
    outer: globalLexicalEnvironment,
    environmentRecord: {
      showArg: "ref",
      arg: 10, // undefined => 10
    },
  }

  function showArg() {
    const showArgLexicalEnvironment = { // Удаляется, т.к. ссылка на функцию showArg нигде не хранится
      outer: functionDeclarationLexicalEnvironment,
      environmentRecord: {},
    }
    const showArgLexicalEnvironment2 = { // Удаляется, т.к. ссылка на функцию showArg нигде не хранится
      outer: functionDeclarationLexicalEnvironment,
      environmentRecord: {},
    }

    console.log(arg)
  }

  return showArg
}

// В переменной result хранится ссылка на функцию functionDeclaration,
// соответственно лексическое окружение functionDeclarationLexicalEnvironment не удаляется сборщиком мусора
var result = functionDeclaration(10)

result() // 10
result() // 10

// result = null // Сборщик мусора удаляет ссылку на функцию и лексическое окружения functionDeclarationLexicalEnvironment


// Объект лексическое окружение не создает
// const globalLexicalEnvironment = {
//   outer: null,
//   environmentRecord: {
//     object: "ref"
//   },
// }
//
// const object = {
//   name: "Evgeny",
//   sayName() {
//     const sayNameLexicalEnvironment = {
//       outer: globalLexicalEnvironment,
//       environmentRecord: {},
//     }
//
//     console.log(this.name)
//   }
// }
//
// object.sayName() // "Evgeny"

// Пример замыкания:
// const sum = (a) => {
//   return (b) => {
//     return a + b
//   }
// }
// const result = sum(3)(6)
// console.log(result)

// const makeCounter = () => {
//   let count = 0
//
//   return () => {
//     console.log(++count)
//   }
// }
// const counter = makeCounter()
// counter() // 1
// counter() // 2
//
// const counter2 = makeCounter()
// counter2() // 1
// counter() // 3
