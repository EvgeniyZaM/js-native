const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Отсортировать по именам
const sortedName = [...people].sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(sortedName)

// Отсортировать по возрасту
const sortedAge = [...people].sort((a, b) => a.age - b.age)
// console.log(sortedAge)

// Отсортировать имена, от самого короткого
const sortedString = [...people].sort((a, b) => a.name.length - b.name.length)
// console.log(sortedString)