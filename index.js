"use strict"

// Замыкание - это способность функции работать с переменными из внешнего лексического окружения

// Лексическое окружение - это специальный внутренний объект, с которым мы никак не можем взаимодействовать. С ним работает движок, добавляет новые переменные, удаляет и т.д.
// Лексическое окружение состоит из ссылки на внешнее лексическое окружение и из объекта со свойствами, свойства это и есть наши объявленные переменные.
// В начале скрипта лексическое окружение пустое, чтобы JS создал лексическое окружение, нужен вызов любой конструкции, которая создает область видимости.

// Прежде чем скрипт начнет выполняться, движок пробегается по коду 2 раза
// 1 пробег:
// Движок собирает все объявленные переменные с помощью ключевого слова var и Function Declaration, поднимает их и добавляет в объект лексического окружения (hoisting)
// Function Declaration это будет ссылка на функцию, а в переменных объявленных с помощью ключевого слова var будет undefined.
// Т.к. поднимается именно объявление переменной, а присвоение значения происходит там, где мы его явно присваиваем

// 2 пробег:
// Идет выполнение кода построчно
// При каждом вызове функции создается новое лексическое окружение
// Лексическое окружение существует до того момента, пока есть хотя бы одна вложенная функция, которая ссылается на него, а иначе удаляется сборщиком мусора
// (удаляется, если вложенная функция не использует данные из внешнего лексического окружения)

// Перед выполнением кода Движок создает лексическое окружение и собирает все объявленные...

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

// Сборка мусора - объект, который где-то используется - не может быть удален. Удаляется объект, для которого нет ссылки
