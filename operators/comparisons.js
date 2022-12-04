// Все операторы сравнения возвращают boolean значение
// Каждый тип данных, не являющийся числом - преобразуется в число, (с операторами  === и !== преобразование не происходит, также при сравнении строки  со строкой не происходит)
// При сравнениях с [], происходит преобразование в строку
// Специальное правило языка - при нестрогом null и undefined равны друг другу и не равны никаким другим значениям
// Любое сравнение с NaN возвращает false (кроме Object.is(NaN, NaN))
// Любое сравнение с undefined возвращает false, кроме null == undefined
// 0 и -0 всегда равны друг другу, как в строгом, так и не строгом равенстве

function functionDeclaration() {
}

const functionExpression = function () {
}
const arrowFunction = () => {
}

// >, >=, <, <= (больше, больше или равно, меньше, меньше или равно)
console.log("" >= 1) // false
console.log("  " >= 1)  // false
console.log("  a  " >= 1) // false
console.log("  1  " >= 1) // true
console.log("1" >= 1) // true
console.log("a1" >= 1) // false
console.log(1 >= 1) // true
console.log(0 >= 1) // false
console.log(0 >= -0) // true
console.log(true >= 1) // true
console.log(false >= 1) // false
console.log(null >= 1) // false
console.log(null >= 0) // true
console.log(undefined >= 10) // false
console.log(1n >= 1) // true
// console.log(Symbol("id") >= 1) // Error
console.log(NaN >= 1) // false
console.log(Infinity >= 1) // true
console.log(-Infinity >= 1) // false
console.log({} >= 1) // false
console.log(functionDeclaration >= 1) // false
console.log(functionExpression >= 1) // false
console.log(arrowFunction >= 1) // false
// Массив:
console.log([] >= 1) // false
console.log([""] >= 1) // false
console.log(["  "] >= 1) // false
console.log(["  a  "] >= 1) // false
console.log(["a", "b", "c"] >= 1) // false
console.log(["  1  "] >= 1) // true
console.log(["1"] >= 1) // true
console.log(["1", "2", "3"] >= 1) // false
console.log(["a1"] >= 1) // false
console.log([1] >= 1) // true
console.log([0] >= 1) // false
console.log([1, 2, 3] >= 1) // false
console.log([true] >= 1) // false
console.log([false] >= 1) // false
console.log([null] >= 1) // false
console.log([undefined] >= 1) // false
console.log([1n] >= 1) // true
console.log([NaN] >= 1) // false
console.log([Infinity] >= 1) // true
console.log([-Infinity] >= 1) // false
console.log([null, undefined] >= 1) // false
console.log([0, null, undefined] >= 1) // false
console.log([null, undefined, 0] >= 1) // false
console.log([1, "1", true, NaN, Infinity, -Infinity, undefined, null] >= 1) // false
console.log([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]] >= 1) // false
console.log([{}] >= 1) // false
console.log([functionDeclaration] >= 1) // false
console.log([functionExpression] >= 1) // false
console.log([arrowFunction] >= 1) // false

// ==, !== (равенство, неравенство)
console.log("" == 0) // true
console.log("  " == 0) // true
console.log("  a  " == 0) // false
console.log("  1  " == 0) // false
console.log("  1  " == 1) // true
console.log("0" == 0) // true
console.log("a1" == 1) // false
console.log(1 == 1) // true
console.log(true == 1) // true
console.log(false == 0) // true
console.log(undefined == 0) // false
console.log(NaN == 0) // false
console.log(Infinity == 0) // false
console.log(-Infinity == 0) // false
console.log(null == 0) // false
console.log(undefined == null) // true
console.log(0 == -0) // true
console.log("0" == "") // false
console.log("" == 1) // false
console.log("  " == 1)  // false
console.log("  a  " == 1) // false
console.log("  1  " == 1) // true
console.log("1" == 1) // true
console.log("a1" == 1) // false
console.log(1 == 1) // true
console.log(0 == 1) // false
console.log(0 == -0) // true
console.log(true == 1) // true
console.log(false == 1) // false
console.log(null == 1) // false
console.log(null == 0) // false
console.log(undefined == 10) // false
console.log(1n == 1) // true
console.log(Symbol("id") == 1) // false
console.log(NaN == 1) // false
console.log(Infinity == 1) // false
console.log(-Infinity == 1) // false
console.log({} == 1) // false
console.log(functionDeclaration == 1) // false
console.log(functionExpression == 1) // false
console.log(arrowFunction == 1) // false
console.log([] == []) // false
console.log({} == {}) // false
console.log([] == 0) // true
console.log([] == "0") // false
console.log([] == "") // true
console.log([1] == "1") // true
console.log([1, 2, 3] == "1,2,3") // true
console.log([undefined] == "") // true
console.log([null] == "") // true
console.log([null, undefined] == ",") // true
console.log([1, null, undefined] == "1,,") // true
console.log([null, undefined, 1] == ",,1") // true
console.log([1, "1", true, NaN, Infinity, -Infinity, undefined, null] == "1,1,true,NaN,Infinity,-Infinity,,") // true

// ===, !== (строгое равенство, строгое неравенство)
console.log("" === 0) // false
console.log("  " === 0) // false
console.log("  a  " === 0) // false
console.log("  1  " === 0) // false
console.log("  1  " === 1) // false
console.log("0" === 0) // false
console.log("a1" === 1) // false
console.log(1 === 1) // true
console.log(true === 1) // false
console.log(false === 0) // false
console.log(undefined === 0) // false
console.log(NaN === 0) // false
console.log(Infinity === 0) // false
console.log(-Infinity === 0) // false
console.log(null === 0) // false
console.log(undefined === null) // false
console.log("0" === "") // false
console.log("" === 1) // false
console.log("  " === 1)  // false
console.log("  a  " === 1) // false
console.log("  1  " === 1) // false
console.log("1" === 1) // false
console.log("a1" === 1) // false
console.log(1 === 1) // true
console.log(0 === 1) // false
console.log(0 === -0) // true
console.log(true === 1) // false
console.log(false === 1) // false
console.log(null === 1) // false
console.log(null === 0) // false
console.log(undefined === 10) // false
console.log(1n === 1) // false
console.log(Symbol("id") === 1) // false
console.log(NaN === 1) // false
console.log(Infinity === 1) // false
console.log(-Infinity === 1) // false
console.log({} === 1) // false
console.log(functionDeclaration === 1) // false
console.log(functionExpression === 1) // false
console.log(arrowFunction === 1) // false
console.log([] === []) // false
console.log({} === {}) // false

// Сравнение строк (строки сравниваются посимвольно)
// Используется кодировка Unicode, а не настоящий алфавит

// Алгоритм сравнения двух строк:
// Сначала сравниваются первые символы строк.
// Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.
// Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
// Сравнение продолжается, пока не закончится одна из строк.
// Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.

// console.log("а" > "я") // false
// console.log("а" > "Я") // true
// console.log("ааая" > "аааааааааа") // true
// console.log("ааа" > "ааа") // false
// console.log("аааа" > "ааа") // true
