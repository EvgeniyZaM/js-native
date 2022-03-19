// destructuring:

const person = {
   myName: 'Olga',
   age: 32,
   info: {
      width: 100,
      height: 200,
      isMarried: false,
   },
   friends: [
      { name: 'Igor', isOnline: false },
      { name: 'Maria', isOnline: true },
      { name: 'Diana', isOnline: true },
   ],
}

const { myName: newName, age } = person
console.log(newName) // Olga
console.log(age) // 32

const { width, ...other } = person.info
console.log(width) // 100
console.log(other) // {height: 200, isMarried: false}

// destructuring Array:
const [, , elThree] = person.friends
console.log(elThree) // {name: 'Diana', isOnline: true}

const { name, isOnline } = person.friends[0]
console.log(name) // Igor
console.log(isOnline) // false