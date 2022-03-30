const person = { name: 'Evgeniy', age: 22, isMarried: false }

const addIsOnline = (person) => {
   return { ...person, isOnline: true }
}
// console.log(addIsOnline(person))

const changeIsMarried = (person) => {
   return { ...person, isMarried: true }
}
// console.log(changeIsMarried(person))

const addToAge = (person) => {
   return { ...person, age: person.age + 1 }
}
// console.log(addToAge(person))