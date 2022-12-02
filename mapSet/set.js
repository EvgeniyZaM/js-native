// Set - это особый вид коллекции: «множество» значений (без ключей), где каждое значение уникальное

// new Set(iterable) - создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set
const set = new Set()

// set.add(value) - добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set
let john = {name: "John"}
let pete = {name: "Pete"}
let mary = {name: "Mary"}
set.add(john)
set.add(pete)
set.add(mary)
set.add(john) // Не добавляет, т.к. такой объект уже есть
set.add(pete) // Не добавляет, т.к. такой объект уже есть
set.add(mary) // Не добавляет, т.к. такой объект уже есть
// console.log(set) // { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

// set.size - возвращает количество элементов в множестве
// console.log(set.size) // 3

// set.has(value) - возвращает true, если значение присутствует в множестве, иначе false
// console.log(set.has(mary)) // true

// set.delete(value) - удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false
const isDeleted = set.delete(mary)
const isDeleted2 = set.delete("1")
// console.log(isDeleted) // true
// console.log(isDeleted2) // false

// set.clear() - удаляет все имеющиеся значения
// set.clear()
// console.log(set) // {}

// Перебор объекта Set
for (let user of set) {
  // console.log(user.name) // значения
}

let set2 = new Set(["апельсин", "яблоко", "банан"])

for (let value of set2) {
  // console.log(value) // значения
}

set2.forEach((value, valueAgain, set) => {
  // console.log(value) // значения
  // console.log(valueAgain) // значения по 2 раза
  // console.log(set) // объекты Set
})

// set.keys() - возвращает перебираемый объект для значений
// console.log(set.keys()) // { { name: 'John' }, { name: 'Pete' } }

// set.values() - то же самое, что и set.keys(), присутствует для обратной совместимости с Map
// console.log(set.values()) // { { name: 'John' }, { name: 'Pete' } }

// set.entries() - возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map
// console.log(set.entries()) // [значение, значение]
