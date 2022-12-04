// Каждый тип данных, не являющийся числом - преобразуется в число, но:
// При использовании оператора +, со строками произойдет не преобразование, а конкатинация
// Любые математические операции с NaN возвращают NaN (кроме: NaN ** 0 равно 1)
// Если использовать [], то он преобразуется в строку

function functionDeclaration() {
}

const functionExpression = function () {
}
const arrowFunction = () => {
}

// * (умножение)
// console.log("" * 10) // 0
// console.log("  " * 10)  // 0
// console.log("  a  " * 10) // NaN
// console.log("  1  " * 10) // 10
// console.log("1" * 10) // 10
// console.log("a1" * 10) // NaN
// console.log(1 * 10) // 10
// console.log(0 * 10) // 0
// console.log(true * 10) // 10
// console.log(false * 10) // 0
// console.log(null * 10) // 0
// console.log(undefined * 10) // NaN
// // console.log(1n * 10) // Error
// // console.log(Symbol("id") * 10) // Error
// console.log(NaN * 10) // NaN
// console.log(Infinity * 10) // Infinity
// console.log(-Infinity * 10) // -Infinity
// console.log({} * 10) // NaN
// console.log(functionDeclaration * 10) // NaN
// console.log(functionExpression * 10) // NaN
// console.log(arrowFunction * 10) // NaN
// // Массив:
// console.log([] * 10) // 0
// console.log([""] * 10) // 0
// console.log(["  "] * 10) // 0
// console.log(["  a  "] * 10) // NaN
// console.log(["a", "b", "c"] * 10) // NaN
// console.log(["  1  "] * 10) // 10
// console.log(["1"] * 10) // 10
// console.log(["1", "2", "3"] * 10) // NaN
// console.log(["a1"] * 10) // NaN
// console.log([1] * 10) // 10
// console.log([0] * 10) // 0
// console.log([1, 2, 3] * 10) // NaN
// console.log([true] * 10) // NaN
// console.log([false] * 10) // NaN
// console.log([null] * 10) // 0
// console.log([undefined] * 10) // 0
// console.log([1n] * 10) // 10
// console.log([NaN] * 10) // NaN
// console.log([Infinity] * 10) // Infinity
// console.log([-Infinity] * 10) // -Infinity
// console.log([null, undefined] * 10) // NaN
// console.log([0, null, undefined] * 10) // NaN
// console.log([null, undefined, 0] * 10) // NaN
// console.log([1, "1", true, NaN, Infinity, -Infinity, undefined, null] * 10) // NaN
// console.log([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]] * 10) // NaN
// console.log([{}] * 10) // NaN
// console.log([functionDeclaration] * 10) // NaN
// console.log([functionExpression] * 10) // NaN
// console.log([arrowFunction] * 10) // NaN

// / (деление)
// console.log(10 / "") // Infinity
// console.log(10 / "  ")  // Infinity
// console.log(10 / "  a  ") // NaN
// console.log(10 / "  1  ") // 10
// console.log(10 / "1") // 10
// console.log(10 / "a1") // NaN
// console.log(10 / 1) // 10
// console.log(10 / 0) // Infinity
// console.log(10 / true) // 10
// console.log(10 / false) // Infinity
// console.log(10 / null) // Infinity
// console.log(10 / undefined) // NaN
// // console.log(10 / 1n) // Error
// // console.log(Symbol("id") / 10) // Error
// console.log(10 / NaN) // NaN
// console.log(10 / Infinity) // 0
// console.log(10 / -Infinity) // -0
// console.log(10 / {}) // NaN
// console.log(10 / functionDeclaration) // NaN
// console.log(10 / functionExpression) // NaN
// console.log(10 / arrowFunction) // NaN
// // Массив:
// console.log(10 / []) // Infinity
// console.log(10 / [""]) // Infinity
// console.log(10 / ["  "]) // Infinity
// console.log(10 / ["  a  "]) // NaN
// console.log(10 / ["a", "b", "c"]) // NaN
// console.log(10 / ["  1  "]) // 10
// console.log(10 / ["1"]) // 10
// console.log(10 / ["1", "2", "3"]) // NaN
// console.log(10 / ["a1"]) // NaN
// console.log(10 / [1]) // 10
// console.log(10 / [0]) // Infinity
// console.log(10 / [1, 2, 3]) // NaN
// console.log(10 / [true]) // NaN
// console.log(10 / [false]) // NaN
// console.log(10 / [null]) // Infinity
// console.log(10 / [undefined]) // Infinity
// console.log(10 / [1n]) // 10
// console.log(10 / [NaN]) // NaN
// console.log(10 / [Infinity]) // 0
// console.log(10 / [-Infinity]) // -0
// console.log(10 / [null, undefined]) // NaN
// console.log(10 / [0, null, undefined]) // NaN
// console.log(10 / [null, undefined, 0]) // NaN
// console.log(10 / [1, "1", true, NaN, Infinity, -Infinity, undefined, null]) // NaN
// console.log(10 / [1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]]) // NaN
// console.log(10 / [{}]) // NaN
// console.log(10 / [functionDeclaration]) // NaN
// console.log(10 / [functionExpression]) // NaN
// console.log(10 / [arrowFunction]) // NaN

// - (вычитание)
// console.log(10 - "") // 10
// console.log(10 - "  ")  // 10
// console.log(10 - "  a  ") // NaN
// console.log(10 - "  1  ") // 9
// console.log(10 - "1") // 9
// console.log(10 - "a1") // NaN
// console.log(10 - 1) // 9
// console.log(10 - 0) // 10
// console.log(10 - true) // 9
// console.log(10 - false) // 10
// console.log(10 - null) // 10
// console.log(10 - undefined) // NaN
// // console.log(10 - 1n) // Error
// // console.log(Symbol("id") - 10) // Error
// console.log(10 - NaN) // NaN
// console.log(10 - Infinity) // -Infinity
// console.log(10 - -Infinity) // Infinity
// console.log(10 - {}) // NaN
// console.log(10 - functionDeclaration) // NaN
// console.log(10 - functionExpression) // NaN
// console.log(10 - arrowFunction) // NaN
// // Массив:
// console.log(10 - []) // 10
// console.log(10 - [""]) // 10
// console.log(10 - ["  "]) // 10
// console.log(10 - ["  a  "]) // NaN
// console.log(10 - ["a", "b", "c"]) // NaN
// console.log(10 - ["  1  "]) // 9
// console.log(10 - ["1"]) // 9
// console.log(10 - ["1", "2", "3"]) // NaN
// console.log(10 - ["a1"]) // NaN
// console.log(10 - [1]) // 9
// console.log(10 - [0]) // 10
// console.log(10 - [1, 2, 3]) // NaN
// console.log(10 - [true]) // NaN
// console.log(10 - [false]) // NaN
// console.log(10 - [null]) // 10
// console.log(10 - [undefined]) // 10
// console.log(10 - [1n]) // 9
// console.log(10 - [NaN]) // NaN
// console.log(10 - [Infinity]) // -Infinity
// console.log(10 - [-Infinity]) // Infinity
// console.log(10 - [null, undefined]) // NaN
// console.log(10 - [0, null, undefined]) // NaN
// console.log(10 - [null, undefined, 0]) // NaN
// console.log(10 - [1, "1", true, NaN, Infinity, -Infinity, undefined, null]) // NaN
// console.log(10 - [1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]]) // NaN
// console.log(10 - [{}]) // NaN
// console.log(10 - [functionDeclaration]) // NaN
// console.log(10 - [functionExpression]) // NaN
// console.log(10 - [arrowFunction]) // NaN

// + (сложение)
// console.log(10 + "") // "10"
// console.log(10 + "  ")  // "10  "
// console.log(10 + "  a  ") // "10   a   "
// console.log(10 + "  1  ") // "10  1  "
// console.log(10 + "1") // "101"
// console.log(10 + "a1") // "10a1"
// console.log(10 + 1) // 11
// console.log(10 + 0) // 10
// console.log(10 + true) // 11
// console.log(10 + false) // 10
// console.log(10 + null) // 10
// console.log(10 + undefined) // NaN
// // console.log(10 + 1n) // Error
// // console.log(Symbol("id") + 10) // Error
// console.log(10 + NaN) // NaN
// console.log(10 + Infinity) // Infinity
// console.log(10 + -Infinity) // -Infinity
// console.log(10 + {}) // "10[object Object]"
// console.log(10 + functionDeclaration) // "10function functionDeclaration() {}"
// console.log(10 + functionExpression) // "10function () {}"
// console.log(10 + arrowFunction) // "10() => {}"
// Массив:
// console.log(10 + []) // "10"
// console.log(10 + [""]) // "10"
// console.log(10 + ["  "]) // "10  "
// console.log(10 + ["  a  "]) // "10  a  "
// console.log(10 + ["a", "b", "c"]) // "10a,b,c"
// console.log(10 + ["  1  "]) // "10  1  "
// console.log(10 + ["1"]) // "101"
// console.log(10 + ["1", "2", "3"]) // "101,2,3"
// console.log(10 + ["a1"]) // "10a1"
// console.log(10 + [1]) // "101"
// console.log(10 + [0]) // "100"
// console.log(10 + [1, 2, 3]) // "101,2,3"
// console.log(10 + [true]) // "10true"
// console.log(10 + [false]) // "10false"
// console.log(10 + [null]) // "10"
// console.log(10 + [undefined]) // "10"
// console.log(10 + [1n]) // "101"
// console.log(10 + [NaN]) // "10NaN"
// console.log(10 + [Infinity]) // "10Infinity"
// console.log(10 + [-Infinity]) // "10-Infinity"
// console.log(10 + [null, undefined]) // "10,"
// console.log(10 + [0, null, undefined]) // "100,,"
// console.log(10 + [null, undefined, 0]) // "10,,0"
// console.log(10 + [1, "1", true, NaN, Infinity, +Infinity, undefined, null]) // "101,1,true,NaN,Infinity,Infinity,,"
// console.log(10 + [1, ["1", [true, [NaN, [Infinity, [+Infinity, [undefined, [null]]]]]]]]) // "101,1,true,NaN,Infinity,Infinity,,"
// console.log(10 + [{}]) // "10[object Object]"
// console.log(10 + [functionDeclaration]) // "10function functionDeclaration() {}"
// console.log(10 + [functionExpression]) // "10function () {}"
// console.log(10 + [arrowFunction]) // "10() => {}"

// ** (возведение в степень)
// console.log(5 ** 0) // 1 (при любом умножении на 0, результат будет 1)

// console.log(5 ** 1) // 5 (умножение не происходит)
// console.log(5) // 5 (аналогичная запись)

// console.log(5 ** 2) // 25 (5 умножено на себя 2 раза)
// console.log(5 * 5) // 25 (аналогичная запись)

// console.log(5 ** 3) // 125 (5 умножено на себя 3 раза)
// console.log(5 * 5 * 5) // 125 (аналогичная запись)

// % (взятие остатка от деления)
// console.log( 5 % 2 ) // 1
// console.log( 8 % 3 ) // 2
// console.log( 8 % 4 ) // 0
