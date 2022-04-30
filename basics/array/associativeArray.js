const todolistId1 = 1
const todolistId2 = 2

const tasks = {
   [todolistId1]: [
      { id: 1, title: 'HTML', isDone: true },
      { id: 2, title: 'JS', isDone: true },
      { id: 3, title: 'ReactJS', isDone: false },
   ],
   [todolistId2]: [
      { id: 1, title: 'Book', isDone: false },
      { id: 2, title: 'Milk', isDone: true },
   ],
}

const addTodolist = (tasks) => {
   const todolistId3 = 3
   return { ...tasks, [todolistId3]: [] }
}
// console.log(addTodolist(tasks))

const addTask = (tasks) => {
   const newTask = { id: 4, title: 'Rest API', isDone: false }
   return { ...tasks, [todolistId1]: [...tasks[todolistId1], newTask] }
}
// console.log(addTask(tasks))

const removeTask = (tasks) => {
   return { ...tasks, [todolistId2]: tasks[todolistId2].filter(t => t.id !== 2) }
}
// console.log(removeTask(tasks))

const changeIsDone = (tasks) => {
   return {
      ...tasks, [todolistId2]: tasks[todolistId2].map(t => t.id === 1
         ? { ...t, isDone: true }
         : t
      )
   }
}
// console.log(changeIsDone(tasks))

const changeTitle = (tasks) => {
   return {
      ...tasks, [todolistId1]: tasks[todolistId1].map(t => t.id === 1
         ? { ...t, title: t.title + '&CSS' }
         : t
      )
   }
}
// console.log(changeTitle(tasks))

const addAllToIsActive = (tasks) => {
   return {
      ...tasks, [todolistId2]: tasks[todolistId2].map(t => {
         return { ...t, isActive: true }
      })
   }
}
// console.log(addAllToIsActive(tasks))

const sortedTitle = (tasks) => {
   return { ...tasks, [todolistId1]: [...tasks[[todolistId1]]].sort((a, b) => a.title < b.title ? 1 : -1) } // Сортировка по алфафиту ( В обратном порядке!! )
}
// console.log(sortedTitle(tasks))

const sortedId = (tasks) => {
   return { ...tasks, [todolistId1]: [...tasks[todolistId1]].sort((a, b) => b.id - a.id) } // Сортировка от большего id, к меньшему
}
// console.log(sortedId(tasks))