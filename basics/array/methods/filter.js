const people = [
   { id: 1, name: 'Evgeniy', age: '22', isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Удалить элемент из массива
const removePeople = people.filter((p) => p.id !== 3)
// console.log(removePeople)

// Оставить элементы только с четными id
const evenNumbers = people.filter((p) => p.id % 2 === 0)
// console.log(evenNumbers)