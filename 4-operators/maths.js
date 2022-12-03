// Любые математические операции с NaN возвращают NaN (кроме: NaN ** 0 равно 1)
// Если использовать [], то он преобразуется в строку, с помощью метода toString()

// * (умножение)
// Каждый тип данных, не являющийся числом - преобразуется в число
// console.log("" * 10) // 0
// console.log("  " * 10) // 0
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
// console.log(NaN * 10) // NaN
// console.log(Infinity * 10) // Infinity
// console.log(-Infinity * 10) // -Infinity

// / (деление)
// Каждый тип данных, не являющийся числом - преобразуется в число
// console.log("" / 10) // 0
// console.log("  " / 10) // 0
// console.log("  a  " / 10) // NaN
// console.log("  1  " / 10) // 0.1
// console.log("1" / 10) // 0.1
// console.log("a1" / 10) // NaN
// console.log(1 / 10) // 0.1
// console.log(0 / 10) // 0
// console.log(true / 10) // 0.1
// console.log(false / 10) // 0
// console.log(null / 10) // 0
// console.log(undefined / 10) // NaN
// console.log(NaN / 10) // NaN
// console.log(Infinity / 10) // Infinity
// console.log(-Infinity / 10) // -Infinity

// - (вычитание)
// Каждый тип данных, не являющийся числом - преобразуется в число
// console.log(10 - "") // 10
// console.log(10 - "  ") // 10
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
// console.log(10 - NaN) // NaN
// console.log(10 - Infinity) // -Infinity
// console.log(10 - -Infinity) // Infinity

// + (сложение)
// Каждый тип данных, не являющийся числом - преобразуется в число.
// При сложении со строками - происходит конкатенация (единственное отличие от умножение, деление, вычитание)
// console.log(10 + "") // "10"
// console.log(10 + "  ") // "10"
// console.log(10 + "  a  ") // "10  a  "
// console.log(10 + "  1  ") // "10  1  "
// console.log(10 + "1") // "101"
// console.log(10 + "a1") // "10a1"
// console.log(10 + 1) // 11
// console.log(10 + 0) // 10
// console.log(true) // 11
// console.log(10 + false) // 10
// console.log(10 + null) // 10
// console.log(10 + undefined) // NaN
// console.log(10 + NaN) // NaN
// console.log(10 + Infinity) // Infinity
// console.log(10 + -Infinity) // -Infinity

// Итог операторов: *, /, -, +
// console.log(10 / 2 - "" * "  1  " + true - false - null + "" + "4" - 4) // 60

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

// Ссылочный тип данных:
// console.log([] + 1) // "1"
// console.log([] + true) // "true"
// console.log([1] + 1) // "11"
// console.log([1, 2] + 1) // "1,21"
// console.log([10] - 1) // 9
