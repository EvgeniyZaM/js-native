// Строковое преобразование:

// Глобальная функция String:
// console.log(String(1)) // '1'
// console.log(String(Infinity)) // 'Infinity'
// console.log(String(-Infinity)) // '-Infinity'
// console.log(String(NaN)) // 'NaN'
// console.log(String(1n)) // '1'
// console.log(String("str")) // 'str'
// console.log(String(true)) // 'true'
// console.log(String(false)) // 'false'
// console.log(String(null)) // 'null'
// console.log(String(undefined)) // 'undefined'

// Метод toString()
// let n = 1
// console.log(n.toString()) // '1'
// console.log(Infinity.toString()) // 'Infinity'
// console.log(-Infinity.toString()) // -Infinity
// console.log(NaN.toString()) // 'NaN'
// console.log(1n.toString()) // '1'
// console.log("str".toString()) // 'str'
// console.log(true.toString()) // 'true'
// console.log(false.toString()) // 'false'
// console.log(null.toString()) // Error
// console.log(undefined.toString()) // Error

// Численное преобразование:

// Глобальная функция Number:
// console.log(Number(1)) // 1
// console.log(Number(Infinity)) // Infinity
// console.log(Number(-Infinity)) // -Infinity
// console.log(Number(NaN)) // NaN
// console.log(Number(1n)) // 1
// console.log(Number("str")) // NaN
// console.log(Number("1")) // 1
// console.log(Number("   1   ")) // 1 (пробелы удаляются)
// console.log(Number("")) // 0
// console.log(Number("       ")) // 0 (пробелы удаляются)
// console.log(Number(true)) // 1
// console.log(Number(false)) // 0
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN

// Оператор +
// console.log(+1) // 1
// console.log(+Infinity) // Infinity
// console.log(+-Infinity) // -Infinity
// console.log(+NaN) // NaN
// console.log(+1n) // Error (нельзя преобразовывать BigInt в число с помощью оператора +)
// console.log(+"str") // NaN
// console.log(+"1") // 1
// console.log(+"   1   ") // 1 (пробелы удаляются)
// console.log(+"") // 0
// console.log(+"       ") // 0 (пробелы удаляются)
// console.log(+true) // 1
// console.log(+false) // 0
// console.log(+null) // 0
// console.log(+undefined) // NaN

// Численное преобразование происходит в математических функциях и выражениях:
// console.log("3" - "1") // 2
// console.log("3" / "1") // 3
// console.log("3" * "1") // 3
// console.log("3" + "1") // '31'
// console.log(3 - "1") // 2
// console.log(3 / "1") // 3
// console.log(3 * "1") // 3
// console.log(3 + "1") // '31'

// Логическое преобразование:

// Глобальная функция Boolean
// console.log(Boolean(0)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean(false)) // false
// console.log(Boolean("")) // false
// console.log(Boolean(1)) // true
// console.log(Boolean(" ")) // true
// console.log(Boolean(true)) // true
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(-Infinity)) // true
// console.log(Boolean(1n)) // true

// Логический оператор !!
// console.log(!!0) // false
// console.log(!!null)// false
// console.log(!!undefined) // false
// console.log(!!NaN) // false
// console.log(!!false) // false
// console.log(!!"") // false
// console.log(!!1) // true
// console.log(!!" ") // true
// console.log(!!true) // true
// console.log(!!Infinity) // true
// console.log(!!-Infinity) // true
// console.log(!!1n) // true
