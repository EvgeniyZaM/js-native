// destructuring:

const person = {
   myName: 'Olga', age: 32, isActive: undefined,
   info: { width: 100, height: 200, isMarried: false },
   friends: [
      { name: 'Igor', isOnline: false },
      { name: 'Maria', isOnline: true },
      { name: 'Diana', isOnline: true },
   ],
}

const { myName: newName, age, isActive = true } = person
// console.log(newName) // Olga
// console.log(age) // 32
// console.log(isActive) // true

const { width, ...other } = person.info
// console.log(width) // 100
// console.log(other) // {height: 200, isMarried: false}

// destructuring Array:
const [, , elThree] = person.friends
// console.log(elThree) // {name: 'Diana', isOnline: true}

const { name, isOnline } = person.friends[0]
// console.log(name) // Igor
// console.log(isOnline) // false

// destructuring Function:
const exampleDestructuring = ({ myName, age, isActive = false }) => {
   // console.log(myName, age, isActive) // Olga 32 false
}
exampleDestructuring(person)

// Обмен значений между переменными
let a = 1
let b = 2; // Должна быть точка с запятой

[a, b] = [b, a]

// console.log(a) // 2
// console.log(b) // 1