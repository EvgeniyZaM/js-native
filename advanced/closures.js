// Замыкания

// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(arq) { // 3
   return function (arq2) { // 6
      return arq + arq2 // 3 + 6
   }
}

console.log(sum(3)(6))