const people = [
   { id: 1, name: 'Evgeniy', age: '22', isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Найти человека с именем 'Kirill'
const findKirill = people.find((p) => p.name === 'Kirill')
// console.log(findKirill) // {id: 3, name: 'Kirill', age: 18, isOnline: false}

// Найти индекс элемента с именем 'Kirill'
const findIndexKirill = people.findIndex((p) => p.name === 'Kirill')
// console.log(findIndexKirill) // 2