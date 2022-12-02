// Map - это коллекция ключ/значения, как и объект. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
// Не приводит ключи к строкам, в отличие от обычного объекта

const obj = {name: "Evgeny", age: 23}

// new Map() создает коллекцию
const map = new Map([
  ["огурец", 500],
  ["лук", 340]
])

// map.set(key, value) (записывает по ключу key значение value)
map
  .set("1", "value1") // Цепочка вызовов
  .set(1, "value2")
  .set(true, "value3")
  .set(null, "value4")
  .set(undefined, "value5")
  .set(Infinity, "value6")
  .set(-Infinity, "value7")
  .set(NaN, "value8")
  .set(obj, "value9") // В качестве ключа может быть объект

// map.get(key) (возвращает значение по ключу или undefined, если ключ key отсутствует)
// console.log(map.get("1")) // value1
// console.log(map.get(1)) // value2
// console.log(map.get(true)) // value3
// console.log(map.get(null)) // value4
// console.log(map.get(undefined)) // value5
// console.log(map.get(Infinity)) // value6
// console.log(map.get(-Infinity)) // value7
// console.log(map.get(NaN)) // value8
// console.log(map.get(obj)) // value9

// map.size (возвращает текущее количество элементов)
// console.log(map.size) // 11

// map.has(key) - возвращает true, если ключ key присутствует в коллекции, иначе false
// console.log(map.has(obj)) // true
// console.log(map.has("2")) // false

// map.delete(key) - удаляет элемент (пару «ключ/значение») по ключу key
// map.delete(obj)
// console.log(map.has(obj)) // false

// map.clear() - очищает коллекцию от всех элементов.
// map.clear()
// console.log(map) // {}

// map.keys() - возвращает итерируемый объект по ключам
// console.log(map.keys()) // ключи

// map.values() - возвращает итерируемый объект по значениям
// console.log(map.values()) // значения

// map.entries() - возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of
// console.log(map.entries()) // [ключ, значение]

// map.forEach(callback) - позволяет проитерироваться по Map
map.forEach((value, key, map) => {
  // console.log(value) // значения
  // console.log(key) // ключи
  // console.log(map) // map
})

for (let value of map.values()) {
  // console.log(value) // значения
}

for (let key of map.keys()) {
  // console.log(key) // ключи
}

for (let [key, value] of map) { // то же самое, что и recipeMap.entries()
  // console.log(key) // ключи
  // console.log(value) // значения
  // console.log(entry[0]) // ключи (без деструктуризации)
  // console.log(entry[1]) // значения (без деструктуризации)
}

// Получить Map из объекта:
let person = {name: "Evgeny", age: 23}
const map2 = new Map(Object.entries(person))
// console.log(map2) // { 'name' => 'Evgeny', 'age' => 23 }

// Получить объект из Map:
let person2 = new Map([
  ["name", "Evgeny"],
  ["age", 23]
])
const obj2 = Object.fromEntries(person2)
// console.log(obj2) // { name: 'Evgeny', age: 23 }
