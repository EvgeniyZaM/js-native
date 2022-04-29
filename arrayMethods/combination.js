const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

// Массив из трех элементов, с самым большим возрастом
const topLargeAge = people.map(p => ({ ...p })).sort((a, b) => b.age - a.age).splice(0, 3)
// console.log(topLargeAge)

// Добавить каждому человеку свойство 'friends', значением которого является массив имен всех остальных людей из массива,
// за искоючением собственного имени. Т.е. в друзьях у Евгения, Евгения быть не должно.
const addFriends = people.map(p => {
   return { ...p, friends: people.map(p => p.name).filter(n => n !== p.name) }
})
// console.log(addFriends)