// Замыкание

let globalLexicalEnvironment = { // Глобальное лексическое окружение
   environmentRecord: { // Окружающая среда
      сounter: 'Function',
      resultCounter: 'Function', // undefined => 'Function'
      resultCounter2: 'Function', // undefined => 'Function'
   },
   outer: null // Внешнее лексическое окружение ( Для глобальной области видимости нету внешнего лексического окружения )
}

function сounter() {
   let counterLexicalEnvironment = { // Внутреннее лексическое окружение вызова функции 'resultCounter'
      environmentRecord: { // Окружающая среда
         count: 2, // undefined => 0 => 1 => 2
         anonymousFunction: 'Function'
      },
      outer: globalLexicalEnvironment // Ссылка на внешнее лексическое окружение
   }
   let counterLexicalEnvironment2 = { // Внутреннее лексическое окружение вызова функции 'resultCounter2'
      environmentRecord: { // Окружающая среда
         count: 2, // undefined => 0 => 1 => 2
         anonymousFunction: 'Function'
      },
      outer: globalLexicalEnvironment // Ссылка на внешнее лексическое окружение
   }
   let count = 0
   return function () {
      resultCounterLexicalEnvironment = { // Внутреннее лексическое окружение 1 вызова функции resultCounter()
         environmentRecord: { // Окружающая среда

         },
         outer: counterLexicalEnvironment // Ссылка на внешнее лексическое окружение 
      }
      resultCounterLexicalEnvironment2 = { // Внутреннее лексическое окружение 2 вызова функции resultCounter()
         environmentRecord: { // Окружающая среда

         },
         outer: counterLexicalEnvironment // Ссылка на внешнее лексическое окружение
      }
      resultCounter2LexicalEnvironment = { // Внутреннее лексическое окружение 1 вызова функции resultCounter2()
         environmentRecord: { // Окружающая среда

         },
         outer: counterLexicalEnvironment2 // Ссылка на внешнее лексическое окружение
      }
      resultCounter2LexicalEnvironment2 = { // Внутреннее лексическое окружение 2 вызова функции resultCounter2()
         environmentRecord: { // Окружающая среда

         },
         outer: counterLexicalEnvironment2 // Ссылка на внешнее лексическое окружение
      }
      return ++count
   }
}

let resultCounter = сounter() // При вызове создается новое внутреннее лексическое окружение ( counterLexicalEnvironment )
console.log(resultCounter()) // При вызове создается новое внутреннее лексическое окружение ( resultCounterLexicalEnvironment )
console.log(resultCounter()) // При вызове создается новое внутреннее лексическое окружение ( resultCounterLexicalEnvironment2 )
let resultCounter2 = сounter() // При вызове создается новое внутреннее лексическое окружение ( counterLexicalEnvironment2 )
console.log(resultCounter2()) // При вызове создается новое внутреннее лексическое окружение ( resultCounter2LexicalEnvironment )
console.log(resultCounter2()) // При вызове создается новое внутреннее лексическое окружение ( resultCounter2LexicalEnvironment2 )

/* Console: 
1
2
1
2
*/