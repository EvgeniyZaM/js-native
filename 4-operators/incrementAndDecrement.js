// ++ (инкремент)

// Постфиксная форма инкремента и декремента (возвращает старое значение)
let postfixIncrement = 10
let oldPostfixIncrement = postfixIncrement++
let postfixDecrement = 10
let oldPostfixDecrement = postfixDecrement--

// console.log(postfixIncrement) // 11 (новое значение)
// console.log(oldPostfixIncrement) // 10 (возвращает старое значение)
// console.log(postfixDecrement) // 9 (новое значение)
// console.log(oldPostfixDecrement) // 10 (возвращает старое значение)

// -- (декремент)

// Префиксная форма инкремента и декремента (возвращает новое значение)
let prefixIncrement = 10
let oldPrefixIncrement = ++prefixIncrement
let prefixDecrement = 10
let oldPrefixDecrement = --prefixDecrement

// console.log(prefixIncrement) // 11 (возвращает новое значение)
// console.log(oldPrefixIncrement) // 11 (возвращает новое значение)
// console.log(prefixDecrement) // 9 (возвращает новое значение)
// console.log(oldPrefixDecrement) // 9 (возвращает новое значение)

// Инкремент/декремент можно применить только к переменной:
// console.log(10++) // Error
// console.log(10--) // Error
// console.log(++10) // Error
// console.log(--10) // Error
