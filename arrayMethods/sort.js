const names = ['Bob', 'Ted', 'Alex', 'Fred', 'bob', 'игорь', 'Юра']
console.log([...names].sort()) // ['Alex', 'Bob', 'Fred', 'Ted', 'bob', 'Юра', 'игорь']

const numbers = [1, 100, 0, 999, 33, 456, 321, 1111]
const compareFunc = (a, b) => {
   if (a <= b) {
      return -1
   } else {
      return 1
   }
}
console.log([...numbers].sort(compareFunc)) // [0, 1, 33, 100, 321, 456, 999, 1111]

// Короткая запись
console.log([...numbers].sort((a, b) => a - b)) // [0, 1, 33, 100, 321, 456, 999, 1111]
// ===============================================================================================================================================

const students = [
   { name: 'bob', age: 22, isMarried: true, scores: 95 },
   { name: 'Bob', age: 22, isMarried: true, scores: 95 },
   { name: 'Alex', age: 23, isMarried: true, scores: 89 },
   { name: 'Helge', age: 21, isMarried: true, scores: 89 },
   { name: 'Nick', age: 20, isMarried: false, scores: 120 },
   { name: 'John', age: 19, isMarried: false, scores: 121 },
   { name: 'alex', age: 23, isMarried: true, scores: 89 },
]

console.log([...students].sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))
console.log([...students].sort((a, b) => a.age - b.age))

// ===============================================================================================================================================
// bubble sort:
const numbers2 = [1, 100, 0, 999, 33, 456, 321, 1111]

for (let j = 0; j < numbers2.length - 1; j++) {
   for (let i = 0; i < numbers2.length - 1 - j; i++) {
      if (numbers2[i] > numbers2[i + 1]) {
         let temp = numbers2[i + 1]
         numbers2[i + 1] = numbers2[i]
         numbers2[i] = temp
      }
   }
}
console.log(numbers2) // [0, 1, 33, 100, 321, 456, 999, 1111]