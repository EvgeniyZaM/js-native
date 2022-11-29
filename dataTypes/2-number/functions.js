// toFixed()
// Округляет на энное количество знаков после запятой в ближайшую сторону, аналогично методу Math.round и возвращает строку
console.log(1.1111111.toFixed()) // 1 (по умолчанию в качестве аргумента 0)
console.log(1.14.toFixed(1)) // 1.1 (округление в меньшую сторону)
console.log(1.15.toFixed(1)) // 1.1 (округление в меньшую сторону)
console.log(1.16.toFixed(1)) // 1.2 (округление в большую сторону)
console.log(1.0.toFixed(5)) // 1.00000 (добавлены нули, чтобы получить 5 знаков после запятой)

// isNaN
// Преобразует переданный аргумент в число и проверяет, является ли аргумент NaN и возвращает boolean значение
console.log(isNaN("")) // false
console.log(isNaN("  ")) // false
console.log(isNaN("  a  ")) // true
console.log(isNaN("  1  ")) // false
console.log(isNaN("1")) // false
console.log(isNaN("a1")) // true
console.log(isNaN(1)) // false
console.log(isNaN(0)) // false
console.log(isNaN(true)) // false
console.log(isNaN(false)) // false
console.log(isNaN(null)) // false
console.log(isNaN(undefined)) // true
console.log(isNaN(NaN)) // true
console.log(isNaN(Infinity)) // false
console.log(isNaN(-Infinity)) // false

// Number.isNaN
// Более строгая версия функции isNaN, которая не преобразует переданный аргумент в число
// Проверяет, является ли аргумент числом, и если да, то проверяет, является ли оно NaN
console.log(Number.isNaN("")) // false
console.log(Number.isNaN("  ")) // false
console.log(Number.isNaN("  a  ")) // false
console.log(Number.isNaN("  1  ")) // false
console.log(Number.isNaN("1")) // false
console.log(Number.isNaN("a1")) // false
console.log(Number.isNaN(1)) // false
console.log(Number.isNaN(0)) // false
console.log(Number.isNaN(true)) // false
console.log(Number.isNaN(false)) // false
console.log(Number.isNaN(null)) // false
console.log(Number.isNaN(undefined)) // false
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(Infinity)) // false
console.log(Number.isNaN(-Infinity)) // false
console.log(Number.isNaN("str" / NaN)) // true

// isFinite
// Преобразует переданный аргумент в число и проверяет, является ли аргумент обычным числом (т.е. не NaN/Infinity/-Infinity) и возвращает boolean значение
console.log(isFinite("")) // true
console.log(isFinite("  ")) // true
console.log(isFinite("  a  ")) // false
console.log(isFinite("  1  ")) // true
console.log(isFinite("1")) // true
console.log(isFinite("a1")) // false
console.log(isFinite(1)) // true
console.log(isFinite(0)) // true
console.log(isFinite(true)) // true
console.log(isFinite(false)) // true
console.log(isFinite(null)) // true
console.log(isFinite(undefined)) // false
console.log(isFinite(NaN)) // false
console.log(isFinite(Infinity)) // false
console.log(isFinite(-Infinity)) // false

// Number.isFinite
// Более строгая версия функции isFinite, которая не преобразует переданный аргумент в число
// Проверяет, является ли аргумент числом, и если да, то проверяет, что оно не является NaN/Infinity/-Infinity
console.log(Number.isFinite("")) // false
console.log(Number.isFinite("  ")) // false
console.log(Number.isFinite("  a  ")) // false
console.log(Number.isFinite("  1  ")) // false
console.log(Number.isFinite("1")) // false
console.log(Number.isFinite("a1")) // false
console.log(Number.isFinite(1)) // true
console.log(Number.isFinite(0)) // true
console.log(Number.isFinite(true)) // false
console.log(Number.isFinite(false)) // false
console.log(Number.isFinite(null)) // false
console.log(Number.isFinite(undefined)) // false
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite(-Infinity)) // false

// parseInt
// Преобразует строку в число, убирает дробную часть, включая символы справа от числа и возвращает целое число
console.log(parseInt("1.11")) // 1
console.log(parseInt("1.11.1")) // 1
console.log(parseInt("100.11px")) // 100
console.log(parseInt("px100.11")) // NaN (на первом символе происходит остановка чтения)

// parseFloat
// Преобразует строку в число, убирает символы справа от числа и возвращает дробное число
console.log(parseFloat("1.11")) // 1.11
console.log(parseFloat("1.11.1")) // 1.11 (произошла остановка чтения на второй строке)
console.log(parseFloat("100.11px")) // 100.11
console.log(parseFloat("px100.11")) // NaN (на первом символе происходит остановка чтения)
