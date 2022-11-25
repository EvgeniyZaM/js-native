// Операторы сравнения
// Все операторы сравнения возвращают boolean значение
// При сравнении разных типов данных - происходит преобразование в число, кроме === и !==
// Специальное правило языка - при нестрогом null и undefined равны друг другу и не равны никаким другим значениям
// Любое сравнение с NaN возвращает false
// Любое сравнение с undefined возвращает false, кроме null == undefined

// > (больше)
// console.log(null > 0) // false
// console.log(0 > false) // false
// console.log(1 > true) // false
// console.log(0 > "0") // false
// console.log(0 > "") // false
// console.log(0 > "   ") // false
// console.log(null > undefined) // false

// >= (больше или равное)
// console.log(null >= 0) // true
// console.log(0 >= false) // true
// console.log(1 >= true) // true
// console.log(0 >= "0") // true
// console.log(0 >= "") // true
// console.log(0 >= "   ") // true
// console.log(null >= undefined) // false

// > (меньше)
// console.log(null < 0) // false
// console.log(0 < false) // false
// console.log(1 < true) // false
// console.log(0 < "0") // false
// console.log(0 < "") // false
// console.log(0 < "   ") // false
// console.log(null < undefined) // false

// <= (меньше или равное)
// console.log(null <= 0) // true
// console.log(0 <= false) // true
// console.log(1 <= true) // true
// console.log(0 <= "0") // true
// console.log(0 <= "") // true
// console.log(0 <= "   ") // true
// console.log(null >= undefined) // false

// == (равенство)
// Сравнивает только по значению

// console.log(null == 0) // false
// console.log(0 == false) // true
// console.log(1 == true) // true
// console.log(0 == "0") // true
// console.log(0 == "") // true
// console.log(0 == "   ") // true
// console.log(null == undefined) // true

// === (строгое равенство)
// Сравнивает по значению и по типу. Если типы разные - в любом случае возвращается false

// console.log(null === 0) // false
// console.log(0 === false) // false
// console.log(1 === true) // false
// console.log(0 === "0") // false
// console.log(0 === "") // false
// console.log(0 === "   ") // false
// console.log(null === undefined) // false

// Сравнение строк:
// ...
