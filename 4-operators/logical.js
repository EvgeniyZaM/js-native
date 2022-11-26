// Если значение не логического типа, то оно к нему приводится

// ! (не)
// одно НЕ преобразует значение в логическое и возвращает обратное:
// console.log(!true) // false
// двойное НЕ используют для преобразования значений к логическому типу:
// console.log(!!true) // true
// console.log(!!!true) // false

// && (и)
// console.log(true && true && false && true) // false
// console.log(true && true && true && true) // последний true

// || (или)
// console.log(false || false || true || false) // true
// console.log(false || false || false || false) // последний false

// ?? (оператор нулевого слияния)
// Если значение не равное null или undefined, то вернется то, что перед ??, а иначе что после
// Запрещено использовать вместе с || или && без скобок
// console.log(undefined ?? "1") // "1"
// console.log(null ?? "2") // "2"
// console.log("3" ?? "4") // "3"

// показывает первое значение, которое определено:
// console.log(null ?? undefined ?? "Суперкодер" ?? "Аноним") // Суперкодер
