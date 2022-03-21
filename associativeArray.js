// // Array
// const tasks = [
//    { id: 1, title: 'HTML&CSS', isDone: true },
//    { id: 2, title: 'JS/ES6', isDone: true },
//    { id: 3, title: 'React', isDone: true },
//    { id: 4, title: 'RestAPI', isDone: false },
//    { id: 5, title: 'GraphQL', isDone: false },
// ]

// const addTask = (tasks) => {
//    const task = { id: 6, title: 'MongoDB', isDone: false }
//    const newTasks = [...tasks, task]
//    return newTasks
// }
// addTask(tasks)

// const removeTask = (tasks) => {
//    const filteredTasks = tasks.filter(t => t.id !== 5)
//    return filteredTasks
// }
// removeTask(tasks)

// const changeStatus = (tasks) => {
//    const task = tasks.find(t => t.id === 4)
//    if (task) {
//       task.isDone = true
//    }
//    return tasks
// }
// changeStatus(tasks)

// associativeArray
const todolistId1 = 1
const todolistId2 = 2

const todolists = [
   { id: todolistId1, title: 'What to learn', filter: 'all' },
   { id: todolistId2, title: 'What to buy', filter: 'active' }
]

const tasksAll = {
   [todolistId1]: [
      { id: 1, title: 'HTML&CSS', isDone: true },
      { id: 2, title: 'JS', isDone: true },
      { id: 3, title: 'ReactJS', isDone: false },
      { id: 4, title: 'Rest API', isDone: false },
      { id: 5, title: 'GraphQL', isDone: false },
   ],
   [todolistId2]: [
      { id: 1, title: 'Book', isDone: false },
      { id: 2, title: 'Milk', isDone: true },
   ],
}

const addTask = (tasksAll) => {
   const task = { id: 3, title: 'Apple', isDone: false }
   const tasks = tasksAll[todolistId2]
   const newTasks = [...tasks, task]
   tasksAll[todolistId2] = newTasks
}
addTask(tasksAll)

const removeTask = (tasksAll) => {
   const tasks = tasksAll[todolistId2]
   const filteredTasks = tasks.filter(t => t.id !== 3)
   tasksAll[todolistId2] = filteredTasks
}
removeTask(tasksAll)

const changeStatus = (tasksAll) => {
   const tasks = tasksAll[todolistId2]
   const task = tasks.find(t => t.id === 1)
   if (task) {
      task.isDone = true
   }
}
changeStatus(tasksAll)

const changeFilter = (todolists) => {
   const todolist = todolists.find(tl => tl.id === todolistId2)
   if (todolist) {
      todolist.filter = 'completed'
   }
}
changeFilter(todolists)

const removeTodolist = (todolists) => {
   const filteredTodolists = todolists.filter(tl => tl.id !== todolistId1)
   delete tasksAll[todolistId1]
   return filteredTodolists
}
removeTodolist(todolists)

console.log(todolists)
console.log(tasksAll)