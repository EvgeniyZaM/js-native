// Преобразование в string с помощью глобальной функции String()
// Можно преобразовать с помощью метода toString() (не преобразовывает null и undefined, так как у них нету методов)
// console.log(String("")) // ""
// console.log(String("  ")) // "  "
// console.log(String("  a  ")) // "  a  "
// console.log(String("  1  ")) // "  1  "
// console.log(String("1")) // "1"
// console.log(String("a1")) // "a1"
// console.log(String(1)) // "1"
// console.log(String(0)) // "0"
// console.log(String(true)) // "true"
// console.log(String(false)) // "false"
// console.log(String(null)) // "null"
// console.log(String(undefined)) // "undefined"
// console.log(String(NaN)) // "NaN"
// console.log(String(Infinity)) // "Infinity"
// console.log(String(-Infinity)) // "-Infinity"

// Преобразование в number с помощью глобальной функции Number()
// Можно преобразовать с помощью унарного оператора +
// console.log(Number("")) // 0
// console.log(Number("  ")) // 0 // Пробелы удаляются и остается ""
// console.log(Number("  a  ")) // NaN // Пробелы удаляются и остается "a"
// console.log(Number("  1  ")) // 1 Пробелы удаляются и остается "1"
// console.log(Number("1")) // 1
// console.log(Number("a1")) // NaN
// console.log(Number(1)) // 1
// console.log(Number(0)) // 0
// console.log(Number(true)) // 1
// console.log(Number(false)) // 0
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(NaN)) // NaN
// console.log(Number(Infinity)) // Infinity
// console.log(Number(-Infinity)) // -Infinity

// Преобразование в boolean с помощью глобальной функции Boolean()
// Можно преобразовать с помощью двойного НЕ
// console.log(Boolean("")) // false
// console.log(Boolean("  ")) // true
// console.log(Boolean("  a  ")) // true
// console.log(Boolean("  1  ")) // true
// console.log(Boolean("1")) // true
// console.log(Boolean("a1")) // true
// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false
// console.log(Boolean(true)) // true
// console.log(Boolean(false)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(-Infinity)) // true

// Ссылочный тип данных:
// Аналогичный результат будет с использованием toString()
// Если в массиве будет хотя бы 1 объект, вернется undefined
// console.log(String([""])) // ""
// console.log(String(["  "])) // "  "
// console.log(String(["  a  "])) // "  a  "
// console.log(String(["a", "b", "c"])) // "a,b,c"
// console.log(String(["  1  "])) // "  1  "
// console.log(String(["1"])) // "1"
// console.log(String(["1", "2", "3"])) // "1,2,3"
// console.log(String(["a1"])) // "a1"
// console.log(String([1])) // "1"
// console.log(String([0])) // "0"
// console.log(String([1, 2, 3])) // "1,2,3"
// console.log(String([true])) // "true"
// console.log(String([false])) // "false"
// console.log(String([null])) // ""
// console.log(String([undefined])) // ""
// console.log(String([NaN])) // "NaN"
// console.log(String([Infinity])) // "Infinity"
// console.log(String([-Infinity])) // "-Infinity"
// console.log(String([null, undefined])) // ","
// console.log(String([0, null, undefined])) // "0,,"
// console.log(String([null, undefined, 0])) // ",,0"
// console.log(String([1, "1", true, NaN, Infinity, -Infinity, undefined, null])) // 1,1,true,NaN,Infinity,-Infinity,,
// console.log(String([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]])) // 1,1,true,NaN,Infinity,-Infinity,,
// console.log(String[{a: 1}]) // undefined
// console.log(String([function(){console.log('hello')}])) // function(){console.log('hello')}
// console.log(String([()=>{console.log('hello')}])) // ()=>{console.log('hello')}

// value => string => number
// console.log(Number([""])) // 0
// console.log(Number(["  "])) // 0
// console.log(Number(["  a  "])) // NaN
// console.log(Number(["a", "b", "c"])) // NaN
// console.log(Number(["  1  "])) // 1
// console.log(Number(["1"])) // 1
// console.log(Number(["1", "2", "3"])) // NaN
// console.log(Number(["a1"])) // NaN
// console.log(Number([1])) // 1
// console.log(Number([0])) // 0
// console.log(Number([1, 2, 3])) // NaN
// console.log(Number([true])) // NaN
// console.log(Number([false])) // NaN
// console.log(Number([null])) // 0
// console.log(Number([undefined])) // 0
// console.log(Number([NaN])) // NaN
// console.log(Number([Infinity])) // Infinity
// console.log(Number([-Infinity])) // -Infinity
// console.log(Number([null, undefined])) // NaN
// console.log(Number([0, null, undefined])) // NaN
// console.log(Number([null, undefined, 0])) // NaN
// console.log(Number([1, "1", true, NaN, Infinity, -Infinity, undefined, null])) // NaN
// console.log(Number([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]])) // NaN
// console.log(Number([{}])) // NaN
// console.log(Number([function(){console.log('hello')}])) // NaN
// console.log(Number([()=>{console.log('hello')}])) // NaN

// Какое бы значение не было, всегда будет true
// console.log(Boolean([""])) // true
// console.log(Boolean(["  "])) // true
// console.log(Boolean(["  a  "])) // true
// console.log(Boolean(["a", "b", "c"])) // true
// console.log(Boolean(["  1  "])) // true
// console.log(Boolean(["1"])) // true
// console.log(Boolean(["1", "2", "3"])) // true
// console.log(Boolean(["a1"])) // true
// console.log(Boolean([1])) // true
// console.log(Boolean([0])) // true
// console.log(Boolean([1, 2, 3])) // true
// console.log(Boolean([true])) // true
// console.log(Boolean([false])) // true
// console.log(Boolean([null])) // true
// console.log(Boolean([undefined])) // true
// console.log(Boolean([NaN])) // true
// console.log(Boolean([Infinity])) // true
// console.log(Boolean([-Infinity])) // true
// console.log(Boolean([null, undefined])) // true
// console.log(Boolean([0, null, undefined])) // true
// console.log(Boolean([null, undefined, 0])) // true
// console.log(Boolean([1, "1", true, NaN, Infinity, -Infinity, undefined, null])) // true
// console.log(Boolean([1, ["1", [true, [NaN, [Infinity, [-Infinity, [undefined, [null]]]]]]]])) // true
// console.log(Boolean([{}])) // true
// console.log(Boolean([function(){console.log('hello')}])) // true
// console.log(Boolean([()=>{console.log('hello')}])) // true
