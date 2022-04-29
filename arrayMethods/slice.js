const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Скопировать все элементы
const newArr = people.slice()
// console.log(newArr) // 5 el

// Скопировать все элементы после индекста 1
const newArr2 = people.slice(1)
// console.log(mewArr) // el

// Отсчитать первый 1 элемент, скопировать 2!! последующий
const newArr3 = people.slice(1, 3)
console.log(newArr3) // 2 el