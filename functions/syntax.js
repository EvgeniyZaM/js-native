// Function Declaration
// console.log(functionDeclaration(1)) // 6
function functionDeclaration(a = 10, b = 5) { // Параметры по умолчанию
  return a + b // Все что после return - выполняться не будет!
  console.log("???")
}

// Function Expression
// console.log(functionExpression(1)) // Error
const functionExpression = function (a = 10, b = 5) {
  return a + b // Все что после return - выполняться не будет!
  console.log("???")
}

// Arrow Function
// console.log(arrowFunction(1)) // Error
const arrowFunction = (a = 10, b = 5) => {
  return a + b // Все что после return - выполняться не будет!
  console.log("???")
}

const arrowFunction2 = a => a + 5

console.log(arrowFunction(10)) // 15
console.log(arrowFunction2(10)) // 15
