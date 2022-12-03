// Варианты объявления переменных и присвоения им значений:

// Вариант 1:
var a = 1
let b = 2
const c = 3
// console.log(a, b, c) // 1 2 3

// Вариант 2:
var a2 = 1, a3 = 2, a4 = 3
let b2 = 1, b3 = 2, b4 = 3
const c2 = 1, c3 = 2, c4 = 3
// console.log(a2, a3, a4) // 1 2 3
// console.log(b2, b3, b4) // 1 2 3
// console.log(c2, c3, c4) // 1 2 3

// Вариант 3:
var a5
let b5
// const c5 // Error
a5 = 1
b5 = 2
// console.log(a5, b5) // 1 2

// Объявленная переменная без присвоенного значения:
var a6
let b6
// const c6 // Error
// console.log(a6, b6) // undefined undefined

// Повторное обьявление переменной:
var a7 = 1
let b7 = 2
const c7 = 3

var a7 = -1
// let b7 = -2 // Error
// const c7 = -3 // Error
// console.log(a7) // -1

// Изменение значения переменной
var a8 = 1
let b8 = 2
const c8 = 3

a8 = -1
b8 = -2
// c8 = -3 // Error (нельзя изменять константу)
// console.log(a8) // -1
// console.log(b8) // -2

// копирование данных с одной переменной в другую
var a9 = 1
let b9 = 2
const c9 = 3

a9 = b9
b9 = c9
// c9 = a9 // Error (нельзя изменять константу)
// console.log(a9) // 2
// console.log(b9) // 3

// Объявление переменной без использования ключевого слова var, let, const:

// Без строгого режима:
a10 = 1
// console.log(a10) // 1

// В строгом режиме:
// "use strict"
// a11 = 1 // Error

// Имена переменных: (от ключевого слова не зависит)

// Нелатинские буквы разрешены, но не рекомендуются:
let имя
let 我

// Допустимые символы в переменных:
let _
let $

// Недопустимые символы в переменных:
// let `
// let ~
// let !
// let "
// let '
// let @
// let #
// let №
// let ;
// let %
// let ^
// let :
// let &
// let ?
// let *
// let (
// let )
// let -
// let +
// let -
// let \
// let |
// let /
// let {
// let }
// let ,
// let .
// let <
// let >

// Можно испольлзовать цифры, но нельзя использовать их в начале
// let 0m // Нельзя
// let 1m // Нельзя
// let 2m // Нельзя
// let 3m // Нельзя
// let 4m // Нельзя
// let 5m // Нельзя
// let 6m // Нельзя
// let 7m // Нельзя
// let 8m // Нельзя
// let 9m // Нельзя

let m0 // Можно
let m1 // Можно
let m2 // Можно
let m3 // Можно
let m4 // Можно
let m5 // Можно
let m6 // Можно
let m7 // Можно
let m8 // Можно
let m9 // Можно

// Одинаковые имена переменных, но с разным регистром - это разные переменные:
let register = 1
let REGISTER = 1
// console.log(register, REGISTER) // 1 1

// Зарезервированные слова:
// let break
// let case
// let class
// let catch
// let const
// let continue
// let debugger
// let default
// let delete
// let do
// let else
// let export
// let extends
// let finally
// let for
// let function
// let if
// let import
// let in
// let instanceof
// let new
// let return
// let super
// let switch
// let this
// let throw
// let try
// let typeof
// let var
// let void
// let while
// let with
// let enum
// let null
// let true
// let false
// let let
// let yield
// let await

// Зарезервированные слова в строгом режиме:
// "use strict"

// let implements
// let package
// let protected
// let static
// let interface
// let private
// let public
