// Array:
const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: '2', name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Удалить объект, который не пройдет определенное условие
console.log(people.filter(p => p.id !== 5))

// AssociativeArray:
const todolistID_1 = 1
const todolistID_2 = 2

const tasks = {
   [todolistID_1]: [
      { id: 1, title: 'HTML&CSS', isDone: true },
      { id: 2, title: 'JS', isDone: true },
      { id: 3, title: 'ReactJS', isDone: false },
   ],
   [todolistID_2]: [
      { id: 1, title: 'Book', isDone: true },
      { id: 2, title: 'Milk', isDone: false },
   ],
}

// Удалить объект, который не пройдет определенное условие
console.log({ ...tasks, [todolistID_2]: tasks[todolistID_2].filter(t => t.id !== 2) })