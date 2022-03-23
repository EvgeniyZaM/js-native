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

// Добавить новый объект
const newTask = { id: 3, title: 'Apple', isDone: false }
console.log({ ...tasks, [todolistID_2]: [...tasks[todolistID_2], newTask] })