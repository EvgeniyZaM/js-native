const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

const obj1 = { id: 5, name: 'Maria', age: 18, isOnline: true }
const obj2 = { id: 6, name: 'Diana', age: 18, isOnline: true }

const newArr = people.concat(obj1, obj2)
// console.log(newArr)