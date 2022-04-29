const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Отсчитать первые 5 элементов, удалить 0 последующих элементов и добавить новый объект
// const removed = people.splice(5, 0, { id: 6, name: 'Maria', age: 18, isOnline: true })
// console.log(removed) // Пустой массив, т.к. ничего не удалено

// Отсчитать первый 1 элемент, удалить 1 последующий элемент и вместо него добавить новый объект
// const removed = people.splice(1, 1, { id: 2, name: 'Maria', age: 18, isOnline: true },)
// console.log(removed) // // 1 удаленный элемент

// Отсчитать первые 4 элементов, удалить 1 последующий элемен
// const removed = people.splice(4, 1)
// console.log(removed) // 1 удаленный элемент

// Удалить все элементы после индекста 1
// const removed = people.splice(1)
// console.log(removed) // 4 удаленных элемента