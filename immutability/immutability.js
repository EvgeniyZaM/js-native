const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Добавить новый объект в массив
const newPeople = { id: 6, name: 'Maria', age: 18, isOnline: true }
const addPeople = [...people, newPeople]
// console.log(addPeople)

// Удалить элемент из массива
const removePeople = people.filter(p => p.id !== 3)
// console.log(removePeople)

// Изменить свойство isOnline на true конкретному элементу
const changeIsOnline = people.map(p => p.id === 4
   ? { ...p, isOnline: true }
   : p
)
// console.log(changeIsOnline)

// Прибавить +1 к возрасту конкретному элементу
const addToAge = people.map(p => p.id === 1
   ? { ...p, age: p.age + 1 }
   : p
)
// console.log(addToAge)

// Добавить всем элементам новое свойство
const addAllSurName = people.map(p => {
   return { ...p, surname: 'Ivanov' }
})
// console.log(addAllSurName)

const sortedName = [...people].sort((a, b) => a.name < b.name ? 1 : -1) // Сортировка по алфафиту ( В обратном порядке!! )
// console.log(sortedName)

const sortedAge = [...people].sort((a, b) => a.age - b.age) // Сортировка от наименьшего возраста, к большему
// console.log(sortedAge)

// Массив из трех элементов, с самым большим возрастом
const topLargeAge = people.map(p => ({ ...p })).sort((a, b) => b.age - a.age).splice(0, 3)
// console.log(topLargeAge)

// Найти самаого старого человека
const oldUser = people.reduce((acc, p) => {
   return acc.age > p.age ? acc : p
}, [])
// console.log(oldUser)

// Вычислить единое число из возраста всех элементов
const singleNumber = people.reduce((acc, p) => {
   return acc.age > p.age ? acc : p
}, 0)
// console.log(singleNumber)

// Добавить каждому человеку свойство 'friends', значением которого является массив имен всех остальных людей из массива,
// за искоючением собственного имени. Т.е. в друзьях у Евгения, Евгения быть не должно.
const addFriends = people.map(p => {
   return { ...p, friends: people.map(p => p.name).filter(n => n !== p.name) }
})
// console.log(addFriends)