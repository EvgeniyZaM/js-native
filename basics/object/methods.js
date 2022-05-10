const person = {
  name: 'Evgeniy', age: 22,
  wife: { name: 'Maria', age: 18 }
}

// console.log(Object.is(person, { name: 'Mihail' })) // false 

Object.freeze(person)

person.name = 'test' // нельзя изменять!
person.isActive = true // нельзя изменять!
delete person.name // нельзя изменять!

person.wife.name = 'Diana' // Можно изменять!
person.wife.isActive = true  // Можно изменять!
delete person.wife.isActive // Можно изменять!

const copyPerson = Object.assign({}, person, { isMarried: false })
// console.log(copyPerson)

const keys = Object.keys(person)
// console.log(keys) // ['name', 'age', 'friends']

const values = Object.values(person)
// console.log(values)