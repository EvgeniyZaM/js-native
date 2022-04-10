const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

//  every - возвращает true, если все элементы массива соответствуют условию.
// И false, если хоть один элемент не соответствует условию
console.log(people.every(p => p.id === 2 ? p.name === 'Igor' : p)) // true

// some - возвращает true, если хотя бы 1 элемент массива соответствуют условию.
// И false, если не один элемент не соответствует условию
console.log(people.some(p => p.name === 'Igor')) // true