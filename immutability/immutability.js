const people = [
   { id: 1, name: 'Evgeniy', age: 22, isOnline: true },
   { id: 2, name: 'Igor', age: 25, isOnline: true },
   { id: 3, name: 'Kirill', age: 18, isOnline: false },
   { id: 4, name: 'Mihail', age: 32, isOnline: false },
   { id: 5, name: 'Oleg', age: 41, isOnline: false },
]

const addPeople = (people) => {
   const newPeople = { id: 6, name: 'Maria', age: 18, isOnline: true }
   return [...people, newPeople]
}
// console.log(addPeople(people))

const removePeople = () => {
   return people.filter(p => p.id !== 3)
}
// console.log(removePeople(people))

const changeIsOnline = (people) => {
   return people.map(p => p.id === 4
      ? { ...p, isOnline: true }
      : p
   )
}
// console.log(changeIsOnline(people))

const addToAge = (people) => {
   return people.map(p => p.id === 1
      ? { ...p, age: p.age + 1 }
      : p
   )
}
// console.log(addedToAge(people))

const addAllSurName = (people) => {
   return people.map(p => {
      return { ...p, surname: 'Ivanov' }
   })
}
// console.log(addAllSurName(people))