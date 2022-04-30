// destructuring:

const person = {
   myName: 'Olga', age: 32,
   info: { width: 100, height: 200, isMarried: false },
   friends: [
      { name: 'Igor', isOnline: false },
      { name: 'Maria', isOnline: true },
      { name: 'Diana', isOnline: true },
   ],
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]

const exampleSpread = [...arr1, ...arr2]
console.log(exampleSpread) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]