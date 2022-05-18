const a = 1
const b = 2

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a === b)
console.log(a != b)
console.log(a !== b)

// Все операторы сравнения возвращают значение логического типа:
console.log(2 > 1) // true
console.log(2 == 1) // false

// При сравнении значений разных типов JavaScript приводит каждое из них к числу:
console.log('2' > 1) // true (строка '2' становится числом 2)
console.log('01' == 1) // true (строка '01' становится числом 1)
console.log(true == 1) // true
console.log(false == 0) // true

// Оператор == сравнивает по значению
// Оператор === сравнивает по значению и по типу
console.log(0 == false) // true (Т.к. == сравнивает по значению)
console.log(0 === false) // false (Т.к. === сравнивает по значению и по типу)

// ## ВАЖНО!!! Сравнение null и undefined особое!
// ## Эти значения равны друг другу и не равны НИКАКИМ другим значениям. 
// Это специальное правило языка!

// Равны себе
console.log(undefined == undefined) // true
console.log(undefined === undefined) // true
console.log(null == null) // true
console.log(null === null) // true

// Равны друг-другу ТОЛЬКО при нестрогом сравнении! Т.к. различны их типы!
console.log(null === undefined) // false
console.log(null == undefined) // true

// Значение undefined несравнимо с другими значениями:
console.log(undefined > 0) // false
console.log(undefined === 0) // false
console.log(undefined == 0) // false

// Значение null больше или равно 0 и меньше или равно 0. Но если сравнивать с 0, оно будет false!
console.log(null >= 0) // true!
console.log(null <= 0) // true!
console.log(null === 0) // false
console.log(null == 0) // false

// Чтобы определить, что одна строка больше другой, JavaScript использует «алфавитный» порядок:

console.log('Андрей' > 'Борис') // false (Т.к. буква 'Б' в алфавите идет после буквы 'А')
console.log('Сонный' > 'Сон') // true (Т.к. первый 3 буквы одинаковые, а в первом слове больше букв) 
console.log('ярослав' > 'Андрей') // true (Т.к. маленькая буква больше чем большая)