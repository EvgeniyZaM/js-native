// Object.is
// Сравнивает 2 переданных аргумента примерно как ===, но более надежен в двух особых ситуациях:
console.log(Object.is(NaN, NaN)) // true (при использовании === будет false)
console.log(Object.is(0, -0)) // true (при использовании === будет false)
// Во всех других случаях Object.is идентичен ===


// Object.entries
