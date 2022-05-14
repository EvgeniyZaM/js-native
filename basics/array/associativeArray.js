const todoListId1 = '16rt-54ty'
const todoListId2 = '26tn-45bk'

const tasks = {
   [todoListId1]: [
      { id: 1, title: 'HTML', isDone: true },
      { id: 2, title: 'JS', isDone: true },
      { id: 3, title: 'ReactJS', isDone: false },
   ],
   [todoListId2]: [
      { id: 1, title: 'Book', isDone: false },
      { id: 2, title: 'Milk', isDone: true },
   ],
}

const addTodoList = (tasks) => {
   const todoListId3 = 3
   return { ...tasks, [todoListId3]: [] }
}
// console.log(addTodoList(tasks))

const addTask = (tasks) => {
   const newTask = { id: 4, title: 'Rest API', isDone: false }
   return { ...tasks, [todoListId1]: [...tasks[todoListId1], newTask] }
}
// console.log(addTask(tasks))

const removeTask = (tasks) => {
   return { ...tasks, [todoListId2]: tasks[todoListId2].filter(t => t.id !== 2) }
}
// console.log(removeTask(tasks))

const changeIsDone = (tasks) => {
   return {
      ...tasks, [todoListId2]: tasks[todoListId2].map(t => t.id === 1
         ? { ...t, isDone: true }
         : t
      )
   }
}
// console.log(changeIsDone(tasks))

const changeTitle = (tasks) => {
   return {
      ...tasks, [todoListId1]: tasks[todoListId1].map(t => t.id === 1
         ? { ...t, title: t.title + '&CSS' }
         : t
      )
   }
}
// console.log(changeTitle(tasks))

const addAllToIsActive = (tasks) => {
   return {
      ...tasks, [todoListId2]: tasks[todoListId2].map(t => {
         return { ...t, isActive: true }
      })
   }
}
// console.log(addAllToIsActive(tasks))

const sortedTitle = (tasks) => {
   return { ...tasks, [todoListId1]: [...tasks[[todoListId1]]].sort((a, b) => a.title < b.title ? 1 : -1) } // Сортировка по алфавиту ( В обратном порядке!! )
}
// console.log(sortedTitle(tasks))

const sortedId = (tasks) => {
   return { ...tasks, [todoListId1]: [...tasks[todoListId1]].sort((a, b) => b.id - a.id) } // Сортировка от большего id, к меньшему
}
// console.log(sortedId(tasks))