// 8 основных типов данных:

// 1. number (число)
const number = 1 // Целое число
const number2 = 1.1 // Число с плавающей точкой

// Специальные числовые значения:
// 1. Infinity (математическая бесконечность)
// Можно получить, разделив на 0 любое число или присвоить его явно:
const n = 1 / 0 // Infinity
const n2 = Infinity
// 2. -Infinity (отрицательная математическая бесконечность)
const n3 = -Infinity
// 3. NaN (результат неправильной математической операции)
// Любая математическая операция с NaN возвращает NaN (кроме одного случая, в первом примере)
const n4 = NaN ** 0 // 1
const n5 = NaN + 1 // NaN
const n6 = "не число" / 1 // NaN

// 2. bigint (целое число произвольной длинны)
// Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала
const bi = 1n

// 3. string (строка)
const s = "hello"

// 4. boolean (логический)
const b = true
const b2 = false

// 5. null (пусто)
const nl = null

// 6. undefined (значение не определено)
const u = undefined
let u2
// console.log(u2) // undefined

// 7. symbol (уникальный идентификатор)

// 8. object (ссылочный тип данных)
const obj = {a: 1}
const arr = [1]

function f() {

}
