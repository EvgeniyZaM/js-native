// Array:
const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: '2', name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// // Преобразовать все id в числа, поменять всем isOnline на false, добавить всем фамилии и всем прибавить + 10 к возрасту
// console.log(people.map(p => {
//    return { ...p, id: +p.id, isOnline: false, surName: 'Ivanov', age: p.age + 10 }
// }))

// // Поменять isOnline на true конкретному объекту, который пройдет определенное условие
// console.log(people.map(p => p.id === 3
//    ? { ...p, isOnline: true }
//    : p
// ))


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
      { id: '2', title: 'Milk', isDone: false },
   ],
}

// // Преобразовать все id в числа, поменять всем isOnline на false и добавить всем новое свойство filter: 'all'
// console.log({
//    ...tasks, [todolistID_2]: tasks[todolistID_2].map(t => {
//       return { id: +t.id, isDone: false, filter: 'all' }
//    })
// })

// // Поменять isOnline на true конкретному объекту, который пройдет определенное условие
// console.log({
//    ...tasks, [todolistID_2]: tasks[todolistID_2].map(t => t.id === 2
//       ? { ...t, isDone: true }
//       : t
//    )
// })