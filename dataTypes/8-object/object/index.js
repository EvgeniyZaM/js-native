const obj = {name: "Evgeniy", age: 23, isOnline: true}

// Object.keys (возвращает массив ключей)
console.log(Object.keys(obj)) // [ 'name', 'age', 'isOnline' ]

// Object.values (возвращает массив значений)
console.log(Object.values(obj)) // [ 'Evgeniy', 23, true ]

// Object.entries (возвращает массив пар [ключ, значение])
console.log(Object.entries(obj)) // [ [ 'name', 'Evgeniy' ], [ 'age', 23 ], [ 'isOnline', true ] ]

// Object.fromEntries (преобразовывает массив пар [ключ, значение] в объект)
console.log(Object.fromEntries([["name", "Evgeniy"], ["age", 46], ["isOnline", true]])) // { name: 'Evgeniy', age: 46, isOnline: true }

// Пример использования Object.entries и Object.fromEntries:
const obj2 = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => {
    return key === "age" ? [key, value * 2] : [key, value]
  })
)
console.log(obj2) // { name: 'Evgeniy', age: 46, isOnline: true }

// Для перебора:
for (let value of Object.values(obj)) {
  // console.log(value) // значения
}

for (let key of Object.keys(obj)) {
  // console.log(key) // ключи
}

for (let [key, value] of Object.entries(obj)) {
  // console.log(value) // значения
  // console.log(key) // ключи
  // console.log(value[0]) // ключи (без деструктуризации)
  // console.log(value[1]) // значения (без деструктуризации)
}

// Object.assign (поверхностно копирует объекты)
const obj3 = {}
Object.assign(obj3, obj)
const obj4 = Object.assign({}, obj)

// Object.freeze (возвращает поверхностно замороженный объект. После чего объекту нельзя добавлять свойства, изменять, удалять)
Object.freeze(obj)
obj.isMarried = false // нельзя
obj.isOnline = false // нельзя
delete obj.isOnline // нельзя

// Object.is (сравнивает 2 переданных аргумента примерно как ===, но более надежен в двух особых ситуациях)
// console.log(Object.is(NaN, NaN)) // true (при использовании === будет false)
// console.log(Object.is(0, -0)) // false (при использовании === будет true)
// Во всех других случаях Object.is идентичен ===

// Object.hasOwn (проверяет, есть ли указанное свойство у объекта)
const obj5 = {
  name: "Grisha"
}
// console.log(Object.hasOwn(obj5, "name")) // true
// console.log(Object.hasOwn(obj5, "name1")) // false
