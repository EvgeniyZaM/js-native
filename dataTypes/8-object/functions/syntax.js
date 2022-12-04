// Виды функций:

// Function Declaration
// console.log(functionDeclaration(10, 5)) // 15
function functionDeclaration(a, b) {
  console.log(arguments) // Arguments [10, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
  return a + b
}

// console.log(functionDeclaration(10, 5)) // 15

// Function Expression
// console.log(functionExpression(10, 5)) // Error
const functionExpression = function (a, b) {
  console.log(arguments) // Arguments [10, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
  return a + b
}
// console.log(functionExpression(10, 5)) // 15

// Arrow Function
// console.log(arrowFunction(10, 5)) // Error
const arrowFunction = (a, b) => {
  // console.log(arguments) // Error
  return a + b
}
// console.log(arrowFunction(10, 5)) // 15

const arrowFunction2 = a => a + 5
// console.log(arrowFunction2(10)) // 15

// Основы:
let number = 999
let a = 1
let a2 = 2
const baseFunction = (param1, param2, param3 = 3, param4) => { // параметры
  const a2 = -2
  console.log(a2) // -2 (если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю)

  const a3 = 3 // переменная, которая видна только внутри этой функции
  a = -1 // изменение глобальной переменной
  param2 = 2 // функция изменяет значение number, но это изменение не применяется к глобальной переменной
  // Т.к. передаваемые значения копируются в параметры функции и становятся локальными переменными (со ссылочным типом данных не сработает)

  console.log(param1, param2, param3, param4) // 1 2 3 undefined

  if (2 > 1) {
    return [param1, param2, param3, param4] // возврат значения
  } else {
    return false
  }

  // return // Результат функции с пустым return или без него – undefined
  console.log("hello") // после return код выполнятся не будет
}

// console.log(a3) // Error (переменные, объявленные внутри функции, видны только внутри этой функции)
// console.log(a) // -1 (функция обладает полным доступом к внешним переменным и может изменять их значение)

const result = baseFunction(1, number) // аргументы
console.log(result) // [ 1, 2, 3, undefined ]
console.log(number) // 999 (без изменения)
