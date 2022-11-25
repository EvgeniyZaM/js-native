// + (плюс) (каждый тип данных, не являющийся числом и строкой - преобразуется в число)
// Сложение числа со строгой преобразовывает результат в строку

// console.log(10 + 5) // 15
// console.log(10 + Infinity) // Infinity
// console.log(10 + -Infinity) // -Infinity
// console.log(10 + NaN) // NaN
// // console.log(10 + 1n) // Error
// console.log(10 + "str") // // '10str'
// console.log(10 + "1") // '101'
// console.log(10 + "   1  ") // '10   1'
// console.log(10 + "") // '10'
// console.log(10 + "   ") // '10   '
// console.log(10 + true) // 11
// console.log(10 + false) // 10
// console.log(10 + null) // 10
// console.log(10 + undefined) // NaN

// - (минус) (каждый тип данных, не являющийся числом - преобразуется в число)

// console.log(10 - 5) // 5
// console.log(10 - Infinity) // -Infinity
// console.log(10 - -Infinity) // Infinity
// console.log(10 - NaN) // NaN
// // console.log(10 - 1n) // Error
// console.log(10 - "str") // NaN
// console.log(10 - "1") // 9
// console.log(10 - "   1  ") // 9
// console.log(10 - "") // 0
// console.log(10 - "   ") // 0
// console.log(10 - true) // 9
// console.log(10 - false) // 10
// console.log(10 - null) // 10
// console.log(10 - undefined) // NaN

// * (умножить) (каждый тип данных, не являющийся числом - преобразуется в число)

// console.log(10 * 5) // 50
// console.log(10 * Infinity) // Infinity
// console.log(10 * -Infinity) // -Infinity
// console.log(10 * NaN) // NaN
// // console.log(10 * 1n) // Error
// console.log(10 * "str") // NaN
// console.log(10 * "1") // 10
// console.log(10 * "   1  ") // 10
// console.log(10 * "") // 0
// console.log(10 * "   ") // 0
// console.log(10 * true) // 10
// console.log(10 * false) // 0
// console.log(10 * null) // 0
// console.log(10 * undefined) // NaN

// / (разделить) (каждый тип данных, не являющийся числом - преобразуется в число)

// console.log(10 / 5) // 2
// console.log(10 / Infinity) // 0
// console.log(10 / -Infinity) // -0
// console.log(10 / NaN) // NaN
// // console.log(10 / 1n) // Error
// console.log(10 / "str") // NaN
// console.log(10 / "1") // 10
// console.log(10 / "   1  ") // 10
// console.log(10 / "") // Infinity
// console.log(10 / "   ") // Infinity
// console.log(10 / true) // 10
// console.log(10 / false) // Infinity
// console.log(10 / null) // Infinity
// console.log(10 / undefined) // NaN

// ** (возведение в степень)

// console.log(5 ** 0) // 1 (при любом умножении на 0, результат будет 1)
//
// console.log(5 ** 1) // 5 (умножение не происходит)
// console.log(5) // 5 (аналогичная запись)
//
// console.log(5 ** 2) // 25 (5 умножено на себя 2 раза)
// console.log(5 * 5) // 25 (аналогичная запись)
//
// console.log(5 ** 3) // 125 (5 умножено на себя 3 раза)
// console.log(5 * 5 * 5) // 125 (аналогичная запись)

// % (взятие остатка от деления)
// console.log( 5 % 2 ) // 1
// console.log( 8 % 3 ) // 2
// console.log( 8 % 4 ) // 0
