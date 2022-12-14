"use strict"

// Замыкание - это способность функции работать с переменными из внешнего лексического окружения

// Лексическое окружение - это специальный внутренний объект, с которым мы никак не можем взаимодействовать. С ним работает движок, добавляет новые переменные, удаляет и т.д.
// Лексическое окружение состоит из ссылки на внешнее лексическое окружение и из объекта со свойствами, свойства это и есть наши объявленные переменные.
// Чтобы JS создал лексическое окружение, нужен вызов любой конструкции, которая создает область видимости.

// Перед выполнением скрипта создается лексическое окружение, в котором будет находиться ссылка на внешнее лексическое окружение и объект со свойствами.
// После чего собираются все объявленные переменные с помощью ключевого слова var и Function Declaration и поднимаются верх, в глобальное лексическое окружение (hoisting)
// Function Declaration это будет ссылка на эту функцию, а значение у переменных var будет undefined
// Т.к. поднимается именно объявление переменной, а присвоение значения происходит там, где мы его явно присваиваем

// После чего скрипт начинает выполняться построчно

// Когда вызывается функция, перед ее выполнением создается лексическое окружение, в котором будет находиться ссылка на внешнее лексическое окружение и объект со свойствами.
// В качестве свойств будут переданы аргументы со значением undefined, после чего идет поиск переменных объявленных с помощью var и Function Declaration
// Function Declaration это будет ссылка на функцию, а в переменных объявленных с помощью ключевого слова var будет undefined.

// После чего идет выполнение функции построчно
// Когда функция отработала, ее лексическое окружение удаляется сборщиком мусора. Но если есть хотя бы одна вложенная функция, которая ссылается на него, то лексическое окружение будет жить
// При каждом вызове функции, перед ее выполнением создается новое лексическое окружение

const globalLexicalEnvironment = {
  outer: null,
  environmentRecord: {
    a: 1, // undefined => 1
    a2: 2, // undefined => 2
    functionDeclaration: "function",
    anonymousFunction: "function",
    result1: 1,
    anonymousFunction2: "function",
    result2: 1,
  }
}

console.log(a) // undefined
var a = 1

a2 = 2
console.log(a2) // 2
var a2

function functionDeclaration() {
  const functionDeclarationLexicalEnvironment1 = { // Первый вызов functionDeclaration
    outer: globalLexicalEnvironment,
    environmentRecord: {
      count: 1, // 0 => 1
      anonymousFunction: "function"
    }
  }
  const functionDeclarationLexicalEnvironment2 = { // Второй вызов functionDeclaration
    outer: globalLexicalEnvironment,
    environmentRecord: {
      count: 1, // 0 => 1
      anonymousFunction: "function"
    }
  }

  let count = 0

  return () => {
    const anonymousFunctionLexicalEnvironment1 = { // Первый вызов anonymousFunction
      outer: functionDeclarationLexicalEnvironment1,
      environmentRecord: {}
    }
    const anonymousFunctionLexicalEnvironment2 = { // Второй вызов anonymousFunction
      outer: functionDeclarationLexicalEnvironment2,
      environmentRecord: {}
    }

    return ++count
  }
}

const anonymousFunction = functionDeclaration()
const result1 = anonymousFunction()
console.log(result1) // 1

const anonymousFunction2 = functionDeclaration()
const result2 = anonymousFunction2()
console.log(result2) // 1

// const x = 1
//
// function f() {
//   console.log(x) // Error
//   const x = 2
// }
//
// f()
