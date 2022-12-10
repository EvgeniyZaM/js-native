function functionDeclaration() {
}

const functionExpression = function () {
}
const arrowFunction = () => {
}

// String(value) - преобразует в строку
// Метод toString() работает аналогично, но не преобразует null и undefined, т.к. у них нет методов
console.log(String("a")) // "a"
console.log(String(1)) // "1"
console.log(String(true)) // "true"
console.log(String(false)) // "false"
console.log(String(null)) // "null"
console.log(String(undefined)) // "undefined"
console.log(String(1n)) // "1"
console.log(String(Symbol("id"))) // "Symbol(id)"
console.log(String(NaN)) // "NaN"
console.log(String(Infinity)) // "Infinity"
console.log(String(-Infinity)) // "-Infinity"
console.log(String({})) // [object Object]
console.log(String(functionDeclaration)) // "function functionDeclaration() {}"
console.log(String(functionExpression)) // "function () {}"
console.log(String(arrowFunction)) // "()=>{}"

// С массивом результат особенный: (аналогичный результат будет с использованием toString())
// Если в массиве будет хотя бы 1 объект, вернется undefined
console.log(String([""])) // ""
console.log(String(["  "])) // "  "
console.log(String(["  a  "])) // "  a  "
console.log(String(["a", "b", "c"])) // "a,b,c"
console.log(String(["  1  "])) // "  1  "
console.log(String(["1"])) // "1"
console.log(String(["1", "2", "3"])) // "1,2,3"
console.log(String(["a1"])) // "a1"
console.log(String([1])) // "1"
console.log(String([0])) // "0"
console.log(String([1, 2, 3])) // "1,2,3"
console.log(String([true])) // "true"
console.log(String([false])) // "false"
console.log(String([null])) // ""
console.log(String([undefined])) // ""
console.log(String([1n])) // "1"
console.log(String([NaN])) // "NaN"
console.log(String([Infinity])) // "Infinity"
console.log(String([-Infinity])) // "-Infinity"
console.log(String([null, undefined])) // ","
console.log(String([0, null, undefined])) // "0,,"
console.log(String([null, undefined, 0])) // ",,0"
console.log(String([1, "1", true, NaN, Infinity, -Infinity, undefined, null])) // "1,1,true,NaN,Infinity,-Infinity,,"
console.log(String([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]])) // "1,1,true,NaN,Infinity,-Infinity,,"
console.log(String[{}]) // undefined
console.log(String([functionDeclaration])) // "function functionDeclaration(){}"
console.log(String([functionExpression])) // "function(){}"
console.log(String([arrowFunction])) // ()=>{}

// Number(value) - преобразует в число
// Можно преобразовать с помощью унарного оператора +
// Пробелы в строках удаляются и остается то что остается
console.log(Number("")) // 0
console.log(Number("  ")) // 0
console.log(Number("  a  ")) // NaN
console.log(Number("  1  ")) // 1
console.log(Number("1")) // 1
console.log(Number("a1")) // NaN
console.log(Number(1)) // 1
console.log(Number(0)) // 0
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(1n)) // 1
// console.log(Number(Symbol("id"))) // Error
console.log(Number(NaN)) // NaN
console.log(Number(Infinity)) // Infinity
console.log(Number(-Infinity)) // -Infinity
console.log(Number({})) // NaN (что бы в объекте не находилось - результат будет NaN)
console.log(Number(functionDeclaration)) // NaN
console.log(Number(functionExpression)) // NaN
console.log(Number(arrowFunction)) // NaN
// С массивом результат особенный
console.log(Number([""])) // 0
console.log(Number(["  "])) // 0
console.log(Number(["  a  "])) // NaN
console.log(Number(["a", "b", "c"])) // NaN
console.log(Number(["  1  "])) // 1
console.log(Number(["1"])) // 1
console.log(Number(["1", "2", "3"])) // NaN
console.log(Number(["a1"])) // NaN
console.log(Number([1])) // 1
console.log(Number([0])) // 0
console.log(Number([1, 2, 3])) // NaN
console.log(Number([true])) // NaN
console.log(Number([false])) // NaN
console.log(Number([null])) // 0
console.log(Number([null, null])) // NaN
console.log(Number([undefined])) // 0
console.log(Number([undefined, undefined])) // NaN
console.log(Number([1n])) // 1
console.log(Number([1n, 2n])) // NaN
console.log(Number([NaN])) // NaN
console.log(Number([Infinity])) // Infinity
console.log(Number([Infinity, Infinity])) // NaN
console.log(Number([-Infinity, -Infinity])) // NaN
console.log(Number([null, undefined])) // NaN
console.log(Number([0, null, undefined])) // NaN
console.log(Number([null, undefined, 0])) // NaN
console.log(Number([1, "1", true, NaN, Infinity, -Infinity, undefined, null])) // NaN
console.log(Number([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]])) // NaN
console.log(Number[{}]) // undefined
console.log(Number([functionDeclaration])) // NaN
console.log(Number([functionExpression])) // NaN
console.log(Number([arrowFunction])) // NaN

// Boolean(value) - преобразует в boolean
// что бы в объекте и массиве не находилось - результат будет true (кроме: [{}])
// Можно преобразовать с помощью двойного НЕ
console.log(Boolean("")) // false
console.log(Boolean("  ")) // true
console.log(Boolean("  a  ")) // true
console.log(Boolean("  1  ")) // true
console.log(Boolean("1")) // true
console.log(Boolean("a1")) // true
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(true)) // true
console.log(Boolean(false)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(1n)) // true
console.log(Boolean(Symbol("id"))) // true
console.log(Boolean(NaN)) // false
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true
console.log(Boolean({})) // true
console.log(Boolean(functionDeclaration)) // true
console.log(Boolean(functionExpression)) // true
console.log(Boolean(arrowFunction)) // true
console.log(Boolean([])) // true
console.log(Boolean[{}]) // undefined
