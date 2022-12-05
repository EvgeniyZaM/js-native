// toUpperCase (возвращает строку в верхнем регистре)
// toLowerCase (возвращает строку в нижнем регистре)
console.log("hello".toUpperCase()) // "HELLO"
console.log("hello".toUpperCase()[0]) // "H" (возвращает конкретный символ в верхнем регистре)
console.log("HELLO".toLowerCase()) // "hello"
console.log("HELLO".toLowerCase()[0]) // "h" (возвращает конкретный символ в нижнем регистре)

// trim (возвращает строку убирая пробелы в начале и конце строки)
// trimStart (возвращает  строку убирая пробелы в начале строки)
// trimEnd (возвращает строку убирая пробелы в конце строки)
console.log("   hello   ".trim()) // "hello"
console.log("   hello".trimStart()) // "hello"
console.log("hello   ".trimEnd()) // "hello"

// includes (ищет подстроку и возвращает boolean значение
// Можно начинать поиск от конкретного индекса, включая его самого
console.log("hello".includes("ll")) // true
console.log("hello".includes("lll")) // false
console.log("hello".includes("l", 3)) // true

// search (ищет подстроку и возвращает индекс первого символа найденной подстроки, если не находит подстроку то возвращает -1)
console.log("hello".search("ll")) // 2
console.log("hello".search("lll")) // -1

// indexOf(searchString, position) (ищет подстроку и возвращает индекс первого символа найденной подстроки, если не находит подстроку то возвращает -1)
// Можно начинать поиск от конкретного индекса, включая его самого
console.log("hello".indexOf("ll")) // 2
console.log("hello".indexOf("lll")) // -1
console.log("hello".indexOf("l", 3)) // 3

// lastIndexOf (ищет подстроку с конца и возвращает индекс первого символа найденной подстроки, если не находит подстроку то возвращает -1)
// Можно начинать поиск от конкретного индекса, включая его самого
console.log("hello".lastIndexOf("ll")) // 2
console.log("hello".lastIndexOf("lll")) // -1
console.log("hello".lastIndexOf("ll", 2)) // 2

// startsWith (проверяет, начинается ли строка с определенной подстроки и возвращает boolean значение)
// Можно начинать поиск от конкретного индекса, включая его самого
console.log("hello".startsWith("hel")) // true
console.log("hello".startsWith("el")) // false
console.log("hello".startsWith("el", 1)) // true

// endsWith (проверяет, заканчивается ли строка с определенной подстроки и возвращает boolean значение)
// Можно начинать поиск от конкретного индекса, включая его самого
console.log("hello".endsWith("lo")) // true
console.log("hello".endsWith("ll")) // false
console.log("hello".endsWith("o", 5)) // true

// slice (возвращает часть строки от стартового индекса, до конечного, не включая конечный)
console.log("hello".slice(1)) // ello
console.log("hello".slice(0, -1)) // hell
console.log("hello".slice(1, -1)) // ell

// substring (возвращает часть строки между стартовым индексом и конечным, не включая конечный)
console.log("hello".substring(2, 4))
console.log("hello".substring(4, 2)) // Если стартовый индекс больше конечного, то сработает так, как если бы аргументы были поменяны местами

// repeat (возвращает строку, повторяемую энное количество раз)
console.log("hello".repeat(3)) // hellohellohello

// concat (возвращает строку, объединенную с неограниченным количеством строк)
console.log("hello".concat("первая", "вторая", "третья")) // helloперваявтораятретья

// charAt (возвращает символ строки по указанному индексу. По умолчанию индекс 0)
console.log("hello".charAt()) // h
console.log("hello".charAt(0)) // h (аналог "hello"[0])
console.log("hello".charAt(-1)) // пустота, (с "hello"[-1] был бы undefined)

// padStart (возвращает заполненную в начале строку другой строкой так, что итоговая строка достигает заданной длины)
console.log("12345".padStart(5, "abcde")) // 12345
console.log("2345".padStart(5, "abcde")) // a2345
console.log("345".padStart(5, "abcde")) // ab345
console.log("45".padStart(5, "abcde")) // abc45
console.log("5".padStart(5, "abcde")) // abcd5
console.log("".padStart(5, "abcde")) // abcde

// padEnd (возвращает заполненную в конце строку другой строкой так, что итоговая строка достигает заданной длины)
console.log("12345".padEnd(5, "abcde")) // 12345
console.log("1234".padEnd(5, "abcde")) // 1234a
console.log("123".padEnd(5, "abcde")) // 123ab
console.log("12".padEnd(5, "abcde")) // 12abc
console.log("1".padEnd(5, "abcde")) // 1abcd
console.log("".padEnd(5, "abcde")) // abcde

// codePointAt(pos) (возвращает код для символа, находящегося на позиции)
console.log("a".codePointAt(0)) // 97
console.log("A".codePointAt(0)) // 65

// fromCodePoint(...codePoints) (создаёт символ по его коду)
console.log(String.fromCodePoint(97)) // a
console.log(String.fromCodePoint(65)) // A

// localeCompare (возвращает число, которое показывает, какая строка больше)
// Отрицательное число, если str меньше str2
// Положительное число, если str больше str2
// 0, если строки равны
console.log("a".localeCompare("a")) // 0
console.log("z".localeCompare("a")) // 1
console.log("a".localeCompare("z")) // -1

// split (преобразует строку в массив)
console.log("hello".split("")) // [ 'h', 'e', 'l', 'l', 'o' ]
console.log("!h!e!l!l!o!".split("!")) // ['',  'h', 'e', 'l', 'l', 'o', '' ] (можно использовать для удаления всех найденных подстрок)

// replaceAll (удаляет, либо заменяет все найденные подстроки и возвращает итоговый результат)
console.log("!h!e!l!l!o!".replaceAll("!", "")) // hello (удаление)
console.log("!h!e!l!l!o!".replaceAll("!", "?")) // ?h?e?l?l?o? (замена)

// replace (удаляет, либо заменяет первую найденную подстроку и возвращает итоговый результат)
console.log("hello!!".replace("!", "")) // hello!
console.log("hello!!".replace("!", "?")) // hello!?

// replace с регулярными выражениями:
// Удаление или замена всех найденных символов, кроме цифр и точки (место точки можно вставить любую подстроку)
console.log("1.,s!@№#$;%^:&?*()-_=+|/<>".replace(/[^.\d]/g, "!")) // 1.!!!!!!!!!!!!!!!!!!!!!!!!!! (замена на вопросительные знаки)
console.log("1.,s!@№#$;%^:&?*()-_=+|/<>".replace(/[^.\d]/g, "")) // 1. (удаление)
