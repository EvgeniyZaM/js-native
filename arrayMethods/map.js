const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: '2', name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// // Преобразовать все значения в числа
// console.log(people.map(p => {
//    return { ...p, id: +p.id }
// }))

// // Изменить всем isOnline на false и всем прибавить + 10 к возрасту
// console.log(people.map(p => {
//    return { ...p, isOnline: false, age: p.age += 10 }
// }))

// // Изменить isOnline на true конкретному человеку
// console.log(people.map(p => p.id === 3
//    ? { ...p, isOnline: true }
//    : p
// ))

// // Добавить всем фамилию
// console.log(people.map(p => {
//    return { ...p, surName: 'Ivanov' }
// }))

// associativeArray
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

// Изменить isDone на true конкретной таски
console.log({
   ...tasks, [todolistID_2]: tasks[todolistID_2].map(t => t.id === 2
      ? { ...t, isDone: true }
      : t
   )
})